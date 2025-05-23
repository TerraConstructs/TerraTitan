import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Accepts an offer to share the specified portfolio.
 *
 * @cloudformationResource AWS::ServiceCatalog::AcceptedPortfolioShare
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html
 */
export declare class CfnAcceptedPortfolioShare extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAcceptedPortfolioShare from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAcceptedPortfolioShare;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The portfolio identifier.
     */
    portfolioId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAcceptedPortfolioShareProps);
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
 * Properties for defining a `CfnAcceptedPortfolioShare`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html
 */
export interface CfnAcceptedPortfolioShareProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html#cfn-servicecatalog-acceptedportfolioshare-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The portfolio identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-acceptedportfolioshare.html#cfn-servicecatalog-acceptedportfolioshare-portfolioid
     */
    readonly portfolioId: string;
}
/**
 * Specifies a product.
 *
 * @cloudformationResource AWS::ServiceCatalog::CloudFormationProduct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html
 */
export declare class CfnCloudFormationProduct extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCloudFormationProduct from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCloudFormationProduct;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the product.
     *
     * @cloudformationAttribute ProductName
     */
    readonly attrProductName: string;
    /**
     * The IDs of the provisioning artifacts.
     *
     * @cloudformationAttribute ProvisioningArtifactIds
     */
    readonly attrProvisioningArtifactIds: string;
    /**
     * The names of the provisioning artifacts.
     *
     * @cloudformationAttribute ProvisioningArtifactNames
     */
    readonly attrProvisioningArtifactNames: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The description of the product.
     */
    description?: string;
    /**
     * The distributor of the product.
     */
    distributor?: string;
    /**
     * The name of the product.
     */
    name: string;
    /**
     * The owner of the product.
     */
    owner: string;
    /**
     * The type of product.
     */
    productType?: string;
    /**
     * The configuration of the provisioning artifact (also known as a version).
     */
    provisioningArtifactParameters?: Array<cdk.IResolvable | CfnCloudFormationProduct.ProvisioningArtifactPropertiesProperty> | cdk.IResolvable;
    /**
     * This property is turned off by default.
     */
    replaceProvisioningArtifacts?: boolean | cdk.IResolvable;
    /**
     * A top level `ProductViewDetail` response containing details about the product’s connection.
     */
    sourceConnection?: cdk.IResolvable | CfnCloudFormationProduct.SourceConnectionProperty;
    /**
     * The support information about the product.
     */
    supportDescription?: string;
    /**
     * The contact email for product support.
     */
    supportEmail?: string;
    /**
     * The contact URL for product support.
     */
    supportUrl?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCloudFormationProductProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCloudFormationProduct {
    /**
     * A top level `ProductViewDetail` response containing details about the product’s connection.
     *
     * AWS Service Catalog returns this field for the `CreateProduct` , `UpdateProduct` , `DescribeProductAsAdmin` , and `SearchProductAsAdmin` APIs. This response contains the same fields as the `ConnectionParameters` request, with the addition of the `LastSync` response.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-sourceconnection.html
     */
    interface SourceConnectionProperty {
        /**
         * The connection details based on the connection `Type` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-sourceconnection.html#cfn-servicecatalog-cloudformationproduct-sourceconnection-connectionparameters
         */
        readonly connectionParameters: CfnCloudFormationProduct.ConnectionParametersProperty | cdk.IResolvable;
        /**
         * The only supported `SourceConnection` type is Codestar.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-sourceconnection.html#cfn-servicecatalog-cloudformationproduct-sourceconnection-type
         */
        readonly type: string;
    }
    /**
     * Provides connection details.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-connectionparameters.html
     */
    interface ConnectionParametersProperty {
        /**
         * Provides `ConnectionType` details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-connectionparameters.html#cfn-servicecatalog-cloudformationproduct-connectionparameters-codestar
         */
        readonly codeStar?: CfnCloudFormationProduct.CodeStarParametersProperty | cdk.IResolvable;
    }
    /**
     * The subtype containing details about the Codestar connection `Type` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-codestarparameters.html
     */
    interface CodeStarParametersProperty {
        /**
         * The absolute path wehre the artifact resides within the repo and branch, formatted as "folder/file.json.".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-codestarparameters.html#cfn-servicecatalog-cloudformationproduct-codestarparameters-artifactpath
         */
        readonly artifactPath: string;
        /**
         * The specific branch where the artifact resides.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-codestarparameters.html#cfn-servicecatalog-cloudformationproduct-codestarparameters-branch
         */
        readonly branch: string;
        /**
         * The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-codestarparameters.html#cfn-servicecatalog-cloudformationproduct-codestarparameters-connectionarn
         */
        readonly connectionArn: string;
        /**
         * The specific repository where the product’s artifact-to-be-synced resides, formatted as "Account/Repo.".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-codestarparameters.html#cfn-servicecatalog-cloudformationproduct-codestarparameters-repository
         */
        readonly repository: string;
    }
    /**
     * Information about a provisioning artifact (also known as a version) for a product.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html
     */
    interface ProvisioningArtifactPropertiesProperty {
        /**
         * The description of the provisioning artifact, including how it differs from the previous provisioning artifact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html#cfn-servicecatalog-cloudformationproduct-provisioningartifactproperties-description
         */
        readonly description?: string;
        /**
         * If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html#cfn-servicecatalog-cloudformationproduct-provisioningartifactproperties-disabletemplatevalidation
         */
        readonly disableTemplateValidation?: boolean | cdk.IResolvable;
        /**
         * Specify the template source with one of the following options, but not both.
         *
         * Keys accepted: [ `LoadTemplateFromURL` , `ImportFromPhysicalId` ]
         *
         * The URL of the AWS CloudFormation template in Amazon S3 in JSON format. Specify the URL in JSON format as follows:
         *
         * `"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."`
         *
         * `ImportFromPhysicalId` : The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. Specify the physical id in JSON format as follows: `ImportFromPhysicalId: “arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html#cfn-servicecatalog-cloudformationproduct-provisioningartifactproperties-info
         */
        readonly info: any | cdk.IResolvable;
        /**
         * The name of the provisioning artifact (for example, v1 v2beta).
         *
         * No spaces are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html#cfn-servicecatalog-cloudformationproduct-provisioningartifactproperties-name
         */
        readonly name?: string;
        /**
         * The type of provisioning artifact.
         *
         * - `CLOUD_FORMATION_TEMPLATE` - AWS CloudFormation template
         * - `TERRAFORM_OPEN_SOURCE` - Terraform Open Source configuration file
         * - `TERRAFORM_CLOUD` - Terraform Cloud configuration file
         * - `EXTERNAL` - External configuration file
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html#cfn-servicecatalog-cloudformationproduct-provisioningartifactproperties-type
         */
        readonly type?: string;
    }
}
/**
 * Properties for defining a `CfnCloudFormationProduct`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html
 */
