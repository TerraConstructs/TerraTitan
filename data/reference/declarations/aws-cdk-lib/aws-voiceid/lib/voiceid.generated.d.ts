import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints.
 *
 * Every domain is created with a default watchlist that fraudsters can be a part of.
 *
 * @cloudformationResource AWS::VoiceID::Domain
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html
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
     * The identifier of the domain.
     *
     * @cloudformationAttribute DomainId
     */
    readonly attrDomainId: string;
    /**
     * The description of the domain.
     */
    description?: string;
    /**
     * The name for the domain.
     */
    name: string;
    /**
     * The server-side encryption configuration containing the KMS key identifier you want Voice ID to use to encrypt your data.
     */
    serverSideEncryptionConfiguration: cdk.IResolvable | CfnDomain.ServerSideEncryptionConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
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
     * The configuration containing information about the customer managed key used for encrypting customer data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-voiceid-domain-serversideencryptionconfiguration.html
     */
    interface ServerSideEncryptionConfigurationProperty {
        /**
         * The identifier of the KMS key to use to encrypt data stored by Voice ID.
         *
         * Voice ID doesn't support asymmetric customer managed keys.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-voiceid-domain-serversideencryptionconfiguration.html#cfn-voiceid-domain-serversideencryptionconfiguration-kmskeyid
         */
        readonly kmsKeyId: string;
    }
}
/**
 * Properties for defining a `CfnDomain`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html
 */
export interface CfnDomainProps {
    /**
     * The description of the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-description
     */
    readonly description?: string;
    /**
     * The name for the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-name
     */
    readonly name: string;
    /**
     * The server-side encryption configuration containing the KMS key identifier you want Voice ID to use to encrypt your data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-serversideencryptionconfiguration
     */
    readonly serverSideEncryptionConfiguration: cdk.IResolvable | CfnDomain.ServerSideEncryptionConfigurationProperty;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
