import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::AppConfig::Application` resource creates an application.
 *
 * In AWS AppConfig , an application is simply an organizational construct like a folder. This organizational construct has a relationship with some unit of executable code. For example, you could create an application called MyMobileApp to organize and manage configuration data for a mobile application installed by your users.
 *
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 *
 * - Create an application
 * - Create an environment
 * - Create a configuration profile
 * - Choose a pre-defined deployment strategy or create your own
 * - Deploy the configuration
 *
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the *AWS AppConfig User Guide* .
 *
 * @cloudformationResource AWS::AppConfig::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplication from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplication;
    /**
     * The application ID.
     *
     * @cloudformationAttribute ApplicationId
     */
    readonly attrApplicationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description of the application.
     */
    description?: string;
    /**
     * A name for the application.
     */
    name: string;
    /**
     * Metadata to assign to the application.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationProps);
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
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html
 */
export interface CfnApplicationProps {
    /**
     * A description of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html#cfn-appconfig-application-description
     */
    readonly description?: string;
    /**
     * A name for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html#cfn-appconfig-application-name
     */
    readonly name: string;
    /**
     * Metadata to assign to the application.
     *
     * Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html#cfn-appconfig-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::AppConfig::ConfigurationProfile` resource creates a configuration profile that enables AWS AppConfig to access the configuration source.
 *
 * Valid configuration sources include AWS Systems Manager (SSM) documents, SSM Parameter Store parameters, and Amazon S3 . A configuration profile includes the following information.
 *
 * - The Uri location of the configuration data.
 * - The AWS Identity and Access Management ( IAM ) role that provides access to the configuration data.
 * - A validator for the configuration data. Available validators include either a JSON Schema or the Amazon Resource Name (ARN) of an AWS Lambda function.
 *
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 *
 * - Create an application
 * - Create an environment
 * - Create a configuration profile
 * - Choose a pre-defined deployment strategy or create your own
 * - Deploy the configuration
 *
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the *AWS AppConfig User Guide* .
 *
 * @cloudformationResource AWS::AppConfig::ConfigurationProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html
 */
