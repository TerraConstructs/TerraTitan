import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * You can use the ADM channel to send push notifications through the Amazon Device Messaging (ADM) service to apps that run on Amazon devices, such as Kindle Fire tablets. Before you can use Amazon Pinpoint to send messages to Amazon devices, you have to enable the ADM channel for an Amazon Pinpoint application.
 *
 * The ADMChannel resource represents the status and authentication settings for the ADM channel for an application.
 *
 * @cloudformationResource AWS::Pinpoint::ADMChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html
 */
export declare class CfnADMChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnADMChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnADMChannel;
    /**
     * (Deprecated) An identifier for the ADM channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that the ADM channel applies to.
     */
    applicationId: string;
    /**
     * The Client ID that you received from Amazon to send messages by using ADM.
     */
    clientId: string;
    /**
     * The Client Secret that you received from Amazon to send messages by using ADM.
     */
    clientSecret: string;
    /**
     * Specifies whether to enable the ADM channel for the application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnADMChannelProps);
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
 * Properties for defining a `CfnADMChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html
 */
export interface CfnADMChannelProps {
    /**
     * The unique identifier for the Amazon Pinpoint application that the ADM channel applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html#cfn-pinpoint-admchannel-applicationid
     */
    readonly applicationId: string;
    /**
     * The Client ID that you received from Amazon to send messages by using ADM.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html#cfn-pinpoint-admchannel-clientid
     */
    readonly clientId: string;
    /**
     * The Client Secret that you received from Amazon to send messages by using ADM.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html#cfn-pinpoint-admchannel-clientsecret
     */
    readonly clientSecret: string;
    /**
     * Specifies whether to enable the ADM channel for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html#cfn-pinpoint-admchannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
}
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * You can use the APNs channel to send push notification messages to the Apple Push Notification service (APNs). Before you can use Amazon Pinpoint to send notifications to APNs, you have to enable the APNs channel for an Amazon Pinpoint application.
 *
 * The APNSChannel resource represents the status and authentication settings for the APNs channel for an application.
 *
 * @cloudformationResource AWS::Pinpoint::APNSChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html
 */
export declare class CfnAPNSChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAPNSChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAPNSChannel;
    /**
     * (Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that the APNs channel applies to.
     */
    applicationId: string;
    /**
     * The bundle identifier that's assigned to your iOS app.
     */
    bundleId?: string;
    /**
     * The APNs client certificate that you received from Apple.
     */
    certificate?: string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs.
     */
    defaultAuthenticationMethod?: string;
    /**
     * Specifies whether to enable the APNs channel for the application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
     */
    privateKey?: string;
    /**
     * The identifier that's assigned to your Apple Developer Account team.
     */
    teamId?: string;
    /**
     * The authentication key to use for APNs tokens.
     */
    tokenKey?: string;
    /**
     * The key identifier that's assigned to your APNs signing key.
     */
    tokenKeyId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAPNSChannelProps);
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
 * Properties for defining a `CfnAPNSChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html
 */
export interface CfnAPNSChannelProps {
    /**
     * The unique identifier for the Amazon Pinpoint application that the APNs channel applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#cfn-pinpoint-apnschannel-applicationid
     */
    readonly applicationId: string;
    /**
     * The bundle identifier that's assigned to your iOS app.
     *
     * This identifier is used for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#cfn-pinpoint-apnschannel-bundleid
     */
    readonly bundleId?: string;
    /**
     * The APNs client certificate that you received from Apple.
     *
     * Specify this value if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#cfn-pinpoint-apnschannel-certificate
     */
    readonly certificate?: string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs.
     *
     * Valid options are `key` or `certificate` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#cfn-pinpoint-apnschannel-defaultauthenticationmethod
     */
    readonly defaultAuthenticationMethod?: string;
    /**
     * Specifies whether to enable the APNs channel for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#cfn-pinpoint-apnschannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#cfn-pinpoint-apnschannel-privatekey
     */
    readonly privateKey?: string;
    /**
     * The identifier that's assigned to your Apple Developer Account team.
     *
     * This identifier is used for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#cfn-pinpoint-apnschannel-teamid
     */
    readonly teamId?: string;
    /**
     * The authentication key to use for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#cfn-pinpoint-apnschannel-tokenkey
     */
    readonly tokenKey?: string;
    /**
     * The key identifier that's assigned to your APNs signing key.
     *
     * Specify this value if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#cfn-pinpoint-apnschannel-tokenkeyid
     */
    readonly tokenKeyId?: string;
}
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * You can use the APNs sandbox channel to send push notification messages to the sandbox environment of the Apple Push Notification service (APNs). Before you can use Amazon Pinpoint to send notifications to the APNs sandbox environment, you have to enable the APNs sandbox channel for an Amazon Pinpoint application.
 *
 * The APNSSandboxChannel resource represents the status and authentication settings of the APNs sandbox channel for an application.
 *
 * @cloudformationResource AWS::Pinpoint::APNSSandboxChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html
 */
export declare class CfnAPNSSandboxChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAPNSSandboxChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAPNSSandboxChannel;
    /**
     * (Deprecated) An identifier for the APNs sandbox channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that the APNs sandbox channel applies to.
     */
    applicationId: string;
    /**
     * The bundle identifier that's assigned to your iOS app.
     */
    bundleId?: string;
    /**
     * The APNs client certificate that you received from Apple.
     */
    certificate?: string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs.
     */
    defaultAuthenticationMethod?: string;
    /**
     * Specifies whether to enable the APNs Sandbox channel for the Amazon Pinpoint application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
     */
    privateKey?: string;
    /**
     * The identifier that's assigned to your Apple Developer Account team.
     */
    teamId?: string;
    /**
     * The authentication key to use for APNs tokens.
     */
    tokenKey?: string;
    /**
     * The key identifier that's assigned to your APNs signing key.
     */
    tokenKeyId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAPNSSandboxChannelProps);
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
 * Properties for defining a `CfnAPNSSandboxChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html
 */
export interface CfnAPNSSandboxChannelProps {
    /**
     * The unique identifier for the Amazon Pinpoint application that the APNs sandbox channel applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#cfn-pinpoint-apnssandboxchannel-applicationid
     */
    readonly applicationId: string;
    /**
     * The bundle identifier that's assigned to your iOS app.
     *
     * This identifier is used for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#cfn-pinpoint-apnssandboxchannel-bundleid
     */
    readonly bundleId?: string;
    /**
     * The APNs client certificate that you received from Apple.
     *
     * Specify this value if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#cfn-pinpoint-apnssandboxchannel-certificate
     */
    readonly certificate?: string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs.
     *
     * Valid options are `key` or `certificate` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#cfn-pinpoint-apnssandboxchannel-defaultauthenticationmethod
     */
    readonly defaultAuthenticationMethod?: string;
    /**
     * Specifies whether to enable the APNs Sandbox channel for the Amazon Pinpoint application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#cfn-pinpoint-apnssandboxchannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#cfn-pinpoint-apnssandboxchannel-privatekey
     */
    readonly privateKey?: string;
    /**
     * The identifier that's assigned to your Apple Developer Account team.
     *
     * This identifier is used for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#cfn-pinpoint-apnssandboxchannel-teamid
     */
    readonly teamId?: string;
    /**
     * The authentication key to use for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#cfn-pinpoint-apnssandboxchannel-tokenkey
     */
    readonly tokenKey?: string;
    /**
     * The key identifier that's assigned to your APNs signing key.
     *
     * Specify this value if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#cfn-pinpoint-apnssandboxchannel-tokenkeyid
     */
    readonly tokenKeyId?: string;
}
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * You can use the APNs VoIP channel to send VoIP notification messages to the Apple Push Notification service (APNs). Before you can use Amazon Pinpoint to send VoIP notifications to APNs, you have to enable the APNs VoIP channel for an Amazon Pinpoint application.
 *
 * The APNSVoipChannel resource represents the status and authentication settings of the APNs VoIP channel for an application.
 *
 * @cloudformationResource AWS::Pinpoint::APNSVoipChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html
 */
export declare class CfnAPNSVoipChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAPNSVoipChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAPNSVoipChannel;
    /**
     * (Deprecated) An identifier for the APNs VoIP channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that the APNs VoIP channel applies to.
     */
    applicationId: string;
    /**
     * The bundle identifier that's assigned to your iOS app.
     */
    bundleId?: string;
    /**
     * The APNs client certificate that you received from Apple.
     */
    certificate?: string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs.
     */
    defaultAuthenticationMethod?: string;
    /**
     * Specifies whether to enable the APNs VoIP channel for the Amazon Pinpoint application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
     */
    privateKey?: string;
    /**
     * The identifier that's assigned to your Apple Developer Account team.
     */
    teamId?: string;
    /**
     * The authentication key to use for APNs tokens.
     */
    tokenKey?: string;
    /**
     * The key identifier that's assigned to your APNs signing key.
     */
    tokenKeyId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAPNSVoipChannelProps);
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
 * Properties for defining a `CfnAPNSVoipChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html
 */
export interface CfnAPNSVoipChannelProps {
    /**
     * The unique identifier for the Amazon Pinpoint application that the APNs VoIP channel applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#cfn-pinpoint-apnsvoipchannel-applicationid
     */
    readonly applicationId: string;
    /**
     * The bundle identifier that's assigned to your iOS app.
     *
     * This identifier is used for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#cfn-pinpoint-apnsvoipchannel-bundleid
     */
    readonly bundleId?: string;
    /**
     * The APNs client certificate that you received from Apple.
     *
     * Specify this value if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#cfn-pinpoint-apnsvoipchannel-certificate
     */
    readonly certificate?: string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs.
     *
     * Valid options are `key` or `certificate` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#cfn-pinpoint-apnsvoipchannel-defaultauthenticationmethod
     */
    readonly defaultAuthenticationMethod?: string;
    /**
     * Specifies whether to enable the APNs VoIP channel for the Amazon Pinpoint application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#cfn-pinpoint-apnsvoipchannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#cfn-pinpoint-apnsvoipchannel-privatekey
     */
    readonly privateKey?: string;
    /**
     * The identifier that's assigned to your Apple Developer Account team.
     *
     * This identifier is used for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#cfn-pinpoint-apnsvoipchannel-teamid
     */
    readonly teamId?: string;
    /**
     * The authentication key to use for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#cfn-pinpoint-apnsvoipchannel-tokenkey
     */
    readonly tokenKey?: string;
    /**
     * The key identifier that's assigned to your APNs signing key.
     *
     * Specify this value if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#cfn-pinpoint-apnsvoipchannel-tokenkeyid
     */
    readonly tokenKeyId?: string;
}
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * You can use the APNs VoIP sandbox channel to send VoIP notification messages to the sandbox environment of the Apple Push Notification service (APNs). Before you can use Amazon Pinpoint to send VoIP notifications to the APNs sandbox environment, you have to enable the APNs VoIP sandbox channel for an Amazon Pinpoint application.
 *
 * The APNSVoipSandboxChannel resource represents the status and authentication settings of the APNs VoIP sandbox channel for an application.
 *
 * @cloudformationResource AWS::Pinpoint::APNSVoipSandboxChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html
 */
export declare class CfnAPNSVoipSandboxChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAPNSVoipSandboxChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAPNSVoipSandboxChannel;
    /**
     * (Deprecated) An identifier for the APNs VoIP sandbox channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the application that the APNs VoIP sandbox channel applies to.
     */
    applicationId: string;
    /**
     * The bundle identifier that's assigned to your iOS app.
     */
    bundleId?: string;
    /**
     * The APNs client certificate that you received from Apple.
     */
    certificate?: string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs.
     */
    defaultAuthenticationMethod?: string;
    /**
     * Specifies whether the APNs VoIP sandbox channel is enabled for the application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.
     */
    privateKey?: string;
    /**
     * The identifier that's assigned to your Apple developer account team.
     */
    teamId?: string;
    /**
     * The authentication key to use for APNs tokens.
     */
    tokenKey?: string;
    /**
     * The key identifier that's assigned to your APNs signing key.
     */
    tokenKeyId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAPNSVoipSandboxChannelProps);
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
 * Properties for defining a `CfnAPNSVoipSandboxChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html
 */
