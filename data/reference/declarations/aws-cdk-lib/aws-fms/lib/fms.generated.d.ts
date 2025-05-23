import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Designates the IAM role and Amazon Simple Notification Service (SNS) topic to use to record SNS logs.
 *
 * To perform this action outside of the console, you must configure the SNS topic to allow the role `AWSServiceRoleForFMS` to publish SNS logs. For more information, see [Firewall Manager required permissions for API actions](https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html) in the *AWS Firewall Manager Developer Guide* .
 *
 * @cloudformationResource AWS::FMS::NotificationChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html
 */
export declare class CfnNotificationChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNotificationChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNotificationChannel;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record AWS Firewall Manager activity.
     */
    snsRoleName: string;
    /**
     * The Amazon Resource Name (ARN) of the SNS topic that collects notifications from AWS Firewall Manager .
     */
    snsTopicArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNotificationChannelProps);
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
 * Properties for defining a `CfnNotificationChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html
 */
export interface CfnNotificationChannelProps {
    /**
     * The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record AWS Firewall Manager activity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html#cfn-fms-notificationchannel-snsrolename
     */
    readonly snsRoleName: string;
    /**
     * The Amazon Resource Name (ARN) of the SNS topic that collects notifications from AWS Firewall Manager .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html#cfn-fms-notificationchannel-snstopicarn
     */
    readonly snsTopicArn: string;
}
/**
 * An AWS Firewall Manager policy.
 *
 * A Firewall Manager policy is specific to the individual policy type. If you want to enforce multiple policy types across accounts, you can create multiple policies. You can create more than one policy for each type.
 *
 * If you add a new account to an organization that you created with AWS Organizations , Firewall Manager automatically applies the policy to the resources in that account that are within scope of the policy.
 *
 * Policies require some setup to use. For more information, see the sections on prerequisites and getting started under [Firewall Manager prerequisites](https://docs.aws.amazon.com/waf/latest/developerguide/fms-prereq.html) .
 *
 * Firewall Manager provides the following types of policies:
 *
 * - *AWS WAF policy* - This policy applies AWS WAF web ACL protections to specified accounts and resources.
 * - *Shield Advanced policy* - This policy applies Shield Advanced protection to specified accounts and resources.
 * - *Security Groups policy* - This type of policy gives you control over security groups that are in use throughout your organization in AWS Organizations and lets you enforce a baseline set of rules across your organization.
 * - *Network ACL policy* - This type of policy gives you control over the network ACLs that are in use throughout your organization in AWS Organizations and lets you enforce a baseline set of first and last network ACL rules across your organization.
 * - *Network Firewall policy* - This policy applies Network Firewall protection to your organization's VPCs.
 * - *DNS Firewall policy* - This policy applies Amazon Route 53 Resolver DNS Firewall protections to your organization's VPCs.
 * - *Third-party firewall policy* - This policy applies third-party firewall protections. Third-party firewalls are available by subscription through the AWS Marketplace console at [AWS Marketplace](https://docs.aws.amazon.com/marketplace) .
 *
 * - *Palo Alto Networks Cloud NGFW policy* - This policy applies Palo Alto Networks Cloud Next Generation Firewall (NGFW) protections and Palo Alto Networks Cloud NGFW rulestacks to your organization's VPCs.
 * - *Fortigate CNF policy* - This policy applies Fortigate Cloud Native Firewall (CNF) protections. Fortigate CNF is a cloud-centered solution that blocks Zero-Day threats and secures cloud infrastructures with industry-leading advanced threat prevention, smart web application firewalls (WAF), and API protection.
 *
 * @cloudformationResource AWS::FMS::Policy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html
 */
export declare class CfnPolicy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
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
     * The Amazon Resource Name (ARN) of the policy.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the policy.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Used when deleting a policy. If `true` , Firewall Manager performs cleanup according to the policy type.
     */
    deleteAllPolicyResources?: boolean | cdk.IResolvable;
    /**
     * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to exclude from the policy.
     */
    excludeMap?: CfnPolicy.IEMapProperty | cdk.IResolvable;
    /**
     * Used only when tags are specified in the `ResourceTags` property.
     */
    excludeResourceTags: boolean | cdk.IResolvable;
    /**
     * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to include in the policy.
     */
    includeMap?: CfnPolicy.IEMapProperty | cdk.IResolvable;
    /**
     * Your description of the AWS Firewall Manager policy.
     */
    policyDescription?: string;
    /**
     * The name of the AWS Firewall Manager policy.
     */
    policyName: string;
    /**
     * Indicates if the policy should be automatically applied to new resources.
     */
    remediationEnabled: boolean | cdk.IResolvable;
    /**
     * Indicates whether AWS Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources that Firewall Manager is managing for accounts when those accounts leave policy scope.
     */
    resourcesCleanUp?: boolean | cdk.IResolvable;
    /**
     * The unique identifiers of the resource sets used by the policy.
     */
    resourceSetIds?: Array<string>;
    /**
     * Specifies whether to combine multiple resource tags with AND, so that a resource must have all tags to be included or excluded, or OR, so that a resource must have at least one tag.
     */
    resourceTagLogicalOperator?: string;
    /**
     * An array of `ResourceTag` objects, used to explicitly include resources in the policy scope or explicitly exclude them.
     */
    resourceTags?: Array<cdk.IResolvable | CfnPolicy.ResourceTagProperty> | cdk.IResolvable;
    /**
     * The type of resource protected by or in scope of the policy.
     */
    resourceType?: string;
    /**
     * An array of `ResourceType` objects.
     */
    resourceTypeList?: Array<string>;
    /**
     * Details about the security service that is being used to protect the resources.
     */
    securityServicePolicyData: cdk.IResolvable | CfnPolicy.SecurityServicePolicyDataProperty;
    /**
     * A collection of key:value pairs associated with an AWS resource.
     */
    tags?: Array<CfnPolicy.PolicyTagProperty>;
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
export declare namespace CfnPolicy {
    /**
     * The resource tags that AWS Firewall Manager uses to determine if a particular resource should be included or excluded from the AWS Firewall Manager policy.
     *
     * Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see [Working with Tag Editor](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-resourcetag.html
     */
    interface ResourceTagProperty {
        /**
         * The resource tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-resourcetag.html#cfn-fms-policy-resourcetag-key
         */
        readonly key: string;
        /**
         * The resource tag value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-resourcetag.html#cfn-fms-policy-resourcetag-value
         */
        readonly value?: string;
    }
    /**
     * Details about the security service that is being used to protect the resources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-securityservicepolicydata.html
     */
    interface SecurityServicePolicyDataProperty {
        /**
         * Details about the service that are specific to the service type, in JSON format.
         *
         * - Example: `DNS_FIREWALL`
         *
         * `"{\"type\":\"DNS_FIREWALL\",\"preProcessRuleGroups\":[{\"ruleGroupId\":\"rslvr-frg-1\",\"priority\":10}],\"postProcessRuleGroups\":[{\"ruleGroupId\":\"rslvr-frg-2\",\"priority\":9911}]}"`
         *
         * > Valid values for `preProcessRuleGroups` are between 1 and 99. Valid values for `postProcessRuleGroups` are between 9901 and 10000.
         * - Example: `NETWORK_FIREWALL` - Centralized deployment model
         *
         * `"{\"type\":\"NETWORK_FIREWALL\",\"awsNetworkFirewallConfig\":{\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":true}},\"firewallDeploymentModel\":{\"centralizedFirewallDeploymentModel\":{\"centralizedFirewallOrchestrationConfig\":{\"inspectionVpcIds\":[{\"resourceId\":\"vpc-1234\",\"accountId\":\"123456789011\"}],\"firewallCreationConfig\":{\"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneId\":null,\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]}]}},\"allowedIPV4CidrList\":[]}}}}"`
         *
         * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
         * - Example: `NETWORK_FIREWALL` - Distributed deployment model with automatic Availability Zone configuration
         *
         * `"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"OFF\"},\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":true}}"`
         *
         * With automatic Availbility Zone configuration, Firewall Manager chooses which Availability Zones to create the endpoints in. To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
         * - Example: `NETWORK_FIREWALL` - Distributed deployment model with automatic Availability Zone configuration and route management
         *
         * `"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"]},\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\": \"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":true}}"`
         *
         * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
         * - Example: `NETWORK_FIREWALL` - Distributed deployment model with custom Availability Zone configuration
         *
         * `"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\", \"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}},{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"fragmentmetricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"firewallCreationConfig\":{ \"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]},{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[ \"10.0.0.0/28\"]}]} },\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"OFF\",\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":boolean}}"`
         *
         * With custom Availability Zone configuration, you define which specific Availability Zones to create endpoints in by configuring `firewallCreationConfig` . To configure the Availability Zones in `firewallCreationConfig` , specify either the `availabilityZoneName` or `availabilityZoneId` parameter, not both parameters.
         *
         * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
         * - Example: `NETWORK_FIREWALL` - Distributed deployment model with custom Availability Zone configuration and route management
         *
         * `"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}},{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"fragmentmetricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"firewallCreationConfig\":{\"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]},{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]}]}},\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"],\"routeManagementConfig\":{\"allowCrossAZTrafficIfNoEndpoint\":true}},\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":boolean}}"`
         *
         * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
         * - Example: `THIRD_PARTY_FIREWALL` - Palo Alto Networks Cloud Next-Generation Firewall centralized deployment model
         *
         * `"{ \"type\":\"THIRD_PARTY_FIREWALL\", \"thirdPartyFirewall\":\"PALO_ALTO_NETWORKS_CLOUD_NGFW\", \"thirdPartyFirewallConfig\":{ \"thirdPartyFirewallPolicyList\":[\"global-1\"] },\"firewallDeploymentModel\":{\"centralizedFirewallDeploymentModel\":{\"centralizedFirewallOrchestrationConfig\":{\"inspectionVpcIds\":[{\"resourceId\":\"vpc-1234\",\"accountId\":\"123456789011\"}],\"firewallCreationConfig\":{\"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneId\":null,\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]}]}},\"allowedIPV4CidrList\":[]}}}}"`
         *
         * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html) to `CENTRALIZED` .
         * - Example: `THIRD_PARTY_FIREWALL` - Palo Alto Networks Cloud Next-Generation Firewall distributed deployment model
         *
         * `"{\"type\":\"THIRD_PARTY_FIREWALL\",\"thirdPartyFirewall\":\"PALO_ALTO_NETWORKS_CLOUD_NGFW\",\"thirdPartyFirewallConfig\":{\"thirdPartyFirewallPolicyList\":[\"global-1\"] },\"firewallDeploymentModel\":{ \"distributedFirewallDeploymentModel\":{ \"distributedFirewallOrchestrationConfig\":{\"firewallCreationConfig\":{\"endpointLocation\":{ \"availabilityZoneConfigList\":[ {\"availabilityZoneName\":\"${AvailabilityZone}\" } ] } }, \"allowedIPV4CidrList\":[ ] } } } }"`
         *
         * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html) to `DISTRIBUTED` .
         * - Specification for `SHIELD_ADVANCED` for Amazon CloudFront distributions
         *
         * `"{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\": {\"automaticResponseStatus\":\"ENABLED|IGNORED|DISABLED\", \"automaticResponseAction\":\"BLOCK|COUNT\"}, \"overrideCustomerWebaclClassic\":true|false}"`
         *
         * For example: `"{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\": {\"automaticResponseStatus\":\"ENABLED\", \"automaticResponseAction\":\"COUNT\"}}"`
         *
         * The default value for `automaticResponseStatus` is `IGNORED` . The value for `automaticResponseAction` is only required when `automaticResponseStatus` is set to `ENABLED` . The default value for `overrideCustomerWebaclClassic` is `false` .
         *
         * For other resource types that you can protect with a Shield Advanced policy, this `ManagedServiceData` configuration is an empty string.
         * - Example: `WAFV2`
         *
         * `"{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[{\"ruleGroupArn\":null,\"overrideAction\":{\"type\":\"NONE\"},\"managedRuleGroupIdentifier\":{\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesAmazonIpReputationList\"},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[{\"name\":\"NoUserAgent_HEADER\"}]}],\"postProcessRuleGroups\":[],\"defaultAction\":{\"type\":\"ALLOW\"},\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":{\"logDestinationConfigs\":[\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\"],\"redactedFields\":[{\"redactedFieldType\":\"SingleHeader\",\"redactedFieldValue\":\"Cookies\"},{\"redactedFieldType\":\"Method\"}]}}"`
         *
         * In the `loggingConfiguration` , you can specify one `logDestinationConfigs` , you can optionally provide up to 20 `redactedFields` , and the `RedactedFieldType` must be one of `URI` , `QUERY_STRING` , `HEADER` , or `METHOD` .
         * - Example: `AWS WAF Classic`
         *
         * `"{\"type\": \"WAF\", \"ruleGroups\": [{\"id\":\"12345678-1bcd-9012-efga-0987654321ab\", \"overrideAction\" : {\"type\": \"COUNT\"}}], \"defaultAction\": {\"type\": \"BLOCK\"}}"`
         * - Example: `WAFV2` - AWS Firewall Manager support for AWS WAF managed rule group versioning
         *
         * `"{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[{\"ruleGroupArn\":null,\"overrideAction\":{\"type\":\"NONE\"},\"managedRuleGroupIdentifier\":{\"versionEnabled\":true,\"version\":\"Version_2.0\",\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesCommonRuleSet\"},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[{\"name\":\"NoUserAgent_HEADER\"}]}],\"postProcessRuleGroups\":[],\"defaultAction\":{\"type\":\"ALLOW\"},\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":{\"logDestinationConfigs\":[\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\"],\"redactedFields\":[{\"redactedFieldType\":\"SingleHeader\",\"redactedFieldValue\":\"Cookies\"},{\"redactedFieldType\":\"Method\"}]}}"`
         *
         * To use a specific version of a AWS WAF managed rule group in your Firewall Manager policy, you must set `versionEnabled` to `true` , and set `version` to the version you'd like to use. If you don't set `versionEnabled` to `true` , or if you omit `versionEnabled` , then Firewall Manager uses the default version of the AWS WAF managed rule group.
         * - Example: `SECURITY_GROUPS_COMMON`
         *
         * `"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false, \"applyToAllEC2InstanceENIs\":false,\"securityGroups\":[{\"id\":\" sg-000e55995d61a06bd\"}]}"`
         * - Example: Shared VPCs. Apply the preceding policy to resources in shared VPCs as well as to those in VPCs that the account owns
         *
         * `"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false, \"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":true,\"securityGroups\":[{\"id\":\" sg-000e55995d61a06bd\"}]}"`
         * - Example: `SECURITY_GROUPS_CONTENT_AUDIT`
         *
         * `"{\"type\":\"SECURITY_GROUPS_CONTENT_AUDIT\",\"securityGroups\":[{\"id\":\"sg-000e55995d61a06bd\"}],\"securityGroupAction\":{\"type\":\"ALLOW\"}}"`
         *
         * The security group action for content audit can be `ALLOW` or `DENY` . For `ALLOW` , all in-scope security group rules must be within the allowed range of the policy's security group rules. For `DENY` , all in-scope security group rules must not contain a value or a range that matches a rule value or range in the policy security group.
         * - Example: `SECURITY_GROUPS_USAGE_AUDIT`
         *
         * `"{\"type\":\"SECURITY_GROUPS_USAGE_AUDIT\",\"deleteUnusedSecurityGroups\":true,\"coalesceRedundantSecurityGroups\":true}"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-securityservicepolicydata.html#cfn-fms-policy-securityservicepolicydata-managedservicedata
         */
        readonly managedServiceData?: string;
        /**
         * Contains the settings to configure a network ACL policy, a AWS Network Firewall firewall policy deployment model, or a third-party firewall policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-securityservicepolicydata.html#cfn-fms-policy-securityservicepolicydata-policyoption
         */
        readonly policyOption?: cdk.IResolvable | CfnPolicy.PolicyOptionProperty;
        /**
         * The service that the policy is using to protect the resources.
         *
         * This specifies the type of policy that is created, either an AWS WAF policy, a Shield Advanced policy, or a security group policy. For security group policies, Firewall Manager supports one security group for each common policy and for each content audit policy. This is an adjustable limit that you can increase by contacting SUPlong .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-securityservicepolicydata.html#cfn-fms-policy-securityservicepolicydata-type
         */
        readonly type: string;
    }
    /**
     * Contains the settings to configure a network ACL policy, a AWS Network Firewall firewall policy deployment model, or a third-party firewall policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policyoption.html
     */
    interface PolicyOptionProperty {
        /**
         * Defines a Firewall Manager network ACL policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policyoption.html#cfn-fms-policy-policyoption-networkaclcommonpolicy
         */
        readonly networkAclCommonPolicy?: cdk.IResolvable | CfnPolicy.NetworkAclCommonPolicyProperty;
        /**
         * Defines the deployment model to use for the firewall policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policyoption.html#cfn-fms-policy-policyoption-networkfirewallpolicy
         */
        readonly networkFirewallPolicy?: cdk.IResolvable | CfnPolicy.NetworkFirewallPolicyProperty;
        /**
         * Defines the policy options for a third-party firewall policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policyoption.html#cfn-fms-policy-policyoption-thirdpartyfirewallpolicy
         */
        readonly thirdPartyFirewallPolicy?: cdk.IResolvable | CfnPolicy.ThirdPartyFirewallPolicyProperty;
    }
    /**
     * Configures the firewall policy deployment model of AWS Network Firewall .
     *
     * For information about Network Firewall deployment models, see [AWS Network Firewall example architectures with routing](https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html) in the *Network Firewall Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html
     */
    interface NetworkFirewallPolicyProperty {
        /**
         * Defines the deployment model to use for the firewall policy.
         *
         * To use a distributed model, set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html) to `DISTRIBUTED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html#cfn-fms-policy-networkfirewallpolicy-firewalldeploymentmodel
         */
        readonly firewallDeploymentModel: string;
    }
    /**
     * Configures the deployment model for the third-party firewall.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html
     */
    interface ThirdPartyFirewallPolicyProperty {
        /**
         * Defines the deployment model to use for the third-party firewall policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html#cfn-fms-policy-thirdpartyfirewallpolicy-firewalldeploymentmodel
         */
        readonly firewallDeploymentModel: string;
    }
    /**
     * Defines a Firewall Manager network ACL policy.
     *
     * This is used in the `PolicyOption` of a `SecurityServicePolicyData` for a `Policy` , when the `SecurityServicePolicyData` type is set to `NETWORK_ACL_COMMON` .
     *
     * For information about network ACLs, see [Control traffic to subnets using network ACLs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html) in the *Amazon Virtual Private Cloud User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclcommonpolicy.html
     */
    interface NetworkAclCommonPolicyProperty {
        /**
         * The definition of the first and last rules for the network ACL policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclcommonpolicy.html#cfn-fms-policy-networkaclcommonpolicy-networkaclentryset
         */
        readonly networkAclEntrySet: cdk.IResolvable | CfnPolicy.NetworkAclEntrySetProperty;
    }
    /**
     * The configuration of the first and last rules for the network ACL policy, and the remediation settings for each.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentryset.html
     */
    interface NetworkAclEntrySetProperty {
        /**
         * The rules that you want to run first in the Firewall Manager managed network ACLs.
         *
         * > Provide these in the order in which you want them to run. Firewall Manager will assign the specific rule numbers for you, in the network ACLs that it creates.
         *
         * You must specify at least one first entry or one last entry in any network ACL policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentryset.html#cfn-fms-policy-networkaclentryset-firstentries
         */
        readonly firstEntries?: Array<cdk.IResolvable | CfnPolicy.NetworkAclEntryProperty> | cdk.IResolvable;
        /**
         * Applies only when remediation is enabled for the policy as a whole.
         *
         * Firewall Manager uses this setting when it finds policy violations that involve conflicts between the custom entries and the policy entries.
         *
         * If forced remediation is disabled, Firewall Manager marks the network ACL as noncompliant and does not try to remediate. For more information about the remediation behavior, see [Remediation for managed network ACLs](https://docs.aws.amazon.com/waf/latest/developerguide/network-acl-policies.html#network-acls-remediation) in the *AWS Firewall Manager Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentryset.html#cfn-fms-policy-networkaclentryset-forceremediateforfirstentries
         */
        readonly forceRemediateForFirstEntries: boolean | cdk.IResolvable;
        /**
         * Applies only when remediation is enabled for the policy as a whole.
         *
         * Firewall Manager uses this setting when it finds policy violations that involve conflicts between the custom entries and the policy entries.
         *
         * If forced remediation is disabled, Firewall Manager marks the network ACL as noncompliant and does not try to remediate. For more information about the remediation behavior, see [Remediation for managed network ACLs](https://docs.aws.amazon.com/waf/latest/developerguide/network-acl-policies.html#network-acls-remediation) in the *AWS Firewall Manager Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentryset.html#cfn-fms-policy-networkaclentryset-forceremediateforlastentries
         */
        readonly forceRemediateForLastEntries: boolean | cdk.IResolvable;
        /**
         * The rules that you want to run last in the Firewall Manager managed network ACLs.
         *
         * > Provide these in the order in which you want them to run. Firewall Manager will assign the specific rule numbers for you, in the network ACLs that it creates.
         *
         * You must specify at least one first entry or one last entry in any network ACL policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentryset.html#cfn-fms-policy-networkaclentryset-lastentries
         */
        readonly lastEntries?: Array<cdk.IResolvable | CfnPolicy.NetworkAclEntryProperty> | cdk.IResolvable;
    }
    /**
     * Describes a rule in a network ACL.
     *
     * Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining
     * whether a packet should be allowed in or out of a subnet associated with the network ACL, AWS processes the entries in the network ACL according to the rule numbers, in ascending order.
     *
     * When you manage an individual network ACL, you explicitly specify the rule numbers. When you specify the network ACL rules in a Firewall Manager policy, you provide the rules to run first, in the order that you want them to run, and the rules to run last, in the order that you want them to run. Firewall Manager assigns the rule numbers for you when you save the network ACL policy specification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentry.html
     */
    interface NetworkAclEntryProperty {
        /**
         * The IPv4 network range to allow or deny, in CIDR notation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentry.html#cfn-fms-policy-networkaclentry-cidrblock
         */
        readonly cidrBlock?: string;
        /**
         * Indicates whether the rule is an egress, or outbound, rule (applied to traffic leaving the subnet).
         *
         * If it's not an egress rule, then it's an ingress, or inbound, rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentry.html#cfn-fms-policy-networkaclentry-egress
         */
        readonly egress: boolean | cdk.IResolvable;
        /**
         * ICMP protocol: The ICMP type and code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentry.html#cfn-fms-policy-networkaclentry-icmptypecode
         */
        readonly icmpTypeCode?: CfnPolicy.IcmpTypeCodeProperty | cdk.IResolvable;
        /**
         * The IPv6 network range to allow or deny, in CIDR notation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentry.html#cfn-fms-policy-networkaclentry-ipv6cidrblock
         */
        readonly ipv6CidrBlock?: string;
        /**
         * TCP or UDP protocols: The range of ports the rule applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentry.html#cfn-fms-policy-networkaclentry-portrange
         */
        readonly portRange?: cdk.IResolvable | CfnPolicy.PortRangeProperty;
        /**
         * The protocol number.
         *
         * A value of "-1" means all protocols.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentry.html#cfn-fms-policy-networkaclentry-protocol
         */
        readonly protocol: string;
        /**
         * Indicates whether to allow or deny the traffic that matches the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkaclentry.html#cfn-fms-policy-networkaclentry-ruleaction
         */
        readonly ruleAction: string;
    }
    /**
     * ICMP protocol: The ICMP type and code.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-icmptypecode.html
     */
    interface IcmpTypeCodeProperty {
        /**
         * ICMP code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-icmptypecode.html#cfn-fms-policy-icmptypecode-code
         */
        readonly code: number;
        /**
         * ICMP type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-icmptypecode.html#cfn-fms-policy-icmptypecode-type
         */
        readonly type: number;
    }
    /**
     * TCP or UDP protocols: The range of ports the rule applies to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-portrange.html
     */
    interface PortRangeProperty {
        /**
         * The beginning port number of the range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-portrange.html#cfn-fms-policy-portrange-from
         */
        readonly from: number;
        /**
         * The ending port number of the range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-portrange.html#cfn-fms-policy-portrange-to
         */
        readonly to: number;
    }
    /**
     * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to include in or exclude from the policy.
     *
     * Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
     *
     * This is used for the policy's `IncludeMap` and `ExcludeMap` .
     *
     * You can specify account IDs, OUs, or a combination:
     *
     * - Specify account IDs by setting the key to `ACCOUNT` . For example, the following is a valid map: `{“ACCOUNT” : [“accountID1”, “accountID2”]}` .
     * - Specify OUs by setting the key to `ORGUNIT` . For example, the following is a valid map: `{“ORGUNIT” : [“ouid111”, “ouid112”]}` .
     * - Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: `{“ACCOUNT” : [“accountID1”, “accountID2”], “ORGUNIT” : [“ouid111”, “ouid112”]}` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-iemap.html
     */
    interface IEMapProperty {
        /**
         * The account list for the map.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-iemap.html#cfn-fms-policy-iemap-account
         */
        readonly account?: Array<string>;
        /**
         * The organizational unit list for the map.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-iemap.html#cfn-fms-policy-iemap-orgunit
         */
        readonly orgunit?: Array<string>;
    }
    /**
     * A collection of key:value pairs associated with an AWS resource.
     *
     * The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytag.html
     */
    interface PolicyTagProperty {
        /**
         * Part of the key:value pair that defines a tag.
         *
         * You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytag.html#cfn-fms-policy-policytag-key
         */
        readonly key: string;
        /**
         * Part of the key:value pair that defines a tag.
         *
         * You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytag.html#cfn-fms-policy-policytag-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html
 */
export interface CfnPolicyProps {
    /**
     * Used when deleting a policy. If `true` , Firewall Manager performs cleanup according to the policy type.
     *
     * For AWS WAF and Shield Advanced policies, Firewall Manager does the following:
     *
     * - Deletes rule groups created by Firewall Manager
     * - Removes web ACLs from in-scope resources
     * - Deletes web ACLs that contain no rules or rule groups
     *
     * For security group policies, Firewall Manager does the following for each security group in the policy:
     *
     * - Disassociates the security group from in-scope resources
     * - Deletes the security group if it was created through Firewall Manager and if it's no longer associated with any resources through another policy
     *
     * After the cleanup, in-scope resources are no longer protected by web ACLs in this policy. Protection of out-of-scope resources remains unchanged. Scope is determined by tags that you create and accounts that you associate with the policy. When creating the policy, if you specify that only resources in specific accounts or with specific tags are in scope of the policy, those accounts and resources are handled by the policy. All others are out of scope. If you don't specify tags or accounts, all resources are in scope.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-deleteallpolicyresources
     */
    readonly deleteAllPolicyResources?: boolean | cdk.IResolvable;
    /**
     * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to exclude from the policy.
     *
     * Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
     *
     * You can specify inclusions or exclusions, but not both. If you specify an `IncludeMap` , AWS Firewall Manager applies the policy to all accounts specified by the `IncludeMap` , and does not evaluate any `ExcludeMap` specifications. If you do not specify an `IncludeMap` , then Firewall Manager applies the policy to all accounts except for those specified by the `ExcludeMap` .
     *
     * You can specify account IDs, OUs, or a combination:
     *
     * - Specify account IDs by setting the key to `ACCOUNT` . For example, the following is a valid map: `{“ACCOUNT” : [“accountID1”, “accountID2”]}` .
     * - Specify OUs by setting the key to `ORGUNIT` . For example, the following is a valid map: `{“ORGUNIT” : [“ouid111”, “ouid112”]}` .
     * - Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: `{“ACCOUNT” : [“accountID1”, “accountID2”], “ORGUNIT” : [“ouid111”, “ouid112”]}` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-excludemap
     */
    readonly excludeMap?: CfnPolicy.IEMapProperty | cdk.IResolvable;
    /**
     * Used only when tags are specified in the `ResourceTags` property.
     *
     * If this property is `True` , resources with the specified tags are not in scope of the policy. If it's `False` , only resources with the specified tags are in scope of the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-excluderesourcetags
     */
    readonly excludeResourceTags: boolean | cdk.IResolvable;
    /**
     * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to include in the policy.
     *
     * Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
     *
     * You can specify inclusions or exclusions, but not both. If you specify an `IncludeMap` , AWS Firewall Manager applies the policy to all accounts specified by the `IncludeMap` , and does not evaluate any `ExcludeMap` specifications. If you do not specify an `IncludeMap` , then Firewall Manager applies the policy to all accounts except for those specified by the `ExcludeMap` .
     *
     * You can specify account IDs, OUs, or a combination:
     *
     * - Specify account IDs by setting the key to `ACCOUNT` . For example, the following is a valid map: `{“ACCOUNT” : [“accountID1”, “accountID2”]}` .
     * - Specify OUs by setting the key to `ORGUNIT` . For example, the following is a valid map: `{“ORGUNIT” : [“ouid111”, “ouid112”]}` .
     * - Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: `{“ACCOUNT” : [“accountID1”, “accountID2”], “ORGUNIT” : [“ouid111”, “ouid112”]}` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-includemap
     */
    readonly includeMap?: CfnPolicy.IEMapProperty | cdk.IResolvable;
    /**
     * Your description of the AWS Firewall Manager policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policydescription
     */
    readonly policyDescription?: string;
    /**
     * The name of the AWS Firewall Manager policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policyname
     */
    readonly policyName: string;
    /**
     * Indicates if the policy should be automatically applied to new resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-remediationenabled
     */
    readonly remediationEnabled: boolean | cdk.IResolvable;
    /**
     * Indicates whether AWS Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources that Firewall Manager is managing for accounts when those accounts leave policy scope.
     *
     * For example, Firewall Manager will disassociate a Firewall Manager managed web ACL from a protected customer resource when the customer resource leaves policy scope.
     *
     * By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources.
     *
     * This option is not available for Shield Advanced or AWS WAF Classic policies.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcescleanup
     */
    readonly resourcesCleanUp?: boolean | cdk.IResolvable;
    /**
     * The unique identifiers of the resource sets used by the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcesetids
     */
    readonly resourceSetIds?: Array<string>;
    /**
     * Specifies whether to combine multiple resource tags with AND, so that a resource must have all tags to be included or excluded, or OR, so that a resource must have at least one tag.
     *
     * Default: `AND`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetaglogicaloperator
     */
    readonly resourceTagLogicalOperator?: string;
    /**
     * An array of `ResourceTag` objects, used to explicitly include resources in the policy scope or explicitly exclude them.
     *
     * If this isn't set, then tags aren't used to modify policy scope. See also `ExcludeResourceTags` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetags
     */
    readonly resourceTags?: Array<cdk.IResolvable | CfnPolicy.ResourceTagProperty> | cdk.IResolvable;
    /**
     * The type of resource protected by or in scope of the policy.
     *
     * This is in the format shown in the [AWS Resource Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) . To apply this policy to multiple resource types, specify a resource type of `ResourceTypeList` and then specify the resource types in a `ResourceTypeList` .
     *
     * The following are valid resource types for each Firewall Manager policy type:
     *
     * - AWS WAF Classic - `AWS::ApiGateway::Stage` , `AWS::CloudFront::Distribution` , and `AWS::ElasticLoadBalancingV2::LoadBalancer` .
     * - AWS WAF - `AWS::ApiGateway::Stage` , `AWS::ElasticLoadBalancingV2::LoadBalancer` , and `AWS::CloudFront::Distribution` .
     * - Shield Advanced - `AWS::ElasticLoadBalancingV2::LoadBalancer` , `AWS::ElasticLoadBalancing::LoadBalancer` , `AWS::EC2::EIP` , and `AWS::CloudFront::Distribution` .
     * - Network ACL - `AWS::EC2::Subnet` .
     * - Security group usage audit - `AWS::EC2::SecurityGroup` .
     * - Security group content audit - `AWS::EC2::SecurityGroup` , `AWS::EC2::NetworkInterface` , and `AWS::EC2::Instance` .
     * - DNS Firewall, AWS Network Firewall , and third-party firewall - `AWS::EC2::VPC` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetype
     */
    readonly resourceType?: string;
    /**
     * An array of `ResourceType` objects.
     *
     * Use this only to specify multiple resource types. To specify a single resource type, use `ResourceType` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetypelist
     */
    readonly resourceTypeList?: Array<string>;
    /**
     * Details about the security service that is being used to protect the resources.
     *
     * This contains the following settings:
     *
     * - Type - Indicates the service type that the policy uses to protect the resource. For security group policies, Firewall Manager supports one security group for each common policy and for each content audit policy. This is an adjustable limit that you can increase by contacting  .
     *
     * Valid values: `DNS_FIREWALL` | `NETWORK_FIREWALL` | `SECURITY_GROUPS_COMMON` | `SECURITY_GROUPS_CONTENT_AUDIT` | `SECURITY_GROUPS_USAGE_AUDIT` | `SHIELD_ADVANCED` | `THIRD_PARTY_FIREWALL` | `WAFV2` | `WAF`
     * - ManagedServiceData - Details about the service that are specific to the service type, in JSON format.
     *
     * - Example: `DNS_FIREWALL`
     *
     * `"{\"type\":\"DNS_FIREWALL\",\"preProcessRuleGroups\":[{\"ruleGroupId\":\"rslvr-frg-1\",\"priority\":10}],\"postProcessRuleGroups\":[{\"ruleGroupId\":\"rslvr-frg-2\",\"priority\":9911}]}"`
     *
     * > Valid values for `preProcessRuleGroups` are between 1 and 99. Valid values for `postProcessRuleGroups` are between 9901 and 10000.
     * - Example: `NETWORK_FIREWALL` - Centralized deployment model
     *
     * `"{\"type\":\"NETWORK_FIREWALL\",\"awsNetworkFirewallConfig\":{\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":true}},\"firewallDeploymentModel\":{\"centralizedFirewallDeploymentModel\":{\"centralizedFirewallOrchestrationConfig\":{\"inspectionVpcIds\":[{\"resourceId\":\"vpc-1234\",\"accountId\":\"123456789011\"}],\"firewallCreationConfig\":{\"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneId\":null,\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]}]}},\"allowedIPV4CidrList\":[]}}}}"`
     *
     * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
     * - Example: `NETWORK_FIREWALL` - Distributed deployment model with automatic Availability Zone configuration
     *
     * `"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"OFF\"},\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":true}}"`
     *
     * With automatic Availbility Zone configuration, Firewall Manager chooses which Availability Zones to create the endpoints in. To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
     * - Example: `NETWORK_FIREWALL` - Distributed deployment model with automatic Availability Zone configuration and route management
     *
     * `"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":[\"10.0.0.0/28\",\"192.168.0.0/28\"],\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"]},\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\": \"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":true}}"`
     *
     * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
     * - Example: `NETWORK_FIREWALL` - Distributed deployment model with custom Availability Zone configuration
     *
     * `"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\", \"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}},{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"fragmentmetricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"firewallCreationConfig\":{ \"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]},{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[ \"10.0.0.0/28\"]}]} },\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"OFF\",\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":boolean}}"`
     *
     * With custom Availability Zone configuration, you define which specific Availability Zones to create endpoints in by configuring `firewallCreationConfig` . To configure the Availability Zones in `firewallCreationConfig` , specify either the `availabilityZoneName` or `availabilityZoneId` parameter, not both parameters.
     *
     * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
     * - Example: `NETWORK_FIREWALL` - Distributed deployment model with custom Availability Zone configuration and route management
     *
     * `"{\"type\":\"NETWORK_FIREWALL\",\"networkFirewallStatelessRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateless-rulegroup/test\",\"priority\":1}],\"networkFirewallStatelessDefaultActions\":[\"aws:forward_to_sfe\",\"customActionName\"],\"networkFirewallStatelessFragmentDefaultActions\":[\"aws:forward_to_sfe\",\"fragmentcustomactionname\"],\"networkFirewallStatelessCustomActions\":[{\"actionName\":\"customActionName\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"metricdimensionvalue\"}]}}},{\"actionName\":\"fragmentcustomactionname\",\"actionDefinition\":{\"publishMetricAction\":{\"dimensions\":[{\"value\":\"fragmentmetricdimensionvalue\"}]}}}],\"networkFirewallStatefulRuleGroupReferences\":[{\"resourceARN\":\"arn:aws:network-firewall:us-east-1:123456789011:stateful-rulegroup/test\"}],\"networkFirewallOrchestrationConfig\":{\"firewallCreationConfig\":{\"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]},{\"availabilityZoneName\":\"us-east-1b\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]}]}},\"singleFirewallEndpointPerVPC\":false,\"allowedIPV4CidrList\":null,\"routeManagementAction\":\"MONITOR\",\"routeManagementTargetTypes\":[\"InternetGateway\"],\"routeManagementConfig\":{\"allowCrossAZTrafficIfNoEndpoint\":true}},\"networkFirewallLoggingConfiguration\":{\"logDestinationConfigs\":[{\"logDestinationType\":\"S3\",\"logType\":\"ALERT\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}},{\"logDestinationType\":\"S3\",\"logType\":\"FLOW\",\"logDestination\":{\"bucketName\":\"s3-bucket-name\"}}],\"overrideExistingConfig\":boolean}}"`
     *
     * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html) to `DISTRIBUTED` .
     * - Example: `THIRD_PARTY_FIREWALL` - Palo Alto Networks Cloud Next-Generation Firewall centralized deployment model
     *
     * `"{ \"type\":\"THIRD_PARTY_FIREWALL\", \"thirdPartyFirewall\":\"PALO_ALTO_NETWORKS_CLOUD_NGFW\", \"thirdPartyFirewallConfig\":{ \"thirdPartyFirewallPolicyList\":[\"global-1\"] },\"firewallDeploymentModel\":{\"centralizedFirewallDeploymentModel\":{\"centralizedFirewallOrchestrationConfig\":{\"inspectionVpcIds\":[{\"resourceId\":\"vpc-1234\",\"accountId\":\"123456789011\"}],\"firewallCreationConfig\":{\"endpointLocation\":{\"availabilityZoneConfigList\":[{\"availabilityZoneId\":null,\"availabilityZoneName\":\"us-east-1a\",\"allowedIPV4CidrList\":[\"10.0.0.0/28\"]}]}},\"allowedIPV4CidrList\":[]}}}}"`
     *
     * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html) to `CENTRALIZED` .
     * - Example: `THIRD_PARTY_FIREWALL` - Palo Alto Networks Cloud Next-Generation Firewall distributed deployment model
     *
     * `"{\"type\":\"THIRD_PARTY_FIREWALL\",\"thirdPartyFirewall\":\"PALO_ALTO_NETWORKS_CLOUD_NGFW\",\"thirdPartyFirewallConfig\":{\"thirdPartyFirewallPolicyList\":[\"global-1\"] },\"firewallDeploymentModel\":{ \"distributedFirewallDeploymentModel\":{ \"distributedFirewallOrchestrationConfig\":{\"firewallCreationConfig\":{\"endpointLocation\":{ \"availabilityZoneConfigList\":[ {\"availabilityZoneName\":\"${AvailabilityZone}\" } ] } }, \"allowedIPV4CidrList\":[ ] } } } }"`
     *
     * To use the distributed deployment model, you must set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html) to `DISTRIBUTED` .
     * - Specification for `SHIELD_ADVANCED` for Amazon CloudFront distributions
     *
     * `"{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\": {\"automaticResponseStatus\":\"ENABLED|IGNORED|DISABLED\", \"automaticResponseAction\":\"BLOCK|COUNT\"}, \"overrideCustomerWebaclClassic\":true|false}"`
     *
     * For example: `"{\"type\":\"SHIELD_ADVANCED\",\"automaticResponseConfiguration\": {\"automaticResponseStatus\":\"ENABLED\", \"automaticResponseAction\":\"COUNT\"}}"`
     *
     * The default value for `automaticResponseStatus` is `IGNORED` . The value for `automaticResponseAction` is only required when `automaticResponseStatus` is set to `ENABLED` . The default value for `overrideCustomerWebaclClassic` is `false` .
     *
     * For other resource types that you can protect with a Shield Advanced policy, this `ManagedServiceData` configuration is an empty string.
     * - Example: `WAFV2`
     *
     * `"{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[{\"ruleGroupArn\":null,\"overrideAction\":{\"type\":\"NONE\"},\"managedRuleGroupIdentifier\":{\"version\":null,\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesAmazonIpReputationList\"},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[{\"name\":\"NoUserAgent_HEADER\"}]}],\"postProcessRuleGroups\":[],\"defaultAction\":{\"type\":\"ALLOW\"},\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":{\"logDestinationConfigs\":[\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\"],\"redactedFields\":[{\"redactedFieldType\":\"SingleHeader\",\"redactedFieldValue\":\"Cookies\"},{\"redactedFieldType\":\"Method\"}]}}"`
     *
     * In the `loggingConfiguration` , you can specify one `logDestinationConfigs` , you can optionally provide up to 20 `redactedFields` , and the `RedactedFieldType` must be one of `URI` , `QUERY_STRING` , `HEADER` , or `METHOD` .
     * - Example: `AWS WAF Classic`
     *
     * `"{\"type\": \"WAF\", \"ruleGroups\": [{\"id\":\"12345678-1bcd-9012-efga-0987654321ab\", \"overrideAction\" : {\"type\": \"COUNT\"}}], \"defaultAction\": {\"type\": \"BLOCK\"}}"`
     * - Example: `WAFV2` - AWS Firewall Manager support for AWS WAF managed rule group versioning
     *
     * `"{\"type\":\"WAFV2\",\"preProcessRuleGroups\":[{\"ruleGroupArn\":null,\"overrideAction\":{\"type\":\"NONE\"},\"managedRuleGroupIdentifier\":{\"versionEnabled\":true,\"version\":\"Version_2.0\",\"vendorName\":\"AWS\",\"managedRuleGroupName\":\"AWSManagedRulesCommonRuleSet\"},\"ruleGroupType\":\"ManagedRuleGroup\",\"excludeRules\":[{\"name\":\"NoUserAgent_HEADER\"}]}],\"postProcessRuleGroups\":[],\"defaultAction\":{\"type\":\"ALLOW\"},\"overrideCustomerWebACLAssociation\":false,\"loggingConfiguration\":{\"logDestinationConfigs\":[\"arn:aws:firehose:us-west-2:12345678912:deliverystream/aws-waf-logs-fms-admin-destination\"],\"redactedFields\":[{\"redactedFieldType\":\"SingleHeader\",\"redactedFieldValue\":\"Cookies\"},{\"redactedFieldType\":\"Method\"}]}}"`
     *
     * To use a specific version of a AWS WAF managed rule group in your Firewall Manager policy, you must set `versionEnabled` to `true` , and set `version` to the version you'd like to use. If you don't set `versionEnabled` to `true` , or if you omit `versionEnabled` , then Firewall Manager uses the default version of the AWS WAF managed rule group.
     * - Example: `SECURITY_GROUPS_COMMON`
     *
     * `"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false, \"applyToAllEC2InstanceENIs\":false,\"securityGroups\":[{\"id\":\" sg-000e55995d61a06bd\"}]}"`
     * - Example: Shared VPCs. Apply the preceding policy to resources in shared VPCs as well as to those in VPCs that the account owns
     *
     * `"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false, \"applyToAllEC2InstanceENIs\":false,\"includeSharedVPC\":true,\"securityGroups\":[{\"id\":\" sg-000e55995d61a06bd\"}]}"`
     * - Example: `SECURITY_GROUPS_CONTENT_AUDIT`
     *
     * `"{\"type\":\"SECURITY_GROUPS_CONTENT_AUDIT\",\"securityGroups\":[{\"id\":\"sg-000e55995d61a06bd\"}],\"securityGroupAction\":{\"type\":\"ALLOW\"}}"`
     *
     * The security group action for content audit can be `ALLOW` or `DENY` . For `ALLOW` , all in-scope security group rules must be within the allowed range of the policy's security group rules. For `DENY` , all in-scope security group rules must not contain a value or a range that matches a rule value or range in the policy security group.
     * - Example: `SECURITY_GROUPS_USAGE_AUDIT`
     *
     * `"{\"type\":\"SECURITY_GROUPS_USAGE_AUDIT\",\"deleteUnusedSecurityGroups\":true,\"coalesceRedundantSecurityGroups\":true}"`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-securityservicepolicydata
     */
    readonly securityServicePolicyData: cdk.IResolvable | CfnPolicy.SecurityServicePolicyDataProperty;
    /**
     * A collection of key:value pairs associated with an AWS resource.
     *
     * The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-tags
     */
    readonly tags?: Array<CfnPolicy.PolicyTagProperty>;
}
/**
 * A set of resources to include in a policy.
 *
 * @cloudformationResource AWS::FMS::ResourceSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html
 */
export declare class CfnResourceSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceSet;
    /**
     * A unique identifier for the resource set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description of the resource set.
     */
    description?: string;
    /**
     * The descriptive name of the resource set.
     */
    name: string;
    resources?: Array<string>;
    /**
     * Determines the resources that can be associated to the resource set.
     */
    resourceTypeList: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceSetProps);
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
 * Properties for defining a `CfnResourceSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html
 */
export interface CfnResourceSetProps {
    /**
     * A description of the resource set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html#cfn-fms-resourceset-description
     */
    readonly description?: string;
    /**
     * The descriptive name of the resource set.
     *
     * You can't change the name of a resource set after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html#cfn-fms-resourceset-name
     */
    readonly name: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html#cfn-fms-resourceset-resources
     */
    readonly resources?: Array<string>;
    /**
     * Determines the resources that can be associated to the resource set.
     *
     * Depending on your setting for max results and the number of resource sets, a single call might not return the full list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html#cfn-fms-resourceset-resourcetypelist
     */
    readonly resourceTypeList: Array<string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-resourceset.html#cfn-fms-resourceset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
