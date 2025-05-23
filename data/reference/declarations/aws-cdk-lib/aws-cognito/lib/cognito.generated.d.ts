import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Cognito::IdentityPool` resource creates an Amazon Cognito identity pool.
 *
 * To avoid deleting the resource accidentally from AWS CloudFormation , use [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) and the [UpdateReplacePolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html) to retain the resource on deletion or replacement.
 *
 * @cloudformationResource AWS::Cognito::IdentityPool
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html
 */
export declare class CfnIdentityPool extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIdentityPool from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIdentityPool;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the Amazon Cognito identity pool, returned as a string.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Enables the Basic (Classic) authentication flow.
     */
    allowClassicFlow?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the identity pool supports unauthenticated logins.
     */
    allowUnauthenticatedIdentities: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The events to configure.
     */
    cognitoEvents?: any | cdk.IResolvable;
    /**
     * The Amazon Cognito user pools and their client IDs.
     */
    cognitoIdentityProviders?: Array<CfnIdentityPool.CognitoIdentityProviderProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Configuration options for configuring Amazon Cognito streams.
     */
    cognitoStreams?: CfnIdentityPool.CognitoStreamsProperty | cdk.IResolvable;
    /**
     * The "domain" Amazon Cognito uses when referencing your users.
     */
    developerProviderName?: string;
    /**
     * The name of your Amazon Cognito identity pool.
     */
    identityPoolName?: string;
    /**
     * Tags to assign to the identity pool.
     */
    identityPoolTags?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Names (ARNs) of the OpenID connect providers.
     */
    openIdConnectProviderArns?: Array<string>;
    /**
     * The configuration options to be applied to the identity pool.
     */
    pushSync?: cdk.IResolvable | CfnIdentityPool.PushSyncProperty;
    /**
     * The Amazon Resource Names (ARNs) of the Security Assertion Markup Language (SAML) providers.
     */
    samlProviderArns?: Array<string>;
    /**
     * Key-value pairs that map provider names to provider app IDs.
     */
    supportedLoginProviders?: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIdentityPoolProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIdentityPool {
    /**
     * `PushSync` is a property of the [AWS::Cognito::IdentityPool](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html) resource that defines the configuration options to be applied to an Amazon Cognito identity pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-pushsync.html
     */
    interface PushSyncProperty {
        /**
         * The ARNs of the Amazon SNS platform applications that could be used by clients.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-pushsync.html#cfn-cognito-identitypool-pushsync-applicationarns
         */
        readonly applicationArns?: Array<string>;
        /**
         * An IAM role configured to allow Amazon Cognito to call Amazon SNS on behalf of the developer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-pushsync.html#cfn-cognito-identitypool-pushsync-rolearn
         */
        readonly roleArn?: string;
    }
    /**
     * `CognitoIdentityProvider` is a property of the [AWS::Cognito::IdentityPool](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html) resource that represents an Amazon Cognito user pool and its client ID.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitoidentityprovider.html
     */
    interface CognitoIdentityProviderProperty {
        /**
         * The client ID for the Amazon Cognito user pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitoidentityprovider.html#cfn-cognito-identitypool-cognitoidentityprovider-clientid
         */
        readonly clientId: string;
        /**
         * The provider name for an Amazon Cognito user pool.
         *
         * For example: `cognito-idp.us-east-2.amazonaws.com/us-east-2_123456789` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitoidentityprovider.html#cfn-cognito-identitypool-cognitoidentityprovider-providername
         */
        readonly providerName: string;
        /**
         * TRUE if server-side token validation is enabled for the identity provider’s token.
         *
         * After you set the `ServerSideTokenCheck` to TRUE for an identity pool, that identity pool checks with the integrated user pools to make sure the user has not been globally signed out or deleted before the identity pool provides an OIDC token or AWS credentials for the user.
         *
         * If the user is signed out or deleted, the identity pool returns a 400 Not Authorized error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitoidentityprovider.html#cfn-cognito-identitypool-cognitoidentityprovider-serversidetokencheck
         */
        readonly serverSideTokenCheck?: boolean | cdk.IResolvable;
    }
    /**
     * `CognitoStreams` is a property of the [AWS::Cognito::IdentityPool](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html) resource that defines configuration options for Amazon Cognito streams.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitostreams.html
     */
    interface CognitoStreamsProperty {
        /**
         * The Amazon Resource Name (ARN) of the role Amazon Cognito can assume to publish to the stream.
         *
         * This role must grant access to Amazon Cognito (cognito-sync) to invoke `PutRecord` on your Amazon Cognito stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitostreams.html#cfn-cognito-identitypool-cognitostreams-rolearn
         */
        readonly roleArn?: string;
        /**
         * Status of the Amazon Cognito streams.
         *
         * Valid values are: `ENABLED` or `DISABLED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitostreams.html#cfn-cognito-identitypool-cognitostreams-streamingstatus
         */
        readonly streamingStatus?: string;
        /**
         * The name of the Amazon Cognito stream to receive updates.
         *
         * This stream must be in the developer's account and in the same Region as the identity pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitostreams.html#cfn-cognito-identitypool-cognitostreams-streamname
         */
        readonly streamName?: string;
    }
}
/**
 * Properties for defining a `CfnIdentityPool`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html
 */
export interface CfnIdentityPoolProps {
    /**
     * Enables the Basic (Classic) authentication flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-allowclassicflow
     */
    readonly allowClassicFlow?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the identity pool supports unauthenticated logins.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-allowunauthenticatedidentities
     */
    readonly allowUnauthenticatedIdentities: boolean | cdk.IResolvable;
    /**
     * The events to configure.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-cognitoevents
     */
    readonly cognitoEvents?: any | cdk.IResolvable;
    /**
     * The Amazon Cognito user pools and their client IDs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-cognitoidentityproviders
     */
    readonly cognitoIdentityProviders?: Array<CfnIdentityPool.CognitoIdentityProviderProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Configuration options for configuring Amazon Cognito streams.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-cognitostreams
     */
    readonly cognitoStreams?: CfnIdentityPool.CognitoStreamsProperty | cdk.IResolvable;
    /**
     * The "domain" Amazon Cognito uses when referencing your users.
     *
     * This name acts as a placeholder that allows your backend and the Amazon Cognito service to communicate about the developer provider. For the `DeveloperProviderName` , you can use letters and periods (.), underscores (_), and dashes (-).
     *
     * *Minimum length* : 1
     *
     * *Maximum length* : 100
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-developerprovidername
     */
    readonly developerProviderName?: string;
    /**
     * The name of your Amazon Cognito identity pool.
     *
     * *Minimum length* : 1
     *
     * *Maximum length* : 128
     *
     * *Pattern* : `[\w\s+=,.@-]+`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-identitypoolname
     */
    readonly identityPoolName?: string;
    /**
     * Tags to assign to the identity pool.
     *
     * A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-identitypooltags
     */
    readonly identityPoolTags?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Names (ARNs) of the OpenID connect providers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-openidconnectproviderarns
     */
    readonly openIdConnectProviderArns?: Array<string>;
    /**
     * The configuration options to be applied to the identity pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-pushsync
     */
    readonly pushSync?: cdk.IResolvable | CfnIdentityPool.PushSyncProperty;
    /**
     * The Amazon Resource Names (ARNs) of the Security Assertion Markup Language (SAML) providers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-samlproviderarns
     */
    readonly samlProviderArns?: Array<string>;
    /**
     * Key-value pairs that map provider names to provider app IDs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html#cfn-cognito-identitypool-supportedloginproviders
     */
    readonly supportedLoginProviders?: any | cdk.IResolvable;
}
/**
 * A list of the identity pool principal tag assignments for attributes for access control.
 *
 * @cloudformationResource AWS::Cognito::IdentityPoolPrincipalTag
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html
 */
export declare class CfnIdentityPoolPrincipalTag extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIdentityPoolPrincipalTag from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIdentityPoolPrincipalTag;
    /**
     * The identity pool that you want to associate with this principal tag map.
     */
    identityPoolId: string;
    /**
     * The identity pool identity provider (IdP) that you want to associate with this principal tag map.
     */
    identityProviderName: string;
    /**
     * A JSON-formatted list of user claims and the principal tags that you want to associate with them.
     */
    principalTags?: any | cdk.IResolvable;
    /**
     * Use a default set of mappings between claims and tags for this provider, instead of a custom map.
     */
    useDefaults?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIdentityPoolPrincipalTagProps);
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
 * Properties for defining a `CfnIdentityPoolPrincipalTag`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html
 */
export interface CfnIdentityPoolPrincipalTagProps {
    /**
     * The identity pool that you want to associate with this principal tag map.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html#cfn-cognito-identitypoolprincipaltag-identitypoolid
     */
    readonly identityPoolId: string;
    /**
     * The identity pool identity provider (IdP) that you want to associate with this principal tag map.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html#cfn-cognito-identitypoolprincipaltag-identityprovidername
     */
    readonly identityProviderName: string;
    /**
     * A JSON-formatted list of user claims and the principal tags that you want to associate with them.
     *
     * When Amazon Cognito requests credentials, it sets the value of the principal tag to the value of the user's claim.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html#cfn-cognito-identitypoolprincipaltag-principaltags
     */
    readonly principalTags?: any | cdk.IResolvable;
    /**
     * Use a default set of mappings between claims and tags for this provider, instead of a custom map.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html#cfn-cognito-identitypoolprincipaltag-usedefaults
     */
    readonly useDefaults?: boolean | cdk.IResolvable;
}
/**
 * The `AWS::Cognito::IdentityPoolRoleAttachment` resource manages the role configuration for an Amazon Cognito identity pool.
 *
 * @cloudformationResource AWS::Cognito::IdentityPoolRoleAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html
 */
