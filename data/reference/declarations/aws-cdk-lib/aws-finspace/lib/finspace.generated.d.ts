import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::FinSpace::Environment` resource represents an Amazon FinSpace environment.
 *
 * @cloudformationResource AWS::FinSpace::Environment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html
 */
export declare class CfnEnvironment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnvironment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnvironment;
    /**
     * The ID of the AWS account in which the FinSpace environment is created.
     *
     * @cloudformationAttribute AwsAccountId
     */
    readonly attrAwsAccountId: string;
    /**
     * The AWS account ID of the dedicated service account associated with your FinSpace environment.
     *
     * @cloudformationAttribute DedicatedServiceAccountId
     */
    readonly attrDedicatedServiceAccountId: string;
    /**
     * The Amazon Resource Name (ARN) of your FinSpace environment.
     *
     * @cloudformationAttribute EnvironmentArn
     */
    readonly attrEnvironmentArn: string;
    /**
     * The identifier of the FinSpace environment.
     *
     * @cloudformationAttribute EnvironmentId
     */
    readonly attrEnvironmentId: string;
    /**
     * The sign-in url for the web application of your FinSpace environment.
     *
     * @cloudformationAttribute EnvironmentUrl
     */
    readonly attrEnvironmentUrl: string;
    /**
     * The url of the integrated FinSpace notebook environment in your web application.
     *
     * @cloudformationAttribute SageMakerStudioDomainUrl
     */
    readonly attrSageMakerStudioDomainUrl: string;
    /**
     * The current status of creation of the FinSpace environment.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * ARNs of FinSpace Data Bundles to install.
     *
     * @deprecated this property has been deprecated
     */
    dataBundles?: Array<string>;
    /**
     * The description of the FinSpace environment.
     */
    description?: string;
    /**
     * The authentication mode for the environment.
     */
    federationMode?: string;
    /**
     * Configuration information when authentication mode is FEDERATED.
     */
    federationParameters?: CfnEnvironment.FederationParametersProperty | cdk.IResolvable;
    /**
     * The KMS key id used to encrypt in the FinSpace environment.
     */
    kmsKeyId?: string;
    /**
     * The name of the FinSpace environment.
     */
    name: string;
    /**
     * Configuration information for the superuser.
     */
    superuserParameters?: cdk.IResolvable | CfnEnvironment.SuperuserParametersProperty;
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
    constructor(scope: constructs.Construct, id: string, props: CfnEnvironmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEnvironment {
    /**
     * Configuration information when authentication mode is FEDERATED.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html
     */
    interface FederationParametersProperty {
        /**
         * The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration (IdP).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html#cfn-finspace-environment-federationparameters-applicationcallbackurl
         */
        readonly applicationCallBackUrl?: string;
        /**
         * SAML attribute name and value.
         *
         * The name must always be `Email` and the value should be set to the attribute definition in which user email is set. For example, name would be `Email` and value `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` . Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html#cfn-finspace-environment-federationparameters-attributemap
         */
        readonly attributeMap?: Array<CfnEnvironment.AttributeMapItemsProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Name of the identity provider (IdP).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html#cfn-finspace-environment-federationparameters-federationprovidername
         */
        readonly federationProviderName?: string;
        /**
         * The Uniform Resource Name (URN).
         *
         * Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html#cfn-finspace-environment-federationparameters-federationurn
         */
        readonly federationUrn?: string;
        /**
         * SAML 2.0 Metadata document from identity provider (IdP).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html#cfn-finspace-environment-federationparameters-samlmetadatadocument
         */
        readonly samlMetadataDocument?: string;
        /**
         * Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html#cfn-finspace-environment-federationparameters-samlmetadataurl
         */
        readonly samlMetadataUrl?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-attributemapitems.html
     */
    interface AttributeMapItemsProperty {
        /**
         * The key name of the tag.
         *
         * You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-attributemapitems.html#cfn-finspace-environment-attributemapitems-key
         */
        readonly key?: string;
        /**
         * The value for the tag.
         *
         * You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-attributemapitems.html#cfn-finspace-environment-attributemapitems-value
         */
        readonly value?: string;
    }
    /**
     * Configuration information for the superuser.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-superuserparameters.html
     */
    interface SuperuserParametersProperty {
        /**
         * The email address of the superuser.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-superuserparameters.html#cfn-finspace-environment-superuserparameters-emailaddress
         */
        readonly emailAddress?: string;
        /**
         * The first name of the superuser.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-superuserparameters.html#cfn-finspace-environment-superuserparameters-firstname
         */
        readonly firstName?: string;
        /**
         * The last name of the superuser.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-superuserparameters.html#cfn-finspace-environment-superuserparameters-lastname
         */
        readonly lastName?: string;
    }
}
/**
 * Properties for defining a `CfnEnvironment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html
 */
export interface CfnEnvironmentProps {
    /**
     * ARNs of FinSpace Data Bundles to install.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-databundles
     */
    readonly dataBundles?: Array<string>;
    /**
     * The description of the FinSpace environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-description
     */
    readonly description?: string;
    /**
     * The authentication mode for the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationmode
     */
    readonly federationMode?: string;
    /**
     * Configuration information when authentication mode is FEDERATED.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationparameters
     */
    readonly federationParameters?: CfnEnvironment.FederationParametersProperty | cdk.IResolvable;
    /**
     * The KMS key id used to encrypt in the FinSpace environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The name of the FinSpace environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-name
     */
    readonly name: string;
    /**
     * Configuration information for the superuser.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-superuserparameters
     */
    readonly superuserParameters?: cdk.IResolvable | CfnEnvironment.SuperuserParametersProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
