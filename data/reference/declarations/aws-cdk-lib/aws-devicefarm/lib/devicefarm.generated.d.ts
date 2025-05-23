import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Represents a request to the create device pool operation.
 *
 * @cloudformationResource AWS::DeviceFarm::DevicePool
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-devicepool.html
 */
export declare class CfnDevicePool extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDevicePool from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDevicePool;
    /**
     * The Amazon Resource Name (ARN) of the device pool. See [Amazon resource names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference guide* .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The device pool's description.
     */
    description?: string;
    /**
     * The number of devices that Device Farm can add to your device pool.
     */
    maxDevices?: number;
    /**
     * The device pool's name.
     */
    name: string;
    /**
     * The ARN of the project for the device pool.
     */
    projectArn: string;
    /**
     * The device pool's rules.
     */
    rules: Array<cdk.IResolvable | CfnDevicePool.RuleProperty> | cdk.IResolvable;
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
    constructor(scope: constructs.Construct, id: string, props: CfnDevicePoolProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDevicePool {
    /**
     * Represents a condition for a device pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-devicepool-rule.html
     */
    interface RuleProperty {
        /**
         * The rule's stringified attribute. For example, specify the value as `"\"abc\""` .
         *
         * The supported operators for each attribute are provided in the following list.
         *
         * - **APPIUM_VERSION** - The Appium version for the test.
         *
         * Supported operators: `CONTAINS`
         * - **ARN** - The Amazon Resource Name (ARN) of the device (for example, `arn:aws:devicefarm:us-west-2::device:12345Example` .
         *
         * Supported operators: `EQUALS` , `IN` , `NOT_IN`
         * - **AVAILABILITY** - The current availability of the device. Valid values are AVAILABLE, HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.
         *
         * Supported operators: `EQUALS`
         * - **FLEET_TYPE** - The fleet type. Valid values are PUBLIC or PRIVATE.
         *
         * Supported operators: `EQUALS`
         * - **FORM_FACTOR** - The device form factor. Valid values are PHONE or TABLET.
         *
         * Supported operators: `EQUALS` , `IN` , `NOT_IN`
         * - **INSTANCE_ARN** - The Amazon Resource Name (ARN) of the device instance.
         *
         * Supported operators: `IN` , `NOT_IN`
         * - **INSTANCE_LABELS** - The label of the device instance.
         *
         * Supported operators: `CONTAINS`
         * - **MANUFACTURER** - The device manufacturer (for example, Apple).
         *
         * Supported operators: `EQUALS` , `IN` , `NOT_IN`
         * - **MODEL** - The device model, such as Apple iPad Air 2 or Google Pixel.
         *
         * Supported operators: `CONTAINS` , `EQUALS` , `IN` , `NOT_IN`
         * - **OS_VERSION** - The operating system version (for example, 10.3.2).
         *
         * Supported operators: `EQUALS` , `GREATER_THAN` , `GREATER_THAN_OR_EQUALS` , `IN` , `LESS_THAN` , `LESS_THAN_OR_EQUALS` , `NOT_IN`
         * - **PLATFORM** - The device platform. Valid values are ANDROID or IOS.
         *
         * Supported operators: `EQUALS` , `IN` , `NOT_IN`
         * - **REMOTE_ACCESS_ENABLED** - Whether the device is enabled for remote access. Valid values are TRUE or FALSE.
         *
         * Supported operators: `EQUALS`
         * - **REMOTE_DEBUG_ENABLED** - Whether the device is enabled for remote debugging. Valid values are TRUE or FALSE.
         *
         * Supported operators: `EQUALS`
         *
         * Because remote debugging is [no longer supported](https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html) , this filter is ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-devicepool-rule.html#cfn-devicefarm-devicepool-rule-attribute
         */
        readonly attribute?: string;
        /**
         * Specifies how Device Farm compares the rule's attribute to the value.
         *
         * For the operators that are supported by each attribute, see the attribute descriptions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-devicepool-rule.html#cfn-devicefarm-devicepool-rule-operator
         */
        readonly operator?: string;
        /**
         * The rule's value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-devicepool-rule.html#cfn-devicefarm-devicepool-rule-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnDevicePool`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-devicepool.html
 */
export interface CfnDevicePoolProps {
    /**
     * The device pool's description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-devicepool.html#cfn-devicefarm-devicepool-description
     */
    readonly description?: string;
    /**
     * The number of devices that Device Farm can add to your device pool.
     *
     * Device Farm adds devices that are available and meet the criteria that you assign for the `rules` parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter.
     *
     * By specifying the maximum number of devices, you can control the costs that you incur by running tests.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-devicepool.html#cfn-devicefarm-devicepool-maxdevices
     */
    readonly maxDevices?: number;
    /**
     * The device pool's name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-devicepool.html#cfn-devicefarm-devicepool-name
     */
    readonly name: string;
    /**
     * The ARN of the project for the device pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-devicepool.html#cfn-devicefarm-devicepool-projectarn
     */
    readonly projectArn: string;
    /**
     * The device pool's rules.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-devicepool.html#cfn-devicefarm-devicepool-rules
     */
    readonly rules: Array<cdk.IResolvable | CfnDevicePool.RuleProperty> | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-devicepool.html#cfn-devicefarm-devicepool-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a profile that can be applied to one or more private fleet device instances.
 *
 * @cloudformationResource AWS::DeviceFarm::InstanceProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-instanceprofile.html
 */
export declare class CfnInstanceProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInstanceProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInstanceProfile;
    /**
     * The Amazon Resource Name (ARN) of the instance profile. See [Amazon resource names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference guide* .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The description of the instance profile.
     */
    description?: string;
    /**
     * An array of strings containing the list of app packages that should not be cleaned up from the device after a test run completes.
     */
    excludeAppPackagesFromCleanup?: Array<string>;
    /**
     * The name of the instance profile.
     */
    name: string;
    /**
     * When set to `true` , Device Farm removes app packages after a test run.
     */
    packageCleanup?: boolean | cdk.IResolvable;
    /**
     * When set to `true` , Device Farm reboots the instance after a test run.
     */
    rebootAfterUse?: boolean | cdk.IResolvable;
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
    constructor(scope: constructs.Construct, id: string, props: CfnInstanceProfileProps);
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
 * Properties for defining a `CfnInstanceProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-instanceprofile.html
 */
export interface CfnInstanceProfileProps {
    /**
     * The description of the instance profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-instanceprofile.html#cfn-devicefarm-instanceprofile-description
     */
    readonly description?: string;
    /**
     * An array of strings containing the list of app packages that should not be cleaned up from the device after a test run completes.
     *
     * The list of packages is considered only if you set `packageCleanup` to `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-instanceprofile.html#cfn-devicefarm-instanceprofile-excludeapppackagesfromcleanup
     */
    readonly excludeAppPackagesFromCleanup?: Array<string>;
    /**
     * The name of the instance profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-instanceprofile.html#cfn-devicefarm-instanceprofile-name
     */
    readonly name: string;
    /**
     * When set to `true` , Device Farm removes app packages after a test run.
     *
     * The default value is `false` for private devices.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-instanceprofile.html#cfn-devicefarm-instanceprofile-packagecleanup
     */
    readonly packageCleanup?: boolean | cdk.IResolvable;
    /**
     * When set to `true` , Device Farm reboots the instance after a test run.
     *
     * The default value is `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-instanceprofile.html#cfn-devicefarm-instanceprofile-rebootafteruse
     */
    readonly rebootAfterUse?: boolean | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-instanceprofile.html#cfn-devicefarm-instanceprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a network profile.
 *
 * @cloudformationResource AWS::DeviceFarm::NetworkProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html
 */
export declare class CfnNetworkProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNetworkProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNetworkProfile;
    /**
     * The Amazon Resource Name (ARN) of the network profile. See [Amazon resource names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference guide* .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The description of the network profile.
     */
    description?: string;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    downlinkBandwidthBits?: number;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    downlinkDelayMs?: number;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    downlinkJitterMs?: number;
    /**
     * Proportion of received packets that fail to arrive from 0 to 100 percent.
     */
    downlinkLossPercent?: number;
    /**
     * The name of the network profile.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the specified project.
     */
    projectArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    uplinkBandwidthBits?: number;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    uplinkDelayMs?: number;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    uplinkJitterMs?: number;
    /**
     * Proportion of transmitted packets that fail to arrive from 0 to 100 percent.
     */
    uplinkLossPercent?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNetworkProfileProps);
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
 * Properties for defining a `CfnNetworkProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html
 */
export interface CfnNetworkProfileProps {
    /**
     * The description of the network profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-description
     */
    readonly description?: string;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-downlinkbandwidthbits
     */
    readonly downlinkBandwidthBits?: number;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-downlinkdelayms
     */
    readonly downlinkDelayMs?: number;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-downlinkjitterms
     */
    readonly downlinkJitterMs?: number;
    /**
     * Proportion of received packets that fail to arrive from 0 to 100 percent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-downlinklosspercent
     */
    readonly downlinkLossPercent?: number;
    /**
     * The name of the network profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the specified project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-projectarn
     */
    readonly projectArn: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-uplinkbandwidthbits
     */
    readonly uplinkBandwidthBits?: number;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-uplinkdelayms
     */
    readonly uplinkDelayMs?: number;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-uplinkjitterms
     */
    readonly uplinkJitterMs?: number;
    /**
     * Proportion of transmitted packets that fail to arrive from 0 to 100 percent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-networkprofile.html#cfn-devicefarm-networkprofile-uplinklosspercent
     */
    readonly uplinkLossPercent?: number;
}
/**
 * Creates a project.
 *
 * @cloudformationResource AWS::DeviceFarm::Project
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-project.html
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
     * The Amazon Resource Name (ARN) of the project. See [Amazon resource names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference guide* .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Sets the execution timeout value (in minutes) for a project.
     */
    defaultJobTimeoutMinutes?: number;
    /**
     * The project's name.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to add to the resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The VPC security groups and subnets that are attached to a project.
     */
    vpcConfig?: cdk.IResolvable | CfnProject.VpcConfigProperty;
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
     * The VPC security groups and subnets that are attached to a project.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-project-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * A list of VPC security group IDs.
         *
         * A security group allows inbound traffic from network interfaces (and their associated instances) that are assigned to the same security group. See [Security groups](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the *Amazon Virtual Private Cloud user guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-project-vpcconfig.html#cfn-devicefarm-project-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * A subnet is a range of IP addresses in your VPC.
         *
         * You can launch Amazon resources, such as EC2 instances, into a specific subnet. When you create a subnet, you specify the IPv4 CIDR block for the subnet, which is a subset of the VPC CIDR block. See [VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) in the *Amazon Virtual Private Cloud user guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-project-vpcconfig.html#cfn-devicefarm-project-vpcconfig-subnetids
         */
        readonly subnetIds: Array<string>;
        /**
         * A list of VPC IDs.
         *
         * Each VPC is given a unique ID upon creation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-project-vpcconfig.html#cfn-devicefarm-project-vpcconfig-vpcid
         */
        readonly vpcId: string;
    }
}
/**
 * Properties for defining a `CfnProject`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-project.html
 */
export interface CfnProjectProps {
    /**
     * Sets the execution timeout value (in minutes) for a project.
     *
     * All test runs in this project use the specified execution timeout value unless overridden when scheduling a run.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-project.html#cfn-devicefarm-project-defaultjobtimeoutminutes
     */
    readonly defaultJobTimeoutMinutes?: number;
    /**
     * The project's name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-project.html#cfn-devicefarm-project-name
     */
    readonly name: string;
    /**
     * The tags to add to the resource.
     *
     * A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters. Tag values can have a maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-project.html#cfn-devicefarm-project-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The VPC security groups and subnets that are attached to a project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-project.html#cfn-devicefarm-project-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnProject.VpcConfigProperty;
}
/**
 * A Selenium testing project.
 *
 * Projects are used to collect and collate sessions.
 *
 * @cloudformationResource AWS::DeviceFarm::TestGridProject
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-testgridproject.html
 */
export declare class CfnTestGridProject extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTestGridProject from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTestGridProject;
    /**
     * The Amazon Resource Name (ARN) of the `TestGrid` project. See [Amazon resource names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference guide* .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A human-readable description for the project.
     */
    description?: string;
    /**
     * A human-readable name for the project.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The VPC security groups and subnets that are attached to a project.
     */
    vpcConfig?: cdk.IResolvable | CfnTestGridProject.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTestGridProjectProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTestGridProject {
    /**
     * The VPC security groups and subnets attached to the `TestGrid` project.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-testgridproject-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * A list of VPC security group IDs.
         *
         * A security group allows inbound traffic from network interfaces (and their associated instances) that are assigned to the same security group. See [Security groups](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the *Amazon Virtual Private Cloud user guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-testgridproject-vpcconfig.html#cfn-devicefarm-testgridproject-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * A list of VPC subnet IDs.
         *
         * A subnet is a range of IP addresses in your VPC. You can launch Amazon resources, such as EC2 instances, into a specific subnet. When you create a subnet, you specify the IPv4 CIDR block for the subnet, which is a subset of the VPC CIDR block. See [VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) in the *Amazon Virtual Private Cloud user guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-testgridproject-vpcconfig.html#cfn-devicefarm-testgridproject-vpcconfig-subnetids
         */
        readonly subnetIds: Array<string>;
        /**
         * A list of VPC IDs.
         *
         * Each VPC is given a unique ID upon creation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-testgridproject-vpcconfig.html#cfn-devicefarm-testgridproject-vpcconfig-vpcid
         */
        readonly vpcId: string;
    }
}
/**
 * Properties for defining a `CfnTestGridProject`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-testgridproject.html
 */
export interface CfnTestGridProjectProps {
    /**
     * A human-readable description for the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-testgridproject.html#cfn-devicefarm-testgridproject-description
     */
    readonly description?: string;
    /**
     * A human-readable name for the project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-testgridproject.html#cfn-devicefarm-testgridproject-name
     */
    readonly name: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-testgridproject.html#cfn-devicefarm-testgridproject-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The VPC security groups and subnets that are attached to a project.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-testgridproject.html#cfn-devicefarm-testgridproject-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnTestGridProject.VpcConfigProperty;
}
/**
 * Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint service.
 *
 * @cloudformationResource AWS::DeviceFarm::VPCEConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-vpceconfiguration.html
 */
export declare class CfnVPCEConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVPCEConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVPCEConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the VPC endpoint. See [Amazon resource names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference guide* .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The DNS name that Device Farm will use to map to the private service you want to access.
     */
    serviceDnsName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * An optional description that provides details about your VPC endpoint configuration.
     */
    vpceConfigurationDescription?: string;
    /**
     * The friendly name you give to your VPC endpoint configuration to manage your configurations more easily.
     */
    vpceConfigurationName: string;
    /**
     * The name of the VPC endpoint service that you want to access from Device Farm.
     */
    vpceServiceName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVPCEConfigurationProps);
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
 * Properties for defining a `CfnVPCEConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-vpceconfiguration.html
 */
export interface CfnVPCEConfigurationProps {
    /**
     * The DNS name that Device Farm will use to map to the private service you want to access.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-vpceconfiguration.html#cfn-devicefarm-vpceconfiguration-servicednsname
     */
    readonly serviceDnsName: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-vpceconfiguration.html#cfn-devicefarm-vpceconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An optional description that provides details about your VPC endpoint configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-vpceconfiguration.html#cfn-devicefarm-vpceconfiguration-vpceconfigurationdescription
     */
    readonly vpceConfigurationDescription?: string;
    /**
     * The friendly name you give to your VPC endpoint configuration to manage your configurations more easily.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-vpceconfiguration.html#cfn-devicefarm-vpceconfiguration-vpceconfigurationname
     */
    readonly vpceConfigurationName: string;
    /**
     * The name of the VPC endpoint service that you want to access from Device Farm.
     *
     * The name follows the format `com.amazonaws.vpce.us-west-2.vpce-svc-id` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-vpceconfiguration.html#cfn-devicefarm-vpceconfiguration-vpceservicename
     */
    readonly vpceServiceName: string;
}
