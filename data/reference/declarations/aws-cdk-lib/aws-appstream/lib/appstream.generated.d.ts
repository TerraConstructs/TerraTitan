import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * This resource creates an app block.
 *
 * App blocks store details about the virtual hard disk that contains the files for the application in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. App blocks are only supported for Elastic fleets.
 *
 * @cloudformationResource AWS::AppStream::AppBlock
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html
 */
export declare class CfnAppBlock extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAppBlock from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAppBlock;
    /**
     * The ARN of the app block.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time when the app block was created.
     *
     * @cloudformationAttribute CreatedTime
     */
    readonly attrCreatedTime: string;
    /**
     * The description of the app block.
     */
    description?: string;
    /**
     * The display name of the app block.
     */
    displayName?: string;
    /**
     * The name of the app block.
     */
    name: string;
    /**
     * The packaging type of the app block.
     */
    packagingType?: string;
    /**
     * The post setup script details of the app block.
     */
    postSetupScriptDetails?: cdk.IResolvable | CfnAppBlock.ScriptDetailsProperty;
    /**
     * The setup script details of the app block.
     */
    setupScriptDetails?: cdk.IResolvable | CfnAppBlock.ScriptDetailsProperty;
    /**
     * The source S3 location of the app block.
     */
    sourceS3Location: cdk.IResolvable | CfnAppBlock.S3LocationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags of the app block.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAppBlockProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAppBlock {
    /**
     * The details of the script.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-scriptdetails.html
     */
    interface ScriptDetailsProperty {
        /**
         * The parameters used in the run path for the script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-scriptdetails.html#cfn-appstream-appblock-scriptdetails-executableparameters
         */
        readonly executableParameters?: string;
        /**
         * The run path for the script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-scriptdetails.html#cfn-appstream-appblock-scriptdetails-executablepath
         */
        readonly executablePath: string;
        /**
         * The S3 object location of the script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-scriptdetails.html#cfn-appstream-appblock-scriptdetails-scripts3location
         */
        readonly scriptS3Location: cdk.IResolvable | CfnAppBlock.S3LocationProperty;
        /**
         * The run timeout, in seconds, for the script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-scriptdetails.html#cfn-appstream-appblock-scriptdetails-timeoutinseconds
         */
        readonly timeoutInSeconds: number;
    }
    /**
     * The S3 location of the app block.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The S3 bucket of the app block.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-s3location.html#cfn-appstream-appblock-s3location-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The S3 key of the S3 object of the virtual hard disk.
         *
         * This is required when it's used by `SetupScriptDetails` and `PostSetupScriptDetails` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-s3location.html#cfn-appstream-appblock-s3location-s3key
         */
        readonly s3Key?: string;
    }
}
/**
 * Properties for defining a `CfnAppBlock`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html
 */
