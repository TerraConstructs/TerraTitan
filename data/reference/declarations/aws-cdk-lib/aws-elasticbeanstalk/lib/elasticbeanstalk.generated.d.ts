import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specify an AWS Elastic Beanstalk application by using the AWS::ElasticBeanstalk::Application resource in an AWS CloudFormation template.
 *
 * The AWS::ElasticBeanstalk::Application resource is an AWS Elastic Beanstalk Beanstalk resource type that specifies an Elastic Beanstalk application.
 *
 * @cloudformationResource AWS::ElasticBeanstalk::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable {
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
     * A name for the Elastic Beanstalk application.
     */
    applicationName?: string;
    /**
     * Your description of the application.
     */
    description?: string;
    /**
     * Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.
     */
    resourceLifecycleConfig?: CfnApplication.ApplicationResourceLifecycleConfigProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnApplicationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplication {
    /**
     * Use the `ApplicationResourceLifecycleConfig` property type to specify lifecycle settings for resources that belong to an AWS Elastic Beanstalk application when defining an AWS::ElasticBeanstalk::Application resource in an AWS CloudFormation template.
     *
     * The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.
     *
     * `ApplicationResourceLifecycleConfig` is a property of the [AWS::ElasticBeanstalk::Application](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationresourcelifecycleconfig.html
     */
    interface ApplicationResourceLifecycleConfigProperty {
        /**
         * The ARN of an IAM service role that Elastic Beanstalk has permission to assume.
         *
         * The `ServiceRole` property is required the first time that you provide a `ResourceLifecycleConfig` for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationresourcelifecycleconfig.html#cfn-elasticbeanstalk-application-applicationresourcelifecycleconfig-servicerole
         */
        readonly serviceRole?: string;
        /**
         * Defines lifecycle settings for application versions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationresourcelifecycleconfig.html#cfn-elasticbeanstalk-application-applicationresourcelifecycleconfig-versionlifecycleconfig
         */
        readonly versionLifecycleConfig?: CfnApplication.ApplicationVersionLifecycleConfigProperty | cdk.IResolvable;
    }
    /**
     * Use the `ApplicationVersionLifecycleConfig` property type to specify application version lifecycle settings for an AWS Elastic Beanstalk application when defining an AWS::ElasticBeanstalk::Application resource in an AWS CloudFormation template.
     *
     * The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.
     *
     * When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.
     *
     * `ApplicationVersionLifecycleConfig` is a property of the [ApplicationResourceLifecycleConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationresourcelifecycleconfig.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationversionlifecycleconfig.html
     */
    interface ApplicationVersionLifecycleConfigProperty {
        /**
         * Specify a max age rule to restrict the length of time that application versions are retained for an application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationversionlifecycleconfig.html#cfn-elasticbeanstalk-application-applicationversionlifecycleconfig-maxagerule
         */
        readonly maxAgeRule?: cdk.IResolvable | CfnApplication.MaxAgeRuleProperty;
        /**
         * Specify a max count rule to restrict the number of application versions that are retained for an application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationversionlifecycleconfig.html#cfn-elasticbeanstalk-application-applicationversionlifecycleconfig-maxcountrule
         */
        readonly maxCountRule?: cdk.IResolvable | CfnApplication.MaxCountRuleProperty;
    }
    /**
     * Use the `MaxAgeRule` property type to specify a max count rule to restrict the number of application versions that are retained for an AWS Elastic Beanstalk application when defining an AWS::ElasticBeanstalk::Application resource in an AWS CloudFormation template.
     *
     * A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
     *
     * `MaxCountRule` is a property of the [ApplicationVersionLifecycleConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationversionlifecycleconfig.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxcountrule.html
     */
    interface MaxCountRuleProperty {
        /**
         * Set to `true` to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxcountrule.html#cfn-elasticbeanstalk-application-maxcountrule-deletesourcefroms3
         */
        readonly deleteSourceFromS3?: boolean | cdk.IResolvable;
        /**
         * Specify `true` to apply the rule, or `false` to disable it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxcountrule.html#cfn-elasticbeanstalk-application-maxcountrule-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Specify the maximum number of application versions to retain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxcountrule.html#cfn-elasticbeanstalk-application-maxcountrule-maxcount
         */
        readonly maxCount?: number;
    }
    /**
     * Use the `MaxAgeRule` property type to specify a max age rule to restrict the length of time that application versions are retained for an AWS Elastic Beanstalk application when defining an AWS::ElasticBeanstalk::Application resource in an AWS CloudFormation template.
     *
     * A lifecycle rule that deletes application versions after the specified number of days.
     *
     * `MaxAgeRule` is a property of the [ApplicationVersionLifecycleConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationversionlifecycleconfig.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxagerule.html
     */
    interface MaxAgeRuleProperty {
        /**
         * Set to `true` to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxagerule.html#cfn-elasticbeanstalk-application-maxagerule-deletesourcefroms3
         */
        readonly deleteSourceFromS3?: boolean | cdk.IResolvable;
        /**
         * Specify `true` to apply the rule, or `false` to disable it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxagerule.html#cfn-elasticbeanstalk-application-maxagerule-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Specify the number of days to retain an application versions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-maxagerule.html#cfn-elasticbeanstalk-application-maxagerule-maxageindays
         */
        readonly maxAgeInDays?: number;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html
 */
export interface CfnApplicationProps {
    /**
     * A name for the Elastic Beanstalk application.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-applicationname
     */
    readonly applicationName?: string;
    /**
     * Your description of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-description
     */
    readonly description?: string;
    /**
     * Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-resourcelifecycleconfig
     */
    readonly resourceLifecycleConfig?: CfnApplication.ApplicationResourceLifecycleConfigProperty | cdk.IResolvable;
}
/**
 * Specify an AWS Elastic Beanstalk application version by using the AWS::ElasticBeanstalk::ApplicationVersion resource in an AWS CloudFormation template.
 *
 * The AWS::ElasticBeanstalk::ApplicationVersion resource is an AWS Elastic Beanstalk resource type that specifies an application version, an iteration of deployable code, for an Elastic Beanstalk application.
 *
 * > After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, an attempt to launch an environment from the application version will fail.
 *
 * @cloudformationResource AWS::ElasticBeanstalk::ApplicationVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html
 */
export declare class CfnApplicationVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationVersion;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the Elastic Beanstalk application that is associated with this application version.
     */
    applicationName: string;
    /**
     * A description of this application version.
     */
    description?: string;
    /**
     * The Amazon S3 bucket and key that identify the location of the source bundle for this version.
     */
    sourceBundle: cdk.IResolvable | CfnApplicationVersion.SourceBundleProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplicationVersion {
    /**
     * Use the `SourceBundle` property type to specify the Amazon S3 location of the source bundle for an AWS Elastic Beanstalk application version when defining an AWS::ElasticBeanstalk::ApplicationVersion resource in an AWS CloudFormation template.
     *
     * The `SourceBundle` property is an embedded property of the [AWS::ElasticBeanstalk::ApplicationVersion](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-sourcebundle.html) resource. It specifies the Amazon S3 location of the source bundle for an AWS Elastic Beanstalk application version.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-applicationversion-sourcebundle.html
     */
    interface SourceBundleProperty {
        /**
         * The Amazon S3 bucket where the data is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-applicationversion-sourcebundle.html#cfn-elasticbeanstalk-applicationversion-sourcebundle-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The Amazon S3 key where the data is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-applicationversion-sourcebundle.html#cfn-elasticbeanstalk-applicationversion-sourcebundle-s3key
         */
        readonly s3Key: string;
    }
}
/**
 * Properties for defining a `CfnApplicationVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html
 */
export interface CfnApplicationVersionProps {
    /**
     * The name of the Elastic Beanstalk application that is associated with this application version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html#cfn-elasticbeanstalk-applicationversion-applicationname
     */
    readonly applicationName: string;
    /**
     * A description of this application version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html#cfn-elasticbeanstalk-applicationversion-description
     */
    readonly description?: string;
    /**
     * The Amazon S3 bucket and key that identify the location of the source bundle for this version.
     *
     * > The Amazon S3 bucket must be in the same region as the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html#cfn-elasticbeanstalk-applicationversion-sourcebundle
     */
    readonly sourceBundle: cdk.IResolvable | CfnApplicationVersion.SourceBundleProperty;
}
/**
 * Specify an AWS Elastic Beanstalk configuration template by using the AWS::ElasticBeanstalk::ConfigurationTemplate resource in an AWS CloudFormation template.
 *
 * The AWS::ElasticBeanstalk::ConfigurationTemplate resource is an AWS Elastic Beanstalk resource type that specifies an Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.
 *
 * > The Elastic Beanstalk console and documentation often refer to configuration templates as *saved configurations* . When you set configuration options in a saved configuration (configuration template), Elastic Beanstalk applies them with a particular precedence as part of applying options from multiple sources. For more information, see [Configuration Options](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the *AWS Elastic Beanstalk Developer Guide* .
 *
 * @cloudformationResource AWS::ElasticBeanstalk::ConfigurationTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html
 */
export declare class CfnConfigurationTemplate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationTemplate;
    /**
     * The name of the configuration template.
     *
     * Constraint: This name must be unique per application.
     *
     * @cloudformationAttribute TemplateName
     */
    readonly attrTemplateName: string;
    /**
     * The name of the Elastic Beanstalk application to associate with this configuration template.
     */
    applicationName: string;
    /**
     * An optional description for this configuration.
     */
    description?: string;
    /**
     * The ID of an environment whose settings you want to use to create the configuration template.
     */
    environmentId?: string;
    /**
     * Option values for the Elastic Beanstalk configuration, such as the instance type.
     */
    optionSettings?: Array<CfnConfigurationTemplate.ConfigurationOptionSettingProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the custom platform.
     */
    platformArn?: string;
    /**
     * The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses.
     */
    solutionStackName?: string;
    /**
     * An Elastic Beanstalk configuration template to base this one on.
     */
    sourceConfiguration?: cdk.IResolvable | CfnConfigurationTemplate.SourceConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationTemplate {
    /**
     * Use the `ConfigurationOptionSetting` property type to specify an option for an AWS Elastic Beanstalk configuration template when defining an AWS::ElasticBeanstalk::ConfigurationTemplate resource in an AWS CloudFormation template.
     *
     * The `ConfigurationOptionSetting` property type specifies an option for an AWS Elastic Beanstalk configuration template.
     *
     * The `OptionSettings` property of the [AWS::ElasticBeanstalk::ConfigurationTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-beanstalk-configurationtemplate.html) resource contains a list of `ConfigurationOptionSetting` property types.
     *
     * For a list of possible namespaces and option values, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the *AWS Elastic Beanstalk Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-configurationoptionsetting.html
     */
    interface ConfigurationOptionSettingProperty {
        /**
         * A unique namespace that identifies the option's associated AWS resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-configurationoptionsetting.html#cfn-elasticbeanstalk-configurationtemplate-configurationoptionsetting-namespace
         */
        readonly namespace: string;
        /**
         * The name of the configuration option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-configurationoptionsetting.html#cfn-elasticbeanstalk-configurationtemplate-configurationoptionsetting-optionname
         */
        readonly optionName: string;
        /**
         * A unique resource name for the option setting.
         *
         * Use it for a time–based scaling configuration option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-configurationoptionsetting.html#cfn-elasticbeanstalk-configurationtemplate-configurationoptionsetting-resourcename
         */
        readonly resourceName?: string;
        /**
         * The current value for the configuration option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-configurationoptionsetting.html#cfn-elasticbeanstalk-configurationtemplate-configurationoptionsetting-value
         */
        readonly value?: string;
    }
    /**
     * Use the `SourceConfiguration` property type to specify another AWS Elastic Beanstalk configuration template as the base to creating a new AWS::ElasticBeanstalk::ConfigurationTemplate resource in an AWS CloudFormation template.
     *
     * An AWS Elastic Beanstalk configuration template to base a new one on. You can use it to define a [AWS::ElasticBeanstalk::ConfigurationTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-beanstalk-configurationtemplate.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-sourceconfiguration.html
     */
    interface SourceConfigurationProperty {
        /**
         * The name of the application associated with the configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-sourceconfiguration.html#cfn-elasticbeanstalk-configurationtemplate-sourceconfiguration-applicationname
         */
        readonly applicationName: string;
        /**
         * The name of the configuration template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-sourceconfiguration.html#cfn-elasticbeanstalk-configurationtemplate-sourceconfiguration-templatename
         */
        readonly templateName: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html
 */
export interface CfnConfigurationTemplateProps {
    /**
     * The name of the Elastic Beanstalk application to associate with this configuration template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html#cfn-elasticbeanstalk-configurationtemplate-applicationname
     */
    readonly applicationName: string;
    /**
     * An optional description for this configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html#cfn-elasticbeanstalk-configurationtemplate-description
     */
    readonly description?: string;
    /**
     * The ID of an environment whose settings you want to use to create the configuration template.
     *
     * You must specify `EnvironmentId` if you don't specify `PlatformArn` , `SolutionStackName` , or `SourceConfiguration` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html#cfn-elasticbeanstalk-configurationtemplate-environmentid
     */
    readonly environmentId?: string;
    /**
     * Option values for the Elastic Beanstalk configuration, such as the instance type.
     *
     * If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the *AWS Elastic Beanstalk Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html#cfn-elasticbeanstalk-configurationtemplate-optionsettings
     */
    readonly optionSettings?: Array<CfnConfigurationTemplate.ConfigurationOptionSettingProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the custom platform.
     *
     * For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the *AWS Elastic Beanstalk Developer Guide* .
     *
     * > If you specify `PlatformArn` , then don't specify `SolutionStackName` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html#cfn-elasticbeanstalk-configurationtemplate-platformarn
     */
    readonly platformArn?: string;
    /**
     * The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses.
     *
     * For example, `64bit Amazon Linux 2013.09 running Tomcat 7 Java 7` . A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the *AWS Elastic Beanstalk Developer Guide* .
     *
     * You must specify `SolutionStackName` if you don't specify `PlatformArn` , `EnvironmentId` , or `SourceConfiguration` .
     *
     * Use the [`ListAvailableSolutionStacks`](https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html) API to obtain a list of available solution stacks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html#cfn-elasticbeanstalk-configurationtemplate-solutionstackname
     */
    readonly solutionStackName?: string;
    /**
     * An Elastic Beanstalk configuration template to base this one on.
     *
     * If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.
     *
     * Values specified in `OptionSettings` override any values obtained from the `SourceConfiguration` .
     *
     * You must specify `SourceConfiguration` if you don't specify `PlatformArn` , `EnvironmentId` , or `SolutionStackName` .
     *
     * Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html#cfn-elasticbeanstalk-configurationtemplate-sourceconfiguration
     */
    readonly sourceConfiguration?: cdk.IResolvable | CfnConfigurationTemplate.SourceConfigurationProperty;
}
/**
 * Specify an AWS Elastic Beanstalk environment by using the AWS::ElasticBeanstalk::Environment resource in an AWS CloudFormation template.
 *
 * The AWS::ElasticBeanstalk::Environment resource is an AWS Elastic Beanstalk resource type that specifies an Elastic Beanstalk environment.
 *
 * @cloudformationResource AWS::ElasticBeanstalk::Environment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html
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
     * For load-balanced, autoscaling environments, the URL to the load balancer. For single-instance environments, the IP address of the instance.
     *
     * Example load balancer URL:
     *
     * Example instance IP address:
     *
     * `192.0.2.0`
     *
     * @cloudformationAttribute EndpointURL
     */
    readonly attrEndpointUrl: string;
    /**
     * The name of the application that is associated with this environment.
     */
    applicationName: string;
    /**
     * If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL.
     */
    cnamePrefix?: string;
    /**
     * Your description for this environment.
     */
    description?: string;
    /**
     * A unique name for the environment.
     */
    environmentName?: string;
    /**
     * > The operations role feature of AWS Elastic Beanstalk is in beta release and is subject to change.
     */
    operationsRole?: string;
    /**
     * Key-value pairs defining configuration options for this environment, such as the instance type.
     */
    optionSettings?: Array<cdk.IResolvable | CfnEnvironment.OptionSettingProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the custom platform to use with the environment.
     */
    platformArn?: string;
    /**
     * The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.
     */
    solutionStackName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies the tags applied to resources in the environment.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name of the Elastic Beanstalk configuration template to use with the environment.
     */
    templateName?: string;
    /**
     * Specifies the tier to use in creating this environment.
     */
    tier?: cdk.IResolvable | CfnEnvironment.TierProperty;
    /**
     * The name of the application version to deploy.
     */
    versionLabel?: string;
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
     * Use the `Tier` property type to specify the environment tier for an AWS Elastic Beanstalk environment when defining an AWS::ElasticBeanstalk::Environment resource in an AWS CloudFormation template.
     *
     * Describes the environment tier for an [AWS::ElasticBeanstalk::Environment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-environment.html) resource. For more information, see [Environment Tiers](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-tiers.html) in the *AWS Elastic Beanstalk Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-tier.html
     */
    interface TierProperty {
        /**
         * The name of this environment tier.
         *
         * Valid values:
         *
         * - For *Web server tier* – `WebServer`
         * - For *Worker tier* – `Worker`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-tier.html#cfn-elasticbeanstalk-environment-tier-name
         */
        readonly name?: string;
        /**
         * The type of this environment tier.
         *
         * Valid values:
         *
         * - For *Web server tier* – `Standard`
         * - For *Worker tier* – `SQS/HTTP`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-tier.html#cfn-elasticbeanstalk-environment-tier-type
         */
        readonly type?: string;
        /**
         * The version of this environment tier.
         *
         * When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.
         *
         * > This member is deprecated. Any specific version that you set may become out of date. We recommend leaving it unspecified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-tier.html#cfn-elasticbeanstalk-environment-tier-version
         */
        readonly version?: string;
    }
    /**
     * Use the `OptionSetting` property type to specify an option for an AWS Elastic Beanstalk environment when defining an AWS::ElasticBeanstalk::Environment resource in an AWS CloudFormation template.
     *
     * The `OptionSetting` property type specifies an option for an AWS Elastic Beanstalk environment.
     *
     * The `OptionSettings` property of the [AWS::ElasticBeanstalk::Environment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-environment.html) resource contains a list of `OptionSetting` property types.
     *
     * For a list of possible namespaces and option values, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the *AWS Elastic Beanstalk Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-optionsetting.html
     */
    interface OptionSettingProperty {
        /**
         * A unique namespace that identifies the option's associated AWS resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-optionsetting.html#cfn-elasticbeanstalk-environment-optionsetting-namespace
         */
        readonly namespace: string;
        /**
         * The name of the configuration option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-optionsetting.html#cfn-elasticbeanstalk-environment-optionsetting-optionname
         */
        readonly optionName: string;
        /**
         * A unique resource name for the option setting.
         *
         * Use it for a time–based scaling configuration option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-optionsetting.html#cfn-elasticbeanstalk-environment-optionsetting-resourcename
         */
        readonly resourceName?: string;
        /**
         * The current value for the configuration option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-environment-optionsetting.html#cfn-elasticbeanstalk-environment-optionsetting-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnEnvironment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html
 */
export interface CfnEnvironmentProps {
    /**
     * The name of the application that is associated with this environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-applicationname
     */
    readonly applicationName: string;
    /**
     * If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL.
     *
     * If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-cnameprefix
     */
    readonly cnamePrefix?: string;
    /**
     * Your description for this environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-description
     */
    readonly description?: string;
    /**
     * A unique name for the environment.
     *
     * Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique within a region in your account.
     *
     * If you don't specify the `CNAMEPrefix` parameter, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.
     *
     * If you don't specify an environment name, AWS CloudFormation generates a unique physical ID and uses that ID for the environment name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-environmentname
     */
    readonly environmentName?: string;
    /**
     * > The operations role feature of AWS Elastic Beanstalk is in beta release and is subject to change.
     *
     * The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the `iam:PassRole` permission for the role.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-operationsrole
     */
    readonly operationsRole?: string;
    /**
     * Key-value pairs defining configuration options for this environment, such as the instance type.
     *
     * These options override the values that are defined in the solution stack or the [configuration template](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-beanstalk-configurationtemplate.html) . If you remove any options during a stack update, the removed options retain their current values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-optionsettings
     */
    readonly optionSettings?: Array<cdk.IResolvable | CfnEnvironment.OptionSettingProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the custom platform to use with the environment.
     *
     * For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the *AWS Elastic Beanstalk Developer Guide* .
     *
     * > If you specify `PlatformArn` , don't specify `SolutionStackName` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-platformarn
     */
    readonly platformArn?: string;
    /**
     * The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.
     *
     * If specified, Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. For a list of current solution stacks, see [Elastic Beanstalk Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html) in the *AWS Elastic Beanstalk Platforms* guide.
     *
     * > If you specify `SolutionStackName` , don't specify `PlatformArn` or `TemplateName` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-solutionstackname
     */
    readonly solutionStackName?: string;
    /**
     * Specifies the tags applied to resources in the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the Elastic Beanstalk configuration template to use with the environment.
     *
     * > If you specify `TemplateName` , then don't specify `SolutionStackName` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-templatename
     */
    readonly templateName?: string;
    /**
     * Specifies the tier to use in creating this environment.
     *
     * The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-tier
     */
    readonly tier?: cdk.IResolvable | CfnEnvironment.TierProperty;
    /**
     * The name of the application version to deploy.
     *
     * Default: If not specified, Elastic Beanstalk attempts to deploy the sample application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-environment.html#cfn-elasticbeanstalk-environment-versionlabel
     */
    readonly versionLabel?: string;
}
