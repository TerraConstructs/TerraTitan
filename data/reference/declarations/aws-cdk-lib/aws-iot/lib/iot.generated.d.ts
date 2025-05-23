import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Use the `AWS::IoT::AccountAuditConfiguration` resource to configure or reconfigure the Device Defender audit settings for your account.
 *
 * Settings include how audit notifications are sent and which audit checks are enabled or disabled. For API reference, see [UpdateAccountAuditConfiguration](https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html) and for detailed information on all available audit checks, see [Audit checks](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit-checks.html) .
 *
 * @cloudformationResource AWS::IoT::AccountAuditConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html
 */
export declare class CfnAccountAuditConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccountAuditConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccountAuditConfiguration;
    /**
     * The ID of the account.
     */
    accountId: string;
    /**
     * Specifies which audit checks are enabled and disabled for this account.
     */
    auditCheckConfigurations: CfnAccountAuditConfiguration.AuditCheckConfigurationsProperty | cdk.IResolvable;
    /**
     * Information about the targets to which audit notifications are sent.
     */
    auditNotificationTargetConfigurations?: CfnAccountAuditConfiguration.AuditNotificationTargetConfigurationsProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the role that grants permission to AWS IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.
     */
    roleArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccountAuditConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAccountAuditConfiguration {
    /**
     * The types of audit checks that can be performed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html
     */
    interface AuditCheckConfigurationsProperty {
        /**
         * Checks the permissiveness of an authenticated Amazon Cognito identity pool role.
         *
         * For this check, AWS IoT Device Defender audits all Amazon Cognito identity pools that have been used to connect to the AWS IoT message broker during the 31 days before the audit is performed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-authenticatedcognitoroleoverlypermissivecheck
         */
        readonly authenticatedCognitoRoleOverlyPermissiveCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if a CA certificate is expiring.
         *
         * This check applies to CA certificates expiring within 30 days or that have expired.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-cacertificateexpiringcheck
         */
        readonly caCertificateExpiringCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks the quality of the CA certificate key.
         *
         * The quality checks if the key is in a valid format, not expired, and if the key meets a minimum required size. This check applies to CA certificates that are `ACTIVE` or `PENDING_TRANSFER` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-cacertificatekeyqualitycheck
         */
        readonly caCertificateKeyQualityCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if multiple devices connect using the same client ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-conflictingclientidscheck
         */
        readonly conflictingClientIdsCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if a device certificate is expiring.
         *
         * This check applies to device certificates expiring within 30 days or that have expired.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-devicecertificateexpiringcheck
         */
        readonly deviceCertificateExpiringCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks the quality of the device certificate key.
         *
         * The quality checks if the key is in a valid format, not expired, signed by a registered certificate authority, and if the key meets a minimum required size.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-devicecertificatekeyqualitycheck
         */
        readonly deviceCertificateKeyQualityCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if multiple concurrent connections use the same X.509 certificate to authenticate with AWS IoT .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-devicecertificatesharedcheck
         */
        readonly deviceCertificateSharedCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if device certificates are still active despite being revoked by an intermediate CA.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-intermediatecarevokedforactivedevicecertificatescheck
         */
        readonly intermediateCaRevokedForActiveDeviceCertificatesCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks the permissiveness of a policy attached to an authenticated Amazon Cognito identity pool role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-iotpolicyoverlypermissivecheck
         */
        readonly iotPolicyOverlyPermissiveCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if an AWS IoT policy is potentially misconfigured.
         *
         * Misconfigured policies, including overly permissive policies, can cause security incidents like allowing devices access to unintended resources. This check is a warning for you to make sure that only intended actions are allowed before updating the policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-iotpolicypotentialmisconfigurationcheck
         */
        readonly ioTPolicyPotentialMisConfigurationCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if a role alias has access to services that haven't been used for the AWS IoT device in the last year.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-iotrolealiasallowsaccesstounusedservicescheck
         */
        readonly iotRoleAliasAllowsAccessToUnusedServicesCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if the temporary credentials provided by AWS IoT role aliases are overly permissive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-iotrolealiasoverlypermissivecheck
         */
        readonly iotRoleAliasOverlyPermissiveCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if AWS IoT logs are disabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-loggingdisabledcheck
         */
        readonly loggingDisabledCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if a revoked CA certificate is still active.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-revokedcacertificatestillactivecheck
         */
        readonly revokedCaCertificateStillActiveCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if a revoked device certificate is still active.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-revokeddevicecertificatestillactivecheck
         */
        readonly revokedDeviceCertificateStillActiveCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
        /**
         * Checks if policy attached to an unauthenticated Amazon Cognito identity pool role is too permissive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-unauthenticatedcognitoroleoverlypermissivecheck
         */
        readonly unauthenticatedCognitoRoleOverlyPermissiveCheck?: CfnAccountAuditConfiguration.AuditCheckConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Which audit checks are enabled and disabled for this account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html
     */
    interface AuditCheckConfigurationProperty {
        /**
         * True if this audit check is enabled for this account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * The configuration of the audit notification target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations.html
     */
    interface AuditNotificationTargetConfigurationsProperty {
        /**
         * The `Sns` notification target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations.html#cfn-iot-accountauditconfiguration-auditnotificationtargetconfigurations-sns
         */
        readonly sns?: CfnAccountAuditConfiguration.AuditNotificationTargetProperty | cdk.IResolvable;
    }
    /**
     * Information about the targets to which audit notifications are sent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtarget.html
     */
    interface AuditNotificationTargetProperty {
        /**
         * True if notifications to the target are enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtarget.html#cfn-iot-accountauditconfiguration-auditnotificationtarget-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The ARN of the role that grants permission to send notifications to the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtarget.html#cfn-iot-accountauditconfiguration-auditnotificationtarget-rolearn
         */
        readonly roleArn?: string;
        /**
         * The ARN of the target (SNS topic) to which audit notifications are sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtarget.html#cfn-iot-accountauditconfiguration-auditnotificationtarget-targetarn
         */
        readonly targetArn?: string;
    }
}
/**
 * Properties for defining a `CfnAccountAuditConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html
 */
export interface CfnAccountAuditConfigurationProps {
    /**
     * The ID of the account.
     *
     * You can use the expression `!Sub "${AWS::AccountId}"` to use your account ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-accountid
     */
    readonly accountId: string;
    /**
     * Specifies which audit checks are enabled and disabled for this account.
     *
     * Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted. To disable a check, set the value of the `Enabled:` key to `false` .
     *
     * If an enabled check is removed from the template, it will also be disabled.
     *
     * You can't disable a check if it's used by any scheduled audit. You must delete the check from the scheduled audit or delete the scheduled audit itself to disable the check.
     *
     * For more information on avialbe auidt checks see [AWS::IoT::AccountAuditConfiguration AuditCheckConfigurations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations
     */
    readonly auditCheckConfigurations: CfnAccountAuditConfiguration.AuditCheckConfigurationsProperty | cdk.IResolvable;
    /**
     * Information about the targets to which audit notifications are sent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditnotificationtargetconfigurations
     */
    readonly auditNotificationTargetConfigurations?: CfnAccountAuditConfiguration.AuditNotificationTargetConfigurationsProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the role that grants permission to AWS IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-rolearn
     */
    readonly roleArn: string;
}
/**
 * Specifies an authorizer.
 *
 * @cloudformationResource AWS::IoT::Authorizer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html
 */
export declare class CfnAuthorizer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAuthorizer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAuthorizer;
    /**
     * The Amazon Resource Name (ARN) of the authorizer.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The authorizer's Lambda function ARN.
     */
    authorizerFunctionArn: string;
    /**
     * The authorizer name.
     */
    authorizerName?: string;
    /**
     * When `true` , the result from the authorizer's Lambda function is cached for clients that use persistent HTTP connections.
     */
    enableCachingForHttp?: boolean | cdk.IResolvable;
    /**
     * Specifies whether AWS IoT validates the token signature in an authorization request.
     */
    signingDisabled?: boolean | cdk.IResolvable;
    /**
     * The status of the authorizer.
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata which can be used to manage the custom authorizer.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The key used to extract the token from the HTTP headers.
     */
    tokenKeyName?: string;
    /**
     * The public keys used to validate the token signature returned by your custom authentication service.
     */
    tokenSigningPublicKeys?: cdk.IResolvable | Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAuthorizerProps);
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
 * Properties for defining a `CfnAuthorizer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html
 */
export interface CfnAuthorizerProps {
    /**
     * The authorizer's Lambda function ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-authorizerfunctionarn
     */
    readonly authorizerFunctionArn: string;
    /**
     * The authorizer name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-authorizername
     */
    readonly authorizerName?: string;
    /**
     * When `true` , the result from the authorizer's Lambda function is cached for clients that use persistent HTTP connections.
     *
     * The results are cached for the time specified by the Lambda function in `refreshAfterInSeconds` . This value doesn't affect authorization of clients that use MQTT connections.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-enablecachingforhttp
     */
    readonly enableCachingForHttp?: boolean | cdk.IResolvable;
    /**
     * Specifies whether AWS IoT validates the token signature in an authorization request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-signingdisabled
     */
    readonly signingDisabled?: boolean | cdk.IResolvable;
    /**
     * The status of the authorizer.
     *
     * Valid values: `ACTIVE` | `INACTIVE`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-status
     */
    readonly status?: string;
    /**
     * Metadata which can be used to manage the custom authorizer.
     *
     * > For URI Request parameters use format: ...key1=value1&key2=value2...
     * >
     * > For the CLI command-line parameter use format: &&tags "key1=value1&key2=value2..."
     * >
     * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The key used to extract the token from the HTTP headers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-tokenkeyname
     */
    readonly tokenKeyName?: string;
    /**
     * The public keys used to validate the token signature returned by your custom authentication service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#cfn-iot-authorizer-tokensigningpublickeys
     */
    readonly tokenSigningPublicKeys?: cdk.IResolvable | Record<string, string>;
}
/**
 * Creates a new billing group.
 *
 * Requires permission to access the [CreateBillingGroup](https://docs.aws.amazon.com//service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @cloudformationResource AWS::IoT::BillingGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html
 */
export declare class CfnBillingGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBillingGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBillingGroup;
    /**
     * The ARN of the billing group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the billing group.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the billing group.
     */
    billingGroupName?: string;
    /**
     * The properties of the billing group.
     */
    billingGroupProperties?: CfnBillingGroup.BillingGroupPropertiesProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata which can be used to manage the billing group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnBillingGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBillingGroup {
    /**
     * The properties of a billing group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-billinggroup-billinggroupproperties.html
     */
    interface BillingGroupPropertiesProperty {
        /**
         * The description of the billing group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-billinggroup-billinggroupproperties.html#cfn-iot-billinggroup-billinggroupproperties-billinggroupdescription
         */
        readonly billingGroupDescription?: string;
    }
}
/**
 * Properties for defining a `CfnBillingGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html
 */
export interface CfnBillingGroupProps {
    /**
     * The name of the billing group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html#cfn-iot-billinggroup-billinggroupname
     */
    readonly billingGroupName?: string;
    /**
     * The properties of the billing group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html#cfn-iot-billinggroup-billinggroupproperties
     */
    readonly billingGroupProperties?: CfnBillingGroup.BillingGroupPropertiesProperty | cdk.IResolvable;
    /**
     * Metadata which can be used to manage the billing group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html#cfn-iot-billinggroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a CA certificate.
 *
 * @cloudformationResource AWS::IoT::CACertificate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html
 */
export declare class CfnCACertificate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCACertificate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCACertificate;
    /**
     * Returns the Amazon Resource Name (ARN) for the CA certificate. For example:
     *
     * `{ "Fn::GetAtt": ["MyCACertificate", "Arn"] }`
     *
     * A value similar to the following is returned:
     *
     * `arn:aws:iot:us-east-1:123456789012:cacert/a6be6b84559801927e35a8f901fae08b5971d78d1562e29504ff9663b276a5f5`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The CA certificate ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Whether the CA certificate is configured for auto registration of device certificates.
     */
    autoRegistrationStatus?: string;
    /**
     * The certificate data in PEM format.
     */
    caCertificatePem: string;
    /**
     * The mode of the CA.
     */
    certificateMode?: string;
    /**
     * Information about the registration configuration.
     */
    registrationConfig?: cdk.IResolvable | CfnCACertificate.RegistrationConfigProperty;
    /**
     * If true, removes auto registration.
     */
    removeAutoRegistration?: boolean | cdk.IResolvable;
    /**
     * The status of the CA certificate.
     */
    status: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The private key verification certificate.
     */
    verificationCertificatePem?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCACertificateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCACertificate {
    /**
     * The registration configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-cacertificate-registrationconfig.html
     */
    interface RegistrationConfigProperty {
        /**
         * The ARN of the role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-cacertificate-registrationconfig.html#cfn-iot-cacertificate-registrationconfig-rolearn
         */
        readonly roleArn?: string;
        /**
         * The template body.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-cacertificate-registrationconfig.html#cfn-iot-cacertificate-registrationconfig-templatebody
         */
        readonly templateBody?: string;
        /**
         * The name of the provisioning template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-cacertificate-registrationconfig.html#cfn-iot-cacertificate-registrationconfig-templatename
         */
        readonly templateName?: string;
    }
}
/**
 * Properties for defining a `CfnCACertificate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html
 */
export interface CfnCACertificateProps {
    /**
     * Whether the CA certificate is configured for auto registration of device certificates.
     *
     * Valid values are "ENABLE" and "DISABLE".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-autoregistrationstatus
     */
    readonly autoRegistrationStatus?: string;
    /**
     * The certificate data in PEM format.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-cacertificatepem
     */
    readonly caCertificatePem: string;
    /**
     * The mode of the CA.
     *
     * All the device certificates that are registered using this CA will be registered in the same mode as the CA. For more information about certificate mode for device certificates, see [certificate mode](https://docs.aws.amazon.com//iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode) .
     *
     * Valid values are "DEFAULT" and "SNI_ONLY".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-certificatemode
     */
    readonly certificateMode?: string;
    /**
     * Information about the registration configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-registrationconfig
     */
    readonly registrationConfig?: cdk.IResolvable | CfnCACertificate.RegistrationConfigProperty;
    /**
     * If true, removes auto registration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-removeautoregistration
     */
    readonly removeAutoRegistration?: boolean | cdk.IResolvable;
    /**
     * The status of the CA certificate.
     *
     * Valid values are "ACTIVE" and "INACTIVE".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-status
     */
    readonly status: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The private key verification certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-verificationcertificatepem
     */
    readonly verificationCertificatePem?: string;
}
/**
 * Use the `AWS::IoT::Certificate` resource to declare an AWS IoT X.509 certificate. For information about working with X.509 certificates, see [X.509 Client Certificates](https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html) in the *AWS IoT Developer Guide* .
 *
 * @cloudformationResource AWS::IoT::Certificate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html
 */
export declare class CfnCertificate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCertificate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCertificate;
    /**
     * Returns the Amazon Resource Name (ARN) for the certificate. For example:
     *
     * `{ "Fn::GetAtt": ["MyCertificate", "Arn"] }`
     *
     * A value similar to the following is returned:
     *
     * `arn:aws:iot:ap-southeast-2:123456789012:cert/a1234567b89c012d3e4fg567hij8k9l01mno1p23q45678901rs234567890t1u2`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The certificate ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The CA certificate used to sign the device certificate being registered, not available when CertificateMode is SNI_ONLY.
     */
    caCertificatePem?: string;
    /**
     * Specifies which mode of certificate registration to use with this resource.
     */
    certificateMode?: string;
    /**
     * The certificate data in PEM format.
     */
    certificatePem?: string;
    /**
     * The certificate signing request (CSR).
     */
    certificateSigningRequest?: string;
    /**
     * The status of the certificate.
     */
    status: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCertificateProps);
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
 * Properties for defining a `CfnCertificate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html
 */
export interface CfnCertificateProps {
    /**
     * The CA certificate used to sign the device certificate being registered, not available when CertificateMode is SNI_ONLY.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-cacertificatepem
     */
    readonly caCertificatePem?: string;
    /**
     * Specifies which mode of certificate registration to use with this resource.
     *
     * Valid options are DEFAULT with CaCertificatePem and CertificatePem, SNI_ONLY with CertificatePem, and Default with CertificateSigningRequest.
     *
     * `DEFAULT` : A certificate in `DEFAULT` mode is either generated by AWS IoT Core or registered with an issuer certificate authority (CA). Devices with certificates in `DEFAULT` mode aren't required to send the Server Name Indication (SNI) extension when connecting to AWS IoT Core . However, to use features such as custom domains and VPC endpoints, we recommend that you use the SNI extension when connecting to AWS IoT Core .
     *
     * `SNI_ONLY` : A certificate in `SNI_ONLY` mode is registered without an issuer CA. Devices with certificates in `SNI_ONLY` mode must send the SNI extension when connecting to AWS IoT Core .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-certificatemode
     */
    readonly certificateMode?: string;
    /**
     * The certificate data in PEM format.
     *
     * Requires SNI_ONLY for the certificate mode or the accompanying CACertificatePem for registration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-certificatepem
     */
    readonly certificatePem?: string;
    /**
     * The certificate signing request (CSR).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-certificatesigningrequest
     */
    readonly certificateSigningRequest?: string;
    /**
     * The status of the certificate.
     *
     * Valid values are ACTIVE, INACTIVE, REVOKED, PENDING_TRANSFER, and PENDING_ACTIVATION.
     *
     * The status value REGISTER_INACTIVE is deprecated and should not be used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-status
     */
    readonly status: string;
}
/**
 * Use the `AWS::IoT::CustomMetric` resource to define a custom metric published by your devices to Device Defender.
 *
 * For API reference, see [CreateCustomMetric](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCustomMetric.html) and for general information, see [Custom metrics](https://docs.aws.amazon.com/iot/latest/developerguide/dd-detect-custom-metrics.html) .
 *
 * @cloudformationResource AWS::IoT::CustomMetric
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html
 */
export declare class CfnCustomMetric extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCustomMetric from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCustomMetric;
    /**
     * The Amazon Resource Number (ARN) of the custom metric; for example, `arn: *aws-partition* :iot: *region* : *accountId* :custommetric/ *metricName*` .
     *
     * @cloudformationAttribute MetricArn
     */
    readonly attrMetricArn: string;
    /**
     * The friendly name in the console for the custom metric.
     */
    displayName?: string;
    /**
     * The name of the custom metric.
     */
    metricName?: string;
    /**
     * The type of the custom metric. Types include `string-list` , `ip-address-list` , `number-list` , and `number` .
     */
    metricType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that can be used to manage the custom metric.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCustomMetricProps);
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
 * Properties for defining a `CfnCustomMetric`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html
 */
export interface CfnCustomMetricProps {
    /**
     * The friendly name in the console for the custom metric.
     *
     * This name doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. You can update the friendly name after you define it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html#cfn-iot-custommetric-displayname
     */
    readonly displayName?: string;
    /**
     * The name of the custom metric.
     *
     * This will be used in the metric report submitted from the device/thing. The name can't begin with `aws:` . You can’t change the name after you define it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html#cfn-iot-custommetric-metricname
     */
    readonly metricName?: string;
    /**
     * The type of the custom metric. Types include `string-list` , `ip-address-list` , `number-list` , and `number` .
     *
     * > The type `number` only takes a single metric value as an input, but when you submit the metrics value in the DeviceMetrics report, you must pass it as an array with a single value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html#cfn-iot-custommetric-metrictype
     */
    readonly metricType: string;
    /**
     * Metadata that can be used to manage the custom metric.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html#cfn-iot-custommetric-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Use the `AWS::IoT::Dimension` to limit the scope of a metric used in a security profile for AWS IoT Device Defender .
 *
 * For example, using a `TOPIC_FILTER` dimension, you can narrow down the scope of the metric to only MQTT topics where the name matches the pattern specified in the dimension. For API reference, see [CreateDimension](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDimension.html) and for general information, see [Scoping metrics in security profiles using dimensions](https://docs.aws.amazon.com/iot/latest/developerguide/scoping-security-behavior.html) .
 *
 * @cloudformationResource AWS::IoT::Dimension
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html
 */
export declare class CfnDimension extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDimension from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDimension;
    /**
     * The Amazon Resource Name (ARN) of the dimension.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A unique identifier for the dimension.
     */
    name?: string;
    /**
     * Specifies the value or list of values for the dimension.
     */
    stringValues: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that can be used to manage the dimension.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies the type of dimension.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDimensionProps);
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
 * Properties for defining a `CfnDimension`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html
 */
export interface CfnDimensionProps {
    /**
     * A unique identifier for the dimension.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-name
     */
    readonly name?: string;
    /**
     * Specifies the value or list of values for the dimension.
     *
     * For `TOPIC_FILTER` dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-stringvalues
     */
    readonly stringValues: Array<string>;
    /**
     * Metadata that can be used to manage the dimension.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the type of dimension.
     *
     * Supported types: `TOPIC_FILTER.`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-type
     */
    readonly type: string;
}
/**
 * Specifies a domain configuration.
 *
 * @cloudformationResource AWS::IoT::DomainConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html
 */
export declare class CfnDomainConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomainConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomainConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the domain configuration.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The type of service delivered by the domain.
     *
     * @cloudformationAttribute DomainType
     */
    readonly attrDomainType: string;
    /**
     * The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for AWS -managed domains.
     *
     * @cloudformationAttribute ServerCertificates
     */
    readonly attrServerCertificates: cdk.IResolvable;
    /**
     * An enumerated string that speciﬁes the application-layer protocol.
     */
    applicationProtocol?: string;
    /**
     * An enumerated string that speciﬁes the authentication type.
     */
    authenticationType?: string;
    /**
     * An object that specifies the authorization service for a domain.
     */
    authorizerConfig?: CfnDomainConfiguration.AuthorizerConfigProperty | cdk.IResolvable;
    /**
     * An object that speciﬁes the client certificate conﬁguration for a domain.
     */
    clientCertificateConfig?: CfnDomainConfiguration.ClientCertificateConfigProperty | cdk.IResolvable;
    /**
     * The name of the domain configuration.
     */
    domainConfigurationName?: string;
    /**
     * The status to which the domain configuration should be updated.
     */
    domainConfigurationStatus?: string;
    /**
     * The name of the domain.
     */
    domainName?: string;
    /**
     * The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake.
     */
    serverCertificateArns?: Array<string>;
    /**
     * The server certificate configuration.
     */
    serverCertificateConfig?: cdk.IResolvable | CfnDomainConfiguration.ServerCertificateConfigProperty;
    /**
     * The type of service delivered by the endpoint.
     */
    serviceType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata which can be used to manage the domain configuration.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * An object that specifies the TLS configuration for a domain.
     */
    tlsConfig?: cdk.IResolvable | CfnDomainConfiguration.TlsConfigProperty;
    /**
     * The certificate used to validate the server certificate and prove domain name ownership.
     */
    validationCertificateArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDomainConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDomainConfiguration {
    /**
     * An object that specifies the TLS configuration for a domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-tlsconfig.html
     */
    interface TlsConfigProperty {
        /**
         * The security policy for a domain configuration.
         *
         * For more information, see [Security policies](https://docs.aws.amazon.com/iot/latest/developerguide/transport-security.html#tls-policy-table) in the *AWS IoT Core developer guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-tlsconfig.html#cfn-iot-domainconfiguration-tlsconfig-securitypolicy
         */
        readonly securityPolicy?: string;
    }
    /**
     * An object that specifies the authorization service for a domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-authorizerconfig.html
     */
    interface AuthorizerConfigProperty {
        /**
         * A Boolean that specifies whether the domain configuration's authorization service can be overridden.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-authorizerconfig.html#cfn-iot-domainconfiguration-authorizerconfig-allowauthorizeroverride
         */
        readonly allowAuthorizerOverride?: boolean | cdk.IResolvable;
        /**
         * The name of the authorization service for a domain configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-authorizerconfig.html#cfn-iot-domainconfiguration-authorizerconfig-defaultauthorizername
         */
        readonly defaultAuthorizerName?: string;
    }
    /**
     * The server certificate configuration.
     *
     * For more information, see [Configurable endpoints](https://docs.aws.amazon.com//iot/latest/developerguide/iot-custom-endpoints-configurable.html) from the AWS IoT Core Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificateconfig.html
     */
    interface ServerCertificateConfigProperty {
        /**
         * A Boolean value that indicates whether Online Certificate Status Protocol (OCSP) server certificate check is enabled or not.
         *
         * For more information, see [Configurable endpoints](https://docs.aws.amazon.com//iot/latest/developerguide/iot-custom-endpoints-configurable.html) from the AWS IoT Core Developer Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificateconfig.html#cfn-iot-domainconfiguration-servercertificateconfig-enableocspcheck
         */
        readonly enableOcspCheck?: boolean | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) for an X.509 certificate stored in ACM. If provided, AWS IoT Core will use this certificate to validate the signature of the received OCSP response. The OCSP responder must sign responses using either this authorized responder certificate or the issuing certificate, depending on whether the ARN is provided or not. The certificate must be in the same account and region as the domain configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificateconfig.html#cfn-iot-domainconfiguration-servercertificateconfig-ocspauthorizedresponderarn
         */
        readonly ocspAuthorizedResponderArn?: string;
        /**
         * The Amazon Resource Name (ARN) for a Lambda function that acts as a Request for Comments (RFC) 6960-compliant Online Certificate Status Protocol (OCSP) responder, supporting basic OCSP responses.
         *
         * The Lambda function accepts a base64-encoding of the OCSP request in the Distinguished Encoding Rules (DER) format. The Lambda function's response is also a base64-encoded OCSP response in the DER format. The response size must not exceed 4 kilobytes (KiB). The Lambda function must be in the same account and region as the domain configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificateconfig.html#cfn-iot-domainconfiguration-servercertificateconfig-ocsplambdaarn
         */
        readonly ocspLambdaArn?: string;
    }
    /**
     * An object that speciﬁes the client certificate conﬁguration for a domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-clientcertificateconfig.html
     */
    interface ClientCertificateConfigProperty {
        /**
         * The ARN of the Lambda function that IoT invokes after mutual TLS authentication during the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-clientcertificateconfig.html#cfn-iot-domainconfiguration-clientcertificateconfig-clientcertificatecallbackarn
         */
        readonly clientCertificateCallbackArn?: string;
    }
    /**
     * An object that contains information about a server certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificatesummary.html
     */
    interface ServerCertificateSummaryProperty {
        /**
         * The ARN of the server certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificatesummary.html#cfn-iot-domainconfiguration-servercertificatesummary-servercertificatearn
         */
        readonly serverCertificateArn?: string;
        /**
         * The status of the server certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificatesummary.html#cfn-iot-domainconfiguration-servercertificatesummary-servercertificatestatus
         */
        readonly serverCertificateStatus?: string;
        /**
         * Details that explain the status of the server certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-domainconfiguration-servercertificatesummary.html#cfn-iot-domainconfiguration-servercertificatesummary-servercertificatestatusdetail
         */
        readonly serverCertificateStatusDetail?: string;
    }
}
/**
 * Properties for defining a `CfnDomainConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html
 */
export interface CfnDomainConfigurationProps {
    /**
     * An enumerated string that speciﬁes the application-layer protocol.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-applicationprotocol
     */
    readonly applicationProtocol?: string;
    /**
     * An enumerated string that speciﬁes the authentication type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-authenticationtype
     */
    readonly authenticationType?: string;
    /**
     * An object that specifies the authorization service for a domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-authorizerconfig
     */
    readonly authorizerConfig?: CfnDomainConfiguration.AuthorizerConfigProperty | cdk.IResolvable;
    /**
     * An object that speciﬁes the client certificate conﬁguration for a domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-clientcertificateconfig
     */
    readonly clientCertificateConfig?: CfnDomainConfiguration.ClientCertificateConfigProperty | cdk.IResolvable;
    /**
     * The name of the domain configuration.
     *
     * This value must be unique to a region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-domainconfigurationname
     */
    readonly domainConfigurationName?: string;
    /**
     * The status to which the domain configuration should be updated.
     *
     * Valid values: `ENABLED` | `DISABLED`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-domainconfigurationstatus
     */
    readonly domainConfigurationStatus?: string;
    /**
     * The name of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-domainname
     */
    readonly domainName?: string;
    /**
     * The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake.
     *
     * Currently you can specify only one certificate ARN. This value is not required for AWS -managed domains.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-servercertificatearns
     */
    readonly serverCertificateArns?: Array<string>;
    /**
     * The server certificate configuration.
     *
     * For more information, see [Configurable endpoints](https://docs.aws.amazon.com//iot/latest/developerguide/iot-custom-endpoints-configurable.html) from the AWS IoT Core Developer Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-servercertificateconfig
     */
    readonly serverCertificateConfig?: cdk.IResolvable | CfnDomainConfiguration.ServerCertificateConfigProperty;
    /**
     * The type of service delivered by the endpoint.
     *
     * > AWS IoT Core currently supports only the `DATA` service type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-servicetype
     */
    readonly serviceType?: string;
    /**
     * Metadata which can be used to manage the domain configuration.
     *
     * > For URI Request parameters use format: ...key1=value1&key2=value2...
     * >
     * > For the CLI command-line parameter use format: &&tags "key1=value1&key2=value2..."
     * >
     * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An object that specifies the TLS configuration for a domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-tlsconfig
     */
    readonly tlsConfig?: cdk.IResolvable | CfnDomainConfiguration.TlsConfigProperty;
    /**
     * The certificate used to validate the server certificate and prove domain name ownership.
     *
     * This certificate must be signed by a public certificate authority. This value is not required for AWS -managed domains.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-validationcertificatearn
     */
    readonly validationCertificateArn?: string;
}
/**
 * Use the `AWS::IoT::FleetMetric` resource to declare a fleet metric.
 *
 * @cloudformationResource AWS::IoT::FleetMetric
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html
 */
export declare class CfnFleetMetric extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFleetMetric from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFleetMetric;
    /**
     * The time the fleet metric was created.
     *
     * @cloudformationAttribute CreationDate
     */
    readonly attrCreationDate: cdk.IResolvable;
    /**
     * The time the fleet metric was last modified.
     *
     * @cloudformationAttribute LastModifiedDate
     */
    readonly attrLastModifiedDate: cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the fleet metric.
     *
     * @cloudformationAttribute MetricArn
     */
    readonly attrMetricArn: string;
    /**
     * The fleet metric version.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: cdk.IResolvable;
    /**
     * The field to aggregate.
     */
    aggregationField?: string;
    /**
     * The type of the aggregation query.
     */
    aggregationType?: CfnFleetMetric.AggregationTypeProperty | cdk.IResolvable;
    /**
     * The fleet metric description.
     */
    description?: string;
    /**
     * The name of the index to search.
     */
    indexName?: string;
    /**
     * The name of the fleet metric to create.
     */
    metricName: string;
    /**
     * The time in seconds between fleet metric emissions.
     */
    period?: number;
    /**
     * The search query string.
     */
    queryString?: string;
    /**
     * The query version.
     */
    queryVersion?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata which can be used to manage the fleet metric.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Used to support unit transformation such as milliseconds to seconds.
     */
    unit?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFleetMetricProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFleetMetric {
    /**
     * The type of aggregation queries.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-fleetmetric-aggregationtype.html
     */
    interface AggregationTypeProperty {
        /**
         * The name of the aggregation type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-fleetmetric-aggregationtype.html#cfn-iot-fleetmetric-aggregationtype-name
         */
        readonly name: string;
        /**
         * A list of the values of aggregation types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-fleetmetric-aggregationtype.html#cfn-iot-fleetmetric-aggregationtype-values
         */
        readonly values: Array<string>;
    }
}
/**
 * Properties for defining a `CfnFleetMetric`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html
 */
export interface CfnFleetMetricProps {
    /**
     * The field to aggregate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-aggregationfield
     */
    readonly aggregationField?: string;
    /**
     * The type of the aggregation query.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-aggregationtype
     */
    readonly aggregationType?: CfnFleetMetric.AggregationTypeProperty | cdk.IResolvable;
    /**
     * The fleet metric description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-description
     */
    readonly description?: string;
    /**
     * The name of the index to search.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-indexname
     */
    readonly indexName?: string;
    /**
     * The name of the fleet metric to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-metricname
     */
    readonly metricName: string;
    /**
     * The time in seconds between fleet metric emissions.
     *
     * Range [60(1 min), 86400(1 day)] and must be multiple of 60.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-period
     */
    readonly period?: number;
    /**
     * The search query string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-querystring
     */
    readonly queryString?: string;
    /**
     * The query version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-queryversion
     */
    readonly queryVersion?: string;
    /**
     * Metadata which can be used to manage the fleet metric.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Used to support unit transformation such as milliseconds to seconds.
     *
     * Must be a unit supported by CW metric. Default to null.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-fleetmetric.html#cfn-iot-fleetmetric-unit
     */
    readonly unit?: string;
}
/**
 * Represents a job template.
 *
 * @cloudformationResource AWS::IoT::JobTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html
 */
export declare class CfnJobTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnJobTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnJobTemplate;
    /**
     * The ARN of the job to use as the basis for the job template.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The criteria that determine when and how a job abort takes place.
     */
    abortConfig?: any | cdk.IResolvable;
    /**
     * A description of the job template.
     */
    description: string;
    /**
     * The package version Amazon Resource Names (ARNs) that are installed on the device’s reserved named shadow ( `$package` ) when the job successfully completes.
     */
    destinationPackageVersions?: Array<string>;
    /**
     * The job document.
     */
    document?: string;
    /**
     * An S3 link, or S3 object URL, to the job document.
     */
    documentSource?: string;
    /**
     * The ARN of the job to use as the basis for the job template.
     */
    jobArn?: string;
    /**
     * Allows you to create the criteria to retry a job.
     */
    jobExecutionsRetryConfig?: cdk.IResolvable | CfnJobTemplate.JobExecutionsRetryConfigProperty;
    /**
     * Allows you to create a staged rollout of a job.
     */
    jobExecutionsRolloutConfig?: any | cdk.IResolvable;
    /**
     * A unique identifier for the job template.
     */
    jobTemplateId: string;
    /**
     * An optional configuration within the SchedulingConfig to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job.
     */
    maintenanceWindows?: Array<cdk.IResolvable | CfnJobTemplate.MaintenanceWindowProperty> | cdk.IResolvable;
    /**
     * Configuration for pre-signed S3 URLs.
     */
    presignedUrlConfig?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that can be used to manage the job template.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies the amount of time each device has to finish its execution of the job.
     */
    timeoutConfig?: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnJobTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnJobTemplate {
    /**
     * Specifies the amount of time each device has to finish its execution of the job.
     *
     * A timer is started when the job execution status is set to `IN_PROGRESS` . If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-timeoutconfig.html
     */
    interface TimeoutConfigProperty {
        /**
         * Specifies the amount of time, in minutes, this device has to finish execution of this job.
         *
         * The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The in progress timer can't be updated and will apply to all job executions for the job. Whenever a job execution remains in the IN_PROGRESS status for longer than this interval, the job execution will fail and switch to the terminal `TIMED_OUT` status.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-timeoutconfig.html#cfn-iot-jobtemplate-timeoutconfig-inprogresstimeoutinminutes
         */
        readonly inProgressTimeoutInMinutes: number;
    }
    /**
     * The configuration that determines how many retries are allowed for each failure type for a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobexecutionsretryconfig.html
     */
    interface JobExecutionsRetryConfigProperty {
        /**
         * The list of criteria that determines how many retries are allowed for each failure type for a job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobexecutionsretryconfig.html#cfn-iot-jobtemplate-jobexecutionsretryconfig-retrycriterialist
         */
        readonly retryCriteriaList?: Array<cdk.IResolvable | CfnJobTemplate.RetryCriteriaProperty> | cdk.IResolvable;
    }
    /**
     * The criteria that determines how many retries are allowed for each failure type for a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-retrycriteria.html
     */
    interface RetryCriteriaProperty {
        /**
         * The type of job execution failures that can initiate a job retry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-retrycriteria.html#cfn-iot-jobtemplate-retrycriteria-failuretype
         */
        readonly failureType?: string;
        /**
         * The number of retries allowed for a failure type for the job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-retrycriteria.html#cfn-iot-jobtemplate-retrycriteria-numberofretries
         */
        readonly numberOfRetries?: number;
    }
    /**
     * The criteria that determine when and how a job abort takes place.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortconfig.html
     */
    interface AbortConfigProperty {
        /**
         * The list of criteria that determine when and how to abort the job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortconfig.html#cfn-iot-jobtemplate-abortconfig-criterialist
         */
        readonly criteriaList: Array<CfnJobTemplate.AbortCriteriaProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The criteria that determine when and how a job abort takes place.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortcriteria.html
     */
    interface AbortCriteriaProperty {
        /**
         * The type of job action to take to initiate the job abort.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortcriteria.html#cfn-iot-jobtemplate-abortcriteria-action
         */
        readonly action: string;
        /**
         * The type of job execution failures that can initiate a job abort.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortcriteria.html#cfn-iot-jobtemplate-abortcriteria-failuretype
         */
        readonly failureType: string;
        /**
         * The minimum number of things which must receive job execution notifications before the job can be aborted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortcriteria.html#cfn-iot-jobtemplate-abortcriteria-minnumberofexecutedthings
         */
        readonly minNumberOfExecutedThings: number;
        /**
         * The minimum percentage of job execution failures that must occur to initiate the job abort.
         *
         * AWS IoT Core supports up to two digits after the decimal (for example, 10.9 and 10.99, but not 10.999).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortcriteria.html#cfn-iot-jobtemplate-abortcriteria-thresholdpercentage
         */
        readonly thresholdPercentage: number;
    }
    /**
     * Allows you to create a staged rollout of a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobexecutionsrolloutconfig.html
     */
    interface JobExecutionsRolloutConfigProperty {
        /**
         * The rate of increase for a job rollout.
         *
         * This parameter allows you to define an exponential rate for a job rollout.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobexecutionsrolloutconfig.html#cfn-iot-jobtemplate-jobexecutionsrolloutconfig-exponentialrolloutrate
         */
        readonly exponentialRolloutRate?: CfnJobTemplate.ExponentialRolloutRateProperty | cdk.IResolvable;
        /**
         * The maximum number of things that will be notified of a pending job, per minute.
         *
         * This parameter allows you to create a staged rollout.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobexecutionsrolloutconfig.html#cfn-iot-jobtemplate-jobexecutionsrolloutconfig-maximumperminute
         */
        readonly maximumPerMinute?: number;
    }
    /**
     * Allows you to create an exponential rate of rollout for a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-exponentialrolloutrate.html
     */
    interface ExponentialRolloutRateProperty {
        /**
         * The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.
         *
         * This parameter allows you to define the initial rate of rollout.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-exponentialrolloutrate.html#cfn-iot-jobtemplate-exponentialrolloutrate-baserateperminute
         */
        readonly baseRatePerMinute: number;
        /**
         * The exponential factor to increase the rate of rollout for a job.
         *
         * AWS IoT Core supports up to one digit after the decimal (for example, 1.5, but not 1.55).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-exponentialrolloutrate.html#cfn-iot-jobtemplate-exponentialrolloutrate-incrementfactor
         */
        readonly incrementFactor: number;
        /**
         * The criteria to initiate the increase in rate of rollout for a job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-exponentialrolloutrate.html#cfn-iot-jobtemplate-exponentialrolloutrate-rateincreasecriteria
         */
        readonly rateIncreaseCriteria: cdk.IResolvable | CfnJobTemplate.RateIncreaseCriteriaProperty;
    }
    /**
     * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-rateincreasecriteria.html
     */
    interface RateIncreaseCriteriaProperty {
        /**
         * The threshold for number of notified things that will initiate the increase in rate of rollout.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-rateincreasecriteria.html#cfn-iot-jobtemplate-rateincreasecriteria-numberofnotifiedthings
         */
        readonly numberOfNotifiedThings?: number;
        /**
         * The threshold for number of succeeded things that will initiate the increase in rate of rollout.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-rateincreasecriteria.html#cfn-iot-jobtemplate-rateincreasecriteria-numberofsucceededthings
         */
        readonly numberOfSucceededThings?: number;
    }
    /**
     * An optional configuration within the `SchedulingConfig` to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-maintenancewindow.html
     */
    interface MaintenanceWindowProperty {
        /**
         * Displays the duration of the next maintenance window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-maintenancewindow.html#cfn-iot-jobtemplate-maintenancewindow-durationinminutes
         */
        readonly durationInMinutes?: number;
        /**
         * Displays the start time of the next maintenance window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-maintenancewindow.html#cfn-iot-jobtemplate-maintenancewindow-starttime
         */
        readonly startTime?: string;
    }
    /**
     * Configuration for pre-signed S3 URLs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-presignedurlconfig.html
     */
    interface PresignedUrlConfigProperty {
        /**
         * How long (in seconds) pre-signed URLs are valid.
         *
         * Valid values are 60 - 3600, the default value is 3600 seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-presignedurlconfig.html#cfn-iot-jobtemplate-presignedurlconfig-expiresinsec
         */
        readonly expiresInSec?: number;
        /**
         * The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored.
         *
         * The role must also grant permission for IoT to download the files.
         *
         * > For information about addressing the confused deputy problem, see [cross-service confused deputy prevention](https://docs.aws.amazon.com/iot/latest/developerguide/cross-service-confused-deputy-prevention.html) in the *AWS IoT Core developer guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-presignedurlconfig.html#cfn-iot-jobtemplate-presignedurlconfig-rolearn
         */
        readonly roleArn: string;
    }
}
/**
 * Properties for defining a `CfnJobTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html
 */
export interface CfnJobTemplateProps {
    /**
     * The criteria that determine when and how a job abort takes place.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-abortconfig
     */
    readonly abortConfig?: any | cdk.IResolvable;
    /**
     * A description of the job template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-description
     */
    readonly description: string;
    /**
     * The package version Amazon Resource Names (ARNs) that are installed on the device’s reserved named shadow ( `$package` ) when the job successfully completes.
     *
     * *Note:* Up to 25 package version ARNS are allowed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-destinationpackageversions
     */
    readonly destinationPackageVersions?: Array<string>;
    /**
     * The job document.
     *
     * Required if you don't specify a value for `documentSource` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-document
     */
    readonly document?: string;
    /**
     * An S3 link, or S3 object URL, to the job document.
     *
     * The link is an Amazon S3 object URL and is required if you don't specify a value for `document` .
     *
     * For example, `--document-source https://s3. *region-code* .amazonaws.com/example-firmware/device-firmware.1.0`
     *
     * For more information, see [Methods for accessing a bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-bucket-intro.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-documentsource
     */
    readonly documentSource?: string;
    /**
     * The ARN of the job to use as the basis for the job template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-jobarn
     */
    readonly jobArn?: string;
    /**
     * Allows you to create the criteria to retry a job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-jobexecutionsretryconfig
     */
    readonly jobExecutionsRetryConfig?: cdk.IResolvable | CfnJobTemplate.JobExecutionsRetryConfigProperty;
    /**
     * Allows you to create a staged rollout of a job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-jobexecutionsrolloutconfig
     */
    readonly jobExecutionsRolloutConfig?: any | cdk.IResolvable;
    /**
     * A unique identifier for the job template.
     *
     * We recommend using a UUID. Alpha-numeric characters, "-", and "_" are valid for use here.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-jobtemplateid
     */
    readonly jobTemplateId: string;
    /**
     * An optional configuration within the SchedulingConfig to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-maintenancewindows
     */
    readonly maintenanceWindows?: Array<cdk.IResolvable | CfnJobTemplate.MaintenanceWindowProperty> | cdk.IResolvable;
    /**
     * Configuration for pre-signed S3 URLs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-presignedurlconfig
     */
    readonly presignedUrlConfig?: any | cdk.IResolvable;
    /**
     * Metadata that can be used to manage the job template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the amount of time each device has to finish its execution of the job.
     *
     * A timer is started when the job execution status is set to `IN_PROGRESS` . If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-timeoutconfig
     */
    readonly timeoutConfig?: any | cdk.IResolvable;
}
/**
 * Configure logging.
 *
 * > If you already set the log function of AWS IoT Core , you can't deploy the AWS Cloud Development Kit (AWS CDK) to change the logging settings. You can change the logging settings by either:
 * >
 * > - Importing the existing logging resource into your AWS CloudFormation stack, such as with the [infrastructure as code generator (IaC generator)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/generate-IaC.html) .
 * > - Calling `aws iot set-v2-logging-options --disable-all-logs` before creating a new CloudFormation stack. This command disables all AWS IoT logging. As a result, no AWS IoT logs will be delivered to Amazon CloudWatch until you re-enable logging.
 *
 * @cloudformationResource AWS::IoT::Logging
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html
 */
export declare class CfnLogging extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLogging from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLogging;
    /**
     * The account ID.
     */
    accountId: string;
    /**
     * The default log level.
     */
    defaultLogLevel: string;
    /**
     * The role ARN used for the log.
     */
    roleArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLoggingProps);
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
 * Properties for defining a `CfnLogging`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html
 */
export interface CfnLoggingProps {
    /**
     * The account ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-accountid
     */
    readonly accountId: string;
    /**
     * The default log level.
     *
     * Valid Values: `DEBUG | INFO | ERROR | WARN | DISABLED`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-defaultloglevel
     */
    readonly defaultLogLevel: string;
    /**
     * The role ARN used for the log.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-rolearn
     */
    readonly roleArn: string;
}
/**
 * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask.
 *
 * For API reference, see [CreateMitigationAction](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateMitigationAction.html) and for general information, see [Mitigation actions](https://docs.aws.amazon.com/iot/latest/developerguide/dd-mitigation-actions.html) .
 *
 * @cloudformationResource AWS::IoT::MitigationAction
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html
 */
export declare class CfnMitigationAction extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMitigationAction from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMitigationAction;
    /**
     * The Amazon Resource Name (ARN) of the mitigation action.
     *
     * @cloudformationAttribute MitigationActionArn
     */
    readonly attrMitigationActionArn: string;
    /**
     * The ID of the mitigation action.
     *
     * @cloudformationAttribute MitigationActionId
     */
    readonly attrMitigationActionId: string;
    /**
     * The friendly name of the mitigation action.
     */
    actionName?: string;
    /**
     * The set of parameters for this mitigation action.
     */
    actionParams: CfnMitigationAction.ActionParamsProperty | cdk.IResolvable;
    /**
     * The IAM role ARN used to apply this mitigation action.
     */
    roleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that can be used to manage the mitigation action.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMitigationActionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMitigationAction {
    /**
     * Defines the type of action and the parameters for that action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html
     */
    interface ActionParamsProperty {
        /**
         * Specifies the group to which you want to add the devices.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-addthingstothinggroupparams
         */
        readonly addThingsToThingGroupParams?: CfnMitigationAction.AddThingsToThingGroupParamsProperty | cdk.IResolvable;
        /**
         * Specifies the logging level and the role with permissions for logging.
         *
         * You cannot specify a logging level of `DISABLED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-enableiotloggingparams
         */
        readonly enableIoTLoggingParams?: CfnMitigationAction.EnableIoTLoggingParamsProperty | cdk.IResolvable;
        /**
         * Specifies the topic to which the finding should be published.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-publishfindingtosnsparams
         */
        readonly publishFindingToSnsParams?: cdk.IResolvable | CfnMitigationAction.PublishFindingToSnsParamsProperty;
        /**
         * Replaces the policy version with a default or blank policy.
         *
         * You specify the template name. Only a value of `BLANK_POLICY` is currently supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-replacedefaultpolicyversionparams
         */
        readonly replaceDefaultPolicyVersionParams?: cdk.IResolvable | CfnMitigationAction.ReplaceDefaultPolicyVersionParamsProperty;
        /**
         * Specifies the new state for the CA certificate.
         *
         * Only a value of `DEACTIVATE` is currently supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-updatecacertificateparams
         */
        readonly updateCaCertificateParams?: cdk.IResolvable | CfnMitigationAction.UpdateCACertificateParamsProperty;
        /**
         * Specifies the new state for a device certificate.
         *
         * Only a value of `DEACTIVATE` is currently supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-updatedevicecertificateparams
         */
        readonly updateDeviceCertificateParams?: cdk.IResolvable | CfnMitigationAction.UpdateDeviceCertificateParamsProperty;
    }
    /**
     * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatedevicecertificateparams.html
     */
    interface UpdateDeviceCertificateParamsProperty {
        /**
         * The action that you want to apply to the device certificate.
         *
         * The only supported value is `DEACTIVATE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatedevicecertificateparams.html#cfn-iot-mitigationaction-updatedevicecertificateparams-action
         */
        readonly action: string;
    }
    /**
     * Parameters used when defining a mitigation action that move a set of things to a thing group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-addthingstothinggroupparams.html
     */
    interface AddThingsToThingGroupParamsProperty {
        /**
         * Specifies if this mitigation action can move the things that triggered the mitigation action even if they are part of one or more dynamic thing groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-addthingstothinggroupparams.html#cfn-iot-mitigationaction-addthingstothinggroupparams-overridedynamicgroups
         */
        readonly overrideDynamicGroups?: boolean | cdk.IResolvable;
        /**
         * The list of groups to which you want to add the things that triggered the mitigation action.
         *
         * You can add a thing to a maximum of 10 groups, but you can't add a thing to more than one group in the same hierarchy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-addthingstothinggroupparams.html#cfn-iot-mitigationaction-addthingstothinggroupparams-thinggroupnames
         */
        readonly thingGroupNames: Array<string>;
    }
    /**
     * Parameters to define a mitigation action that publishes findings to Amazon SNS.
     *
     * You can implement your own custom actions in response to the Amazon SNS messages.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-publishfindingtosnsparams.html
     */
    interface PublishFindingToSnsParamsProperty {
        /**
         * The ARN of the topic to which you want to publish the findings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-publishfindingtosnsparams.html#cfn-iot-mitigationaction-publishfindingtosnsparams-topicarn
         */
        readonly topicArn: string;
    }
    /**
     * Parameters used when defining a mitigation action that enable AWS IoT Core logging.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-enableiotloggingparams.html
     */
    interface EnableIoTLoggingParamsProperty {
        /**
         * Specifies the type of information to be logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-enableiotloggingparams.html#cfn-iot-mitigationaction-enableiotloggingparams-loglevel
         */
        readonly logLevel: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role used for logging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-enableiotloggingparams.html#cfn-iot-mitigationaction-enableiotloggingparams-rolearnforlogging
         */
        readonly roleArnForLogging: string;
    }
    /**
     * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-replacedefaultpolicyversionparams.html
     */
    interface ReplaceDefaultPolicyVersionParamsProperty {
        /**
         * The name of the template to be applied.
         *
         * The only supported value is `BLANK_POLICY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-replacedefaultpolicyversionparams.html#cfn-iot-mitigationaction-replacedefaultpolicyversionparams-templatename
         */
        readonly templateName: string;
    }
    /**
     * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatecacertificateparams.html
     */
    interface UpdateCACertificateParamsProperty {
        /**
         * The action that you want to apply to the CA certificate.
         *
         * The only supported value is `DEACTIVATE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatecacertificateparams.html#cfn-iot-mitigationaction-updatecacertificateparams-action
         */
        readonly action: string;
    }
}
/**
 * Properties for defining a `CfnMitigationAction`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html
 */
export interface CfnMitigationActionProps {
    /**
     * The friendly name of the mitigation action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionname
     */
    readonly actionName?: string;
    /**
     * The set of parameters for this mitigation action.
     *
     * The parameters vary, depending on the kind of action you apply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionparams
     */
    readonly actionParams: CfnMitigationAction.ActionParamsProperty | cdk.IResolvable;
    /**
     * The IAM role ARN used to apply this mitigation action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-rolearn
     */
    readonly roleArn: string;
    /**
     * Metadata that can be used to manage the mitigation action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Use the `AWS::IoT::Policy` resource to declare an AWS IoT policy.
 *
 * For more information about working with AWS IoT policies, see [Authorization](https://docs.aws.amazon.com/iot/latest/developerguide/authorization.html) in the *AWS IoT Developer Guide* .
 *
 * @cloudformationResource AWS::IoT::Policy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html
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
     * The Amazon Resource Name (ARN) of the AWS IoT policy, such as `arn:aws:iot:us-east-2:123456789012:policy/MyPolicy` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of this policy.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The JSON document that describes the policy.
     */
    policyDocument: any | cdk.IResolvable;
    /**
     * The policy name.
     */
    policyName?: string;
    tags?: Array<cdk.CfnTag>;
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html
 */
export interface CfnPolicyProps {
    /**
     * The JSON document that describes the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html#cfn-iot-policy-policydocument
     */
    readonly policyDocument: any | cdk.IResolvable;
    /**
     * The policy name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html#cfn-iot-policy-policyname
     */
    readonly policyName?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html#cfn-iot-policy-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Use the `AWS::IoT::PolicyPrincipalAttachment` resource to attach an AWS IoT policy to a principal (an X.509 certificate or other credential).
 *
 * For information about working with AWS IoT policies and principals, see [Authorization](https://docs.aws.amazon.com/iot/latest/developerguide/authorization.html) in the *AWS IoT Developer Guide* .
 *
 * @cloudformationResource AWS::IoT::PolicyPrincipalAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html
 */
export declare class CfnPolicyPrincipalAttachment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPolicyPrincipalAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPolicyPrincipalAttachment;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the AWS IoT policy.
     */
    policyName: string;
    /**
     * The principal, which can be a certificate ARN (as returned from the `CreateCertificate` operation) or an Amazon Cognito ID.
     */
    principal: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPolicyPrincipalAttachmentProps);
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
 * Properties for defining a `CfnPolicyPrincipalAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html
 */
export interface CfnPolicyPrincipalAttachmentProps {
    /**
     * The name of the AWS IoT policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html#cfn-iot-policyprincipalattachment-policyname
     */
    readonly policyName: string;
    /**
     * The principal, which can be a certificate ARN (as returned from the `CreateCertificate` operation) or an Amazon Cognito ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policyprincipalattachment.html#cfn-iot-policyprincipalattachment-principal
     */
    readonly principal: string;
}
/**
 * Creates a fleet provisioning template.
 *
 * @cloudformationResource AWS::IoT::ProvisioningTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html
 */
export declare class CfnProvisioningTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProvisioningTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProvisioningTemplate;
    /**
     * The ARN that identifies the provisioning template.
     *
     * @cloudformationAttribute TemplateArn
     */
    readonly attrTemplateArn: string;
    /**
     * The description of the fleet provisioning template.
     */
    description?: string;
    /**
     * True to enable the fleet provisioning template, otherwise false.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * Creates a pre-provisioning hook template.
     */
    preProvisioningHook?: cdk.IResolvable | CfnProvisioningTemplate.ProvisioningHookProperty;
    /**
     * The role ARN for the role associated with the fleet provisioning template.
     */
    provisioningRoleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that can be used to manage the fleet provisioning template.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The JSON formatted contents of the fleet provisioning template version.
     */
    templateBody: string;
    /**
     * The name of the fleet provisioning template.
     */
    templateName?: string;
    /**
     * The type of the provisioning template.
     */
    templateType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProvisioningTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProvisioningTemplate {
    /**
     * Structure that contains payloadVersion and targetArn.
     *
     * Provisioning hooks can be used when fleet provisioning to validate device parameters before allowing the device to be provisioned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-provisioningtemplate-provisioninghook.html
     */
    interface ProvisioningHookProperty {
        /**
         * The payload that was sent to the target function.
         *
         * The valid payload is `"2020-04-01"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-provisioningtemplate-provisioninghook.html#cfn-iot-provisioningtemplate-provisioninghook-payloadversion
         */
        readonly payloadVersion?: string;
        /**
         * The ARN of the target function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-provisioningtemplate-provisioninghook.html#cfn-iot-provisioningtemplate-provisioninghook-targetarn
         */
        readonly targetArn?: string;
    }
}
/**
 * Properties for defining a `CfnProvisioningTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html
 */
export interface CfnProvisioningTemplateProps {
    /**
     * The description of the fleet provisioning template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-description
     */
    readonly description?: string;
    /**
     * True to enable the fleet provisioning template, otherwise false.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * Creates a pre-provisioning hook template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-preprovisioninghook
     */
    readonly preProvisioningHook?: cdk.IResolvable | CfnProvisioningTemplate.ProvisioningHookProperty;
    /**
     * The role ARN for the role associated with the fleet provisioning template.
     *
     * This IoT role grants permission to provision a device.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-provisioningrolearn
     */
    readonly provisioningRoleArn: string;
    /**
     * Metadata that can be used to manage the fleet provisioning template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The JSON formatted contents of the fleet provisioning template version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-templatebody
     */
    readonly templateBody: string;
    /**
     * The name of the fleet provisioning template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-templatename
     */
    readonly templateName?: string;
    /**
     * The type of the provisioning template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-templatetype
     */
    readonly templateType?: string;
}
/**
 * Configure resource-specific logging.
 *
 * @cloudformationResource AWS::IoT::ResourceSpecificLogging
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html
 */
export declare class CfnResourceSpecificLogging extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceSpecificLogging from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceSpecificLogging;
    /**
     * The target Id.
     *
     * @cloudformationAttribute TargetId
     */
    readonly attrTargetId: string;
    /**
     * The default log level.Valid Values: `DEBUG | INFO | ERROR | WARN | DISABLED`.
     */
    logLevel: string;
    /**
     * The target name.
     */
    targetName: string;
    /**
     * The target type.
     */
    targetType: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceSpecificLoggingProps);
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
 * Properties for defining a `CfnResourceSpecificLogging`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html
 */
