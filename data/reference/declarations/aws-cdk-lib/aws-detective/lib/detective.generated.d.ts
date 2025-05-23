import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Detective::Graph` resource is an Amazon Detective resource type that creates a Detective behavior graph.
 *
 * The requesting account becomes the administrator account for the behavior graph.
 *
 * @cloudformationResource AWS::Detective::Graph
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html
 */
export declare class CfnGraph extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGraph from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGraph;
    /**
     * The ARN of the new behavior graph.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.
     */
    autoEnableMembers?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tag values to assign to the new behavior graph.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnGraphProps);
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
 * Properties for defining a `CfnGraph`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html
 */
export interface CfnGraphProps {
    /**
     * Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.
     *
     * By default, this property is set to `false` . If you want to change the value of this property, you must be the Detective administrator for the organization. For more information on setting a Detective administrator account, see [AWS::Detective::OrganizationAdmin](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html)
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html#cfn-detective-graph-autoenablemembers
     */
    readonly autoEnableMembers?: boolean | cdk.IResolvable;
    /**
     * The tag values to assign to the new behavior graph.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html#cfn-detective-graph-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Detective::MemberInvitation` resource is an Amazon Detective resource type that creates an invitation to join a Detective behavior graph.
 *
 * The administrator account can choose whether to send an email notification of the invitation to the root user email address of the AWS account.
 *
 * @cloudformationResource AWS::Detective::MemberInvitation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html
 */
export declare class CfnMemberInvitation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMemberInvitation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMemberInvitation;
    /**
     * Whether to send an invitation email to the member account.
     */
    disableEmailNotification?: boolean | cdk.IResolvable;
    /**
     * The ARN of the behavior graph to invite the account to contribute data to.
     */
    graphArn: string;
    /**
     * The root user email address of the invited account.
     */
    memberEmailAddress: string;
    /**
     * The AWS account identifier of the invited account.
     */
    memberId: string;
    /**
     * Customized text to include in the invitation email message.
     */
    message?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMemberInvitationProps);
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
 * Properties for defining a `CfnMemberInvitation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html
 */
export interface CfnMemberInvitationProps {
    /**
     * Whether to send an invitation email to the member account.
     *
     * If set to true, the member account does not receive an invitation email.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-disableemailnotification
     */
    readonly disableEmailNotification?: boolean | cdk.IResolvable;
    /**
     * The ARN of the behavior graph to invite the account to contribute data to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-grapharn
     */
    readonly graphArn: string;
    /**
     * The root user email address of the invited account.
     *
     * If the email address provided is not the root user email address for the provided account, the invitation creation fails.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-memberemailaddress
     */
    readonly memberEmailAddress: string;
    /**
     * The AWS account identifier of the invited account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-memberid
     */
    readonly memberId: string;
    /**
     * Customized text to include in the invitation email message.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-message
     */
    readonly message?: string;
}
/**
 * The `AWS::Detective::OrganizationAdmin` resource is an Amazon Detective resource type that designates the Detective administrator account for the organization in the current region.
 *
 * If the account does not have Detective enabled, then this resource enables Detective for that account and creates a new behavior graph.
 *
 * @cloudformationResource AWS::Detective::OrganizationAdmin
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html
 */
export declare class CfnOrganizationAdmin extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOrganizationAdmin from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOrganizationAdmin;
    /**
     * The ARN of the behavior graph to invite the account to contribute data to.
     *
     * @cloudformationAttribute GraphArn
     */
    readonly attrGraphArn: string;
    /**
     * The AWS account identifier of the account to designate as the Detective administrator account for the organization.
     */
    accountId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnOrganizationAdminProps);
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
 * Properties for defining a `CfnOrganizationAdmin`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html
 */
export interface CfnOrganizationAdminProps {
    /**
     * The AWS account identifier of the account to designate as the Detective administrator account for the organization.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html#cfn-detective-organizationadmin-accountid
     */
    readonly accountId: string;
}
