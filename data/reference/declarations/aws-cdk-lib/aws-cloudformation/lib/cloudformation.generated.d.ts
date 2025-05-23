import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::CloudFormation::CustomResource` resource creates a custom resource.
 *
 * Custom resources provide a way for you to write custom provisioning logic into your CloudFormation templates and have CloudFormation run it anytime you create, update (if you changed the custom resource), or delete a stack.
 *
 * For more information, see [Create custom provisioning logic with custom resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html) in the *AWS CloudFormation User Guide* .
 *
 * > If you use AWS PrivateLink , custom resources in the VPC must have access to CloudFormation -specific Amazon S3 buckets. Custom resources must send responses to a presigned Amazon S3 URL. If they can't send responses to Amazon S3 , CloudFormation won't receive a response and the stack operation fails. For more information, see [Access CloudFormation using an interface endpoint ( AWS PrivateLink )](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/vpc-interface-endpoints.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::CustomResource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html
 */
export declare class CfnCustomResource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCustomResource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCustomResource;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The maximum time, in seconds, that can elapse before a custom resource operation times out.
     */
    serviceTimeout?: number;
    /**
     * The service token, such as an Amazon SNS topic ARN or Lambda function ARN.
     */
    serviceToken: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCustomResourceProps);
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
 * Properties for defining a `CfnCustomResource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html
 */
export interface CfnCustomResourceProps {
    /**
     * The maximum time, in seconds, that can elapse before a custom resource operation times out.
     *
     * The value must be an integer from 1 to 3600. The default value is 3600 seconds (1 hour).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html#cfn-cloudformation-customresource-servicetimeout
     */
    readonly serviceTimeout?: number;
    /**
     * The service token, such as an Amazon SNS topic ARN or Lambda function ARN.
     *
     * The service token must be from the same Region as the stack.
     *
     * Updates aren't supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html#cfn-cloudformation-customresource-servicetoken
     */
    readonly serviceToken: string;
}
/**
 * The `AWS::CloudFormation::HookDefaultVersion` resource specifies the default version of a Hook.
 *
 * The default version of the Hook is used in CloudFormation operations for this AWS account and AWS Region .
 *
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the *AWS CloudFormation User Guide* .
 *
 * This resource type is not compatible with Guard and Lambda Hooks.
 *
 * @cloudformationResource AWS::CloudFormation::HookDefaultVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html
 */
export declare class CfnHookDefaultVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnHookDefaultVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHookDefaultVersion;
    /**
     * The Amazon Resource Number (ARN) of the activated Hook, in this account and Region.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the Hook.
     */
    typeName?: string;
    /**
     * The version ID of the type configuration.
     */
    typeVersionArn?: string;
    /**
     * The version ID of the type specified.
     */
    versionId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnHookDefaultVersionProps);
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
 * Properties for defining a `CfnHookDefaultVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html
 */
export interface CfnHookDefaultVersionProps {
    /**
     * The name of the Hook.
     *
     * You must specify either `TypeVersionArn` , or `TypeName` and `VersionId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html#cfn-cloudformation-hookdefaultversion-typename
     */
    readonly typeName?: string;
    /**
     * The version ID of the type configuration.
     *
     * You must specify either `TypeVersionArn` , or `TypeName` and `VersionId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html#cfn-cloudformation-hookdefaultversion-typeversionarn
     */
    readonly typeVersionArn?: string;
    /**
     * The version ID of the type specified.
     *
     * You must specify either `TypeVersionArn` , or `TypeName` and `VersionId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html#cfn-cloudformation-hookdefaultversion-versionid
     */
    readonly versionId?: string;
}
/**
 * The `AWS::CloudFormation::HookTypeConfig` resource specifies the configuration of an activated Hook.
 *
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::HookTypeConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html
 */
export declare class CfnHookTypeConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnHookTypeConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHookTypeConfig;
    /**
     * The Amazon Resource Number (ARN) of the activated Hook type configuration, in this account and Region.
     *
     * @cloudformationAttribute ConfigurationArn
     */
    readonly attrConfigurationArn: string;
    /**
     * Specifies the activated Hook type configuration, in this AWS account and AWS Region .
     */
    configuration: string;
    /**
     * An alias by which to refer to this configuration data.
     */
    configurationAlias?: string;
    /**
     * The Amazon Resource Number (ARN) for the Hook to set `Configuration` for.
     */
    typeArn?: string;
    /**
     * The unique name for your Hook.
     */
    typeName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnHookTypeConfigProps);
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
 * Properties for defining a `CfnHookTypeConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html
 */
export interface CfnHookTypeConfigProps {
    /**
     * Specifies the activated Hook type configuration, in this AWS account and AWS Region .
     *
     * You must specify either `TypeName` and `Configuration` or `TypeArn` and `Configuration` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html#cfn-cloudformation-hooktypeconfig-configuration
     */
    readonly configuration: string;
    /**
     * An alias by which to refer to this configuration data.
     *
     * Defaults to `default` alias. Hook types currently support default configuration alias.
     *
     * @default - "default"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html#cfn-cloudformation-hooktypeconfig-configurationalias
     */
    readonly configurationAlias?: string;
    /**
     * The Amazon Resource Number (ARN) for the Hook to set `Configuration` for.
     *
     * You must specify either `TypeName` and `Configuration` or `TypeArn` and `Configuration` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html#cfn-cloudformation-hooktypeconfig-typearn
     */
    readonly typeArn?: string;
    /**
     * The unique name for your Hook.
     *
     * Specifies a three-part namespace for your Hook, with a recommended pattern of `Organization::Service::Hook` .
     *
     * You must specify either `TypeName` and `Configuration` or `TypeArn` and `Configuration` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html#cfn-cloudformation-hooktypeconfig-typename
     */
    readonly typeName?: string;
}
/**
 * The `AWS::CloudFormation::HookVersion` resource publishes new or first version of a Hook to the CloudFormation registry.
 *
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the *AWS CloudFormation User Guide* .
 *
 * This resource type is not compatible with Guard and Lambda Hooks.
 *
 * @cloudformationResource AWS::CloudFormation::HookVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html
 */
export declare class CfnHookVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnHookVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHookVersion;
    /**
     * The Amazon Resource Name (ARN) of the Hook.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Whether the specified Hook version is set as the default version.
     *
     * @cloudformationAttribute IsDefaultVersion
     */
    readonly attrIsDefaultVersion: cdk.IResolvable;
    /**
     * The Amazon Resource Number (ARN) assigned to this version of the Hook.
     *
     * @cloudformationAttribute TypeArn
     */
    readonly attrTypeArn: string;
    /**
     * The ID of this version of the Hook.
     *
     * @cloudformationAttribute VersionId
     */
    readonly attrVersionId: string;
    /**
     * The scope at which the Hook is visible and usable in CloudFormation operations.
     *
     * Valid values include:
     *
     * - `PRIVATE` : The extension (Hook) is only visible and usable within the account in which it's registered. CloudFormation marks any resources you register as `PRIVATE` .
     * - `PUBLIC` : The extension (Hook) is publicly visible and usable within any AWS account.
     *
     * @cloudformationAttribute Visibility
     */
    readonly attrVisibility: string;
    /**
     * The Amazon Resource Name (ARN) of the task execution role that grants the Hook permission.
     */
    executionRoleArn?: string;
    /**
     * Contains logging configuration information for an extension.
     */
    loggingConfig?: cdk.IResolvable | CfnHookVersion.LoggingConfigProperty;
    /**
     * A URL to the Amazon S3 bucket containing the Hook project package that contains the necessary files for the Hook you want to register.
     */
    schemaHandlerPackage: string;
    /**
     * The unique name for your hook.
     */
    typeName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnHookVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnHookVersion {
    /**
     * The `LoggingConfig` property type specifies logging configuration information for an extension.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-hookversion-loggingconfig.html
     */
    interface LoggingConfigProperty {
        /**
         * The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-hookversion-loggingconfig.html#cfn-cloudformation-hookversion-loggingconfig-loggroupname
         */
        readonly logGroupName?: string;
        /**
         * The Amazon Resource Name (ARN) of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-hookversion-loggingconfig.html#cfn-cloudformation-hookversion-loggingconfig-logrolearn
         */
        readonly logRoleArn?: string;
    }
}
/**
 * Properties for defining a `CfnHookVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html
 */
export interface CfnHookVersionProps {
    /**
     * The Amazon Resource Name (ARN) of the task execution role that grants the Hook permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-executionrolearn
     */
    readonly executionRoleArn?: string;
    /**
     * Contains logging configuration information for an extension.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-loggingconfig
     */
    readonly loggingConfig?: cdk.IResolvable | CfnHookVersion.LoggingConfigProperty;
    /**
     * A URL to the Amazon S3 bucket containing the Hook project package that contains the necessary files for the Hook you want to register.
     *
     * For information on generating a schema handler package, see [Modeling custom CloudFormation Hooks](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-model.html) in the *AWS CloudFormation Hooks User Guide* .
     *
     * > To register the Hook, you must have `s3:GetObject` permissions to access the S3 objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-schemahandlerpackage
     */
    readonly schemaHandlerPackage: string;
    /**
     * The unique name for your hook.
     *
     * Specifies a three-part namespace for your hook, with a recommended pattern of `Organization::Service::Hook` .
     *
     * > The following organization namespaces are reserved and can't be used in your hook type names:
     * >
     * > - `Alexa`
     * > - `AMZN`
     * > - `Amazon`
     * > - `ASK`
     * > - `AWS`
     * > - `Custom`
     * > - `Dev`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-typename
     */
    readonly typeName: string;
}
/**
 * The `AWS::CloudFormation::Macro` resource is a CloudFormation resource type that creates a CloudFormation macro to perform custom processing on CloudFormation templates.
 *
 * For more information, see [Perform custom processing on CloudFormation templates with template macros](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::Macro
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html
 */