export interface CfnResourceSpecificLoggingProps {
    /**
     * The default log level.Valid Values: `DEBUG | INFO | ERROR | WARN | DISABLED`.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html#cfn-iot-resourcespecificlogging-loglevel
     */
    readonly logLevel: string;
    /**
     * The target name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html#cfn-iot-resourcespecificlogging-targetname
     */
    readonly targetName: string;
    /**
     * The target type.
     *
     * Valid Values: `DEFAULT | THING_GROUP`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html#cfn-iot-resourcespecificlogging-targettype
     */
    readonly targetType: string;
}
/**
 * Specifies a role alias.
 *
 * Requires permission to access the [CreateRoleAlias](https://docs.aws.amazon.com//service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @cloudformationResource AWS::IoT::RoleAlias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html
 */
export declare class CfnRoleAlias extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRoleAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRoleAlias;
    /**
     * The role alias ARN.
     *
     * @cloudformationAttribute RoleAliasArn
     */
    readonly attrRoleAliasArn: string;
    /**
     * The number of seconds for which the credential is valid.
     */
    credentialDurationSeconds?: number;
    /**
     * The role alias.
     */
    roleAlias?: string;
    /**
     * The role ARN.
     */
    roleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRoleAliasProps);
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
 * Properties for defining a `CfnRoleAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html
 */
export interface CfnRoleAliasProps {
    /**
     * The number of seconds for which the credential is valid.
     *
     * @default - 3600
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html#cfn-iot-rolealias-credentialdurationseconds
     */
    readonly credentialDurationSeconds?: number;
    /**
     * The role alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html#cfn-iot-rolealias-rolealias
     */
    readonly roleAlias?: string;
    /**
     * The role ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html#cfn-iot-rolealias-rolearn
     */
    readonly roleArn: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html#cfn-iot-rolealias-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Use the `AWS::IoT::ScheduledAudit` resource to create a scheduled audit that is run at a specified time interval.
 *
 * For API reference, see [CreateScheduleAudit](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateScheduledAudit.html) and for general information, see [Audit](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit.html) .
 *
 * @cloudformationResource AWS::IoT::ScheduledAudit
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html
 */
export declare class CfnScheduledAudit extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnScheduledAudit from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnScheduledAudit;
    /**
     * The ARN of the scheduled audit.
     *
     * @cloudformationAttribute ScheduledAuditArn
     */
    readonly attrScheduledAuditArn: string;
    /**
     * The day of the month on which the scheduled audit is run (if the `frequency` is "MONTHLY").
     */
    dayOfMonth?: string;
    /**
     * The day of the week on which the scheduled audit is run (if the `frequency` is "WEEKLY" or "BIWEEKLY").
     */
    dayOfWeek?: string;
    /**
     * How often the scheduled audit occurs.
     */
    frequency: string;
    /**
     * The name of the scheduled audit.
     */
    scheduledAuditName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that can be used to manage the scheduled audit.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Which checks are performed during the scheduled audit.
     */
    targetCheckNames: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnScheduledAuditProps);
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
 * Properties for defining a `CfnScheduledAudit`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html
 */
export interface CfnScheduledAuditProps {
    /**
     * The day of the month on which the scheduled audit is run (if the `frequency` is "MONTHLY").
     *
     * If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-dayofmonth
     */
    readonly dayOfMonth?: string;
    /**
     * The day of the week on which the scheduled audit is run (if the `frequency` is "WEEKLY" or "BIWEEKLY").
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-dayofweek
     */
    readonly dayOfWeek?: string;
    /**
     * How often the scheduled audit occurs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-frequency
     */
    readonly frequency: string;
    /**
     * The name of the scheduled audit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-scheduledauditname
     */
    readonly scheduledAuditName?: string;
    /**
     * Metadata that can be used to manage the scheduled audit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Which checks are performed during the scheduled audit.
     *
     * Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
     *
     * The following checks are currently aviable:
     *
     * - `AUTHENTICATED_COGNITO_ROLE_OVERLY_PERMISSIVE_CHECK`
     * - `CA_CERTIFICATE_EXPIRING_CHECK`
     * - `CA_CERTIFICATE_KEY_QUALITY_CHECK`
     * - `CONFLICTING_CLIENT_IDS_CHECK`
     * - `DEVICE_CERTIFICATE_EXPIRING_CHECK`
     * - `DEVICE_CERTIFICATE_KEY_QUALITY_CHECK`
     * - `DEVICE_CERTIFICATE_SHARED_CHECK`
     * - `IOT_POLICY_OVERLY_PERMISSIVE_CHECK`
     * - `IOT_ROLE_ALIAS_ALLOWS_ACCESS_TO_UNUSED_SERVICES_CHECK`
     * - `IOT_ROLE_ALIAS_OVERLY_PERMISSIVE_CHECK`
     * - `LOGGING_DISABLED_CHECK`
     * - `REVOKED_CA_CERTIFICATE_STILL_ACTIVE_CHECK`
     * - `REVOKED_DEVICE_CERTIFICATE_STILL_ACTIVE_CHECK`
     * - `UNAUTHENTICATED_COGNITO_ROLE_OVERLY_PERMISSIVE_CHECK`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#cfn-iot-scheduledaudit-targetchecknames
     */
    readonly targetCheckNames: Array<string>;
}
/**
 * Use the `AWS::IoT::SecurityProfile` resource to create a Device Defender security profile.
 *
 * For API reference, see [CreateSecurityProfile](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateSecurityProfile.html) and for general information, see [Detect](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html) .
 *
 * @cloudformationResource AWS::IoT::SecurityProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html
 */
export declare class CfnSecurityProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityProfile;
    /**
     * The Amazon Resource Name (ARN) of the security profile.
     *
     * @cloudformationAttribute SecurityProfileArn
     */
    readonly attrSecurityProfileArn: string;
    /**
     * A list of metrics whose data is retained (stored).
     */
    additionalMetricsToRetainV2?: Array<cdk.IResolvable | CfnSecurityProfile.MetricToRetainProperty> | cdk.IResolvable;
    /**
     * Specifies the destinations to which alerts are sent.
     */
    alertTargets?: cdk.IResolvable | Record<string, CfnSecurityProfile.AlertTargetProperty | cdk.IResolvable>;
    /**
     * Specifies the behaviors that, when violated by a device (thing), cause an alert.
     */
    behaviors?: Array<CfnSecurityProfile.BehaviorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the MQTT topic and role ARN required for metric export.
     */
    metricsExportConfig?: cdk.IResolvable | CfnSecurityProfile.MetricsExportConfigProperty;
    /**
     * A description of the security profile.
     */
    securityProfileDescription?: string;
    /**
     * The name you gave to the security profile.
     */
    securityProfileName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that can be used to manage the security profile.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of the target (thing group) to which the security profile is attached.
     */
    targetArns?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnSecurityProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSecurityProfile {
    /**
     * The metric you want to retain.
     *
     * Dimensions are optional.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html
     */
    interface MetricToRetainProperty {
        /**
         * The value indicates exporting metrics related to the `MetricToRetain` when it's true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html#cfn-iot-securityprofile-metrictoretain-exportmetric
         */
        readonly exportMetric?: boolean | cdk.IResolvable;
        /**
         * A standard of measurement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html#cfn-iot-securityprofile-metrictoretain-metric
         */
        readonly metric: string;
        /**
         * The dimension of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html#cfn-iot-securityprofile-metrictoretain-metricdimension
         */
        readonly metricDimension?: cdk.IResolvable | CfnSecurityProfile.MetricDimensionProperty;
    }
    /**
     * The dimension of the metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricdimension.html
     */
    interface MetricDimensionProperty {
        /**
         * The name of the dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricdimension.html#cfn-iot-securityprofile-metricdimension-dimensionname
         */
        readonly dimensionName: string;
        /**
         * Operators are constructs that perform logical operations.
         *
         * Valid values are `IN` and `NOT_IN` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricdimension.html#cfn-iot-securityprofile-metricdimension-operator
         */
        readonly operator?: string;
    }
    /**
     * A Device Defender security profile behavior.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html
     */
    interface BehaviorProperty {
        /**
         * The criteria that determine if a device is behaving normally in regard to the `metric` .
         *
         * > In the AWS IoT console, you can choose to be sent an alert through Amazon SNS when AWS IoT Device Defender detects that a device is behaving anomalously.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-criteria
         */
        readonly criteria?: CfnSecurityProfile.BehaviorCriteriaProperty | cdk.IResolvable;
        /**
         * Value indicates exporting metrics related to the behavior when it is true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-exportmetric
         */
        readonly exportMetric?: boolean | cdk.IResolvable;
        /**
         * What is measured by the behavior.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-metric
         */
        readonly metric?: string;
        /**
         * The dimension of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-metricdimension
         */
        readonly metricDimension?: cdk.IResolvable | CfnSecurityProfile.MetricDimensionProperty;
        /**
         * The name you've given to the behavior.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-name
         */
        readonly name: string;
        /**
         * The alert status.
         *
         * If you set the value to `true` , alerts will be suppressed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-suppressalerts
         */
        readonly suppressAlerts?: boolean | cdk.IResolvable;
    }
    /**
     * The criteria by which the behavior is determined to be normal.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html
     */
    interface BehaviorCriteriaProperty {
        /**
         * The operator that relates the thing measured ( `metric` ) to the criteria (containing a `value` or `statisticalThreshold` ).
         *
         * Valid operators include:
         *
         * - `string-list` : `in-set` and `not-in-set`
         * - `number-list` : `in-set` and `not-in-set`
         * - `ip-address-list` : `in-cidr-set` and `not-in-cidr-set`
         * - `number` : `less-than` , `less-than-equals` , `greater-than` , and `greater-than-equals`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-comparisonoperator
         */
        readonly comparisonOperator?: string;
        /**
         * If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs.
         *
         * If not specified, the default is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-consecutivedatapointstoalarm
         */
        readonly consecutiveDatapointsToAlarm?: number;
        /**
         * If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared.
         *
         * If not specified, the default is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-consecutivedatapointstoclear
         */
        readonly consecutiveDatapointsToClear?: number;
        /**
         * Use this to specify the time duration over which the behavior is evaluated, for those criteria that have a time dimension (for example, `NUM_MESSAGES_SENT` ).
         *
         * For a `statisticalThreshhold` metric comparison, measurements from all devices are accumulated over this time duration before being used to calculate percentiles, and later, measurements from an individual device are also accumulated over this time duration before being given a percentile rank. Cannot be used with list-based metric datatypes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-durationseconds
         */
        readonly durationSeconds?: number;
        /**
         * The confidence level of the detection model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-mldetectionconfig
         */
        readonly mlDetectionConfig?: cdk.IResolvable | CfnSecurityProfile.MachineLearningDetectionConfigProperty;
        /**
         * A statistical ranking (percentile)that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-statisticalthreshold
         */
        readonly statisticalThreshold?: cdk.IResolvable | CfnSecurityProfile.StatisticalThresholdProperty;
        /**
         * The value to be compared with the `metric` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-value
         */
        readonly value?: cdk.IResolvable | CfnSecurityProfile.MetricValueProperty;
    }
    /**
     * The `MachineLearningDetectionConfig` property type controls confidence of the machine learning model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-machinelearningdetectionconfig.html
     */
    interface MachineLearningDetectionConfigProperty {
        /**
         * The model confidence level.
         *
         * There are three levels of confidence, `"high"` , `"medium"` , and `"low"` .
         *
         * The higher the confidence level, the lower the sensitivity, and the lower the alarm frequency will be.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-machinelearningdetectionconfig.html#cfn-iot-securityprofile-machinelearningdetectionconfig-confidencelevel
         */
        readonly confidenceLevel?: string;
    }
    /**
     * The value to be compared with the `metric` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html
     */
    interface MetricValueProperty {
        /**
         * If the `comparisonOperator` calls for a set of CIDRs, use this to specify that set to be compared with the `metric` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-cidrs
         */
        readonly cidrs?: Array<string>;
        /**
         * If the `comparisonOperator` calls for a numeric value, use this to specify that numeric value to be compared with the `metric` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-count
         */
        readonly count?: string;
        /**
         * The numeric values of a metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-number
         */
        readonly number?: number;
        /**
         * The numeric value of a metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-numbers
         */
        readonly numbers?: Array<number> | cdk.IResolvable;
        /**
         * If the `comparisonOperator` calls for a set of ports, use this to specify that set to be compared with the `metric` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-ports
         */
        readonly ports?: Array<number> | cdk.IResolvable;
        /**
         * The string values of a metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-strings
         */
        readonly strings?: Array<string>;
    }
    /**
     * A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-statisticalthreshold.html
     */
    interface StatisticalThresholdProperty {
        /**
         * The percentile that resolves to a threshold value by which compliance with a behavior is determined.
         *
         * Metrics are collected over the specified period ( `durationSeconds` ) from all reporting devices in your account and statistical ranks are calculated. Then, the measurements from a device are collected over the same period. If the accumulated measurements from the device fall above or below ( `comparisonOperator` ) the value associated with the percentile specified, then the device is considered to be in compliance with the behavior, otherwise a violation occurs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-statisticalthreshold.html#cfn-iot-securityprofile-statisticalthreshold-statistic
         */
        readonly statistic?: string;
    }
    /**
     * A structure containing the alert target ARN and the role ARN.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-alerttarget.html
     */
    interface AlertTargetProperty {
        /**
         * The Amazon Resource Name (ARN) of the notification target to which alerts are sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-alerttarget.html#cfn-iot-securityprofile-alerttarget-alerttargetarn
         */
        readonly alertTargetArn: string;
        /**
         * The ARN of the role that grants permission to send alerts to the notification target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-alerttarget.html#cfn-iot-securityprofile-alerttarget-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Specifies the MQTT topic and role ARN required for metric export.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricsexportconfig.html
     */
    interface MetricsExportConfigProperty {
        /**
         * The MQTT topic that Device Defender Detect should publish messages to for metrics export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricsexportconfig.html#cfn-iot-securityprofile-metricsexportconfig-mqtttopic
         */
        readonly mqttTopic: string;
        /**
         * This role ARN has permission to publish MQTT messages, after which Device Defender Detect can assume the role and publish messages on your behalf.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricsexportconfig.html#cfn-iot-securityprofile-metricsexportconfig-rolearn
         */
        readonly roleArn: string;
    }
}
/**
 * Properties for defining a `CfnSecurityProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html
 */
