import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html.
 *
 * @cloudformationResource AWS::OpsWorks::App
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html
 */
export declare class CfnApp extends cdk.CfnResource implements cdk.IInspectable {
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
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A `Source` object that specifies the app repository.
     */
    appSource?: cdk.IResolvable | CfnApp.SourceProperty;
    /**
     * One or more user-defined key/value pairs to be added to the stack attributes.
     */
    attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * The app's data source.
     */
    dataSources?: Array<CfnApp.DataSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A description of the app.
     */
    description?: string;
    /**
     * The app virtual host settings, with multiple domains separated by commas.
     */
    domains?: Array<string>;
    /**
     * Whether to enable SSL for the app.
     */
    enableSsl?: boolean | cdk.IResolvable;
    /**
     * An array of `EnvironmentVariable` objects that specify environment variables to be associated with the app.
     */
    environment?: Array<CfnApp.EnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The app name.
     */
    name: string;
    /**
     * The app's short name.
     */
    shortname?: string;
    /**
     * An `SslConfiguration` object with the SSL configuration.
     */
    sslConfiguration?: cdk.IResolvable | CfnApp.SslConfigurationProperty;
    /**
     * The stack ID.
     */
    stackId: string;
    /**
     * The app type.
     */
    type: string;
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
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-source.html
     */
    interface SourceProperty {
        /**
         * When included in a request, the parameter depends on the repository type.
         *
         * - For Amazon S3 bundles, set `Password` to the appropriate IAM secret access key.
         * - For HTTP bundles and Subversion repositories, set `Password` to the password.
         *
         * For more information on how to safely handle IAM credentials, see [](https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html) .
         *
         * In responses, AWS OpsWorks Stacks returns `*****FILTERED*****` instead of the actual value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-source.html#cfn-opsworks-app-source-password
         */
        readonly password?: string;
        /**
         * The application's version.
         *
         * AWS OpsWorks Stacks enables you to easily deploy new versions of an application. One of the simplest approaches is to have branches or revisions in your repository that represent different versions that can potentially be deployed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-source.html#cfn-opsworks-app-source-revision
         */
        readonly revision?: string;
        /**
         * In requests, the repository's SSH key.
         *
         * In responses, AWS OpsWorks Stacks returns `*****FILTERED*****` instead of the actual value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-source.html#cfn-opsworks-app-source-sshkey
         */
        readonly sshKey?: string;
        /**
         * The repository type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-source.html#cfn-opsworks-app-source-type
         */
        readonly type?: string;
        /**
         * The source URL.
         *
         * The following is an example of an Amazon S3 source URL: `https://s3.amazonaws.com/opsworks-demo-bucket/opsworks_cookbook_demo.tar.gz` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-source.html#cfn-opsworks-app-source-url
         */
        readonly url?: string;
        /**
         * This parameter depends on the repository type.
         *
         * - For Amazon S3 bundles, set `Username` to the appropriate IAM access key ID.
         * - For HTTP bundles, Git repositories, and Subversion repositories, set `Username` to the user name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-source.html#cfn-opsworks-app-source-username
         */
        readonly username?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-datasource.html
     */
    interface DataSourceProperty {
        /**
         * The data source's ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-datasource.html#cfn-opsworks-app-datasource-arn
         */
        readonly arn?: string;
        /**
         * The database name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-datasource.html#cfn-opsworks-app-datasource-databasename
         */
        readonly databaseName?: string;
        /**
         * The data source's type, `AutoSelectOpsworksMysqlInstance` , `OpsworksMysqlInstance` , `RdsDbInstance` , or `None` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-datasource.html#cfn-opsworks-app-datasource-type
         */
        readonly type?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-environmentvariable.html
     */
    interface EnvironmentVariableProperty {
        /**
         * (Required) The environment variable's name, which can consist of up to 64 characters and must be specified.
         *
         * The name can contain upper- and lowercase letters, numbers, and underscores (_), but it must start with a letter or underscore.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-environmentvariable.html#cfn-opsworks-app-environmentvariable-key
         */
        readonly key: string;
        /**
         * (Optional) Whether the variable's value is returned by the `DescribeApps` action.
         *
         * To hide an environment variable's value, set `Secure` to `true` . `DescribeApps` returns `*****FILTERED*****` instead of the actual value. The default value for `Secure` is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-environmentvariable.html#cfn-opsworks-app-environmentvariable-secure
         */
        readonly secure?: boolean | cdk.IResolvable;
        /**
         * (Optional) The environment variable's value, which can be left empty.
         *
         * If you specify a value, it can contain up to 256 characters, which must all be printable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-environmentvariable.html#cfn-opsworks-app-environmentvariable-value
         */
        readonly value: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-sslconfiguration.html
     */
    interface SslConfigurationProperty {
        /**
         * The contents of the certificate's domain.crt file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-sslconfiguration.html#cfn-opsworks-app-sslconfiguration-certificate
         */
        readonly certificate?: string;
        /**
         * Optional.
         *
         * Can be used to specify an intermediate certificate authority key or client authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-sslconfiguration.html#cfn-opsworks-app-sslconfiguration-chain
         */
        readonly chain?: string;
        /**
         * The private key;
         *
         * the contents of the certificate's domain.kex file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-sslconfiguration.html#cfn-opsworks-app-sslconfiguration-privatekey
         */
        readonly privateKey?: string;
    }
}
/**
 * Properties for defining a `CfnApp`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html
 */
export interface CfnAppProps {
    /**
     * A `Source` object that specifies the app repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-appsource
     */
    readonly appSource?: cdk.IResolvable | CfnApp.SourceProperty;
    /**
     * One or more user-defined key/value pairs to be added to the stack attributes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-attributes
     */
    readonly attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * The app's data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-datasources
     */
    readonly dataSources?: Array<CfnApp.DataSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A description of the app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-description
     */
    readonly description?: string;
    /**
     * The app virtual host settings, with multiple domains separated by commas.
     *
     * For example: `'www.example.com, example.com'`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-domains
     */
    readonly domains?: Array<string>;
    /**
     * Whether to enable SSL for the app.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-enablessl
     */
    readonly enableSsl?: boolean | cdk.IResolvable;
    /**
     * An array of `EnvironmentVariable` objects that specify environment variables to be associated with the app.
     *
     * After you deploy the app, these variables are defined on the associated app server instance. For more information, see [Environment Variables](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment) .
     *
     * There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables' names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, "Environment: is too large (maximum is 20KB)."
     *
     * > If you have specified one or more environment variables, you cannot modify the stack's Chef version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-environment
     */
    readonly environment?: Array<CfnApp.EnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The app name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-name
     */
    readonly name: string;
    /**
     * The app's short name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-shortname
     */
    readonly shortname?: string;
    /**
     * An `SslConfiguration` object with the SSL configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-sslconfiguration
     */
    readonly sslConfiguration?: cdk.IResolvable | CfnApp.SslConfigurationProperty;
    /**
     * The stack ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-stackid
     */
    readonly stackId: string;
    /**
     * The app type.
     *
     * Each supported type is associated with a particular layer. For example, PHP applications are associated with a PHP layer. AWS OpsWorks Stacks deploys an application to those instances that are members of the corresponding layer. If your app isn't one of the standard types, or you prefer to implement your own Deploy recipes, specify `other` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html#cfn-opsworks-app-type
     */
    readonly type: string;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html.
 *
 * @cloudformationResource AWS::OpsWorks::ElasticLoadBalancerAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elasticloadbalancerattachment.html
 */
export declare class CfnElasticLoadBalancerAttachment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnElasticLoadBalancerAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnElasticLoadBalancerAttachment;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Elastic Load Balancing instance name.
     */
    elasticLoadBalancerName: string;
    /**
     * The AWS OpsWorks layer ID to which the Elastic Load Balancing load balancer is attached.
     */
    layerId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnElasticLoadBalancerAttachmentProps);
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
 * Properties for defining a `CfnElasticLoadBalancerAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elasticloadbalancerattachment.html
 */
export interface CfnElasticLoadBalancerAttachmentProps {
    /**
     * The Elastic Load Balancing instance name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elasticloadbalancerattachment.html#cfn-opsworks-elasticloadbalancerattachment-elasticloadbalancername
     */
    readonly elasticLoadBalancerName: string;
    /**
     * The AWS OpsWorks layer ID to which the Elastic Load Balancing load balancer is attached.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elasticloadbalancerattachment.html#cfn-opsworks-elasticloadbalancerattachment-layerid
     */
    readonly layerId: string;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html.
 *
 * @cloudformationResource AWS::OpsWorks::Instance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html
 */
export declare class CfnInstance extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInstance;
    /**
     * The Availability Zone of the AWS OpsWorks instance, such as `us-east-2a` .
     *
     * @cloudformationAttribute AvailabilityZone
     */
    readonly attrAvailabilityZone: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The private DNS name of the AWS OpsWorks instance.
     *
     * @cloudformationAttribute PrivateDnsName
     */
    readonly attrPrivateDnsName: string;
    /**
     * The private IP address of the AWS OpsWorks instance, such as `192.0.2.0` .
     *
     * @cloudformationAttribute PrivateIp
     */
    readonly attrPrivateIp: string;
    /**
     * The public DNS name of the AWS OpsWorks instance.
     *
     * @cloudformationAttribute PublicDnsName
     */
    readonly attrPublicDnsName: string;
    /**
     * The public IP address of the AWS OpsWorks instance, such as `192.0.2.0` .
     *
     * > Use this attribute only when the AWS OpsWorks instance is in an AWS OpsWorks layer that auto-assigns public IP addresses.
     *
     * @cloudformationAttribute PublicIp
     */
    readonly attrPublicIp: string;
    /**
     * The default AWS OpsWorks Stacks agent version. You have the following options:.
     */
    agentVersion?: string;
    /**
     * A custom AMI ID to be used to create the instance.
     */
    amiId?: string;
    /**
     * The instance architecture.
     */
    architecture?: string;
    /**
     * For load-based or time-based instances, the type.
     */
    autoScalingType?: string;
    /**
     * The Availability Zone of the AWS OpsWorks instance, such as `us-east-2a` .
     */
    availabilityZone?: string;
    /**
     * An array of `BlockDeviceMapping` objects that specify the instance's block devices.
     */
    blockDeviceMappings?: Array<CfnInstance.BlockDeviceMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Whether to create an Amazon EBS-optimized instance.
     */
    ebsOptimized?: boolean | cdk.IResolvable;
    /**
     * A list of Elastic IP addresses to associate with the instance.
     */
    elasticIps?: Array<string>;
    /**
     * The instance host name. The following are character limits for instance host names.
     */
    hostname?: string;
    /**
     * Whether to install operating system and package updates when the instance boots.
     */
    installUpdatesOnBoot?: boolean | cdk.IResolvable;
    /**
     * The instance type, such as `t2.micro` . For a list of supported instance types, open the stack in the console, choose *Instances* , and choose *+ Instance* . The *Size* list contains the currently supported types. For more information, see [Instance Families and Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) . The parameter values that you use to specify the various types are in the *API Name* column of the *Available Instance Types* table.
     */
    instanceType: string;
    /**
     * An array that contains the instance's layer IDs.
     */
    layerIds: Array<string>;
    /**
     * The instance's operating system, which must be set to one of the following.
     */
    os?: string;
    /**
     * The instance root device type.
     */
    rootDeviceType?: string;
    /**
     * The instance's Amazon EC2 key-pair name.
     */
    sshKeyName?: string;
    /**
     * The stack ID.
     */
    stackId: string;
    /**
     * The ID of the instance's subnet.
     */
    subnetId?: string;
    /**
     * The instance's tenancy option.
     */
    tenancy?: string;
    /**
     * The time-based scaling configuration for the instance.
     */
    timeBasedAutoScaling?: cdk.IResolvable | CfnInstance.TimeBasedAutoScalingProperty;
    /**
     * The instance's virtualization type, `paravirtual` or `hvm` .
     */
    virtualizationType?: string;
    /**
     * A list of AWS OpsWorks volume IDs to associate with the instance.
     */
    volumes?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInstanceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInstance {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-blockdevicemapping.html
     */
    interface BlockDeviceMappingProperty {
        /**
         * The device name that is exposed to the instance, such as `/dev/sdh` .
         *
         * For the root device, you can use the explicit device name or you can set this parameter to `ROOT_DEVICE` and AWS OpsWorks Stacks will provide the correct device name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-blockdevicemapping.html#cfn-opsworks-instance-blockdevicemapping-devicename
         */
        readonly deviceName?: string;
        /**
         * An `EBSBlockDevice` that defines how to configure an Amazon EBS volume when the instance is launched.
         *
         * You can specify either the `VirtualName` or `Ebs` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-blockdevicemapping.html#cfn-opsworks-instance-blockdevicemapping-ebs
         */
        readonly ebs?: CfnInstance.EbsBlockDeviceProperty | cdk.IResolvable;
        /**
         * Suppresses the specified device included in the AMI's block device mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-blockdevicemapping.html#cfn-opsworks-instance-blockdevicemapping-nodevice
         */
        readonly noDevice?: string;
        /**
         * The virtual device name.
         *
         * For more information, see [BlockDeviceMapping](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html) . You can specify either the `VirtualName` or `Ebs` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-blockdevicemapping.html#cfn-opsworks-instance-blockdevicemapping-virtualname
         */
        readonly virtualName?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-ebsblockdevice.html
     */
    interface EbsBlockDeviceProperty {
        /**
         * Whether the volume is deleted on instance termination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-ebsblockdevice.html#cfn-opsworks-instance-ebsblockdevice-deleteontermination
         */
        readonly deleteOnTermination?: boolean | cdk.IResolvable;
        /**
         * The number of I/O operations per second (IOPS) that the volume supports.
         *
         * For more information, see [EbsBlockDevice](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-ebsblockdevice.html#cfn-opsworks-instance-ebsblockdevice-iops
         */
        readonly iops?: number;
        /**
         * The snapshot ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-ebsblockdevice.html#cfn-opsworks-instance-ebsblockdevice-snapshotid
         */
        readonly snapshotId?: string;
        /**
         * The volume size, in GiB.
         *
         * For more information, see [EbsBlockDevice](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-ebsblockdevice.html#cfn-opsworks-instance-ebsblockdevice-volumesize
         */
        readonly volumeSize?: number;
        /**
         * The volume type.
         *
         * `gp2` for General Purpose (SSD) volumes, `io1` for Provisioned IOPS (SSD) volumes, `st1` for Throughput Optimized hard disk drives (HDD), `sc1` for Cold HDD,and `standard` for Magnetic volumes.
         *
         * If you specify the `io1` volume type, you must also specify a value for the `Iops` attribute. The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1. AWS uses the default volume size (in GiB) specified in the AMI attributes to set IOPS to 50 x (volume size).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-ebsblockdevice.html#cfn-opsworks-instance-ebsblockdevice-volumetype
         */
        readonly volumeType?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html
     */
    interface TimeBasedAutoScalingProperty {
        /**
         * The schedule for Friday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html#cfn-opsworks-instance-timebasedautoscaling-friday
         */
        readonly friday?: cdk.IResolvable | Record<string, string>;
        /**
         * The schedule for Monday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html#cfn-opsworks-instance-timebasedautoscaling-monday
         */
        readonly monday?: cdk.IResolvable | Record<string, string>;
        /**
         * The schedule for Saturday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html#cfn-opsworks-instance-timebasedautoscaling-saturday
         */
        readonly saturday?: cdk.IResolvable | Record<string, string>;
        /**
         * The schedule for Sunday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html#cfn-opsworks-instance-timebasedautoscaling-sunday
         */
        readonly sunday?: cdk.IResolvable | Record<string, string>;
        /**
         * The schedule for Thursday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html#cfn-opsworks-instance-timebasedautoscaling-thursday
         */
        readonly thursday?: cdk.IResolvable | Record<string, string>;
        /**
         * The schedule for Tuesday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html#cfn-opsworks-instance-timebasedautoscaling-tuesday
         */
        readonly tuesday?: cdk.IResolvable | Record<string, string>;
        /**
         * The schedule for Wednesday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html#cfn-opsworks-instance-timebasedautoscaling-wednesday
         */
        readonly wednesday?: cdk.IResolvable | Record<string, string>;
    }
}
/**
 * Properties for defining a `CfnInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html
 */
export interface CfnInstanceProps {
    /**
     * The default AWS OpsWorks Stacks agent version. You have the following options:.
     *
     * - `INHERIT` - Use the stack's default agent version setting.
     * - *version_number* - Use the specified agent version. This value overrides the stack's default setting. To update the agent version, edit the instance configuration and specify a new version. AWS OpsWorks Stacks installs that version on the instance.
     *
     * The default setting is `INHERIT` . To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call `DescribeAgentVersions` . AgentVersion cannot be set to Chef 12.2.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-agentversion
     */
    readonly agentVersion?: string;
    /**
     * A custom AMI ID to be used to create the instance.
     *
     * The AMI should be based on one of the supported operating systems. For more information, see [Using Custom AMIs](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html) .
     *
     * > If you specify a custom AMI, you must set `Os` to `Custom` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-amiid
     */
    readonly amiId?: string;
    /**
     * The instance architecture.
     *
     * The default option is `x86_64` . Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see [Instance Families and Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-architecture
     */
    readonly architecture?: string;
    /**
     * For load-based or time-based instances, the type.
     *
     * Windows stacks can use only time-based instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-autoscalingtype
     */
    readonly autoScalingType?: string;
    /**
     * The Availability Zone of the AWS OpsWorks instance, such as `us-east-2a` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * An array of `BlockDeviceMapping` objects that specify the instance's block devices.
     *
     * For more information, see [Block Device Mapping](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html) . Note that block device mappings are not supported for custom AMIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-blockdevicemappings
     */
    readonly blockDeviceMappings?: Array<CfnInstance.BlockDeviceMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Whether to create an Amazon EBS-optimized instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-ebsoptimized
     */
    readonly ebsOptimized?: boolean | cdk.IResolvable;
    /**
     * A list of Elastic IP addresses to associate with the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-elasticips
     */
    readonly elasticIps?: Array<string>;
    /**
     * The instance host name. The following are character limits for instance host names.
     *
     * - Linux-based instances: 63 characters
     * - Windows-based instances: 15 characters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-hostname
     */
    readonly hostname?: string;
    /**
     * Whether to install operating system and package updates when the instance boots.
     *
     * The default value is `true` . To control when updates are installed, set this value to `false` . You must then update your instances manually by using `CreateDeployment` to run the `update_dependencies` stack command or by manually running `yum` (Amazon Linux) or `apt-get` (Ubuntu) on the instances.
     *
     * > We strongly recommend using the default value of `true` to ensure that your instances have the latest security updates.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-installupdatesonboot
     */
    readonly installUpdatesOnBoot?: boolean | cdk.IResolvable;
    /**
     * The instance type, such as `t2.micro` . For a list of supported instance types, open the stack in the console, choose *Instances* , and choose *+ Instance* . The *Size* list contains the currently supported types. For more information, see [Instance Families and Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) . The parameter values that you use to specify the various types are in the *API Name* column of the *Available Instance Types* table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-instancetype
     */
    readonly instanceType: string;
    /**
     * An array that contains the instance's layer IDs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-layerids
     */
    readonly layerIds: Array<string>;
    /**
     * The instance's operating system, which must be set to one of the following.
     *
     * - A supported Linux operating system: An Amazon Linux version, such as `Amazon Linux 2` , `Amazon Linux 2018.03` , `Amazon Linux 2017.09` , `Amazon Linux 2017.03` , `Amazon Linux 2016.09` , `Amazon Linux 2016.03` , `Amazon Linux 2015.09` , or `Amazon Linux 2015.03` .
     * - A supported Ubuntu operating system, such as `Ubuntu 18.04 LTS` , `Ubuntu 16.04 LTS` , `Ubuntu 14.04 LTS` , or `Ubuntu 12.04 LTS` .
     * - `CentOS Linux 7`
     * - `Red Hat Enterprise Linux 7`
     * - A supported Windows operating system, such as `Microsoft Windows Server 2012 R2 Base` , `Microsoft Windows Server 2012 R2 with SQL Server Express` , `Microsoft Windows Server 2012 R2 with SQL Server Standard` , or `Microsoft Windows Server 2012 R2 with SQL Server Web` .
     * - A custom AMI: `Custom` .
     *
     * Not all operating systems are supported with all versions of Chef. For more information about the supported operating systems, see [AWS OpsWorks Stacks Operating Systems](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html) .
     *
     * The default option is the current Amazon Linux version. If you set this parameter to `Custom` , you must use the `CreateInstance` action's AmiId parameter to specify the custom AMI that you want to use. Block device mappings are not supported if the value is `Custom` . For more information about how to use custom AMIs with AWS OpsWorks Stacks, see [Using Custom AMIs](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-os
     */
    readonly os?: string;
    /**
     * The instance root device type.
     *
     * For more information, see [Storage for the Root Device](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-rootdevicetype
     */
    readonly rootDeviceType?: string;
    /**
     * The instance's Amazon EC2 key-pair name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-sshkeyname
     */
    readonly sshKeyName?: string;
    /**
     * The stack ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-stackid
     */
    readonly stackId: string;
    /**
     * The ID of the instance's subnet.
     *
     * If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks Stacks to launch the instance in a different subnet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-subnetid
     */
    readonly subnetId?: string;
    /**
     * The instance's tenancy option.
     *
     * The default option is no tenancy, or if the instance is running in a VPC, inherit tenancy settings from the VPC. The following are valid values for this parameter: `dedicated` , `default` , or `host` . Because there are costs associated with changes in tenancy options, we recommend that you research tenancy options before choosing them for your instances. For more information about dedicated hosts, see [Dedicated Hosts Overview](https://docs.aws.amazon.com/ec2/dedicated-hosts/) and [Amazon EC2 Dedicated Hosts](https://docs.aws.amazon.com/ec2/dedicated-hosts/) . For more information about dedicated instances, see [Dedicated Instances](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html) and [Amazon EC2 Dedicated Instances](https://docs.aws.amazon.com/ec2/purchasing-options/dedicated-instances/) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-tenancy
     */
    readonly tenancy?: string;
    /**
     * The time-based scaling configuration for the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-timebasedautoscaling
     */
    readonly timeBasedAutoScaling?: cdk.IResolvable | CfnInstance.TimeBasedAutoScalingProperty;
    /**
     * The instance's virtualization type, `paravirtual` or `hvm` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-virtualizationtype
     */
    readonly virtualizationType?: string;
    /**
     * A list of AWS OpsWorks volume IDs to associate with the instance.
     *
     * For more information, see [`AWS::OpsWorks::Volume`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-volumes
     */
    readonly volumes?: Array<string>;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html.
 *
 * @cloudformationResource AWS::OpsWorks::Layer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html
 */
export declare class CfnLayer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLayer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLayer;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * One or more user-defined key-value pairs to be added to the stack attributes.
     */
    attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * Whether to automatically assign an [Elastic IP address](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) to the layer's instances. For more information, see [How to Edit a Layer](https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html) .
     */
    autoAssignElasticIps: boolean | cdk.IResolvable;
    /**
     * For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances.
     */
    autoAssignPublicIps: boolean | cdk.IResolvable;
    /**
     * The ARN of an IAM profile to be used for the layer's EC2 instances.
     */
    customInstanceProfileArn?: string;
    /**
     * A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer's instances.
     */
    customJson?: any | cdk.IResolvable;
    /**
     * A `LayerCustomRecipes` object that specifies the layer custom recipes.
     */
    customRecipes?: cdk.IResolvable | CfnLayer.RecipesProperty;
    /**
     * An array containing the layer custom security group IDs.
     */
    customSecurityGroupIds?: Array<string>;
    /**
     * Whether to disable auto healing for the layer.
     */
    enableAutoHealing: boolean | cdk.IResolvable;
    /**
     * Whether to install operating system and package updates when the instance boots.
     */
    installUpdatesOnBoot?: boolean | cdk.IResolvable;
    /**
     * A `LifeCycleEventConfiguration` object that you can use to configure the Shutdown event to specify an execution timeout and enable or disable Elastic Load Balancer connection draining.
     */
    lifecycleEventConfiguration?: cdk.IResolvable | CfnLayer.LifecycleEventConfigurationProperty;
    /**
     * The load-based scaling configuration for the AWS OpsWorks layer.
     */
    loadBasedAutoScaling?: cdk.IResolvable | CfnLayer.LoadBasedAutoScalingProperty;
    /**
     * The layer name, which is used by the console.
     */
    name: string;
    /**
     * An array of `Package` objects that describes the layer packages.
     */
    packages?: Array<string>;
    /**
     * For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef recipes.
     */
    shortname: string;
    /**
     * The layer stack ID.
     */
    stackId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies one or more sets of tags (key–value pairs) to associate with this AWS OpsWorks layer.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The layer type.
     */
    type: string;
    /**
     * Whether to use Amazon EBS-optimized instances.
     */
    useEbsOptimizedInstances?: boolean | cdk.IResolvable;
    /**
     * A `VolumeConfigurations` object that describes the layer's Amazon EBS volumes.
     */
    volumeConfigurations?: Array<cdk.IResolvable | CfnLayer.VolumeConfigurationProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLayerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLayer {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html
     */
    interface RecipesProperty {
        /**
         * An array of custom recipe names to be run following a `configure` event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html#cfn-opsworks-layer-recipes-configure
         */
        readonly configure?: Array<string>;
        /**
         * An array of custom recipe names to be run following a `deploy` event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html#cfn-opsworks-layer-recipes-deploy
         */
        readonly deploy?: Array<string>;
        /**
         * An array of custom recipe names to be run following a `setup` event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html#cfn-opsworks-layer-recipes-setup
         */
        readonly setup?: Array<string>;
        /**
         * An array of custom recipe names to be run following a `shutdown` event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html#cfn-opsworks-layer-recipes-shutdown
         */
        readonly shutdown?: Array<string>;
        /**
         * An array of custom recipe names to be run following a `undeploy` event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html#cfn-opsworks-layer-recipes-undeploy
         */
        readonly undeploy?: Array<string>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration.html
     */
    interface LifecycleEventConfigurationProperty {
        /**
         * The Shutdown event configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration.html#cfn-opsworks-layer-lifecycleeventconfiguration-shutdowneventconfiguration
         */
        readonly shutdownEventConfiguration?: cdk.IResolvable | CfnLayer.ShutdownEventConfigurationProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-shutdowneventconfiguration.html
     */
    interface ShutdownEventConfigurationProperty {
        /**
         * Whether to enable Elastic Load Balancing connection draining.
         *
         * For more information, see [Connection Draining](https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/TerminologyandKeyConcepts.html#conn-drain)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-shutdowneventconfiguration.html#cfn-opsworks-layer-shutdowneventconfiguration-delayuntilelbconnectionsdrained
         */
        readonly delayUntilElbConnectionsDrained?: boolean | cdk.IResolvable;
        /**
         * The time, in seconds, that AWS OpsWorks Stacks waits after triggering a Shutdown event before shutting down an instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-shutdowneventconfiguration.html#cfn-opsworks-layer-shutdowneventconfiguration-executiontimeout
         */
        readonly executionTimeout?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling.html
     */
    interface LoadBasedAutoScalingProperty {
        /**
         * An `AutoScalingThresholds` object that describes the downscaling configuration, which defines how and when AWS OpsWorks Stacks reduces the number of instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling.html#cfn-opsworks-layer-loadbasedautoscaling-downscaling
         */
        readonly downScaling?: CfnLayer.AutoScalingThresholdsProperty | cdk.IResolvable;
        /**
         * Whether load-based auto scaling is enabled for the layer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling.html#cfn-opsworks-layer-loadbasedautoscaling-enable
         */
        readonly enable?: boolean | cdk.IResolvable;
        /**
         * An `AutoScalingThresholds` object that describes the upscaling configuration, which defines how and when AWS OpsWorks Stacks increases the number of instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling.html#cfn-opsworks-layer-loadbasedautoscaling-upscaling
         */
        readonly upScaling?: CfnLayer.AutoScalingThresholdsProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-autoscalingthresholds.html
     */
    interface AutoScalingThresholdsProperty {
        /**
         * The CPU utilization threshold, as a percent of the available CPU.
         *
         * A value of -1 disables the threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-autoscalingthresholds.html#cfn-opsworks-layer-autoscalingthresholds-cputhreshold
         */
        readonly cpuThreshold?: number;
        /**
         * The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks Stacks should ignore metrics and suppress additional scaling events.
         *
         * For example, AWS OpsWorks Stacks adds new instances following an upscaling event but the instances won't start reducing the load until they have been booted and configured. There is no point in raising additional scaling events during that operation, which typically takes several minutes. `IgnoreMetricsTime` allows you to direct AWS OpsWorks Stacks to suppress scaling events long enough to get the new instances online.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-autoscalingthresholds.html#cfn-opsworks-layer-autoscalingthresholds-ignoremetricstime
         */
        readonly ignoreMetricsTime?: number;
        /**
         * The number of instances to add or remove when the load exceeds a threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-autoscalingthresholds.html#cfn-opsworks-layer-autoscalingthresholds-instancecount
         */
        readonly instanceCount?: number;
        /**
         * The load threshold.
         *
         * A value of -1 disables the threshold. For more information about how load is computed, see [Load (computing)](https://docs.aws.amazon.com/http://en.wikipedia.org/wiki/Load_%28computing%29) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-autoscalingthresholds.html#cfn-opsworks-layer-autoscalingthresholds-loadthreshold
         */
        readonly loadThreshold?: number;
        /**
         * The memory utilization threshold, as a percent of the available memory.
         *
         * A value of -1 disables the threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-autoscalingthresholds.html#cfn-opsworks-layer-autoscalingthresholds-memorythreshold
         */
        readonly memoryThreshold?: number;
        /**
         * The amount of time, in minutes, that the load must exceed a threshold before more instances are added or removed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-autoscalingthresholds.html#cfn-opsworks-layer-autoscalingthresholds-thresholdswaittime
         */
        readonly thresholdsWaitTime?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html
     */
    interface VolumeConfigurationProperty {
        /**
         * Specifies whether an Amazon EBS volume is encrypted.
         *
         * For more information, see [Amazon EBS Encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html#cfn-opsworks-layer-volumeconfiguration-encrypted
         */
        readonly encrypted?: boolean | cdk.IResolvable;
        /**
         * The number of I/O operations per second (IOPS) to provision for the volume.
         *
         * For PIOPS volumes, the IOPS per disk.
         *
         * If you specify `io1` for the volume type, you must specify this property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html#cfn-opsworks-layer-volumeconfiguration-iops
         */
        readonly iops?: number;
        /**
         * The volume mount point.
         *
         * For example "/dev/sdh".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html#cfn-opsworks-layer-volumeconfiguration-mountpoint
         */
        readonly mountPoint?: string;
        /**
         * The number of disks in the volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html#cfn-opsworks-layer-volumeconfiguration-numberofdisks
         */
        readonly numberOfDisks?: number;
        /**
         * The volume [RAID level](https://docs.aws.amazon.com/http://en.wikipedia.org/wiki/Standard_RAID_levels) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html#cfn-opsworks-layer-volumeconfiguration-raidlevel
         */
        readonly raidLevel?: number;
        /**
         * The volume size.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html#cfn-opsworks-layer-volumeconfiguration-size
         */
        readonly size?: number;
        /**
         * The volume type. For more information, see [Amazon EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) .
         *
         * - `standard` - Magnetic. Magnetic volumes must have a minimum size of 1 GiB and a maximum size of 1024 GiB.
         * - `io1` - Provisioned IOPS (SSD). PIOPS volumes must have a minimum size of 4 GiB and a maximum size of 16384 GiB.
         * - `gp2` - General Purpose (SSD). General purpose volumes must have a minimum size of 1 GiB and a maximum size of 16384 GiB.
         * - `st1` - Throughput Optimized hard disk drive (HDD). Throughput optimized HDD volumes must have a minimum size of 125 GiB and a maximum size of 16384 GiB.
         * - `sc1` - Cold HDD. Cold HDD volumes must have a minimum size of 125 GiB and a maximum size of 16384 GiB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html#cfn-opsworks-layer-volumeconfiguration-volumetype
         */
        readonly volumeType?: string;
    }
}
/**
 * Properties for defining a `CfnLayer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html
 */
export interface CfnLayerProps {
    /**
     * One or more user-defined key-value pairs to be added to the stack attributes.
     *
     * To create a cluster layer, set the `EcsClusterArn` attribute to the cluster's ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-attributes
     */
    readonly attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * Whether to automatically assign an [Elastic IP address](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) to the layer's instances. For more information, see [How to Edit a Layer](https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-autoassignelasticips
     */
    readonly autoAssignElasticIps: boolean | cdk.IResolvable;
    /**
     * For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances.
     *
     * For more information, see [How to Edit a Layer](https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-autoassignpublicips
     */
    readonly autoAssignPublicIps: boolean | cdk.IResolvable;
    /**
     * The ARN of an IAM profile to be used for the layer's EC2 instances.
     *
     * For more information about IAM ARNs, see [Using Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-custominstanceprofilearn
     */
    readonly customInstanceProfileArn?: string;
    /**
     * A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer's instances.
     *
     * For more information, see [Using Custom JSON](https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html) . This feature is supported as of version 1.7.42 of the AWS CLI .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-customjson
     */
    readonly customJson?: any | cdk.IResolvable;
    /**
     * A `LayerCustomRecipes` object that specifies the layer custom recipes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-customrecipes
     */
    readonly customRecipes?: cdk.IResolvable | CfnLayer.RecipesProperty;
    /**
     * An array containing the layer custom security group IDs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-customsecuritygroupids
     */
    readonly customSecurityGroupIds?: Array<string>;
    /**
     * Whether to disable auto healing for the layer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-enableautohealing
     */
    readonly enableAutoHealing: boolean | cdk.IResolvable;
    /**
     * Whether to install operating system and package updates when the instance boots.
     *
     * The default value is `true` . To control when updates are installed, set this value to `false` . You must then update your instances manually by using `CreateDeployment` to run the `update_dependencies` stack command or by manually running `yum` (Amazon Linux) or `apt-get` (Ubuntu) on the instances.
     *
     * > To ensure that your instances have the latest security updates, we strongly recommend using the default value of `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-installupdatesonboot
     */
    readonly installUpdatesOnBoot?: boolean | cdk.IResolvable;
    /**
     * A `LifeCycleEventConfiguration` object that you can use to configure the Shutdown event to specify an execution timeout and enable or disable Elastic Load Balancer connection draining.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-lifecycleeventconfiguration
     */
    readonly lifecycleEventConfiguration?: cdk.IResolvable | CfnLayer.LifecycleEventConfigurationProperty;
    /**
     * The load-based scaling configuration for the AWS OpsWorks layer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-loadbasedautoscaling
     */
    readonly loadBasedAutoScaling?: cdk.IResolvable | CfnLayer.LoadBasedAutoScalingProperty;
    /**
     * The layer name, which is used by the console.
     *
     * Layer names can be a maximum of 32 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-name
     */
    readonly name: string;
    /**
     * An array of `Package` objects that describes the layer packages.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-packages
     */
    readonly packages?: Array<string>;
    /**
     * For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef recipes.
     *
     * The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 32 characters, which are limited to the alphanumeric characters, '-', '_', and '.'.
     *
     * Built-in layer short names are defined by AWS OpsWorks Stacks. For more information, see the [Layer Reference](https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-shortname
     */
    readonly shortname: string;
    /**
     * The layer stack ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-stackid
     */
    readonly stackId: string;
    /**
     * Specifies one or more sets of tags (key–value pairs) to associate with this AWS OpsWorks layer.
     *
     * Use tags to manage your resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The layer type.
     *
     * A stack cannot have more than one built-in layer of the same type. It can have any number of custom layers. Built-in layers are not available in Chef 12 stacks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-type
     */
    readonly type: string;
    /**
     * Whether to use Amazon EBS-optimized instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-useebsoptimizedinstances
     */
    readonly useEbsOptimizedInstances?: boolean | cdk.IResolvable;
    /**
     * A `VolumeConfigurations` object that describes the layer's Amazon EBS volumes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#cfn-opsworks-layer-volumeconfigurations
     */
    readonly volumeConfigurations?: Array<cdk.IResolvable | CfnLayer.VolumeConfigurationProperty> | cdk.IResolvable;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html.
 *
 * @cloudformationResource AWS::OpsWorks::Stack
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html
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
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The default AWS OpsWorks Stacks agent version. You have the following options:.
     */
    agentVersion?: string;
    /**
     * One or more user-defined key-value pairs to be added to the stack attributes.
     */
    attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * A `ChefConfiguration` object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see [Create a New Stack](https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html) .
     */
    chefConfiguration?: CfnStack.ChefConfigurationProperty | cdk.IResolvable;
    /**
     * If you're cloning an AWS OpsWorks stack, a list of AWS OpsWorks application stack IDs from the source stack to include in the cloned stack.
     */
    cloneAppIds?: Array<string>;
    /**
     * If you're cloning an AWS OpsWorks stack, indicates whether to clone the source stack's permissions.
     */
    clonePermissions?: boolean | cdk.IResolvable;
    /**
     * The configuration manager.
     */
    configurationManager?: cdk.IResolvable | CfnStack.StackConfigurationManagerProperty;
    /**
     * Contains the information required to retrieve an app or cookbook from a repository.
     */
    customCookbooksSource?: cdk.IResolvable | CfnStack.SourceProperty;
    /**
     * A string that contains user-defined, custom JSON.
     */
    customJson?: any | cdk.IResolvable;
    /**
     * The stack's default Availability Zone, which must be in the specified region.
     */
    defaultAvailabilityZone?: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances.
     */
    defaultInstanceProfileArn: string;
    /**
     * The stack's default operating system, which is installed on every instance unless you specify a different operating system when you create the instance.
     */
    defaultOs?: string;
    /**
     * The default root device type.
     */
    defaultRootDeviceType?: string;
    /**
     * A default Amazon EC2 key pair name.
     */
    defaultSshKeyName?: string;
    /**
     * The stack's default subnet ID.
     */
    defaultSubnetId?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Elastic Container Service ( Amazon ECS ) cluster to register with the AWS OpsWorks stack.
     */
    ecsClusterArn?: string;
    /**
     * A list of Elastic IP addresses to register with the AWS OpsWorks stack.
     */
    elasticIps?: Array<CfnStack.ElasticIpProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The stack's host name theme, with spaces replaced by underscores.
     */
    hostnameTheme?: string;
    /**
     * The stack name.
     */
    name: string;
    /**
     * The Amazon Relational Database Service ( Amazon RDS ) database instance to register with the AWS OpsWorks stack.
     */
    rdsDbInstances?: Array<cdk.IResolvable | CfnStack.RdsDbInstanceProperty> | cdk.IResolvable;
    /**
     * The stack's IAM role, which allows AWS OpsWorks Stacks to work with AWS resources on your behalf.
     */
    serviceRoleArn: string;
    /**
     * If you're cloning an AWS OpsWorks stack, the stack ID of the source AWS OpsWorks stack to clone.
     */
    sourceStackId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A map that contains tag keys and tag values that are attached to a stack or layer.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Whether the stack uses custom cookbooks.
     */
    useCustomCookbooks?: boolean | cdk.IResolvable;
    /**
     * Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers.
     */
    useOpsworksSecurityGroups?: boolean | cdk.IResolvable;
    /**
     * The ID of the VPC that the stack is to be launched into.
     */
    vpcId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStackProps);
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
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-chefconfiguration.html
     */
    interface ChefConfigurationProperty {
        /**
         * The Berkshelf version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-chefconfiguration.html#cfn-opsworks-stack-chefconfiguration-berkshelfversion
         */
        readonly berkshelfVersion?: string;
        /**
         * Whether to enable Berkshelf.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-chefconfiguration.html#cfn-opsworks-stack-chefconfiguration-manageberkshelf
         */
        readonly manageBerkshelf?: boolean | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-stackconfigurationmanager.html
     */
    interface StackConfigurationManagerProperty {
        /**
         * The name.
         *
         * This parameter must be set to `Chef` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-stackconfigurationmanager.html#cfn-opsworks-stack-stackconfigurationmanager-name
         */
        readonly name?: string;
        /**
         * The Chef version.
         *
         * This parameter must be set to 12, 11.10, or 11.4 for Linux stacks, and to 12.2 for Windows stacks. The default value for Linux stacks is 12.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-stackconfigurationmanager.html#cfn-opsworks-stack-stackconfigurationmanager-version
         */
        readonly version?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html
     */
    interface SourceProperty {
        /**
         * When included in a request, the parameter depends on the repository type.
         *
         * - For Amazon S3 bundles, set `Password` to the appropriate IAM secret access key.
         * - For HTTP bundles and Subversion repositories, set `Password` to the password.
         *
         * For more information on how to safely handle IAM credentials, see [](https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html) .
         *
         * In responses, AWS OpsWorks Stacks returns `*****FILTERED*****` instead of the actual value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html#cfn-opsworks-stack-source-password
         */
        readonly password?: string;
        /**
         * The application's version.
         *
         * AWS OpsWorks Stacks enables you to easily deploy new versions of an application. One of the simplest approaches is to have branches or revisions in your repository that represent different versions that can potentially be deployed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html#cfn-opsworks-stack-source-revision
         */
        readonly revision?: string;
        /**
         * The repository's SSH key.
         *
         * For more information, see [Using Git Repository SSH Keys](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploykeys.html) in the *AWS OpsWorks User Guide* . To pass in an SSH key as a parameter, see the following example:
         *
         * `"Parameters" : { "GitSSHKey" : { "Description" : "Change SSH key newlines to commas.", "Type" : "CommaDelimitedList", "NoEcho" : "true" }, ... "CustomCookbooksSource": { "Revision" : { "Ref": "GitRevision"}, "SshKey" : { "Fn::Join" : [ "\n", { "Ref": "GitSSHKey"} ] }, "Type": "git", "Url": { "Ref": "GitURL"} } ...`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html#cfn-opsworks-stack-source-sshkey
         */
        readonly sshKey?: string;
        /**
         * The repository type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html#cfn-opsworks-stack-source-type
         */
        readonly type?: string;
        /**
         * The source URL.
         *
         * The following is an example of an Amazon S3 source URL: `https://s3.amazonaws.com/opsworks-demo-bucket/opsworks_cookbook_demo.tar.gz` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html#cfn-opsworks-stack-source-url
         */
        readonly url?: string;
        /**
         * This parameter depends on the repository type.
         *
         * - For Amazon S3 bundles, set `Username` to the appropriate IAM access key ID.
         * - For HTTP bundles, Git repositories, and Subversion repositories, set `Username` to the user name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html#cfn-opsworks-stack-source-username
         */
        readonly username?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-elasticip.html
     */
    interface ElasticIpProperty {
        /**
         * The IP address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-elasticip.html#cfn-opsworks-stack-elasticip-ip
         */
        readonly ip: string;
        /**
         * The name, which can be a maximum of 32 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-elasticip.html#cfn-opsworks-stack-elasticip-name
         */
        readonly name?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-rdsdbinstance.html
     */
    interface RdsDbInstanceProperty {
        /**
         * AWS OpsWorks Stacks returns `*****FILTERED*****` instead of the actual value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-rdsdbinstance.html#cfn-opsworks-stack-rdsdbinstance-dbpassword
         */
        readonly dbPassword: string;
        /**
         * The master user name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-rdsdbinstance.html#cfn-opsworks-stack-rdsdbinstance-dbuser
         */
        readonly dbUser: string;
        /**
         * The instance's ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-rdsdbinstance.html#cfn-opsworks-stack-rdsdbinstance-rdsdbinstancearn
         */
        readonly rdsDbInstanceArn: string;
    }
}
/**
 * Properties for defining a `CfnStack`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html
 */
export interface CfnStackProps {
    /**
     * The default AWS OpsWorks Stacks agent version. You have the following options:.
     *
     * - Auto-update - Set this parameter to `LATEST` . AWS OpsWorks Stacks automatically installs new agent versions on the stack's instances as soon as they are available.
     * - Fixed version - Set this parameter to your preferred agent version. To update the agent version, you must edit the stack configuration and specify a new version. AWS OpsWorks Stacks installs that version on the stack's instances.
     *
     * The default setting is the most recent release of the agent. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call `DescribeAgentVersions` . AgentVersion cannot be set to Chef 12.2.
     *
     * > You can also specify an agent version when you create or update an instance, which overrides the stack's default setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-agentversion
     */
    readonly agentVersion?: string;
    /**
     * One or more user-defined key-value pairs to be added to the stack attributes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-attributes
     */
    readonly attributes?: cdk.IResolvable | Record<string, string>;
    /**
     * A `ChefConfiguration` object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see [Create a New Stack](https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-chefconfiguration
     */
    readonly chefConfiguration?: CfnStack.ChefConfigurationProperty | cdk.IResolvable;
    /**
     * If you're cloning an AWS OpsWorks stack, a list of AWS OpsWorks application stack IDs from the source stack to include in the cloned stack.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-cloneappids
     */
    readonly cloneAppIds?: Array<string>;
    /**
     * If you're cloning an AWS OpsWorks stack, indicates whether to clone the source stack's permissions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-clonepermissions
     */
    readonly clonePermissions?: boolean | cdk.IResolvable;
    /**
     * The configuration manager.
     *
     * When you create a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-configurationmanager
     */
    readonly configurationManager?: cdk.IResolvable | CfnStack.StackConfigurationManagerProperty;
    /**
     * Contains the information required to retrieve an app or cookbook from a repository.
     *
     * For more information, see [Adding Apps](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html) or [Cookbooks and Recipes](https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-customcookbookssource
     */
    readonly customCookbooksSource?: cdk.IResolvable | CfnStack.SourceProperty;
    /**
     * A string that contains user-defined, custom JSON.
     *
     * It can be used to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:
     *
     * `"{\"key1\": \"value1\", \"key2\": \"value2\",...}"`
     *
     * For more information about custom JSON, see [Use Custom JSON to Modify the Stack Configuration Attributes](https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-customjson
     */
    readonly customJson?: any | cdk.IResolvable;
    /**
     * The stack's default Availability Zone, which must be in the specified region.
     *
     * For more information, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html) . If you also specify a value for `DefaultSubnetId` , the subnet must be in the same zone. For more information, see the `VpcId` parameter description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-defaultavailabilityzone
     */
    readonly defaultAvailabilityZone?: string;
    /**
     * The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances.
     *
     * For more information about IAM ARNs, see [Using Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-defaultinstanceprofilearn
     */
    readonly defaultInstanceProfileArn: string;
    /**
     * The stack's default operating system, which is installed on every instance unless you specify a different operating system when you create the instance.
     *
     * You can specify one of the following.
     *
     * - A supported Linux operating system: An Amazon Linux version, such as `Amazon Linux 2` , `Amazon Linux 2018.03` , `Amazon Linux 2017.09` , `Amazon Linux 2017.03` , `Amazon Linux 2016.09` , `Amazon Linux 2016.03` , `Amazon Linux 2015.09` , or `Amazon Linux 2015.03` .
     * - A supported Ubuntu operating system, such as `Ubuntu 18.04 LTS` , `Ubuntu 16.04 LTS` , `Ubuntu 14.04 LTS` , or `Ubuntu 12.04 LTS` .
     * - `CentOS Linux 7`
     * - `Red Hat Enterprise Linux 7`
     * - A supported Windows operating system, such as `Microsoft Windows Server 2012 R2 Base` , `Microsoft Windows Server 2012 R2 with SQL Server Express` , `Microsoft Windows Server 2012 R2 with SQL Server Standard` , or `Microsoft Windows Server 2012 R2 with SQL Server Web` .
     * - A custom AMI: `Custom` . You specify the custom AMI you want to use when you create instances. For more information, see [Using Custom AMIs](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html) .
     *
     * The default option is the current Amazon Linux version. Not all operating systems are supported with all versions of Chef. For more information about supported operating systems, see [AWS OpsWorks Stacks Operating Systems](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-defaultos
     */
    readonly defaultOs?: string;
    /**
     * The default root device type.
     *
     * This value is the default for all instances in the stack, but you can override it when you create an instance. The default option is `instance-store` . For more information, see [Storage for the Root Device](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-defaultrootdevicetype
     */
    readonly defaultRootDeviceType?: string;
    /**
     * A default Amazon EC2 key pair name.
     *
     * The default value is none. If you specify a key pair name, AWS OpsWorks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see [Using SSH to Communicate with an Instance](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html) and [Managing SSH Access](https://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html) . You can override this setting by specifying a different key pair, or no key pair, when you [create an instance](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-defaultsshkeyname
     */
    readonly defaultSshKeyName?: string;
    /**
     * The stack's default subnet ID.
     *
     * All instances are launched into this subnet unless you specify another subnet ID when you create the instance. This parameter is required if you specify a value for the `VpcId` parameter. If you also specify a value for `DefaultAvailabilityZone` , the subnet must be in that zone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-defaultsubnetid
     */
    readonly defaultSubnetId?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Elastic Container Service ( Amazon ECS ) cluster to register with the AWS OpsWorks stack.
     *
     * > If you specify a cluster that's registered with another AWS OpsWorks stack, AWS CloudFormation deregisters the existing association before registering the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-ecsclusterarn
     */
    readonly ecsClusterArn?: string;
    /**
     * A list of Elastic IP addresses to register with the AWS OpsWorks stack.
     *
     * > If you specify an IP address that's registered with another AWS OpsWorks stack, AWS CloudFormation deregisters the existing association before registering the IP address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-elasticips
     */
    readonly elasticIps?: Array<CfnStack.ElasticIpProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The stack's host name theme, with spaces replaced by underscores.
     *
     * The theme is used to generate host names for the stack's instances. By default, `HostnameTheme` is set to `Layer_Dependent` , which creates host names by appending integers to the layer's short name. The other themes are:
     *
     * - `Baked_Goods`
     * - `Clouds`
     * - `Europe_Cities`
     * - `Fruits`
     * - `Greek_Deities_and_Titans`
     * - `Legendary_creatures_from_Japan`
     * - `Planets_and_Moons`
     * - `Roman_Deities`
     * - `Scottish_Islands`
     * - `US_Cities`
     * - `Wild_Cats`
     *
     * To obtain a generated host name, call `GetHostNameSuggestion` , which returns a host name based on the current theme.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-hostnametheme
     */
    readonly hostnameTheme?: string;
    /**
     * The stack name.
     *
     * Stack names can be a maximum of 64 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-name
     */
    readonly name: string;
    /**
     * The Amazon Relational Database Service ( Amazon RDS ) database instance to register with the AWS OpsWorks stack.
     *
     * > If you specify a database instance that's registered with another AWS OpsWorks stack, AWS CloudFormation deregisters the existing association before registering the database instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-rdsdbinstances
     */
    readonly rdsDbInstances?: Array<cdk.IResolvable | CfnStack.RdsDbInstanceProperty> | cdk.IResolvable;
    /**
     * The stack's IAM role, which allows AWS OpsWorks Stacks to work with AWS resources on your behalf.
     *
     * You must set this parameter to the Amazon Resource Name (ARN) for an existing IAM role. For more information about IAM ARNs, see [Using Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-servicerolearn
     */
    readonly serviceRoleArn: string;
    /**
     * If you're cloning an AWS OpsWorks stack, the stack ID of the source AWS OpsWorks stack to clone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-sourcestackid
     */
    readonly sourceStackId?: string;
    /**
     * A map that contains tag keys and tag values that are attached to a stack or layer.
     *
     * - The key cannot be empty.
     * - The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: `+ - = . _ : /`
     * - The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: `+ - = . _ : /`
     * - Leading and trailing white spaces are trimmed from both the key and value.
     * - A maximum of 40 tags is allowed for any resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Whether the stack uses custom cookbooks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-usecustomcookbooks
     */
    readonly useCustomCookbooks?: boolean | cdk.IResolvable;
    /**
     * Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers.
     *
     * AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With `UseOpsworksSecurityGroups` you can instead provide your own custom security groups. `UseOpsworksSecurityGroups` has the following settings:
     *
     * - True - AWS OpsWorks Stacks automatically associates the appropriate built-in security group with each layer (default setting). You can associate additional security groups with a layer after you create it, but you cannot delete the built-in security group.
     * - False - AWS OpsWorks Stacks does not associate built-in security groups with layers. You must create appropriate EC2 security groups and associate a security group with each layer that you create. However, you can still manually associate a built-in security group with a layer on creation; custom security groups are required only for those layers that need custom settings.
     *
     * For more information, see [Create a New Stack](https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-useopsworkssecuritygroups
     */
    readonly useOpsworksSecurityGroups?: boolean | cdk.IResolvable;
    /**
     * The ID of the VPC that the stack is to be launched into.
     *
     * The VPC must be in the stack's region. All instances are launched into this VPC. You cannot change the ID later.
     *
     * - If your account supports EC2-Classic, the default value is `no VPC` .
     * - If your account does not support EC2-Classic, the default value is the default VPC for the specified region.
     *
     * If the VPC ID corresponds to a default VPC and you have specified either the `DefaultAvailabilityZone` or the `DefaultSubnetId` parameter only, AWS OpsWorks Stacks infers the value of the other parameter. If you specify neither parameter, AWS OpsWorks Stacks sets these parameters to the first valid Availability Zone for the specified region and the corresponding default VPC subnet ID, respectively.
     *
     * If you specify a nondefault VPC ID, note the following:
     *
     * - It must belong to a VPC in your account that is in the specified region.
     * - You must specify a value for `DefaultSubnetId` .
     *
     * For more information about how to use AWS OpsWorks Stacks with a VPC, see [Running a Stack in a VPC](https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-vpc.html) . For more information about default VPC and EC2-Classic, see [Supported Platforms](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html#cfn-opsworks-stack-vpcid
     */
    readonly vpcId?: string;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html.
 *
 * @cloudformationResource AWS::OpsWorks::UserProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html
 */
export declare class CfnUserProfile extends cdk.CfnResource implements cdk.IInspectable {
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
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The user's SSH user name, as a string.
     *
     * @cloudformationAttribute SshUsername
     */
    readonly attrSshUsername: string;
    /**
     * Whether users can specify their own SSH public key through the My Settings page.
     */
    allowSelfManagement?: boolean | cdk.IResolvable;
    /**
     * The user's IAM ARN.
     */
    iamUserArn: string;
    /**
     * The user's SSH public key.
     */
    sshPublicKey?: string;
    /**
     * The user's SSH user name.
     */
    sshUsername?: string;
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
/**
 * Properties for defining a `CfnUserProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html
 */
export interface CfnUserProfileProps {
    /**
     * Whether users can specify their own SSH public key through the My Settings page.
     *
     * For more information, see [Managing User Permissions](https://docs.aws.amazon.com/opsworks/latest/userguide/security-settingsshkey.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html#cfn-opsworks-userprofile-allowselfmanagement
     */
    readonly allowSelfManagement?: boolean | cdk.IResolvable;
    /**
     * The user's IAM ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html#cfn-opsworks-userprofile-iamuserarn
     */
    readonly iamUserArn: string;
    /**
     * The user's SSH public key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html#cfn-opsworks-userprofile-sshpublickey
     */
    readonly sshPublicKey?: string;
    /**
     * The user's SSH user name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html#cfn-opsworks-userprofile-sshusername
     */
    readonly sshUsername?: string;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html.
 *
 * @cloudformationResource AWS::OpsWorks::Volume
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html
 */
export declare class CfnVolume extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVolume from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVolume;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Amazon EC2 volume ID.
     */
    ec2VolumeId: string;
    /**
     * The volume mount point.
     */
    mountPoint?: string;
    /**
     * The volume name.
     */
    name?: string;
    /**
     * The stack ID.
     */
    stackId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVolumeProps);
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
 * Properties for defining a `CfnVolume`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html
 */
export interface CfnVolumeProps {
    /**
     * The Amazon EC2 volume ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html#cfn-opsworks-volume-ec2volumeid
     */
    readonly ec2VolumeId: string;
    /**
     * The volume mount point.
     *
     * For example, "/mnt/disk1".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html#cfn-opsworks-volume-mountpoint
     */
    readonly mountPoint?: string;
    /**
     * The volume name.
     *
     * Volume names are a maximum of 128 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html#cfn-opsworks-volume-name
     */
    readonly name?: string;
    /**
     * The stack ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html#cfn-opsworks-volume-stackid
     */
    readonly stackId: string;
}
