import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates or updates a reference to Amazon Cognito as an external identity provider.
 *
 * If you are creating a new identity source, then you must specify a `Configuration` . If you are updating an existing identity source, then you must specify an `UpdateConfiguration` .
 *
 * After you create an identity source, you can use the identities provided by the IdP as proxies for the principal in authorization queries that use the [IsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html) operation. These identities take the form of tokens that contain claims about the user, such as IDs, attributes and group memberships. Amazon Cognito provides both identity tokens and access tokens, and Verified Permissions can use either or both. Any combination of identity and access tokens results in the same Cedar principal. Verified Permissions automatically translates the information about the identities into the standard Cedar attributes that can be evaluated by your policies. Because the Amazon Cognito identity and access tokens can contain different information, the tokens you choose to use determine the attributes that are available to access in the Cedar principal from your policies.
 *
 * Amazon Cognito Identity is not available in all of the same AWS Regions as Amazon Verified Permissions . Because of this, the `AWS::VerifiedPermissions::IdentitySource` type is not available to create from AWS CloudFormation in Regions where Amazon Cognito Identity is not currently available. Users can still create `AWS::VerifiedPermissions::IdentitySource` in those Regions, but only from the AWS CLI , Amazon Verified Permissions SDK, or from the AWS console.
 *
 * > To reference a user from this identity source in your Cedar policies, use the following syntax.
 * >
 * > *IdentityType::"<CognitoUserPoolIdentifier>|<CognitoClientId>*
 * >
 * > Where `IdentityType` is the string that you provide to the `PrincipalEntityType` parameter for this operation. The `CognitoUserPoolId` and `CognitoClientId` are defined by the Amazon Cognito user pool.
 *
 * @cloudformationResource AWS::VerifiedPermissions::IdentitySource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html
 */