export declare class CfnConfigurationProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationProfile;
    /**
     * The configuration profile ID.
     *
     * @cloudformationAttribute ConfigurationProfileId
     */
    readonly attrConfigurationProfileId: string;
    /**
     * The Amazon Resource Name of the AWS Key Management Service key to encrypt new configuration data versions in the AWS AppConfig hosted configuration store. This attribute is only used for `hosted` configuration types. To encrypt data managed in other configuration stores, see the documentation for how to specify an AWS KMS key for that particular service.
     *
     * @cloudformationAttribute KmsKeyArn
     */
    readonly attrKmsKeyArn: string;
    /**
     * The application ID.
     */
    applicationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.
     */
    deletionProtectionCheck?: string;
    /**
     * A description of the configuration profile.
     */
    description?: string;
    /**
     * The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
     */
    kmsKeyIdentifier?: string;
    /**
     * A URI to locate the configuration. You can specify the following:.
     */
    locationUri: string;
    /**
     * A name for the configuration profile.
     */
    name: string;
    /**
     * The ARN of an IAM role with permission to access the configuration at the specified `LocationUri` .
     */
    retrievalRoleArn?: string;
    /**
     * Metadata to assign to the configuration profile.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The type of configurations contained in the profile.
     */
    type?: string;
    /**
     * A list of methods for validating the configuration.
     */
    validators?: Array<cdk.IResolvable | CfnConfigurationProfile.ValidatorsProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationProfile {
    /**
     * A validator provides a syntactic or semantic check to ensure the configuration that you want to deploy functions as intended.
     *
     * To validate your application configuration data, you provide a schema or an AWS Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid. For more information, see [About validators](https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-profile.html#appconfig-creating-configuration-and-profile-validators) in the *AWS AppConfig User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-configurationprofile-validators.html
     */
    interface ValidatorsProperty {
        /**
         * Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-configurationprofile-validators.html#cfn-appconfig-configurationprofile-validators-content
         */
        readonly content?: string;
        /**
         * AWS AppConfig supports validators of type `JSON_SCHEMA` and `LAMBDA`.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-configurationprofile-validators.html#cfn-appconfig-configurationprofile-validators-type
         */
        readonly type?: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html
 */
export interface CfnConfigurationProfileProps {
    /**
     * The application ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-applicationid
     */
    readonly applicationId: string;
    /**
     * On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.
     *
     * See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-deletionprotectioncheck
     */
    readonly deletionProtectionCheck?: string;
    /**
     * A description of the configuration profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-description
     */
    readonly description?: string;
    /**
     * The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-kmskeyidentifier
     */
    readonly kmsKeyIdentifier?: string;
    /**
     * A URI to locate the configuration. You can specify the following:.
     *
     * - For the AWS AppConfig hosted configuration store and for feature flags, specify `hosted` .
     * - For an AWS Systems Manager Parameter Store parameter, specify either the parameter name in the format `ssm-parameter://<parameter name>` or the ARN.
     * - For an AWS CodePipeline pipeline, specify the URI in the following format: `codepipeline` ://<pipeline name>.
     * - For an AWS Secrets Manager secret, specify the URI in the following format: `secretsmanager` ://<secret name>.
     * - For an Amazon S3 object, specify the URI in the following format: `s3://<bucket>/<objectKey>` . Here is an example: `s3://amzn-s3-demo-bucket/my-app/us-east-1/my-config.json`
     * - For an SSM document, specify either the document name in the format `ssm-document://<document name>` or the Amazon Resource Name (ARN).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-locationuri
     */
    readonly locationUri: string;
    /**
     * A name for the configuration profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-name
     */
    readonly name: string;
    /**
     * The ARN of an IAM role with permission to access the configuration at the specified `LocationUri` .
     *
     * > A retrieval role ARN is not required for configurations stored in the AWS AppConfig hosted configuration store. It is required for all other sources that store your configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-retrievalrolearn
     */
    readonly retrievalRoleArn?: string;
    /**
     * Metadata to assign to the configuration profile.
     *
     * Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of configurations contained in the profile.
     *
     * AWS AppConfig supports `feature flags` and `freeform` configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for `Type` :
     *
     * `AWS.AppConfig.FeatureFlags`
     *
     * `AWS.Freeform`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-type
     */
    readonly type?: string;
    /**
     * A list of methods for validating the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-validators
     */
    readonly validators?: Array<cdk.IResolvable | CfnConfigurationProfile.ValidatorsProperty> | cdk.IResolvable;
}
/**
 * The `AWS::AppConfig::Deployment` resource starts a deployment.
 *
 * Starting a deployment in AWS AppConfig calls the `StartDeployment` API action. This call includes the IDs of the AWS AppConfig application, the environment, the configuration profile, and (optionally) the configuration data version to deploy. The call also includes the ID of the deployment strategy to use, which determines how the configuration data is deployed.
 *
 * AWS AppConfig monitors the distribution to all hosts and reports status. If a distribution fails, then AWS AppConfig rolls back the configuration.
 *
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 *
 * - Create an application
 * - Create an environment
 * - Create a configuration profile
 * - Choose a pre-defined deployment strategy or create your own
 * - Deploy the configuration
 *
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the *AWS AppConfig User Guide* .
 *
 * @cloudformationResource AWS::AppConfig::Deployment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html
 */
export declare class CfnDeployment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeployment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeployment;
    /**
     * The sequence number of the deployment.
     *
     * @cloudformationAttribute DeploymentNumber
     */
    readonly attrDeploymentNumber: string;
    /**
     * The application ID.
     */
    applicationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The configuration profile ID.
     */
    configurationProfileId: string;
    /**
     * The configuration version to deploy.
     */
    configurationVersion: string;
    /**
     * The deployment strategy ID.
     */
    deploymentStrategyId: string;
    /**
     * A description of the deployment.
     */
    description?: string;
    /**
     * A map of dynamic extension parameter names to values to pass to associated extensions with `PRE_START_DEPLOYMENT` actions.
     */
    dynamicExtensionParameters?: Array<CfnDeployment.DynamicExtensionParametersProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The environment ID.
     */
    environmentId: string;
    /**
     * The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
     */
    kmsKeyIdentifier?: string;
    /**
     * Metadata to assign to the deployment.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeploymentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDeployment {
    /**
     * A map of dynamic extension parameter names to values to pass to associated extensions with `PRE_START_DEPLOYMENT` actions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deployment-dynamicextensionparameters.html
     */
    interface DynamicExtensionParametersProperty {
        /**
         * The ARN or ID of the extension for which you are inserting a dynamic parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deployment-dynamicextensionparameters.html#cfn-appconfig-deployment-dynamicextensionparameters-extensionreference
         */
        readonly extensionReference?: string;
        /**
         * The parameter name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deployment-dynamicextensionparameters.html#cfn-appconfig-deployment-dynamicextensionparameters-parametername
         */
        readonly parameterName?: string;
        /**
         * The parameter value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deployment-dynamicextensionparameters.html#cfn-appconfig-deployment-dynamicextensionparameters-parametervalue
         */
        readonly parameterValue?: string;
    }
}
/**
 * Properties for defining a `CfnDeployment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html
 */
export interface CfnDeploymentProps {
    /**
     * The application ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-applicationid
     */
    readonly applicationId: string;
    /**
     * The configuration profile ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-configurationprofileid
     */
    readonly configurationProfileId: string;
    /**
     * The configuration version to deploy.
     *
     * If deploying an AWS AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-configurationversion
     */
    readonly configurationVersion: string;
    /**
     * The deployment strategy ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-deploymentstrategyid
     */
    readonly deploymentStrategyId: string;
    /**
     * A description of the deployment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-description
     */
    readonly description?: string;
    /**
     * A map of dynamic extension parameter names to values to pass to associated extensions with `PRE_START_DEPLOYMENT` actions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-dynamicextensionparameters
     */
    readonly dynamicExtensionParameters?: Array<CfnDeployment.DynamicExtensionParametersProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The environment ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-environmentid
     */
    readonly environmentId: string;
    /**
     * The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-kmskeyidentifier
     */
    readonly kmsKeyIdentifier?: string;
    /**
     * Metadata to assign to the deployment.
     *
     * Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::AppConfig::DeploymentStrategy` resource creates an AWS AppConfig deployment strategy.
 *
 * A deployment strategy defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes: the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.
 *
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 *
 * - Create an application
 * - Create an environment
 * - Create a configuration profile
 * - Choose a pre-defined deployment strategy or create your own
 * - Deploy the configuration
 *
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the *AWS AppConfig User Guide* .
 *
 * @cloudformationResource AWS::AppConfig::DeploymentStrategy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html
 */
export declare class CfnDeploymentStrategy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeploymentStrategy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeploymentStrategy;
    /**
     * The deployment strategy ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Total amount of time for a deployment to last.
     */
    deploymentDurationInMinutes: number;
    /**
     * A description of the deployment strategy.
     */
    description?: string;
    /**
     * Specifies the amount of time AWS AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete.
     */
    finalBakeTimeInMinutes?: number;
    /**
     * The percentage of targets to receive a deployed configuration during each interval.
     */
    growthFactor: number;
    /**
     * The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:.
     */
    growthType?: string;
    /**
     * A name for the deployment strategy.
     */
    name: string;
    /**
     * Save the deployment strategy to a Systems Manager (SSM) document.
     */
    replicateTo: string;
    /**
     * Assigns metadata to an AWS AppConfig resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeploymentStrategyProps);
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
 * Properties for defining a `CfnDeploymentStrategy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html
 */
export interface CfnDeploymentStrategyProps {
    /**
     * Total amount of time for a deployment to last.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-deploymentdurationinminutes
     */
    readonly deploymentDurationInMinutes: number;
    /**
     * A description of the deployment strategy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-description
     */
    readonly description?: string;
    /**
     * Specifies the amount of time AWS AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete.
     *
     * If an alarm is triggered during this time, AWS AppConfig rolls back the deployment. You must configure permissions for AWS AppConfig to roll back based on CloudWatch alarms. For more information, see [Configuring permissions for rollback based on Amazon CloudWatch alarms](https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html) in the *AWS AppConfig User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-finalbaketimeinminutes
     */
    readonly finalBakeTimeInMinutes?: number;
    /**
     * The percentage of targets to receive a deployed configuration during each interval.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-growthfactor
     */
    readonly growthFactor: number;
    /**
     * The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:.
     *
     * *Linear* : For this type, AWS AppConfig processes the deployment by dividing the total number of targets by the value specified for `Step percentage` . For example, a linear deployment that uses a `Step percentage` of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.
     *
     * *Exponential* : For this type, AWS AppConfig processes the deployment exponentially using the following formula: `G*(2^N)` . In this formula, `G` is the growth factor specified by the user and `N` is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:
     *
     * `2*(2^0)`
     *
     * `2*(2^1)`
     *
     * `2*(2^2)`
     *
     * Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-growthtype
     */
    readonly growthType?: string;
    /**
     * A name for the deployment strategy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-name
     */
    readonly name: string;
    /**
     * Save the deployment strategy to a Systems Manager (SSM) document.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-replicateto
     */
    readonly replicateTo: string;
    /**
     * Assigns metadata to an AWS AppConfig resource.
     *
     * Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define. You can specify a maximum of 50 tags for a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::AppConfig::Environment` resource creates an environment, which is a logical deployment group of AWS AppConfig targets, such as applications in a `Beta` or `Production` environment.
 *
 * You define one or more environments for each AWS AppConfig application. You can also define environments for application subcomponents such as the `Web` , `Mobile` and `Back-end` components for your application. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration.
 *
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 *
 * - Create an application
 * - Create an environment
 * - Create a configuration profile
 * - Choose a pre-defined deployment strategy or create your own
 * - Deploy the configuration
 *
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the *AWS AppConfig User Guide* .
 *
 * @cloudformationResource AWS::AppConfig::Environment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html
 */
export declare class CfnEnvironment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
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
     * The environment ID.
     *
     * @cloudformationAttribute EnvironmentId
     */
    readonly attrEnvironmentId: string;
    /**
     * The application ID.
     */
    applicationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.
     */
    deletionProtectionCheck?: string;
    /**
     * A description of the environment.
     */
    description?: string;
    /**
     * Amazon CloudWatch alarms to monitor during the deployment process.
     */
    monitors?: Array<cdk.IResolvable | CfnEnvironment.MonitorsProperty> | cdk.IResolvable;
    /**
     * A name for the environment.
     */
    name: string;
    /**
     * Metadata to assign to the environment.
     */
    tags?: Array<cdk.CfnTag>;
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
     * Amazon CloudWatch alarms to monitor during the deployment process.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-monitor.html
     */
    interface MonitorProperty {
        /**
         * Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-monitor.html#cfn-appconfig-environment-monitor-alarmarn
         */
        readonly alarmArn: string;
        /**
         * ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor `AlarmArn` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-monitor.html#cfn-appconfig-environment-monitor-alarmrolearn
         */
        readonly alarmRoleArn?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-monitors.html
     */
    interface MonitorsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-monitors.html#cfn-appconfig-environment-monitors-alarmarn
         */
        readonly alarmArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-monitors.html#cfn-appconfig-environment-monitors-alarmrolearn
         */
        readonly alarmRoleArn?: string;
    }
}
/**
 * Properties for defining a `CfnEnvironment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html
 */
export interface CfnEnvironmentProps {
    /**
     * The application ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html#cfn-appconfig-environment-applicationid
     */
    readonly applicationId: string;
    /**
     * On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.
     *
     * See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html#cfn-appconfig-environment-deletionprotectioncheck
     */
    readonly deletionProtectionCheck?: string;
    /**
     * A description of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html#cfn-appconfig-environment-description
     */
    readonly description?: string;
    /**
     * Amazon CloudWatch alarms to monitor during the deployment process.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html#cfn-appconfig-environment-monitors
     */
    readonly monitors?: Array<cdk.IResolvable | CfnEnvironment.MonitorsProperty> | cdk.IResolvable;
    /**
     * A name for the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html#cfn-appconfig-environment-name
     */
    readonly name: string;
    /**
     * Metadata to assign to the environment.
     *
     * Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html#cfn-appconfig-environment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an AWS AppConfig extension.
 *
 * An extension augments your ability to inject logic or behavior at different points during the AWS AppConfig workflow of creating or deploying a configuration.
 *
 * You can create your own extensions or use the AWS authored extensions provided by AWS AppConfig . For an AWS AppConfig extension that uses AWS Lambda , you must create a Lambda function to perform any computation and processing defined in the extension. If you plan to create custom versions of the AWS authored notification extensions, you only need to specify an Amazon Resource Name (ARN) in the `Uri` field for the new extension version.
 *
 * - For a custom EventBridge notification extension, enter the ARN of the EventBridge default events in the `Uri` field.
 * - For a custom Amazon SNS notification extension, enter the ARN of an Amazon SNS topic in the `Uri` field.
 * - For a custom Amazon SQS notification extension, enter the ARN of an Amazon SQS message queue in the `Uri` field.
 *
 * For more information about extensions, see [Extending workflows](https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html) in the *AWS AppConfig User Guide* .
 *
 * @cloudformationResource AWS::AppConfig::Extension
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html
 */
export declare class CfnExtension extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnExtension from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnExtension;
    /**
     * The system-generated Amazon Resource Name (ARN) for the extension.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The system-generated ID of the extension.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The extension version number.
     *
     * @cloudformationAttribute VersionNumber
     */
    readonly attrVersionNumber: number;
    /**
     * The actions defined in the extension.
     */
    actions: any | cdk.IResolvable;
    /**
     * Information about the extension.
     */
    description?: string;
    /**
     * You can omit this field when you create an extension.
     */
    latestVersionNumber?: number;
    /**
     * A name for the extension.
     */
    name: string;
    /**
     * The parameters accepted by the extension.
     */
    parameters?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnExtension.ParameterProperty>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Adds one or more tags for the specified extension.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnExtensionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnExtension {
    /**
     * A value such as an Amazon Resource Name (ARN) or an Amazon Simple Notification Service topic entered in an extension when invoked.
     *
     * Parameter values are specified in an extension association. For more information about extensions, see [Extending workflows](https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html) in the *AWS AppConfig User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-parameter.html
     */
    interface ParameterProperty {
        /**
         * Information about the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-parameter.html#cfn-appconfig-extension-parameter-description
         */
        readonly description?: string;
        /**
         * Indicates whether this parameter's value can be supplied at the extension's action point instead of during extension association.
         *
         * Dynamic parameters can't be marked `Required` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-parameter.html#cfn-appconfig-extension-parameter-dynamic
         */
        readonly dynamic?: boolean | cdk.IResolvable;
        /**
         * A parameter value must be specified in the extension association.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-parameter.html#cfn-appconfig-extension-parameter-required
         */
        readonly required: boolean | cdk.IResolvable;
    }
    /**
     * The actions defined in the extension.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-action.html
     */
    interface ActionProperty {
        /**
         * Information about actions defined in the extension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-action.html#cfn-appconfig-extension-action-description
         */
        readonly description?: string;
        /**
         * The action name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-action.html#cfn-appconfig-extension-action-name
         */
        readonly name: string;
        /**
         * An Amazon Resource Name (ARN) for an AWS Identity and Access Management assume role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-action.html#cfn-appconfig-extension-action-rolearn
         */
        readonly roleArn?: string;
        /**
         * The extension URI associated to the action point in the extension definition.
         *
         * The URI can be an Amazon Resource Name (ARN) for one of the following: an AWS Lambda function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-action.html#cfn-appconfig-extension-action-uri
         */
        readonly uri: string;
    }
}
/**
 * Properties for defining a `CfnExtension`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html
 */
export interface CfnExtensionProps {
    /**
     * The actions defined in the extension.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html#cfn-appconfig-extension-actions
     */
    readonly actions: any | cdk.IResolvable;
    /**
     * Information about the extension.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html#cfn-appconfig-extension-description
     */
    readonly description?: string;
    /**
     * You can omit this field when you create an extension.
     *
     * When you create a new version, specify the most recent current version number. For example, you create version 3, enter 2 for this field.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html#cfn-appconfig-extension-latestversionnumber
     */
    readonly latestVersionNumber?: number;
    /**
     * A name for the extension.
     *
     * Each extension name in your account must be unique. Extension versions use the same name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html#cfn-appconfig-extension-name
     */
    readonly name: string;
    /**
     * The parameters accepted by the extension.
     *
     * You specify parameter values when you associate the extension to an AWS AppConfig resource by using the `CreateExtensionAssociation` API action. For AWS Lambda extension actions, these parameters are included in the Lambda request object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html#cfn-appconfig-extension-parameters
     */
    readonly parameters?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnExtension.ParameterProperty>;
    /**
     * Adds one or more tags for the specified extension.
     *
     * Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html#cfn-appconfig-extension-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * When you create an extension or configure an AWS authored extension, you associate the extension with an AWS AppConfig application, environment, or configuration profile.
 *
 * For example, you can choose to run the `AWS AppConfig deployment events to Amazon SNS` AWS authored extension and receive notifications on an Amazon SNS topic anytime a configuration deployment is started for a specific application. Defining which extension to associate with an AWS AppConfig resource is called an *extension association* . An extension association is a specified relationship between an extension and an AWS AppConfig resource, such as an application or a configuration profile. For more information about extensions and associations, see [Extending workflows](https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html) in the *AWS AppConfig User Guide* .
 *
 * @cloudformationResource AWS::AppConfig::ExtensionAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html
 */
export declare class CfnExtensionAssociation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnExtensionAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnExtensionAssociation;
    /**
     * The ARN of the extension defined in the association.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ARN of the extension defined in the association.
     *
     * @cloudformationAttribute ExtensionArn
     */
    readonly attrExtensionArn: string;
    /**
     * The system-generated ID for the association.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARNs of applications, configuration profiles, or environments defined in the association.
     *
     * @cloudformationAttribute ResourceArn
     */
    readonly attrResourceArn: string;
    /**
     * The name, the ID, or the Amazon Resource Name (ARN) of the extension.
     */
    extensionIdentifier?: string;
    /**
     * The version number of the extension.
     */
    extensionVersionNumber?: number;
    /**
     * The parameter names and values defined in the extensions.
     */
    parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * The ARN of an application, configuration profile, or environment.
     */
    resourceIdentifier?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Adds one or more tags for the specified extension association.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnExtensionAssociationProps);
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
 * Properties for defining a `CfnExtensionAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html
 */
export interface CfnExtensionAssociationProps {
    /**
     * The name, the ID, or the Amazon Resource Name (ARN) of the extension.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html#cfn-appconfig-extensionassociation-extensionidentifier
     */
    readonly extensionIdentifier?: string;
    /**
     * The version number of the extension.
     *
     * If not specified, AWS AppConfig uses the maximum version of the extension.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html#cfn-appconfig-extensionassociation-extensionversionnumber
     */
    readonly extensionVersionNumber?: number;
    /**
     * The parameter names and values defined in the extensions.
     *
     * Extension parameters marked `Required` must be entered for this field.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html#cfn-appconfig-extensionassociation-parameters
     */
    readonly parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * The ARN of an application, configuration profile, or environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html#cfn-appconfig-extensionassociation-resourceidentifier
     */
    readonly resourceIdentifier?: string;
    /**
     * Adds one or more tags for the specified extension association.
     *
     * Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html#cfn-appconfig-extensionassociation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Create a new configuration in the AWS AppConfig hosted configuration store.
 *
 * Configurations must be 1 MB or smaller. The AWS AppConfig hosted configuration store provides the following benefits over other configuration store options.
 *
 * - You don't need to set up and configure other services such as Amazon Simple Storage Service ( Amazon S3 ) or Parameter Store.
 * - You don't need to configure AWS Identity and Access Management ( IAM ) permissions to use the configuration store.
 * - You can store configurations in any content type.
 * - There is no cost to use the store.
 * - You can create a configuration and add it to the store when you create a configuration profile.
 *
 * @cloudformationResource AWS::AppConfig::HostedConfigurationVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html
 */
export declare class CfnHostedConfigurationVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnHostedConfigurationVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHostedConfigurationVersion;
    /**
     * The configuration version.
     *
     * @cloudformationAttribute VersionNumber
     */
    readonly attrVersionNumber: string;
    /**
     * The application ID.
     */
    applicationId: string;
    /**
     * The configuration profile ID.
     */
    configurationProfileId: string;
    /**
     * The configuration data, as bytes.
     */
    content: string;
    /**
     * A standard MIME type describing the format of the configuration content.
     */
    contentType: string;
    /**
     * A description of the configuration.
     */
    description?: string;
    /**
     * An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version.
     */
    latestVersionNumber?: number;
    /**
     * A user-defined label for an AWS AppConfig hosted configuration version.
     */
    versionLabel?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnHostedConfigurationVersionProps);
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
 * Properties for defining a `CfnHostedConfigurationVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html
 */
export interface CfnHostedConfigurationVersionProps {
    /**
     * The application ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-applicationid
     */
    readonly applicationId: string;
    /**
     * The configuration profile ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-configurationprofileid
     */
    readonly configurationProfileId: string;
    /**
     * The configuration data, as bytes.
     *
     * > AWS AppConfig accepts any type of data, including text formats like JSON or TOML, or binary formats like protocol buffers or compressed data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-content
     */
    readonly content: string;
    /**
     * A standard MIME type describing the format of the configuration content.
     *
     * For more information, see [Content-Type](https://docs.aws.amazon.com/https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-contenttype
     */
    readonly contentType: string;
    /**
     * A description of the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-description
     */
    readonly description?: string;
    /**
     * An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version.
     *
     * To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-latestversionnumber
     */
    readonly latestVersionNumber?: number;
    /**
     * A user-defined label for an AWS AppConfig hosted configuration version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-versionlabel
     */
    readonly versionLabel?: string;
}
