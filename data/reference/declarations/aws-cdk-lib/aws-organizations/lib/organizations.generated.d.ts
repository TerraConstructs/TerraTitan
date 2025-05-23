import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an AWS account that is automatically a member of the organization whose credentials made the request.
 *
 * AWS CloudFormation uses the [`CreateAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateAccount.html) operation to create accounts. This is an asynchronous request that AWS performs in the background. Because `CreateAccount` operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:
 *
 * - Use the `Id` value of the `CreateAccountStatus` response element from the `CreateAccount` operation to provide as a parameter to the [`DescribeCreateAccountStatus`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html) operation.
 * - Check the CloudTrail log for the `CreateAccountResult` event. For information on using CloudTrail with AWS Organizations , see [Logging and monitoring in AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration) in the *AWS Organizations User Guide* .
 *
 * The user who calls the API to create an account must have the `organizations:CreateAccount` permission. If you enabled all features in the organization, AWS Organizations creates the required service-linked role named `AWSServiceRoleForOrganizations` . For more information, see [AWS Organizations and service-linked roles](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs) in the *AWS Organizations User Guide* .
 *
 * If the request includes tags, then the requester must have the `organizations:TagResource` permission.
 *
 * AWS Organizations preconfigures the new member account with a role (named `OrganizationAccountAccessRole` by default) that grants users in the management account administrator permissions in the new member account. Principals in the management account can assume the role. AWS Organizations clones the company name and address information for the new account from the organization's management account.
 *
 * For more information about creating accounts, see [Creating a member account in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html) in the *AWS Organizations User Guide* .
 *
 * This operation can be called only from the organization's management account.
 *
 * *Deleting Account resources*
 *
 * The default `DeletionPolicy` for resource `AWS::Organizations::Account` is `Retain` . For more information about how AWS CloudFormation deletes resources, see [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) .
 *
 * > - If you include multiple accounts in a single template, you must use the `DependsOn` attribute on each account resource type so that the accounts are created sequentially. If you create multiple accounts at the same time, Organizations returns an error and the stack operation fails.
 * > - You can't modify the following list of `Account` resource parameters using AWS CloudFormation updates.
 * >
 * > - AccountName
 * > - Email
 * > - RoleName
 * >
 * > If you attempt to update the listed parameters, CloudFormation will attempt the update, but you will receive an error message as those updates are not supported from an Organizations management account or a [registered delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) account. Both the update and the update roll-back will fail, so you must skip the account resource update. To update parameters `AccountName` and `Email` , you must sign in to the AWS Management Console as the AWS account root user. For more information, see [Update the AWS account name, email address, or password for the root user](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html) in the *AWS Account Management Reference Guide* .
 * > - When you create an account in an organization using the AWS Organizations console, API, or AWS CLI commands, we don't automatically collect the information required for the account to operate as a standalone account. That includes collecting the payment method and signing the end user license agreement (EULA). If you must remove an account from your organization later, you can do so only after you provide the missing information. For more information, see [Considerations before removing an account from an organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_account-before-remove.html) in the *AWS Organizations User Guide* .
 * > - When you create an account in an organization using AWS CloudFormation , you can't specify a value for the `CreateAccount` operation parameter `IamUserAccessToBilling` . The default value for parameter `IamUserAccessToBilling` is `ALLOW` , and IAM users and roles with the required permissions can access billing information for the new account.
 * > - If you get an exception that indicates `DescribeCreateAccountStatus returns IN_PROGRESS state before time out` . You must check the account creation status using the [`DescribeCreateAccountStatus`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html) operation. If the account state returns as `SUCCEEDED` , you can import the account into AWS CloudFormation management using [`resource import`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import.html) .
 * > - If you get an exception that indicates you have exceeded your account quota for the organization, you can request an increase by using the [Service Quotas console](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html) .
 * > - If you get an exception that indicates the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact [AWS Support](https://docs.aws.amazon.com/support/home#/) .
 * > - We don't recommend that you use the `CreateAccount` operation to create multiple temporary accounts. You can close accounts using the [`CloseAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CloseAccount.html) operation or from the AWS Organizations console in the organization's management account. For information on the requirements and process for closing an account, see [Closing a member account in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html) in the *AWS Organizations User Guide* .
 *
 * @cloudformationResource AWS::Organizations::Account
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html
 */