export declare class CfnIdentitySource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIdentitySource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIdentitySource;
    /**
     * @cloudformationAttribute Details
     */
    readonly attrDetails: cdk.IResolvable;
    /**
     * @cloudformationAttribute Details.ClientIds
     */
    readonly attrDetailsClientIds: Array<string>;
    /**
     * @cloudformationAttribute Details.DiscoveryUrl
     */
    readonly attrDetailsDiscoveryUrl: string;
    /**
     * @cloudformationAttribute Details.OpenIdIssuer
     */
    readonly attrDetailsOpenIdIssuer: string;
    /**
     * @cloudformationAttribute Details.UserPoolArn
     */
    readonly attrDetailsUserPoolArn: string;
    /**
     * The unique ID of the new or updated identity store.
     *
     * @cloudformationAttribute IdentitySourceId
     */
    readonly attrIdentitySourceId: string;
    /**
     * Contains configuration information used when creating a new identity source.
     */
    configuration: CfnIdentitySource.IdentitySourceConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the ID of the policy store in which you want to store this identity source.
     */
    policyStoreId: string;
    /**
     * Specifies the namespace and data type of the principals generated for identities authenticated by the new identity source.
     */
    principalEntityType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIdentitySourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIdentitySource {
    /**
     * A structure that contains configuration information used when creating or updating a new identity source.
     *
     * > At this time, the only valid member of this structure is a Amazon Cognito user pool configuration.
     * >
     * > You must specify a `userPoolArn` , and optionally, a `ClientId` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourceconfiguration.html
     */
    interface IdentitySourceConfigurationProperty {
        /**
         * A structure that contains configuration information used when creating or updating an identity source that represents a connection to an Amazon Cognito user pool used as an identity provider for Verified Permissions .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourceconfiguration.html#cfn-verifiedpermissions-identitysource-identitysourceconfiguration-cognitouserpoolconfiguration
         */
        readonly cognitoUserPoolConfiguration?: CfnIdentitySource.CognitoUserPoolConfigurationProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourceconfiguration.html#cfn-verifiedpermissions-identitysource-identitysourceconfiguration-openidconnectconfiguration
         */
        readonly openIdConnectConfiguration?: cdk.IResolvable | CfnIdentitySource.OpenIdConnectConfigurationProperty;
    }
    /**
     * A structure that contains configuration information used when creating or updating an identity source that represents a connection to an Amazon Cognito user pool used as an identity provider for Verified Permissions .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitouserpoolconfiguration.html
     */
    interface CognitoUserPoolConfigurationProperty {
        /**
         * The unique application client IDs that are associated with the specified Amazon Cognito user pool.
         *
         * Example: `"ClientIds": ["&ExampleCogClientId;"]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitouserpoolconfiguration.html#cfn-verifiedpermissions-identitysource-cognitouserpoolconfiguration-clientids
         */
        readonly clientIds?: Array<string>;
        /**
         * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitouserpoolconfiguration.html#cfn-verifiedpermissions-identitysource-cognitouserpoolconfiguration-groupconfiguration
         */
        readonly groupConfiguration?: CfnIdentitySource.CognitoGroupConfigurationProperty | cdk.IResolvable;
        /**
         * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com//general/latest/gr/aws-arns-and-namespaces.html) of the Amazon Cognito user pool that contains the identities to be authorized.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitouserpoolconfiguration.html#cfn-verifiedpermissions-identitysource-cognitouserpoolconfiguration-userpoolarn
         */
        readonly userPoolArn: string;
    }
    /**
     * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitogroupconfiguration.html
     */
    interface CognitoGroupConfigurationProperty {
        /**
         * The name of the schema entity type that's mapped to the user pool group.
         *
         * Defaults to `AWS::CognitoGroup` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-cognitogroupconfiguration.html#cfn-verifiedpermissions-identitysource-cognitogroupconfiguration-groupentitytype
         */
        readonly groupEntityType: string;
    }
    /**
     * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities.
     *
     * It specifies the issuer URL, token type that you want to use, and policy store entity details.
     *
     * This data type is part of a [Configuration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_Configuration.html) structure, which is a parameter to [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectconfiguration.html
     */
    interface OpenIdConnectConfigurationProperty {
        /**
         * A descriptive string that you want to prefix to user entities from your OIDC identity provider.
         *
         * For example, if you set an `entityIdPrefix` of `MyOIDCProvider` , you can reference principals in your policies in the format `MyCorp::User::MyOIDCProvider|Carlos` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectconfiguration-entityidprefix
         */
        readonly entityIdPrefix?: string;
        /**
         * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to.
         *
         * For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectconfiguration-groupconfiguration
         */
        readonly groupConfiguration?: cdk.IResolvable | CfnIdentitySource.OpenIdConnectGroupConfigurationProperty;
        /**
         * The issuer URL of an OIDC identity provider.
         *
         * This URL must have an OIDC discovery endpoint at the path `.well-known/openid-configuration` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectconfiguration-issuer
         */
        readonly issuer: string;
        /**
         * The token type that you want to process from your OIDC identity provider.
         *
         * Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectconfiguration-tokenselection
         */
        readonly tokenSelection: cdk.IResolvable | CfnIdentitySource.OpenIdConnectTokenSelectionProperty;
    }
    /**
     * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to.
     *
     * For example, this object can map the contents of a `groups` claim to `MyCorp::UserGroup` .
     *
     * This data type is part of a [OpenIdConnectConfiguration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfiguration.html) structure, which is a parameter of [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectgroupconfiguration.html
     */
    interface OpenIdConnectGroupConfigurationProperty {
        /**
         * The token claim that you want Verified Permissions to interpret as group membership.
         *
         * For example, `groups` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectgroupconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectgroupconfiguration-groupclaim
         */
        readonly groupClaim: string;
        /**
         * The policy store entity type that you want to map your users' group claim to.
         *
         * For example, `MyCorp::UserGroup` . A group entity type is an entity that can have a user entity type as a member.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectgroupconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectgroupconfiguration-groupentitytype
         */
        readonly groupEntityType: string;
    }
    /**
     * The token type that you want to process from your OIDC identity provider.
     *
     * Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
     *
     * This data type is part of a [OpenIdConnectConfiguration](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectConfiguration.html) structure, which is a parameter of [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnecttokenselection.html
     */
    interface OpenIdConnectTokenSelectionProperty {
        /**
         * The OIDC configuration for processing access tokens.
         *
         * Contains allowed audience claims, for example `https://auth.example.com` , and the claim that you want to map to the principal, for example `sub` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnecttokenselection.html#cfn-verifiedpermissions-identitysource-openidconnecttokenselection-accesstokenonly
         */
        readonly accessTokenOnly?: cdk.IResolvable | CfnIdentitySource.OpenIdConnectAccessTokenConfigurationProperty;
        /**
         * The OIDC configuration for processing identity (ID) tokens.
         *
         * Contains allowed client ID claims, for example `1example23456789` , and the claim that you want to map to the principal, for example `sub` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnecttokenselection.html#cfn-verifiedpermissions-identitysource-openidconnecttokenselection-identitytokenonly
         */
        readonly identityTokenOnly?: cdk.IResolvable | CfnIdentitySource.OpenIdConnectIdentityTokenConfigurationProperty;
    }
    /**
     * The configuration of an OpenID Connect (OIDC) identity source for handling access token claims.
     *
     * Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
     *
     * This data type is part of a [OpenIdConnectTokenSelection](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelection.html) structure, which is a parameter of [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectaccesstokenconfiguration.html
     */
    interface OpenIdConnectAccessTokenConfigurationProperty {
        /**
         * The access token `aud` claim values that you want to accept in your policy store.
         *
         * For example, `https://myapp.example.com, https://myapp2.example.com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectaccesstokenconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectaccesstokenconfiguration-audiences
         */
        readonly audiences?: Array<string>;
        /**
         * The claim that determines the principal in OIDC access tokens.
         *
         * For example, `sub` .
         *
         * @default - "sub"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectaccesstokenconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectaccesstokenconfiguration-principalidclaim
         */
        readonly principalIdClaim?: string;
    }
    /**
     * The configuration of an OpenID Connect (OIDC) identity source for handling identity (ID) token claims.
     *
     * Contains the claim that you want to identify as the principal in an authorization request, and the values of the `aud` claim, or audiences, that you want to accept.
     *
     * This data type is part of a [OpenIdConnectTokenSelection](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_OpenIdConnectTokenSelection.html) structure, which is a parameter of [CreateIdentitySource](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectidentitytokenconfiguration.html
     */
    interface OpenIdConnectIdentityTokenConfigurationProperty {
        /**
         * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider.
         *
         * For example, `1example23456789, 2example10111213` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectidentitytokenconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectidentitytokenconfiguration-clientids
         */
        readonly clientIds?: Array<string>;
        /**
         * The claim that determines the principal in OIDC access tokens.
         *
         * For example, `sub` .
         *
         * @default - "sub"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-openidconnectidentitytokenconfiguration.html#cfn-verifiedpermissions-identitysource-openidconnectidentitytokenconfiguration-principalidclaim
         */
        readonly principalIdClaim?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourcedetails.html
     */
    interface IdentitySourceDetailsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourcedetails.html#cfn-verifiedpermissions-identitysource-identitysourcedetails-clientids
         */
        readonly clientIds?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourcedetails.html#cfn-verifiedpermissions-identitysource-identitysourcedetails-discoveryurl
         */
        readonly discoveryUrl?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourcedetails.html#cfn-verifiedpermissions-identitysource-identitysourcedetails-openidissuer
         */
        readonly openIdIssuer?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-identitysource-identitysourcedetails.html#cfn-verifiedpermissions-identitysource-identitysourcedetails-userpoolarn
         */
        readonly userPoolArn?: string;
    }
}
/**
 * Properties for defining a `CfnIdentitySource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html
 */
