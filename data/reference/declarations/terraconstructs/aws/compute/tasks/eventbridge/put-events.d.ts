import { Construct } from "constructs";
import * as compute from "../../";
import * as iam from "../../../iam";
import * as notify from "../../../notify";
/**
 * An entry to be sent to EventBridge
 *
 * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEventsRequestEntry.html
 */
export interface EventBridgePutEventsEntry {
    /**
     * The event body
     *
     * Can either be provided as an object or as a JSON-serialized string
     * @example
     *
     * compute.TaskInput.fromText('{"instance-id": "i-1234567890abcdef0", "state": "terminated"}');
     * compute.TaskInput.fromObject({ Message: 'Hello from Step Functions' });
     * compute.TaskInput.fromJsonPathAt('$.EventDetail');
     */
    readonly detail: compute.TaskInput;
    /**
     * Used along with the source field to help identify the fields and values expected in the detail field
     *
     * For example, events by CloudTrail have detail type "AWS API Call via CloudTrail"
     * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-events.html
     */
    readonly detailType: string;
    /**
     * The event bus the entry will be sent to.
     *
     * @default - event is sent to account's default event bus
     */
    readonly eventBus?: notify.IEventBus;
    /**
     * The service or application that caused this event to be generated
     *
     * Example value: `com.example.service`
     *
     * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-events.html
     */
    readonly source: string;
}
/**
 * Properties for sending events with PutEvents
 */
export interface EventBridgePutEventsProps extends compute.TaskStateBaseProps {
    /**
     * The entries that will be sent. Minimum number of entries is 1 and maximum is 10,
     * unless [PutEvents API limit](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html#API_PutEvents_RequestSyntax) has changed.
     */
    readonly entries: EventBridgePutEventsEntry[];
}
/**
 * A StepFunctions Task to send events to an EventBridge event bus
 */
export declare class EventBridgePutEvents extends compute.TaskStateBase {
    private readonly props;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: EventBridgePutEventsProps);
    /**
     * Returns an array of EventBusArn strings based on this.props.entries
     */
    private get eventBusArns();
    /**
     * Provides the EventBridge put events service integration task configuration
     * @internal
     */
    protected _renderTask(): any;
    private renderEntries;
    private validateEntries;
}