export interface CfnAPNSVoipSandboxChannelProps {
    /**
     * The unique identifier for the application that the APNs VoIP sandbox channel applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#cfn-pinpoint-apnsvoipsandboxchannel-applicationid
     */
    readonly applicationId: string;
    /**
     * The bundle identifier that's assigned to your iOS app.
     *
     * This identifier is used for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#cfn-pinpoint-apnsvoipsandboxchannel-bundleid
     */
    readonly bundleId?: string;
    /**
     * The APNs client certificate that you received from Apple.
     *
     * Specify this value if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#cfn-pinpoint-apnsvoipsandboxchannel-certificate
     */
    readonly certificate?: string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs.
     *
     * Valid options are `key` or `certificate` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#cfn-pinpoint-apnsvoipsandboxchannel-defaultauthenticationmethod
     */
    readonly defaultAuthenticationMethod?: string;
    /**
     * Specifies whether the APNs VoIP sandbox channel is enabled for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#cfn-pinpoint-apnsvoipsandboxchannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#cfn-pinpoint-apnsvoipsandboxchannel-privatekey
     */
    readonly privateKey?: string;
    /**
     * The identifier that's assigned to your Apple developer account team.
     *
     * This identifier is used for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#cfn-pinpoint-apnsvoipsandboxchannel-teamid
     */
    readonly teamId?: string;
    /**
     * The authentication key to use for APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#cfn-pinpoint-apnsvoipsandboxchannel-tokenkey
     */
    readonly tokenKey?: string;
    /**
     * The key identifier that's assigned to your APNs signing key.
     *
     * Specify this value if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#cfn-pinpoint-apnsvoipsandboxchannel-tokenkeyid
     */
    readonly tokenKeyId?: string;
}
/**
 * An *app* is an Amazon Pinpoint application, also referred to as a *project* .
 *
 * An application is a collection of related settings, customer information, segments, campaigns, and other types of Amazon Pinpoint resources.
 *
 * The App resource represents an Amazon Pinpoint application.
 *
 * @cloudformationResource AWS::Pinpoint::App
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html
 */
export declare class CfnApp extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApp from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApp;
    /**
     * The Amazon Resource Name (ARN) of the application.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier for the application. This identifier is displayed as the *Project ID* on the Amazon Pinpoint console.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The display name of the application.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAppProps);
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
 * Properties for defining a `CfnApp`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html
 */
export interface CfnAppProps {
    /**
     * The display name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html#cfn-pinpoint-app-name
     */
    readonly name: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-app.html#cfn-pinpoint-app-tags
     */
    readonly tags?: any;
}
/**
 * Specifies the settings for an Amazon Pinpoint application.
 *
 * In Amazon Pinpoint, an *application* (also referred to as an *app* or *project* ) is a collection of related settings, customer information, segments, and campaigns, and other types of Amazon Pinpoint resources.
 *
 * @cloudformationResource AWS::Pinpoint::ApplicationSettings
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html
 */
export declare class CfnApplicationSettings extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationSettings from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationSettings;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application.
     */
    applicationId: string;
    /**
     * The settings for the Lambda function to use by default as a code hook for campaigns in the application.
     */
    campaignHook?: CfnApplicationSettings.CampaignHookProperty | cdk.IResolvable;
    cloudWatchMetricsEnabled?: boolean | cdk.IResolvable;
    /**
     * The default sending limits for campaigns in the application.
     */
    limits?: cdk.IResolvable | CfnApplicationSettings.LimitsProperty;
    /**
     * The default quiet time for campaigns in the application.
     */
    quietTime?: cdk.IResolvable | CfnApplicationSettings.QuietTimeProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationSettingsProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplicationSettings {
    /**
     * Specifies the start and end times that define a time range when messages aren't sent to endpoints.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-quiettime.html
     */
    interface QuietTimeProperty {
        /**
         * The specific time when quiet time ends.
         *
         * This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use `02:30` to represent 2:30 AM, or `14:30` to represent 2:30 PM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-quiettime.html#cfn-pinpoint-applicationsettings-quiettime-end
         */
        readonly end: string;
        /**
         * The specific time when quiet time begins.
         *
         * This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use `02:30` to represent 2:30 AM, or `14:30` to represent 2:30 PM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-quiettime.html#cfn-pinpoint-applicationsettings-quiettime-start
         */
        readonly start: string;
    }
    /**
     * Specifies the default sending limits for campaigns in the application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-limits.html
     */
    interface LimitsProperty {
        /**
         * The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period.
         *
         * The maximum value is 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-limits.html#cfn-pinpoint-applicationsettings-limits-daily
         */
        readonly daily?: number;
        /**
         * The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign.
         *
         * The minimum value is 60 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-limits.html#cfn-pinpoint-applicationsettings-limits-maximumduration
         */
        readonly maximumDuration?: number;
        /**
         * The maximum number of messages that a campaign can send each second.
         *
         * The minimum value is 1. The maximum value is 20,000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-limits.html#cfn-pinpoint-applicationsettings-limits-messagespersecond
         */
        readonly messagesPerSecond?: number;
        /**
         * The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign.
         *
         * The maximum value is 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-limits.html#cfn-pinpoint-applicationsettings-limits-total
         */
        readonly total?: number;
    }
    /**
     * Specifies the Lambda function to use by default as a code hook for campaigns in the application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-campaignhook.html
     */
    interface CampaignHookProperty {
        /**
         * The name or Amazon Resource Name (ARN) of the Lambda function that Amazon Pinpoint invokes to send messages for campaigns in the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-campaignhook.html#cfn-pinpoint-applicationsettings-campaignhook-lambdafunctionname
         */
        readonly lambdaFunctionName?: string;
        /**
         * The mode that Amazon Pinpoint uses to invoke the Lambda function. Possible values are:.
         *
         * - `FILTER` - Invoke the function to customize the segment that's used by a campaign.
         * - `DELIVERY` - (Deprecated) Previously, invoked the function to send a campaign through a custom channel. This functionality is not supported anymore. To send a campaign through a custom channel, use the `CustomDeliveryConfiguration` and `CampaignCustomMessage` objects of the campaign.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-campaignhook.html#cfn-pinpoint-applicationsettings-campaignhook-mode
         */
        readonly mode?: string;
        /**
         * The web URL that Amazon Pinpoint calls to invoke the Lambda function over HTTPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-campaignhook.html#cfn-pinpoint-applicationsettings-campaignhook-weburl
         */
        readonly webUrl?: string;
    }
}
/**
 * Properties for defining a `CfnApplicationSettings`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html
 */
export interface CfnApplicationSettingsProps {
    /**
     * The unique identifier for the Amazon Pinpoint application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html#cfn-pinpoint-applicationsettings-applicationid
     */
    readonly applicationId: string;
    /**
     * The settings for the Lambda function to use by default as a code hook for campaigns in the application.
     *
     * To override these settings for a specific campaign, use the Campaign resource to define custom Lambda function settings for the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html#cfn-pinpoint-applicationsettings-campaignhook
     */
    readonly campaignHook?: CfnApplicationSettings.CampaignHookProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html#cfn-pinpoint-applicationsettings-cloudwatchmetricsenabled
     */
    readonly cloudWatchMetricsEnabled?: boolean | cdk.IResolvable;
    /**
     * The default sending limits for campaigns in the application.
     *
     * To override these limits for a specific campaign, use the Campaign resource to define custom limits for the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html#cfn-pinpoint-applicationsettings-limits
     */
    readonly limits?: cdk.IResolvable | CfnApplicationSettings.LimitsProperty;
    /**
     * The default quiet time for campaigns in the application.
     *
     * Quiet time is a specific time range when campaigns don't send messages to endpoints, if all the following conditions are met:
     *
     * - The `EndpointDemographic.Timezone` property of the endpoint is set to a valid value.
     *
     * - The current time in the endpoint's time zone is later than or equal to the time specified by the `QuietTime.Start` property for the application (or a campaign that has custom quiet time settings).
     *
     * - The current time in the endpoint's time zone is earlier than or equal to the time specified by the `QuietTime.End` property for the application (or a campaign that has custom quiet time settings).
     *
     * If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign, even if quiet time is enabled.
     *
     * To override the default quiet time settings for a specific campaign, use the Campaign resource to define a custom quiet time for the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html#cfn-pinpoint-applicationsettings-quiettime
     */
    readonly quietTime?: cdk.IResolvable | CfnApplicationSettings.QuietTimeProperty;
}
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * You can use the Baidu channel to send notifications to the Baidu Cloud Push notification service. Before you can use Amazon Pinpoint to send notifications to the Baidu Cloud Push service, you have to enable the Baidu channel for an Amazon Pinpoint application.
 *
 * The BaiduChannel resource represents the status and authentication settings of the Baidu channel for an application.
 *
 * @cloudformationResource AWS::Pinpoint::BaiduChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html
 */