export interface CfnAppBlockProps {
    /**
     * The description of the app block.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html#cfn-appstream-appblock-description
     */
    readonly description?: string;
    /**
     * The display name of the app block.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html#cfn-appstream-appblock-displayname
     */
    readonly displayName?: string;
    /**
     * The name of the app block.
     *
     * *Pattern* : `^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html#cfn-appstream-appblock-name
     */
    readonly name: string;
    /**
     * The packaging type of the app block.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html#cfn-appstream-appblock-packagingtype
     */
    readonly packagingType?: string;
    /**
     * The post setup script details of the app block.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html#cfn-appstream-appblock-postsetupscriptdetails
     */
    readonly postSetupScriptDetails?: cdk.IResolvable | CfnAppBlock.ScriptDetailsProperty;
    /**
     * The setup script details of the app block.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html#cfn-appstream-appblock-setupscriptdetails
     */
    readonly setupScriptDetails?: cdk.IResolvable | CfnAppBlock.ScriptDetailsProperty;
    /**
     * The source S3 location of the app block.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html#cfn-appstream-appblock-sources3location
     */
    readonly sourceS3Location: cdk.IResolvable | CfnAppBlock.S3LocationProperty;
    /**
     * The tags of the app block.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html#cfn-appstream-appblock-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an app block builder.
 *
 * @cloudformationResource AWS::AppStream::AppBlockBuilder
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html
 */
export declare class CfnAppBlockBuilder extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAppBlockBuilder from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAppBlockBuilder;
    /**
     * The ARN of the app block builder.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time when the app block builder was created.
     *
     * @cloudformationAttribute CreatedTime
     */
    readonly attrCreatedTime: string;
    /**
     * The access endpoints of the app block builder.
     */
    accessEndpoints?: Array<CfnAppBlockBuilder.AccessEndpointProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The ARN of the app block.
     */
    appBlockArns?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the app block builder.
     */
    description?: string;
    /**
     * The display name of the app block builder.
     */
    displayName?: string;
    /**
     * Indicates whether default internet access is enabled for the app block builder.
     */
    enableDefaultInternetAccess?: boolean | cdk.IResolvable;
    /**
     * The ARN of the IAM role that is applied to the app block builder.
     */
    iamRoleArn?: string;
    /**
     * The instance type of the app block builder.
     */
    instanceType: string;
    /**
     * The name of the app block builder.
     */
    name: string;
    /**
     * The platform of the app block builder.
     */
    platform: string;
    /**
     * The tags of the app block builder.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The VPC configuration for the app block builder.
     */
    vpcConfig: cdk.IResolvable | CfnAppBlockBuilder.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAppBlockBuilderProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAppBlockBuilder {
    /**
     * Describes VPC configuration information for fleets and image builders.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The identifiers of the security groups for the fleet or image builder.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-vpcconfig.html#cfn-appstream-appblockbuilder-vpcconfig-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * The identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance.
         *
         * Fleet instances use one or more subnets. Image builder instances use one subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-vpcconfig.html#cfn-appstream-appblockbuilder-vpcconfig-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
    /**
     * Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-accessendpoint.html
     */
    interface AccessEndpointProperty {
        /**
         * The type of interface endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-accessendpoint.html#cfn-appstream-appblockbuilder-accessendpoint-endpointtype
         */
        readonly endpointType: string;
        /**
         * The identifier (ID) of the VPC in which the interface endpoint is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblockbuilder-accessendpoint.html#cfn-appstream-appblockbuilder-accessendpoint-vpceid
         */
        readonly vpceId: string;
    }
}
/**
 * Properties for defining a `CfnAppBlockBuilder`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html
 */
export interface CfnAppBlockBuilderProps {
    /**
     * The access endpoints of the app block builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-accessendpoints
     */
    readonly accessEndpoints?: Array<CfnAppBlockBuilder.AccessEndpointProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The ARN of the app block.
     *
     * *Maximum* : `1`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-appblockarns
     */
    readonly appBlockArns?: Array<string>;
    /**
     * The description of the app block builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-description
     */
    readonly description?: string;
    /**
     * The display name of the app block builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-displayname
     */
    readonly displayName?: string;
    /**
     * Indicates whether default internet access is enabled for the app block builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-enabledefaultinternetaccess
     */
    readonly enableDefaultInternetAccess?: boolean | cdk.IResolvable;
    /**
     * The ARN of the IAM role that is applied to the app block builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-iamrolearn
     */
    readonly iamRoleArn?: string;
    /**
     * The instance type of the app block builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-instancetype
     */
    readonly instanceType: string;
    /**
     * The name of the app block builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-name
     */
    readonly name: string;
    /**
     * The platform of the app block builder.
     *
     * *Allowed values* : `WINDOWS_SERVER_2019`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-platform
     */
    readonly platform: string;
    /**
     * The tags of the app block builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The VPC configuration for the app block builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html#cfn-appstream-appblockbuilder-vpcconfig
     */
    readonly vpcConfig: cdk.IResolvable | CfnAppBlockBuilder.VpcConfigProperty;
}
/**
 * This resource creates an application.
 *
 * Applications store the details about how to launch applications on streaming instances. This is only supported for Elastic fleets.
 *
 * @cloudformationResource AWS::AppStream::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html
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
     * The ARN of the application.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time when the application was created.
     *
     * @cloudformationAttribute CreatedTime
     */
    readonly attrCreatedTime: string;
    /**
     * The app block ARN with which the application should be associated.
     */
    appBlockArn: string;
    /**
     * A list of attributes to delete from an application.
     */
    attributesToDelete?: Array<string>;
    /**
     * The description of the application.
     */
    description?: string;
    /**
     * The display name of the application.
     */
    displayName?: string;
    /**
     * The icon S3 location of the application.
     */
    iconS3Location: cdk.IResolvable | CfnApplication.S3LocationProperty;
    /**
     * The instance families the application supports.
     */
    instanceFamilies: Array<string>;
    /**
     * The launch parameters of the application.
     */
    launchParameters?: string;
    /**
     * The launch path of the application.
     */
    launchPath: string;
    /**
     * The name of the application.
     */
    name: string;
    /**
     * The platforms the application supports.
     */
    platforms: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags of the application.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The working directory of the application.
     */
    workingDirectory?: string;
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
     * The S3 location of the application icon.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-application-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The S3 bucket of the S3 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-application-s3location.html#cfn-appstream-application-s3location-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The S3 key of the S3 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-application-s3location.html#cfn-appstream-application-s3location-s3key
         */
        readonly s3Key: string;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html
 */
export interface CfnApplicationProps {
    /**
     * The app block ARN with which the application should be associated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-appblockarn
     */
    readonly appBlockArn: string;
    /**
     * A list of attributes to delete from an application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-attributestodelete
     */
    readonly attributesToDelete?: Array<string>;
    /**
     * The description of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-description
     */
    readonly description?: string;
    /**
     * The display name of the application.
     *
     * This name is visible to users in the application catalog.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-displayname
     */
    readonly displayName?: string;
    /**
     * The icon S3 location of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-icons3location
     */
    readonly iconS3Location: cdk.IResolvable | CfnApplication.S3LocationProperty;
    /**
     * The instance families the application supports.
     *
     * *Allowed Values* : `GENERAL_PURPOSE` | `GRAPHICS_G4`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-instancefamilies
     */
    readonly instanceFamilies: Array<string>;
    /**
     * The launch parameters of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-launchparameters
     */
    readonly launchParameters?: string;
    /**
     * The launch path of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-launchpath
     */
    readonly launchPath: string;
    /**
     * The name of the application.
     *
     * This name is visible to users when a name is not specified in the DisplayName property.
     *
     * *Pattern* : `^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-name
     */
    readonly name: string;
    /**
     * The platforms the application supports.
     *
     * *Allowed Values* : `WINDOWS_SERVER_2019` | `AMAZON_LINUX2`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-platforms
     */
    readonly platforms: Array<string>;
    /**
     * The tags of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The working directory of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#cfn-appstream-application-workingdirectory
     */
    readonly workingDirectory?: string;
}
/**
 * Associates an application to an entitlement.
 *
 * @cloudformationResource AWS::AppStream::ApplicationEntitlementAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html
 */
export declare class CfnApplicationEntitlementAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationEntitlementAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationEntitlementAssociation;
    /**
     * The identifier of the application.
     */
    applicationIdentifier: string;
    /**
     * The name of the entitlement.
     */
    entitlementName: string;
    /**
     * The name of the stack.
     */
    stackName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationEntitlementAssociationProps);
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
 * Properties for defining a `CfnApplicationEntitlementAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html
 */
export interface CfnApplicationEntitlementAssociationProps {
    /**
     * The identifier of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html#cfn-appstream-applicationentitlementassociation-applicationidentifier
     */
    readonly applicationIdentifier: string;
    /**
     * The name of the entitlement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html#cfn-appstream-applicationentitlementassociation-entitlementname
     */
    readonly entitlementName: string;
    /**
     * The name of the stack.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html#cfn-appstream-applicationentitlementassociation-stackname
     */
    readonly stackName: string;
}
/**
 * This resource associates the specified application with the specified fleet.
 *
 * This is only supported for Elastic fleets.
 *
 * @cloudformationResource AWS::AppStream::ApplicationFleetAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationfleetassociation.html
 */
export declare class CfnApplicationFleetAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationFleetAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationFleetAssociation;
    /**
     * The ARN of the application.
     */
    applicationArn: string;
    /**
     * The name of the fleet.
     */
    fleetName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationFleetAssociationProps);
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
 * Properties for defining a `CfnApplicationFleetAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationfleetassociation.html
 */
