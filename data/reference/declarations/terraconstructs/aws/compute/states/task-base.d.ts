import { Construct } from "constructs";
import { State } from "./state";
import { Duration } from "../../..";
import * as iam from "../../iam";
import { Chain } from "../chain";
import { StateGraph } from "../state-graph";
import { Credentials } from "../task-credentials";
import { CatchProps, IChainable, INextable, RetryProps } from "../types";
/**
 * Props that are common to all tasks
 */
export interface TaskStateBaseProps {
    /**
     * Optional name for this state
     *
     * @default - The construct ID will be used as state name
     */
    readonly stateName?: string;
    /**
     * An optional description for this state
     *
     * @default - No comment
     */
    readonly comment?: string;
    /**
     * JSONPath expression to select part of the state to be the input to this state.
     *
     * May also be the special value JsonPath.DISCARD, which will cause the effective
     * input to be the empty object {}.
     *
     * @default - The entire task input (JSON path '$')
     */
    readonly inputPath?: string;
    /**
     * JSONPath expression to select select a portion of the state output to pass
     * to the next state.
     *
     * May also be the special value JsonPath.DISCARD, which will cause the effective
     * output to be the empty object {}.
     *
     * @default - The entire JSON node determined by the state input, the task result,
     *   and resultPath is passed to the next state (JSON path '$')
     */
    readonly outputPath?: string;
    /**
     * JSONPath expression to indicate where to inject the state's output
     *
     * May also be the special value JsonPath.DISCARD, which will cause the state's
     * input to become its output.
     *
     * @default - Replaces the entire input with the result (JSON path '$')
     */
    readonly resultPath?: string;
    /**
     * The JSON that will replace the state's raw result and become the effective
     * result before ResultPath is applied.
     *
     * You can use ResultSelector to create a payload with values that are static
     * or selected from the state's raw result.
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector
     *
     * @default - None
     */
    readonly resultSelector?: {
        [key: string]: any;
    };
    /**
     * Timeout for the task
     *
     * @default - None
     * @deprecated use `taskTimeout`
     */
    readonly timeout?: Duration;
    /**
     * Timeout for the task
     *
     * [disable-awslint:duration-prop-type] is needed because all props interface in
     * aws-stepfunctions-tasks extend this interface
     *
     * @default - None
     */
    readonly taskTimeout?: Timeout;
    /**
     * Timeout for the heartbeat
     *
     * @default - None
     * @deprecated use `heartbeatTimeout`
     */
    readonly heartbeat?: Duration;
    /**
     * Timeout for the heartbeat
     *
     * [disable-awslint:duration-prop-type] is needed because all props interface in
     * aws-stepfunctions-tasks extend this interface
     *
     * @default - None
     */
    readonly heartbeatTimeout?: Timeout;
    /**
     * AWS Step Functions integrates with services directly in the Amazon States Language.
     * You can control these AWS services using service integration patterns.
     *
     * Depending on the AWS Service, the Service Integration Pattern availability will vary.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-supported-services.html
     *
     * @default - `IntegrationPattern.REQUEST_RESPONSE` for most tasks.
     * `IntegrationPattern.RUN_JOB` for the following exceptions:
     *  `BatchSubmitJob`, `EmrAddStep`, `EmrCreateCluster`, `EmrTerminationCluster`, and `EmrContainersStartJobRun`.
     *
     */
    readonly integrationPattern?: IntegrationPattern;
    /**
     * Credentials for an IAM Role that the State Machine assumes for executing the task.
     * This enables cross-account resource invocations.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html
     *
     * @default - None (Task is executed using the State Machine's execution role)
     */
    readonly credentials?: Credentials;
}
/**
 * Define a Task state in the state machine
 *
 * Reaching a Task state causes some work to be executed, represented by the
 * Task's resource property. Task constructs represent a generic Amazon
 * States Language Task.
 *
 * For some resource types, more specific subclasses of Task may be available
 * which are more convenient to use.
 */
export declare abstract class TaskStateBase extends State implements INextable {
    readonly endStates: INextable[];
    protected abstract readonly taskPolicies?: iam.PolicyStatement[];
    private readonly timeout?;
    private readonly taskTimeout?;
    private readonly heartbeat?;
    private readonly heartbeatTimeout?;
    private readonly credentials?;
    constructor(scope: Construct, id: string, props: TaskStateBaseProps);
    /**
     * Add retry configuration for this state
     *
     * This controls if and how the execution will be retried if a particular
     * error occurs.
     */
    addRetry(props?: RetryProps): TaskStateBase;
    /**
     * Add a recovery handler for this state
     *
     * When a particular error occurs, execution will continue at the error
     * handler instead of failing the state machine execution.
     */
    addCatch(handler: IChainable, props?: CatchProps): TaskStateBase;
    /**
     * Continue normal execution with the given state
     */
    next(next: IChainable): Chain;
    /**
     * Return the Amazon States Language object for this state
     */
    toStateJson(): object;
    protected whenBoundToGraph(graph: StateGraph): void;
    /**
     * @internal
     */
    protected abstract _renderTask(): any;
    private renderCredentials;
    private renderTaskBase;
}
/**
 *
 * AWS Step Functions integrates with services directly in the Amazon States Language.
 * You can control these AWS services using service integration patterns:
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html
 *
 */
export declare enum IntegrationPattern {
    /**
     * Step Functions will wait for an HTTP response and then progress to the next state.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-default
     */
    REQUEST_RESPONSE = "REQUEST_RESPONSE",
    /**
     * Step Functions can wait for a request to complete before progressing to the next state.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync
     */
    RUN_JOB = "RUN_JOB",
    /**
     * Callback tasks provide a way to pause a workflow until a task token is returned.
     * You must set a task token when using the callback pattern
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token
     */
    WAIT_FOR_TASK_TOKEN = "WAIT_FOR_TASK_TOKEN"
}
/**
 * Timeout for a task or heartbeat
 */
export declare abstract class Timeout {
    /**
     * Use a duration as timeout
     */
    static duration(duration: Duration): Timeout;
    /**
     * Use a dynamic timeout specified by a path in the state input.
     *
     * The path must select a field whose value is a positive integer.
     */
    static at(path: string): Timeout;
    /**
     * Seconds for this timeout
     */
    abstract readonly seconds?: number;
    /**
     * Path for this timeout
     */
    abstract readonly path?: string;
}