export declare class CfnBaiduChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBaiduChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBaiduChannel;
    /**
     * (Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The API key that you received from the Baidu Cloud Push service to communicate with the service.
     */
    apiKey: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that you're configuring the Baidu channel for.
     */
    applicationId: string;
    /**
     * Specifies whether to enable the Baidu channel for the application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The secret key that you received from the Baidu Cloud Push service to communicate with the service.
     */
    secretKey: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBaiduChannelProps);
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
 * Properties for defining a `CfnBaiduChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html
 */
export interface CfnBaiduChannelProps {
    /**
     * The API key that you received from the Baidu Cloud Push service to communicate with the service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html#cfn-pinpoint-baiduchannel-apikey
     */
    readonly apiKey: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that you're configuring the Baidu channel for.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html#cfn-pinpoint-baiduchannel-applicationid
     */
    readonly applicationId: string;
    /**
     * Specifies whether to enable the Baidu channel for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html#cfn-pinpoint-baiduchannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The secret key that you received from the Baidu Cloud Push service to communicate with the service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html#cfn-pinpoint-baiduchannel-secretkey
     */
    readonly secretKey: string;
}
/**
 * Specifies the settings for a campaign.
 *
 * A *campaign* is a messaging initiative that engages a specific segment of users for an Amazon Pinpoint application.
 *
 * @cloudformationResource AWS::Pinpoint::Campaign
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html
 */
export declare class CfnCampaign extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCampaign from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCampaign;
    /**
     * The Amazon Resource Name (ARN) of the campaign.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier for the campaign.
     *
     * @cloudformationAttribute CampaignId
     */
    readonly attrCampaignId: string;
    /**
     * An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.
     */
    additionalTreatments?: Array<cdk.IResolvable | CfnCampaign.WriteTreatmentResourceProperty> | cdk.IResolvable;
    /**
     * The unique identifier for the Amazon Pinpoint application that the campaign is associated with.
     */
    applicationId: string;
    /**
     * Specifies the Lambda function to use as a code hook for a campaign.
     */
    campaignHook?: CfnCampaign.CampaignHookProperty | cdk.IResolvable;
    /**
     * The delivery configuration settings for sending the treatment through a custom channel.
     */
    customDeliveryConfiguration?: CfnCampaign.CustomDeliveryConfigurationProperty | cdk.IResolvable;
    /**
     * A custom description of the campaign.
     */
    description?: string;
    /**
     * The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.
     */
    holdoutPercent?: number;
    /**
     * Specifies whether to pause the campaign.
     */
    isPaused?: boolean | cdk.IResolvable;
    /**
     * The messaging limits for the campaign.
     */
    limits?: cdk.IResolvable | CfnCampaign.LimitsProperty;
    /**
     * The message configuration settings for the treatment.
     */
    messageConfiguration?: cdk.IResolvable | CfnCampaign.MessageConfigurationProperty;
    /**
     * The name of the campaign.
     */
    name: string;
    /**
     * An integer between 1 and 5, inclusive, that represents the priority of the in-app message campaign, where 1 is the highest priority and 5 is the lowest.
     */
    priority?: number;
    /**
     * The schedule settings for the treatment.
     */
    schedule: cdk.IResolvable | CfnCampaign.ScheduleProperty;
    /**
     * The unique identifier for the segment to associate with the campaign.
     */
    segmentId: string;
    /**
     * The version of the segment to associate with the campaign.
     */
    segmentVersion?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * The message template to use for the treatment.
     */
    templateConfiguration?: cdk.IResolvable | CfnCampaign.TemplateConfigurationProperty;
    /**
     * A custom description of the treatment.
     */
    treatmentDescription?: string;
    /**
     * A custom name for the treatment.
     */
    treatmentName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCampaignProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCampaign {
    /**
     * Specifies the message template to use for the message, for each type of channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-templateconfiguration.html
     */
    interface TemplateConfigurationProperty {
        /**
         * The email template to use for the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-templateconfiguration.html#cfn-pinpoint-campaign-templateconfiguration-emailtemplate
         */
        readonly emailTemplate?: cdk.IResolvable | CfnCampaign.TemplateProperty;
        /**
         * The push notification template to use for the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-templateconfiguration.html#cfn-pinpoint-campaign-templateconfiguration-pushtemplate
         */
        readonly pushTemplate?: cdk.IResolvable | CfnCampaign.TemplateProperty;
        /**
         * The SMS template to use for the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-templateconfiguration.html#cfn-pinpoint-campaign-templateconfiguration-smstemplate
         */
        readonly smsTemplate?: cdk.IResolvable | CfnCampaign.TemplateProperty;
        /**
         * The voice template to use for the message.
         *
         * This object isn't supported for campaigns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-templateconfiguration.html#cfn-pinpoint-campaign-templateconfiguration-voicetemplate
         */
        readonly voiceTemplate?: cdk.IResolvable | CfnCampaign.TemplateProperty;
    }
    /**
     * Specifies the name and version of the message template to use for the message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-template.html
     */
    interface TemplateProperty {
        /**
         * The name of the message template to use for the message.
         *
         * If specified, this value must match the name of an existing message template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-template.html#cfn-pinpoint-campaign-template-name
         */
        readonly name?: string;
        /**
         * The unique identifier for the version of the message template to use for the message.
         *
         * If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the [Template Versions](https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html) resource.
         *
         * If you don't specify a value for this property, Amazon Pinpoint uses the *active version* of the template. The *active version* is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-template.html#cfn-pinpoint-campaign-template-version
         */
        readonly version?: string;
    }
    /**
     * Specifies the settings for a campaign treatment.
     *
     * A *treatment* is a variation of a campaign that's used for A/B testing of a campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html
     */
    interface WriteTreatmentResourceProperty {
        /**
         * The delivery configuration settings for sending the treatment through a custom channel.
         *
         * This object is required if the `MessageConfiguration` object for the treatment specifies a `CustomMessage` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html#cfn-pinpoint-campaign-writetreatmentresource-customdeliveryconfiguration
         */
        readonly customDeliveryConfiguration?: CfnCampaign.CustomDeliveryConfigurationProperty | cdk.IResolvable;
        /**
         * The message configuration settings for the treatment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html#cfn-pinpoint-campaign-writetreatmentresource-messageconfiguration
         */
        readonly messageConfiguration?: cdk.IResolvable | CfnCampaign.MessageConfigurationProperty;
        /**
         * The schedule settings for the treatment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html#cfn-pinpoint-campaign-writetreatmentresource-schedule
         */
        readonly schedule?: cdk.IResolvable | CfnCampaign.ScheduleProperty;
        /**
         * The allocated percentage of users (segment members) to send the treatment to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html#cfn-pinpoint-campaign-writetreatmentresource-sizepercent
         */
        readonly sizePercent?: number;
        /**
         * The message template to use for the treatment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html#cfn-pinpoint-campaign-writetreatmentresource-templateconfiguration
         */
        readonly templateConfiguration?: cdk.IResolvable | CfnCampaign.TemplateConfigurationProperty;
        /**
         * A custom description of the treatment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html#cfn-pinpoint-campaign-writetreatmentresource-treatmentdescription
         */
        readonly treatmentDescription?: string;
        /**
         * A custom name for the treatment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html#cfn-pinpoint-campaign-writetreatmentresource-treatmentname
         */
        readonly treatmentName?: string;
    }
    /**
     * Specifies the message configuration settings for a campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html
     */
    interface MessageConfigurationProperty {
        /**
         * The message that the campaign sends through the ADM (Amazon Device Messaging) channel.
         *
         * If specified, this message overrides the default message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html#cfn-pinpoint-campaign-messageconfiguration-admmessage
         */
        readonly admMessage?: cdk.IResolvable | CfnCampaign.MessageProperty;
        /**
         * The message that the campaign sends through the APNs (Apple Push Notification service) channel.
         *
         * If specified, this message overrides the default message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html#cfn-pinpoint-campaign-messageconfiguration-apnsmessage
         */
        readonly apnsMessage?: cdk.IResolvable | CfnCampaign.MessageProperty;
        /**
         * The message that the campaign sends through the Baidu (Baidu Cloud Push) channel.
         *
         * If specified, this message overrides the default message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html#cfn-pinpoint-campaign-messageconfiguration-baidumessage
         */
        readonly baiduMessage?: cdk.IResolvable | CfnCampaign.MessageProperty;
        /**
         * The message that the campaign sends through a custom channel, as specified by the delivery configuration ( `CustomDeliveryConfiguration` ) settings for the campaign.
         *
         * If specified, this message overrides the default message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html#cfn-pinpoint-campaign-messageconfiguration-custommessage
         */
        readonly customMessage?: CfnCampaign.CampaignCustomMessageProperty | cdk.IResolvable;
        /**
         * The default message that the campaign sends through all the channels that are configured for the campaign.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html#cfn-pinpoint-campaign-messageconfiguration-defaultmessage
         */
        readonly defaultMessage?: cdk.IResolvable | CfnCampaign.MessageProperty;
        /**
         * The message that the campaign sends through the email channel. If specified, this message overrides the default message.
         *
         * > The maximum email message size is 200 KB. You can use email templates to send larger email messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html#cfn-pinpoint-campaign-messageconfiguration-emailmessage
         */
        readonly emailMessage?: CfnCampaign.CampaignEmailMessageProperty | cdk.IResolvable;
        /**
         * The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
         *
         * If specified, this message overrides the default message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html#cfn-pinpoint-campaign-messageconfiguration-gcmmessage
         */
        readonly gcmMessage?: cdk.IResolvable | CfnCampaign.MessageProperty;
        /**
         * The default message for the in-app messaging channel.
         *
         * This message overrides the default message ( `DefaultMessage` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html#cfn-pinpoint-campaign-messageconfiguration-inappmessage
         */
        readonly inAppMessage?: CfnCampaign.CampaignInAppMessageProperty | cdk.IResolvable;
        /**
         * The message that the campaign sends through the SMS channel.
         *
         * If specified, this message overrides the default message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html#cfn-pinpoint-campaign-messageconfiguration-smsmessage
         */
        readonly smsMessage?: CfnCampaign.CampaignSmsMessageProperty | cdk.IResolvable;
    }
    /**
     * Specifies the content and settings for a push notification that's sent to recipients of a campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html
     */
    interface MessageProperty {
        /**
         * The action to occur if a recipient taps the push notification. Valid values are:.
         *
         * - `OPEN_APP` – Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
         * - `DEEP_LINK` – Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of iOS and Android.
         * - `URL` – The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-action
         */
        readonly action?: string;
        /**
         * The body of the notification message.
         *
         * The maximum number of characters is 200.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-body
         */
        readonly body?: string;
        /**
         * The URL of the image to display as the push notification icon, such as the icon for the app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-imageiconurl
         */
        readonly imageIconUrl?: string;
        /**
         * The URL of the image to display as the small, push notification icon, such as a small version of the icon for the app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-imagesmalliconurl
         */
        readonly imageSmallIconUrl?: string;
        /**
         * The URL of an image to display in the push notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-imageurl
         */
        readonly imageUrl?: string;
        /**
         * The JSON payload to use for a silent push notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-jsonbody
         */
        readonly jsonBody?: string;
        /**
         * The URL of the image or video to display in the push notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-mediaurl
         */
        readonly mediaUrl?: string;
        /**
         * The raw, JSON-formatted string to use as the payload for the notification message.
         *
         * If specified, this value overrides all other content for the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-rawcontent
         */
        readonly rawContent?: string;
        /**
         * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device.
         *
         * Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-silentpush
         */
        readonly silentPush?: boolean | cdk.IResolvable;
        /**
         * The number of seconds that the push notification service should keep the message, if the service is unable to deliver the notification the first time.
         *
         * This value is converted to an expiration value when it's sent to a push notification service. If this value is `0` , the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.
         *
         * This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-timetolive
         */
        readonly timeToLive?: number;
        /**
         * The title to display above the notification message on a recipient's device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-title
         */
        readonly title?: string;
        /**
         * The URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the `Action` property is `URL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html#cfn-pinpoint-campaign-message-url
         */
        readonly url?: string;
    }
    /**
     * Specifies the appearance of an in-app message, including the message type, the title and body text, text and background colors, and the configurations of buttons that appear in the message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigninappmessage.html
     */
    interface CampaignInAppMessageProperty {
        /**
         * An array that contains configurtion information about the in-app message for the campaign, including title and body text, text colors, background colors, image URLs, and button configurations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigninappmessage.html#cfn-pinpoint-campaign-campaigninappmessage-content
         */
        readonly content?: Array<CfnCampaign.InAppMessageContentProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Custom data, in the form of key-value pairs, that is included in an in-app messaging payload.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigninappmessage.html#cfn-pinpoint-campaign-campaigninappmessage-customconfig
         */
        readonly customConfig?: any | cdk.IResolvable;
        /**
         * A string that describes how the in-app message will appear. You can specify one of the following:.
         *
         * - `BOTTOM_BANNER` – a message that appears as a banner at the bottom of the page.
         * - `TOP_BANNER` – a message that appears as a banner at the top of the page.
         * - `OVERLAYS` – a message that covers entire screen.
         * - `MOBILE_FEED` – a message that appears in a window in front of the page.
         * - `MIDDLE_BANNER` – a message that appears as a banner in the middle of the page.
         * - `CAROUSEL` – a scrollable layout of up to five unique messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigninappmessage.html#cfn-pinpoint-campaign-campaigninappmessage-layout
         */
        readonly layout?: string;
    }
    /**
     * Specifies the configuration and contents of an in-app message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html
     */
    interface InAppMessageContentProperty {
        /**
         * The background color for an in-app message banner, expressed as a hex color code (such as #000000 for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html#cfn-pinpoint-campaign-inappmessagecontent-backgroundcolor
         */
        readonly backgroundColor?: string;
        /**
         * Specifies the configuration of main body text in an in-app message template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html#cfn-pinpoint-campaign-inappmessagecontent-bodyconfig
         */
        readonly bodyConfig?: CfnCampaign.InAppMessageBodyConfigProperty | cdk.IResolvable;
        /**
         * Specifies the configuration and content of the header or title text of the in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html#cfn-pinpoint-campaign-inappmessagecontent-headerconfig
         */
        readonly headerConfig?: CfnCampaign.InAppMessageHeaderConfigProperty | cdk.IResolvable;
        /**
         * The URL of the image that appears on an in-app message banner.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html#cfn-pinpoint-campaign-inappmessagecontent-imageurl
         */
        readonly imageUrl?: string;
        /**
         * An object that contains configuration information about the primary button in an in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html#cfn-pinpoint-campaign-inappmessagecontent-primarybtn
         */
        readonly primaryBtn?: CfnCampaign.InAppMessageButtonProperty | cdk.IResolvable;
        /**
         * An object that contains configuration information about the secondary button in an in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html#cfn-pinpoint-campaign-inappmessagecontent-secondarybtn
         */
        readonly secondaryBtn?: CfnCampaign.InAppMessageButtonProperty | cdk.IResolvable;
    }
    /**
     * Specifies the configuration of main body text of the in-app message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebodyconfig.html
     */
    interface InAppMessageBodyConfigProperty {
        /**
         * The text alignment of the main body text of the message.
         *
         * Acceptable values: `LEFT` , `CENTER` , `RIGHT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebodyconfig.html#cfn-pinpoint-campaign-inappmessagebodyconfig-alignment
         */
        readonly alignment?: string;
        /**
         * The main body text of the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebodyconfig.html#cfn-pinpoint-campaign-inappmessagebodyconfig-body
         */
        readonly body?: string;
        /**
         * The color of the body text, expressed as a string consisting of a hex color code (such as "#000000" for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebodyconfig.html#cfn-pinpoint-campaign-inappmessagebodyconfig-textcolor
         */
        readonly textColor?: string;
    }
    /**
     * Specifies the configuration of a button that appears in an in-app message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebutton.html
     */
    interface InAppMessageButtonProperty {
        /**
         * An object that defines the default behavior for a button in in-app messages sent to Android.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebutton.html#cfn-pinpoint-campaign-inappmessagebutton-android
         */
        readonly android?: cdk.IResolvable | CfnCampaign.OverrideButtonConfigurationProperty;
        /**
         * An object that defines the default behavior for a button in an in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebutton.html#cfn-pinpoint-campaign-inappmessagebutton-defaultconfig
         */
        readonly defaultConfig?: CfnCampaign.DefaultButtonConfigurationProperty | cdk.IResolvable;
        /**
         * An object that defines the default behavior for a button in in-app messages sent to iOS devices.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebutton.html#cfn-pinpoint-campaign-inappmessagebutton-ios
         */
        readonly ios?: cdk.IResolvable | CfnCampaign.OverrideButtonConfigurationProperty;
        /**
         * An object that defines the default behavior for a button in in-app messages for web applications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebutton.html#cfn-pinpoint-campaign-inappmessagebutton-web
         */
        readonly web?: cdk.IResolvable | CfnCampaign.OverrideButtonConfigurationProperty;
    }
    /**
     * Specifies the configuration of a button with settings that are specific to a certain device type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-overridebuttonconfiguration.html
     */
    interface OverrideButtonConfigurationProperty {
        /**
         * The action that occurs when a recipient chooses a button in an in-app message.
         *
         * You can specify one of the following:
         *
         * - `LINK` – A link to a web destination.
         * - `DEEP_LINK` – A link to a specific page in an application.
         * - `CLOSE` – Dismisses the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-overridebuttonconfiguration.html#cfn-pinpoint-campaign-overridebuttonconfiguration-buttonaction
         */
        readonly buttonAction?: string;
        /**
         * The destination (such as a URL) for a button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-overridebuttonconfiguration.html#cfn-pinpoint-campaign-overridebuttonconfiguration-link
         */
        readonly link?: string;
    }
    /**
     * Specifies the default behavior for a button that appears in an in-app message.
     *
     * You can optionally add button configurations that specifically apply to iOS, Android, or web browser users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html
     */
    interface DefaultButtonConfigurationProperty {
        /**
         * The background color of a button, expressed as a hex color code (such as #000000 for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html#cfn-pinpoint-campaign-defaultbuttonconfiguration-backgroundcolor
         */
        readonly backgroundColor?: string;
        /**
         * The border radius of a button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html#cfn-pinpoint-campaign-defaultbuttonconfiguration-borderradius
         */
        readonly borderRadius?: number;
        /**
         * The action that occurs when a recipient chooses a button in an in-app message.
         *
         * You can specify one of the following:
         *
         * - `LINK` – A link to a web destination.
         * - `DEEP_LINK` – A link to a specific page in an application.
         * - `CLOSE` – Dismisses the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html#cfn-pinpoint-campaign-defaultbuttonconfiguration-buttonaction
         */
        readonly buttonAction?: string;
        /**
         * The destination (such as a URL) for a button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html#cfn-pinpoint-campaign-defaultbuttonconfiguration-link
         */
        readonly link?: string;
        /**
         * The text that appears on a button in an in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html#cfn-pinpoint-campaign-defaultbuttonconfiguration-text
         */
        readonly text?: string;
        /**
         * The color of the body text in a button, expressed as a hex color code (such as #000000 for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html#cfn-pinpoint-campaign-defaultbuttonconfiguration-textcolor
         */
        readonly textColor?: string;
    }
    /**
     * Specifies the configuration and content of the header or title text of the in-app message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessageheaderconfig.html
     */
    interface InAppMessageHeaderConfigProperty {
        /**
         * The text alignment of the title of the message.
         *
         * Acceptable values: `LEFT` , `CENTER` , `RIGHT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessageheaderconfig.html#cfn-pinpoint-campaign-inappmessageheaderconfig-alignment
         */
        readonly alignment?: string;
        /**
         * The header or title text of the in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessageheaderconfig.html#cfn-pinpoint-campaign-inappmessageheaderconfig-header
         */
        readonly header?: string;
        /**
         * The color of the body text, expressed as a string consisting of a hex color code (such as "#000000" for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessageheaderconfig.html#cfn-pinpoint-campaign-inappmessageheaderconfig-textcolor
         */
        readonly textColor?: string;
    }
    /**
     * Specifies the content and "From" address for an email message that's sent to recipients of a campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignemailmessage.html
     */
    interface CampaignEmailMessageProperty {
        /**
         * The body of the email for recipients whose email clients don't render HTML content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignemailmessage.html#cfn-pinpoint-campaign-campaignemailmessage-body
         */
        readonly body?: string;
        /**
         * The verified email address to send the email from.
         *
         * The default address is the `FromAddress` specified for the email channel for the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignemailmessage.html#cfn-pinpoint-campaign-campaignemailmessage-fromaddress
         */
        readonly fromAddress?: string;
        /**
         * The body of the email, in HTML format, for recipients whose email clients render HTML content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignemailmessage.html#cfn-pinpoint-campaign-campaignemailmessage-htmlbody
         */
        readonly htmlBody?: string;
        /**
         * The subject line, or title, of the email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignemailmessage.html#cfn-pinpoint-campaign-campaignemailmessage-title
         */
        readonly title?: string;
    }
    /**
     * Specifies the content and settings for an SMS message that's sent to recipients of a campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html
     */
    interface CampaignSmsMessageProperty {
        /**
         * The body of the SMS message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html#cfn-pinpoint-campaign-campaignsmsmessage-body
         */
        readonly body?: string;
        /**
         * The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html#cfn-pinpoint-campaign-campaignsmsmessage-entityid
         */
        readonly entityId?: string;
        /**
         * The SMS message type.
         *
         * Valid values are `TRANSACTIONAL` (for messages that are critical or time-sensitive, such as a one-time passwords) and `PROMOTIONAL` (for messsages that aren't critical or time-sensitive, such as marketing messages).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html#cfn-pinpoint-campaign-campaignsmsmessage-messagetype
         */
        readonly messageType?: string;
        /**
         * The long code to send the SMS message from.
         *
         * This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html#cfn-pinpoint-campaign-campaignsmsmessage-originationnumber
         */
        readonly originationNumber?: string;
        /**
         * The alphabetic Sender ID to display as the sender of the message on a recipient's device.
         *
         * Support for sender IDs varies by country or region. To specify a phone number as the sender, omit this parameter and use `OriginationNumber` instead. For more information about support for Sender ID by country, see the [Amazon Pinpoint User Guide](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-countries.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html#cfn-pinpoint-campaign-campaignsmsmessage-senderid
         */
        readonly senderId?: string;
        /**
         * The template ID received from the regulatory body for sending SMS in your country.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html#cfn-pinpoint-campaign-campaignsmsmessage-templateid
         */
        readonly templateId?: string;
    }
    /**
     * Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigncustommessage.html
     */
    interface CampaignCustomMessageProperty {
        /**
         * The raw, JSON-formatted string to use as the payload for the message.
         *
         * The maximum size is 5 KB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigncustommessage.html#cfn-pinpoint-campaign-campaigncustommessage-data
         */
        readonly data?: string;
    }
    /**
     * Specifies the schedule settings for a campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html
     */
    interface ScheduleProperty {
        /**
         * The scheduled time, in ISO 8601 format, when the campaign ended or will end.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html#cfn-pinpoint-campaign-schedule-endtime
         */
        readonly endTime?: string;
        /**
         * The type of event that causes the campaign to be sent, if the value of the `Frequency` property is `EVENT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html#cfn-pinpoint-campaign-schedule-eventfilter
         */
        readonly eventFilter?: CfnCampaign.CampaignEventFilterProperty | cdk.IResolvable;
        /**
         * Specifies how often the campaign is sent or whether the campaign is sent in response to a specific event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html#cfn-pinpoint-campaign-schedule-frequency
         */
        readonly frequency?: string;
        /**
         * Specifies whether the start and end times for the campaign schedule use each recipient's local time.
         *
         * To base the schedule on each recipient's local time, set this value to `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html#cfn-pinpoint-campaign-schedule-islocaltime
         */
        readonly isLocalTime?: boolean | cdk.IResolvable;
        /**
         * The default quiet time for the campaign.
         *
         * Quiet time is a specific time range when a campaign doesn't send messages to endpoints, if all the following conditions are met:
         *
         * - The `EndpointDemographic.Timezone` property of the endpoint is set to a valid value.
         * - The current time in the endpoint's time zone is later than or equal to the time specified by the `QuietTime.Start` property for the campaign.
         * - The current time in the endpoint's time zone is earlier than or equal to the time specified by the `QuietTime.End` property for the campaign.
         *
         * If any of the preceding conditions isn't met, the endpoint will receive messages from the campaign, even if quiet time is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html#cfn-pinpoint-campaign-schedule-quiettime
         */
        readonly quietTime?: cdk.IResolvable | CfnCampaign.QuietTimeProperty;
        /**
         * The scheduled time when the campaign began or will begin.
         *
         * Valid values are: `IMMEDIATE` , to start the campaign immediately; or, a specific time in ISO 8601 format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html#cfn-pinpoint-campaign-schedule-starttime
         */
        readonly startTime?: string;
        /**
         * The starting UTC offset for the campaign schedule, if the value of the `IsLocalTime` property is `true` .
         *
         * Valid values are: `UTC, UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05, UTC+05:30, UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+09, UTC+09:30, UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+13, UTC-02, UTC-03, UTC-04, UTC-05, UTC-06, UTC-07, UTC-08, UTC-09, UTC-10,` and `UTC-11` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html#cfn-pinpoint-campaign-schedule-timezone
         */
        readonly timeZone?: string;
    }
    /**
     * Specifies the start and end times that define a time range when messages aren't sent to endpoints.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-quiettime.html
     */
    interface QuietTimeProperty {
        /**
         * The specific time when quiet time ends.
         *
         * This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use `02:30` to represent 2:30 AM, or `14:30` to represent 2:30 PM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-quiettime.html#cfn-pinpoint-campaign-quiettime-end
         */
        readonly end: string;
        /**
         * The specific time when quiet time begins.
         *
         * This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use `02:30` to represent 2:30 AM, or `14:30` to represent 2:30 PM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-quiettime.html#cfn-pinpoint-campaign-quiettime-start
         */
        readonly start: string;
    }
    /**
     * Specifies the settings for events that cause a campaign to be sent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigneventfilter.html
     */
    interface CampaignEventFilterProperty {
        /**
         * The dimension settings of the event filter for the campaign.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigneventfilter.html#cfn-pinpoint-campaign-campaigneventfilter-dimensions
         */
        readonly dimensions?: CfnCampaign.EventDimensionsProperty | cdk.IResolvable;
        /**
         * The type of event that causes the campaign to be sent.
         *
         * Valid values are: `SYSTEM` , sends the campaign when a system event occurs; and, `ENDPOINT` , sends the campaign when an endpoint event (Events resource) occurs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigneventfilter.html#cfn-pinpoint-campaign-campaigneventfilter-filtertype
         */
        readonly filterType?: string;
    }
    /**
     * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-eventdimensions.html
     */
    interface EventDimensionsProperty {
        /**
         * One or more custom attributes that your application reports to Amazon Pinpoint.
         *
         * You can use these attributes as selection criteria when you create an event filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-eventdimensions.html#cfn-pinpoint-campaign-eventdimensions-attributes
         */
        readonly attributes?: any | cdk.IResolvable;
        /**
         * The name of the event that causes the campaign to be sent or the journey activity to be performed.
         *
         * This can be a standard event that Amazon Pinpoint generates, such as `_email.delivered` or `_custom.delivered` . For campaigns, this can also be a custom event that's specific to your application. For information about standard events, see [Streaming Amazon Pinpoint Events](https://docs.aws.amazon.com/pinpoint/latest/developerguide/event-streams.html) in the *Amazon Pinpoint Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-eventdimensions.html#cfn-pinpoint-campaign-eventdimensions-eventtype
         */
        readonly eventType?: cdk.IResolvable | CfnCampaign.SetDimensionProperty;
        /**
         * One or more custom metrics that your application reports to Amazon Pinpoint .
         *
         * You can use these metrics as selection criteria when you create an event filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-eventdimensions.html#cfn-pinpoint-campaign-eventdimensions-metrics
         */
        readonly metrics?: any | cdk.IResolvable;
    }
    /**
     * Specifies the dimension type and values for a segment dimension.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-setdimension.html
     */
    interface SetDimensionProperty {
        /**
         * The type of segment dimension to use.
         *
         * Valid values are: `INCLUSIVE` , endpoints that match the criteria are included in the segment; and, `EXCLUSIVE` , endpoints that match the criteria are excluded from the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-setdimension.html#cfn-pinpoint-campaign-setdimension-dimensiontype
         */
        readonly dimensionType?: string;
        /**
         * The criteria values to use for the segment dimension.
         *
         * Depending on the value of the `DimensionType` property, endpoints are included or excluded from the segment if their values match the criteria values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-setdimension.html#cfn-pinpoint-campaign-setdimension-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel.
     *
     * This object is required if you use the `CampaignCustomMessage` object to define the message to send for the campaign or campaign treatment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-customdeliveryconfiguration.html
     */
    interface CustomDeliveryConfigurationProperty {
        /**
         * The destination to send the campaign or treatment to. This value can be one of the following:.
         *
         * - The name or Amazon Resource Name (ARN) of an AWS Lambda function to invoke to handle delivery of the campaign or treatment.
         * - The URL for a web application or service that supports HTTPS and can receive the message. The URL has to be a full URL, including the HTTPS protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-customdeliveryconfiguration.html#cfn-pinpoint-campaign-customdeliveryconfiguration-deliveryuri
         */
        readonly deliveryUri?: string;
        /**
         * The types of endpoints to send the campaign or treatment to.
         *
         * Each valid value maps to a type of channel that you can associate with an endpoint by using the `ChannelType` property of an endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-customdeliveryconfiguration.html#cfn-pinpoint-campaign-customdeliveryconfiguration-endpointtypes
         */
        readonly endpointTypes?: Array<string>;
    }
    /**
     * Specifies the limits on the messages that a campaign can send.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-limits.html
     */
    interface LimitsProperty {
        /**
         * The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period.
         *
         * The maximum value is 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-limits.html#cfn-pinpoint-campaign-limits-daily
         */
        readonly daily?: number;
        /**
         * The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign.
         *
         * The minimum value is 60 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-limits.html#cfn-pinpoint-campaign-limits-maximumduration
         */
        readonly maximumDuration?: number;
        /**
         * The maximum number of messages that a campaign can send each second.
         *
         * The minimum value is 1. The maximum value is 20,000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-limits.html#cfn-pinpoint-campaign-limits-messagespersecond
         */
        readonly messagesPerSecond?: number;
        /**
         * The maximum number of messages that the campaign can send per user session.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-limits.html#cfn-pinpoint-campaign-limits-session
         */
        readonly session?: number;
        /**
         * The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign.
         *
         * The maximum value is 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-limits.html#cfn-pinpoint-campaign-limits-total
         */
        readonly total?: number;
    }
    /**
     * Specifies settings for invoking an Lambda function that customizes a segment for a campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignhook.html
     */
    interface CampaignHookProperty {
        /**
         * The name or Amazon Resource Name (ARN) of the Lambda function that Amazon Pinpoint invokes to customize a segment for a campaign.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignhook.html#cfn-pinpoint-campaign-campaignhook-lambdafunctionname
         */
        readonly lambdaFunctionName?: string;
        /**
         * The mode that Amazon Pinpoint uses to invoke the Lambda function. Possible values are:.
         *
         * - `FILTER` - Invoke the function to customize the segment that's used by a campaign.
         * - `DELIVERY` - (Deprecated) Previously, invoked the function to send a campaign through a custom channel. This functionality is not supported anymore. To send a campaign through a custom channel, use the `CustomDeliveryConfiguration` and `CampaignCustomMessage` objects of the campaign.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignhook.html#cfn-pinpoint-campaign-campaignhook-mode
         */
        readonly mode?: string;
        /**
         * The web URL that Amazon Pinpoint calls to invoke the Lambda function over HTTPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignhook.html#cfn-pinpoint-campaign-campaignhook-weburl
         */
        readonly webUrl?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-attributedimension.html
     */
    interface AttributeDimensionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-attributedimension.html#cfn-pinpoint-campaign-attributedimension-attributetype
         */
        readonly attributeType?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-attributedimension.html#cfn-pinpoint-campaign-attributedimension-values
         */
        readonly values?: Array<string>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-metricdimension.html
     */
    interface MetricDimensionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-metricdimension.html#cfn-pinpoint-campaign-metricdimension-comparisonoperator
         */
        readonly comparisonOperator?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-metricdimension.html#cfn-pinpoint-campaign-metricdimension-value
         */
        readonly value?: number;
    }
}
/**
 * Properties for defining a `CfnCampaign`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html
 */