export interface CfnIdentitySourceProps {
    /**
     * Contains configuration information used when creating a new identity source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html#cfn-verifiedpermissions-identitysource-configuration
     */
    readonly configuration: CfnIdentitySource.IdentitySourceConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the ID of the policy store in which you want to store this identity source.
     *
     * Only policies and requests made using this policy store can reference identities from the identity provider configured in the new identity source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html#cfn-verifiedpermissions-identitysource-policystoreid
     */
    readonly policyStoreId: string;
    /**
     * Specifies the namespace and data type of the principals generated for identities authenticated by the new identity source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-identitysource.html#cfn-verifiedpermissions-identitysource-principalentitytype
     */
    readonly principalEntityType?: string;
}
/**
 * Creates or updates a Cedar policy and saves it in the specified policy store.
 *
 * You can create either a static policy or a policy linked to a policy template.
 *
 * You can directly update only static policies. To update a template-linked policy, you must update its linked policy template instead.
 *
 * - To create a static policy, in the `Definition` include a `Static` element that includes the Cedar policy text in the `Statement` element.
 * - To create a policy that is dynamically linked to a policy template, in the `Definition` include a `Templatelinked` element that specifies the policy template ID and the principal and resource to associate with this policy. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template.
 *
 * > - If policy validation is enabled in the policy store, then updating a static policy causes Verified Permissions to validate the policy against the schema in the policy store. If the updated static policy doesn't pass validation, the operation fails and the update isn't stored.
 * > - When you edit a static policy, You can change only certain elements of a static policy:
 * >
 * > - The action referenced by the policy.
 * > - A condition clause, such as when and unless.
 * >
 * > You can't change these elements of a static policy:
 * >
 * > - Changing a policy from a static policy to a template-linked policy.
 * > - Changing the effect of a static policy from permit or forbid.
 * > - The principal referenced by a static policy.
 * > - The resource referenced by a static policy.
 * > - To update a template-linked policy, you must update the template instead.
 *
 * @cloudformationResource AWS::VerifiedPermissions::Policy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html
 */
