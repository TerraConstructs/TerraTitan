import { IResolvable, IResolveContext } from "cdktf";
/**
 * An event pattern matcher
 */
export declare class Match implements IResolvable {
    private readonly matchers;
    private readonly options;
    /**
     * Matches a null value in the JSON of the event
     */
    static nullValue(): string[];
    /**
     * Matches when the field is present in the JSON of the event
     */
    static exists(): string[];
    /**
     * Matches when the field is absent from the JSON of the event
     */
    static doesNotExist(): string[];
    /**
     * Matches a string, exactly, in the JSON of the event
     */
    static exactString(value: string): string[];
    /**
     * Matches a string, regardless of case, in the JSON of the event
     */
    static equalsIgnoreCase(value: string): string[];
    /**
     * Matches strings with the given prefix in the JSON of the event
     */
    static prefix(value: string): string[];
    /**
     * Matches strings with the given suffix in the JSON of the event
     */
    static suffix(value: string): string[];
    /**
     * Matches IPv4 and IPv6 network addresses using the Classless Inter-Domain Routing (CIDR) format
     */
    static cidr(range: string): string[];
    /**
     * Matches IPv4 and IPv6 network addresses using the Classless Inter-Domain Routing (CIDR) format.
     * Alias of `cidr()`.
     */
    static ipAddressRange(range: string): string[];
    /**
     * Matches anything except what's provided in the rule. The list of provided values must contain
     * only strings or only numbers.
     */
    static anythingBut(...values: any[]): string[];
    /**
     * Matches any string that doesn't start with the given prefix.
     */
    static anythingButPrefix(prefix: string): string[];
    /**
     * Matches numbers greater than the provided value
     */
    static greaterThan(value: number): string[];
    /**
     * Matches numbers greater than, or equal to, the provided value
     */
    static greaterThanOrEqual(value: number): string[];
    /**
     * Matches numbers less than the provided value
     */
    static lessThan(value: number): string[];
    /**
     * Matches numbers less than, or equal to, the provided value
     */
    static lessThanOrEqual(value: number): string[];
    /**
     * Matches numbers equal to the provided value
     */
    static equal(value: number): string[];
    /**
     * Matches numbers inside a closed numeric interval. Equivalent to:
     *
     *    Match.allOf(Match.greaterThanOrEqual(lower), Match.lessThanOrEqual(upper))
     *
     * @param lower Lower bound (inclusive)
     * @param upper Upper bound (inclusive)
     */
    static interval(lower: number, upper: number): string[];
    /**
     * Matches an event if any of the provided matchers do. Only numeric matchers are accepted.
     */
    static allOf(...matchers: any[]): string[];
    /**
     * Matches an event if any of the provided matchers does.
     */
    static anyOf(...matchers: any[]): string[];
    private static numeric;
    private static fromObjects;
    private static fromMergedObjects;
    readonly creationStack: string[];
    private constructor();
    resolve(context: IResolveContext): any;
    private merge;
    toString(): string;
    /**
     * A representation of this matcher as a list of strings
     */
    asList(): string[];
}
/**
 * Events in Amazon CloudWatch Events are represented as JSON objects. For more
 * information about JSON objects, see RFC 7159.
 *
 * **Important**: this class can only be used with a `Rule` class. In particular,
 * do not use it with `CfnRule` class: your pattern will not be rendered
 * correctly. In a `CfnRule` class, write the pattern as you normally would when
 * directly writing CloudFormation.
 *
 * Rules use event patterns to select events and route them to targets. A
 * pattern either matches an event or it doesn't. Event patterns are represented
 * as JSON objects with a structure that is similar to that of events.
 *
 * It is important to remember the following about event pattern matching:
 *
 * - For a pattern to match an event, the event must contain all the field names
 *   listed in the pattern. The field names must appear in the event with the
 *   same nesting structure.
 *
 * - Other fields of the event not mentioned in the pattern are ignored;
 *   effectively, there is a ``"*": "*"`` wildcard for fields not mentioned.
 *
 * - The matching is exact (character-by-character), without case-folding or any
 *   other string normalization.
 *
 * - The values being matched follow JSON rules: Strings enclosed in quotes,
 *   numbers, and the unquoted keywords true, false, and null.
 *
 * - Number matching is at the string representation level. For example, 300,
 *   300.0, and 3.0e2 are not considered equal.
 *
 * For custom events, some optional properties are required. For more information, see
 * [Minimum information needed for a valid custom event](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-events-structure.html#eb-custom-event).
 *
 * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatchEventsandEventPatterns.html
 */
export interface EventPattern {
    /**
     * By default, this is set to 0 (zero) in all events.
     *
     * @default - No filtering on version
     */
    readonly version?: string[];
    /**
     * A unique value is generated for every event. This can be helpful in
     * tracing events as they move through rules to targets, and are processed.
     *
     * @default - No filtering on id
     */
    readonly id?: string[];
    /**
     * Identifies, in combination with the source field, the fields and values
     * that appear in the detail field.
     *
     * Represents the "detail-type" event field.
     *
     * @default - No filtering on detail type
     */
    readonly detailType?: string[];
    /**
     * Identifies the service that sourced the event. All events sourced from
     * within AWS begin with "aws." Customer-generated events can have any value
     * here, as long as it doesn't begin with "aws." We recommend the use of
     * Java package-name style reverse domain-name strings.
     *
     * To find the correct value for source for an AWS service, see the table in
     * AWS Service Namespaces. For example, the source value for Amazon
     * CloudFront is aws.cloudfront.
     *
     * @see http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces
     * @default - No filtering on source
     */
    readonly source?: string[];
    /**
     * The 12-digit number identifying an AWS account.
     *
     * @default - No filtering on account
     */
    readonly account?: string[];
    /**
     * The event timestamp, which can be specified by the service originating
     * the event. If the event spans a time interval, the service might choose
     * to report the start time, so this value can be noticeably before the time
     * the event is actually received.
     *
     * @default - No filtering on time
     */
    readonly time?: string[];
    /**
     * Identifies the AWS region where the event originated.
     *
     * @default - No filtering on region
     */
    readonly region?: string[];
    /**
     * This JSON array contains ARNs that identify resources that are involved
     * in the event. Inclusion of these ARNs is at the discretion of the
     * service.
     *
     * For example, Amazon EC2 instance state-changes include Amazon EC2
     * instance ARNs, Auto Scaling events include ARNs for both instances and
     * Auto Scaling groups, but API calls with AWS CloudTrail do not include
     * resource ARNs.
     *
     * @default - No filtering on resource
     */
    readonly resources?: string[];
    /**
     * A JSON object, whose content is at the discretion of the service
     * originating the event.
     *
     * @default - No filtering on detail
     */
    readonly detail?: {
        [key: string]: any;
    };
}