export declare class CfnMacro extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMacro from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMacro;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description of the macro.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the underlying Lambda function that you want CloudFormation to invoke when the macro is run.
     */
    functionName: string;
    /**
     * The CloudWatch Logs group to which CloudFormation sends error logging information when invoking the macro's underlying Lambda function.
     */
    logGroupName?: string;
    /**
     * The ARN of the role CloudFormation should assume when sending log entries to CloudWatch Logs .
     */
    logRoleArn?: string;
    /**
     * The name of the macro.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMacroProps);
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
 * Properties for defining a `CfnMacro`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html
 */
export interface CfnMacroProps {
    /**
     * A description of the macro.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the underlying Lambda function that you want CloudFormation to invoke when the macro is run.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-functionname
     */
    readonly functionName: string;
    /**
     * The CloudWatch Logs group to which CloudFormation sends error logging information when invoking the macro's underlying Lambda function.
     *
     * This will be an existing CloudWatch Logs LogGroup. Neither CloudFormation or Lambda will create the group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-loggroupname
     */
    readonly logGroupName?: string;
    /**
     * The ARN of the role CloudFormation should assume when sending log entries to CloudWatch Logs .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-logrolearn
     */
    readonly logRoleArn?: string;
    /**
     * The name of the macro.
     *
     * The name of the macro must be unique across all macros in the account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-name
     */
    readonly name: string;
}
/**
 * Specifies the default version of a module.
 *
 * The default version of the module will be used in CloudFormation operations for this account and Region.
 *
 * For more information, see [Create reusable resource configurations that can be included across templates with CloudFormation modules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html) in the *AWS CloudFormation User Guide* .
 *
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::ModuleDefaultVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html
 */
export declare class CfnModuleDefaultVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModuleDefaultVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModuleDefaultVersion;
    /**
     * The Amazon Resource Name (ARN) of the module version to set as the default version.
     */
    arn?: string;
    /**
     * The name of the module.
     */
    moduleName?: string;
    /**
     * The ID for the specific version of the module.
     */
    versionId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnModuleDefaultVersionProps);
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
 * Properties for defining a `CfnModuleDefaultVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html
 */
export interface CfnModuleDefaultVersionProps {
    /**
     * The Amazon Resource Name (ARN) of the module version to set as the default version.
     *
     * Conditional: You must specify either `Arn` , or `ModuleName` and `VersionId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-arn
     */
    readonly arn?: string;
    /**
     * The name of the module.
     *
     * Conditional: You must specify either `Arn` , or `ModuleName` and `VersionId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-modulename
     */
    readonly moduleName?: string;
    /**
     * The ID for the specific version of the module.
     *
     * Conditional: You must specify either `Arn` , or `ModuleName` and `VersionId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-versionid
     */
    readonly versionId?: string;
}
/**
 * The `AWS::CloudFormation::ModuleVersion` resource registers the specified version of the module with the CloudFormation registry.
 *
 * Registering a module makes it available for use in CloudFormation templates in your AWS account and Region.
 *
 * For more information, see [Create reusable resource configurations that can be included across templates with CloudFormation modules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html) in the *CloudFormation User Guide* .
 *
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::ModuleVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html
 */
export declare class CfnModuleVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModuleVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModuleVersion;
    /**
     * The Amazon Resource Name (ARN) of the module.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The description of the module.
     *
     * @cloudformationAttribute Description
     */
    readonly attrDescription: string;
    /**
     * The URL of a page providing detailed documentation for this module.
     *
     * @cloudformationAttribute DocumentationUrl
     */
    readonly attrDocumentationUrl: string;
    /**
     * Whether the specified module version is set as the default version.
     *
     * This applies only to private extensions you have registered in your account, and extensions published by AWS . For public third-party extensions, whether they are activated in your account, CloudFormation returns `null` .
     *
     * @cloudformationAttribute IsDefaultVersion
     */
    readonly attrIsDefaultVersion: cdk.IResolvable;
    /**
     * The schema that defines the module.
     *
     * @cloudformationAttribute Schema
     */
    readonly attrSchema: string;
    /**
     * When the specified private module version was registered or activated in your account.
     *
     * @cloudformationAttribute TimeCreated
     */
    readonly attrTimeCreated: string;
    /**
     * The ID of this version of the module.
     *
     * @cloudformationAttribute VersionId
     */
    readonly attrVersionId: string;
    /**
     * The scope at which the module is visible and usable in CloudFormation operations.
     *
     * Valid values include:
     *
     * - `PRIVATE` : The extension (module) is only visible and usable within the account in which it is registered. CloudFormation marks any extensions you register as `PRIVATE` .
     * - `PUBLIC` : The extension (module) is publicly visible and usable within any AWS account.
     *
     * @cloudformationAttribute Visibility
     */
    readonly attrVisibility: string;
    /**
     * The name of the module being registered.
     */
    moduleName: string;
    /**
     * A URL to the S3 bucket containing the package that contains the template fragment and schema files for the module version to register.
     */
    modulePackage: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnModuleVersionProps);
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
 * Properties for defining a `CfnModuleVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html
 */
export interface CfnModuleVersionProps {
    /**
     * The name of the module being registered.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html#cfn-cloudformation-moduleversion-modulename
     */
    readonly moduleName: string;
    /**
     * A URL to the S3 bucket containing the package that contains the template fragment and schema files for the module version to register.
     *
     * For more information, see [Module structure and requirements](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/modules-structure.html) in the *AWS CloudFormation Command Line Interface (CLI) User Guide* .
     *
     * > To register the module version, you must have `s3:GetObject` permissions to access the S3 objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html#cfn-cloudformation-moduleversion-modulepackage
     */
    readonly modulePackage: string;
}
/**
 * The `AWS::CloudFormation::PublicTypeVersion` resource tests and publishes a registered extension as a public, third-party extension.
 *
 * CloudFormation first tests the extension to make sure it meets all necessary requirements for being published in the CloudFormation registry. If it does, CloudFormation then publishes it to the registry as a public third-party extension in this Region. Public extensions are available for use by all CloudFormation users.
 *
 * - For resource types, testing includes passing all contracts tests defined for the type.
 * - For modules, testing includes determining if the module's model meets all necessary requirements.
 *
 * For more information, see [Testing your public extension prior to publishing](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing) in the *AWS CloudFormation Command Line Interface (CLI) User Guide* .
 *
 * If you don't specify a version, CloudFormation uses the default version of the extension in your account and Region for testing.
 *
 * To perform testing, CloudFormation assumes the execution role specified when the type was registered.
 *
 * An extension must have a test status of `PASSED` before it can be published. For more information, see [Publishing extensions to make them available for public use](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html) in the *AWS CloudFormation Command Line Interface (CLI) User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::PublicTypeVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html
 */
export declare class CfnPublicTypeVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPublicTypeVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPublicTypeVersion;
    /**
     * The Amazon Resource Number (ARN) assigned to the public extension upon publication.
     *
     * @cloudformationAttribute PublicTypeArn
     */
    readonly attrPublicTypeArn: string;
    /**
     * The publisher ID of the extension publisher.
     *
     * This applies only to public third-party extensions. For private registered extensions, and extensions provided by AWS , CloudFormation returns `null` .
     *
     * @cloudformationAttribute PublisherId
     */
    readonly attrPublisherId: string;
    /**
     * The Amazon Resource Number (ARN) assigned to this version of the extension.
     *
     * @cloudformationAttribute TypeVersionArn
     */
    readonly attrTypeVersionArn: string;
    /**
     * The Amazon Resource Number (ARN) of the extension.
     */
    arn?: string;
    /**
     * The S3 bucket to which CloudFormation delivers the contract test execution logs.
     */
    logDeliveryBucket?: string;
    /**
     * The version number to assign to this version of the extension.
     */
    publicVersionNumber?: string;
    /**
     * The type of the extension to test.
     */
    type?: string;
    /**
     * The name of the extension to test.
     */
    typeName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnPublicTypeVersionProps);
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
 * Properties for defining a `CfnPublicTypeVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html
 */
export interface CfnPublicTypeVersionProps {
    /**
     * The Amazon Resource Number (ARN) of the extension.
     *
     * Conditional: You must specify `Arn` , or `TypeName` and `Type` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-arn
     */
    readonly arn?: string;
    /**
     * The S3 bucket to which CloudFormation delivers the contract test execution logs.
     *
     * CloudFormation delivers the logs by the time contract testing has completed and the extension has been assigned a test type status of `PASSED` or `FAILED` .
     *
     * The user initiating the stack operation must be able to access items in the specified S3 bucket. Specifically, the user needs the following permissions:
     *
     * - s3:GetObject
     * - s3:PutObject
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-logdeliverybucket
     */
    readonly logDeliveryBucket?: string;
    /**
     * The version number to assign to this version of the extension.
     *
     * Use the following format, and adhere to semantic versioning when assigning a version number to your extension:
     *
     * `MAJOR.MINOR.PATCH`
     *
     * For more information, see [Semantic Versioning 2.0.0](https://docs.aws.amazon.com/https://semver.org/) .
     *
     * If you don't specify a version number, CloudFormation increments the version number by one minor version release.
     *
     * You cannot specify a version number the first time you publish a type. CloudFormation automatically sets the first version number to be `1.0.0` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-publicversionnumber
     */
    readonly publicVersionNumber?: string;
    /**
     * The type of the extension to test.
     *
     * Conditional: You must specify `Arn` , or `TypeName` and `Type` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-type
     */
    readonly type?: string;
    /**
     * The name of the extension to test.
     *
     * Conditional: You must specify `Arn` , or `TypeName` and `Type` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html#cfn-cloudformation-publictypeversion-typename
     */
    readonly typeName?: string;
}
/**
 * The `AWS::CloudFormation::Publisher` resource registers your account as a publisher of public extensions in the CloudFormation registry.
 *
 * Public extensions are available for use by all CloudFormation users.
 *
 * For information on requirements for registering as a public extension publisher, see [Publishing extensions to make them available for public use](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.htm) in the *AWS CloudFormation Command Line Interface (CLI) User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::Publisher
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html
 */