export interface CfnSecurityProfileProps {
    /**
     * A list of metrics whose data is retained (stored).
     *
     * By default, data is retained for any metric used in the profile's `behaviors` , but it's also retained for any metric specified here. Can be used with custom metrics; can't be used with dimensions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-additionalmetricstoretainv2
     */
    readonly additionalMetricsToRetainV2?: Array<cdk.IResolvable | CfnSecurityProfile.MetricToRetainProperty> | cdk.IResolvable;
    /**
     * Specifies the destinations to which alerts are sent.
     *
     * (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-alerttargets
     */
    readonly alertTargets?: cdk.IResolvable | Record<string, CfnSecurityProfile.AlertTargetProperty | cdk.IResolvable>;
    /**
     * Specifies the behaviors that, when violated by a device (thing), cause an alert.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviors
     */
    readonly behaviors?: Array<CfnSecurityProfile.BehaviorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the MQTT topic and role ARN required for metric export.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricsexportconfig
     */
    readonly metricsExportConfig?: cdk.IResolvable | CfnSecurityProfile.MetricsExportConfigProperty;
    /**
     * A description of the security profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-securityprofiledescription
     */
    readonly securityProfileDescription?: string;
    /**
     * The name you gave to the security profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-securityprofilename
     */
    readonly securityProfileName?: string;
    /**
     * Metadata that can be used to manage the security profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the target (thing group) to which the security profile is attached.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-targetarns
     */
    readonly targetArns?: Array<string>;
}
/**
 * Use the `AWS::IoT::SoftwarePackage` resource to create a software package.
 *
 * For information about working with software packages, see [AWS IoT Device Management Software Package Catalog](https://docs.aws.amazon.com/iot/latest/developerguide/software-package-catalog.html) and [Creating a software package and package version](https://docs.aws.amazon.com/iot/latest/developerguide/creating-package-and-version.html) in the *AWS IoT Developer Guide* . See also, [CreatePackage](https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePackage.html) in the *API Guide* .
 *
 * @cloudformationResource AWS::IoT::SoftwarePackage
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackage.html
 */