export interface CfnCampaignProps {
    /**
     * An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-additionaltreatments
     */
    readonly additionalTreatments?: Array<cdk.IResolvable | CfnCampaign.WriteTreatmentResourceProperty> | cdk.IResolvable;
    /**
     * The unique identifier for the Amazon Pinpoint application that the campaign is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-applicationid
     */
    readonly applicationId: string;
    /**
     * Specifies the Lambda function to use as a code hook for a campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-campaignhook
     */
    readonly campaignHook?: CfnCampaign.CampaignHookProperty | cdk.IResolvable;
    /**
     * The delivery configuration settings for sending the treatment through a custom channel.
     *
     * This object is required if the `MessageConfiguration` object for the treatment specifies a `CustomMessage` object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-customdeliveryconfiguration
     */
    readonly customDeliveryConfiguration?: CfnCampaign.CustomDeliveryConfigurationProperty | cdk.IResolvable;
    /**
     * A custom description of the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-description
     */
    readonly description?: string;
    /**
     * The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-holdoutpercent
     */
    readonly holdoutPercent?: number;
    /**
     * Specifies whether to pause the campaign.
     *
     * A paused campaign doesn't run unless you resume it by changing this value to `false` . If you restart a campaign, the campaign restarts from the beginning and not at the point you paused it. If a campaign is running it will complete and then pause. Pause only pauses or skips the next run for a recurring future scheduled campaign. A campaign scheduled for immediate can't be paused.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-ispaused
     */
    readonly isPaused?: boolean | cdk.IResolvable;
    /**
     * The messaging limits for the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-limits
     */
    readonly limits?: cdk.IResolvable | CfnCampaign.LimitsProperty;
    /**
     * The message configuration settings for the treatment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-messageconfiguration
     */
    readonly messageConfiguration?: cdk.IResolvable | CfnCampaign.MessageConfigurationProperty;
    /**
     * The name of the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-name
     */
    readonly name: string;
    /**
     * An integer between 1 and 5, inclusive, that represents the priority of the in-app message campaign, where 1 is the highest priority and 5 is the lowest.
     *
     * If there are multiple messages scheduled to be displayed at the same time, the priority determines the order in which those messages are displayed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-priority
     */
    readonly priority?: number;
    /**
     * The schedule settings for the treatment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-schedule
     */
    readonly schedule: cdk.IResolvable | CfnCampaign.ScheduleProperty;
    /**
     * The unique identifier for the segment to associate with the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-segmentid
     */
    readonly segmentId: string;
    /**
     * The version of the segment to associate with the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-segmentversion
     */
    readonly segmentVersion?: number;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-tags
     */
    readonly tags?: any;
    /**
     * The message template to use for the treatment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-templateconfiguration
     */
    readonly templateConfiguration?: cdk.IResolvable | CfnCampaign.TemplateConfigurationProperty;
    /**
     * A custom description of the treatment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-treatmentdescription
     */
    readonly treatmentDescription?: string;
    /**
     * A custom name for the treatment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#cfn-pinpoint-campaign-treatmentname
     */
    readonly treatmentName?: string;
}
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * You can use the email channel to send email to users. Before you can use Amazon Pinpoint to send email, you must enable the email channel for an Amazon Pinpoint application.
 *
 * The EmailChannel resource represents the status, identity, and other settings of the email channel for an application
 *
 * @cloudformationResource AWS::Pinpoint::EmailChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html
 */