export declare class CfnIdentityPoolRoleAttachment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIdentityPoolRoleAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIdentityPoolRoleAttachment;
    /**
     * The resource ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * An identity pool ID in the format `REGION:GUID` .
     */
    identityPoolId: string;
    /**
     * How users for a specific identity provider are mapped to roles.
     */
    roleMappings?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnIdentityPoolRoleAttachment.RoleMappingProperty>;
    /**
     * The map of the roles associated with this pool.
     */
    roles?: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIdentityPoolRoleAttachmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIdentityPoolRoleAttachment {
    /**
     * One of a set of `RoleMappings` , a property of the [AWS::Cognito::IdentityPoolRoleAttachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html) resource that defines the role-mapping attributes of an Amazon Cognito identity pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html
     */
    interface RoleMappingProperty {
        /**
         * If you specify Token or Rules as the `Type` , `AmbiguousRoleResolution` is required.
         *
         * Specifies the action to be taken if either no rules match the claim value for the `Rules` type, or there is no `cognito:preferred_role` claim and there are multiple `cognito:roles` matches for the `Token` type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html#cfn-cognito-identitypoolroleattachment-rolemapping-ambiguousroleresolution
         */
        readonly ambiguousRoleResolution?: string;
        /**
         * Identifier for the identity provider for which the role is mapped.
         *
         * For example: `graph.facebook.com` or `cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id (http://cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id)` . This is the identity provider that is used by the user for authentication.
         *
         * If the identity provider property isn't provided, the key of the entry in the `RoleMappings` map is used as the identity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html#cfn-cognito-identitypoolroleattachment-rolemapping-identityprovider
         */
        readonly identityProvider?: string;
        /**
         * The rules to be used for mapping users to roles.
         *
         * If you specify "Rules" as the role-mapping type, RulesConfiguration is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html#cfn-cognito-identitypoolroleattachment-rolemapping-rulesconfiguration
         */
        readonly rulesConfiguration?: cdk.IResolvable | CfnIdentityPoolRoleAttachment.RulesConfigurationTypeProperty;
        /**
         * The role mapping type.
         *
         * Token will use `cognito:roles` and `cognito:preferred_role` claims from the Cognito identity provider token to map groups to roles. Rules will attempt to match claims from the token to map to a role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html#cfn-cognito-identitypoolroleattachment-rolemapping-type
         */
        readonly type: string;
    }
    /**
     * `RulesConfigurationType` is a subproperty of the [RoleMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html) property that defines the rules to be used for mapping users to roles.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rulesconfigurationtype.html
     */
    interface RulesConfigurationTypeProperty {
        /**
         * The rules.
         *
         * You can specify up to 25 rules per identity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rulesconfigurationtype.html#cfn-cognito-identitypoolroleattachment-rulesconfigurationtype-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnIdentityPoolRoleAttachment.MappingRuleProperty> | cdk.IResolvable;
    }
    /**
     * Defines how to map a claim to a role ARN.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-mappingrule.html
     */
    interface MappingRuleProperty {
        /**
         * The claim name that must be present in the token.
         *
         * For example: "isAdmin" or "paid".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-mappingrule.html#cfn-cognito-identitypoolroleattachment-mappingrule-claim
         */
        readonly claim: string;
        /**
         * The match condition that specifies how closely the claim value in the IdP token must match `Value` .
         *
         * Valid values are: `Equals` , `Contains` , `StartsWith` , and `NotEqual` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-mappingrule.html#cfn-cognito-identitypoolroleattachment-mappingrule-matchtype
         */
        readonly matchType: string;
        /**
         * The Amazon Resource Name (ARN) of the role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-mappingrule.html#cfn-cognito-identitypoolroleattachment-mappingrule-rolearn
         */
        readonly roleArn: string;
        /**
         * A brief string that the claim must match.
         *
         * For example, "paid" or "yes".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-mappingrule.html#cfn-cognito-identitypoolroleattachment-mappingrule-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnIdentityPoolRoleAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html
 */
export interface CfnIdentityPoolRoleAttachmentProps {
    /**
     * An identity pool ID in the format `REGION:GUID` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-identitypoolid
     */
    readonly identityPoolId: string;
    /**
     * How users for a specific identity provider are mapped to roles.
     *
     * This is a string to the `RoleMapping` object map. The string identifies the identity provider. For example: `graph.facebook.com` or `cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id` .
     *
     * If the `IdentityProvider` field isn't provided in this object, the string is used as the identity provider name.
     *
     * For more information, see the [RoleMapping property](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-rolemappings
     */
    readonly roleMappings?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnIdentityPoolRoleAttachment.RoleMappingProperty>;
    /**
     * The map of the roles associated with this pool.
     *
     * For a given role, the key is either "authenticated" or "unauthenticated". The value is the role ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-roles
     */
    readonly roles?: any | cdk.IResolvable;
}
/**
 * The `AWS::Cognito::UserPool` resource creates an Amazon Cognito user pool.
 *
 * For more information on working with Amazon Cognito user pools, see [Amazon Cognito User Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html) and [CreateUserPool](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html) .
 *
 * > If you don't specify a value for a parameter, Amazon Cognito sets it to a default value.
 *
 * @cloudformationResource AWS::Cognito::UserPool
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html
 */
export declare class CfnUserPool extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPool from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPool;
    /**
     * The Amazon Resource Name (ARN) of the user pool, such as `arn:aws:cognito-idp:us-east-1:123412341234:userpool/us-east-1_123412341` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A friendly name for the IdP.
     *
     * @cloudformationAttribute ProviderName
     */
    readonly attrProviderName: string;
    /**
     * The URL of the provider of the Amazon Cognito user pool, specified as a `String` .
     *
     * @cloudformationAttribute ProviderURL
     */
    readonly attrProviderUrl: string;
    /**
     * The ID of the user pool.
     *
     * @cloudformationAttribute UserPoolId
     */
    readonly attrUserPoolId: string;
    /**
     * The available verified method a user can use to recover their password when they call `ForgotPassword` .
     */
    accountRecoverySetting?: CfnUserPool.AccountRecoverySettingProperty | cdk.IResolvable;
    /**
     * The settings for administrator creation of users in a user pool.
     */
    adminCreateUserConfig?: CfnUserPool.AdminCreateUserConfigProperty | cdk.IResolvable;
    /**
     * Attributes supported as an alias for this user pool.
     */
    aliasAttributes?: Array<string>;
    /**
     * The attributes that you want your user pool to automatically verify.
     */
    autoVerifiedAttributes?: Array<string>;
    /**
     * When active, `DeletionProtection` prevents accidental deletion of your user pool.
     */
    deletionProtection?: string;
    /**
     * The device-remembering configuration for a user pool.
     */
    deviceConfiguration?: CfnUserPool.DeviceConfigurationProperty | cdk.IResolvable;
    emailAuthenticationMessage?: string;
    emailAuthenticationSubject?: string;
    /**
     * The email configuration of your user pool.
     */
    emailConfiguration?: CfnUserPool.EmailConfigurationProperty | cdk.IResolvable;
    /**
     * This parameter is no longer used.
     */
    emailVerificationMessage?: string;
    /**
     * This parameter is no longer used.
     */
    emailVerificationSubject?: string;
    /**
     * Set enabled MFA options on a specified user pool.
     */
    enabledMfas?: Array<string>;
    /**
     * A collection of user pool Lambda triggers.
     */
    lambdaConfig?: cdk.IResolvable | CfnUserPool.LambdaConfigProperty;
    /**
     * Displays the state of multi-factor authentication (MFA) as on, off, or optional.
     */
    mfaConfiguration?: string;
    /**
     * A list of user pool policies.
     */
    policies?: cdk.IResolvable | CfnUserPool.PoliciesProperty;
    /**
     * An array of attributes for the new user pool.
     */
    schema?: Array<cdk.IResolvable | CfnUserPool.SchemaAttributeProperty> | cdk.IResolvable;
    /**
     * The contents of the SMS authentication message.
     */
    smsAuthenticationMessage?: string;
    /**
     * The settings for your Amazon Cognito user pool to send SMS messages with Amazon Simple Notification Service.
     */
    smsConfiguration?: cdk.IResolvable | CfnUserPool.SmsConfigurationProperty;
    /**
     * This parameter is no longer used.
     */
    smsVerificationMessage?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The settings for updates to user attributes.
     */
    userAttributeUpdateSettings?: cdk.IResolvable | CfnUserPool.UserAttributeUpdateSettingsProperty;
    /**
     * Specifies whether a user can use an email address or phone number as a username when they sign up.
     */
    usernameAttributes?: Array<string>;
    /**
     * Sets the case sensitivity option for sign-in usernames.
     */
    usernameConfiguration?: cdk.IResolvable | CfnUserPool.UsernameConfigurationProperty;
    /**
     * Contains settings for activation of threat protection, including the operating mode and additional authentication types.
     */
    userPoolAddOns?: cdk.IResolvable | CfnUserPool.UserPoolAddOnsProperty;
    /**
     * A friendly name for your user pool.
     */
    userPoolName?: string;
    /**
     * The tag keys and values to assign to the user pool.
     */
    userPoolTagsRaw?: any;
    /**
     * The user pool [feature plan](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html) , or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to `ESSENTIALS` .
     */
    userPoolTier?: string;
    /**
     * The template for the verification message that your user pool delivers to users who set an email address or phone number attribute.
     */
    verificationMessageTemplate?: cdk.IResolvable | CfnUserPool.VerificationMessageTemplateProperty;
    /**
     * Sets or displays the authentication domain, typically your user pool domain, that passkey providers must use as a relying party (RP) in their configuration.
     */
    webAuthnRelyingPartyId?: string;
    /**
     * When `required` , users can only register and sign in users with passkeys that are capable of [user verification](https://docs.aws.amazon.com/https://www.w3.org/TR/webauthn-2/#enum-userVerificationRequirement) . When `preferred` , your user pool doesn't require the use of authenticators with user verification but encourages it.
     */
    webAuthnUserVerification?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnUserPoolProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserPool {
    /**
     * A list of user pool policies.
     *
     * Contains the policy that sets password-complexity requirements.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-policies.html
     */
    interface PoliciesProperty {
        /**
         * The password policy settings for a user pool, including complexity, history, and length requirements.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-policies.html#cfn-cognito-userpool-policies-passwordpolicy
         */
        readonly passwordPolicy?: cdk.IResolvable | CfnUserPool.PasswordPolicyProperty;
        /**
         * The policy for allowed types of authentication in a user pool.
         *
         * To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-policies.html#cfn-cognito-userpool-policies-signinpolicy
         */
        readonly signInPolicy?: cdk.IResolvable | CfnUserPool.SignInPolicyProperty;
    }
    /**
     * The password policy settings for a user pool, including complexity, history, and length requirements.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html
     */
    interface PasswordPolicyProperty {
        /**
         * The minimum length of the password in the policy that you have set.
         *
         * This value can't be less than 6.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html#cfn-cognito-userpool-passwordpolicy-minimumlength
         */
        readonly minimumLength?: number;
        /**
         * The number of previous passwords that you want Amazon Cognito to restrict each user from reusing.
         *
         * Users can't set a password that matches any of `n` previous passwords, where `n` is the value of `PasswordHistorySize` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html#cfn-cognito-userpool-passwordpolicy-passwordhistorysize
         */
        readonly passwordHistorySize?: number;
        /**
         * The requirement in a password policy that users must include at least one lowercase letter in their password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html#cfn-cognito-userpool-passwordpolicy-requirelowercase
         */
        readonly requireLowercase?: boolean | cdk.IResolvable;
        /**
         * The requirement in a password policy that users must include at least one number in their password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html#cfn-cognito-userpool-passwordpolicy-requirenumbers
         */
        readonly requireNumbers?: boolean | cdk.IResolvable;
        /**
         * The requirement in a password policy that users must include at least one symbol in their password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html#cfn-cognito-userpool-passwordpolicy-requiresymbols
         */
        readonly requireSymbols?: boolean | cdk.IResolvable;
        /**
         * The requirement in a password policy that users must include at least one uppercase letter in their password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html#cfn-cognito-userpool-passwordpolicy-requireuppercase
         */
        readonly requireUppercase?: boolean | cdk.IResolvable;
        /**
         * The number of days a temporary password is valid in the password policy.
         *
         * If the user doesn't sign in during this time, an administrator must reset their password. Defaults to `7` . If you submit a value of `0` , Amazon Cognito treats it as a null value and sets `TemporaryPasswordValidityDays` to its default value.
         *
         * > When you set `TemporaryPasswordValidityDays` for a user pool, you can no longer set a value for the legacy `UnusedAccountValidityDays` parameter in that user pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html#cfn-cognito-userpool-passwordpolicy-temporarypasswordvaliditydays
         */
        readonly temporaryPasswordValidityDays?: number;
    }
    /**
     * The policy for allowed types of authentication in a user pool.
     *
     * To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-signinpolicy.html
     */
    interface SignInPolicyProperty {
        /**
         * The sign-in methods that a user pool supports as the first factor.
         *
         * You can permit users to start authentication with a standard username and password, or with other one-time password and hardware factors.
         *
         * Supports values of `EMAIL_OTP` , `SMS_OTP` , `WEB_AUTHN` and `PASSWORD` ,
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-signinpolicy.html#cfn-cognito-userpool-signinpolicy-allowedfirstauthfactors
         */
        readonly allowedFirstAuthFactors?: Array<string>;
    }
    /**
     * The template for the verification message that your user pool delivers to users who set an email address or phone number attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html
     */
    interface VerificationMessageTemplateProperty {
        /**
         * The configuration of verification emails to contain a clickable link or a verification code.
         *
         * For link, your template body must contain link text in the format `{##Click here##}` . "Click here" in the example is a customizable string. For code, your template body must contain a code placeholder in the format `{####}` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html#cfn-cognito-userpool-verificationmessagetemplate-defaultemailoption
         */
        readonly defaultEmailOption?: string;
        /**
         * The template for email messages that Amazon Cognito sends to your users.
         *
         * You can set an `EmailMessage` template only if the value of [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER` . When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER` , your user pool sends email messages with your own Amazon SES configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html#cfn-cognito-userpool-verificationmessagetemplate-emailmessage
         */
        readonly emailMessage?: string;
        /**
         * The email message template for sending a confirmation link to the user.
         *
         * You can set an `EmailMessageByLink` template only if the value of [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER` . When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER` , your user pool sends email messages with your own Amazon SES configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html#cfn-cognito-userpool-verificationmessagetemplate-emailmessagebylink
         */
        readonly emailMessageByLink?: string;
        /**
         * The subject line for the email message template.
         *
         * You can set an `EmailSubject` template only if the value of [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER` . When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER` , your user pool sends email messages with your own Amazon SES configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html#cfn-cognito-userpool-verificationmessagetemplate-emailsubject
         */
        readonly emailSubject?: string;
        /**
         * The subject line for the email message template for sending a confirmation link to the user.
         *
         * You can set an `EmailSubjectByLink` template only if the value of [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER` . When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER` , your user pool sends email messages with your own Amazon SES configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html#cfn-cognito-userpool-verificationmessagetemplate-emailsubjectbylink
         */
        readonly emailSubjectByLink?: string;
        /**
         * The template for SMS messages that Amazon Cognito sends to your users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html#cfn-cognito-userpool-verificationmessagetemplate-smsmessage
         */
        readonly smsMessage?: string;
    }
    /**
     * A list of the user attributes and their properties in your user pool.
     *
     * The attribute schema contains standard attributes, custom attributes with a `custom:` prefix, and developer attributes with a `dev:` prefix. For more information, see [User pool attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html) .
     *
     * Developer-only `dev:` attributes are a legacy feature of user pools, and are read-only to all app clients. You can create and update developer-only attributes only with IAM-authenticated API operations. Use app client read/write permissions instead.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html
     */
    interface SchemaAttributeProperty {
        /**
         * The data format of the values for your attribute.
         *
         * When you choose an `AttributeDataType` , Amazon Cognito validates the input against the data type. A custom attribute value in your user's ID token is always a string, for example `"custom:isMember" : "true"` or `"custom:YearsAsMember" : "12"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html#cfn-cognito-userpool-schemaattribute-attributedatatype
         */
        readonly attributeDataType?: string;
        /**
         * > You should use [WriteAttributes](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserPoolClientType.html#CognitoUserPools-Type-UserPoolClientType-WriteAttributes) in the user pool client to control how attributes can be mutated for new use cases instead of using `DeveloperOnlyAttribute` .
         *
         * Specifies whether the attribute type is developer only. This attribute can only be modified by an administrator. Users won't be able to modify this attribute using their access token. For example, `DeveloperOnlyAttribute` can be modified using AdminUpdateUserAttributes but can't be updated using UpdateUserAttributes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html#cfn-cognito-userpool-schemaattribute-developeronlyattribute
         */
        readonly developerOnlyAttribute?: boolean | cdk.IResolvable;
        /**
         * Specifies whether the value of the attribute can be changed.
         *
         * Any user pool attribute whose value you map from an IdP attribute must be mutable, with a parameter value of `true` . Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If an attribute is immutable, Amazon Cognito throws an error when it attempts to update the attribute. For more information, see [Specifying Identity Provider Attribute Mappings for Your User Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html#cfn-cognito-userpool-schemaattribute-mutable
         */
        readonly mutable?: boolean | cdk.IResolvable;
        /**
         * The name of your user pool attribute.
         *
         * When you create or update a user pool, adding a schema attribute creates a custom or developer-only attribute. When you add an attribute with a `Name` value of `MyAttribute` , Amazon Cognito creates the custom attribute `custom:MyAttribute` . When `DeveloperOnlyAttribute` is `true` , Amazon Cognito creates your attribute as `dev:MyAttribute` . In an operation that describes a user pool, Amazon Cognito returns this value as `value` for standard attributes, `custom:value` for custom attributes, and `dev:value` for developer-only attributes..
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html#cfn-cognito-userpool-schemaattribute-name
         */
        readonly name?: string;
        /**
         * Specifies the constraints for an attribute of the number type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html#cfn-cognito-userpool-schemaattribute-numberattributeconstraints
         */
        readonly numberAttributeConstraints?: cdk.IResolvable | CfnUserPool.NumberAttributeConstraintsProperty;
        /**
         * Specifies whether a user pool attribute is required.
         *
         * If the attribute is required and the user doesn't provide a value, registration or sign-in will fail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html#cfn-cognito-userpool-schemaattribute-required
         */
        readonly required?: boolean | cdk.IResolvable;
        /**
         * Specifies the constraints for an attribute of the string type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html#cfn-cognito-userpool-schemaattribute-stringattributeconstraints
         */
        readonly stringAttributeConstraints?: cdk.IResolvable | CfnUserPool.StringAttributeConstraintsProperty;
    }
    /**
     * The minimum and maximum length values of an attribute that is of the string type, for example `custom:department` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-stringattributeconstraints.html
     */
    interface StringAttributeConstraintsProperty {
        /**
         * The maximum length of a string attribute value.
         *
         * Must be a number less than or equal to `2^1023` , represented as a string with a length of 131072 characters or fewer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-stringattributeconstraints.html#cfn-cognito-userpool-stringattributeconstraints-maxlength
         */
        readonly maxLength?: string;
        /**
         * The minimum length of a string attribute value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-stringattributeconstraints.html#cfn-cognito-userpool-stringattributeconstraints-minlength
         */
        readonly minLength?: string;
    }
    /**
     * The minimum and maximum values of an attribute that is of the number type, for example `custom:age` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-numberattributeconstraints.html
     */
    interface NumberAttributeConstraintsProperty {
        /**
         * The maximum length of a number attribute value.
         *
         * Must be a number less than or equal to `2^1023` , represented as a string with a length of 131072 characters or fewer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-numberattributeconstraints.html#cfn-cognito-userpool-numberattributeconstraints-maxvalue
         */
        readonly maxValue?: string;
        /**
         * The minimum value of an attribute that is of the number data type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-numberattributeconstraints.html#cfn-cognito-userpool-numberattributeconstraints-minvalue
         */
        readonly minValue?: string;
    }
    /**
     * The settings for administrator creation of users in a user pool.
     *
     * Contains settings for allowing user sign-up, customizing invitation messages to new users, and the amount of time before temporary passwords expire.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-admincreateuserconfig.html
     */
    interface AdminCreateUserConfigProperty {
        /**
         * The setting for allowing self-service sign-up.
         *
         * When `true` , only administrators can create new user profiles. When `false` , users can register themselves and create a new user profile with the `SignUp` operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-admincreateuserconfig.html#cfn-cognito-userpool-admincreateuserconfig-allowadmincreateuseronly
         */
        readonly allowAdminCreateUserOnly?: boolean | cdk.IResolvable;
        /**
         * The template for the welcome message to new users.
         *
         * This template must include the `{####}` temporary password placeholder if you are creating users with passwords. If your users don't have passwords, you can omit the placeholder.
         *
         * See also [Customizing User Invitation Messages](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-admincreateuserconfig.html#cfn-cognito-userpool-admincreateuserconfig-invitemessagetemplate
         */
        readonly inviteMessageTemplate?: CfnUserPool.InviteMessageTemplateProperty | cdk.IResolvable;
        /**
         * This parameter is no longer in use.
         *
         * The password expiration limit in days for administrator-created users. When this time expires, the user can't sign in with their temporary password. To reset the account after that time limit, you must call `AdminCreateUser` again, specifying `RESEND` for the `MessageAction` parameter.
         *
         * The default value for this parameter is 7.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-admincreateuserconfig.html#cfn-cognito-userpool-admincreateuserconfig-unusedaccountvaliditydays
         */
        readonly unusedAccountValidityDays?: number;
    }
    /**
     * The template for the welcome message to new users.
     *
     * This template must include the `{####}` temporary password placeholder if you are creating users with passwords. If your users don't have passwords, you can omit the placeholder.
     *
     * See also [Customizing User Invitation Messages](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-invitemessagetemplate.html
     */
    interface InviteMessageTemplateProperty {
        /**
         * The message template for email messages.
         *
         * EmailMessage is allowed only if [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is DEVELOPER.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-invitemessagetemplate.html#cfn-cognito-userpool-invitemessagetemplate-emailmessage
         */
        readonly emailMessage?: string;
        /**
         * The subject line for email messages.
         *
         * EmailSubject is allowed only if [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is DEVELOPER.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-invitemessagetemplate.html#cfn-cognito-userpool-invitemessagetemplate-emailsubject
         */
        readonly emailSubject?: string;
        /**
         * The message template for SMS messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-invitemessagetemplate.html#cfn-cognito-userpool-invitemessagetemplate-smsmessage
         */
        readonly smsMessage?: string;
    }
    /**
     * Case sensitivity of the username input for the selected sign-in option.
     *
     * When case sensitivity is set to `False` (case insensitive), users can sign in with any combination of capital and lowercase letters. For example, `username` , `USERNAME` , or `UserName` , or for email, `email@example.com` or `EMaiL@eXamplE.Com` . For most use cases, set case sensitivity to `False` (case insensitive) as a best practice. When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in case as the same user, and prevents a case variation from being assigned to the same attribute for a different user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-usernameconfiguration.html
     */
    interface UsernameConfigurationProperty {
        /**
         * Specifies whether user name case sensitivity will be applied for all users in the user pool through Amazon Cognito APIs.
         *
         * For most use cases, set case sensitivity to `False` (case insensitive) as a best practice. When usernames and email addresses are case insensitive, users can sign in as the same user when they enter a different capitalization of their user name.
         *
         * Valid values include:
         *
         * - **true** - Enables case sensitivity for all username input. When this option is set to `true` , users must sign in using the exact capitalization of their given username, such as “UserName”. This is the default value.
         * - **false** - Enables case insensitivity for all username input. For example, when this option is set to `false` , users can sign in using `username` , `USERNAME` , or `UserName` . This option also enables both `preferred_username` and `email` alias to be case insensitive, in addition to the `username` attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-usernameconfiguration.html#cfn-cognito-userpool-usernameconfiguration-casesensitive
         */
        readonly caseSensitive?: boolean | cdk.IResolvable;
    }
    /**
     * User pool add-ons.
     *
     * Contains settings for activation of threat protection. To log user security information but take no action, set to `AUDIT` . To configure automatic security responses to risky traffic to your user pool, set to `ENFORCED` .
     *
     * For more information, see [Adding advanced security to a user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html) . To activate this setting, your user pool must be on the [Plus tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userpooladdons.html
     */
    interface UserPoolAddOnsProperty {
        /**
         * Threat protection configuration options for additional authentication types in your user pool, including custom authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userpooladdons.html#cfn-cognito-userpool-userpooladdons-advancedsecurityadditionalflows
         */
        readonly advancedSecurityAdditionalFlows?: CfnUserPool.AdvancedSecurityAdditionalFlowsProperty | cdk.IResolvable;
        /**
         * The operating mode of threat protection for standard authentication types in your user pool, including username-password and secure remote password (SRP) authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userpooladdons.html#cfn-cognito-userpool-userpooladdons-advancedsecuritymode
         */
        readonly advancedSecurityMode?: string;
    }
    /**
     * Threat protection configuration options for additional authentication types in your user pool, including custom authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-advancedsecurityadditionalflows.html
     */
    interface AdvancedSecurityAdditionalFlowsProperty {
        /**
         * The operating mode of threat protection in custom authentication with [Custom authentication challenge Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-advancedsecurityadditionalflows.html#cfn-cognito-userpool-advancedsecurityadditionalflows-customauthmode
         */
        readonly customAuthMode?: string;
    }
    /**
     * The settings for updates to user attributes.
     *
     * These settings include the property `AttributesRequireVerificationBeforeUpdate` ,
     * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
     * more information, see [Verifying updates to email addresses and phone numbers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userattributeupdatesettings.html
     */
    interface UserAttributeUpdateSettingsProperty {
        /**
         * Requires that your user verifies their email address, phone number, or both before Amazon Cognito updates the value of that attribute.
         *
         * When you update a user attribute that has this option activated, Amazon Cognito sends a verification message to the new phone number or email address. Amazon Cognito doesn’t change the value of the attribute until your user responds to the verification message and confirms the new value.
         *
         * When `AttributesRequireVerificationBeforeUpdate` is false, your user pool doesn't require that your users verify attribute changes before Amazon Cognito updates them. In a user pool where `AttributesRequireVerificationBeforeUpdate` is false, API operations that change attribute values can immediately update a user’s `email` or `phone_number` attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userattributeupdatesettings.html#cfn-cognito-userpool-userattributeupdatesettings-attributesrequireverificationbeforeupdate
         */
        readonly attributesRequireVerificationBeforeUpdate: Array<string>;
    }
    /**
     * The email configuration of your user pool.
     *
     * The email configuration type sets your preferred sending method, AWS Region, and sender for messages from your user pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-emailconfiguration.html
     */
    interface EmailConfigurationProperty {
        /**
         * The set of configuration rules that can be applied to emails sent using Amazon Simple Email Service.
         *
         * A configuration set is applied to an email by including a reference to the configuration set in the headers of the email. Once applied, all of the rules in that configuration set are applied to the email. Configuration sets can be used to apply the following types of rules to emails:
         *
         * - **Event publishing** - Amazon Simple Email Service can track the number of send, delivery, open, click, bounce, and complaint events for each email sent. Use event publishing to send information about these events to other AWS services such as and Amazon CloudWatch
         * - **IP pool management** - When leasing dedicated IP addresses with Amazon Simple Email Service, you can create groups of IP addresses, called dedicated IP pools. You can then associate the dedicated IP pools with configuration sets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-emailconfiguration.html#cfn-cognito-userpool-emailconfiguration-configurationset
         */
        readonly configurationSet?: string;
        /**
         * Specifies whether Amazon Cognito uses its built-in functionality to send your users email messages, or uses your Amazon Simple Email Service email configuration.
         *
         * Specify one of the following values:
         *
         * - **COGNITO_DEFAULT** - When Amazon Cognito emails your users, it uses its built-in email functionality. When you use the default option, Amazon Cognito allows only a limited number of emails each day for your user pool. For typical production environments, the default email limit is less than the required delivery volume. To achieve a higher delivery volume, specify DEVELOPER to use your Amazon SES email configuration.
         *
         * To look up the email delivery limit for the default option, see [Limits](https://docs.aws.amazon.com/cognito/latest/developerguide/limits.html) in the *Amazon Cognito Developer Guide* .
         *
         * The default FROM address is `no-reply@verificationemail.com` . To customize the FROM address, provide the Amazon Resource Name (ARN) of an Amazon SES verified email address for the `SourceArn` parameter.
         * - **DEVELOPER** - When Amazon Cognito emails your users, it uses your Amazon SES configuration. Amazon Cognito calls Amazon SES on your behalf to send email from your verified email address. When you use this option, the email delivery limits are the same limits that apply to your Amazon SES verified email address in your AWS account .
         *
         * If you use this option, provide the ARN of an Amazon SES verified email address for the `SourceArn` parameter.
         *
         * Before Amazon Cognito can email your users, it requires additional permissions to call Amazon SES on your behalf. When you update your user pool with this option, Amazon Cognito creates a *service-linked role* , which is a type of role in your AWS account . This role contains the permissions that allow you to access Amazon SES and send email messages from your email address. For more information about the service-linked role that Amazon Cognito creates, see [Using Service-Linked Roles for Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html) in the *Amazon Cognito Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-emailconfiguration.html#cfn-cognito-userpool-emailconfiguration-emailsendingaccount
         */
        readonly emailSendingAccount?: string;
        /**
         * Either the sender’s email address or the sender’s name with their email address.
         *
         * For example, `testuser@example.com` or `Test User <testuser@example.com>` . This address appears before the body of the email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-emailconfiguration.html#cfn-cognito-userpool-emailconfiguration-from
         */
        readonly from?: string;
        /**
         * The destination to which the receiver of the email should reply.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-emailconfiguration.html#cfn-cognito-userpool-emailconfiguration-replytoemailaddress
         */
        readonly replyToEmailAddress?: string;
        /**
         * The ARN of a verified email address or an address from a verified domain in Amazon SES.
         *
         * You can set a `SourceArn` email from a verified domain only with an API request. You can set a verified email address, but not an address in a verified domain, in the Amazon Cognito console. Amazon Cognito uses the email address that you provide in one of the following ways, depending on the value that you specify for the `EmailSendingAccount` parameter:
         *
         * - If you specify `COGNITO_DEFAULT` , Amazon Cognito uses this address as the custom FROM address when it emails your users using its built-in email account.
         * - If you specify `DEVELOPER` , Amazon Cognito emails your users with this address by calling Amazon SES on your behalf.
         *
         * The Region value of the `SourceArn` parameter must indicate a supported AWS Region of your user pool. Typically, the Region in the `SourceArn` and the user pool Region are the same. For more information, see [Amazon SES email configuration regions](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html#user-pool-email-developer-region-mapping) in the [Amazon Cognito Developer Guide](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-emailconfiguration.html#cfn-cognito-userpool-emailconfiguration-sourcearn
         */
        readonly sourceArn?: string;
    }
    /**
     * User pool configuration for delivery of SMS messages with Amazon Simple Notification Service.
     *
     * To send SMS messages with Amazon SNS in the AWS Region that you want, the Amazon Cognito user pool uses an AWS Identity and Access Management (IAM) role in your AWS account .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-smsconfiguration.html
     */
    interface SmsConfigurationProperty {
        /**
         * The external ID provides additional security for your IAM role.
         *
         * You can use an `ExternalId` with the IAM role that you use with Amazon SNS to send SMS messages for your user pool. If you provide an `ExternalId` , your Amazon Cognito user pool includes it in the request to assume your IAM role. You can configure the role trust policy to require that Amazon Cognito, and any principal, provide the `ExternalID` . If you use the Amazon Cognito Management Console to create a role for SMS multi-factor authentication (MFA), Amazon Cognito creates a role with the required permissions and a trust policy that demonstrates use of the `ExternalId` .
         *
         * For more information about the `ExternalId` of a role, see [How to use an external ID when granting access to your AWS resources to a third party](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-smsconfiguration.html#cfn-cognito-userpool-smsconfiguration-externalid
         */
        readonly externalId?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS caller.
         *
         * This is the ARN of the IAM role in your AWS account that Amazon Cognito will use to send SMS messages. SMS messages are subject to a [spending limit](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-smsconfiguration.html#cfn-cognito-userpool-smsconfiguration-snscallerarn
         */
        readonly snsCallerArn?: string;
        /**
         * The AWS Region to use with Amazon SNS integration.
         *
         * You can choose the same Region as your user pool, or a supported *Legacy Amazon SNS alternate Region* .
         *
         * Amazon Cognito resources in the Asia Pacific (Seoul) AWS Region must use your Amazon SNS configuration in the Asia Pacific (Tokyo) Region. For more information, see [SMS message settings for Amazon Cognito user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-smsconfiguration.html#cfn-cognito-userpool-smsconfiguration-snsregion
         */
        readonly snsRegion?: string;
    }
    /**
     * A collection of user pool Lambda triggers.
     *
     * Amazon Cognito invokes triggers at several possible stages of user pool operations. Triggers can modify the outcome of the operations that invoked them.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html
     */
    interface LambdaConfigProperty {
        /**
         * The configuration of a create auth challenge Lambda trigger, one of three triggers in the sequence of the [custom authentication challenge triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-createauthchallenge
         */
        readonly createAuthChallenge?: string;
        /**
         * The configuration of a custom email sender Lambda trigger.
         *
         * This trigger routes all email notifications from a user pool to a Lambda function that delivers the message using custom logic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-customemailsender
         */
        readonly customEmailSender?: CfnUserPool.CustomEmailSenderProperty | cdk.IResolvable;
        /**
         * A custom message Lambda trigger.
         *
         * This trigger is an opportunity to customize all SMS and email messages from your user pool. When a custom message trigger is active, your user pool routes all messages to a Lambda function that returns a runtime-customized message subject and body for your user pool to deliver to a user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-custommessage
         */
        readonly customMessage?: string;
        /**
         * The configuration of a custom SMS sender Lambda trigger.
         *
         * This trigger routes all SMS notifications from a user pool to a Lambda function that delivers the message using custom logic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-customsmssender
         */
        readonly customSmsSender?: CfnUserPool.CustomSMSSenderProperty | cdk.IResolvable;
        /**
         * The configuration of a define auth challenge Lambda trigger, one of three triggers in the sequence of the [custom authentication challenge triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-defineauthchallenge
         */
        readonly defineAuthChallenge?: string;
        /**
         * The ARN of an [KMS key](https://docs.aws.amazon.com//kms/latest/developerguide/concepts.html#master_keys) . Amazon Cognito uses the key to encrypt codes and temporary passwords sent to custom sender Lambda triggers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The configuration of a [post authentication Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-authentication.html) in a user pool. This trigger can take custom actions after a user signs in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-postauthentication
         */
        readonly postAuthentication?: string;
        /**
         * The configuration of a [post confirmation Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html) in a user pool. This trigger can take custom actions after a user confirms their user account and their email address or phone number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-postconfirmation
         */
        readonly postConfirmation?: string;
        /**
         * The configuration of a [pre authentication trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-authentication.html) in a user pool. This trigger can evaluate and modify user sign-in events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-preauthentication
         */
        readonly preAuthentication?: string;
        /**
         * The configuration of a [pre sign-up Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html) in a user pool. This trigger evaluates new users and can bypass confirmation, [link a federated user profile](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html) , or block sign-up requests.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-presignup
         */
        readonly preSignUp?: string;
        /**
         * The legacy configuration of a [pre token generation Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html) in a user pool.
         *
         * Set this parameter for legacy purposes. If you also set an ARN in `PreTokenGenerationConfig` , its value must be identical to `PreTokenGeneration` . For new instances of pre token generation triggers, set the `LambdaArn` of `PreTokenGenerationConfig` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-pretokengeneration
         */
        readonly preTokenGeneration?: string;
        /**
         * The detailed configuration of a [pre token generation Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html) in a user pool. If you also set an ARN in `PreTokenGeneration` , its value must be identical to `PreTokenGenerationConfig` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-pretokengenerationconfig
         */
        readonly preTokenGenerationConfig?: cdk.IResolvable | CfnUserPool.PreTokenGenerationConfigProperty;
        /**
         * The configuration of a [migrate user Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-migrate-user.html) in a user pool. This trigger can create user profiles when users sign in or attempt to reset their password with credentials that don't exist yet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-usermigration
         */
        readonly userMigration?: string;
        /**
         * The configuration of a verify auth challenge Lambda trigger, one of three triggers in the sequence of the [custom authentication challenge triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html#cfn-cognito-userpool-lambdaconfig-verifyauthchallengeresponse
         */
        readonly verifyAuthChallengeResponse?: string;
    }
    /**
     * The configuration of a custom SMS sender Lambda trigger.
     *
     * This trigger routes all SMS notifications from a user pool to a Lambda function that delivers the message using custom logic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customsmssender.html
     */
    interface CustomSMSSenderProperty {
        /**
         * The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customsmssender.html#cfn-cognito-userpool-customsmssender-lambdaarn
         */
        readonly lambdaArn?: string;
        /**
         * The user pool trigger version of the request that Amazon Cognito sends to your Lambda function.
         *
         * Higher-numbered versions add fields that support new features.
         *
         * You must use a `LambdaVersion` of `V1_0` with a custom sender function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customsmssender.html#cfn-cognito-userpool-customsmssender-lambdaversion
         */
        readonly lambdaVersion?: string;
    }
    /**
     * The configuration of a custom email sender Lambda trigger.
     *
     * This trigger routes all email notifications from a user pool to a Lambda function that delivers the message using custom logic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customemailsender.html
     */
    interface CustomEmailSenderProperty {
        /**
         * The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customemailsender.html#cfn-cognito-userpool-customemailsender-lambdaarn
         */
        readonly lambdaArn?: string;
        /**
         * The user pool trigger version of the request that Amazon Cognito sends to your Lambda function.
         *
         * Higher-numbered versions add fields that support new features.
         *
         * You must use a `LambdaVersion` of `V1_0` with a custom sender function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customemailsender.html#cfn-cognito-userpool-customemailsender-lambdaversion
         */
        readonly lambdaVersion?: string;
    }
    /**
     * The properties of a pre token generation Lambda trigger.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-pretokengenerationconfig.html
     */
    interface PreTokenGenerationConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.
         *
         * This parameter and the `PreTokenGeneration` property of `LambdaConfig` have the same value. For new instances of pre token generation triggers, set `LambdaArn` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-pretokengenerationconfig.html#cfn-cognito-userpool-pretokengenerationconfig-lambdaarn
         */
        readonly lambdaArn?: string;
        /**
         * The user pool trigger version of the request that Amazon Cognito sends to your Lambda function.
         *
         * Higher-numbered versions add fields that support new features.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-pretokengenerationconfig.html#cfn-cognito-userpool-pretokengenerationconfig-lambdaversion
         */
        readonly lambdaVersion?: string;
    }
    /**
     * The device-remembering configuration for a user pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-deviceconfiguration.html
     */
    interface DeviceConfigurationProperty {
        /**
         * When true, a remembered device can sign in with device authentication instead of SMS and time-based one-time password (TOTP) factors for multi-factor authentication (MFA).
         *
         * > Whether or not `ChallengeRequiredOnNewDevice` is true, users who sign in with devices that have not been confirmed or remembered must still provide a second factor in a user pool that requires MFA.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-deviceconfiguration.html#cfn-cognito-userpool-deviceconfiguration-challengerequiredonnewdevice
         */
        readonly challengeRequiredOnNewDevice?: boolean | cdk.IResolvable;
        /**
         * When true, Amazon Cognito doesn't automatically remember a user's device when your app sends a `ConfirmDevice` API request.
         *
         * In your app, create a prompt for your user to choose whether they want to remember their device. Return the user's choice in an `UpdateDeviceStatus` API request.
         *
         * When `DeviceOnlyRememberedOnUserPrompt` is `false` , Amazon Cognito immediately remembers devices that you register in a `ConfirmDevice` API request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-deviceconfiguration.html#cfn-cognito-userpool-deviceconfiguration-deviceonlyrememberedonuserprompt
         */
        readonly deviceOnlyRememberedOnUserPrompt?: boolean | cdk.IResolvable;
    }
    /**
     * The available verified method a user can use to recover their password when they call `ForgotPassword` .
     *
     * You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-accountrecoverysetting.html
     */
    interface AccountRecoverySettingProperty {
        /**
         * The list of options and priorities for user message delivery in forgot-password operations.
         *
         * Sets or displays user pool preferences for email or SMS message priority, whether users should fall back to a second delivery method, and whether passwords should only be reset by administrators.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-accountrecoverysetting.html#cfn-cognito-userpool-accountrecoverysetting-recoverymechanisms
         */
        readonly recoveryMechanisms?: Array<cdk.IResolvable | CfnUserPool.RecoveryOptionProperty> | cdk.IResolvable;
    }
    /**
     * A recovery option for a user.
     *
     * The `AccountRecoverySettingType` data type is an array of this object. Each `RecoveryOptionType` has a priority property that determines whether it is a primary or secondary option.
     *
     * For example, if `verified_email` has a priority of `1` and `verified_phone_number` has a priority of `2` , your user pool sends account-recovery messages to a verified email address but falls back to an SMS message if the user has a verified phone number. The `admin_only` option prevents self-service account recovery.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-recoveryoption.html
     */
    interface RecoveryOptionProperty {
        /**
         * The recovery method that this object sets a recovery option for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-recoveryoption.html#cfn-cognito-userpool-recoveryoption-name
         */
        readonly name?: string;
        /**
         * Your priority preference for using the specified attribute in account recovery.
         *
         * The highest priority is `1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-recoveryoption.html#cfn-cognito-userpool-recoveryoption-priority
         */
        readonly priority?: number;
    }
}
/**
 * Properties for defining a `CfnUserPool`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html
 */
export interface CfnUserPoolProps {
    /**
     * The available verified method a user can use to recover their password when they call `ForgotPassword` .
     *
     * You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-accountrecoverysetting
     */
    readonly accountRecoverySetting?: CfnUserPool.AccountRecoverySettingProperty | cdk.IResolvable;
    /**
     * The settings for administrator creation of users in a user pool.
     *
     * Contains settings for allowing user sign-up, customizing invitation messages to new users, and the amount of time before temporary passwords expire.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-admincreateuserconfig
     */
    readonly adminCreateUserConfig?: CfnUserPool.AdminCreateUserConfigProperty | cdk.IResolvable;
    /**
     * Attributes supported as an alias for this user pool.
     *
     * For more information about alias attributes, see [Customizing sign-in attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-aliasattributes
     */
    readonly aliasAttributes?: Array<string>;
    /**
     * The attributes that you want your user pool to automatically verify.
     *
     * For more information, see [Verifying contact information at sign-up](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#allowing-users-to-sign-up-and-confirm-themselves) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-autoverifiedattributes
     */
    readonly autoVerifiedAttributes?: Array<string>;
    /**
     * When active, `DeletionProtection` prevents accidental deletion of your user pool.
     *
     * Before you can delete a user pool that you have protected against deletion, you
     * must deactivate this feature.
     *
     * When you try to delete a protected user pool in a `DeleteUserPool` API request, Amazon Cognito returns an `InvalidParameterException` error. To delete a protected user pool, send a new `DeleteUserPool` request after you deactivate deletion protection in an `UpdateUserPool` API request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-deletionprotection
     */
    readonly deletionProtection?: string;
    /**
     * The device-remembering configuration for a user pool.
     *
     * Device remembering or device tracking is a "Remember me on this device" option for user pools that perform authentication with the device key of a trusted device in the back end, instead of a user-provided MFA code. For more information about device authentication, see [Working with user devices in your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html) . A null value indicates that you have deactivated device remembering in your user pool.
     *
     * > When you provide a value for any `DeviceConfiguration` field, you activate the Amazon Cognito device-remembering feature. For more infor
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-deviceconfiguration
     */
    readonly deviceConfiguration?: CfnUserPool.DeviceConfigurationProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-emailauthenticationmessage
     */
    readonly emailAuthenticationMessage?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-emailauthenticationsubject
     */
    readonly emailAuthenticationSubject?: string;
    /**
     * The email configuration of your user pool.
     *
     * The email configuration type sets your preferred sending method, AWS Region, and sender for messages from your user pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-emailconfiguration
     */
    readonly emailConfiguration?: CfnUserPool.EmailConfigurationProperty | cdk.IResolvable;
    /**
     * This parameter is no longer used.
     *
     * See [VerificationMessageTemplateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-emailverificationmessage
     */
    readonly emailVerificationMessage?: string;
    /**
     * This parameter is no longer used.
     *
     * See [VerificationMessageTemplateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-emailverificationsubject
     */
    readonly emailVerificationSubject?: string;
    /**
     * Set enabled MFA options on a specified user pool.
     *
     * To disable all MFAs after it has been enabled, set `MfaConfiguration` to `OFF` and remove EnabledMfas. MFAs can only be all disabled if `MfaConfiguration` is `OFF` . After you enable `SMS_MFA` , you can only disable it by setting `MfaConfiguration` to `OFF` . Can be one of the following values:
     *
     * - `SMS_MFA` - Enables MFA with SMS for the user pool. To select this option, you must also provide values for `SmsConfiguration` .
     * - `SOFTWARE_TOKEN_MFA` - Enables software token MFA for the user pool.
     * - `EMAIL_OTP` - Enables MFA with email for the user pool. To select this option, you must provide values for `EmailConfiguration` and within those, set `EmailSendingAccount` to `DEVELOPER` .
     *
     * Allowed values: `SMS_MFA` | `SOFTWARE_TOKEN_MFA` | `EMAIL_OTP`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-enabledmfas
     */
    readonly enabledMfas?: Array<string>;
    /**
     * A collection of user pool Lambda triggers.
     *
     * Amazon Cognito invokes triggers at several possible stages of authentication operations. Triggers can modify the outcome of the operations that invoked them.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-lambdaconfig
     */
    readonly lambdaConfig?: cdk.IResolvable | CfnUserPool.LambdaConfigProperty;
    /**
     * Displays the state of multi-factor authentication (MFA) as on, off, or optional.
     *
     * When `ON` , all users must set up MFA before they can sign in. When `OPTIONAL` , your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose `OPTIONAL` .
     *
     * When `MfaConfiguration` is `OPTIONAL` , managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-mfaconfiguration
     */
    readonly mfaConfiguration?: string;
    /**
     * A list of user pool policies.
     *
     * Contains the policy that sets password-complexity requirements.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-policies
     */
    readonly policies?: cdk.IResolvable | CfnUserPool.PoliciesProperty;
    /**
     * An array of attributes for the new user pool.
     *
     * You can add custom attributes and modify the properties of default attributes. The specifications in this parameter set the required attributes in your user pool. For more information, see [Working with user attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-schema
     */
    readonly schema?: Array<cdk.IResolvable | CfnUserPool.SchemaAttributeProperty> | cdk.IResolvable;
    /**
     * The contents of the SMS authentication message.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-smsauthenticationmessage
     */
    readonly smsAuthenticationMessage?: string;
    /**
     * The settings for your Amazon Cognito user pool to send SMS messages with Amazon Simple Notification Service.
     *
     * To send SMS messages with Amazon SNS in the AWS Region that you want, the Amazon Cognito user pool uses an AWS Identity and Access Management (IAM) role in your AWS account . For more information see [SMS message settings](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-smsconfiguration
     */
    readonly smsConfiguration?: cdk.IResolvable | CfnUserPool.SmsConfigurationProperty;
    /**
     * This parameter is no longer used.
     *
     * See [VerificationMessageTemplateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-smsverificationmessage
     */
    readonly smsVerificationMessage?: string;
    /**
     * The settings for updates to user attributes.
     *
     * These settings include the property `AttributesRequireVerificationBeforeUpdate` ,
     * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
     * more information, see [Verifying updates to email addresses and phone numbers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-userattributeupdatesettings
     */
    readonly userAttributeUpdateSettings?: cdk.IResolvable | CfnUserPool.UserAttributeUpdateSettingsProperty;
    /**
     * Specifies whether a user can use an email address or phone number as a username when they sign up.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-usernameattributes
     */
    readonly usernameAttributes?: Array<string>;
    /**
     * Sets the case sensitivity option for sign-in usernames.
     *
     * When `CaseSensitive` is `false` (case insensitive), users can sign in with any combination of capital and lowercase letters. For example, `username` , `USERNAME` , or `UserName` , or for email, `email@example.com` or `EMaiL@eXamplE.Com` . For most use cases, set case sensitivity to `false` as a best practice. When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in case as the same user, and prevents a case variation from being assigned to the same attribute for a different user.
     *
     * When `CaseSensitive` is `true` (case sensitive), Amazon Cognito interprets `USERNAME` and `UserName` as distinct users.
     *
     * This configuration is immutable after you set it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-usernameconfiguration
     */
    readonly usernameConfiguration?: cdk.IResolvable | CfnUserPool.UsernameConfigurationProperty;
    /**
     * Contains settings for activation of threat protection, including the operating mode and additional authentication types.
     *
     * To log user security information but take no action, set to `AUDIT` . To configure automatic security responses to potentially unwanted traffic to your user pool, set to `ENFORCED` .
     *
     * For more information, see [Adding advanced security to a user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html) . To activate this setting, your user pool must be on the [Plus tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-userpooladdons
     */
    readonly userPoolAddOns?: cdk.IResolvable | CfnUserPool.UserPoolAddOnsProperty;
    /**
     * A friendly name for your user pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-userpoolname
     */
    readonly userPoolName?: string;
    /**
     * The tag keys and values to assign to the user pool.
     *
     * A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-userpooltags
     */
    readonly userPoolTags?: any;
    /**
     * The user pool [feature plan](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html) , or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to `ESSENTIALS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-userpooltier
     */
    readonly userPoolTier?: string;
    /**
     * The template for the verification message that your user pool delivers to users who set an email address or phone number attribute.
     *
     * Set the email message type that corresponds to your `DefaultEmailOption` selection. For `CONFIRM_WITH_LINK` , specify an `EmailMessageByLink` and leave `EmailMessage` blank. For `CONFIRM_WITH_CODE` , specify an `EmailMessage` and leave `EmailMessageByLink` blank. When you supply both parameters with either choice, Amazon Cognito returns an error.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-verificationmessagetemplate
     */
    readonly verificationMessageTemplate?: cdk.IResolvable | CfnUserPool.VerificationMessageTemplateProperty;
    /**
     * Sets or displays the authentication domain, typically your user pool domain, that passkey providers must use as a relying party (RP) in their configuration.
     *
     * Under the following conditions, the passkey relying party ID must be the fully-qualified domain name of your custom domain:
     *
     * - The user pool is configured for passkey authentication.
     * - The user pool has a custom domain, whether or not it also has a prefix domain.
     * - Your application performs authentication with managed login or the classic hosted UI.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-webauthnrelyingpartyid
     */
    readonly webAuthnRelyingPartyId?: string;
    /**
     * When `required` , users can only register and sign in users with passkeys that are capable of [user verification](https://docs.aws.amazon.com/https://www.w3.org/TR/webauthn-2/#enum-userVerificationRequirement) . When `preferred` , your user pool doesn't require the use of authenticators with user verification but encourages it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html#cfn-cognito-userpool-webauthnuserverification
     */
    readonly webAuthnUserVerification?: string;
}
/**
 * The `AWS::Cognito::UserPoolClient` resource specifies an Amazon Cognito user pool client.
 *
 * > If you don't specify a value for a parameter, Amazon Cognito sets it to a default value.
 *
 * @cloudformationResource AWS::Cognito::UserPoolClient
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html
 */
export declare class CfnUserPoolClient extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPoolClient from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPoolClient;
    /**
     * The ID of the app client, for example `1example23456789` .
     *
     * @cloudformationAttribute ClientId
     */
    readonly attrClientId: string;
    /**
     * @cloudformationAttribute ClientSecret
     */
    readonly attrClientSecret: string;
    /**
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The access token time limit.
     */
    accessTokenValidity?: number;
    /**
     * The OAuth grant types that you want your app client to generate for clients in managed login authentication.
     */
    allowedOAuthFlows?: Array<string>;
    /**
     * Set to `true` to use OAuth 2.0 authorization server features in your app client.
     */
    allowedOAuthFlowsUserPoolClient?: boolean | cdk.IResolvable;
    /**
     * The OAuth, OpenID Connect (OIDC), and custom scopes that you want to permit your app client to authorize access with.
     */
    allowedOAuthScopes?: Array<string>;
    /**
     * The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign.
     */
    analyticsConfiguration?: CfnUserPoolClient.AnalyticsConfigurationProperty | cdk.IResolvable;
    /**
     * Amazon Cognito creates a session token for each API request in an authentication flow.
     */
    authSessionValidity?: number;
    /**
     * A list of allowed redirect, or callback, URLs for managed login authentication.
     */
    callbackUrLs?: Array<string>;
    /**
     * A friendly name for the app client that you want to create.
     */
    clientName?: string;
    /**
     * The default redirect URI.
     */
    defaultRedirectUri?: string;
    /**
     * When `true` , your application can include additional `UserContextData` in authentication requests.
     */
    enablePropagateAdditionalUserContextData?: boolean | cdk.IResolvable;
    /**
     * Activates or deactivates token revocation.
     */
    enableTokenRevocation?: boolean | cdk.IResolvable;
    /**
     * The [authentication flows](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html) that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.
     */
    explicitAuthFlows?: Array<string>;
    /**
     * When `true` , generates a client secret for the app client.
     */
    generateSecret?: boolean | cdk.IResolvable;
    /**
     * The ID token time limit.
     */
    idTokenValidity?: number;
    /**
     * A list of allowed logout URLs for managed login authentication.
     */
    logoutUrLs?: Array<string>;
    /**
     * Errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool.
     */
    preventUserExistenceErrors?: string;
    /**
     * The list of user attributes that you want your app client to have read access to.
     */
    readAttributes?: Array<string>;
    /**
     * The refresh token time limit.
     */
    refreshTokenValidity?: number;
    /**
     * A list of provider names for the identity providers (IdPs) that are supported on this client.
     */
    supportedIdentityProviders?: Array<string>;
    /**
     * The units that validity times are represented in.
     */
    tokenValidityUnits?: cdk.IResolvable | CfnUserPoolClient.TokenValidityUnitsProperty;
    /**
     * The ID of the user pool where you want to create an app client.
     */
    userPoolId: string;
    /**
     * The list of user attributes that you want your app client to have write access to.
     */
    writeAttributes?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserPoolClientProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserPoolClient {
    /**
     * The settings for Amazon Pinpoint analytics configuration.
     *
     * With an analytics configuration, your application can collect user-activity metrics for user notifications with a Amazon Pinpoint campaign.
     *
     * Amazon Pinpoint isn't available in all AWS Regions. For a list of available Regions, see [Amazon Cognito and Amazon Pinpoint Region availability](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html#cognito-user-pools-find-region-mappings) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-analyticsconfiguration.html
     */
    interface AnalyticsConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of an Amazon Pinpoint project that you want to connect to your user pool app client.
         *
         * Amazon Cognito publishes events to the Amazon Pinpoint project that `ApplicationArn` declares. You can also configure your application to pass an endpoint ID in the `AnalyticsMetadata` parameter of sign-in operations. The endpoint ID is information about the destination for push notifications
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-analyticsconfiguration.html#cfn-cognito-userpoolclient-analyticsconfiguration-applicationarn
         */
        readonly applicationArn?: string;
        /**
         * Your Amazon Pinpoint project ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-analyticsconfiguration.html#cfn-cognito-userpoolclient-analyticsconfiguration-applicationid
         */
        readonly applicationId?: string;
        /**
         * The [external ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) of the role that Amazon Cognito assumes to send analytics data to Amazon Pinpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-analyticsconfiguration.html#cfn-cognito-userpoolclient-analyticsconfiguration-externalid
         */
        readonly externalId?: string;
        /**
         * The ARN of an AWS Identity and Access Management role that has the permissions required for Amazon Cognito to publish events to Amazon Pinpoint analytics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-analyticsconfiguration.html#cfn-cognito-userpoolclient-analyticsconfiguration-rolearn
         */
        readonly roleArn?: string;
        /**
         * If `UserDataShared` is `true` , Amazon Cognito includes user data in the events that it publishes to Amazon Pinpoint analytics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-analyticsconfiguration.html#cfn-cognito-userpoolclient-analyticsconfiguration-userdatashared
         */
        readonly userDataShared?: boolean | cdk.IResolvable;
    }
    /**
     * The units that validity times are represented in.
     *
     * The default unit for refresh tokens is days, and the default for ID and access tokens are hours.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-tokenvalidityunits.html
     */
    interface TokenValidityUnitsProperty {
        /**
         * A time unit for the value that you set in the `AccessTokenValidity` parameter.
         *
         * The default `AccessTokenValidity` time unit is `hours` . `AccessTokenValidity` duration can range from five minutes to one day.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-tokenvalidityunits.html#cfn-cognito-userpoolclient-tokenvalidityunits-accesstoken
         */
        readonly accessToken?: string;
        /**
         * A time unit for the value that you set in the `IdTokenValidity` parameter.
         *
         * The default `IdTokenValidity` time unit is `hours` . `IdTokenValidity` duration can range from five minutes to one day.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-tokenvalidityunits.html#cfn-cognito-userpoolclient-tokenvalidityunits-idtoken
         */
        readonly idToken?: string;
        /**
         * A time unit for the value that you set in the `RefreshTokenValidity` parameter.
         *
         * The default `RefreshTokenValidity` time unit is `days` . `RefreshTokenValidity` duration can range from 60 minutes to 10 years.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-tokenvalidityunits.html#cfn-cognito-userpoolclient-tokenvalidityunits-refreshtoken
         */
        readonly refreshToken?: string;
    }
}
/**
 * Properties for defining a `CfnUserPoolClient`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html
 */
export interface CfnUserPoolClientProps {
    /**
     * The access token time limit.
     *
     * After this limit expires, your user can't use their access token. To specify the time unit for `AccessTokenValidity` as `seconds` , `minutes` , `hours` , or `days` , set a `TokenValidityUnits` value in your API request.
     *
     * For example, when you set `AccessTokenValidity` to `10` and `TokenValidityUnits` to `hours` , your user can authorize access with
     * their access token for 10 hours.
     *
     * The default time unit for `AccessTokenValidity` in an API request is hours. *Valid range* is displayed below in seconds.
     *
     * If you don't specify otherwise in the configuration of your app client, your access
     * tokens are valid for one hour.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-accesstokenvalidity
     */
    readonly accessTokenValidity?: number;
    /**
     * The OAuth grant types that you want your app client to generate for clients in managed login authentication.
     *
     * To create an app client that generates client credentials grants, you must add `client_credentials` as the only allowed OAuth flow.
     *
     * - **code** - Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the `/oauth2/token` endpoint.
     * - **implicit** - Issue the access token, and the ID token when scopes like `openid` and `profile` are requested, directly to your user.
     * - **client_credentials** - Issue the access token from the `/oauth2/token` endpoint directly to a non-person user, authorized by a combination of the client ID and client secret.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-allowedoauthflows
     */
    readonly allowedOAuthFlows?: Array<string>;
    /**
     * Set to `true` to use OAuth 2.0 authorization server features in your app client.
     *
     * This parameter must have a value of `true` before you can configure the following features in your app client.
     *
     * - `CallBackURLs` : Callback URLs.
     * - `LogoutURLs` : Sign-out redirect URLs.
     * - `AllowedOAuthScopes` : OAuth 2.0 scopes.
     * - `AllowedOAuthFlows` : Support for authorization code, implicit, and client credentials OAuth 2.0 grants.
     *
     * To use authorization server features, configure one of these features in the Amazon Cognito console or set `AllowedOAuthFlowsUserPoolClient` to `true` in a `CreateUserPoolClient` or `UpdateUserPoolClient` API request. If you don't set a value for `AllowedOAuthFlowsUserPoolClient` in a request with the AWS CLI or SDKs, it defaults to `false` . When `false` , only SDK-based API sign-in is permitted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-allowedoauthflowsuserpoolclient
     */
    readonly allowedOAuthFlowsUserPoolClient?: boolean | cdk.IResolvable;
    /**
     * The OAuth, OpenID Connect (OIDC), and custom scopes that you want to permit your app client to authorize access with.
     *
     * Scopes govern access control to user pool self-service API operations, user data from the `userInfo` endpoint, and third-party APIs. Scope values include `phone` , `email` , `openid` , and `profile` . The `aws.cognito.signin.user.admin` scope authorizes user self-service operations. Custom scopes with resource servers authorize access to external APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-allowedoauthscopes
     */
    readonly allowedOAuthScopes?: Array<string>;
    /**
     * The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign.
     *
     * In AWS Regions where Amazon Pinpoint isn't available, user pools might not have access to analytics or might be configurable with campaigns in the US East (N. Virginia) Region. For more information, see [Using Amazon Pinpoint analytics](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-analyticsconfiguration
     */
    readonly analyticsConfiguration?: CfnUserPoolClient.AnalyticsConfigurationProperty | cdk.IResolvable;
    /**
     * Amazon Cognito creates a session token for each API request in an authentication flow.
     *
     * `AuthSessionValidity` is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-authsessionvalidity
     */
    readonly authSessionValidity?: number;
    /**
     * A list of allowed redirect, or callback, URLs for managed login authentication.
     *
     * These URLs are the paths where you want to send your users' browsers after they complete authentication with managed login or a third-party IdP. Typically, callback URLs are the home of an application that uses OAuth or OIDC libraries to process authentication outcomes.
     *
     * A redirect URI must meet the following requirements:
     *
     * - Be an absolute URI.
     * - Be registered with the authorization server. Amazon Cognito doesn't accept authorization requests with `redirect_uri` values that aren't in the list of `CallbackURLs` that you provide in this parameter.
     * - Not include a fragment component.
     *
     * See [OAuth 2.0 - Redirection Endpoint](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6749#section-3.1.2) .
     *
     * Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only.
     *
     * App callback URLs such as myapp://example are also supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-callbackurls
     */
    readonly callbackUrLs?: Array<string>;
    /**
     * A friendly name for the app client that you want to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-clientname
     */
    readonly clientName?: string;
    /**
     * The default redirect URI.
     *
     * In app clients with one assigned IdP, replaces `redirect_uri` in authentication requests. Must be in the `CallbackURLs` list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-defaultredirecturi
     */
    readonly defaultRedirectUri?: string;
    /**
     * When `true` , your application can include additional `UserContextData` in authentication requests.
     *
     * This data includes the IP address, and contributes to analysis by threat protection features. For more information about propagation of user context data, see [Adding session data to API requests](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint) . If you don’t include this parameter, you can't send the source IP address to Amazon Cognito threat protection features. You can only activate `EnablePropagateAdditionalUserContextData` in an app client that has a client secret.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-enablepropagateadditionalusercontextdata
     */
    readonly enablePropagateAdditionalUserContextData?: boolean | cdk.IResolvable;
    /**
     * Activates or deactivates token revocation.
     *
     * If you don't include this parameter, token revocation is automatically activated for the new user pool client.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-enabletokenrevocation
     */
    readonly enableTokenRevocation?: boolean | cdk.IResolvable;
    /**
     * The [authentication flows](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html) that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.
     *
     * > If you don't specify a value for `ExplicitAuthFlows` , your app client supports `ALLOW_REFRESH_TOKEN_AUTH` , `ALLOW_USER_SRP_AUTH` , and `ALLOW_CUSTOM_AUTH` .
     *
     * The values for authentication flow options include the following.
     *
     * - `ALLOW_USER_AUTH` : Enable selection-based sign-in with `USER_AUTH` . This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other `ExplicitAuthFlows` permitting them. For example users can complete an SRP challenge through `USER_AUTH` without the flow `USER_SRP_AUTH` being active for the app client. This flow doesn't include `CUSTOM_AUTH` .
     *
     * To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
     * - `ALLOW_ADMIN_USER_PASSWORD_AUTH` : Enable admin based user password authentication flow `ADMIN_USER_PASSWORD_AUTH` . This setting replaces the `ADMIN_NO_SRP_AUTH` setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.
     * - `ALLOW_CUSTOM_AUTH` : Enable Lambda trigger based authentication.
     * - `ALLOW_USER_PASSWORD_AUTH` : Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.
     * - `ALLOW_USER_SRP_AUTH` : Enable SRP-based authentication.
     * - `ALLOW_REFRESH_TOKEN_AUTH` : Enable authflow to refresh tokens.
     *
     * In some environments, you will see the values `ADMIN_NO_SRP_AUTH` , `CUSTOM_AUTH_FLOW_ONLY` , or `USER_PASSWORD_AUTH` . You can't assign these legacy `ExplicitAuthFlows` values to user pool clients at the same time as values that begin with `ALLOW_` ,
     * like `ALLOW_USER_SRP_AUTH` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-explicitauthflows
     */
    readonly explicitAuthFlows?: Array<string>;
    /**
     * When `true` , generates a client secret for the app client.
     *
     * Client secrets are used with server-side and machine-to-machine applications. Client secrets are automatically generated; you can't specify a secret value. For more information, see [App client types](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html#user-pool-settings-client-app-client-types) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-generatesecret
     */
    readonly generateSecret?: boolean | cdk.IResolvable;
    /**
     * The ID token time limit.
     *
     * After this limit expires, your user can't use their ID token. To specify the time unit for `IdTokenValidity` as `seconds` , `minutes` , `hours` , or `days` , set a `TokenValidityUnits` value in your API request.
     *
     * For example, when you set `IdTokenValidity` as `10` and `TokenValidityUnits` as `hours` , your user can authenticate their session with their ID token for 10 hours.
     *
     * The default time unit for `IdTokenValidity` in an API request is hours. *Valid range* is displayed below in seconds.
     *
     * If you don't specify otherwise in the configuration of your app client, your ID
     * tokens are valid for one hour.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-idtokenvalidity
     */
    readonly idTokenValidity?: number;
    /**
     * A list of allowed logout URLs for managed login authentication.
     *
     * When you pass `logout_uri` and `client_id` parameters to `/logout` , Amazon Cognito signs out your user and redirects them to the logout URL. This parameter describes the URLs that you want to be the permitted targets of `logout_uri` . A typical use of these URLs is when a user selects "Sign out" and you redirect them to your public homepage. For more information, see [Logout endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/logout-endpoint.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-logouturls
     */
    readonly logoutUrLs?: Array<string>;
    /**
     * Errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool.
     *
     * When set to `ENABLED` and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to `LEGACY` , those APIs return a `UserNotFoundException` exception if the user doesn't exist in the user pool.
     *
     * Valid values include:
     *
     * - `ENABLED` - This prevents user existence-related errors.
     * - `LEGACY` - This represents the early behavior of Amazon Cognito where user existence related errors aren't prevented.
     *
     * Defaults to `LEGACY` when you don't provide a value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-preventuserexistenceerrors
     */
    readonly preventUserExistenceErrors?: string;
    /**
     * The list of user attributes that you want your app client to have read access to.
     *
     * After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list. An example of this kind of activity is when your user selects a link to view their profile information.
     *
     * When you don't specify the `ReadAttributes` for your app client, your app can read the values of `email_verified` , `phone_number_verified` , and the Standard attributes of your user pool. When your user pool app client has read access to these default attributes, `ReadAttributes` doesn't return any information. Amazon Cognito only populates `ReadAttributes` in the API response if you have specified your own custom set of read attributes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-readattributes
     */
    readonly readAttributes?: Array<string>;
    /**
     * The refresh token time limit.
     *
     * After this limit expires, your user can't use their refresh token. To specify the time unit for `RefreshTokenValidity` as `seconds` , `minutes` , `hours` , or `days` , set a `TokenValidityUnits` value in your API request.
     *
     * For example, when you set `RefreshTokenValidity` as `10` and `TokenValidityUnits` as `days` , your user can refresh their session
     * and retrieve new access and ID tokens for 10 days.
     *
     * The default time unit for `RefreshTokenValidity` in an API request is days. You can't set `RefreshTokenValidity` to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. *Valid range* is displayed below in seconds.
     *
     * If you don't specify otherwise in the configuration of your app client, your refresh
     * tokens are valid for 30 days.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-refreshtokenvalidity
     */
    readonly refreshTokenValidity?: number;
    /**
     * A list of provider names for the identity providers (IdPs) that are supported on this client.
     *
     * The following are supported: `COGNITO` , `Facebook` , `Google` , `SignInWithApple` , and `LoginWithAmazon` . You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example `MySAMLIdP` or `MyOIDCIdP` .
     *
     * This parameter sets the IdPs that [managed login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html) will display on the login page for your app client. The removal of `COGNITO` from this list doesn't prevent authentication operations for local users with the user pools API in an AWS SDK. The only way to prevent SDK-based authentication is to block access with a [AWS WAF rule](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-waf.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-supportedidentityproviders
     */
    readonly supportedIdentityProviders?: Array<string>;
    /**
     * The units that validity times are represented in.
     *
     * The default unit for refresh tokens is days, and the default for ID and access tokens are hours.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-tokenvalidityunits
     */
    readonly tokenValidityUnits?: cdk.IResolvable | CfnUserPoolClient.TokenValidityUnitsProperty;
    /**
     * The ID of the user pool where you want to create an app client.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-userpoolid
     */
    readonly userPoolId: string;
    /**
     * The list of user attributes that you want your app client to have write access to.
     *
     * After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list.
     *
     * When you don't specify the `WriteAttributes` for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, `WriteAttributes` doesn't return any information. Amazon Cognito only populates `WriteAttributes` in the API response if you have specified your own custom set of write attributes.
     *
     * If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see [Specifying IdP Attribute Mappings for Your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html#cfn-cognito-userpoolclient-writeattributes
     */
    readonly writeAttributes?: Array<string>;
}
/**
 * The AWS::Cognito::UserPoolDomain resource creates a new domain for a user pool.
 *
 * @cloudformationResource AWS::Cognito::UserPoolDomain
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html
 */
export declare class CfnUserPoolDomain extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPoolDomain from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPoolDomain;
    /**
     * The Amazon CloudFront endpoint that you use as the target of the alias that you set up with your Domain Name Service (DNS) provider.
     *
     * @cloudformationAttribute CloudFrontDistribution
     */
    readonly attrCloudFrontDistribution: string;
    /**
     * The configuration for a custom domain that hosts the sign-up and sign-in pages for your application.
     */
    customDomainConfig?: CfnUserPoolDomain.CustomDomainConfigTypeProperty | cdk.IResolvable;
    /**
     * The name of the domain that you want to update.
     */
    domain: string;
    /**
     * A version number that indicates the state of managed login for your domain.
     */
    managedLoginVersion?: number;
    /**
     * The ID of the user pool that is associated with the domain you're updating.
     */
    userPoolId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserPoolDomainProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserPoolDomain {
    /**
     * The configuration for a hosted UI custom domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooldomain-customdomainconfigtype.html
     */
    interface CustomDomainConfigTypeProperty {
        /**
         * The Amazon Resource Name (ARN) of an AWS Certificate Manager SSL certificate.
         *
         * You use this certificate for the subdomain of your custom domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooldomain-customdomainconfigtype.html#cfn-cognito-userpooldomain-customdomainconfigtype-certificatearn
         */
        readonly certificateArn?: string;
    }
}
/**
 * Properties for defining a `CfnUserPoolDomain`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html
 */
export interface CfnUserPoolDomainProps {
    /**
     * The configuration for a custom domain that hosts the sign-up and sign-in pages for your application.
     *
     * Use this object to specify an SSL certificate that is managed by ACM.
     *
     * When you create a custom domain, the passkey RP ID defaults to the custom domain. If you had a prefix domain active, this will cause passkey integration for your prefix domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey integration working, you can explicitly set RP ID to the prefix domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-customdomainconfig
     */
    readonly customDomainConfig?: CfnUserPoolDomain.CustomDomainConfigTypeProperty | cdk.IResolvable;
    /**
     * The name of the domain that you want to update.
     *
     * For custom domains, this is the fully-qualified domain name, for example `auth.example.com` . For prefix domains, this is the prefix alone, such as `myprefix` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-domain
     */
    readonly domain: string;
    /**
     * A version number that indicates the state of managed login for your domain.
     *
     * Version `1` is hosted UI (classic). Version `2` is the newer managed login with the branding designer. For more information, see [Managed login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-managedloginversion
     */
    readonly managedLoginVersion?: number;
    /**
     * The ID of the user pool that is associated with the domain you're updating.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-userpoolid
     */
    readonly userPoolId: string;
}
/**
 * A user pool group.
 *
 * Contains details about the group and the way that it contributes to IAM role decisions with identity pools. Identity pools can make decisions about the IAM role to assign based on groups: users get credentials for the role associated with their highest-priority group.
 *
 * @cloudformationResource AWS::Cognito::UserPoolGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html
 */
export declare class CfnUserPoolGroup extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPoolGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPoolGroup;
    /**
     * A description of the group that you're creating.
     */
    description?: string;
    /**
     * A name for the group.
     */
    groupName?: string;
    /**
     * A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool.
     */
    precedence?: number;
    /**
     * The Amazon Resource Name (ARN) for the IAM role that you want to associate with the group.
     */
    roleArn?: string;
    /**
     * The ID of the user pool where you want to create a user group.
     */
    userPoolId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserPoolGroupProps);
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
 * Properties for defining a `CfnUserPoolGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html
 */
export interface CfnUserPoolGroupProps {
    /**
     * A description of the group that you're creating.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-description
     */
    readonly description?: string;
    /**
     * A name for the group.
     *
     * This name must be unique in your user pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-groupname
     */
    readonly groupName?: string;
    /**
     * A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool.
     *
     * Zero is the highest precedence value. Groups with lower `Precedence` values take precedence over groups with higher or null `Precedence` values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the `cognito:roles` and `cognito:preferred_role` claims.
     *
     * Two groups can have the same `Precedence` value. If this happens, neither group takes precedence over the other. If two groups with the same `Precedence` have the same role ARN, that role is used in the `cognito:preferred_role` claim in tokens for users in each group. If the two groups have different role ARNs, the `cognito:preferred_role` claim isn't set in users' tokens.
     *
     * The default `Precedence` value is null. The maximum `Precedence` value is `2^31-1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-precedence
     */
    readonly precedence?: number;
    /**
     * The Amazon Resource Name (ARN) for the IAM role that you want to associate with the group.
     *
     * A group role primarily declares a preferred role for the credentials that you get from an identity pool. Amazon Cognito ID tokens have a `cognito:preferred_role` claim that presents the highest-precedence group that a user belongs to. Both ID and access tokens also contain a `cognito:groups` claim that list all the groups that a user is a member of.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-rolearn
     */
    readonly roleArn?: string;
    /**
     * The ID of the user pool where you want to create a user group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-userpoolid
     */
    readonly userPoolId: string;
}
/**
 * The `AWS::Cognito::UserPoolIdentityProvider` resource creates an identity provider for a user pool.
 *
 * @cloudformationResource AWS::Cognito::UserPoolIdentityProvider
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html
 */