export interface CfnCloudFormationProductProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The description of the product.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-description
     */
    readonly description?: string;
    /**
     * The distributor of the product.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-distributor
     */
    readonly distributor?: string;
    /**
     * The name of the product.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-name
     */
    readonly name: string;
    /**
     * The owner of the product.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-owner
     */
    readonly owner: string;
    /**
     * The type of product.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-producttype
     */
    readonly productType?: string;
    /**
     * The configuration of the provisioning artifact (also known as a version).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-provisioningartifactparameters
     */
    readonly provisioningArtifactParameters?: Array<cdk.IResolvable | CfnCloudFormationProduct.ProvisioningArtifactPropertiesProperty> | cdk.IResolvable;
    /**
     * This property is turned off by default.
     *
     * If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.
     *
     * If turned on, provisioning artifacts will be given a new unique identifier when you update the product or provisioning artifacts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-replaceprovisioningartifacts
     */
    readonly replaceProvisioningArtifacts?: boolean | cdk.IResolvable;
    /**
     * A top level `ProductViewDetail` response containing details about the product’s connection.
     *
     * AWS Service Catalog returns this field for the `CreateProduct` , `UpdateProduct` , `DescribeProductAsAdmin` , and `SearchProductAsAdmin` APIs. This response contains the same fields as the `ConnectionParameters` request, with the addition of the `LastSync` response.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-sourceconnection
     */
    readonly sourceConnection?: cdk.IResolvable | CfnCloudFormationProduct.SourceConnectionProperty;
    /**
     * The support information about the product.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-supportdescription
     */
    readonly supportDescription?: string;
    /**
     * The contact email for product support.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-supportemail
     */
    readonly supportEmail?: string;
    /**
     * The contact URL for product support.
     *
     * `^https?:\/\//` / is the pattern used to validate SupportUrl.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-supporturl
     */
    readonly supportUrl?: string;
    /**
     * One or more tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html#cfn-servicecatalog-cloudformationproduct-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Provisions the specified product.
 *
 * A provisioned product is a resourced instance of a product. For example, provisioning a product based on a AWS CloudFormation template launches a AWS CloudFormation stack and its underlying resources. You can check the status of this request using [DescribeRecord](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeRecord.html) .
 *
 * If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[ *N* ]: *Value* ".
 *
 * @cloudformationResource AWS::ServiceCatalog::CloudFormationProvisionedProduct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html
 */