export declare class CfnEmailChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEmailChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEmailChannel;
    /**
     * (Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that you're specifying the email channel for.
     */
    applicationId: string;
    /**
     * The [Amazon SES configuration set](https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html) that you want to apply to messages that you send through the channel.
     */
    configurationSet?: string;
    /**
     * Specifies whether to enable the email channel for the application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The verified email address that you want to send email from when you send email through the channel.
     */
    fromAddress: string;
    /**
     * The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.
     */
    identity: string;
    /**
     * The ARN of an IAM role for Amazon Pinpoint to use to send email from your campaigns or journeys through Amazon SES .
     */
    orchestrationSendingRoleArn?: string;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.
     */
    roleArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEmailChannelProps);
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
 * Properties for defining a `CfnEmailChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html
 */
export interface CfnEmailChannelProps {
    /**
     * The unique identifier for the Amazon Pinpoint application that you're specifying the email channel for.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html#cfn-pinpoint-emailchannel-applicationid
     */
    readonly applicationId: string;
    /**
     * The [Amazon SES configuration set](https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html) that you want to apply to messages that you send through the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html#cfn-pinpoint-emailchannel-configurationset
     */
    readonly configurationSet?: string;
    /**
     * Specifies whether to enable the email channel for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html#cfn-pinpoint-emailchannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The verified email address that you want to send email from when you send email through the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html#cfn-pinpoint-emailchannel-fromaddress
     */
    readonly fromAddress: string;
    /**
     * The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html#cfn-pinpoint-emailchannel-identity
     */
    readonly identity: string;
    /**
     * The ARN of an IAM role for Amazon Pinpoint to use to send email from your campaigns or journeys through Amazon SES .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html#cfn-pinpoint-emailchannel-orchestrationsendingrolearn
     */
    readonly orchestrationSendingRoleArn?: string;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html#cfn-pinpoint-emailchannel-rolearn
     */
    readonly roleArn?: string;
}
/**
 * Creates a message template that you can use in messages that are sent through the email channel.
 *
 * A *message template* is a set of content and settings that you can define, save, and reuse in messages for any of your Amazon Pinpoint applications.
 *
 * @cloudformationResource AWS::Pinpoint::EmailTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html
 */
export declare class CfnEmailTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEmailTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEmailTemplate;
    /**
     * The Amazon Resource Name (ARN) of the message template.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A JSON object that specifies the default values to use for message variables in the message template.
     */
    defaultSubstitutions?: string;
    /**
     * The message body, in HTML format, to use in email messages that are based on the message template.
     */
    htmlPart?: string;
    /**
     * The subject line, or title, to use in email messages that are based on the message template.
     */
    subject: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * A custom description of the message template.
     */
    templateDescription?: string;
    /**
     * The name of the message template.
     */
    templateName: string;
    /**
     * The message body, in plain text format, to use in email messages that are based on the message template.
     */
    textPart?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEmailTemplateProps);
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
 * Properties for defining a `CfnEmailTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html
 */
