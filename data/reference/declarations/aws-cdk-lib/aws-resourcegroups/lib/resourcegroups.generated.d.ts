import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a resource group with the specified name and description.
 *
 * You can optionally include either a resource query or a service configuration. For more information about constructing a resource query, see [Build queries and groups in AWS Resource Groups](https://docs.aws.amazon.com//ARG/latest/userguide/getting_started-query.html) in the *AWS Resource Groups User Guide* . For more information about service-linked groups and service configurations, see [Service configurations for Resource Groups](https://docs.aws.amazon.com//ARG/latest/APIReference/about-slg.html) .
 *
 * *Minimum permissions*
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:CreateGroup`
 *
 * @cloudformationResource AWS::ResourceGroups::Group
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html
 */
export declare class CfnGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGroup;
    /**
     * The ARN of the new resource group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The service configuration currently associated with the resource group and in effect for the members of the resource group.
     */
    configuration?: Array<CfnGroup.ConfigurationItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the resource group.
     */
    description?: string;
    /**
     * The name of a resource group.
     */
    name: string;
    /**
     * The resource query structure that is used to dynamically determine which AWS resources are members of the associated resource group.
     */
    resourceQuery?: cdk.IResolvable | CfnGroup.ResourceQueryProperty;
    /**
     * A list of the Amazon Resource Names (ARNs) of AWS resources that you want to add to the specified group.
     */
    resources?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tag key and value pairs that are attached to the resource group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGroup {
    /**
     * One of the items in the service configuration assigned to a resource group.
     *
     * A service configuration can consist of one or more items. For details service configurations and how to construct them, see [Service configurations for resource groups](https://docs.aws.amazon.com//ARG/latest/APIReference/about-slg.html) in the *AWS Resource Groups User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationitem.html
     */
    interface ConfigurationItemProperty {
        /**
         * A collection of parameters for this configuration item.
         *
         * For the list of parameters that you can use with each configuration item `Type` , see [Supported resource types and parameters](https://docs.aws.amazon.com//ARG/latest/APIReference/about-slg.html#about-slg-types) in the *AWS Resource Groups User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationitem.html#cfn-resourcegroups-group-configurationitem-parameters
         */
        readonly parameters?: Array<CfnGroup.ConfigurationParameterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies the type of configuration item.
         *
         * Each item must have a unique value for type. For the list of the types that you can specify for a configuration item, see [Supported resource types and parameters](https://docs.aws.amazon.com//ARG/latest/APIReference/about-slg.html#about-slg-types) in the *AWS Resource Groups User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationitem.html#cfn-resourcegroups-group-configurationitem-type
         */
        readonly type?: string;
    }
    /**
     * One parameter for a group configuration item.
     *
     * For details about service configurations and how to construct them, see [Service configurations for resource groups](https://docs.aws.amazon.com//ARG/latest/APIReference/about-slg.html) in the *AWS Resource Groups User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationparameter.html
     */
    interface ConfigurationParameterProperty {
        /**
         * The name of the group configuration parameter.
         *
         * For the list of parameters that you can use with each configuration item type, see [Supported resource types and parameters](https://docs.aws.amazon.com//ARG/latest/APIReference/about-slg.html#about-slg-types) in the *AWS Resource Groups User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationparameter.html#cfn-resourcegroups-group-configurationparameter-name
         */
        readonly name?: string;
        /**
         * The value or values to be used for the specified parameter.
         *
         * For the list of values you can use with each parameter, see [Supported resource types and parameters](https://docs.aws.amazon.com//ARG/latest/APIReference/about-slg.html#about-slg-types) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationparameter.html#cfn-resourcegroups-group-configurationparameter-values
         */
        readonly values?: Array<string>;
    }
    /**
     * The query used to dynamically define the members of a group.
     *
     * For more information about how to construct a query, see [Build queries and groups in AWS Resource Groups](https://docs.aws.amazon.com//ARG/latest/userguide/gettingstarted-query.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-resourcequery.html
     */
    interface ResourceQueryProperty {
        /**
         * The query that defines the membership of the group.
         *
         * This is a structure with properties that depend on the `Type` .
         *
         * The `Query` structure must be included in the following scenarios:
         *
         * - When the `Type` is `TAG_FILTERS_1_0` , you must specify a `Query` structure that contains a `TagFilters` list of tags. Resources with tags that match those in the `TagFilter` list become members of the resource group.
         * - When the `Type` is `CLOUDFORMATION_STACK_1_0` then this field is required only when you must specify a CloudFormation stack other than the one you are defining. To do this, the `Query` structure must contain the `StackIdentifier` property. If you don't specify either a `Query` structure or a `StackIdentifier` within that `Query` , then it defaults to the CloudFormation stack that you're currently constructing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-resourcequery.html#cfn-resourcegroups-group-resourcequery-query
         */
        readonly query?: cdk.IResolvable | CfnGroup.QueryProperty;
        /**
         * Specifies the type of resource query that determines this group's membership. There are two valid query types:.
         *
         * - `TAG_FILTERS_1_0` indicates that the group is a tag-based group. To complete the group membership, you must include the `TagFilters` property to specify the tag filters to use in the query.
         * - `CLOUDFORMATION_STACK_1_0` , the default, indicates that the group is a CloudFormation stack-based group. Group membership is based on the CloudFormation stack. You must specify the `StackIdentifier` property in the query to define which stack to associate the group with, or leave it empty to default to the stack where the group is defined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-resourcequery.html#cfn-resourcegroups-group-resourcequery-type
         */
        readonly type?: string;
    }
    /**
     * Specifies details within a `ResourceQuery` structure that determines the membership of the resource group.
     *
     * The contents required in the `Query` structure are determined by the `Type` property of the containing `ResourceQuery` structure.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-query.html
     */
    interface QueryProperty {
        /**
         * Specifies limits to the types of resources that can be included in the resource group.
         *
         * For example, if `ResourceTypeFilters` is `["AWS::EC2::Instance", "AWS::DynamoDB::Table"]` , only EC2 instances or DynamoDB tables can be members of this resource group. The default value is `["AWS::AllSupported"]` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-query.html#cfn-resourcegroups-group-query-resourcetypefilters
         */
        readonly resourceTypeFilters?: Array<string>;
        /**
         * Specifies the ARN of a CloudFormation stack.
         *
         * All supported resources of the CloudFormation stack are members of the resource group. If you don't specify an ARN, this parameter defaults to the current stack that you are defining, which means that all the resources of the current stack are grouped.
         *
         * You can specify a value for `StackIdentifier` only when the `ResourceQuery.Type` property is `CLOUDFORMATION_STACK_1_0.`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-query.html#cfn-resourcegroups-group-query-stackidentifier
         */
        readonly stackIdentifier?: string;
        /**
         * A list of key-value pair objects that limit which resources can be members of the resource group.
         *
         * This property is required when the `ResourceQuery.Type` property is `TAG_FILTERS_1_0` .
         *
         * A resource must have a tag that matches every filter that is provided in the `TagFilters` list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-query.html#cfn-resourcegroups-group-query-tagfilters
         */
        readonly tagFilters?: Array<cdk.IResolvable | CfnGroup.TagFilterProperty> | cdk.IResolvable;
    }
    /**
     * Specifies a single tag key and optional values that you can use to specify membership in a tag-based group.
     *
     * An AWS resource that doesn't have a matching tag key and value is rejected as a member of the group.
     *
     * A `TagFilter` object includes two properties: `Key` (a string) and `Values` (a list of strings). Only resources in the account that are tagged with a matching key-value pair are members of the group. The `Values` property of `TagFilter` is optional, but specifying it narrows the query results.
     *
     * As an example, suppose the `TagFilters` string is `[{"Key": "Stage", "Values": ["Test", "Beta"]}, {"Key": "Storage"}]` . In this case, only resources with all of the following tags are members of the group:
     *
     * - `Stage` tag key with a value of either `Test` or `Beta`
     * - `Storage` tag key with any value
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-tagfilter.html
     */
    interface TagFilterProperty {
        /**
         * A string that defines a tag key.
         *
         * Only resources in the account that are tagged with a specified tag key are members of the tag-based resource group.
         *
         * This field is required when the `ResourceQuery` structure's `Type` property is `TAG_FILTERS_1_0` . You must specify at least one tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-tagfilter.html#cfn-resourcegroups-group-tagfilter-key
         */
        readonly key?: string;
        /**
         * A list of tag values that can be included in the tag-based resource group.
         *
         * This is optional. If you don't specify a value or values for a key, then an AWS resource with any value for that key is a member.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-tagfilter.html#cfn-resourcegroups-group-tagfilter-values
         */
        readonly values?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html
 */
export interface CfnGroupProps {
    /**
     * The service configuration currently associated with the resource group and in effect for the members of the resource group.
     *
     * A `Configuration` consists of one or more `ConfigurationItem` entries. For information about service configurations for resource groups and how to construct them, see [Service configurations for resource groups](https://docs.aws.amazon.com//ARG/latest/APIReference/about-slg.html) in the *AWS Resource Groups User Guide* .
     *
     * > You can include either a `Configuration` or a `ResourceQuery` , but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-configuration
     */
    readonly configuration?: Array<CfnGroup.ConfigurationItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the resource group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-description
     */
    readonly description?: string;
    /**
     * The name of a resource group.
     *
     * The name must be unique within the AWS Region in which you create the resource. To create multiple resource groups based on the same CloudFormation stack, you must generate unique names for each.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-name
     */
    readonly name: string;
    /**
     * The resource query structure that is used to dynamically determine which AWS resources are members of the associated resource group.
     *
     * For more information about queries and how to construct them, see [Build queries and groups in AWS Resource Groups](https://docs.aws.amazon.com//ARG/latest/userguide/gettingstarted-query.html) in the *AWS Resource Groups User Guide*
     *
     * > - You can include either a `ResourceQuery` or a `Configuration` , but not both.
     * > - You can specify the group's membership either by using a `ResourceQuery` or by using a list of `Resources` , but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-resourcequery
     */
    readonly resourceQuery?: cdk.IResolvable | CfnGroup.ResourceQueryProperty;
    /**
     * A list of the Amazon Resource Names (ARNs) of AWS resources that you want to add to the specified group.
     *
     * > - You can specify the group membership either by using a list of `Resources` or by using a `ResourceQuery` , but not both.
     * > - You can include a `Resources` property only if you also specify a `Configuration` property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-resources
     */
    readonly resources?: Array<string>;
    /**
     * The tag key and value pairs that are attached to the resource group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Onboards and syncs resources tagged with a specific tag key-value pair to an application.
 *
 * *Minimum permissions*
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:StartTagSyncTask`
 * - `resource-groups:CreateGroup`
 * - `iam:PassRole` for the role you provide to create a tag-sync task
 *
 * @cloudformationResource AWS::ResourceGroups::TagSyncTask
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html
 */
export declare class CfnTagSyncTask extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTagSyncTask from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTagSyncTask;
    /**
     * The Amazon resource name (ARN) of the application group.
     *
     * @cloudformationAttribute GroupArn
     */
    readonly attrGroupArn: string;
    /**
     * The name of the application group.
     *
     * @cloudformationAttribute GroupName
     */
    readonly attrGroupName: string;
    /**
     * The status of the tag-sync task.
     *
     * Valid values include:
     *
     * - `ACTIVE` - The tag-sync task is actively managing resources in the application by adding or removing the `awsApplication` tag from resources when they are tagged or untagged with the specified tag key-value pair.
     * - `ERROR` - The tag-sync task is not actively managing resources in the application. Review the `ErrorMessage` for more information about resolving the error.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon resource name (ARN) of the tag-sync task.
     *
     * @cloudformationAttribute TaskArn
     */
    readonly attrTaskArn: string;
    /**
     * The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task.
     */
    group: string;
    /**
     * The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.
     */
    roleArn: string;
    /**
     * The tag key.
     */
    tagKey: string;
    /**
     * The tag value.
     */
    tagValue: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTagSyncTaskProps);
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
 * Properties for defining a `CfnTagSyncTask`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html
 */
export interface CfnTagSyncTaskProps {
    /**
     * The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html#cfn-resourcegroups-tagsynctask-group
     */
    readonly group: string;
    /**
     * The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html#cfn-resourcegroups-tagsynctask-rolearn
     */
    readonly roleArn: string;
    /**
     * The tag key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html#cfn-resourcegroups-tagsynctask-tagkey
     */
    readonly tagKey: string;
    /**
     * The tag value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html#cfn-resourcegroups-tagsynctask-tagvalue
     */
    readonly tagValue: string;
}