export interface CfnApplicationFleetAssociationProps {
    /**
     * The ARN of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationfleetassociation.html#cfn-appstream-applicationfleetassociation-applicationarn
     */
    readonly applicationArn: string;
    /**
     * The name of the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationfleetassociation.html#cfn-appstream-applicationfleetassociation-fleetname
     */
    readonly fleetName: string;
}
/**
 * The `AWS::AppStream::DirectoryConfig` resource specifies the configuration information required to join Amazon AppStream 2.0 fleets and image builders to Microsoft Active Directory domains.
 *
 * @cloudformationResource AWS::AppStream::DirectoryConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html
 */
export declare class CfnDirectoryConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDirectoryConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDirectoryConfig;
    /**
     * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances.
     */
    certificateBasedAuthProperties?: CfnDirectoryConfig.CertificateBasedAuthPropertiesProperty | cdk.IResolvable;
    /**
     * The fully qualified name of the directory (for example, corp.example.com).
     */
    directoryName: string;
    /**
     * The distinguished names of the organizational units for computer accounts.
     */
    organizationalUnitDistinguishedNames: Array<string>;
    /**
     * The credentials for the service account used by the streaming instance to connect to the directory.
     */
    serviceAccountCredentials: cdk.IResolvable | CfnDirectoryConfig.ServiceAccountCredentialsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDirectoryConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDirectoryConfig {
    /**
     * The credentials for the service account used by the streaming instance to connect to the directory.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html
     */
    interface ServiceAccountCredentialsProperty {
        /**
         * The user name of the account.
         *
         * This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html#cfn-appstream-directoryconfig-serviceaccountcredentials-accountname
         */
        readonly accountName: string;
        /**
         * The password for the account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html#cfn-appstream-directoryconfig-serviceaccountcredentials-accountpassword
         */
        readonly accountPassword: string;
    }
    /**
     * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-certificatebasedauthproperties.html
     */
    interface CertificateBasedAuthPropertiesProperty {
        /**
         * The ARN of the AWS Certificate Manager Private CA resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-certificatebasedauthproperties.html#cfn-appstream-directoryconfig-certificatebasedauthproperties-certificateauthorityarn
         */
        readonly certificateAuthorityArn?: string;
        /**
         * The status of the certificate-based authentication properties.
         *
         * Fallback is turned on by default when certificate-based authentication is *Enabled* . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. *Enabled_no_directory_login_fallback* enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-certificatebasedauthproperties.html#cfn-appstream-directoryconfig-certificatebasedauthproperties-status
         */
        readonly status?: string;
    }
}
/**
 * Properties for defining a `CfnDirectoryConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html
 */
export interface CfnDirectoryConfigProps {
    /**
     * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html#cfn-appstream-directoryconfig-certificatebasedauthproperties
     */
    readonly certificateBasedAuthProperties?: CfnDirectoryConfig.CertificateBasedAuthPropertiesProperty | cdk.IResolvable;
    /**
     * The fully qualified name of the directory (for example, corp.example.com).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html#cfn-appstream-directoryconfig-directoryname
     */
    readonly directoryName: string;
    /**
     * The distinguished names of the organizational units for computer accounts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html#cfn-appstream-directoryconfig-organizationalunitdistinguishednames
     */
    readonly organizationalUnitDistinguishedNames: Array<string>;
    /**
     * The credentials for the service account used by the streaming instance to connect to the directory.
     *
     * Do not use this parameter directly. Use `ServiceAccountCredentials` as an input parameter with `noEcho` as shown in the [Parameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html) . For best practices information, see [Do Not Embed Credentials in Your Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#creds) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html#cfn-appstream-directoryconfig-serviceaccountcredentials
     */
    readonly serviceAccountCredentials: cdk.IResolvable | CfnDirectoryConfig.ServiceAccountCredentialsProperty;
}
/**
 * Creates an entitlement to control access, based on user attributes, to specific applications within a stack.
 *
 * Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application or to applications managed by a dynamic app provider using the Dynamic Application Framework.
 *
 * @cloudformationResource AWS::AppStream::Entitlement
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html
 */
