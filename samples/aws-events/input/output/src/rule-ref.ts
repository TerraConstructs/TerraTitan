import { IAwsConstruct } from "../aws-construct";

export interface RuleOutputs {
  /**
   * Rule name
   */
  readonly name: string;

  /**
   * Rule arn
   */
  readonly arn: string;
}

export interface IRule extends IAwsConstruct {
  /** Strongly typed outputs */
  readonly ruleOutputs: RuleOutputs;
  /**
   * The value of the event rule Amazon Resource Name (ARN), such as
   * arn:aws:events:us-east-2:123456789012:rule/example.
   *
   * @attribute
   */
  readonly ruleArn: string;

  /**
   * The name event rule
   *
   * @attribute
   */
  readonly ruleName: string;
}