export declare class CfnPublisher extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPublisher from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPublisher;
    /**
     * The type of account used as the identity provider when registering this publisher with CloudFormation.
     *
     * @cloudformationAttribute IdentityProvider
     */
    readonly attrIdentityProvider: string;
    /**
     * The ID of the extension publisher.
     *
     * @cloudformationAttribute PublisherId
     */
    readonly attrPublisherId: string;
    /**
     * The URL to the publisher's profile with the identity provider.
     *
     * @cloudformationAttribute PublisherProfile
     */
    readonly attrPublisherProfile: string;
    /**
     * Whether the publisher is verified. Currently, all registered publishers are verified.
     *
     * @cloudformationAttribute PublisherStatus
     */
    readonly attrPublisherStatus: string;
    /**
     * Whether you accept the [Terms and Conditions](https://docs.aws.amazon.com/https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf) for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry.
     */
    acceptTermsAndConditions: boolean | cdk.IResolvable;
    /**
     * If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
     */
    connectionArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPublisherProps);
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
 * Properties for defining a `CfnPublisher`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html
 */
export interface CfnPublisherProps {
    /**
     * Whether you accept the [Terms and Conditions](https://docs.aws.amazon.com/https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf) for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry.
     *
     * The default is `false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html#cfn-cloudformation-publisher-accepttermsandconditions
     */
    readonly acceptTermsAndConditions: boolean | cdk.IResolvable;
    /**
     * If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
     *
     * For more information, see [Prerequisite: Registering your account to publish CloudFormation extensions](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs) in the *AWS CloudFormation Command Line Interface (CLI) User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html#cfn-cloudformation-publisher-connectionarn
     */
    readonly connectionArn?: string;
}
/**
 * The `AWS::CloudFormation::ResourceDefaultVersion` resource specifies the default version of a resource.
 *
 * The default version of a resource will be used in CloudFormation operations.
 *
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::ResourceDefaultVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html
 */
export declare class CfnResourceDefaultVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceDefaultVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceDefaultVersion;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the resource.
     */
    typeName?: string;
    /**
     * The Amazon Resource Name (ARN) of the resource version.
     */
    typeVersionArn?: string;
    /**
     * The ID of a specific version of the resource.
     */
    versionId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnResourceDefaultVersionProps);
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
 * Properties for defining a `CfnResourceDefaultVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html
 */
export interface CfnResourceDefaultVersionProps {
    /**
     * The name of the resource.
     *
     * Conditional: You must specify either `TypeVersionArn` , or `TypeName` and `VersionId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typename
     */
    readonly typeName?: string;
    /**
     * The Amazon Resource Name (ARN) of the resource version.
     *
     * Conditional: You must specify either `TypeVersionArn` , or `TypeName` and `VersionId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typeversionarn
     */
    readonly typeVersionArn?: string;
    /**
     * The ID of a specific version of the resource.
     *
     * The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the resource version when it's registered.
     *
     * Conditional: You must specify either `TypeVersionArn` , or `TypeName` and `VersionId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-versionid
     */
    readonly versionId?: string;
}
/**
 * The `AWS::CloudFormation::ResourceVersion` resource registers a resource version with the CloudFormation registry.
 *
 * Registering a resource version makes it available for use in CloudFormation templates in your AWS account , and includes:
 *
 * - Validating the resource schema.
 * - Determining which handlers, if any, have been specified for the resource.
 * - Making the resource available for use in your account.
 *
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the *AWS CloudFormation User Guide* .
 *
 * You can have a maximum of 50 resource versions registered at a time. This maximum is per account and per Region.
 *
 * @cloudformationResource AWS::CloudFormation::ResourceVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html
 */
export declare class CfnResourceVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourceVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourceVersion;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Whether the specified resource version is set as the default version.
     *
     * This applies only to private extensions you have registered in your account, and extensions published by AWS . For public third-party extensions, whether they are activated in your account, CloudFormation returns `null` .
     *
     * @cloudformationAttribute IsDefaultVersion
     */
    readonly attrIsDefaultVersion: cdk.IResolvable;
    /**
     * For resource type extensions, the provisioning behavior of the resource type. CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.
     *
     * Valid values include:
     *
     * - `FULLY_MUTABLE` : The resource type includes an update handler to process updates to the type during stack update operations.
     * - `IMMUTABLE` : The resource type doesn't include an update handler, so the type can't be updated and must instead be replaced during stack update operations.
     * - `NON_PROVISIONABLE` : The resource type doesn't include all the following handlers, and therefore can't actually be provisioned.
     *
     * - create
     * - read
     * - delete
     *
     * @cloudformationAttribute ProvisioningType
     */
    readonly attrProvisioningType: string;
    /**
     * The Amazon Resource Name (ARN) for the extension.
     *
     * @cloudformationAttribute TypeArn
     */
    readonly attrTypeArn: string;
    /**
     * The ID of a specific version of the resource. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the resource version when it is registered.
     *
     * @cloudformationAttribute VersionId
     */
    readonly attrVersionId: string;
    /**
     * The scope at which the resource is visible and usable in CloudFormation operations.
     *
     * Valid values include:
     *
     * - `PRIVATE` : The extension (resource) is only visible and usable within the account in which it is registered. CloudFormation marks any extensions you register as `PRIVATE` .
     * - `PUBLIC` : The extension (resource) is publicly visible and usable within any AWS account.
     *
     * @cloudformationAttribute Visibility
     */
    readonly attrVisibility: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the resource.
     */
    executionRoleArn?: string;
    /**
     * Logging configuration information for a resource.
     */
    loggingConfig?: cdk.IResolvable | CfnResourceVersion.LoggingConfigProperty;
    /**
     * A URL to the S3 bucket containing the resource project package that contains the necessary files for the resource you want to register.
     */
    schemaHandlerPackage: string;
    /**
     * The name of the resource being registered.
     */
    typeName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnResourceVersion {
    /**
     * Logging configuration information for a resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-resourceversion-loggingconfig.html
     */
    interface LoggingConfigProperty {
        /**
         * The Amazon CloudWatch logs group to which CloudFormation sends error logging information when invoking the type's handlers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-resourceversion-loggingconfig.html#cfn-cloudformation-resourceversion-loggingconfig-loggroupname
         */
        readonly logGroupName?: string;
        /**
         * The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-resourceversion-loggingconfig.html#cfn-cloudformation-resourceversion-loggingconfig-logrolearn
         */
        readonly logRoleArn?: string;
    }
}
/**
 * Properties for defining a `CfnResourceVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html
 */
export interface CfnResourceVersionProps {
    /**
     * The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the resource.
     *
     * If your resource calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-executionrolearn
     */
    readonly executionRoleArn?: string;
    /**
     * Logging configuration information for a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-loggingconfig
     */
    readonly loggingConfig?: cdk.IResolvable | CfnResourceVersion.LoggingConfigProperty;
    /**
     * A URL to the S3 bucket containing the resource project package that contains the necessary files for the resource you want to register.
     *
     * For information on generating a schema handler package, see [Modeling resource types to use with AWS CloudFormation](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-model.html) in the *AWS CloudFormation Command Line Interface (CLI) User Guide* .
     *
     * > To register the resource version, you must have `s3:GetObject` permissions to access the S3 objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-schemahandlerpackage
     */
    readonly schemaHandlerPackage: string;
    /**
     * The name of the resource being registered.
     *
     * We recommend that resource names adhere to the following pattern: *company_or_organization* :: *service* :: *type* .
     *
     * > The following organization namespaces are reserved and can't be used in your resource names:
     * >
     * > - `Alexa`
     * > - `AMZN`
     * > - `Amazon`
     * > - `AWS`
     * > - `Custom`
     * > - `Dev`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-typename
     */
    readonly typeName: string;
}
/**
 * The `AWS::CloudFormation::Stack` resource nests a stack as a resource in a top-level template.
 *
 * For more information, see [Embed stacks within other stacks using nested stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html) in the *AWS CloudFormation User Guide* .
 *
 * You can add output values from a nested stack within the containing template. You use the [GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html) function with the nested stack's logical name and the name of the output value in the nested stack in the format `Outputs. *NestedStackOutputName*` .
 *
 * We strongly recommend that updates to nested stacks are run from the parent stack.
 *
 * When you apply template changes to update a top-level stack, CloudFormation updates the top-level stack and initiates an update to its nested stacks. CloudFormation updates the resources of modified nested stacks, but doesn't update the resources of unmodified nested stacks.
 *
 * You must acknowledge IAM capabilities for nested stacks that contain IAM resources. Also, verify that you have cancel update stack permissions, which is required if an update rolls back. For more information about IAM and CloudFormation , see [Controlling access with AWS Identity and Access Management](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html) in the *AWS CloudFormation User Guide* .
 *
 * > A subset of `AWS::CloudFormation::Stack` resource type properties listed below are available to customers using CloudFormation , AWS CDK , and AWS Cloud Control API to configure.
 * >
 * > - `NotificationARNs`
 * > - `Parameters`
 * > - `Tags`
 * > - `TemplateURL`
 * > - `TimeoutInMinutes`
 * >
 * > These properties can be configured only when using AWS Cloud Control API . This is because the below properties are set by the parent stack, and thus cannot be configured using CloudFormation or AWS CDK but only AWS Cloud Control API .
 * >
 * > - `Capabilities`
 * > - `Description`
 * > - `DisableRollback`
 * > - `EnableTerminationProtection`
 * > - `RoleARN`
 * > - `StackName`
 * > - `StackPolicyBody`
 * > - `StackPolicyURL`
 * > - `StackStatusReason`
 * > - `TemplateBody`
 * >
 * > Customers that configure `AWS::CloudFormation::Stack` using CloudFormation and AWS CDK can do so for nesting a CloudFormation stack as a resource in their top-level template.
 * >
 * > These read-only properties can be accessed only when using AWS Cloud Control API .
 * >
 * > - `ChangeSetId`
 * > - `CreationTime`
 * > - `LastUpdateTime`
 * > - `Outputs`
 * > - `ParentId`
 * > - `RootId`
 * > - `StackId`
 * > - `StackStatus`
 *
 * @cloudformationResource AWS::CloudFormation::Stack
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html
 */
