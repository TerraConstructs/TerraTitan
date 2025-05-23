import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Provides permissions for the AWS Shield Advanced Shield response team (SRT) to access your account and your resource protections, to help you mitigate potential distributed denial of service (DDoS) attacks.
 *
 * *Configure `AWS::Shield::DRTAccess` for one account*
 *
 * To configure this resource through AWS CloudFormation , you must be subscribed to AWS Shield Advanced . You can subscribe through the [Shield Advanced console](https://docs.aws.amazon.com/wafv2/shieldv2#/) and through the APIs. For more information, see [Subscribe to AWS Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/enable-ddos-prem.html) .
 *
 * See example templates for Shield Advanced in AWS CloudFormation at [aws-samples/aws-shield-advanced-examples](https://docs.aws.amazon.com/https://github.com/aws-samples/aws-shield-advanced-examples) .
 *
 * *Configure Shield Advanced using AWS CloudFormation and AWS Firewall Manager*
 *
 * You might be able to use Firewall Manager with AWS CloudFormation to configure Shield Advanced across multiple accounts and protected resources. To do this, your accounts must be part of an organization in AWS Organizations . You can use Firewall Manager to configure Shield Advanced protections for any resource types except for Amazon Route 53 or AWS Global Accelerator .
 *
 * For an example of this, see the one-click configuration guidance published by the AWS technical community at [One-click deployment of Shield Advanced](https://docs.aws.amazon.com/https://youtu.be/LCA3FwMk_QE) .
 *
 * @cloudformationResource AWS::Shield::DRTAccess
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html
 */
export declare class CfnDRTAccess extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDRTAccess from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDRTAccess;
    /**
     * The ID of the account that submitted the template.
     *
     * @cloudformationAttribute AccountId
     */
    readonly attrAccountId: string;
    /**
     * Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources.
     */
    logBucketList?: Array<string>;
    /**
     * Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks.
     */
    roleArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDRTAccessProps);
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
 * Properties for defining a `CfnDRTAccess`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html
 */
export interface CfnDRTAccessProps {
    /**
     * Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources.
     *
     * You can associate up to 10 Amazon S3 buckets with your subscription.
     *
     * Use this to share information with the SRT that's not available in AWS WAF logs.
     *
     * To use the services of the SRT, you must be subscribed to the [Business Support plan](https://docs.aws.amazon.com/premiumsupport/business-support/) or the [Enterprise Support plan](https://docs.aws.amazon.com/premiumsupport/enterprise-support/) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html#cfn-shield-drtaccess-logbucketlist
     */
    readonly logBucketList?: Array<string>;
    /**
     * Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks.
     *
     * This enables the SRT to inspect your AWS WAF configuration and logs and to create or update AWS WAF rules and web ACLs.
     *
     * You can associate only one `RoleArn` with your subscription. If you submit this update for an account that already has an associated role, the new `RoleArn` will replace the existing `RoleArn` .
     *
     * This change requires the following:
     *
     * - You must be subscribed to the [Business Support plan](https://docs.aws.amazon.com/premiumsupport/business-support/) or the [Enterprise Support plan](https://docs.aws.amazon.com/premiumsupport/enterprise-support/) .
     * - The `AWSShieldDRTAccessPolicy` managed policy must be attached to the role that you specify in the request. You can access this policy in the IAM console at [AWSShieldDRTAccessPolicy](https://docs.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy) . For information, see [Adding and removing IAM identity permissions](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html) .
     * - The role must trust the service principal `drt.shield.amazonaws.com` . For information, see [IAM JSON policy elements: Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html) .
     *
     * The SRT will have access only to your AWS WAF and Shield resources. By submitting this request, you provide permissions to the SRT to inspect your AWS WAF and Shield configuration and logs, and to create and update AWS WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html#cfn-shield-drtaccess-rolearn
     */
    readonly roleArn: string;
}
/**
 * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
 *
 * To enable proactive engagement, you must be subscribed to the [Business Support plan](https://docs.aws.amazon.com/premiumsupport/business-support/) or the [Enterprise Support plan](https://docs.aws.amazon.com/premiumsupport/enterprise-support/) .
 *
 * *Configure `AWS::Shield::ProactiveEngagement` for one account*
 *
 * To configure this resource through AWS CloudFormation , you must be subscribed to AWS Shield Advanced . You can subscribe through the [Shield Advanced console](https://docs.aws.amazon.com/wafv2/shieldv2#/) and through the APIs. For more information, see [Subscribe to AWS Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/enable-ddos-prem.html) .
 *
 * See example templates for Shield Advanced in AWS CloudFormation at [aws-samples/aws-shield-advanced-examples](https://docs.aws.amazon.com/https://github.com/aws-samples/aws-shield-advanced-examples) .
 *
 * *Configure Shield Advanced using AWS CloudFormation and AWS Firewall Manager*
 *
 * You might be able to use Firewall Manager with AWS CloudFormation to configure Shield Advanced across multiple accounts and protected resources. To do this, your accounts must be part of an organization in AWS Organizations . You can use Firewall Manager to configure Shield Advanced protections for any resource types except for Amazon Route 53 or AWS Global Accelerator .
 *
 * For an example of this, see the one-click configuration guidance published by the AWS technical community at [One-click deployment of Shield Advanced](https://docs.aws.amazon.com/https://youtu.be/LCA3FwMk_QE) .
 *
 * @cloudformationResource AWS::Shield::ProactiveEngagement
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html
 */
export declare class CfnProactiveEngagement extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProactiveEngagement from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProactiveEngagement;
    /**
     * The ID of the account that submitted the template.
     *
     * @cloudformationAttribute AccountId
     */
    readonly attrAccountId: string;
    /**
     * The list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support, plus any relevant notes.
     */
    emergencyContactList: Array<CfnProactiveEngagement.EmergencyContactProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether proactive engagement is enabled or disabled.
     */
    proactiveEngagementStatus: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProactiveEngagementProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProactiveEngagement {
    /**
     * Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-proactiveengagement-emergencycontact.html
     */
    interface EmergencyContactProperty {
        /**
         * Additional notes regarding the contact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-proactiveengagement-emergencycontact.html#cfn-shield-proactiveengagement-emergencycontact-contactnotes
         */
        readonly contactNotes?: string;
        /**
         * The email address for the contact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-proactiveengagement-emergencycontact.html#cfn-shield-proactiveengagement-emergencycontact-emailaddress
         */
        readonly emailAddress: string;
        /**
         * The phone number for the contact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-proactiveengagement-emergencycontact.html#cfn-shield-proactiveengagement-emergencycontact-phonenumber
         */
        readonly phoneNumber?: string;
    }
}
/**
 * Properties for defining a `CfnProactiveEngagement`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html
 */
export interface CfnProactiveEngagementProps {
    /**
     * The list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support, plus any relevant notes.
     *
     * To enable proactive engagement, the contact list must include at least one phone number.
     *
     * If you provide more than one contact, in the notes, indicate the circumstances under which each contact should be used. Include primary and secondary contact designations, and provide the hours of availability and time zones for each contact.
     *
     * Example contact notes:
     *
     * - This is a hotline that's staffed 24x7x365. Please work with the responding analyst and they will get the appropriate person on the call.
     * - Please contact the secondary phone number if the hotline doesn't respond within 5 minutes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html#cfn-shield-proactiveengagement-emergencycontactlist
     */
    readonly emergencyContactList: Array<CfnProactiveEngagement.EmergencyContactProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether proactive engagement is enabled or disabled.
     *
     * Valid values:
     *
     * `ENABLED` - The Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
     *
     * `DISABLED` - The SRT will not proactively notify contacts about escalations or to initiate proactive customer support.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html#cfn-shield-proactiveengagement-proactiveengagementstatus
     */
    readonly proactiveEngagementStatus: string;
}
/**
 * Enables AWS Shield Advanced for a specific AWS resource.
 *
 * The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, AWS Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.
 *
 * *Configure a single `AWS::Shield::Protection`*
 *
 * Use this protection to protect a single resource at a time.
 *
 * To configure this Shield Advanced protection through AWS CloudFormation , you must be subscribed to Shield Advanced . You can subscribe through the [Shield Advanced console](https://docs.aws.amazon.com/wafv2/shieldv2#/) and through the APIs. For more information, see [Subscribe to AWS Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/enable-ddos-prem.html) .
 *
 * See example templates for Shield Advanced in AWS CloudFormation at [aws-samples/aws-shield-advanced-examples](https://docs.aws.amazon.com/https://github.com/aws-samples/aws-shield-advanced-examples) .
 *
 * *Configure Shield Advanced using AWS CloudFormation and AWS Firewall Manager*
 *
 * You might be able to use Firewall Manager with AWS CloudFormation to configure Shield Advanced across multiple accounts and protected resources. To do this, your accounts must be part of an organization in AWS Organizations . You can use Firewall Manager to configure Shield Advanced protections for any resource types except for Amazon Route 53 or AWS Global Accelerator .
 *
 * For an example of this, see the one-click configuration guidance published by the AWS technical community at [One-click deployment of Shield Advanced](https://docs.aws.amazon.com/https://youtu.be/LCA3FwMk_QE) .
 *
 * *Configure multiple protections through the Shield Advanced console*
 *
 * You can add protection to multiple resources at once through the [Shield Advanced console](https://docs.aws.amazon.com/wafv2/shieldv2#/) . For more information see [Getting Started with AWS Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html) and [Managing resource protections in AWS Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-manage-protected-resources.html) .
 *
 * @cloudformationResource AWS::Shield::Protection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html
 */
export declare class CfnProtection extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProtection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProtection;
    /**
     * The ARN (Amazon Resource Name) of the new protection.
     *
     * @cloudformationAttribute ProtectionArn
     */
    readonly attrProtectionArn: string;
    /**
     * The ID of the new protection.
     *
     * @cloudformationAttribute ProtectionId
     */
    readonly attrProtectionId: string;
    /**
     * The automatic application layer DDoS mitigation settings for the protection.
     */
    applicationLayerAutomaticResponseConfiguration?: CfnProtection.ApplicationLayerAutomaticResponseConfigurationProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ARN (Amazon Resource Name) of the health check to associate with the protection.
     */
    healthCheckArns?: Array<string>;
    /**
     * The name of the protection. For example, `My CloudFront distributions` .
     */
    name: string;
    /**
     * The ARN (Amazon Resource Name) of the AWS resource that is protected.
     */
    resourceArn: string;
    /**
     * Key:value pairs associated with an AWS resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProtectionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProtection {
    /**
     * The automatic application layer DDoS mitigation settings for a `Protection` .
     *
     * This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.
     *
     * If you use AWS CloudFormation to manage the web ACLs that you use with Shield Advanced automatic mitigation, see the guidance for the `AWS::WAFv2::WebACL` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-applicationlayerautomaticresponseconfiguration.html
     */
    interface ApplicationLayerAutomaticResponseConfigurationProperty {
        /**
         * Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks.
         *
         * You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-applicationlayerautomaticresponseconfiguration.html#cfn-shield-protection-applicationlayerautomaticresponseconfiguration-action
         */
        readonly action: CfnProtection.ActionProperty | cdk.IResolvable;
        /**
         * Indicates whether automatic application layer DDoS mitigation is enabled for the protection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-applicationlayerautomaticresponseconfiguration.html#cfn-shield-protection-applicationlayerautomaticresponseconfiguration-status
         */
        readonly status: string;
    }
    /**
     * Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks.
     *
     * You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-action.html
     */
    interface ActionProperty {
        /**
         * Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Block` action.
         *
         * You must specify exactly one action, either `Block` or `Count` .
         *
         * Example JSON: `{ "Block": {} }`
         *
         * Example YAML: `Block: {}`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-action.html#cfn-shield-protection-action-block
         */
        readonly block?: any | cdk.IResolvable;
        /**
         * Specifies that Shield Advanced should configure its AWS WAF rules with the AWS WAF `Count` action.
         *
         * You must specify exactly one action, either `Block` or `Count` .
         *
         * Example JSON: `{ "Count": {} }`
         *
         * Example YAML: `Count: {}`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-shield-protection-action.html#cfn-shield-protection-action-count
         */
        readonly count?: any | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnProtection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html
 */
export interface CfnProtectionProps {
    /**
     * The automatic application layer DDoS mitigation settings for the protection.
     *
     * This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.
     *
     * If you use AWS CloudFormation to manage the web ACLs that you use with Shield Advanced automatic mitigation, see the additional guidance about web ACL management in the `AWS::WAFv2::WebACL` resource description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html#cfn-shield-protection-applicationlayerautomaticresponseconfiguration
     */
    readonly applicationLayerAutomaticResponseConfiguration?: CfnProtection.ApplicationLayerAutomaticResponseConfigurationProperty | cdk.IResolvable;
    /**
     * The ARN (Amazon Resource Name) of the health check to associate with the protection.
     *
     * Health-based detection provides improved responsiveness and accuracy in attack detection and mitigation.
     *
     * You can use this option with any resource type except for Route 53 hosted zones.
     *
     * For more information, see [Configuring health-based detection using health checks](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-health-checks.html) in the *AWS Shield Advanced Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html#cfn-shield-protection-healthcheckarns
     */
    readonly healthCheckArns?: Array<string>;
    /**
     * The name of the protection. For example, `My CloudFront distributions` .
     *
     * > If you change the name of an existing protection, Shield Advanced deletes the protection and replaces it with a new one. While this is happening, the protection isn't available on the AWS resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html#cfn-shield-protection-name
     */
    readonly name: string;
    /**
     * The ARN (Amazon Resource Name) of the AWS resource that is protected.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html#cfn-shield-protection-resourcearn
     */
    readonly resourceArn: string;
    /**
     * Key:value pairs associated with an AWS resource.
     *
     * The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html#cfn-shield-protection-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a grouping of protected resources so they can be handled as a collective.
 *
 * This resource grouping improves the accuracy of detection and reduces false positives.
 *
 * To configure this resource through AWS CloudFormation , you must be subscribed to AWS Shield Advanced . You can subscribe through the [Shield Advanced console](https://docs.aws.amazon.com/wafv2/shieldv2#/) and through the APIs. For more information, see [Subscribe to AWS Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/enable-ddos-prem.html) .
 *
 * @cloudformationResource AWS::Shield::ProtectionGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html
 */
export declare class CfnProtectionGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProtectionGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProtectionGroup;
    /**
     * The ARN (Amazon Resource Name) of the new protection group.
     *
     * @cloudformationAttribute ProtectionGroupArn
     */
    readonly attrProtectionGroupArn: string;
    /**
     * Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.
     */
    aggregation: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ARNs (Amazon Resource Names) of the resources to include in the protection group.
     */
    members?: Array<string>;
    /**
     * The criteria to use to choose the protected resources for inclusion in the group.
     */
    pattern: string;
    /**
     * The name of the protection group.
     */
    protectionGroupId: string;
    /**
     * The resource type to include in the protection group.
     */
    resourceType?: string;
    /**
     * Key:value pairs associated with an AWS resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProtectionGroupProps);
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
 * Properties for defining a `CfnProtectionGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html
 */
export interface CfnProtectionGroupProps {
    /**
     * Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.
     *
     * - `Sum` - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.
     * - `Mean` - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.
     * - `Max` - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront distributions and origin resources for CloudFront distributions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html#cfn-shield-protectiongroup-aggregation
     */
    readonly aggregation: string;
    /**
     * The ARNs (Amazon Resource Names) of the resources to include in the protection group.
     *
     * You must set this when you set `Pattern` to `ARBITRARY` and you must not set it for any other `Pattern` setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html#cfn-shield-protectiongroup-members
     */
    readonly members?: Array<string>;
    /**
     * The criteria to use to choose the protected resources for inclusion in the group.
     *
     * You can include all resources that have protections, provide a list of resource ARNs (Amazon Resource Names), or include all resources of a specified resource type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html#cfn-shield-protectiongroup-pattern
     */
    readonly pattern: string;
    /**
     * The name of the protection group.
     *
     * You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html#cfn-shield-protectiongroup-protectiongroupid
     */
    readonly protectionGroupId: string;
    /**
     * The resource type to include in the protection group.
     *
     * All protected resources of this type are included in the protection group. You must set this when you set `Pattern` to `BY_RESOURCE_TYPE` and you must not set it for any other `Pattern` setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html#cfn-shield-protectiongroup-resourcetype
     */
    readonly resourceType?: string;
    /**
     * Key:value pairs associated with an AWS resource.
     *
     * The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protectiongroup.html#cfn-shield-protectiongroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
