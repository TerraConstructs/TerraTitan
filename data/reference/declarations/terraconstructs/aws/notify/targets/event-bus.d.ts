import { IEventBus } from "../event-bus";
import { IQueue } from "../queue";
import { IRule } from "../rule";
import { IRuleTarget, RuleTargetConfig } from "../target";
import * as iam from "../../iam";
/**
 * Configuration properties of an Event Bus event
 *
 * Cannot extend TargetBaseProps. Retry policy is not supported for Event bus targets.
 */
export interface EventBusProps {
    /**
     * Role to be used to publish the event
     *
     * @default a new role is created.
     */
    readonly role?: iam.IRole;
    /**
     * The SQS queue to be used as deadLetterQueue.
     * Check out the [considerations for using a dead-letter queue](https://docs.aws.amazon.com/eventbridge/latest/userguide/rule-dlq.html#dlq-considerations).
     *
     * The events not successfully delivered are automatically retried for a specified period of time,
     * depending on the retry policy of the target.
     * If an event is not delivered before all retry attempts are exhausted, it will be sent to the dead letter queue.
     *
     * @default - no dead-letter queue
     */
    readonly deadLetterQueue?: IQueue;
}
/**
 * Notify an existing Event Bus of an event
 */
export declare class EventBus implements IRuleTarget {
    private readonly eventBus;
    private readonly props;
    constructor(eventBus: IEventBus, props?: EventBusProps);
    bind(rule: IRule, _id?: string): RuleTargetConfig;
    private putEventStatement;
}
