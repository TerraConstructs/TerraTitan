import { RuleTargetInputProperties, RuleTargetInput } from "../input";
import { IRule } from "../rule";
import { IRuleTarget, RuleTargetConfig } from "../target";
import { TargetBaseProps } from "./util";
import * as logs from "../../cloudwatch";
/**
 * Options used when creating a target input template
 */
export interface LogGroupTargetInputOptions {
    /**
     * The timestamp that will appear in the CloudWatch Logs record
     *
     * @default EventField.time
     */
    readonly timestamp?: any;
    /**
     * The value provided here will be used in the Log "message" field.
     *
     * This field must be a string. If an object is passed (e.g. JSON data)
     * it will not throw an error, but the message that makes it to
     * CloudWatch logs will be incorrect. This is a likely scenario if
     * doing something like: EventField.fromPath('$.detail') since in most cases
     * the `detail` field contains JSON data.
     *
     * @default EventField.detailType
     */
    readonly message?: any;
}
/**
 * The input to send to the CloudWatch LogGroup target
 */
export declare abstract class LogGroupTargetInput {
    /**
     * Pass a JSON object to the the log group event target
     *
     * May contain strings returned by `EventField.from()` to substitute in parts of the
     * matched event.
     */
    static fromObject(options?: LogGroupTargetInputOptions): RuleTargetInput;
    /**
     * Return the input properties for this input object
     */
    abstract bind(rule: IRule): RuleTargetInputProperties;
}
/**
 * Customize the CloudWatch LogGroup Event Target
 */
export interface LogGroupProps extends TargetBaseProps {
    /**
     * The event to send to the CloudWatch LogGroup
     *
     * This will be the event logged into the CloudWatch LogGroup
     *
     * @default - the entire EventBridge event
     * @deprecated use logEvent instead
     */
    readonly event?: RuleTargetInput;
    /**
     * The event to send to the CloudWatch LogGroup
     *
     * This will be the event logged into the CloudWatch LogGroup
     *
     * @default - the entire EventBridge event
     */
    readonly logEvent?: LogGroupTargetInput;
}
/**
 * Use an AWS CloudWatch LogGroup as an event rule target.
 */
export declare class CloudWatchLogGroup implements IRuleTarget {
    private readonly logGroup;
    private readonly props;
    private target?;
    constructor(logGroup: logs.ILogGroup, props?: LogGroupProps);
    /**
     * Returns a RuleTarget that can be used to log an event into a CloudWatch LogGroup
     */
    bind(_rule: IRule, _id?: string): RuleTargetConfig;
    /**
     * Validate that the target event input template has the correct format.
     * The CloudWatchLogs target only supports a template with the format of:
     *   {"timestamp": <time>, "message": <message>}
     *
     * This is only needed if the deprecated `event` property is used.
     *
     * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html
     */
    private validateInputTemplate;
}