export declare class CfnUserPoolIdentityProvider extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPoolIdentityProvider from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPoolIdentityProvider;
    /**
     * A mapping of IdP attributes to standard and custom user pool attributes.
     */
    attributeMapping?: any | cdk.IResolvable;
    /**
     * An array of IdP identifiers, for example `"IdPIdentifiers": [ "MyIdP", "MyIdP2" ]` .
     */
    idpIdentifiers?: Array<string>;
    /**
     * The scopes, URLs, and identifiers for your external identity provider.
     */
    providerDetails: any | cdk.IResolvable;
    /**
     * The name that you want to assign to the IdP.
     */
    providerName: string;
    /**
     * The type of IdP that you want to add.
     */
    providerType: string;
    /**
     * The Id of the user pool where you want to create an IdP.
     */
    userPoolId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserPoolIdentityProviderProps);
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
 * Properties for defining a `CfnUserPoolIdentityProvider`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html
 */
export interface CfnUserPoolIdentityProviderProps {
    /**
     * A mapping of IdP attributes to standard and custom user pool attributes.
     *
     * Specify a user pool attribute as the key of the key-value pair, and the IdP attribute claim name as the value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-attributemapping
     */
    readonly attributeMapping?: any | cdk.IResolvable;
    /**
     * An array of IdP identifiers, for example `"IdPIdentifiers": [ "MyIdP", "MyIdP2" ]` .
     *
     * Identifiers are friendly names that you can pass in the `idp_identifier` query parameter of requests to the [Authorize endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html) to silently redirect to sign-in with the associated IdP. Identifiers in a domain format also enable the use of [email-address matching with SAML providers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managing-saml-idp-naming.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-idpidentifiers
     */
    readonly idpIdentifiers?: Array<string>;
    /**
     * The scopes, URLs, and identifiers for your external identity provider.
     *
     * The following
     * examples describe the provider detail keys for each IdP type. These values and their
     * schema are subject to change. Social IdP `authorize_scopes` values must match
     * the values listed here.
     *
     * - **OpenID Connect (OIDC)** - Amazon Cognito accepts the following elements when it can't discover endpoint URLs from `oidc_issuer` : `attributes_url` , `authorize_url` , `jwks_uri` , `token_url` .
     *
     * Create or update request: `"ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }`
     *
     * Describe response: `"ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }`
     * - **SAML** - Create or update request with Metadata URL: `"ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" }`
     *
     * Create or update request with Metadata file: `"ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm": "rsa-sha256" }`
     *
     * The value of `MetadataFile` must be the plaintext metadata document with all quote (") characters escaped by backslashes.
     *
     * Describe response: `"ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https://auth.example.com/slo/saml", "SSORedirectBindingURI": "https://auth.example.com/sso/saml" }`
     * - **LoginWithAmazon** - Create or update request: `"ProviderDetails": { "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret"`
     *
     * Describe response: `"ProviderDetails": { "attributes_url": "https://api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https://www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https://api.amazon.com/auth/o2/token" }`
     * - **Google** - Create or update request: `"ProviderDetails": { "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" }`
     *
     * Describe response: `"ProviderDetails": { "attributes_url": "https://people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https://accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https://accounts.google.com", "token_request_method": "POST", "token_url": "https://www.googleapis.com/oauth2/v4/token" }`
     * - **SignInWithApple** - Create or update request: `"ProviderDetails": { "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" }`
     *
     * Describe response: `"ProviderDetails": { "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https://appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https://appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https://appleid.apple.com/auth/token" }`
     * - **Facebook** - Create or update request: `"ProviderDetails": { "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" }`
     *
     * Describe response: `"ProviderDetails": { "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" }`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-providerdetails
     */
    readonly providerDetails: any | cdk.IResolvable;
    /**
     * The name that you want to assign to the IdP.
     *
     * You can pass the identity provider name in the `identity_provider` query parameter of requests to the [Authorize endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html) to silently redirect to sign-in with the associated IdP.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-providername
     */
    readonly providerName: string;
    /**
     * The type of IdP that you want to add.
     *
     * Amazon Cognito supports OIDC, SAML 2.0, Login With Amazon, Sign In With Apple, Google, and Facebook IdPs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-providertype
     */
    readonly providerType: string;
    /**
     * The Id of the user pool where you want to create an IdP.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-userpoolid
     */
    readonly userPoolId: string;
}
/**
 * The `AWS::Cognito::UserPoolResourceServer` resource creates a new OAuth2.0 resource server and defines custom scopes in it.
 *
 * > If you don't specify a value for a parameter, Amazon Cognito sets it to a default value.
 *
 * @cloudformationResource AWS::Cognito::UserPoolResourceServer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html
 */