export declare class CfnEntitlement extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEntitlement from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEntitlement;
    /**
     * The time when the entitlement was created.
     *
     * @cloudformationAttribute CreatedTime
     */
    readonly attrCreatedTime: string;
    /**
     * The time when the entitlement was last modified.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: string;
    /**
     * Specifies whether to entitle all apps or only selected apps.
     */
    appVisibility: string;
    /**
     * The attributes of the entitlement.
     */
    attributes: Array<CfnEntitlement.AttributeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the entitlement.
     */
    description?: string;
    /**
     * The name of the entitlement.
     */
    name: string;
    /**
     * The name of the stack.
     */
    stackName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEntitlementProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEntitlement {
    /**
     * An attribute that belongs to an entitlement.
     *
     * Application entitlements work by matching a supported SAML 2.0 attribute name to a value when a user identity federates to an AppStream 2.0 SAML application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-entitlement-attribute.html
     */
    interface AttributeProperty {
        /**
         * A supported AWS IAM SAML PrincipalTag attribute that is matched to a value when a user identity federates to an AppStream 2.0 SAML application.
         *
         * The following are supported values:
         *
         * - roles
         * - department
         * - organization
         * - groups
         * - title
         * - costCenter
         * - userType
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-entitlement-attribute.html#cfn-appstream-entitlement-attribute-name
         */
        readonly name: string;
        /**
         * A value that is matched to a supported SAML attribute name when a user identity federates to an AppStream 2.0 SAML application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-entitlement-attribute.html#cfn-appstream-entitlement-attribute-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnEntitlement`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html
 */
export interface CfnEntitlementProps {
    /**
     * Specifies whether to entitle all apps or only selected apps.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html#cfn-appstream-entitlement-appvisibility
     */
    readonly appVisibility: string;
    /**
     * The attributes of the entitlement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html#cfn-appstream-entitlement-attributes
     */
    readonly attributes: Array<CfnEntitlement.AttributeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of the entitlement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html#cfn-appstream-entitlement-description
     */
    readonly description?: string;
    /**
     * The name of the entitlement.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html#cfn-appstream-entitlement-name
     */
    readonly name: string;
    /**
     * The name of the stack.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html#cfn-appstream-entitlement-stackname
     */
    readonly stackName: string;
}
/**
 * The `AWS::AppStream::Fleet` resource creates a fleet for Amazon AppStream 2.0. A fleet consists of streaming instances that run a specified image when using Always-On or On-Demand.
 *
 * @cloudformationResource AWS::AppStream::Fleet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html
 */
export declare class CfnFleet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFleet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFleet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The desired capacity for the fleet.
     */
    computeCapacity?: CfnFleet.ComputeCapacityProperty | cdk.IResolvable;
    /**
     * The description to display.
     */
    description?: string;
    /**
     * The amount of time that a streaming session remains active after users disconnect.
     */
    disconnectTimeoutInSeconds?: number;
    /**
     * The fleet name to display.
     */
    displayName?: string;
    /**
     * The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain.
     */
    domainJoinInfo?: CfnFleet.DomainJoinInfoProperty | cdk.IResolvable;
    /**
     * Enables or disables default internet access for the fleet.
     */
    enableDefaultInternetAccess?: boolean | cdk.IResolvable;
    /**
     * The fleet type.
     */
    fleetType?: string;
    /**
     * The ARN of the IAM role that is applied to the fleet.
     */
    iamRoleArn?: string;
    /**
     * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `DisconnectTimeoutInSeconds` time interval begins.
     */
    idleDisconnectTimeoutInSeconds?: number;
    /**
     * The ARN of the public, private, or shared image to use.
     */
    imageArn?: string;
    /**
     * The name of the image used to create the fleet.
     */
    imageName?: string;
    /**
     * The instance type to use when launching fleet instances. The following instance types are available for non-Elastic fleets:.
     */
    instanceType: string;
    /**
     * The maximum number of concurrent sessions that can be run on an Elastic fleet.
     */
    maxConcurrentSessions?: number;
    /**
     * Max number of user sessions on an instance.
     */
    maxSessionsPerInstance?: number;
    /**
     * The maximum amount of time that a streaming session can remain active, in seconds.
     */
    maxUserDurationInSeconds?: number;
    /**
     * A unique name for the fleet.
     */
    name: string;
    /**
     * The platform of the fleet.
     */
    platform?: string;
    /**
     * The S3 location of the session scripts configuration zip file.
     */
    sessionScriptS3Location?: cdk.IResolvable | CfnFleet.S3LocationProperty;
    /**
     * The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays.
     */
    streamView?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client.
     */
    usbDeviceFilterStrings?: Array<string>;
    /**
     * The VPC configuration for the fleet.
     */
    vpcConfig?: cdk.IResolvable | CfnFleet.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFleetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFleet {
    /**
     * The desired capacity for a fleet.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-computecapacity.html
     */
    interface ComputeCapacityProperty {
        /**
         * The desired number of streaming instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-computecapacity.html#cfn-appstream-fleet-computecapacity-desiredinstances
         */
        readonly desiredInstances?: number;
        /**
         * The desired capacity in terms of number of user sessions, for the multi-session fleet.
         *
         * This is not allowed for single-session fleets.
         *
         * When you create a fleet, you must set define either the DesiredSessions or DesiredInstances attribute, based on the type of fleet you create. You can’t define both attributes or leave both attributes blank.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-computecapacity.html#cfn-appstream-fleet-computecapacity-desiredsessions
         */
        readonly desiredSessions?: number;
    }
    /**
     * The VPC configuration information for the fleet.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The identifiers of the security groups for the fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-vpcconfig.html#cfn-appstream-fleet-vpcconfig-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * The identifiers of the subnets to which a network interface is attached from the fleet instance.
         *
         * Fleet instances can use one or two subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-vpcconfig.html#cfn-appstream-fleet-vpcconfig-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
    /**
     * The name of the directory and organizational unit (OU) to use to join a fleet to a Microsoft Active Directory domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-domainjoininfo.html
     */
    interface DomainJoinInfoProperty {
        /**
         * The fully qualified name of the directory (for example, corp.example.com).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-domainjoininfo.html#cfn-appstream-fleet-domainjoininfo-directoryname
         */
        readonly directoryName?: string;
        /**
         * The distinguished name of the organizational unit for computer accounts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-domainjoininfo.html#cfn-appstream-fleet-domainjoininfo-organizationalunitdistinguishedname
         */
        readonly organizationalUnitDistinguishedName?: string;
    }
    /**
     * Describes the S3 location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The S3 bucket of the S3 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-s3location.html#cfn-appstream-fleet-s3location-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The S3 key of the S3 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-s3location.html#cfn-appstream-fleet-s3location-s3key
         */
        readonly s3Key: string;
    }
}
/**
 * Properties for defining a `CfnFleet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html
 */
export interface CfnFleetProps {
    /**
     * The desired capacity for the fleet.
     *
     * This is not allowed for Elastic fleets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-computecapacity
     */
    readonly computeCapacity?: CfnFleet.ComputeCapacityProperty | cdk.IResolvable;
    /**
     * The description to display.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-description
     */
    readonly description?: string;
    /**
     * The amount of time that a streaming session remains active after users disconnect.
     *
     * If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.
     *
     * Specify a value between 60 and 36000.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-disconnecttimeoutinseconds
     */
    readonly disconnectTimeoutInSeconds?: number;
    /**
     * The fleet name to display.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-displayname
     */
    readonly displayName?: string;
    /**
     * The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain.
     *
     * This is not allowed for Elastic fleets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-domainjoininfo
     */
    readonly domainJoinInfo?: CfnFleet.DomainJoinInfoProperty | cdk.IResolvable;
    /**
     * Enables or disables default internet access for the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-enabledefaultinternetaccess
     */
    readonly enableDefaultInternetAccess?: boolean | cdk.IResolvable;
    /**
     * The fleet type.
     *
     * - **ALWAYS_ON** - Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.
     * - **ON_DEMAND** - Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.
     * - **ELASTIC** - The pool of streaming instances is managed by Amazon AppStream 2.0. When a user selects their application or desktop to launch, they will start streaming after the app block has been downloaded and mounted to a streaming instance.
     *
     * *Allowed Values* : `ALWAYS_ON` | `ELASTIC` | `ON_DEMAND`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-fleettype
     */
    readonly fleetType?: string;
    /**
     * The ARN of the IAM role that is applied to the fleet.
     *
     * To assume a role, the fleet instance calls the AWS Security Token Service `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the *appstream_machine_role* credential profile on the instance.
     *
     * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the *Amazon AppStream 2.0 Administration Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-iamrolearn
     */
    readonly iamRoleArn?: string;
    /**
     * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `DisconnectTimeoutInSeconds` time interval begins.
     *
     * Users are notified before they are disconnected due to inactivity. If they try to reconnect to the streaming session before the time interval specified in `DisconnectTimeoutInSeconds` elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in `IdleDisconnectTimeoutInSeconds` elapses, they are disconnected.
     *
     * To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 36000.
     *
     * If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-idledisconnecttimeoutinseconds
     */
    readonly idleDisconnectTimeoutInSeconds?: number;
    /**
     * The ARN of the public, private, or shared image to use.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-imagearn
     */
    readonly imageArn?: string;
    /**
     * The name of the image used to create the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-imagename
     */
    readonly imageName?: string;
    /**
     * The instance type to use when launching fleet instances. The following instance types are available for non-Elastic fleets:.
     *
     * - stream.standard.small
     * - stream.standard.medium
     * - stream.standard.large
     * - stream.compute.large
     * - stream.compute.xlarge
     * - stream.compute.2xlarge
     * - stream.compute.4xlarge
     * - stream.compute.8xlarge
     * - stream.memory.large
     * - stream.memory.xlarge
     * - stream.memory.2xlarge
     * - stream.memory.4xlarge
     * - stream.memory.8xlarge
     * - stream.memory.z1d.large
     * - stream.memory.z1d.xlarge
     * - stream.memory.z1d.2xlarge
     * - stream.memory.z1d.3xlarge
     * - stream.memory.z1d.6xlarge
     * - stream.memory.z1d.12xlarge
     * - stream.graphics-design.large
     * - stream.graphics-design.xlarge
     * - stream.graphics-design.2xlarge
     * - stream.graphics-design.4xlarge
     * - stream.graphics-desktop.2xlarge
     * - stream.graphics.g4dn.xlarge
     * - stream.graphics.g4dn.2xlarge
     * - stream.graphics.g4dn.4xlarge
     * - stream.graphics.g4dn.8xlarge
     * - stream.graphics.g4dn.12xlarge
     * - stream.graphics.g4dn.16xlarge
     * - stream.graphics-pro.4xlarge
     * - stream.graphics-pro.8xlarge
     * - stream.graphics-pro.16xlarge
     *
     * The following instance types are available for Elastic fleets:
     *
     * - stream.standard.small
     * - stream.standard.medium
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-instancetype
     */
    readonly instanceType: string;
    /**
     * The maximum number of concurrent sessions that can be run on an Elastic fleet.
     *
     * This setting is required for Elastic fleets, but is not used for other fleet types.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-maxconcurrentsessions
     */
    readonly maxConcurrentSessions?: number;
    /**
     * Max number of user sessions on an instance.
     *
     * This is applicable only for multi-session fleets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-maxsessionsperinstance
     */
    readonly maxSessionsPerInstance?: number;
    /**
     * The maximum amount of time that a streaming session can remain active, in seconds.
     *
     * If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.
     *
     * Specify a value between 600 and 432000.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-maxuserdurationinseconds
     */
    readonly maxUserDurationInSeconds?: number;
    /**
     * A unique name for the fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-name
     */
    readonly name: string;
    /**
     * The platform of the fleet.
     *
     * Platform is a required setting for Elastic fleets, and is not used for other fleet types.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-platform
     */
    readonly platform?: string;
    /**
     * The S3 location of the session scripts configuration zip file.
     *
     * This only applies to Elastic fleets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-sessionscripts3location
     */
    readonly sessionScriptS3Location?: cdk.IResolvable | CfnFleet.S3LocationProperty;
    /**
     * The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays.
     *
     * The default value is `APP` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-streamview
     */
    readonly streamView?: string;
    /**
     * An array of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client.
     *
     * This is allowed but not required for Elastic fleets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-usbdevicefilterstrings
     */
    readonly usbDeviceFilterStrings?: Array<string>;
    /**
     * The VPC configuration for the fleet.
     *
     * This is required for Elastic fleets, but not required for other fleet types.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html#cfn-appstream-fleet-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnFleet.VpcConfigProperty;
}
/**
 * The `AWS::AppStream::ImageBuilder` resource creates an image builder for Amazon AppStream 2.0. An image builder is a virtual machine that is used to create an image.
 *
 * The initial state of the image builder is `PENDING` . When it is ready, the state is `RUNNING` .
 *
 * @cloudformationResource AWS::AppStream::ImageBuilder
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html
 */
export declare class CfnImageBuilder extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnImageBuilder from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnImageBuilder;
    /**
     * The URL to start an image builder streaming session, returned as a string.
     *
     * @cloudformationAttribute StreamingUrl
     */
    readonly attrStreamingUrl: string;
    /**
     * The list of virtual private cloud (VPC) interface endpoint objects.
     */
    accessEndpoints?: Array<CfnImageBuilder.AccessEndpointProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST].
     */
    appstreamAgentVersion?: string;
    /**
     * The description to display.
     */
    description?: string;
    /**
     * The image builder name to display.
     */
    displayName?: string;
    /**
     * The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain.
     */
    domainJoinInfo?: CfnImageBuilder.DomainJoinInfoProperty | cdk.IResolvable;
    /**
     * Enables or disables default internet access for the image builder.
     */
    enableDefaultInternetAccess?: boolean | cdk.IResolvable;
    /**
     * The ARN of the IAM role that is applied to the image builder.
     */
    iamRoleArn?: string;
    /**
     * The ARN of the public, private, or shared image to use.
     */
    imageArn?: string;
    /**
     * The name of the image used to create the image builder.
     */
    imageName?: string;
    /**
     * The instance type to use when launching the image builder. The following instance types are available:.
     */
    instanceType: string;
    /**
     * A unique name for the image builder.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The VPC configuration for the image builder.
     */
    vpcConfig?: cdk.IResolvable | CfnImageBuilder.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnImageBuilderProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnImageBuilder {
    /**
     * The VPC configuration for the image builder.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * The identifiers of the security groups for the image builder.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-vpcconfig.html#cfn-appstream-imagebuilder-vpcconfig-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * The identifier of the subnet to which a network interface is attached from the image builder instance.
         *
         * An image builder instance can use one subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-vpcconfig.html#cfn-appstream-imagebuilder-vpcconfig-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
    /**
     * The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-domainjoininfo.html
     */
    interface DomainJoinInfoProperty {
        /**
         * The fully qualified name of the directory (for example, corp.example.com).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-domainjoininfo.html#cfn-appstream-imagebuilder-domainjoininfo-directoryname
         */
        readonly directoryName?: string;
        /**
         * The distinguished name of the organizational unit for computer accounts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-domainjoininfo.html#cfn-appstream-imagebuilder-domainjoininfo-organizationalunitdistinguishedname
         */
        readonly organizationalUnitDistinguishedName?: string;
    }
    /**
     * Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-accessendpoint.html
     */
    interface AccessEndpointProperty {
        /**
         * The type of interface endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-accessendpoint.html#cfn-appstream-imagebuilder-accessendpoint-endpointtype
         */
        readonly endpointType: string;
        /**
         * The identifier (ID) of the VPC in which the interface endpoint is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-imagebuilder-accessendpoint.html#cfn-appstream-imagebuilder-accessendpoint-vpceid
         */
        readonly vpceId: string;
    }
}
/**
 * Properties for defining a `CfnImageBuilder`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html
 */
export interface CfnImageBuilderProps {
    /**
     * The list of virtual private cloud (VPC) interface endpoint objects.
     *
     * Administrators can connect to the image builder only through the specified endpoints.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-accessendpoints
     */
    readonly accessEndpoints?: Array<CfnImageBuilder.AccessEndpointProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST].
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-appstreamagentversion
     */
    readonly appstreamAgentVersion?: string;
    /**
     * The description to display.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-description
     */
    readonly description?: string;
    /**
     * The image builder name to display.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-displayname
     */
    readonly displayName?: string;
    /**
     * The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-domainjoininfo
     */
    readonly domainJoinInfo?: CfnImageBuilder.DomainJoinInfoProperty | cdk.IResolvable;
    /**
     * Enables or disables default internet access for the image builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-enabledefaultinternetaccess
     */
    readonly enableDefaultInternetAccess?: boolean | cdk.IResolvable;
    /**
     * The ARN of the IAM role that is applied to the image builder.
     *
     * To assume a role, the image builder calls the AWS Security Token Service `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the *appstream_machine_role* credential profile on the instance.
     *
     * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the *Amazon AppStream 2.0 Administration Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-iamrolearn
     */
    readonly iamRoleArn?: string;
    /**
     * The ARN of the public, private, or shared image to use.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-imagearn
     */
    readonly imageArn?: string;
    /**
     * The name of the image used to create the image builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-imagename
     */
    readonly imageName?: string;
    /**
     * The instance type to use when launching the image builder. The following instance types are available:.
     *
     * - stream.standard.small
     * - stream.standard.medium
     * - stream.standard.large
     * - stream.compute.large
     * - stream.compute.xlarge
     * - stream.compute.2xlarge
     * - stream.compute.4xlarge
     * - stream.compute.8xlarge
     * - stream.memory.large
     * - stream.memory.xlarge
     * - stream.memory.2xlarge
     * - stream.memory.4xlarge
     * - stream.memory.8xlarge
     * - stream.memory.z1d.large
     * - stream.memory.z1d.xlarge
     * - stream.memory.z1d.2xlarge
     * - stream.memory.z1d.3xlarge
     * - stream.memory.z1d.6xlarge
     * - stream.memory.z1d.12xlarge
     * - stream.graphics-design.large
     * - stream.graphics-design.xlarge
     * - stream.graphics-design.2xlarge
     * - stream.graphics-design.4xlarge
     * - stream.graphics-desktop.2xlarge
     * - stream.graphics.g4dn.xlarge
     * - stream.graphics.g4dn.2xlarge
     * - stream.graphics.g4dn.4xlarge
     * - stream.graphics.g4dn.8xlarge
     * - stream.graphics.g4dn.12xlarge
     * - stream.graphics.g4dn.16xlarge
     * - stream.graphics-pro.4xlarge
     * - stream.graphics-pro.8xlarge
     * - stream.graphics-pro.16xlarge
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-instancetype
     */
    readonly instanceType: string;
    /**
     * A unique name for the image builder.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-name
     */
    readonly name: string;
    /**
     * An array of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The VPC configuration for the image builder.
     *
     * You can specify only one subnet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html#cfn-appstream-imagebuilder-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnImageBuilder.VpcConfigProperty;
}
/**
 * The `AWS::AppStream::Stack` resource creates a stack to start streaming applications to Amazon AppStream 2.0 users. A stack consists of an associated fleet, user access policies, and storage configurations.
 *
 * @cloudformationResource AWS::AppStream::Stack
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html
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
     * The list of virtual private cloud (VPC) interface endpoint objects.
     */
    accessEndpoints?: Array<CfnStack.AccessEndpointProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The persistent application settings for users of the stack.
     */
    applicationSettings?: CfnStack.ApplicationSettingsProperty | cdk.IResolvable;
    /**
     * The stack attributes to delete.
     */
    attributesToDelete?: Array<string>;
    /**
     * *This parameter has been deprecated.*.
     */
    deleteStorageConnectors?: boolean | cdk.IResolvable;
    /**
     * The description to display.
     */
    description?: string;
    /**
     * The stack name to display.
     */
    displayName?: string;
    /**
     * The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.
     */
    embedHostDomains?: Array<string>;
    /**
     * The URL that users are redirected to after they click the Send Feedback link.
     */
    feedbackUrl?: string;
    /**
     * The name of the stack.
     */
    name?: string;
    /**
     * The URL that users are redirected to after their streaming session ends.
     */
    redirectUrl?: string;
    /**
     * The storage connectors to enable.
     */
    storageConnectors?: Array<cdk.IResolvable | CfnStack.StorageConnectorProperty> | cdk.IResolvable;
    /**
     * The streaming protocol that you want your stack to prefer.
     */
    streamingExperienceSettings?: cdk.IResolvable | CfnStack.StreamingExperienceSettingsProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The actions that are enabled or disabled for users during their streaming sessions.
     */
    userSettings?: Array<cdk.IResolvable | CfnStack.UserSettingProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnStackProps);
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
     * A connector that enables persistent storage for users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-storageconnector.html
     */
    interface StorageConnectorProperty {
        /**
         * The type of storage connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-storageconnector.html#cfn-appstream-stack-storageconnector-connectortype
         */
        readonly connectorType: string;
        /**
         * The names of the domains for the account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-storageconnector.html#cfn-appstream-stack-storageconnector-domains
         */
        readonly domains?: Array<string>;
        /**
         * The ARN of the storage connector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-storageconnector.html#cfn-appstream-stack-storageconnector-resourceidentifier
         */
        readonly resourceIdentifier?: string;
    }
    /**
     * Specifies an action and whether the action is enabled or disabled for users during their streaming sessions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-usersetting.html
     */
    interface UserSettingProperty {
        /**
         * The action that is enabled or disabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-usersetting.html#cfn-appstream-stack-usersetting-action
         */
        readonly action: string;
        /**
         * Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session.
         *
         * This can be specified only for the `CLIPBOARD_COPY_FROM_LOCAL_DEVICE` and `CLIPBOARD_COPY_TO_LOCAL_DEVICE` actions.
         *
         * This defaults to 20,971,520 (20 MB) when unspecified and the permission is `ENABLED` . This can't be specified when the permission is `DISABLED` .
         *
         * The value can be between 1 and 20,971,520 (20 MB).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-usersetting.html#cfn-appstream-stack-usersetting-maximumlength
         */
        readonly maximumLength?: number;
        /**
         * Indicates whether the action is enabled or disabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-usersetting.html#cfn-appstream-stack-usersetting-permission
         */
        readonly permission: string;
    }
    /**
     * The streaming protocol that you want your stack to prefer.
     *
     * This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-streamingexperiencesettings.html
     */
    interface StreamingExperienceSettingsProperty {
        /**
         * The preferred protocol that you want to use while streaming your application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-streamingexperiencesettings.html#cfn-appstream-stack-streamingexperiencesettings-preferredprotocol
         */
        readonly preferredProtocol?: string;
    }
    /**
     * The persistent application settings for users of a stack.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-applicationsettings.html
     */
    interface ApplicationSettingsProperty {
        /**
         * Enables or disables persistent application settings for users during their streaming sessions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-applicationsettings.html#cfn-appstream-stack-applicationsettings-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The path prefix for the S3 bucket where users’ persistent application settings are stored.
         *
         * You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-applicationsettings.html#cfn-appstream-stack-applicationsettings-settingsgroup
         */
        readonly settingsGroup?: string;
    }
    /**
     * Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-accessendpoint.html
     */
    interface AccessEndpointProperty {
        /**
         * The type of interface endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-accessendpoint.html#cfn-appstream-stack-accessendpoint-endpointtype
         */
        readonly endpointType: string;
        /**
         * The identifier (ID) of the VPC in which the interface endpoint is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-accessendpoint.html#cfn-appstream-stack-accessendpoint-vpceid
         */
        readonly vpceId: string;
    }
}
/**
 * Properties for defining a `CfnStack`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html
 */
