import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a `Config` with the specified parameters.
 *
 * Config objects provide Ground Station with the details necessary in order to schedule and execute satellite contacts.
 *
 * @cloudformationResource AWS::GroundStation::Config
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html
 */
export declare class CfnConfig extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfig;
    /**
     * The ARN of the config, such as `arn:aws:groundstation:us-east-2:1234567890:config/tracking/9940bf3b-d2ba-427e-9906-842b5e5d2296` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the config, such as `9940bf3b-d2ba-427e-9906-842b5e5d2296` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The type of the config, such as `tracking` .
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    /**
     * Object containing the parameters of a config.
     */
    configData: CfnConfig.ConfigDataProperty | cdk.IResolvable;
    /**
     * The name of the config object.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags assigned to a resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfig {
    /**
     * Config objects provide information to Ground Station about how to configure the antenna and how data flows during a contact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html
     */
    interface ConfigDataProperty {
        /**
         * Provides information for an antenna downlink config object.
         *
         * Antenna downlink config objects are used to provide parameters for downlinks where no demodulation or decoding is performed by Ground Station (RF over IP downlinks).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html#cfn-groundstation-config-configdata-antennadownlinkconfig
         */
        readonly antennaDownlinkConfig?: CfnConfig.AntennaDownlinkConfigProperty | cdk.IResolvable;
        /**
         * Provides information for a downlink demod decode config object.
         *
         * Downlink demod decode config objects are used to provide parameters for downlinks where the Ground Station service will demodulate and decode the downlinked data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html#cfn-groundstation-config-configdata-antennadownlinkdemoddecodeconfig
         */
        readonly antennaDownlinkDemodDecodeConfig?: CfnConfig.AntennaDownlinkDemodDecodeConfigProperty | cdk.IResolvable;
        /**
         * Provides information for an uplink config object.
         *
         * Uplink config objects are used to provide parameters for uplink contacts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html#cfn-groundstation-config-configdata-antennauplinkconfig
         */
        readonly antennaUplinkConfig?: CfnConfig.AntennaUplinkConfigProperty | cdk.IResolvable;
        /**
         * Provides information for a dataflow endpoint config object.
         *
         * Dataflow endpoint config objects are used to provide parameters about which IP endpoint(s) to use during a contact. Dataflow endpoints are where Ground Station sends data during a downlink contact and where Ground Station receives data to send to the satellite during an uplink contact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html#cfn-groundstation-config-configdata-dataflowendpointconfig
         */
        readonly dataflowEndpointConfig?: CfnConfig.DataflowEndpointConfigProperty | cdk.IResolvable;
        /**
         * Provides information for an S3 recording config object.
         *
         * S3 recording config objects are used to provide parameters for S3 recording during downlink contacts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html#cfn-groundstation-config-configdata-s3recordingconfig
         */
        readonly s3RecordingConfig?: cdk.IResolvable | CfnConfig.S3RecordingConfigProperty;
        /**
         * Provides information for a tracking config object.
         *
         * Tracking config objects are used to provide parameters about how to track the satellite through the sky during a contact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html#cfn-groundstation-config-configdata-trackingconfig
         */
        readonly trackingConfig?: cdk.IResolvable | CfnConfig.TrackingConfigProperty;
        /**
         * Provides information for an uplink echo config object.
         *
         * Uplink echo config objects are used to provide parameters for uplink echo during uplink contacts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html#cfn-groundstation-config-configdata-uplinkechoconfig
         */
        readonly uplinkEchoConfig?: cdk.IResolvable | CfnConfig.UplinkEchoConfigProperty;
    }
    /**
     * Provides information to AWS Ground Station about which IP endpoints to use during a contact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-dataflowendpointconfig.html
     */
    interface DataflowEndpointConfigProperty {
        /**
         * The name of the dataflow endpoint to use during contacts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-dataflowendpointconfig.html#cfn-groundstation-config-dataflowendpointconfig-dataflowendpointname
         */
        readonly dataflowEndpointName?: string;
        /**
         * The region of the dataflow endpoint to use during contacts.
         *
         * When omitted, Ground Station will use the region of the contact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-dataflowendpointconfig.html#cfn-groundstation-config-dataflowendpointconfig-dataflowendpointregion
         */
        readonly dataflowEndpointRegion?: string;
    }
    /**
     * Provides information about how AWS Ground Station should echo back uplink transmissions to a dataflow endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkechoconfig.html
     */
    interface UplinkEchoConfigProperty {
        /**
         * Defines the ARN of the uplink config to echo back to a dataflow endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkechoconfig.html#cfn-groundstation-config-uplinkechoconfig-antennauplinkconfigarn
         */
        readonly antennaUplinkConfigArn?: string;
        /**
         * Whether or not uplink echo is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkechoconfig.html#cfn-groundstation-config-uplinkechoconfig-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * Provides information about how AWS Ground Station should configure an antenna for downlink during a contact.
     *
     * Use an antenna downlink config in a mission profile to receive the downlink data in raw DigIF format.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkconfig.html
     */
    interface AntennaDownlinkConfigProperty {
        /**
         * Defines the spectrum configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkconfig.html#cfn-groundstation-config-antennadownlinkconfig-spectrumconfig
         */
        readonly spectrumConfig?: cdk.IResolvable | CfnConfig.SpectrumConfigProperty;
    }
    /**
     * Defines a spectrum.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-spectrumconfig.html
     */
    interface SpectrumConfigProperty {
        /**
         * The bandwidth of the spectrum. AWS Ground Station currently has the following bandwidth limitations:.
         *
         * - For `AntennaDownlinkDemodDecodeconfig` , valid values are between 125 kHz to 650 MHz.
         * - For `AntennaDownlinkconfig` , valid values are between 10 kHz to 54 MHz.
         * - For `AntennaUplinkConfig` , valid values are between 10 kHz to 54 MHz.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-spectrumconfig.html#cfn-groundstation-config-spectrumconfig-bandwidth
         */
        readonly bandwidth?: CfnConfig.FrequencyBandwidthProperty | cdk.IResolvable;
        /**
         * The center frequency of the spectrum.
         *
         * Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-spectrumconfig.html#cfn-groundstation-config-spectrumconfig-centerfrequency
         */
        readonly centerFrequency?: CfnConfig.FrequencyProperty | cdk.IResolvable;
        /**
         * The polarization of the spectrum.
         *
         * Valid values are `"RIGHT_HAND"` and `"LEFT_HAND"` . Capturing both `"RIGHT_HAND"` and `"LEFT_HAND"` polarization requires two separate configs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-spectrumconfig.html#cfn-groundstation-config-spectrumconfig-polarization
         */
        readonly polarization?: string;
    }
    /**
     * Defines a bandwidth.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequencybandwidth.html
     */
    interface FrequencyBandwidthProperty {
        /**
         * The units of the bandwidth.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequencybandwidth.html#cfn-groundstation-config-frequencybandwidth-units
         */
        readonly units?: string;
        /**
         * The value of the bandwidth. AWS Ground Station currently has the following bandwidth limitations:.
         *
         * - For `AntennaDownlinkDemodDecodeconfig` , valid values are between 125 kHz to 650 MHz.
         * - For `AntennaDownlinkconfig` , valid values are between 10 kHz to 54 MHz.
         * - For `AntennaUplinkConfig` , valid values are between 10 kHz to 54 MHz.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequencybandwidth.html#cfn-groundstation-config-frequencybandwidth-value
         */
        readonly value?: number;
    }
    /**
     * Defines a frequency.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequency.html
     */
    interface FrequencyProperty {
        /**
         * The units of the frequency.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequency.html#cfn-groundstation-config-frequency-units
         */
        readonly units?: string;
        /**
         * The value of the frequency.
         *
         * Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequency.html#cfn-groundstation-config-frequency-value
         */
        readonly value?: number;
    }
    /**
     * Provides information about how AWS Ground Station should configure an antenna for downlink during a contact.
     *
     * Use an antenna downlink demod decode config in a mission profile to receive the downlink data that has been demodulated and decoded.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkdemoddecodeconfig.html
     */
    interface AntennaDownlinkDemodDecodeConfigProperty {
        /**
         * Defines how the RF signal will be decoded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkdemoddecodeconfig.html#cfn-groundstation-config-antennadownlinkdemoddecodeconfig-decodeconfig
         */
        readonly decodeConfig?: CfnConfig.DecodeConfigProperty | cdk.IResolvable;
        /**
         * Defines how the RF signal will be demodulated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkdemoddecodeconfig.html#cfn-groundstation-config-antennadownlinkdemoddecodeconfig-demodulationconfig
         */
        readonly demodulationConfig?: CfnConfig.DemodulationConfigProperty | cdk.IResolvable;
        /**
         * Defines the spectrum configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkdemoddecodeconfig.html#cfn-groundstation-config-antennadownlinkdemoddecodeconfig-spectrumconfig
         */
        readonly spectrumConfig?: cdk.IResolvable | CfnConfig.SpectrumConfigProperty;
    }
    /**
     * Defines demodulation settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-demodulationconfig.html
     */
    interface DemodulationConfigProperty {
        /**
         * The demodulation settings are in JSON format and define parameters for demodulation, for example which modulation scheme (e.g. PSK, QPSK, etc.) and matched filter to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-demodulationconfig.html#cfn-groundstation-config-demodulationconfig-unvalidatedjson
         */
        readonly unvalidatedJson?: string;
    }
    /**
     * Defines decoding settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-decodeconfig.html
     */
    interface DecodeConfigProperty {
        /**
         * The decoding settings are in JSON format and define a set of steps to perform to decode the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-decodeconfig.html#cfn-groundstation-config-decodeconfig-unvalidatedjson
         */
        readonly unvalidatedJson?: string;
    }
    /**
     * Provides information about how AWS Ground Station should track the satellite through the sky during a contact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-trackingconfig.html
     */
    interface TrackingConfigProperty {
        /**
         * Specifies whether or not to use autotrack.
         *
         * `REMOVED` specifies that program track should only be used during the contact. `PREFERRED` specifies that autotracking is preferred during the contact but fallback to program track if the signal is lost. `REQUIRED` specifies that autotracking is required during the contact and not to use program track if the signal is lost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-trackingconfig.html#cfn-groundstation-config-trackingconfig-autotrack
         */
        readonly autotrack?: string;
    }
    /**
     * Provides information about how AWS Ground Station should configure an antenna for uplink during a contact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennauplinkconfig.html
     */
    interface AntennaUplinkConfigProperty {
        /**
         * Defines the spectrum configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennauplinkconfig.html#cfn-groundstation-config-antennauplinkconfig-spectrumconfig
         */
        readonly spectrumConfig?: cdk.IResolvable | CfnConfig.UplinkSpectrumConfigProperty;
        /**
         * The equivalent isotropically radiated power (EIRP) to use for uplink transmissions.
         *
         * Valid values are between 20.0 to 50.0 dBW.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennauplinkconfig.html#cfn-groundstation-config-antennauplinkconfig-targeteirp
         */
        readonly targetEirp?: CfnConfig.EirpProperty | cdk.IResolvable;
        /**
         * Whether or not uplink transmit is disabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennauplinkconfig.html#cfn-groundstation-config-antennauplinkconfig-transmitdisabled
         */
        readonly transmitDisabled?: boolean | cdk.IResolvable;
    }
    /**
     * Defines a uplink spectrum.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkspectrumconfig.html
     */
    interface UplinkSpectrumConfigProperty {
        /**
         * The center frequency of the spectrum.
         *
         * Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkspectrumconfig.html#cfn-groundstation-config-uplinkspectrumconfig-centerfrequency
         */
        readonly centerFrequency?: CfnConfig.FrequencyProperty | cdk.IResolvable;
        /**
         * The polarization of the spectrum.
         *
         * Valid values are `"RIGHT_HAND"` and `"LEFT_HAND"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkspectrumconfig.html#cfn-groundstation-config-uplinkspectrumconfig-polarization
         */
        readonly polarization?: string;
    }
    /**
     * Defines an equivalent isotropically radiated power (EIRP).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-eirp.html
     */
    interface EirpProperty {
        /**
         * The units of the EIRP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-eirp.html#cfn-groundstation-config-eirp-units
         */
        readonly units?: string;
        /**
         * The value of the EIRP.
         *
         * Valid values are between 20.0 to 50.0 dBW.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-eirp.html#cfn-groundstation-config-eirp-value
         */
        readonly value?: number;
    }
    /**
     * Provides information about how AWS Ground Station should save downlink data to S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-s3recordingconfig.html
     */
    interface S3RecordingConfigProperty {
        /**
         * S3 Bucket where the data is written.
         *
         * The name of the S3 Bucket provided must begin with `aws-groundstation` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-s3recordingconfig.html#cfn-groundstation-config-s3recordingconfig-bucketarn
         */
        readonly bucketArn?: string;
        /**
         * The prefix of the S3 data object.
         *
         * If you choose to use any optional keys for substitution, these values will be replaced with the corresponding information from your contact details. For example, a prefix of `{satellite_id}/{year}/{month}/{day}/` will replaced with `fake_satellite_id/2021/01/10/`
         *
         * *Optional keys for substitution* : `{satellite_id}` | `{config-name}` | `{config-id}` | `{year}` | `{month}` | `{day}`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-s3recordingconfig.html#cfn-groundstation-config-s3recordingconfig-prefix
         */
        readonly prefix?: string;
        /**
         * Defines the ARN of the role assumed for putting archives to S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-s3recordingconfig.html#cfn-groundstation-config-s3recordingconfig-rolearn
         */
        readonly roleArn?: string;
    }
}
/**
 * Properties for defining a `CfnConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html
 */
