import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a new application with given parameters. Requires an existing runtime environment and application definition file.
 *
 * For information about application definitions, see the [AWS Mainframe Modernization User Guide](https://docs.aws.amazon.com/m2/latest/userguide/applications-m2-definition.html) .
 *
 * @cloudformationResource AWS::M2::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * The Amazon Resource Name (ARN) of the application.
     *
     * @cloudformationAttribute ApplicationArn
     */
    readonly attrApplicationArn: string;
    /**
     * The identifier of the application.
     *
     * @cloudformationAttribute ApplicationId
     */
    readonly attrApplicationId: string;
    /**
     * The application definition for a particular application. You can specify either inline JSON or an Amazon S3 bucket location.
     */
    definition?: CfnApplication.DefinitionProperty | cdk.IResolvable;
    /**
     * The description of the application.
     */
    description?: string;
    /**
     * The type of the target platform for this application.
     */
    engineType: string;
    /**
     * The identifier of a customer managed key.
     */
    kmsKeyId?: string;
    /**
     * The name of the application.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the role associated with the application.
     */
    roleArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Record<string, string>;
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
export declare namespace CfnApplication {
    /**
     * The application definition for a particular application.
     *
     * You can specify either inline JSON or an Amazon S3 bucket location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-application-definition.html
     */
    interface DefinitionProperty {
        /**
         * The content of the application definition.
         *
         * This is a JSON object that contains the resource configuration/definitions that identify an application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-application-definition.html#cfn-m2-application-definition-content
         */
        readonly content?: string;
        /**
         * The S3 bucket that contains the application definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-application-definition.html#cfn-m2-application-definition-s3location
         */
        readonly s3Location?: string;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html
 */
export interface CfnApplicationProps {
    /**
     * The application definition for a particular application. You can specify either inline JSON or an Amazon S3 bucket location.
     *
     * For information about application definitions, see the [AWS Mainframe Modernization User Guide](https://docs.aws.amazon.com/m2/latest/userguide/applications-m2-definition.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html#cfn-m2-application-definition
     */
    readonly definition?: CfnApplication.DefinitionProperty | cdk.IResolvable;
    /**
     * The description of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html#cfn-m2-application-description
     */
    readonly description?: string;
    /**
     * The type of the target platform for this application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html#cfn-m2-application-enginetype
     */
    readonly engineType: string;
    /**
     * The identifier of a customer managed key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html#cfn-m2-application-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html#cfn-m2-application-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the role associated with the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html#cfn-m2-application-rolearn
     */
    readonly roleArn?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html#cfn-m2-application-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Specifies a runtime environment for a given runtime engine.
 *
 * @cloudformationResource AWS::M2::Environment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html
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
     * The Amazon Resource Name (ARN) of the runtime environment.
     *
     * @cloudformationAttribute EnvironmentArn
     */
    readonly attrEnvironmentArn: string;
    /**
     * The unique identifier of the runtime environment.
     *
     * @cloudformationAttribute EnvironmentId
     */
    readonly attrEnvironmentId: string;
    /**
     * The description of the runtime environment.
     */
    description?: string;
    /**
     * The target platform for the runtime environment.
     */
    engineType: string;
    /**
     * The version of the runtime engine.
     */
    engineVersion?: string;
    /**
     * Defines the details of a high availability configuration.
     */
    highAvailabilityConfig?: CfnEnvironment.HighAvailabilityConfigProperty | cdk.IResolvable;
    /**
     * The instance type of the runtime environment.
     */
    instanceType: string;
    /**
     * The identifier of a customer managed key.
     */
    kmsKeyId?: string;
    /**
     * The name of the runtime environment.
     */
    name: string;
    /**
     * The network type supported by the runtime environment.
     */
    networkType?: string;
    /**
     * Configures the maintenance window that you want for the runtime environment.
     */
    preferredMaintenanceWindow?: string;
    /**
     * Specifies whether the runtime environment is publicly accessible.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The list of security groups for the VPC associated with this runtime environment.
     */
    securityGroupIds?: Array<string>;
    /**
     * Defines the storage configuration for a runtime environment.
     */
    storageConfigurations?: Array<cdk.IResolvable | CfnEnvironment.StorageConfigurationProperty> | cdk.IResolvable;
    /**
     * The list of subnets associated with the VPC for this runtime environment.
     */
    subnetIds?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Record<string, string>;
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
     * Defines the details of a high availability configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-highavailabilityconfig.html
     */
    interface HighAvailabilityConfigProperty {
        /**
         * The number of instances in a high availability configuration.
         *
         * The minimum possible value is 1 and the maximum is 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-highavailabilityconfig.html#cfn-m2-environment-highavailabilityconfig-desiredcapacity
         */
        readonly desiredCapacity: number;
    }
    /**
     * Defines the storage configuration for a runtime environment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-storageconfiguration.html
     */
    interface StorageConfigurationProperty {
        /**
         * Defines the storage configuration for an Amazon EFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-storageconfiguration.html#cfn-m2-environment-storageconfiguration-efs
         */
        readonly efs?: CfnEnvironment.EfsStorageConfigurationProperty | cdk.IResolvable;
        /**
         * Defines the storage configuration for an Amazon FSx file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-storageconfiguration.html#cfn-m2-environment-storageconfiguration-fsx
         */
        readonly fsx?: CfnEnvironment.FsxStorageConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Defines the storage configuration for an Amazon EFS file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-efsstorageconfiguration.html
     */
    interface EfsStorageConfigurationProperty {
        /**
         * The file system identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-efsstorageconfiguration.html#cfn-m2-environment-efsstorageconfiguration-filesystemid
         */
        readonly fileSystemId: string;
        /**
         * The mount point for the file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-efsstorageconfiguration.html#cfn-m2-environment-efsstorageconfiguration-mountpoint
         */
        readonly mountPoint: string;
    }
    /**
     * Defines the storage configuration for an Amazon FSx file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-fsxstorageconfiguration.html
     */
    interface FsxStorageConfigurationProperty {
        /**
         * The file system identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-fsxstorageconfiguration.html#cfn-m2-environment-fsxstorageconfiguration-filesystemid
         */
        readonly fileSystemId: string;
        /**
         * The mount point for the file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-fsxstorageconfiguration.html#cfn-m2-environment-fsxstorageconfiguration-mountpoint
         */
        readonly mountPoint: string;
    }
}
/**
 * Properties for defining a `CfnEnvironment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html
 */
export interface CfnEnvironmentProps {
    /**
     * The description of the runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-description
     */
    readonly description?: string;
    /**
     * The target platform for the runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-enginetype
     */
    readonly engineType: string;
    /**
     * The version of the runtime engine.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-engineversion
     */
    readonly engineVersion?: string;
    /**
     * Defines the details of a high availability configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-highavailabilityconfig
     */
    readonly highAvailabilityConfig?: CfnEnvironment.HighAvailabilityConfigProperty | cdk.IResolvable;
    /**
     * The instance type of the runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-instancetype
     */
    readonly instanceType: string;
    /**
     * The identifier of a customer managed key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The name of the runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-name
     */
    readonly name: string;
    /**
     * The network type supported by the runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-networktype
     */
    readonly networkType?: string;
    /**
     * Configures the maintenance window that you want for the runtime environment.
     *
     * The maintenance window must have the format `ddd:hh24:mi-ddd:hh24:mi` and must be less than 24 hours. The following two examples are valid maintenance windows: `sun:23:45-mon:00:15` or `sat:01:00-sat:03:00` .
     *
     * If you do not provide a value, a random system-generated value will be assigned.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Specifies whether the runtime environment is publicly accessible.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The list of security groups for the VPC associated with this runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * Defines the storage configuration for a runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-storageconfigurations
     */
    readonly storageConfigurations?: Array<cdk.IResolvable | CfnEnvironment.StorageConfigurationProperty> | cdk.IResolvable;
    /**
     * The list of subnets associated with the VPC for this runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-subnetids
     */
    readonly subnetIds?: Array<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates and starts a deployment to deploy an application into a runtime environment.
 *
 * @cloudformationResource AWS::M2::Deployment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html
 */
export declare class CfnDeployment extends cdk.CfnResource implements cdk.IInspectable {
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
     * The unique identifier of the deployment.
     *
     * @cloudformationAttribute DeploymentId
     */
    readonly attrDeploymentId: string;
    /**
     * The current status of the deployment.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The unique identifier of the application.
     */
    applicationId: string;
    /**
     * The version of the application.
     */
    applicationVersion: number;
    /**
     * The unique identifier of the runtime environment.
     */
    environmentId: string;
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
/**
 * Properties for defining a `CfnDeployment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html
 */
export interface CfnDeploymentProps {
    /**
     * The unique identifier of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html#cfn-m2-deployment-applicationid
     */
    readonly applicationId: string;
    /**
     * The version of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html#cfn-m2-deployment-applicationversion
     */
    readonly applicationVersion: number;
    /**
     * The unique identifier of the runtime environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html#cfn-m2-deployment-environmentid
     */
    readonly environmentId: string;
}