export declare class CfnPolicy extends cdk.CfnResource implements cdk.IInspectable {
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
     * The unique ID of the new or updated policy.
     *
     * @cloudformationAttribute PolicyId
     */
    readonly attrPolicyId: string;
    /**
     * The type of the policy. This is one of the following values:
     *
     * - Static
     * - TemplateLinked
     *
     * @cloudformationAttribute PolicyType
     */
    readonly attrPolicyType: string;
    /**
     * Specifies the policy type and content to use for the new or updated policy.
     */
    definition: cdk.IResolvable | CfnPolicy.PolicyDefinitionProperty;
    /**
     * Specifies the `PolicyStoreId` of the policy store you want to store the policy in.
     */
    policyStoreId: string;
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
     * A structure that defines a Cedar policy.
     *
     * It includes the policy type, a description, and a policy body. This is a top level data type used to create a policy.
     *
     * This data type is used as a request parameter for the [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html) operation. This structure must always have either an `Static` or a `TemplateLinked` element.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-policydefinition.html
     */
    interface PolicyDefinitionProperty {
        /**
         * A structure that describes a static policy.
         *
         * An static policy doesn't use a template or allow placeholders for entities.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-policydefinition.html#cfn-verifiedpermissions-policy-policydefinition-static
         */
        readonly static?: cdk.IResolvable | CfnPolicy.StaticPolicyDefinitionProperty;
        /**
         * A structure that describes a policy that was instantiated from a template.
         *
         * The template can specify placeholders for `principal` and `resource` . When you use [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html) to create a policy from a template, you specify the exact principal and resource to use for the instantiated policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-policydefinition.html#cfn-verifiedpermissions-policy-policydefinition-templatelinked
         */
        readonly templateLinked?: cdk.IResolvable | CfnPolicy.TemplateLinkedPolicyDefinitionProperty;
    }
    /**
     * A structure that defines a static policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-staticpolicydefinition.html
     */
    interface StaticPolicyDefinitionProperty {
        /**
         * The description of the static policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-staticpolicydefinition.html#cfn-verifiedpermissions-policy-staticpolicydefinition-description
         */
        readonly description?: string;
        /**
         * The policy content of the static policy, written in the Cedar policy language.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-staticpolicydefinition.html#cfn-verifiedpermissions-policy-staticpolicydefinition-statement
         */
        readonly statement: string;
    }
    /**
     * A structure that describes a policy created by instantiating a policy template.
     *
     * > You can't directly update a template-linked policy. You must update the associated policy template instead.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-templatelinkedpolicydefinition.html
     */
    interface TemplateLinkedPolicyDefinitionProperty {
        /**
         * The unique identifier of the policy template used to create this policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-templatelinkedpolicydefinition.html#cfn-verifiedpermissions-policy-templatelinkedpolicydefinition-policytemplateid
         */
        readonly policyTemplateId: string;
        /**
         * The principal associated with this template-linked policy.
         *
         * Verified Permissions substitutes this principal for the `?principal` placeholder in the policy template when it evaluates an authorization request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-templatelinkedpolicydefinition.html#cfn-verifiedpermissions-policy-templatelinkedpolicydefinition-principal
         */
        readonly principal?: CfnPolicy.EntityIdentifierProperty | cdk.IResolvable;
        /**
         * The resource associated with this template-linked policy.
         *
         * Verified Permissions substitutes this resource for the `?resource` placeholder in the policy template when it evaluates an authorization request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-templatelinkedpolicydefinition.html#cfn-verifiedpermissions-policy-templatelinkedpolicydefinition-resource
         */
        readonly resource?: CfnPolicy.EntityIdentifierProperty | cdk.IResolvable;
    }
    /**
     * Contains the identifier of an entity in a policy, including its ID and type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-entityidentifier.html
     */
    interface EntityIdentifierProperty {
        /**
         * The identifier of an entity.
         *
         * `"entityId":" *identifier* "`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-entityidentifier.html#cfn-verifiedpermissions-policy-entityidentifier-entityid
         */
        readonly entityId: string;
        /**
         * The type of an entity.
         *
         * Example: `"entityType":" *typeName* "`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policy-entityidentifier.html#cfn-verifiedpermissions-policy-entityidentifier-entitytype
         */
        readonly entityType: string;
    }
}
/**
 * Properties for defining a `CfnPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html
 */
