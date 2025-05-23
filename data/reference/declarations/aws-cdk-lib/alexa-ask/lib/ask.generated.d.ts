import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `Alexa::ASK::Skill` resource creates an Alexa skill that enables customers to access new abilities.
 *
 * For more information about developing a skill, see the  .
 *
 * @cloudformationResource Alexa::ASK::Skill
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html
 */
export declare class CfnSkill extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSkill from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSkill;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Login with Amazon (LWA) configuration used to authenticate with the Alexa service.
     */
    authenticationConfiguration: CfnSkill.AuthenticationConfigurationProperty | cdk.IResolvable;
    /**
     * Configuration for the skill package that contains the components of the Alexa skill.
     */
    skillPackage: cdk.IResolvable | CfnSkill.SkillPackageProperty;
    /**
     * The vendor ID associated with the Amazon developer account that will host the skill.
     */
    vendorId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSkillProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSkill {
    /**
     * The `AuthenticationConfiguration` property type specifies the Login with Amazon (LWA) configuration used to authenticate with the Alexa service.
     *
     * Only Login with Amazon security profiles created through the  are supported for authentication. A client ID, client secret, and refresh token are required. You can generate a client ID and client secret by creating a new  on the Amazon Developer Portal or you can retrieve them from an existing profile. You can then retrieve the refresh token using the Alexa Skills Kit CLI. For instructions, see  in the  .
     *
     * `AuthenticationConfiguration` is a property of the `Alexa::ASK::Skill` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html
     */
    interface AuthenticationConfigurationProperty {
        /**
         * Client ID from Login with Amazon (LWA).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html#cfn-ask-skill-authenticationconfiguration-clientid
         */
        readonly clientId: string;
        /**
         * Client secret from Login with Amazon (LWA).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html#cfn-ask-skill-authenticationconfiguration-clientsecret
         */
        readonly clientSecret: string;
        /**
         * Refresh token from Login with Amazon (LWA).
         *
         * This token is secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html#cfn-ask-skill-authenticationconfiguration-refreshtoken
         */
        readonly refreshToken: string;
    }
    /**
     * The `SkillPackage` property type contains configuration details for the skill package that contains the components of the Alexa skill.
     *
     * Skill packages are retrieved from an Amazon S3 bucket and key and used to create and update the skill. More details about the skill package format are located in the  .
     *
     * `SkillPackage` is a property of the `Alexa::ASK::Skill` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html
     */
    interface SkillPackageProperty {
        /**
         * Overrides to the skill package to apply when creating or updating the skill.
         *
         * Values provided here do not modify the contents of the original skill package. Currently, only overriding values inside of the skill manifest component of the package is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-overrides
         */
        readonly overrides?: cdk.IResolvable | CfnSkill.OverridesProperty;
        /**
         * The name of the Amazon S3 bucket where the .zip file that contains the skill package is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * ARN of the IAM role that grants the Alexa service ( `alexa-appkit.amazon.com` ) permission to access the bucket and retrieve the skill package. This property is optional. If you do not provide it, the bucket must be publicly accessible or configured with a policy that allows this access. Otherwise, AWS CloudFormation cannot create the skill.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-s3bucketrole
         */
        readonly s3BucketRole?: string;
        /**
         * The location and name of the skill package .zip file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-s3key
         */
        readonly s3Key: string;
        /**
         * If you have S3 versioning enabled, the version ID of the skill package.zip file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html#cfn-ask-skill-skillpackage-s3objectversion
         */
        readonly s3ObjectVersion?: string;
    }
    /**
     * The `Overrides` property type provides overrides to the skill package to apply when creating or updating the skill.
     *
     * Values provided here do not modify the contents of the original skill package. Currently, only overriding values inside of the skill manifest component of the package is supported.
     *
     * `Overrides` is a property of the `Alexa::ASK::Skill SkillPackage` property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-overrides.html
     */
    interface OverridesProperty {
        /**
         * Overrides to apply to the skill manifest inside of the skill package.
         *
         * The skill manifest contains metadata about the skill. For more information, see  .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-overrides.html#cfn-ask-skill-overrides-manifest
         */
        readonly manifest?: any | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnSkill`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html
 */
export interface CfnSkillProps {
    /**
     * Login with Amazon (LWA) configuration used to authenticate with the Alexa service.
     *
     * Only Login with Amazon clients created through the  are supported. The client ID, client secret, and refresh token are required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html#cfn-ask-skill-authenticationconfiguration
     */
    readonly authenticationConfiguration: CfnSkill.AuthenticationConfigurationProperty | cdk.IResolvable;
    /**
     * Configuration for the skill package that contains the components of the Alexa skill.
     *
     * Skill packages are retrieved from an Amazon S3 bucket and key and used to create and update the skill. For more information about the skill package format, see the  .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html#cfn-ask-skill-skillpackage
     */
    readonly skillPackage: cdk.IResolvable | CfnSkill.SkillPackageProperty;
    /**
     * The vendor ID associated with the Amazon developer account that will host the skill.
     *
     * Details for retrieving the vendor ID are in  . The provided LWA credentials must be linked to the developer account associated with this vendor ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html#cfn-ask-skill-vendorid
     */
    readonly vendorId: string;
}
