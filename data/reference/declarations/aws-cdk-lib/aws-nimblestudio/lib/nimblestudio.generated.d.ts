import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::NimbleStudio::LaunchProfile` resource represents access permissions for a set of studio components, including types of workstations, render farms, and shared file systems.
 *
 * Launch profiles are shared with studio users to give them access to the set of studio components.
 *
 * @cloudformationResource AWS::NimbleStudio::LaunchProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html
 */
export declare class CfnLaunchProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLaunchProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLaunchProfile;
    /**
     * The unique identifier for the launch profile resource.
     *
     * @cloudformationAttribute LaunchProfileId
     */
    readonly attrLaunchProfileId: string;
    /**
     * A human-readable description of the launch profile.
     */
    description?: string;
    /**
     * Unique identifiers for a collection of EC2 subnets.
     */
    ec2SubnetIds: Array<string>;
    /**
     * The version number of the protocol that is used by the launch profile.
     */
    launchProfileProtocolVersions: Array<string>;
    /**
     * A friendly name for the launch profile.
     */
    name: string;
    /**
     * A configuration for a streaming session.
     */
    streamConfiguration: cdk.IResolvable | CfnLaunchProfile.StreamConfigurationProperty;
    /**
     * Unique identifiers for a collection of studio components that can be used with this launch profile.
     */
    studioComponentIds: Array<string>;
    /**
     * The unique identifier for a studio resource.
     */
    studioId: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnLaunchProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLaunchProfile {
    /**
     * A configuration for a streaming session.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html
     */
    interface StreamConfigurationProperty {
        /**
         * Indicates if a streaming session created from this launch profile should be terminated automatically or retained without termination after being in a `STOPPED` state.
         *
         * - When `ACTIVATED` , the streaming session is scheduled for termination after being in the `STOPPED` state for the time specified in `maxStoppedSessionLengthInMinutes` .
         * - When `DEACTIVATED` , the streaming session can remain in the `STOPPED` state indefinitely.
         *
         * This parameter is only allowed when `sessionPersistenceMode` is `ACTIVATED` . When allowed, the default value for this parameter is `DEACTIVATED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-automaticterminationmode
         */
        readonly automaticTerminationMode?: string;
        /**
         * Allows or deactivates the use of the system clipboard to copy and paste between the streaming session and streaming client.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-clipboardmode
         */
        readonly clipboardMode: string;
        /**
         * The EC2 instance types that users can select from when launching a streaming session with this launch profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-ec2instancetypes
         */
        readonly ec2InstanceTypes: Array<string>;
        /**
         * The length of time, in minutes, that a streaming session can be active before it is stopped or terminated.
         *
         * After this point, Nimble Studio automatically terminates or stops the session. The default length of time is 690 minutes, and the maximum length of time is 30 days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-maxsessionlengthinminutes
         */
        readonly maxSessionLengthInMinutes?: number;
        /**
         * Integer that determines if you can start and stop your sessions and how long a session can stay in the `STOPPED` state.
         *
         * The default value is 0. The maximum value is 5760.
         *
         * This field is allowed only when `sessionPersistenceMode` is `ACTIVATED` and `automaticTerminationMode` is `ACTIVATED` .
         *
         * If the value is set to 0, your sessions can’t be `STOPPED` . If you then call `StopStreamingSession` , the session fails. If the time that a session stays in the `READY` state exceeds the `maxSessionLengthInMinutes` value, the session will automatically be terminated (instead of `STOPPED` ).
         *
         * If the value is set to a positive number, the session can be stopped. You can call `StopStreamingSession` to stop sessions in the `READY` state. If the time that a session stays in the `READY` state exceeds the `maxSessionLengthInMinutes` value, the session will automatically be stopped (instead of terminated).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-maxstoppedsessionlengthinminutes
         */
        readonly maxStoppedSessionLengthInMinutes?: number;
        /**
         * Information about the streaming session backup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-sessionbackup
         */
        readonly sessionBackup?: cdk.IResolvable | CfnLaunchProfile.StreamConfigurationSessionBackupProperty;
        /**
         * Determine if a streaming session created from this launch profile can configure persistent storage.
         *
         * This means that `volumeConfiguration` and `automaticTerminationMode` are configured.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-sessionpersistencemode
         */
        readonly sessionPersistenceMode?: string;
        /**
         * The upload storage for a streaming session.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-sessionstorage
         */
        readonly sessionStorage?: cdk.IResolvable | CfnLaunchProfile.StreamConfigurationSessionStorageProperty;
        /**
         * The streaming images that users can select from when launching a streaming session with this launch profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-streamingimageids
         */
        readonly streamingImageIds: Array<string>;
        /**
         * Custom volume configuration for the root volumes that are attached to streaming sessions.
         *
         * This parameter is only allowed when `sessionPersistenceMode` is `ACTIVATED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html#cfn-nimblestudio-launchprofile-streamconfiguration-volumeconfiguration
         */
        readonly volumeConfiguration?: cdk.IResolvable | CfnLaunchProfile.VolumeConfigurationProperty;
    }
    /**
     * Configures how streaming sessions are backed up when launched from this launch profile.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionbackup.html
     */
    interface StreamConfigurationSessionBackupProperty {
        /**
         * The maximum number of backups that each streaming session created from this launch profile can have.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionbackup.html#cfn-nimblestudio-launchprofile-streamconfigurationsessionbackup-maxbackupstoretain
         */
        readonly maxBackupsToRetain?: number;
        /**
         * Specifies how artists sessions are backed up.
         *
         * Configures backups for streaming sessions launched with this launch profile. The default value is `DEACTIVATED` , which means that backups are deactivated. To allow backups, set this value to `AUTOMATIC` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionbackup.html#cfn-nimblestudio-launchprofile-streamconfigurationsessionbackup-mode
         */
        readonly mode?: string;
    }
    /**
     * The configuration for a streaming session’s upload storage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionstorage.html
     */
    interface StreamConfigurationSessionStorageProperty {
        /**
         * Allows artists to upload files to their workstations.
         *
         * The only valid option is `UPLOAD` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionstorage.html#cfn-nimblestudio-launchprofile-streamconfigurationsessionstorage-mode
         */
        readonly mode: Array<string>;
        /**
         * The configuration for the upload storage root of the streaming session.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionstorage.html#cfn-nimblestudio-launchprofile-streamconfigurationsessionstorage-root
         */
        readonly root?: cdk.IResolvable | CfnLaunchProfile.StreamingSessionStorageRootProperty;
    }
    /**
     * The upload storage root location (folder) on streaming workstations where files are uploaded.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamingsessionstorageroot.html
     */
    interface StreamingSessionStorageRootProperty {
        /**
         * The folder path in Linux workstations where files are uploaded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamingsessionstorageroot.html#cfn-nimblestudio-launchprofile-streamingsessionstorageroot-linux
         */
        readonly linux?: string;
        /**
         * The folder path in Windows workstations where files are uploaded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamingsessionstorageroot.html#cfn-nimblestudio-launchprofile-streamingsessionstorageroot-windows
         */
        readonly windows?: string;
    }
    /**
     * Custom volume configuration for the root volumes that are attached to streaming sessions.
     *
     * This parameter is only allowed when `sessionPersistenceMode` is `ACTIVATED` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-volumeconfiguration.html
     */
    interface VolumeConfigurationProperty {
        /**
         * The number of I/O operations per second for the root volume that is attached to streaming session.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-volumeconfiguration.html#cfn-nimblestudio-launchprofile-volumeconfiguration-iops
         */
        readonly iops?: number;
        /**
         * The size of the root volume that is attached to the streaming session.
         *
         * The root volume size is measured in GiBs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-volumeconfiguration.html#cfn-nimblestudio-launchprofile-volumeconfiguration-size
         */
        readonly size?: number;
        /**
         * The throughput to provision for the root volume that is attached to the streaming session.
         *
         * The throughput is measured in MiB/s.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-volumeconfiguration.html#cfn-nimblestudio-launchprofile-volumeconfiguration-throughput
         */
        readonly throughput?: number;
    }
}
/**
 * Properties for defining a `CfnLaunchProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html
 */