export interface CfnPolicyProps {
    /**
     * Specifies the policy type and content to use for the new or updated policy.
     *
     * The definition structure must include either a `Static` or a `TemplateLinked` element.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-definition
     */
    readonly definition: cdk.IResolvable | CfnPolicy.PolicyDefinitionProperty;
    /**
     * Specifies the `PolicyStoreId` of the policy store you want to store the policy in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-policystoreid
     */
    readonly policyStoreId: string;
}
/**
 * Creates a policy store.
 *
 * A policy store is a container for policy resources. You can create a separate policy store for each of your applications.
 *
 * @cloudformationResource AWS::VerifiedPermissions::PolicyStore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html
 */
export declare class CfnPolicyStore extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPolicyStore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPolicyStore;
    /**
     * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com//general/latest/gr/aws-arns-and-namespaces.html) of the new or updated policy store.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique ID of the new or updated policy store.
     *
     * @cloudformationAttribute PolicyStoreId
     */
    readonly attrPolicyStoreId: string;
    /**
     * Descriptive text that you can provide to help with identification of the current policy store.
     */
    description?: string;
    /**
     * Creates or updates the policy schema in a policy store.
     */
    schema?: cdk.IResolvable | CfnPolicyStore.SchemaDefinitionProperty;
    /**
     * Specifies the validation setting for this policy store.
     */
    validationSettings: cdk.IResolvable | CfnPolicyStore.ValidationSettingsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPolicyStoreProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPolicyStore {
    /**
     * A structure that contains Cedar policy validation settings for the policy store.
     *
     * The validation mode determines which validation failures that Cedar considers serious enough to block acceptance of a new or edited static policy or policy template.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-validationsettings.html
     */
    interface ValidationSettingsProperty {
        /**
         * The validation mode currently configured for this policy store. The valid values are:.
         *
         * - *OFF* – Neither Verified Permissions nor Cedar perform any validation on policies. No validation errors are reported by either service.
         * - *STRICT* – Requires a schema to be present in the policy store. Cedar performs validation on all submitted new or updated static policies and policy templates. Any that fail validation are rejected and Cedar doesn't store them in the policy store.
         *
         * > If `Mode=STRICT` and the policy store doesn't contain a schema, Verified Permissions rejects all static policies and policy templates because there is no schema to validate against.
         * >
         * > To submit a static policy or policy template without a schema, you must turn off validation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-validationsettings.html#cfn-verifiedpermissions-policystore-validationsettings-mode
         */
        readonly mode: string;
    }
    /**
     * Contains a list of principal types, resource types, and actions that can be specified in policies stored in the same policy store.
     *
     * If the validation mode for the policy store is set to `STRICT` , then policies that can't be validated by this schema are rejected by Verified Permissions and can't be stored in the policy store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-schemadefinition.html
     */
    interface SchemaDefinitionProperty {
        /**
         * A JSON string representation of the schema supported by applications that use this policy store.
         *
         * For more information, see [Policy store schema](https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/schema.html) in the AVP User Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-verifiedpermissions-policystore-schemadefinition.html#cfn-verifiedpermissions-policystore-schemadefinition-cedarjson
         */
        readonly cedarJson?: string;
    }
}
/**
 * Properties for defining a `CfnPolicyStore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html
 */