export declare class CfnSoftwarePackage extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSoftwarePackage from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSoftwarePackage;
    /**
     * The Amazon Resource Name (ARN) for the package.
     *
     * @cloudformationAttribute PackageArn
     */
    readonly attrPackageArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    description?: string;
    packageName?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnSoftwarePackageProps);
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
 * Properties for defining a `CfnSoftwarePackage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackage.html
 */
export interface CfnSoftwarePackageProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackage.html#cfn-iot-softwarepackage-description
     */
    readonly description?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackage.html#cfn-iot-softwarepackage-packagename
     */
    readonly packageName?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackage.html#cfn-iot-softwarepackage-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Use the `AWS::IoT::SoftwarePackageVersion` resource to create a software package version.
 *
 * For information about working with software package versions, see [AWS IoT Device Management Software Package Catalog](https://docs.aws.amazon.com/iot/latest/developerguide/software-package-catalog.html) and [Creating a software package and package version](https://docs.aws.amazon.com/iot/latest/developerguide/creating-package-and-version.html) in the *AWS IoT Developer Guide* . See also, [CreatePackageVersion](https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePackageVersion.html) in the *API Guide* .
 *
 * > The associated software package must exist before the package version is created. If you create a software package and package version in the same CloudFormation template, set the software package as a [dependency](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) of the package version. If they are created out of sequence, you will receive an error.
 * >
 * > Package versions and created in a `draft` state, for more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle) . To change the package version state after it’s created, use the [UpdatePackageVersionAPI](https://docs.aws.amazon.com/iot/latest/apireference/API_UpdatePackageVersion.html) command.
 *
 * @cloudformationResource AWS::IoT::SoftwarePackageVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html
 */
export declare class CfnSoftwarePackageVersion extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSoftwarePackageVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSoftwarePackageVersion;
    /**
     * Error reason for a package version failure during creation or update.
     *
     * @cloudformationAttribute ErrorReason
     */
    readonly attrErrorReason: string;
    /**
     * The Amazon Resource Name (ARN) for the package.
     *
     * @cloudformationAttribute PackageVersionArn
     */
    readonly attrPackageVersionArn: string;
    /**
     * The status of the package version. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle) .
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Metadata that can be used to define a package version’s configuration.
     */
    attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A summary of the package version being created.
     */
    description?: string;
    /**
     * The name of the associated software package.
     */
    packageName: string;
    /**
     * Metadata that can be used to manage the package version.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name of the new package version.
     */
    versionName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSoftwarePackageVersionProps);
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
 * Properties for defining a `CfnSoftwarePackageVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html
 */