export declare class CfnCloudFormationProvisionedProduct extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCloudFormationProvisionedProduct from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCloudFormationProvisionedProduct;
    /**
     * @cloudformationAttribute CloudformationStackArn
     */
    readonly attrCloudformationStackArn: string;
    /**
     * List of key-value pair outputs.
     *
     * @cloudformationAttribute Outputs
     */
    readonly attrOutputs: cdk.IResolvable;
    /**
     * The ID of the provisioned product.
     *
     * @cloudformationAttribute ProvisionedProductId
     */
    readonly attrProvisionedProductId: string;
    /**
     * The ID of the record, such as `rec-rjeatvy434trk` .
     *
     * @cloudformationAttribute RecordId
     */
    readonly attrRecordId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * Passed to AWS CloudFormation .
     */
    notificationArns?: Array<string>;
    /**
     * The path identifier of the product.
     */
    pathId?: string;
    /**
     * The name of the path.
     */
    pathName?: string;
    /**
     * The product identifier.
     */
    productId?: string;
    /**
     * The name of the Service Catalog product.
     */
    productName?: string;
    /**
     * A user-friendly name for the provisioned product.
     */
    provisionedProductName?: string;
    /**
     * The identifier of the provisioning artifact (also known as a version).
     */
    provisioningArtifactId?: string;
    /**
     * The name of the provisioning artifact (also known as a version) for the product.
     */
    provisioningArtifactName?: string;
    /**
     * Parameters specified by the administrator that are required for provisioning the product.
     */
    provisioningParameters?: Array<cdk.IResolvable | CfnCloudFormationProvisionedProduct.ProvisioningParameterProperty> | cdk.IResolvable;
    /**
     * StackSet preferences that are required for provisioning the product or updating a provisioned product.
     */
    provisioningPreferences?: cdk.IResolvable | CfnCloudFormationProvisionedProduct.ProvisioningPreferencesProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnCloudFormationProvisionedProductProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCloudFormationProvisionedProduct {
    /**
     * Information about a parameter used to provision a product.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningparameter.html
     */
    interface ProvisioningParameterProperty {
        /**
         * The parameter key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningparameter.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningparameter-key
         */
        readonly key: string;
        /**
         * The parameter value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningparameter.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningparameter-value
         */
        readonly value: string;
    }
    /**
     * The user-defined preferences that will be applied when updating a provisioned product.
     *
     * Not all preferences are applicable to all provisioned product type
     *
     * One or more AWS accounts that will have access to the provisioned product.
     *
     * Applicable only to a `CFN_STACKSET` provisioned product type.
     *
     * The AWS accounts specified should be within the list of accounts in the `STACKSET` constraint. To get the list of accounts in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
     *
     * If no values are specified, the default value is all accounts from the `STACKSET` constraint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html
     */
    interface ProvisioningPreferencesProperty {
        /**
         * One or more AWS accounts where the provisioned product will be available.
         *
         * Applicable only to a `CFN_STACKSET` provisioned product type.
         *
         * The specified accounts should be within the list of accounts from the `STACKSET` constraint. To get the list of accounts in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
         *
         * If no values are specified, the default value is all acounts from the `STACKSET` constraint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences-stacksetaccounts
         */
        readonly stackSetAccounts?: Array<string>;
        /**
         * The number of accounts, per Region, for which this operation can fail before AWS Service Catalog stops the operation in that Region.
         *
         * If the operation is stopped in a Region, AWS Service Catalog doesn't attempt the operation in any subsequent Regions.
         *
         * Applicable only to a `CFN_STACKSET` provisioned product type.
         *
         * Conditional: You must specify either `StackSetFailureToleranceCount` or `StackSetFailureTolerancePercentage` , but not both.
         *
         * The default value is `0` if no value is specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences-stacksetfailuretolerancecount
         */
        readonly stackSetFailureToleranceCount?: number;
        /**
         * The percentage of accounts, per Region, for which this stack operation can fail before AWS Service Catalog stops the operation in that Region.
         *
         * If the operation is stopped in a Region, AWS Service Catalog doesn't attempt the operation in any subsequent Regions.
         *
         * When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number.
         *
         * Applicable only to a `CFN_STACKSET` provisioned product type.
         *
         * Conditional: You must specify either `StackSetFailureToleranceCount` or `StackSetFailureTolerancePercentage` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences-stacksetfailuretolerancepercentage
         */
        readonly stackSetFailureTolerancePercentage?: number;
        /**
         * The maximum number of accounts in which to perform this operation at one time.
         *
         * This is dependent on the value of `StackSetFailureToleranceCount` . `StackSetMaxConcurrentCount` is at most one more than the `StackSetFailureToleranceCount` .
         *
         * Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
         *
         * Applicable only to a `CFN_STACKSET` provisioned product type.
         *
         * Conditional: You must specify either `StackSetMaxConcurrentCount` or `StackSetMaxConcurrentPercentage` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences-stacksetmaxconcurrencycount
         */
        readonly stackSetMaxConcurrencyCount?: number;
        /**
         * The maximum percentage of accounts in which to perform this operation at one time.
         *
         * When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, AWS Service Catalog sets the number as `1` instead.
         *
         * Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
         *
         * Applicable only to a `CFN_STACKSET` provisioned product type.
         *
         * Conditional: You must specify either `StackSetMaxConcurrentCount` or `StackSetMaxConcurrentPercentage` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences-stacksetmaxconcurrencypercentage
         */
        readonly stackSetMaxConcurrencyPercentage?: number;
        /**
         * Determines what action AWS Service Catalog performs to a stack set or a stack instance represented by the provisioned product.
         *
         * The default value is `UPDATE` if nothing is specified.
         *
         * Applicable only to a `CFN_STACKSET` provisioned product type.
         *
         * - **CREATE** - Creates a new stack instance in the stack set represented by the provisioned product. In this case, only new stack instances are created based on accounts and Regions; if new ProductId or ProvisioningArtifactID are passed, they will be ignored.
         * - **UPDATE** - Updates the stack set represented by the provisioned product and also its stack instances.
         * - **DELETE** - Deletes a stack instance in the stack set represented by the provisioned product.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences-stacksetoperationtype
         */
        readonly stackSetOperationType?: string;
        /**
         * One or more AWS Regions where the provisioned product will be available.
         *
         * Applicable only to a `CFN_STACKSET` provisioned product type.
         *
         * The specified Regions should be within the list of Regions from the `STACKSET` constraint. To get the list of Regions in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
         *
         * If no values are specified, the default value is all Regions from the `STACKSET` constraint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences-stacksetregions
         */
        readonly stackSetRegions?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnCloudFormationProvisionedProduct`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html
 */
export interface CfnCloudFormationProvisionedProductProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * Passed to AWS CloudFormation .
     *
     * The SNS topic ARNs to which to publish stack-related events.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-notificationarns
     */
    readonly notificationArns?: Array<string>;
    /**
     * The path identifier of the product.
     *
     * This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use [ListLaunchPaths](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html) .
     *
     * > You must provide the name or ID, but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-pathid
     */
    readonly pathId?: string;
    /**
     * The name of the path.
     *
     * This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use [ListLaunchPaths](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html) .
     *
     * > You must provide the name or ID, but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-pathname
     */
    readonly pathName?: string;
    /**
     * The product identifier.
     *
     * > You must specify either the ID or the name of the product, but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-productid
     */
    readonly productId?: string;
    /**
     * The name of the Service Catalog product.
     *
     * Each time a stack is created or updated, if `ProductName` is provided it will successfully resolve to `ProductId` as long as only one product exists in the account or Region with that `ProductName` .
     *
     * > You must specify either the name or the ID of the product, but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-productname
     */
    readonly productName?: string;
    /**
     * A user-friendly name for the provisioned product.
     *
     * This value must be unique for the AWS account and cannot be updated after the product is provisioned.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisionedproductname
     */
    readonly provisionedProductName?: string;
    /**
     * The identifier of the provisioning artifact (also known as a version).
     *
     * > You must specify either the ID or the name of the provisioning artifact, but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningartifactid
     */
    readonly provisioningArtifactId?: string;
    /**
     * The name of the provisioning artifact (also known as a version) for the product.
     *
     * This name must be unique for the product.
     *
     * > You must specify either the name or the ID of the provisioning artifact, but not both. You must also specify either the name or the ID of the product, but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningartifactname
     */
    readonly provisioningArtifactName?: string;
    /**
     * Parameters specified by the administrator that are required for provisioning the product.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningparameters
     */
    readonly provisioningParameters?: Array<cdk.IResolvable | CfnCloudFormationProvisionedProduct.ProvisioningParameterProperty> | cdk.IResolvable;
    /**
     * StackSet preferences that are required for provisioning the product or updating a provisioned product.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences
     */
    readonly provisioningPreferences?: cdk.IResolvable | CfnCloudFormationProvisionedProduct.ProvisioningPreferencesProperty;
    /**
     * One or more tags.
     *
     * > Requires the provisioned product to have an [ResourceUpdateConstraint](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html) resource with `TagUpdatesOnProvisionedProduct` set to `ALLOWED` to allow tag updates. If `RESOURCE_UPDATE` constraint is not present, tags updates are ignored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html#cfn-servicecatalog-cloudformationprovisionedproduct-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a notification constraint.
 *
 * @cloudformationResource AWS::ServiceCatalog::LaunchNotificationConstraint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html
 */
export declare class CfnLaunchNotificationConstraint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLaunchNotificationConstraint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLaunchNotificationConstraint;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The description of the constraint.
     */
    description?: string;
    /**
     * The notification ARNs.
     */
    notificationArns: Array<string>;
    /**
     * The portfolio identifier.
     */
    portfolioId: string;
    /**
     * The product identifier.
     */
    productId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLaunchNotificationConstraintProps);
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
 * Properties for defining a `CfnLaunchNotificationConstraint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html
 */
export interface CfnLaunchNotificationConstraintProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The description of the constraint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-description
     */
    readonly description?: string;
    /**
     * The notification ARNs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-notificationarns
     */
    readonly notificationArns: Array<string>;
    /**
     * The portfolio identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-portfolioid
     */
    readonly portfolioId: string;
    /**
     * The product identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchnotificationconstraint.html#cfn-servicecatalog-launchnotificationconstraint-productid
     */
    readonly productId: string;
}
/**
 * Specifies a launch constraint.
 *
 * @cloudformationResource AWS::ServiceCatalog::LaunchRoleConstraint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html
 */
export declare class CfnLaunchRoleConstraint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLaunchRoleConstraint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLaunchRoleConstraint;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The description of the constraint.
     */
    description?: string;
    /**
     * You are required to specify either the `RoleArn` or the `LocalRoleName` but can't use both.
     */
    localRoleName?: string;
    /**
     * The portfolio identifier.
     */
    portfolioId: string;
    /**
     * The product identifier.
     */
    productId: string;
    /**
     * The ARN of the launch role.
     */
    roleArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLaunchRoleConstraintProps);
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
 * Properties for defining a `CfnLaunchRoleConstraint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html
 */
export interface CfnLaunchRoleConstraintProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The description of the constraint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-description
     */
    readonly description?: string;
    /**
     * You are required to specify either the `RoleArn` or the `LocalRoleName` but can't use both.
     *
     * If you specify the `LocalRoleName` property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be account-agnostic so the administrator can create fewer resources per shared account.
     *
     * The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-localrolename
     */
    readonly localRoleName?: string;
    /**
     * The portfolio identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-portfolioid
     */
    readonly portfolioId: string;
    /**
     * The product identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-productid
     */
    readonly productId: string;
    /**
     * The ARN of the launch role.
     *
     * You are required to specify `RoleArn` or `LocalRoleName` but can't use both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchroleconstraint.html#cfn-servicecatalog-launchroleconstraint-rolearn
     */
    readonly roleArn?: string;
}
/**
 * Specifies a template constraint.
 *
 * @cloudformationResource AWS::ServiceCatalog::LaunchTemplateConstraint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html
 */
export declare class CfnLaunchTemplateConstraint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLaunchTemplateConstraint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLaunchTemplateConstraint;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The description of the constraint.
     */
    description?: string;
    /**
     * The portfolio identifier.
     */
    portfolioId: string;
    /**
     * The product identifier.
     */
    productId: string;
    /**
     * The constraint rules.
     */
    rules: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLaunchTemplateConstraintProps);
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
 * Properties for defining a `CfnLaunchTemplateConstraint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html
 */
export interface CfnLaunchTemplateConstraintProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The description of the constraint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-description
     */
    readonly description?: string;
    /**
     * The portfolio identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-portfolioid
     */
    readonly portfolioId: string;
    /**
     * The product identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-productid
     */
    readonly productId: string;
    /**
     * The constraint rules.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-launchtemplateconstraint.html#cfn-servicecatalog-launchtemplateconstraint-rules
     */
    readonly rules: string;
}
/**
 * Specifies a portfolio.
 *
 * @cloudformationResource AWS::ServiceCatalog::Portfolio
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html
 */
export declare class CfnPortfolio extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPortfolio from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPortfolio;
    /**
     * The portfolio identifier.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the portfolio.
     *
     * @cloudformationAttribute PortfolioName
     */
    readonly attrPortfolioName: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The description of the portfolio.
     */
    description?: string;
    /**
     * The name to use for display purposes.
     */
    displayName: string;
    /**
     * The name of the portfolio provider.
     */
    providerName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * One or more tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPortfolioProps);
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
 * Properties for defining a `CfnPortfolio`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html
 */
export interface CfnPortfolioProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The description of the portfolio.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-description
     */
    readonly description?: string;
    /**
     * The name to use for display purposes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-displayname
     */
    readonly displayName: string;
    /**
     * The name of the portfolio provider.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-providername
     */
    readonly providerName: string;
    /**
     * One or more tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolio.html#cfn-servicecatalog-portfolio-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Associates the specified principal ARN with the specified portfolio.
 *
 * @cloudformationResource AWS::ServiceCatalog::PortfolioPrincipalAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html
 */
export declare class CfnPortfolioPrincipalAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPortfolioPrincipalAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPortfolioPrincipalAssociation;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The portfolio identifier.
     */
    portfolioId: string;
    /**
     * The ARN of the principal ( IAM user, role, or group).
     */
    principalArn: string;
    /**
     * The principal type.
     */
    principalType: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPortfolioPrincipalAssociationProps);
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
 * Properties for defining a `CfnPortfolioPrincipalAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html
 */
export interface CfnPortfolioPrincipalAssociationProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html#cfn-servicecatalog-portfolioprincipalassociation-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The portfolio identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html#cfn-servicecatalog-portfolioprincipalassociation-portfolioid
     */
    readonly portfolioId: string;
    /**
     * The ARN of the principal ( IAM user, role, or group).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html#cfn-servicecatalog-portfolioprincipalassociation-principalarn
     */
    readonly principalArn: string;
    /**
     * The principal type.
     *
     * The supported values are `IAM` and `IAM_PATTERN` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioprincipalassociation.html#cfn-servicecatalog-portfolioprincipalassociation-principaltype
     */
    readonly principalType: string;
}
/**
 * Associates the specified product with the specified portfolio.
 *
 * A delegated admin is authorized to invoke this command.
 *
 * @cloudformationResource AWS::ServiceCatalog::PortfolioProductAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html
 */
export declare class CfnPortfolioProductAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPortfolioProductAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPortfolioProductAssociation;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The portfolio identifier.
     */
    portfolioId: string;
    /**
     * The product identifier.
     */
    productId: string;
    /**
     * The identifier of the source portfolio.
     */
    sourcePortfolioId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPortfolioProductAssociationProps);
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
 * Properties for defining a `CfnPortfolioProductAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html
 */
export interface CfnPortfolioProductAssociationProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html#cfn-servicecatalog-portfolioproductassociation-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The portfolio identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html#cfn-servicecatalog-portfolioproductassociation-portfolioid
     */
    readonly portfolioId: string;
    /**
     * The product identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html#cfn-servicecatalog-portfolioproductassociation-productid
     */
    readonly productId: string;
    /**
     * The identifier of the source portfolio.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioproductassociation.html#cfn-servicecatalog-portfolioproductassociation-sourceportfolioid
     */
    readonly sourcePortfolioId?: string;
}
/**
 * Shares the specified portfolio with the specified account.
 *
 * @cloudformationResource AWS::ServiceCatalog::PortfolioShare
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html
 */
export declare class CfnPortfolioShare extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPortfolioShare from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPortfolioShare;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The AWS account ID.
     */
    accountId: string;
    /**
     * The portfolio identifier.
     */
    portfolioId: string;
    /**
     * Indicates whether TagOptions sharing is enabled or disabled for the portfolio share.
     */
    shareTagOptions?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPortfolioShareProps);
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
 * Properties for defining a `CfnPortfolioShare`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html
 */
export interface CfnPortfolioShareProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The AWS account ID.
     *
     * For example, `123456789012` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-accountid
     */
    readonly accountId: string;
    /**
     * The portfolio identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-portfolioid
     */
    readonly portfolioId: string;
    /**
     * Indicates whether TagOptions sharing is enabled or disabled for the portfolio share.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-portfolioshare.html#cfn-servicecatalog-portfolioshare-sharetagoptions
     */
    readonly shareTagOptions?: boolean | cdk.IResolvable;
}
/**
 * Specifies a `RESOURCE_UPDATE` constraint.
 *
 * @cloudformationResource AWS::ServiceCatalog::ResourceUpdateConstraint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html
 */