export interface CfnEmailTemplateProps {
    /**
     * A JSON object that specifies the default values to use for message variables in the message template.
     *
     * This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html#cfn-pinpoint-emailtemplate-defaultsubstitutions
     */
    readonly defaultSubstitutions?: string;
    /**
     * The message body, in HTML format, to use in email messages that are based on the message template.
     *
     * We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html#cfn-pinpoint-emailtemplate-htmlpart
     */
    readonly htmlPart?: string;
    /**
     * The subject line, or title, to use in email messages that are based on the message template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html#cfn-pinpoint-emailtemplate-subject
     */
    readonly subject: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html#cfn-pinpoint-emailtemplate-tags
     */
    readonly tags?: any;
    /**
     * A custom description of the message template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html#cfn-pinpoint-emailtemplate-templatedescription
     */
    readonly templateDescription?: string;
    /**
     * The name of the message template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html#cfn-pinpoint-emailtemplate-templatename
     */
    readonly templateName: string;
    /**
     * The message body, in plain text format, to use in email messages that are based on the message template.
     *
     * We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailtemplate.html#cfn-pinpoint-emailtemplate-textpart
     */
    readonly textPart?: string;
}
/**
 * Creates a new event stream for an application or updates the settings of an existing event stream for an application.
 *
 * @cloudformationResource AWS::Pinpoint::EventStream
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html
 */
export declare class CfnEventStream extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventStream from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventStream;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that you want to export data from.
     */
    applicationId: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Stream or Amazon Data Firehose delivery stream that you want to publish event data to.
     */
    destinationStreamArn: string;
    /**
     * The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.
     */
    roleArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventStreamProps);
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
 * Properties for defining a `CfnEventStream`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html
 */
export interface CfnEventStreamProps {
    /**
     * The unique identifier for the Amazon Pinpoint application that you want to export data from.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html#cfn-pinpoint-eventstream-applicationid
     */
    readonly applicationId: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Stream or Amazon Data Firehose delivery stream that you want to publish event data to.
     *
     * For a Kinesis Data Stream, the ARN format is: `arn:aws:kinesis: region : account-id :stream/ stream_name`
     *
     * For a Firehose delivery stream, the ARN format is: `arn:aws:firehose: region : account-id :deliverystream/ stream_name`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html#cfn-pinpoint-eventstream-destinationstreamarn
     */
    readonly destinationStreamArn: string;
    /**
     * The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html#cfn-pinpoint-eventstream-rolearn
     */
    readonly roleArn: string;
}
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * You can use the GCM channel to send push notification messages to the Firebase Cloud Messaging (FCM) service, which replaced the Google Cloud Messaging (GCM) service. Before you use Amazon Pinpoint to send notifications to FCM, you have to enable the GCM channel for an Amazon Pinpoint application.
 *
 * The GCMChannel resource represents the status and authentication settings of the GCM channel for an application.
 *
 * @cloudformationResource AWS::Pinpoint::GCMChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-gcmchannel.html
 */
export declare class CfnGCMChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGCMChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGCMChannel;
    /**
     * (Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Web API key, also called the *server key* , that you received from Google to communicate with Google services.
     */
    apiKey?: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that the GCM channel applies to.
     */
    applicationId: string;
    /**
     * The default authentication method used for GCM.
     */
    defaultAuthenticationMethod?: string;
    /**
     * Specifies whether to enable the GCM channel for the Amazon Pinpoint application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The contents of the JSON file provided by Google during registration in order to generate an access token for authentication.
     */
    serviceJson?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGCMChannelProps);
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
 * Properties for defining a `CfnGCMChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-gcmchannel.html
 */
export interface CfnGCMChannelProps {
    /**
     * The Web API key, also called the *server key* , that you received from Google to communicate with Google services.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-gcmchannel.html#cfn-pinpoint-gcmchannel-apikey
     */
    readonly apiKey?: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that the GCM channel applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-gcmchannel.html#cfn-pinpoint-gcmchannel-applicationid
     */
    readonly applicationId: string;
    /**
     * The default authentication method used for GCM.
     *
     * Values are either "TOKEN" or "KEY". Defaults to "KEY".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-gcmchannel.html#cfn-pinpoint-gcmchannel-defaultauthenticationmethod
     */
    readonly defaultAuthenticationMethod?: string;
    /**
     * Specifies whether to enable the GCM channel for the Amazon Pinpoint application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-gcmchannel.html#cfn-pinpoint-gcmchannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The contents of the JSON file provided by Google during registration in order to generate an access token for authentication.
     *
     * For more information see [Migrate from legacy FCM APIs to HTTP v1](https://docs.aws.amazon.com/https://firebase.google.com/docs/cloud-messaging/migrate-v1) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-gcmchannel.html#cfn-pinpoint-gcmchannel-servicejson
     */
    readonly serviceJson?: string;
}
/**
 * Creates a message template that you can use to send in-app messages.
 *
 * A message template is a set of content and settings that you can define, save, and reuse in messages for any of your Amazon Pinpoint applications. The In-App channel is unavailable in AWS GovCloud (US).
 *
 * @cloudformationResource AWS::Pinpoint::InAppTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html
 */
export declare class CfnInAppTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInAppTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInAppTemplate;
    /**
     * The Amazon Resource Name (ARN) of the message template.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * An object that contains information about the content of an in-app message, including its title and body text, text colors, background colors, images, buttons, and behaviors.
     */
    content?: Array<CfnInAppTemplate.InAppMessageContentProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Custom data, in the form of key-value pairs, that is included in an in-app messaging payload.
     */
    customConfig?: any | cdk.IResolvable;
    /**
     * A string that determines the appearance of the in-app message. You can specify one of the following:.
     */
    layout?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * An optional description of the in-app template.
     */
    templateDescription?: string;
    /**
     * The name of the in-app message template.
     */
    templateName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInAppTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInAppTemplate {
    /**
     * Specifies the configuration of an in-app message, including its header, body, buttons, colors, and images.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html
     */
    interface InAppMessageContentProperty {
        /**
         * The background color for an in-app message banner, expressed as a hex color code (such as #000000 for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html#cfn-pinpoint-inapptemplate-inappmessagecontent-backgroundcolor
         */
        readonly backgroundColor?: string;
        /**
         * An object that contains configuration information about the header or title text of the in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html#cfn-pinpoint-inapptemplate-inappmessagecontent-bodyconfig
         */
        readonly bodyConfig?: CfnInAppTemplate.BodyConfigProperty | cdk.IResolvable;
        /**
         * An object that contains configuration information about the header or title text of the in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html#cfn-pinpoint-inapptemplate-inappmessagecontent-headerconfig
         */
        readonly headerConfig?: CfnInAppTemplate.HeaderConfigProperty | cdk.IResolvable;
        /**
         * The URL of the image that appears on an in-app message banner.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html#cfn-pinpoint-inapptemplate-inappmessagecontent-imageurl
         */
        readonly imageUrl?: string;
        /**
         * An object that contains configuration information about the primary button in an in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html#cfn-pinpoint-inapptemplate-inappmessagecontent-primarybtn
         */
        readonly primaryBtn?: CfnInAppTemplate.ButtonConfigProperty | cdk.IResolvable;
        /**
         * An object that contains configuration information about the secondary button in an in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html#cfn-pinpoint-inapptemplate-inappmessagecontent-secondarybtn
         */
        readonly secondaryBtn?: CfnInAppTemplate.ButtonConfigProperty | cdk.IResolvable;
    }
    /**
     * Specifies the configuration of the main body text of the in-app message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-bodyconfig.html
     */
    interface BodyConfigProperty {
        /**
         * The text alignment of the main body text of the message.
         *
         * Acceptable values: `LEFT` , `CENTER` , `RIGHT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-bodyconfig.html#cfn-pinpoint-inapptemplate-bodyconfig-alignment
         */
        readonly alignment?: string;
        /**
         * The main body text of the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-bodyconfig.html#cfn-pinpoint-inapptemplate-bodyconfig-body
         */
        readonly body?: string;
        /**
         * The color of the body text, expressed as a hex color code (such as #000000 for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-bodyconfig.html#cfn-pinpoint-inapptemplate-bodyconfig-textcolor
         */
        readonly textColor?: string;
    }
    /**
     * Specifies the behavior of buttons that appear in an in-app message template.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-buttonconfig.html
     */
    interface ButtonConfigProperty {
        /**
         * Optional button configuration to use for in-app messages sent to Android devices.
         *
         * This button configuration overrides the default button configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-buttonconfig.html#cfn-pinpoint-inapptemplate-buttonconfig-android
         */
        readonly android?: cdk.IResolvable | CfnInAppTemplate.OverrideButtonConfigurationProperty;
        /**
         * Specifies the default behavior of a button that appears in an in-app message.
         *
         * You can optionally add button configurations that specifically apply to iOS, Android, or web browser users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-buttonconfig.html#cfn-pinpoint-inapptemplate-buttonconfig-defaultconfig
         */
        readonly defaultConfig?: CfnInAppTemplate.DefaultButtonConfigurationProperty | cdk.IResolvable;
        /**
         * Optional button configuration to use for in-app messages sent to iOS devices.
         *
         * This button configuration overrides the default button configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-buttonconfig.html#cfn-pinpoint-inapptemplate-buttonconfig-ios
         */
        readonly ios?: cdk.IResolvable | CfnInAppTemplate.OverrideButtonConfigurationProperty;
        /**
         * Optional button configuration to use for in-app messages sent to web applications.
         *
         * This button configuration overrides the default button configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-buttonconfig.html#cfn-pinpoint-inapptemplate-buttonconfig-web
         */
        readonly web?: cdk.IResolvable | CfnInAppTemplate.OverrideButtonConfigurationProperty;
    }
    /**
     * Specifies the configuration of a button with settings that are specific to a certain device type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.html
     */
    interface OverrideButtonConfigurationProperty {
        /**
         * The action that occurs when a recipient chooses a button in an in-app message.
         *
         * You can specify one of the following:
         *
         * - `LINK` – A link to a web destination.
         * - `DEEP_LINK` – A link to a specific page in an application.
         * - `CLOSE` – Dismisses the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.html#cfn-pinpoint-inapptemplate-overridebuttonconfiguration-buttonaction
         */
        readonly buttonAction?: string;
        /**
         * The destination (such as a URL) for a button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.html#cfn-pinpoint-inapptemplate-overridebuttonconfiguration-link
         */
        readonly link?: string;
    }
    /**
     * Specifies the default behavior of a button that appears in an in-app message.
     *
     * You can optionally add button configurations that specifically apply to iOS, Android, or web browser users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html
     */
    interface DefaultButtonConfigurationProperty {
        /**
         * The background color of a button, expressed as a hex color code (such as #000000 for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-backgroundcolor
         */
        readonly backgroundColor?: string;
        /**
         * The border radius of a button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-borderradius
         */
        readonly borderRadius?: number;
        /**
         * The action that occurs when a recipient chooses a button in an in-app message.
         *
         * You can specify one of the following:
         *
         * - `LINK` – A link to a web destination.
         * - `DEEP_LINK` – A link to a specific page in an application.
         * - `CLOSE` – Dismisses the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-buttonaction
         */
        readonly buttonAction?: string;
        /**
         * The destination (such as a URL) for a button.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-link
         */
        readonly link?: string;
        /**
         * The text that appears on a button in an in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-text
         */
        readonly text?: string;
        /**
         * The color of the body text in a button, expressed as a hex color code (such as #000000 for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-textcolor
         */
        readonly textColor?: string;
    }
    /**
     * Specifies the configuration and content of the header or title text of the in-app message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-headerconfig.html
     */
    interface HeaderConfigProperty {
        /**
         * The text alignment of the title of the message.
         *
         * Acceptable values: `LEFT` , `CENTER` , `RIGHT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-headerconfig.html#cfn-pinpoint-inapptemplate-headerconfig-alignment
         */
        readonly alignment?: string;
        /**
         * The title text of the in-app message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-headerconfig.html#cfn-pinpoint-inapptemplate-headerconfig-header
         */
        readonly header?: string;
        /**
         * The color of the title text, expressed as a hex color code (such as #000000 for black).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-headerconfig.html#cfn-pinpoint-inapptemplate-headerconfig-textcolor
         */
        readonly textColor?: string;
    }
}
/**
 * Properties for defining a `CfnInAppTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html
 */