export interface CfnSoftwarePackageVersionProps {
    /**
     * Metadata that can be used to define a package version’s configuration.
     *
     * For example, the S3 file location, configuration options that are being sent to the device or fleet.
     *
     * The combined size of all the attributes on a package version is limited to 3KB.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html#cfn-iot-softwarepackageversion-attributes
     */
    readonly attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * A summary of the package version being created.
     *
     * This can be used to outline the package's contents or purpose.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html#cfn-iot-softwarepackageversion-description
     */
    readonly description?: string;
    /**
     * The name of the associated software package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html#cfn-iot-softwarepackageversion-packagename
     */
    readonly packageName: string;
    /**
     * Metadata that can be used to manage the package version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html#cfn-iot-softwarepackageversion-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the new package version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-softwarepackageversion.html#cfn-iot-softwarepackageversion-versionname
     */
    readonly versionName?: string;
}
/**
 * Use the `AWS::IoT::Thing` resource to declare an AWS IoT thing.
 *
 * For information about working with things, see [How AWS IoT Works](https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html) and [Device Registry for AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html) in the *AWS IoT Developer Guide* .
 *
 * @cloudformationResource AWS::IoT::Thing
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html
 */
export declare class CfnThing extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnThing from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnThing;
    /**
     * The Amazon Resource Name (ARN) of the AWS IoT thing, such as `arn:aws:iot:us-east-2:123456789012:thing/MyThing` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Id of this thing.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A string that contains up to three key value pairs.
     */
    attributePayload?: CfnThing.AttributePayloadProperty | cdk.IResolvable;
    /**
     * The name of the thing to update.
     */
    thingName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnThingProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnThing {
    /**
     * The AttributePayload property specifies up to three attributes for an AWS IoT as key-value pairs.
     *
     * AttributePayload is a property of the [AWS::IoT::Thing](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thing-attributepayload.html
     */
    interface AttributePayloadProperty {
        /**
         * A JSON string containing up to three key-value pair in JSON format. For example:.
         *
         * `{\"attributes\":{\"string1\":\"string2\"}}`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thing-attributepayload.html#cfn-iot-thing-attributepayload-attributes
         */
        readonly attributes?: cdk.IResolvable | Record<string, string>;
    }
}
/**
 * Properties for defining a `CfnThing`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html
 */
export interface CfnThingProps {
    /**
     * A string that contains up to three key value pairs.
     *
     * Maximum length of 800. Duplicates not allowed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html#cfn-iot-thing-attributepayload
     */
    readonly attributePayload?: CfnThing.AttributePayloadProperty | cdk.IResolvable;
    /**
     * The name of the thing to update.
     *
     * You can't change a thing's name. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html#cfn-iot-thing-thingname
     */
    readonly thingName?: string;
}
/**
 * Creates a new thing group.
 *
 * A dynamic thing group is created if the resource template contains the `QueryString` attribute. A dynamic thing group will not contain the `ParentGroupName` attribute. A static thing group and dynamic thing group can't be converted to each other via the addition or removal of the `QueryString` attribute.
 *
 * > This is a control plane operation. See [Authorization](https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html) for information about authorizing control plane actions.
 *
 * Requires permission to access the [CreateThingGroup](https://docs.aws.amazon.com//service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @cloudformationResource AWS::IoT::ThingGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html
 */
export declare class CfnThingGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnThingGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnThingGroup;
    /**
     * The thing group ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The thing group ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The parent thing group name.
     */
    parentGroupName?: string;
    /**
     * The dynamic thing group search query string.
     */
    queryString?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata which can be used to manage the thing group or dynamic thing group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The thing group name.
     */
    thingGroupName?: string;
    /**
     * Thing group properties.
     */
    thingGroupProperties?: cdk.IResolvable | CfnThingGroup.ThingGroupPropertiesProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnThingGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnThingGroup {
    /**
     * Thing group properties.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thinggroup-thinggroupproperties.html
     */
    interface ThingGroupPropertiesProperty {
        /**
         * The thing group attributes in JSON format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thinggroup-thinggroupproperties.html#cfn-iot-thinggroup-thinggroupproperties-attributepayload
         */
        readonly attributePayload?: CfnThingGroup.AttributePayloadProperty | cdk.IResolvable;
        /**
         * The thing group description.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thinggroup-thinggroupproperties.html#cfn-iot-thinggroup-thinggroupproperties-thinggroupdescription
         */
        readonly thingGroupDescription?: string;
    }
    /**
     * The attribute payload.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thinggroup-attributepayload.html
     */
    interface AttributePayloadProperty {
        /**
         * A JSON string containing up to three key-value pair in JSON format. For example:.
         *
         * `{\"attributes\":{\"string1\":\"string2\"}}`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thinggroup-attributepayload.html#cfn-iot-thinggroup-attributepayload-attributes
         */
        readonly attributes?: cdk.IResolvable | Record<string, string>;
    }
}
/**
 * Properties for defining a `CfnThingGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html
 */
export interface CfnThingGroupProps {
    /**
     * The parent thing group name.
     *
     * A Dynamic Thing Group does not have `parentGroupName` defined.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-parentgroupname
     */
    readonly parentGroupName?: string;
    /**
     * The dynamic thing group search query string.
     *
     * The `queryString` attribute *is* required for `CreateDynamicThingGroup` . The `queryString` attribute *is not* required for `CreateThingGroup` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-querystring
     */
    readonly queryString?: string;
    /**
     * Metadata which can be used to manage the thing group or dynamic thing group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The thing group name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-thinggroupname
     */
    readonly thingGroupName?: string;
    /**
     * Thing group properties.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-thinggroupproperties
     */
    readonly thingGroupProperties?: cdk.IResolvable | CfnThingGroup.ThingGroupPropertiesProperty;
}
/**
 * Use the `AWS::IoT::ThingPrincipalAttachment` resource to attach a principal (an X.509 certificate or another credential) to a thing.
 *
 * For more information about working with AWS IoT things and principals, see [Authorization](https://docs.aws.amazon.com/iot/latest/developerguide/authorization.html) in the *AWS IoT Developer Guide* .
 *
 * @cloudformationResource AWS::IoT::ThingPrincipalAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html
 */