export interface CfnLaunchProfileProps {
    /**
     * A human-readable description of the launch profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-description
     */
    readonly description?: string;
    /**
     * Unique identifiers for a collection of EC2 subnets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-ec2subnetids
     */
    readonly ec2SubnetIds: Array<string>;
    /**
     * The version number of the protocol that is used by the launch profile.
     *
     * The only valid version is "2021-03-31".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-launchprofileprotocolversions
     */
    readonly launchProfileProtocolVersions: Array<string>;
    /**
     * A friendly name for the launch profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-name
     */
    readonly name: string;
    /**
     * A configuration for a streaming session.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration
     */
    readonly streamConfiguration: cdk.IResolvable | CfnLaunchProfile.StreamConfigurationProperty;
    /**
     * Unique identifiers for a collection of studio components that can be used with this launch profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-studiocomponentids
     */
    readonly studioComponentIds: Array<string>;
    /**
     * The unique identifier for a studio resource.
     *
     * In Nimble Studio, all other resources are contained in a studio resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-studioid
     */
    readonly studioId: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * The `AWS::NimbleStudio::StreamingImage` resource creates a streaming image in a studio.
 *
 * A streaming image defines the operating system and software to be used in an  streaming session.
 *
 * @cloudformationResource AWS::NimbleStudio::StreamingImage
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html
 */
export declare class CfnStreamingImage extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStreamingImage from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStreamingImage;
    /**
     * @cloudformationAttribute EncryptionConfiguration
     */
    readonly attrEncryptionConfiguration: cdk.IResolvable;
    /**
     * @cloudformationAttribute EncryptionConfiguration.KeyArn
     */
    readonly attrEncryptionConfigurationKeyArn: string;
    /**
     * @cloudformationAttribute EncryptionConfiguration.KeyType
     */
    readonly attrEncryptionConfigurationKeyType: string;
    /**
     * The list of IDs of EULAs that must be accepted before a streaming session can be started using this streaming image.
     *
     * @cloudformationAttribute EulaIds
     */
    readonly attrEulaIds: Array<string>;
    /**
     * The owner of the streaming image, either the studioId that contains the streaming image or 'amazon' for images that are provided by  .
     *
     * @cloudformationAttribute Owner
     */
    readonly attrOwner: string;
    /**
     * The platform of the streaming image, either WINDOWS or LINUX.
     *
     * @cloudformationAttribute Platform
     */
    readonly attrPlatform: string;
    /**
     * The unique identifier for the streaming image resource.
     *
     * @cloudformationAttribute StreamingImageId
     */
    readonly attrStreamingImageId: string;
    /**
     * A human-readable description of the streaming image.
     */
    description?: string;
    /**
     * The ID of an EC2 machine image with which to create the streaming image.
     */
    ec2ImageId: string;
    /**
     * A friendly name for a streaming image resource.
     */
    name: string;
    /**
     * The unique identifier for a studio resource.
     */
    studioId: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnStreamingImageProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStreamingImage {
    /**
     * Specifies how a streaming image is encrypted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-streamingimage-streamingimageencryptionconfiguration.html
     */
    interface StreamingImageEncryptionConfigurationProperty {
        /**
         * The ARN for a KMS key that is used to encrypt studio data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-streamingimage-streamingimageencryptionconfiguration.html#cfn-nimblestudio-streamingimage-streamingimageencryptionconfiguration-keyarn
         */
        readonly keyArn?: string;
        /**
         * The type of KMS key that is used to encrypt studio data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-streamingimage-streamingimageencryptionconfiguration.html#cfn-nimblestudio-streamingimage-streamingimageencryptionconfiguration-keytype
         */
        readonly keyType: string;
    }
}
/**
 * Properties for defining a `CfnStreamingImage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html
 */
export interface CfnStreamingImageProps {
    /**
     * A human-readable description of the streaming image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html#cfn-nimblestudio-streamingimage-description
     */
    readonly description?: string;
    /**
     * The ID of an EC2 machine image with which to create the streaming image.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html#cfn-nimblestudio-streamingimage-ec2imageid
     */
    readonly ec2ImageId: string;
    /**
     * A friendly name for a streaming image resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html#cfn-nimblestudio-streamingimage-name
     */
    readonly name: string;
    /**
     * The unique identifier for a studio resource.
     *
     * In Nimble Studio, all other resources are contained in a studio resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html#cfn-nimblestudio-streamingimage-studioid
     */
    readonly studioId: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html#cfn-nimblestudio-streamingimage-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * The `AWS::NimbleStudio::Studio` resource creates a new studio resource. In  , all other resources are contained in a studio.
 *
 * When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the  portal. The user role must have the AmazonNimbleStudio-StudioUser managed policy attached for the portal to function properly. The Admin Role must have the AmazonNimbleStudio-StudioAdmin managed policy attached for the portal to function properly.
 *
 * You can optionally specify an AWS Key Management Service key in the StudioEncryptionConfiguration. In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an AWS Key Management Service key. By default, this key is owned by AWS and managed on your behalf. You may provide your own AWS Key Management Service key when calling CreateStudio to encrypt this data using a key that you own and manage. When providing an AWS Key Management Service key during studio creation,  creates AWS Key Management Service grants in your account to provide your studio user and admin roles access to these AWS Key Management Service keys. If you delete this grant, the studio will no longer be accessible to your portal users. If you delete the studio AWS Key Management Service key, your studio will no longer be accessible.
 *
 * @cloudformationResource AWS::NimbleStudio::Studio
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html
 */
export declare class CfnStudio extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStudio from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStudio;
    /**
     * The AWS Region where the studio resource is located. For example, `us-west-2` .
     *
     * @cloudformationAttribute HomeRegion
     */
    readonly attrHomeRegion: string;
    /**
     * The IAM Identity Center application client ID that is used to integrate with IAM Identity Center , which enables IAM Identity Center users to log into the  portal.
     *
     * @cloudformationAttribute SsoClientId
     */
    readonly attrSsoClientId: string;
    /**
     * The unique identifier for the studio resource.
     *
     * @cloudformationAttribute StudioId
     */
    readonly attrStudioId: string;
    /**
     * The unique identifier for the studio resource.
     *
     * @cloudformationAttribute StudioUrl
     */
    readonly attrStudioUrl: string;
    /**
     * The IAM role that studio admins assume when logging in to the Nimble Studio portal.
     */
    adminRoleArn: string;
    /**
     * A friendly name for the studio.
     */
    displayName: string;
    /**
     * Configuration of the encryption method that is used for the studio.
     */
    studioEncryptionConfiguration?: cdk.IResolvable | CfnStudio.StudioEncryptionConfigurationProperty;
    /**
     * The name of the studio, as included in the URL when accessing it in the Nimble Studio portal.
     */
    studioName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The IAM role that studio users assume when logging in to the Nimble Studio portal.
     */
    userRoleArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStudioProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStudio {
    /**
     * Configuration of the encryption method that is used for the studio.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studio-studioencryptionconfiguration.html
     */
    interface StudioEncryptionConfigurationProperty {
        /**
         * The ARN for a KMS key that is used to encrypt studio data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studio-studioencryptionconfiguration.html#cfn-nimblestudio-studio-studioencryptionconfiguration-keyarn
         */
        readonly keyArn?: string;
        /**
         * The type of KMS key that is used to encrypt studio data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studio-studioencryptionconfiguration.html#cfn-nimblestudio-studio-studioencryptionconfiguration-keytype
         */
        readonly keyType: string;
    }
}
/**
 * Properties for defining a `CfnStudio`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html
 */
export interface CfnStudioProps {
    /**
     * The IAM role that studio admins assume when logging in to the Nimble Studio portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html#cfn-nimblestudio-studio-adminrolearn
     */
    readonly adminRoleArn: string;
    /**
     * A friendly name for the studio.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html#cfn-nimblestudio-studio-displayname
     */
    readonly displayName: string;
    /**
     * Configuration of the encryption method that is used for the studio.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html#cfn-nimblestudio-studio-studioencryptionconfiguration
     */
    readonly studioEncryptionConfiguration?: cdk.IResolvable | CfnStudio.StudioEncryptionConfigurationProperty;
    /**
     * The name of the studio, as included in the URL when accessing it in the Nimble Studio portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html#cfn-nimblestudio-studio-studioname
     */
    readonly studioName: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html#cfn-nimblestudio-studio-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The IAM role that studio users assume when logging in to the Nimble Studio portal.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html#cfn-nimblestudio-studio-userrolearn
     */
    readonly userRoleArn: string;
}
/**
 * The `AWS::NimbleStudio::StudioComponent` resource represents a network resource that is used by a studio's users and workflows.
 *
 * A typical studio contains studio components for the following: a render farm, an Active Directory, a licensing service, and a shared file system.
 *
 * Access to a studio component is managed by specifying security groups for the resource, as well as its endpoint.
 *
 * A studio component also has a set of initialization scripts, which are returned by `GetLaunchProfileInitialization` . These initialization scripts run on streaming sessions when they start. They provide users with flexibility in controlling how studio resources are configured on a streaming session.
 *
 * @cloudformationResource AWS::NimbleStudio::StudioComponent
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html
 */
export declare class CfnStudioComponent extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStudioComponent from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStudioComponent;
    /**
     * The unique identifier for the studio component resource.
     *
     * @cloudformationAttribute StudioComponentId
     */
    readonly attrStudioComponentId: string;
    /**
     * The configuration of the studio component, based on component type.
     */
    configuration?: cdk.IResolvable | CfnStudioComponent.StudioComponentConfigurationProperty;
    /**
     * A human-readable description for the studio component resource.
     */
    description?: string;
    /**
     * The EC2 security groups that control access to the studio component.
     */
    ec2SecurityGroupIds?: Array<string>;
    /**
     * Initialization scripts for studio components.
     */
    initializationScripts?: Array<cdk.IResolvable | CfnStudioComponent.StudioComponentInitializationScriptProperty> | cdk.IResolvable;
    /**
     * A friendly name for the studio component resource.
     */
    name: string;
    /**
     * Parameters for the studio component scripts.
     */
    scriptParameters?: Array<cdk.IResolvable | CfnStudioComponent.ScriptParameterKeyValueProperty> | cdk.IResolvable;
    /**
     * The unique identifier for a studio resource.
     */
    studioId: string;
    /**
     * The specific subtype of a studio component.
     */
    subtype?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The type of the studio component.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStudioComponentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStudioComponent {
    /**
     * The configuration of the studio component, based on component type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.html
     */
    interface StudioComponentConfigurationProperty {
        /**
         * The configuration for a AWS Directory Service for Microsoft Active Directory studio resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.html#cfn-nimblestudio-studiocomponent-studiocomponentconfiguration-activedirectoryconfiguration
         */
        readonly activeDirectoryConfiguration?: CfnStudioComponent.ActiveDirectoryConfigurationProperty | cdk.IResolvable;
        /**
         * The configuration for a render farm that is associated with a studio resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.html#cfn-nimblestudio-studiocomponent-studiocomponentconfiguration-computefarmconfiguration
         */
        readonly computeFarmConfiguration?: CfnStudioComponent.ComputeFarmConfigurationProperty | cdk.IResolvable;
        /**
         * The configuration for a license service that is associated with a studio resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.html#cfn-nimblestudio-studiocomponent-studiocomponentconfiguration-licenseserviceconfiguration
         */
        readonly licenseServiceConfiguration?: cdk.IResolvable | CfnStudioComponent.LicenseServiceConfigurationProperty;
        /**
         * The configuration for a shared file storage system that is associated with a studio resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.html#cfn-nimblestudio-studiocomponent-studiocomponentconfiguration-sharedfilesystemconfiguration
         */
        readonly sharedFileSystemConfiguration?: cdk.IResolvable | CfnStudioComponent.SharedFileSystemConfigurationProperty;
    }
    /**
     * The configuration for a license service that is associated with a studio resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-licenseserviceconfiguration.html
     */
    interface LicenseServiceConfigurationProperty {
        /**
         * The endpoint of the license service that is accessed by the studio component resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-licenseserviceconfiguration.html#cfn-nimblestudio-studiocomponent-licenseserviceconfiguration-endpoint
         */
        readonly endpoint?: string;
    }
    /**
     * The configuration for a render farm that is associated with a studio resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-computefarmconfiguration.html
     */
    interface ComputeFarmConfigurationProperty {
        /**
         * The name of an Active Directory user that is used on ComputeFarm worker instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-computefarmconfiguration.html#cfn-nimblestudio-studiocomponent-computefarmconfiguration-activedirectoryuser
         */
        readonly activeDirectoryUser?: string;
        /**
         * The endpoint of the ComputeFarm that is accessed by the studio component resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-computefarmconfiguration.html#cfn-nimblestudio-studiocomponent-computefarmconfiguration-endpoint
         */
        readonly endpoint?: string;
    }
    /**
     * The configuration for a AWS Directory Service for Microsoft Active Directory studio resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.html
     */
    interface ActiveDirectoryConfigurationProperty {
        /**
         * A collection of custom attributes for an Active Directory computer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.html#cfn-nimblestudio-studiocomponent-activedirectoryconfiguration-computerattributes
         */
        readonly computerAttributes?: Array<CfnStudioComponent.ActiveDirectoryComputerAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The directory ID of the AWS Directory Service for Microsoft Active Directory to access using this studio component.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.html#cfn-nimblestudio-studiocomponent-activedirectoryconfiguration-directoryid
         */
        readonly directoryId?: string;
        /**
         * The distinguished name (DN) and organizational unit (OU) of an Active Directory computer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.html#cfn-nimblestudio-studiocomponent-activedirectoryconfiguration-organizationalunitdistinguishedname
         */
        readonly organizationalUnitDistinguishedName?: string;
    }
    /**
     * An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectorycomputerattribute.html
     */
    interface ActiveDirectoryComputerAttributeProperty {
        /**
         * The name for the LDAP attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectorycomputerattribute.html#cfn-nimblestudio-studiocomponent-activedirectorycomputerattribute-name
         */
        readonly name?: string;
        /**
         * The value for the LDAP attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectorycomputerattribute.html#cfn-nimblestudio-studiocomponent-activedirectorycomputerattribute-value
         */
        readonly value?: string;
    }
    /**
     * The configuration for a shared file storage system that is associated with a studio resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html
     */
    interface SharedFileSystemConfigurationProperty {
        /**
         * The endpoint of the shared file system that is accessed by the studio component resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-endpoint
         */
        readonly endpoint?: string;
        /**
         * The unique identifier for a file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-filesystemid
         */
        readonly fileSystemId?: string;
        /**
         * The mount location for a shared file system on a Linux virtual workstation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-linuxmountpoint
         */
        readonly linuxMountPoint?: string;
        /**
         * The name of the file share.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-sharename
         */
        readonly shareName?: string;
        /**
         * The mount location for a shared file system on a Windows virtual workstation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-windowsmountdrive
         */
        readonly windowsMountDrive?: string;
    }
    /**
     * Initialization scripts for studio components.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html
     */
    interface StudioComponentInitializationScriptProperty {
        /**
         * The version number of the protocol that is used by the launch profile.
         *
         * The only valid version is "2021-03-31".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html#cfn-nimblestudio-studiocomponent-studiocomponentinitializationscript-launchprofileprotocolversion
         */
        readonly launchProfileProtocolVersion?: string;
        /**
         * The platform of the initialization script, either Windows or Linux.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html#cfn-nimblestudio-studiocomponent-studiocomponentinitializationscript-platform
         */
        readonly platform?: string;
        /**
         * The method to use when running the initialization script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html#cfn-nimblestudio-studiocomponent-studiocomponentinitializationscript-runcontext
         */
        readonly runContext?: string;
        /**
         * The initialization script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html#cfn-nimblestudio-studiocomponent-studiocomponentinitializationscript-script
         */
        readonly script?: string;
    }
    /**
     * A parameter for a studio component script, in the form of a key-value pair.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-scriptparameterkeyvalue.html
     */
    interface ScriptParameterKeyValueProperty {
        /**
         * A script parameter key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-scriptparameterkeyvalue.html#cfn-nimblestudio-studiocomponent-scriptparameterkeyvalue-key
         */
        readonly key?: string;
        /**
         * A script parameter value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-scriptparameterkeyvalue.html#cfn-nimblestudio-studiocomponent-scriptparameterkeyvalue-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnStudioComponent`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html
 */
export interface CfnStudioComponentProps {
    /**
     * The configuration of the studio component, based on component type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-configuration
     */
    readonly configuration?: cdk.IResolvable | CfnStudioComponent.StudioComponentConfigurationProperty;
    /**
     * A human-readable description for the studio component resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-description
     */
    readonly description?: string;
    /**
     * The EC2 security groups that control access to the studio component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-ec2securitygroupids
     */
    readonly ec2SecurityGroupIds?: Array<string>;
    /**
     * Initialization scripts for studio components.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-initializationscripts
     */
    readonly initializationScripts?: Array<cdk.IResolvable | CfnStudioComponent.StudioComponentInitializationScriptProperty> | cdk.IResolvable;
    /**
     * A friendly name for the studio component resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-name
     */
    readonly name: string;
    /**
     * Parameters for the studio component scripts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-scriptparameters
     */
    readonly scriptParameters?: Array<cdk.IResolvable | CfnStudioComponent.ScriptParameterKeyValueProperty> | cdk.IResolvable;
    /**
     * The unique identifier for a studio resource.
     *
     * In Nimble Studio, all other resources are contained in a studio resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studioid
     */
    readonly studioId: string;
    /**
     * The specific subtype of a studio component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-subtype
     */
    readonly subtype?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The type of the studio component.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-type
     */
    readonly type: string;
}
