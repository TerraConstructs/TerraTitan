import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a customer managed permission for a specified resource type that you can attach to resource shares.
 *
 * It is created in the AWS Region in which you call the operation.
 *
 * @cloudformationResource AWS::RAM::Permission
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html
 */
export declare class CfnPermission extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPermission from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPermission;
    /**
     * The Amazon Resource Name (ARN) of the new permission.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Specifies whether this permission is the default for new resource shares that include resources of the associated resource type.
     *
     * @cloudformationAttribute IsResourceTypeDefault
     */
    readonly attrIsResourceTypeDefault: cdk.IResolvable;
    /**
     * The type of managed permission. This can be one of the following values:
     *
     * - *AWS_MANAGED_PERMISSION* – AWS created and manages this managed permission. You can associate it with your resource shares, but you can't modify it.
     * - *CUSTOMER_MANAGED_PERMISSION* – You, or another principal in your account created this managed permission. You can associate it with your resource shares and create new versions that have different permissions.
     *
     * @cloudformationAttribute PermissionType
     */
    readonly attrPermissionType: string;
    /**
     * The version number for this version of the permission.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * Specifies the name of the customer managed permission.
     */
    name: string;
    /**
     * A string in JSON format string that contains the following elements of a resource-based policy:.
     */
    policyTemplate: any | cdk.IResolvable;
    /**
     * Specifies the name of the resource type that this customer managed permission applies to.
     */
    resourceType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies a list of one or more tag key and value pairs to attach to the permission.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPermissionProps);
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
 * Properties for defining a `CfnPermission`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html
 */
export interface CfnPermissionProps {
    /**
     * Specifies the name of the customer managed permission.
     *
     * The name must be unique within the AWS Region .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-name
     */
    readonly name: string;
    /**
     * A string in JSON format string that contains the following elements of a resource-based policy:.
     *
     * - *Effect* : must be set to `ALLOW` .
     * - *Action* : specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see [Actions, resources, and condition keys for AWS services](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html) in the *AWS Identity and Access Management User Guide* .
     * - *Condition* : (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see [IAM policies: Condition element](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html) in the *AWS Identity and Access Management User Guide* .
     *
     * This template can't include either the `Resource` or `Principal` elements. Those are both filled in by AWS RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The `Resource` comes from the ARN of the specific resource that you are sharing. The `Principal` comes from the list of identities added to the resource share.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-policytemplate
     */
    readonly policyTemplate: any | cdk.IResolvable;
    /**
     * Specifies the name of the resource type that this customer managed permission applies to.
     *
     * The format is `*<service-code>* : *<resource-type>*` and is not case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the string `ec2:subnet` . To see the list of valid values for this parameter, query the [ListResourceTypes](https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceTypes.html) operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-resourcetype
     */
    readonly resourceType: string;
    /**
     * Specifies a list of one or more tag key and value pairs to attach to the permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a resource share.
 *
 * You can provide a list of the Amazon Resource Names (ARNs) for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.
 *
 * > Sharing a resource makes it available for use by principals outside of the AWS account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.
 *
 * @cloudformationResource AWS::RAM::ResourceShare
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html
 */
export declare class CfnResourceShare extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceShare from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceShare;
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share.
     */
    allowExternalPrincipals?: boolean | cdk.IResolvable;
    /**
     * Specifies the name of the resource share.
     */
    name: string;
    /**
     * Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com//general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.
     */
    permissionArns?: Array<string>;
    /**
     * Specifies the principals to associate with the resource share. The possible values are:.
     */
    principals?: Array<string>;
    /**
     * Specifies a list of one or more ARNs of the resources to associate with the resource share.
     */
    resourceArns?: Array<string>;
    /**
     * Specifies from which source accounts the service principal has access to the resources in this resource share.
     */
    sources?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies one or more tags to attach to the resource share itself.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceShareProps);
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
 * Properties for defining a `CfnResourceShare`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html
 */
export interface CfnResourceShareProps {
    /**
     * Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share.
     *
     * A value of `true` lets you share with individual AWS accounts that are *not* in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-allowexternalprincipals
     */
    readonly allowExternalPrincipals?: boolean | cdk.IResolvable;
    /**
     * Specifies the name of the resource share.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-name
     */
    readonly name: string;
    /**
     * Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com//general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-permissionarns
     */
    readonly permissionArns?: Array<string>;
    /**
     * Specifies the principals to associate with the resource share. The possible values are:.
     *
     * - An AWS account ID
     * - An Amazon Resource Name (ARN) of an organization in AWS Organizations
     * - An ARN of an organizational unit (OU) in AWS Organizations
     * - An ARN of an IAM role
     * - An ARN of an IAM user
     *
     * > Not all resource types can be shared with IAM roles and users. For more information, see the column *Can share with IAM roles and users* in the tables on [Shareable AWS resources](https://docs.aws.amazon.com/ram/latest/userguide/shareable.html) in the *AWS Resource Access Manager User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-principals
     */
    readonly principals?: Array<string>;
    /**
     * Specifies a list of one or more ARNs of the resources to associate with the resource share.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-resourcearns
     */
    readonly resourceArns?: Array<string>;
    /**
     * Specifies from which source accounts the service principal has access to the resources in this resource share.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-sources
     */
    readonly sources?: Array<string>;
    /**
     * Specifies one or more tags to attach to the resource share itself.
     *
     * It doesn't attach the tags to the resources associated with the resource share.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
