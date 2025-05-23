import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a running app for the specified UserProfile.
 *
 * This operation is automatically invoked by Amazon SageMaker AI upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.
 *
 * @cloudformationResource AWS::SageMaker::App
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html
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
     * The Amazon Resource Name (ARN) of the app, such as `arn:aws:sagemaker:us-west-2:account-id:app/my-app-name` .
     *
     * @cloudformationAttribute AppArn
     */
    readonly attrAppArn: string;
    /**
     * The name of the app.
     */
    appName: string;
    /**
     * The type of app.
     */
    appType: string;
    /**
     * The domain ID.
     */
    domainId: string;
    /**
     * Specifies the ARNs of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
     */
    resourceSpec?: cdk.IResolvable | CfnApp.ResourceSpecProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The user profile name.
     */
    userProfileName: string;
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
export declare namespace CfnApp {
    /**
     * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
     *
     * > When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn` , pass `None` as the value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html
     */
    interface ResourceSpecProperty {
        /**
         * The instance type that the image version runs on.
         *
         * > *JupyterServer apps* only support the `system` value.
         * >
         * > For *KernelGateway apps* , the `system` value is translated to `ml.t3.medium` . KernelGateway apps also support all other values for available instance types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html#cfn-sagemaker-app-resourcespec-instancetype
         */
        readonly instanceType?: string;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html#cfn-sagemaker-app-resourcespec-lifecycleconfigarn
         */
        readonly lifecycleConfigArn?: string;
        /**
         * The ARN of the SageMaker AI image that the image version belongs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html#cfn-sagemaker-app-resourcespec-sagemakerimagearn
         */
        readonly sageMakerImageArn?: string;
        /**
         * The ARN of the image version created on the instance.
         *
         * To clear the value set for `SageMakerImageVersionArn` , pass `None` as the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html#cfn-sagemaker-app-resourcespec-sagemakerimageversionarn
         */
        readonly sageMakerImageVersionArn?: string;
    }
}
/**
 * Properties for defining a `CfnApp`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html
 */
export interface CfnAppProps {
    /**
     * The name of the app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-appname
     */
    readonly appName: string;
    /**
     * The type of app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-apptype
     */
    readonly appType: string;
    /**
     * The domain ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-domainid
     */
    readonly domainId: string;
    /**
     * Specifies the ARNs of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-resourcespec
     */
    readonly resourceSpec?: cdk.IResolvable | CfnApp.ResourceSpecProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The user profile name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-userprofilename
     */
    readonly userProfileName: string;
}
/**
 * Creates a configuration for running a SageMaker AI image as a KernelGateway app.
 *
 * The configuration specifies the Amazon Elastic File System storage volume on the image, and a list of the kernels in the image.
 *
 * @cloudformationResource AWS::SageMaker::AppImageConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html
 */
export declare class CfnAppImageConfig extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAppImageConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAppImageConfig;
    /**
     * The Amazon Resource Name (ARN) of the AppImageConfig, such as `arn:aws:sagemaker:us-west-2:account-id:app-image-config/my-app-image-config-name` .
     *
     * @cloudformationAttribute AppImageConfigArn
     */
    readonly attrAppImageConfigArn: string;
    /**
     * The name of the AppImageConfig.
     */
    appImageConfigName: string;
    /**
     * The configuration for the file system and the runtime, such as the environment variables and entry point.
     */
    codeEditorAppImageConfig?: CfnAppImageConfig.CodeEditorAppImageConfigProperty | cdk.IResolvable;
    /**
     * The configuration for the file system and the runtime, such as the environment variables and entry point.
     */
    jupyterLabAppImageConfig?: cdk.IResolvable | CfnAppImageConfig.JupyterLabAppImageConfigProperty;
    /**
     * The configuration for the file system and kernels in the SageMaker AI image.
     */
    kernelGatewayImageConfig?: cdk.IResolvable | CfnAppImageConfig.KernelGatewayImageConfigProperty;
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
    constructor(scope: constructs.Construct, id: string, props: CfnAppImageConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAppImageConfig {
    /**
     * The configuration for the file system and kernels in a SageMaker AI image running as a KernelGateway app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig.html
     */
    interface KernelGatewayImageConfigProperty {
        /**
         * The Amazon Elastic File System storage configuration for a SageMaker AI image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig.html#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-filesystemconfig
         */
        readonly fileSystemConfig?: CfnAppImageConfig.FileSystemConfigProperty | cdk.IResolvable;
        /**
         * The specification of the Jupyter kernels in the image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig.html#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-kernelspecs
         */
        readonly kernelSpecs: Array<cdk.IResolvable | CfnAppImageConfig.KernelSpecProperty> | cdk.IResolvable;
    }
    /**
     * The specification of a Jupyter kernel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelspec.html
     */
    interface KernelSpecProperty {
        /**
         * The display name of the kernel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelspec.html#cfn-sagemaker-appimageconfig-kernelspec-displayname
         */
        readonly displayName?: string;
        /**
         * The name of the Jupyter kernel in the image.
         *
         * This value is case sensitive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelspec.html#cfn-sagemaker-appimageconfig-kernelspec-name
         */
        readonly name: string;
    }
    /**
     * The Amazon Elastic File System storage configuration for a SageMaker AI image.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html
     */
    interface FileSystemConfigProperty {
        /**
         * The default POSIX group ID (GID).
         *
         * If not specified, defaults to `100` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html#cfn-sagemaker-appimageconfig-filesystemconfig-defaultgid
         */
        readonly defaultGid?: number;
        /**
         * The default POSIX user ID (UID).
         *
         * If not specified, defaults to `1000` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html#cfn-sagemaker-appimageconfig-filesystemconfig-defaultuid
         */
        readonly defaultUid?: number;
        /**
         * The path within the image to mount the user's EFS home directory.
         *
         * The directory should be empty. If not specified, defaults to * /home/sagemaker-user* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html#cfn-sagemaker-appimageconfig-filesystemconfig-mountpath
         */
        readonly mountPath?: string;
    }
    /**
     * The configuration for the file system and kernels in a SageMaker AI image running as a JupyterLab app.
     *
     * The `FileSystemConfig` object is not supported.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-jupyterlabappimageconfig.html
     */
    interface JupyterLabAppImageConfigProperty {
        /**
         * The configuration used to run the application image container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-jupyterlabappimageconfig.html#cfn-sagemaker-appimageconfig-jupyterlabappimageconfig-containerconfig
         */
        readonly containerConfig?: CfnAppImageConfig.ContainerConfigProperty | cdk.IResolvable;
    }
    /**
     * The configuration used to run the application image container.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-containerconfig.html
     */
    interface ContainerConfigProperty {
        /**
         * The arguments for the container when you're running the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-containerconfig.html#cfn-sagemaker-appimageconfig-containerconfig-containerarguments
         */
        readonly containerArguments?: Array<string>;
        /**
         * The entrypoint used to run the application in the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-containerconfig.html#cfn-sagemaker-appimageconfig-containerconfig-containerentrypoint
         */
        readonly containerEntrypoint?: Array<string>;
        /**
         * The environment variables to set in the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-containerconfig.html#cfn-sagemaker-appimageconfig-containerconfig-containerenvironmentvariables
         */
        readonly containerEnvironmentVariables?: Array<CfnAppImageConfig.CustomImageContainerEnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The environment variables to set in the container.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-customimagecontainerenvironmentvariable.html
     */
    interface CustomImageContainerEnvironmentVariableProperty {
        /**
         * The key that identifies a container environment variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-customimagecontainerenvironmentvariable.html#cfn-sagemaker-appimageconfig-customimagecontainerenvironmentvariable-key
         */
        readonly key: string;
        /**
         * The value of the container environment variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-customimagecontainerenvironmentvariable.html#cfn-sagemaker-appimageconfig-customimagecontainerenvironmentvariable-value
         */
        readonly value: string;
    }
    /**
     * The configuration for the file system and kernels in a SageMaker image running as a Code Editor app.
     *
     * The `FileSystemConfig` object is not supported.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-codeeditorappimageconfig.html
     */
    interface CodeEditorAppImageConfigProperty {
        /**
         * The container configuration for a SageMaker image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-codeeditorappimageconfig.html#cfn-sagemaker-appimageconfig-codeeditorappimageconfig-containerconfig
         */
        readonly containerConfig?: CfnAppImageConfig.ContainerConfigProperty | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnAppImageConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html
 */
export interface CfnAppImageConfigProps {
    /**
     * The name of the AppImageConfig.
     *
     * Must be unique to your account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html#cfn-sagemaker-appimageconfig-appimageconfigname
     */
    readonly appImageConfigName: string;
    /**
     * The configuration for the file system and the runtime, such as the environment variables and entry point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html#cfn-sagemaker-appimageconfig-codeeditorappimageconfig
     */
    readonly codeEditorAppImageConfig?: CfnAppImageConfig.CodeEditorAppImageConfigProperty | cdk.IResolvable;
    /**
     * The configuration for the file system and the runtime, such as the environment variables and entry point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html#cfn-sagemaker-appimageconfig-jupyterlabappimageconfig
     */
    readonly jupyterLabAppImageConfig?: cdk.IResolvable | CfnAppImageConfig.JupyterLabAppImageConfigProperty;
    /**
     * The configuration for the file system and kernels in the SageMaker AI image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig
     */
    readonly kernelGatewayImageConfig?: cdk.IResolvable | CfnAppImageConfig.KernelGatewayImageConfigProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html#cfn-sagemaker-appimageconfig-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a Git repository as a resource in your SageMaker AI account.
 *
 * You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your SageMaker AI account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with.
 *
 * The repository can be hosted either in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository.
 *
 * @cloudformationResource AWS::SageMaker::CodeRepository
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html
 */
export declare class CfnCodeRepository extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCodeRepository from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCodeRepository;
    /**
     * The name of the code repository, such as `myCodeRepo` .
     *
     * @cloudformationAttribute CodeRepositoryName
     */
    readonly attrCodeRepositoryName: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the Git repository.
     */
    codeRepositoryName?: string;
    /**
     * Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.
     */
    gitConfig: CfnCodeRepository.GitConfigProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * List of tags for Code Repository.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCodeRepositoryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCodeRepository {
    /**
     * Specifies configuration details for a Git repository in your AWS account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html
     */
    interface GitConfigProperty {
        /**
         * The default branch for the Git repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html#cfn-sagemaker-coderepository-gitconfig-branch
         */
        readonly branch?: string;
        /**
         * The URL where the Git repository is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html#cfn-sagemaker-coderepository-gitconfig-repositoryurl
         */
        readonly repositoryUrl: string;
        /**
         * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository.
         *
         * The secret must have a staging label of `AWSCURRENT` and must be in the following format:
         *
         * `{"username": *UserName* , "password": *Password* }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html#cfn-sagemaker-coderepository-gitconfig-secretarn
         */
        readonly secretArn?: string;
    }
}
/**
 * Properties for defining a `CfnCodeRepository`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html
 */
export interface CfnCodeRepositoryProps {
    /**
     * The name of the Git repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html#cfn-sagemaker-coderepository-coderepositoryname
     */
    readonly codeRepositoryName?: string;
    /**
     * Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html#cfn-sagemaker-coderepository-gitconfig
     */
    readonly gitConfig: CfnCodeRepository.GitConfigProperty | cdk.IResolvable;
    /**
     * List of tags for Code Repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html#cfn-sagemaker-coderepository-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a definition for a job that monitors data quality and drift.
 *
 * For information about model monitor, see [Amazon SageMaker AI Model Monitor](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html) .
 *
 * @cloudformationResource AWS::SageMaker::DataQualityJobDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html
 */
export declare class CfnDataQualityJobDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataQualityJobDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataQualityJobDefinition;
    /**
     * The time when the job definition was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The Amazon Resource Name (ARN) of the job definition.
     *
     * @cloudformationAttribute JobDefinitionArn
     */
    readonly attrJobDefinitionArn: string;
    /**
     * Specifies the container that runs the monitoring job.
     */
    dataQualityAppSpecification: CfnDataQualityJobDefinition.DataQualityAppSpecificationProperty | cdk.IResolvable;
    /**
     * Configures the constraints and baselines for the monitoring job.
     */
    dataQualityBaselineConfig?: CfnDataQualityJobDefinition.DataQualityBaselineConfigProperty | cdk.IResolvable;
    /**
     * A list of inputs for the monitoring job.
     */
    dataQualityJobInput: CfnDataQualityJobDefinition.DataQualityJobInputProperty | cdk.IResolvable;
    /**
     * The output configuration for monitoring jobs.
     */
    dataQualityJobOutputConfig: cdk.IResolvable | CfnDataQualityJobDefinition.MonitoringOutputConfigProperty;
    /**
     * The name of the endpoint used to run the monitoring job.
     */
    endpointName?: string;
    /**
     * The name for the monitoring job definition.
     */
    jobDefinitionName?: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     */
    jobResources: cdk.IResolvable | CfnDataQualityJobDefinition.MonitoringResourcesProperty;
    /**
     * Specifies networking configuration for the monitoring job.
     */
    networkConfig?: cdk.IResolvable | CfnDataQualityJobDefinition.NetworkConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     */
    roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     */
    stoppingCondition?: cdk.IResolvable | CfnDataQualityJobDefinition.StoppingConditionProperty;
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
    constructor(scope: constructs.Construct, id: string, props: CfnDataQualityJobDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataQualityJobDefinition {
    /**
     * The input for the data quality monitoring job.
     *
     * Currently endpoints are supported for input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityjobinput.html
     */
    interface DataQualityJobInputProperty {
        /**
         * Input object for the batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityjobinput.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityjobinput-batchtransforminput
         */
        readonly batchTransformInput?: CfnDataQualityJobDefinition.BatchTransformInputProperty | cdk.IResolvable;
        /**
         * Input object for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityjobinput.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityjobinput-endpointinput
         */
        readonly endpointInput?: CfnDataQualityJobDefinition.EndpointInputProperty | cdk.IResolvable;
    }
    /**
     * Input object for the batch transform job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-batchtransforminput.html
     */
    interface BatchTransformInputProperty {
        /**
         * The Amazon S3 location being used to capture the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-dataqualityjobdefinition-batchtransforminput-datacaptureddestinations3uri
         */
        readonly dataCapturedDestinationS3Uri: string;
        /**
         * The dataset format for your batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-dataqualityjobdefinition-batchtransforminput-datasetformat
         */
        readonly datasetFormat: CfnDataQualityJobDefinition.DatasetFormatProperty | cdk.IResolvable;
        /**
         * The attributes of the input data to exclude from the analysis.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-dataqualityjobdefinition-batchtransforminput-excludefeaturesattribute
         */
        readonly excludeFeaturesAttribute?: string;
        /**
         * Path to the filesystem where the batch transform data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-dataqualityjobdefinition-batchtransforminput-localpath
         */
        readonly localPath: string;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-dataqualityjobdefinition-batchtransforminput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-dataqualityjobdefinition-batchtransforminput-s3inputmode
         */
        readonly s3InputMode?: string;
    }
    /**
     * The dataset format of the data to monitor.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-datasetformat.html
     */
    interface DatasetFormatProperty {
        /**
         * The CSV format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-datasetformat.html#cfn-sagemaker-dataqualityjobdefinition-datasetformat-csv
         */
        readonly csv?: CfnDataQualityJobDefinition.CsvProperty | cdk.IResolvable;
        /**
         * The Json format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-datasetformat.html#cfn-sagemaker-dataqualityjobdefinition-datasetformat-json
         */
        readonly json?: cdk.IResolvable | CfnDataQualityJobDefinition.JsonProperty;
        /**
         * A flag indicate if the dataset format is Parquet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-datasetformat.html#cfn-sagemaker-dataqualityjobdefinition-datasetformat-parquet
         */
        readonly parquet?: boolean | cdk.IResolvable;
    }
    /**
     * The CSV format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-csv.html
     */
    interface CsvProperty {
        /**
         * A boolean flag indicating if given CSV has header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-csv.html#cfn-sagemaker-dataqualityjobdefinition-csv-header
         */
        readonly header?: boolean | cdk.IResolvable;
    }
    /**
     * The Json format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-json.html
     */
    interface JsonProperty {
        /**
         * A boolean flag indicating if it is JSON line format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-json.html#cfn-sagemaker-dataqualityjobdefinition-json-line
         */
        readonly line?: boolean | cdk.IResolvable;
    }
    /**
     * Input object for the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html
     */
    interface EndpointInputProperty {
        /**
         * An endpoint in customer's account which has enabled `DataCaptureConfig` enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html#cfn-sagemaker-dataqualityjobdefinition-endpointinput-endpointname
         */
        readonly endpointName: string;
        /**
         * The attributes of the input data to exclude from the analysis.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html#cfn-sagemaker-dataqualityjobdefinition-endpointinput-excludefeaturesattribute
         */
        readonly excludeFeaturesAttribute?: string;
        /**
         * Path to the filesystem where the endpoint data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html#cfn-sagemaker-dataqualityjobdefinition-endpointinput-localpath
         */
        readonly localPath: string;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an Amazon S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html#cfn-sagemaker-dataqualityjobdefinition-endpointinput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-endpointinput.html#cfn-sagemaker-dataqualityjobdefinition-endpointinput-s3inputmode
         */
        readonly s3InputMode?: string;
    }
    /**
     * Information about the container that a data quality monitoring job runs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html
     */
    interface DataQualityAppSpecificationProperty {
        /**
         * The arguments to send to the container that the monitoring job runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-containerarguments
         */
        readonly containerArguments?: Array<string>;
        /**
         * The entrypoint for a container used to run a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-containerentrypoint
         */
        readonly containerEntrypoint?: Array<string>;
        /**
         * Sets the environment variables in the container that the monitoring job runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-environment
         */
        readonly environment?: cdk.IResolvable | Record<string, string>;
        /**
         * The container image that the data quality monitoring job runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-imageuri
         */
        readonly imageUri: string;
        /**
         * An Amazon S3 URI to a script that is called after analysis has been performed.
         *
         * Applicable only for the built-in (first party) containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-postanalyticsprocessorsourceuri
         */
        readonly postAnalyticsProcessorSourceUri?: string;
        /**
         * An Amazon S3 URI to a script that is called per row prior to running analysis.
         *
         * It can base64 decode the payload and convert it into a flattened JSON so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualityappspecification.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification-recordpreprocessorsourceuri
         */
        readonly recordPreprocessorSourceUri?: string;
    }
    /**
     * Specifies a limit to how long a job can run.
     *
     * When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs.
     *
     * To stop a training job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
     *
     * The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with `CreateModel` .
     *
     * > The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-stoppingcondition.html
     */
    interface StoppingConditionProperty {
        /**
         * The maximum length of time, in seconds, that a training or compilation job can run before it is stopped.
         *
         * For compilation jobs, if the job does not complete during this time, a `TimeOut` error is generated. We recommend starting with 900 seconds and increasing as necessary based on your model.
         *
         * For all other jobs, if the job does not complete during this time, SageMaker ends the job. When `RetryStrategy` is specified in the job request, `MaxRuntimeInSeconds` specifies the maximum time for all of the attempts in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.
         *
         * The maximum time that a `TrainingJob` can run in total, including any time spent publishing metrics or archiving and uploading models after it has been stopped, is 30 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-stoppingcondition.html#cfn-sagemaker-dataqualityjobdefinition-stoppingcondition-maxruntimeinseconds
         */
        readonly maxRuntimeInSeconds: number;
    }
    /**
     * Identifies the resources to deploy for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringresources.html
     */
    interface MonitoringResourcesProperty {
        /**
         * The configuration for the cluster resources used to run the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringresources.html#cfn-sagemaker-dataqualityjobdefinition-monitoringresources-clusterconfig
         */
        readonly clusterConfig: CfnDataQualityJobDefinition.ClusterConfigProperty | cdk.IResolvable;
    }
    /**
     * The configuration for the cluster of resources used to run the processing job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html
     */
    interface ClusterConfigProperty {
        /**
         * The number of ML compute instances to use in the model monitoring job.
         *
         * For distributed processing jobs, specify a value greater than 1. The default value is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html#cfn-sagemaker-dataqualityjobdefinition-clusterconfig-instancecount
         */
        readonly instanceCount: number;
        /**
         * The ML compute instance type for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html#cfn-sagemaker-dataqualityjobdefinition-clusterconfig-instancetype
         */
        readonly instanceType: string;
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html#cfn-sagemaker-dataqualityjobdefinition-clusterconfig-volumekmskeyid
         */
        readonly volumeKmsKeyId?: string;
        /**
         * The size of the ML storage volume, in gigabytes, that you want to provision.
         *
         * You must specify sufficient ML storage for your scenario.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-clusterconfig.html#cfn-sagemaker-dataqualityjobdefinition-clusterconfig-volumesizeingb
         */
        readonly volumeSizeInGb: number;
    }
    /**
     * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-networkconfig.html
     */
    interface NetworkConfigProperty {
        /**
         * Whether to encrypt all communications between distributed processing jobs.
         *
         * Choose `True` to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-networkconfig.html#cfn-sagemaker-dataqualityjobdefinition-networkconfig-enableintercontainertrafficencryption
         */
        readonly enableInterContainerTrafficEncryption?: boolean | cdk.IResolvable;
        /**
         * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-networkconfig.html#cfn-sagemaker-dataqualityjobdefinition-networkconfig-enablenetworkisolation
         */
        readonly enableNetworkIsolation?: boolean | cdk.IResolvable;
        /**
         * Specifies a VPC that your training jobs and hosted models have access to.
         *
         * Control access to and from your training and model containers by configuring the VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-networkconfig.html#cfn-sagemaker-dataqualityjobdefinition-networkconfig-vpcconfig
         */
        readonly vpcConfig?: cdk.IResolvable | CfnDataQualityJobDefinition.VpcConfigProperty;
    }
    /**
     * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
     *
     * You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The VPC security group IDs, in the form `sg-xxxxxxxx` .
         *
         * Specify the security groups for the VPC that is specified in the `Subnets` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-vpcconfig.html#cfn-sagemaker-dataqualityjobdefinition-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The ID of the subnets in the VPC to which you want to connect your training job or model.
         *
         * For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-vpcconfig.html#cfn-sagemaker-dataqualityjobdefinition-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * The output configuration for monitoring jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutputconfig.html
     */
    interface MonitoringOutputConfigProperty {
        /**
         * The AWS Key Management Service ( AWS KMS ) key that Amazon SageMaker AI uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-dataqualityjobdefinition-monitoringoutputconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Monitoring outputs for monitoring jobs.
         *
         * This is where the output of the periodic monitoring jobs is uploaded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-dataqualityjobdefinition-monitoringoutputconfig-monitoringoutputs
         */
        readonly monitoringOutputs: Array<cdk.IResolvable | CfnDataQualityJobDefinition.MonitoringOutputProperty> | cdk.IResolvable;
    }
    /**
     * The output object for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutput.html
     */
    interface MonitoringOutputProperty {
        /**
         * The Amazon S3 storage location where the results of a monitoring job are saved.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-monitoringoutput.html#cfn-sagemaker-dataqualityjobdefinition-monitoringoutput-s3output
         */
        readonly s3Output: cdk.IResolvable | CfnDataQualityJobDefinition.S3OutputProperty;
    }
    /**
     * The Amazon S3 storage location where the results of a monitoring job are saved.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-s3output.html
     */
    interface S3OutputProperty {
        /**
         * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
         *
         * LocalPath is an absolute path for the output data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-s3output.html#cfn-sagemaker-dataqualityjobdefinition-s3output-localpath
         */
        readonly localPath: string;
        /**
         * Whether to upload the results of the monitoring job continuously or after the job completes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-s3output.html#cfn-sagemaker-dataqualityjobdefinition-s3output-s3uploadmode
         */
        readonly s3UploadMode?: string;
        /**
         * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-s3output.html#cfn-sagemaker-dataqualityjobdefinition-s3output-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * Configuration for monitoring constraints and monitoring statistics.
     *
     * These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig.html
     */
    interface DataQualityBaselineConfigProperty {
        /**
         * The name of the job that performs baselining for the data quality monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig.html#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-baseliningjobname
         */
        readonly baseliningJobName?: string;
        /**
         * The constraints resource for a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig.html#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-constraintsresource
         */
        readonly constraintsResource?: CfnDataQualityJobDefinition.ConstraintsResourceProperty | cdk.IResolvable;
        /**
         * Configuration for monitoring constraints and monitoring statistics.
         *
         * These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig.html#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-statisticsresource
         */
        readonly statisticsResource?: cdk.IResolvable | CfnDataQualityJobDefinition.StatisticsResourceProperty;
    }
    /**
     * The statistics resource for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-statisticsresource.html
     */
    interface StatisticsResourceProperty {
        /**
         * The Amazon S3 URI for the statistics resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-statisticsresource.html#cfn-sagemaker-dataqualityjobdefinition-statisticsresource-s3uri
         */
        readonly s3Uri?: string;
    }
    /**
     * The constraints resource for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-constraintsresource.html
     */
    interface ConstraintsResourceProperty {
        /**
         * The Amazon S3 URI for the constraints resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-dataqualityjobdefinition-constraintsresource.html#cfn-sagemaker-dataqualityjobdefinition-constraintsresource-s3uri
         */
        readonly s3Uri?: string;
    }
}
/**
 * Properties for defining a `CfnDataQualityJobDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html
 */
export interface CfnDataQualityJobDefinitionProps {
    /**
     * Specifies the container that runs the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityappspecification
     */
    readonly dataQualityAppSpecification: CfnDataQualityJobDefinition.DataQualityAppSpecificationProperty | cdk.IResolvable;
    /**
     * Configures the constraints and baselines for the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig
     */
    readonly dataQualityBaselineConfig?: CfnDataQualityJobDefinition.DataQualityBaselineConfigProperty | cdk.IResolvable;
    /**
     * A list of inputs for the monitoring job.
     *
     * Currently endpoints are supported as monitoring inputs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityjobinput
     */
    readonly dataQualityJobInput: CfnDataQualityJobDefinition.DataQualityJobInputProperty | cdk.IResolvable;
    /**
     * The output configuration for monitoring jobs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-dataqualityjoboutputconfig
     */
    readonly dataQualityJobOutputConfig: cdk.IResolvable | CfnDataQualityJobDefinition.MonitoringOutputConfigProperty;
    /**
     * The name of the endpoint used to run the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-endpointname
     */
    readonly endpointName?: string;
    /**
     * The name for the monitoring job definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-jobdefinitionname
     */
    readonly jobDefinitionName?: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-jobresources
     */
    readonly jobResources: cdk.IResolvable | CfnDataQualityJobDefinition.MonitoringResourcesProperty;
    /**
     * Specifies networking configuration for the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-networkconfig
     */
    readonly networkConfig?: cdk.IResolvable | CfnDataQualityJobDefinition.NetworkConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-rolearn
     */
    readonly roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-stoppingcondition
     */
    readonly stoppingCondition?: cdk.IResolvable | CfnDataQualityJobDefinition.StoppingConditionProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-dataqualityjobdefinition.html#cfn-sagemaker-dataqualityjobdefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::SageMaker::Device` resource is an Amazon SageMaker resource type that allows you to register your Devices against an existing SageMaker Edge Manager DeviceFleet.
 *
 * Each device must be listed individually in the CFN specification.
 *
 * @cloudformationResource AWS::SageMaker::Device
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html
 */
export declare class CfnDevice extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDevice from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDevice;
    /**
     * Edge device you want to create.
     */
    device?: CfnDevice.DeviceProperty | cdk.IResolvable;
    /**
     * The name of the fleet the device belongs to.
     */
    deviceFleetName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs that contain metadata to help you categorize and organize your devices.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeviceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDevice {
    /**
     * Information of a particular device.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-device-device.html
     */
    interface DeviceProperty {
        /**
         * Description of the device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-device-device.html#cfn-sagemaker-device-device-description
         */
        readonly description?: string;
        /**
         * The name of the device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-device-device.html#cfn-sagemaker-device-device-devicename
         */
        readonly deviceName: string;
        /**
         * AWS Internet of Things (IoT) object name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-device-device.html#cfn-sagemaker-device-device-iotthingname
         */
        readonly iotThingName?: string;
    }
}
/**
 * Properties for defining a `CfnDevice`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html
 */
export interface CfnDeviceProps {
    /**
     * Edge device you want to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-device
     */
    readonly device?: CfnDevice.DeviceProperty | cdk.IResolvable;
    /**
     * The name of the fleet the device belongs to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-devicefleetname
     */
    readonly deviceFleetName: string;
    /**
     * An array of key-value pairs that contain metadata to help you categorize and organize your devices.
     *
     * Each tag consists of a key and a value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::SageMaker::DeviceFleet` resource is an Amazon SageMaker resource type that allows you to create a DeviceFleet that manages your SageMaker Edge Manager Devices.
 *
 * You must register your devices against the `DeviceFleet` separately.
 *
 * @cloudformationResource AWS::SageMaker::DeviceFleet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html
 */
export declare class CfnDeviceFleet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeviceFleet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeviceFleet;
    /**
     * A description of the fleet.
     */
    description?: string;
    /**
     * Name of the device fleet.
     */
    deviceFleetName: string;
    /**
     * The output configuration for storing sample data collected by the fleet.
     */
    outputConfig: CfnDeviceFleet.EdgeOutputConfigProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) that has access to AWS Internet of Things (IoT).
     */
    roleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs that contain metadata to help you categorize and organize your device fleets.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeviceFleetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDeviceFleet {
    /**
     * The output configuration for storing sample data collected by the fleet.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-devicefleet-edgeoutputconfig.html
     */
    interface EdgeOutputConfigProperty {
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume after compilation job.
         *
         * If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-devicefleet-edgeoutputconfig.html#cfn-sagemaker-devicefleet-edgeoutputconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The Amazon Simple Storage (S3) bucket URI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-devicefleet-edgeoutputconfig.html#cfn-sagemaker-devicefleet-edgeoutputconfig-s3outputlocation
         */
        readonly s3OutputLocation: string;
    }
}
/**
 * Properties for defining a `CfnDeviceFleet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html
 */
export interface CfnDeviceFleetProps {
    /**
     * A description of the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html#cfn-sagemaker-devicefleet-description
     */
    readonly description?: string;
    /**
     * Name of the device fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html#cfn-sagemaker-devicefleet-devicefleetname
     */
    readonly deviceFleetName: string;
    /**
     * The output configuration for storing sample data collected by the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html#cfn-sagemaker-devicefleet-outputconfig
     */
    readonly outputConfig: CfnDeviceFleet.EdgeOutputConfigProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) that has access to AWS Internet of Things (IoT).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html#cfn-sagemaker-devicefleet-rolearn
     */
    readonly roleArn: string;
    /**
     * An array of key-value pairs that contain metadata to help you categorize and organize your device fleets.
     *
     * Each tag consists of a key and a value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html#cfn-sagemaker-devicefleet-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a `Domain` .
 *
 * A domain consists of an associated Amazon Elastic File System volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other.
 *
 * *EFS storage*
 *
 * When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files.
 *
 * SageMaker AI uses the AWS Key Management Service ( AWS KMS) to encrypt the EFS volume attached to the domain with an AWS managed key by default. For more control, you can specify a customer managed key. For more information, see [Protect Data at Rest Using Encryption](https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html) .
 *
 * *VPC configuration*
 *
 * All traffic between the domain and the Amazon EFS volume is through the specified VPC and subnets. For other traffic, you can specify the `AppNetworkAccessType` parameter. `AppNetworkAccessType` corresponds to the network access type that you choose when you onboard to the domain. The following options are available:
 *
 * - `PublicInternetOnly` - Non-EFS traffic goes through a VPC managed by Amazon SageMaker AI, which allows internet access. This is the default value.
 * - `VpcOnly` - All traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway.
 *
 * When internet access is disabled, you won't be able to run a Amazon SageMaker AI Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker AI API and runtime or a NAT gateway and your security groups allow outbound connections.
 *
 * > NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a Amazon SageMaker AI Studio app successfully.
 *
 * For more information, see [Connect Amazon SageMaker AI Studio Notebooks to Resources in a VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html) .
 *
 * @cloudformationResource AWS::SageMaker::Domain
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html
 */
export declare class CfnDomain extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomain from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomain;
    /**
     * The Amazon Resource Name (ARN) of the Domain, such as `arn:aws:sagemaker:us-west-2:account-id:domain/my-domain-name` .
     *
     * @cloudformationAttribute DomainArn
     */
    readonly attrDomainArn: string;
    /**
     * The Domain ID.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The ID of the Amazon Elastic File System (EFS) managed by this Domain.
     *
     * @cloudformationAttribute HomeEfsFileSystemId
     */
    readonly attrHomeEfsFileSystemId: string;
    /**
     * The ID of the security group that authorizes traffic between the `RSessionGateway` apps and the `RStudioServerPro` app.
     *
     * @cloudformationAttribute SecurityGroupIdForDomainBoundary
     */
    readonly attrSecurityGroupIdForDomainBoundary: string;
    /**
     * The ARN of the application managed by SageMaker in IAM Identity Center. This value is only returned for domains created after October 1, 2023.
     *
     * @cloudformationAttribute SingleSignOnApplicationArn
     */
    readonly attrSingleSignOnApplicationArn: string;
    /**
     * The IAM Identity Center managed application instance ID.
     *
     * @cloudformationAttribute SingleSignOnManagedApplicationInstanceId
     */
    readonly attrSingleSignOnManagedApplicationInstanceId: string;
    /**
     * The URL for the Domain.
     *
     * @cloudformationAttribute Url
     */
    readonly attrUrl: string;
    /**
     * Specifies the VPC used for non-EFS traffic. The default value is `PublicInternetOnly` .
     */
    appNetworkAccessType?: string;
    /**
     * The entity that creates and manages the required security groups for inter-app communication in `VpcOnly` mode.
     */
    appSecurityGroupManagement?: string;
    /**
     * The mode of authentication that members use to access the Domain.
     */
    authMode: string;
    /**
     * The default settings for shared spaces that users create in the domain.
     */
    defaultSpaceSettings?: CfnDomain.DefaultSpaceSettingsProperty | cdk.IResolvable;
    /**
     * The default user settings.
     */
    defaultUserSettings: cdk.IResolvable | CfnDomain.UserSettingsProperty;
    /**
     * The domain name.
     */
    domainName: string;
    /**
     * A collection of settings that apply to the `SageMaker Domain` .
     */
    domainSettings?: CfnDomain.DomainSettingsProperty | cdk.IResolvable;
    /**
     * SageMaker uses AWS KMS to encrypt the EFS volume attached to the Domain with an AWS managed customer master key (CMK) by default.
     */
    kmsKeyId?: string;
    /**
     * The VPC subnets that Studio uses for communication.
     */
    subnetIds: Array<string>;
    /**
     * Indicates whether the tags added to Domain, User Profile and Space entity is propagated to all SageMaker resources.
     */
    tagPropagation?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags to associated with the Domain.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ID of the Amazon Virtual Private Cloud (Amazon VPC) that Studio uses for communication.
     */
    vpcId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDomainProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDomain {
    /**
     * The default settings for shared spaces that users create in the domain.
     *
     * SageMaker applies these settings only to shared spaces. It doesn't apply them to private spaces.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html
     */
    interface DefaultSpaceSettingsProperty {
        /**
         * The settings for assigning a custom file system to a domain.
         *
         * Permitted users can access this file system in Amazon SageMaker AI Studio.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html#cfn-sagemaker-domain-defaultspacesettings-customfilesystemconfigs
         */
        readonly customFileSystemConfigs?: Array<CfnDomain.CustomFileSystemConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html#cfn-sagemaker-domain-defaultspacesettings-customposixuserconfig
         */
        readonly customPosixUserConfig?: CfnDomain.CustomPosixUserConfigProperty | cdk.IResolvable;
        /**
         * The ARN of the execution role for the space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html#cfn-sagemaker-domain-defaultspacesettings-executionrole
         */
        readonly executionRole: string;
        /**
         * The JupyterLab app settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html#cfn-sagemaker-domain-defaultspacesettings-jupyterlabappsettings
         */
        readonly jupyterLabAppSettings?: cdk.IResolvable | CfnDomain.JupyterLabAppSettingsProperty;
        /**
         * The JupyterServer app settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html#cfn-sagemaker-domain-defaultspacesettings-jupyterserverappsettings
         */
        readonly jupyterServerAppSettings?: cdk.IResolvable | CfnDomain.JupyterServerAppSettingsProperty;
        /**
         * The KernelGateway app settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html#cfn-sagemaker-domain-defaultspacesettings-kernelgatewayappsettings
         */
        readonly kernelGatewayAppSettings?: cdk.IResolvable | CfnDomain.KernelGatewayAppSettingsProperty;
        /**
         * The security group IDs for the Amazon VPC that the space uses for communication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html#cfn-sagemaker-domain-defaultspacesettings-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * Default storage settings for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html#cfn-sagemaker-domain-defaultspacesettings-spacestoragesettings
         */
        readonly spaceStorageSettings?: CfnDomain.DefaultSpaceStorageSettingsProperty | cdk.IResolvable;
    }
    /**
     * The KernelGateway app settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html
     */
    interface KernelGatewayAppSettingsProperty {
        /**
         * A list of custom SageMaker AI images that are configured to run as a KernelGateway app.
         *
         * The maximum number of custom images are as follows.
         *
         * - On a domain level: 200
         * - On a space level: 5
         * - On a user profile level: 5
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html#cfn-sagemaker-domain-kernelgatewayappsettings-customimages
         */
        readonly customImages?: Array<CfnDomain.CustomImageProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker AI image used by the KernelGateway app.
         *
         * > The Amazon SageMaker AI Studio UI does not use the default instance type value set here. The default instance type set here is used when Apps are created using the AWS CLI or AWS CloudFormation and the instance type parameter value is not passed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html#cfn-sagemaker-domain-kernelgatewayappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnDomain.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the the user profile or domain.
         *
         * > To remove a Lifecycle Config, you must set `LifecycleConfigArns` to an empty list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html#cfn-sagemaker-domain-kernelgatewayappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * A custom SageMaker AI image.
     *
     * For more information, see [Bring your own SageMaker AI image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html
     */
    interface CustomImageProperty {
        /**
         * The name of the AppImageConfig.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html#cfn-sagemaker-domain-customimage-appimageconfigname
         */
        readonly appImageConfigName: string;
        /**
         * The name of the CustomImage.
         *
         * Must be unique to your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html#cfn-sagemaker-domain-customimage-imagename
         */
        readonly imageName: string;
        /**
         * The version number of the CustomImage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html#cfn-sagemaker-domain-customimage-imageversionnumber
         */
        readonly imageVersionNumber?: number;
    }
    /**
     * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
     *
     * > When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn` , pass `None` as the value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html
     */
    interface ResourceSpecProperty {
        /**
         * The instance type that the image version runs on.
         *
         * > *JupyterServer apps* only support the `system` value.
         * >
         * > For *KernelGateway apps* , the `system` value is translated to `ml.t3.medium` . KernelGateway apps also support all other values for available instance types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html#cfn-sagemaker-domain-resourcespec-instancetype
         */
        readonly instanceType?: string;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html#cfn-sagemaker-domain-resourcespec-lifecycleconfigarn
         */
        readonly lifecycleConfigArn?: string;
        /**
         * The ARN of the SageMaker AI image that the image version belongs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html#cfn-sagemaker-domain-resourcespec-sagemakerimagearn
         */
        readonly sageMakerImageArn?: string;
        /**
         * The ARN of the image version created on the instance.
         *
         * To clear the value set for `SageMakerImageVersionArn` , pass `None` as the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html#cfn-sagemaker-domain-resourcespec-sagemakerimageversionarn
         */
        readonly sageMakerImageVersionArn?: string;
    }
    /**
     * The JupyterServer app settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterserverappsettings.html
     */
    interface JupyterServerAppSettingsProperty {
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterserverappsettings.html#cfn-sagemaker-domain-jupyterserverappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnDomain.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the JupyterServerApp.
         *
         * If you use this parameter, the `DefaultResourceSpec` parameter is also required.
         *
         * > To remove a Lifecycle Config, you must set `LifecycleConfigArns` to an empty list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterserverappsettings.html#cfn-sagemaker-domain-jupyterserverappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * The settings for the JupyterLab application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterlabappsettings.html
     */
    interface JupyterLabAppSettingsProperty {
        /**
         * Indicates whether idle shutdown is activated for JupyterLab applications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterlabappsettings.html#cfn-sagemaker-domain-jupyterlabappsettings-applifecyclemanagement
         */
        readonly appLifecycleManagement?: CfnDomain.AppLifecycleManagementProperty | cdk.IResolvable;
        /**
         * A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterLab application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterlabappsettings.html#cfn-sagemaker-domain-jupyterlabappsettings-coderepositories
         */
        readonly codeRepositories?: Array<CfnDomain.CodeRepositoryProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of custom SageMaker images that are configured to run as a JupyterLab app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterlabappsettings.html#cfn-sagemaker-domain-jupyterlabappsettings-customimages
         */
        readonly customImages?: Array<CfnDomain.CustomImageProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterlabappsettings.html#cfn-sagemaker-domain-jupyterlabappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnDomain.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the lifecycle configurations attached to the user profile or domain.
         *
         * To remove a lifecycle config, you must set `LifecycleConfigArns` to an empty list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterlabappsettings.html#cfn-sagemaker-domain-jupyterlabappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * A Git repository that SageMaker AI automatically displays to users for cloning in the JupyterServer application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-coderepository.html
     */
    interface CodeRepositoryProperty {
        /**
         * The URL of the Git repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-coderepository.html#cfn-sagemaker-domain-coderepository-repositoryurl
         */
        readonly repositoryUrl: string;
    }
    /**
     * Settings that are used to configure and manage the lifecycle of Amazon SageMaker Studio applications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-applifecyclemanagement.html
     */
    interface AppLifecycleManagementProperty {
        /**
         * Settings related to idle shutdown of Studio applications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-applifecyclemanagement.html#cfn-sagemaker-domain-applifecyclemanagement-idlesettings
         */
        readonly idleSettings?: CfnDomain.IdleSettingsProperty | cdk.IResolvable;
    }
    /**
     * Settings related to idle shutdown of Studio applications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-idlesettings.html
     */
    interface IdleSettingsProperty {
        /**
         * The time that SageMaker waits after the application becomes idle before shutting it down.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-idlesettings.html#cfn-sagemaker-domain-idlesettings-idletimeoutinminutes
         */
        readonly idleTimeoutInMinutes?: number;
        /**
         * Indicates whether idle shutdown is activated for the application type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-idlesettings.html#cfn-sagemaker-domain-idlesettings-lifecyclemanagement
         */
        readonly lifecycleManagement?: string;
        /**
         * The maximum value in minutes that custom idle shutdown can be set to by the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-idlesettings.html#cfn-sagemaker-domain-idlesettings-maxidletimeoutinminutes
         */
        readonly maxIdleTimeoutInMinutes?: number;
        /**
         * The minimum value in minutes that custom idle shutdown can be set to by the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-idlesettings.html#cfn-sagemaker-domain-idlesettings-minidletimeoutinminutes
         */
        readonly minIdleTimeoutInMinutes?: number;
    }
    /**
     * The default storage settings for a space.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacestoragesettings.html
     */
    interface DefaultSpaceStorageSettingsProperty {
        /**
         * The default EBS storage settings for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacestoragesettings.html#cfn-sagemaker-domain-defaultspacestoragesettings-defaultebsstoragesettings
         */
        readonly defaultEbsStorageSettings?: CfnDomain.DefaultEbsStorageSettingsProperty | cdk.IResolvable;
    }
    /**
     * A collection of default EBS storage settings that apply to spaces created within a domain or user profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultebsstoragesettings.html
     */
    interface DefaultEbsStorageSettingsProperty {
        /**
         * The default size of the EBS storage volume for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultebsstoragesettings.html#cfn-sagemaker-domain-defaultebsstoragesettings-defaultebsvolumesizeingb
         */
        readonly defaultEbsVolumeSizeInGb: number;
        /**
         * The maximum size of the EBS storage volume for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultebsstoragesettings.html#cfn-sagemaker-domain-defaultebsstoragesettings-maximumebsvolumesizeingb
         */
        readonly maximumEbsVolumeSizeInGb: number;
    }
    /**
     * Details about the POSIX identity that is used for file system operations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customposixuserconfig.html
     */
    interface CustomPosixUserConfigProperty {
        /**
         * The POSIX group ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customposixuserconfig.html#cfn-sagemaker-domain-customposixuserconfig-gid
         */
        readonly gid: number;
        /**
         * The POSIX user ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customposixuserconfig.html#cfn-sagemaker-domain-customposixuserconfig-uid
         */
        readonly uid: number;
    }
    /**
     * The settings for assigning a custom file system to a user profile or space for an Amazon SageMaker AI Domain.
     *
     * Permitted users can access this file system in Amazon SageMaker AI Studio.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customfilesystemconfig.html
     */
    interface CustomFileSystemConfigProperty {
        /**
         * The settings for a custom Amazon EFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customfilesystemconfig.html#cfn-sagemaker-domain-customfilesystemconfig-efsfilesystemconfig
         */
        readonly efsFileSystemConfig?: CfnDomain.EFSFileSystemConfigProperty | cdk.IResolvable;
        /**
         * The settings for a custom Amazon FSx for Lustre file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customfilesystemconfig.html#cfn-sagemaker-domain-customfilesystemconfig-fsxlustrefilesystemconfig
         */
        readonly fSxLustreFileSystemConfig?: CfnDomain.FSxLustreFileSystemConfigProperty | cdk.IResolvable;
    }
    /**
     * The settings for assigning a custom Amazon EFS file system to a user profile or space for an Amazon SageMaker AI Domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-efsfilesystemconfig.html
     */
    interface EFSFileSystemConfigProperty {
        /**
         * The ID of your Amazon EFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-efsfilesystemconfig.html#cfn-sagemaker-domain-efsfilesystemconfig-filesystemid
         */
        readonly fileSystemId: string;
        /**
         * The path to the file system directory that is accessible in Amazon SageMaker AI Studio.
         *
         * Permitted users can access only this directory and below.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-efsfilesystemconfig.html#cfn-sagemaker-domain-efsfilesystemconfig-filesystempath
         */
        readonly fileSystemPath?: string;
    }
    /**
     * The settings for assigning a custom Amazon FSx for Lustre file system to a user profile or space for an Amazon SageMaker Domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-fsxlustrefilesystemconfig.html
     */
    interface FSxLustreFileSystemConfigProperty {
        /**
         * The globally unique, 17-digit, ID of the file system, assigned by Amazon FSx for Lustre.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-fsxlustrefilesystemconfig.html#cfn-sagemaker-domain-fsxlustrefilesystemconfig-filesystemid
         */
        readonly fileSystemId: string;
        /**
         * The path to the file system directory that is accessible in Amazon SageMaker Studio.
         *
         * Permitted users can access only this directory and below.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-fsxlustrefilesystemconfig.html#cfn-sagemaker-domain-fsxlustrefilesystemconfig-filesystempath
         */
        readonly fileSystemPath?: string;
    }
    /**
     * A collection of settings that apply to users of Amazon SageMaker Studio.
     *
     * These settings are specified when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called, and as `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called.
     *
     * `SecurityGroups` is aggregated when specified in both calls. For all other settings in `UserSettings` , the values specified in `CreateUserProfile` take precedence over those specified in `CreateDomain` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html
     */
    interface UserSettingsProperty {
        /**
         * The Code Editor application settings.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-codeeditorappsettings
         */
        readonly codeEditorAppSettings?: CfnDomain.CodeEditorAppSettingsProperty | cdk.IResolvable;
        /**
         * The settings for assigning a custom file system to a user profile.
         *
         * Permitted users can access this file system in Amazon SageMaker AI Studio.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-customfilesystemconfigs
         */
        readonly customFileSystemConfigs?: Array<CfnDomain.CustomFileSystemConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Details about the POSIX identity that is used for file system operations.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-customposixuserconfig
         */
        readonly customPosixUserConfig?: CfnDomain.CustomPosixUserConfigProperty | cdk.IResolvable;
        /**
         * The default experience that the user is directed to when accessing the domain. The supported values are:.
         *
         * - `studio::` : Indicates that Studio is the default experience. This value can only be passed if `StudioWebPortal` is set to `ENABLED` .
         * - `app:JupyterServer:` : Indicates that Studio Classic is the default experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-defaultlandinguri
         */
        readonly defaultLandingUri?: string;
        /**
         * The execution role for the user.
         *
         * SageMaker applies this setting only to private spaces that the user creates in the domain. SageMaker doesn't apply this setting to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-executionrole
         */
        readonly executionRole: string;
        /**
         * The settings for the JupyterLab application.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-jupyterlabappsettings
         */
        readonly jupyterLabAppSettings?: cdk.IResolvable | CfnDomain.JupyterLabAppSettingsProperty;
        /**
         * The Jupyter server's app settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-jupyterserverappsettings
         */
        readonly jupyterServerAppSettings?: cdk.IResolvable | CfnDomain.JupyterServerAppSettingsProperty;
        /**
         * The kernel gateway app settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-kernelgatewayappsettings
         */
        readonly kernelGatewayAppSettings?: cdk.IResolvable | CfnDomain.KernelGatewayAppSettingsProperty;
        /**
         * A collection of settings that configure the `RSessionGateway` app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-rsessionappsettings
         */
        readonly rSessionAppSettings?: cdk.IResolvable | CfnDomain.RSessionAppSettingsProperty;
        /**
         * A collection of settings that configure user interaction with the `RStudioServerPro` app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-rstudioserverproappsettings
         */
        readonly rStudioServerProAppSettings?: cdk.IResolvable | CfnDomain.RStudioServerProAppSettingsProperty;
        /**
         * The security groups for the Amazon Virtual Private Cloud (VPC) that the domain uses for communication.
         *
         * Optional when the `CreateDomain.AppNetworkAccessType` parameter is set to `PublicInternetOnly` .
         *
         * Required when the `CreateDomain.AppNetworkAccessType` parameter is set to `VpcOnly` , unless specified as part of the `DefaultUserSettings` for the domain.
         *
         * Amazon SageMaker AI adds a security group to allow NFS traffic from Amazon SageMaker AI Studio. Therefore, the number of security groups that you can specify is one less than the maximum number shown.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * Specifies options for sharing Amazon SageMaker AI Studio notebooks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-sharingsettings
         */
        readonly sharingSettings?: cdk.IResolvable | CfnDomain.SharingSettingsProperty;
        /**
         * The storage settings for a space.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-spacestoragesettings
         */
        readonly spaceStorageSettings?: CfnDomain.DefaultSpaceStorageSettingsProperty | cdk.IResolvable;
        /**
         * Whether the user can access Studio.
         *
         * If this value is set to `DISABLED` , the user cannot access Studio, even if that is the default experience for the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-studiowebportal
         */
        readonly studioWebPortal?: string;
        /**
         * Studio settings.
         *
         * If these settings are applied on a user level, they take priority over the settings applied on a domain level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-studiowebportalsettings
         */
        readonly studioWebPortalSettings?: cdk.IResolvable | CfnDomain.StudioWebPortalSettingsProperty;
    }
    /**
     * A collection of settings that configure user interaction with the `RStudioServerPro` app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverproappsettings.html
     */
    interface RStudioServerProAppSettingsProperty {
        /**
         * Indicates whether the current user has access to the `RStudioServerPro` app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverproappsettings.html#cfn-sagemaker-domain-rstudioserverproappsettings-accessstatus
         */
        readonly accessStatus?: string;
        /**
         * The level of permissions that the user has within the `RStudioServerPro` app.
         *
         * This value defaults to `User`. The `Admin` value allows the user access to the RStudio Administrative Dashboard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverproappsettings.html#cfn-sagemaker-domain-rstudioserverproappsettings-usergroup
         */
        readonly userGroup?: string;
    }
    /**
     * A collection of settings that apply to an `RSessionGateway` app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rsessionappsettings.html
     */
    interface RSessionAppSettingsProperty {
        /**
         * A list of custom SageMaker AI images that are configured to run as a RSession app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rsessionappsettings.html#cfn-sagemaker-domain-rsessionappsettings-customimages
         */
        readonly customImages?: Array<CfnDomain.CustomImageProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies the ARNs of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rsessionappsettings.html#cfn-sagemaker-domain-rsessionappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnDomain.ResourceSpecProperty;
    }
    /**
     * Specifies options when sharing an Amazon SageMaker Studio notebook.
     *
     * These settings are specified as part of `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called, and as part of `UserSettings` when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html
     */
    interface SharingSettingsProperty {
        /**
         * Whether to include the notebook cell output when sharing the notebook.
         *
         * The default is `Disabled` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html#cfn-sagemaker-domain-sharingsettings-notebookoutputoption
         */
        readonly notebookOutputOption?: string;
        /**
         * When `NotebookOutputOption` is `Allowed` , the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html#cfn-sagemaker-domain-sharingsettings-s3kmskeyid
         */
        readonly s3KmsKeyId?: string;
        /**
         * When `NotebookOutputOption` is `Allowed` , the Amazon S3 bucket used to store the shared notebook snapshots.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html#cfn-sagemaker-domain-sharingsettings-s3outputpath
         */
        readonly s3OutputPath?: string;
    }
    /**
     * The Code Editor application settings.
     *
     * For more information about Code Editor, see [Get started with Code Editor in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/code-editor.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-codeeditorappsettings.html
     */
    interface CodeEditorAppSettingsProperty {
        /**
         * Settings that are used to configure and manage the lifecycle of CodeEditor applications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-codeeditorappsettings.html#cfn-sagemaker-domain-codeeditorappsettings-applifecyclemanagement
         */
        readonly appLifecycleManagement?: CfnDomain.AppLifecycleManagementProperty | cdk.IResolvable;
        /**
         * A list of custom SageMaker images that are configured to run as a Code Editor app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-codeeditorappsettings.html#cfn-sagemaker-domain-codeeditorappsettings-customimages
         */
        readonly customImages?: Array<CfnDomain.CustomImageProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the Code Editor app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-codeeditorappsettings.html#cfn-sagemaker-domain-codeeditorappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnDomain.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the Code Editor application lifecycle configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-codeeditorappsettings.html#cfn-sagemaker-domain-codeeditorappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * Studio settings.
     *
     * If these settings are applied on a user level, they take priority over the settings applied on a domain level.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-studiowebportalsettings.html
     */
    interface StudioWebPortalSettingsProperty {
        /**
         * The [Applications supported in Studio](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-apps.html) that are hidden from the Studio left navigation pane.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-studiowebportalsettings.html#cfn-sagemaker-domain-studiowebportalsettings-hiddenapptypes
         */
        readonly hiddenAppTypes?: Array<string>;
        /**
         * The machine learning tools that are hidden from the Studio left navigation pane.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-studiowebportalsettings.html#cfn-sagemaker-domain-studiowebportalsettings-hiddenmltools
         */
        readonly hiddenMlTools?: Array<string>;
    }
    /**
     * A collection of settings that apply to the `SageMaker Domain` .
     *
     * These settings are specified through the `CreateDomain` API call.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-domainsettings.html
     */
    interface DomainSettingsProperty {
        /**
         * A collection of settings that configure the domain's Docker interaction.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-domainsettings.html#cfn-sagemaker-domain-domainsettings-dockersettings
         */
        readonly dockerSettings?: CfnDomain.DockerSettingsProperty | cdk.IResolvable;
        /**
         * The configuration for attaching a SageMaker AI user profile name to the execution role as a [sts:SourceIdentity key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-domainsettings.html#cfn-sagemaker-domain-domainsettings-executionroleidentityconfig
         */
        readonly executionRoleIdentityConfig?: string;
        /**
         * A collection of settings that configure the `RStudioServerPro` Domain-level app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-domainsettings.html#cfn-sagemaker-domain-domainsettings-rstudioserverprodomainsettings
         */
        readonly rStudioServerProDomainSettings?: cdk.IResolvable | CfnDomain.RStudioServerProDomainSettingsProperty;
        /**
         * The security groups for the Amazon Virtual Private Cloud that the `Domain` uses for communication between Domain-level apps and user apps.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-domainsettings.html#cfn-sagemaker-domain-domainsettings-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
    }
    /**
     * A collection of settings that configure the `RStudioServerPro` Domain-level app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverprodomainsettings.html
     */
    interface RStudioServerProDomainSettingsProperty {
        /**
         * A collection that defines the default `InstanceType` , `SageMakerImageArn` , and `SageMakerImageVersionArn` for the Domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverprodomainsettings.html#cfn-sagemaker-domain-rstudioserverprodomainsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnDomain.ResourceSpecProperty;
        /**
         * The ARN of the execution role for the `RStudioServerPro` Domain-level app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverprodomainsettings.html#cfn-sagemaker-domain-rstudioserverprodomainsettings-domainexecutionrolearn
         */
        readonly domainExecutionRoleArn: string;
        /**
         * A URL pointing to an RStudio Connect server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverprodomainsettings.html#cfn-sagemaker-domain-rstudioserverprodomainsettings-rstudioconnecturl
         */
        readonly rStudioConnectUrl?: string;
        /**
         * A URL pointing to an RStudio Package Manager server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverprodomainsettings.html#cfn-sagemaker-domain-rstudioserverprodomainsettings-rstudiopackagemanagerurl
         */
        readonly rStudioPackageManagerUrl?: string;
    }
    /**
     * A collection of settings that configure the domain's Docker interaction.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-dockersettings.html
     */
    interface DockerSettingsProperty {
        /**
         * Indicates whether the domain can access Docker.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-dockersettings.html#cfn-sagemaker-domain-dockersettings-enabledockeraccess
         */
        readonly enableDockerAccess?: string;
        /**
         * The list of AWS accounts that are trusted when the domain is created in VPC-only mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-dockersettings.html#cfn-sagemaker-domain-dockersettings-vpconlytrustedaccounts
         */
        readonly vpcOnlyTrustedAccounts?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDomain`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html
 */
export interface CfnDomainProps {
    /**
     * Specifies the VPC used for non-EFS traffic. The default value is `PublicInternetOnly` .
     *
     * - `PublicInternetOnly` - Non-EFS traffic is through a VPC managed by Amazon SageMaker AI , which allows direct internet access
     * - `VpcOnly` - All Studio traffic is through the specified VPC and subnets
     *
     * *Valid Values* : `PublicInternetOnly | VpcOnly`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-appnetworkaccesstype
     */
    readonly appNetworkAccessType?: string;
    /**
     * The entity that creates and manages the required security groups for inter-app communication in `VpcOnly` mode.
     *
     * Required when `CreateDomain.AppNetworkAccessType` is `VpcOnly` and `DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn` is provided. If setting up the domain for use with RStudio, this value must be set to `Service` .
     *
     * *Allowed Values* : `Service` | `Customer`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-appsecuritygroupmanagement
     */
    readonly appSecurityGroupManagement?: string;
    /**
     * The mode of authentication that members use to access the Domain.
     *
     * *Valid Values* : `SSO | IAM`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-authmode
     */
    readonly authMode: string;
    /**
     * The default settings for shared spaces that users create in the domain.
     *
     * SageMaker applies these settings only to shared spaces. It doesn't apply them to private spaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings
     */
    readonly defaultSpaceSettings?: CfnDomain.DefaultSpaceSettingsProperty | cdk.IResolvable;
    /**
     * The default user settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultusersettings
     */
    readonly defaultUserSettings: cdk.IResolvable | CfnDomain.UserSettingsProperty;
    /**
     * The domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-domainname
     */
    readonly domainName: string;
    /**
     * A collection of settings that apply to the `SageMaker Domain` .
     *
     * These settings are specified through the `CreateDomain` API call.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-domainsettings
     */
    readonly domainSettings?: CfnDomain.DomainSettingsProperty | cdk.IResolvable;
    /**
     * SageMaker uses AWS KMS to encrypt the EFS volume attached to the Domain with an AWS managed customer master key (CMK) by default.
     *
     * For more control, specify a customer managed CMK.
     *
     * *Length Constraints* : Maximum length of 2048.
     *
     * *Pattern* : `.*`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The VPC subnets that Studio uses for communication.
     *
     * *Length Constraints* : Maximum length of 32.
     *
     * *Array members* : Minimum number of 1 item. Maximum number of 16 items.
     *
     * *Pattern* : `[-0-9a-zA-Z]+`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * Indicates whether the tags added to Domain, User Profile and Space entity is propagated to all SageMaker resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-tagpropagation
     */
    readonly tagPropagation?: string;
    /**
     * Tags to associated with the Domain.
     *
     * Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
     *
     * Tags that you specify for the Domain are also added to all apps that are launched in the Domain.
     *
     * *Array members* : Minimum number of 0 items. Maximum number of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the Amazon Virtual Private Cloud (Amazon VPC) that Studio uses for communication.
     *
     * *Length Constraints* : Maximum length of 32.
     *
     * *Pattern* : `[-0-9a-zA-Z]+`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-vpcid
     */
    readonly vpcId: string;
}
/**
 * Use the `AWS::SageMaker::Endpoint` resource to create an endpoint using the specified configuration in the request.
 *
 * Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the [AWS::SageMaker::EndpointConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html) resource. For more information, see [Deploy a Model on Amazon SageMaker Hosting Services](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-hosting.html) in the *Amazon SageMaker Developer Guide* .
 *
 * @cloudformationResource AWS::SageMaker::Endpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html
 */
export declare class CfnEndpoint extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEndpoint;
    /**
     * The Amazon Resource Name (ARN) of the endpoint.
     *
     * @cloudformationAttribute EndpointArn
     */
    readonly attrEndpointArn: string;
    /**
     * The name of the endpoint, such as `MyEndpoint` .
     *
     * @cloudformationAttribute EndpointName
     */
    readonly attrEndpointName: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
     */
    deploymentConfig?: CfnEndpoint.DeploymentConfigProperty | cdk.IResolvable;
    /**
     * The name of the [AWS::SageMaker::EndpointConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html) resource that specifies the configuration for the endpoint. For more information, see [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html) .
     */
    endpointConfigName: string;
    /**
     * The name of the endpoint.The name must be unique within an AWS Region in your AWS account. The name is case-insensitive in `CreateEndpoint` , but the case is preserved and must be matched in [](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html) .
     */
    endpointName?: string;
    /**
     * When you are updating endpoint resources with [RetainAllVariantProperties](https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html#SageMaker-UpdateEndpoint-request-RetainAllVariantProperties) whose value is set to `true` , `ExcludeRetainedVariantProperties` specifies the list of type [VariantProperty](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-variantproperty.html) to override with the values provided by `EndpointConfig` . If you don't specify a value for `ExcludeAllVariantProperties` , no variant properties are overridden. Don't use this property when creating new endpoint resources or when `RetainAllVariantProperties` is set to `false` .
     */
    excludeRetainedVariantProperties?: Array<cdk.IResolvable | CfnEndpoint.VariantPropertyProperty> | cdk.IResolvable;
    /**
     * When updating endpoint resources, enables or disables the retention of variant properties, such as the instance count or the variant weight.
     */
    retainAllVariantProperties?: boolean | cdk.IResolvable;
    /**
     * Specifies whether to reuse the last deployment configuration.
     */
    retainDeploymentConfig?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEndpointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEndpoint {
    /**
     * Specifies a production variant property type for an Endpoint.
     *
     * If you are updating an Endpoint with the [RetainAllVariantProperties](https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html#SageMaker-UpdateEndpoint-request-RetainAllVariantProperties) option set to `true` , the `VarientProperty` objects listed in [ExcludeRetainedVariantProperties](https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html#SageMaker-UpdateEndpoint-request-ExcludeRetainedVariantProperties) override the existing variant properties of the Endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-variantproperty.html
     */
    interface VariantPropertyProperty {
        /**
         * The type of variant property. The supported values are:.
         *
         * - `DesiredInstanceCount` : Overrides the existing variant instance counts using the [InitialInstanceCount](https://docs.aws.amazon.com/sagemaker/latest/dg/API_ProductionVariant.html#SageMaker-Type-ProductionVariant-InitialInstanceCount) values in the [ProductionVariants](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html#SageMaker-CreateEndpointConfig-request-ProductionVariants) .
         * - `DesiredWeight` : Overrides the existing variant weights using the [InitialVariantWeight](https://docs.aws.amazon.com/sagemaker/latest/dg/API_ProductionVariant.html#SageMaker-Type-ProductionVariant-InitialVariantWeight) values in the [ProductionVariants](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html#SageMaker-CreateEndpointConfig-request-ProductionVariants) .
         * - `DataCaptureConfig` : (Not currently supported.)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-variantproperty.html#cfn-sagemaker-endpoint-variantproperty-variantpropertytype
         */
        readonly variantPropertyType?: string;
    }
    /**
     * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-deploymentconfig.html
     */
    interface DeploymentConfigProperty {
        /**
         * Automatic rollback configuration for handling endpoint deployment failures and recovery.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-deploymentconfig.html#cfn-sagemaker-endpoint-deploymentconfig-autorollbackconfiguration
         */
        readonly autoRollbackConfiguration?: CfnEndpoint.AutoRollbackConfigProperty | cdk.IResolvable;
        /**
         * Update policy for a blue/green deployment.
         *
         * If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-deploymentconfig.html#cfn-sagemaker-endpoint-deploymentconfig-bluegreenupdatepolicy
         */
        readonly blueGreenUpdatePolicy?: CfnEndpoint.BlueGreenUpdatePolicyProperty | cdk.IResolvable;
        /**
         * Specifies a rolling deployment strategy for updating a SageMaker endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-deploymentconfig.html#cfn-sagemaker-endpoint-deploymentconfig-rollingupdatepolicy
         */
        readonly rollingUpdatePolicy?: cdk.IResolvable | CfnEndpoint.RollingUpdatePolicyProperty;
    }
    /**
     * Automatic rollback configuration for handling endpoint deployment failures and recovery.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-autorollbackconfig.html
     */
    interface AutoRollbackConfigProperty {
        /**
         * List of CloudWatch alarms in your account that are configured to monitor metrics on an endpoint.
         *
         * If any alarms are tripped during a deployment, SageMaker rolls back the deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-autorollbackconfig.html#cfn-sagemaker-endpoint-autorollbackconfig-alarms
         */
        readonly alarms: Array<CfnEndpoint.AlarmProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * An Amazon CloudWatch alarm configured to monitor metrics on an endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-alarm.html
     */
    interface AlarmProperty {
        /**
         * The name of a CloudWatch alarm in your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-alarm.html#cfn-sagemaker-endpoint-alarm-alarmname
         */
        readonly alarmName: string;
    }
    /**
     * Specifies a rolling deployment strategy for updating a SageMaker endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-rollingupdatepolicy.html
     */
    interface RollingUpdatePolicyProperty {
        /**
         * Batch size for each rolling step to provision capacity and turn on traffic on the new endpoint fleet, and terminate capacity on the old endpoint fleet.
         *
         * Value must be between 5% to 50% of the variant's total instance count.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-rollingupdatepolicy.html#cfn-sagemaker-endpoint-rollingupdatepolicy-maximumbatchsize
         */
        readonly maximumBatchSize: CfnEndpoint.CapacitySizeProperty | cdk.IResolvable;
        /**
         * The time limit for the total deployment.
         *
         * Exceeding this limit causes a timeout.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-rollingupdatepolicy.html#cfn-sagemaker-endpoint-rollingupdatepolicy-maximumexecutiontimeoutinseconds
         */
        readonly maximumExecutionTimeoutInSeconds?: number;
        /**
         * Batch size for rollback to the old endpoint fleet.
         *
         * Each rolling step to provision capacity and turn on traffic on the old endpoint fleet, and terminate capacity on the new endpoint fleet. If this field is absent, the default value will be set to 100% of total capacity which means to bring up the whole capacity of the old fleet at once during rollback.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-rollingupdatepolicy.html#cfn-sagemaker-endpoint-rollingupdatepolicy-rollbackmaximumbatchsize
         */
        readonly rollbackMaximumBatchSize?: CfnEndpoint.CapacitySizeProperty | cdk.IResolvable;
        /**
         * The length of the baking period, during which SageMaker monitors alarms for each batch on the new fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-rollingupdatepolicy.html#cfn-sagemaker-endpoint-rollingupdatepolicy-waitintervalinseconds
         */
        readonly waitIntervalInSeconds: number;
    }
    /**
     * Specifies the type and size of the endpoint capacity to activate for a blue/green deployment, a rolling deployment, or a rollback strategy.
     *
     * You can specify your batches as either instance count or the overall percentage or your fleet.
     *
     * For a rollback strategy, if you don't specify the fields in this object, or if you set the `Value` to 100%, then SageMaker uses a blue/green rollback strategy and rolls all traffic back to the blue fleet.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-capacitysize.html
     */
    interface CapacitySizeProperty {
        /**
         * Specifies the endpoint capacity type.
         *
         * - `INSTANCE_COUNT` : The endpoint activates based on the number of instances.
         * - `CAPACITY_PERCENT` : The endpoint activates based on the specified percentage of capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-capacitysize.html#cfn-sagemaker-endpoint-capacitysize-type
         */
        readonly type: string;
        /**
         * Defines the capacity size, either as a number of instances or a capacity percentage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-capacitysize.html#cfn-sagemaker-endpoint-capacitysize-value
         */
        readonly value: number;
    }
    /**
     * Update policy for a blue/green deployment.
     *
     * If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-bluegreenupdatepolicy.html
     */
    interface BlueGreenUpdatePolicyProperty {
        /**
         * Maximum execution timeout for the deployment.
         *
         * Note that the timeout value should be larger than the total waiting time specified in `TerminationWaitInSeconds` and `WaitIntervalInSeconds` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-bluegreenupdatepolicy.html#cfn-sagemaker-endpoint-bluegreenupdatepolicy-maximumexecutiontimeoutinseconds
         */
        readonly maximumExecutionTimeoutInSeconds?: number;
        /**
         * Additional waiting time in seconds after the completion of an endpoint deployment before terminating the old endpoint fleet.
         *
         * Default is 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-bluegreenupdatepolicy.html#cfn-sagemaker-endpoint-bluegreenupdatepolicy-terminationwaitinseconds
         */
        readonly terminationWaitInSeconds?: number;
        /**
         * Defines the traffic routing strategy to shift traffic from the old fleet to the new fleet during an endpoint deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-bluegreenupdatepolicy.html#cfn-sagemaker-endpoint-bluegreenupdatepolicy-trafficroutingconfiguration
         */
        readonly trafficRoutingConfiguration: cdk.IResolvable | CfnEndpoint.TrafficRoutingConfigProperty;
    }
    /**
     * Defines the traffic routing strategy during an endpoint deployment to shift traffic from the old fleet to the new fleet.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-trafficroutingconfig.html
     */
    interface TrafficRoutingConfigProperty {
        /**
         * Batch size for the first step to turn on traffic on the new endpoint fleet.
         *
         * `Value` must be less than or equal to 50% of the variant's total instance count.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-trafficroutingconfig.html#cfn-sagemaker-endpoint-trafficroutingconfig-canarysize
         */
        readonly canarySize?: CfnEndpoint.CapacitySizeProperty | cdk.IResolvable;
        /**
         * Batch size for each step to turn on traffic on the new endpoint fleet.
         *
         * `Value` must be 10-50% of the variant's total instance count.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-trafficroutingconfig.html#cfn-sagemaker-endpoint-trafficroutingconfig-linearstepsize
         */
        readonly linearStepSize?: CfnEndpoint.CapacitySizeProperty | cdk.IResolvable;
        /**
         * Traffic routing strategy type.
         *
         * - `ALL_AT_ONCE` : Endpoint traffic shifts to the new fleet in a single step.
         * - `CANARY` : Endpoint traffic shifts to the new fleet in two steps. The first step is the canary, which is a small portion of the traffic. The second step is the remainder of the traffic.
         * - `LINEAR` : Endpoint traffic shifts to the new fleet in n steps of a configurable size.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-trafficroutingconfig.html#cfn-sagemaker-endpoint-trafficroutingconfig-type
         */
        readonly type: string;
        /**
         * The waiting time (in seconds) between incremental steps to turn on traffic on the new endpoint fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-trafficroutingconfig.html#cfn-sagemaker-endpoint-trafficroutingconfig-waitintervalinseconds
         */
        readonly waitIntervalInSeconds?: number;
    }
}
/**
 * Properties for defining a `CfnEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html
 */
export interface CfnEndpointProps {
    /**
     * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html#cfn-sagemaker-endpoint-deploymentconfig
     */
    readonly deploymentConfig?: CfnEndpoint.DeploymentConfigProperty | cdk.IResolvable;
    /**
     * The name of the [AWS::SageMaker::EndpointConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html) resource that specifies the configuration for the endpoint. For more information, see [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html#cfn-sagemaker-endpoint-endpointconfigname
     */
    readonly endpointConfigName: string;
    /**
     * The name of the endpoint.The name must be unique within an AWS Region in your AWS account. The name is case-insensitive in `CreateEndpoint` , but the case is preserved and must be matched in [](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html#cfn-sagemaker-endpoint-endpointname
     */
    readonly endpointName?: string;
    /**
     * When you are updating endpoint resources with [RetainAllVariantProperties](https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html#SageMaker-UpdateEndpoint-request-RetainAllVariantProperties) whose value is set to `true` , `ExcludeRetainedVariantProperties` specifies the list of type [VariantProperty](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-variantproperty.html) to override with the values provided by `EndpointConfig` . If you don't specify a value for `ExcludeAllVariantProperties` , no variant properties are overridden. Don't use this property when creating new endpoint resources or when `RetainAllVariantProperties` is set to `false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html#cfn-sagemaker-endpoint-excluderetainedvariantproperties
     */
    readonly excludeRetainedVariantProperties?: Array<cdk.IResolvable | CfnEndpoint.VariantPropertyProperty> | cdk.IResolvable;
    /**
     * When updating endpoint resources, enables or disables the retention of variant properties, such as the instance count or the variant weight.
     *
     * To retain the variant properties of an endpoint when updating it, set `RetainAllVariantProperties` to `true` . To use the variant properties specified in a new `EndpointConfig` call when updating an endpoint, set `RetainAllVariantProperties` to `false` . Use this property only when updating endpoint resources, not when creating new endpoint resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html#cfn-sagemaker-endpoint-retainallvariantproperties
     */
    readonly retainAllVariantProperties?: boolean | cdk.IResolvable;
    /**
     * Specifies whether to reuse the last deployment configuration.
     *
     * The default value is false (the configuration is not reused).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html#cfn-sagemaker-endpoint-retaindeploymentconfig
     */
    readonly retainDeploymentConfig?: boolean | cdk.IResolvable;
    /**
     * A list of key-value pairs to apply to this resource.
     *
     * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the *AWS Billing and Cost Management User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html#cfn-sagemaker-endpoint-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::SageMaker::EndpointConfig` resource creates a configuration for an Amazon SageMaker endpoint.
 *
 * For more information, see [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html) in the *SageMaker Developer Guide* .
 *
 * @cloudformationResource AWS::SageMaker::EndpointConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html
 */
export declare class CfnEndpointConfig extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEndpointConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEndpointConfig;
    /**
     * The name of the endpoint configuration, such as `MyEndpointConfiguration` .
     *
     * @cloudformationAttribute EndpointConfigName
     */
    readonly attrEndpointConfigName: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Specifies configuration for how an endpoint performs asynchronous inference.
     */
    asyncInferenceConfig?: CfnEndpointConfig.AsyncInferenceConfigProperty | cdk.IResolvable;
    /**
     * Specifies how to capture endpoint data for model monitor.
     */
    dataCaptureConfig?: CfnEndpointConfig.DataCaptureConfigProperty | cdk.IResolvable;
    enableNetworkIsolation?: boolean | cdk.IResolvable;
    /**
     * The name of the endpoint configuration.
     */
    endpointConfigName?: string;
    executionRoleArn?: string;
    /**
     * A parameter to activate explainers.
     */
    explainerConfig?: CfnEndpointConfig.ExplainerConfigProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of an AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
     */
    kmsKeyId?: string;
    /**
     * A list of `ProductionVariant` objects, one for each model that you want to host at this endpoint.
     */
    productionVariants: Array<cdk.IResolvable | CfnEndpointConfig.ProductionVariantProperty> | cdk.IResolvable;
    /**
     * Array of `ProductionVariant` objects.
     */
    shadowProductionVariants?: Array<cdk.IResolvable | CfnEndpointConfig.ProductionVariantProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    vpcConfig?: cdk.IResolvable | CfnEndpointConfig.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEndpointConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEndpointConfig {
    /**
     * Specifies a model that you want to host and the resources to deploy for hosting it.
     *
     * If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying the `InitialVariantWeight` objects.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html
     */
    interface ProductionVariantProperty {
        /**
         * The size of the Elastic Inference (EI) instance to use for the production variant.
         *
         * EI instances provide on-demand GPU computing for inference. For more information, see [Using Elastic Inference in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html) . For more information, see [Using Elastic Inference in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-acceleratortype
         */
        readonly acceleratorType?: string;
        /**
         * The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting.
         *
         * For more information about health check, see [How Your Container Should Respond to Health Check (Ping) Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-containerstartuphealthchecktimeoutinseconds
         */
        readonly containerStartupHealthCheckTimeoutInSeconds?: number;
        /**
         * You can use this parameter to turn on native AWS Systems Manager (SSM) access for a production variant behind an endpoint.
         *
         * By default, SSM access is disabled for all production variants behind an endpoint. You can turn on or turn off SSM access for a production variant behind an existing endpoint by creating a new endpoint configuration and calling `UpdateEndpoint` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-enablessmaccess
         */
        readonly enableSsmAccess?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-inferenceamiversion
         */
        readonly inferenceAmiVersion?: string;
        /**
         * Number of instances to launch initially.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-initialinstancecount
         */
        readonly initialInstanceCount?: number;
        /**
         * Determines initial traffic distribution among all of the models that you specify in the endpoint configuration.
         *
         * The traffic to a production variant is determined by the ratio of the `VariantWeight` to the sum of all `VariantWeight` values across all ProductionVariants. If unspecified, it defaults to 1.0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-initialvariantweight
         */
        readonly initialVariantWeight?: number;
        /**
         * The ML compute instance type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-instancetype
         */
        readonly instanceType?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-managedinstancescaling
         */
        readonly managedInstanceScaling?: cdk.IResolvable | CfnEndpointConfig.ManagedInstanceScalingProperty;
        /**
         * The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-modeldatadownloadtimeoutinseconds
         */
        readonly modelDataDownloadTimeoutInSeconds?: number;
        /**
         * The name of the model that you want to host.
         *
         * This is the name that you specified when creating the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-modelname
         */
        readonly modelName?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-routingconfig
         */
        readonly routingConfig?: cdk.IResolvable | CfnEndpointConfig.RoutingConfigProperty;
        /**
         * The serverless configuration for an endpoint.
         *
         * Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-serverlessconfig
         */
        readonly serverlessConfig?: cdk.IResolvable | CfnEndpointConfig.ServerlessConfigProperty;
        /**
         * The name of the production variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-variantname
         */
        readonly variantName: string;
        /**
         * The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant.
         *
         * Currently only Amazon EBS gp2 storage volumes are supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html#cfn-sagemaker-endpointconfig-productionvariant-volumesizeingb
         */
        readonly volumeSizeInGb?: number;
    }
    /**
     * Specifies the serverless configuration for an endpoint variant.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-serverlessconfig.html
     */
    interface ServerlessConfigProperty {
        /**
         * The maximum number of concurrent invocations your serverless endpoint can process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-serverlessconfig.html#cfn-sagemaker-endpointconfig-serverlessconfig-maxconcurrency
         */
        readonly maxConcurrency: number;
        /**
         * The memory size of your serverless endpoint.
         *
         * Valid values are in 1 GB increments: 1024 MB, 2048 MB, 3072 MB, 4096 MB, 5120 MB, or 6144 MB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-serverlessconfig.html#cfn-sagemaker-endpointconfig-serverlessconfig-memorysizeinmb
         */
        readonly memorySizeInMb: number;
        /**
         * The amount of provisioned concurrency to allocate for the serverless endpoint.
         *
         * Should be less than or equal to `MaxConcurrency` .
         *
         * > This field is not supported for serverless endpoint recommendations for Inference Recommender jobs. For more information about creating an Inference Recommender job, see [CreateInferenceRecommendationsJobs](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-serverlessconfig.html#cfn-sagemaker-endpointconfig-serverlessconfig-provisionedconcurrency
         */
        readonly provisionedConcurrency?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-managedinstancescaling.html
     */
    interface ManagedInstanceScalingProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-managedinstancescaling.html#cfn-sagemaker-endpointconfig-managedinstancescaling-maxinstancecount
         */
        readonly maxInstanceCount?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-managedinstancescaling.html#cfn-sagemaker-endpointconfig-managedinstancescaling-mininstancecount
         */
        readonly minInstanceCount?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-managedinstancescaling.html#cfn-sagemaker-endpointconfig-managedinstancescaling-status
         */
        readonly status?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-routingconfig.html
     */
    interface RoutingConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-routingconfig.html#cfn-sagemaker-endpointconfig-routingconfig-routingstrategy
         */
        readonly routingStrategy?: string;
    }
    /**
     * Specifies the configuration of your endpoint for model monitor data capture.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig.html
     */
    interface DataCaptureConfigProperty {
        /**
         * A list of the JSON and CSV content type that the endpoint captures.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-capturecontenttypeheader
         */
        readonly captureContentTypeHeader?: CfnEndpointConfig.CaptureContentTypeHeaderProperty | cdk.IResolvable;
        /**
         * Specifies whether the endpoint captures input data to your model, output data from your model, or both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-captureoptions
         */
        readonly captureOptions: Array<CfnEndpointConfig.CaptureOptionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The S3 bucket where model monitor stores captured data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-destinations3uri
         */
        readonly destinationS3Uri: string;
        /**
         * Set to `True` to enable data capture.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-enablecapture
         */
        readonly enableCapture?: boolean | cdk.IResolvable;
        /**
         * The percentage of data to capture.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-initialsamplingpercentage
         */
        readonly initialSamplingPercentage: number;
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt the captured data at rest using Amazon S3 server-side encryption.
         *
         * The KmsKeyId can be any of the following formats: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab Alias name: alias/ExampleAlias Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see KMS-Managed Encryption Keys (https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the Amazon Simple Storage Service Developer Guide. The KMS key policy must grant permission to the IAM role that you specify in your CreateModel (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html) request. For more information, see Using Key Policies in AWS KMS (http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the AWS Key Management Service Developer Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * Specifies whether the endpoint captures input data or output data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-captureoption.html
     */
    interface CaptureOptionProperty {
        /**
         * Specifies whether the endpoint captures input data or output data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-captureoption.html#cfn-sagemaker-endpointconfig-captureoption-capturemode
         */
        readonly captureMode: string;
    }
    /**
     * Specifies the JSON and CSV content types of the data that the endpoint captures.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-capturecontenttypeheader.html
     */
    interface CaptureContentTypeHeaderProperty {
        /**
         * A list of the CSV content types of the data that the endpoint captures.
         *
         * For the endpoint to capture the data, you must also specify the content type when you invoke the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-capturecontenttypeheader.html#cfn-sagemaker-endpointconfig-capturecontenttypeheader-csvcontenttypes
         */
        readonly csvContentTypes?: Array<string>;
        /**
         * A list of the JSON content types of the data that the endpoint captures.
         *
         * For the endpoint to capture the data, you must also specify the content type when you invoke the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-capturecontenttypeheader.html#cfn-sagemaker-endpointconfig-capturecontenttypeheader-jsoncontenttypes
         */
        readonly jsonContentTypes?: Array<string>;
    }
    /**
     * Specifies configuration for how an endpoint performs asynchronous inference.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceconfig.html
     */
    interface AsyncInferenceConfigProperty {
        /**
         * Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceconfig-clientconfig
         */
        readonly clientConfig?: CfnEndpointConfig.AsyncInferenceClientConfigProperty | cdk.IResolvable;
        /**
         * Specifies the configuration for asynchronous inference invocation outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceconfig-outputconfig
         */
        readonly outputConfig: CfnEndpointConfig.AsyncInferenceOutputConfigProperty | cdk.IResolvable;
    }
    /**
     * Specifies the configuration for asynchronous inference invocation outputs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceoutputconfig.html
     */
    interface AsyncInferenceOutputConfigProperty {
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt the asynchronous inference output in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceoutputconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceoutputconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Specifies the configuration for notifications of inference results for asynchronous inference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceoutputconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceoutputconfig-notificationconfig
         */
        readonly notificationConfig?: CfnEndpointConfig.AsyncInferenceNotificationConfigProperty | cdk.IResolvable;
        /**
         * The Amazon S3 location to upload failure inference responses to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceoutputconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceoutputconfig-s3failurepath
         */
        readonly s3FailurePath?: string;
        /**
         * The Amazon S3 location to upload inference responses to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceoutputconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceoutputconfig-s3outputpath
         */
        readonly s3OutputPath?: string;
    }
    /**
     * Specifies the configuration for notifications of inference results for asynchronous inference.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferencenotificationconfig.html
     */
    interface AsyncInferenceNotificationConfigProperty {
        /**
         * Amazon SNS topic to post a notification to when an inference fails.
         *
         * If no topic is provided, no notification is sent on failure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferencenotificationconfig.html#cfn-sagemaker-endpointconfig-asyncinferencenotificationconfig-errortopic
         */
        readonly errorTopic?: string;
        /**
         * The Amazon SNS topics where you want the inference response to be included.
         *
         * > The inference response is included only if the response size is less than or equal to 128 KB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferencenotificationconfig.html#cfn-sagemaker-endpointconfig-asyncinferencenotificationconfig-includeinferenceresponsein
         */
        readonly includeInferenceResponseIn?: Array<string>;
        /**
         * Amazon SNS topic to post a notification to when an inference completes successfully.
         *
         * If no topic is provided, no notification is sent on success.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferencenotificationconfig.html#cfn-sagemaker-endpointconfig-asyncinferencenotificationconfig-successtopic
         */
        readonly successTopic?: string;
    }
    /**
     * Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceclientconfig.html
     */
    interface AsyncInferenceClientConfigProperty {
        /**
         * The maximum number of concurrent requests sent by the SageMaker client to the model container.
         *
         * If no value is provided, SageMaker will choose an optimal value for you.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceclientconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceclientconfig-maxconcurrentinvocationsperinstance
         */
        readonly maxConcurrentInvocationsPerInstance?: number;
    }
    /**
     * A parameter to activate explainers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-explainerconfig.html
     */
    interface ExplainerConfigProperty {
        /**
         * A member of `ExplainerConfig` that contains configuration parameters for the SageMaker Clarify explainer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-explainerconfig.html#cfn-sagemaker-endpointconfig-explainerconfig-clarifyexplainerconfig
         */
        readonly clarifyExplainerConfig?: CfnEndpointConfig.ClarifyExplainerConfigProperty | cdk.IResolvable;
    }
    /**
     * The configuration parameters for the SageMaker Clarify explainer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyexplainerconfig.html
     */
    interface ClarifyExplainerConfigProperty {
        /**
         * A JMESPath boolean expression used to filter which records to explain.
         *
         * Explanations are activated by default. See [`EnableExplanations`](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable) for additional information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyexplainerconfig.html#cfn-sagemaker-endpointconfig-clarifyexplainerconfig-enableexplanations
         */
        readonly enableExplanations?: string;
        /**
         * The inference configuration parameter for the model container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyexplainerconfig.html#cfn-sagemaker-endpointconfig-clarifyexplainerconfig-inferenceconfig
         */
        readonly inferenceConfig?: CfnEndpointConfig.ClarifyInferenceConfigProperty | cdk.IResolvable;
        /**
         * The configuration for SHAP analysis.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyexplainerconfig.html#cfn-sagemaker-endpointconfig-clarifyexplainerconfig-shapconfig
         */
        readonly shapConfig: CfnEndpointConfig.ClarifyShapConfigProperty | cdk.IResolvable;
    }
    /**
     * The inference configuration parameter for the model container.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html
     */
    interface ClarifyInferenceConfigProperty {
        /**
         * A template string used to format a JSON record into an acceptable model container input.
         *
         * For example, a `ContentTemplate` string `'{"myfeatures":$features}'` will format a list of features `[1,2,3]` into the record string `'{"myfeatures":[1,2,3]}'` . Required only when the model container input is in JSON Lines format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-contenttemplate
         */
        readonly contentTemplate?: string;
        /**
         * The names of the features.
         *
         * If provided, these are included in the endpoint response payload to help readability of the `InvokeEndpoint` output. See the [Response](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) section under *Invoke the endpoint* in the Developer Guide for more information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-featureheaders
         */
        readonly featureHeaders?: Array<string>;
        /**
         * Provides the JMESPath expression to extract the features from a model container input in JSON Lines format.
         *
         * For example, if `FeaturesAttribute` is the JMESPath expression `'myfeatures'` , it extracts a list of features `[1,2,3]` from request data `'{"myfeatures":[1,2,3]}'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-featuresattribute
         */
        readonly featuresAttribute?: string;
        /**
         * A list of data types of the features (optional).
         *
         * Applicable only to NLP explainability. If provided, `FeatureTypes` must have at least one `'text'` string (for example, `['text']` ). If `FeatureTypes` is not provided, the explainer infers the feature types based on the baseline data. The feature types are included in the endpoint response payload. For additional information see the [response](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) section under *Invoke the endpoint* in the Developer Guide for more information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-featuretypes
         */
        readonly featureTypes?: Array<string>;
        /**
         * A JMESPath expression used to locate the list of label headers in the model container output.
         *
         * *Example* : If the model container output of a batch request is `'{"labels":["cat","dog","fish"],"probability":[0.6,0.3,0.1]}'` , then set `LabelAttribute` to `'labels'` to extract the list of label headers `["cat","dog","fish"]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-labelattribute
         */
        readonly labelAttribute?: string;
        /**
         * For multiclass classification problems, the label headers are the names of the classes.
         *
         * Otherwise, the label header is the name of the predicted label. These are used to help readability for the output of the `InvokeEndpoint` API. See the [response](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) section under *Invoke the endpoint* in the Developer Guide for more information. If there are no label headers in the model container output, provide them manually using this parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-labelheaders
         */
        readonly labelHeaders?: Array<string>;
        /**
         * A zero-based index used to extract a label header or list of label headers from model container output in CSV format.
         *
         * *Example for a multiclass model:* If the model container output consists of label headers followed by probabilities: `'"[\'cat\',\'dog\',\'fish\']","[0.1,0.6,0.3]"'` , set `LabelIndex` to `0` to select the label headers `['cat','dog','fish']` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-labelindex
         */
        readonly labelIndex?: number;
        /**
         * The maximum payload size (MB) allowed of a request from the explainer to the model container.
         *
         * Defaults to `6` MB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-maxpayloadinmb
         */
        readonly maxPayloadInMb?: number;
        /**
         * The maximum number of records in a request that the model container can process when querying the model container for the predictions of a [synthetic dataset](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-synthetic) . A record is a unit of input data that inference can be made on, for example, a single line in CSV data. If `MaxRecordCount` is `1` , the model container expects one record per request. A value of 2 or greater means that the model expects batch requests, which can reduce overhead and speed up the inferencing process. If this parameter is not provided, the explainer will tune the record count per request according to the model container's capacity at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-maxrecordcount
         */
        readonly maxRecordCount?: number;
        /**
         * A JMESPath expression used to extract the probability (or score) from the model container output if the model container is in JSON Lines format.
         *
         * *Example* : If the model container output of a single request is `'{"predicted_label":1,"probability":0.6}'` , then set `ProbabilityAttribute` to `'probability'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-probabilityattribute
         */
        readonly probabilityAttribute?: string;
        /**
         * A zero-based index used to extract a probability value (score) or list from model container output in CSV format.
         *
         * If this value is not provided, the entire model container output will be treated as a probability value (score) or list.
         *
         * *Example for a single class model:* If the model container output consists of a string-formatted prediction label followed by its probability: `'1,0.6'` , set `ProbabilityIndex` to `1` to select the probability value `0.6` .
         *
         * *Example for a multiclass model:* If the model container output consists of a string-formatted prediction label followed by its probability: `'"[\'cat\',\'dog\',\'fish\']","[0.1,0.6,0.3]"'` , set `ProbabilityIndex` to `1` to select the probability values `[0.1,0.6,0.3]` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-probabilityindex
         */
        readonly probabilityIndex?: number;
    }
    /**
     * The configuration for SHAP analysis using SageMaker Clarify Explainer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapconfig.html
     */
    interface ClarifyShapConfigProperty {
        /**
         * The number of samples to be used for analysis by the Kernal SHAP algorithm.
         *
         * > The number of samples determines the size of the synthetic dataset, which has an impact on latency of explainability requests. For more information, see the *Synthetic data* of [Configure and create an endpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-numberofsamples
         */
        readonly numberOfSamples?: number;
        /**
         * The starting value used to initialize the random number generator in the explainer.
         *
         * Provide a value for this parameter to obtain a deterministic SHAP result.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-seed
         */
        readonly seed?: number;
        /**
         * The configuration for the SHAP baseline of the Kernal SHAP algorithm.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-shapbaselineconfig
         */
        readonly shapBaselineConfig: CfnEndpointConfig.ClarifyShapBaselineConfigProperty | cdk.IResolvable;
        /**
         * A parameter that indicates if text features are treated as text and explanations are provided for individual units of text.
         *
         * Required for natural language processing (NLP) explainability only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-textconfig
         */
        readonly textConfig?: CfnEndpointConfig.ClarifyTextConfigProperty | cdk.IResolvable;
        /**
         * A Boolean toggle to indicate if you want to use the logit function (true) or log-odds units (false) for model predictions.
         *
         * Defaults to false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-uselogit
         */
        readonly useLogit?: boolean | cdk.IResolvable;
    }
    /**
     * A parameter used to configure the SageMaker Clarify explainer to treat text features as text so that explanations are provided for individual units of text.
     *
     * Required only for natural language processing (NLP) explainability.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifytextconfig.html
     */
    interface ClarifyTextConfigProperty {
        /**
         * The unit of granularity for the analysis of text features.
         *
         * For example, if the unit is `'token'` , then each token (like a word in English) of the text is treated as a feature. SHAP values are computed for each unit/feature.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifytextconfig.html#cfn-sagemaker-endpointconfig-clarifytextconfig-granularity
         */
        readonly granularity: string;
        /**
         * Specifies the language of the text features in [ISO 639-1](https://docs.aws.amazon.com/ https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) or [ISO 639-3](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/ISO_639-3) code of a supported language.
         *
         * > For a mix of multiple languages, use code `'xx'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifytextconfig.html#cfn-sagemaker-endpointconfig-clarifytextconfig-language
         */
        readonly language: string;
    }
    /**
     * The configuration for the [SHAP baseline](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-feature-attribute-shap-baselines.html) (also called the background or reference dataset) of the Kernal SHAP algorithm.
     *
     * > - The number of records in the baseline data determines the size of the synthetic dataset, which has an impact on latency of explainability requests. For more information, see the *Synthetic data* of [Configure and create an endpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html) .
     * > - `ShapBaseline` and `ShapBaselineUri` are mutually exclusive parameters. One or the either is required to configure a SHAP baseline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapbaselineconfig.html
     */
    interface ClarifyShapBaselineConfigProperty {
        /**
         * The MIME type of the baseline data.
         *
         * Choose from `'text/csv'` or `'application/jsonlines'` . Defaults to `'text/csv'` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapbaselineconfig.html#cfn-sagemaker-endpointconfig-clarifyshapbaselineconfig-mimetype
         */
        readonly mimeType?: string;
        /**
         * The inline SHAP baseline data in string format.
         *
         * `ShapBaseline` can have one or multiple records to be used as the baseline dataset. The format of the SHAP baseline file should be the same format as the training dataset. For example, if the training dataset is in CSV format and each record contains four features, and all features are numerical, then the format of the baseline data should also share these characteristics. For natural language processing (NLP) of text columns, the baseline value should be the value used to replace the unit of text specified by the `Granularity` of the `TextConfig` parameter. The size limit for `ShapBasline` is 4 KB. Use the `ShapBaselineUri` parameter if you want to provide more than 4 KB of baseline data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapbaselineconfig.html#cfn-sagemaker-endpointconfig-clarifyshapbaselineconfig-shapbaseline
         */
        readonly shapBaseline?: string;
        /**
         * The uniform resource identifier (URI) of the S3 bucket where the SHAP baseline file is stored.
         *
         * The format of the SHAP baseline file should be the same format as the format of the training dataset. For example, if the training dataset is in CSV format, and each record in the training dataset has four features, and all features are numerical, then the baseline file should also have this same format. Each record should contain only the features. If you are using a virtual private cloud (VPC), the `ShapBaselineUri` should be accessible to the VPC. For more information about setting up endpoints with Amazon Virtual Private Cloud, see [Give SageMaker access to Resources in your Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapbaselineconfig.html#cfn-sagemaker-endpointconfig-clarifyshapbaselineconfig-shapbaselineuri
         */
        readonly shapBaselineUri?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-vpcconfig.html#cfn-sagemaker-endpointconfig-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-vpcconfig.html#cfn-sagemaker-endpointconfig-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
}
/**
 * Properties for defining a `CfnEndpointConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html
 */
export interface CfnEndpointConfigProps {
    /**
     * Specifies configuration for how an endpoint performs asynchronous inference.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceconfig
     */
    readonly asyncInferenceConfig?: CfnEndpointConfig.AsyncInferenceConfigProperty | cdk.IResolvable;
    /**
     * Specifies how to capture endpoint data for model monitor.
     *
     * The data capture configuration applies to all production variants hosted at the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig
     */
    readonly dataCaptureConfig?: CfnEndpointConfig.DataCaptureConfigProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-enablenetworkisolation
     */
    readonly enableNetworkIsolation?: boolean | cdk.IResolvable;
    /**
     * The name of the endpoint configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-endpointconfigname
     */
    readonly endpointConfigName?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-executionrolearn
     */
    readonly executionRoleArn?: string;
    /**
     * A parameter to activate explainers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-explainerconfig
     */
    readonly explainerConfig?: CfnEndpointConfig.ExplainerConfigProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of an AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
     *
     * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
     * - Key ARN: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
     * - Alias name: `alias/ExampleAlias`
     * - Alias name ARN: `arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias`
     *
     * The KMS key policy must grant permission to the IAM role that you specify in your `CreateEndpoint` , `UpdateEndpoint` requests. For more information, refer to the AWS Key Management Service section [Using Key Policies in AWS KMS](https://docs.aws.amazon.com//kms/latest/developerguide/key-policies.html)
     *
     * > Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a `KmsKeyId` when using an instance type with local storage. If any of the models that you specify in the `ProductionVariants` parameter use nitro-based instances with local storage, do not specify a value for the `KmsKeyId` parameter. If you specify a value for `KmsKeyId` when using any nitro-based instances with local storage, the call to `CreateEndpointConfig` fails.
     * >
     * > For a list of instance types that support local instance storage, see [Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes) .
     * >
     * > For more information about local instance storage encryption, see [SSD Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * A list of `ProductionVariant` objects, one for each model that you want to host at this endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariants
     */
    readonly productionVariants: Array<cdk.IResolvable | CfnEndpointConfig.ProductionVariantProperty> | cdk.IResolvable;
    /**
     * Array of `ProductionVariant` objects.
     *
     * There is one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on `ProductionVariants` . If you use this field, you can only specify one variant for `ProductionVariants` and one variant for `ShadowProductionVariants` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-shadowproductionvariants
     */
    readonly shadowProductionVariants?: Array<cdk.IResolvable | CfnEndpointConfig.ProductionVariantProperty> | cdk.IResolvable;
    /**
     * A list of key-value pairs to apply to this resource.
     *
     * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnEndpointConfig.VpcConfigProperty;
}
/**
 * Create a new `FeatureGroup` .
 *
 * A `FeatureGroup` is a group of `Features` defined in the `FeatureStore` to describe a `Record` .
 *
 * The `FeatureGroup` defines the schema and features contained in the FeatureGroup. A `FeatureGroup` definition is composed of a list of `Features` , a `RecordIdentifierFeatureName` , an `EventTimeFeatureName` and configurations for its `OnlineStore` and `OfflineStore` . Check [AWS service quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) to see the `FeatureGroup` s quota for your AWS account.
 *
 * > You must include at least one of `OnlineStoreConfig` and `OfflineStoreConfig` to create a `FeatureGroup` .
 *
 * @cloudformationResource AWS::SageMaker::FeatureGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html
 */
export declare class CfnFeatureGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFeatureGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFeatureGroup;
    /**
     * The time a `FeatureGroup` was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * A `FeatureGroup` status.
     *
     * @cloudformationAttribute FeatureGroupStatus
     */
    readonly attrFeatureGroupStatus: string;
    /**
     * A free form description of a `FeatureGroup` .
     */
    description?: string;
    /**
     * The name of the feature that stores the `EventTime` of a Record in a `FeatureGroup` .
     */
    eventTimeFeatureName: string;
    /**
     * A list of `Feature` s. Each `Feature` must include a `FeatureName` and a `FeatureType` .
     */
    featureDefinitions: Array<CfnFeatureGroup.FeatureDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the `FeatureGroup` .
     */
    featureGroupName: string;
    /**
     * The configuration of an `OfflineStore` .
     */
    offlineStoreConfig?: any | cdk.IResolvable;
    /**
     * The configuration of an `OnlineStore` .
     */
    onlineStoreConfig?: any | cdk.IResolvable;
    /**
     * The name of the `Feature` whose value uniquely identifies a `Record` defined in the `FeatureGroup` `FeatureDefinitions` .
     */
    recordIdentifierFeatureName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM execution role used to create the feature group.
     */
    roleArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags used to define a `FeatureGroup` .
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Used to set feature group throughput configuration.
     */
    throughputConfig?: cdk.IResolvable | CfnFeatureGroup.ThroughputConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFeatureGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFeatureGroup {
    /**
     * The configuration of an `OfflineStore` .
     *
     * Provide an `OfflineStoreConfig` in a request to `CreateFeatureGroup` to create an `OfflineStore` .
     *
     * To encrypt an `OfflineStore` using at rest data encryption, specify AWS Key Management Service (KMS) key ID, or `KMSKeyId` , in `S3StorageConfig` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-offlinestoreconfig.html
     */
    interface OfflineStoreConfigProperty {
        /**
         * The meta data of the Glue table that is autogenerated when an `OfflineStore` is created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-offlinestoreconfig.html#cfn-sagemaker-featuregroup-offlinestoreconfig-datacatalogconfig
         */
        readonly dataCatalogConfig?: CfnFeatureGroup.DataCatalogConfigProperty | cdk.IResolvable;
        /**
         * Set to `True` to disable the automatic creation of an AWS Glue table when configuring an `OfflineStore` .
         *
         * If set to `False` , Feature Store will name the `OfflineStore` Glue table following [Athena's naming recommendations](https://docs.aws.amazon.com/athena/latest/ug/tables-databases-columns-names.html) .
         *
         * The default value is `False` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-offlinestoreconfig.html#cfn-sagemaker-featuregroup-offlinestoreconfig-disablegluetablecreation
         */
        readonly disableGlueTableCreation?: boolean | cdk.IResolvable;
        /**
         * The Amazon Simple Storage (Amazon S3) location of `OfflineStore` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-offlinestoreconfig.html#cfn-sagemaker-featuregroup-offlinestoreconfig-s3storageconfig
         */
        readonly s3StorageConfig: cdk.IResolvable | CfnFeatureGroup.S3StorageConfigProperty;
        /**
         * Format for the offline store table.
         *
         * Supported formats are Glue (Default) and [Apache Iceberg](https://docs.aws.amazon.com/https://iceberg.apache.org/) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-offlinestoreconfig.html#cfn-sagemaker-featuregroup-offlinestoreconfig-tableformat
         */
        readonly tableFormat?: string;
    }
    /**
     * The meta data of the Glue table which serves as data catalog for the `OfflineStore` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-datacatalogconfig.html
     */
    interface DataCatalogConfigProperty {
        /**
         * The name of the Glue table catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-datacatalogconfig.html#cfn-sagemaker-featuregroup-datacatalogconfig-catalog
         */
        readonly catalog: string;
        /**
         * The name of the Glue table database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-datacatalogconfig.html#cfn-sagemaker-featuregroup-datacatalogconfig-database
         */
        readonly database: string;
        /**
         * The name of the Glue table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-datacatalogconfig.html#cfn-sagemaker-featuregroup-datacatalogconfig-tablename
         */
        readonly tableName: string;
    }
    /**
     * The Amazon Simple Storage (Amazon S3) location and security configuration for `OfflineStore` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-s3storageconfig.html
     */
    interface S3StorageConfigProperty {
        /**
         * The AWS Key Management Service (KMS) key ARN of the key used to encrypt any objects written into the `OfflineStore` S3 location.
         *
         * The IAM `roleARN` that is passed as a parameter to `CreateFeatureGroup` must have below permissions to the `KmsKeyId` :
         *
         * - `"kms:GenerateDataKey"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-s3storageconfig.html#cfn-sagemaker-featuregroup-s3storageconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The S3 URI, or location in Amazon S3, of `OfflineStore` .
         *
         * S3 URIs have a format similar to the following: `s3://example-bucket/prefix/` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-s3storageconfig.html#cfn-sagemaker-featuregroup-s3storageconfig-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * A list of features.
     *
     * You must include `FeatureName` and `FeatureType` . Valid feature `FeatureType` s are `Integral` , `Fractional` and `String` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html
     */
    interface FeatureDefinitionProperty {
        /**
         * The name of a feature.
         *
         * The type must be a string. `FeatureName` cannot be any of the following: `is_deleted` , `write_time` , `api_invocation_time` .
         *
         * The name:
         *
         * - Must start with an alphanumeric character.
         * - Can only include alphanumeric characters, underscores, and hyphens. Spaces are not allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html#cfn-sagemaker-featuregroup-featuredefinition-featurename
         */
        readonly featureName: string;
        /**
         * The value type of a feature.
         *
         * Valid values are Integral, Fractional, or String.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html#cfn-sagemaker-featuregroup-featuredefinition-featuretype
         */
        readonly featureType: string;
    }
    /**
     * Use this to specify the AWS Key Management Service (KMS) Key ID, or `KMSKeyId` , for at rest data encryption.
     *
     * You can turn `OnlineStore` on or off by specifying the `EnableOnlineStore` flag at General Assembly.
     *
     * The default value is `False` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoreconfig.html
     */
    interface OnlineStoreConfigProperty {
        /**
         * Turn `OnlineStore` off by specifying `False` for the `EnableOnlineStore` flag.
         *
         * Turn `OnlineStore` on by specifying `True` for the `EnableOnlineStore` flag.
         *
         * The default value is `False` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoreconfig.html#cfn-sagemaker-featuregroup-onlinestoreconfig-enableonlinestore
         */
        readonly enableOnlineStore?: boolean | cdk.IResolvable;
        /**
         * Use to specify KMS Key ID ( `KMSKeyId` ) for at-rest encryption of your `OnlineStore` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoreconfig.html#cfn-sagemaker-featuregroup-onlinestoreconfig-securityconfig
         */
        readonly securityConfig?: cdk.IResolvable | CfnFeatureGroup.OnlineStoreSecurityConfigProperty;
        /**
         * Option for different tiers of low latency storage for real-time data retrieval.
         *
         * - `Standard` : A managed low latency data store for feature groups.
         * - `InMemory` : A managed data store for feature groups that supports very low latency retrieval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoreconfig.html#cfn-sagemaker-featuregroup-onlinestoreconfig-storagetype
         */
        readonly storageType?: string;
        /**
         * Time to live duration, where the record is hard deleted after the expiration time is reached;
         *
         * `ExpiresAt` = `EventTime` + `TtlDuration` . For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoreconfig.html#cfn-sagemaker-featuregroup-onlinestoreconfig-ttlduration
         */
        readonly ttlDuration?: cdk.IResolvable | CfnFeatureGroup.TtlDurationProperty;
    }
    /**
     * The security configuration for `OnlineStore` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoresecurityconfig.html
     */
    interface OnlineStoreSecurityConfigProperty {
        /**
         * The AWS Key Management Service (KMS) key ARN that SageMaker Feature Store uses to encrypt the Amazon S3 objects at rest using Amazon S3 server-side encryption.
         *
         * The caller (either user or IAM role) of `CreateFeatureGroup` must have below permissions to the `OnlineStore` `KmsKeyId` :
         *
         * - `"kms:Encrypt"`
         * - `"kms:Decrypt"`
         * - `"kms:DescribeKey"`
         * - `"kms:CreateGrant"`
         * - `"kms:RetireGrant"`
         * - `"kms:ReEncryptFrom"`
         * - `"kms:ReEncryptTo"`
         * - `"kms:GenerateDataKey"`
         * - `"kms:ListAliases"`
         * - `"kms:ListGrants"`
         * - `"kms:RevokeGrant"`
         *
         * The caller (either user or IAM role) to all DataPlane operations ( `PutRecord` , `GetRecord` , `DeleteRecord` ) must have the following permissions to the `KmsKeyId` :
         *
         * - `"kms:Decrypt"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-onlinestoresecurityconfig.html#cfn-sagemaker-featuregroup-onlinestoresecurityconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * Time to live duration, where the record is hard deleted after the expiration time is reached;
     *
     * `ExpiresAt` = `EventTime` + `TtlDuration` . For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-ttlduration.html
     */
    interface TtlDurationProperty {
        /**
         * `TtlDuration` time unit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-ttlduration.html#cfn-sagemaker-featuregroup-ttlduration-unit
         */
        readonly unit?: string;
        /**
         * `TtlDuration` time value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-ttlduration.html#cfn-sagemaker-featuregroup-ttlduration-value
         */
        readonly value?: number;
    }
    /**
     * Used to set feature group throughput configuration.
     *
     * There are two modes: `ON_DEMAND` and `PROVISIONED` . With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled.
     *
     * Note: `PROVISIONED` throughput mode is supported only for feature groups that are offline-only, or use the [`Standard`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType) tier online store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-throughputconfig.html
     */
    interface ThroughputConfigProperty {
        /**
         * For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.
         *
         * This field is not applicable for on-demand feature groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-throughputconfig.html#cfn-sagemaker-featuregroup-throughputconfig-provisionedreadcapacityunits
         */
        readonly provisionedReadCapacityUnits?: number;
        /**
         * For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.
         *
         * This field is not applicable for on-demand feature groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-throughputconfig.html#cfn-sagemaker-featuregroup-throughputconfig-provisionedwritecapacityunits
         */
        readonly provisionedWriteCapacityUnits?: number;
        /**
         * The mode used for your feature group throughput: `ON_DEMAND` or `PROVISIONED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-throughputconfig.html#cfn-sagemaker-featuregroup-throughputconfig-throughputmode
         */
        readonly throughputMode: string;
    }
}
/**
 * Properties for defining a `CfnFeatureGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html
 */
export interface CfnFeatureGroupProps {
    /**
     * A free form description of a `FeatureGroup` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-description
     */
    readonly description?: string;
    /**
     * The name of the feature that stores the `EventTime` of a Record in a `FeatureGroup` .
     *
     * A `EventTime` is point in time when a new event occurs that corresponds to the creation or update of a `Record` in `FeatureGroup` . All `Records` in the `FeatureGroup` must have a corresponding `EventTime` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-eventtimefeaturename
     */
    readonly eventTimeFeatureName: string;
    /**
     * A list of `Feature` s. Each `Feature` must include a `FeatureName` and a `FeatureType` .
     *
     * Valid `FeatureType` s are `Integral` , `Fractional` and `String` .
     *
     * `FeatureName` s cannot be any of the following: `is_deleted` , `write_time` , `api_invocation_time` .
     *
     * You can create up to 2,500 `FeatureDefinition` s per `FeatureGroup` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuredefinitions
     */
    readonly featureDefinitions: Array<CfnFeatureGroup.FeatureDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the `FeatureGroup` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuregroupname
     */
    readonly featureGroupName: string;
    /**
     * The configuration of an `OfflineStore` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-offlinestoreconfig
     */
    readonly offlineStoreConfig?: any | cdk.IResolvable;
    /**
     * The configuration of an `OnlineStore` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-onlinestoreconfig
     */
    readonly onlineStoreConfig?: any | cdk.IResolvable;
    /**
     * The name of the `Feature` whose value uniquely identifies a `Record` defined in the `FeatureGroup` `FeatureDefinitions` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-recordidentifierfeaturename
     */
    readonly recordIdentifierFeatureName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM execution role used to create the feature group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-rolearn
     */
    readonly roleArn?: string;
    /**
     * Tags used to define a `FeatureGroup` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Used to set feature group throughput configuration.
     *
     * There are two modes: `ON_DEMAND` and `PROVISIONED` . With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled.
     *
     * Note: `PROVISIONED` throughput mode is supported only for feature groups that are offline-only, or use the [`Standard`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType) tier online store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-throughputconfig
     */
    readonly throughputConfig?: cdk.IResolvable | CfnFeatureGroup.ThroughputConfigProperty;
}
/**
 * Creates a custom SageMaker AI image.
 *
 * A SageMaker AI image is a set of image versions. Each image version represents a container image stored in Amazon ECR. For more information, see [Bring your own SageMaker AI image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html) .
 *
 * @cloudformationResource AWS::SageMaker::Image
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html
 */
export declare class CfnImage extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnImage from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnImage;
    /**
     * The Amazon Resource Name (ARN) of the image.
     *
     * *Type* : String
     *
     * *Length Constraints* : Maximum length of 256.
     *
     * *Pattern* : `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$`
     *
     * @cloudformationAttribute ImageArn
     */
    readonly attrImageArn: string;
    /**
     * The description of the image.
     */
    imageDescription?: string;
    /**
     * The display name of the image.
     */
    imageDisplayName?: string;
    /**
     * The name of the Image. Must be unique by region in your account.
     */
    imageName: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.
     */
    imageRoleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnImageProps);
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
 * Properties for defining a `CfnImage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html
 */
export interface CfnImageProps {
    /**
     * The description of the image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-imagedescription
     */
    readonly imageDescription?: string;
    /**
     * The display name of the image.
     *
     * *Length Constraints* : Minimum length of 1. Maximum length of 128.
     *
     * *Pattern* : `^\S(.*\S)?$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-imagedisplayname
     */
    readonly imageDisplayName?: string;
    /**
     * The name of the Image. Must be unique by region in your account.
     *
     * *Length Constraints* : Minimum length of 1. Maximum length of 63.
     *
     * *Pattern* : `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-imagename
     */
    readonly imageName: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.
     *
     * *Length Constraints* : Minimum length of 20. Maximum length of 2048.
     *
     * *Pattern* : `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-imagerolearn
     */
    readonly imageRoleArn: string;
    /**
     * A list of key-value pairs to apply to this resource.
     *
     * *Array Members* : Minimum number of 0 items. Maximum number of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#cfn-sagemaker-image-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a version of the SageMaker image specified by `ImageName` .
 *
 * The version represents the Amazon Container Registry (ECR) container image specified by `BaseImage` .
 *
 * > You can use the `DependsOn` attribute to specify that the creation of a specific resource follows another. You can use it for the following use cases. For more information, see [`DependsOn` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) .
 * >
 * > 1. `DependsOn` can be used to establish a parent/child relationship between `ImageVersion` and `Image` where the `ImageVersion` `DependsOn` the `Image` .
 * >
 * > 2. `DependsOn` can be used to establish order among `ImageVersion` s within the same `Image` namespace. For example, if ImageVersionB `DependsOn` ImageVersionA and both share the same parent `Image` , then ImageVersionA is version N and ImageVersionB is N+1.
 *
 * @cloudformationResource AWS::SageMaker::ImageVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html
 */
export declare class CfnImageVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnImageVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnImageVersion;
    /**
     * The URI of the container image version referenced by ImageVersion.
     *
     * @cloudformationAttribute ContainerImage
     */
    readonly attrContainerImage: string;
    /**
     * The Amazon Resource Name (ARN) of the parent Image.
     *
     * @cloudformationAttribute ImageArn
     */
    readonly attrImageArn: string;
    /**
     * The Amazon Resource Name (ARN) of the image version.
     *
     * *Type* : String
     *
     * *Length Constraints* : Maximum length of 256.
     *
     * *Pattern* : `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image-version/[a-z0-9]([-.]?[a-z0-9])* /[0-9]+$`
     *
     * @cloudformationAttribute ImageVersionArn
     */
    readonly attrImageVersionArn: string;
    /**
     * The version of the image.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: number;
    /**
     * The alias of the image version.
     */
    alias?: string;
    /**
     * List of aliases for the image version.
     */
    aliases?: Array<string>;
    /**
     * The container image that the SageMaker image version is based on.
     */
    baseImage: string;
    /**
     * Indicates Horovod compatibility.
     */
    horovod?: boolean | cdk.IResolvable;
    /**
     * The name of the parent image.
     */
    imageName: string;
    /**
     * Indicates SageMaker job type compatibility.
     */
    jobType?: string;
    /**
     * The machine learning framework vended in the image version.
     */
    mlFramework?: string;
    /**
     * Indicates CPU or GPU compatibility.
     */
    processor?: string;
    /**
     * The supported programming language and its version.
     */
    programmingLang?: string;
    /**
     * The maintainer description of the image version.
     */
    releaseNotes?: string;
    /**
     * The availability of the image version specified by the maintainer.
     */
    vendorGuidance?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnImageVersionProps);
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
 * Properties for defining a `CfnImageVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html
 */
export interface CfnImageVersionProps {
    /**
     * The alias of the image version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-alias
     */
    readonly alias?: string;
    /**
     * List of aliases for the image version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-aliases
     */
    readonly aliases?: Array<string>;
    /**
     * The container image that the SageMaker image version is based on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-baseimage
     */
    readonly baseImage: string;
    /**
     * Indicates Horovod compatibility.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-horovod
     */
    readonly horovod?: boolean | cdk.IResolvable;
    /**
     * The name of the parent image.
     *
     * *Length Constraints* : Minimum length of 1. Maximum length of 63.
     *
     * *Pattern* : `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-imagename
     */
    readonly imageName: string;
    /**
     * Indicates SageMaker job type compatibility.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-jobtype
     */
    readonly jobType?: string;
    /**
     * The machine learning framework vended in the image version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-mlframework
     */
    readonly mlFramework?: string;
    /**
     * Indicates CPU or GPU compatibility.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-processor
     */
    readonly processor?: string;
    /**
     * The supported programming language and its version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-programminglang
     */
    readonly programmingLang?: string;
    /**
     * The maintainer description of the image version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-releasenotes
     */
    readonly releaseNotes?: string;
    /**
     * The availability of the image version specified by the maintainer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#cfn-sagemaker-imageversion-vendorguidance
     */
    readonly vendorGuidance?: string;
}
/**
 * Creates an inference experiment using the configurations specified in the request.
 *
 * Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For more information about inference experiments, see [Shadow tests](https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html) .
 *
 * Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration.
 *
 * While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants. For more information, see [View, monitor, and edit shadow tests](https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-view-monitor-edit.html) .
 *
 * @cloudformationResource AWS::SageMaker::InferenceExperiment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html
 */
export declare class CfnInferenceExperiment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInferenceExperiment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInferenceExperiment;
    /**
     * The ARN for your inference experiment.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The timestamp at which the inference experiment was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The metadata of the endpoint on which the inference experiment ran.
     *
     * @cloudformationAttribute EndpointMetadata
     */
    readonly attrEndpointMetadata: cdk.IResolvable;
    /**
     * @cloudformationAttribute EndpointMetadata.EndpointConfigName
     */
    readonly attrEndpointMetadataEndpointConfigName: string;
    /**
     * @cloudformationAttribute EndpointMetadata.EndpointName
     */
    readonly attrEndpointMetadataEndpointName: string;
    /**
     * @cloudformationAttribute EndpointMetadata.EndpointStatus
     */
    readonly attrEndpointMetadataEndpointStatus: string;
    /**
     * The timestamp at which you last modified the inference experiment.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: string;
    /**
     * The status of the inference experiment. The following are the possible statuses for an inference experiment:
     *
     * - `Creating` - Amazon SageMaker is creating your experiment.
     * - `Created` - Amazon SageMaker has finished the creation of your experiment and will begin the experiment at the scheduled time.
     * - `Updating` - When you make changes to your experiment, your experiment shows as updating.
     * - `Starting` - Amazon SageMaker is beginning your experiment.
     * - `Running` - Your experiment is in progress.
     * - `Stopping` - Amazon SageMaker is stopping your experiment.
     * - `Completed` - Your experiment has completed.
     * - `Cancelled` - When you conclude your experiment early using the [StopInferenceExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopInferenceExperiment.html) API, or if any operation fails with an unexpected error, it shows as cancelled.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon S3 location and configuration for storing inference request and response data.
     */
    dataStorageConfig?: CfnInferenceExperiment.DataStorageConfigProperty | cdk.IResolvable;
    /**
     * The description of the inference experiment.
     */
    description?: string;
    /**
     * The desired state of the experiment after stopping. The possible states are the following:.
     */
    desiredState?: string;
    /**
     * The name of the endpoint.
     */
    endpointName: string;
    /**
     * The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
     */
    kmsKey?: string;
    /**
     * An array of `ModelVariantConfigSummary` objects.
     */
    modelVariants: Array<cdk.IResolvable | CfnInferenceExperiment.ModelVariantConfigProperty> | cdk.IResolvable;
    /**
     * The name of the inference experiment.
     */
    name: string;
    /**
     * The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
     */
    roleArn: string;
    /**
     * The duration for which the inference experiment ran or will run.
     */
    schedule?: CfnInferenceExperiment.InferenceExperimentScheduleProperty | cdk.IResolvable;
    /**
     * The configuration of `ShadowMode` inference experiment type, which shows the production variant that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the inference requests.
     */
    shadowModeConfig?: cdk.IResolvable | CfnInferenceExperiment.ShadowModeConfigProperty;
    /**
     * The error message for the inference experiment status result.
     */
    statusReason?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of the inference experiment.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInferenceExperimentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInferenceExperiment {
    /**
     * The Amazon S3 location and configuration for storing inference request and response data.
     *
     * This is an optional parameter that you can use for data capture. For more information, see [Capture data](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-datastorageconfig.html
     */
    interface DataStorageConfigProperty {
        /**
         * Configuration specifying how to treat different headers.
         *
         * If no headers are specified SageMaker will by default base64 encode when capturing the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-datastorageconfig.html#cfn-sagemaker-inferenceexperiment-datastorageconfig-contenttype
         */
        readonly contentType?: CfnInferenceExperiment.CaptureContentTypeHeaderProperty | cdk.IResolvable;
        /**
         * The Amazon S3 bucket where the inference request and response data is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-datastorageconfig.html#cfn-sagemaker-inferenceexperiment-datastorageconfig-destination
         */
        readonly destination: string;
        /**
         * The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-datastorageconfig.html#cfn-sagemaker-inferenceexperiment-datastorageconfig-kmskey
         */
        readonly kmsKey?: string;
    }
    /**
     * Configuration specifying how to treat different headers.
     *
     * If no headers are specified Amazon SageMaker AI will by default base64 encode when capturing the data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-capturecontenttypeheader.html
     */
    interface CaptureContentTypeHeaderProperty {
        /**
         * The list of all content type headers that Amazon SageMaker AI will treat as CSV and capture accordingly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-capturecontenttypeheader.html#cfn-sagemaker-inferenceexperiment-capturecontenttypeheader-csvcontenttypes
         */
        readonly csvContentTypes?: Array<string>;
        /**
         * The list of all content type headers that SageMaker AI will treat as JSON and capture accordingly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-capturecontenttypeheader.html#cfn-sagemaker-inferenceexperiment-capturecontenttypeheader-jsoncontenttypes
         */
        readonly jsonContentTypes?: Array<string>;
    }
    /**
     * Contains information about the deployment options of a model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelvariantconfig.html
     */
    interface ModelVariantConfigProperty {
        /**
         * The configuration for the infrastructure that the model will be deployed to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelvariantconfig.html#cfn-sagemaker-inferenceexperiment-modelvariantconfig-infrastructureconfig
         */
        readonly infrastructureConfig: cdk.IResolvable | CfnInferenceExperiment.ModelInfrastructureConfigProperty;
        /**
         * The name of the Amazon SageMaker Model entity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelvariantconfig.html#cfn-sagemaker-inferenceexperiment-modelvariantconfig-modelname
         */
        readonly modelName: string;
        /**
         * The name of the variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelvariantconfig.html#cfn-sagemaker-inferenceexperiment-modelvariantconfig-variantname
         */
        readonly variantName: string;
    }
    /**
     * The configuration for the infrastructure that the model will be deployed to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelinfrastructureconfig.html
     */
    interface ModelInfrastructureConfigProperty {
        /**
         * The inference option to which to deploy your model. Possible values are the following:.
         *
         * - `RealTime` : Deploy to real-time inference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelinfrastructureconfig.html#cfn-sagemaker-inferenceexperiment-modelinfrastructureconfig-infrastructuretype
         */
        readonly infrastructureType: string;
        /**
         * The infrastructure configuration for deploying the model to real-time inference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelinfrastructureconfig.html#cfn-sagemaker-inferenceexperiment-modelinfrastructureconfig-realtimeinferenceconfig
         */
        readonly realTimeInferenceConfig: cdk.IResolvable | CfnInferenceExperiment.RealTimeInferenceConfigProperty;
    }
    /**
     * The infrastructure configuration for deploying the model to a real-time inference endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-realtimeinferenceconfig.html
     */
    interface RealTimeInferenceConfigProperty {
        /**
         * The number of instances of the type specified by `InstanceType` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-realtimeinferenceconfig.html#cfn-sagemaker-inferenceexperiment-realtimeinferenceconfig-instancecount
         */
        readonly instanceCount: number;
        /**
         * The instance type the model is deployed to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-realtimeinferenceconfig.html#cfn-sagemaker-inferenceexperiment-realtimeinferenceconfig-instancetype
         */
        readonly instanceType: string;
    }
    /**
     * The configuration of `ShadowMode` inference experiment type, which specifies a production variant to take all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests.
     *
     * For the shadow variant it also specifies the percentage of requests that Amazon SageMaker replicates.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig.html
     */
    interface ShadowModeConfigProperty {
        /**
         * List of shadow variant configurations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig.html#cfn-sagemaker-inferenceexperiment-shadowmodeconfig-shadowmodelvariants
         */
        readonly shadowModelVariants: Array<cdk.IResolvable | CfnInferenceExperiment.ShadowModelVariantConfigProperty> | cdk.IResolvable;
        /**
         * The name of the production variant, which takes all the inference requests.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig.html#cfn-sagemaker-inferenceexperiment-shadowmodeconfig-sourcemodelvariantname
         */
        readonly sourceModelVariantName: string;
    }
    /**
     * The name and sampling percentage of a shadow variant.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodelvariantconfig.html
     */
    interface ShadowModelVariantConfigProperty {
        /**
         * The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodelvariantconfig.html#cfn-sagemaker-inferenceexperiment-shadowmodelvariantconfig-samplingpercentage
         */
        readonly samplingPercentage: number;
        /**
         * The name of the shadow variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodelvariantconfig.html#cfn-sagemaker-inferenceexperiment-shadowmodelvariantconfig-shadowmodelvariantname
         */
        readonly shadowModelVariantName: string;
    }
    /**
     * The start and end times of an inference experiment.
     *
     * The maximum duration that you can set for an inference experiment is 30 days.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-inferenceexperimentschedule.html
     */
    interface InferenceExperimentScheduleProperty {
        /**
         * The timestamp at which the inference experiment ended or will end.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-inferenceexperimentschedule.html#cfn-sagemaker-inferenceexperiment-inferenceexperimentschedule-endtime
         */
        readonly endTime?: string;
        /**
         * The timestamp at which the inference experiment started or will start.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-inferenceexperimentschedule.html#cfn-sagemaker-inferenceexperiment-inferenceexperimentschedule-starttime
         */
        readonly startTime?: string;
    }
    /**
     * The metadata of the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html
     */
    interface EndpointMetadataProperty {
        /**
         * The name of the endpoint configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html#cfn-sagemaker-inferenceexperiment-endpointmetadata-endpointconfigname
         */
        readonly endpointConfigName?: string;
        /**
         * The name of the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html#cfn-sagemaker-inferenceexperiment-endpointmetadata-endpointname
         */
        readonly endpointName: string;
        /**
         * The status of the endpoint.
         *
         * For possible values of the status of an endpoint, see [](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html#cfn-sagemaker-inferenceexperiment-endpointmetadata-endpointstatus) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html#cfn-sagemaker-inferenceexperiment-endpointmetadata-endpointstatus
         */
        readonly endpointStatus?: string;
    }
}
/**
 * Properties for defining a `CfnInferenceExperiment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html
 */
export interface CfnInferenceExperimentProps {
    /**
     * The Amazon S3 location and configuration for storing inference request and response data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-datastorageconfig
     */
    readonly dataStorageConfig?: CfnInferenceExperiment.DataStorageConfigProperty | cdk.IResolvable;
    /**
     * The description of the inference experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-description
     */
    readonly description?: string;
    /**
     * The desired state of the experiment after stopping. The possible states are the following:.
     *
     * - `Completed` : The experiment completed successfully
     * - `Cancelled` : The experiment was canceled
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-desiredstate
     */
    readonly desiredState?: string;
    /**
     * The name of the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-endpointname
     */
    readonly endpointName: string;
    /**
     * The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-kmskey
     */
    readonly kmsKey?: string;
    /**
     * An array of `ModelVariantConfigSummary` objects.
     *
     * There is one for each variant in the inference experiment. Each `ModelVariantConfigSummary` object in the array describes the infrastructure configuration for deploying the corresponding variant.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-modelvariants
     */
    readonly modelVariants: Array<cdk.IResolvable | CfnInferenceExperiment.ModelVariantConfigProperty> | cdk.IResolvable;
    /**
     * The name of the inference experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-name
     */
    readonly name: string;
    /**
     * The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-rolearn
     */
    readonly roleArn: string;
    /**
     * The duration for which the inference experiment ran or will run.
     *
     * The maximum duration that you can set for an inference experiment is 30 days.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-schedule
     */
    readonly schedule?: CfnInferenceExperiment.InferenceExperimentScheduleProperty | cdk.IResolvable;
    /**
     * The configuration of `ShadowMode` inference experiment type, which shows the production variant that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the inference requests.
     *
     * For the shadow variant it also shows the percentage of requests that Amazon SageMaker replicates.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-shadowmodeconfig
     */
    readonly shadowModeConfig?: cdk.IResolvable | CfnInferenceExperiment.ShadowModeConfigProperty;
    /**
     * The error message for the inference experiment status result.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-statusreason
     */
    readonly statusReason?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of the inference experiment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#cfn-sagemaker-inferenceexperiment-type
     */
    readonly type: string;
}
/**
 * The `AWS::SageMaker::Model` resource to create a model to host at an Amazon SageMaker endpoint.
 *
 * For more information, see [Deploying a Model on Amazon SageMaker Hosting Services](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-hosting.html) in the *Amazon SageMaker Developer Guide* .
 *
 * @cloudformationResource AWS::SageMaker::Model
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html
 */
export declare class CfnModel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModel;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the model, such as `MyModel` .
     *
     * @cloudformationAttribute ModelName
     */
    readonly attrModelName: string;
    /**
     * Specifies the containers in the inference pipeline.
     */
    containers?: Array<CfnModel.ContainerDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Isolates the model container.
     */
    enableNetworkIsolation?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs.
     */
    executionRoleArn?: string;
    /**
     * Specifies details of how containers in a multi-container endpoint are called.
     */
    inferenceExecutionConfig?: CfnModel.InferenceExecutionConfigProperty | cdk.IResolvable;
    /**
     * The name of the new model.
     */
    modelName?: string;
    /**
     * The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions.
     */
    primaryContainer?: CfnModel.ContainerDefinitionProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/dg/API_VpcConfig.html) object that specifies the VPC that you want your model to connect to. Control access to and from your model container by configuring the VPC. `VpcConfig` is used in hosting services and in batch transform. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Data in Batch Transform Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html) .
     */
    vpcConfig?: cdk.IResolvable | CfnModel.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnModelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnModel {
    /**
     * Describes the container, as part of model definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html
     */
    interface ContainerDefinitionProperty {
        /**
         * This parameter is ignored for models that contain only a `PrimaryContainer` .
         *
         * When a `ContainerDefinition` is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html) . If you don't specify a value for this parameter for a `ContainerDefinition` that is part of an inference pipeline, a unique name is automatically assigned based on the position of the `ContainerDefinition` in the pipeline. If you specify a value for the `ContainerHostName` for any `ContainerDefinition` that is part of an inference pipeline, you must specify a value for the `ContainerHostName` parameter of every `ContainerDefinition` in that pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-containerhostname
         */
        readonly containerHostname?: string;
        /**
         * The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.
         *
         * The maximum length of each key and value in the `Environment` map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a `CreateModel` request, then the maximum length of all of their maps, combined, is also 32 KB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-environment
         */
        readonly environment?: any | cdk.IResolvable;
        /**
         * The path where inference code is stored.
         *
         * This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both `registry/repository[:tag]` and `registry/repository[@digest]` image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html) .
         *
         * > The model artifacts in an Amazon S3 bucket and the Docker image for inference container in Amazon EC2 Container Registry must be in the same region as the model or endpoint you are creating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-image
         */
        readonly image?: string;
        /**
         * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
         *
         * For information about storing containers in a private Docker registry, see [Use a Private Docker Registry for Real-Time Inference Containers](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html) .
         *
         * > The model artifacts in an Amazon S3 bucket and the Docker image for inference container in Amazon EC2 Container Registry must be in the same region as the model or endpoint you are creating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-imageconfig
         */
        readonly imageConfig?: CfnModel.ImageConfigProperty | cdk.IResolvable;
        /**
         * The inference specification name in the model package version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-inferencespecificationname
         */
        readonly inferenceSpecificationName?: string;
        /**
         * Whether the container hosts a single model or multiple models.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-mode
         */
        readonly mode?: string;
        /**
         * Specifies the location of ML model data to deploy.
         *
         * > Currently you cannot use `ModelDataSource` in conjunction with SageMaker batch transform, SageMaker serverless endpoints, SageMaker multi-model endpoints, and SageMaker Marketplace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-modeldatasource
         */
        readonly modelDataSource?: cdk.IResolvable | CfnModel.ModelDataSourceProperty;
        /**
         * The S3 path where the model artifacts, which result from model training, are stored.
         *
         * This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html) .
         *
         * > The model artifacts must be in an S3 bucket that is in the same region as the model or endpoint you are creating.
         *
         * If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the *AWS Identity and Access Management User Guide* .
         *
         * > If you use a built-in algorithm to create a model, SageMaker requires that you provide a S3 path to the model artifacts in `ModelDataUrl` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-modeldataurl
         */
        readonly modelDataUrl?: string;
        /**
         * The name or Amazon Resource Name (ARN) of the model package to use to create the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-modelpackagename
         */
        readonly modelPackageName?: string;
        /**
         * Specifies additional configuration for multi-model endpoints.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html#cfn-sagemaker-model-containerdefinition-multimodelconfig
         */
        readonly multiModelConfig?: cdk.IResolvable | CfnModel.MultiModelConfigProperty;
    }
    /**
     * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-imageconfig.html
     */
    interface ImageConfigProperty {
        /**
         * Set this to one of the following values:.
         *
         * - `Platform` - The model image is hosted in Amazon ECR.
         * - `Vpc` - The model image is hosted in a private Docker registry in your VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-imageconfig.html#cfn-sagemaker-model-imageconfig-repositoryaccessmode
         */
        readonly repositoryAccessMode: string;
        /**
         * (Optional) Specifies an authentication configuration for the private docker registry where your model image is hosted.
         *
         * Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field, and the private Docker registry where the model image is hosted requires authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-imageconfig.html#cfn-sagemaker-model-imageconfig-repositoryauthconfig
         */
        readonly repositoryAuthConfig?: cdk.IResolvable | CfnModel.RepositoryAuthConfigProperty;
    }
    /**
     * Specifies an authentication configuration for the private docker registry where your model image is hosted.
     *
     * Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-repositoryauthconfig.html
     */
    interface RepositoryAuthConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted.
         *
         * For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the *AWS Lambda Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-repositoryauthconfig.html#cfn-sagemaker-model-repositoryauthconfig-repositorycredentialsproviderarn
         */
        readonly repositoryCredentialsProviderArn: string;
    }
    /**
     * Specifies additional configuration for hosting multi-model endpoints.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-multimodelconfig.html
     */
    interface MultiModelConfigProperty {
        /**
         * Whether to cache models for a multi-model endpoint.
         *
         * By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to Disabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-multimodelconfig.html#cfn-sagemaker-model-multimodelconfig-modelcachesetting
         */
        readonly modelCacheSetting?: string;
    }
    /**
     * Specifies the location of ML model data to deploy.
     *
     * If specified, you must specify one and only one of the available data sources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-modeldatasource.html
     */
    interface ModelDataSourceProperty {
        /**
         * Specifies the S3 location of ML model data to deploy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-modeldatasource.html#cfn-sagemaker-model-modeldatasource-s3datasource
         */
        readonly s3DataSource: cdk.IResolvable | CfnModel.S3DataSourceProperty;
    }
    /**
     * Describes the S3 data source.
     *
     * Your input bucket must be in the same AWS region as your training job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-s3datasource.html
     */
    interface S3DataSourceProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-s3datasource.html#cfn-sagemaker-model-s3datasource-compressiontype
         */
        readonly compressionType: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-s3datasource.html#cfn-sagemaker-model-s3datasource-hubaccessconfig
         */
        readonly hubAccessConfig?: CfnModel.HubAccessConfigProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-s3datasource.html#cfn-sagemaker-model-s3datasource-modelaccessconfig
         */
        readonly modelAccessConfig?: cdk.IResolvable | CfnModel.ModelAccessConfigProperty;
        /**
         * If you choose `S3Prefix` , `S3Uri` identifies a key name prefix.
         *
         * SageMaker uses all objects that match the specified key name prefix for model training.
         *
         * If you choose `ManifestFile` , `S3Uri` identifies an object that is a manifest file containing a list of object keys that you want SageMaker to use for model training.
         *
         * If you choose `AugmentedManifestFile` , `S3Uri` identifies an object that is an augmented manifest file in JSON lines format. This file contains the data you want to use for model training. `AugmentedManifestFile` can only be used if the Channel's input mode is `Pipe` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-s3datasource.html#cfn-sagemaker-model-s3datasource-s3datatype
         */
        readonly s3DataType: string;
        /**
         * Depending on the value specified for the `S3DataType` , identifies either a key name prefix or a manifest.
         *
         * For example:
         *
         * - A key name prefix might look like this: `s3://bucketname/exampleprefix/`
         * - A manifest might look like this: `s3://bucketname/example.manifest`
         *
         * A manifest is an S3 object which is a JSON file consisting of an array of elements. The first element is a prefix which is followed by one or more suffixes. SageMaker appends the suffix elements to the prefix to get a full set of `S3Uri` . Note that the prefix must be a valid non-empty `S3Uri` that precludes users from specifying a manifest whose individual `S3Uri` is sourced from different S3 buckets.
         *
         * The following code example shows a valid manifest format:
         *
         * `[ {"prefix": "s3://customer_bucket/some/prefix/"},`
         *
         * `"relative/path/to/custdata-1",`
         *
         * `"relative/path/custdata-2",`
         *
         * `...`
         *
         * `"relative/path/custdata-N"`
         *
         * `]`
         *
         * This JSON is equivalent to the following `S3Uri` list:
         *
         * `s3://customer_bucket/some/prefix/relative/path/to/custdata-1`
         *
         * `s3://customer_bucket/some/prefix/relative/path/custdata-2`
         *
         * `...`
         *
         * `s3://customer_bucket/some/prefix/relative/path/custdata-N`
         *
         * The complete set of `S3Uri` in this manifest is the input data for the channel for this data source. The object that each `S3Uri` points to must be readable by the IAM role that SageMaker uses to perform tasks on your behalf.
         *
         * Your input bucket must be located in same AWS region as your training job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-s3datasource.html#cfn-sagemaker-model-s3datasource-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * The access configuration file to control access to the ML model.
     *
     * You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig` .
     *
     * - If you are a Jumpstart user, see the [End-user license agreements](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula) section for more details on accepting the EULA.
     * - If you are an AutoML user, see the *Optional Parameters* section of *Create an AutoML job to fine-tune text generation models using the API* for details on [How to set the EULA acceptance when fine-tuning a model using the AutoML API](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-modelaccessconfig.html
     */
    interface ModelAccessConfigProperty {
        /**
         * Specifies agreement to the model end-user license agreement (EULA).
         *
         * The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-modelaccessconfig.html#cfn-sagemaker-model-modelaccessconfig-accepteula
         */
        readonly acceptEula: boolean | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-hubaccessconfig.html
     */
    interface HubAccessConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-hubaccessconfig.html#cfn-sagemaker-model-hubaccessconfig-hubcontentarn
         */
        readonly hubContentArn: string;
    }
    /**
     * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
     *
     * You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The VPC security group IDs, in the form `sg-xxxxxxxx` .
         *
         * Specify the security groups for the VPC that is specified in the `Subnets` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-vpcconfig.html#cfn-sagemaker-model-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The ID of the subnets in the VPC to which you want to connect your training job or model.
         *
         * For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-vpcconfig.html#cfn-sagemaker-model-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * Specifies details about how containers in a multi-container endpoint are run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-inferenceexecutionconfig.html
     */
    interface InferenceExecutionConfigProperty {
        /**
         * How containers in a multi-container are run. The following values are valid.
         *
         * - `Serial` - Containers run as a serial pipeline.
         * - `Direct` - Only the individual container that you specify is run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-inferenceexecutionconfig.html#cfn-sagemaker-model-inferenceexecutionconfig-mode
         */
        readonly mode: string;
    }
}
/**
 * Properties for defining a `CfnModel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html
 */
export interface CfnModelProps {
    /**
     * Specifies the containers in the inference pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#cfn-sagemaker-model-containers
     */
    readonly containers?: Array<CfnModel.ContainerDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Isolates the model container.
     *
     * No inbound or outbound network calls can be made to or from the model container.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#cfn-sagemaker-model-enablenetworkisolation
     */
    readonly enableNetworkIsolation?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs.
     *
     * Deploying on ML compute instances is part of model hosting. For more information, see [SageMaker Roles](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html) .
     *
     * > To be able to pass this role to SageMaker, the caller of this API must have the `iam:PassRole` permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#cfn-sagemaker-model-executionrolearn
     */
    readonly executionRoleArn?: string;
    /**
     * Specifies details of how containers in a multi-container endpoint are called.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#cfn-sagemaker-model-inferenceexecutionconfig
     */
    readonly inferenceExecutionConfig?: CfnModel.InferenceExecutionConfigProperty | cdk.IResolvable;
    /**
     * The name of the new model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#cfn-sagemaker-model-modelname
     */
    readonly modelName?: string;
    /**
     * The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#cfn-sagemaker-model-primarycontainer
     */
    readonly primaryContainer?: CfnModel.ContainerDefinitionProperty | cdk.IResolvable;
    /**
     * A list of key-value pairs to apply to this resource.
     *
     * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the *AWS Billing and Cost Management User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#cfn-sagemaker-model-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/dg/API_VpcConfig.html) object that specifies the VPC that you want your model to connect to. Control access to and from your model container by configuring the VPC. `VpcConfig` is used in hosting services and in batch transform. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Data in Batch Transform Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#cfn-sagemaker-model-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnModel.VpcConfigProperty;
}
/**
 * Creates the definition for a model bias job.
 *
 * @cloudformationResource AWS::SageMaker::ModelBiasJobDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html
 */
export declare class CfnModelBiasJobDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModelBiasJobDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModelBiasJobDefinition;
    /**
     * The time when the job definition was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The Amazon Resource Name (ARN) of the job definition.
     *
     * @cloudformationAttribute JobDefinitionArn
     */
    readonly attrJobDefinitionArn: string;
    /**
     * The name of the endpoint used to run the monitoring job.
     */
    endpointName?: string;
    /**
     * The name of the bias job definition.
     */
    jobDefinitionName?: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     */
    jobResources: cdk.IResolvable | CfnModelBiasJobDefinition.MonitoringResourcesProperty;
    /**
     * Configures the model bias job to run a specified Docker container image.
     */
    modelBiasAppSpecification: cdk.IResolvable | CfnModelBiasJobDefinition.ModelBiasAppSpecificationProperty;
    /**
     * The baseline configuration for a model bias job.
     */
    modelBiasBaselineConfig?: cdk.IResolvable | CfnModelBiasJobDefinition.ModelBiasBaselineConfigProperty;
    /**
     * Inputs for the model bias job.
     */
    modelBiasJobInput: cdk.IResolvable | CfnModelBiasJobDefinition.ModelBiasJobInputProperty;
    /**
     * The output configuration for monitoring jobs.
     */
    modelBiasJobOutputConfig: cdk.IResolvable | CfnModelBiasJobDefinition.MonitoringOutputConfigProperty;
    /**
     * Networking options for a model bias job.
     */
    networkConfig?: cdk.IResolvable | CfnModelBiasJobDefinition.NetworkConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     */
    roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     */
    stoppingCondition?: cdk.IResolvable | CfnModelBiasJobDefinition.StoppingConditionProperty;
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
    constructor(scope: constructs.Construct, id: string, props: CfnModelBiasJobDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnModelBiasJobDefinition {
    /**
     * Inputs for the model bias job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasjobinput.html
     */
    interface ModelBiasJobInputProperty {
        /**
         * Input object for the batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasjobinput.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasjobinput-batchtransforminput
         */
        readonly batchTransformInput?: CfnModelBiasJobDefinition.BatchTransformInputProperty | cdk.IResolvable;
        /**
         * Input object for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasjobinput.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasjobinput-endpointinput
         */
        readonly endpointInput?: CfnModelBiasJobDefinition.EndpointInputProperty | cdk.IResolvable;
        /**
         * Location of ground truth labels to use in model bias job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasjobinput.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasjobinput-groundtruths3input
         */
        readonly groundTruthS3Input: cdk.IResolvable | CfnModelBiasJobDefinition.MonitoringGroundTruthS3InputProperty;
    }
    /**
     * The ground truth labels for the dataset used for the monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringgroundtruths3input.html
     */
    interface MonitoringGroundTruthS3InputProperty {
        /**
         * The address of the Amazon S3 location of the ground truth labels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringgroundtruths3input.html#cfn-sagemaker-modelbiasjobdefinition-monitoringgroundtruths3input-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * Input object for the batch transform job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html
     */
    interface BatchTransformInputProperty {
        /**
         * The Amazon S3 location being used to capture the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-datacaptureddestinations3uri
         */
        readonly dataCapturedDestinationS3Uri: string;
        /**
         * The dataset format for your batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-datasetformat
         */
        readonly datasetFormat: CfnModelBiasJobDefinition.DatasetFormatProperty | cdk.IResolvable;
        /**
         * If specified, monitoring jobs subtract this time from the end time.
         *
         * For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-endtimeoffset
         */
        readonly endTimeOffset?: string;
        /**
         * The attributes of the input data that are the input features.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-featuresattribute
         */
        readonly featuresAttribute?: string;
        /**
         * The attribute of the input data that represents the ground truth label.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-inferenceattribute
         */
        readonly inferenceAttribute?: string;
        /**
         * Path to the filesystem where the batch transform data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-localpath
         */
        readonly localPath: string;
        /**
         * In a classification problem, the attribute that represents the class probability.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-probabilityattribute
         */
        readonly probabilityAttribute?: string;
        /**
         * The threshold for the class probability to be evaluated as a positive result.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-probabilitythresholdattribute
         */
        readonly probabilityThresholdAttribute?: number;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-s3inputmode
         */
        readonly s3InputMode?: string;
        /**
         * If specified, monitoring jobs substract this time from the start time.
         *
         * For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-batchtransforminput.html#cfn-sagemaker-modelbiasjobdefinition-batchtransforminput-starttimeoffset
         */
        readonly startTimeOffset?: string;
    }
    /**
     * The dataset format of the data to monitor.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-datasetformat.html
     */
    interface DatasetFormatProperty {
        /**
         * The CSV format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-datasetformat.html#cfn-sagemaker-modelbiasjobdefinition-datasetformat-csv
         */
        readonly csv?: CfnModelBiasJobDefinition.CsvProperty | cdk.IResolvable;
        /**
         * The Json format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-datasetformat.html#cfn-sagemaker-modelbiasjobdefinition-datasetformat-json
         */
        readonly json?: cdk.IResolvable | CfnModelBiasJobDefinition.JsonProperty;
        /**
         * A flag indicate if the dataset format is Parquet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-datasetformat.html#cfn-sagemaker-modelbiasjobdefinition-datasetformat-parquet
         */
        readonly parquet?: boolean | cdk.IResolvable;
    }
    /**
     * The CSV format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-csv.html
     */
    interface CsvProperty {
        /**
         * A boolean flag indicating if given CSV has header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-csv.html#cfn-sagemaker-modelbiasjobdefinition-csv-header
         */
        readonly header?: boolean | cdk.IResolvable;
    }
    /**
     * The Json format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-json.html
     */
    interface JsonProperty {
        /**
         * A boolean flag indicating if it is JSON line format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-json.html#cfn-sagemaker-modelbiasjobdefinition-json-line
         */
        readonly line?: boolean | cdk.IResolvable;
    }
    /**
     * Input object for the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html
     */
    interface EndpointInputProperty {
        /**
         * An endpoint in customer's account which has enabled `DataCaptureConfig` enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-endpointname
         */
        readonly endpointName: string;
        /**
         * If specified, monitoring jobs substract this time from the end time.
         *
         * For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-endtimeoffset
         */
        readonly endTimeOffset?: string;
        /**
         * The attributes of the input data that are the input features.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-featuresattribute
         */
        readonly featuresAttribute?: string;
        /**
         * The attribute of the input data that represents the ground truth label.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-inferenceattribute
         */
        readonly inferenceAttribute?: string;
        /**
         * Path to the filesystem where the endpoint data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-localpath
         */
        readonly localPath: string;
        /**
         * In a classification problem, the attribute that represents the class probability.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-probabilityattribute
         */
        readonly probabilityAttribute?: string;
        /**
         * The threshold for the class probability to be evaluated as a positive result.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-probabilitythresholdattribute
         */
        readonly probabilityThresholdAttribute?: number;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an Amazon S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-s3inputmode
         */
        readonly s3InputMode?: string;
        /**
         * If specified, monitoring jobs substract this time from the start time.
         *
         * For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-endpointinput.html#cfn-sagemaker-modelbiasjobdefinition-endpointinput-starttimeoffset
         */
        readonly startTimeOffset?: string;
    }
    /**
     * The output configuration for monitoring jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringoutputconfig.html
     */
    interface MonitoringOutputConfigProperty {
        /**
         * The AWS Key Management Service ( AWS KMS ) key that Amazon SageMaker AI uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-modelbiasjobdefinition-monitoringoutputconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Monitoring outputs for monitoring jobs.
         *
         * This is where the output of the periodic monitoring jobs is uploaded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-modelbiasjobdefinition-monitoringoutputconfig-monitoringoutputs
         */
        readonly monitoringOutputs: Array<cdk.IResolvable | CfnModelBiasJobDefinition.MonitoringOutputProperty> | cdk.IResolvable;
    }
    /**
     * The output object for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringoutput.html
     */
    interface MonitoringOutputProperty {
        /**
         * The Amazon S3 storage location where the results of a monitoring job are saved.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringoutput.html#cfn-sagemaker-modelbiasjobdefinition-monitoringoutput-s3output
         */
        readonly s3Output: cdk.IResolvable | CfnModelBiasJobDefinition.S3OutputProperty;
    }
    /**
     * The Amazon S3 storage location where the results of a monitoring job are saved.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-s3output.html
     */
    interface S3OutputProperty {
        /**
         * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
         *
         * `LocalPath` is an absolute path for the output data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-s3output.html#cfn-sagemaker-modelbiasjobdefinition-s3output-localpath
         */
        readonly localPath: string;
        /**
         * Whether to upload the results of the monitoring job continuously or after the job completes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-s3output.html#cfn-sagemaker-modelbiasjobdefinition-s3output-s3uploadmode
         */
        readonly s3UploadMode?: string;
        /**
         * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-s3output.html#cfn-sagemaker-modelbiasjobdefinition-s3output-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * Specifies a limit to how long a job can run.
     *
     * When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs.
     *
     * To stop a training job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
     *
     * The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with `CreateModel` .
     *
     * > The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-stoppingcondition.html
     */
    interface StoppingConditionProperty {
        /**
         * The maximum length of time, in seconds, that a training or compilation job can run before it is stopped.
         *
         * For compilation jobs, if the job does not complete during this time, a `TimeOut` error is generated. We recommend starting with 900 seconds and increasing as necessary based on your model.
         *
         * For all other jobs, if the job does not complete during this time, SageMaker ends the job. When `RetryStrategy` is specified in the job request, `MaxRuntimeInSeconds` specifies the maximum time for all of the attempts in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.
         *
         * The maximum time that a `TrainingJob` can run in total, including any time spent publishing metrics or archiving and uploading models after it has been stopped, is 30 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-stoppingcondition.html#cfn-sagemaker-modelbiasjobdefinition-stoppingcondition-maxruntimeinseconds
         */
        readonly maxRuntimeInSeconds: number;
    }
    /**
     * Identifies the resources to deploy for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringresources.html
     */
    interface MonitoringResourcesProperty {
        /**
         * The configuration for the cluster resources used to run the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-monitoringresources.html#cfn-sagemaker-modelbiasjobdefinition-monitoringresources-clusterconfig
         */
        readonly clusterConfig: CfnModelBiasJobDefinition.ClusterConfigProperty | cdk.IResolvable;
    }
    /**
     * The configuration for the cluster resources used to run the processing job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-clusterconfig.html
     */
    interface ClusterConfigProperty {
        /**
         * The number of ML compute instances to use in the model monitoring job.
         *
         * For distributed processing jobs, specify a value greater than 1. The default value is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-clusterconfig.html#cfn-sagemaker-modelbiasjobdefinition-clusterconfig-instancecount
         */
        readonly instanceCount: number;
        /**
         * The ML compute instance type for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-clusterconfig.html#cfn-sagemaker-modelbiasjobdefinition-clusterconfig-instancetype
         */
        readonly instanceType: string;
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-clusterconfig.html#cfn-sagemaker-modelbiasjobdefinition-clusterconfig-volumekmskeyid
         */
        readonly volumeKmsKeyId?: string;
        /**
         * The size of the ML storage volume, in gigabytes, that you want to provision.
         *
         * You must specify sufficient ML storage for your scenario.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-clusterconfig.html#cfn-sagemaker-modelbiasjobdefinition-clusterconfig-volumesizeingb
         */
        readonly volumeSizeInGb: number;
    }
    /**
     * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-networkconfig.html
     */
    interface NetworkConfigProperty {
        /**
         * Whether to encrypt all communications between distributed processing jobs.
         *
         * Choose `True` to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-networkconfig.html#cfn-sagemaker-modelbiasjobdefinition-networkconfig-enableintercontainertrafficencryption
         */
        readonly enableInterContainerTrafficEncryption?: boolean | cdk.IResolvable;
        /**
         * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-networkconfig.html#cfn-sagemaker-modelbiasjobdefinition-networkconfig-enablenetworkisolation
         */
        readonly enableNetworkIsolation?: boolean | cdk.IResolvable;
        /**
         * Specifies a VPC that your training jobs and hosted models have access to.
         *
         * Control access to and from your training and model containers by configuring the VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-networkconfig.html#cfn-sagemaker-modelbiasjobdefinition-networkconfig-vpcconfig
         */
        readonly vpcConfig?: cdk.IResolvable | CfnModelBiasJobDefinition.VpcConfigProperty;
    }
    /**
     * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
     *
     * You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The VPC security group IDs, in the form `sg-xxxxxxxx` .
         *
         * Specify the security groups for the VPC that is specified in the `Subnets` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-vpcconfig.html#cfn-sagemaker-modelbiasjobdefinition-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The ID of the subnets in the VPC to which you want to connect your training job or model.
         *
         * For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-vpcconfig.html#cfn-sagemaker-modelbiasjobdefinition-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * The configuration for a baseline model bias job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasbaselineconfig.html
     */
    interface ModelBiasBaselineConfigProperty {
        /**
         * The name of the baseline model bias job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasbaselineconfig.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasbaselineconfig-baseliningjobname
         */
        readonly baseliningJobName?: string;
        /**
         * The constraints resource for a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasbaselineconfig.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasbaselineconfig-constraintsresource
         */
        readonly constraintsResource?: CfnModelBiasJobDefinition.ConstraintsResourceProperty | cdk.IResolvable;
    }
    /**
     * The constraints resource for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-constraintsresource.html
     */
    interface ConstraintsResourceProperty {
        /**
         * The Amazon S3 URI for the constraints resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-constraintsresource.html#cfn-sagemaker-modelbiasjobdefinition-constraintsresource-s3uri
         */
        readonly s3Uri?: string;
    }
    /**
     * Docker container image configuration object for the model bias job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification.html
     */
    interface ModelBiasAppSpecificationProperty {
        /**
         * JSON formatted S3 file that defines bias parameters.
         *
         * For more information on this JSON configuration file, see [Configure bias parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-bias-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-configuri
         */
        readonly configUri: string;
        /**
         * Sets the environment variables in the Docker container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-environment
         */
        readonly environment?: cdk.IResolvable | Record<string, string>;
        /**
         * The container image to be run by the model bias job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-imageuri
         */
        readonly imageUri: string;
    }
}
/**
 * Properties for defining a `CfnModelBiasJobDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html
 */
export interface CfnModelBiasJobDefinitionProps {
    /**
     * The name of the endpoint used to run the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-endpointname
     */
    readonly endpointName?: string;
    /**
     * The name of the bias job definition.
     *
     * The name must be unique within an AWS Region in the AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-jobdefinitionname
     */
    readonly jobDefinitionName?: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-jobresources
     */
    readonly jobResources: cdk.IResolvable | CfnModelBiasJobDefinition.MonitoringResourcesProperty;
    /**
     * Configures the model bias job to run a specified Docker container image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification
     */
    readonly modelBiasAppSpecification: cdk.IResolvable | CfnModelBiasJobDefinition.ModelBiasAppSpecificationProperty;
    /**
     * The baseline configuration for a model bias job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasbaselineconfig
     */
    readonly modelBiasBaselineConfig?: cdk.IResolvable | CfnModelBiasJobDefinition.ModelBiasBaselineConfigProperty;
    /**
     * Inputs for the model bias job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasjobinput
     */
    readonly modelBiasJobInput: cdk.IResolvable | CfnModelBiasJobDefinition.ModelBiasJobInputProperty;
    /**
     * The output configuration for monitoring jobs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-modelbiasjoboutputconfig
     */
    readonly modelBiasJobOutputConfig: cdk.IResolvable | CfnModelBiasJobDefinition.MonitoringOutputConfigProperty;
    /**
     * Networking options for a model bias job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-networkconfig
     */
    readonly networkConfig?: cdk.IResolvable | CfnModelBiasJobDefinition.NetworkConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-rolearn
     */
    readonly roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-stoppingcondition
     */
    readonly stoppingCondition?: cdk.IResolvable | CfnModelBiasJobDefinition.StoppingConditionProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelbiasjobdefinition.html#cfn-sagemaker-modelbiasjobdefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an Amazon SageMaker Model Card.
 *
 * For information about how to use model cards, see [Amazon SageMaker Model Card](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html) .
 *
 * @cloudformationResource AWS::SageMaker::ModelCard
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html
 */
export declare class CfnModelCard extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModelCard from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModelCard;
    /**
     * The domain associated with the user.
     *
     * @cloudformationAttribute CreatedBy.DomainId
     */
    readonly attrCreatedByDomainId: string;
    /**
     * The Amazon Resource Name (ARN) of the user's profile.
     *
     * @cloudformationAttribute CreatedBy.UserProfileArn
     */
    readonly attrCreatedByUserProfileArn: string;
    /**
     * The name of the user's profile.
     *
     * @cloudformationAttribute CreatedBy.UserProfileName
     */
    readonly attrCreatedByUserProfileName: string;
    /**
     * The date and time the model card was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The domain associated with the user.
     *
     * @cloudformationAttribute LastModifiedBy.DomainId
     */
    readonly attrLastModifiedByDomainId: string;
    /**
     * The Amazon Resource Name (ARN) of the user's profile.
     *
     * @cloudformationAttribute LastModifiedBy.UserProfileArn
     */
    readonly attrLastModifiedByUserProfileArn: string;
    /**
     * The name of the user's profile.
     *
     * @cloudformationAttribute LastModifiedBy.UserProfileName
     */
    readonly attrLastModifiedByUserProfileName: string;
    /**
     * The date and time the model card was last modified.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: string;
    /**
     * The Amazon Resource Number (ARN) of the model card. For example, `arn:aws:sagemaker:us-west-2:012345678901:modelcard/examplemodelcard` .
     *
     * @cloudformationAttribute ModelCardArn
     */
    readonly attrModelCardArn: string;
    /**
     * The processing status of model card deletion. The ModelCardProcessingStatus updates throughout the different deletion steps.
     *
     * @cloudformationAttribute ModelCardProcessingStatus
     */
    readonly attrModelCardProcessingStatus: string;
    /**
     * A version of the model card.
     *
     * @cloudformationAttribute ModelCardVersion
     */
    readonly attrModelCardVersion: number;
    /**
     * The content of the model card.
     */
    content: CfnModelCard.ContentProperty | cdk.IResolvable;
    /**
     * Information about the user who created or modified one or more of the following:.
     */
    createdBy?: cdk.IResolvable | CfnModelCard.UserContextProperty;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: cdk.IResolvable | CfnModelCard.UserContextProperty;
    /**
     * The unique name of the model card.
     */
    modelCardName: string;
    /**
     * The approval status of the model card within your organization.
     */
    modelCardStatus: string;
    /**
     * The security configuration used to protect model card data.
     */
    securityConfig?: cdk.IResolvable | CfnModelCard.SecurityConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key-value pairs used to manage metadata for the model card.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnModelCardProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnModelCard {
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-usercontext.html
     */
    interface UserContextProperty {
        /**
         * The domain associated with the user.
         *
         * @default - "UnsetValue"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-usercontext.html#cfn-sagemaker-modelcard-usercontext-domainid
         */
        readonly domainId?: string;
        /**
         * The Amazon Resource Name (ARN) of the user's profile.
         *
         * @default - "UnsetValue"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-usercontext.html#cfn-sagemaker-modelcard-usercontext-userprofilearn
         */
        readonly userProfileArn?: string;
        /**
         * The name of the user's profile.
         *
         * @default - "UnsetValue"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-usercontext.html#cfn-sagemaker-modelcard-usercontext-userprofilename
         */
        readonly userProfileName?: string;
    }
    /**
     * The security configuration used to protect model card data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-securityconfig.html
     */
    interface SecurityConfigProperty {
        /**
         * A AWS Key Management Service [key ID](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) used to encrypt a model card.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-securityconfig.html#cfn-sagemaker-modelcard-securityconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * The content of the model card.
     *
     * It follows the [model card json schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html
     */
    interface ContentProperty {
        /**
         * Additional information about the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html#cfn-sagemaker-modelcard-content-additionalinformation
         */
        readonly additionalInformation?: CfnModelCard.AdditionalInformationProperty | cdk.IResolvable;
        /**
         * Information about how the model supports business goals.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html#cfn-sagemaker-modelcard-content-businessdetails
         */
        readonly businessDetails?: CfnModelCard.BusinessDetailsProperty | cdk.IResolvable;
        /**
         * An overview about the model's evaluation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html#cfn-sagemaker-modelcard-content-evaluationdetails
         */
        readonly evaluationDetails?: Array<CfnModelCard.EvaluationDetailProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The intended usage of the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html#cfn-sagemaker-modelcard-content-intendeduses
         */
        readonly intendedUses?: CfnModelCard.IntendedUsesProperty | cdk.IResolvable;
        /**
         * An overview about the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html#cfn-sagemaker-modelcard-content-modeloverview
         */
        readonly modelOverview?: cdk.IResolvable | CfnModelCard.ModelOverviewProperty;
        /**
         * Metadata information related to model package version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html#cfn-sagemaker-modelcard-content-modelpackagedetails
         */
        readonly modelPackageDetails?: cdk.IResolvable | CfnModelCard.ModelPackageDetailsProperty;
        /**
         * An overview about model training.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html#cfn-sagemaker-modelcard-content-trainingdetails
         */
        readonly trainingDetails?: cdk.IResolvable | CfnModelCard.TrainingDetailsProperty;
    }
    /**
     * The intended uses of a model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-intendeduses.html
     */
    interface IntendedUsesProperty {
        /**
         * An explanation of why your organization categorizes the model with its risk rating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-intendeduses.html#cfn-sagemaker-modelcard-intendeduses-explanationsforriskrating
         */
        readonly explanationsForRiskRating?: string;
        /**
         * Factors affecting model efficacy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-intendeduses.html#cfn-sagemaker-modelcard-intendeduses-factorsaffectingmodelefficiency
         */
        readonly factorsAffectingModelEfficiency?: string;
        /**
         * The intended use cases for the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-intendeduses.html#cfn-sagemaker-modelcard-intendeduses-intendeduses
         */
        readonly intendedUses?: string;
        /**
         * The general purpose of the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-intendeduses.html#cfn-sagemaker-modelcard-intendeduses-purposeofmodel
         */
        readonly purposeOfModel?: string;
        /**
         * Your organization's risk rating. You can specify one the following values as the risk rating:.
         *
         * - High
         * - Medium
         * - Low
         * - Unknown
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-intendeduses.html#cfn-sagemaker-modelcard-intendeduses-riskrating
         */
        readonly riskRating?: string;
    }
    /**
     * Additional information about the model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-additionalinformation.html
     */
    interface AdditionalInformationProperty {
        /**
         * Caveats and recommendations for those who might use this model in their applications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-additionalinformation.html#cfn-sagemaker-modelcard-additionalinformation-caveatsandrecommendations
         */
        readonly caveatsAndRecommendations?: string;
        /**
         * Any additional information to document about the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-additionalinformation.html#cfn-sagemaker-modelcard-additionalinformation-customdetails
         */
        readonly customDetails?: cdk.IResolvable | Record<string, string>;
        /**
         * Any ethical considerations documented by the model card author.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-additionalinformation.html#cfn-sagemaker-modelcard-additionalinformation-ethicalconsiderations
         */
        readonly ethicalConsiderations?: string;
    }
    /**
     * An overview about the model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html
     */
    interface ModelOverviewProperty {
        /**
         * The algorithm used to solve the problem.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-algorithmtype
         */
        readonly algorithmType?: string;
        /**
         * An overview about model inference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-inferenceenvironment
         */
        readonly inferenceEnvironment?: CfnModelCard.InferenceEnvironmentProperty | cdk.IResolvable;
        /**
         * The location of the model artifact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-modelartifact
         */
        readonly modelArtifact?: Array<string>;
        /**
         * The creator of the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-modelcreator
         */
        readonly modelCreator?: string;
        /**
         * A description of the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-modeldescription
         */
        readonly modelDescription?: string;
        /**
         * The SageMaker AI Model ARN or non- SageMaker AI Model ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-modelid
         */
        readonly modelId?: string;
        /**
         * The name of the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-modelname
         */
        readonly modelName?: string;
        /**
         * The owner of the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-modelowner
         */
        readonly modelOwner?: string;
        /**
         * The version of the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-modelversion
         */
        readonly modelVersion?: number;
        /**
         * The problem being solved with the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html#cfn-sagemaker-modelcard-modeloverview-problemtype
         */
        readonly problemType?: string;
    }
    /**
     * An overview of a model's inference environment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-inferenceenvironment.html
     */
    interface InferenceEnvironmentProperty {
        /**
         * The container used to run the inference environment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-inferenceenvironment.html#cfn-sagemaker-modelcard-inferenceenvironment-containerimage
         */
        readonly containerImage?: Array<string>;
    }
    /**
     * The training details of the model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingdetails.html
     */
    interface TrainingDetailsProperty {
        /**
         * The function that is optimized during model training.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingdetails.html#cfn-sagemaker-modelcard-trainingdetails-objectivefunction
         */
        readonly objectiveFunction?: cdk.IResolvable | CfnModelCard.ObjectiveFunctionProperty;
        /**
         * Details about any associated training jobs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingdetails.html#cfn-sagemaker-modelcard-trainingdetails-trainingjobdetails
         */
        readonly trainingJobDetails?: cdk.IResolvable | CfnModelCard.TrainingJobDetailsProperty;
        /**
         * Any observations about training.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingdetails.html#cfn-sagemaker-modelcard-trainingdetails-trainingobservations
         */
        readonly trainingObservations?: string;
    }
    /**
     * The function that is optimized during model training.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-objectivefunction.html
     */
    interface ObjectiveFunctionProperty {
        /**
         * A function object that details optimization direction, metric, and additional descriptions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-objectivefunction.html#cfn-sagemaker-modelcard-objectivefunction-function
         */
        readonly function?: CfnModelCard.FunctionProperty | cdk.IResolvable;
        /**
         * Notes about the object function, including other considerations for possible objective functions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-objectivefunction.html#cfn-sagemaker-modelcard-objectivefunction-notes
         */
        readonly notes?: string;
    }
    /**
     * Function details.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-function.html
     */
    interface FunctionProperty {
        /**
         * An optional description of any conditions of your objective function metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-function.html#cfn-sagemaker-modelcard-function-condition
         */
        readonly condition?: string;
        /**
         * The metric of the model's objective function.
         *
         * For example, *loss* or *rmse* . The following list shows examples of the values that you can specify for the metric:
         *
         * - `ACCURACY`
         * - `AUC`
         * - `LOSS`
         * - `MAE`
         * - `RMSE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-function.html#cfn-sagemaker-modelcard-function-facet
         */
        readonly facet?: string;
        /**
         * The optimization direction of the model's objective function. You must specify one of the following values:.
         *
         * - `Maximize`
         * - `Minimize`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-function.html#cfn-sagemaker-modelcard-function-function
         */
        readonly function?: string;
    }
    /**
     * The overview of a training job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html
     */
    interface TrainingJobDetailsProperty {
        /**
         * The hyper parameters used in the training job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html#cfn-sagemaker-modelcard-trainingjobdetails-hyperparameters
         */
        readonly hyperParameters?: Array<cdk.IResolvable | CfnModelCard.TrainingHyperParameterProperty> | cdk.IResolvable;
        /**
         * The SageMaker AI training job Amazon Resource Name (ARN).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html#cfn-sagemaker-modelcard-trainingjobdetails-trainingarn
         */
        readonly trainingArn?: string;
        /**
         * The location of the datasets used to train the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html#cfn-sagemaker-modelcard-trainingjobdetails-trainingdatasets
         */
        readonly trainingDatasets?: Array<string>;
        /**
         * The SageMaker AI training job image URI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html#cfn-sagemaker-modelcard-trainingjobdetails-trainingenvironment
         */
        readonly trainingEnvironment?: cdk.IResolvable | CfnModelCard.TrainingEnvironmentProperty;
        /**
         * The SageMaker AI training job results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html#cfn-sagemaker-modelcard-trainingjobdetails-trainingmetrics
         */
        readonly trainingMetrics?: Array<cdk.IResolvable | CfnModelCard.TrainingMetricProperty> | cdk.IResolvable;
        /**
         * Additional hyper parameters that you've specified when training the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html#cfn-sagemaker-modelcard-trainingjobdetails-userprovidedhyperparameters
         */
        readonly userProvidedHyperParameters?: Array<cdk.IResolvable | CfnModelCard.TrainingHyperParameterProperty> | cdk.IResolvable;
        /**
         * Custom training job results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html#cfn-sagemaker-modelcard-trainingjobdetails-userprovidedtrainingmetrics
         */
        readonly userProvidedTrainingMetrics?: Array<cdk.IResolvable | CfnModelCard.TrainingMetricProperty> | cdk.IResolvable;
    }
    /**
     * A result from a SageMaker AI training job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingmetric.html
     */
    interface TrainingMetricProperty {
        /**
         * The name of the result from the SageMaker AI training job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingmetric.html#cfn-sagemaker-modelcard-trainingmetric-name
         */
        readonly name: string;
        /**
         * Any additional notes describing the result of the training job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingmetric.html#cfn-sagemaker-modelcard-trainingmetric-notes
         */
        readonly notes?: string;
        /**
         * The value of a result from the SageMaker AI training job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingmetric.html#cfn-sagemaker-modelcard-trainingmetric-value
         */
        readonly value: number;
    }
    /**
     * A hyper parameter that was configured in training the model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-traininghyperparameter.html
     */
    interface TrainingHyperParameterProperty {
        /**
         * The name of the hyper parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-traininghyperparameter.html#cfn-sagemaker-modelcard-traininghyperparameter-name
         */
        readonly name: string;
        /**
         * The value specified for the hyper parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-traininghyperparameter.html#cfn-sagemaker-modelcard-traininghyperparameter-value
         */
        readonly value: string;
    }
    /**
     * SageMaker AI training image.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingenvironment.html
     */
    interface TrainingEnvironmentProperty {
        /**
         * SageMaker AI inference image URI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingenvironment.html#cfn-sagemaker-modelcard-trainingenvironment-containerimage
         */
        readonly containerImage?: Array<string>;
    }
    /**
     * The evaluation details of the model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html
     */
    interface EvaluationDetailProperty {
        /**
         * The location of the datasets used to evaluate the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html#cfn-sagemaker-modelcard-evaluationdetail-datasets
         */
        readonly datasets?: Array<string>;
        /**
         * The Amazon Resource Name (ARN) of the evaluation job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html#cfn-sagemaker-modelcard-evaluationdetail-evaluationjobarn
         */
        readonly evaluationJobArn?: string;
        /**
         * Any observations made during the model evaluation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html#cfn-sagemaker-modelcard-evaluationdetail-evaluationobservation
         */
        readonly evaluationObservation?: string;
        /**
         * Additional attributes associated with the evaluation results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html#cfn-sagemaker-modelcard-evaluationdetail-metadata
         */
        readonly metadata?: cdk.IResolvable | Record<string, string>;
        /**
         * An evaluation Metric Group object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html#cfn-sagemaker-modelcard-evaluationdetail-metricgroups
         */
        readonly metricGroups?: Array<cdk.IResolvable | CfnModelCard.MetricGroupProperty> | cdk.IResolvable;
        /**
         * The evaluation job name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html#cfn-sagemaker-modelcard-evaluationdetail-name
         */
        readonly name: string;
    }
    /**
     * A group of metric data that you use to initialize a metric group object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricgroup.html
     */
    interface MetricGroupProperty {
        /**
         * A list of metric objects. The `MetricDataItems` list can have one of the following values:.
         *
         * - `bar_chart_metric`
         * - `matrix_metric`
         * - `simple_metric`
         * - `linear_graph_metric`
         *
         * For more information about the metric schema, see the definition section of the [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricgroup.html#cfn-sagemaker-modelcard-metricgroup-metricdata
         */
        readonly metricData: Array<cdk.IResolvable | CfnModelCard.MetricDataItemsProperty> | cdk.IResolvable;
        /**
         * The metric group name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricgroup.html#cfn-sagemaker-modelcard-metricgroup-name
         */
        readonly name: string;
    }
    /**
     * Metric data.
     *
     * The `type` determines the data types that you specify for `value` , `XAxisName` and `YAxisName` . For information about specifying values for metrics, see [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricdataitems.html
     */
    interface MetricDataItemsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricdataitems.html#cfn-sagemaker-modelcard-metricdataitems-name
         */
        readonly name: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricdataitems.html#cfn-sagemaker-modelcard-metricdataitems-notes
         */
        readonly notes?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricdataitems.html#cfn-sagemaker-modelcard-metricdataitems-type
         */
        readonly type: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricdataitems.html#cfn-sagemaker-modelcard-metricdataitems-value
         */
        readonly value: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricdataitems.html#cfn-sagemaker-modelcard-metricdataitems-xaxisname
         */
        readonly xAxisName?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricdataitems.html#cfn-sagemaker-modelcard-metricdataitems-yaxisname
         */
        readonly yAxisName?: Array<string>;
    }
    /**
     * Metadata information related to model package version.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html
     */
    interface ModelPackageDetailsProperty {
        /**
         * A description provided for the model approval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-approvaldescription
         */
        readonly approvalDescription?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-createdby
         */
        readonly createdBy?: cdk.IResolvable | CfnModelCard.ModelPackageCreatorProperty;
        /**
         * The machine learning domain of the model package you specified.
         *
         * Common machine learning domains include computer vision and natural language processing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-domain
         */
        readonly domain?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-inferencespecification
         */
        readonly inferenceSpecification?: CfnModelCard.InferenceSpecificationProperty | cdk.IResolvable;
        /**
         * Current approval status of model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-modelapprovalstatus
         */
        readonly modelApprovalStatus?: string;
        /**
         * The Amazon Resource Name (ARN) of the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagearn
         */
        readonly modelPackageArn?: string;
        /**
         * A brief summary of the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagedescription
         */
        readonly modelPackageDescription?: string;
        /**
         * If the model is a versioned model, the name of the model group that the versioned model belongs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagegroupname
         */
        readonly modelPackageGroupName?: string;
        /**
         * Name of the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagename
         */
        readonly modelPackageName?: string;
        /**
         * Current status of model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagestatus
         */
        readonly modelPackageStatus?: string;
        /**
         * Version of the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackageversion
         */
        readonly modelPackageVersion?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-sourcealgorithms
         */
        readonly sourceAlgorithms?: Array<cdk.IResolvable | CfnModelCard.SourceAlgorithmProperty> | cdk.IResolvable;
        /**
         * The machine learning task you specified that your model package accomplishes.
         *
         * Common machine learning tasks include object detection and image classification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html#cfn-sagemaker-modelcard-modelpackagedetails-task
         */
        readonly task?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagecreator.html
     */
    interface ModelPackageCreatorProperty {
        /**
         * The name of the user's profile in Studio.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagecreator.html#cfn-sagemaker-modelcard-modelpackagecreator-userprofilename
         */
        readonly userProfileName?: string;
    }
    /**
     * Specifies an algorithm that was used to create the model package.
     *
     * The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-sourcealgorithm.html
     */
    interface SourceAlgorithmProperty {
        /**
         * The name of an algorithm that was used to create the model package.
         *
         * The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-sourcealgorithm.html#cfn-sagemaker-modelcard-sourcealgorithm-algorithmname
         */
        readonly algorithmName: string;
        /**
         * The Amazon S3 path where the model artifacts, which result from model training, are stored.
         *
         * This path must point to a single `gzip` compressed tar archive ( `.tar.gz` suffix).
         *
         * > The model artifacts must be in an S3 bucket that is in the same AWS region as the algorithm.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-sourcealgorithm.html#cfn-sagemaker-modelcard-sourcealgorithm-modeldataurl
         */
        readonly modelDataUrl?: string;
    }
    /**
     * Defines how to perform inference generation after a training job is run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-inferencespecification.html
     */
    interface InferenceSpecificationProperty {
        /**
         * The Amazon ECR registry path of the Docker image that contains the inference code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-inferencespecification.html#cfn-sagemaker-modelcard-inferencespecification-containers
         */
        readonly containers: Array<CfnModelCard.ContainerProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-container.html
     */
    interface ContainerProperty {
        /**
         * Inference environment path.
         *
         * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-container.html#cfn-sagemaker-modelcard-container-image
         */
        readonly image: string;
        /**
         * The Amazon S3 path where the model artifacts, which result from model training, are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-container.html#cfn-sagemaker-modelcard-container-modeldataurl
         */
        readonly modelDataUrl?: string;
        /**
         * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-container.html#cfn-sagemaker-modelcard-container-nearestmodelname
         */
        readonly nearestModelName?: string;
    }
    /**
     * Information about how the model supports business goals.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-businessdetails.html
     */
    interface BusinessDetailsProperty {
        /**
         * The specific business problem that the model is trying to solve.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-businessdetails.html#cfn-sagemaker-modelcard-businessdetails-businessproblem
         */
        readonly businessProblem?: string;
        /**
         * The relevant stakeholders for the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-businessdetails.html#cfn-sagemaker-modelcard-businessdetails-businessstakeholders
         */
        readonly businessStakeholders?: string;
        /**
         * The broader business need that the model is serving.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-businessdetails.html#cfn-sagemaker-modelcard-businessdetails-lineofbusiness
         */
        readonly lineOfBusiness?: string;
    }
}
/**
 * Properties for defining a `CfnModelCard`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html
 */
export interface CfnModelCardProps {
    /**
     * The content of the model card.
     *
     * Content uses the [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-content
     */
    readonly content: CfnModelCard.ContentProperty | cdk.IResolvable;
    /**
     * Information about the user who created or modified one or more of the following:.
     *
     * - Experiment
     * - Trial
     * - Trial component
     * - Lineage group
     * - Project
     * - Model Card
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-createdby
     */
    readonly createdBy?: cdk.IResolvable | CfnModelCard.UserContextProperty;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-lastmodifiedby
     */
    readonly lastModifiedBy?: cdk.IResolvable | CfnModelCard.UserContextProperty;
    /**
     * The unique name of the model card.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelcardname
     */
    readonly modelCardName: string;
    /**
     * The approval status of the model card within your organization.
     *
     * Different organizations might have different criteria for model card review and approval.
     *
     * - `Draft` : The model card is a work in progress.
     * - `PendingReview` : The model card is pending review.
     * - `Approved` : The model card is approved.
     * - `Archived` : The model card is archived. No more updates should be made to the model card, but it can still be exported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelcardstatus
     */
    readonly modelCardStatus: string;
    /**
     * The security configuration used to protect model card data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-securityconfig
     */
    readonly securityConfig?: cdk.IResolvable | CfnModelCard.SecurityConfigProperty;
    /**
     * Key-value pairs used to manage metadata for the model card.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates the definition for a model explainability job.
 *
 * @cloudformationResource AWS::SageMaker::ModelExplainabilityJobDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html
 */
export declare class CfnModelExplainabilityJobDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModelExplainabilityJobDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModelExplainabilityJobDefinition;
    /**
     * The time when the job definition was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The Amazon Resource Name (ARN) of the job definition.
     *
     * @cloudformationAttribute JobDefinitionArn
     */
    readonly attrJobDefinitionArn: string;
    /**
     * The name of the endpoint used to run the monitoring job.
     */
    endpointName?: string;
    /**
     * The name of the model explainability job definition.
     */
    jobDefinitionName?: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     */
    jobResources: cdk.IResolvable | CfnModelExplainabilityJobDefinition.MonitoringResourcesProperty;
    /**
     * Configures the model explainability job to run a specified Docker container image.
     */
    modelExplainabilityAppSpecification: cdk.IResolvable | CfnModelExplainabilityJobDefinition.ModelExplainabilityAppSpecificationProperty;
    /**
     * The baseline configuration for a model explainability job.
     */
    modelExplainabilityBaselineConfig?: cdk.IResolvable | CfnModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfigProperty;
    /**
     * Inputs for the model explainability job.
     */
    modelExplainabilityJobInput: cdk.IResolvable | CfnModelExplainabilityJobDefinition.ModelExplainabilityJobInputProperty;
    /**
     * The output configuration for monitoring jobs.
     */
    modelExplainabilityJobOutputConfig: cdk.IResolvable | CfnModelExplainabilityJobDefinition.MonitoringOutputConfigProperty;
    /**
     * Networking options for a model explainability job.
     */
    networkConfig?: cdk.IResolvable | CfnModelExplainabilityJobDefinition.NetworkConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     */
    roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     */
    stoppingCondition?: cdk.IResolvable | CfnModelExplainabilityJobDefinition.StoppingConditionProperty;
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
    constructor(scope: constructs.Construct, id: string, props: CfnModelExplainabilityJobDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnModelExplainabilityJobDefinition {
    /**
     * The output configuration for monitoring jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig.html
     */
    interface MonitoringOutputConfigProperty {
        /**
         * The AWS Key Management Service ( AWS KMS ) key that Amazon SageMaker AI uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Monitoring outputs for monitoring jobs.
         *
         * This is where the output of the periodic monitoring jobs is uploaded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig-monitoringoutputs
         */
        readonly monitoringOutputs: Array<cdk.IResolvable | CfnModelExplainabilityJobDefinition.MonitoringOutputProperty> | cdk.IResolvable;
    }
    /**
     * The output object for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput.html
     */
    interface MonitoringOutputProperty {
        /**
         * The Amazon S3 storage location where the results of a monitoring job are saved.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput.html#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringoutput-s3output
         */
        readonly s3Output: cdk.IResolvable | CfnModelExplainabilityJobDefinition.S3OutputProperty;
    }
    /**
     * The Amazon S3 storage location where the results of a monitoring job are saved.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-s3output.html
     */
    interface S3OutputProperty {
        /**
         * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
         *
         * LocalPath is an absolute path for the output data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-s3output.html#cfn-sagemaker-modelexplainabilityjobdefinition-s3output-localpath
         */
        readonly localPath: string;
        /**
         * Whether to upload the results of the monitoring job continuously or after the job completes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-s3output.html#cfn-sagemaker-modelexplainabilityjobdefinition-s3output-s3uploadmode
         */
        readonly s3UploadMode?: string;
        /**
         * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-s3output.html#cfn-sagemaker-modelexplainabilityjobdefinition-s3output-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * Specifies a limit to how long a job can run.
     *
     * When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs.
     *
     * To stop a training job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
     *
     * The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with `CreateModel` .
     *
     * > The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-stoppingcondition.html
     */
    interface StoppingConditionProperty {
        /**
         * The maximum length of time, in seconds, that a training or compilation job can run before it is stopped.
         *
         * For compilation jobs, if the job does not complete during this time, a `TimeOut` error is generated. We recommend starting with 900 seconds and increasing as necessary based on your model.
         *
         * For all other jobs, if the job does not complete during this time, SageMaker ends the job. When `RetryStrategy` is specified in the job request, `MaxRuntimeInSeconds` specifies the maximum time for all of the attempts in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.
         *
         * The maximum time that a `TrainingJob` can run in total, including any time spent publishing metrics or archiving and uploading models after it has been stopped, is 30 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-stoppingcondition.html#cfn-sagemaker-modelexplainabilityjobdefinition-stoppingcondition-maxruntimeinseconds
         */
        readonly maxRuntimeInSeconds: number;
    }
    /**
     * The configuration for a baseline model explainability job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig.html
     */
    interface ModelExplainabilityBaselineConfigProperty {
        /**
         * The name of the baseline model explainability job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig-baseliningjobname
         */
        readonly baseliningJobName?: string;
        /**
         * The constraints resource for a model explainability job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig-constraintsresource
         */
        readonly constraintsResource?: CfnModelExplainabilityJobDefinition.ConstraintsResourceProperty | cdk.IResolvable;
    }
    /**
     * Input object for the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-constraintsresource.html
     */
    interface ConstraintsResourceProperty {
        /**
         * The Amazon S3 URI for the constraints resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-constraintsresource.html#cfn-sagemaker-modelexplainabilityjobdefinition-constraintsresource-s3uri
         */
        readonly s3Uri?: string;
    }
    /**
     * Identifies the resources to deploy for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringresources.html
     */
    interface MonitoringResourcesProperty {
        /**
         * The configuration for the cluster resources used to run the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringresources.html#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringresources-clusterconfig
         */
        readonly clusterConfig: CfnModelExplainabilityJobDefinition.ClusterConfigProperty | cdk.IResolvable;
    }
    /**
     * The configuration for the cluster resources used to run the processing job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-clusterconfig.html
     */
    interface ClusterConfigProperty {
        /**
         * The number of ML compute instances to use in the model monitoring job.
         *
         * For distributed processing jobs, specify a value greater than 1. The default value is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-clusterconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-clusterconfig-instancecount
         */
        readonly instanceCount: number;
        /**
         * The ML compute instance type for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-clusterconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-clusterconfig-instancetype
         */
        readonly instanceType: string;
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-clusterconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-clusterconfig-volumekmskeyid
         */
        readonly volumeKmsKeyId?: string;
        /**
         * The size of the ML storage volume, in gigabytes, that you want to provision.
         *
         * You must specify sufficient ML storage for your scenario.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-clusterconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-clusterconfig-volumesizeingb
         */
        readonly volumeSizeInGb: number;
    }
    /**
     * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-networkconfig.html
     */
    interface NetworkConfigProperty {
        /**
         * Whether to encrypt all communications between distributed processing jobs.
         *
         * Choose `True` to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-networkconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-networkconfig-enableintercontainertrafficencryption
         */
        readonly enableInterContainerTrafficEncryption?: boolean | cdk.IResolvable;
        /**
         * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-networkconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-networkconfig-enablenetworkisolation
         */
        readonly enableNetworkIsolation?: boolean | cdk.IResolvable;
        /**
         * Specifies a VPC that your training jobs and hosted models have access to.
         *
         * Control access to and from your training and model containers by configuring the VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-networkconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-networkconfig-vpcconfig
         */
        readonly vpcConfig?: cdk.IResolvable | CfnModelExplainabilityJobDefinition.VpcConfigProperty;
    }
    /**
     * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
     *
     * You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The VPC security group IDs, in the form `sg-xxxxxxxx` .
         *
         * Specify the security groups for the VPC that is specified in the `Subnets` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-vpcconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The ID of the subnets in the VPC to which you want to connect your training job or model.
         *
         * For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-vpcconfig.html#cfn-sagemaker-modelexplainabilityjobdefinition-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * Inputs for the model explainability job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput.html
     */
    interface ModelExplainabilityJobInputProperty {
        /**
         * Input object for the batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput-batchtransforminput
         */
        readonly batchTransformInput?: CfnModelExplainabilityJobDefinition.BatchTransformInputProperty | cdk.IResolvable;
        /**
         * Input object for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput-endpointinput
         */
        readonly endpointInput?: CfnModelExplainabilityJobDefinition.EndpointInputProperty | cdk.IResolvable;
    }
    /**
     * Input object for the batch transform job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html
     */
    interface BatchTransformInputProperty {
        /**
         * The Amazon S3 location being used to capture the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-datacaptureddestinations3uri
         */
        readonly dataCapturedDestinationS3Uri: string;
        /**
         * The dataset format for your batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-datasetformat
         */
        readonly datasetFormat: CfnModelExplainabilityJobDefinition.DatasetFormatProperty | cdk.IResolvable;
        /**
         * The attributes of the input data that are the input features.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-featuresattribute
         */
        readonly featuresAttribute?: string;
        /**
         * The attribute of the input data that represents the ground truth label.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-inferenceattribute
         */
        readonly inferenceAttribute?: string;
        /**
         * Path to the filesystem where the batch transform data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-localpath
         */
        readonly localPath: string;
        /**
         * In a classification problem, the attribute that represents the class probability.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-probabilityattribute
         */
        readonly probabilityAttribute?: string;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-s3inputmode
         */
        readonly s3InputMode?: string;
    }
    /**
     * The dataset format of the data to monitor.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-datasetformat.html
     */
    interface DatasetFormatProperty {
        /**
         * The CSV format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-datasetformat.html#cfn-sagemaker-modelexplainabilityjobdefinition-datasetformat-csv
         */
        readonly csv?: CfnModelExplainabilityJobDefinition.CsvProperty | cdk.IResolvable;
        /**
         * The Json format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-datasetformat.html#cfn-sagemaker-modelexplainabilityjobdefinition-datasetformat-json
         */
        readonly json?: cdk.IResolvable | CfnModelExplainabilityJobDefinition.JsonProperty;
        /**
         * A flag indicating if the dataset format is Parquet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-datasetformat.html#cfn-sagemaker-modelexplainabilityjobdefinition-datasetformat-parquet
         */
        readonly parquet?: boolean | cdk.IResolvable;
    }
    /**
     * The CSV format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-csv.html
     */
    interface CsvProperty {
        /**
         * A boolean flag indicating if given CSV has header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-csv.html#cfn-sagemaker-modelexplainabilityjobdefinition-csv-header
         */
        readonly header?: boolean | cdk.IResolvable;
    }
    /**
     * The Json format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-json.html
     */
    interface JsonProperty {
        /**
         * A boolean flag indicating if it is JSON line format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-json.html#cfn-sagemaker-modelexplainabilityjobdefinition-json-line
         */
        readonly line?: boolean | cdk.IResolvable;
    }
    /**
     * Input object for the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html
     */
    interface EndpointInputProperty {
        /**
         * An endpoint in customer's account which has enabled `DataCaptureConfig` enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-endpointname
         */
        readonly endpointName: string;
        /**
         * The attributes of the input data that are the input features.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-featuresattribute
         */
        readonly featuresAttribute?: string;
        /**
         * The attribute of the input data that represents the ground truth label.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-inferenceattribute
         */
        readonly inferenceAttribute?: string;
        /**
         * Path to the filesystem where the endpoint data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-localpath
         */
        readonly localPath: string;
        /**
         * In a classification problem, the attribute that represents the class probability.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-probabilityattribute
         */
        readonly probabilityAttribute?: string;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an Amazon S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-s3inputmode
         */
        readonly s3InputMode?: string;
    }
    /**
     * Docker container image configuration object for the model explainability job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification.html
     */
    interface ModelExplainabilityAppSpecificationProperty {
        /**
         * JSON formatted Amazon S3 file that defines explainability parameters.
         *
         * For more information on this JSON configuration file, see [Configure model explainability parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-model-explainability-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-configuri
         */
        readonly configUri: string;
        /**
         * Sets the environment variables in the Docker container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-environment
         */
        readonly environment?: cdk.IResolvable | Record<string, string>;
        /**
         * The container image to be run by the model explainability job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-imageuri
         */
        readonly imageUri: string;
    }
}
/**
 * Properties for defining a `CfnModelExplainabilityJobDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html
 */
export interface CfnModelExplainabilityJobDefinitionProps {
    /**
     * The name of the endpoint used to run the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointname
     */
    readonly endpointName?: string;
    /**
     * The name of the model explainability job definition.
     *
     * The name must be unique within an AWS Region in the AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-jobdefinitionname
     */
    readonly jobDefinitionName?: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-jobresources
     */
    readonly jobResources: cdk.IResolvable | CfnModelExplainabilityJobDefinition.MonitoringResourcesProperty;
    /**
     * Configures the model explainability job to run a specified Docker container image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification
     */
    readonly modelExplainabilityAppSpecification: cdk.IResolvable | CfnModelExplainabilityJobDefinition.ModelExplainabilityAppSpecificationProperty;
    /**
     * The baseline configuration for a model explainability job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig
     */
    readonly modelExplainabilityBaselineConfig?: cdk.IResolvable | CfnModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfigProperty;
    /**
     * Inputs for the model explainability job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput
     */
    readonly modelExplainabilityJobInput: cdk.IResolvable | CfnModelExplainabilityJobDefinition.ModelExplainabilityJobInputProperty;
    /**
     * The output configuration for monitoring jobs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjoboutputconfig
     */
    readonly modelExplainabilityJobOutputConfig: cdk.IResolvable | CfnModelExplainabilityJobDefinition.MonitoringOutputConfigProperty;
    /**
     * Networking options for a model explainability job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-networkconfig
     */
    readonly networkConfig?: cdk.IResolvable | CfnModelExplainabilityJobDefinition.NetworkConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-rolearn
     */
    readonly roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-stoppingcondition
     */
    readonly stoppingCondition?: cdk.IResolvable | CfnModelExplainabilityJobDefinition.StoppingConditionProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * A container for your trained model that can be deployed for SageMaker inference.
 *
 * This can include inference code, artifacts, and metadata. The model package type can be one of the following.
 *
 * - Versioned model: A part of a model package group in Model Registry.
 * - Unversioned model: Not part of a model package group and used in AWS Marketplace.
 *
 * For more information, see [`CreateModelPackage`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModelPackage.html) .
 *
 * @cloudformationResource AWS::SageMaker::ModelPackage
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html
 */
export declare class CfnModelPackage extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModelPackage from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModelPackage;
    /**
     * The time that the model package was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The Amazon Resource Name (ARN) of the model package.
     *
     * @cloudformationAttribute ModelPackageArn
     */
    readonly attrModelPackageArn: string;
    /**
     * The status of the model package. This can be one of the following values.
     *
     * - `PENDING` - The model package creation is pending.
     * - `IN_PROGRESS` - The model package is in the process of being created.
     * - `COMPLETED` - The model package was successfully created.
     * - `FAILED` - The model package creation failed.
     * - `DELETING` - The model package is in the process of being deleted.
     *
     * @cloudformationAttribute ModelPackageStatus
     */
    readonly attrModelPackageStatus: string;
    /**
     * An array of additional Inference Specification objects.
     */
    additionalInferenceSpecifications?: Array<CfnModelPackage.AdditionalInferenceSpecificationDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An array of additional Inference Specification objects to be added to the existing array.
     */
    additionalInferenceSpecificationsToAdd?: Array<CfnModelPackage.AdditionalInferenceSpecificationDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A description provided when the model approval is set.
     */
    approvalDescription?: string;
    /**
     * Whether the model package is to be certified to be listed on AWS Marketplace.
     */
    certifyForMarketplace?: boolean | cdk.IResolvable;
    /**
     * A unique token that guarantees that the call to this API is idempotent.
     */
    clientToken?: string;
    /**
     * The metadata properties for the model package.
     */
    customerMetadataProperties?: cdk.IResolvable | Record<string, string>;
    /**
     * The machine learning domain of your model package and its components.
     */
    domain?: string;
    /**
     * Represents the drift check baselines that can be used when the model monitor is set using the model package.
     */
    driftCheckBaselines?: CfnModelPackage.DriftCheckBaselinesProperty | cdk.IResolvable;
    /**
     * Defines how to perform inference generation after a training job is run.
     */
    inferenceSpecification?: CfnModelPackage.InferenceSpecificationProperty | cdk.IResolvable;
    /**
     * The last time the model package was modified.
     */
    lastModifiedTime?: string;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: cdk.IResolvable | CfnModelPackage.MetadataPropertiesProperty;
    /**
     * The approval status of the model. This can be one of the following values.
     */
    modelApprovalStatus?: string;
    /**
     * An Amazon SageMaker Model Card.
     */
    modelCard?: cdk.IResolvable | CfnModelPackage.ModelCardProperty;
    /**
     * Metrics for the model.
     */
    modelMetrics?: cdk.IResolvable | CfnModelPackage.ModelMetricsProperty;
    /**
     * The description of the model package.
     */
    modelPackageDescription?: string;
    /**
     * The model group to which the model belongs.
     */
    modelPackageGroupName?: string;
    /**
     * The name of the model package. The name can be as follows:.
     */
    modelPackageName?: string;
    /**
     * Specifies the validation and image scan statuses of the model package.
     */
    modelPackageStatusDetails?: cdk.IResolvable | CfnModelPackage.ModelPackageStatusDetailsProperty;
    /**
     * The version number of a versioned model.
     */
    modelPackageVersion?: number;
    /**
     * The Amazon Simple Storage Service path where the sample payload are stored.
     */
    samplePayloadUrl?: string;
    /**
     * An optional AWS Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
     */
    securityConfig?: cdk.IResolvable | CfnModelPackage.SecurityConfigProperty;
    /**
     * Indicates if you want to skip model validation.
     */
    skipModelValidation?: string;
    /**
     * A list of algorithms that were used to create a model package.
     */
    sourceAlgorithmSpecification?: cdk.IResolvable | CfnModelPackage.SourceAlgorithmSpecificationProperty;
    /**
     * The URI of the source for the model package.
     */
    sourceUri?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of the tags associated with the model package.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The machine learning task your model package accomplishes.
     */
    task?: string;
    /**
     * Specifies batch transform jobs that SageMaker runs to validate your model package.
     */
    validationSpecification?: cdk.IResolvable | CfnModelPackage.ValidationSpecificationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnModelPackageProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnModelPackage {
    /**
     * Represents the drift check baselines that can be used when the model monitor is set using the model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbaselines.html
     */
    interface DriftCheckBaselinesProperty {
        /**
         * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbaselines.html#cfn-sagemaker-modelpackage-driftcheckbaselines-bias
         */
        readonly bias?: CfnModelPackage.DriftCheckBiasProperty | cdk.IResolvable;
        /**
         * Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbaselines.html#cfn-sagemaker-modelpackage-driftcheckbaselines-explainability
         */
        readonly explainability?: CfnModelPackage.DriftCheckExplainabilityProperty | cdk.IResolvable;
        /**
         * Represents the drift check model data quality baselines that can be used when the model monitor is set using the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbaselines.html#cfn-sagemaker-modelpackage-driftcheckbaselines-modeldataquality
         */
        readonly modelDataQuality?: CfnModelPackage.DriftCheckModelDataQualityProperty | cdk.IResolvable;
        /**
         * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbaselines.html#cfn-sagemaker-modelpackage-driftcheckbaselines-modelquality
         */
        readonly modelQuality?: CfnModelPackage.DriftCheckModelQualityProperty | cdk.IResolvable;
    }
    /**
     * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodeldataquality.html
     */
    interface DriftCheckModelDataQualityProperty {
        /**
         * The drift check model data quality constraints.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodeldataquality.html#cfn-sagemaker-modelpackage-driftcheckmodeldataquality-constraints
         */
        readonly constraints?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
        /**
         * The drift check model data quality statistics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodeldataquality.html#cfn-sagemaker-modelpackage-driftcheckmodeldataquality-statistics
         */
        readonly statistics?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
    }
    /**
     * Details about the metrics source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metricssource.html
     */
    interface MetricsSourceProperty {
        /**
         * The hash key used for the metrics source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metricssource.html#cfn-sagemaker-modelpackage-metricssource-contentdigest
         */
        readonly contentDigest?: string;
        /**
         * The metric source content type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metricssource.html#cfn-sagemaker-modelpackage-metricssource-contenttype
         */
        readonly contentType: string;
        /**
         * The S3 URI for the metrics source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metricssource.html#cfn-sagemaker-modelpackage-metricssource-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbias.html
     */
    interface DriftCheckBiasProperty {
        /**
         * The bias config file for a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbias.html#cfn-sagemaker-modelpackage-driftcheckbias-configfile
         */
        readonly configFile?: CfnModelPackage.FileSourceProperty | cdk.IResolvable;
        /**
         * The post-training constraints.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbias.html#cfn-sagemaker-modelpackage-driftcheckbias-posttrainingconstraints
         */
        readonly postTrainingConstraints?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
        /**
         * The pre-training constraints.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbias.html#cfn-sagemaker-modelpackage-driftcheckbias-pretrainingconstraints
         */
        readonly preTrainingConstraints?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
    }
    /**
     * Contains details regarding the file source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-filesource.html
     */
    interface FileSourceProperty {
        /**
         * The digest of the file source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-filesource.html#cfn-sagemaker-modelpackage-filesource-contentdigest
         */
        readonly contentDigest?: string;
        /**
         * The type of content stored in the file source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-filesource.html#cfn-sagemaker-modelpackage-filesource-contenttype
         */
        readonly contentType?: string;
        /**
         * The Amazon S3 URI for the file source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-filesource.html#cfn-sagemaker-modelpackage-filesource-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodelquality.html
     */
    interface DriftCheckModelQualityProperty {
        /**
         * The drift check model quality constraints.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodelquality.html#cfn-sagemaker-modelpackage-driftcheckmodelquality-constraints
         */
        readonly constraints?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
        /**
         * The drift check model quality statistics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodelquality.html#cfn-sagemaker-modelpackage-driftcheckmodelquality-statistics
         */
        readonly statistics?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
    }
    /**
     * Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckexplainability.html
     */
    interface DriftCheckExplainabilityProperty {
        /**
         * The explainability config file for the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckexplainability.html#cfn-sagemaker-modelpackage-driftcheckexplainability-configfile
         */
        readonly configFile?: CfnModelPackage.FileSourceProperty | cdk.IResolvable;
        /**
         * The drift check explainability constraints.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckexplainability.html#cfn-sagemaker-modelpackage-driftcheckexplainability-constraints
         */
        readonly constraints?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
    }
    /**
     * Contains metrics captured from a model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelmetrics.html
     */
    interface ModelMetricsProperty {
        /**
         * Metrics that measure bias in a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelmetrics.html#cfn-sagemaker-modelpackage-modelmetrics-bias
         */
        readonly bias?: CfnModelPackage.BiasProperty | cdk.IResolvable;
        /**
         * Metrics that help explain a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelmetrics.html#cfn-sagemaker-modelpackage-modelmetrics-explainability
         */
        readonly explainability?: CfnModelPackage.ExplainabilityProperty | cdk.IResolvable;
        /**
         * Metrics that measure the quality of the input data for a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelmetrics.html#cfn-sagemaker-modelpackage-modelmetrics-modeldataquality
         */
        readonly modelDataQuality?: cdk.IResolvable | CfnModelPackage.ModelDataQualityProperty;
        /**
         * Metrics that measure the quality of a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelmetrics.html#cfn-sagemaker-modelpackage-modelmetrics-modelquality
         */
        readonly modelQuality?: cdk.IResolvable | CfnModelPackage.ModelQualityProperty;
    }
    /**
     * Data quality constraints and statistics for a model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modeldataquality.html
     */
    interface ModelDataQualityProperty {
        /**
         * Data quality constraints for a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modeldataquality.html#cfn-sagemaker-modelpackage-modeldataquality-constraints
         */
        readonly constraints?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
        /**
         * Data quality statistics for a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modeldataquality.html#cfn-sagemaker-modelpackage-modeldataquality-statistics
         */
        readonly statistics?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
    }
    /**
     * Contains bias metrics for a model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-bias.html
     */
    interface BiasProperty {
        /**
         * The post-training bias report for a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-bias.html#cfn-sagemaker-modelpackage-bias-posttrainingreport
         */
        readonly postTrainingReport?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
        /**
         * The pre-training bias report for a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-bias.html#cfn-sagemaker-modelpackage-bias-pretrainingreport
         */
        readonly preTrainingReport?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
        /**
         * The bias report for a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-bias.html#cfn-sagemaker-modelpackage-bias-report
         */
        readonly report?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
    }
    /**
     * Model quality statistics and constraints.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelquality.html
     */
    interface ModelQualityProperty {
        /**
         * Model quality constraints.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelquality.html#cfn-sagemaker-modelpackage-modelquality-constraints
         */
        readonly constraints?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
        /**
         * Model quality statistics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelquality.html#cfn-sagemaker-modelpackage-modelquality-statistics
         */
        readonly statistics?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
    }
    /**
     * Contains explainability metrics for a model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-explainability.html
     */
    interface ExplainabilityProperty {
        /**
         * The explainability report for a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-explainability.html#cfn-sagemaker-modelpackage-explainability-report
         */
        readonly report?: cdk.IResolvable | CfnModelPackage.MetricsSourceProperty;
    }
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metadataproperties.html
     */
    interface MetadataPropertiesProperty {
        /**
         * The commit ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metadataproperties.html#cfn-sagemaker-modelpackage-metadataproperties-commitid
         */
        readonly commitId?: string;
        /**
         * The entity this entity was generated by.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metadataproperties.html#cfn-sagemaker-modelpackage-metadataproperties-generatedby
         */
        readonly generatedBy?: string;
        /**
         * The project ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metadataproperties.html#cfn-sagemaker-modelpackage-metadataproperties-projectid
         */
        readonly projectId?: string;
        /**
         * The repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metadataproperties.html#cfn-sagemaker-modelpackage-metadataproperties-repository
         */
        readonly repository?: string;
    }
    /**
     * Specifies batch transform jobs that SageMaker runs to validate your model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationspecification.html
     */
    interface ValidationSpecificationProperty {
        /**
         * An array of `ModelPackageValidationProfile` objects, each of which specifies a batch transform job that SageMaker runs to validate your model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationspecification.html#cfn-sagemaker-modelpackage-validationspecification-validationprofiles
         */
        readonly validationProfiles: Array<cdk.IResolvable | CfnModelPackage.ValidationProfileProperty> | cdk.IResolvable;
        /**
         * The IAM roles to be used for the validation of the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationspecification.html#cfn-sagemaker-modelpackage-validationspecification-validationrole
         */
        readonly validationRole: string;
    }
    /**
     * Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.
     *
     * The data provided in the validation profile is made available to your buyers on AWS Marketplace.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationprofile.html
     */
    interface ValidationProfileProperty {
        /**
         * The name of the profile for the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationprofile.html#cfn-sagemaker-modelpackage-validationprofile-profilename
         */
        readonly profileName: string;
        /**
         * The `TransformJobDefinition` object that describes the transform job used for the validation of the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationprofile.html#cfn-sagemaker-modelpackage-validationprofile-transformjobdefinition
         */
        readonly transformJobDefinition: cdk.IResolvable | CfnModelPackage.TransformJobDefinitionProperty;
    }
    /**
     * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html
     */
    interface TransformJobDefinitionProperty {
        /**
         * A string that determines the number of records included in a single mini-batch.
         *
         * `SingleRecord` means only one record is used per mini-batch. `MultiRecord` means a mini-batch is set to contain as many records that can fit within the `MaxPayloadInMB` limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html#cfn-sagemaker-modelpackage-transformjobdefinition-batchstrategy
         */
        readonly batchStrategy?: string;
        /**
         * The environment variables to set in the Docker container.
         *
         * We support up to 16 key and values entries in the map.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html#cfn-sagemaker-modelpackage-transformjobdefinition-environment
         */
        readonly environment?: cdk.IResolvable | Record<string, string>;
        /**
         * The maximum number of parallel requests that can be sent to each instance in a transform job.
         *
         * The default value is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html#cfn-sagemaker-modelpackage-transformjobdefinition-maxconcurrenttransforms
         */
        readonly maxConcurrentTransforms?: number;
        /**
         * The maximum payload size allowed, in MB.
         *
         * A payload is the data portion of a record (without metadata).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html#cfn-sagemaker-modelpackage-transformjobdefinition-maxpayloadinmb
         */
        readonly maxPayloadInMb?: number;
        /**
         * A description of the input source and the way the transform job consumes it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html#cfn-sagemaker-modelpackage-transformjobdefinition-transforminput
         */
        readonly transformInput: cdk.IResolvable | CfnModelPackage.TransformInputProperty;
        /**
         * Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html#cfn-sagemaker-modelpackage-transformjobdefinition-transformoutput
         */
        readonly transformOutput: cdk.IResolvable | CfnModelPackage.TransformOutputProperty;
        /**
         * Identifies the ML compute instances for the transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html#cfn-sagemaker-modelpackage-transformjobdefinition-transformresources
         */
        readonly transformResources: cdk.IResolvable | CfnModelPackage.TransformResourcesProperty;
    }
    /**
     * Describes the resources, including ML instance types and ML instance count, to use for transform job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformresources.html
     */
    interface TransformResourcesProperty {
        /**
         * The number of ML compute instances to use in the transform job.
         *
         * The default value is `1` , and the maximum is `100` . For distributed transform jobs, specify a value greater than `1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformresources.html#cfn-sagemaker-modelpackage-transformresources-instancecount
         */
        readonly instanceCount: number;
        /**
         * The ML compute instance type for the transform job.
         *
         * If you are using built-in algorithms to transform moderately sized datasets, we recommend using ml.m4.xlarge or `ml.m5.large` instance types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformresources.html#cfn-sagemaker-modelpackage-transformresources-instancetype
         */
        readonly instanceType: string;
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job.
         *
         * > Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a `VolumeKmsKeyId` when using an instance type with local storage.
         * >
         * > For a list of instance types that support local instance storage, see [Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes) .
         * >
         * > For more information about local instance storage encryption, see [SSD Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html) .
         *
         * The `VolumeKmsKeyId` can be any of the following formats:
         *
         * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
         * - Key ARN: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
         * - Alias name: `alias/ExampleAlias`
         * - Alias name ARN: `arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformresources.html#cfn-sagemaker-modelpackage-transformresources-volumekmskeyid
         */
        readonly volumeKmsKeyId?: string;
    }
    /**
     * Describes the results of a transform job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformoutput.html
     */
    interface TransformOutputProperty {
        /**
         * The MIME type used to specify the output data.
         *
         * Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformoutput.html#cfn-sagemaker-modelpackage-transformoutput-accept
         */
        readonly accept?: string;
        /**
         * Defines how to assemble the results of the transform job as a single S3 object.
         *
         * Choose a format that is most convenient to you. To concatenate the results in binary format, specify `None` . To add a newline character at the end of every transformed record, specify `Line` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformoutput.html#cfn-sagemaker-modelpackage-transformoutput-assemblewith
         */
        readonly assembleWith?: string;
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
         *
         * The `KmsKeyId` can be any of the following formats:
         *
         * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
         * - Key ARN: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
         * - Alias name: `alias/ExampleAlias`
         * - Alias name ARN: `arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias`
         *
         * If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see [KMS-Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Developer Guide.*
         *
         * The KMS key policy must grant permission to the IAM role that you specify in your [CreateModel](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html) request. For more information, see [Using Key Policies in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the *AWS Key Management Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformoutput.html#cfn-sagemaker-modelpackage-transformoutput-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job.
         *
         * For example, `s3://bucket-name/key-name-prefix` .
         *
         * For every S3 object used as input for the transform job, batch transform stores the transformed data with an . `out` suffix in a corresponding subfolder in the location in the output prefix. For example, for the input data stored at `s3://bucket-name/input-name-prefix/dataset01/data.csv` , batch transform stores the transformed data at `s3://bucket-name/output-name-prefix/input-name-prefix/data.csv.out` . Batch transform doesn't upload partially processed objects. For an input S3 object that contains multiple records, it creates an . `out` file only if the transform job succeeds on the entire file. When the input contains multiple S3 objects, the batch transform job processes the listed S3 objects and uploads only the output for successfully processed objects. If any object fails in the transform job batch transform marks the job as failed to prompt investigation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformoutput.html#cfn-sagemaker-modelpackage-transformoutput-s3outputpath
         */
        readonly s3OutputPath: string;
    }
    /**
     * Describes the input source of a transform job and the way the transform job consumes it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transforminput.html
     */
    interface TransformInputProperty {
        /**
         * If your transform data is compressed, specify the compression type.
         *
         * Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is `None` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transforminput.html#cfn-sagemaker-modelpackage-transforminput-compressiontype
         */
        readonly compressionType?: string;
        /**
         * The multipurpose internet mail extension (MIME) type of the data.
         *
         * Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transforminput.html#cfn-sagemaker-modelpackage-transforminput-contenttype
         */
        readonly contentType?: string;
        /**
         * Describes the location of the channel data, which is, the S3 location of the input data that the model can consume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transforminput.html#cfn-sagemaker-modelpackage-transforminput-datasource
         */
        readonly dataSource: CfnModelPackage.DataSourceProperty | cdk.IResolvable;
        /**
         * The method to use to split the transform job's data files into smaller batches.
         *
         * Splitting is necessary when the total size of each object is too large to fit in a single request. You can also use data splitting to improve performance by processing multiple concurrent mini-batches. The default value for `SplitType` is `None` , which indicates that input data files are not split, and request payloads contain the entire contents of an input object. Set the value of this parameter to `Line` to split records on a newline character boundary. `SplitType` also supports a number of record-oriented binary data formats. Currently, the supported record formats are:
         *
         * - RecordIO
         * - TFRecord
         *
         * When splitting is enabled, the size of a mini-batch depends on the values of the `BatchStrategy` and `MaxPayloadInMB` parameters. When the value of `BatchStrategy` is `MultiRecord` , Amazon SageMaker sends the maximum number of records in each request, up to the `MaxPayloadInMB` limit. If the value of `BatchStrategy` is `SingleRecord` , Amazon SageMaker sends individual records in each request.
         *
         * > Some data formats represent a record as a binary payload wrapped with extra padding bytes. When splitting is applied to a binary data format, padding is removed if the value of `BatchStrategy` is set to `SingleRecord` . Padding is not removed if the value of `BatchStrategy` is set to `MultiRecord` .
         * >
         * > For more information about `RecordIO` , see [Create a Dataset Using RecordIO](https://docs.aws.amazon.com/https://mxnet.apache.org/api/faq/recordio) in the MXNet documentation. For more information about `TFRecord` , see [Consuming TFRecord data](https://docs.aws.amazon.com/https://www.tensorflow.org/guide/data#consuming_tfrecord_data) in the TensorFlow documentation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transforminput.html#cfn-sagemaker-modelpackage-transforminput-splittype
         */
        readonly splitType?: string;
    }
    /**
     * Describes the location of the channel data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-datasource.html
     */
    interface DataSourceProperty {
        /**
         * The S3 location of the data source that is associated with a channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-datasource.html#cfn-sagemaker-modelpackage-datasource-s3datasource
         */
        readonly s3DataSource: cdk.IResolvable | CfnModelPackage.S3DataSourceProperty;
    }
    /**
     * Describes the S3 data source.
     *
     * Your input bucket must be in the same AWS region as your training job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3datasource.html
     */
    interface S3DataSourceProperty {
        /**
         * If you choose `S3Prefix` , `S3Uri` identifies a key name prefix.
         *
         * SageMaker uses all objects that match the specified key name prefix for model training.
         *
         * If you choose `ManifestFile` , `S3Uri` identifies an object that is a manifest file containing a list of object keys that you want SageMaker to use for model training.
         *
         * If you choose `AugmentedManifestFile` , `S3Uri` identifies an object that is an augmented manifest file in JSON lines format. This file contains the data you want to use for model training. `AugmentedManifestFile` can only be used if the Channel's input mode is `Pipe` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3datasource.html#cfn-sagemaker-modelpackage-s3datasource-s3datatype
         */
        readonly s3DataType: string;
        /**
         * Depending on the value specified for the `S3DataType` , identifies either a key name prefix or a manifest.
         *
         * For example:
         *
         * - A key name prefix might look like this: `s3://bucketname/exampleprefix/`
         * - A manifest might look like this: `s3://bucketname/example.manifest`
         *
         * A manifest is an S3 object which is a JSON file consisting of an array of elements. The first element is a prefix which is followed by one or more suffixes. SageMaker appends the suffix elements to the prefix to get a full set of `S3Uri` . Note that the prefix must be a valid non-empty `S3Uri` that precludes users from specifying a manifest whose individual `S3Uri` is sourced from different S3 buckets.
         *
         * The following code example shows a valid manifest format:
         *
         * `[ {"prefix": "s3://customer_bucket/some/prefix/"},`
         *
         * `"relative/path/to/custdata-1",`
         *
         * `"relative/path/custdata-2",`
         *
         * `...`
         *
         * `"relative/path/custdata-N"`
         *
         * `]`
         *
         * This JSON is equivalent to the following `S3Uri` list:
         *
         * `s3://customer_bucket/some/prefix/relative/path/to/custdata-1`
         *
         * `s3://customer_bucket/some/prefix/relative/path/custdata-2`
         *
         * `...`
         *
         * `s3://customer_bucket/some/prefix/relative/path/custdata-N`
         *
         * The complete set of `S3Uri` in this manifest is the input data for the channel for this data source. The object that each `S3Uri` points to must be readable by the IAM role that SageMaker uses to perform tasks on your behalf.
         *
         * Your input bucket must be located in same AWS region as your training job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3datasource.html#cfn-sagemaker-modelpackage-s3datasource-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * A list of algorithms that were used to create a model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithmspecification.html
     */
    interface SourceAlgorithmSpecificationProperty {
        /**
         * A list of the algorithms that were used to create a model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithmspecification.html#cfn-sagemaker-modelpackage-sourcealgorithmspecification-sourcealgorithms
         */
        readonly sourceAlgorithms: Array<cdk.IResolvable | CfnModelPackage.SourceAlgorithmProperty> | cdk.IResolvable;
    }
    /**
     * Specifies an algorithm that was used to create the model package.
     *
     * The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithm.html
     */
    interface SourceAlgorithmProperty {
        /**
         * The name of an algorithm that was used to create the model package.
         *
         * The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithm.html#cfn-sagemaker-modelpackage-sourcealgorithm-algorithmname
         */
        readonly algorithmName: string;
        /**
         * The Amazon S3 path where the model artifacts, which result from model training, are stored.
         *
         * This path must point to a single `gzip` compressed tar archive ( `.tar.gz` suffix).
         *
         * > The model artifacts must be in an S3 bucket that is in the same AWS region as the algorithm.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithm.html#cfn-sagemaker-modelpackage-sourcealgorithm-modeldataurl
         */
        readonly modelDataUrl?: string;
    }
    /**
     * Specifies the validation and image scan statuses of the model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusdetails.html
     */
    interface ModelPackageStatusDetailsProperty {
        /**
         * The validation status of the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusdetails.html#cfn-sagemaker-modelpackage-modelpackagestatusdetails-validationstatuses
         */
        readonly validationStatuses?: Array<cdk.IResolvable | CfnModelPackage.ModelPackageStatusItemProperty> | cdk.IResolvable;
    }
    /**
     * Represents the overall status of a model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusitem.html
     */
    interface ModelPackageStatusItemProperty {
        /**
         * if the overall status is `Failed` , the reason for the failure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusitem.html#cfn-sagemaker-modelpackage-modelpackagestatusitem-failurereason
         */
        readonly failureReason?: string;
        /**
         * The name of the model package for which the overall status is being reported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusitem.html#cfn-sagemaker-modelpackage-modelpackagestatusitem-name
         */
        readonly name: string;
        /**
         * The current status.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusitem.html#cfn-sagemaker-modelpackage-modelpackagestatusitem-status
         */
        readonly status: string;
    }
    /**
     * A structure of additional Inference Specification.
     *
     * Additional Inference Specification specifies details about inference jobs that can be run with models based on this model package
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html
     */
    interface AdditionalInferenceSpecificationDefinitionProperty {
        /**
         * The Amazon ECR registry path of the Docker image that contains the inference code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-containers
         */
        readonly containers: Array<cdk.IResolvable | CfnModelPackage.ModelPackageContainerDefinitionProperty> | cdk.IResolvable;
        /**
         * A description of the additional Inference specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-description
         */
        readonly description?: string;
        /**
         * A unique name to identify the additional inference specification.
         *
         * The name must be unique within the list of your additional inference specifications for a particular model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-name
         */
        readonly name: string;
        /**
         * The supported MIME types for the input data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-supportedcontenttypes
         */
        readonly supportedContentTypes?: Array<string>;
        /**
         * A list of the instance types that are used to generate inferences in real-time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-supportedrealtimeinferenceinstancetypes
         */
        readonly supportedRealtimeInferenceInstanceTypes?: Array<string>;
        /**
         * The supported MIME types for the output data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-supportedresponsemimetypes
         */
        readonly supportedResponseMimeTypes?: Array<string>;
        /**
         * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-supportedtransforminstancetypes
         */
        readonly supportedTransformInstanceTypes?: Array<string>;
    }
    /**
     * Describes the Docker container for the model package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html
     */
    interface ModelPackageContainerDefinitionProperty {
        /**
         * The DNS host name for the Docker container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-containerhostname
         */
        readonly containerHostname?: string;
        /**
         * The environment variables to set in the Docker container.
         *
         * Each key and value in the `Environment` string to string map can have length of up to 1024. We support up to 16 entries in the map.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-environment
         */
        readonly environment?: cdk.IResolvable | Record<string, string>;
        /**
         * The machine learning framework of the model package container image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-framework
         */
        readonly framework?: string;
        /**
         * The framework version of the Model Package Container Image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-frameworkversion
         */
        readonly frameworkVersion?: string;
        /**
         * The Amazon Elastic Container Registry (Amazon ECR) path where inference code is stored.
         *
         * If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both `registry/repository[:tag]` and `registry/repository[@digest]` image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-image
         */
        readonly image: string;
        /**
         * An MD5 hash of the training algorithm that identifies the Docker image used for training.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-imagedigest
         */
        readonly imageDigest?: string;
        /**
         * Specifies the location of ML model data to deploy during endpoint creation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-modeldatasource
         */
        readonly modelDataSource?: cdk.IResolvable | CfnModelPackage.ModelDataSourceProperty;
        /**
         * The Amazon S3 path where the model artifacts, which result from model training, are stored.
         *
         * This path must point to a single `gzip` compressed tar archive ( `.tar.gz` suffix).
         *
         * > The model artifacts must be in an S3 bucket that is in the same region as the model package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-modeldataurl
         */
        readonly modelDataUrl?: string;
        /**
         * A structure with Model Input details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-modelinput
         */
        readonly modelInput?: any | cdk.IResolvable;
        /**
         * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
         *
         * You can find a list of benchmarked models by calling `ListModelMetadata` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-nearestmodelname
         */
        readonly nearestModelName?: string;
    }
    /**
     * Specifies the location of ML model data to deploy.
     *
     * If specified, you must specify one and only one of the available data sources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modeldatasource.html
     */
    interface ModelDataSourceProperty {
        /**
         * Specifies the S3 location of ML model data to deploy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modeldatasource.html#cfn-sagemaker-modelpackage-modeldatasource-s3datasource
         */
        readonly s3DataSource?: cdk.IResolvable | CfnModelPackage.S3ModelDataSourceProperty;
    }
    /**
     * Specifies the S3 location of ML model data to deploy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3modeldatasource.html
     */
    interface S3ModelDataSourceProperty {
        /**
         * Specifies how the ML model data is prepared.
         *
         * If you choose `Gzip` and choose `S3Object` as the value of `S3DataType` , `S3Uri` identifies an object that is a gzip-compressed TAR archive. SageMaker will attempt to decompress and untar the object during model deployment.
         *
         * If you choose `None` and chooose `S3Object` as the value of `S3DataType` , `S3Uri` identifies an object that represents an uncompressed ML model to deploy.
         *
         * If you choose None and choose `S3Prefix` as the value of `S3DataType` , `S3Uri` identifies a key name prefix, under which all objects represents the uncompressed ML model to deploy.
         *
         * If you choose None, then SageMaker will follow rules below when creating model data files under /opt/ml/model directory for use by your inference code:
         *
         * - If you choose `S3Object` as the value of `S3DataType` , then SageMaker will split the key of the S3 object referenced by `S3Uri` by slash (/), and use the last part as the filename of the file holding the content of the S3 object.
         * - If you choose `S3Prefix` as the value of `S3DataType` , then for each S3 object under the key name pefix referenced by `S3Uri` , SageMaker will trim its key by the prefix, and use the remainder as the path (relative to `/opt/ml/model` ) of the file holding the content of the S3 object. SageMaker will split the remainder by slash (/), using intermediate parts as directory names and the last part as filename of the file holding the content of the S3 object.
         * - Do not use any of the following as file names or directory names:
         *
         * - An empty or blank string
         * - A string which contains null bytes
         * - A string longer than 255 bytes
         * - A single dot ( `.` )
         * - A double dot ( `..` )
         * - Ambiguous file names will result in model deployment failure. For example, if your uncompressed ML model consists of two S3 objects `s3://mybucket/model/weights` and `s3://mybucket/model/weights/part1` and you specify `s3://mybucket/model/` as the value of `S3Uri` and `S3Prefix` as the value of `S3DataType` , then it will result in name clash between `/opt/ml/model/weights` (a regular file) and `/opt/ml/model/weights/` (a directory).
         * - Do not organize the model artifacts in [S3 console using folders](https://docs.aws.amazon.com//AmazonS3/latest/userguide/using-folders.html) . When you create a folder in S3 console, S3 creates a 0-byte object with a key set to the folder name you provide. They key of the 0-byte object ends with a slash (/) which violates SageMaker restrictions on model artifact file names, leading to model deployment failure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3modeldatasource.html#cfn-sagemaker-modelpackage-s3modeldatasource-compressiontype
         */
        readonly compressionType: string;
        /**
         * Specifies the access configuration file for the ML model.
         *
         * You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig` . You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3modeldatasource.html#cfn-sagemaker-modelpackage-s3modeldatasource-modelaccessconfig
         */
        readonly modelAccessConfig?: cdk.IResolvable | CfnModelPackage.ModelAccessConfigProperty;
        /**
         * Specifies the type of ML model data to deploy.
         *
         * If you choose `S3Prefix` , `S3Uri` identifies a key name prefix. SageMaker uses all objects that match the specified key name prefix as part of the ML model data to deploy. A valid key name prefix identified by `S3Uri` always ends with a forward slash (/).
         *
         * If you choose `S3Object` , `S3Uri` identifies an object that is the ML model data to deploy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3modeldatasource.html#cfn-sagemaker-modelpackage-s3modeldatasource-s3datatype
         */
        readonly s3DataType: string;
        /**
         * Specifies the S3 path of ML model data to deploy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3modeldatasource.html#cfn-sagemaker-modelpackage-s3modeldatasource-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * The access configuration file to control access to the ML model.
     *
     * You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig` .
     *
     * - If you are a Jumpstart user, see the [End-user license agreements](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula) section for more details on accepting the EULA.
     * - If you are an AutoML user, see the *Optional Parameters* section of *Create an AutoML job to fine-tune text generation models using the API* for details on [How to set the EULA acceptance when fine-tuning a model using the AutoML API](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelaccessconfig.html
     */
    interface ModelAccessConfigProperty {
        /**
         * Specifies agreement to the model end-user license agreement (EULA).
         *
         * The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelaccessconfig.html#cfn-sagemaker-modelpackage-modelaccessconfig-accepteula
         */
        readonly acceptEula: boolean | cdk.IResolvable;
    }
    /**
     * Defines how to perform inference generation after a training job is run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-inferencespecification.html
     */
    interface InferenceSpecificationProperty {
        /**
         * The Amazon ECR registry path of the Docker image that contains the inference code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-inferencespecification.html#cfn-sagemaker-modelpackage-inferencespecification-containers
         */
        readonly containers: Array<cdk.IResolvable | CfnModelPackage.ModelPackageContainerDefinitionProperty> | cdk.IResolvable;
        /**
         * The supported MIME types for the input data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-inferencespecification.html#cfn-sagemaker-modelpackage-inferencespecification-supportedcontenttypes
         */
        readonly supportedContentTypes: Array<string>;
        /**
         * A list of the instance types that are used to generate inferences in real-time.
         *
         * This parameter is required for unversioned models, and optional for versioned models.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-inferencespecification.html#cfn-sagemaker-modelpackage-inferencespecification-supportedrealtimeinferenceinstancetypes
         */
        readonly supportedRealtimeInferenceInstanceTypes?: Array<string>;
        /**
         * The supported MIME types for the output data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-inferencespecification.html#cfn-sagemaker-modelpackage-inferencespecification-supportedresponsemimetypes
         */
        readonly supportedResponseMimeTypes: Array<string>;
        /**
         * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
         *
         * This parameter is required for unversioned models, and optional for versioned models.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-inferencespecification.html#cfn-sagemaker-modelpackage-inferencespecification-supportedtransforminstancetypes
         */
        readonly supportedTransformInstanceTypes?: Array<string>;
    }
    /**
     * An Amazon SageMaker Model Card.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelcard.html
     */
    interface ModelCardProperty {
        /**
         * The content of the model card.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelcard.html#cfn-sagemaker-modelpackage-modelcard-modelcardcontent
         */
        readonly modelCardContent: string;
        /**
         * The approval status of the model card within your organization.
         *
         * Different organizations might have different criteria for model card review and approval.
         *
         * - `Draft` : The model card is a work in progress.
         * - `PendingReview` : The model card is pending review.
         * - `Approved` : The model card is approved.
         * - `Archived` : The model card is archived. No more updates should be made to the model card, but it can still be exported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelcard.html#cfn-sagemaker-modelpackage-modelcard-modelcardstatus
         */
        readonly modelCardStatus: string;
    }
    /**
     * An optional AWS Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-securityconfig.html
     */
    interface SecurityConfigProperty {
        /**
         * The AWS KMS Key ID (KMSKeyId) used for encryption of model package information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-securityconfig.html#cfn-sagemaker-modelpackage-securityconfig-kmskeyid
         */
        readonly kmsKeyId: string;
    }
    /**
     * Input object for the model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelinput.html
     */
    interface ModelInputProperty {
        /**
         * The input configuration object for the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelinput.html#cfn-sagemaker-modelpackage-modelinput-datainputconfig
         */
        readonly dataInputConfig: string;
    }
}
/**
 * Properties for defining a `CfnModelPackage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html
 */
export interface CfnModelPackageProps {
    /**
     * An array of additional Inference Specification objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecifications
     */
    readonly additionalInferenceSpecifications?: Array<CfnModelPackage.AdditionalInferenceSpecificationDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An array of additional Inference Specification objects to be added to the existing array.
     *
     * The total number of additional Inference Specification objects cannot exceed 15. Each additional Inference Specification object specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecificationstoadd
     */
    readonly additionalInferenceSpecificationsToAdd?: Array<CfnModelPackage.AdditionalInferenceSpecificationDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A description provided when the model approval is set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-approvaldescription
     */
    readonly approvalDescription?: string;
    /**
     * Whether the model package is to be certified to be listed on AWS Marketplace.
     *
     * For information about listing model packages on AWS Marketplace, see [List Your Algorithm or Model Package on AWS Marketplace](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-list.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-certifyformarketplace
     */
    readonly certifyForMarketplace?: boolean | cdk.IResolvable;
    /**
     * A unique token that guarantees that the call to this API is idempotent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-clienttoken
     */
    readonly clientToken?: string;
    /**
     * The metadata properties for the model package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-customermetadataproperties
     */
    readonly customerMetadataProperties?: cdk.IResolvable | Record<string, string>;
    /**
     * The machine learning domain of your model package and its components.
     *
     * Common machine learning domains include computer vision and natural language processing.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-domain
     */
    readonly domain?: string;
    /**
     * Represents the drift check baselines that can be used when the model monitor is set using the model package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckbaselines
     */
    readonly driftCheckBaselines?: CfnModelPackage.DriftCheckBaselinesProperty | cdk.IResolvable;
    /**
     * Defines how to perform inference generation after a training job is run.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-inferencespecification
     */
    readonly inferenceSpecification?: CfnModelPackage.InferenceSpecificationProperty | cdk.IResolvable;
    /**
     * The last time the model package was modified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-lastmodifiedtime
     */
    readonly lastModifiedTime?: string;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-metadataproperties
     */
    readonly metadataProperties?: cdk.IResolvable | CfnModelPackage.MetadataPropertiesProperty;
    /**
     * The approval status of the model. This can be one of the following values.
     *
     * - `APPROVED` - The model is approved
     * - `REJECTED` - The model is rejected.
     * - `PENDING_MANUAL_APPROVAL` - The model is waiting for manual approval.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelapprovalstatus
     */
    readonly modelApprovalStatus?: string;
    /**
     * An Amazon SageMaker Model Card.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelcard
     */
    readonly modelCard?: cdk.IResolvable | CfnModelPackage.ModelCardProperty;
    /**
     * Metrics for the model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelmetrics
     */
    readonly modelMetrics?: cdk.IResolvable | CfnModelPackage.ModelMetricsProperty;
    /**
     * The description of the model package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagedescription
     */
    readonly modelPackageDescription?: string;
    /**
     * The model group to which the model belongs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagegroupname
     */
    readonly modelPackageGroupName?: string;
    /**
     * The name of the model package. The name can be as follows:.
     *
     * - For a versioned model, the name is automatically generated by SageMaker Model Registry and follows the format ' `ModelPackageGroupName/ModelPackageVersion` '.
     * - For an unversioned model, you must provide the name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagename
     */
    readonly modelPackageName?: string;
    /**
     * Specifies the validation and image scan statuses of the model package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagestatusdetails
     */
    readonly modelPackageStatusDetails?: cdk.IResolvable | CfnModelPackage.ModelPackageStatusDetailsProperty;
    /**
     * The version number of a versioned model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackageversion
     */
    readonly modelPackageVersion?: number;
    /**
     * The Amazon Simple Storage Service path where the sample payload are stored.
     *
     * This path must point to a single gzip compressed tar archive (.tar.gz suffix).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-samplepayloadurl
     */
    readonly samplePayloadUrl?: string;
    /**
     * An optional AWS Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-securityconfig
     */
    readonly securityConfig?: cdk.IResolvable | CfnModelPackage.SecurityConfigProperty;
    /**
     * Indicates if you want to skip model validation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-skipmodelvalidation
     */
    readonly skipModelValidation?: string;
    /**
     * A list of algorithms that were used to create a model package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-sourcealgorithmspecification
     */
    readonly sourceAlgorithmSpecification?: cdk.IResolvable | CfnModelPackage.SourceAlgorithmSpecificationProperty;
    /**
     * The URI of the source for the model package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-sourceuri
     */
    readonly sourceUri?: string;
    /**
     * A list of the tags associated with the model package.
     *
     * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *AWS General Reference Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The machine learning task your model package accomplishes.
     *
     * Common machine learning tasks include object detection and image classification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-task
     */
    readonly task?: string;
    /**
     * Specifies batch transform jobs that SageMaker runs to validate your model package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-validationspecification
     */
    readonly validationSpecification?: cdk.IResolvable | CfnModelPackage.ValidationSpecificationProperty;
}
/**
 * A group of versioned models in the Model Registry.
 *
 * @cloudformationResource AWS::SageMaker::ModelPackageGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html
 */
export declare class CfnModelPackageGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModelPackageGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModelPackageGroup;
    /**
     * The time when the model group was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The Amazon Resource Name (ARN) of the model group.
     *
     * @cloudformationAttribute ModelPackageGroupArn
     */
    readonly attrModelPackageGroupArn: string;
    /**
     * The status of the model group.
     *
     * @cloudformationAttribute ModelPackageGroupStatus
     */
    readonly attrModelPackageGroupStatus: string;
    /**
     * The description for the model group.
     */
    modelPackageGroupDescription?: string;
    /**
     * The name of the model group.
     */
    modelPackageGroupName: string;
    /**
     * A resouce policy to control access to a model group.
     */
    modelPackageGroupPolicy?: any | cdk.IResolvable;
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
    constructor(scope: constructs.Construct, id: string, props: CfnModelPackageGroupProps);
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
 * Properties for defining a `CfnModelPackageGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html
 */
export interface CfnModelPackageGroupProps {
    /**
     * The description for the model group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html#cfn-sagemaker-modelpackagegroup-modelpackagegroupdescription
     */
    readonly modelPackageGroupDescription?: string;
    /**
     * The name of the model group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html#cfn-sagemaker-modelpackagegroup-modelpackagegroupname
     */
    readonly modelPackageGroupName: string;
    /**
     * A resouce policy to control access to a model group.
     *
     * For information about resoure policies, see [Identity-based policies and resource-based policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html) in the *AWS Identity and Access Management User Guide.* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html#cfn-sagemaker-modelpackagegroup-modelpackagegrouppolicy
     */
    readonly modelPackageGroupPolicy?: any | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html#cfn-sagemaker-modelpackagegroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a definition for a job that monitors model quality and drift.
 *
 * For information about model monitor, see [Amazon SageMaker Model Monitor](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html) .
 *
 * @cloudformationResource AWS::SageMaker::ModelQualityJobDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html
 */
export declare class CfnModelQualityJobDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModelQualityJobDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModelQualityJobDefinition;
    /**
     * The time when the job definition was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The Amazon Resource Name (ARN) of the job definition.
     *
     * @cloudformationAttribute JobDefinitionArn
     */
    readonly attrJobDefinitionArn: string;
    /**
     * The name of the endpoint used to run the monitoring job.
     */
    endpointName?: string;
    /**
     * The name of the monitoring job definition.
     */
    jobDefinitionName?: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     */
    jobResources: cdk.IResolvable | CfnModelQualityJobDefinition.MonitoringResourcesProperty;
    /**
     * Container image configuration object for the monitoring job.
     */
    modelQualityAppSpecification: cdk.IResolvable | CfnModelQualityJobDefinition.ModelQualityAppSpecificationProperty;
    /**
     * Specifies the constraints and baselines for the monitoring job.
     */
    modelQualityBaselineConfig?: cdk.IResolvable | CfnModelQualityJobDefinition.ModelQualityBaselineConfigProperty;
    /**
     * A list of the inputs that are monitored.
     */
    modelQualityJobInput: cdk.IResolvable | CfnModelQualityJobDefinition.ModelQualityJobInputProperty;
    /**
     * The output configuration for monitoring jobs.
     */
    modelQualityJobOutputConfig: cdk.IResolvable | CfnModelQualityJobDefinition.MonitoringOutputConfigProperty;
    /**
     * Specifies the network configuration for the monitoring job.
     */
    networkConfig?: cdk.IResolvable | CfnModelQualityJobDefinition.NetworkConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     */
    roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     */
    stoppingCondition?: cdk.IResolvable | CfnModelQualityJobDefinition.StoppingConditionProperty;
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
    constructor(scope: constructs.Construct, id: string, props: CfnModelQualityJobDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnModelQualityJobDefinition {
    /**
     * Container image configuration object for the monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html
     */
    interface ModelQualityAppSpecificationProperty {
        /**
         * An array of arguments for the container used to run the monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-containerarguments
         */
        readonly containerArguments?: Array<string>;
        /**
         * Specifies the entrypoint for a container that the monitoring job runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-containerentrypoint
         */
        readonly containerEntrypoint?: Array<string>;
        /**
         * Sets the environment variables in the container that the monitoring job runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-environment
         */
        readonly environment?: cdk.IResolvable | Record<string, string>;
        /**
         * The address of the container image that the monitoring job runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-imageuri
         */
        readonly imageUri: string;
        /**
         * An Amazon S3 URI to a script that is called after analysis has been performed.
         *
         * Applicable only for the built-in (first party) containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-postanalyticsprocessorsourceuri
         */
        readonly postAnalyticsProcessorSourceUri?: string;
        /**
         * The machine learning problem type of the model that the monitoring job monitors.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-problemtype
         */
        readonly problemType: string;
        /**
         * An Amazon S3 URI to a script that is called per row prior to running analysis.
         *
         * It can base64 decode the payload and convert it into a flattened JSON so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-recordpreprocessorsourceuri
         */
        readonly recordPreprocessorSourceUri?: string;
    }
    /**
     * Specifies a limit to how long a job can run.
     *
     * When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs.
     *
     * To stop a training job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
     *
     * The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with `CreateModel` .
     *
     * > The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-stoppingcondition.html
     */
    interface StoppingConditionProperty {
        /**
         * The maximum length of time, in seconds, that a training or compilation job can run before it is stopped.
         *
         * For compilation jobs, if the job does not complete during this time, a `TimeOut` error is generated. We recommend starting with 900 seconds and increasing as necessary based on your model.
         *
         * For all other jobs, if the job does not complete during this time, SageMaker ends the job. When `RetryStrategy` is specified in the job request, `MaxRuntimeInSeconds` specifies the maximum time for all of the attempts in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.
         *
         * The maximum time that a `TrainingJob` can run in total, including any time spent publishing metrics or archiving and uploading models after it has been stopped, is 30 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-stoppingcondition.html#cfn-sagemaker-modelqualityjobdefinition-stoppingcondition-maxruntimeinseconds
         */
        readonly maxRuntimeInSeconds: number;
    }
    /**
     * Configuration for monitoring constraints and monitoring statistics.
     *
     * These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualitybaselineconfig.html
     */
    interface ModelQualityBaselineConfigProperty {
        /**
         * The name of the job that performs baselining for the monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualitybaselineconfig.html#cfn-sagemaker-modelqualityjobdefinition-modelqualitybaselineconfig-baseliningjobname
         */
        readonly baseliningJobName?: string;
        /**
         * The constraints resource for a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualitybaselineconfig.html#cfn-sagemaker-modelqualityjobdefinition-modelqualitybaselineconfig-constraintsresource
         */
        readonly constraintsResource?: CfnModelQualityJobDefinition.ConstraintsResourceProperty | cdk.IResolvable;
    }
    /**
     * The constraints resource for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-constraintsresource.html
     */
    interface ConstraintsResourceProperty {
        /**
         * The Amazon S3 URI for the constraints resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-constraintsresource.html#cfn-sagemaker-modelqualityjobdefinition-constraintsresource-s3uri
         */
        readonly s3Uri?: string;
    }
    /**
     * The input for the model quality monitoring job.
     *
     * Currently endpoints are supported for input for model quality monitoring jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityjobinput.html
     */
    interface ModelQualityJobInputProperty {
        /**
         * Input object for the batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityjobinput.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityjobinput-batchtransforminput
         */
        readonly batchTransformInput?: CfnModelQualityJobDefinition.BatchTransformInputProperty | cdk.IResolvable;
        /**
         * Input object for the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityjobinput.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityjobinput-endpointinput
         */
        readonly endpointInput?: CfnModelQualityJobDefinition.EndpointInputProperty | cdk.IResolvable;
        /**
         * The ground truth label provided for the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityjobinput.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityjobinput-groundtruths3input
         */
        readonly groundTruthS3Input: cdk.IResolvable | CfnModelQualityJobDefinition.MonitoringGroundTruthS3InputProperty;
    }
    /**
     * The ground truth labels for the dataset used for the monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringgroundtruths3input.html
     */
    interface MonitoringGroundTruthS3InputProperty {
        /**
         * The address of the Amazon S3 location of the ground truth labels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringgroundtruths3input.html#cfn-sagemaker-modelqualityjobdefinition-monitoringgroundtruths3input-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * Input object for the batch transform job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html
     */
    interface BatchTransformInputProperty {
        /**
         * The Amazon S3 location being used to capture the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-datacaptureddestinations3uri
         */
        readonly dataCapturedDestinationS3Uri: string;
        /**
         * The dataset format for your batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-datasetformat
         */
        readonly datasetFormat: CfnModelQualityJobDefinition.DatasetFormatProperty | cdk.IResolvable;
        /**
         * If specified, monitoring jobs subtract this time from the end time.
         *
         * For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-endtimeoffset
         */
        readonly endTimeOffset?: string;
        /**
         * The attribute of the input data that represents the ground truth label.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-inferenceattribute
         */
        readonly inferenceAttribute?: string;
        /**
         * Path to the filesystem where the batch transform data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-localpath
         */
        readonly localPath: string;
        /**
         * In a classification problem, the attribute that represents the class probability.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-probabilityattribute
         */
        readonly probabilityAttribute?: string;
        /**
         * The threshold for the class probability to be evaluated as a positive result.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-probabilitythresholdattribute
         */
        readonly probabilityThresholdAttribute?: number;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-s3inputmode
         */
        readonly s3InputMode?: string;
        /**
         * If specified, monitoring jobs substract this time from the start time.
         *
         * For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-starttimeoffset
         */
        readonly startTimeOffset?: string;
    }
    /**
     * The dataset format of the data to monitor.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-datasetformat.html
     */
    interface DatasetFormatProperty {
        /**
         * The CSV format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-datasetformat.html#cfn-sagemaker-modelqualityjobdefinition-datasetformat-csv
         */
        readonly csv?: CfnModelQualityJobDefinition.CsvProperty | cdk.IResolvable;
        /**
         * The Json format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-datasetformat.html#cfn-sagemaker-modelqualityjobdefinition-datasetformat-json
         */
        readonly json?: cdk.IResolvable | CfnModelQualityJobDefinition.JsonProperty;
        /**
         * A flag indicating if the dataset format is Parquet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-datasetformat.html#cfn-sagemaker-modelqualityjobdefinition-datasetformat-parquet
         */
        readonly parquet?: boolean | cdk.IResolvable;
    }
    /**
     * The CSV format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-csv.html
     */
    interface CsvProperty {
        /**
         * A boolean flag indicating if given CSV has header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-csv.html#cfn-sagemaker-modelqualityjobdefinition-csv-header
         */
        readonly header?: boolean | cdk.IResolvable;
    }
    /**
     * The Json format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-json.html
     */
    interface JsonProperty {
        /**
         * A boolean flag indicating if it is JSON line format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-json.html#cfn-sagemaker-modelqualityjobdefinition-json-line
         */
        readonly line?: boolean | cdk.IResolvable;
    }
    /**
     * Input object for the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html
     */
    interface EndpointInputProperty {
        /**
         * An endpoint in customer's account which has enabled `DataCaptureConfig` enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html#cfn-sagemaker-modelqualityjobdefinition-endpointinput-endpointname
         */
        readonly endpointName: string;
        /**
         * If specified, monitoring jobs substract this time from the end time.
         *
         * For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html#cfn-sagemaker-modelqualityjobdefinition-endpointinput-endtimeoffset
         */
        readonly endTimeOffset?: string;
        /**
         * The attribute of the input data that represents the ground truth label.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html#cfn-sagemaker-modelqualityjobdefinition-endpointinput-inferenceattribute
         */
        readonly inferenceAttribute?: string;
        /**
         * Path to the filesystem where the endpoint data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html#cfn-sagemaker-modelqualityjobdefinition-endpointinput-localpath
         */
        readonly localPath: string;
        /**
         * In a classification problem, the attribute that represents the class probability.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html#cfn-sagemaker-modelqualityjobdefinition-endpointinput-probabilityattribute
         */
        readonly probabilityAttribute?: string;
        /**
         * The threshold for the class probability to be evaluated as a positive result.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html#cfn-sagemaker-modelqualityjobdefinition-endpointinput-probabilitythresholdattribute
         */
        readonly probabilityThresholdAttribute?: number;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an Amazon S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html#cfn-sagemaker-modelqualityjobdefinition-endpointinput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html#cfn-sagemaker-modelqualityjobdefinition-endpointinput-s3inputmode
         */
        readonly s3InputMode?: string;
        /**
         * If specified, monitoring jobs substract this time from the start time.
         *
         * For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html#cfn-sagemaker-modelqualityjobdefinition-endpointinput-starttimeoffset
         */
        readonly startTimeOffset?: string;
    }
    /**
     * Identifies the resources to deploy for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringresources.html
     */
    interface MonitoringResourcesProperty {
        /**
         * The configuration for the cluster resources used to run the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringresources.html#cfn-sagemaker-modelqualityjobdefinition-monitoringresources-clusterconfig
         */
        readonly clusterConfig: CfnModelQualityJobDefinition.ClusterConfigProperty | cdk.IResolvable;
    }
    /**
     * The configuration for the cluster of resources used to run the processing job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-clusterconfig.html
     */
    interface ClusterConfigProperty {
        /**
         * The number of ML compute instances to use in the model monitoring job.
         *
         * For distributed processing jobs, specify a value greater than 1. The default value is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-clusterconfig.html#cfn-sagemaker-modelqualityjobdefinition-clusterconfig-instancecount
         */
        readonly instanceCount: number;
        /**
         * The ML compute instance type for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-clusterconfig.html#cfn-sagemaker-modelqualityjobdefinition-clusterconfig-instancetype
         */
        readonly instanceType: string;
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-clusterconfig.html#cfn-sagemaker-modelqualityjobdefinition-clusterconfig-volumekmskeyid
         */
        readonly volumeKmsKeyId?: string;
        /**
         * The size of the ML storage volume, in gigabytes, that you want to provision.
         *
         * You must specify sufficient ML storage for your scenario.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-clusterconfig.html#cfn-sagemaker-modelqualityjobdefinition-clusterconfig-volumesizeingb
         */
        readonly volumeSizeInGb: number;
    }
    /**
     * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-networkconfig.html
     */
    interface NetworkConfigProperty {
        /**
         * Whether to encrypt all communications between distributed processing jobs.
         *
         * Choose `True` to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-networkconfig.html#cfn-sagemaker-modelqualityjobdefinition-networkconfig-enableintercontainertrafficencryption
         */
        readonly enableInterContainerTrafficEncryption?: boolean | cdk.IResolvable;
        /**
         * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-networkconfig.html#cfn-sagemaker-modelqualityjobdefinition-networkconfig-enablenetworkisolation
         */
        readonly enableNetworkIsolation?: boolean | cdk.IResolvable;
        /**
         * Specifies a VPC that your training jobs and hosted models have access to.
         *
         * Control access to and from your training and model containers by configuring the VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-networkconfig.html#cfn-sagemaker-modelqualityjobdefinition-networkconfig-vpcconfig
         */
        readonly vpcConfig?: cdk.IResolvable | CfnModelQualityJobDefinition.VpcConfigProperty;
    }
    /**
     * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
     *
     * You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The VPC security group IDs, in the form `sg-xxxxxxxx` .
         *
         * Specify the security groups for the VPC that is specified in the `Subnets` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-vpcconfig.html#cfn-sagemaker-modelqualityjobdefinition-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The ID of the subnets in the VPC to which you want to connect your training job or model.
         *
         * For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-vpcconfig.html#cfn-sagemaker-modelqualityjobdefinition-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * The output configuration for monitoring jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutputconfig.html
     */
    interface MonitoringOutputConfigProperty {
        /**
         * The AWS Key Management Service ( AWS KMS ) key that Amazon SageMaker AI uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-modelqualityjobdefinition-monitoringoutputconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Monitoring outputs for monitoring jobs.
         *
         * This is where the output of the periodic monitoring jobs is uploaded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutputconfig.html#cfn-sagemaker-modelqualityjobdefinition-monitoringoutputconfig-monitoringoutputs
         */
        readonly monitoringOutputs: Array<cdk.IResolvable | CfnModelQualityJobDefinition.MonitoringOutputProperty> | cdk.IResolvable;
    }
    /**
     * The output object for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutput.html
     */
    interface MonitoringOutputProperty {
        /**
         * The Amazon S3 storage location where the results of a monitoring job are saved.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutput.html#cfn-sagemaker-modelqualityjobdefinition-monitoringoutput-s3output
         */
        readonly s3Output: cdk.IResolvable | CfnModelQualityJobDefinition.S3OutputProperty;
    }
    /**
     * The Amazon S3 storage location where the results of a monitoring job are saved.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-s3output.html
     */
    interface S3OutputProperty {
        /**
         * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
         *
         * LocalPath is an absolute path for the output data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-s3output.html#cfn-sagemaker-modelqualityjobdefinition-s3output-localpath
         */
        readonly localPath: string;
        /**
         * Whether to upload the results of the monitoring job continuously or after the job completes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-s3output.html#cfn-sagemaker-modelqualityjobdefinition-s3output-s3uploadmode
         */
        readonly s3UploadMode?: string;
        /**
         * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-s3output.html#cfn-sagemaker-modelqualityjobdefinition-s3output-s3uri
         */
        readonly s3Uri: string;
    }
}
/**
 * Properties for defining a `CfnModelQualityJobDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html
 */
export interface CfnModelQualityJobDefinitionProps {
    /**
     * The name of the endpoint used to run the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-endpointname
     */
    readonly endpointName?: string;
    /**
     * The name of the monitoring job definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-jobdefinitionname
     */
    readonly jobDefinitionName?: string;
    /**
     * Identifies the resources to deploy for a monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-jobresources
     */
    readonly jobResources: cdk.IResolvable | CfnModelQualityJobDefinition.MonitoringResourcesProperty;
    /**
     * Container image configuration object for the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification
     */
    readonly modelQualityAppSpecification: cdk.IResolvable | CfnModelQualityJobDefinition.ModelQualityAppSpecificationProperty;
    /**
     * Specifies the constraints and baselines for the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-modelqualitybaselineconfig
     */
    readonly modelQualityBaselineConfig?: cdk.IResolvable | CfnModelQualityJobDefinition.ModelQualityBaselineConfigProperty;
    /**
     * A list of the inputs that are monitored.
     *
     * Currently endpoints are supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityjobinput
     */
    readonly modelQualityJobInput: cdk.IResolvable | CfnModelQualityJobDefinition.ModelQualityJobInputProperty;
    /**
     * The output configuration for monitoring jobs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-modelqualityjoboutputconfig
     */
    readonly modelQualityJobOutputConfig: cdk.IResolvable | CfnModelQualityJobDefinition.MonitoringOutputConfigProperty;
    /**
     * Specifies the network configuration for the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-networkconfig
     */
    readonly networkConfig?: cdk.IResolvable | CfnModelQualityJobDefinition.NetworkConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-rolearn
     */
    readonly roleArn: string;
    /**
     * A time limit for how long the monitoring job is allowed to run before stopping.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-stoppingcondition
     */
    readonly stoppingCondition?: cdk.IResolvable | CfnModelQualityJobDefinition.StoppingConditionProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html#cfn-sagemaker-modelqualityjobdefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::SageMaker::MonitoringSchedule` resource is an Amazon SageMaker resource type that regularly starts SageMaker processing Jobs to monitor the data captured for a SageMaker endpoint.
 *
 * @cloudformationResource AWS::SageMaker::MonitoringSchedule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html
 */
export declare class CfnMonitoringSchedule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMonitoringSchedule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMonitoringSchedule;
    /**
     * The time when the monitoring schedule was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The last time that the monitoring schedule was modified.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: string;
    /**
     * The Amazon Resource Name (ARN) of the monitoring schedule.
     *
     * @cloudformationAttribute MonitoringScheduleArn
     */
    readonly attrMonitoringScheduleArn: string;
    /**
     * The name of the endpoint using the monitoring schedule.
     */
    endpointName?: string;
    /**
     * Contains the reason a monitoring job failed, if it failed.
     */
    failureReason?: string;
    /**
     * Describes metadata on the last execution to run, if there was one.
     */
    lastMonitoringExecutionSummary?: cdk.IResolvable | CfnMonitoringSchedule.MonitoringExecutionSummaryProperty;
    /**
     * The configuration object that specifies the monitoring schedule and defines the monitoring job.
     */
    monitoringScheduleConfig: cdk.IResolvable | CfnMonitoringSchedule.MonitoringScheduleConfigProperty;
    /**
     * The name of the monitoring schedule.
     */
    monitoringScheduleName: string;
    /**
     * The status of the monitoring schedule.
     */
    monitoringScheduleStatus?: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnMonitoringScheduleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMonitoringSchedule {
    /**
     * Configures the monitoring schedule and defines the monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig.html
     */
    interface MonitoringScheduleConfigProperty {
        /**
         * Defines the monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig.html#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringjobdefinition
         */
        readonly monitoringJobDefinition?: cdk.IResolvable | CfnMonitoringSchedule.MonitoringJobDefinitionProperty;
        /**
         * The name of the monitoring job definition to schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig.html#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringjobdefinitionname
         */
        readonly monitoringJobDefinitionName?: string;
        /**
         * The type of the monitoring job definition to schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig.html#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringtype
         */
        readonly monitoringType?: string;
        /**
         * Configures the monitoring schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig.html#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-scheduleconfig
         */
        readonly scheduleConfig?: cdk.IResolvable | CfnMonitoringSchedule.ScheduleConfigProperty;
    }
    /**
     * Configuration details about the monitoring schedule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-scheduleconfig.html
     */
    interface ScheduleConfigProperty {
        /**
         * Sets the end time for a monitoring job window.
         *
         * Express this time as an offset to the times that you schedule your monitoring jobs to run. You schedule monitoring jobs with the `ScheduleExpression` parameter. Specify this offset in ISO 8601 duration format. For example, if you want to end the window one hour before the start of each monitoring job, you would specify: `"-PT1H"` .
         *
         * The end time that you specify must not follow the start time that you specify by more than 24 hours. You specify the start time with the `DataAnalysisStartTime` parameter.
         *
         * If you set `ScheduleExpression` to `NOW` , this parameter is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-scheduleconfig.html#cfn-sagemaker-monitoringschedule-scheduleconfig-dataanalysisendtime
         */
        readonly dataAnalysisEndTime?: string;
        /**
         * Sets the start time for a monitoring job window.
         *
         * Express this time as an offset to the times that you schedule your monitoring jobs to run. You schedule monitoring jobs with the `ScheduleExpression` parameter. Specify this offset in ISO 8601 duration format. For example, if you want to monitor the five hours of data in your dataset that precede the start of each monitoring job, you would specify: `"-PT5H"` .
         *
         * The start time that you specify must not precede the end time that you specify by more than 24 hours. You specify the end time with the `DataAnalysisEndTime` parameter.
         *
         * If you set `ScheduleExpression` to `NOW` , this parameter is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-scheduleconfig.html#cfn-sagemaker-monitoringschedule-scheduleconfig-dataanalysisstarttime
         */
        readonly dataAnalysisStartTime?: string;
        /**
         * A cron expression that describes details about the monitoring schedule.
         *
         * The supported cron expressions are:
         *
         * - If you want to set the job to start every hour, use the following:
         *
         * `Hourly: cron(0 * ? * * *)`
         * - If you want to start the job daily:
         *
         * `cron(0 [00-23] ? * * *)`
         * - If you want to run the job one time, immediately, use the following keyword:
         *
         * `NOW`
         *
         * For example, the following are valid cron expressions:
         *
         * - Daily at noon UTC: `cron(0 12 ? * * *)`
         * - Daily at midnight UTC: `cron(0 0 ? * * *)`
         *
         * To support running every 6, 12 hours, the following are also supported:
         *
         * `cron(0 [00-23]/[01-24] ? * * *)`
         *
         * For example, the following are valid cron expressions:
         *
         * - Every 12 hours, starting at 5pm UTC: `cron(0 17/12 ? * * *)`
         * - Every two hours starting at midnight: `cron(0 0/2 ? * * *)`
         *
         * > - Even though the cron expression is set to start at 5PM UTC, note that there could be a delay of 0-20 minutes from the actual requested time to run the execution.
         * > - We recommend that if you would like a daily schedule, you do not provide this parameter. Amazon SageMaker AI will pick a time for running every day.
         *
         * You can also specify the keyword `NOW` to run the monitoring job immediately, one time, without recurring.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-scheduleconfig.html#cfn-sagemaker-monitoringschedule-scheduleconfig-scheduleexpression
         */
        readonly scheduleExpression: string;
    }
    /**
     * Defines the monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html
     */
    interface MonitoringJobDefinitionProperty {
        /**
         * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html#cfn-sagemaker-monitoringschedule-monitoringjobdefinition-baselineconfig
         */
        readonly baselineConfig?: CfnMonitoringSchedule.BaselineConfigProperty | cdk.IResolvable;
        /**
         * Sets the environment variables in the Docker container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html#cfn-sagemaker-monitoringschedule-monitoringjobdefinition-environment
         */
        readonly environment?: cdk.IResolvable | Record<string, string>;
        /**
         * Configures the monitoring job to run a specified Docker container image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html#cfn-sagemaker-monitoringschedule-monitoringjobdefinition-monitoringappspecification
         */
        readonly monitoringAppSpecification: cdk.IResolvable | CfnMonitoringSchedule.MonitoringAppSpecificationProperty;
        /**
         * The array of inputs for the monitoring job.
         *
         * Currently we support monitoring an Amazon SageMaker AI Endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html#cfn-sagemaker-monitoringschedule-monitoringjobdefinition-monitoringinputs
         */
        readonly monitoringInputs: Array<cdk.IResolvable | CfnMonitoringSchedule.MonitoringInputProperty> | cdk.IResolvable;
        /**
         * The array of outputs from the monitoring job to be uploaded to Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html#cfn-sagemaker-monitoringschedule-monitoringjobdefinition-monitoringoutputconfig
         */
        readonly monitoringOutputConfig: cdk.IResolvable | CfnMonitoringSchedule.MonitoringOutputConfigProperty;
        /**
         * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a monitoring job.
         *
         * In distributed processing, you specify more than one instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html#cfn-sagemaker-monitoringschedule-monitoringjobdefinition-monitoringresources
         */
        readonly monitoringResources: cdk.IResolvable | CfnMonitoringSchedule.MonitoringResourcesProperty;
        /**
         * Specifies networking options for an monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html#cfn-sagemaker-monitoringschedule-monitoringjobdefinition-networkconfig
         */
        readonly networkConfig?: cdk.IResolvable | CfnMonitoringSchedule.NetworkConfigProperty;
        /**
         * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html#cfn-sagemaker-monitoringschedule-monitoringjobdefinition-rolearn
         */
        readonly roleArn: string;
        /**
         * Specifies a time limit for how long the monitoring job is allowed to run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html#cfn-sagemaker-monitoringschedule-monitoringjobdefinition-stoppingcondition
         */
        readonly stoppingCondition?: cdk.IResolvable | CfnMonitoringSchedule.StoppingConditionProperty;
    }
    /**
     * The inputs for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringinput.html
     */
    interface MonitoringInputProperty {
        /**
         * Input object for the batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringinput.html#cfn-sagemaker-monitoringschedule-monitoringinput-batchtransforminput
         */
        readonly batchTransformInput?: CfnMonitoringSchedule.BatchTransformInputProperty | cdk.IResolvable;
        /**
         * The endpoint for a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringinput.html#cfn-sagemaker-monitoringschedule-monitoringinput-endpointinput
         */
        readonly endpointInput?: CfnMonitoringSchedule.EndpointInputProperty | cdk.IResolvable;
    }
    /**
     * Input object for the batch transform job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html
     */
    interface BatchTransformInputProperty {
        /**
         * The Amazon S3 location being used to capture the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html#cfn-sagemaker-monitoringschedule-batchtransforminput-datacaptureddestinations3uri
         */
        readonly dataCapturedDestinationS3Uri: string;
        /**
         * The dataset format for your batch transform job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html#cfn-sagemaker-monitoringschedule-batchtransforminput-datasetformat
         */
        readonly datasetFormat: CfnMonitoringSchedule.DatasetFormatProperty | cdk.IResolvable;
        /**
         * The attributes of the input data to exclude from the analysis.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html#cfn-sagemaker-monitoringschedule-batchtransforminput-excludefeaturesattribute
         */
        readonly excludeFeaturesAttribute?: string;
        /**
         * Path to the filesystem where the batch transform data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html#cfn-sagemaker-monitoringschedule-batchtransforminput-localpath
         */
        readonly localPath: string;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html#cfn-sagemaker-monitoringschedule-batchtransforminput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html#cfn-sagemaker-monitoringschedule-batchtransforminput-s3inputmode
         */
        readonly s3InputMode?: string;
    }
    /**
     * The dataset format of the data to monitor.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-datasetformat.html
     */
    interface DatasetFormatProperty {
        /**
         * The CSV format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-datasetformat.html#cfn-sagemaker-monitoringschedule-datasetformat-csv
         */
        readonly csv?: CfnMonitoringSchedule.CsvProperty | cdk.IResolvable;
        /**
         * The Json format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-datasetformat.html#cfn-sagemaker-monitoringschedule-datasetformat-json
         */
        readonly json?: cdk.IResolvable | CfnMonitoringSchedule.JsonProperty;
        /**
         * A flag indicating if the dataset format is Parquet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-datasetformat.html#cfn-sagemaker-monitoringschedule-datasetformat-parquet
         */
        readonly parquet?: boolean | cdk.IResolvable;
    }
    /**
     * The CSV format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-csv.html
     */
    interface CsvProperty {
        /**
         * A boolean flag indicating if given CSV has header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-csv.html#cfn-sagemaker-monitoringschedule-csv-header
         */
        readonly header?: boolean | cdk.IResolvable;
    }
    /**
     * The Json format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-json.html
     */
    interface JsonProperty {
        /**
         * A boolean flag indicating if it is JSON line format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-json.html#cfn-sagemaker-monitoringschedule-json-line
         */
        readonly line?: boolean | cdk.IResolvable;
    }
    /**
     * Input object for the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-endpointinput.html
     */
    interface EndpointInputProperty {
        /**
         * An endpoint in customer's account which has enabled `DataCaptureConfig` enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-endpointinput.html#cfn-sagemaker-monitoringschedule-endpointinput-endpointname
         */
        readonly endpointName: string;
        /**
         * The attributes of the input data to exclude from the analysis.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-endpointinput.html#cfn-sagemaker-monitoringschedule-endpointinput-excludefeaturesattribute
         */
        readonly excludeFeaturesAttribute?: string;
        /**
         * Path to the filesystem where the endpoint data is available to the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-endpointinput.html#cfn-sagemaker-monitoringschedule-endpointinput-localpath
         */
        readonly localPath: string;
        /**
         * Whether input data distributed in Amazon S3 is fully replicated or sharded by an Amazon S3 key.
         *
         * Defaults to `FullyReplicated`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-endpointinput.html#cfn-sagemaker-monitoringschedule-endpointinput-s3datadistributiontype
         */
        readonly s3DataDistributionType?: string;
        /**
         * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job.
         *
         * `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-endpointinput.html#cfn-sagemaker-monitoringschedule-endpointinput-s3inputmode
         */
        readonly s3InputMode?: string;
    }
    /**
     * Identifies the resources to deploy for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringresources.html
     */
    interface MonitoringResourcesProperty {
        /**
         * The configuration for the cluster resources used to run the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringresources.html#cfn-sagemaker-monitoringschedule-monitoringresources-clusterconfig
         */
        readonly clusterConfig: CfnMonitoringSchedule.ClusterConfigProperty | cdk.IResolvable;
    }
    /**
     * Configuration for the cluster used to run model monitoring jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-clusterconfig.html
     */
    interface ClusterConfigProperty {
        /**
         * The number of ML compute instances to use in the model monitoring job.
         *
         * For distributed processing jobs, specify a value greater than 1. The default value is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-clusterconfig.html#cfn-sagemaker-monitoringschedule-clusterconfig-instancecount
         */
        readonly instanceCount: number;
        /**
         * The ML compute instance type for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-clusterconfig.html#cfn-sagemaker-monitoringschedule-clusterconfig-instancetype
         */
        readonly instanceType: string;
        /**
         * The AWS Key Management Service ( AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-clusterconfig.html#cfn-sagemaker-monitoringschedule-clusterconfig-volumekmskeyid
         */
        readonly volumeKmsKeyId?: string;
        /**
         * The size of the ML storage volume, in gigabytes, that you want to provision.
         *
         * You must specify sufficient ML storage for your scenario.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-clusterconfig.html#cfn-sagemaker-monitoringschedule-clusterconfig-volumesizeingb
         */
        readonly volumeSizeInGb: number;
    }
    /**
     * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-baselineconfig.html
     */
    interface BaselineConfigProperty {
        /**
         * The Amazon S3 URI for the constraints resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-baselineconfig.html#cfn-sagemaker-monitoringschedule-baselineconfig-constraintsresource
         */
        readonly constraintsResource?: CfnMonitoringSchedule.ConstraintsResourceProperty | cdk.IResolvable;
        /**
         * The baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-baselineconfig.html#cfn-sagemaker-monitoringschedule-baselineconfig-statisticsresource
         */
        readonly statisticsResource?: cdk.IResolvable | CfnMonitoringSchedule.StatisticsResourceProperty;
    }
    /**
     * The baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-statisticsresource.html
     */
    interface StatisticsResourceProperty {
        /**
         * The S3 URI for the statistics resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-statisticsresource.html#cfn-sagemaker-monitoringschedule-statisticsresource-s3uri
         */
        readonly s3Uri?: string;
    }
    /**
     * The Amazon S3 URI for the constraints resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-constraintsresource.html
     */
    interface ConstraintsResourceProperty {
        /**
         * The Amazon S3 URI for the constraints resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-constraintsresource.html#cfn-sagemaker-monitoringschedule-constraintsresource-s3uri
         */
        readonly s3Uri?: string;
    }
    /**
     * Specifies a limit to how long a job can run.
     *
     * When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs.
     *
     * To stop a training job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
     *
     * The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with `CreateModel` .
     *
     * > The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-stoppingcondition.html
     */
    interface StoppingConditionProperty {
        /**
         * The maximum length of time, in seconds, that a training or compilation job can run before it is stopped.
         *
         * For compilation jobs, if the job does not complete during this time, a `TimeOut` error is generated. We recommend starting with 900 seconds and increasing as necessary based on your model.
         *
         * For all other jobs, if the job does not complete during this time, SageMaker ends the job. When `RetryStrategy` is specified in the job request, `MaxRuntimeInSeconds` specifies the maximum time for all of the attempts in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.
         *
         * The maximum time that a `TrainingJob` can run in total, including any time spent publishing metrics or archiving and uploading models after it has been stopped, is 30 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-stoppingcondition.html#cfn-sagemaker-monitoringschedule-stoppingcondition-maxruntimeinseconds
         */
        readonly maxRuntimeInSeconds: number;
    }
    /**
     * Container image configuration object for the monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringappspecification.html
     */
    interface MonitoringAppSpecificationProperty {
        /**
         * An array of arguments for the container used to run the monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringappspecification.html#cfn-sagemaker-monitoringschedule-monitoringappspecification-containerarguments
         */
        readonly containerArguments?: Array<string>;
        /**
         * Specifies the entrypoint for a container used to run the monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringappspecification.html#cfn-sagemaker-monitoringschedule-monitoringappspecification-containerentrypoint
         */
        readonly containerEntrypoint?: Array<string>;
        /**
         * The container image to be run by the monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringappspecification.html#cfn-sagemaker-monitoringschedule-monitoringappspecification-imageuri
         */
        readonly imageUri: string;
        /**
         * An Amazon S3 URI to a script that is called after analysis has been performed.
         *
         * Applicable only for the built-in (first party) containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringappspecification.html#cfn-sagemaker-monitoringschedule-monitoringappspecification-postanalyticsprocessorsourceuri
         */
        readonly postAnalyticsProcessorSourceUri?: string;
        /**
         * An Amazon S3 URI to a script that is called per row prior to running analysis.
         *
         * It can base64 decode the payload and convert it into a flattened JSON so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringappspecification.html#cfn-sagemaker-monitoringschedule-monitoringappspecification-recordpreprocessorsourceuri
         */
        readonly recordPreprocessorSourceUri?: string;
    }
    /**
     * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-networkconfig.html
     */
    interface NetworkConfigProperty {
        /**
         * Whether to encrypt all communications between distributed processing jobs.
         *
         * Choose `True` to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-networkconfig.html#cfn-sagemaker-monitoringschedule-networkconfig-enableintercontainertrafficencryption
         */
        readonly enableInterContainerTrafficEncryption?: boolean | cdk.IResolvable;
        /**
         * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-networkconfig.html#cfn-sagemaker-monitoringschedule-networkconfig-enablenetworkisolation
         */
        readonly enableNetworkIsolation?: boolean | cdk.IResolvable;
        /**
         * Specifies a VPC that your training jobs and hosted models have access to.
         *
         * Control access to and from your training and model containers by configuring the VPC. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Training Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-networkconfig.html#cfn-sagemaker-monitoringschedule-networkconfig-vpcconfig
         */
        readonly vpcConfig?: cdk.IResolvable | CfnMonitoringSchedule.VpcConfigProperty;
    }
    /**
     * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
     *
     * You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The VPC security group IDs, in the form `sg-xxxxxxxx` .
         *
         * Specify the security groups for the VPC that is specified in the `Subnets` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-vpcconfig.html#cfn-sagemaker-monitoringschedule-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The ID of the subnets in the VPC to which you want to connect your training job or model.
         *
         * For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-vpcconfig.html#cfn-sagemaker-monitoringschedule-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * The output configuration for monitoring jobs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutputconfig.html
     */
    interface MonitoringOutputConfigProperty {
        /**
         * The AWS Key Management Service ( AWS KMS ) key that Amazon SageMaker AI uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutputconfig.html#cfn-sagemaker-monitoringschedule-monitoringoutputconfig-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Monitoring outputs for monitoring jobs.
         *
         * This is where the output of the periodic monitoring jobs is uploaded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutputconfig.html#cfn-sagemaker-monitoringschedule-monitoringoutputconfig-monitoringoutputs
         */
        readonly monitoringOutputs: Array<cdk.IResolvable | CfnMonitoringSchedule.MonitoringOutputProperty> | cdk.IResolvable;
    }
    /**
     * The output object for a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutput.html
     */
    interface MonitoringOutputProperty {
        /**
         * The Amazon S3 storage location where the results of a monitoring job are saved.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutput.html#cfn-sagemaker-monitoringschedule-monitoringoutput-s3output
         */
        readonly s3Output: cdk.IResolvable | CfnMonitoringSchedule.S3OutputProperty;
    }
    /**
     * Information about where and how you want to store the results of a monitoring job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-s3output.html
     */
    interface S3OutputProperty {
        /**
         * The local path to the S3 storage location where SageMaker saves the results of a monitoring job.
         *
         * LocalPath is an absolute path for the output data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-s3output.html#cfn-sagemaker-monitoringschedule-s3output-localpath
         */
        readonly localPath: string;
        /**
         * Whether to upload the results of the monitoring job continuously or after the job completes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-s3output.html#cfn-sagemaker-monitoringschedule-s3output-s3uploadmode
         */
        readonly s3UploadMode?: string;
        /**
         * A URI that identifies the S3 storage location where SageMaker saves the results of a monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-s3output.html#cfn-sagemaker-monitoringschedule-s3output-s3uri
         */
        readonly s3Uri: string;
    }
    /**
     * Summary of information about the last monitoring job to run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html
     */
    interface MonitoringExecutionSummaryProperty {
        /**
         * The time at which the monitoring job was created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html#cfn-sagemaker-monitoringschedule-monitoringexecutionsummary-creationtime
         */
        readonly creationTime: string;
        /**
         * The name of the endpoint used to run the monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html#cfn-sagemaker-monitoringschedule-monitoringexecutionsummary-endpointname
         */
        readonly endpointName?: string;
        /**
         * Contains the reason a monitoring job failed, if it failed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html#cfn-sagemaker-monitoringschedule-monitoringexecutionsummary-failurereason
         */
        readonly failureReason?: string;
        /**
         * A timestamp that indicates the last time the monitoring job was modified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html#cfn-sagemaker-monitoringschedule-monitoringexecutionsummary-lastmodifiedtime
         */
        readonly lastModifiedTime: string;
        /**
         * The status of the monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html#cfn-sagemaker-monitoringschedule-monitoringexecutionsummary-monitoringexecutionstatus
         */
        readonly monitoringExecutionStatus: string;
        /**
         * The name of the monitoring schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html#cfn-sagemaker-monitoringschedule-monitoringexecutionsummary-monitoringschedulename
         */
        readonly monitoringScheduleName: string;
        /**
         * The Amazon Resource Name (ARN) of the monitoring job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html#cfn-sagemaker-monitoringschedule-monitoringexecutionsummary-processingjobarn
         */
        readonly processingJobArn?: string;
        /**
         * The time the monitoring job was scheduled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html#cfn-sagemaker-monitoringschedule-monitoringexecutionsummary-scheduledtime
         */
        readonly scheduledTime: string;
    }
}
/**
 * Properties for defining a `CfnMonitoringSchedule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html
 */
export interface CfnMonitoringScheduleProps {
    /**
     * The name of the endpoint using the monitoring schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html#cfn-sagemaker-monitoringschedule-endpointname
     */
    readonly endpointName?: string;
    /**
     * Contains the reason a monitoring job failed, if it failed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html#cfn-sagemaker-monitoringschedule-failurereason
     */
    readonly failureReason?: string;
    /**
     * Describes metadata on the last execution to run, if there was one.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html#cfn-sagemaker-monitoringschedule-lastmonitoringexecutionsummary
     */
    readonly lastMonitoringExecutionSummary?: cdk.IResolvable | CfnMonitoringSchedule.MonitoringExecutionSummaryProperty;
    /**
     * The configuration object that specifies the monitoring schedule and defines the monitoring job.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig
     */
    readonly monitoringScheduleConfig: cdk.IResolvable | CfnMonitoringSchedule.MonitoringScheduleConfigProperty;
    /**
     * The name of the monitoring schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html#cfn-sagemaker-monitoringschedule-monitoringschedulename
     */
    readonly monitoringScheduleName: string;
    /**
     * The status of the monitoring schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html#cfn-sagemaker-monitoringschedule-monitoringschedulestatus
     */
    readonly monitoringScheduleStatus?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html#cfn-sagemaker-monitoringschedule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::SageMaker::NotebookInstance` resource creates an Amazon SageMaker notebook instance.
 *
 * A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. For more information, see [Use Notebook Instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi.html) .
 *
 * @cloudformationResource AWS::SageMaker::NotebookInstance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html
 */
export declare class CfnNotebookInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNotebookInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNotebookInstance;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the notebook instance, such as `MyNotebookInstance` .
     *
     * @cloudformationAttribute NotebookInstanceName
     */
    readonly attrNotebookInstanceName: string;
    /**
     * A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance.
     */
    acceleratorTypes?: Array<string>;
    /**
     * An array of up to three Git repositories associated with the notebook instance.
     */
    additionalCodeRepositories?: Array<string>;
    /**
     * The Git repository associated with the notebook instance as its default code repository.
     */
    defaultCodeRepository?: string;
    /**
     * Sets whether SageMaker AI provides internet access to the notebook instance.
     */
    directInternetAccess?: string;
    /**
     * Information on the IMDS configuration of the notebook instance.
     */
    instanceMetadataServiceConfiguration?: CfnNotebookInstance.InstanceMetadataServiceConfigurationProperty | cdk.IResolvable;
    /**
     * The type of ML compute instance to launch for the notebook instance.
     */
    instanceType: string;
    /**
     * The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance.
     */
    kmsKeyId?: string;
    /**
     * The name of a lifecycle configuration to associate with the notebook instance.
     */
    lifecycleConfigName?: string;
    /**
     * The name of the new notebook instance.
     */
    notebookInstanceName?: string;
    /**
     * The platform identifier of the notebook instance runtime environment.
     */
    platformIdentifier?: string;
    /**
     * When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf.
     */
    roleArn: string;
    /**
     * Whether root access is enabled or disabled for users of the notebook instance. The default value is `Enabled` .
     */
    rootAccess?: string;
    /**
     * The VPC security group IDs, in the form sg-xxxxxxxx.
     */
    securityGroupIds?: Array<string>;
    /**
     * The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.
     */
    subnetId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The size, in GB, of the ML storage volume to attach to the notebook instance.
     */
    volumeSizeInGb?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNotebookInstanceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnNotebookInstance {
    /**
     * Information on the IMDS configuration of the notebook instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstance-instancemetadataserviceconfiguration.html
     */
    interface InstanceMetadataServiceConfigurationProperty {
        /**
         * Indicates the minimum IMDS version that the notebook instance supports.
         *
         * When passed as part of `CreateNotebookInstance` , if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of `UpdateNotebookInstance` , there is no default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstance-instancemetadataserviceconfiguration.html#cfn-sagemaker-notebookinstance-instancemetadataserviceconfiguration-minimuminstancemetadataserviceversion
         */
        readonly minimumInstanceMetadataServiceVersion: string;
    }
}
/**
 * Properties for defining a `CfnNotebookInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html
 */
export interface CfnNotebookInstanceProps {
    /**
     * A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance.
     *
     * Currently, only one instance type can be associated with a notebook instance. For more information, see [Using Elastic Inference in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html) .
     *
     * *Valid Values:* `ml.eia1.medium | ml.eia1.large | ml.eia1.xlarge | ml.eia2.medium | ml.eia2.large | ml.eia2.xlarge` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-acceleratortypes
     */
    readonly acceleratorTypes?: Array<string>;
    /**
     * An array of up to three Git repositories associated with the notebook instance.
     *
     * These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see [Associating Git Repositories with SageMaker AI Notebook Instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-additionalcoderepositories
     */
    readonly additionalCodeRepositories?: Array<string>;
    /**
     * The Git repository associated with the notebook instance as its default code repository.
     *
     * This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see [Associating Git Repositories with SageMaker AI Notebook Instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-defaultcoderepository
     */
    readonly defaultCodeRepository?: string;
    /**
     * Sets whether SageMaker AI provides internet access to the notebook instance.
     *
     * If you set this to `Disabled` this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a NAT Gateway in your VPC.
     *
     * For more information, see [Notebook Instances Are Internet-Enabled by Default](https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access) . You can set the value of this parameter to `Disabled` only if you set a value for the `SubnetId` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-directinternetaccess
     */
    readonly directInternetAccess?: string;
    /**
     * Information on the IMDS configuration of the notebook instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-instancemetadataserviceconfiguration
     */
    readonly instanceMetadataServiceConfiguration?: CfnNotebookInstance.InstanceMetadataServiceConfigurationProperty | cdk.IResolvable;
    /**
     * The type of ML compute instance to launch for the notebook instance.
     *
     * > Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-instancetype
     */
    readonly instanceType: string;
    /**
     * The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance.
     *
     * The KMS key you provide must be enabled. For information, see [Enabling and Disabling Keys](https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html) in the *AWS Key Management Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The name of a lifecycle configuration to associate with the notebook instance.
     *
     * For information about lifecycle configurations, see [Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html) in the *Amazon SageMaker Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-lifecycleconfigname
     */
    readonly lifecycleConfigName?: string;
    /**
     * The name of the new notebook instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-notebookinstancename
     */
    readonly notebookInstanceName?: string;
    /**
     * The platform identifier of the notebook instance runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-platformidentifier
     */
    readonly platformIdentifier?: string;
    /**
     * When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf.
     *
     * You must grant this role necessary permissions so SageMaker AI can perform these tasks. The policy must allow the SageMaker AI service principal (sagemaker.amazonaws.com) permissions to assume this role. For more information, see [SageMaker AI Roles](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html) .
     *
     * > To be able to pass this role to SageMaker AI, the caller of this API must have the `iam:PassRole` permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-rolearn
     */
    readonly roleArn: string;
    /**
     * Whether root access is enabled or disabled for users of the notebook instance. The default value is `Enabled` .
     *
     * > Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-rootaccess
     */
    readonly rootAccess?: string;
    /**
     * The VPC security group IDs, in the form sg-xxxxxxxx.
     *
     * The security groups must be for the same VPC as specified in the subnet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-subnetid
     */
    readonly subnetId?: string;
    /**
     * A list of key-value pairs to apply to this resource.
     *
     * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) .
     *
     * You can add tags later by using the `CreateTags` API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The size, in GB, of the ML storage volume to attach to the notebook instance.
     *
     * The default value is 5 GB.
     *
     * > Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#cfn-sagemaker-notebookinstance-volumesizeingb
     */
    readonly volumeSizeInGb?: number;
}
/**
 * The `AWS::SageMaker::NotebookInstanceLifecycleConfig` resource creates shell scripts that run when you create and/or start a notebook instance.
 *
 * For information about notebook instance lifecycle configurations, see [Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html) in the *Amazon SageMaker Developer Guide* .
 *
 * @cloudformationResource AWS::SageMaker::NotebookInstanceLifecycleConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html
 */
export declare class CfnNotebookInstanceLifecycleConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNotebookInstanceLifecycleConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNotebookInstanceLifecycleConfig;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the lifecycle configuration, such as `MyLifecycleConfig` .
     *
     * @cloudformationAttribute NotebookInstanceLifecycleConfigName
     */
    readonly attrNotebookInstanceLifecycleConfigName: string;
    /**
     * The name of the lifecycle configuration.
     */
    notebookInstanceLifecycleConfigName?: string;
    /**
     * A shell script that runs only once, when you create a notebook instance.
     */
    onCreate?: Array<cdk.IResolvable | CfnNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookProperty> | cdk.IResolvable;
    /**
     * A shell script that runs every time you start a notebook instance, including when you create the notebook instance.
     */
    onStart?: Array<cdk.IResolvable | CfnNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnNotebookInstanceLifecycleConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnNotebookInstanceLifecycleConfig {
    /**
     * Specifies the notebook instance lifecycle configuration script.
     *
     * Each lifecycle configuration script has a limit of 16384 characters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.html
     */
    interface NotebookInstanceLifecycleHookProperty {
        /**
         * A base64-encoded string that contains a shell script for a notebook instance lifecycle configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.html#cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-content
         */
        readonly content?: string;
    }
}
/**
 * Properties for defining a `CfnNotebookInstanceLifecycleConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html
 */
export interface CfnNotebookInstanceLifecycleConfigProps {
    /**
     * The name of the lifecycle configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecycleconfigname
     */
    readonly notebookInstanceLifecycleConfigName?: string;
    /**
     * A shell script that runs only once, when you create a notebook instance.
     *
     * The shell script must be a base64-encoded string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-oncreate
     */
    readonly onCreate?: Array<cdk.IResolvable | CfnNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookProperty> | cdk.IResolvable;
    /**
     * A shell script that runs every time you start a notebook instance, including when you create the notebook instance.
     *
     * The shell script must be a base64-encoded string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-onstart
     */
    readonly onStart?: Array<cdk.IResolvable | CfnNotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHookProperty> | cdk.IResolvable;
}
/**
 * The `AWS::SageMaker::Pipeline` resource creates shell scripts that run when you create and/or start a SageMaker Pipeline.
 *
 * For information about SageMaker Pipelines, see [SageMaker Pipelines](https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines.html) in the *Amazon SageMaker Developer Guide* .
 *
 * @cloudformationResource AWS::SageMaker::Pipeline
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html
 */
export declare class CfnPipeline extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPipeline from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPipeline;
    /**
     * The parallelism configuration applied to the pipeline.
     */
    parallelismConfiguration?: any | cdk.IResolvable;
    /**
     * The definition of the pipeline.
     */
    pipelineDefinition: any | cdk.IResolvable;
    /**
     * The description of the pipeline.
     */
    pipelineDescription?: string;
    /**
     * The display name of the pipeline.
     */
    pipelineDisplayName?: string;
    /**
     * The name of the pipeline.
     */
    pipelineName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to execute the pipeline.
     */
    roleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags of the pipeline.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPipelineProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPipeline {
    /**
     * Configuration that controls the parallelism of the pipeline.
     *
     * By default, the parallelism configuration specified applies to all executions of the pipeline unless overridden.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-parallelismconfiguration.html
     */
    interface ParallelismConfigurationProperty {
        /**
         * The max number of steps that can be executed in parallel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-parallelismconfiguration.html#cfn-sagemaker-pipeline-parallelismconfiguration-maxparallelexecutionsteps
         */
        readonly maxParallelExecutionSteps: number;
    }
    /**
     * The definition of the pipeline.
     *
     * This can be either a JSON string or an Amazon S3 location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-pipelinedefinition.html
     */
    interface PipelineDefinitionProperty {
        /**
         * The [JSON pipeline definition](https://docs.aws.amazon.com/https://aws-sagemaker-mlops.github.io/sagemaker-model-building-pipeline-definition-JSON-schema/) of the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-pipelinedefinition.html#cfn-sagemaker-pipeline-pipelinedefinition-pipelinedefinitionbody
         */
        readonly pipelineDefinitionBody: string;
        /**
         * The location of the pipeline definition stored in Amazon S3.
         *
         * If specified, SageMaker retrieves the pipeline definition from this location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-pipelinedefinition.html#cfn-sagemaker-pipeline-pipelinedefinition-pipelinedefinitions3location
         */
        readonly pipelineDefinitionS3Location?: cdk.IResolvable | CfnPipeline.S3LocationProperty;
    }
    /**
     * The location of the pipeline definition stored in Amazon S3.
     *
     * If specified, SageMaker will retrieve the pipeline definition from this location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The name of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-s3location.html#cfn-sagemaker-pipeline-s3location-bucket
         */
        readonly bucket: string;
        /**
         * A file checksum of the pipeline definition file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-s3location.html#cfn-sagemaker-pipeline-s3location-etag
         */
        readonly eTag?: string;
        /**
         * The object key (or key name) which uniquely identifies the object in an S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-s3location.html#cfn-sagemaker-pipeline-s3location-key
         */
        readonly key: string;
        /**
         * The version ID of the pipeline definition file.
         *
         * If not specified, Amazon SageMaker will retrieve the latest version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-s3location.html#cfn-sagemaker-pipeline-s3location-version
         */
        readonly version?: string;
    }
}
/**
 * Properties for defining a `CfnPipeline`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html
 */
export interface CfnPipelineProps {
    /**
     * The parallelism configuration applied to the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-parallelismconfiguration
     */
    readonly parallelismConfiguration?: any | cdk.IResolvable;
    /**
     * The definition of the pipeline.
     *
     * This can be either a JSON string or an Amazon S3 location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedefinition
     */
    readonly pipelineDefinition: any | cdk.IResolvable;
    /**
     * The description of the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedescription
     */
    readonly pipelineDescription?: string;
    /**
     * The display name of the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedisplayname
     */
    readonly pipelineDisplayName?: string;
    /**
     * The name of the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinename
     */
    readonly pipelineName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to execute the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-rolearn
     */
    readonly roleArn: string;
    /**
     * The tags of the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model.
 *
 * @cloudformationResource AWS::SageMaker::Project
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html
 */
export declare class CfnProject extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProject from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProject;
    /**
     * The time that the project was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The Amazon Resource Name (ARN) of the project.
     *
     * @cloudformationAttribute ProjectArn
     */
    readonly attrProjectArn: string;
    /**
     * The ID of the project. This ID is prepended to all entities associated with this project.
     *
     * @cloudformationAttribute ProjectId
     */
    readonly attrProjectId: string;
    /**
     * The status of the project.
     *
     * @cloudformationAttribute ProjectStatus
     */
    readonly attrProjectStatus: string;
    /**
     * The description of the project.
     */
    projectDescription?: string;
    /**
     * The name of the project.
     */
    projectName: string;
    /**
     * Details of a provisioned service catalog product.
     */
    serviceCatalogProvisionedProductDetails?: cdk.IResolvable | CfnProject.ServiceCatalogProvisionedProductDetailsProperty;
    /**
     * The product ID and provisioning artifact ID to provision a service catalog.
     */
    serviceCatalogProvisioningDetails: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProjectProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProject {
    /**
     * Details of a provisioned service catalog product.
     *
     * For information about service catalog, see [What is AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisionedproductdetails.html
     */
    interface ServiceCatalogProvisionedProductDetailsProperty {
        /**
         * The ID of the provisioned product.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisionedproductdetails.html#cfn-sagemaker-project-servicecatalogprovisionedproductdetails-provisionedproductid
         */
        readonly provisionedProductId?: string;
        /**
         * The current status of the product.
         *
         * - `AVAILABLE` - Stable state, ready to perform any operation. The most recent operation succeeded and completed.
         * - `UNDER_CHANGE` - Transitive state. Operations performed might not have valid results. Wait for an AVAILABLE status before performing operations.
         * - `TAINTED` - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.
         * - `ERROR` - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.
         * - `PLAN_IN_PROGRESS` - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an AVAILABLE status before performing operations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisionedproductdetails.html#cfn-sagemaker-project-servicecatalogprovisionedproductdetails-provisionedproductstatusmessage
         */
        readonly provisionedProductStatusMessage?: string;
    }
    /**
     * Details that you specify to provision a service catalog product.
     *
     * For information about service catalog, see [What is AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisioningdetails.html
     */
    interface ServiceCatalogProvisioningDetailsProperty {
        /**
         * The path identifier of the product.
         *
         * This value is optional if the product has a default path, and required if the product has more than one path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisioningdetails.html#cfn-sagemaker-project-servicecatalogprovisioningdetails-pathid
         */
        readonly pathId?: string;
        /**
         * The ID of the product to provision.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisioningdetails.html#cfn-sagemaker-project-servicecatalogprovisioningdetails-productid
         */
        readonly productId: string;
        /**
         * The ID of the provisioning artifact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisioningdetails.html#cfn-sagemaker-project-servicecatalogprovisioningdetails-provisioningartifactid
         */
        readonly provisioningArtifactId?: string;
        /**
         * A list of key value pairs that you specify when you provision a product.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisioningdetails.html#cfn-sagemaker-project-servicecatalogprovisioningdetails-provisioningparameters
         */
        readonly provisioningParameters?: Array<cdk.IResolvable | CfnProject.ProvisioningParameterProperty> | cdk.IResolvable;
    }
    /**
     * A key value pair used when you provision a project as a service catalog product.
     *
     * For information, see [What is AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-provisioningparameter.html
     */
    interface ProvisioningParameterProperty {
        /**
         * The key that identifies a provisioning parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-provisioningparameter.html#cfn-sagemaker-project-provisioningparameter-key
         */
        readonly key: string;
        /**
         * The value of the provisioning parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-provisioningparameter.html#cfn-sagemaker-project-provisioningparameter-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnProject`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html
 */
export interface CfnProjectProps {
    /**
     * The description of the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-projectdescription
     */
    readonly projectDescription?: string;
    /**
     * The name of the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-projectname
     */
    readonly projectName: string;
    /**
     * Details of a provisioned service catalog product.
     *
     * For information about service catalog, see [What is AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-servicecatalogprovisionedproductdetails
     */
    readonly serviceCatalogProvisionedProductDetails?: cdk.IResolvable | CfnProject.ServiceCatalogProvisionedProductDetailsProperty;
    /**
     * The product ID and provisioning artifact ID to provision a service catalog.
     *
     * For information, see [What is AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-servicecatalogprovisioningdetails
     */
    readonly serviceCatalogProvisioningDetails: any | cdk.IResolvable;
    /**
     * A list of key-value pairs to apply to this resource.
     *
     * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the *AWS Billing and Cost Management User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a private space or a space used for real time collaboration in a domain.
 *
 * @cloudformationResource AWS::SageMaker::Space
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html
 */
export declare class CfnSpace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSpace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSpace;
    /**
     * The space's Amazon Resource Name (ARN).
     *
     * @cloudformationAttribute SpaceArn
     */
    readonly attrSpaceArn: string;
    /**
     * Returns the URL of the space. If the space is created with AWS IAM Identity Center (Successor to AWS Single Sign-On) authentication, users can navigate to the URL after appending the respective redirect parameter for the application type to be federated through AWS IAM Identity Center.
     *
     * The following application types are supported:
     *
     * - Studio Classic: `&redirect=JupyterServer`
     * - JupyterLab: `&redirect=JupyterLab`
     * - Code Editor, based on Code-OSS, Visual Studio Code - Open Source: `&redirect=CodeEditor`
     *
     * @cloudformationAttribute Url
     */
    readonly attrUrl: string;
    /**
     * The ID of the associated domain.
     */
    domainId: string;
    /**
     * The collection of ownership settings for a space.
     */
    ownershipSettings?: cdk.IResolvable | CfnSpace.OwnershipSettingsProperty;
    /**
     * The name of the space that appears in the Studio UI.
     */
    spaceDisplayName?: string;
    /**
     * The name of the space.
     */
    spaceName: string;
    /**
     * A collection of space settings.
     */
    spaceSettings?: cdk.IResolvable | CfnSpace.SpaceSettingsProperty;
    /**
     * A collection of space sharing settings.
     */
    spaceSharingSettings?: cdk.IResolvable | CfnSpace.SpaceSharingSettingsProperty;
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
    constructor(scope: constructs.Construct, id: string, props: CfnSpaceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSpace {
    /**
     * A collection of space settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html
     */
    interface SpaceSettingsProperty {
        /**
         * The type of app created within the space.
         *
         * If using the [UpdateSpace](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateSpace.html) API, you can't change the app type of your space by specifying a different value for this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html#cfn-sagemaker-space-spacesettings-apptype
         */
        readonly appType?: string;
        /**
         * The Code Editor application settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html#cfn-sagemaker-space-spacesettings-codeeditorappsettings
         */
        readonly codeEditorAppSettings?: cdk.IResolvable | CfnSpace.SpaceCodeEditorAppSettingsProperty;
        /**
         * A file system, created by you, that you assign to a space for an Amazon SageMaker AI Domain.
         *
         * Permitted users can access this file system in Amazon SageMaker AI Studio.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html#cfn-sagemaker-space-spacesettings-customfilesystems
         */
        readonly customFileSystems?: Array<CfnSpace.CustomFileSystemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The settings for the JupyterLab application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html#cfn-sagemaker-space-spacesettings-jupyterlabappsettings
         */
        readonly jupyterLabAppSettings?: cdk.IResolvable | CfnSpace.SpaceJupyterLabAppSettingsProperty;
        /**
         * The JupyterServer app settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html#cfn-sagemaker-space-spacesettings-jupyterserverappsettings
         */
        readonly jupyterServerAppSettings?: cdk.IResolvable | CfnSpace.JupyterServerAppSettingsProperty;
        /**
         * The KernelGateway app settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html#cfn-sagemaker-space-spacesettings-kernelgatewayappsettings
         */
        readonly kernelGatewayAppSettings?: cdk.IResolvable | CfnSpace.KernelGatewayAppSettingsProperty;
        /**
         * The storage settings for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html#cfn-sagemaker-space-spacesettings-spacestoragesettings
         */
        readonly spaceStorageSettings?: cdk.IResolvable | CfnSpace.SpaceStorageSettingsProperty;
    }
    /**
     * The KernelGateway app settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-kernelgatewayappsettings.html
     */
    interface KernelGatewayAppSettingsProperty {
        /**
         * A list of custom SageMaker AI images that are configured to run as a KernelGateway app.
         *
         * The maximum number of custom images are as follows.
         *
         * - On a domain level: 200
         * - On a space level: 5
         * - On a user profile level: 5
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-kernelgatewayappsettings.html#cfn-sagemaker-space-kernelgatewayappsettings-customimages
         */
        readonly customImages?: Array<CfnSpace.CustomImageProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker AI image used by the KernelGateway app.
         *
         * > The Amazon SageMaker AI Studio UI does not use the default instance type value set here. The default instance type set here is used when Apps are created using the AWS CLI or AWS CloudFormation and the instance type parameter value is not passed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-kernelgatewayappsettings.html#cfn-sagemaker-space-kernelgatewayappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnSpace.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the the user profile or domain.
         *
         * > To remove a Lifecycle Config, you must set `LifecycleConfigArns` to an empty list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-kernelgatewayappsettings.html#cfn-sagemaker-space-kernelgatewayappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * A custom SageMaker AI image.
     *
     * For more information, see [Bring your own SageMaker AI image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customimage.html
     */
    interface CustomImageProperty {
        /**
         * The name of the AppImageConfig.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customimage.html#cfn-sagemaker-space-customimage-appimageconfigname
         */
        readonly appImageConfigName: string;
        /**
         * The name of the CustomImage.
         *
         * Must be unique to your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customimage.html#cfn-sagemaker-space-customimage-imagename
         */
        readonly imageName: string;
        /**
         * The version number of the CustomImage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customimage.html#cfn-sagemaker-space-customimage-imageversionnumber
         */
        readonly imageVersionNumber?: number;
    }
    /**
     * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
     *
     * > When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn` , pass `None` as the value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-resourcespec.html
     */
    interface ResourceSpecProperty {
        /**
         * The instance type that the image version runs on.
         *
         * > *JupyterServer apps* only support the `system` value.
         * >
         * > For *KernelGateway apps* , the `system` value is translated to `ml.t3.medium` . KernelGateway apps also support all other values for available instance types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-resourcespec.html#cfn-sagemaker-space-resourcespec-instancetype
         */
        readonly instanceType?: string;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-resourcespec.html#cfn-sagemaker-space-resourcespec-lifecycleconfigarn
         */
        readonly lifecycleConfigArn?: string;
        /**
         * The ARN of the SageMaker AI image that the image version belongs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-resourcespec.html#cfn-sagemaker-space-resourcespec-sagemakerimagearn
         */
        readonly sageMakerImageArn?: string;
        /**
         * The ARN of the image version created on the instance.
         *
         * To clear the value set for `SageMakerImageVersionArn` , pass `None` as the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-resourcespec.html#cfn-sagemaker-space-resourcespec-sagemakerimageversionarn
         */
        readonly sageMakerImageVersionArn?: string;
    }
    /**
     * The JupyterServer app settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-jupyterserverappsettings.html
     */
    interface JupyterServerAppSettingsProperty {
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker AI image used by the JupyterServer app.
         *
         * If you use the `LifecycleConfigArns` parameter, then this parameter is also required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-jupyterserverappsettings.html#cfn-sagemaker-space-jupyterserverappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnSpace.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the JupyterServerApp.
         *
         * If you use this parameter, the `DefaultResourceSpec` parameter is also required.
         *
         * > To remove a Lifecycle Config, you must set `LifecycleConfigArns` to an empty list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-jupyterserverappsettings.html#cfn-sagemaker-space-jupyterserverappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * The settings for the JupyterLab application within a space.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacejupyterlabappsettings.html
     */
    interface SpaceJupyterLabAppSettingsProperty {
        /**
         * Settings that are used to configure and manage the lifecycle of JupyterLab applications in a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacejupyterlabappsettings.html#cfn-sagemaker-space-spacejupyterlabappsettings-applifecyclemanagement
         */
        readonly appLifecycleManagement?: cdk.IResolvable | CfnSpace.SpaceAppLifecycleManagementProperty;
        /**
         * A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterLab application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacejupyterlabappsettings.html#cfn-sagemaker-space-spacejupyterlabappsettings-coderepositories
         */
        readonly codeRepositories?: Array<CfnSpace.CodeRepositoryProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies the ARNs of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacejupyterlabappsettings.html#cfn-sagemaker-space-spacejupyterlabappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnSpace.ResourceSpecProperty;
    }
    /**
     * Settings that are used to configure and manage the lifecycle of Amazon SageMaker Studio applications in a space.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spaceapplifecyclemanagement.html
     */
    interface SpaceAppLifecycleManagementProperty {
        /**
         * Settings related to idle shutdown of Studio applications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spaceapplifecyclemanagement.html#cfn-sagemaker-space-spaceapplifecyclemanagement-idlesettings
         */
        readonly idleSettings?: cdk.IResolvable | CfnSpace.SpaceIdleSettingsProperty;
    }
    /**
     * Settings related to idle shutdown of Studio applications in a space.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spaceidlesettings.html
     */
    interface SpaceIdleSettingsProperty {
        /**
         * The time that SageMaker waits after the application becomes idle before shutting it down.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spaceidlesettings.html#cfn-sagemaker-space-spaceidlesettings-idletimeoutinminutes
         */
        readonly idleTimeoutInMinutes?: number;
    }
    /**
     * A Git repository that SageMaker AI automatically displays to users for cloning in the JupyterServer application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-coderepository.html
     */
    interface CodeRepositoryProperty {
        /**
         * The URL of the Git repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-coderepository.html#cfn-sagemaker-space-coderepository-repositoryurl
         */
        readonly repositoryUrl: string;
    }
    /**
     * The application settings for a Code Editor space.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacecodeeditorappsettings.html
     */
    interface SpaceCodeEditorAppSettingsProperty {
        /**
         * Settings that are used to configure and manage the lifecycle of CodeEditor applications in a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacecodeeditorappsettings.html#cfn-sagemaker-space-spacecodeeditorappsettings-applifecyclemanagement
         */
        readonly appLifecycleManagement?: cdk.IResolvable | CfnSpace.SpaceAppLifecycleManagementProperty;
        /**
         * Specifies the ARNs of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacecodeeditorappsettings.html#cfn-sagemaker-space-spacecodeeditorappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnSpace.ResourceSpecProperty;
    }
    /**
     * The storage settings for a space.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacestoragesettings.html
     */
    interface SpaceStorageSettingsProperty {
        /**
         * A collection of EBS storage settings for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacestoragesettings.html#cfn-sagemaker-space-spacestoragesettings-ebsstoragesettings
         */
        readonly ebsStorageSettings?: CfnSpace.EbsStorageSettingsProperty | cdk.IResolvable;
    }
    /**
     * A collection of EBS storage settings that apply to both private and shared spaces.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-ebsstoragesettings.html
     */
    interface EbsStorageSettingsProperty {
        /**
         * The size of an EBS storage volume for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-ebsstoragesettings.html#cfn-sagemaker-space-ebsstoragesettings-ebsvolumesizeingb
         */
        readonly ebsVolumeSizeInGb: number;
    }
    /**
     * A file system, created by you, that you assign to a user profile or space for an Amazon SageMaker AI Domain.
     *
     * Permitted users can access this file system in Amazon SageMaker AI Studio.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customfilesystem.html
     */
    interface CustomFileSystemProperty {
        /**
         * A custom file system in Amazon EFS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customfilesystem.html#cfn-sagemaker-space-customfilesystem-efsfilesystem
         */
        readonly efsFileSystem?: CfnSpace.EFSFileSystemProperty | cdk.IResolvable;
        /**
         * A custom file system in Amazon FSx for Lustre.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customfilesystem.html#cfn-sagemaker-space-customfilesystem-fsxlustrefilesystem
         */
        readonly fSxLustreFileSystem?: CfnSpace.FSxLustreFileSystemProperty | cdk.IResolvable;
    }
    /**
     * A file system, created by you in Amazon EFS, that you assign to a user profile or space for an Amazon SageMaker AI Domain.
     *
     * Permitted users can access this file system in Amazon SageMaker AI Studio.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-efsfilesystem.html
     */
    interface EFSFileSystemProperty {
        /**
         * The ID of your Amazon EFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-efsfilesystem.html#cfn-sagemaker-space-efsfilesystem-filesystemid
         */
        readonly fileSystemId: string;
    }
    /**
     * A custom file system in Amazon FSx for Lustre.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-fsxlustrefilesystem.html
     */
    interface FSxLustreFileSystemProperty {
        /**
         * Amazon FSx for Lustre file system ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-fsxlustrefilesystem.html#cfn-sagemaker-space-fsxlustrefilesystem-filesystemid
         */
        readonly fileSystemId: string;
    }
    /**
     * The collection of ownership settings for a space.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-ownershipsettings.html
     */
    interface OwnershipSettingsProperty {
        /**
         * The user profile who is the owner of the space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-ownershipsettings.html#cfn-sagemaker-space-ownershipsettings-owneruserprofilename
         */
        readonly ownerUserProfileName: string;
    }
    /**
     * A collection of space sharing settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesharingsettings.html
     */
    interface SpaceSharingSettingsProperty {
        /**
         * Specifies the sharing type of the space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesharingsettings.html#cfn-sagemaker-space-spacesharingsettings-sharingtype
         */
        readonly sharingType: string;
    }
}
/**
 * Properties for defining a `CfnSpace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html
 */
export interface CfnSpaceProps {
    /**
     * The ID of the associated domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-domainid
     */
    readonly domainId: string;
    /**
     * The collection of ownership settings for a space.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-ownershipsettings
     */
    readonly ownershipSettings?: cdk.IResolvable | CfnSpace.OwnershipSettingsProperty;
    /**
     * The name of the space that appears in the Studio UI.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacedisplayname
     */
    readonly spaceDisplayName?: string;
    /**
     * The name of the space.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacename
     */
    readonly spaceName: string;
    /**
     * A collection of space settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesettings
     */
    readonly spaceSettings?: cdk.IResolvable | CfnSpace.SpaceSettingsProperty;
    /**
     * A collection of space sharing settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesharingsettings
     */
    readonly spaceSharingSettings?: cdk.IResolvable | CfnSpace.SpaceSharingSettingsProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a user profile.
 *
 * A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from IAM Identity Center , a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
 *
 * > If you're using IAM Identity Center authentication, a user in IAM Identity Center , or a group in IAM Identity Center containing that user, must be assigned to the Amazon SageMaker Studio application from the IAM Identity Center Console to create a user profile. For more information about application assignment, see [Assign user access](https://docs.aws.amazon.com/singlesignon/latest/userguide/assignuserstoapp.html) . After assignment is complete, a user profile can be created for that user in IAM Identity Center with AWS CloudFormation.
 *
 * @cloudformationResource AWS::SageMaker::UserProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html
 */
export declare class CfnUserProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserProfile;
    /**
     * The Amazon Resource Name (ARN) of the user profile, such as `arn:aws:sagemaker:region:account-id:user-profile/domain-id/user-profile-name` .
     *
     * @cloudformationAttribute UserProfileArn
     */
    readonly attrUserProfileArn: string;
    /**
     * The domain ID.
     */
    domainId: string;
    /**
     * A specifier for the type of value specified in SingleSignOnUserValue.
     */
    singleSignOnUserIdentifier?: string;
    /**
     * The username of the associated AWS Single Sign-On User for this UserProfile.
     */
    singleSignOnUserValue?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The user profile name.
     */
    userProfileName: string;
    /**
     * A collection of settings that apply to users of Amazon SageMaker Studio.
     */
    userSettings?: cdk.IResolvable | CfnUserProfile.UserSettingsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUserProfile {
    /**
     * A collection of settings that apply to users of Amazon SageMaker Studio.
     *
     * These settings are specified when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called, and as `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called.
     *
     * `SecurityGroups` is aggregated when specified in both calls. For all other settings in `UserSettings` , the values specified in `CreateUserProfile` take precedence over those specified in `CreateDomain` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html
     */
    interface UserSettingsProperty {
        /**
         * The Code Editor application settings.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-codeeditorappsettings
         */
        readonly codeEditorAppSettings?: CfnUserProfile.CodeEditorAppSettingsProperty | cdk.IResolvable;
        /**
         * The settings for assigning a custom file system to a user profile.
         *
         * Permitted users can access this file system in Amazon SageMaker AI Studio.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-customfilesystemconfigs
         */
        readonly customFileSystemConfigs?: Array<CfnUserProfile.CustomFileSystemConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Details about the POSIX identity that is used for file system operations.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-customposixuserconfig
         */
        readonly customPosixUserConfig?: CfnUserProfile.CustomPosixUserConfigProperty | cdk.IResolvable;
        /**
         * The default experience that the user is directed to when accessing the domain. The supported values are:.
         *
         * - `studio::` : Indicates that Studio is the default experience. This value can only be passed if `StudioWebPortal` is set to `ENABLED` .
         * - `app:JupyterServer:` : Indicates that Studio Classic is the default experience.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-defaultlandinguri
         */
        readonly defaultLandingUri?: string;
        /**
         * The execution role for the user.
         *
         * SageMaker applies this setting only to private spaces that the user creates in the domain. SageMaker doesn't apply this setting to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-executionrole
         */
        readonly executionRole?: string;
        /**
         * The settings for the JupyterLab application.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-jupyterlabappsettings
         */
        readonly jupyterLabAppSettings?: cdk.IResolvable | CfnUserProfile.JupyterLabAppSettingsProperty;
        /**
         * The Jupyter server's app settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-jupyterserverappsettings
         */
        readonly jupyterServerAppSettings?: cdk.IResolvable | CfnUserProfile.JupyterServerAppSettingsProperty;
        /**
         * The kernel gateway app settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-kernelgatewayappsettings
         */
        readonly kernelGatewayAppSettings?: cdk.IResolvable | CfnUserProfile.KernelGatewayAppSettingsProperty;
        /**
         * A collection of settings that configure user interaction with the `RStudioServerPro` app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-rstudioserverproappsettings
         */
        readonly rStudioServerProAppSettings?: cdk.IResolvable | CfnUserProfile.RStudioServerProAppSettingsProperty;
        /**
         * The security groups for the Amazon Virtual Private Cloud (VPC) that the domain uses for communication.
         *
         * Optional when the `CreateDomain.AppNetworkAccessType` parameter is set to `PublicInternetOnly` .
         *
         * Required when the `CreateDomain.AppNetworkAccessType` parameter is set to `VpcOnly` , unless specified as part of the `DefaultUserSettings` for the domain.
         *
         * Amazon SageMaker AI adds a security group to allow NFS traffic from Amazon SageMaker AI Studio. Therefore, the number of security groups that you can specify is one less than the maximum number shown.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * Specifies options for sharing Amazon SageMaker AI Studio notebooks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-sharingsettings
         */
        readonly sharingSettings?: cdk.IResolvable | CfnUserProfile.SharingSettingsProperty;
        /**
         * The storage settings for a space.
         *
         * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-spacestoragesettings
         */
        readonly spaceStorageSettings?: CfnUserProfile.DefaultSpaceStorageSettingsProperty | cdk.IResolvable;
        /**
         * Whether the user can access Studio.
         *
         * If this value is set to `DISABLED` , the user cannot access Studio, even if that is the default experience for the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-studiowebportal
         */
        readonly studioWebPortal?: string;
        /**
         * Studio settings.
         *
         * If these settings are applied on a user level, they take priority over the settings applied on a domain level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-studiowebportalsettings
         */
        readonly studioWebPortalSettings?: cdk.IResolvable | CfnUserProfile.StudioWebPortalSettingsProperty;
    }
    /**
     * The KernelGateway app settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html
     */
    interface KernelGatewayAppSettingsProperty {
        /**
         * A list of custom SageMaker AI images that are configured to run as a KernelGateway app.
         *
         * The maximum number of custom images are as follows.
         *
         * - On a domain level: 200
         * - On a space level: 5
         * - On a user profile level: 5
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html#cfn-sagemaker-userprofile-kernelgatewayappsettings-customimages
         */
        readonly customImages?: Array<CfnUserProfile.CustomImageProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker AI image used by the KernelGateway app.
         *
         * > The Amazon SageMaker AI Studio UI does not use the default instance type value set here. The default instance type set here is used when Apps are created using the AWS CLI or AWS CloudFormation and the instance type parameter value is not passed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html#cfn-sagemaker-userprofile-kernelgatewayappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnUserProfile.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the the user profile or domain.
         *
         * > To remove a Lifecycle Config, you must set `LifecycleConfigArns` to an empty list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html#cfn-sagemaker-userprofile-kernelgatewayappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * A custom SageMaker AI image.
     *
     * For more information, see [Bring your own SageMaker AI image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html
     */
    interface CustomImageProperty {
        /**
         * The name of the AppImageConfig.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html#cfn-sagemaker-userprofile-customimage-appimageconfigname
         */
        readonly appImageConfigName: string;
        /**
         * The name of the CustomImage.
         *
         * Must be unique to your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html#cfn-sagemaker-userprofile-customimage-imagename
         */
        readonly imageName: string;
        /**
         * The version number of the CustomImage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html#cfn-sagemaker-userprofile-customimage-imageversionnumber
         */
        readonly imageVersionNumber?: number;
    }
    /**
     * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
     *
     * > When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn` , pass `None` as the value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html
     */
    interface ResourceSpecProperty {
        /**
         * The instance type that the image version runs on.
         *
         * > *JupyterServer apps* only support the `system` value.
         * >
         * > For *KernelGateway apps* , the `system` value is translated to `ml.t3.medium` . KernelGateway apps also support all other values for available instance types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html#cfn-sagemaker-userprofile-resourcespec-instancetype
         */
        readonly instanceType?: string;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html#cfn-sagemaker-userprofile-resourcespec-lifecycleconfigarn
         */
        readonly lifecycleConfigArn?: string;
        /**
         * The ARN of the SageMaker AI image that the image version belongs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html#cfn-sagemaker-userprofile-resourcespec-sagemakerimagearn
         */
        readonly sageMakerImageArn?: string;
        /**
         * The ARN of the image version created on the instance.
         *
         * To clear the value set for `SageMakerImageVersionArn` , pass `None` as the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html#cfn-sagemaker-userprofile-resourcespec-sagemakerimageversionarn
         */
        readonly sageMakerImageVersionArn?: string;
    }
    /**
     * A collection of settings that configure user interaction with the `RStudioServerPro` app.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-rstudioserverproappsettings.html
     */
    interface RStudioServerProAppSettingsProperty {
        /**
         * Indicates whether the current user has access to the `RStudioServerPro` app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-rstudioserverproappsettings.html#cfn-sagemaker-userprofile-rstudioserverproappsettings-accessstatus
         */
        readonly accessStatus?: string;
        /**
         * The level of permissions that the user has within the `RStudioServerPro` app.
         *
         * This value defaults to `User`. The `Admin` value allows the user access to the RStudio Administrative Dashboard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-rstudioserverproappsettings.html#cfn-sagemaker-userprofile-rstudioserverproappsettings-usergroup
         */
        readonly userGroup?: string;
    }
    /**
     * The JupyterServer app settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterserverappsettings.html
     */
    interface JupyterServerAppSettingsProperty {
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterserverappsettings.html#cfn-sagemaker-userprofile-jupyterserverappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnUserProfile.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the JupyterServerApp.
         *
         * If you use this parameter, the `DefaultResourceSpec` parameter is also required.
         *
         * > To remove a Lifecycle Config, you must set `LifecycleConfigArns` to an empty list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterserverappsettings.html#cfn-sagemaker-userprofile-jupyterserverappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * Specifies options when sharing an Amazon SageMaker Studio notebook.
     *
     * These settings are specified as part of `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called, and as part of `UserSettings` when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html
     */
    interface SharingSettingsProperty {
        /**
         * Whether to include the notebook cell output when sharing the notebook.
         *
         * The default is `Disabled` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html#cfn-sagemaker-userprofile-sharingsettings-notebookoutputoption
         */
        readonly notebookOutputOption?: string;
        /**
         * When `NotebookOutputOption` is `Allowed` , the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html#cfn-sagemaker-userprofile-sharingsettings-s3kmskeyid
         */
        readonly s3KmsKeyId?: string;
        /**
         * When `NotebookOutputOption` is `Allowed` , the Amazon S3 bucket used to store the shared notebook snapshots.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html#cfn-sagemaker-userprofile-sharingsettings-s3outputpath
         */
        readonly s3OutputPath?: string;
    }
    /**
     * The settings for the JupyterLab application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterlabappsettings.html
     */
    interface JupyterLabAppSettingsProperty {
        /**
         * Indicates whether idle shutdown is activated for JupyterLab applications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterlabappsettings.html#cfn-sagemaker-userprofile-jupyterlabappsettings-applifecyclemanagement
         */
        readonly appLifecycleManagement?: CfnUserProfile.AppLifecycleManagementProperty | cdk.IResolvable;
        /**
         * A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterLab application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterlabappsettings.html#cfn-sagemaker-userprofile-jupyterlabappsettings-coderepositories
         */
        readonly codeRepositories?: Array<CfnUserProfile.CodeRepositoryProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of custom SageMaker images that are configured to run as a JupyterLab app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterlabappsettings.html#cfn-sagemaker-userprofile-jupyterlabappsettings-customimages
         */
        readonly customImages?: Array<CfnUserProfile.CustomImageProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterlabappsettings.html#cfn-sagemaker-userprofile-jupyterlabappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnUserProfile.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the lifecycle configurations attached to the user profile or domain.
         *
         * To remove a lifecycle config, you must set `LifecycleConfigArns` to an empty list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterlabappsettings.html#cfn-sagemaker-userprofile-jupyterlabappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * A Git repository that SageMaker AI automatically displays to users for cloning in the JupyterServer application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-coderepository.html
     */
    interface CodeRepositoryProperty {
        /**
         * The URL of the Git repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-coderepository.html#cfn-sagemaker-userprofile-coderepository-repositoryurl
         */
        readonly repositoryUrl: string;
    }
    /**
     * Settings that are used to configure and manage the lifecycle of Amazon SageMaker Studio applications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-applifecyclemanagement.html
     */
    interface AppLifecycleManagementProperty {
        /**
         * Settings related to idle shutdown of Studio applications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-applifecyclemanagement.html#cfn-sagemaker-userprofile-applifecyclemanagement-idlesettings
         */
        readonly idleSettings?: CfnUserProfile.IdleSettingsProperty | cdk.IResolvable;
    }
    /**
     * Settings related to idle shutdown of Studio applications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-idlesettings.html
     */
    interface IdleSettingsProperty {
        /**
         * The time that SageMaker waits after the application becomes idle before shutting it down.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-idlesettings.html#cfn-sagemaker-userprofile-idlesettings-idletimeoutinminutes
         */
        readonly idleTimeoutInMinutes?: number;
        /**
         * Indicates whether idle shutdown is activated for the application type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-idlesettings.html#cfn-sagemaker-userprofile-idlesettings-lifecyclemanagement
         */
        readonly lifecycleManagement?: string;
        /**
         * The maximum value in minutes that custom idle shutdown can be set to by the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-idlesettings.html#cfn-sagemaker-userprofile-idlesettings-maxidletimeoutinminutes
         */
        readonly maxIdleTimeoutInMinutes?: number;
        /**
         * The minimum value in minutes that custom idle shutdown can be set to by the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-idlesettings.html#cfn-sagemaker-userprofile-idlesettings-minidletimeoutinminutes
         */
        readonly minIdleTimeoutInMinutes?: number;
    }
    /**
     * The default storage settings for a space.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-defaultspacestoragesettings.html
     */
    interface DefaultSpaceStorageSettingsProperty {
        /**
         * The default EBS storage settings for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-defaultspacestoragesettings.html#cfn-sagemaker-userprofile-defaultspacestoragesettings-defaultebsstoragesettings
         */
        readonly defaultEbsStorageSettings?: CfnUserProfile.DefaultEbsStorageSettingsProperty | cdk.IResolvable;
    }
    /**
     * A collection of default EBS storage settings that apply to spaces created within a domain or user profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-defaultebsstoragesettings.html
     */
    interface DefaultEbsStorageSettingsProperty {
        /**
         * The default size of the EBS storage volume for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-defaultebsstoragesettings.html#cfn-sagemaker-userprofile-defaultebsstoragesettings-defaultebsvolumesizeingb
         */
        readonly defaultEbsVolumeSizeInGb: number;
        /**
         * The maximum size of the EBS storage volume for a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-defaultebsstoragesettings.html#cfn-sagemaker-userprofile-defaultebsstoragesettings-maximumebsvolumesizeingb
         */
        readonly maximumEbsVolumeSizeInGb: number;
    }
    /**
     * The Code Editor application settings.
     *
     * For more information about Code Editor, see [Get started with Code Editor in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/code-editor.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-codeeditorappsettings.html
     */
    interface CodeEditorAppSettingsProperty {
        /**
         * Settings that are used to configure and manage the lifecycle of CodeEditor applications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-codeeditorappsettings.html#cfn-sagemaker-userprofile-codeeditorappsettings-applifecyclemanagement
         */
        readonly appLifecycleManagement?: CfnUserProfile.AppLifecycleManagementProperty | cdk.IResolvable;
        /**
         * A list of custom SageMaker images that are configured to run as a Code Editor app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-codeeditorappsettings.html#cfn-sagemaker-userprofile-codeeditorappsettings-customimages
         */
        readonly customImages?: Array<CfnUserProfile.CustomImageProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the Code Editor app.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-codeeditorappsettings.html#cfn-sagemaker-userprofile-codeeditorappsettings-defaultresourcespec
         */
        readonly defaultResourceSpec?: cdk.IResolvable | CfnUserProfile.ResourceSpecProperty;
        /**
         * The Amazon Resource Name (ARN) of the Code Editor application lifecycle configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-codeeditorappsettings.html#cfn-sagemaker-userprofile-codeeditorappsettings-lifecycleconfigarns
         */
        readonly lifecycleConfigArns?: Array<string>;
    }
    /**
     * Studio settings.
     *
     * If these settings are applied on a user level, they take priority over the settings applied on a domain level.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-studiowebportalsettings.html
     */
    interface StudioWebPortalSettingsProperty {
        /**
         * The [Applications supported in Studio](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-apps.html) that are hidden from the Studio left navigation pane.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-studiowebportalsettings.html#cfn-sagemaker-userprofile-studiowebportalsettings-hiddenapptypes
         */
        readonly hiddenAppTypes?: Array<string>;
        /**
         * The machine learning tools that are hidden from the Studio left navigation pane.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-studiowebportalsettings.html#cfn-sagemaker-userprofile-studiowebportalsettings-hiddenmltools
         */
        readonly hiddenMlTools?: Array<string>;
    }
    /**
     * Details about the POSIX identity that is used for file system operations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customposixuserconfig.html
     */
    interface CustomPosixUserConfigProperty {
        /**
         * The POSIX group ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customposixuserconfig.html#cfn-sagemaker-userprofile-customposixuserconfig-gid
         */
        readonly gid: number;
        /**
         * The POSIX user ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customposixuserconfig.html#cfn-sagemaker-userprofile-customposixuserconfig-uid
         */
        readonly uid: number;
    }
    /**
     * The settings for assigning a custom file system to a user profile or space for an Amazon SageMaker AI Domain.
     *
     * Permitted users can access this file system in Amazon SageMaker AI Studio.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customfilesystemconfig.html
     */
    interface CustomFileSystemConfigProperty {
        /**
         * The settings for a custom Amazon EFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customfilesystemconfig.html#cfn-sagemaker-userprofile-customfilesystemconfig-efsfilesystemconfig
         */
        readonly efsFileSystemConfig?: CfnUserProfile.EFSFileSystemConfigProperty | cdk.IResolvable;
        /**
         * The settings for a custom Amazon FSx for Lustre file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customfilesystemconfig.html#cfn-sagemaker-userprofile-customfilesystemconfig-fsxlustrefilesystemconfig
         */
        readonly fSxLustreFileSystemConfig?: CfnUserProfile.FSxLustreFileSystemConfigProperty | cdk.IResolvable;
    }
    /**
     * The settings for assigning a custom Amazon EFS file system to a user profile or space for an Amazon SageMaker AI Domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-efsfilesystemconfig.html
     */
    interface EFSFileSystemConfigProperty {
        /**
         * The ID of your Amazon EFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-efsfilesystemconfig.html#cfn-sagemaker-userprofile-efsfilesystemconfig-filesystemid
         */
        readonly fileSystemId: string;
        /**
         * The path to the file system directory that is accessible in Amazon SageMaker AI Studio.
         *
         * Permitted users can access only this directory and below.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-efsfilesystemconfig.html#cfn-sagemaker-userprofile-efsfilesystemconfig-filesystempath
         */
        readonly fileSystemPath?: string;
    }
    /**
     * The settings for assigning a custom Amazon FSx for Lustre file system to a user profile or space for an Amazon SageMaker Domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-fsxlustrefilesystemconfig.html
     */
    interface FSxLustreFileSystemConfigProperty {
        /**
         * The globally unique, 17-digit, ID of the file system, assigned by Amazon FSx for Lustre.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-fsxlustrefilesystemconfig.html#cfn-sagemaker-userprofile-fsxlustrefilesystemconfig-filesystemid
         */
        readonly fileSystemId: string;
        /**
         * The path to the file system directory that is accessible in Amazon SageMaker Studio.
         *
         * Permitted users can access only this directory and below.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-fsxlustrefilesystemconfig.html#cfn-sagemaker-userprofile-fsxlustrefilesystemconfig-filesystempath
         */
        readonly fileSystemPath?: string;
    }
}
/**
 * Properties for defining a `CfnUserProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html
 */
export interface CfnUserProfileProps {
    /**
     * The domain ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-domainid
     */
    readonly domainId: string;
    /**
     * A specifier for the type of value specified in SingleSignOnUserValue.
     *
     * Currently, the only supported value is "UserName". If the Domain's AuthMode is IAM Identity Center , this field is required. If the Domain's AuthMode is not IAM Identity Center , this field cannot be specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-singlesignonuseridentifier
     */
    readonly singleSignOnUserIdentifier?: string;
    /**
     * The username of the associated AWS Single Sign-On User for this UserProfile.
     *
     * If the Domain's AuthMode is IAM Identity Center , this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not IAM Identity Center , this field cannot be specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-singlesignonuservalue
     */
    readonly singleSignOnUserValue?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * Tags that you specify for the User Profile are also added to all apps that the User Profile launches.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The user profile name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-userprofilename
     */
    readonly userProfileName: string;
    /**
     * A collection of settings that apply to users of Amazon SageMaker Studio.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings
     */
    readonly userSettings?: cdk.IResolvable | CfnUserProfile.UserSettingsProperty;
}
/**
 * Creates a new work team for labeling your data.
 *
 * A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team.
 *
 * You cannot create more than 25 work teams in an account and region.
 *
 * @cloudformationResource AWS::SageMaker::Workteam
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html
 */
export declare class CfnWorkteam extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkteam from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkteam;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the work team.
     *
     * @cloudformationAttribute WorkteamName
     */
    readonly attrWorkteamName: string;
    /**
     * A description of the work team.
     */
    description?: string;
    /**
     * A list of `MemberDefinition` objects that contains objects that identify the workers that make up the work team.
     */
    memberDefinitions?: Array<cdk.IResolvable | CfnWorkteam.MemberDefinitionProperty> | cdk.IResolvable;
    /**
     * Configures SNS notifications of available or expiring work items for work teams.
     */
    notificationConfiguration?: cdk.IResolvable | CfnWorkteam.NotificationConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name of the workforce.
     */
    workforceName?: string;
    /**
     * The name of the work team.
     */
    workteamName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnWorkteamProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWorkteam {
    /**
     * Configures Amazon SNS notifications of available or expiring work items for work teams.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-notificationconfiguration.html
     */
    interface NotificationConfigurationProperty {
        /**
         * The ARN for the Amazon SNS topic to which notifications should be published.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-notificationconfiguration.html#cfn-sagemaker-workteam-notificationconfiguration-notificationtopicarn
         */
        readonly notificationTopicArn: string;
    }
    /**
     * Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-memberdefinition.html
     */
    interface MemberDefinitionProperty {
        /**
         * The Amazon Cognito user group that is part of the work team.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-memberdefinition.html#cfn-sagemaker-workteam-memberdefinition-cognitomemberdefinition
         */
        readonly cognitoMemberDefinition?: CfnWorkteam.CognitoMemberDefinitionProperty | cdk.IResolvable;
        /**
         * A list user groups that exist in your OIDC Identity Provider (IdP).
         *
         * One to ten groups can be used to create a single private work team. When you add a user group to the list of `Groups` , you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-memberdefinition.html#cfn-sagemaker-workteam-memberdefinition-oidcmemberdefinition
         */
        readonly oidcMemberDefinition?: cdk.IResolvable | CfnWorkteam.OidcMemberDefinitionProperty;
    }
    /**
     * A list of user groups that exist in your OIDC Identity Provider (IdP).
     *
     * One to ten groups can be used to create a single private work team. When you add a user group to the list of `Groups` , you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-oidcmemberdefinition.html
     */
    interface OidcMemberDefinitionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-oidcmemberdefinition.html#cfn-sagemaker-workteam-oidcmemberdefinition-oidcgroups
         */
        readonly oidcGroups: Array<string>;
    }
    /**
     * Identifies a Amazon Cognito user group.
     *
     * A user group can be used in on or more work teams.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-cognitomemberdefinition.html
     */
    interface CognitoMemberDefinitionProperty {
        /**
         * An identifier for an application client.
         *
         * You must create the app client ID using Amazon Cognito .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-cognitomemberdefinition.html#cfn-sagemaker-workteam-cognitomemberdefinition-cognitoclientid
         */
        readonly cognitoClientId: string;
        /**
         * An identifier for a user group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-cognitomemberdefinition.html#cfn-sagemaker-workteam-cognitomemberdefinition-cognitousergroup
         */
        readonly cognitoUserGroup: string;
        /**
         * An identifier for a user pool.
         *
         * The user pool must be in the same region as the service that you are calling.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-cognitomemberdefinition.html#cfn-sagemaker-workteam-cognitomemberdefinition-cognitouserpool
         */
        readonly cognitoUserPool: string;
    }
}
/**
 * Properties for defining a `CfnWorkteam`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html
 */
export interface CfnWorkteamProps {
    /**
     * A description of the work team.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html#cfn-sagemaker-workteam-description
     */
    readonly description?: string;
    /**
     * A list of `MemberDefinition` objects that contains objects that identify the workers that make up the work team.
     *
     * Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use `CognitoMemberDefinition` . For workforces created using your own OIDC identity provider (IdP) use `OidcMemberDefinition` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html#cfn-sagemaker-workteam-memberdefinitions
     */
    readonly memberDefinitions?: Array<cdk.IResolvable | CfnWorkteam.MemberDefinitionProperty> | cdk.IResolvable;
    /**
     * Configures SNS notifications of available or expiring work items for work teams.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html#cfn-sagemaker-workteam-notificationconfiguration
     */
    readonly notificationConfiguration?: cdk.IResolvable | CfnWorkteam.NotificationConfigurationProperty;
    /**
     * An array of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html#cfn-sagemaker-workteam-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the workforce.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html#cfn-sagemaker-workteam-workforcename
     */
    readonly workforceName?: string;
    /**
     * The name of the work team.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html#cfn-sagemaker-workteam-workteamname
     */
    readonly workteamName?: string;
}
/**
 * Creates a SageMaker HyperPod cluster.
 *
 * SageMaker HyperPod is a capability of SageMaker for creating and managing persistent clusters for developing large machine learning models, such as large language models (LLMs) and diffusion models. To learn more, see [Amazon SageMaker HyperPod](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod.html) in the *Amazon SageMaker Developer Guide* .
 *
 * @cloudformationResource AWS::SageMaker::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html
 */
export declare class CfnCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCluster;
    /**
     * The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.
     *
     * @cloudformationAttribute ClusterArn
     */
    readonly attrClusterArn: string;
    /**
     * The status of the SageMaker HyperPod cluster.
     *
     * @cloudformationAttribute ClusterStatus
     */
    readonly attrClusterStatus: string;
    /**
     * The time when the SageMaker HyperPod cluster is created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The failure message of the SageMaker HyperPod cluster.
     *
     * @cloudformationAttribute FailureMessage
     */
    readonly attrFailureMessage: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the SageMaker HyperPod cluster.
     */
    clusterName?: string;
    /**
     * The instance groups of the SageMaker HyperPod cluster.
     */
    instanceGroups: Array<CfnCluster.ClusterInstanceGroupProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether to enable or disable the automatic node recovery feature of SageMaker HyperPod.
     */
    nodeRecovery?: string;
    /**
     * The orchestrator type for the SageMaker HyperPod cluster.
     */
    orchestrator?: cdk.IResolvable | CfnCluster.OrchestratorProperty;
    /**
     * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
     */
    vpcConfig?: cdk.IResolvable | CfnCluster.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCluster {
    /**
     * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
     *
     * You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The VPC security group IDs, in the form `sg-xxxxxxxx` .
         *
         * Specify the security groups for the VPC that is specified in the `Subnets` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-vpcconfig.html#cfn-sagemaker-cluster-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The ID of the subnets in the VPC to which you want to connect your training job or model.
         *
         * For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-vpcconfig.html#cfn-sagemaker-cluster-vpcconfig-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * The configuration information of the instance group within the HyperPod cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html
     */
    interface ClusterInstanceGroupProperty {
        /**
         * The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-currentcount
         */
        readonly currentCount?: number;
        /**
         * The execution role for the instance group to assume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-executionrole
         */
        readonly executionRole: string;
        /**
         * The number of instances in an instance group of the SageMaker HyperPod cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-instancecount
         */
        readonly instanceCount: number;
        /**
         * The name of the instance group of a SageMaker HyperPod cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-instancegroupname
         */
        readonly instanceGroupName: string;
        /**
         * The configurations of additional storage specified to the instance group where the instance (node) is launched.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-instancestorageconfigs
         */
        readonly instanceStorageConfigs?: Array<CfnCluster.ClusterInstanceStorageConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The instance type of the instance group of a SageMaker HyperPod cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-instancetype
         */
        readonly instanceType: string;
        /**
         * The lifecycle configuration for a SageMaker HyperPod cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-lifecycleconfig
         */
        readonly lifeCycleConfig: CfnCluster.ClusterLifeCycleConfigProperty | cdk.IResolvable;
        /**
         * A flag indicating whether deep health checks should be performed when the HyperPod cluster instance group is created or updated.
         *
         * Deep health checks are comprehensive, invasive tests that validate the health of the underlying hardware and infrastructure components.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-onstartdeephealthchecks
         */
        readonly onStartDeepHealthChecks?: Array<string>;
        /**
         * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
         *
         * You can control access to and from your resources by configuring a VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-overridevpcconfig
         */
        readonly overrideVpcConfig?: cdk.IResolvable | CfnCluster.VpcConfigProperty;
        /**
         * The number of threads per CPU core you specified under `CreateCluster` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html#cfn-sagemaker-cluster-clusterinstancegroup-threadspercore
         */
        readonly threadsPerCore?: number;
    }
    /**
     * Defines the configuration for attaching additional storage to the instances in the SageMaker HyperPod cluster instance group.
     *
     * To learn more, see [SageMaker HyperPod release notes: June 20, 2024](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-release-notes.html#sagemaker-hyperpod-release-notes-20240620) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancestorageconfig.html
     */
    interface ClusterInstanceStorageConfigProperty {
        /**
         * Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group.
         *
         * The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to `/opt/sagemaker` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancestorageconfig.html#cfn-sagemaker-cluster-clusterinstancestorageconfig-ebsvolumeconfig
         */
        readonly ebsVolumeConfig?: CfnCluster.ClusterEbsVolumeConfigProperty | cdk.IResolvable;
    }
    /**
     * Defines the configuration for attaching an additional Amazon Elastic Block Store (EBS) volume to each instance of the SageMaker HyperPod cluster instance group.
     *
     * To learn more, see [SageMaker HyperPod release notes: June 20, 2024](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-release-notes.html#sagemaker-hyperpod-release-notes-20240620) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterebsvolumeconfig.html
     */
    interface ClusterEbsVolumeConfigProperty {
        /**
         * The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group.
         *
         * The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to `/opt/sagemaker` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterebsvolumeconfig.html#cfn-sagemaker-cluster-clusterebsvolumeconfig-volumesizeingb
         */
        readonly volumeSizeInGb?: number;
    }
    /**
     * The lifecycle configuration for a SageMaker HyperPod cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterlifecycleconfig.html
     */
    interface ClusterLifeCycleConfigProperty {
        /**
         * The file name of the entrypoint script of lifecycle scripts under `SourceS3Uri` .
         *
         * This entrypoint script runs during cluster creation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterlifecycleconfig.html#cfn-sagemaker-cluster-clusterlifecycleconfig-oncreate
         */
        readonly onCreate: string;
        /**
         * An Amazon S3 bucket path where your lifecycle scripts are stored.
         *
         * > Make sure that the S3 bucket path starts with `s3://sagemaker-` . The [IAM role for SageMaker HyperPod](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-prerequisites.html#sagemaker-hyperpod-prerequisites-iam-role-for-hyperpod) has the managed [`AmazonSageMakerClusterInstanceRolePolicy`](https://docs.aws.amazon.com/sagemaker/latest/dg/security-iam-awsmanpol-cluster.html) attached, which allows access to S3 buckets with the specific prefix `sagemaker-` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterlifecycleconfig.html#cfn-sagemaker-cluster-clusterlifecycleconfig-sources3uri
         */
        readonly sourceS3Uri: string;
    }
    /**
     * The orchestrator for a SageMaker HyperPod cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-orchestrator.html
     */
    interface OrchestratorProperty {
        /**
         * The configuration of the Amazon EKS orchestrator cluster for the SageMaker HyperPod cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-orchestrator.html#cfn-sagemaker-cluster-orchestrator-eks
         */
        readonly eks: CfnCluster.ClusterOrchestratorEksConfigProperty | cdk.IResolvable;
    }
    /**
     * The configuration for the Amazon EKS cluster that is used as the orchestrator for the SageMaker HyperPod cluster.
     *
     * This includes the Amazon Resource Name (ARN) of the EKS cluster
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterorchestratoreksconfig.html
     */
    interface ClusterOrchestratorEksConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterorchestratoreksconfig.html#cfn-sagemaker-cluster-clusterorchestratoreksconfig-clusterarn
         */
        readonly clusterArn: string;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html
 */
export interface CfnClusterProps {
    /**
     * The name of the SageMaker HyperPod cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clustername
     */
    readonly clusterName?: string;
    /**
     * The instance groups of the SageMaker HyperPod cluster.
     *
     * To delete an instance group, remove it from the array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-instancegroups
     */
    readonly instanceGroups: Array<CfnCluster.ClusterInstanceGroupProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether to enable or disable the automatic node recovery feature of SageMaker HyperPod.
     *
     * Available values are `Automatic` for enabling and `None` for disabling.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-noderecovery
     */
    readonly nodeRecovery?: string;
    /**
     * The orchestrator type for the SageMaker HyperPod cluster.
     *
     * Currently, `'eks'` is the only available option.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-orchestrator
     */
    readonly orchestrator?: cdk.IResolvable | CfnCluster.OrchestratorProperty;
    /**
     * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
     *
     * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html) .
     *
     * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) . For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://docs.aws.amazon.com/https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to.
     *
     * You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnCluster.VpcConfigProperty;
}
/**
 * Creates an inference component, which is a SageMaker AI hosting object that you can use to deploy a model to an endpoint.
 *
 * In the inference component settings, you specify the model, the endpoint, and how the model utilizes the resources that the endpoint hosts. You can optimize resource utilization by tailoring how the required CPU cores, accelerators, and memory are allocated. You can deploy multiple inference components to an endpoint, where each inference component contains one model and the resource utilization needs for that individual model. After you deploy an inference component, you can directly invoke the associated model when you use the InvokeEndpoint API action.
 *
 * @cloudformationResource AWS::SageMaker::InferenceComponent
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html
 */
export declare class CfnInferenceComponent extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInferenceComponent from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInferenceComponent;
    /**
     * The time when the inference component was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The failure reason if the inference component is in a failed state
     *
     * @cloudformationAttribute FailureReason
     */
    readonly attrFailureReason: string;
    /**
     * The Amazon Resource Name (ARN) of the inference component.
     *
     * @cloudformationAttribute InferenceComponentArn
     */
    readonly attrInferenceComponentArn: string;
    /**
     * The status of the inference component.
     *
     * @cloudformationAttribute InferenceComponentStatus
     */
    readonly attrInferenceComponentStatus: string;
    /**
     * The time when the inference component was last updated.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: string;
    /**
     * The number of runtime copies of the model container that are currently deployed.
     *
     * @cloudformationAttribute RuntimeConfig.CurrentCopyCount
     */
    readonly attrRuntimeConfigCurrentCopyCount: number;
    /**
     * The number of runtime copies of the model container that you requested to deploy with the inference component.
     *
     * @cloudformationAttribute RuntimeConfig.DesiredCopyCount
     */
    readonly attrRuntimeConfigDesiredCopyCount: number;
    /**
     * @cloudformationAttribute Specification.Container.DeployedImage
     */
    readonly attrSpecificationContainerDeployedImage: cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the endpoint that hosts the inference component.
     */
    endpointArn?: string;
    /**
     * The name of the endpoint that hosts the inference component.
     */
    endpointName: string;
    /**
     * The name of the inference component.
     */
    inferenceComponentName?: string;
    /**
     * The runtime config for the inference component.
     */
    runtimeConfig?: CfnInferenceComponent.InferenceComponentRuntimeConfigProperty | cdk.IResolvable;
    /**
     * The specification for the inference component.
     */
    specification: CfnInferenceComponent.InferenceComponentSpecificationProperty | cdk.IResolvable;
    /**
     * An array of tags to apply to the resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name of the production variant that hosts the inference component.
     */
    variantName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInferenceComponentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInferenceComponent {
    /**
     * Details about the resources to deploy with this inference component, including the model, container, and compute resources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentspecification.html
     */
    interface InferenceComponentSpecificationProperty {
        /**
         * The name of an existing inference component that is to contain the inference component that you're creating with your request.
         *
         * Specify this parameter only if your request is meant to create an adapter inference component. An adapter inference component contains the path to an adapter model. The purpose of the adapter model is to tailor the inference output of a base foundation model, which is hosted by the base inference component. The adapter inference component uses the compute resources that you assigned to the base inference component.
         *
         * When you create an adapter inference component, use the `Container` parameter to specify the location of the adapter artifacts. In the parameter value, use the `ArtifactUrl` parameter of the `InferenceComponentContainerSpecification` data type.
         *
         * Before you can create an adapter inference component, you must have an existing inference component that contains the foundation model that you want to adapt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentspecification.html#cfn-sagemaker-inferencecomponent-inferencecomponentspecification-baseinferencecomponentname
         */
        readonly baseInferenceComponentName?: string;
        /**
         * The compute resources allocated to run the model, plus any adapter models, that you assign to the inference component.
         *
         * Omit this parameter if your request is meant to create an adapter inference component. An adapter inference component is loaded by a base inference component, and it uses the compute resources of the base inference component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentspecification.html#cfn-sagemaker-inferencecomponent-inferencecomponentspecification-computeresourcerequirements
         */
        readonly computeResourceRequirements?: CfnInferenceComponent.InferenceComponentComputeResourceRequirementsProperty | cdk.IResolvable;
        /**
         * Defines a container that provides the runtime environment for a model that you deploy with an inference component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentspecification.html#cfn-sagemaker-inferencecomponent-inferencecomponentspecification-container
         */
        readonly container?: CfnInferenceComponent.InferenceComponentContainerSpecificationProperty | cdk.IResolvable;
        /**
         * The name of an existing SageMaker AI model object in your account that you want to deploy with the inference component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentspecification.html#cfn-sagemaker-inferencecomponent-inferencecomponentspecification-modelname
         */
        readonly modelName?: string;
        /**
         * Settings that take effect while the model container starts up.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentspecification.html#cfn-sagemaker-inferencecomponent-inferencecomponentspecification-startupparameters
         */
        readonly startupParameters?: CfnInferenceComponent.InferenceComponentStartupParametersProperty | cdk.IResolvable;
    }
    /**
     * Defines a container that provides the runtime environment for a model that you deploy with an inference component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcontainerspecification.html
     */
    interface InferenceComponentContainerSpecificationProperty {
        /**
         * The Amazon S3 path where the model artifacts, which result from model training, are stored.
         *
         * This path must point to a single gzip compressed tar archive (.tar.gz suffix).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcontainerspecification.html#cfn-sagemaker-inferencecomponent-inferencecomponentcontainerspecification-artifacturl
         */
        readonly artifactUrl?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcontainerspecification.html#cfn-sagemaker-inferencecomponent-inferencecomponentcontainerspecification-deployedimage
         */
        readonly deployedImage?: CfnInferenceComponent.DeployedImageProperty | cdk.IResolvable;
        /**
         * The environment variables to set in the Docker container.
         *
         * Each key and value in the Environment string-to-string map can have length of up to 1024. We support up to 16 entries in the map.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcontainerspecification.html#cfn-sagemaker-inferencecomponent-inferencecomponentcontainerspecification-environment
         */
        readonly environment?: cdk.IResolvable | Record<string, string>;
        /**
         * The Amazon Elastic Container Registry (Amazon ECR) path where the Docker image for the model is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcontainerspecification.html#cfn-sagemaker-inferencecomponent-inferencecomponentcontainerspecification-image
         */
        readonly image?: string;
    }
    /**
     * Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this [ProductionVariant](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html) .
     *
     * If you used the `registry/repository[:tag]` form to specify the image path of the primary container when you created the model hosted in this `ProductionVariant` , the path resolves to a path of the form `registry/repository[@digest]` . A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see [Pulling an Image](https://docs.aws.amazon.com//AmazonECR/latest/userguide/docker-pull-ecr-image.html) in the *Amazon ECR User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-deployedimage.html
     */
    interface DeployedImageProperty {
        /**
         * The date and time when the image path for the model resolved to the `ResolvedImage`.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-deployedimage.html#cfn-sagemaker-inferencecomponent-deployedimage-resolutiontime
         */
        readonly resolutionTime?: string;
        /**
         * The specific digest path of the image hosted in this `ProductionVariant` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-deployedimage.html#cfn-sagemaker-inferencecomponent-deployedimage-resolvedimage
         */
        readonly resolvedImage?: string;
        /**
         * The image path you specified when you created the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-deployedimage.html#cfn-sagemaker-inferencecomponent-deployedimage-specifiedimage
         */
        readonly specifiedImage?: string;
    }
    /**
     * Settings that take effect while the model container starts up.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentstartupparameters.html
     */
    interface InferenceComponentStartupParametersProperty {
        /**
         * The timeout value, in seconds, for your inference container to pass health check by Amazon S3 Hosting.
         *
         * For more information about health check, see [How Your Container Should Respond to Health Check (Ping) Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentstartupparameters.html#cfn-sagemaker-inferencecomponent-inferencecomponentstartupparameters-containerstartuphealthchecktimeoutinseconds
         */
        readonly containerStartupHealthCheckTimeoutInSeconds?: number;
        /**
         * The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this inference component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentstartupparameters.html#cfn-sagemaker-inferencecomponent-inferencecomponentstartupparameters-modeldatadownloadtimeoutinseconds
         */
        readonly modelDataDownloadTimeoutInSeconds?: number;
    }
    /**
     * Defines the compute resources to allocate to run a model, plus any adapter models, that you assign to an inference component.
     *
     * These resources include CPU cores, accelerators, and memory.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements.html
     */
    interface InferenceComponentComputeResourceRequirementsProperty {
        /**
         * The maximum MB of memory to allocate to run a model that you assign to an inference component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements.html#cfn-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements-maxmemoryrequiredinmb
         */
        readonly maxMemoryRequiredInMb?: number;
        /**
         * The minimum MB of memory to allocate to run a model that you assign to an inference component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements.html#cfn-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements-minmemoryrequiredinmb
         */
        readonly minMemoryRequiredInMb?: number;
        /**
         * The number of accelerators to allocate to run a model that you assign to an inference component.
         *
         * Accelerators include GPUs and AWS Inferentia.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements.html#cfn-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements-numberofacceleratordevicesrequired
         */
        readonly numberOfAcceleratorDevicesRequired?: number;
        /**
         * The number of CPU cores to allocate to run a model that you assign to an inference component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements.html#cfn-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements-numberofcpucoresrequired
         */
        readonly numberOfCpuCoresRequired?: number;
    }
    /**
     * Runtime settings for a model that is deployed with an inference component.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentruntimeconfig.html
     */
    interface InferenceComponentRuntimeConfigProperty {
        /**
         * The number of runtime copies of the model container to deploy with the inference component.
         *
         * Each copy can serve inference requests.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentruntimeconfig.html#cfn-sagemaker-inferencecomponent-inferencecomponentruntimeconfig-copycount
         */
        readonly copyCount?: number;
        /**
         * The number of runtime copies of the model container that are currently deployed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentruntimeconfig.html#cfn-sagemaker-inferencecomponent-inferencecomponentruntimeconfig-currentcopycount
         */
        readonly currentCopyCount?: number;
        /**
         * The number of runtime copies of the model container that you requested to deploy with the inference component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferencecomponent-inferencecomponentruntimeconfig.html#cfn-sagemaker-inferencecomponent-inferencecomponentruntimeconfig-desiredcopycount
         */
        readonly desiredCopyCount?: number;
    }
}
/**
 * Properties for defining a `CfnInferenceComponent`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html
 */
export interface CfnInferenceComponentProps {
    /**
     * The Amazon Resource Name (ARN) of the endpoint that hosts the inference component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-endpointarn
     */
    readonly endpointArn?: string;
    /**
     * The name of the endpoint that hosts the inference component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-endpointname
     */
    readonly endpointName: string;
    /**
     * The name of the inference component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentname
     */
    readonly inferenceComponentName?: string;
    /**
     * The runtime config for the inference component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-runtimeconfig
     */
    readonly runtimeConfig?: CfnInferenceComponent.InferenceComponentRuntimeConfigProperty | cdk.IResolvable;
    /**
     * The specification for the inference component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-specification
     */
    readonly specification: CfnInferenceComponent.InferenceComponentSpecificationProperty | cdk.IResolvable;
    /**
     * An array of tags to apply to the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the production variant that hosts the inference component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-variantname
     */
    readonly variantName?: string;
}
/**
 * Creates an MLflow Tracking Server using a general purpose Amazon S3 bucket as the artifact store.
 *
 * For more information, see [Create an MLflow Tracking Server](https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow-create-tracking-server.html) .
 *
 * @cloudformationResource AWS::SageMaker::MlflowTrackingServer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html
 */
export declare class CfnMlflowTrackingServer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMlflowTrackingServer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMlflowTrackingServer;
    /**
     * The Amazon Resource Name (ARN) of the MLFlow Tracking Server.
     *
     * @cloudformationAttribute TrackingServerArn
     */
    readonly attrTrackingServerArn: string;
    /**
     * The Amazon S3 URI for MLFlow Tracking Server artifacts.
     */
    artifactStoreUri: string;
    /**
     * A flag to enable Automatic SageMaker Model Registration.
     */
    automaticModelRegistration?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The MLFlow Version used on the MLFlow Tracking Server.
     */
    mlflowVersion?: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.
     */
    roleArn: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name of the MLFlow Tracking Server.
     */
    trackingServerName: string;
    /**
     * The size of the MLFlow Tracking Server.
     */
    trackingServerSize?: string;
    /**
     * The start of the time window for maintenance of the MLFlow Tracking Server in UTC time.
     */
    weeklyMaintenanceWindowStart?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMlflowTrackingServerProps);
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
 * Properties for defining a `CfnMlflowTrackingServer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html
 */
export interface CfnMlflowTrackingServerProps {
    /**
     * The Amazon S3 URI for MLFlow Tracking Server artifacts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-artifactstoreuri
     */
    readonly artifactStoreUri: string;
    /**
     * A flag to enable Automatic SageMaker Model Registration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-automaticmodelregistration
     */
    readonly automaticModelRegistration?: boolean | cdk.IResolvable;
    /**
     * The MLFlow Version used on the MLFlow Tracking Server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-mlflowversion
     */
    readonly mlflowVersion?: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-rolearn
     */
    readonly roleArn: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the MLFlow Tracking Server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-trackingservername
     */
    readonly trackingServerName: string;
    /**
     * The size of the MLFlow Tracking Server.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-trackingserversize
     */
    readonly trackingServerSize?: string;
    /**
     * The start of the time window for maintenance of the MLFlow Tracking Server in UTC time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html#cfn-sagemaker-mlflowtrackingserver-weeklymaintenancewindowstart
     */
    readonly weeklyMaintenanceWindowStart?: string;
}
/**
 * Creates an Amazon SageMaker Partner AI App.
 *
 * @cloudformationResource AWS::SageMaker::PartnerApp
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html
 */
export declare class CfnPartnerApp extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPartnerApp from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPartnerApp;
    /**
     * The ARN of the SageMaker Partner AI App.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The AppServerUrl based on app and account-info.
     *
     * @cloudformationAttribute BaseUrl
     */
    readonly attrBaseUrl: string;
    /**
     * A collection of configuration settings for the PartnerApp.
     */
    applicationConfig?: cdk.IResolvable | CfnPartnerApp.PartnerAppConfigProperty;
    /**
     * The Auth type of PartnerApp.
     */
    authType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The client token for the PartnerApp.
     *
     * @deprecated this property has been deprecated
     */
    clientToken?: string;
    /**
     * Enables IAM Session based Identity for PartnerApp.
     */
    enableIamSessionBasedIdentity?: boolean | cdk.IResolvable;
    /**
     * The execution role for the user.
     */
    executionRoleArn: string;
    /**
     * A collection of settings that specify the maintenance schedule for the PartnerApp.
     */
    maintenanceConfig?: cdk.IResolvable | CfnPartnerApp.PartnerAppMaintenanceConfigProperty;
    /**
     * The name of the SageMaker Partner AI App.
     */
    name: string;
    /**
     * A list of tags to apply to the PartnerApp.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The tier of the PartnerApp.
     */
    tier: string;
    /**
     * The type of SageMaker Partner AI App to create.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPartnerAppProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPartnerApp {
    /**
     * Configuration settings for the SageMaker Partner AI App.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-partnerapp-partnerappconfig.html
     */
    interface PartnerAppConfigProperty {
        /**
         * The list of users that are given admin access to the SageMaker Partner AI App.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-partnerapp-partnerappconfig.html#cfn-sagemaker-partnerapp-partnerappconfig-adminusers
         */
        readonly adminUsers?: Array<string>;
        /**
         * This is a map of required inputs for a SageMaker Partner AI App.
         *
         * Based on the application type, the map is populated with a key and value pair that is specific to the user and application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-partnerapp-partnerappconfig.html#cfn-sagemaker-partnerapp-partnerappconfig-arguments
         */
        readonly arguments?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * Maintenance configuration settings for the SageMaker Partner AI App.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-partnerapp-partnerappmaintenanceconfig.html
     */
    interface PartnerAppMaintenanceConfigProperty {
        /**
         * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled.
         *
         * This value must take the following format: `3-letter-day:24-h-hour:minute` . For example: `TUE:03:30` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-partnerapp-partnerappmaintenanceconfig.html#cfn-sagemaker-partnerapp-partnerappmaintenanceconfig-maintenancewindowstart
         */
        readonly maintenanceWindowStart: string;
    }
}
/**
 * Properties for defining a `CfnPartnerApp`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html
 */
export interface CfnPartnerAppProps {
    /**
     * A collection of configuration settings for the PartnerApp.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-applicationconfig
     */
    readonly applicationConfig?: cdk.IResolvable | CfnPartnerApp.PartnerAppConfigProperty;
    /**
     * The Auth type of PartnerApp.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-authtype
     */
    readonly authType: string;
    /**
     * The client token for the PartnerApp.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-clienttoken
     */
    readonly clientToken?: string;
    /**
     * Enables IAM Session based Identity for PartnerApp.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-enableiamsessionbasedidentity
     */
    readonly enableIamSessionBasedIdentity?: boolean | cdk.IResolvable;
    /**
     * The execution role for the user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-executionrolearn
     */
    readonly executionRoleArn: string;
    /**
     * A collection of settings that specify the maintenance schedule for the PartnerApp.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-maintenanceconfig
     */
    readonly maintenanceConfig?: cdk.IResolvable | CfnPartnerApp.PartnerAppMaintenanceConfigProperty;
    /**
     * The name of the SageMaker Partner AI App.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-name
     */
    readonly name: string;
    /**
     * A list of tags to apply to the PartnerApp.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The tier of the PartnerApp.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-tier
     */
    readonly tier: string;
    /**
     * The type of SageMaker Partner AI App to create.
     *
     * Must be one of the following: `lakera-guard` , `comet` , `deepchecks-llm-evaluation` , or `fiddler` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#cfn-sagemaker-partnerapp-type
     */
    readonly type: string;
}
/**
 * Creates a new Amazon SageMaker AI Studio Lifecycle Configuration.
 *
 * @cloudformationResource AWS::SageMaker::StudioLifecycleConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html
 */
export declare class CfnStudioLifecycleConfig extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStudioLifecycleConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStudioLifecycleConfig;
    /**
     * The Amazon Resource Name (ARN) of the Lifecycle Configuration.
     *
     * @cloudformationAttribute StudioLifecycleConfigArn
     */
    readonly attrStudioLifecycleConfigArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The App type to which the Lifecycle Configuration is attached.
     */
    studioLifecycleConfigAppType: string;
    /**
     * The content of your Amazon SageMaker Studio Lifecycle Configuration script.
     */
    studioLifecycleConfigContent: string;
    /**
     * The name of the Amazon SageMaker AI Studio Lifecycle Configuration.
     */
    studioLifecycleConfigName: string;
    /**
     * Tags to be associated with the Lifecycle Configuration.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStudioLifecycleConfigProps);
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
 * Properties for defining a `CfnStudioLifecycleConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html
 */
export interface CfnStudioLifecycleConfigProps {
    /**
     * The App type to which the Lifecycle Configuration is attached.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html#cfn-sagemaker-studiolifecycleconfig-studiolifecycleconfigapptype
     */
    readonly studioLifecycleConfigAppType: string;
    /**
     * The content of your Amazon SageMaker Studio Lifecycle Configuration script.
     *
     * This content must be base64 encoded.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html#cfn-sagemaker-studiolifecycleconfig-studiolifecycleconfigcontent
     */
    readonly studioLifecycleConfigContent: string;
    /**
     * The name of the Amazon SageMaker AI Studio Lifecycle Configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html#cfn-sagemaker-studiolifecycleconfig-studiolifecycleconfigname
     */
    readonly studioLifecycleConfigName: string;
    /**
     * Tags to be associated with the Lifecycle Configuration.
     *
     * Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html#cfn-sagemaker-studiolifecycleconfig-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