export declare class CfnStack extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStack from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStack;
    /**
     * Returns the unique ID of the change set.
     *
     * @cloudformationAttribute ChangeSetId
     */
    readonly attrChangeSetId: string;
    /**
     * Returns The time at which the stack was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * Returns the time the stack was last updated. This will only be returned if the stack has been updated at least once.
     *
     * @cloudformationAttribute LastUpdateTime
     */
    readonly attrLastUpdateTime: string;
    /**
     * Returns a list of output structures.
     *
     * @cloudformationAttribute Outputs
     */
    readonly attrOutputs: cdk.IResolvable;
    /**
     * For nested stacks--stacks created as resources for another stack--returns the stack ID of the direct parent of this stack. For the first level of nested stacks, the root stack is also the parent stack.
     *
     * @cloudformationAttribute ParentId
     */
    readonly attrParentId: string;
    /**
     * For nested stacks--stacks created as resources for another stack--returns the stack ID of the top-level stack to which the nested stack ultimately belongs.
     *
     * @cloudformationAttribute RootId
     */
    readonly attrRootId: string;
    /**
     * Returns the unique identifier of the stack.
     *
     * @cloudformationAttribute StackId
     */
    readonly attrStackId: string;
    /**
     * Returns a success or failure message associated with the stack status.
     *
     * @cloudformationAttribute StackStatus
     */
    readonly attrStackStatus: string;
    /**
     * The Amazon SNS topic ARNs to publish stack related events.
     */
    notificationArns?: Array<string>;
    /**
     * The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created.
     */
    parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs to associate with this stack.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The URL of a file containing the template body.
     */
    templateUrl?: string;
    /**
     * The length of time, in minutes, that CloudFormation waits for the nested stack to reach the `CREATE_COMPLETE` state.
     */
    timeoutInMinutes?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnStackProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStack {
    /**
     * The Output data type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stack-output.html
     */
    interface OutputProperty {
        /**
         * User defined description associated with the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stack-output.html#cfn-cloudformation-stack-output-description
         */
        readonly description?: string;
        /**
         * The name of the export associated with the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stack-output.html#cfn-cloudformation-stack-output-exportname
         */
        readonly exportName?: string;
        /**
         * The key associated with the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stack-output.html#cfn-cloudformation-stack-output-outputkey
         */
        readonly outputKey?: string;
        /**
         * The value associated with the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stack-output.html#cfn-cloudformation-stack-output-outputvalue
         */
        readonly outputValue?: string;
    }
}
/**
 * Properties for defining a `CfnStack`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html
 */
export interface CfnStackProps {
    /**
     * The Amazon SNS topic ARNs to publish stack related events.
     *
     * You can find your Amazon SNS topic ARNs using the Amazon SNS console or your Command Line Interface (CLI).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html#cfn-cloudformation-stack-notificationarns
     */
    readonly notificationArns?: Array<string>;
    /**
     * The set value pairs that represent the parameters passed to CloudFormation when this nested stack is created.
     *
     * Each parameter has a name corresponding to a parameter defined in the embedded template and a value representing the value that you want to set for the parameter.
     *
     * > If you use the `Ref` function to pass a parameter value to a nested stack, comma-delimited list parameters must be of type `String` . In other words, you can't pass values that are of type `CommaDelimitedList` to nested stacks.
     *
     * Conditional. Required if the nested stack requires input parameters.
     *
     * Whether an update causes interruptions depends on the resources that are being updated. An update never causes a nested stack to be replaced.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html#cfn-cloudformation-stack-parameters
     */
    readonly parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * Key-value pairs to associate with this stack.
     *
     * CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html#cfn-cloudformation-stack-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The URL of a file containing the template body.
     *
     * The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket. The location for an Amazon S3 bucket must start with `https://` .
     *
     * Whether an update causes interruptions depends on the resources that are being updated. An update never causes a nested stack to be replaced.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html#cfn-cloudformation-stack-templateurl
     */
    readonly templateUrl?: string;
    /**
     * The length of time, in minutes, that CloudFormation waits for the nested stack to reach the `CREATE_COMPLETE` state.
     *
     * The default is no timeout. When CloudFormation detects that the nested stack has reached the `CREATE_COMPLETE` state, it marks the nested stack resource as `CREATE_COMPLETE` in the parent stack and resumes creating the parent stack. If the timeout period expires before the nested stack reaches `CREATE_COMPLETE` , CloudFormation marks the nested stack as failed and rolls back both the nested stack and parent stack.
     *
     * Updates aren't supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html#cfn-cloudformation-stack-timeoutinminutes
     */
    readonly timeoutInMinutes?: number;
}
/**
 * The `AWS::CloudFormation::StackSet` resource enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template.
 *
 * In the stack set, you specify the template to use, in addition to any parameters and capabilities that the template requires.
 *
 * > Run deployments to nested StackSets from the parent stack, not directly through the StackSet API.
 *
 * @cloudformationResource AWS::CloudFormation::StackSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html
 */