export declare class CfnUserPoolResourceServer extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPoolResourceServer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPoolResourceServer;
    /**
     * A unique resource server identifier for the resource server.
     */
    identifier: string;
    /**
     * A friendly name for the resource server.
     */
    name: string;
    /**
     * A list of scopes.
     */
    scopes?: Array<cdk.IResolvable | CfnUserPoolResourceServer.ResourceServerScopeTypeProperty> | cdk.IResolvable;
    /**
     * The ID of the user pool where you want to create a resource server.
     */
    userPoolId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserPoolResourceServerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserPoolResourceServer {
    /**
     * One custom scope associated with a user pool resource server.
     *
     * This data type is a member of `ResourceServerScopeType` . For more information, see [Scopes, M2M, and API authorization with resource servers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-define-resource-servers.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html
     */
    interface ResourceServerScopeTypeProperty {
        /**
         * A friendly description of a custom scope.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopedescription
         */
        readonly scopeDescription: string;
        /**
         * The name of the scope.
         *
         * Amazon Cognito renders custom scopes in the format `resourceServerIdentifier/ScopeName` . For example, if this parameter is `exampleScope` in the resource server with the identifier `exampleResourceServer` , you request and receive the scope `exampleResourceServer/exampleScope` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopename
         */
        readonly scopeName: string;
    }
}
/**
 * Properties for defining a `CfnUserPoolResourceServer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html
 */