export interface CfnPolicyStoreProps {
    /**
     * Descriptive text that you can provide to help with identification of the current policy store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html#cfn-verifiedpermissions-policystore-description
     */
    readonly description?: string;
    /**
     * Creates or updates the policy schema in a policy store.
     *
     * Cedar can use the schema to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html#cfn-verifiedpermissions-policystore-schema
     */
    readonly schema?: cdk.IResolvable | CfnPolicyStore.SchemaDefinitionProperty;
    /**
     * Specifies the validation setting for this policy store.
     *
     * Currently, the only valid and required value is `Mode` .
     *
     * > We recommend that you turn on `STRICT` mode only after you define a schema. If a schema doesn't exist, then `STRICT` mode causes any policy to fail validation, and Verified Permissions rejects the policy. You can turn off validation by using the [UpdatePolicyStore](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore) . Then, when you have a schema defined, use [UpdatePolicyStore](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore) again to turn validation back on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html#cfn-verifiedpermissions-policystore-validationsettings
     */
    readonly validationSettings: cdk.IResolvable | CfnPolicyStore.ValidationSettingsProperty;
}
/**
 * Creates a policy template.
 *
 * A template can use placeholders for the principal and resource. A template must be instantiated into a policy by associating it with specific principals and resources to use for the placeholders. That instantiated policy can then be considered in authorization decisions. The instantiated policy works identically to any other policy, except that it is dynamically linked to the template. If the template changes, then any policies that are linked to that template are immediately updated as well.
 *
 * @cloudformationResource AWS::VerifiedPermissions::PolicyTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html
 */
export declare class CfnPolicyTemplate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPolicyTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPolicyTemplate;
    /**
     * The unique identifier of the new or modified policy template.
     *
     * @cloudformationAttribute PolicyTemplateId
     */
    readonly attrPolicyTemplateId: string;
    /**
     * The description to attach to the new or updated policy template.
     */
    description?: string;
    /**
     * The unique identifier of the policy store that contains the template.
     */
    policyStoreId: string;
    /**
     * Specifies the content that you want to use for the new policy template, written in the Cedar policy language.
     */
    statement: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPolicyTemplateProps);
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
 * Properties for defining a `CfnPolicyTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html
 */
export interface CfnPolicyTemplateProps {
    /**
     * The description to attach to the new or updated policy template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html#cfn-verifiedpermissions-policytemplate-description
     */
    readonly description?: string;
    /**
     * The unique identifier of the policy store that contains the template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html#cfn-verifiedpermissions-policytemplate-policystoreid
     */
    readonly policyStoreId: string;
    /**
     * Specifies the content that you want to use for the new policy template, written in the Cedar policy language.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policytemplate.html#cfn-verifiedpermissions-policytemplate-statement
     */
    readonly statement: string;
}
