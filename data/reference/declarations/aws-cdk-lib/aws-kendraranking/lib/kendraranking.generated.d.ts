import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a rescore execution plan.
 *
 * A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.
 *
 * For an example of using the `CreateRescoreExecutionPlan` API, including using the Python and Java SDKs, see [Semantically ranking a search service's results](https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html) .
 *
 * @cloudformationResource AWS::KendraRanking::ExecutionPlan
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html
 */
export declare class CfnExecutionPlan extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnExecutionPlan from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnExecutionPlan;
    /**
     * The Amazon Resource Name (ARN) of the rescore execution plan.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The identifier of the rescore execution plan.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * You can set additional capacity units to meet the needs of your rescore execution plan.
     */
    capacityUnits?: CfnExecutionPlan.CapacityUnitsConfigurationProperty | cdk.IResolvable;
    /**
     * A description for the rescore execution plan.
     */
    description?: string;
    /**
     * A name for the rescore execution plan.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs that identify or categorize your rescore execution plan.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnExecutionPlanProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnExecutionPlan {
    /**
     * Sets additional capacity units configured for your rescore execution plan.
     *
     * A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API. You can add and remove capacity units to fit your usage requirements.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendraranking-executionplan-capacityunitsconfiguration.html
     */
    interface CapacityUnitsConfigurationProperty {
        /**
         * The amount of extra capacity for your rescore execution plan.
         *
         * A single extra capacity unit for a rescore execution plan provides 0.01 rescore requests per second. You can add up to 1000 extra capacity units.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendraranking-executionplan-capacityunitsconfiguration.html#cfn-kendraranking-executionplan-capacityunitsconfiguration-rescorecapacityunits
         */
        readonly rescoreCapacityUnits: number;
    }
}
/**
 * Properties for defining a `CfnExecutionPlan`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html
 */
export interface CfnExecutionPlanProps {
    /**
     * You can set additional capacity units to meet the needs of your rescore execution plan.
     *
     * You are given a single capacity unit by default. If you want to use the default capacity, you don't set additional capacity units. For more information on the default capacity and additional capacity units, see [Adjusting capacity](https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html#cfn-kendraranking-executionplan-capacityunits
     */
    readonly capacityUnits?: CfnExecutionPlan.CapacityUnitsConfigurationProperty | cdk.IResolvable;
    /**
     * A description for the rescore execution plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html#cfn-kendraranking-executionplan-description
     */
    readonly description?: string;
    /**
     * A name for the rescore execution plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html#cfn-kendraranking-executionplan-name
     */
    readonly name: string;
    /**
     * A list of key-value pairs that identify or categorize your rescore execution plan.
     *
     * You can also use tags to help control access to the rescore execution plan. Tag keys and values can consist of Unicode letters, digits, white space. They can also consist of underscore, period, colon, equal, plus, and asperand.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html#cfn-kendraranking-executionplan-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