export declare class CfnAccount extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccount from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccount;
    /**
     * Returns the unique identifier (ID) of the account. For example: `123456789012` .
     *
     * @cloudformationAttribute AccountId
     */
    readonly attrAccountId: string;
    /**
     * Returns the Amazon Resource Name (ARN) of the account. For example: `arn:aws:organizations::111111111111:account/o-exampleorgid/555555555555` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the method by which the account joined the organization. For example: `INVITED | CREATED` .
     *
     * @cloudformationAttribute JoinedMethod
     */
    readonly attrJoinedMethod: string;
    /**
     * Returns the date the account became a part of the organization. For example: `2016-11-24T11:11:48-08:00` .
     *
     * @cloudformationAttribute JoinedTimestamp
     */
    readonly attrJoinedTimestamp: string;
    /**
     * Returns the status of the account in the organization. For example: `ACTIVE | SUSPENDED | PENDING_CLOSURE` .
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The account name given to the account when it was created.
     */
    accountName: string;
    /**
     * The email address associated with the AWS account.
     */
    email: string;
    /**
     * The unique identifier (ID) of the root or organizational unit (OU) that you want to create the new account in.
     */
    parentIds?: Array<string>;
    /**
     * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.
     */
    roleName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags that you want to attach to the newly created account.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccountProps);
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
 * Properties for defining a `CfnAccount`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html
 */
export interface CfnAccountProps {
    /**
     * The account name given to the account when it was created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-accountname
     */
    readonly accountName: string;
    /**
     * The email address associated with the AWS account.
     *
     * The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) for this parameter is a string of characters that represents a standard internet email address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-email
     */
    readonly email: string;
    /**
     * The unique identifier (ID) of the root or organizational unit (OU) that you want to create the new account in.
     *
     * If you don't specify this parameter, the `ParentId` defaults to the root ID.
     *
     * This parameter only accepts a string array with one string value.
     *
     * The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) for a parent ID string requires one of the following:
     *
     * - *Root* - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
     * - *Organizational unit (OU)* - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-parentids
     */
    readonly parentIds?: Array<string>;
    /**
     * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.
     *
     * This role trusts the management account, allowing users in the management account to assume the role, as permitted by the management account administrator. The role has administrator permissions in the new member account.
     *
     * If you don't specify this parameter, the role name defaults to `OrganizationAccountAccessRole` .
     *
     * For more information about how to use this role to access the member account, see the following links:
     *
     * - [Creating the OrganizationAccountAccessRole in an invited member account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role) in the *AWS Organizations User Guide*
     * - Steps 2 and 3 in [IAM Tutorial: Delegate access across AWS accounts using IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html) in the *IAM User Guide*
     *
     * The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) that is used to validate this parameter. The pattern can include uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-
     *
     * @default - "OrganizationAccountAccessRole"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-rolename
     */
    readonly roleName?: string;
    /**
     * A list of tags that you want to attach to the newly created account.
     *
     * For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null` . For more information about tagging, see [Tagging AWS Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the AWS Organizations User Guide.
     *
     * > If any one of the tags is not valid or if you exceed the maximum allowed number of tags for an account, then the entire request fails and the account is not created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an AWS organization.
 *
 * The account whose user is calling the [`CreateOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html) operation automatically becomes the [management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) of the new organization.
 *
 * This operation must be called using credentials from the account that is to become the new organization's management account. The principal must also have the [relevant IAM permissions](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_create.html) .
 *
 * > - If you delete an organization, you can't recover it. If you created any policies inside of the organization, they're also deleted and you can't recover them.
 * > - You can delete an organization only after you remove all member accounts from the organization. If you created some of your member accounts using AWS Organizations , you might be blocked from removing those accounts. You can remove a member account only if it has all the information that's required to operate as a standalone AWS account. For more information about how to provide that information and then remove the account, see [Leave an organization from your member account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_leave-as-member.html) in the *AWS Organizations User Guide* .
 * > - If you closed a member account before you remove it from the organization, it enters a 'suspended' state for a period of time and you can't remove the account from the organization until it is finally closed. This can take up to 90 days and can prevent you from deleting the organization until all member accounts are completely closed.
 * >
 * > For more information, see [Deleting an organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_delete.html) in the *AWS Organizations User Guide* .
 *
 * @cloudformationResource AWS::Organizations::Organization
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html
 */
export declare class CfnOrganization extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOrganization from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOrganization;
    /**
     * The Amazon Resource Name (ARN) of an organization.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier (ID) of an organization.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Amazon Resource Name (ARN) of the account that is designated as the management account for the organization.
     *
     * @cloudformationAttribute ManagementAccountArn
     */
    readonly attrManagementAccountArn: string;
    /**
     * The email address that is associated with the AWS account that is designated as the management account for the organization.
     *
     * @cloudformationAttribute ManagementAccountEmail
     */
    readonly attrManagementAccountEmail: string;
    /**
     * The unique identifier (ID) of the management account of an organization.
     *
     * @cloudformationAttribute ManagementAccountId
     */
    readonly attrManagementAccountId: string;
    /**
     * The unique identifier (ID) for the root.
     *
     * @cloudformationAttribute RootId
     */
    readonly attrRootId: string;
    /**
     * Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
     */
    featureSet?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnOrganizationProps);
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
 * Properties for defining a `CfnOrganization`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html
 */
