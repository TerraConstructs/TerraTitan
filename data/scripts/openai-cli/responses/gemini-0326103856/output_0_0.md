```typescript
import { snsTopic, snsTopicPolicy } from "@cdktf/provider-aws";
import { Token } from "cdktf";
import * as constructs from "constructs";
import { Construct } from "constructs";
import { TopicPolicy } from "./policy";
import { ITopicSubscription } from "./subscriber";
import { Subscription } from "./subscription";
import { ArnFormat, AwsConstructBase, AwsConstructProps, AwsStack } from "..";
// TODO: Convert aws-codestarnotifications or assume it exists
// import * as notifications from '../../aws-codestarnotifications';
import * as iam from "../iam";

// Mock interface until codestarnotifications is converted/available
namespace notifications {
  export interface INotificationRuleTarget {
    bindAsNotificationRuleTarget(
      scope: constructs.Construct,
    ): NotificationRuleTargetConfig;
  }
  export interface NotificationRuleTargetConfig {
    readonly targetType: string;
    readonly targetAddress: string;
  }
}

/**
 * Represents an SNS topic
 */
export interface ITopic extends AwsConstructBase, notifications.INotificationRuleTarget {
  /**
   * The ARN of the topic
   *
   * @attribute
   */
  readonly topicArn: string;

  /**
   * The name of the topic
   *
   * @attribute
   */
  readonly topicName: string;

  /**
   * Enables content-based deduplication for FIFO topics.
   *
   * @attribute
   */
  readonly contentBasedDeduplication: boolean | Token;

  /**
   * Whether this topic is an Amazon SNS FIFO queue. If false, this is a standard topic.
   *
   * @attribute
   */
  readonly fifo: boolean | Token;

  /**
   * Subscribe some endpoint to this topic
   */
  addSubscription(subscription: ITopicSubscription): Subscription;

  /**
   * Adds a statement to the IAM resource policy associated with this topic.
   *
   * If this topic was created in this stack (`new Topic`), a topic policy
   * will be automatically created upon the first call to `addToResourcePolicy`. If
   * the topic is imported (`Topic.import`), then this is a no-op.
   */
  addToResourcePolicy(
    statement: iam.PolicyStatement,
  ): iam.AddToResourcePolicyResult;

  /**
   * Grant topic publishing permissions to the given identity
   */
  grantPublish(identity: iam.IGrantable): iam.Grant;

  /**
   * Grant topic subscribing permissions to the given identity
   */
  grantSubscribe(identity: iam.IGrantable): iam.Grant;
}

/**
 * Either a new or imported Topic
 */
export abstract class TopicBase extends AwsConstructBase implements ITopic {
  public abstract readonly topicArn: string;

  public abstract readonly topicName: string;

  public abstract readonly fifo: boolean | Token;

  public abstract readonly contentBasedDeduplication: boolean | Token;

  /**
   * Controls automatic creation of policy objects.
   *
   * Set by subclasses.
   */
  protected abstract readonly autoCreatePolicy: boolean;

  /**
   * Adds a statement to enforce encryption of data in transit when publishing to the topic.
   */
  protected enforceSSL?: boolean;

  private policy?: TopicPolicy;

  constructor(scope: Construct, id: string, props: AwsConstructProps = {}) {
    super(scope, id, props);

    this.node.addValidation({
      validate: () =>
        this.policy?.document.validateForResourcePolicy() ?? [],
    });
  }

  /**
   * Subscribe some endpoint to this topic
   */
  public addSubscription(topicSubscription: ITopicSubscription): Subscription {
    const subscriptionConfig = topicSubscription.bind(this);

    const scope = subscriptionConfig.subscriberScope || this;
    let id = subscriptionConfig.subscriberId;
    if (Token.isUnresolved(subscriptionConfig.subscriberId)) {
      id = this.nextTokenId(scope);
    }

    // We use the subscriber's id as the construct id. There's no meaning
    // to subscribing the same subscriber twice on the same topic.
    if (scope.node.tryFindChild(id)) {
      throw new Error(
        `A subscription with id "${id}" already exists under the scope ${scope.node.path}`,
      );
    }

    const subscription = new Subscription(scope, id, {
      topic: this,
      ...subscriptionConfig,
    });

    // Add dependency for the subscription, for example for SQS subscription
    // the queue policy has to deploy before the subscription is created
    if (subscriptionConfig.subscriptionDependency) {
      subscription.node.addDependency(subscriptionConfig.subscriptionDependency);
    }

    return subscription;
  }

  /**
   * Adds a statement to the IAM resource policy associated with this topic.
   *
   * If this topic was created in this stack (`new Topic`), a topic policy
   * will be automatically created upon the first call to `addToResourcePolicy`. If
   * the topic is imported (`Topic.import`), then this is a no-op.
   */
  public addToResourcePolicy(
    statement: iam.PolicyStatement,
  ): iam.AddToResourcePolicyResult {
    if (!this.policy && this.autoCreatePolicy) {
      this.policy = new TopicPolicy(this, "Policy", { topics: [this] });
    }

    if (this.policy) {
      this.policy.document.addStatements(statement);

      if (this.enforceSSL) {
        this.policy.document.addStatements(this.createSSLPolicyDocument());
      }
      return { statementAdded: true, policyDependable: this.policy };
    }
    return { statementAdded: false };
  }

  /**
   * Adds a statement to enforce encryption of data in transit when publishing to the topic.
   *
   * For more information, see https://docs.aws.amazon.com/sns/latest/dg/sns-security-best-practices.html#enforce-encryption-data-in-transit.
   */
  protected createSSLPolicyDocument(): iam.PolicyStatement {
    return new iam.PolicyStatement({
      sid: "AllowPublishThroughSSLOnly",
      actions: ["sns:Publish"],
      effect: iam.Effect.DENY,
      resources: [this.topicArn],
      condition: [
        {
          test: "Bool",
          variable: "aws:SecureTransport",
          values: ["false"],
        },
      ],
      principals: [new iam.StarPrincipal()],
    });
  }

  /**
   * Grant topic publishing permissions to the given identity
   */
  public grantPublish(grantee: iam.IGrantable) {
    return iam.Grant.addToPrincipalOrResource({
      grantee,
      actions: ["sns:Publish"],
      resourceArns: [this.topicArn],
      resource: this,
    });
  }

  /**
   * Grant topic subscribing permissions to the given identity
   */
  public grantSubscribe(grantee: iam.IGrantable) {
    return iam.Grant.addToPrincipalOrResource({
      grantee,
      actions: ["sns:Subscribe"],
      resourceArns: [this.topicArn],
      resource: this,
    });
  }

  /**
   * Represents a notification target
   * That allows SNS topic to associate with this rule target.
   */
  public bindAsNotificationRuleTarget(
    _scope: constructs.Construct,
  ): notifications.NotificationRuleTargetConfig {
    // SNS topic need to grant codestar-notifications service to publish
    // @see https://docs.aws.amazon.com/dtconsole/latest/userguide/set-up-sns.html
    this.grantPublish(
      new iam.ServicePrincipal("codestar-notifications.amazonaws.com"),
    );
    return {
      targetType: "SNS",
      targetAddress: this.topicArn,
    };
  }

  private nextTokenId(scope: Construct) {
    let nextSuffix = 1;
    const re = /TokenSubscription:([\d]*)/gm;
    // Search through the construct and all of its children
    // for previous subscriptions that match our regex pattern
    for (const source of scope.node.findAll()) {
      const m = re.exec(source.node.id); // Use regex to find a match
      if (m !== null) {
        // if we found a match
        const matchSuffix = parseInt(m[1], 10); // get the suffix for that match (as integer)
        if (matchSuffix >= nextSuffix) {
          // check if the match suffix is larger or equal to currently proposed suffix
          nextSuffix = matchSuffix + 1; // increment the suffix
        }
      }
    }
    return `TokenSubscription:${nextSuffix}`;
  }
}
```