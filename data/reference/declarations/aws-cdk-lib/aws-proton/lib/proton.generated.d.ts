import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Detailed data of an AWS Proton environment account connection resource.
 *
 * @cloudformationResource AWS::Proton::EnvironmentAccountConnection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html
 */
export declare class CfnEnvironmentAccountConnection extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnvironmentAccountConnection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnvironmentAccountConnection;
    /**
     * Returns the environment account connection ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the environment account connection ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Returns the environment account connection status.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM service role in the environment account.
     */
    codebuildRoleArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account.
     */
    componentRoleArn?: string;
    /**
     * The environment account that's connected to the environment account connection.
     */
    environmentAccountId?: string;
    /**
     * The name of the environment that's associated with the environment account connection.
     */
    environmentName?: string;
    /**
     * The ID of the management account that's connected to the environment account connection.
     */
    managementAccountId?: string;
    /**
     * The IAM service role that's associated with the environment account connection.
     */
    roleArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An optional list of metadata items that you can associate with the AWS Proton environment account connection.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnEnvironmentAccountConnectionProps);
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
 * Properties for defining a `CfnEnvironmentAccountConnection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html
 */
export interface CfnEnvironmentAccountConnectionProps {
    /**
     * The Amazon Resource Name (ARN) of an IAM service role in the environment account.
     *
     * AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html#cfn-proton-environmentaccountconnection-codebuildrolearn
     */
    readonly codebuildRoleArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account.
     *
     * It determines the scope of infrastructure that a component can provision in the account.
     *
     * The environment account connection must have a `componentRoleArn` to allow directly defined components to be associated with any environments running in the account.
     *
     * For more information about components, see [AWS Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *AWS Proton User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html#cfn-proton-environmentaccountconnection-componentrolearn
     */
    readonly componentRoleArn?: string;
    /**
     * The environment account that's connected to the environment account connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html#cfn-proton-environmentaccountconnection-environmentaccountid
     */
    readonly environmentAccountId?: string;
    /**
     * The name of the environment that's associated with the environment account connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html#cfn-proton-environmentaccountconnection-environmentname
     */
    readonly environmentName?: string;
    /**
     * The ID of the management account that's connected to the environment account connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html#cfn-proton-environmentaccountconnection-managementaccountid
     */
    readonly managementAccountId?: string;
    /**
     * The IAM service role that's associated with the environment account connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html#cfn-proton-environmentaccountconnection-rolearn
     */
    readonly roleArn?: string;
    /**
     * An optional list of metadata items that you can associate with the AWS Proton environment account connection.
     *
     * A tag is a key-value pair.
     *
     * For more information, see [AWS Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *AWS Proton User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmentaccountconnection.html#cfn-proton-environmentaccountconnection-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Create an environment template for AWS Proton .
 *
 * For more information, see [Environment Templates](https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html) in the *AWS Proton User Guide* .
 *
 * You can create an environment template in one of the two following ways:
 *
 * - Register and publish a *standard* environment template that instructs AWS Proton to deploy and manage environment infrastructure.
 * - Register and publish a *customer managed* environment template that connects AWS Proton to your existing provisioned infrastructure that you manage. AWS Proton *doesn't* manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the `provisioning` parameter and set the value to `CUSTOMER_MANAGED` . For more information, see [Register and publish an environment template](https://docs.aws.amazon.com/proton/latest/userguide/template-create.html) in the *AWS Proton User Guide* .
 *
 * @cloudformationResource AWS::Proton::EnvironmentTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html
 */
export declare class CfnEnvironmentTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnvironmentTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnvironmentTemplate;
    /**
     * Returns the ARN of the environment template.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A description of the environment template.
     */
    description?: string;
    /**
     * The name of the environment template as displayed in the developer interface.
     */
    displayName?: string;
    /**
     * The customer provided encryption key for the environment template.
     */
    encryptionKey?: string;
    /**
     * The name of the environment template.
     */
    name?: string;
    /**
     * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
     */
    provisioning?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An optional list of metadata items that you can associate with the AWS Proton environment template.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnEnvironmentTemplateProps);
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
 * Properties for defining a `CfnEnvironmentTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html
 */
export interface CfnEnvironmentTemplateProps {
    /**
     * A description of the environment template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-description
     */
    readonly description?: string;
    /**
     * The name of the environment template as displayed in the developer interface.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-displayname
     */
    readonly displayName?: string;
    /**
     * The customer provided encryption key for the environment template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-encryptionkey
     */
    readonly encryptionKey?: string;
    /**
     * The name of the environment template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-name
     */
    readonly name?: string;
    /**
     * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-provisioning
     */
    readonly provisioning?: string;
    /**
     * An optional list of metadata items that you can associate with the AWS Proton environment template.
     *
     * A tag is a key-value pair.
     *
     * For more information, see [AWS Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the *AWS Proton User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Create a service template.
 *
 * The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from AWS Proton . If the selected service template includes a service pipeline definition, they provide a link to their source code repository. AWS Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see [AWS Proton templates](https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html) in the *AWS Proton User Guide* .
 *
 * @cloudformationResource AWS::Proton::ServiceTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html
 */
export declare class CfnServiceTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServiceTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServiceTemplate;
    /**
     * Returns the service template ARN.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A description of the service template.
     */
    description?: string;
    /**
     * The service template name as displayed in the developer interface.
     */
    displayName?: string;
    /**
     * The customer provided service template encryption key that's used to encrypt data.
     */
    encryptionKey?: string;
    /**
     * The name of the service template.
     */
    name?: string;
    /**
     * If `pipelineProvisioning` is `true` , a service pipeline is included in the service template.
     */
    pipelineProvisioning?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An object that includes the template bundle S3 bucket path and name for the new version of a service template.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnServiceTemplateProps);
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
 * Properties for defining a `CfnServiceTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html
 */
export interface CfnServiceTemplateProps {
    /**
     * A description of the service template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html#cfn-proton-servicetemplate-description
     */
    readonly description?: string;
    /**
     * The service template name as displayed in the developer interface.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html#cfn-proton-servicetemplate-displayname
     */
    readonly displayName?: string;
    /**
     * The customer provided service template encryption key that's used to encrypt data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html#cfn-proton-servicetemplate-encryptionkey
     */
    readonly encryptionKey?: string;
    /**
     * The name of the service template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html#cfn-proton-servicetemplate-name
     */
    readonly name?: string;
    /**
     * If `pipelineProvisioning` is `true` , a service pipeline is included in the service template.
     *
     * Otherwise, a service pipeline *isn't* included in the service template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html#cfn-proton-servicetemplate-pipelineprovisioning
     */
    readonly pipelineProvisioning?: string;
    /**
     * An object that includes the template bundle S3 bucket path and name for the new version of a service template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-servicetemplate.html#cfn-proton-servicetemplate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