export interface CfnUserPoolResourceServerProps {
    /**
     * A unique resource server identifier for the resource server.
     *
     * The identifier can be an API friendly name like `solar-system-data` . You can also set an API URL like `https://solar-system-data-api.example.com` as your identifier.
     *
     * Amazon Cognito represents scopes in the access token in the format `$resource-server-identifier/$scope` . Longer scope-identifier strings increase the size of your access tokens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-identifier
     */
    readonly identifier: string;
    /**
     * A friendly name for the resource server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-name
     */
    readonly name: string;
    /**
     * A list of scopes.
     *
     * Each scope is a map with keys `ScopeName` and `ScopeDescription` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-scopes
     */
    readonly scopes?: Array<cdk.IResolvable | CfnUserPoolResourceServer.ResourceServerScopeTypeProperty> | cdk.IResolvable;
    /**
     * The ID of the user pool where you want to create a resource server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-userpoolid
     */
    readonly userPoolId: string;
}
/**
 * The `AWS::Cognito::UserPoolRiskConfigurationAttachment` resource sets the risk configuration that is used for Amazon Cognito advanced security features.
 *
 * You can specify risk configuration for a single client (with a specific `clientId` ) or for all clients (by setting the `clientId` to `ALL` ). If you specify `ALL` , the default configuration is used for every client that has had no risk configuration set previously. If you specify risk configuration for a particular client, it no longer falls back to the `ALL` configuration.
 *
 * @cloudformationResource AWS::Cognito::UserPoolRiskConfigurationAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html
 */