export declare class CfnThingPrincipalAttachment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnThingPrincipalAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnThingPrincipalAttachment;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The principal, which can be a certificate ARN (as returned from the `CreateCertificate` operation) or an Amazon Cognito ID.
     */
    principal: string;
    /**
     * The name of the AWS IoT thing.
     */
    thingName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnThingPrincipalAttachmentProps);
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
 * Properties for defining a `CfnThingPrincipalAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html
 */
export interface CfnThingPrincipalAttachmentProps {
    /**
     * The principal, which can be a certificate ARN (as returned from the `CreateCertificate` operation) or an Amazon Cognito ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html#cfn-iot-thingprincipalattachment-principal
     */
    readonly principal: string;
    /**
     * The name of the AWS IoT thing.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html#cfn-iot-thingprincipalattachment-thingname
     */
    readonly thingName: string;
}
/**
 * Creates a new thing type.
 *
 * @cloudformationResource AWS::IoT::ThingType
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html
 */
export declare class CfnThingType extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnThingType from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnThingType;
    /**
     * The thing type arn.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The thing type id.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Deprecates a thing type.
     */
    deprecateThingType?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata which can be used to manage the thing type.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name of the thing type.
     */
    thingTypeName?: string;
    /**
     * The thing type properties for the thing type to create.
     */
    thingTypeProperties?: cdk.IResolvable | CfnThingType.ThingTypePropertiesProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnThingTypeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnThingType {
    /**
     * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-thingtypeproperties.html
     */
    interface ThingTypePropertiesProperty {
        /**
         * The configuration to add user-defined properties to enrich MQTT 5 messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-thingtypeproperties.html#cfn-iot-thingtype-thingtypeproperties-mqtt5configuration
         */
        readonly mqtt5Configuration?: cdk.IResolvable | CfnThingType.Mqtt5ConfigurationProperty;
        /**
         * A list of searchable thing attribute names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-thingtypeproperties.html#cfn-iot-thingtype-thingtypeproperties-searchableattributes
         */
        readonly searchableAttributes?: Array<string>;
        /**
         * The description of the thing type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-thingtypeproperties.html#cfn-iot-thingtype-thingtypeproperties-thingtypedescription
         */
        readonly thingTypeDescription?: string;
    }
    /**
     * The configuration to add user-defined properties to enrich MQTT 5 messages.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-mqtt5configuration.html
     */
    interface Mqtt5ConfigurationProperty {
        /**
         * An object that represents the connection attribute, the thing attribute, and the MQTT 5 user property key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-mqtt5configuration.html#cfn-iot-thingtype-mqtt5configuration-propagatingattributes
         */
        readonly propagatingAttributes?: Array<cdk.IResolvable | CfnThingType.PropagatingAttributeProperty> | cdk.IResolvable;
    }
    /**
     * An object that represents the connection attribute, the thing attribute, and the MQTT 5 user property key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-propagatingattribute.html
     */
    interface PropagatingAttributeProperty {
        /**
         * The attribute associated with the connection details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-propagatingattribute.html#cfn-iot-thingtype-propagatingattribute-connectionattribute
         */
        readonly connectionAttribute?: string;
        /**
         * The thing attribute that is propagating for MQTT 5 message enrichment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-propagatingattribute.html#cfn-iot-thingtype-propagatingattribute-thingattribute
         */
        readonly thingAttribute?: string;
        /**
         * The key of the MQTT 5 user property, which is a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thingtype-propagatingattribute.html#cfn-iot-thingtype-propagatingattribute-userpropertykey
         */
        readonly userPropertyKey: string;
    }
}
/**
 * Properties for defining a `CfnThingType`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html
 */
export interface CfnThingTypeProps {
    /**
     * Deprecates a thing type.
     *
     * You can not associate new things with deprecated thing type. You cannot update `ThingTypeProperties` if the thing type is deprecated.
     *
     * Requires permission to access the [DeprecateThingType](https://docs.aws.amazon.com//service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-deprecatethingtype
     */
    readonly deprecateThingType?: boolean | cdk.IResolvable;
    /**
     * Metadata which can be used to manage the thing type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the thing type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-thingtypename
     */
    readonly thingTypeName?: string;
    /**
     * The thing type properties for the thing type to create.
     *
     * It contains information about the new thing type including a description, a list of searchable thing attribute names, and a list of propagating attributes. After a thing type is created, you can only update `Mqtt5Configuration` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-thingtypeproperties
     */
    readonly thingTypeProperties?: cdk.IResolvable | CfnThingType.ThingTypePropertiesProperty;
}
/**
 * Use the `AWS::IoT::TopicRule` resource to declare an AWS IoT rule.
 *
 * For information about working with AWS IoT rules, see [Rules for AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html) in the *AWS IoT Developer Guide* .
 *
 * @cloudformationResource AWS::IoT::TopicRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html
 */
export declare class CfnTopicRule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTopicRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTopicRule;
    /**
     * The Amazon Resource Name (ARN) of the AWS IoT rule, such as `arn:aws:iot:us-east-2:123456789012:rule/MyIoTRule` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the rule.
     */
    ruleName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata which can be used to manage the topic rule.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The rule payload.
     */
    topicRulePayload: cdk.IResolvable | CfnTopicRule.TopicRulePayloadProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTopicRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTopicRule {
    /**
     * Describes a rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html
     */
    interface TopicRulePayloadProperty {
        /**
         * The actions associated with the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html#cfn-iot-topicrule-topicrulepayload-actions
         */
        readonly actions: Array<CfnTopicRule.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The version of the SQL rules engine to use when evaluating the rule.
         *
         * The default value is 2015-10-08.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html#cfn-iot-topicrule-topicrulepayload-awsiotsqlversion
         */
        readonly awsIotSqlVersion?: string;
        /**
         * The description of the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html#cfn-iot-topicrule-topicrulepayload-description
         */
        readonly description?: string;
        /**
         * The action to take when an error occurs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html#cfn-iot-topicrule-topicrulepayload-erroraction
         */
        readonly errorAction?: CfnTopicRule.ActionProperty | cdk.IResolvable;
        /**
         * Specifies whether the rule is disabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html#cfn-iot-topicrule-topicrulepayload-ruledisabled
         */
        readonly ruleDisabled?: boolean | cdk.IResolvable;
        /**
         * The SQL statement used to query the topic.
         *
         * For more information, see [AWS IoT SQL Reference](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sql-reference.html) in the *AWS IoT Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html#cfn-iot-topicrule-topicrulepayload-sql
         */
        readonly sql: string;
    }
    /**
     * Describes the actions associated with a rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html
     */
    interface ActionProperty {
        /**
         * Change the state of a CloudWatch alarm.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-cloudwatchalarm
         */
        readonly cloudwatchAlarm?: CfnTopicRule.CloudwatchAlarmActionProperty | cdk.IResolvable;
        /**
         * Sends data to CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-cloudwatchlogs
         */
        readonly cloudwatchLogs?: CfnTopicRule.CloudwatchLogsActionProperty | cdk.IResolvable;
        /**
         * Capture a CloudWatch metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-cloudwatchmetric
         */
        readonly cloudwatchMetric?: CfnTopicRule.CloudwatchMetricActionProperty | cdk.IResolvable;
        /**
         * Write to a DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-dynamodb
         */
        readonly dynamoDb?: CfnTopicRule.DynamoDBActionProperty | cdk.IResolvable;
        /**
         * Write to a DynamoDB table.
         *
         * This is a new version of the DynamoDB action. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-dynamodbv2
         */
        readonly dynamoDBv2?: CfnTopicRule.DynamoDBv2ActionProperty | cdk.IResolvable;
        /**
         * Write data to an Amazon OpenSearch Service domain.
         *
         * > The `Elasticsearch` action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the `OpenSearch` rule action instead. For more information, see [OpenSearchAction](https://docs.aws.amazon.com//iot/latest/apireference/API_OpenSearchAction.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-elasticsearch
         */
        readonly elasticsearch?: CfnTopicRule.ElasticsearchActionProperty | cdk.IResolvable;
        /**
         * Write to an Amazon Kinesis Firehose stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-firehose
         */
        readonly firehose?: CfnTopicRule.FirehoseActionProperty | cdk.IResolvable;
        /**
         * Send data to an HTTPS endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-http
         */
        readonly http?: CfnTopicRule.HttpActionProperty | cdk.IResolvable;
        /**
         * Sends message data to an AWS IoT Analytics channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-iotanalytics
         */
        readonly iotAnalytics?: CfnTopicRule.IotAnalyticsActionProperty | cdk.IResolvable;
        /**
         * Sends an input to an AWS IoT Events detector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-iotevents
         */
        readonly iotEvents?: CfnTopicRule.IotEventsActionProperty | cdk.IResolvable;
        /**
         * Sends data from the MQTT message that triggered the rule to AWS IoT SiteWise asset properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-iotsitewise
         */
        readonly iotSiteWise?: CfnTopicRule.IotSiteWiseActionProperty | cdk.IResolvable;
        /**
         * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-kafka
         */
        readonly kafka?: cdk.IResolvable | CfnTopicRule.KafkaActionProperty;
        /**
         * Write data to an Amazon Kinesis stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-kinesis
         */
        readonly kinesis?: cdk.IResolvable | CfnTopicRule.KinesisActionProperty;
        /**
         * Invoke a Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-lambda
         */
        readonly lambda?: cdk.IResolvable | CfnTopicRule.LambdaActionProperty;
        /**
         * Sends device location data to [Amazon Location Service](https://docs.aws.amazon.com//location/latest/developerguide/welcome.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-location
         */
        readonly location?: cdk.IResolvable | CfnTopicRule.LocationActionProperty;
        /**
         * Write data to an Amazon OpenSearch Service domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-opensearch
         */
        readonly openSearch?: cdk.IResolvable | CfnTopicRule.OpenSearchActionProperty;
        /**
         * Publish to another MQTT topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-republish
         */
        readonly republish?: cdk.IResolvable | CfnTopicRule.RepublishActionProperty;
        /**
         * Write to an Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-s3
         */
        readonly s3?: cdk.IResolvable | CfnTopicRule.S3ActionProperty;
        /**
         * Publish to an Amazon SNS topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-sns
         */
        readonly sns?: cdk.IResolvable | CfnTopicRule.SnsActionProperty;
        /**
         * Publish to an Amazon SQS queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-sqs
         */
        readonly sqs?: cdk.IResolvable | CfnTopicRule.SqsActionProperty;
        /**
         * Starts execution of a Step Functions state machine.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-stepfunctions
         */
        readonly stepFunctions?: cdk.IResolvable | CfnTopicRule.StepFunctionsActionProperty;
        /**
         * Writes attributes from an MQTT message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html#cfn-iot-topicrule-action-timestream
         */
        readonly timestream?: cdk.IResolvable | CfnTopicRule.TimestreamActionProperty;
    }
    /**
     * Describes an action to write data to an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-s3action.html
     */
    interface S3ActionProperty {
        /**
         * The Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-s3action.html#cfn-iot-topicrule-s3action-bucketname
         */
        readonly bucketName: string;
        /**
         * The Amazon S3 canned ACL that controls access to the object identified by the object key.
         *
         * For more information, see [S3 canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-s3action.html#cfn-iot-topicrule-s3action-cannedacl
         */
        readonly cannedAcl?: string;
        /**
         * The object key.
         *
         * For more information, see [Actions, resources, and condition keys for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/list_amazons3.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-s3action.html#cfn-iot-topicrule-s3action-key
         */
        readonly key: string;
        /**
         * The ARN of the IAM role that grants access.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-s3action.html#cfn-iot-topicrule-s3action-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Describes an action that updates a CloudWatch alarm.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchalarmaction.html
     */
    interface CloudwatchAlarmActionProperty {
        /**
         * The CloudWatch alarm name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchalarmaction.html#cfn-iot-topicrule-cloudwatchalarmaction-alarmname
         */
        readonly alarmName: string;
        /**
         * The IAM role that allows access to the CloudWatch alarm.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchalarmaction.html#cfn-iot-topicrule-cloudwatchalarmaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The reason for the alarm change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchalarmaction.html#cfn-iot-topicrule-cloudwatchalarmaction-statereason
         */
        readonly stateReason: string;
        /**
         * The value of the alarm state.
         *
         * Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchalarmaction.html#cfn-iot-topicrule-cloudwatchalarmaction-statevalue
         */
        readonly stateValue: string;
    }
    /**
     * Sends an input to an AWS IoT Events detector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-ioteventsaction.html
     */
    interface IotEventsActionProperty {
        /**
         * Whether to process the event actions as a batch. The default value is `false` .
         *
         * When `batchMode` is `true` , you can't specify a `messageId` .
         *
         * When `batchMode` is `true` and the rule SQL statement evaluates to an Array, each Array element is treated as a separate message when Events by calling [`BatchPutMessage`](https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html) . The resulting array can't have more than 10 messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-ioteventsaction.html#cfn-iot-topicrule-ioteventsaction-batchmode
         */
        readonly batchMode?: boolean | cdk.IResolvable;
        /**
         * The name of the AWS IoT Events input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-ioteventsaction.html#cfn-iot-topicrule-ioteventsaction-inputname
         */
        readonly inputName: string;
        /**
         * The ID of the message. The default `messageId` is a new UUID value.
         *
         * When `batchMode` is `true` , you can't specify a `messageId` --a new UUID value will be assigned.
         *
         * Assign a value to this property to ensure that only one input (message) with a given `messageId` will be processed by an AWS IoT Events detector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-ioteventsaction.html#cfn-iot-topicrule-ioteventsaction-messageid
         */
        readonly messageId?: string;
        /**
         * The ARN of the role that grants AWS IoT permission to send an input to an AWS IoT Events detector.
         *
         * ("Action":"iotevents:BatchPutMessage").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-ioteventsaction.html#cfn-iot-topicrule-ioteventsaction-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Describes an action that writes data to an Amazon Kinesis Firehose stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-firehoseaction.html
     */
    interface FirehoseActionProperty {
        /**
         * Whether to deliver the Kinesis Data Firehose stream as a batch by using [`PutRecordBatch`](https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html) . The default value is `false` .
         *
         * When `batchMode` is `true` and the rule's SQL statement evaluates to an Array, each Array element forms one record in the [`PutRecordBatch`](https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html) request. The resulting array can't have more than 500 records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-firehoseaction.html#cfn-iot-topicrule-firehoseaction-batchmode
         */
        readonly batchMode?: boolean | cdk.IResolvable;
        /**
         * The delivery stream name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-firehoseaction.html#cfn-iot-topicrule-firehoseaction-deliverystreamname
         */
        readonly deliveryStreamName: string;
        /**
         * The IAM role that grants access to the Amazon Kinesis Firehose stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-firehoseaction.html#cfn-iot-topicrule-firehoseaction-rolearn
         */
        readonly roleArn: string;
        /**
         * A character separator that will be used to separate records written to the Firehose stream.
         *
         * Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-firehoseaction.html#cfn-iot-topicrule-firehoseaction-separator
         */
        readonly separator?: string;
    }
    /**
     * Describes an action to republish to another topic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishaction.html
     */
    interface RepublishActionProperty {
        /**
         * MQTT Version 5.0 headers information. For more information, see [MQTT](https://docs.aws.amazon.com//iot/latest/developerguide/mqtt.html) in the IoT Core Developer Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishaction.html#cfn-iot-topicrule-republishaction-headers
         */
        readonly headers?: cdk.IResolvable | CfnTopicRule.RepublishActionHeadersProperty;
        /**
         * The Quality of Service (QoS) level to use when republishing messages.
         *
         * The default value is 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishaction.html#cfn-iot-topicrule-republishaction-qos
         */
        readonly qos?: number;
        /**
         * The ARN of the IAM role that grants access.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishaction.html#cfn-iot-topicrule-republishaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The name of the MQTT topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishaction.html#cfn-iot-topicrule-republishaction-topic
         */
        readonly topic: string;
    }
    /**
     * Specifies MQTT Version 5.0 headers information. For more information, see [MQTT](https://docs.aws.amazon.com//iot/latest/developerguide/mqtt.html) in the IoT Core Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html
     */
    interface RepublishActionHeadersProperty {
        /**
         * A UTF-8 encoded string that describes the content of the publishing message.
         *
         * For more information, see [Content Type](https://docs.aws.amazon.com/https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901118) in the MQTT Version 5.0 specification.
         *
         * Supports [substitution templates](https://docs.aws.amazon.com//iot/latest/developerguide/iot-substitution-templates.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html#cfn-iot-topicrule-republishactionheaders-contenttype
         */
        readonly contentType?: string;
        /**
         * The base64-encoded binary data used by the sender of the request message to identify which request the response message is for.
         *
         * For more information, see [Correlation Data](https://docs.aws.amazon.com/https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901115) in the MQTT Version 5.0 specification.
         *
         * Supports [substitution templates](https://docs.aws.amazon.com//iot/latest/developerguide/iot-substitution-templates.html) .
         *
         * > This binary data must be base64-encoded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html#cfn-iot-topicrule-republishactionheaders-correlationdata
         */
        readonly correlationData?: string;
        /**
         * A user-defined integer value that represents the message expiry interval at the broker.
         *
         * If the messages haven't been sent to the subscribers within that interval, the message expires and is removed. The value of `messageExpiry` represents the number of seconds before it expires. For more information about the limits of `messageExpiry` , see [Message broker and protocol limits and quotas](https://docs.aws.amazon.com//general/latest/gr/iot-core.html#limits_iot) in the IoT Core Reference Guide.
         *
         * Supports [substitution templates](https://docs.aws.amazon.com//iot/latest/developerguide/iot-substitution-templates.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html#cfn-iot-topicrule-republishactionheaders-messageexpiry
         */
        readonly messageExpiry?: string;
        /**
         * An `Enum` string value that indicates whether the payload is formatted as UTF-8.
         *
         * Valid values are `UNSPECIFIED_BYTES` and `UTF8_DATA` .
         *
         * For more information, see [Payload Format Indicator](https://docs.aws.amazon.com/https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901111) from the MQTT Version 5.0 specification.
         *
         * Supports [substitution templates](https://docs.aws.amazon.com//iot/latest/developerguide/iot-substitution-templates.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html#cfn-iot-topicrule-republishactionheaders-payloadformatindicator
         */
        readonly payloadFormatIndicator?: string;
        /**
         * A UTF-8 encoded string that's used as the topic name for a response message.
         *
         * The response topic is used to describe the topic to which the receiver should publish as part of the request-response flow. The topic must not contain wildcard characters.
         *
         * For more information, see [Response Topic](https://docs.aws.amazon.com/https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901114) in the MQTT Version 5.0 specification.
         *
         * Supports [substitution templates](https://docs.aws.amazon.com//iot/latest/developerguide/iot-substitution-templates.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html#cfn-iot-topicrule-republishactionheaders-responsetopic
         */
        readonly responseTopic?: string;
        /**
         * An array of key-value pairs that you define in the MQTT5 header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html#cfn-iot-topicrule-republishactionheaders-userproperties
         */
        readonly userProperties?: Array<cdk.IResolvable | CfnTopicRule.UserPropertyProperty> | cdk.IResolvable;
    }
    /**
     * A key-value pair that you define in the header.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-userproperty.html
     */
    interface UserPropertyProperty {
        /**
         * A key to be specified in `UserProperty` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-userproperty.html#cfn-iot-topicrule-userproperty-key
         */
        readonly key: string;
        /**
         * A value to be specified in `UserProperty` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-userproperty.html#cfn-iot-topicrule-userproperty-value
         */
        readonly value: string;
    }
    /**
     * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html
     */
    interface KafkaActionProperty {
        /**
         * Properties of the Apache Kafka producer client.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html#cfn-iot-topicrule-kafkaaction-clientproperties
         */
        readonly clientProperties: cdk.IResolvable | Record<string, string>;
        /**
         * The ARN of Kafka action's VPC `TopicRuleDestination` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html#cfn-iot-topicrule-kafkaaction-destinationarn
         */
        readonly destinationArn: string;
        /**
         * The list of Kafka headers that you specify.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html#cfn-iot-topicrule-kafkaaction-headers
         */
        readonly headers?: Array<cdk.IResolvable | CfnTopicRule.KafkaActionHeaderProperty> | cdk.IResolvable;
        /**
         * The Kafka message key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html#cfn-iot-topicrule-kafkaaction-key
         */
        readonly key?: string;
        /**
         * The Kafka message partition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html#cfn-iot-topicrule-kafkaaction-partition
         */
        readonly partition?: string;
        /**
         * The Kafka topic for messages to be sent to the Kafka broker.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html#cfn-iot-topicrule-kafkaaction-topic
         */
        readonly topic: string;
    }
    /**
     * Specifies a Kafka header using key-value pairs when you create a Rule’s Kafka Action.
     *
     * You can use these headers to route data from IoT clients to downstream Kafka clusters without modifying your message payload.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaactionheader.html
     */
    interface KafkaActionHeaderProperty {
        /**
         * The key of the Kafka header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaactionheader.html#cfn-iot-topicrule-kafkaactionheader-key
         */
        readonly key: string;
        /**
         * The value of the Kafka header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaactionheader.html#cfn-iot-topicrule-kafkaactionheader-value
         */
        readonly value: string;
    }
    /**
     * Starts execution of a Step Functions state machine.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-stepfunctionsaction.html
     */
    interface StepFunctionsActionProperty {
        /**
         * (Optional) A name will be given to the state machine execution consisting of this prefix followed by a UUID.
         *
         * Step Functions automatically creates a unique name for each state machine execution if one is not provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-stepfunctionsaction.html#cfn-iot-topicrule-stepfunctionsaction-executionnameprefix
         */
        readonly executionNamePrefix?: string;
        /**
         * The ARN of the role that grants IoT permission to start execution of a state machine ("Action":"states:StartExecution").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-stepfunctionsaction.html#cfn-iot-topicrule-stepfunctionsaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The name of the Step Functions state machine whose execution will be started.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-stepfunctionsaction.html#cfn-iot-topicrule-stepfunctionsaction-statemachinename
         */
        readonly stateMachineName: string;
    }
    /**
     * Describes an action to write to a DynamoDB table.
     *
     * The `tableName` , `hashKeyField` , and `rangeKeyField` values must match the values used when you created the table.
     *
     * The `hashKeyValue` and `rangeKeyvalue` fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${ *sql-expression* }.
     *
     * You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:
     *
     * `"hashKeyValue": "${topic(3)}"`
     *
     * The following field uses the timestamp:
     *
     * `"rangeKeyValue": "${timestamp()}"`
     *
     * For more information, see [DynamoDBv2 Action](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rule-actions.html) in the *AWS IoT Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html
     */
    interface DynamoDBActionProperty {
        /**
         * The hash key name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html#cfn-iot-topicrule-dynamodbaction-hashkeyfield
         */
        readonly hashKeyField: string;
        /**
         * The hash key type.
         *
         * Valid values are "STRING" or "NUMBER"
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html#cfn-iot-topicrule-dynamodbaction-hashkeytype
         */
        readonly hashKeyType?: string;
        /**
         * The hash key value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html#cfn-iot-topicrule-dynamodbaction-hashkeyvalue
         */
        readonly hashKeyValue: string;
        /**
         * The action payload.
         *
         * This name can be customized.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html#cfn-iot-topicrule-dynamodbaction-payloadfield
         */
        readonly payloadField?: string;
        /**
         * The range key name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html#cfn-iot-topicrule-dynamodbaction-rangekeyfield
         */
        readonly rangeKeyField?: string;
        /**
         * The range key type.
         *
         * Valid values are "STRING" or "NUMBER"
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html#cfn-iot-topicrule-dynamodbaction-rangekeytype
         */
        readonly rangeKeyType?: string;
        /**
         * The range key value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html#cfn-iot-topicrule-dynamodbaction-rangekeyvalue
         */
        readonly rangeKeyValue?: string;
        /**
         * The ARN of the IAM role that grants access to the DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html#cfn-iot-topicrule-dynamodbaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The name of the DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html#cfn-iot-topicrule-dynamodbaction-tablename
         */
        readonly tableName: string;
    }
    /**
     * Send data to an HTTPS endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpaction.html
     */
    interface HttpActionProperty {
        /**
         * The authentication method to use when sending data to an HTTPS endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpaction.html#cfn-iot-topicrule-httpaction-auth
         */
        readonly auth?: CfnTopicRule.HttpAuthorizationProperty | cdk.IResolvable;
        /**
         * The URL to which AWS IoT sends a confirmation message.
         *
         * The value of the confirmation URL must be a prefix of the endpoint URL. If you do not specify a confirmation URL AWS IoT uses the endpoint URL as the confirmation URL. If you use substitution templates in the confirmationUrl, you must create and enable topic rule destinations that match each possible value of the substitution template before traffic is allowed to your endpoint URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpaction.html#cfn-iot-topicrule-httpaction-confirmationurl
         */
        readonly confirmationUrl?: string;
        /**
         * The HTTP headers to send with the message data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpaction.html#cfn-iot-topicrule-httpaction-headers
         */
        readonly headers?: Array<CfnTopicRule.HttpActionHeaderProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The endpoint URL.
         *
         * If substitution templates are used in the URL, you must also specify a `confirmationUrl` . If this is a new destination, a new `TopicRuleDestination` is created if possible.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpaction.html#cfn-iot-topicrule-httpaction-url
         */
        readonly url: string;
    }
    /**
     * The HTTP action header.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpactionheader.html
     */
    interface HttpActionHeaderProperty {
        /**
         * The HTTP header key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpactionheader.html#cfn-iot-topicrule-httpactionheader-key
         */
        readonly key: string;
        /**
         * The HTTP header value.
         *
         * Substitution templates are supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpactionheader.html#cfn-iot-topicrule-httpactionheader-value
         */
        readonly value: string;
    }
    /**
     * The authorization method used to send messages.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpauthorization.html
     */
    interface HttpAuthorizationProperty {
        /**
         * Use Sig V4 authorization.
         *
         * For more information, see [Signature Version 4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpauthorization.html#cfn-iot-topicrule-httpauthorization-sigv4
         */
        readonly sigv4?: cdk.IResolvable | CfnTopicRule.SigV4AuthorizationProperty;
    }
    /**
     * For more information, see [Signature Version 4 signing process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sigv4authorization.html
     */
    interface SigV4AuthorizationProperty {
        /**
         * The ARN of the signing role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sigv4authorization.html#cfn-iot-topicrule-sigv4authorization-rolearn
         */
        readonly roleArn: string;
        /**
         * The service name to use while signing with Sig V4.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sigv4authorization.html#cfn-iot-topicrule-sigv4authorization-servicename
         */
        readonly serviceName: string;
        /**
         * The signing region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sigv4authorization.html#cfn-iot-topicrule-sigv4authorization-signingregion
         */
        readonly signingRegion: string;
    }
    /**
     * Describes an action that writes data to an Amazon OpenSearch Service domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-opensearchaction.html
     */
    interface OpenSearchActionProperty {
        /**
         * The endpoint of your OpenSearch domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-opensearchaction.html#cfn-iot-topicrule-opensearchaction-endpoint
         */
        readonly endpoint: string;
        /**
         * The unique identifier for the document you are storing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-opensearchaction.html#cfn-iot-topicrule-opensearchaction-id
         */
        readonly id: string;
        /**
         * The OpenSearch index where you want to store your data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-opensearchaction.html#cfn-iot-topicrule-opensearchaction-index
         */
        readonly index: string;
        /**
         * The IAM role ARN that has access to OpenSearch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-opensearchaction.html#cfn-iot-topicrule-opensearchaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The type of document you are storing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-opensearchaction.html#cfn-iot-topicrule-opensearchaction-type
         */
        readonly type: string;
    }
    /**
     * Describes an action to write to a DynamoDB table.
     *
     * This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbv2action.html
     */
    interface DynamoDBv2ActionProperty {
        /**
         * Specifies the DynamoDB table to which the message data will be written. For example:.
         *
         * `{ "dynamoDBv2": { "roleArn": "aws:iam:12341251:my-role" "putItem": { "tableName": "my-table" } } }`
         *
         * Each attribute in the message payload will be written to a separate column in the DynamoDB database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbv2action.html#cfn-iot-topicrule-dynamodbv2action-putitem
         */
        readonly putItem?: cdk.IResolvable | CfnTopicRule.PutItemInputProperty;
        /**
         * The ARN of the IAM role that grants access to the DynamoDB table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbv2action.html#cfn-iot-topicrule-dynamodbv2action-rolearn
         */
        readonly roleArn?: string;
    }
    /**
     * The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putiteminput.html
     */
    interface PutItemInputProperty {
        /**
         * The table where the message data will be written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putiteminput.html#cfn-iot-topicrule-putiteminput-tablename
         */
        readonly tableName: string;
    }
    /**
     * Describes an action that captures a CloudWatch metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html
     */
    interface CloudwatchMetricActionProperty {
        /**
         * The CloudWatch metric name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html#cfn-iot-topicrule-cloudwatchmetricaction-metricname
         */
        readonly metricName: string;
        /**
         * The CloudWatch metric namespace name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html#cfn-iot-topicrule-cloudwatchmetricaction-metricnamespace
         */
        readonly metricNamespace: string;
        /**
         * An optional [Unix timestamp](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html#cfn-iot-topicrule-cloudwatchmetricaction-metrictimestamp
         */
        readonly metricTimestamp?: string;
        /**
         * The [metric unit](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit) supported by CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html#cfn-iot-topicrule-cloudwatchmetricaction-metricunit
         */
        readonly metricUnit: string;
        /**
         * The CloudWatch metric value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html#cfn-iot-topicrule-cloudwatchmetricaction-metricvalue
         */
        readonly metricValue: string;
        /**
         * The IAM role that allows access to the CloudWatch metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html#cfn-iot-topicrule-cloudwatchmetricaction-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotsitewiseaction.html
     */
    interface IotSiteWiseActionProperty {
        /**
         * A list of asset property value entries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotsitewiseaction.html#cfn-iot-topicrule-iotsitewiseaction-putassetpropertyvalueentries
         */
        readonly putAssetPropertyValueEntries: Array<cdk.IResolvable | CfnTopicRule.PutAssetPropertyValueEntryProperty> | cdk.IResolvable;
        /**
         * The ARN of the role that grants AWS IoT permission to send an asset property value to AWS IoT SiteWise.
         *
         * ( `"Action": "iotsitewise:BatchPutAssetPropertyValue"` ). The trust policy can restrict access to specific asset hierarchy paths.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotsitewiseaction.html#cfn-iot-topicrule-iotsitewiseaction-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * An asset property value entry containing the following information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putassetpropertyvalueentry.html
     */
    interface PutAssetPropertyValueEntryProperty {
        /**
         * The ID of the AWS IoT SiteWise asset.
         *
         * You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId` . Accepts substitution templates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putassetpropertyvalueentry.html#cfn-iot-topicrule-putassetpropertyvalueentry-assetid
         */
        readonly assetId?: string;
        /**
         * Optional.
         *
         * A unique identifier for this entry that you can define to better track which message caused an error in case of failure. Accepts substitution templates. Defaults to a new UUID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putassetpropertyvalueentry.html#cfn-iot-topicrule-putassetpropertyvalueentry-entryid
         */
        readonly entryId?: string;
        /**
         * The name of the property alias associated with your asset property.
         *
         * You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId` . Accepts substitution templates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putassetpropertyvalueentry.html#cfn-iot-topicrule-putassetpropertyvalueentry-propertyalias
         */
        readonly propertyAlias?: string;
        /**
         * The ID of the asset's property.
         *
         * You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId` . Accepts substitution templates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putassetpropertyvalueentry.html#cfn-iot-topicrule-putassetpropertyvalueentry-propertyid
         */
        readonly propertyId?: string;
        /**
         * A list of property values to insert that each contain timestamp, quality, and value (TQV) information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putassetpropertyvalueentry.html#cfn-iot-topicrule-putassetpropertyvalueentry-propertyvalues
         */
        readonly propertyValues: Array<CfnTopicRule.AssetPropertyValueProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * An asset property value entry containing the following information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvalue.html
     */
    interface AssetPropertyValueProperty {
        /**
         * Optional.
         *
         * A string that describes the quality of the value. Accepts substitution templates. Must be `GOOD` , `BAD` , or `UNCERTAIN` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvalue.html#cfn-iot-topicrule-assetpropertyvalue-quality
         */
        readonly quality?: string;
        /**
         * The asset property value timestamp.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvalue.html#cfn-iot-topicrule-assetpropertyvalue-timestamp
         */
        readonly timestamp: CfnTopicRule.AssetPropertyTimestampProperty | cdk.IResolvable;
        /**
         * The value of the asset property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvalue.html#cfn-iot-topicrule-assetpropertyvalue-value
         */
        readonly value: CfnTopicRule.AssetPropertyVariantProperty | cdk.IResolvable;
    }
    /**
     * Contains an asset property value (of a single type).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvariant.html
     */
    interface AssetPropertyVariantProperty {
        /**
         * Optional.
         *
         * A string that contains the boolean value ( `true` or `false` ) of the value entry. Accepts substitution templates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvariant.html#cfn-iot-topicrule-assetpropertyvariant-booleanvalue
         */
        readonly booleanValue?: string;
        /**
         * Optional.
         *
         * A string that contains the double value of the value entry. Accepts substitution templates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvariant.html#cfn-iot-topicrule-assetpropertyvariant-doublevalue
         */
        readonly doubleValue?: string;
        /**
         * Optional.
         *
         * A string that contains the integer value of the value entry. Accepts substitution templates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvariant.html#cfn-iot-topicrule-assetpropertyvariant-integervalue
         */
        readonly integerValue?: string;
        /**
         * Optional.
         *
         * The string value of the value entry. Accepts substitution templates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvariant.html#cfn-iot-topicrule-assetpropertyvariant-stringvalue
         */
        readonly stringValue?: string;
    }
    /**
     * An asset property timestamp entry containing the following information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertytimestamp.html
     */
    interface AssetPropertyTimestampProperty {
        /**
         * Optional.
         *
         * A string that contains the nanosecond time offset. Accepts substitution templates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertytimestamp.html#cfn-iot-topicrule-assetpropertytimestamp-offsetinnanos
         */
        readonly offsetInNanos?: string;
        /**
         * A string that contains the time in seconds since epoch.
         *
         * Accepts substitution templates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertytimestamp.html#cfn-iot-topicrule-assetpropertytimestamp-timeinseconds
         */
        readonly timeInSeconds: string;
    }
    /**
     * Describes an action that writes data to an Amazon OpenSearch Service domain.
     *
     * > The `Elasticsearch` action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the `OpenSearch` rule action instead. For more information, see [OpenSearchAction](https://docs.aws.amazon.com//iot/latest/apireference/API_OpenSearchAction.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-elasticsearchaction.html
     */
    interface ElasticsearchActionProperty {
        /**
         * The endpoint of your OpenSearch domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-elasticsearchaction.html#cfn-iot-topicrule-elasticsearchaction-endpoint
         */
        readonly endpoint: string;
        /**
         * The unique identifier for the document you are storing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-elasticsearchaction.html#cfn-iot-topicrule-elasticsearchaction-id
         */
        readonly id: string;
        /**
         * The index where you want to store your data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-elasticsearchaction.html#cfn-iot-topicrule-elasticsearchaction-index
         */
        readonly index: string;
        /**
         * The IAM role ARN that has access to OpenSearch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-elasticsearchaction.html#cfn-iot-topicrule-elasticsearchaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The type of document you are storing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-elasticsearchaction.html#cfn-iot-topicrule-elasticsearchaction-type
         */
        readonly type: string;
    }
    /**
     * Describes an action to publish data to an Amazon SQS queue.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sqsaction.html
     */
    interface SqsActionProperty {
        /**
         * The URL of the Amazon SQS queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sqsaction.html#cfn-iot-topicrule-sqsaction-queueurl
         */
        readonly queueUrl: string;
        /**
         * The ARN of the IAM role that grants access.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sqsaction.html#cfn-iot-topicrule-sqsaction-rolearn
         */
        readonly roleArn: string;
        /**
         * Specifies whether to use Base64 encoding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sqsaction.html#cfn-iot-topicrule-sqsaction-usebase64
         */
        readonly useBase64?: boolean | cdk.IResolvable;
    }
    /**
     * Describes an action to write data to an Amazon Kinesis stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kinesisaction.html
     */
    interface KinesisActionProperty {
        /**
         * The partition key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kinesisaction.html#cfn-iot-topicrule-kinesisaction-partitionkey
         */
        readonly partitionKey?: string;
        /**
         * The ARN of the IAM role that grants access to the Amazon Kinesis stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kinesisaction.html#cfn-iot-topicrule-kinesisaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The name of the Amazon Kinesis stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kinesisaction.html#cfn-iot-topicrule-kinesisaction-streamname
         */
        readonly streamName: string;
    }
    /**
     * Describes an action that updates a CloudWatch log.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchlogsaction.html
     */
    interface CloudwatchLogsActionProperty {
        /**
         * Indicates whether batches of log records will be extracted and uploaded into CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchlogsaction.html#cfn-iot-topicrule-cloudwatchlogsaction-batchmode
         */
        readonly batchMode?: boolean | cdk.IResolvable;
        /**
         * The CloudWatch log name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchlogsaction.html#cfn-iot-topicrule-cloudwatchlogsaction-loggroupname
         */
        readonly logGroupName: string;
        /**
         * The IAM role that allows access to the CloudWatch log.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchlogsaction.html#cfn-iot-topicrule-cloudwatchlogsaction-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Describes an action that writes records into an Amazon Timestream table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamaction.html
     */
    interface TimestreamActionProperty {
        /**
         * The name of an Amazon Timestream database that has the table to write records into.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamaction.html#cfn-iot-topicrule-timestreamaction-databasename
         */
        readonly databaseName: string;
        /**
         * Metadata attributes of the time series that are written in each measure record.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamaction.html#cfn-iot-topicrule-timestreamaction-dimensions
         */
        readonly dimensions: Array<cdk.IResolvable | CfnTopicRule.TimestreamDimensionProperty> | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the role that grants AWS IoT permission to write to the Timestream database table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamaction.html#cfn-iot-topicrule-timestreamaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The table where the message data will be written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamaction.html#cfn-iot-topicrule-timestreamaction-tablename
         */
        readonly tableName: string;
        /**
         * The value to use for the entry's timestamp.
         *
         * If blank, the time that the entry was processed is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamaction.html#cfn-iot-topicrule-timestreamaction-timestamp
         */
        readonly timestamp?: cdk.IResolvable | CfnTopicRule.TimestreamTimestampProperty;
    }
    /**
     * Metadata attributes of the time series that are written in each measure record.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamdimension.html
     */
    interface TimestreamDimensionProperty {
        /**
         * The metadata dimension name.
         *
         * This is the name of the column in the Amazon Timestream database table record.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamdimension.html#cfn-iot-topicrule-timestreamdimension-name
         */
        readonly name: string;
        /**
         * The value to write in this column of the database record.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamdimension.html#cfn-iot-topicrule-timestreamdimension-value
         */
        readonly value: string;
    }
    /**
     * The value to use for the entry's timestamp.
     *
     * If blank, the time that the entry was processed is used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamtimestamp.html
     */
    interface TimestreamTimestampProperty {
        /**
         * The precision of the timestamp value that results from the expression described in `value` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamtimestamp.html#cfn-iot-topicrule-timestreamtimestamp-unit
         */
        readonly unit: string;
        /**
         * An expression that returns a long epoch time value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamtimestamp.html#cfn-iot-topicrule-timestreamtimestamp-value
         */
        readonly value: string;
    }
    /**
     * Sends message data to an AWS IoT Analytics channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotanalyticsaction.html
     */
    interface IotAnalyticsActionProperty {
        /**
         * Whether to process the action as a batch. The default value is `false` .
         *
         * When `batchMode` is `true` and the rule SQL statement evaluates to an Array, each Array element is delivered as a separate message when passed by [`BatchPutMessage`](https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html) The resulting array can't have more than 100 messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotanalyticsaction.html#cfn-iot-topicrule-iotanalyticsaction-batchmode
         */
        readonly batchMode?: boolean | cdk.IResolvable;
        /**
         * The name of the IoT Analytics channel to which message data will be sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotanalyticsaction.html#cfn-iot-topicrule-iotanalyticsaction-channelname
         */
        readonly channelName: string;
        /**
         * The ARN of the role which has a policy that grants IoT Analytics permission to send message data via IoT Analytics (iotanalytics:BatchPutMessage).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotanalyticsaction.html#cfn-iot-topicrule-iotanalyticsaction-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Describes an action to publish to an Amazon SNS topic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-snsaction.html
     */
    interface SnsActionProperty {
        /**
         * (Optional) The message format of the message to publish.
         *
         * Accepted values are "JSON" and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine if the payload should be parsed and relevant platform-specific bits of the payload should be extracted. For more information, see [Amazon SNS Message and JSON Formats](https://docs.aws.amazon.com/sns/latest/dg/json-formats.html) in the *Amazon Simple Notification Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-snsaction.html#cfn-iot-topicrule-snsaction-messageformat
         */
        readonly messageFormat?: string;
        /**
         * The ARN of the IAM role that grants access.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-snsaction.html#cfn-iot-topicrule-snsaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The ARN of the SNS topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-snsaction.html#cfn-iot-topicrule-snsaction-targetarn
         */
        readonly targetArn: string;
    }
    /**
     * Describes an action to invoke a Lambda function.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-lambdaaction.html
     */
    interface LambdaActionProperty {
        /**
         * The ARN of the Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-lambdaaction.html#cfn-iot-topicrule-lambdaaction-functionarn
         */
        readonly functionArn?: string;
    }
    /**
     * Describes an action to send device location updates from an MQTT message to an Amazon Location tracker resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html
     */
    interface LocationActionProperty {
        /**
         * The unique ID of the device providing the location data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html#cfn-iot-topicrule-locationaction-deviceid
         */
        readonly deviceId: string;
        /**
         * A string that evaluates to a double value that represents the latitude of the device's location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html#cfn-iot-topicrule-locationaction-latitude
         */
        readonly latitude: string;
        /**
         * A string that evaluates to a double value that represents the longitude of the device's location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html#cfn-iot-topicrule-locationaction-longitude
         */
        readonly longitude: string;
        /**
         * The IAM role that grants permission to write to the Amazon Location resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html#cfn-iot-topicrule-locationaction-rolearn
         */
        readonly roleArn: string;
        /**
         * The time that the location data was sampled.
         *
         * The default value is the time the MQTT message was processed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html#cfn-iot-topicrule-locationaction-timestamp
         */
        readonly timestamp?: cdk.IResolvable | CfnTopicRule.TimestampProperty;
        /**
         * The name of the tracker resource in Amazon Location in which the location is updated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html#cfn-iot-topicrule-locationaction-trackername
         */
        readonly trackerName: string;
    }
    /**
     * Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestamp.html
     */
    interface TimestampProperty {
        /**
         * The precision of the timestamp value that results from the expression described in `value` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestamp.html#cfn-iot-topicrule-timestamp-unit
         */
        readonly unit?: string;
        /**
         * An expression that returns a long epoch time value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestamp.html#cfn-iot-topicrule-timestamp-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnTopicRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html
 */
export interface CfnTopicRuleProps {
    /**
     * The name of the rule.
     *
     * *Pattern* : `^[a-zA-Z0-9_]+$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-rulename
     */
    readonly ruleName?: string;
    /**
     * Metadata which can be used to manage the topic rule.
     *
     * > For URI Request parameters use format: ...key1=value1&key2=value2...
     * >
     * > For the CLI command-line parameter use format: --tags "key1=value1&key2=value2..."
     * >
     * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The rule payload.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-topicrulepayload
     */
    readonly topicRulePayload: cdk.IResolvable | CfnTopicRule.TopicRulePayloadProperty;
}
/**
 * A topic rule destination.
 *
 * @cloudformationResource AWS::IoT::TopicRuleDestination
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html
 */
export declare class CfnTopicRuleDestination extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTopicRuleDestination from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTopicRuleDestination;
    /**
     * The topic rule destination URL.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Additional details or reason why the topic rule destination is in the current status.
     *
     * @cloudformationAttribute StatusReason
     */
    readonly attrStatusReason: string;
    /**
     * Properties of the HTTP URL.
     */
    httpUrlProperties?: CfnTopicRuleDestination.HttpUrlDestinationSummaryProperty | cdk.IResolvable;
    /**
     * - **IN_PROGRESS** - A topic rule destination was created but has not been confirmed.
     */
    status?: string;
    /**
     * Properties of the virtual private cloud (VPC) connection.
     */
    vpcProperties?: cdk.IResolvable | CfnTopicRuleDestination.VpcDestinationPropertiesProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnTopicRuleDestinationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTopicRuleDestination {
    /**
     * HTTP URL destination properties.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-httpurldestinationsummary.html
     */
    interface HttpUrlDestinationSummaryProperty {
        /**
         * The URL used to confirm the HTTP topic rule destination URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-httpurldestinationsummary.html#cfn-iot-topicruledestination-httpurldestinationsummary-confirmationurl
         */
        readonly confirmationUrl?: string;
    }
    /**
     * The properties of a virtual private cloud (VPC) destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html
     */
    interface VpcDestinationPropertiesProperty {
        /**
         * The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-rolearn
         */
        readonly roleArn?: string;
        /**
         * The security groups of the VPC destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * The subnet IDs of the VPC destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-subnetids
         */
        readonly subnetIds?: Array<string>;
        /**
         * The ID of the VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html#cfn-iot-topicruledestination-vpcdestinationproperties-vpcid
         */
        readonly vpcId?: string;
    }
}
/**
 * Properties for defining a `CfnTopicRuleDestination`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html
 */
export interface CfnTopicRuleDestinationProps {
    /**
     * Properties of the HTTP URL.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-httpurlproperties
     */
    readonly httpUrlProperties?: CfnTopicRuleDestination.HttpUrlDestinationSummaryProperty | cdk.IResolvable;
    /**
     * - **IN_PROGRESS** - A topic rule destination was created but has not been confirmed.
     *
     * You can set status to `IN_PROGRESS` by calling `UpdateTopicRuleDestination` . Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
     * - **ENABLED** - Confirmation was completed, and traffic to this destination is allowed. You can set status to `DISABLED` by calling `UpdateTopicRuleDestination` .
     * - **DISABLED** - Confirmation was completed, and traffic to this destination is not allowed. You can set status to `ENABLED` by calling `UpdateTopicRuleDestination` .
     * - **ERROR** - Confirmation could not be completed; for example, if the confirmation timed out. You can call `GetTopicRuleDestination` for details about the error. You can set status to `IN_PROGRESS` by calling `UpdateTopicRuleDestination` . Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-status
     */
    readonly status?: string;
    /**
     * Properties of the virtual private cloud (VPC) connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-vpcproperties
     */
    readonly vpcProperties?: cdk.IResolvable | CfnTopicRuleDestination.VpcDestinationPropertiesProperty;
}
/**
 * Creates a certificate provider.
 *
 * AWS IoT Core certificate provider lets you customize how to sign a certificate signing request (CSR) in fleet provisioning. For more information, see [Self-managed certificate signing using AWS IoT Core certificate provider](https://docs.aws.amazon.com/iot/latest/developerguide/provisioning-cert-provider.html) from the *AWS IoT Core Developer Guide* .
 *
 * @cloudformationResource AWS::IoT::CertificateProvider
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html
 */
export declare class CfnCertificateProvider extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCertificateProvider from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCertificateProvider;
    /**
     * Returns the Amazon Resource Name (ARN) for the certificate. For example:
     *
     * `{ "Fn::GetAtt": ["MyCertificateProvider", "Arn"] }`
     *
     * A value similar to the following is returned:
     *
     * `arn:aws:iot:ap-southeast-2:123456789012:certprovider/my-certificate-provider`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A list of the operations that the certificate provider will use to generate certificates.
     */
    accountDefaultForOperations: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the certificate provider.
     */
    certificateProviderName?: string;
    /**
     * The ARN of the Lambda function.
     */
    lambdaFunctionArn: string;
    /**
     * Metadata that can be used to manage the certificate provider.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCertificateProviderProps);
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
 * Properties for defining a `CfnCertificateProvider`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html
 */
export interface CfnCertificateProviderProps {
    /**
     * A list of the operations that the certificate provider will use to generate certificates.
     *
     * Valid value: `CreateCertificateFromCsr` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html#cfn-iot-certificateprovider-accountdefaultforoperations
     */
    readonly accountDefaultForOperations: Array<string>;
    /**
     * The name of the certificate provider.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html#cfn-iot-certificateprovider-certificateprovidername
     */
    readonly certificateProviderName?: string;
    /**
     * The ARN of the Lambda function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html#cfn-iot-certificateprovider-lambdafunctionarn
     */
    readonly lambdaFunctionArn: string;
    /**
     * Metadata that can be used to manage the certificate provider.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html#cfn-iot-certificateprovider-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Represents the resource definition of AWS IoT Command.
 *
 * @cloudformationResource AWS::IoT::Command
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html
 */
export declare class CfnCommand extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCommand from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCommand;
    /**
     * The Amazon Resource Name (ARN) of the command.
     *
     * @cloudformationAttribute CommandArn
     */
    readonly attrCommandArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The unique identifier of the command.
     */
    commandId: string;
    /**
     * The timestamp, when the command was created.
     */
    createdAt?: string;
    /**
     * Indicates whether the command has been deprecated.
     */
    deprecated?: boolean | cdk.IResolvable;
    /**
     * The description of the command parameter.
     */
    description?: string;
    /**
     * The display name of the command.
     */
    displayName?: string;
    /**
     * The timestamp, when the command was last updated.
     */
    lastUpdatedAt?: string;
    mandatoryParameters?: Array<CfnCommand.CommandParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The namespace to which the command belongs.
     */
    namespace?: string;
    payload?: CfnCommand.CommandPayloadProperty | cdk.IResolvable;
    /**
     * Indicates whether the command is pending deletion.
     */
    pendingDeletion?: boolean | cdk.IResolvable;
    /**
     * The customer role associated with the command.
     */
    roleArn?: string;
    /**
     * The tags to be associated with the command.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCommandProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCommand {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparameter.html
     */
    interface CommandParameterProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparameter.html#cfn-iot-command-commandparameter-defaultvalue
         */
        readonly defaultValue?: CfnCommand.CommandParameterValueProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparameter.html#cfn-iot-command-commandparameter-description
         */
        readonly description?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparameter.html#cfn-iot-command-commandparameter-name
         */
        readonly name: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparameter.html#cfn-iot-command-commandparameter-value
         */
        readonly value?: CfnCommand.CommandParameterValueProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparametervalue.html
     */
    interface CommandParameterValueProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparametervalue.html#cfn-iot-command-commandparametervalue-b
         */
        readonly b?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparametervalue.html#cfn-iot-command-commandparametervalue-bin
         */
        readonly bin?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparametervalue.html#cfn-iot-command-commandparametervalue-d
         */
        readonly d?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparametervalue.html#cfn-iot-command-commandparametervalue-i
         */
        readonly i?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparametervalue.html#cfn-iot-command-commandparametervalue-l
         */
        readonly l?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparametervalue.html#cfn-iot-command-commandparametervalue-s
         */
        readonly s?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparametervalue.html#cfn-iot-command-commandparametervalue-ul
         */
        readonly ul?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandpayload.html
     */
    interface CommandPayloadProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandpayload.html#cfn-iot-command-commandpayload-content
         */
        readonly content?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandpayload.html#cfn-iot-command-commandpayload-contenttype
         */
        readonly contentType?: string;
    }
}
/**
 * Properties for defining a `CfnCommand`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html
 */
export interface CfnCommandProps {
    /**
     * The unique identifier of the command.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-commandid
     */
    readonly commandId: string;
    /**
     * The timestamp, when the command was created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-createdat
     */
    readonly createdAt?: string;
    /**
     * Indicates whether the command has been deprecated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-deprecated
     */
    readonly deprecated?: boolean | cdk.IResolvable;
    /**
     * The description of the command parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-description
     */
    readonly description?: string;
    /**
     * The display name of the command.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-displayname
     */
    readonly displayName?: string;
    /**
     * The timestamp, when the command was last updated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-lastupdatedat
     */
    readonly lastUpdatedAt?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-mandatoryparameters
     */
    readonly mandatoryParameters?: Array<CfnCommand.CommandParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The namespace to which the command belongs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-namespace
     */
    readonly namespace?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-payload
     */
    readonly payload?: CfnCommand.CommandPayloadProperty | cdk.IResolvable;
    /**
     * Indicates whether the command is pending deletion.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-pendingdeletion
     */
    readonly pendingDeletion?: boolean | cdk.IResolvable;
    /**
     * The customer role associated with the command.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-rolearn
     */
    readonly roleArn?: string;
    /**
     * The tags to be associated with the command.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#cfn-iot-command-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
