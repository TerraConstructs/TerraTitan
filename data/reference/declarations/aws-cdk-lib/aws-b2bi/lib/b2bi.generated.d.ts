import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Instantiates a capability based on the specified parameters.
 *
 * A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
 *
 * @cloudformationResource AWS::B2BI::Capability
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html
 */
export declare class CfnCapability extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCapability from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCapability;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific AWS resource, such as a capability, partnership, profile, or transformer.
     *
     * @cloudformationAttribute CapabilityArn
     */
    readonly attrCapabilityArn: string;
    /**
     * Returns a system-assigned unique identifier for the capability.
     *
     * @cloudformationAttribute CapabilityId
     */
    readonly attrCapabilityId: string;
    /**
     * Returns a timestamp for creation date and time of the capability.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Returns a timestamp that identifies the most recent date and time that the capability was modified.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies a structure that contains the details for a capability.
     */
    configuration: CfnCapability.CapabilityConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability.
     */
    instructionsDocuments?: Array<cdk.IResolvable | CfnCapability.S3LocationProperty> | cdk.IResolvable;
    /**
     * The display name of the capability.
     */
    name: string;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Returns the type of the capability.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCapabilityProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCapability {
    /**
     * A capability object.
     *
     * Currently, only EDI (electronic data interchange) capabilities are supported. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-capabilityconfiguration.html
     */
    interface CapabilityConfigurationProperty {
        /**
         * An EDI (electronic data interchange) configuration object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-capabilityconfiguration.html#cfn-b2bi-capability-capabilityconfiguration-edi
         */
        readonly edi: CfnCapability.EdiConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Specifies the details for the EDI (electronic data interchange) transformation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html
     */
    interface EdiConfigurationProperty {
        /**
         * Specifies whether this is capability is for inbound or outbound transformations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html#cfn-b2bi-capability-ediconfiguration-capabilitydirection
         */
        readonly capabilityDirection?: string;
        /**
         * Contains the Amazon S3 bucket and prefix for the location of the input file, which is contained in an `S3Location` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html#cfn-b2bi-capability-ediconfiguration-inputlocation
         */
        readonly inputLocation: cdk.IResolvable | CfnCapability.S3LocationProperty;
        /**
         * Contains the Amazon S3 bucket and prefix for the location of the output file, which is contained in an `S3Location` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html#cfn-b2bi-capability-ediconfiguration-outputlocation
         */
        readonly outputLocation: cdk.IResolvable | CfnCapability.S3LocationProperty;
        /**
         * Returns the system-assigned unique identifier for the transformer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html#cfn-b2bi-capability-ediconfiguration-transformerid
         */
        readonly transformerId: string;
        /**
         * Returns the type of the capability.
         *
         * Currently, only `edi` is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html#cfn-b2bi-capability-ediconfiguration-type
         */
        readonly type: CfnCapability.EdiTypeProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-editype.html
     */
    interface EdiTypeProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-editype.html#cfn-b2bi-capability-editype-x12details
         */
        readonly x12Details: cdk.IResolvable | CfnCapability.X12DetailsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-x12details.html
     */
    interface X12DetailsProperty {
        /**
         * Returns an enumerated type where each value identifies an X12 transaction set.
         *
         * Transaction sets are maintained by the X12 Accredited Standards Committee.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-x12details.html#cfn-b2bi-capability-x12details-transactionset
         */
        readonly transactionSet?: string;
        /**
         * Returns the version to use for the specified X12 transaction set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-x12details.html#cfn-b2bi-capability-x12details-version
         */
        readonly version?: string;
    }
    /**
     * Specifies the details for the Amazon S3 file location that is being used with AWS B2B Data Interchange.
     *
     * File locations in Amazon S3 are identified using a combination of the bucket and key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-s3location.html
     */
    interface S3LocationProperty {
        /**
         * Specifies the name of the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-s3location.html#cfn-b2bi-capability-s3location-bucketname
         */
        readonly bucketName?: string;
        /**
         * Specifies the Amazon S3 key for the file location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-s3location.html#cfn-b2bi-capability-s3location-key
         */
        readonly key?: string;
    }
}
/**
 * Properties for defining a `CfnCapability`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html
 */
export interface CfnCapabilityProps {
    /**
     * Specifies a structure that contains the details for a capability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-configuration
     */
    readonly configuration: CfnCapability.CapabilityConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability.
     *
     * Each item contains the name of the bucket and the key, to identify the document's location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-instructionsdocuments
     */
    readonly instructionsDocuments?: Array<cdk.IResolvable | CfnCapability.S3LocationProperty> | cdk.IResolvable;
    /**
     * The display name of the capability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-name
     */
    readonly name: string;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type.
     *
     * You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Returns the type of the capability.
     *
     * Currently, only `edi` is supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-type
     */
    readonly type: string;
}
/**
 * Creates a partnership between a customer and a trading partner, based on the supplied parameters.
 *
 * A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
 *
 * @cloudformationResource AWS::B2BI::Partnership
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html
 */
export declare class CfnPartnership extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPartnership from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPartnership;
    /**
     * Returns a timestamp for creation date and time of the partnership.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific AWS resource, such as a capability, partnership, profile, or transformer.
     *
     * @cloudformationAttribute PartnershipArn
     */
    readonly attrPartnershipArn: string;
    /**
     * Returns the unique, system-generated identifier for a partnership.
     *
     * @cloudformationAttribute PartnershipId
     */
    readonly attrPartnershipId: string;
    /**
     * Returns the unique, system-generated identifier for a trading partner.
     *
     * @cloudformationAttribute TradingPartnerId
     */
    readonly attrTradingPartnerId: string;
    /**
     * Returns one or more capabilities associated with this partnership.
     */
    capabilities: Array<string>;
    /**
     * Contains the details for an Outbound EDI capability.
     */
    capabilityOptions?: CfnPartnership.CapabilityOptionsProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    email: string;
    /**
     * Returns the name of the partnership.
     */
    name: string;
    phone?: string;
    /**
     * Returns the unique, system-generated identifier for the profile connected to this partnership.
     */
    profileId: string;
    /**
     * A key-value pair for a specific partnership.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPartnershipProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPartnership {
    /**
     * Contains the details for an Outbound EDI capability.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-capabilityoptions.html
     */
    interface CapabilityOptionsProperty {
        /**
         * A structure that contains the outbound EDI options.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-capabilityoptions.html#cfn-b2bi-partnership-capabilityoptions-outboundedi
         */
        readonly outboundEdi?: cdk.IResolvable | CfnPartnership.OutboundEdiOptionsProperty;
    }
    /**
     * A container for outbound EDI options.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-outboundedioptions.html
     */
    interface OutboundEdiOptionsProperty {
        /**
         * A structure that contains an X12 envelope structure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-outboundedioptions.html#cfn-b2bi-partnership-outboundedioptions-x12
         */
        readonly x12: cdk.IResolvable | CfnPartnership.X12EnvelopeProperty;
    }
    /**
     * A wrapper structure for an X12 definition object.
     *
     * the X12 envelope ensures the integrity of the data and the efficiency of the information exchange. The X12 message structure has hierarchical levels. From highest to the lowest, they are:
     *
     * - Interchange Envelope
     * - Functional Group
     * - Transaction Set
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12envelope.html
     */
    interface X12EnvelopeProperty {
        /**
         * A container for the X12 outbound EDI headers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12envelope.html#cfn-b2bi-partnership-x12envelope-common
         */
        readonly common?: cdk.IResolvable | CfnPartnership.X12OutboundEdiHeadersProperty;
    }
    /**
     * A structure containing the details for an outbound EDI object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12outboundediheaders.html
     */
    interface X12OutboundEdiHeadersProperty {
        /**
         * The delimiters, for example semicolon ( `;` ), that separates sections of the headers for the X12 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12outboundediheaders.html#cfn-b2bi-partnership-x12outboundediheaders-delimiters
         */
        readonly delimiters?: cdk.IResolvable | CfnPartnership.X12DelimitersProperty;
        /**
         * The functional group headers for the X12 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12outboundediheaders.html#cfn-b2bi-partnership-x12outboundediheaders-functionalgroupheaders
         */
        readonly functionalGroupHeaders?: cdk.IResolvable | CfnPartnership.X12FunctionalGroupHeadersProperty;
        /**
         * In X12 EDI messages, delimiters are used to mark the end of segments or elements, and are defined in the interchange control header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12outboundediheaders.html#cfn-b2bi-partnership-x12outboundediheaders-interchangecontrolheaders
         */
        readonly interchangeControlHeaders?: cdk.IResolvable | CfnPartnership.X12InterchangeControlHeadersProperty;
        /**
         * Specifies whether or not to validate the EDI for this X12 object: `TRUE` or `FALSE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12outboundediheaders.html#cfn-b2bi-partnership-x12outboundediheaders-validateedi
         */
        readonly validateEdi?: boolean | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12interchangecontrolheaders.html
     */
    interface X12InterchangeControlHeadersProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12interchangecontrolheaders.html#cfn-b2bi-partnership-x12interchangecontrolheaders-acknowledgmentrequestedcode
         */
        readonly acknowledgmentRequestedCode?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12interchangecontrolheaders.html#cfn-b2bi-partnership-x12interchangecontrolheaders-receiverid
         */
        readonly receiverId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12interchangecontrolheaders.html#cfn-b2bi-partnership-x12interchangecontrolheaders-receiveridqualifier
         */
        readonly receiverIdQualifier?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12interchangecontrolheaders.html#cfn-b2bi-partnership-x12interchangecontrolheaders-repetitionseparator
         */
        readonly repetitionSeparator?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12interchangecontrolheaders.html#cfn-b2bi-partnership-x12interchangecontrolheaders-senderid
         */
        readonly senderId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12interchangecontrolheaders.html#cfn-b2bi-partnership-x12interchangecontrolheaders-senderidqualifier
         */
        readonly senderIdQualifier?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12interchangecontrolheaders.html#cfn-b2bi-partnership-x12interchangecontrolheaders-usageindicatorcode
         */
        readonly usageIndicatorCode?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12functionalgroupheaders.html
     */
    interface X12FunctionalGroupHeadersProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12functionalgroupheaders.html#cfn-b2bi-partnership-x12functionalgroupheaders-applicationreceivercode
         */
        readonly applicationReceiverCode?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12functionalgroupheaders.html#cfn-b2bi-partnership-x12functionalgroupheaders-applicationsendercode
         */
        readonly applicationSenderCode?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12functionalgroupheaders.html#cfn-b2bi-partnership-x12functionalgroupheaders-responsibleagencycode
         */
        readonly responsibleAgencyCode?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12delimiters.html
     */
    interface X12DelimitersProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12delimiters.html#cfn-b2bi-partnership-x12delimiters-componentseparator
         */
        readonly componentSeparator?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12delimiters.html#cfn-b2bi-partnership-x12delimiters-dataelementseparator
         */
        readonly dataElementSeparator?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12delimiters.html#cfn-b2bi-partnership-x12delimiters-segmentterminator
         */
        readonly segmentTerminator?: string;
    }
}
/**
 * Properties for defining a `CfnPartnership`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html
 */
export interface CfnPartnershipProps {
    /**
     * Returns one or more capabilities associated with this partnership.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-capabilities
     */
    readonly capabilities: Array<string>;
    /**
     * Contains the details for an Outbound EDI capability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-capabilityoptions
     */
    readonly capabilityOptions?: CfnPartnership.CapabilityOptionsProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-email
     */
    readonly email: string;
    /**
     * Returns the name of the partnership.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-name
     */
    readonly name: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-phone
     */
    readonly phone?: string;
    /**
     * Returns the unique, system-generated identifier for the profile connected to this partnership.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-profileid
     */
    readonly profileId: string;
    /**
     * A key-value pair for a specific partnership.
     *
     * Tags are metadata that you can use to search for and group capabilities for various purposes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#cfn-b2bi-partnership-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a customer profile.
 *
 * You can have up to five customer profiles, each representing a distinct private network. A profile is the mechanism used to create the concept of a private network.
 *
 * @cloudformationResource AWS::B2BI::Profile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html
 */
export declare class CfnProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProfile;
    /**
     * Returns the timestamp for creation date and time of the profile.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Returns the name of the logging group.
     *
     * @cloudformationAttribute LogGroupName
     */
    readonly attrLogGroupName: string;
    /**
     * Returns the timestamp that identifies the most recent date and time that the profile was modified.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Returns an Amazon Resource Name (ARN) for the profile.
     *
     * @cloudformationAttribute ProfileArn
     */
    readonly attrProfileArn: string;
    /**
     * @cloudformationAttribute ProfileId
     */
    readonly attrProfileId: string;
    /**
     * Returns the name for the business associated with this profile.
     */
    businessName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    email?: string;
    /**
     * Specifies whether or not logging is enabled for this profile.
     */
    logging: string;
    /**
     * Returns the display name for profile.
     */
    name: string;
    phone: string;
    /**
     * A key-value pair for a specific profile.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProfileProps);
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
 * Properties for defining a `CfnProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html
 */
export interface CfnProfileProps {
    /**
     * Returns the name for the business associated with this profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-businessname
     */
    readonly businessName: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-email
     */
    readonly email?: string;
    /**
     * Specifies whether or not logging is enabled for this profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-logging
     */
    readonly logging: string;
    /**
     * Returns the display name for profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-name
     */
    readonly name: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-phone
     */
    readonly phone: string;
    /**
     * A key-value pair for a specific profile.
     *
     * Tags are metadata that you can use to search for and group capabilities for various purposes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a transformer. AWS B2B Data Interchange currently supports two scenarios:.
 *
 * - *Inbound EDI* : the AWS customer receives an EDI file from their trading partner. AWS B2B Data Interchange converts this EDI file into a JSON or XML file with a service-defined structure. A mapping template provided by the customer, in JSONata or XSLT format, is optionally applied to this file to produce a JSON or XML file with the structure the customer requires.
 * - *Outbound EDI* : the AWS customer has a JSON or XML file containing data that they wish to use in an EDI file. A mapping template, provided by the customer (in either JSONata or XSLT format) is applied to this file to generate a JSON or XML file in the service-defined structure. This file is then converted to an EDI file.
 *
 * > The following fields are provided for backwards compatibility only: `fileFormat` , `mappingTemplate` , `ediType` , and `sampleDocument` .
 * >
 * > - Use the `mapping` data type in place of `mappingTemplate` and `fileFormat`
 * > - Use the `sampleDocuments` data type in place of `sampleDocument`
 * > - Use either the `inputConversion` or `outputConversion` in place of `ediType`
 *
 * @cloudformationResource AWS::B2BI::Transformer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html
 */
export declare class CfnTransformer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTransformer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTransformer;
    /**
     * Returns a timestamp indicating when the transformer was created. For example, `2023-07-20T19:58:44.624Z` .
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Returns a timestamp representing the date and time for the most recent change for the transformer object.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific transformer.
     *
     * @cloudformationAttribute TransformerArn
     */
    readonly attrTransformerArn: string;
    /**
     * The system-assigned unique identifier for the transformer.
     *
     * @cloudformationAttribute TransformerId
     */
    readonly attrTransformerId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * @deprecated this property has been deprecated
     */
    ediType?: CfnTransformer.EdiTypeProperty | cdk.IResolvable;
    /**
     * @deprecated this property has been deprecated
     */
    fileFormat?: string;
    /**
     * Returns a structure that contains the format options for the transformation.
     */
    inputConversion?: CfnTransformer.InputConversionProperty | cdk.IResolvable;
    /**
     * Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).
     */
    mapping?: cdk.IResolvable | CfnTransformer.MappingProperty;
    /**
     * This shape is deprecated: This is a legacy trait.
     *
     * @deprecated this property has been deprecated
     */
    mappingTemplate?: string;
    /**
     * Returns the descriptive name for the transformer.
     */
    name: string;
    /**
     * Returns the `OutputConversion` object, which contains the format options for the outbound transformation.
     */
    outputConversion?: cdk.IResolvable | CfnTransformer.OutputConversionProperty;
    /**
     * This shape is deprecated: This is a legacy trait.
     *
     * @deprecated this property has been deprecated
     */
    sampleDocument?: string;
    /**
     * Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
     */
    sampleDocuments?: cdk.IResolvable | CfnTransformer.SampleDocumentsProperty;
    /**
     * Returns the state of the newly created transformer.
     */
    status: string;
    /**
     * A key-value pair for a specific transformer.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTransformerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTransformer {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-editype.html
     */
    interface EdiTypeProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-editype.html#cfn-b2bi-transformer-editype-x12details
         */
        readonly x12Details: cdk.IResolvable | CfnTransformer.X12DetailsProperty;
    }
    /**
     * A structure that contains the X12 transaction set and version.
     *
     * The X12 structure is used when the system transforms an EDI (electronic data interchange) file.
     *
     * > If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-x12details.html
     */
    interface X12DetailsProperty {
        /**
         * Returns an enumerated type where each value identifies an X12 transaction set.
         *
         * Transaction sets are maintained by the X12 Accredited Standards Committee.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-x12details.html#cfn-b2bi-transformer-x12details-transactionset
         */
        readonly transactionSet?: string;
        /**
         * Returns the version to use for the specified X12 transaction set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-x12details.html#cfn-b2bi-transformer-x12details-version
         */
        readonly version?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-inputconversion.html
     */
    interface InputConversionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-inputconversion.html#cfn-b2bi-transformer-inputconversion-formatoptions
         */
        readonly formatOptions?: CfnTransformer.FormatOptionsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-inputconversion.html#cfn-b2bi-transformer-inputconversion-fromformat
         */
        readonly fromFormat: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-formatoptions.html
     */
    interface FormatOptionsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-formatoptions.html#cfn-b2bi-transformer-formatoptions-x12
         */
        readonly x12: cdk.IResolvable | CfnTransformer.X12DetailsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-mapping.html
     */
    interface MappingProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-mapping.html#cfn-b2bi-transformer-mapping-template
         */
        readonly template?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-mapping.html#cfn-b2bi-transformer-mapping-templatelanguage
         */
        readonly templateLanguage: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-outputconversion.html
     */
    interface OutputConversionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-outputconversion.html#cfn-b2bi-transformer-outputconversion-formatoptions
         */
        readonly formatOptions?: CfnTransformer.FormatOptionsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-outputconversion.html#cfn-b2bi-transformer-outputconversion-toformat
         */
        readonly toFormat: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-sampledocuments.html
     */
    interface SampleDocumentsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-sampledocuments.html#cfn-b2bi-transformer-sampledocuments-bucketname
         */
        readonly bucketName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-sampledocuments.html#cfn-b2bi-transformer-sampledocuments-keys
         */
        readonly keys: Array<cdk.IResolvable | CfnTransformer.SampleDocumentKeysProperty> | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-sampledocumentkeys.html
     */
    interface SampleDocumentKeysProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-sampledocumentkeys.html#cfn-b2bi-transformer-sampledocumentkeys-input
         */
        readonly input?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-transformer-sampledocumentkeys.html#cfn-b2bi-transformer-sampledocumentkeys-output
         */
        readonly output?: string;
    }
}
/**
 * Properties for defining a `CfnTransformer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html
 */
export interface CfnTransformerProps {
    /**
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-editype
     */
    readonly ediType?: CfnTransformer.EdiTypeProperty | cdk.IResolvable;
    /**
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-fileformat
     */
    readonly fileFormat?: string;
    /**
     * Returns a structure that contains the format options for the transformation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-inputconversion
     */
    readonly inputConversion?: CfnTransformer.InputConversionProperty | cdk.IResolvable;
    /**
     * Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-mapping
     */
    readonly mapping?: cdk.IResolvable | CfnTransformer.MappingProperty;
    /**
     * This shape is deprecated: This is a legacy trait.
     *
     * Please use input-conversion or output-conversion.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-mappingtemplate
     */
    readonly mappingTemplate?: string;
    /**
     * Returns the descriptive name for the transformer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-name
     */
    readonly name: string;
    /**
     * Returns the `OutputConversion` object, which contains the format options for the outbound transformation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-outputconversion
     */
    readonly outputConversion?: cdk.IResolvable | CfnTransformer.OutputConversionProperty;
    /**
     * This shape is deprecated: This is a legacy trait.
     *
     * Please use input-conversion or output-conversion.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-sampledocument
     */
    readonly sampleDocument?: string;
    /**
     * Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-sampledocuments
     */
    readonly sampleDocuments?: cdk.IResolvable | CfnTransformer.SampleDocumentsProperty;
    /**
     * Returns the state of the newly created transformer.
     *
     * The transformer can be either `active` or `inactive` . For the transformer to be used in a capability, its status must `active` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-status
     */
    readonly status: string;
    /**
     * A key-value pair for a specific transformer.
     *
     * Tags are metadata that you can use to search for and group capabilities for various purposes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