export interface CfnOrganizationProps {
    /**
     * Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
     *
     * - `ALL`  In addition to all the features supported by the consolidated billing feature set, the management account gains access to advanced features that give you more control over accounts in your organization. For more information, see [All features](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-all) in the *AWS Organizations User Guide* .
     * - `CONSOLIDATED_BILLING`  All member accounts have their bills consolidated to and paid by the management account. For more information, see [Consolidated billing](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-cb-only) in the *AWS Organizations User Guide* .
     *
     * > The consolidated billing feature feature set isn't available for organizations in the AWS GovCloud (US) Region.
     *
     * If you don't specify this property, the default value is `ALL` .
     *
     * @default - "ALL"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html#cfn-organizations-organization-featureset
     */
    readonly featureSet?: string;
}
/**
 * Creates an organizational unit (OU) within a root or parent OU.
 *
 * An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five.
 *
 * For more information about OUs, see [Managing organizational units (OUs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html) in the *AWS Organizations User Guide* .
 *
 * If the request includes tags, then the requester must have the `organizations:TagResource` permission.
 *
 * This operation can be called only from the organization's management account.
 *
 * @cloudformationResource AWS::Organizations::OrganizationalUnit
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organizationalunit.html
 */
export declare class CfnOrganizationalUnit extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOrganizationalUnit from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOrganizationalUnit;
    /**
     * The Amazon Resource Name (ARN) of this OU. For example: `arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier (ID) associated with this OU. For example: `ou-examplerootid111-exampleouid111` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The friendly name of this OU.
     */
    name: string;
    /**
     * The unique identifier (ID) of the parent root or OU that you want to create the new OU in.
     */
    parentId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags that you want to attach to the newly created OU.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnOrganizationalUnitProps);
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
 * Properties for defining a `CfnOrganizationalUnit`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organizationalunit.html
 */