export declare class CfnStackSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStackSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStackSet;
    /**
     * The ID of the stack that you're creating.
     *
     * @cloudformationAttribute StackSetId
     */
    readonly attrStackSetId: string;
    /**
     * The Amazon Resource Number (ARN) of the IAM role to use to create this stack set.
     */
    administrationRoleArn?: string;
    /**
     * [ `Service-managed` permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU).
     */
    autoDeployment?: CfnStackSet.AutoDeploymentProperty | cdk.IResolvable;
    /**
     * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
     */
    callAs?: string;
    /**
     * The capabilities that are allowed in the stack set.
     */
    capabilities?: Array<string>;
    /**
     * A description of the stack set.
     */
    description?: string;
    /**
     * The name of the IAM execution role to use to create the stack set.
     */
    executionRoleName?: string;
    /**
     * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
     */
    managedExecution?: any | cdk.IResolvable;
    /**
     * The user-specified preferences for how CloudFormation performs a stack set operation.
     */
    operationPreferences?: cdk.IResolvable | CfnStackSet.OperationPreferencesProperty;
    /**
     * The input parameters for the stack set template.
     */
    parameters?: Array<cdk.IResolvable | CfnStackSet.ParameterProperty> | cdk.IResolvable;
    /**
     * Describes how the IAM roles required for stack set operations are created.
     */
    permissionModel: string;
    /**
     * A group of stack instances with parameters in some specific accounts and Regions.
     */
    stackInstancesGroup?: Array<cdk.IResolvable | CfnStackSet.StackInstancesProperty> | cdk.IResolvable;
    /**
     * The name to associate with the stack set.
     */
    stackSetName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs to associate with this stack.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
     */
    templateBody?: string;
    /**
     * The URL of a file containing the template body.
     */
    templateUrl?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStackSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStackSet {
    /**
     * The Parameter data type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-parameter.html
     */
    interface ParameterProperty {
        /**
         * The key associated with the parameter.
         *
         * If you don't specify a key and value for a particular parameter, CloudFormation uses the default value that's specified in your template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-parameter.html#cfn-cloudformation-stackset-parameter-parameterkey
         */
        readonly parameterKey: string;
        /**
         * The input value associated with the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-parameter.html#cfn-cloudformation-stackset-parameter-parametervalue
         */
        readonly parameterValue: string;
    }
    /**
     * Stack instances in some specific accounts and Regions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html
     */
    interface StackInstancesProperty {
        /**
         * The AWS `OrganizationalUnitIds` or `Accounts` for which to create stack instances in the specified Regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html#cfn-cloudformation-stackset-stackinstances-deploymenttargets
         */
        readonly deploymentTargets: CfnStackSet.DeploymentTargetsProperty | cdk.IResolvable;
        /**
         * A list of stack set parameters whose values you want to override in the selected stack instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html#cfn-cloudformation-stackset-stackinstances-parameteroverrides
         */
        readonly parameterOverrides?: Array<cdk.IResolvable | CfnStackSet.ParameterProperty> | cdk.IResolvable;
        /**
         * The names of one or more Regions where you want to create stack instances using the specified AWS accounts .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html#cfn-cloudformation-stackset-stackinstances-regions
         */
        readonly regions: Array<string>;
    }
    /**
     * The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html
     */
    interface DeploymentTargetsProperty {
        /**
         * Limit deployment targets to individual accounts or include additional accounts with provided OUs.
         *
         * The following is a list of possible values for the `AccountFilterType` operation.
         *
         * - `INTERSECTION` : StackSet deploys to the accounts specified in the `Accounts` parameter.
         * - `DIFFERENCE` : StackSet deploys to the OU, excluding the accounts specified in the `Accounts` parameter.
         * - `UNION` StackSet deploys to the OU, and the accounts specified in the `Accounts` parameter. `UNION` is not supported for create operations when using StackSet as a resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html#cfn-cloudformation-stackset-deploymenttargets-accountfiltertype
         */
        readonly accountFilterType?: string;
        /**
         * The account IDs of the AWS accounts .
         *
         * If you have many account numbers, you can provide those accounts using the `AccountsUrl` property instead.
         *
         * *Pattern* : `^[0-9]{12}$`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html#cfn-cloudformation-stackset-deploymenttargets-accounts
         */
        readonly accounts?: Array<string>;
        /**
         * The Amazon S3 URL path to a file that contains a list of AWS account IDs.
         *
         * The file format must be either `.csv` or `.txt` , and the data can be comma-separated or new-line-separated. There is currently a 10MB limit for the data (approximately 800,000 accounts).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html#cfn-cloudformation-stackset-deploymenttargets-accountsurl
         */
        readonly accountsUrl?: string;
        /**
         * The organization root ID or organizational unit (OU) IDs.
         *
         * *Pattern* : `^(ou-[a-z0-9]{4,32}-[a-z0-9]{8,32}|r-[a-z0-9]{4,32})$`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html#cfn-cloudformation-stackset-deploymenttargets-organizationalunitids
         */
        readonly organizationalUnitIds?: Array<string>;
    }
    /**
     * The user-specified preferences for how CloudFormation performs a stack set operation.
     *
     * For more information on maximum concurrent accounts and failure tolerance, see [Stack set operation options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options) in the *AWS CloudFormation User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html
     */
    interface OperationPreferencesProperty {
        /**
         * Specifies how the concurrency level behaves during the operation execution.
         *
         * - `STRICT_FAILURE_TOLERANCE` : This option dynamically lowers the concurrency level to ensure the number of failed accounts never exceeds the value of `FailureToleranceCount` +1. The initial actual concurrency is set to the lower of either the value of the `MaxConcurrentCount` , or the value of `FailureToleranceCount` +1. The actual concurrency is then reduced proportionally by the number of failures. This is the default behavior.
         *
         * If failure tolerance or Maximum concurrent accounts are set to percentages, the behavior is similar.
         * - `SOFT_FAILURE_TOLERANCE` : This option decouples `FailureToleranceCount` from the actual concurrency. This allows stack set operations to run at the concurrency level set by the `MaxConcurrentCount` value, or `MaxConcurrentPercentage` , regardless of the number of failures.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-concurrencymode
         */
        readonly concurrencyMode?: string;
        /**
         * The number of accounts, per Region, for which this operation can fail before CloudFormation stops the operation in that Region.
         *
         * If the operation is stopped in a Region, CloudFormation doesn't attempt the operation in any subsequent Regions.
         *
         * Conditional: You must specify either `FailureToleranceCount` or `FailureTolerancePercentage` (but not both).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-failuretolerancecount
         */
        readonly failureToleranceCount?: number;
        /**
         * The percentage of accounts, per Region, for which this stack operation can fail before CloudFormation stops the operation in that Region.
         *
         * If the operation is stopped in a Region, CloudFormation doesn't attempt the operation in any subsequent Regions.
         *
         * When calculating the number of accounts based on the specified percentage, CloudFormation rounds *down* to the next whole number.
         *
         * Conditional: You must specify either `FailureToleranceCount` or `FailureTolerancePercentage` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-failuretolerancepercentage
         */
        readonly failureTolerancePercentage?: number;
        /**
         * The maximum number of accounts in which to perform this operation at one time.
         *
         * This is dependent on the value of `FailureToleranceCount` . `MaxConcurrentCount` is at most one more than the `FailureToleranceCount` .
         *
         * Note that this setting lets you specify the *maximum* for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
         *
         * Conditional: You must specify either `MaxConcurrentCount` or `MaxConcurrentPercentage` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-maxconcurrentcount
         */
        readonly maxConcurrentCount?: number;
        /**
         * The maximum percentage of accounts in which to perform this operation at one time.
         *
         * When calculating the number of accounts based on the specified percentage, CloudFormation rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, CloudFormation sets the number as one instead.
         *
         * Note that this setting lets you specify the *maximum* for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
         *
         * Conditional: You must specify either `MaxConcurrentCount` or `MaxConcurrentPercentage` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-maxconcurrentpercentage
         */
        readonly maxConcurrentPercentage?: number;
        /**
         * The concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-regionconcurrencytype
         */
        readonly regionConcurrencyType?: string;
        /**
         * The order of the Regions where you want to perform the stack operation.
         *
         * > `RegionOrder` isn't followed if `AutoDeployment` is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html#cfn-cloudformation-stackset-operationpreferences-regionorder
         */
        readonly regionOrder?: Array<string>;
    }
    /**
     * [ `Service-managed` permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organizational unit (OU).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-autodeployment.html
     */
    interface AutoDeploymentProperty {
        /**
         * If set to `true` , StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions.
         *
         * If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-autodeployment.html#cfn-cloudformation-stackset-autodeployment-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * If set to `true` , stack resources are retained when an account is removed from a target organization or OU.
         *
         * If set to `false` , stack resources are deleted. Specify only if `Enabled` is set to `True` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-autodeployment.html#cfn-cloudformation-stackset-autodeployment-retainstacksonaccountremoval
         */
        readonly retainStacksOnAccountRemoval?: boolean | cdk.IResolvable;
    }
    /**
     * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-managedexecution.html
     */
    interface ManagedExecutionProperty {
        /**
         * When `true` , StackSets performs non-conflicting operations concurrently and queues conflicting operations.
         *
         * After conflicting operations finish, StackSets starts queued operations in request order.
         *
         * > If there are already running or queued operations, StackSets queues all incoming operations even if they are non-conflicting.
         * >
         * > You can't modify your stack set's execution configuration while there are running or queued operations for that stack set.
         *
         * When `false` (default), StackSets performs one operation at a time in request order.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-managedexecution.html#cfn-cloudformation-stackset-managedexecution-active
         */
        readonly active?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnStackSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html
 */
export interface CfnStackSetProps {
    /**
     * The Amazon Resource Number (ARN) of the IAM role to use to create this stack set.
     *
     * Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.
     *
     * Use customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html) in the *AWS CloudFormation User Guide* .
     *
     * *Minimum* : `20`
     *
     * *Maximum* : `2048`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-administrationrolearn
     */
    readonly administrationRoleArn?: string;
    /**
     * [ `Service-managed` permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-autodeployment
     */
    readonly autoDeployment?: CfnStackSet.AutoDeploymentProperty | cdk.IResolvable;
    /**
     * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
     *
     * By default, `SELF` is specified. Use `SELF` for stack sets with self-managed permissions.
     *
     * - To create a stack set with service-managed permissions while signed in to the management account, specify `SELF` .
     * - To create a stack set with service-managed permissions while signed in to a delegated administrator account, specify `DELEGATED_ADMIN` .
     *
     * Your AWS account must be registered as a delegated admin in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *AWS CloudFormation User Guide* .
     *
     * Stack sets with service-managed permissions are created in the management account, including stack sets that are created by delegated administrators.
     *
     * *Valid Values* : `SELF` | `DELEGATED_ADMIN`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-callas
     */
    readonly callAs?: string;
    /**
     * The capabilities that are allowed in the stack set.
     *
     * Some stack set templates might include resources that can affect permissions in your AWS account —for example, by creating new IAM users. For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities) in the *AWS CloudFormation User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-capabilities
     */
    readonly capabilities?: Array<string>;
    /**
     * A description of the stack set.
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `1024`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-description
     */
    readonly description?: string;
    /**
     * The name of the IAM execution role to use to create the stack set.
     *
     * If you don't specify an execution role, CloudFormation uses the `AWSCloudFormationStackSetExecutionRole` role for the stack set operation.
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `64`
     *
     * *Pattern* : `[a-zA-Z_0-9+=,.@-]+`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-executionrolename
     */
    readonly executionRoleName?: string;
    /**
     * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
     *
     * When active, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order.
     *
     * > If there are already running or queued operations, StackSets queues all incoming operations even if they are non-conflicting.
     * >
     * > You can't modify your stack set's execution configuration while there are running or queued operations for that stack set.
     *
     * When inactive (default), StackSets performs one operation at a time in request order.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-managedexecution
     */
    readonly managedExecution?: any | cdk.IResolvable;
    /**
     * The user-specified preferences for how CloudFormation performs a stack set operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences
     */
    readonly operationPreferences?: cdk.IResolvable | CfnStackSet.OperationPreferencesProperty;
    /**
     * The input parameters for the stack set template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-parameters
     */
    readonly parameters?: Array<cdk.IResolvable | CfnStackSet.ParameterProperty> | cdk.IResolvable;
    /**
     * Describes how the IAM roles required for stack set operations are created.
     *
     * - With `SELF_MANAGED` permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html) in the *AWS CloudFormation User Guide* .
     * - With `SERVICE_MANAGED` permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by AWS Organizations . For more information, see [Activate trusted access for stack sets with AWS Organizations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html) in the *AWS CloudFormation User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-permissionmodel
     */
    readonly permissionModel: string;
    /**
     * A group of stack instances with parameters in some specific accounts and Regions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stackinstancesgroup
     */
    readonly stackInstancesGroup?: Array<cdk.IResolvable | CfnStackSet.StackInstancesProperty> | cdk.IResolvable;
    /**
     * The name to associate with the stack set.
     *
     * The name must be unique in the Region where you create your stack set.
     *
     * > The `StackSetName` property is required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stacksetname
     */
    readonly stackSetName: string;
    /**
     * Key-value pairs to associate with this stack.
     *
     * CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags.
     *
     * If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify an empty value, CloudFormation removes all associated tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
     *
     * You must include either `TemplateURL` or `TemplateBody` in a StackSet, but you can't use both. Dynamic references in the `TemplateBody` may not work correctly in all cases. It's recommended to pass templates containing dynamic references through `TemplateUrl` instead.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-templatebody
     */
    readonly templateBody?: string;
    /**
     * The URL of a file containing the template body.
     *
     * The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with `https://` .
     *
     * Conditional: You must specify only one of the following parameters: `TemplateBody` , `TemplateURL` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-templateurl
     */
    readonly templateUrl?: string;
}
/**
 * The `AWS::CloudFormation::TypeActivation` resource activates a public third-party extension, making it available for use in stack templates.
 *
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::TypeActivation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html
 */
export declare class CfnTypeActivation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTypeActivation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTypeActivation;
    /**
     * The Amazon Resource Name (ARN) of the activated extension, in this account and Region.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Whether to automatically update the extension in this account and Region when a new *minor* version is published by the extension publisher.
     */
    autoUpdate?: boolean | cdk.IResolvable;
    /**
     * The name of the IAM execution role to use to activate the extension.
     */
    executionRoleArn?: string;
    /**
     * Specifies logging configuration information for an extension.
     */
    loggingConfig?: cdk.IResolvable | CfnTypeActivation.LoggingConfigProperty;
    /**
     * The major version of this extension you want to activate, if multiple major versions are available.
     */
    majorVersion?: string;
    /**
     * The Amazon Resource Number (ARN) of the public extension.
     */
    publicTypeArn?: string;
    /**
     * The ID of the extension publisher.
     */
    publisherId?: string;
    /**
     * The extension type.
     */
    type?: string;
    /**
     * The name of the extension.
     */
    typeName?: string;
    /**
     * An alias to assign to the public extension, in this account and Region.
     */
    typeNameAlias?: string;
    /**
     * Manually updates a previously-activated type to a new major or minor version, if available.
     */
    versionBump?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnTypeActivationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTypeActivation {
    /**
     * Contains logging configuration information for an extension.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-typeactivation-loggingconfig.html
     */
    interface LoggingConfigProperty {
        /**
         * The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-typeactivation-loggingconfig.html#cfn-cloudformation-typeactivation-loggingconfig-loggroupname
         */
        readonly logGroupName?: string;
        /**
         * The Amazon Resource Name (ARN) of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-typeactivation-loggingconfig.html#cfn-cloudformation-typeactivation-loggingconfig-logrolearn
         */
        readonly logRoleArn?: string;
    }
}
/**
 * Properties for defining a `CfnTypeActivation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html
 */
export interface CfnTypeActivationProps {
    /**
     * Whether to automatically update the extension in this account and Region when a new *minor* version is published by the extension publisher.
     *
     * Major versions released by the publisher must be manually updated.
     *
     * The default is `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-autoupdate
     */
    readonly autoUpdate?: boolean | cdk.IResolvable;
    /**
     * The name of the IAM execution role to use to activate the extension.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-executionrolearn
     */
    readonly executionRoleArn?: string;
    /**
     * Specifies logging configuration information for an extension.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-loggingconfig
     */
    readonly loggingConfig?: cdk.IResolvable | CfnTypeActivation.LoggingConfigProperty;
    /**
     * The major version of this extension you want to activate, if multiple major versions are available.
     *
     * The default is the latest major version. CloudFormation uses the latest available *minor* version of the major version selected.
     *
     * You can specify `MajorVersion` or `VersionBump` , but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-majorversion
     */
    readonly majorVersion?: string;
    /**
     * The Amazon Resource Number (ARN) of the public extension.
     *
     * Conditional: You must specify `PublicTypeArn` , or `TypeName` , `Type` , and `PublisherId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-publictypearn
     */
    readonly publicTypeArn?: string;
    /**
     * The ID of the extension publisher.
     *
     * Conditional: You must specify `PublicTypeArn` , or `TypeName` , `Type` , and `PublisherId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-publisherid
     */
    readonly publisherId?: string;
    /**
     * The extension type.
     *
     * Conditional: You must specify `PublicTypeArn` , or `TypeName` , `Type` , and `PublisherId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-type
     */
    readonly type?: string;
    /**
     * The name of the extension.
     *
     * Conditional: You must specify `PublicTypeArn` , or `TypeName` , `Type` , and `PublisherId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-typename
     */
    readonly typeName?: string;
    /**
     * An alias to assign to the public extension, in this account and Region.
     *
     * If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and Region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console.
     *
     * An extension alias must be unique within a given account and Region. You can activate the same public resource multiple times in the same account and Region, using different type name aliases.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-typenamealias
     */
    readonly typeNameAlias?: string;
    /**
     * Manually updates a previously-activated type to a new major or minor version, if available.
     *
     * You can also use this parameter to update the value of `AutoUpdate` .
     *
     * - `MAJOR` : CloudFormation updates the extension to the newest major version, if one is available.
     * - `MINOR` : CloudFormation updates the extension to the newest minor version, if one is available.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-versionbump
     */
    readonly versionBump?: string;
}
/**
 * The `AWS::CloudFormation::WaitCondition` resource provides a way to coordinate stack resource creation with configuration actions that are external to the stack creation or to track the status of a configuration process.
 *
 * In these situations, we recommend that you associate a `CreationPolicy` attribute with the wait condition instead of using a wait condition handle. For more information and an example, see [CreationPolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html) in the *AWS CloudFormation User Guide* . If you use a `CreationPolicy` with a wait condition, don't specify any of the wait condition's properties.
 *
 * > If you use AWS PrivateLink , resources in the VPC that respond to wait conditions must have access to CloudFormation , specific Amazon S3 buckets. Resources must send wait condition responses to a presigned Amazon S3 URL. If they can't send responses to Amazon S3 , CloudFormation won't receive a response and the stack operation fails. For more information, see [Access CloudFormation using an interface endpoint ( AWS PrivateLink )](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/vpc-interface-endpoints.html) in the *AWS CloudFormation User Guide* . > For Amazon EC2 and Auto Scaling resources, we recommend that you use a `CreationPolicy` attribute instead of wait conditions. Add a `CreationPolicy` attribute to those resources, and use the `cfn-signal` helper script to signal when an instance creation process has completed successfully.
 *
 * @cloudformationResource AWS::CloudFormation::WaitCondition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitcondition.html
 */
export declare class CfnWaitCondition extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWaitCondition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWaitCondition;
    /**
     * @cloudformationAttribute Data
     */
    readonly attrData: cdk.IResolvable;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The number of success signals that CloudFormation must receive before it continues the stack creation process.
     */
    count?: number;
    /**
     * A reference to the wait condition handle used to signal this wait condition.
     */
    handle?: string;
    /**
     * The length of time (in seconds) to wait for the number of signals that the `Count` property specifies.
     */
    timeout?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnWaitConditionProps);
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
 * Properties for defining a `CfnWaitCondition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitcondition.html
 */
export interface CfnWaitConditionProps {
    /**
     * The number of success signals that CloudFormation must receive before it continues the stack creation process.
     *
     * When the wait condition receives the requisite number of success signals, CloudFormation resumes the creation of the stack. If the wait condition doesn't receive the specified number of success signals before the Timeout period expires, CloudFormation assumes that the wait condition has failed and rolls the stack back.
     *
     * Updates aren't supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitcondition.html#cfn-cloudformation-waitcondition-count
     */
    readonly count?: number;
    /**
     * A reference to the wait condition handle used to signal this wait condition.
     *
     * Use the `Ref` intrinsic function to specify an [AWS::CloudFormation::WaitConditionHandle](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitconditionhandle.html) resource.
     *
     * Anytime you add a `WaitCondition` resource during a stack update, you must associate the wait condition with a new WaitConditionHandle resource. Don't reuse an old wait condition handle that has already been defined in the template. If you reuse a wait condition handle, the wait condition might evaluate old signals from a previous create or update stack command.
     *
     * Updates aren't supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitcondition.html#cfn-cloudformation-waitcondition-handle
     */
    readonly handle?: string;
    /**
     * The length of time (in seconds) to wait for the number of signals that the `Count` property specifies.
     *
     * `Timeout` is a minimum-bound property, meaning the timeout occurs no sooner than the time you specify, but can occur shortly thereafter. The maximum time that can be specified for this property is 12 hours (43200 seconds).
     *
     * Updates aren't supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitcondition.html#cfn-cloudformation-waitcondition-timeout
     */
    readonly timeout?: string;
}
/**
 * The `AWS::CloudFormation::WaitConditionHandle` type has no properties.
 *
 * When you reference the `WaitConditionHandle` resource by using the `Ref` function, CloudFormation returns a presigned URL. You pass this URL to applications or scripts that are running on your Amazon EC2 instances to send signals to that URL. An associated `AWS::CloudFormation::WaitCondition` resource checks the URL for the required number of success signals or for a failure signal.
 *
 * For more information, see [Create wait conditions in a CloudFormation template](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-waitcondition.html) in the *AWS CloudFormation User Guide* .
 *
 * Anytime you add a `WaitCondition` resource during a stack update or update a resource with a wait condition, you must associate the wait condition with a new `WaitConditionHandle` resource. Don't reuse an old wait condition handle that has already been defined in the template. If you reuse a wait condition handle, the wait condition might evaluate old signals from a previous create or update stack command.
 *
 * Updates aren't supported for this resource.
 *
 * @cloudformationResource AWS::CloudFormation::WaitConditionHandle
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitconditionhandle.html
 */
export declare class CfnWaitConditionHandle extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWaitConditionHandle from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWaitConditionHandle;
    /**
     * A unique identifier for the resource.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnWaitConditionHandleProps);
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
 * Properties for defining a `CfnWaitConditionHandle`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitconditionhandle.html
 */
export interface CfnWaitConditionHandleProps {
}
/**
 * The `AWS::CloudFormation::GuardHook` resource creates and activates a Guard Hook.
 *
 * Using the Guard domain specific language (DSL), you can author Guard Hooks to evaluate your resources before allowing stack operations.
 *
 * For more information, see [Guard Hooks](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/guard-hooks.html) in the *AWS CloudFormation Hooks User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::GuardHook
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html
 */
export declare class CfnGuardHook extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGuardHook from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGuardHook;
    /**
     * Returns the ARN of a Guard Hook.
     *
     * @cloudformationAttribute HookArn
     */
    readonly attrHookArn: string;
    /**
     * The type name alias for the Hook. This alias must be unique per account and Region.
     */
    alias: string;
    /**
     * The IAM role that the Hook assumes to retrieve your Guard rules from S3 and optionally write a detailed Guard output report back.
     */
    executionRole: string;
    /**
     * Specifies how the Hook responds when rules fail their evaluation.
     */
    failureMode: string;
    /**
     * Specifies if the Hook is `ENABLED` or `DISABLED` .
     */
    hookStatus: string;
    /**
     * Specifies the name of an S3 bucket to store the Guard output report.
     */
    logBucket?: string;
    /**
     * Specifies the S3 location of your input parameters.
     */
    options?: cdk.IResolvable | CfnGuardHook.OptionsProperty;
    /**
     * Specifies the S3 location of your Guard rules.
     */
    ruleLocation: cdk.IResolvable | CfnGuardHook.S3LocationProperty;
    /**
     * Specifies the stack level filters for the Hook.
     */
    stackFilters?: cdk.IResolvable | CfnGuardHook.StackFiltersProperty;
    /**
     * Specifies the target filters for the Hook.
     */
    targetFilters?: cdk.IResolvable | CfnGuardHook.TargetFiltersProperty;
    /**
     * Specifies the list of operations the Hook is run against.
     */
    targetOperations: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGuardHookProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGuardHook {
    /**
     * Specifies the S3 location where your Guard rules or input parameters are located.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-s3location.html
     */
    interface S3LocationProperty {
        /**
         * Specifies the S3 path to the file containing your Guard rules or input parameters (in the form `s3://<bucket name>/<file name>` ).
         *
         * For Guard rules, the object stored in S3 must have one of the following file extensions: `.guard` , `.zip` , or `.tar.gz` .
         *
         * For input parameters, the object stored in S3 must have one of the following file extensions: `.yaml` , `.json` , `.zip` , or `.tar.gz` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-s3location.html#cfn-cloudformation-guardhook-s3location-uri
         */
        readonly uri: string;
        /**
         * For S3 buckets with versioning enabled, specifies the unique ID of the S3 object version to download your Guard rules or input parameters from.
         *
         * The Guard Hook downloads files from S3 every time the Hook is invoked. To prevent accidental changes or deletions, we recommend using a version when configuring your Guard Hook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-s3location.html#cfn-cloudformation-guardhook-s3location-versionid
         */
        readonly versionId?: string;
    }
    /**
     * The `TargetFilters` property type specifies the target filters for the Hook.
     *
     * For more information, see [AWS CloudFormation Hook target filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-target-filtering.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-targetfilters.html
     */
    interface TargetFiltersProperty {
        /**
         * List of actions that the hook is going to target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-targetfilters.html#cfn-cloudformation-guardhook-targetfilters-actions
         */
        readonly actions?: Array<string>;
        /**
         * List of invocation points that the hook is going to target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-targetfilters.html#cfn-cloudformation-guardhook-targetfilters-invocationpoints
         */
        readonly invocationPoints?: Array<string>;
        /**
         * List of type names that the hook is going to target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-targetfilters.html#cfn-cloudformation-guardhook-targetfilters-targetnames
         */
        readonly targetNames?: Array<string>;
        /**
         * List of hook targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-targetfilters.html#cfn-cloudformation-guardhook-targetfilters-targets
         */
        readonly targets: Array<CfnGuardHook.HookTargetProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Hook targets are the destination where hooks will be invoked against.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-hooktarget.html
     */
    interface HookTargetProperty {
        /**
         * Target actions are the type of operation hooks will be executed at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-hooktarget.html#cfn-cloudformation-guardhook-hooktarget-action
         */
        readonly action: string;
        /**
         * Invocation points are the point in provisioning workflow where hooks will be executed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-hooktarget.html#cfn-cloudformation-guardhook-hooktarget-invocationpoint
         */
        readonly invocationPoint: string;
        /**
         * Type name of hook target.
         *
         * Hook targets are the destination where hooks will be invoked against.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-hooktarget.html#cfn-cloudformation-guardhook-hooktarget-targetname
         */
        readonly targetName: string;
    }
    /**
     * The `StackFilters` property type specifies stack level filters for a Hook.
     *
     * The `StackNames` or `StackRoles` properties are optional. However, you must specify at least one of these properties.
     *
     * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stackfilters.html
     */
    interface StackFiltersProperty {
        /**
         * The filtering criteria.
         *
         * - All stack names and stack roles ( `All` ): The Hook will only be invoked when all specified filters match.
         * - Any stack names and stack roles ( `Any` ): The Hook will be invoked if at least one of the specified filters match.
         *
         * @default - "ALL"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stackfilters.html#cfn-cloudformation-guardhook-stackfilters-filteringcriteria
         */
        readonly filteringCriteria: string;
        /**
         * Includes or excludes specific stacks from Hook invocations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stackfilters.html#cfn-cloudformation-guardhook-stackfilters-stacknames
         */
        readonly stackNames?: cdk.IResolvable | CfnGuardHook.StackNamesProperty;
        /**
         * Includes or excludes specific stacks from Hook invocations based on their associated IAM roles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stackfilters.html#cfn-cloudformation-guardhook-stackfilters-stackroles
         */
        readonly stackRoles?: cdk.IResolvable | CfnGuardHook.StackRolesProperty;
    }
    /**
     * Specifies the stack names for the `StackFilters` property type to include or exclude specific stacks from Hook invocations.
     *
     * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stacknames.html
     */
    interface StackNamesProperty {
        /**
         * The stack names to exclude.
         *
         * All stacks except those listed here will invoke the Hook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stacknames.html#cfn-cloudformation-guardhook-stacknames-exclude
         */
        readonly exclude?: Array<string>;
        /**
         * The stack names to include.
         *
         * Only the stacks specified in this list will invoke the Hook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stacknames.html#cfn-cloudformation-guardhook-stacknames-include
         */
        readonly include?: Array<string>;
    }
    /**
     * Specifies the stack roles for the `StackFilters` property type to include or exclude specific stacks from Hook invocations based on their associated IAM roles.
     *
     * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stackroles.html
     */
    interface StackRolesProperty {
        /**
         * The IAM role ARNs for stacks you want to exclude.
         *
         * The Hook will be invoked on all stacks except those initiated by the specified roles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stackroles.html#cfn-cloudformation-guardhook-stackroles-exclude
         */
        readonly exclude?: Array<string>;
        /**
         * The IAM role ARNs to target stacks associated with these roles.
         *
         * Only stack operations initiated by these roles will invoke the Hook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-stackroles.html#cfn-cloudformation-guardhook-stackroles-include
         */
        readonly include?: Array<string>;
    }
    /**
     * Specifies the input parameters for a Guard Hook.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-options.html
     */
    interface OptionsProperty {
        /**
         * Specifies the S3 location where your input parameters are located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-options.html#cfn-cloudformation-guardhook-options-inputparams
         */
        readonly inputParams?: cdk.IResolvable | CfnGuardHook.S3LocationProperty;
    }
}
/**
 * Properties for defining a `CfnGuardHook`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html
 */