export declare class CfnUserPoolRiskConfigurationAttachment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPoolRiskConfigurationAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPoolRiskConfigurationAttachment;
    /**
     * The settings for automated responses and notification templates for adaptive authentication with threat protection.
     */
    accountTakeoverRiskConfiguration?: CfnUserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationTypeProperty | cdk.IResolvable;
    /**
     * The app client where this configuration is applied.
     */
    clientId: string;
    /**
     * Settings for compromised-credentials actions and authentication types with threat protection in full-function `ENFORCED` mode.
     */
    compromisedCredentialsRiskConfiguration?: CfnUserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationTypeProperty | cdk.IResolvable;
    /**
     * Exceptions to the risk evaluation configuration, including always-allow and always-block IP address ranges.
     */
    riskExceptionConfiguration?: cdk.IResolvable | CfnUserPoolRiskConfigurationAttachment.RiskExceptionConfigurationTypeProperty;
    /**
     * The ID of the user pool that has the risk configuration applied.
     */
    userPoolId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserPoolRiskConfigurationAttachmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserPoolRiskConfigurationAttachment {
    /**
     * Settings for compromised-credentials actions and authentication-event sources with advanced security features in full-function `ENFORCED` mode.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype.html
     */
    interface CompromisedCredentialsRiskConfigurationTypeProperty {
        /**
         * Settings for the actions that you want your user pool to take when Amazon Cognito detects compromised credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype-actions
         */
        readonly actions: CfnUserPoolRiskConfigurationAttachment.CompromisedCredentialsActionsTypeProperty | cdk.IResolvable;
        /**
         * Settings for the sign-in activity where you want to configure compromised-credentials actions.
         *
         * Defaults to all events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype-eventfilter
         */
        readonly eventFilter?: Array<string>;
    }
    /**
     * Settings for user pool actions when Amazon Cognito detects compromised credentials with advanced security features in full-function `ENFORCED` mode.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsactionstype.html
     */
    interface CompromisedCredentialsActionsTypeProperty {
        /**
         * The action that Amazon Cognito takes when it detects compromised credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsactionstype.html#cfn-cognito-userpoolriskconfigurationattachment-compromisedcredentialsactionstype-eventaction
         */
        readonly eventAction: string;
    }
    /**
     * The settings for automated responses and notification templates for adaptive authentication with advanced security features.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype.html
     */
    interface AccountTakeoverRiskConfigurationTypeProperty {
        /**
         * A list of account-takeover actions for each level of risk that Amazon Cognito might assess with threat protection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-actions
         */
        readonly actions: CfnUserPoolRiskConfigurationAttachment.AccountTakeoverActionsTypeProperty | cdk.IResolvable;
        /**
         * The settings for composing and sending an email message when threat protection assesses a risk level with adaptive authentication.
         *
         * When you choose to notify users in `AccountTakeoverRiskConfiguration` , Amazon Cognito sends an email message using the method and template that you set with this data type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-notifyconfiguration
         */
        readonly notifyConfiguration?: cdk.IResolvable | CfnUserPoolRiskConfigurationAttachment.NotifyConfigurationTypeProperty;
    }
    /**
     * A list of account-takeover actions for each level of risk that Amazon Cognito might assess with advanced security features.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.html
     */
    interface AccountTakeoverActionsTypeProperty {
        /**
         * The action that you assign to a high-risk assessment by threat protection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype-highaction
         */
        readonly highAction?: CfnUserPoolRiskConfigurationAttachment.AccountTakeoverActionTypeProperty | cdk.IResolvable;
        /**
         * The action that you assign to a low-risk assessment by threat protection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype-lowaction
         */
        readonly lowAction?: CfnUserPoolRiskConfigurationAttachment.AccountTakeoverActionTypeProperty | cdk.IResolvable;
        /**
         * The action that you assign to a medium-risk assessment by threat protection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype-mediumaction
         */
        readonly mediumAction?: CfnUserPoolRiskConfigurationAttachment.AccountTakeoverActionTypeProperty | cdk.IResolvable;
    }
    /**
     * The automated response to a risk level for adaptive authentication in full-function, or `ENFORCED` , mode.
     *
     * You can assign an action to each risk level that advanced security features evaluates.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.html
     */
    interface AccountTakeoverActionTypeProperty {
        /**
         * The action to take for the attempted account takeover action for the associated risk level.
         *
         * Valid values are as follows:
         *
         * - `BLOCK` : Block the request.
         * - `MFA_IF_CONFIGURED` : Present an MFA challenge if possible. MFA is possible if the user pool has active MFA methods that the user can set up. For example, if the user pool only supports SMS message MFA but the user doesn't have a phone number attribute, MFA setup isn't possible. If MFA setup isn't possible, allow the request.
         * - `MFA_REQUIRED` : Present an MFA challenge if possible. Block the request if a user hasn't set up MFA. To sign in with required MFA, users must have an email address or phone number attribute, or a registered TOTP factor.
         * - `NO_ACTION` : Take no action. Permit sign-in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype-eventaction
         */
        readonly eventAction: string;
        /**
         * Determines whether Amazon Cognito sends a user a notification message when your user pools assesses a user's session at the associated risk level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype-notify
         */
        readonly notify: boolean | cdk.IResolvable;
    }
    /**
     * The configuration for Amazon SES email messages that advanced security features sends to a user when your adaptive authentication automated response has a *Notify* action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html
     */
    interface NotifyConfigurationTypeProperty {
        /**
         * The template for the email message that your user pool sends when a detected risk event is blocked.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-blockemail
         */
        readonly blockEmail?: cdk.IResolvable | CfnUserPoolRiskConfigurationAttachment.NotifyEmailTypeProperty;
        /**
         * The email address that sends the email message.
         *
         * The address must be either individually verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-from
         */
        readonly from?: string;
        /**
         * The template for the email message that your user pool sends when MFA is challenged in response to a detected risk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-mfaemail
         */
        readonly mfaEmail?: cdk.IResolvable | CfnUserPoolRiskConfigurationAttachment.NotifyEmailTypeProperty;
        /**
         * The template for the email message that your user pool sends when no action is taken in response to a detected risk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-noactionemail
         */
        readonly noActionEmail?: cdk.IResolvable | CfnUserPoolRiskConfigurationAttachment.NotifyEmailTypeProperty;
        /**
         * The reply-to email address of an email template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-replyto
         */
        readonly replyTo?: string;
        /**
         * The Amazon Resource Name (ARN) of the identity that is associated with the sending authorization policy.
         *
         * This identity permits Amazon Cognito to send for the email address specified in the `From` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-sourcearn
         */
        readonly sourceArn: string;
    }
    /**
     * The template for email messages that advanced security features sends to a user when your threat protection automated response has a *Notify* action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html
     */
    interface NotifyEmailTypeProperty {
        /**
         * The body of an email notification formatted in HTML.
         *
         * Choose an `HtmlBody` or a `TextBody` to send an HTML-formatted or plaintext message, respectively.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-htmlbody
         */
        readonly htmlBody?: string;
        /**
         * The subject of the threat protection email notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-subject
         */
        readonly subject: string;
        /**
         * The body of an email notification formatted in plaintext.
         *
         * Choose an `HtmlBody` or a `TextBody` to send an HTML-formatted or plaintext message, respectively.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-textbody
         */
        readonly textBody?: string;
    }
    /**
     * Exceptions to the risk evaluation configuration, including always-allow and always-block IP address ranges.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype.html
     */
    interface RiskExceptionConfigurationTypeProperty {
        /**
         * An always-block IP address list.
         *
         * Overrides the risk decision and always blocks authentication requests. This parameter is displayed and set in CIDR notation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype-blockediprangelist
         */
        readonly blockedIpRangeList?: Array<string>;
        /**
         * An always-allow IP address list.
         *
         * Risk detection isn't performed on the IP addresses in this range list. This parameter is displayed and set in CIDR notation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype.html#cfn-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype-skippediprangelist
         */
        readonly skippedIpRangeList?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnUserPoolRiskConfigurationAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html
 */
export interface CfnUserPoolRiskConfigurationAttachmentProps {
    /**
     * The settings for automated responses and notification templates for adaptive authentication with threat protection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfiguration
     */
    readonly accountTakeoverRiskConfiguration?: CfnUserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationTypeProperty | cdk.IResolvable;
    /**
     * The app client where this configuration is applied.
     *
     * When this parameter isn't present, the risk configuration applies to all user pool app clients that don't have client-level settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-clientid
     */
    readonly clientId: string;
    /**
     * Settings for compromised-credentials actions and authentication types with threat protection in full-function `ENFORCED` mode.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfiguration
     */
    readonly compromisedCredentialsRiskConfiguration?: CfnUserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationTypeProperty | cdk.IResolvable;
    /**
     * Exceptions to the risk evaluation configuration, including always-allow and always-block IP address ranges.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-riskexceptionconfiguration
     */
    readonly riskExceptionConfiguration?: cdk.IResolvable | CfnUserPoolRiskConfigurationAttachment.RiskExceptionConfigurationTypeProperty;
    /**
     * The ID of the user pool that has the risk configuration applied.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-userpoolid
     */
    readonly userPoolId: string;
}
/**
 * A container for the UI customization information for the hosted UI in a user pool.
 *
 * @cloudformationResource AWS::Cognito::UserPoolUICustomizationAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html
 */
export declare class CfnUserPoolUICustomizationAttachment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPoolUICustomizationAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPoolUICustomizationAttachment;
    /**
     * The app client ID for your UI customization.
     */
    clientId: string;
    /**
     * A plaintext CSS file that contains the custom fields that you want to apply to your user pool or app client.
     */
    css?: string;
    /**
     * The ID of the user pool where you want to apply branding to the classic hosted UI.
     */
    userPoolId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserPoolUICustomizationAttachmentProps);
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
 * Properties for defining a `CfnUserPoolUICustomizationAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html
 */
export interface CfnUserPoolUICustomizationAttachmentProps {
    /**
     * The app client ID for your UI customization.
     *
     * When this value isn't present, the customization applies to all user pool app clients that don't have client-level settings..
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#cfn-cognito-userpooluicustomizationattachment-clientid
     */
    readonly clientId: string;
    /**
     * A plaintext CSS file that contains the custom fields that you want to apply to your user pool or app client.
     *
     * To download a template, go to the Amazon Cognito console. Navigate to your user pool *App clients* tab, select *Login pages* , edit *Hosted UI (classic) style* , and select the link to `CSS template.css` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#cfn-cognito-userpooluicustomizationattachment-css
     */
    readonly css?: string;
    /**
     * The ID of the user pool where you want to apply branding to the classic hosted UI.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#cfn-cognito-userpooluicustomizationattachment-userpoolid
     */
    readonly userPoolId: string;
}
/**
 * The `AWS::Cognito::UserPoolUser` resource creates an Amazon Cognito user pool user.
 *
 * @cloudformationResource AWS::Cognito::UserPoolUser
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html
 */
export declare class CfnUserPoolUser extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPoolUser from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPoolUser;
    /**
     * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.
     */
    clientMetadata?: cdk.IResolvable | Record<string, string>;
    /**
     * Specify `EMAIL` if email will be used to send the welcome message.
     */
    desiredDeliveryMediums?: Array<string>;
    /**
     * This parameter is used only if the `phone_number_verified` or `email_verified` attribute is set to `True` .
     */
    forceAliasCreation?: boolean | cdk.IResolvable;
    /**
     * Set to `RESEND` to resend the invitation message to a user that already exists, and to reset the temporary-password duration with a new temporary password.
     */
    messageAction?: string;
    /**
     * An array of name-value pairs that contain user attributes and attribute values to be set for the user to be created.
     */
    userAttributes?: Array<CfnUserPoolUser.AttributeTypeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The value that you want to set as the username sign-in attribute.
     */
    username?: string;
    /**
     * The ID of the user pool where you want to create a user.
     */
    userPoolId: string;
    /**
     * Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda trigger.
     */
    validationData?: Array<CfnUserPoolUser.AttributeTypeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserPoolUserProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserPoolUser {
    /**
     * The name and value of a user attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooluser-attributetype.html
     */
    interface AttributeTypeProperty {
        /**
         * The name of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooluser-attributetype.html#cfn-cognito-userpooluser-attributetype-name
         */
        readonly name?: string;
        /**
         * The value of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooluser-attributetype.html#cfn-cognito-userpooluser-attributetype-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnUserPoolUser`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html
 */
export interface CfnUserPoolUserProps {
    /**
     * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.
     *
     * You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the AdminCreateUser API action, Amazon Cognito invokes the function that is assigned to the *pre sign-up* trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a `ClientMetadata` attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminCreateUser request. In your function code in AWS Lambda , you can process the `clientMetadata` value to enhance your workflow for your specific needs.
     *
     * For more information, see [Using Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html) in the *Amazon Cognito Developer Guide* .
     *
     * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
     * >
     * > - Store the `ClientMetadata` value. This data is available only to AWS Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
     * > - Validate the `ClientMetadata` value.
     * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-clientmetadata
     */
    readonly clientMetadata?: cdk.IResolvable | Record<string, string>;
    /**
     * Specify `EMAIL` if email will be used to send the welcome message.
     *
     * Specify `SMS` if the phone number will be used. The default value is `SMS` . You can specify more than one value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-desireddeliverymediums
     */
    readonly desiredDeliveryMediums?: Array<string>;
    /**
     * This parameter is used only if the `phone_number_verified` or `email_verified` attribute is set to `True` .
     *
     * Otherwise, it is ignored.
     *
     * If this parameter is set to `True` and the phone number or email address specified in the `UserAttributes` parameter already exists as an alias with a different user, this request migrates the alias from the previous user to the newly-created user. The previous user will no longer be able to log in using that alias.
     *
     * If this parameter is set to `False` , the API throws an `AliasExistsException` error if the alias already exists. The default value is `False` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-forcealiascreation
     */
    readonly forceAliasCreation?: boolean | cdk.IResolvable;
    /**
     * Set to `RESEND` to resend the invitation message to a user that already exists, and to reset the temporary-password duration with a new temporary password.
     *
     * Set to `SUPPRESS` to suppress sending the message. You can specify only one value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-messageaction
     */
    readonly messageAction?: string;
    /**
     * An array of name-value pairs that contain user attributes and attribute values to be set for the user to be created.
     *
     * You can create a user without specifying any attributes other than `Username` . However, any attributes that you specify as required (when creating a user pool or in the *Attributes* tab of the console) either you should supply (in your call to `AdminCreateUser` ) or the user should supply (when they sign up in response to your welcome message).
     *
     * For custom attributes, you must prepend the `custom:` prefix to the attribute name.
     *
     * To send a message inviting the user to sign up, you must specify the user's email address or phone number. You can do this in your call to AdminCreateUser or in the *Users* tab of the Amazon Cognito console for managing your user pools.
     *
     * You must also provide an email address or phone number when you expect the user to do passwordless sign-in with an email or SMS OTP. These attributes must be provided when passwordless options are the only available, or when you don't submit a `TemporaryPassword` .
     *
     * In your call to `AdminCreateUser` , you can set the `email_verified` attribute to `True` , and you can set the `phone_number_verified` attribute to `True` .
     *
     * - *email* : The email address of the user to whom the message that contains the code and username will be sent. Required if the `email_verified` attribute is set to `True` , or if `"EMAIL"` is specified in the `DesiredDeliveryMediums` parameter.
     * - *phone_number* : The phone number of the user to whom the message that contains the code and username will be sent. Required if the `phone_number_verified` attribute is set to `True` , or if `"SMS"` is specified in the `DesiredDeliveryMediums` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-userattributes
     */
    readonly userAttributes?: Array<CfnUserPoolUser.AttributeTypeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The value that you want to set as the username sign-in attribute.
     *
     * The following conditions apply to the username parameter.
     *
     * - The username can't be a duplicate of another username in the same user pool.
     * - You can't change the value of a username after you create it.
     * - You can only provide a value if usernames are a valid sign-in attribute for your user pool. If your user pool only supports phone numbers or email addresses as sign-in attributes, Amazon Cognito automatically generates a username value. For more information, see [Customizing sign-in attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-username
     */
    readonly username?: string;
    /**
     * The ID of the user pool where you want to create a user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-userpoolid
     */
    readonly userPoolId: string;
    /**
     * Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda trigger.
     *
     * This set of key-value pairs are for custom validation of information that you collect from your users but don't need to retain.
     *
     * Your Lambda function can analyze this additional data and act on it. Your function can automatically confirm and verify select users or perform external API operations like logging user attributes and validation data to Amazon CloudWatch Logs.
     *
     * For more information about the pre sign-up Lambda trigger, see [Pre sign-up Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-validationdata
     */
    readonly validationData?: Array<CfnUserPoolUser.AttributeTypeProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * Adds a user to a group.
 *
 * A user who is in a group can present a preferred-role claim to an identity pool, and populates a `cognito:groups` claim to their access and identity tokens.
 *
 * > Amazon Cognito evaluates AWS Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.
 * >
 * > **Learn more** - [Signing AWS API Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
 * > - [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html)
 *
 * @cloudformationResource AWS::Cognito::UserPoolUserToGroupAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html
 */
export declare class CfnUserPoolUserToGroupAttachment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserPoolUserToGroupAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserPoolUserToGroupAttachment;
    /**
     * The name of the group that you want to add your user to.
     */
    groupName: string;
    /**
     * The user's username.
     */
    username: string;
    /**
     * The ID of the user pool that contains the group that you want to add the user to.
     */
    userPoolId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserPoolUserToGroupAttachmentProps);
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
 * Properties for defining a `CfnUserPoolUserToGroupAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html
 */
export interface CfnUserPoolUserToGroupAttachmentProps {
    /**
     * The name of the group that you want to add your user to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html#cfn-cognito-userpoolusertogroupattachment-groupname
     */
    readonly groupName: string;
    /**
     * The user's username.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html#cfn-cognito-userpoolusertogroupattachment-username
     */
    readonly username: string;
    /**
     * The ID of the user pool that contains the group that you want to add the user to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html#cfn-cognito-userpoolusertogroupattachment-userpoolid
     */
    readonly userPoolId: string;
}
/**
 * Sets up or modifies the logging configuration of a user pool.
 *
 * User pools can export user notification logs and, when threat protection is active, user-activity logs. For more information, see [Exporting user pool logs](https://docs.aws.amazon.com/cognito/latest/developerguide/exporting-quotas-and-usage.html) .
 *
 * @cloudformationResource AWS::Cognito::LogDeliveryConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html
 */
export declare class CfnLogDeliveryConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLogDeliveryConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLogDeliveryConfiguration;
    /**
     * A user pool ID, for example `us-east-1_EXAMPLE` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A logging destination of a user pool.
     */
    logConfigurations?: Array<cdk.IResolvable | CfnLogDeliveryConfiguration.LogConfigurationProperty> | cdk.IResolvable;
    /**
     * The ID of the user pool where you configured logging.
     */
    userPoolId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLogDeliveryConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLogDeliveryConfiguration {
    /**
     * The configuration of user event logs to an external AWS service like Amazon Data Firehose, Amazon S3, or Amazon CloudWatch Logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html
     */
    interface LogConfigurationProperty {
        /**
         * Configuration for the CloudWatch log group destination of user pool detailed activity logging, or of user activity log export with advanced security features.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-cloudwatchlogsconfiguration
         */
        readonly cloudWatchLogsConfiguration?: CfnLogDeliveryConfiguration.CloudWatchLogsConfigurationProperty | cdk.IResolvable;
        /**
         * The source of events that your user pool sends for logging.
         *
         * To send error-level logs about user notification activity, set to `userNotification` . To send info-level logs about threat-protection user activity in user pools with the Plus feature plan, set to `userAuthEvents` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-eventsource
         */
        readonly eventSource?: string;
        /**
         * Configuration for the Amazon Data Firehose stream destination of user activity log export with threat protection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-firehoseconfiguration
         */
        readonly firehoseConfiguration?: CfnLogDeliveryConfiguration.FirehoseConfigurationProperty | cdk.IResolvable;
        /**
         * The `errorlevel` selection of logs that a user pool sends for detailed activity logging.
         *
         * To send `userNotification` activity with [information about message delivery](https://docs.aws.amazon.com/cognito/latest/developerguide/exporting-quotas-and-usage.html) , choose `ERROR` with `CloudWatchLogsConfiguration` . To send `userAuthEvents` activity with user logs from threat protection with the Plus feature plan, choose `INFO` with one of `CloudWatchLogsConfiguration` , `FirehoseConfiguration` , or `S3Configuration` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-loglevel
         */
        readonly logLevel?: string;
        /**
         * Configuration for the Amazon S3 bucket destination of user activity log export with threat protection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-s3configuration
         */
        readonly s3Configuration?: cdk.IResolvable | CfnLogDeliveryConfiguration.S3ConfigurationProperty;
    }
    /**
     * Configuration for the CloudWatch log group destination of user pool detailed activity logging, or of user activity log export with advanced security features.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-cloudwatchlogsconfiguration.html
     */
    interface CloudWatchLogsConfigurationProperty {
        /**
         * The Amazon Resource Name (arn) of a CloudWatch Logs log group where your user pool sends logs.
         *
         * The log group must not be encrypted with AWS Key Management Service and must be in the same AWS account as your user pool.
         *
         * To send logs to log groups with a resource policy of a size greater than 5120 characters, configure a log group with a path that starts with `/aws/vendedlogs` . For more information, see [Enabling logging from certain AWS services](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-cloudwatchlogsconfiguration.html#cfn-cognito-logdeliveryconfiguration-cloudwatchlogsconfiguration-loggrouparn
         */
        readonly logGroupArn?: string;
    }
    /**
     * Configuration for the Amazon S3 bucket destination of user activity log export with threat protection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-s3configuration.html
     */
    interface S3ConfigurationProperty {
        /**
         * The ARN of an Amazon S3 bucket that's the destination for threat protection log export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-s3configuration.html#cfn-cognito-logdeliveryconfiguration-s3configuration-bucketarn
         */
        readonly bucketArn?: string;
    }
    /**
     * Configuration for the Amazon Data Firehose stream destination of user activity log export with threat protection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-firehoseconfiguration.html
     */
    interface FirehoseConfigurationProperty {
        /**
         * The ARN of an Amazon Data Firehose stream that's the destination for threat protection log export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-logdeliveryconfiguration-firehoseconfiguration.html#cfn-cognito-logdeliveryconfiguration-firehoseconfiguration-streamarn
         */
        readonly streamArn?: string;
    }
}
/**
 * Properties for defining a `CfnLogDeliveryConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html
 */
export interface CfnLogDeliveryConfigurationProps {
    /**
     * A logging destination of a user pool.
     *
     * User pools can have multiple logging destinations for message-delivery and user-activity logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfigurations
     */
    readonly logConfigurations?: Array<cdk.IResolvable | CfnLogDeliveryConfiguration.LogConfigurationProperty> | cdk.IResolvable;
    /**
     * The ID of the user pool where you configured logging.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-userpoolid
     */
    readonly userPoolId: string;
}
/**
 * Creates a new set of branding settings for a user pool style and associates it with an app client.
 *
 * This operation is the programmatic option for the creation of a new style in the branding designer.
 *
 * Provides values for UI customization in a `Settings` JSON object and image files in an `Assets` array. To send the JSON object `Document` type parameter in `Settings` , you might need to update to the most recent version of your AWS SDK.
 *
 * This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit.
 *
 * As a best practice, modify the output of [DescribeManagedLoginBrandingByClient](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeManagedLoginBrandingByClient.html) into the request parameters for this operation. To get all settings, set `ReturnMergedResources` to `true` . For more information, see [API and SDK operations for managed login branding](https://docs.aws.amazon.com/cognito/latest/developerguide/managed-login-brandingdesigner.html#branding-designer-api)
 *
 * @cloudformationResource AWS::Cognito::ManagedLoginBranding
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html
 */
export declare class CfnManagedLoginBranding extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnManagedLoginBranding from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnManagedLoginBranding;
    /**
     * The ID of the managed login branding style.
     *
     * @cloudformationAttribute ManagedLoginBrandingId
     */
    readonly attrManagedLoginBrandingId: string;
    /**
     * An array of image files that you want to apply to roles like backgrounds, logos, and icons.
     */
    assets?: Array<CfnManagedLoginBranding.AssetTypeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The app client that's assigned to the branding style that you want more information about.
     */
    clientId?: string;
    /**
     * When `true` , returns values for branding options that are unchanged from Amazon Cognito defaults.
     */
    returnMergedResources?: boolean | cdk.IResolvable;
    /**
     * A JSON file, encoded as a `Document` type, with the the settings that you want to apply to your style.
     */
    settings?: any | cdk.IResolvable;
    /**
     * When true, applies the default branding style options.
     */
    useCognitoProvidedValues?: boolean | cdk.IResolvable;
    /**
     * The user pool where the branding style is assigned.
     */
    userPoolId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnManagedLoginBrandingProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnManagedLoginBranding {
    /**
     * An image file from a managed login branding style in a user pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-assettype.html
     */
    interface AssetTypeProperty {
        /**
         * The image file, in Base64-encoded binary.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-assettype.html#cfn-cognito-managedloginbranding-assettype-bytes
         */
        readonly bytes?: string;
        /**
         * The category that the image corresponds to in your managed login configuration.
         *
         * Managed login has asset categories for different types of logos, backgrounds, and icons.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-assettype.html#cfn-cognito-managedloginbranding-assettype-category
         */
        readonly category: string;
        /**
         * The display-mode target of the asset: light, dark, or browser-adaptive.
         *
         * For example, Amazon Cognito displays a dark-mode image only when the browser or application is in dark mode, but displays a browser-adaptive file in all contexts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-assettype.html#cfn-cognito-managedloginbranding-assettype-colormode
         */
        readonly colorMode: string;
        /**
         * The file type of the image file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-assettype.html#cfn-cognito-managedloginbranding-assettype-extension
         */
        readonly extension: string;
        /**
         * The ID of the asset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-assettype.html#cfn-cognito-managedloginbranding-assettype-resourceid
         */
        readonly resourceId?: string;
    }
}
/**
 * Properties for defining a `CfnManagedLoginBranding`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html
 */
export interface CfnManagedLoginBrandingProps {
    /**
     * An array of image files that you want to apply to roles like backgrounds, logos, and icons.
     *
     * Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-assets
     */
    readonly assets?: Array<CfnManagedLoginBranding.AssetTypeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The app client that's assigned to the branding style that you want more information about.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-clientid
     */
    readonly clientId?: string;
    /**
     * When `true` , returns values for branding options that are unchanged from Amazon Cognito defaults.
     *
     * When `false` or when you omit this parameter, returns only values that you customized in your branding style.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-returnmergedresources
     */
    readonly returnMergedResources?: boolean | cdk.IResolvable;
    /**
     * A JSON file, encoded as a `Document` type, with the the settings that you want to apply to your style.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-settings
     */
    readonly settings?: any | cdk.IResolvable;
    /**
     * When true, applies the default branding style options.
     *
     * This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding designer.
     *
     * When you specify `true` for this option, you must also omit values for `Settings` and `Assets` in the request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-usecognitoprovidedvalues
     */
    readonly useCognitoProvidedValues?: boolean | cdk.IResolvable;
    /**
     * The user pool where the branding style is assigned.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-userpoolid
     */
    readonly userPoolId: string;
}