export interface CfnInAppTemplateProps {
    /**
     * An object that contains information about the content of an in-app message, including its title and body text, text colors, background colors, images, buttons, and behaviors.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-content
     */
    readonly content?: Array<CfnInAppTemplate.InAppMessageContentProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Custom data, in the form of key-value pairs, that is included in an in-app messaging payload.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-customconfig
     */
    readonly customConfig?: any | cdk.IResolvable;
    /**
     * A string that determines the appearance of the in-app message. You can specify one of the following:.
     *
     * - `BOTTOM_BANNER` – a message that appears as a banner at the bottom of the page.
     * - `TOP_BANNER` – a message that appears as a banner at the top of the page.
     * - `OVERLAYS` – a message that covers entire screen.
     * - `MOBILE_FEED` – a message that appears in a window in front of the page.
     * - `MIDDLE_BANNER` – a message that appears as a banner in the middle of the page.
     * - `CAROUSEL` – a scrollable layout of up to five unique messages.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-layout
     */
    readonly layout?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-tags
     */
    readonly tags?: any;
    /**
     * An optional description of the in-app template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-templatedescription
     */
    readonly templateDescription?: string;
    /**
     * The name of the in-app message template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-templatename
     */
    readonly templateName: string;
}
/**
 * Creates a message template that you can use in messages that are sent through a push notification channel.
 *
 * A *message template* is a set of content and settings that you can define, save, and reuse in messages for any of your Amazon Pinpoint applications.
 *
 * @cloudformationResource AWS::Pinpoint::PushTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html
 */
export declare class CfnPushTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPushTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPushTemplate;
    /**
     * The Amazon Resource Name (ARN) of the message template.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The message template to use for the ADM (Amazon Device Messaging) channel.
     */
    adm?: CfnPushTemplate.AndroidPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * The message template to use for the APNs (Apple Push Notification service) channel.
     */
    apns?: CfnPushTemplate.APNSPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * The message template to use for the Baidu (Baidu Cloud Push) channel.
     */
    baidu?: CfnPushTemplate.AndroidPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * The default message template to use for push notification channels.
     */
    default?: CfnPushTemplate.DefaultPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * A JSON object that specifies the default values to use for message variables in the message template.
     */
    defaultSubstitutions?: string;
    /**
     * The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
     */
    gcm?: CfnPushTemplate.AndroidPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * A custom description of the message template.
     */
    templateDescription?: string;
    /**
     * The name of the message template to use for the message.
     */
    templateName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPushTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPushTemplate {
    /**
     * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html
     */
    interface AndroidPushNotificationTemplateProperty {
        /**
         * The action to occur if a recipient taps a push notification that's based on the message template.
         *
         * Valid values are:
         *
         * - `OPEN_APP` – Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
         * - `DEEP_LINK` – Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.
         * - `URL` – The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-androidpushnotificationtemplate-action
         */
        readonly action?: string;
        /**
         * The message body to use in a push notification that's based on the message template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-androidpushnotificationtemplate-body
         */
        readonly body?: string;
        /**
         * The URL of the large icon image to display in the content view of a push notification that's based on the message template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-androidpushnotificationtemplate-imageiconurl
         */
        readonly imageIconUrl?: string;
        /**
         * The URL of an image to display in a push notification that's based on the message template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-androidpushnotificationtemplate-imageurl
         */
        readonly imageUrl?: string;
        /**
         * The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-androidpushnotificationtemplate-smallimageiconurl
         */
        readonly smallImageIconUrl?: string;
        /**
         * The sound to play when a recipient receives a push notification that's based on the message template.
         *
         * You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in `/res/raw/` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-androidpushnotificationtemplate-sound
         */
        readonly sound?: string;
        /**
         * The title to use in a push notification that's based on the message template.
         *
         * This title appears above the notification message on a recipient's device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-androidpushnotificationtemplate-title
         */
        readonly title?: string;
        /**
         * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `Action` property is `URL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-androidpushnotificationtemplate-url
         */
        readonly url?: string;
    }
    /**
     * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html
     */
    interface APNSPushNotificationTemplateProperty {
        /**
         * The action to occur if a recipient taps a push notification that's based on the message template.
         *
         * Valid values are:
         *
         * - `OPEN_APP` – Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
         * - `DEEP_LINK` – Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.
         * - `URL` – The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html#cfn-pinpoint-pushtemplate-apnspushnotificationtemplate-action
         */
        readonly action?: string;
        /**
         * The message body to use in push notifications that are based on the message template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html#cfn-pinpoint-pushtemplate-apnspushnotificationtemplate-body
         */
        readonly body?: string;
        /**
         * The URL of an image or video to display in push notifications that are based on the message template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html#cfn-pinpoint-pushtemplate-apnspushnotificationtemplate-mediaurl
         */
        readonly mediaUrl?: string;
        /**
         * The key for the sound to play when the recipient receives a push notification that's based on the message template.
         *
         * The value for this key is the name of a sound file in your app's main bundle or the `Library/Sounds` folder in your app's data container. If the sound file can't be found or you specify `default` for the value, the system plays the default alert sound.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html#cfn-pinpoint-pushtemplate-apnspushnotificationtemplate-sound
         */
        readonly sound?: string;
        /**
         * The title to use in push notifications that are based on the message template.
         *
         * This title appears above the notification message on a recipient's device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html#cfn-pinpoint-pushtemplate-apnspushnotificationtemplate-title
         */
        readonly title?: string;
        /**
         * The URL to open in the recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `Action` property is `URL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html#cfn-pinpoint-pushtemplate-apnspushnotificationtemplate-url
         */
        readonly url?: string;
    }
    /**
     * Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.html
     */
    interface DefaultPushNotificationTemplateProperty {
        /**
         * The action to occur if a recipient taps a push notification that's based on the message template.
         *
         * Valid values are:
         *
         * - `OPEN_APP` – Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.
         * - `DEEP_LINK` – Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.
         * - `URL` – The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-defaultpushnotificationtemplate-action
         */
        readonly action?: string;
        /**
         * The message body to use in push notifications that are based on the message template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-defaultpushnotificationtemplate-body
         */
        readonly body?: string;
        /**
         * The sound to play when a recipient receives a push notification that's based on the message template.
         *
         * You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in `/res/raw/` .
         *
         * For an iOS platform, this value is the key for the name of a sound file in your app's main bundle or the `Library/Sounds` folder in your app's data container. If the sound file can't be found or you specify `default` for the value, the system plays the default alert sound.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-defaultpushnotificationtemplate-sound
         */
        readonly sound?: string;
        /**
         * The title to use in push notifications that are based on the message template.
         *
         * This title appears above the notification message on a recipient's device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-defaultpushnotificationtemplate-title
         */
        readonly title?: string;
        /**
         * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `Action` property is `URL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.html#cfn-pinpoint-pushtemplate-defaultpushnotificationtemplate-url
         */
        readonly url?: string;
    }
}
/**
 * Properties for defining a `CfnPushTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html
 */