export interface CfnConfigProps {
    /**
     * Object containing the parameters of a config.
     *
     * Only one subtype may be specified per config. See the subtype definitions for a description of each config subtype.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-configdata
     */
    readonly configData: CfnConfig.ConfigDataProperty | cdk.IResolvable;
    /**
     * The name of the config object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-name
     */
    readonly name: string;
    /**
     * Tags assigned to a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a Dataflow Endpoint Group request.
 *
 * Dataflow endpoint groups contain a list of endpoints. When the name of a dataflow endpoint group is specified in a mission profile, the Ground Station service will connect to the endpoints and flow data during a contact.
 *
 * For more information about dataflow endpoint groups, see [Dataflow Endpoint Groups](https://docs.aws.amazon.com/ground-station/latest/ug/dataflowendpointgroups.html) .
 *
 * @cloudformationResource AWS::GroundStation::DataflowEndpointGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html
 */
export declare class CfnDataflowEndpointGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataflowEndpointGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataflowEndpointGroup;
    /**
     * The ARN of the dataflow endpoint group, such as `arn:aws:groundstation:us-east-2:1234567890:dataflow-endpoint-group/9940bf3b-d2ba-427e-9906-842b5e5d2296` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * UUID of a dataflow endpoint group.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a `POSTPASS` state.
     */
    contactPostPassDurationSeconds?: number;
    /**
     * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a `PREPASS` state.
     */
    contactPrePassDurationSeconds?: number;
    /**
     * List of Endpoint Details, containing address and port for each endpoint.
     */
    endpointDetails: Array<CfnDataflowEndpointGroup.EndpointDetailsProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags assigned to a resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataflowEndpointGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataflowEndpointGroup {
    /**
     * The security details and endpoint information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-endpointdetails.html
     */
    interface EndpointDetailsProperty {
        /**
         * An agent endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-endpointdetails.html#cfn-groundstation-dataflowendpointgroup-endpointdetails-awsgroundstationagentendpoint
         */
        readonly awsGroundStationAgentEndpoint?: CfnDataflowEndpointGroup.AwsGroundStationAgentEndpointProperty | cdk.IResolvable;
        /**
         * Information about the endpoint such as name and the endpoint address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-endpointdetails.html#cfn-groundstation-dataflowendpointgroup-endpointdetails-endpoint
         */
        readonly endpoint?: CfnDataflowEndpointGroup.DataflowEndpointProperty | cdk.IResolvable;
        /**
         * The role ARN, and IDs for security groups and subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-endpointdetails.html#cfn-groundstation-dataflowendpointgroup-endpointdetails-securitydetails
         */
        readonly securityDetails?: cdk.IResolvable | CfnDataflowEndpointGroup.SecurityDetailsProperty;
    }
    /**
     * Contains information such as socket address and name that defines an endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-dataflowendpoint.html
     */
    interface DataflowEndpointProperty {
        /**
         * The address and port of an endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-dataflowendpoint.html#cfn-groundstation-dataflowendpointgroup-dataflowendpoint-address
         */
        readonly address?: cdk.IResolvable | CfnDataflowEndpointGroup.SocketAddressProperty;
        /**
         * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
         *
         * Valid values are between 1400 and 1500. A default value of 1500 is used if not set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-dataflowendpoint.html#cfn-groundstation-dataflowendpointgroup-dataflowendpoint-mtu
         */
        readonly mtu?: number;
        /**
         * The endpoint name.
         *
         * When listing available contacts for a satellite, Ground Station searches for a dataflow endpoint whose name matches the value specified by the dataflow endpoint config of the selected mission profile. If no matching dataflow endpoints are found then Ground Station will not display any available contacts for the satellite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-dataflowendpoint.html#cfn-groundstation-dataflowendpointgroup-dataflowendpoint-name
         */
        readonly name?: string;
    }
    /**
     * The address of the endpoint, such as `192.168.1.1` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-socketaddress.html
     */
    interface SocketAddressProperty {
        /**
         * The name of the endpoint, such as `Endpoint 1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-socketaddress.html#cfn-groundstation-dataflowendpointgroup-socketaddress-name
         */
        readonly name?: string;
        /**
         * The port of the endpoint, such as `55888` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-socketaddress.html#cfn-groundstation-dataflowendpointgroup-socketaddress-port
         */
        readonly port?: number;
    }
    /**
     * Information about AwsGroundStationAgentEndpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html
     */
    interface AwsGroundStationAgentEndpointProperty {
        /**
         * The status of AgentEndpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-agentstatus
         */
        readonly agentStatus?: string;
        /**
         * The results of the audit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-auditresults
         */
        readonly auditResults?: string;
        /**
         * The egress address of AgentEndpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-egressaddress
         */
        readonly egressAddress?: CfnDataflowEndpointGroup.ConnectionDetailsProperty | cdk.IResolvable;
        /**
         * The ingress address of AgentEndpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-ingressaddress
         */
        readonly ingressAddress?: cdk.IResolvable | CfnDataflowEndpointGroup.RangedConnectionDetailsProperty;
        /**
         * Name string associated with AgentEndpoint.
         *
         * Used as a human-readable identifier for AgentEndpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-name
         */
        readonly name?: string;
    }
    /**
     * Ingress address of AgentEndpoint with a port range and an optional mtu.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedconnectiondetails.html
     */
    interface RangedConnectionDetailsProperty {
        /**
         * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedconnectiondetails.html#cfn-groundstation-dataflowendpointgroup-rangedconnectiondetails-mtu
         */
        readonly mtu?: number;
        /**
         * A ranged socket address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedconnectiondetails.html#cfn-groundstation-dataflowendpointgroup-rangedconnectiondetails-socketaddress
         */
        readonly socketAddress?: cdk.IResolvable | CfnDataflowEndpointGroup.RangedSocketAddressProperty;
    }
    /**
     * A socket address with a port range.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedsocketaddress.html
     */
    interface RangedSocketAddressProperty {
        /**
         * IPv4 socket address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedsocketaddress.html#cfn-groundstation-dataflowendpointgroup-rangedsocketaddress-name
         */
        readonly name?: string;
        /**
         * Port range of a socket address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedsocketaddress.html#cfn-groundstation-dataflowendpointgroup-rangedsocketaddress-portrange
         */
        readonly portRange?: CfnDataflowEndpointGroup.IntegerRangeProperty | cdk.IResolvable;
    }
    /**
     * An integer range that has a minimum and maximum value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-integerrange.html
     */
    interface IntegerRangeProperty {
        /**
         * A maximum value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-integerrange.html#cfn-groundstation-dataflowendpointgroup-integerrange-maximum
         */
        readonly maximum?: number;
        /**
         * A minimum value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-integerrange.html#cfn-groundstation-dataflowendpointgroup-integerrange-minimum
         */
        readonly minimum?: number;
    }
    /**
     * Egress address of AgentEndpoint with an optional mtu.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-connectiondetails.html
     */
    interface ConnectionDetailsProperty {
        /**
         * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-connectiondetails.html#cfn-groundstation-dataflowendpointgroup-connectiondetails-mtu
         */
        readonly mtu?: number;
        /**
         * A socket address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-connectiondetails.html#cfn-groundstation-dataflowendpointgroup-connectiondetails-socketaddress
         */
        readonly socketAddress?: cdk.IResolvable | CfnDataflowEndpointGroup.SocketAddressProperty;
    }
    /**
     * Information about IAM roles, subnets, and security groups needed for this DataflowEndpointGroup.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-securitydetails.html
     */
    interface SecurityDetailsProperty {
        /**
         * The ARN of a role which Ground Station has permission to assume, such as `arn:aws:iam::1234567890:role/DataDeliveryServiceRole` .
         *
         * Ground Station will assume this role and create an ENI in your VPC on the specified subnet upon creation of a dataflow endpoint group. This ENI is used as the ingress/egress point for data streamed during a satellite contact.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-securitydetails.html#cfn-groundstation-dataflowendpointgroup-securitydetails-rolearn
         */
        readonly roleArn?: string;
        /**
         * The security group Ids of the security role, such as `sg-1234567890abcdef0` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-securitydetails.html#cfn-groundstation-dataflowendpointgroup-securitydetails-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * The subnet Ids of the security details, such as `subnet-12345678` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-securitydetails.html#cfn-groundstation-dataflowendpointgroup-securitydetails-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDataflowEndpointGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html
 */
export interface CfnDataflowEndpointGroupProps {
    /**
     * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a `POSTPASS` state.
     *
     * A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the `POSTPASS` state.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-contactpostpassdurationseconds
     */
    readonly contactPostPassDurationSeconds?: number;
    /**
     * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a `PREPASS` state.
     *
     * A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the `PREPASS` state.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-contactprepassdurationseconds
     */
    readonly contactPrePassDurationSeconds?: number;
    /**
     * List of Endpoint Details, containing address and port for each endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-endpointdetails
     */
    readonly endpointDetails: Array<CfnDataflowEndpointGroup.EndpointDetailsProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tags assigned to a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Mission profiles specify parameters and provide references to config objects to define how Ground Station lists and executes contacts.
 *
 * @cloudformationResource AWS::GroundStation::MissionProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html
 */
export declare class CfnMissionProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMissionProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMissionProfile;
    /**
     * The ARN of the mission profile, such as `arn:aws:groundstation:us-east-2:1234567890:mission-profile/9940bf3b-d2ba-427e-9906-842b5e5d2296` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the mission profile, such as `9940bf3b-d2ba-427e-9906-842b5e5d2296` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The region of the mission profile.
     *
     * @cloudformationAttribute Region
     */
    readonly attrRegion: string;
    /**
     * Amount of time in seconds after a contact ends that you’d like to receive a Ground Station Contact State Change indicating the pass has finished.
     */
    contactPostPassDurationSeconds?: number;
    /**
     * Amount of time in seconds prior to contact start that you'd like to receive a Ground Station Contact State Change Event indicating an upcoming pass.
     */
    contactPrePassDurationSeconds?: number;
    /**
     * A list containing lists of config ARNs.
     */
    dataflowEdges: Array<CfnMissionProfile.DataflowEdgeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Minimum length of a contact in seconds that Ground Station will return when listing contacts.
     */
    minimumViableContactDurationSeconds: number;
    /**
     * The name of the mission profile.
     */
    name: string;
    /**
     * KMS key to use for encrypting streams.
     */
    streamsKmsKey?: cdk.IResolvable | CfnMissionProfile.StreamsKmsKeyProperty;
    /**
     * Role to use for encrypting streams with KMS key.
     */
    streamsKmsRole?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags assigned to the mission profile.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of a tracking config objects that defines how to track the satellite through the sky during a contact.
     */
    trackingConfigArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMissionProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMissionProfile {
    /**
     * KMS key info.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-streamskmskey.html
     */
    interface StreamsKmsKeyProperty {
        /**
         * KMS Alias Arn.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-streamskmskey.html#cfn-groundstation-missionprofile-streamskmskey-kmsaliasarn
         */
        readonly kmsAliasArn?: string;
        /**
         * KMS Alias Name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-streamskmskey.html#cfn-groundstation-missionprofile-streamskmskey-kmsaliasname
         */
        readonly kmsAliasName?: string;
        /**
         * KMS Key Arn.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-streamskmskey.html#cfn-groundstation-missionprofile-streamskmskey-kmskeyarn
         */
        readonly kmsKeyArn?: string;
    }
    /**
     * A dataflow edge defines from where and to where data will flow during a contact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-dataflowedge.html
     */
    interface DataflowEdgeProperty {
        /**
         * The ARN of the destination for this dataflow edge.
         *
         * For example, specify the ARN of a dataflow endpoint config for a downlink edge or an antenna uplink config for an uplink edge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-dataflowedge.html#cfn-groundstation-missionprofile-dataflowedge-destination
         */
        readonly destination?: string;
        /**
         * The ARN of the source for this dataflow edge.
         *
         * For example, specify the ARN of an antenna downlink config for a downlink edge or a dataflow endpoint config for an uplink edge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-dataflowedge.html#cfn-groundstation-missionprofile-dataflowedge-source
         */
        readonly source?: string;
    }
}
/**
 * Properties for defining a `CfnMissionProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html
 */
export interface CfnMissionProfileProps {
    /**
     * Amount of time in seconds after a contact ends that you’d like to receive a Ground Station Contact State Change indicating the pass has finished.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-contactpostpassdurationseconds
     */
    readonly contactPostPassDurationSeconds?: number;
    /**
     * Amount of time in seconds prior to contact start that you'd like to receive a Ground Station Contact State Change Event indicating an upcoming pass.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-contactprepassdurationseconds
     */
    readonly contactPrePassDurationSeconds?: number;
    /**
     * A list containing lists of config ARNs.
     *
     * Each list of config ARNs is an edge, with a "from" config and a "to" config.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-dataflowedges
     */
    readonly dataflowEdges: Array<CfnMissionProfile.DataflowEdgeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Minimum length of a contact in seconds that Ground Station will return when listing contacts.
     *
     * Ground Station will not return contacts shorter than this duration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-minimumviablecontactdurationseconds
     */
    readonly minimumViableContactDurationSeconds: number;
    /**
     * The name of the mission profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-name
     */
    readonly name: string;
    /**
     * KMS key to use for encrypting streams.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-streamskmskey
     */
    readonly streamsKmsKey?: cdk.IResolvable | CfnMissionProfile.StreamsKmsKeyProperty;
    /**
     * Role to use for encrypting streams with KMS key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-streamskmsrole
     */
    readonly streamsKmsRole?: string;
    /**
     * Tags assigned to the mission profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of a tracking config objects that defines how to track the satellite through the sky during a contact.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-trackingconfigarn
     */
    readonly trackingConfigArn: string;
}