export interface CfnGuardHookProps {
    /**
     * The type name alias for the Hook. This alias must be unique per account and Region.
     *
     * The alias must be in the form `Name1::Name2::Name3` and must not begin with `AWS` . For example, `Private::Guard::MyTestHook` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-alias
     */
    readonly alias: string;
    /**
     * The IAM role that the Hook assumes to retrieve your Guard rules from S3 and optionally write a detailed Guard output report back.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-executionrole
     */
    readonly executionRole: string;
    /**
     * Specifies how the Hook responds when rules fail their evaluation.
     *
     * - `FAIL` : Prevents the action from proceeding. This is helpful for enforcing strict compliance or security policies.
     * - `WARN` : Issues warnings to users but allows actions to continue. This is useful for non-critical validations or informational checks.
     *
     * @default - "WARN"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-failuremode
     */
    readonly failureMode: string;
    /**
     * Specifies if the Hook is `ENABLED` or `DISABLED` .
     *
     * @default - "DISABLED"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-hookstatus
     */
    readonly hookStatus: string;
    /**
     * Specifies the name of an S3 bucket to store the Guard output report.
     *
     * This report contains the results of your Guard rule validations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-logbucket
     */
    readonly logBucket?: string;
    /**
     * Specifies the S3 location of your input parameters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-options
     */
    readonly options?: cdk.IResolvable | CfnGuardHook.OptionsProperty;
    /**
     * Specifies the S3 location of your Guard rules.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-rulelocation
     */
    readonly ruleLocation: cdk.IResolvable | CfnGuardHook.S3LocationProperty;
    /**
     * Specifies the stack level filters for the Hook.
     *
     * Example stack level filter in JSON:
     *
     * `"StackFilters": {"FilteringCriteria": "ALL", "StackNames": {"Exclude": [ "stack-1", "stack-2"]}}`
     *
     * Example stack level filter in YAML:
     *
     * `StackFilters: FilteringCriteria: ALL StackNames: Exclude: - stack-1 - stack-2`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-stackfilters
     */
    readonly stackFilters?: cdk.IResolvable | CfnGuardHook.StackFiltersProperty;
    /**
     * Specifies the target filters for the Hook.
     *
     * Example target filter in JSON:
     *
     * `"TargetFilters": {"Actions": [ "Create", "Update", "Delete" ]}`
     *
     * Example target filter in YAML:
     *
     * `TargetFilters: Actions: - CREATE - UPDATE - DELETE`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-targetfilters
     */
    readonly targetFilters?: cdk.IResolvable | CfnGuardHook.TargetFiltersProperty;
    /**
     * Specifies the list of operations the Hook is run against.
     *
     * For more information, see [Hook targets](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-concepts.html#hook-terms-hook-target) in the *AWS CloudFormation Hooks User Guide* .
     *
     * Valid values: `STACK` | `RESOURCE` | `CHANGE_SET` | `CLOUD_CONTROL`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-targetoperations
     */
    readonly targetOperations: Array<string>;
}
/**
 * The `AWS::CloudFormation::LambdaHook` resource creates and activates a Lambda Hook.
 *
 * You can use a Lambda Hook to evaluate your resources before allowing stack operations. This resource forwards requests for resource evaluation to a Lambda function.
 *
 * For more information, see [Lambda Hooks](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/lambda-hooks.html) in the *AWS CloudFormation Hooks User Guide* .
 *
 * @cloudformationResource AWS::CloudFormation::LambdaHook
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html
 */