export interface CfnOrganizationalUnitProps {
    /**
     * The friendly name of this OU.
     *
     * The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organizationalunit.html#cfn-organizations-organizationalunit-name
     */
    readonly name: string;
    /**
     * The unique identifier (ID) of the parent root or OU that you want to create the new OU in.
     *
     * > To update the `ParentId` parameter value, you must first remove all accounts attached to the organizational unit (OU). OUs can't be moved within the organization with accounts still attached.
     *
     * The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) for a parent ID string requires one of the following:
     *
     * - *Root* - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
     * - *Organizational unit (OU)* - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organizationalunit.html#cfn-organizations-organizationalunit-parentid
     */
    readonly parentId: string;
    /**
     * A list of tags that you want to attach to the newly created OU.
     *
     * For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null` . For more information about tagging, see [Tagging AWS Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the AWS Organizations User Guide.
     *
     * > If any one of the tags is not valid or if you exceed the allowed number of tags for an OU, then the entire request fails and the OU is not created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organizationalunit.html#cfn-organizations-organizationalunit-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual AWS account .
 *
 * For more information about policies and their use, see [Managing AWS Organizations policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html) .
 *
 * If the request includes tags, then the requester must have the `organizations:TagResource` permission.
 *
 * This operation can be called only from the organization's management account or a member account designated as a delegated administrator.
 *
 * > Before you can create a policy of a given type, you must first [enable that policy type](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_enable-disable.html) in your organization.
 *
 * @cloudformationResource AWS::Organizations::Policy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html
 */
export declare class CfnPolicy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPolicy;
    /**
     * Returns the Amazon Resource Name (ARN) of the policy. For example: `arn:aws:organizations::111111111111:policy/o-exampleorgid/service_control_policy/p-examplepolicyid111` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns a boolean value that indicates whether the specified policy is an AWS managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it. For example: `true | false` .
     *
     * @cloudformationAttribute AwsManaged
     */
    readonly attrAwsManaged: cdk.IResolvable;
    /**
     * Returns the unique identifier (ID) of the policy. For example: `p-examplepolicyid111` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The policy text content. You can specify the policy content as a JSON object or a JSON string.
     */
    content: any | cdk.IResolvable;
    /**
     * Human readable description of the policy.
     */
    description?: string;
    /**
     * Name of the policy.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags that you want to attach to the newly created policy.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.
     */
    targetIds?: Array<string>;
    /**
     * The type of policy to create.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPolicyProps);
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
 * Properties for defining a `CfnPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html
 */
export interface CfnPolicyProps {
    /**
     * The policy text content. You can specify the policy content as a JSON object or a JSON string.
     *
     * > When you specify the policy content as a JSON string, you can't perform drift detection on the CloudFormation stack. For this reason, we recommend specifying the policy content as a JSON object instead.
     *
     * The text that you supply must adhere to the rules of the policy type you specify in the `Type` parameter. The following AWS Organizations quotas are enforced for the maximum size of a policy document:
     *
     * - Service control policies: 5,120 characters
     * - Resource control policies: 5,120 characters
     * - Declarative policies: 10,000 characters
     * - Backup policies: 10,000 characters
     * - Tag policies: 10,000 characters
     * - Chat applications policies: 10,000 characters
     * - AI services opt-out policies: 2,500 characters
     *
     * For more information about Organizations service quotas, see [Quotas for AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html) in the *AWS Organizations User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html#cfn-organizations-policy-content
     */
    readonly content: any | cdk.IResolvable;
    /**
     * Human readable description of the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html#cfn-organizations-policy-description
     */
    readonly description?: string;
    /**
     * Name of the policy.
     *
     * The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html#cfn-organizations-policy-name
     */
    readonly name: string;
    /**
     * A list of tags that you want to attach to the newly created policy.
     *
     * For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null` . For more information about tagging, see [Tagging AWS Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the AWS Organizations User Guide.
     *
     * > If any one of the tags is not valid or if you exceed the allowed number of tags for a policy, then the entire request fails and the policy is not created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html#cfn-organizations-policy-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.
     *
     * You can get the ID by calling the [ListRoots](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html) , [ListOrganizationalUnitsForParent](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListOrganizationalUnitsForParent.html) , or [ListAccounts](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html) operations. If you don't specify this parameter, the policy is created but not attached to any organization resource.
     *
     * The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) for a target ID string requires one of the following:
     *
     * - *Root* - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits.
     * - *Account* - A string that consists of exactly 12 digits.
     * - *Organizational unit (OU)* - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html#cfn-organizations-policy-targetids
     */
    readonly targetIds?: Array<string>;
    /**
     * The type of policy to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html#cfn-organizations-policy-type
     */
    readonly type: string;
}
/**
 * Creates or updates a resource-based delegation policy that can be used to delegate policy management for AWS Organizations to specified member accounts to perform policy actions that are by default available only to the management account.
 *
 * For more information about delegated policy management, see [Delegated administrator for AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_delegate_policies.html) in the *AWS Organizations User Guide* .
 *
 * You can only call this operation from the organization's management account.
 *
 * @cloudformationResource AWS::Organizations::ResourcePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html
 */
export declare class CfnResourcePolicy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * Returns the Amazon Resource Name (ARN) of the policy. For example: `arn:aws:organizations::111111111111:resourcepolicy/o-exampleorgid/rp-examplepolicyid111` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the unique identifier (ID) of the resource policy. For example: `rp-examplepolicyid111` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The policy text of the organization resource policy.
     */
    content: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags that you want to attach to the newly created resource policy.
     */
    tagsRaw?: Array<cdk.CfnTag>;
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html
 */
export interface CfnResourcePolicyProps {
    /**
     * The policy text of the organization resource policy.
     *
     * You can specify the resource policy content as a JSON object or a JSON string.
     *
     * > When you specify the resource policy content as a JSON string, you can't perform drift detection on the CloudFormation stack. For this reason, we recommend specifying the resource policy content as a JSON object instead.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html#cfn-organizations-resourcepolicy-content
     */
    readonly content: any | cdk.IResolvable;
    /**
     * A list of tags that you want to attach to the newly created resource policy.
     *
     * For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null` . For more information about tagging, see [Tagging AWS Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the *AWS Organizations User Guide* .
     *
     * > If any one of the tags is not valid or if you exceed the allowed number of tags for the resource policy, then the entire request fails and the resource policy is not created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html#cfn-organizations-resourcepolicy-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