export interface CfnPushTemplateProps {
    /**
     * The message template to use for the ADM (Amazon Device Messaging) channel.
     *
     * This message template overrides the default template for push notification channels ( `Default` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#cfn-pinpoint-pushtemplate-adm
     */
    readonly adm?: CfnPushTemplate.AndroidPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * The message template to use for the APNs (Apple Push Notification service) channel.
     *
     * This message template overrides the default template for push notification channels ( `Default` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#cfn-pinpoint-pushtemplate-apns
     */
    readonly apns?: CfnPushTemplate.APNSPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * The message template to use for the Baidu (Baidu Cloud Push) channel.
     *
     * This message template overrides the default template for push notification channels ( `Default` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#cfn-pinpoint-pushtemplate-baidu
     */
    readonly baidu?: CfnPushTemplate.AndroidPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * The default message template to use for push notification channels.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#cfn-pinpoint-pushtemplate-default
     */
    readonly default?: CfnPushTemplate.DefaultPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * A JSON object that specifies the default values to use for message variables in the message template.
     *
     * This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#cfn-pinpoint-pushtemplate-defaultsubstitutions
     */
    readonly defaultSubstitutions?: string;
    /**
     * The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
     *
     * This message template overrides the default template for push notification channels ( `Default` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#cfn-pinpoint-pushtemplate-gcm
     */
    readonly gcm?: CfnPushTemplate.AndroidPushNotificationTemplateProperty | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#cfn-pinpoint-pushtemplate-tags
     */
    readonly tags?: any;
    /**
     * A custom description of the message template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#cfn-pinpoint-pushtemplate-templatedescription
     */
    readonly templateDescription?: string;
    /**
     * The name of the message template to use for the message.
     *
     * If specified, this value must match the name of an existing message template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html#cfn-pinpoint-pushtemplate-templatename
     */
    readonly templateName: string;
}
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * To send an SMS text message, you send the message through the SMS channel. Before you can use Amazon Pinpoint to send text messages, you have to enable the SMS channel for an Amazon Pinpoint application.
 *
 * The SMSChannel resource represents the status, sender ID, and other settings for the SMS channel for an application.
 *
 * @cloudformationResource AWS::Pinpoint::SMSChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html
 */
export declare class CfnSMSChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSMSChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSMSChannel;
    /**
     * (Deprecated) An identifier for the SMS channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that the SMS channel applies to.
     */
    applicationId: string;
    /**
     * Specifies whether to enable the SMS channel for the application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The identity that you want to display on recipients' devices when they receive messages from the SMS channel.
     */
    senderId?: string;
    /**
     * The registered short code that you want to use when you send messages through the SMS channel.
     */
    shortCode?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSMSChannelProps);
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
 * Properties for defining a `CfnSMSChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html
 */
export interface CfnSMSChannelProps {
    /**
     * The unique identifier for the Amazon Pinpoint application that the SMS channel applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html#cfn-pinpoint-smschannel-applicationid
     */
    readonly applicationId: string;
    /**
     * Specifies whether to enable the SMS channel for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html#cfn-pinpoint-smschannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The identity that you want to display on recipients' devices when they receive messages from the SMS channel.
     *
     * > SenderIDs are only supported in certain countries and regions. For more information, see [Supported Countries and Regions](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-countries.html) in the *Amazon Pinpoint User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html#cfn-pinpoint-smschannel-senderid
     */
    readonly senderId?: string;
    /**
     * The registered short code that you want to use when you send messages through the SMS channel.
     *
     * > For information about obtaining a dedicated short code for sending SMS messages, see [Requesting Dedicated Short Codes for SMS Messaging with Amazon Pinpoint](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-short-code.html) in the *Amazon Pinpoint User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html#cfn-pinpoint-smschannel-shortcode
     */
    readonly shortCode?: string;
}
/**
 * Updates the configuration, dimension, and other settings for an existing segment.
 *
 * @cloudformationResource AWS::Pinpoint::Segment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html
 */
export declare class CfnSegment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSegment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSegment;
    /**
     * The Amazon Resource Name (ARN) of the segment.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier for the segment.
     *
     * @cloudformationAttribute SegmentId
     */
    readonly attrSegmentId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that the segment is associated with.
     */
    applicationId: string;
    /**
     * An array that defines the dimensions for the segment.
     */
    dimensions?: cdk.IResolvable | CfnSegment.SegmentDimensionsProperty;
    /**
     * The name of the segment.
     */
    name: string;
    /**
     * The segment group to use and the dimensions to apply to the group's base segments in order to build the segment.
     */
    segmentGroups?: cdk.IResolvable | CfnSegment.SegmentGroupsProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSegmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSegment {
    /**
     * Specifies the set of segment criteria to evaluate when handling segment groups for the segment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups.html
     */
    interface SegmentGroupsProperty {
        /**
         * Specifies the set of segment criteria to evaluate when handling segment groups for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups.html#cfn-pinpoint-segment-segmentgroups-groups
         */
        readonly groups?: Array<CfnSegment.GroupsProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies how to handle multiple segment groups for the segment.
         *
         * For example, if the segment includes three segment groups, whether the resulting segment includes endpoints that match all, any, or none of the segment groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups.html#cfn-pinpoint-segment-segmentgroups-include
         */
        readonly include?: string;
    }
    /**
     * An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-groups.html
     */
    interface GroupsProperty {
        /**
         * An array that defines the dimensions to include or exclude from the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-groups.html#cfn-pinpoint-segment-groups-dimensions
         */
        readonly dimensions?: Array<cdk.IResolvable | CfnSegment.SegmentDimensionsProperty> | cdk.IResolvable;
        /**
         * The base segment to build the segment on.
         *
         * A base segment, also called a *source segment* , defines the initial population of endpoints for a segment. When you add dimensions to the segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify.
         *
         * You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the segment size estimate that displays on the Amazon Pinpoint console indicates the size of the imported segment without any filters applied to it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-groups.html#cfn-pinpoint-segment-groups-sourcesegments
         */
        readonly sourceSegments?: Array<cdk.IResolvable | CfnSegment.SourceSegmentsProperty> | cdk.IResolvable;
        /**
         * Specifies how to handle multiple base segments for the segment.
         *
         * For example, if you specify three base segments for the segment, whether the resulting segment is based on all, any, or none of the base segments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-groups.html#cfn-pinpoint-segment-groups-sourcetype
         */
        readonly sourceType?: string;
        /**
         * Specifies how to handle multiple dimensions for the segment.
         *
         * For example, if you specify three dimensions for the segment, whether the resulting segment includes endpoints that match all, any, or none of the dimensions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-groups.html#cfn-pinpoint-segment-groups-type
         */
        readonly type?: string;
    }
    /**
     * Specifies the dimension settings for a segment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html
     */
    interface SegmentDimensionsProperty {
        /**
         * One or more custom attributes to use as criteria for the segment.
         *
         * For more information see [AttributeDimension](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-segments.html#apps-application-id-segments-model-attributedimension)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html#cfn-pinpoint-segment-segmentdimensions-attributes
         */
        readonly attributes?: any | cdk.IResolvable;
        /**
         * The behavior-based criteria, such as how recently users have used your app, for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html#cfn-pinpoint-segment-segmentdimensions-behavior
         */
        readonly behavior?: CfnSegment.BehaviorProperty | cdk.IResolvable;
        /**
         * The demographic-based criteria, such as device platform, for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html#cfn-pinpoint-segment-segmentdimensions-demographic
         */
        readonly demographic?: CfnSegment.DemographicProperty | cdk.IResolvable;
        /**
         * The location-based criteria, such as region or GPS coordinates, for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html#cfn-pinpoint-segment-segmentdimensions-location
         */
        readonly location?: cdk.IResolvable | CfnSegment.LocationProperty;
        /**
         * One or more custom metrics to use as criteria for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html#cfn-pinpoint-segment-segmentdimensions-metrics
         */
        readonly metrics?: any | cdk.IResolvable;
        /**
         * One or more custom user attributes to use as criteria for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html#cfn-pinpoint-segment-segmentdimensions-userattributes
         */
        readonly userAttributes?: any | cdk.IResolvable;
    }
    /**
     * Specifies demographic-based criteria, such as device platform, for the segment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-demographic.html
     */
    interface DemographicProperty {
        /**
         * The app version criteria for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-demographic.html#cfn-pinpoint-segment-demographic-appversion
         */
        readonly appVersion?: cdk.IResolvable | CfnSegment.SetDimensionProperty;
        /**
         * The channel criteria for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-demographic.html#cfn-pinpoint-segment-demographic-channel
         */
        readonly channel?: cdk.IResolvable | CfnSegment.SetDimensionProperty;
        /**
         * The device type criteria for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-demographic.html#cfn-pinpoint-segment-demographic-devicetype
         */
        readonly deviceType?: cdk.IResolvable | CfnSegment.SetDimensionProperty;
        /**
         * The device make criteria for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-demographic.html#cfn-pinpoint-segment-demographic-make
         */
        readonly make?: cdk.IResolvable | CfnSegment.SetDimensionProperty;
        /**
         * The device model criteria for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-demographic.html#cfn-pinpoint-segment-demographic-model
         */
        readonly model?: cdk.IResolvable | CfnSegment.SetDimensionProperty;
        /**
         * The device platform criteria for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-demographic.html#cfn-pinpoint-segment-demographic-platform
         */
        readonly platform?: cdk.IResolvable | CfnSegment.SetDimensionProperty;
    }
    /**
     * Specifies the dimension type and values for a segment dimension.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-setdimension.html
     */
    interface SetDimensionProperty {
        /**
         * The type of segment dimension to use.
         *
         * Valid values are: `INCLUSIVE` , endpoints that match the criteria are included in the segment; and, `EXCLUSIVE` , endpoints that match the criteria are excluded from the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-setdimension.html#cfn-pinpoint-segment-setdimension-dimensiontype
         */
        readonly dimensionType?: string;
        /**
         * The criteria values to use for the segment dimension.
         *
         * Depending on the value of the `DimensionType` property, endpoints are included or excluded from the segment if their values match the criteria values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-setdimension.html#cfn-pinpoint-segment-setdimension-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Specifies behavior-based criteria for the segment, such as how recently users have used your app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-behavior.html
     */
    interface BehaviorProperty {
        /**
         * Specifies how recently segment members were active.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-behavior.html#cfn-pinpoint-segment-behavior-recency
         */
        readonly recency?: cdk.IResolvable | CfnSegment.RecencyProperty;
    }
    /**
     * Specifies how recently segment members were active.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-recency.html
     */
    interface RecencyProperty {
        /**
         * The duration to use when determining which users have been active or inactive with your app.
         *
         * Possible values: `HR_24` | `DAY_7` | `DAY_14` | `DAY_30` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-recency.html#cfn-pinpoint-segment-recency-duration
         */
        readonly duration: string;
        /**
         * The type of recency dimension to use for the segment.
         *
         * Valid values are: `ACTIVE` and `INACTIVE` . If the value is `ACTIVE` , the segment includes users who have used your app within the specified duration are included in the segment. If the value is `INACTIVE` , the segment includes users who haven't used your app within the specified duration are included in the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-recency.html#cfn-pinpoint-segment-recency-recencytype
         */
        readonly recencyType: string;
    }
    /**
     * Specifies location-based criteria, such as region or GPS coordinates, for the segment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-location.html
     */
    interface LocationProperty {
        /**
         * The country or region code, in ISO 3166-1 alpha-2 format, for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-location.html#cfn-pinpoint-segment-location-country
         */
        readonly country?: cdk.IResolvable | CfnSegment.SetDimensionProperty;
        /**
         * The GPS point dimension for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-location.html#cfn-pinpoint-segment-location-gpspoint
         */
        readonly gpsPoint?: CfnSegment.GPSPointProperty | cdk.IResolvable;
    }
    /**
     * Specifies the GPS coordinates of the endpoint location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-gpspoint.html
     */
    interface GPSPointProperty {
        /**
         * The GPS coordinates to measure distance from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-gpspoint.html#cfn-pinpoint-segment-gpspoint-coordinates
         */
        readonly coordinates: CfnSegment.CoordinatesProperty | cdk.IResolvable;
        /**
         * The range, in kilometers, from the GPS coordinates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-gpspoint.html#cfn-pinpoint-segment-gpspoint-rangeinkilometers
         */
        readonly rangeInKilometers: number;
    }
    /**
     * Specifies the GPS coordinates of a location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-coordinates.html
     */
    interface CoordinatesProperty {
        /**
         * The latitude coordinate of the location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-coordinates.html#cfn-pinpoint-segment-coordinates-latitude
         */
        readonly latitude: number;
        /**
         * The longitude coordinate of the location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-coordinates.html#cfn-pinpoint-segment-coordinates-longitude
         */
        readonly longitude: number;
    }
    /**
     * Specifies the base segment to build the segment on.
     *
     * A base segment, also called a *source segment* , defines the initial population of endpoints for a segment. When you add dimensions to the segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify.
     *
     * You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the segment size estimate that displays on the Amazon Pinpoint console indicates the size of the imported segment without any filters applied to it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-sourcesegments.html
     */
    interface SourceSegmentsProperty {
        /**
         * The unique identifier for the source segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-sourcesegments.html#cfn-pinpoint-segment-sourcesegments-id
         */
        readonly id: string;
        /**
         * The version number of the source segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-sourcesegments.html#cfn-pinpoint-segment-sourcesegments-version
         */
        readonly version?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-attributedimension.html
     */
    interface AttributeDimensionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-attributedimension.html#cfn-pinpoint-segment-attributedimension-attributetype
         */
        readonly attributeType?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-attributedimension.html#cfn-pinpoint-segment-attributedimension-values
         */
        readonly values?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnSegment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html
 */
export interface CfnSegmentProps {
    /**
     * The unique identifier for the Amazon Pinpoint application that the segment is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html#cfn-pinpoint-segment-applicationid
     */
    readonly applicationId: string;
    /**
     * An array that defines the dimensions for the segment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html#cfn-pinpoint-segment-dimensions
     */
    readonly dimensions?: cdk.IResolvable | CfnSegment.SegmentDimensionsProperty;
    /**
     * The name of the segment.
     *
     * > A segment must have a name otherwise it will not appear in the Amazon Pinpoint console.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html#cfn-pinpoint-segment-name
     */
    readonly name: string;
    /**
     * The segment group to use and the dimensions to apply to the group's base segments in order to build the segment.
     *
     * A segment group can consist of zero or more base segments. Your request can include only one segment group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html#cfn-pinpoint-segment-segmentgroups
     */
    readonly segmentGroups?: cdk.IResolvable | CfnSegment.SegmentGroupsProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html#cfn-pinpoint-segment-tags
     */
    readonly tags?: any;
}
/**
 * Creates a message template that you can use in messages that are sent through the SMS channel.
 *
 * A *message template* is a set of content and settings that you can define, save, and reuse in messages for any of your Amazon Pinpoint applications.
 *
 * @cloudformationResource AWS::Pinpoint::SmsTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html
 */
export declare class CfnSmsTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSmsTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSmsTemplate;
    /**
     * The Amazon Resource Name (ARN) of the message template.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The message body to use in text messages that are based on the message template.
     */
    body: string;
    /**
     * A JSON object that specifies the default values to use for message variables in the message template.
     */
    defaultSubstitutions?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * A custom description of the message template.
     */
    templateDescription?: string;
    /**
     * The name of the message template to use for the message.
     */
    templateName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSmsTemplateProps);
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
 * Properties for defining a `CfnSmsTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html
 */
export interface CfnSmsTemplateProps {
    /**
     * The message body to use in text messages that are based on the message template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html#cfn-pinpoint-smstemplate-body
     */
    readonly body: string;
    /**
     * A JSON object that specifies the default values to use for message variables in the message template.
     *
     * This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html#cfn-pinpoint-smstemplate-defaultsubstitutions
     */
    readonly defaultSubstitutions?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html#cfn-pinpoint-smstemplate-tags
     */
    readonly tags?: any;
    /**
     * A custom description of the message template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html#cfn-pinpoint-smstemplate-templatedescription
     */
    readonly templateDescription?: string;
    /**
     * The name of the message template to use for the message.
     *
     * If specified, this value must match the name of an existing message template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smstemplate.html#cfn-pinpoint-smstemplate-templatename
     */
    readonly templateName: string;
}
/**
 * A *channel* is a type of platform that you can deliver messages to.
 *
 * To send a voice message, you send the message through the voice channel. Before you can use Amazon Pinpoint to send voice messages, you have to enable the voice channel for an Amazon Pinpoint application.
 *
 * The VoiceChannel resource represents the status and other information about the voice channel for an application.
 *
 * @cloudformationResource AWS::Pinpoint::VoiceChannel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-voicechannel.html
 */
export declare class CfnVoiceChannel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVoiceChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVoiceChannel;
    /**
     * (Deprecated) An identifier for the voice channel. This property is retained only for backward compatibility.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier for the Amazon Pinpoint application that the voice channel applies to.
     */
    applicationId: string;
    /**
     * Specifies whether to enable the voice channel for the application.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVoiceChannelProps);
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
 * Properties for defining a `CfnVoiceChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-voicechannel.html
 */
export interface CfnVoiceChannelProps {
    /**
     * The unique identifier for the Amazon Pinpoint application that the voice channel applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-voicechannel.html#cfn-pinpoint-voicechannel-applicationid
     */
    readonly applicationId: string;
    /**
     * Specifies whether to enable the voice channel for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-voicechannel.html#cfn-pinpoint-voicechannel-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
}