export declare class CfnLambdaHook extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLambdaHook from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLambdaHook;
    /**
     * Returns the ARN of a Lambda Hook.
     *
     * @cloudformationAttribute HookArn
     */
    readonly attrHookArn: string;
    /**
     * The type name alias for the Hook. This alias must be unique per account and Region.
     */
    alias: string;
    /**
     * The IAM role that the Hook assumes to invoke your Lambda function.
     */
    executionRole: string;
    /**
     * Specifies how the Hook responds when the Lambda function invoked by the Hook returns a `FAILED` response.
     */
    failureMode: string;
    /**
     * Specifies if the Hook is `ENABLED` or `DISABLED` .
     */
    hookStatus: string;
    /**
     * Specifies the Lambda function for the Hook. You can use:.
     */
    lambdaFunction: string;
    /**
     * Specifies the stack level filters for the Hook.
     */
    stackFilters?: cdk.IResolvable | CfnLambdaHook.StackFiltersProperty;
    /**
     * Specifies the target filters for the Hook.
     */
    targetFilters?: cdk.IResolvable | CfnLambdaHook.TargetFiltersProperty;
    /**
     * Specifies the list of operations the Hook is run against.
     */
    targetOperations: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLambdaHookProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLambdaHook {
    /**
     * The `TargetFilters` property type specifies the target filters for the Hook.
     *
     * For more information, see [AWS CloudFormation Hook target filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-target-filtering.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-targetfilters.html
     */
    interface TargetFiltersProperty {
        /**
         * List of actions that the hook is going to target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-targetfilters.html#cfn-cloudformation-lambdahook-targetfilters-actions
         */
        readonly actions?: Array<string>;
        /**
         * List of invocation points that the hook is going to target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-targetfilters.html#cfn-cloudformation-lambdahook-targetfilters-invocationpoints
         */
        readonly invocationPoints?: Array<string>;
        /**
         * List of type names that the hook is going to target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-targetfilters.html#cfn-cloudformation-lambdahook-targetfilters-targetnames
         */
        readonly targetNames?: Array<string>;
        /**
         * List of hook targets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-targetfilters.html#cfn-cloudformation-lambdahook-targetfilters-targets
         */
        readonly targets: Array<CfnLambdaHook.HookTargetProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Hook targets are the destination where hooks will be invoked against.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-hooktarget.html
     */
    interface HookTargetProperty {
        /**
         * Target actions are the type of operation hooks will be executed at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-hooktarget.html#cfn-cloudformation-lambdahook-hooktarget-action
         */
        readonly action: string;
        /**
         * Invocation points are the point in provisioning workflow where hooks will be executed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-hooktarget.html#cfn-cloudformation-lambdahook-hooktarget-invocationpoint
         */
        readonly invocationPoint: string;
        /**
         * Type name of hook target.
         *
         * Hook targets are the destination where hooks will be invoked against.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-hooktarget.html#cfn-cloudformation-lambdahook-hooktarget-targetname
         */
        readonly targetName: string;
    }
    /**
     * The `StackFilters` property type specifies stack level filters for a Hook.
     *
     * The `StackNames` or `StackRoles` properties are optional. However, you must specify at least one of these properties.
     *
     * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stackfilters.html
     */
    interface StackFiltersProperty {
        /**
         * The filtering criteria.
         *
         * - All stack names and stack roles ( `All` ): The Hook will only be invoked when all specified filters match.
         * - Any stack names and stack roles ( `Any` ): The Hook will be invoked if at least one of the specified filters match.
         *
         * @default - "ALL"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stackfilters.html#cfn-cloudformation-lambdahook-stackfilters-filteringcriteria
         */
        readonly filteringCriteria: string;
        /**
         * Includes or excludes specific stacks from Hook invocations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stackfilters.html#cfn-cloudformation-lambdahook-stackfilters-stacknames
         */
        readonly stackNames?: cdk.IResolvable | CfnLambdaHook.StackNamesProperty;
        /**
         * Includes or excludes specific stacks from Hook invocations based on their associated IAM roles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stackfilters.html#cfn-cloudformation-lambdahook-stackfilters-stackroles
         */
        readonly stackRoles?: cdk.IResolvable | CfnLambdaHook.StackRolesProperty;
    }
    /**
     * Specifies the stack names for the `StackFilters` property type to include or exclude specific stacks from Hook invocations.
     *
     * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stacknames.html
     */
    interface StackNamesProperty {
        /**
         * The stack names to exclude.
         *
         * All stacks except those listed here will invoke the Hook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stacknames.html#cfn-cloudformation-lambdahook-stacknames-exclude
         */
        readonly exclude?: Array<string>;
        /**
         * The stack names to include.
         *
         * Only the stacks specified in this list will invoke the Hook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stacknames.html#cfn-cloudformation-lambdahook-stacknames-include
         */
        readonly include?: Array<string>;
    }
    /**
     * Specifies the stack roles for the `StackFilters` property type to include or exclude specific stacks from Hook invocations based on their associated IAM roles.
     *
     * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stackroles.html
     */
    interface StackRolesProperty {
        /**
         * The IAM role ARNs for stacks you want to exclude.
         *
         * The Hook will be invoked on all stacks except those initiated by the specified roles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stackroles.html#cfn-cloudformation-lambdahook-stackroles-exclude
         */
        readonly exclude?: Array<string>;
        /**
         * The IAM role ARNs to target stacks associated with these roles.
         *
         * Only stack operations initiated by these roles will invoke the Hook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-stackroles.html#cfn-cloudformation-lambdahook-stackroles-include
         */
        readonly include?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnLambdaHook`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html
 */
export interface CfnLambdaHookProps {
    /**
     * The type name alias for the Hook. This alias must be unique per account and Region.
     *
     * The alias must be in the form `Name1::Name2::Name3` and must not begin with `AWS` . For example, `Private::Lambda::MyTestHook` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-alias
     */
    readonly alias: string;
    /**
     * The IAM role that the Hook assumes to invoke your Lambda function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-executionrole
     */
    readonly executionRole: string;
    /**
     * Specifies how the Hook responds when the Lambda function invoked by the Hook returns a `FAILED` response.
     *
     * - `FAIL` : Prevents the action from proceeding. This is helpful for enforcing strict compliance or security policies.
     * - `WARN` : Issues warnings to users but allows actions to continue. This is useful for non-critical validations or informational checks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-failuremode
     */
    readonly failureMode: string;
    /**
     * Specifies if the Hook is `ENABLED` or `DISABLED` .
     *
     * @default - "ENABLED"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-hookstatus
     */
    readonly hookStatus: string;
    /**
     * Specifies the Lambda function for the Hook. You can use:.
     *
     * - The full Amazon Resource Name (ARN) without a suffix.
     * - A qualified ARN with a version or alias suffix.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-lambdafunction
     */
    readonly lambdaFunction: string;
    /**
     * Specifies the stack level filters for the Hook.
     *
     * Example stack level filter in JSON:
     *
     * `"StackFilters": {"FilteringCriteria": "ALL", "StackNames": {"Exclude": [ "stack-1", "stack-2"]}}`
     *
     * Example stack level filter in YAML:
     *
     * `StackFilters: FilteringCriteria: ALL StackNames: Exclude: - stack-1 - stack-2`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-stackfilters
     */
    readonly stackFilters?: cdk.IResolvable | CfnLambdaHook.StackFiltersProperty;
    /**
     * Specifies the target filters for the Hook.
     *
     * Example target filter in JSON:
     *
     * `"TargetFilters": {"Actions": [ "Create", "Update", "Delete" ]}`
     *
     * Example target filter in YAML:
     *
     * `TargetFilters: Actions: - CREATE - UPDATE - DELETE`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-targetfilters
     */
    readonly targetFilters?: cdk.IResolvable | CfnLambdaHook.TargetFiltersProperty;
    /**
     * Specifies the list of operations the Hook is run against.
     *
     * For more information, see [Hook targets](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-concepts.html#hook-terms-hook-target) in the *AWS CloudFormation Hooks User Guide* .
     *
     * Valid values: `STACK` | `RESOURCE` | `CHANGE_SET` | `CLOUD_CONTROL`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-targetoperations
     */
    readonly targetOperations: Array<string>;
}