export declare class CfnResourceUpdateConstraint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceUpdateConstraint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceUpdateConstraint;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * The description of the constraint.
     */
    description?: string;
    /**
     * The portfolio identifier.
     */
    portfolioId: string;
    /**
     * The product identifier.
     */
    productId: string;
    /**
     * If set to `ALLOWED` , lets users change tags in a [CloudFormationProvisionedProduct](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html) resource.
     */
    tagUpdateOnProvisionedProduct: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceUpdateConstraintProps);
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
 * Properties for defining a `CfnResourceUpdateConstraint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html
 */
export interface CfnResourceUpdateConstraintProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * The description of the constraint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-description
     */
    readonly description?: string;
    /**
     * The portfolio identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-portfolioid
     */
    readonly portfolioId: string;
    /**
     * The product identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-productid
     */
    readonly productId: string;
    /**
     * If set to `ALLOWED` , lets users change tags in a [CloudFormationProvisionedProduct](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html) resource.
     *
     * If set to `NOT_ALLOWED` , prevents users from changing tags in a [CloudFormationProvisionedProduct](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html) resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html#cfn-servicecatalog-resourceupdateconstraint-tagupdateonprovisionedproduct
     */
    readonly tagUpdateOnProvisionedProduct: string;
}
/**
 * Creates a self-service action.
 *
 * @cloudformationResource AWS::ServiceCatalog::ServiceAction
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html
 */
export declare class CfnServiceAction extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServiceAction from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServiceAction;
    /**
     * The self-service action identifier. For example, `act-fs7abcd89wxyz` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * A map that defines the self-service action.
     */
    definition: Array<CfnServiceAction.DefinitionParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The self-service action definition type.
     */
    definitionType: string;
    /**
     * The self-service action description.
     */
    description?: string;
    /**
     * The self-service action name.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnServiceActionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnServiceAction {
    /**
     * The list of parameters in JSON format.
     *
     * For example: `[{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"}] or [{\"Name\":\"InstanceId\",\"Type\":\"TEXT_VALUE\"}]` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-serviceaction-definitionparameter.html
     */
    interface DefinitionParameterProperty {
        /**
         * The parameter key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-serviceaction-definitionparameter.html#cfn-servicecatalog-serviceaction-definitionparameter-key
         */
        readonly key: string;
        /**
         * The value of the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-serviceaction-definitionparameter.html#cfn-servicecatalog-serviceaction-definitionparameter-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnServiceAction`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html
 */
export interface CfnServiceActionProps {
    /**
     * The language code.
     *
     * - `en` - English (default)
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html#cfn-servicecatalog-serviceaction-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * A map that defines the self-service action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html#cfn-servicecatalog-serviceaction-definition
     */
    readonly definition: Array<CfnServiceAction.DefinitionParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The self-service action definition type.
     *
     * For example, `SSM_AUTOMATION` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html#cfn-servicecatalog-serviceaction-definitiontype
     */
    readonly definitionType: string;
    /**
     * The self-service action description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html#cfn-servicecatalog-serviceaction-description
     */
    readonly description?: string;
    /**
     * The self-service action name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html#cfn-servicecatalog-serviceaction-name
     */
    readonly name: string;
}
/**
 * A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
 *
 * @cloudformationResource AWS::ServiceCatalog::ServiceActionAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html
 */
export declare class CfnServiceActionAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServiceActionAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServiceActionAssociation;
    /**
     * The product identifier.
     */
    productId: string;
    /**
     * The identifier of the provisioning artifact.
     */
    provisioningArtifactId: string;
    /**
     * The self-service action identifier.
     */
    serviceActionId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnServiceActionAssociationProps);
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
 * Properties for defining a `CfnServiceActionAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html
 */
export interface CfnServiceActionAssociationProps {
    /**
     * The product identifier.
     *
     * For example, `prod-abcdzk7xy33qa` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html#cfn-servicecatalog-serviceactionassociation-productid
     */
    readonly productId: string;
    /**
     * The identifier of the provisioning artifact.
     *
     * For example, `pa-4abcdjnxjj6ne` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html#cfn-servicecatalog-serviceactionassociation-provisioningartifactid
     */
    readonly provisioningArtifactId: string;
    /**
     * The self-service action identifier.
     *
     * For example, `act-fs7abcd89wxyz` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html#cfn-servicecatalog-serviceactionassociation-serviceactionid
     */
    readonly serviceActionId: string;
}
/**
 * Specifies a StackSet constraint.
 *
 * @cloudformationResource AWS::ServiceCatalog::StackSetConstraint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html
 */
export declare class CfnStackSetConstraint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStackSetConstraint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStackSetConstraint;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The language code.
     */
    acceptLanguage?: string;
    /**
     * One or more AWS accounts that will have access to the provisioned product.
     */
    accountList: Array<string>;
    /**
     * AdminRole ARN.
     */
    adminRole: string;
    /**
     * The description of the constraint.
     */
    description: string;
    /**
     * ExecutionRole name.
     */
    executionRole: string;
    /**
     * The portfolio identifier.
     */
    portfolioId: string;
    /**
     * The product identifier.
     */
    productId: string;
    /**
     * One or more AWS Regions where the provisioned product will be available.
     */
    regionList: Array<string>;
    /**
     * Permission to create, update, and delete stack instances.
     */
    stackInstanceControl: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStackSetConstraintProps);
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
 * Properties for defining a `CfnStackSetConstraint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html
 */
export interface CfnStackSetConstraintProps {
    /**
     * The language code.
     *
     * - `jp` - Japanese
     * - `zh` - Chinese
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#cfn-servicecatalog-stacksetconstraint-acceptlanguage
     */
    readonly acceptLanguage?: string;
    /**
     * One or more AWS accounts that will have access to the provisioned product.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#cfn-servicecatalog-stacksetconstraint-accountlist
     */
    readonly accountList: Array<string>;
    /**
     * AdminRole ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#cfn-servicecatalog-stacksetconstraint-adminrole
     */
    readonly adminRole: string;
    /**
     * The description of the constraint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#cfn-servicecatalog-stacksetconstraint-description
     */
    readonly description: string;
    /**
     * ExecutionRole name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#cfn-servicecatalog-stacksetconstraint-executionrole
     */
    readonly executionRole: string;
    /**
     * The portfolio identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#cfn-servicecatalog-stacksetconstraint-portfolioid
     */
    readonly portfolioId: string;
    /**
     * The product identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#cfn-servicecatalog-stacksetconstraint-productid
     */
    readonly productId: string;
    /**
     * One or more AWS Regions where the provisioned product will be available.
     *
     * Applicable only to a `CFN_STACKSET` provisioned product type.
     *
     * The specified Regions should be within the list of Regions from the `STACKSET` constraint. To get the list of Regions in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
     *
     * If no values are specified, the default value is all Regions from the `STACKSET` constraint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#cfn-servicecatalog-stacksetconstraint-regionlist
     */
    readonly regionList: Array<string>;
    /**
     * Permission to create, update, and delete stack instances.
     *
     * Choose from ALLOWED and NOT_ALLOWED.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-stacksetconstraint.html#cfn-servicecatalog-stacksetconstraint-stackinstancecontrol
     */
    readonly stackInstanceControl: string;
}
/**
 * Specifies a TagOption.
 *
 * A TagOption is a key-value pair managed by AWS Service Catalog that serves as a template for creating an AWS tag.
 *
 * @cloudformationResource AWS::ServiceCatalog::TagOption
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html
 */
export declare class CfnTagOption extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTagOption from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTagOption;
    /**
     * The TagOption identifier.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The TagOption active state.
     */
    active?: boolean | cdk.IResolvable;
    /**
     * The TagOption key.
     */
    key: string;
    /**
     * The TagOption value.
     */
    value: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTagOptionProps);
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
 * Properties for defining a `CfnTagOption`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html
 */
export interface CfnTagOptionProps {
    /**
     * The TagOption active state.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#cfn-servicecatalog-tagoption-active
     */
    readonly active?: boolean | cdk.IResolvable;
    /**
     * The TagOption key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#cfn-servicecatalog-tagoption-key
     */
    readonly key: string;
    /**
     * The TagOption value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#cfn-servicecatalog-tagoption-value
     */
    readonly value: string;
}
/**
 * Associate the specified TagOption with the specified portfolio or product.
 *
 * @cloudformationResource AWS::ServiceCatalog::TagOptionAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html
 */
export declare class CfnTagOptionAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTagOptionAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTagOptionAssociation;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The resource identifier.
     */
    resourceId: string;
    /**
     * The TagOption identifier.
     */
    tagOptionId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTagOptionAssociationProps);
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
 * Properties for defining a `CfnTagOptionAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html
 */
export interface CfnTagOptionAssociationProps {
    /**
     * The resource identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html#cfn-servicecatalog-tagoptionassociation-resourceid
     */
    readonly resourceId: string;
    /**
     * The TagOption identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html#cfn-servicecatalog-tagoptionassociation-tagoptionid
     */
    readonly tagOptionId: string;
}