export interface CfnStackProps {
    /**
     * The list of virtual private cloud (VPC) interface endpoint objects.
     *
     * Users of the stack can connect to AppStream 2.0 only through the specified endpoints.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-accessendpoints
     */
    readonly accessEndpoints?: Array<CfnStack.AccessEndpointProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The persistent application settings for users of the stack.
     *
     * When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-applicationsettings
     */
    readonly applicationSettings?: CfnStack.ApplicationSettingsProperty | cdk.IResolvable;
    /**
     * The stack attributes to delete.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-attributestodelete
     */
    readonly attributesToDelete?: Array<string>;
    /**
     * *This parameter has been deprecated.*.
     *
     * Deletes the storage connectors currently enabled for the stack.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-deletestorageconnectors
     */
    readonly deleteStorageConnectors?: boolean | cdk.IResolvable;
    /**
     * The description to display.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-description
     */
    readonly description?: string;
    /**
     * The stack name to display.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-displayname
     */
    readonly displayName?: string;
    /**
     * The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-embedhostdomains
     */
    readonly embedHostDomains?: Array<string>;
    /**
     * The URL that users are redirected to after they click the Send Feedback link.
     *
     * If no URL is specified, no Send Feedback link is displayed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-feedbackurl
     */
    readonly feedbackUrl?: string;
    /**
     * The name of the stack.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-name
     */
    readonly name?: string;
    /**
     * The URL that users are redirected to after their streaming session ends.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-redirecturl
     */
    readonly redirectUrl?: string;
    /**
     * The storage connectors to enable.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-storageconnectors
     */
    readonly storageConnectors?: Array<cdk.IResolvable | CfnStack.StorageConnectorProperty> | cdk.IResolvable;
    /**
     * The streaming protocol that you want your stack to prefer.
     *
     * This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-streamingexperiencesettings
     */
    readonly streamingExperienceSettings?: cdk.IResolvable | CfnStack.StreamingExperienceSettingsProperty;
    /**
     * An array of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The actions that are enabled or disabled for users during their streaming sessions.
     *
     * By default, these actions are enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-usersettings
     */
    readonly userSettings?: Array<cdk.IResolvable | CfnStack.UserSettingProperty> | cdk.IResolvable;
}
/**
 * The `AWS::AppStream::StackFleetAssociation` resource associates the specified fleet with the specified stack for Amazon AppStream 2.0.
 *
 * @cloudformationResource AWS::AppStream::StackFleetAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html
 */
