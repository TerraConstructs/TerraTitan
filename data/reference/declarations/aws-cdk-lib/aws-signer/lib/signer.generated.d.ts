import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Adds cross-account permissions to a signing profile.
 *
 * @cloudformationResource AWS::Signer::ProfilePermission
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html
 */
export declare class CfnProfilePermission extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProfilePermission from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProfilePermission;
    /**
     * The AWS Signer action permitted as part of cross-account permissions.
     */
    action: string;
    /**
     * The AWS principal receiving cross-account permissions.
     */
    principal: string;
    /**
     * The human-readable name of the signing profile.
     */
    profileName: string;
    /**
     * The version of the signing profile.
     */
    profileVersion?: string;
    /**
     * A unique identifier for the cross-account permission statement.
     */
    statementId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProfilePermissionProps);
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
 * Properties for defining a `CfnProfilePermission`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html
 */
export interface CfnProfilePermissionProps {
    /**
     * The AWS Signer action permitted as part of cross-account permissions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-action
     */
    readonly action: string;
    /**
     * The AWS principal receiving cross-account permissions.
     *
     * This may be an IAM role or another AWS account ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-principal
     */
    readonly principal: string;
    /**
     * The human-readable name of the signing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-profilename
     */
    readonly profileName: string;
    /**
     * The version of the signing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-profileversion
     */
    readonly profileVersion?: string;
    /**
     * A unique identifier for the cross-account permission statement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-statementid
     */
    readonly statementId: string;
}
/**
 * Creates a signing profile.
 *
 * A signing profile is a code-signing template that can be used to carry out a pre-defined signing job.
 *
 * @cloudformationResource AWS::Signer::SigningProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html
 */
export declare class CfnSigningProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSigningProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSigningProfile;
    /**
     * The Amazon Resource Name (ARN) of the signing profile created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the signing profile created.
     *
     * @cloudformationAttribute ProfileName
     */
    readonly attrProfileName: string;
    /**
     * The version of the signing profile created.
     *
     * @cloudformationAttribute ProfileVersion
     */
    readonly attrProfileVersion: string;
    /**
     * The signing profile ARN, including the profile version.
     *
     * @cloudformationAttribute ProfileVersionArn
     */
    readonly attrProfileVersionArn: string;
    /**
     * The ID of a platform that is available for use by a signing profile.
     */
    platformId: string;
    /**
     * The name of the signing profile.
     */
    profileName?: string;
    /**
     * The validity period override for any signature generated using this signing profile.
     */
    signatureValidityPeriod?: cdk.IResolvable | CfnSigningProfile.SignatureValidityPeriodProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags associated with the signing profile.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSigningProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSigningProfile {
    /**
     * The validity period for the signing job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-signaturevalidityperiod.html
     */
    interface SignatureValidityPeriodProperty {
        /**
         * The time unit for signature validity: DAYS | MONTHS | YEARS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-signaturevalidityperiod.html#cfn-signer-signingprofile-signaturevalidityperiod-type
         */
        readonly type?: string;
        /**
         * The numerical value of the time unit for signature validity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-signaturevalidityperiod.html#cfn-signer-signingprofile-signaturevalidityperiod-value
         */
        readonly value?: number;
    }
}
/**
 * Properties for defining a `CfnSigningProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html
 */
export interface CfnSigningProfileProps {
    /**
     * The ID of a platform that is available for use by a signing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-platformid
     */
    readonly platformId: string;
    /**
     * The name of the signing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-profilename
     */
    readonly profileName?: string;
    /**
     * The validity period override for any signature generated using this signing profile.
     *
     * If unspecified, the default is 135 months.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-signaturevalidityperiod
     */
    readonly signatureValidityPeriod?: cdk.IResolvable | CfnSigningProfile.SignatureValidityPeriodProperty;
    /**
     * A list of tags associated with the signing profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
