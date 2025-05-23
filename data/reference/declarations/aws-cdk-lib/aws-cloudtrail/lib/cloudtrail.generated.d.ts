import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Contains information about a returned CloudTrail channel.
 *
 * @cloudformationResource AWS::CloudTrail::Channel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html
 */
export declare class CfnChannel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnChannel;
    /**
     * `Ref` returns the ARN of the CloudTrail channel, such as `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890` .
     *
     * @cloudformationAttribute ChannelArn
     */
    readonly attrChannelArn: string;
    /**
     * One or more event data stores to which events arriving through a channel will be logged.
     */
    destinations?: Array<CfnChannel.DestinationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the channel.
     */
    name?: string;
    /**
     * The name of the partner or external event source.
     */
    source?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnChannelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnChannel {
    /**
     * Contains information about the destination receiving events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-destination.html
     */
    interface DestinationProperty {
        /**
         * For channels used for a CloudTrail Lake integration, the location is the ARN of an event data store that receives events from a channel.
         *
         * For service-linked channels, the location is the name of the AWS service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-destination.html#cfn-cloudtrail-channel-destination-location
         */
        readonly location: string;
        /**
         * The type of destination for events arriving from a channel.
         *
         * For channels used for a CloudTrail Lake integration, the value is `EVENT_DATA_STORE` . For service-linked channels, the value is `AWS_SERVICE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-destination.html#cfn-cloudtrail-channel-destination-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html
 */
export interface CfnChannelProps {
    /**
     * One or more event data stores to which events arriving through a channel will be logged.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-destinations
     */
    readonly destinations?: Array<CfnChannel.DestinationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-name
     */
    readonly name?: string;
    /**
     * The name of the partner or external event source.
     *
     * You cannot change this name after you create the channel. A maximum of one channel is allowed per source.
     *
     * A source can be either `Custom` for all valid non- AWS events, or the name of a partner event source. For information about the source names for available partners, see [Additional information about integration partners](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-integration.html#cloudtrail-lake-partner-information) in the CloudTrail User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-source
     */
    readonly source?: string;
    /**
     * A list of tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new event data store.
 *
 * @cloudformationResource AWS::CloudTrail::EventDataStore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html
 */
export declare class CfnEventDataStore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventDataStore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventDataStore;
    /**
     * `Ref` returns the time stamp of the creation of the event data store, such as `1248496624` .
     *
     * @cloudformationAttribute CreatedTimestamp
     */
    readonly attrCreatedTimestamp: string;
    /**
     * `Ref` returns the ARN of the CloudTrail event data store, such as `arn:aws:cloudtrail:us-east-1:12345678910:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE` .
     *
     * @cloudformationAttribute EventDataStoreArn
     */
    readonly attrEventDataStoreArn: string;
    /**
     * `Ref` returns the status of the event data store, such as `ENABLED` .
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * `Ref` returns the time stamp that updates were made to an event data store, such as `1598296624` .
     *
     * @cloudformationAttribute UpdatedTimestamp
     */
    readonly attrUpdatedTimestamp: string;
    /**
     * The advanced event selectors to use to select the events for the data store.
     */
    advancedEventSelectors?: Array<CfnEventDataStore.AdvancedEventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store.
     */
    billingMode?: string;
    /**
     * Indicates if [Lake query federation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html) is enabled. By default, Lake query federation is disabled. You cannot delete an event data store if Lake query federation is enabled.
     */
    federationEnabled?: boolean | cdk.IResolvable;
    /**
     * If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store.
     */
    federationRoleArn?: string;
    /**
     * Specifies whether the event data store should start ingesting live events.
     */
    ingestionEnabled?: boolean | cdk.IResolvable;
    /**
     * The ARN (or ID suffix of the ARN) of the destination event data store that logs Insights events.
     */
    insightsDestination?: string;
    /**
     * A JSON string that contains the Insights types you want to log on an event data store.
     */
    insightSelectors?: Array<CfnEventDataStore.InsightSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the AWS KMS key ID to use to encrypt the events delivered by CloudTrail.
     */
    kmsKeyId?: string;
    /**
     * Specifies whether the event data store includes events from all Regions, or only from the Region in which the event data store is created.
     */
    multiRegionEnabled?: boolean | cdk.IResolvable;
    /**
     * The name of the event data store.
     */
    name?: string;
    /**
     * Specifies whether an event data store collects events logged for an organization in AWS Organizations .
     */
    organizationEnabled?: boolean | cdk.IResolvable;
    /**
     * The retention period of the event data store, in days.
     */
    retentionPeriod?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies whether termination protection is enabled for the event data store.
     */
    terminationProtectionEnabled?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnEventDataStoreProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventDataStore {
    /**
     * Advanced event selectors let you create fine-grained selectors for AWS CloudTrail management, data, and network activity events.
     *
     * They help you control costs by logging only those events that are important to you. For more information about configuring advanced event selectors, see the [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) , [Logging network activity events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html) , and [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) topics in the *AWS CloudTrail User Guide* .
     *
     * You cannot apply both event selectors and advanced event selectors to a trail.
     *
     * *Supported CloudTrail event record fields for management events*
     *
     * - `eventCategory` (required)
     * - `eventSource`
     * - `readOnly`
     *
     * The following additional fields are available for event data stores:
     *
     * - `eventName`
     * - `eventType`
     * - `sessionCredentialFromConsole`
     * - `userIdentity.arn`
     *
     * *Supported CloudTrail event record fields for data events*
     *
     * - `eventCategory` (required)
     * - `resources.type` (required)
     * - `readOnly`
     * - `eventName`
     * - `resources.ARN`
     *
     * The following additional fields are available for event data stores:
     *
     * - `eventSource`
     * - `eventType`
     * - `sessionCredentialFromConsole`
     * - `userIdentity.arn`
     *
     * *Supported CloudTrail event record fields for network activity events*
     *
     * - `eventCategory` (required)
     * - `eventSource` (required)
     * - `eventName`
     * - `errorCode` - The only valid value for `errorCode` is `VpceAccessDenied` .
     * - `vpcEndpointId`
     *
     * > For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the only supported field is `eventCategory` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedeventselector.html
     */
    interface AdvancedEventSelectorProperty {
        /**
         * Contains all selector statements in an advanced event selector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedeventselector.html#cfn-cloudtrail-eventdatastore-advancedeventselector-fieldselectors
         */
        readonly fieldSelectors: Array<CfnEventDataStore.AdvancedFieldSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedeventselector.html#cfn-cloudtrail-eventdatastore-advancedeventselector-name
         */
        readonly name?: string;
    }
    /**
     * A single selector statement in an advanced event selector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html
     */
    interface AdvancedFieldSelectorProperty {
        /**
         * An operator that includes events that match the last few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-endswith
         */
        readonly endsWith?: Array<string>;
        /**
         * An operator that includes events that match the exact value of the event record field specified as the value of `Field` .
         *
         * This is the only valid operator that you can use with the `readOnly` , `eventCategory` , and `resources.type` fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-equals
         */
        readonly equalTo?: Array<string>;
        /**
         * A field in a CloudTrail event record on which to filter events to be logged.
         *
         * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the field is used only for selecting events as filtering is not supported.
         *
         * For CloudTrail management events, supported fields include `eventCategory` (required), `eventSource` , and `readOnly` . The following additional fields are available for event data stores: `eventName` , `eventType` , `sessionCredentialFromConsole` , and `userIdentity.arn` .
         *
         * For CloudTrail data events, supported fields include `eventCategory` (required), `resources.type` (required), `eventName` , `readOnly` , and `resources.ARN` . The following additional fields are available for event data stores: `eventSource` , `eventType` , `sessionCredentialFromConsole` , and `userIdentity.arn` .
         *
         * For CloudTrail network activity events, supported fields include `eventCategory` (required), `eventSource` (required), `eventName` , `errorCode` , and `vpcEndpointId` .
         *
         * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the only supported field is `eventCategory` .
         *
         * > Selectors don't support the use of wildcards like `*` . To match multiple values with a single condition, you may use `StartsWith` , `EndsWith` , `NotStartsWith` , or `NotEndsWith` to explicitly match the beginning or end of the event field.
         *
         * - *`readOnly`* - This is an optional field that is only used for management events and data events. This field can be set to `Equals` with a value of `true` or `false` . If you do not add this field, CloudTrail logs both `read` and `write` events. A value of `true` logs only `read` events. A value of `false` logs only `write` events.
         * - *`eventSource`* - This field is only used for management events, data events (for event data stores only), and network activity events.
         *
         * For management events for trails, this is an optional field that can be set to `NotEquals` `kms.amazonaws.com` to exclude KMS management events, or `NotEquals` `rdsdata.amazonaws.com` to exclude RDS management events.
         *
         * For management and data events for event data stores, you can use it to include or exclude any event source and can use any operator.
         *
         * For network activity events, this is a required field that only uses the `Equals` operator. Set this field to the event source for which you want to log network activity events. If you want to log network activity events for multiple event sources, you must create a separate field selector for each event source.
         *
         * The following are valid values for network activity events:
         *
         * - `cloudtrail.amazonaws.com`
         * - `ec2.amazonaws.com`
         * - `kms.amazonaws.com`
         * - `s3.amazonaws.com`
         * - `secretsmanager.amazonaws.com`
         * - *`eventName`* - This is an optional field that is only used for data events, management events (for event data stores only), and network activity events. You can use any operator with `eventName` . You can use it to ﬁlter in or ﬁlter out specific events. You can have multiple values for this ﬁeld, separated by commas.
         * - *`eventCategory`* - This field is required and must be set to `Equals` .
         *
         * - For CloudTrail management events, the value must be `Management` .
         * - For CloudTrail data events, the value must be `Data` .
         * - For CloudTrail network activity events, the value must be `NetworkActivity` .
         *
         * The following are used only for event data stores:
         *
         * - For CloudTrail Insights events, the value must be `Insight` .
         * - For AWS Config configuration items, the value must be `ConfigurationItem` .
         * - For Audit Manager evidence, the value must be `Evidence` .
         * - For events outside of AWS , the value must be `ActivityAuditLog` .
         * - *`eventType`* - This is an optional field available only for event data stores, which is used to filter management and data events on the event type. For information about available event types, see [CloudTrail record contents](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-record-contents.html#ct-event-type) in the *AWS CloudTrail user guide* .
         * - *`errorCode`* - This ﬁeld is only used to filter CloudTrail network activity events and is optional. This is the error code to filter on. Currently, the only valid `errorCode` is `VpceAccessDenied` . `errorCode` can only use the `Equals` operator.
         * - *`sessionCredentialFromConsole`* - This is an optional field available only for event data stores, which is used to filter management and data events based on whether the events originated from an AWS Management Console session. `sessionCredentialFromConsole` can only use the `Equals` and `NotEquals` operators.
         * - *`resources.type`* - This ﬁeld is required for CloudTrail data events. `resources.type` can only use the `Equals` operator.
         *
         * For a list of available resource types for data events, see [Data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#logging-data-events) in the *AWS CloudTrail User Guide* .
         *
         * You can have only one `resources.type` ﬁeld per selector. To log events on more than one resource type, add another selector.
         * - *`resources.ARN`* - The `resources.ARN` is an optional field for data events. You can use any operator with `resources.ARN` , but if you use `Equals` or `NotEquals` , the value must exactly match the ARN of a valid resource of the type you've speciﬁed in the template as the value of resources.type. To log all data events for all objects in a specific S3 bucket, use the `StartsWith` operator, and include only the bucket ARN as the matching value.
         *
         * For information about filtering data events on the `resources.ARN` field, see [Filtering data events by resources.ARN](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/filtering-data-events.html#filtering-data-events-resourcearn) in the *AWS CloudTrail User Guide* .
         *
         * > You can't use the `resources.ARN` field to filter resource types that do not have ARNs.
         * - *`userIdentity.arn`* - This is an optional field available only for event data stores, which is used to filter management and data events on the userIdentity ARN. You can use any operator with `userIdentity.arn` . For more information on the userIdentity element, see [CloudTrail userIdentity element](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-user-identity.html) in the *AWS CloudTrail User Guide* .
         * - *`vpcEndpointId`* - This ﬁeld is only used to filter CloudTrail network activity events and is optional. This field identifies the VPC endpoint that the request passed through. You can use any operator with `vpcEndpointId` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-field
         */
        readonly field: string;
        /**
         * An operator that excludes events that match the last few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-notendswith
         */
        readonly notEndsWith?: Array<string>;
        /**
         * An operator that excludes events that match the exact value of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-notequals
         */
        readonly notEquals?: Array<string>;
        /**
         * An operator that excludes events that match the first few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-notstartswith
         */
        readonly notStartsWith?: Array<string>;
        /**
         * An operator that includes events that match the first few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-startswith
         */
        readonly startsWith?: Array<string>;
    }
    /**
     * A JSON string that contains a list of Insights types that are logged on an event data store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-insightselector.html
     */
    interface InsightSelectorProperty {
        /**
         * The type of Insights events to log on an event data store. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
         *
         * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
         *
         * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-insightselector.html#cfn-cloudtrail-eventdatastore-insightselector-insighttype
         */
        readonly insightType?: string;
    }
}
/**
 * Properties for defining a `CfnEventDataStore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html
 */
export interface CfnEventDataStoreProps {
    /**
     * The advanced event selectors to use to select the events for the data store.
     *
     * You can configure up to five advanced event selectors for each event data store.
     *
     * For more information about how to use advanced event selectors to log CloudTrail events, see [Log events by using advanced event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced) in the CloudTrail User Guide.
     *
     * For more information about how to use advanced event selectors to include AWS Config configuration items in your event data store, see [Create an event data store for AWS Config configuration items](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-eds-cli.html#lake-cli-create-eds-config) in the CloudTrail User Guide.
     *
     * For more information about how to use advanced event selectors to include events outside of AWS events in your event data store, see [Create an integration to log events from outside AWS](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-integrations-cli.html#lake-cli-create-integration) in the CloudTrail User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedeventselectors
     */
    readonly advancedEventSelectors?: Array<CfnEventDataStore.AdvancedEventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store.
     *
     * The following are the possible values:
     *
     * - `EXTENDABLE_RETENTION_PRICING` - This billing mode is generally recommended if you want a flexible retention period of up to 3653 days (about 10 years). The default retention period for this billing mode is 366 days.
     * - `FIXED_RETENTION_PRICING` - This billing mode is recommended if you expect to ingest more than 25 TB of event data per month and need a retention period of up to 2557 days (about 7 years). The default retention period for this billing mode is 2557 days.
     *
     * The default value is `EXTENDABLE_RETENTION_PRICING` .
     *
     * For more information about CloudTrail pricing, see [AWS CloudTrail Pricing](https://docs.aws.amazon.com/cloudtrail/pricing/) and [Managing CloudTrail Lake costs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-manage-costs.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-billingmode
     */
    readonly billingMode?: string;
    /**
     * Indicates if [Lake query federation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html) is enabled. By default, Lake query federation is disabled. You cannot delete an event data store if Lake query federation is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-federationenabled
     */
    readonly federationEnabled?: boolean | cdk.IResolvable;
    /**
     * If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store.
     *
     * The federation role must exist in your account and provide the [required minimum permissions](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html#query-federation-permissions-role) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-federationrolearn
     */
    readonly federationRoleArn?: string;
    /**
     * Specifies whether the event data store should start ingesting live events.
     *
     * The default is true.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-ingestionenabled
     */
    readonly ingestionEnabled?: boolean | cdk.IResolvable;
    /**
     * The ARN (or ID suffix of the ARN) of the destination event data store that logs Insights events.
     *
     * For more information, see [Create an event data store for CloudTrail Insights events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-insights.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-insightsdestination
     */
    readonly insightsDestination?: string;
    /**
     * A JSON string that contains the Insights types you want to log on an event data store.
     *
     * `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
     *
     * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
     *
     * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-insightselectors
     */
    readonly insightSelectors?: Array<CfnEventDataStore.InsightSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the AWS KMS key ID to use to encrypt the events delivered by CloudTrail.
     *
     * The value can be an alias name prefixed by `alias/` , a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
     *
     * > Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.
     *
     * CloudTrail also supports AWS KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *AWS Key Management Service Developer Guide* .
     *
     * Examples:
     *
     * - `alias/MyAliasName`
     * - `arn:aws:kms:us-east-2:123456789012:alias/MyAliasName`
     * - `arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012`
     * - `12345678-1234-1234-1234-123456789012`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies whether the event data store includes events from all Regions, or only from the Region in which the event data store is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-multiregionenabled
     */
    readonly multiRegionEnabled?: boolean | cdk.IResolvable;
    /**
     * The name of the event data store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-name
     */
    readonly name?: string;
    /**
     * Specifies whether an event data store collects events logged for an organization in AWS Organizations .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-organizationenabled
     */
    readonly organizationEnabled?: boolean | cdk.IResolvable;
    /**
     * The retention period of the event data store, in days.
     *
     * If `BillingMode` is set to `EXTENDABLE_RETENTION_PRICING` , you can set a retention period of up to 3653 days, the equivalent of 10 years. If `BillingMode` is set to `FIXED_RETENTION_PRICING` , you can set a retention period of up to 2557 days, the equivalent of seven years.
     *
     * CloudTrail Lake determines whether to retain an event by checking if the `eventTime` of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events when the `eventTime` is older than 90 days.
     *
     * > If you plan to copy trail events to this event data store, we recommend that you consider both the age of the events that you want to copy as well as how long you want to keep the copied events in your event data store. For example, if you copy trail events that are 5 years old and specify a retention period of 7 years, the event data store will retain those events for two years.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-retentionperiod
     */
    readonly retentionPeriod?: number;
    /**
     * A list of tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies whether termination protection is enabled for the event data store.
     *
     * If termination protection is enabled, you cannot delete the event data store until termination protection is disabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-terminationprotectionenabled
     */
    readonly terminationProtectionEnabled?: boolean | cdk.IResolvable;
}
/**
 * Attaches a resource-based permission policy to a CloudTrail event data store, dashboard, or channel.
 *
 * For more information about resource-based policies, see [CloudTrail resource-based policy examples](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html) in the *CloudTrail User Guide* .
 *
 * @cloudformationResource AWS::CloudTrail::ResourcePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html
 */
export declare class CfnResourcePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourcePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourcePolicy;
    /**
     * The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy.
     */
    resourceArn: string;
    /**
     * A JSON-formatted string for an AWS resource-based policy.
     */
    resourcePolicy: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourcePolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnResourcePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html
 */
export interface CfnResourcePolicyProps {
    /**
     * The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy.
     *
     * Example event data store ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
     *
     * Example dashboard ARN format: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
     *
     * Example channel ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html#cfn-cloudtrail-resourcepolicy-resourcearn
     */
    readonly resourceArn: string;
    /**
     * A JSON-formatted string for an AWS resource-based policy.
     *
     * For example resource-based policies, see [CloudTrail resource-based policy examples](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html) in the *CloudTrail User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html#cfn-cloudtrail-resourcepolicy-resourcepolicy
     */
    readonly resourcePolicy: any | cdk.IResolvable;
}
/**
 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
 *
 * @cloudformationResource AWS::CloudTrail::Trail
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html
 */
export declare class CfnTrail extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrail from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrail;
    /**
     * `Ref` returns the ARN of the CloudTrail trail, such as `arn:aws:cloudtrail:us-east-2:123456789012:trail/myCloudTrail` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * `Ref` returns the ARN of the Amazon SNS topic that's associated with the CloudTrail trail, such as `arn:aws:sns:us-east-2:123456789012:mySNSTopic` .
     *
     * @cloudformationAttribute SnsTopicArn
     */
    readonly attrSnsTopicArn: string;
    /**
     * Specifies the settings for advanced event selectors.
     */
    advancedEventSelectors?: Array<CfnTrail.AdvancedEventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered.
     */
    cloudWatchLogsLogGroupArn?: string;
    /**
     * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
     */
    cloudWatchLogsRoleArn?: string;
    /**
     * Specifies whether log file validation is enabled. The default is false.
     */
    enableLogFileValidation?: boolean | cdk.IResolvable;
    /**
     * Use event selectors to further specify the management and data event settings for your trail.
     */
    eventSelectors?: Array<CfnTrail.EventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether the trail is publishing events from global services such as IAM to the log files.
     */
    includeGlobalServiceEvents?: boolean | cdk.IResolvable;
    /**
     * A JSON string that contains the Insights types you want to log on a trail.
     */
    insightSelectors?: Array<CfnTrail.InsightSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Whether the CloudTrail trail is currently logging AWS API calls.
     */
    isLogging: boolean | cdk.IResolvable;
    /**
     * Specifies whether the trail applies only to the current Region or to all Regions.
     */
    isMultiRegionTrail?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the trail is applied to all accounts in an organization in AWS Organizations , or only for the current AWS account .
     */
    isOrganizationTrail?: boolean | cdk.IResolvable;
    /**
     * Specifies the AWS KMS key ID to use to encrypt the logs delivered by CloudTrail.
     */
    kmsKeyId?: string;
    /**
     * Specifies the name of the Amazon S3 bucket designated for publishing log files.
     */
    s3BucketName: string;
    /**
     * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.
     */
    s3KeyPrefix?: string;
    /**
     * Specifies the name or ARN of the Amazon SNS topic defined for notification of log file delivery.
     */
    snsTopicName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A custom set of tags (key-value pairs) for this trail.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies the name of the trail. The name must meet the following requirements:.
     */
    trailName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTrailProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTrail {
    /**
     * Use event selectors to further specify the management and data event settings for your trail.
     *
     * By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
     *
     * You can configure up to five event selectors for a trail.
     *
     * You cannot apply both event selectors and advanced event selectors to a trail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html
     */
    interface EventSelectorProperty {
        /**
         * CloudTrail supports data event logging for Amazon S3 objects in standard S3 buckets, AWS Lambda functions, and Amazon DynamoDB tables with basic event selectors.
         *
         * You can specify up to 250 resources for an individual event selector, but the total number of data resources cannot exceed 250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events.
         *
         * For more information, see [Data Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) and [Limits in AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) in the *AWS CloudTrail User Guide* .
         *
         * > To log data events for all other resource types including objects stored in [directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html) , you must use [AdvancedEventSelectors](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html) . You must also use `AdvancedEventSelectors` if you want to filter on the `eventName` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html#cfn-cloudtrail-trail-eventselector-dataresources
         */
        readonly dataResources?: Array<CfnTrail.DataResourceProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An optional list of service event sources from which you do not want management events to be logged on your trail.
         *
         * In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service or Amazon RDS Data API events by containing `kms.amazonaws.com` or `rdsdata.amazonaws.com` . By default, `ExcludeManagementEventSources` is empty, and AWS KMS and Amazon RDS Data API events are logged to your trail. You can exclude management event sources only in Regions that support the event source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html#cfn-cloudtrail-trail-eventselector-excludemanagementeventsources
         */
        readonly excludeManagementEventSources?: Array<string>;
        /**
         * Specify if you want your event selector to include management events for your trail.
         *
         * For more information, see [Management Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) in the *AWS CloudTrail User Guide* .
         *
         * By default, the value is `true` .
         *
         * The first copy of management events is free. You are charged for additional copies of management events that you are logging on any subsequent trail in the same Region. For more information about CloudTrail pricing, see [AWS CloudTrail Pricing](https://docs.aws.amazon.com/cloudtrail/pricing/) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html#cfn-cloudtrail-trail-eventselector-includemanagementevents
         */
        readonly includeManagementEvents?: boolean | cdk.IResolvable;
        /**
         * Specify if you want your trail to log read-only events, write-only events, or all.
         *
         * For example, the EC2 `GetConsoleOutput` is a read-only API operation and `RunInstances` is a write-only API operation.
         *
         * By default, the value is `All` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html#cfn-cloudtrail-trail-eventselector-readwritetype
         */
        readonly readWriteType?: string;
    }
    /**
     * You can configure the `DataResource` in an `EventSelector` to log data events for the following three resource types:.
     *
     * - `AWS::DynamoDB::Table`
     * - `AWS::Lambda::Function`
     * - `AWS::S3::Object`
     *
     * To log data events for all other resource types including objects stored in [directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html) , you must use [AdvancedEventSelectors](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html) . You must also use `AdvancedEventSelectors` if you want to filter on the `eventName` field.
     *
     * Configure the `DataResource` to specify the resource type and resource ARNs for which you want to log data events.
     *
     * > The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors for the trail.
     *
     * The following example demonstrates how logging works when you configure logging of all data events for a general purpose bucket named `amzn-s3-demo-bucket1` . In this example, the CloudTrail user specified an empty prefix, and the option to log both `Read` and `Write` data events.
     *
     * - A user uploads an image file to `amzn-s3-demo-bucket1` .
     * - The `PutObject` API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.
     * - A user uploads an object to an Amazon S3 bucket named `arn:aws:s3:::amzn-s3-demo-bucket1` .
     * - The `PutObject` API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.
     *
     * The following example demonstrates how logging works when you configure logging of AWS Lambda data events for a Lambda function named *MyLambdaFunction* , but not for all Lambda functions.
     *
     * - A user runs a script that includes a call to the *MyLambdaFunction* function and the *MyOtherLambdaFunction* function.
     * - The `Invoke` API operation on *MyLambdaFunction* is an Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for *MyLambdaFunction* , any invocations of that function are logged. The trail processes and logs the event.
     * - The `Invoke` API operation on *MyOtherLambdaFunction* is an Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the `Invoke` operation for *MyOtherLambdaFunction* does not match the function specified for the trail. The trail doesn’t log the event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-dataresource.html
     */
    interface DataResourceProperty {
        /**
         * The resource type in which you want to log data events.
         *
         * You can specify the following *basic* event selector resource types:
         *
         * - `AWS::DynamoDB::Table`
         * - `AWS::Lambda::Function`
         * - `AWS::S3::Object`
         *
         * Additional resource types are available through *advanced* event selectors. For more information, see [AdvancedEventSelector](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-dataresource.html#cfn-cloudtrail-trail-dataresource-type
         */
        readonly type: string;
        /**
         * An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified resource type.
         *
         * - To log data events for all objects in all S3 buckets in your AWS account , specify the prefix as `arn:aws:s3` .
         *
         * > This also enables logging of data event activity performed by any user or role in your AWS account , even if that activity is performed on a bucket that belongs to another AWS account .
         * - To log data events for all objects in an S3 bucket, specify the bucket and an empty object prefix such as `arn:aws:s3:::amzn-s3-demo-bucket1/` . The trail logs data events for all objects in this S3 bucket.
         * - To log data events for specific objects, specify the S3 bucket and object prefix such as `arn:aws:s3:::amzn-s3-demo-bucket1/example-images` . The trail logs data events for objects in this S3 bucket that match the prefix.
         * - To log data events for all Lambda functions in your AWS account , specify the prefix as `arn:aws:lambda` .
         *
         * > This also enables logging of `Invoke` activity performed by any user or role in your AWS account , even if that activity is performed on a function that belongs to another AWS account .
         * - To log data events for a specific Lambda function, specify the function ARN.
         *
         * > Lambda function ARNs are exact. For example, if you specify a function ARN *arn:aws:lambda:us-west-2:111111111111:function:helloworld* , data events will only be logged for *arn:aws:lambda:us-west-2:111111111111:function:helloworld* . They will not be logged for *arn:aws:lambda:us-west-2:111111111111:function:helloworld2* .
         * - To log data events for all DynamoDB tables in your AWS account , specify the prefix as `arn:aws:dynamodb` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-dataresource.html#cfn-cloudtrail-trail-dataresource-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Advanced event selectors let you create fine-grained selectors for AWS CloudTrail management, data, and network activity events.
     *
     * They help you control costs by logging only those events that are important to you. For more information about configuring advanced event selectors, see the [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) , [Logging network activity events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html) , and [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) topics in the *AWS CloudTrail User Guide* .
     *
     * You cannot apply both event selectors and advanced event selectors to a trail.
     *
     * *Supported CloudTrail event record fields for management events*
     *
     * - `eventCategory` (required)
     * - `eventSource`
     * - `readOnly`
     *
     * The following additional fields are available for event data stores:
     *
     * - `eventName`
     * - `eventType`
     * - `sessionCredentialFromConsole`
     * - `userIdentity.arn`
     *
     * *Supported CloudTrail event record fields for data events*
     *
     * - `eventCategory` (required)
     * - `resources.type` (required)
     * - `readOnly`
     * - `eventName`
     * - `resources.ARN`
     *
     * The following additional fields are available for event data stores:
     *
     * - `eventSource`
     * - `eventType`
     * - `sessionCredentialFromConsole`
     * - `userIdentity.arn`
     *
     * *Supported CloudTrail event record fields for network activity events*
     *
     * - `eventCategory` (required)
     * - `eventSource` (required)
     * - `eventName`
     * - `errorCode` - The only valid value for `errorCode` is `VpceAccessDenied` .
     * - `vpcEndpointId`
     *
     * > For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the only supported field is `eventCategory` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedeventselector.html
     */
    interface AdvancedEventSelectorProperty {
        /**
         * Contains all selector statements in an advanced event selector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedeventselector.html#cfn-cloudtrail-trail-advancedeventselector-fieldselectors
         */
        readonly fieldSelectors: Array<CfnTrail.AdvancedFieldSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedeventselector.html#cfn-cloudtrail-trail-advancedeventselector-name
         */
        readonly name?: string;
    }
    /**
     * A single selector statement in an advanced event selector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html
     */
    interface AdvancedFieldSelectorProperty {
        /**
         * An operator that includes events that match the last few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-endswith
         */
        readonly endsWith?: Array<string>;
        /**
         * An operator that includes events that match the exact value of the event record field specified as the value of `Field` .
         *
         * This is the only valid operator that you can use with the `readOnly` , `eventCategory` , and `resources.type` fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-equals
         */
        readonly equalTo?: Array<string>;
        /**
         * A field in a CloudTrail event record on which to filter events to be logged.
         *
         * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the field is used only for selecting events as filtering is not supported.
         *
         * For CloudTrail management events, supported fields include `eventCategory` (required), `eventSource` , and `readOnly` . The following additional fields are available for event data stores: `eventName` , `eventType` , `sessionCredentialFromConsole` , and `userIdentity.arn` .
         *
         * For CloudTrail data events, supported fields include `eventCategory` (required), `resources.type` (required), `eventName` , `readOnly` , and `resources.ARN` . The following additional fields are available for event data stores: `eventSource` , `eventType` , `sessionCredentialFromConsole` , and `userIdentity.arn` .
         *
         * For CloudTrail network activity events, supported fields include `eventCategory` (required), `eventSource` (required), `eventName` , `errorCode` , and `vpcEndpointId` .
         *
         * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS , the only supported field is `eventCategory` .
         *
         * > Selectors don't support the use of wildcards like `*` . To match multiple values with a single condition, you may use `StartsWith` , `EndsWith` , `NotStartsWith` , or `NotEndsWith` to explicitly match the beginning or end of the event field.
         *
         * - *`readOnly`* - This is an optional field that is only used for management events and data events. This field can be set to `Equals` with a value of `true` or `false` . If you do not add this field, CloudTrail logs both `read` and `write` events. A value of `true` logs only `read` events. A value of `false` logs only `write` events.
         * - *`eventSource`* - This field is only used for management events, data events (for event data stores only), and network activity events.
         *
         * For management events for trails, this is an optional field that can be set to `NotEquals` `kms.amazonaws.com` to exclude KMS management events, or `NotEquals` `rdsdata.amazonaws.com` to exclude RDS management events.
         *
         * For management and data events for event data stores, you can use it to include or exclude any event source and can use any operator.
         *
         * For network activity events, this is a required field that only uses the `Equals` operator. Set this field to the event source for which you want to log network activity events. If you want to log network activity events for multiple event sources, you must create a separate field selector for each event source.
         *
         * The following are valid values for network activity events:
         *
         * - `cloudtrail.amazonaws.com`
         * - `ec2.amazonaws.com`
         * - `kms.amazonaws.com`
         * - `s3.amazonaws.com`
         * - `secretsmanager.amazonaws.com`
         * - *`eventName`* - This is an optional field that is only used for data events, management events (for event data stores only), and network activity events. You can use any operator with `eventName` . You can use it to ﬁlter in or ﬁlter out specific events. You can have multiple values for this ﬁeld, separated by commas.
         * - *`eventCategory`* - This field is required and must be set to `Equals` .
         *
         * - For CloudTrail management events, the value must be `Management` .
         * - For CloudTrail data events, the value must be `Data` .
         * - For CloudTrail network activity events, the value must be `NetworkActivity` .
         *
         * The following are used only for event data stores:
         *
         * - For CloudTrail Insights events, the value must be `Insight` .
         * - For AWS Config configuration items, the value must be `ConfigurationItem` .
         * - For Audit Manager evidence, the value must be `Evidence` .
         * - For events outside of AWS , the value must be `ActivityAuditLog` .
         * - *`eventType`* - This is an optional field available only for event data stores, which is used to filter management and data events on the event type. For information about available event types, see [CloudTrail record contents](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-record-contents.html#ct-event-type) in the *AWS CloudTrail user guide* .
         * - *`errorCode`* - This ﬁeld is only used to filter CloudTrail network activity events and is optional. This is the error code to filter on. Currently, the only valid `errorCode` is `VpceAccessDenied` . `errorCode` can only use the `Equals` operator.
         * - *`sessionCredentialFromConsole`* - This is an optional field available only for event data stores, which is used to filter management and data events based on whether the events originated from an AWS Management Console session. `sessionCredentialFromConsole` can only use the `Equals` and `NotEquals` operators.
         * - *`resources.type`* - This ﬁeld is required for CloudTrail data events. `resources.type` can only use the `Equals` operator.
         *
         * For a list of available resource types for data events, see [Data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#logging-data-events) in the *AWS CloudTrail User Guide* .
         *
         * You can have only one `resources.type` ﬁeld per selector. To log events on more than one resource type, add another selector.
         * - *`resources.ARN`* - The `resources.ARN` is an optional field for data events. You can use any operator with `resources.ARN` , but if you use `Equals` or `NotEquals` , the value must exactly match the ARN of a valid resource of the type you've speciﬁed in the template as the value of resources.type. To log all data events for all objects in a specific S3 bucket, use the `StartsWith` operator, and include only the bucket ARN as the matching value.
         *
         * For information about filtering data events on the `resources.ARN` field, see [Filtering data events by resources.ARN](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/filtering-data-events.html#filtering-data-events-resourcearn) in the *AWS CloudTrail User Guide* .
         *
         * > You can't use the `resources.ARN` field to filter resource types that do not have ARNs.
         * - *`userIdentity.arn`* - This is an optional field available only for event data stores, which is used to filter management and data events on the userIdentity ARN. You can use any operator with `userIdentity.arn` . For more information on the userIdentity element, see [CloudTrail userIdentity element](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-user-identity.html) in the *AWS CloudTrail User Guide* .
         * - *`vpcEndpointId`* - This ﬁeld is only used to filter CloudTrail network activity events and is optional. This field identifies the VPC endpoint that the request passed through. You can use any operator with `vpcEndpointId` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-field
         */
        readonly field: string;
        /**
         * An operator that excludes events that match the last few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-notendswith
         */
        readonly notEndsWith?: Array<string>;
        /**
         * An operator that excludes events that match the exact value of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-notequals
         */
        readonly notEquals?: Array<string>;
        /**
         * An operator that excludes events that match the first few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-notstartswith
         */
        readonly notStartsWith?: Array<string>;
        /**
         * An operator that includes events that match the first few characters of the event record field specified as the value of `Field` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html#cfn-cloudtrail-trail-advancedfieldselector-startswith
         */
        readonly startsWith?: Array<string>;
    }
    /**
     * A JSON string that contains a list of Insights types that are logged on a trail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-insightselector.html
     */
    interface InsightSelectorProperty {
        /**
         * The type of Insights events to log on a trail. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
         *
         * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
         *
         * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-insightselector.html#cfn-cloudtrail-trail-insightselector-insighttype
         */
        readonly insightType?: string;
    }
}
/**
 * Properties for defining a `CfnTrail`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html
 */
export interface CfnTrailProps {
    /**
     * Specifies the settings for advanced event selectors.
     *
     * You can use advanced event selectors to log management events, data events for all resource types, and network activity events.
     *
     * You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either `AdvancedEventSelectors` or `EventSelectors` , but not both. If you apply `AdvancedEventSelectors` to a trail, any existing `EventSelectors` are overwritten. For more information about advanced event selectors, see [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) and [Logging network activity events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html) in the *AWS CloudTrail User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedeventselectors
     */
    readonly advancedEventSelectors?: Array<CfnTrail.AdvancedEventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered.
     *
     * You must use a log group that exists in your account.
     *
     * To enable CloudWatch Logs delivery, you must provide values for `CloudWatchLogsLogGroupArn` and `CloudWatchLogsRoleArn` .
     *
     * > If you previously enabled CloudWatch Logs delivery and want to disable CloudWatch Logs delivery, you must set the values of the `CloudWatchLogsRoleArn` and `CloudWatchLogsLogGroupArn` fields to `""` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-cloudwatchlogsloggrouparn
     */
    readonly cloudWatchLogsLogGroupArn?: string;
    /**
     * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
     *
     * You must use a role that exists in your account.
     *
     * To enable CloudWatch Logs delivery, you must provide values for `CloudWatchLogsLogGroupArn` and `CloudWatchLogsRoleArn` .
     *
     * > If you previously enabled CloudWatch Logs delivery and want to disable CloudWatch Logs delivery, you must set the values of the `CloudWatchLogsRoleArn` and `CloudWatchLogsLogGroupArn` fields to `""` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-cloudwatchlogsrolearn
     */
    readonly cloudWatchLogsRoleArn?: string;
    /**
     * Specifies whether log file validation is enabled. The default is false.
     *
     * > When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-enablelogfilevalidation
     */
    readonly enableLogFileValidation?: boolean | cdk.IResolvable;
    /**
     * Use event selectors to further specify the management and data event settings for your trail.
     *
     * By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
     *
     * You can configure up to five event selectors for a trail.
     *
     * You cannot apply both event selectors and advanced event selectors to a trail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-eventselectors
     */
    readonly eventSelectors?: Array<CfnTrail.EventSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether the trail is publishing events from global services such as IAM to the log files.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-includeglobalserviceevents
     */
    readonly includeGlobalServiceEvents?: boolean | cdk.IResolvable;
    /**
     * A JSON string that contains the Insights types you want to log on a trail.
     *
     * `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
     *
     * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
     *
     * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-insightselectors
     */
    readonly insightSelectors?: Array<CfnTrail.InsightSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Whether the CloudTrail trail is currently logging AWS API calls.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-islogging
     */
    readonly isLogging: boolean | cdk.IResolvable;
    /**
     * Specifies whether the trail applies only to the current Region or to all Regions.
     *
     * The default is false. If the trail exists only in the current Region and this value is set to true, shadow trails (replications of the trail) will be created in the other Regions. If the trail exists in all Regions and this value is set to false, the trail will remain in the Region where it was created, and its shadow trails in other Regions will be deleted. As a best practice, consider using trails that log events in all Regions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-ismultiregiontrail
     */
    readonly isMultiRegionTrail?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the trail is applied to all accounts in an organization in AWS Organizations , or only for the current AWS account .
     *
     * The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the management account for an organization in AWS Organizations . If the trail is not an organization trail and this is set to `true` , the trail will be created in all AWS accounts that belong to the organization. If the trail is an organization trail and this is set to `false` , the trail will remain in the current AWS account but be deleted from all member accounts in the organization.
     *
     * > Only the management account for the organization can convert an organization trail to a non-organization trail, or convert a non-organization trail to an organization trail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-isorganizationtrail
     */
    readonly isOrganizationTrail?: boolean | cdk.IResolvable;
    /**
     * Specifies the AWS KMS key ID to use to encrypt the logs delivered by CloudTrail.
     *
     * The value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
     *
     * CloudTrail also supports AWS KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *AWS Key Management Service Developer Guide* .
     *
     * Examples:
     *
     * - alias/MyAliasName
     * - arn:aws:kms:us-east-2:123456789012:alias/MyAliasName
     * - arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012
     * - 12345678-1234-1234-1234-123456789012
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies the name of the Amazon S3 bucket designated for publishing log files.
     *
     * See [Amazon S3 Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-s3bucketname
     */
    readonly s3BucketName: string;
    /**
     * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery.
     *
     * For more information, see [Finding Your CloudTrail Log Files](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files) . The maximum length is 200 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-s3keyprefix
     */
    readonly s3KeyPrefix?: string;
    /**
     * Specifies the name or ARN of the Amazon SNS topic defined for notification of log file delivery.
     *
     * The maximum length is 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-snstopicname
     */
    readonly snsTopicName?: string;
    /**
     * A custom set of tags (key-value pairs) for this trail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the name of the trail. The name must meet the following requirements:.
     *
     * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
     * - Start with a letter or number, and end with a letter or number
     * - Be between 3 and 128 characters
     * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
     * - Not be in IP address format (for example, 192.168.5.4)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-trailname
     */
    readonly trailName?: string;
}
/**
 * Creates a custom dashboard or the Highlights dashboard.
 *
 * - *Custom dashboards* - Custom dashboards allow you to query events in any event data store type. You can add up to 10 widgets to a custom dashboard. You can manually refresh a custom dashboard, or you can set a refresh schedule.
 * - *Highlights dashboard* - You can create the Highlights dashboard to see a summary of key user activities and API usage across all your event data stores. CloudTrail Lake manages the Highlights dashboard and refreshes the dashboard every 6 hours. To create the Highlights dashboard, you must set and enable a refresh schedule.
 *
 * CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the `StartQuery` operation on your behalf. To provide permissions, run the `PutResourcePolicy` operation to attach a resource-based policy to each event data store. For more information, see [Example: Allow CloudTrail to run queries to populate a dashboard](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-eds-dashboard) in the *AWS CloudTrail User Guide* .
 *
 * To set a refresh schedule, CloudTrail must be granted permissions to run the `StartDashboardRefresh` operation to refresh the dashboard on your behalf. To provide permissions, run the `PutResourcePolicy` operation to attach a resource-based policy to the dashboard. For more information, see [Resource-based policy example for a dashboard](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-dashboards) in the *AWS CloudTrail User Guide* .
 *
 * For more information about dashboards, see [CloudTrail Lake dashboards](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-dashboard.html) in the *AWS CloudTrail User Guide* .
 *
 * @cloudformationResource AWS::CloudTrail::Dashboard
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html
 */
export declare class CfnDashboard extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDashboard from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDashboard;
    /**
     * The timestamp that shows when the dashboard was created.
     *
     * @cloudformationAttribute CreatedTimestamp
     */
    readonly attrCreatedTimestamp: string;
    /**
     * The ARN for the dashboard.
     *
     * @cloudformationAttribute DashboardArn
     */
    readonly attrDashboardArn: string;
    /**
     * The status of the dashboard.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The type of dashboard.
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    /**
     * The timestamp that shows when the dashboard was updated.
     *
     * @cloudformationAttribute UpdatedTimestamp
     */
    readonly attrUpdatedTimestamp: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the dashboard. The name must be unique to your account.
     */
    name?: string;
    /**
     * The schedule for a dashboard refresh.
     */
    refreshSchedule?: cdk.IResolvable | CfnDashboard.RefreshScheduleProperty;
    /**
     * A list of tags.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Specifies whether termination protection is enabled for the dashboard.
     */
    terminationProtectionEnabled?: boolean | cdk.IResolvable;
    /**
     * An array of widgets for a custom dashboard. A custom dashboard can have a maximum of ten widgets.
     */
    widgets?: Array<cdk.IResolvable | CfnDashboard.WidgetProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDashboardProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDashboard {
    /**
     * Contains information about a widget on a CloudTrail Lake dashboard.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-widget.html
     */
    interface WidgetProperty {
        /**
         * The optional query parameters.
         *
         * The following query parameters are valid: `$StartTime$` , `$EndTime$` , and `$Period$` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-widget.html#cfn-cloudtrail-dashboard-widget-queryparameters
         */
        readonly queryParameters?: Array<string>;
        /**
         * The query statement for the widget.
         *
         * For custom dashboard widgets, you can query across multiple event data stores as long as all event data stores exist in your account.
         *
         * > When a query uses `?` with `eventTime` , `?` must be surrounded by single quotes as follows: `'?'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-widget.html#cfn-cloudtrail-dashboard-widget-querystatement
         */
        readonly queryStatement: string;
        /**
         * The view properties for the widget.
         *
         * For more information about view properties, see [View properties for widgets](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-widget-properties.html) in the *AWS CloudTrail User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-widget.html#cfn-cloudtrail-dashboard-widget-viewproperties
         */
        readonly viewProperties?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * The schedule for a dashboard refresh.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-refreshschedule.html
     */
    interface RefreshScheduleProperty {
        /**
         * The frequency at which you want the dashboard refreshed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-refreshschedule.html#cfn-cloudtrail-dashboard-refreshschedule-frequency
         */
        readonly frequency?: CfnDashboard.FrequencyProperty | cdk.IResolvable;
        /**
         * Specifies whether the refresh schedule is enabled.
         *
         * Set the value to `ENABLED` to enable the refresh schedule, or to `DISABLED` to turn off the refresh schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-refreshschedule.html#cfn-cloudtrail-dashboard-refreshschedule-status
         */
        readonly status?: string;
        /**
         * The time of day in UTC to run the schedule;
         *
         * for hourly only refer to minutes; default is 00:00.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-refreshschedule.html#cfn-cloudtrail-dashboard-refreshschedule-timeofday
         */
        readonly timeOfDay?: string;
    }
    /**
     * Specifies the frequency for a dashboard refresh schedule.
     *
     * For a custom dashboard, you can schedule a refresh for every 1, 6, 12, or 24 hours, or every day.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-frequency.html
     */
    interface FrequencyProperty {
        /**
         * The unit to use for the refresh.
         *
         * For custom dashboards, the unit can be `HOURS` or `DAYS` .
         *
         * For the Highlights dashboard, the `Unit` must be `HOURS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-frequency.html#cfn-cloudtrail-dashboard-frequency-unit
         */
        readonly unit: string;
        /**
         * The value for the refresh schedule.
         *
         * For custom dashboards, the following values are valid when the unit is `HOURS` : `1` , `6` , `12` , `24`
         *
         * For custom dashboards, the only valid value when the unit is `DAYS` is `1` .
         *
         * For the Highlights dashboard, the `Value` must be `6` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-dashboard-frequency.html#cfn-cloudtrail-dashboard-frequency-value
         */
        readonly value: number;
    }
}
/**
 * Properties for defining a `CfnDashboard`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html
 */
export interface CfnDashboardProps {
    /**
     * The name of the dashboard. The name must be unique to your account.
     *
     * To create the Highlights dashboard, the name must be `AWSCloudTrail-Highlights` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-name
     */
    readonly name?: string;
    /**
     * The schedule for a dashboard refresh.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-refreshschedule
     */
    readonly refreshSchedule?: cdk.IResolvable | CfnDashboard.RefreshScheduleProperty;
    /**
     * A list of tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies whether termination protection is enabled for the dashboard.
     *
     * If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-terminationprotectionenabled
     */
    readonly terminationProtectionEnabled?: boolean | cdk.IResolvable;
    /**
     * An array of widgets for a custom dashboard. A custom dashboard can have a maximum of ten widgets.
     *
     * You do not need to specify widgets for the Highlights dashboard.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-widgets
     */
    readonly widgets?: Array<cdk.IResolvable | CfnDashboard.WidgetProperty> | cdk.IResolvable;
}