export declare class CfnStackFleetAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStackFleetAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStackFleetAssociation;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the fleet.
     */
    fleetName: string;
    /**
     * The name of the stack.
     */
    stackName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStackFleetAssociationProps);
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
 * Properties for defining a `CfnStackFleetAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html
 */
export interface CfnStackFleetAssociationProps {
    /**
     * The name of the fleet.
     *
     * To associate a fleet with a stack, you must specify a dependency on the fleet resource. For more information, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html#cfn-appstream-stackfleetassociation-fleetname
     */
    readonly fleetName: string;
    /**
     * The name of the stack.
     *
     * To associate a fleet with a stack, you must specify a dependency on the stack resource. For more information, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html#cfn-appstream-stackfleetassociation-stackname
     */
    readonly stackName: string;
}
/**
 * The `AWS::AppStream::StackUserAssociation` resource associates the specified users with the specified stacks for Amazon AppStream 2.0. Users in an AppStream 2.0 user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
 *
 * @cloudformationResource AWS::AppStream::StackUserAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html
 */
export declare class CfnStackUserAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStackUserAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStackUserAssociation;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The authentication type for the user who is associated with the stack.
     */
    authenticationType: string;
    /**
     * Specifies whether a welcome email is sent to a user after the user is created in the user pool.
     */
    sendEmailNotification?: boolean | cdk.IResolvable;
    /**
     * The name of the stack that is associated with the user.
     */
    stackName: string;
    /**
     * The email address of the user who is associated with the stack.
     */
    userName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStackUserAssociationProps);
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
 * Properties for defining a `CfnStackUserAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html
 */
