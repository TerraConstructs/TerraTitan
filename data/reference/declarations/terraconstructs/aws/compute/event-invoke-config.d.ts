import { lambdaFunctionEventInvokeConfig } from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { AwsConstructBase, AwsConstructProps } from "..";
import { IFunction } from "./function-base";
import { IDestination } from "./function-destination";
import { Duration } from "../..";
/**
 * Options to add an EventInvokeConfig to a function.
 */
export interface EventInvokeConfigOptions extends AwsConstructProps {
    /**
     * The destination for failed invocations.
     *
     * Ensure the Lambda Function IAM Role has necessary permissions for the destination
     *
     * @default - no destination
     */
    readonly onFailure?: IDestination;
    /**
     * The destination for successful invocations.
     *
     * Ensure the Lambda Function IAM Role has necessary permissions for the destination
     *
     * @default - no destination
     */
    readonly onSuccess?: IDestination;
    /**
     * The maximum age of a request that Lambda sends to a function for
     * processing.
     *
     * Minimum: 60 seconds
     * Maximum: 6 hours
     *
     * @default Duration.hours(6)
     */
    readonly maxEventAge?: Duration;
    /**
     * The maximum number of times to retry when the function returns an error.
     *
     * Minimum: 0
     * Maximum: 2
     *
     * @default 2
     */
    readonly retryAttempts?: number;
}
/**
 * Properties for an EventInvokeConfig
 */
export interface EventInvokeConfigProps extends EventInvokeConfigOptions {
    /**
     * The Lambda function
     */
    readonly function: IFunction;
    /**
     * The qualifier
     *
     * @default - latest version
     */
    readonly qualifier?: string;
}
/**
 * Configure options for asynchronous invocation on a version or an alias
 *
 * By default, Lambda retries an asynchronous invocation twice if the function
 * returns an error. It retains events in a queue for up to six hours. When an
 * event fails all processing attempts or stays in the asynchronous invocation
 * queue for too long, Lambda discards it.
 */
export declare class EventInvokeConfig extends AwsConstructBase {
    readonly resource: lambdaFunctionEventInvokeConfig.LambdaFunctionEventInvokeConfig;
    get outputs(): Record<string, any>;
    constructor(scope: Construct, id: string, props: EventInvokeConfigProps);
}
