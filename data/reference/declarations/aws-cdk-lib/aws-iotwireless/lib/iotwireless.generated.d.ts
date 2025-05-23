import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a new destination that maps a device message to an AWS IoT rule.
 *
 * @cloudformationResource AWS::IoTWireless::Destination
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html
 */
export declare class CfnDestination extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDestination from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDestination;
    /**
     * The ARN of the destination created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The description of the new resource.
     */
    description?: string;
    /**
     * The rule name to send messages to.
     */
    expression: string;
    /**
     * The type of value in `Expression` .
     */
    expressionType: string;
    /**
     * The name of the new resource.
     */
    name: string;
    /**
     * The ARN of the IAM Role that authorizes the destination.
     */
    roleArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDestinationProps);
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
 * Properties for defining a `CfnDestination`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html
 */
export interface CfnDestinationProps {
    /**
     * The description of the new resource.
     *
     * Maximum length is 2048 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-description
     */
    readonly description?: string;
    /**
     * The rule name to send messages to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-expression
     */
    readonly expression: string;
    /**
     * The type of value in `Expression` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-expressiontype
     */
    readonly expressionType: string;
    /**
     * The name of the new resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-name
     */
    readonly name: string;
    /**
     * The ARN of the IAM Role that authorizes the destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-rolearn
     */
    readonly roleArn?: string;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     *
     * Tags can have a minimum of 0 and a maximum of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new device profile.
 *
 * @cloudformationResource AWS::IoTWireless::DeviceProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html
 */
export declare class CfnDeviceProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeviceProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeviceProfile;
    /**
     * The ARN of the device profile created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the device profile created.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * LoRaWAN device profile object.
     */
    loRaWan?: cdk.IResolvable | CfnDeviceProfile.LoRaWANDeviceProfileProperty;
    /**
     * The name of the new resource.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDeviceProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDeviceProfile {
    /**
     * LoRaWAN device profile object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html
     */
    interface LoRaWANDeviceProfileProperty {
        /**
         * The ClassBTimeout value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-classbtimeout
         */
        readonly classBTimeout?: number;
        /**
         * The ClassCTimeout value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-classctimeout
         */
        readonly classCTimeout?: number;
        /**
         * The list of values that make up the FactoryPresetFreqs value.
         *
         * Valid range of values include a minimum value of 1000000 and a maximum value of 16700000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-factorypresetfreqslist
         */
        readonly factoryPresetFreqsList?: Array<number> | cdk.IResolvable;
        /**
         * The MAC version (such as OTAA 1.1 or OTAA 1.0.3) to use with this device profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-macversion
         */
        readonly macVersion?: string;
        /**
         * The MaxDutyCycle value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-maxdutycycle
         */
        readonly maxDutyCycle?: number;
        /**
         * The MaxEIRP value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-maxeirp
         */
        readonly maxEirp?: number;
        /**
         * The PingSlotDR value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-pingslotdr
         */
        readonly pingSlotDr?: number;
        /**
         * The PingSlotFreq value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-pingslotfreq
         */
        readonly pingSlotFreq?: number;
        /**
         * The PingSlotPeriod value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-pingslotperiod
         */
        readonly pingSlotPeriod?: number;
        /**
         * The version of regional parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-regparamsrevision
         */
        readonly regParamsRevision?: string;
        /**
         * The frequency band (RFRegion) value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-rfregion
         */
        readonly rfRegion?: string;
        /**
         * The RXDataRate2 value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-rxdatarate2
         */
        readonly rxDataRate2?: number;
        /**
         * The RXDelay1 value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-rxdelay1
         */
        readonly rxDelay1?: number;
        /**
         * The RXDROffset1 value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-rxdroffset1
         */
        readonly rxDrOffset1?: number;
        /**
         * The RXFreq2 value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-rxfreq2
         */
        readonly rxFreq2?: number;
        /**
         * The Supports32BitFCnt value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-supports32bitfcnt
         */
        readonly supports32BitFCnt?: boolean | cdk.IResolvable;
        /**
         * The SupportsClassB value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-supportsclassb
         */
        readonly supportsClassB?: boolean | cdk.IResolvable;
        /**
         * The SupportsClassC value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-supportsclassc
         */
        readonly supportsClassC?: boolean | cdk.IResolvable;
        /**
         * The SupportsJoin value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-deviceprofile-lorawandeviceprofile.html#cfn-iotwireless-deviceprofile-lorawandeviceprofile-supportsjoin
         */
        readonly supportsJoin?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnDeviceProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html
 */
export interface CfnDeviceProfileProps {
    /**
     * LoRaWAN device profile object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html#cfn-iotwireless-deviceprofile-lorawan
     */
    readonly loRaWan?: cdk.IResolvable | CfnDeviceProfile.LoRaWANDeviceProfileProperty;
    /**
     * The name of the new resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html#cfn-iotwireless-deviceprofile-name
     */
    readonly name?: string;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     *
     * Tags can have a minimum of 0 and a maximum of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-deviceprofile.html#cfn-iotwireless-deviceprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * A FUOTA task.
 *
 * @cloudformationResource AWS::IoTWireless::FuotaTask
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html
 */
export declare class CfnFuotaTask extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFuotaTask from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFuotaTask;
    /**
     * The ARN of a FUOTA task
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The status of a FUOTA task.
     *
     * @cloudformationAttribute FuotaTaskStatus
     */
    readonly attrFuotaTaskStatus: string;
    /**
     * The ID of a FUOTA task.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Start time of a FUOTA task.
     *
     * @cloudformationAttribute LoRaWAN.StartTime
     */
    readonly attrLoRaWanStartTime: string;
    /**
     * The ID of the multicast group to associate with a FUOTA task.
     */
    associateMulticastGroup?: string;
    /**
     * The ID of the wireless device to associate with a multicast group.
     */
    associateWirelessDevice?: string;
    /**
     * The description of the new resource.
     */
    description?: string;
    /**
     * The ID of the multicast group to disassociate from a FUOTA task.
     */
    disassociateMulticastGroup?: string;
    /**
     * The ID of the wireless device to disassociate from a FUOTA task.
     */
    disassociateWirelessDevice?: string;
    /**
     * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
     */
    firmwareUpdateImage: string;
    /**
     * The firmware update role that is to be used with a FUOTA task.
     */
    firmwareUpdateRole: string;
    /**
     * The LoRaWAN information used with a FUOTA task.
     */
    loRaWan: cdk.IResolvable | CfnFuotaTask.LoRaWANProperty;
    /**
     * The name of a FUOTA task.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFuotaTaskProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFuotaTask {
    /**
     * The LoRaWAN information used with a FUOTA task.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-fuotatask-lorawan.html
     */
    interface LoRaWANProperty {
        /**
         * The frequency band (RFRegion) value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-fuotatask-lorawan.html#cfn-iotwireless-fuotatask-lorawan-rfregion
         */
        readonly rfRegion: string;
        /**
         * Start time of a FUOTA task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-fuotatask-lorawan.html#cfn-iotwireless-fuotatask-lorawan-starttime
         */
        readonly startTime?: string;
    }
}
/**
 * Properties for defining a `CfnFuotaTask`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html
 */
export interface CfnFuotaTaskProps {
    /**
     * The ID of the multicast group to associate with a FUOTA task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-associatemulticastgroup
     */
    readonly associateMulticastGroup?: string;
    /**
     * The ID of the wireless device to associate with a multicast group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-associatewirelessdevice
     */
    readonly associateWirelessDevice?: string;
    /**
     * The description of the new resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-description
     */
    readonly description?: string;
    /**
     * The ID of the multicast group to disassociate from a FUOTA task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-disassociatemulticastgroup
     */
    readonly disassociateMulticastGroup?: string;
    /**
     * The ID of the wireless device to disassociate from a FUOTA task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-disassociatewirelessdevice
     */
    readonly disassociateWirelessDevice?: string;
    /**
     * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-firmwareupdateimage
     */
    readonly firmwareUpdateImage: string;
    /**
     * The firmware update role that is to be used with a FUOTA task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-firmwareupdaterole
     */
    readonly firmwareUpdateRole: string;
    /**
     * The LoRaWAN information used with a FUOTA task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-lorawan
     */
    readonly loRaWan: cdk.IResolvable | CfnFuotaTask.LoRaWANProperty;
    /**
     * The name of a FUOTA task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-name
     */
    readonly name?: string;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     *
     * Tags can have a minimum of 0 and a maximum of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-fuotatask.html#cfn-iotwireless-fuotatask-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * A multicast group.
 *
 * @cloudformationResource AWS::IoTWireless::MulticastGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html
 */
export declare class CfnMulticastGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMulticastGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMulticastGroup;
    /**
     * The ARN of the multicast group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the multicast group.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The number of devices that are associated to the multicast group.
     *
     * @cloudformationAttribute LoRaWAN.NumberOfDevicesInGroup
     */
    readonly attrLoRaWanNumberOfDevicesInGroup: number;
    /**
     * The number of devices that are requested to be associated with the multicast group.
     *
     * @cloudformationAttribute LoRaWAN.NumberOfDevicesRequested
     */
    readonly attrLoRaWanNumberOfDevicesRequested: number;
    /**
     * The status of a multicast group.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The ID of the wireless device to associate with a multicast group.
     */
    associateWirelessDevice?: string;
    /**
     * The description of the multicast group.
     */
    description?: string;
    /**
     * The ID of the wireless device to disassociate from a multicast group.
     */
    disassociateWirelessDevice?: string;
    /**
     * The LoRaWAN information that is to be used with the multicast group.
     */
    loRaWan: cdk.IResolvable | CfnMulticastGroup.LoRaWANProperty;
    /**
     * The name of the multicast group.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMulticastGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMulticastGroup {
    /**
     * The LoRaWAN information that is to be used with the multicast group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-multicastgroup-lorawan.html
     */
    interface LoRaWANProperty {
        /**
         * DlClass for LoRaWAN.
         *
         * Valid values are ClassB and ClassC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-multicastgroup-lorawan.html#cfn-iotwireless-multicastgroup-lorawan-dlclass
         */
        readonly dlClass: string;
        /**
         * Number of devices that are associated to the multicast group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-multicastgroup-lorawan.html#cfn-iotwireless-multicastgroup-lorawan-numberofdevicesingroup
         */
        readonly numberOfDevicesInGroup?: number;
        /**
         * Number of devices that are requested to be associated with the multicast group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-multicastgroup-lorawan.html#cfn-iotwireless-multicastgroup-lorawan-numberofdevicesrequested
         */
        readonly numberOfDevicesRequested?: number;
        /**
         * The frequency band (RFRegion) value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-multicastgroup-lorawan.html#cfn-iotwireless-multicastgroup-lorawan-rfregion
         */
        readonly rfRegion: string;
    }
}
/**
 * Properties for defining a `CfnMulticastGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html
 */
export interface CfnMulticastGroupProps {
    /**
     * The ID of the wireless device to associate with a multicast group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html#cfn-iotwireless-multicastgroup-associatewirelessdevice
     */
    readonly associateWirelessDevice?: string;
    /**
     * The description of the multicast group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html#cfn-iotwireless-multicastgroup-description
     */
    readonly description?: string;
    /**
     * The ID of the wireless device to disassociate from a multicast group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html#cfn-iotwireless-multicastgroup-disassociatewirelessdevice
     */
    readonly disassociateWirelessDevice?: string;
    /**
     * The LoRaWAN information that is to be used with the multicast group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html#cfn-iotwireless-multicastgroup-lorawan
     */
    readonly loRaWan: cdk.IResolvable | CfnMulticastGroup.LoRaWANProperty;
    /**
     * The name of the multicast group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html#cfn-iotwireless-multicastgroup-name
     */
    readonly name?: string;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     *
     * Tags can have a minimum of 0 and a maximum of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-multicastgroup.html#cfn-iotwireless-multicastgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Network analyzer configuration.
 *
 * @cloudformationResource AWS::IoTWireless::NetworkAnalyzerConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html
 */
export declare class CfnNetworkAnalyzerConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNetworkAnalyzerConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNetworkAnalyzerConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The description of the resource.
     */
    description?: string;
    /**
     * Name of the network analyzer configuration.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Trace content for your wireless gateway and wireless device resources.
     */
    traceContent?: any | cdk.IResolvable;
    /**
     * Wireless device resources to add to the network analyzer configuration.
     */
    wirelessDevices?: Array<string>;
    /**
     * Wireless gateway resources to add to the network analyzer configuration.
     */
    wirelessGateways?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNetworkAnalyzerConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnNetworkAnalyzerConfiguration {
    /**
     * Trace content for your wireless gateway and wireless device resources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-networkanalyzerconfiguration-tracecontent.html
     */
    interface TraceContentProperty {
        /**
         * The log level for a log message.
         *
         * The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-networkanalyzerconfiguration-tracecontent.html#cfn-iotwireless-networkanalyzerconfiguration-tracecontent-loglevel
         */
        readonly logLevel?: string;
        /**
         * `FrameInfo` of your wireless device resources for the trace content.
         *
         * Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-networkanalyzerconfiguration-tracecontent.html#cfn-iotwireless-networkanalyzerconfiguration-tracecontent-wirelessdeviceframeinfo
         */
        readonly wirelessDeviceFrameInfo?: string;
    }
}
/**
 * Properties for defining a `CfnNetworkAnalyzerConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html
 */
export interface CfnNetworkAnalyzerConfigurationProps {
    /**
     * The description of the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html#cfn-iotwireless-networkanalyzerconfiguration-description
     */
    readonly description?: string;
    /**
     * Name of the network analyzer configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html#cfn-iotwireless-networkanalyzerconfiguration-name
     */
    readonly name: string;
    /**
     * The tags to attach to the specified resource.
     *
     * Tags are metadata that you can use to manage a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html#cfn-iotwireless-networkanalyzerconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Trace content for your wireless gateway and wireless device resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html#cfn-iotwireless-networkanalyzerconfiguration-tracecontent
     */
    readonly traceContent?: any | cdk.IResolvable;
    /**
     * Wireless device resources to add to the network analyzer configuration.
     *
     * Provide the `WirelessDeviceId` of the resource to add in the input array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html#cfn-iotwireless-networkanalyzerconfiguration-wirelessdevices
     */
    readonly wirelessDevices?: Array<string>;
    /**
     * Wireless gateway resources to add to the network analyzer configuration.
     *
     * Provide the `WirelessGatewayId` of the resource to add in the input array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html#cfn-iotwireless-networkanalyzerconfiguration-wirelessgateways
     */
    readonly wirelessGateways?: Array<string>;
}
/**
 * A partner account.
 *
 * If `PartnerAccountId` and `PartnerType` are `null` , returns all partner accounts.
 *
 * @cloudformationResource AWS::IoTWireless::PartnerAccount
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html
 */
export declare class CfnPartnerAccount extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPartnerAccount from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPartnerAccount;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The fingerprint of the Sidewalk application server private key.
     *
     * @cloudformationAttribute Fingerprint
     */
    readonly attrFingerprint: string;
    /**
     * Whether the partner account is linked to the AWS account.
     */
    accountLinked?: boolean | cdk.IResolvable;
    /**
     * The ID of the partner account to update.
     */
    partnerAccountId?: string;
    /**
     * The partner type.
     */
    partnerType?: string;
    /**
     * The Sidewalk account credentials.
     */
    sidewalk?: cdk.IResolvable | CfnPartnerAccount.SidewalkAccountInfoProperty;
    /**
     * Information about a Sidewalk account.
     */
    sidewalkResponse?: cdk.IResolvable | CfnPartnerAccount.SidewalkAccountInfoWithFingerprintProperty;
    /**
     * Sidewalk update.
     */
    sidewalkUpdate?: cdk.IResolvable | CfnPartnerAccount.SidewalkUpdateAccountProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnPartnerAccountProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPartnerAccount {
    /**
     * Information about a Sidewalk account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint.html
     */
    interface SidewalkAccountInfoWithFingerprintProperty {
        /**
         * The Sidewalk Amazon ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint.html#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-amazonid
         */
        readonly amazonId?: string;
        /**
         * The Amazon Resource Name (ARN) of the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint.html#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-arn
         */
        readonly arn?: string;
        /**
         * The fingerprint of the Sidewalk application server private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint.html#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-fingerprint
         */
        readonly fingerprint?: string;
    }
    /**
     * Information about a Sidewalk account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfo.html
     */
    interface SidewalkAccountInfoProperty {
        /**
         * The Sidewalk application server private key.
         *
         * The application server private key is a secret key, which you should handle in a similar way as you would an application password. You can protect the application server private key by storing the value in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfo.html#cfn-iotwireless-partneraccount-sidewalkaccountinfo-appserverprivatekey
         */
        readonly appServerPrivateKey: string;
    }
    /**
     * Sidewalk update.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkupdateaccount.html
     */
    interface SidewalkUpdateAccountProperty {
        /**
         * The new Sidewalk application server private key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkupdateaccount.html#cfn-iotwireless-partneraccount-sidewalkupdateaccount-appserverprivatekey
         */
        readonly appServerPrivateKey?: string;
    }
}
/**
 * Properties for defining a `CfnPartnerAccount`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html
 */
export interface CfnPartnerAccountProps {
    /**
     * Whether the partner account is linked to the AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-accountlinked
     */
    readonly accountLinked?: boolean | cdk.IResolvable;
    /**
     * The ID of the partner account to update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-partneraccountid
     */
    readonly partnerAccountId?: string;
    /**
     * The partner type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-partnertype
     */
    readonly partnerType?: string;
    /**
     * The Sidewalk account credentials.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalk
     */
    readonly sidewalk?: cdk.IResolvable | CfnPartnerAccount.SidewalkAccountInfoProperty;
    /**
     * Information about a Sidewalk account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalkresponse
     */
    readonly sidewalkResponse?: cdk.IResolvable | CfnPartnerAccount.SidewalkAccountInfoWithFingerprintProperty;
    /**
     * Sidewalk update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalkupdate
     */
    readonly sidewalkUpdate?: cdk.IResolvable | CfnPartnerAccount.SidewalkUpdateAccountProperty;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     *
     * Tags can have a minimum of 0 and a maximum of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new service profile.
 *
 * @cloudformationResource AWS::IoTWireless::ServiceProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html
 */
export declare class CfnServiceProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServiceProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServiceProfile;
    /**
     * The ARN of the service profile created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the service profile created.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ChannelMask value.
     *
     * @cloudformationAttribute LoRaWAN.ChannelMask
     */
    readonly attrLoRaWanChannelMask: string;
    /**
     * The DevStatusReqFreq value.
     *
     * @cloudformationAttribute LoRaWAN.DevStatusReqFreq
     */
    readonly attrLoRaWanDevStatusReqFreq: number;
    /**
     * The DLBucketSize value.
     *
     * @cloudformationAttribute LoRaWAN.DlBucketSize
     */
    readonly attrLoRaWanDlBucketSize: number;
    /**
     * The DLRate value.
     *
     * @cloudformationAttribute LoRaWAN.DlRate
     */
    readonly attrLoRaWanDlRate: number;
    /**
     * The DLRatePolicy value.
     *
     * @cloudformationAttribute LoRaWAN.DlRatePolicy
     */
    readonly attrLoRaWanDlRatePolicy: string;
    /**
     * The DRMax value.
     *
     * @cloudformationAttribute LoRaWAN.DrMax
     */
    readonly attrLoRaWanDrMax: number;
    /**
     * The DRMin value.
     *
     * @cloudformationAttribute LoRaWAN.DrMin
     */
    readonly attrLoRaWanDrMin: number;
    /**
     * The HRAllowed value that describes whether handover roaming is allowed.
     *
     * @cloudformationAttribute LoRaWAN.HrAllowed
     */
    readonly attrLoRaWanHrAllowed: cdk.IResolvable;
    /**
     * The MinGwDiversity value.
     *
     * @cloudformationAttribute LoRaWAN.MinGwDiversity
     */
    readonly attrLoRaWanMinGwDiversity: number;
    /**
     * The NwkGeoLoc value.
     *
     * @cloudformationAttribute LoRaWAN.NwkGeoLoc
     */
    readonly attrLoRaWanNwkGeoLoc: cdk.IResolvable;
    /**
     * The ReportDevStatusBattery value.
     *
     * @cloudformationAttribute LoRaWAN.ReportDevStatusBattery
     */
    readonly attrLoRaWanReportDevStatusBattery: cdk.IResolvable;
    /**
     * The ReportDevStatusMargin value.
     *
     * @cloudformationAttribute LoRaWAN.ReportDevStatusMargin
     */
    readonly attrLoRaWanReportDevStatusMargin: cdk.IResolvable;
    /**
     * @cloudformationAttribute LoRaWANResponse
     */
    readonly attrLoRaWanResponse: cdk.IResolvable;
    /**
     * The TargetPer value.
     *
     * @cloudformationAttribute LoRaWAN.TargetPer
     */
    readonly attrLoRaWanTargetPer: number;
    /**
     * The UlBucketSize value.
     *
     * @cloudformationAttribute LoRaWAN.UlBucketSize
     */
    readonly attrLoRaWanUlBucketSize: number;
    /**
     * The ULRate value.
     *
     * @cloudformationAttribute LoRaWAN.UlRate
     */
    readonly attrLoRaWanUlRate: number;
    /**
     * The ULRatePolicy value.
     *
     * @cloudformationAttribute LoRaWAN.UlRatePolicy
     */
    readonly attrLoRaWanUlRatePolicy: string;
    /**
     * LoRaWAN service profile object.
     */
    loRaWan?: cdk.IResolvable | CfnServiceProfile.LoRaWANServiceProfileProperty;
    /**
     * The name of the new resource.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnServiceProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnServiceProfile {
    /**
     * LoRaWANServiceProfile object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html
     */
    interface LoRaWANServiceProfileProperty {
        /**
         * The AddGWMetaData value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-addgwmetadata
         */
        readonly addGwMetadata?: boolean | cdk.IResolvable;
        /**
         * The ChannelMask value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-channelmask
         */
        readonly channelMask?: string;
        /**
         * The DevStatusReqFreq value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-devstatusreqfreq
         */
        readonly devStatusReqFreq?: number;
        /**
         * The DLBucketSize value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-dlbucketsize
         */
        readonly dlBucketSize?: number;
        /**
         * The DLRate value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-dlrate
         */
        readonly dlRate?: number;
        /**
         * The DLRatePolicy value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-dlratepolicy
         */
        readonly dlRatePolicy?: string;
        /**
         * The DRMax value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-drmax
         */
        readonly drMax?: number;
        /**
         * The DRMin value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-drmin
         */
        readonly drMin?: number;
        /**
         * The HRAllowed value that describes whether handover roaming is allowed.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-hrallowed
         */
        readonly hrAllowed?: boolean | cdk.IResolvable;
        /**
         * The MinGwDiversity value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-mingwdiversity
         */
        readonly minGwDiversity?: number;
        /**
         * The NwkGeoLoc value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-nwkgeoloc
         */
        readonly nwkGeoLoc?: boolean | cdk.IResolvable;
        /**
         * The PRAllowed value that describes whether passive roaming is allowed.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-prallowed
         */
        readonly prAllowed?: boolean | cdk.IResolvable;
        /**
         * The RAAllowed value that describes whether roaming activation is allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-raallowed
         */
        readonly raAllowed?: boolean | cdk.IResolvable;
        /**
         * The ReportDevStatusBattery value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-reportdevstatusbattery
         */
        readonly reportDevStatusBattery?: boolean | cdk.IResolvable;
        /**
         * The ReportDevStatusMargin value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-reportdevstatusmargin
         */
        readonly reportDevStatusMargin?: boolean | cdk.IResolvable;
        /**
         * The TargetPer value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-targetper
         */
        readonly targetPer?: number;
        /**
         * The UlBucketSize value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-ulbucketsize
         */
        readonly ulBucketSize?: number;
        /**
         * The ULRate value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-ulrate
         */
        readonly ulRate?: number;
        /**
         * The ULRatePolicy value.
         *
         * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-ulratepolicy
         */
        readonly ulRatePolicy?: string;
    }
}
/**
 * Properties for defining a `CfnServiceProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html
 */
export interface CfnServiceProfileProps {
    /**
     * LoRaWAN service profile object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawan
     */
    readonly loRaWan?: cdk.IResolvable | CfnServiceProfile.LoRaWANServiceProfileProperty;
    /**
     * The name of the new resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-name
     */
    readonly name?: string;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     *
     * Tags can have a minimum of 0 and a maximum of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a gateway task definition.
 *
 * @cloudformationResource AWS::IoTWireless::TaskDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html
 */
export declare class CfnTaskDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTaskDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTaskDefinition;
    /**
     * The Amazon Resource Name of the resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the new wireless gateway task definition.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Whether to automatically create tasks using this task definition for all gateways with the specified current version.
     */
    autoCreateTasks: boolean | cdk.IResolvable;
    /**
     * LoRaWANUpdateGatewayTaskEntry object.
     */
    loRaWanUpdateGatewayTaskEntry?: cdk.IResolvable | CfnTaskDefinition.LoRaWANUpdateGatewayTaskEntryProperty;
    /**
     * The name of the new resource.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A filter to list only the wireless gateway task definitions that use this task definition type.
     */
    taskDefinitionType?: string;
    /**
     * Information about the gateways to update.
     */
    update?: cdk.IResolvable | CfnTaskDefinition.UpdateWirelessGatewayTaskCreateProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTaskDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTaskDefinition {
    /**
     * LoRaWANUpdateGatewayTaskEntry object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskentry.html
     */
    interface LoRaWANUpdateGatewayTaskEntryProperty {
        /**
         * The version of the gateways that should receive the update.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskentry.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskentry-currentversion
         */
        readonly currentVersion?: cdk.IResolvable | CfnTaskDefinition.LoRaWANGatewayVersionProperty;
        /**
         * The firmware version to update the gateway to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskentry.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskentry-updateversion
         */
        readonly updateVersion?: cdk.IResolvable | CfnTaskDefinition.LoRaWANGatewayVersionProperty;
    }
    /**
     * LoRaWANGatewayVersion object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html
     */
    interface LoRaWANGatewayVersionProperty {
        /**
         * The model number of the wireless gateway.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html#cfn-iotwireless-taskdefinition-lorawangatewayversion-model
         */
        readonly model?: string;
        /**
         * The version of the wireless gateway firmware.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html#cfn-iotwireless-taskdefinition-lorawangatewayversion-packageversion
         */
        readonly packageVersion?: string;
        /**
         * The basic station version of the wireless gateway.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html#cfn-iotwireless-taskdefinition-lorawangatewayversion-station
         */
        readonly station?: string;
    }
    /**
     * UpdateWirelessGatewayTaskCreate object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.html
     */
    interface UpdateWirelessGatewayTaskCreateProperty {
        /**
         * The properties that relate to the LoRaWAN wireless gateway.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.html#cfn-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate-lorawan
         */
        readonly loRaWan?: cdk.IResolvable | CfnTaskDefinition.LoRaWANUpdateGatewayTaskCreateProperty;
        /**
         * The IAM role used to read data from the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.html#cfn-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate-updatedatarole
         */
        readonly updateDataRole?: string;
        /**
         * The link to the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.html#cfn-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate-updatedatasource
         */
        readonly updateDataSource?: string;
    }
    /**
     * The signature used to verify the update firmware.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.html
     */
    interface LoRaWANUpdateGatewayTaskCreateProperty {
        /**
         * The version of the gateways that should receive the update.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-currentversion
         */
        readonly currentVersion?: cdk.IResolvable | CfnTaskDefinition.LoRaWANGatewayVersionProperty;
        /**
         * The CRC of the signature private key to check.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-sigkeycrc
         */
        readonly sigKeyCrc?: number;
        /**
         * The signature used to verify the update firmware.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updatesignature
         */
        readonly updateSignature?: string;
        /**
         * The firmware version to update the gateway to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updateversion
         */
        readonly updateVersion?: cdk.IResolvable | CfnTaskDefinition.LoRaWANGatewayVersionProperty;
    }
}
/**
 * Properties for defining a `CfnTaskDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html
 */
export interface CfnTaskDefinitionProps {
    /**
     * Whether to automatically create tasks using this task definition for all gateways with the specified current version.
     *
     * If `false` , the task must be created by calling `CreateWirelessGatewayTask` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-autocreatetasks
     */
    readonly autoCreateTasks: boolean | cdk.IResolvable;
    /**
     * LoRaWANUpdateGatewayTaskEntry object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskentry
     */
    readonly loRaWanUpdateGatewayTaskEntry?: cdk.IResolvable | CfnTaskDefinition.LoRaWANUpdateGatewayTaskEntryProperty;
    /**
     * The name of the new resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-name
     */
    readonly name?: string;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     *
     * Tags can have a minimum of 0 and a maximum of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A filter to list only the wireless gateway task definitions that use this task definition type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-taskdefinitiontype
     */
    readonly taskDefinitionType?: string;
    /**
     * Information about the gateways to update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-update
     */
    readonly update?: cdk.IResolvable | CfnTaskDefinition.UpdateWirelessGatewayTaskCreateProperty;
}
/**
 * Provisions a wireless device.
 *
 * @cloudformationResource AWS::IoTWireless::WirelessDevice
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html
 */
export declare class CfnWirelessDevice extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWirelessDevice from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWirelessDevice;
    /**
     * The ARN of the wireless device created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the wireless device created.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the thing associated with the wireless device. The value is empty if a thing isn't associated with the device.
     *
     * @cloudformationAttribute ThingName
     */
    readonly attrThingName: string;
    /**
     * The description of the new resource.
     */
    description?: string;
    /**
     * The name of the destination to assign to the new wireless device.
     */
    destinationName: string;
    /**
     * The date and time when the most recent uplink was received.
     */
    lastUplinkReceivedAt?: string;
    /**
     * The device configuration information to use to create the wireless device.
     */
    loRaWan?: cdk.IResolvable | CfnWirelessDevice.LoRaWANDeviceProperty;
    /**
     * The name of the new resource.
     */
    name?: string;
    /**
     * FPort values for the GNSS, Stream, and ClockSync functions of the positioning information.
     */
    positioning?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of the thing to associate with the wireless device.
     */
    thingArn?: string;
    /**
     * The wireless device type.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWirelessDeviceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWirelessDevice {
    /**
     * LoRaWAN object for create functions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html
     */
    interface LoRaWANDeviceProperty {
        /**
         * ABP device object for LoRaWAN specification v1.0.x.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html#cfn-iotwireless-wirelessdevice-lorawandevice-abpv10x
         */
        readonly abpV10X?: CfnWirelessDevice.AbpV10xProperty | cdk.IResolvable;
        /**
         * ABP device object for create APIs for v1.1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html#cfn-iotwireless-wirelessdevice-lorawandevice-abpv11
         */
        readonly abpV11?: CfnWirelessDevice.AbpV11Property | cdk.IResolvable;
        /**
         * The DevEUI value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html#cfn-iotwireless-wirelessdevice-lorawandevice-deveui
         */
        readonly devEui?: string;
        /**
         * The ID of the device profile for the new wireless device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html#cfn-iotwireless-wirelessdevice-lorawandevice-deviceprofileid
         */
        readonly deviceProfileId?: string;
        /**
         * List of FPort assigned for different LoRaWAN application packages to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html#cfn-iotwireless-wirelessdevice-lorawandevice-fports
         */
        readonly fPorts?: CfnWirelessDevice.FPortsProperty | cdk.IResolvable;
        /**
         * OTAA device object for create APIs for v1.0.x.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html#cfn-iotwireless-wirelessdevice-lorawandevice-otaav10x
         */
        readonly otaaV10X?: cdk.IResolvable | CfnWirelessDevice.OtaaV10xProperty;
        /**
         * OTAA device object for v1.1 for create APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html#cfn-iotwireless-wirelessdevice-lorawandevice-otaav11
         */
        readonly otaaV11?: cdk.IResolvable | CfnWirelessDevice.OtaaV11Property;
        /**
         * The ID of the service profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html#cfn-iotwireless-wirelessdevice-lorawandevice-serviceprofileid
         */
        readonly serviceProfileId?: string;
    }
    /**
     * ABP device object for LoRaWAN specification v1.0.x.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv10x.html
     */
    interface AbpV10xProperty {
        /**
         * The DevAddr value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv10x.html#cfn-iotwireless-wirelessdevice-abpv10x-devaddr
         */
        readonly devAddr: string;
        /**
         * Session keys for ABP v1.0.x.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv10x.html#cfn-iotwireless-wirelessdevice-abpv10x-sessionkeys
         */
        readonly sessionKeys: cdk.IResolvable | CfnWirelessDevice.SessionKeysAbpV10xProperty;
    }
    /**
     * Session keys for ABP v1.0.x.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv10x.html
     */
    interface SessionKeysAbpV10xProperty {
        /**
         * The AppSKey value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv10x.html#cfn-iotwireless-wirelessdevice-sessionkeysabpv10x-appskey
         */
        readonly appSKey: string;
        /**
         * The NwkKey value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv10x.html#cfn-iotwireless-wirelessdevice-sessionkeysabpv10x-nwkskey
         */
        readonly nwkSKey: string;
    }
    /**
     * OTAA device object for v1.1 for create APIs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav11.html
     */
    interface OtaaV11Property {
        /**
         * The AppKey is a secret key, which you should handle in a similar way as you would an application password.
         *
         * You can protect the AppKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav11.html#cfn-iotwireless-wirelessdevice-otaav11-appkey
         */
        readonly appKey: string;
        /**
         * The JoinEUI value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav11.html#cfn-iotwireless-wirelessdevice-otaav11-joineui
         */
        readonly joinEui: string;
        /**
         * The NwkKey is a secret key, which you should handle in a similar way as you would an application password.
         *
         * You can protect the NwkKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav11.html#cfn-iotwireless-wirelessdevice-otaav11-nwkkey
         */
        readonly nwkKey: string;
    }
    /**
     * ABP device object for create APIs for v1.1.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv11.html
     */
    interface AbpV11Property {
        /**
         * The DevAddr value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv11.html#cfn-iotwireless-wirelessdevice-abpv11-devaddr
         */
        readonly devAddr: string;
        /**
         * Session keys for ABP v1.1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv11.html#cfn-iotwireless-wirelessdevice-abpv11-sessionkeys
         */
        readonly sessionKeys: cdk.IResolvable | CfnWirelessDevice.SessionKeysAbpV11Property;
    }
    /**
     * Session keys for ABP v1.1.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv11.html
     */
    interface SessionKeysAbpV11Property {
        /**
         * The AppSKey is a secret key, which you should handle in a similar way as you would an application password.
         *
         * You can protect the AppSKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv11.html#cfn-iotwireless-wirelessdevice-sessionkeysabpv11-appskey
         */
        readonly appSKey: string;
        /**
         * The FNwkSIntKey is a secret key, which you should handle in a similar way as you would an application password.
         *
         * You can protect the FNwkSIntKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv11.html#cfn-iotwireless-wirelessdevice-sessionkeysabpv11-fnwksintkey
         */
        readonly fNwkSIntKey: string;
        /**
         * The NwkSEncKey is a secret key, which you should handle in a similar way as you would an application password.
         *
         * You can protect the NwkSEncKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv11.html#cfn-iotwireless-wirelessdevice-sessionkeysabpv11-nwksenckey
         */
        readonly nwkSEncKey: string;
        /**
         * The SNwkSIntKey is a secret key, which you should handle in a similar way as you would an application password.
         *
         * You can protect the SNwkSIntKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv11.html#cfn-iotwireless-wirelessdevice-sessionkeysabpv11-snwksintkey
         */
        readonly sNwkSIntKey: string;
    }
    /**
     * OTAA device object for v1.0.x.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav10x.html
     */
    interface OtaaV10xProperty {
        /**
         * The AppEUI value.
         *
         * You specify this value when using LoRaWAN versions v1.0.2 or v1.0.3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav10x.html#cfn-iotwireless-wirelessdevice-otaav10x-appeui
         */
        readonly appEui: string;
        /**
         * The AppKey value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav10x.html#cfn-iotwireless-wirelessdevice-otaav10x-appkey
         */
        readonly appKey: string;
    }
    /**
     * List of FPorts assigned for different LoRaWAN application packages to use.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-fports.html
     */
    interface FPortsProperty {
        /**
         * LoRaWAN application configuration, which can be used to perform geolocation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-fports.html#cfn-iotwireless-wirelessdevice-fports-applications
         */
        readonly applications?: Array<CfnWirelessDevice.ApplicationProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A list of optional LoRaWAN application information, which can be used for geolocation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-application.html
     */
    interface ApplicationProperty {
        /**
         * The name of the position data destination that describes the IoT rule that processes the device's position data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-application.html#cfn-iotwireless-wirelessdevice-application-destinationname
         */
        readonly destinationName?: string;
        /**
         * The name of the new destination for the device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-application.html#cfn-iotwireless-wirelessdevice-application-fport
         */
        readonly fPort?: number;
        /**
         * Application type, which can be specified to obtain real-time position information of your LoRaWAN device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-application.html#cfn-iotwireless-wirelessdevice-application-type
         */
        readonly type?: string;
    }
}
/**
 * Properties for defining a `CfnWirelessDevice`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html
 */
export interface CfnWirelessDeviceProps {
    /**
     * The description of the new resource.
     *
     * Maximum length is 2048.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html#cfn-iotwireless-wirelessdevice-description
     */
    readonly description?: string;
    /**
     * The name of the destination to assign to the new wireless device.
     *
     * Can have only have alphanumeric, - (hyphen) and _ (underscore) characters and it can't have any spaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html#cfn-iotwireless-wirelessdevice-destinationname
     */
    readonly destinationName: string;
    /**
     * The date and time when the most recent uplink was received.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html#cfn-iotwireless-wirelessdevice-lastuplinkreceivedat
     */
    readonly lastUplinkReceivedAt?: string;
    /**
     * The device configuration information to use to create the wireless device.
     *
     * Must be at least one of OtaaV10x, OtaaV11, AbpV11, or AbpV10x.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html#cfn-iotwireless-wirelessdevice-lorawan
     */
    readonly loRaWan?: cdk.IResolvable | CfnWirelessDevice.LoRaWANDeviceProperty;
    /**
     * The name of the new resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html#cfn-iotwireless-wirelessdevice-name
     */
    readonly name?: string;
    /**
     * FPort values for the GNSS, Stream, and ClockSync functions of the positioning information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html#cfn-iotwireless-wirelessdevice-positioning
     */
    readonly positioning?: string;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     *
     * Tags can have a minimum of 0 and a maximum of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html#cfn-iotwireless-wirelessdevice-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the thing to associate with the wireless device.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html#cfn-iotwireless-wirelessdevice-thingarn
     */
    readonly thingArn?: string;
    /**
     * The wireless device type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html#cfn-iotwireless-wirelessdevice-type
     */
    readonly type: string;
}
/**
 * Information about an import task for wireless devices.
 *
 * When creating the resource, either create a single wireless device import task using the Sidewalk manufacturing serial number (SMSN) of the wireless device, or create an import task for multiple devices by specifying both the `DeviceCreationFile` and the `Role` .
 *
 * @cloudformationResource AWS::IoTWireless::WirelessDeviceImportTask
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html
 */
export declare class CfnWirelessDeviceImportTask extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWirelessDeviceImportTask from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWirelessDeviceImportTask;
    /**
     * The ARN (Amazon Resource Name) of the import task.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time at which the wireless device import task was created.
     *
     * @cloudformationAttribute CreationDate
     */
    readonly attrCreationDate: string;
    /**
     * The summary information of count of wireless devices that failed to onboard to the import task.
     *
     * @cloudformationAttribute FailedImportedDevicesCount
     */
    readonly attrFailedImportedDevicesCount: number;
    /**
     * The import task ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The summary information of count of wireless devices that are waiting for the control log to be added to an import task.
     *
     * @cloudformationAttribute InitializedImportedDevicesCount
     */
    readonly attrInitializedImportedDevicesCount: number;
    /**
     * The summary information of count of wireless devices that have been onboarded to the import task.
     *
     * @cloudformationAttribute OnboardedImportedDevicesCount
     */
    readonly attrOnboardedImportedDevicesCount: number;
    /**
     * The summary information of count of wireless devices that are waiting in the queue to be onboarded to the import task.
     *
     * @cloudformationAttribute PendingImportedDevicesCount
     */
    readonly attrPendingImportedDevicesCount: number;
    /**
     * List of Sidewalk devices that are added to the import task.
     *
     * @cloudformationAttribute Sidewalk.DeviceCreationFileList
     */
    readonly attrSidewalkDeviceCreationFileList: Array<string>;
    /**
     * The status of a wireless device import task. The status can be `INITIALIZING` , `INITIALIZED` , `PENDING` , `COMPLETE` , `FAILED` , or `DELETING` .
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The reason that provides additional information about the import task status.
     *
     * @cloudformationAttribute StatusReason
     */
    readonly attrStatusReason: string;
    /**
     * The name of the destination that describes the IoT rule to route messages from the Sidewalk devices in the import task to other applications.
     */
    destinationName: string;
    /**
     * The Sidewalk-related information of the wireless device import task.
     */
    sidewalk: cdk.IResolvable | CfnWirelessDeviceImportTask.SidewalkProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Adds to or modifies the tags of the given resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWirelessDeviceImportTaskProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWirelessDeviceImportTask {
    /**
     * Sidewalk-related information about a wireless device import task.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdeviceimporttask-sidewalk.html
     */
    interface SidewalkProperty {
        /**
         * The CSV file contained in an S3 bucket that's used for adding devices to an import task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdeviceimporttask-sidewalk.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk-devicecreationfile
         */
        readonly deviceCreationFile?: string;
        /**
         * List of Sidewalk devices that are added to the import task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdeviceimporttask-sidewalk.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk-devicecreationfilelist
         */
        readonly deviceCreationFileList?: Array<string>;
        /**
         * The IAM role that allows  to access the CSV file in the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdeviceimporttask-sidewalk.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk-role
         */
        readonly role?: string;
        /**
         * The Sidewalk manufacturing serial number (SMSN) of the Sidewalk device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdeviceimporttask-sidewalk.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk-sidewalkmanufacturingsn
         */
        readonly sidewalkManufacturingSn?: string;
    }
}
/**
 * Properties for defining a `CfnWirelessDeviceImportTask`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html
 */
export interface CfnWirelessDeviceImportTaskProps {
    /**
     * The name of the destination that describes the IoT rule to route messages from the Sidewalk devices in the import task to other applications.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-destinationname
     */
    readonly destinationName: string;
    /**
     * The Sidewalk-related information of the wireless device import task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk
     */
    readonly sidewalk: cdk.IResolvable | CfnWirelessDeviceImportTask.SidewalkProperty;
    /**
     * Adds to or modifies the tags of the given resource.
     *
     * Tags are metadata that you can use to manage a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Provisions a wireless gateway.
 *
 * @cloudformationResource AWS::IoTWireless::WirelessGateway
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html
 */
export declare class CfnWirelessGateway extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWirelessGateway from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWirelessGateway;
    /**
     * The ARN of the wireless gateway created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the wireless gateway created.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The description of the new resource.
     */
    description?: string;
    /**
     * The date and time when the most recent uplink was received.
     */
    lastUplinkReceivedAt?: string;
    /**
     * The gateway configuration information to use to create the wireless gateway.
     */
    loRaWan: cdk.IResolvable | CfnWirelessGateway.LoRaWANGatewayProperty;
    /**
     * The name of the new resource.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of the thing to associate with the wireless gateway.
     */
    thingArn?: string;
    /**
     * The name of the thing associated with the wireless gateway.
     */
    thingName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWirelessGatewayProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWirelessGateway {
    /**
     * LoRaWAN wireless gateway object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessgateway-lorawangateway.html
     */
    interface LoRaWANGatewayProperty {
        /**
         * The gateway's EUI value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessgateway-lorawangateway.html#cfn-iotwireless-wirelessgateway-lorawangateway-gatewayeui
         */
        readonly gatewayEui: string;
        /**
         * The frequency band (RFRegion) value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessgateway-lorawangateway.html#cfn-iotwireless-wirelessgateway-lorawangateway-rfregion
         */
        readonly rfRegion: string;
    }
}
/**
 * Properties for defining a `CfnWirelessGateway`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html
 */
export interface CfnWirelessGatewayProps {
    /**
     * The description of the new resource.
     *
     * The maximum length is 2048 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html#cfn-iotwireless-wirelessgateway-description
     */
    readonly description?: string;
    /**
     * The date and time when the most recent uplink was received.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html#cfn-iotwireless-wirelessgateway-lastuplinkreceivedat
     */
    readonly lastUplinkReceivedAt?: string;
    /**
     * The gateway configuration information to use to create the wireless gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html#cfn-iotwireless-wirelessgateway-lorawan
     */
    readonly loRaWan: cdk.IResolvable | CfnWirelessGateway.LoRaWANGatewayProperty;
    /**
     * The name of the new resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html#cfn-iotwireless-wirelessgateway-name
     */
    readonly name?: string;
    /**
     * The tags are an array of key-value pairs to attach to the specified resource.
     *
     * Tags can have a minimum of 0 and a maximum of 50 items.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html#cfn-iotwireless-wirelessgateway-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the thing to associate with the wireless gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html#cfn-iotwireless-wirelessgateway-thingarn
     */
    readonly thingArn?: string;
    /**
     * The name of the thing associated with the wireless gateway.
     *
     * The value is empty if a thing isn't associated with the gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessgateway.html#cfn-iotwireless-wirelessgateway-thingname
     */
    readonly thingName?: string;
}