export interface CfnStackUserAssociationProps {
    /**
     * The authentication type for the user who is associated with the stack.
     *
     * You must specify USERPOOL.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html#cfn-appstream-stackuserassociation-authenticationtype
     */
    readonly authenticationType: string;
    /**
     * Specifies whether a welcome email is sent to a user after the user is created in the user pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html#cfn-appstream-stackuserassociation-sendemailnotification
     */
    readonly sendEmailNotification?: boolean | cdk.IResolvable;
    /**
     * The name of the stack that is associated with the user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html#cfn-appstream-stackuserassociation-stackname
     */
    readonly stackName: string;
    /**
     * The email address of the user who is associated with the stack.
     *
     * > Users' email addresses are case-sensitive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html#cfn-appstream-stackuserassociation-username
     */
    readonly userName: string;
}
/**
 * The `AWS::AppStream::User` resource creates a new user in the AppStream 2.0 user pool.
 *
 * @cloudformationResource AWS::AppStream::User
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html
 */
export declare class CfnUser extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUser from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUser;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The authentication type for the user.
     */
    authenticationType: string;
    /**
     * The first name, or given name, of the user.
     */
    firstName?: string;
    /**
     * The last name, or surname, of the user.
     */
    lastName?: string;
    /**
     * The action to take for the welcome email that is sent to a user after the user is created in the user pool.
     */
    messageAction?: string;
    /**
     * The email address of the user.
     */
    userName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserProps);
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
 * Properties for defining a `CfnUser`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html
 */
export interface CfnUserProps {
    /**
     * The authentication type for the user.
     *
     * You must specify USERPOOL.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-authenticationtype
     */
    readonly authenticationType: string;
    /**
     * The first name, or given name, of the user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-firstname
     */
    readonly firstName?: string;
    /**
     * The last name, or surname, of the user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-lastname
     */
    readonly lastName?: string;
    /**
     * The action to take for the welcome email that is sent to a user after the user is created in the user pool.
     *
     * If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent.
     *
     * > The temporary password in the welcome email is valid for only 7 days. If users don’t set their passwords within 7 days, you must send them a new welcome email.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-messageaction
     */
    readonly messageAction?: string;
    /**
     * The email address of the user.
     *
     * Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-username
     */
    readonly userName: string;
}
