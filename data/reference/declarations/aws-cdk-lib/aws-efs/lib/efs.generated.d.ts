import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::EFS::AccessPoint` resource creates an EFS access point.
 *
 * An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see [Mounting a file system using EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) .
 *
 * This operation requires permissions for the `elasticfilesystem:CreateAccessPoint` action.
 *
 * @cloudformationResource AWS::EFS::AccessPoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html
 */
export declare class CfnAccessPoint extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessPoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessPoint;
    /**
     * The ID of the EFS access point.
     *
     * @cloudformationAttribute AccessPointId
     */
    readonly attrAccessPointId: string;
    /**
     * The Amazon Resource Name (ARN) of the access point.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    accessPointTagsRaw?: Array<CfnAccessPoint.AccessPointTagProperty>;
    /**
     * The opaque string specified in the request to ensure idempotent creation.
     */
    clientToken?: string;
    /**
     * The ID of the EFS file system that the access point applies to.
     */
    fileSystemId: string;
    /**
     * The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.
     */
    posixUser?: cdk.IResolvable | CfnAccessPoint.PosixUserProperty;
    /**
     * The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.
     */
    rootDirectory?: cdk.IResolvable | CfnAccessPoint.RootDirectoryProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccessPointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAccessPoint {
    /**
     * Specifies the directory on the Amazon EFS file system that the access point provides access to.
     *
     * The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's `RootDirectory` and its subdirectories.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-rootdirectory.html
     */
    interface RootDirectoryProperty {
        /**
         * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's `RootDirectory` .
         *
         * If the `RootDirectory` > `Path` specified does not exist, EFS creates the root directory using the `CreationInfo` settings when a client connects to an access point. When specifying the `CreationInfo` , you must provide values for all properties.
         *
         * > If you do not provide `CreationInfo` and the specified `RootDirectory` > `Path` does not exist, attempts to mount the file system using the access point will fail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-rootdirectory.html#cfn-efs-accesspoint-rootdirectory-creationinfo
         */
        readonly creationInfo?: CfnAccessPoint.CreationInfoProperty | cdk.IResolvable;
        /**
         * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system.
         *
         * A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the `CreationInfo` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-rootdirectory.html#cfn-efs-accesspoint-rootdirectory-path
         */
        readonly path?: string;
    }
    /**
     * Required if the `RootDirectory` > `Path` specified does not exist.
     *
     * Specifies the POSIX IDs and permissions to apply to the access point's `RootDirectory` > `Path` . If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying `CreationInfo` , you must include values for all properties.
     *
     * Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.
     *
     * > If you do not provide `CreationInfo` and the specified `RootDirectory` does not exist, attempts to mount the file system using the access point will fail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-creationinfo.html
     */
    interface CreationInfoProperty {
        /**
         * Specifies the POSIX group ID to apply to the `RootDirectory` .
         *
         * Accepts values from 0 to 2^32 (4294967295).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-creationinfo.html#cfn-efs-accesspoint-creationinfo-ownergid
         */
        readonly ownerGid: string;
        /**
         * Specifies the POSIX user ID to apply to the `RootDirectory` .
         *
         * Accepts values from 0 to 2^32 (4294967295).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-creationinfo.html#cfn-efs-accesspoint-creationinfo-owneruid
         */
        readonly ownerUid: string;
        /**
         * Specifies the POSIX permissions to apply to the `RootDirectory` , in the format of an octal number representing the file's mode bits.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-creationinfo.html#cfn-efs-accesspoint-creationinfo-permissions
         */
        readonly permissions: string;
    }
    /**
     * A tag is a key-value pair attached to a file system.
     *
     * Allowed characters in the `Key` and `Value` properties are letters, white space, and numbers that can be represented in UTF-8, and the following characters: `+ - = . _ : /`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-accesspointtag.html
     */
    interface AccessPointTagProperty {
        /**
         * The tag key (String).
         *
         * The key can't start with `aws:` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-accesspointtag.html#cfn-efs-accesspoint-accesspointtag-key
         */
        readonly key?: string;
        /**
         * The value of the tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-accesspointtag.html#cfn-efs-accesspoint-accesspointtag-value
         */
        readonly value?: string;
    }
    /**
     * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-posixuser.html
     */
    interface PosixUserProperty {
        /**
         * The POSIX group ID used for all file system operations using this access point.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-posixuser.html#cfn-efs-accesspoint-posixuser-gid
         */
        readonly gid: string;
        /**
         * Secondary POSIX group IDs used for all file system operations using this access point.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-posixuser.html#cfn-efs-accesspoint-posixuser-secondarygids
         */
        readonly secondaryGids?: Array<string>;
        /**
         * The POSIX user ID used for all file system operations using this access point.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-posixuser.html#cfn-efs-accesspoint-posixuser-uid
         */
        readonly uid: string;
    }
}
/**
 * Properties for defining a `CfnAccessPoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html
 */
export interface CfnAccessPointProps {
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html#cfn-efs-accesspoint-accesspointtags
     */
    readonly accessPointTags?: Array<CfnAccessPoint.AccessPointTagProperty>;
    /**
     * The opaque string specified in the request to ensure idempotent creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html#cfn-efs-accesspoint-clienttoken
     */
    readonly clientToken?: string;
    /**
     * The ID of the EFS file system that the access point applies to.
     *
     * Accepts only the ID format for input when specifying a file system, for example `fs-0123456789abcedf2` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html#cfn-efs-accesspoint-filesystemid
     */
    readonly fileSystemId: string;
    /**
     * The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html#cfn-efs-accesspoint-posixuser
     */
    readonly posixUser?: cdk.IResolvable | CfnAccessPoint.PosixUserProperty;
    /**
     * The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html#cfn-efs-accesspoint-rootdirectory
     */
    readonly rootDirectory?: cdk.IResolvable | CfnAccessPoint.RootDirectoryProperty;
}
/**
 * The `AWS::EFS::FileSystem` resource creates a new, empty file system in Amazon Elastic File System ( Amazon EFS ).
 *
 * You must create a mount target ( [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) ) to mount your EFS file system on an Amazon EC2 or other AWS cloud compute resource.
 *
 * @cloudformationResource AWS::EFS::FileSystem
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html
 */
export declare class CfnFileSystem extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFileSystem from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFileSystem;
    /**
     * The Amazon Resource Name (ARN) of the EFS file system.
     *
     * Example: `arn:aws:elasticfilesystem:us-west-2:1111333322228888:file-system/fs-0123456789abcdef8`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the EFS file system. For example: `fs-abcdef0123456789a`
     *
     * @cloudformationAttribute FileSystemId
     */
    readonly attrFileSystemId: string;
    /**
     * For One Zone file systems, specify the AWS Availability Zone in which to create the file system.
     */
    availabilityZoneName?: string;
    /**
     * Use the `BackupPolicy` to turn automatic backups on or off for the file system.
     */
    backupPolicy?: CfnFileSystem.BackupPolicyProperty | cdk.IResolvable;
    /**
     * (Optional) A boolean that specifies whether or not to bypass the `FileSystemPolicy` lockout safety check.
     */
    bypassPolicyLockoutSafetyCheck?: boolean | cdk.IResolvable;
    /**
     * A Boolean value that, if true, creates an encrypted file system.
     */
    encrypted?: boolean | cdk.IResolvable;
    /**
     * The `FileSystemPolicy` for the EFS file system.
     */
    fileSystemPolicy?: any | cdk.IResolvable;
    /**
     * Describes the protection on the file system.
     */
    fileSystemProtection?: CfnFileSystem.FileSystemProtectionProperty | cdk.IResolvable;
    /**
     * Use to create one or more tags associated with the file system.
     */
    fileSystemTagsRaw?: Array<CfnFileSystem.ElasticFileSystemTagProperty>;
    /**
     * The ID of the AWS KMS key to be used to protect the encrypted file system.
     */
    kmsKeyId?: string;
    /**
     * An array of `LifecyclePolicy` objects that define the file system's `LifecycleConfiguration` object.
     */
    lifecyclePolicies?: Array<cdk.IResolvable | CfnFileSystem.LifecyclePolicyProperty> | cdk.IResolvable;
    /**
     * The performance mode of the file system.
     */
    performanceMode?: string;
    /**
     * The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating.
     */
    provisionedThroughputInMibps?: number;
    /**
     * Describes the replication configuration for a specific file system.
     */
    replicationConfiguration?: cdk.IResolvable | CfnFileSystem.ReplicationConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies the throughput mode for the file system.
     */
    throughputMode?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnFileSystemProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFileSystem {
    /**
     * A tag is a key-value pair attached to a file system.
     *
     * Allowed characters in the `Key` and `Value` properties are letters, white space, and numbers that can be represented in UTF-8, and the following characters: `+ - = . _ : /`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-elasticfilesystemtag.html
     */
    interface ElasticFileSystemTagProperty {
        /**
         * The tag key (String).
         *
         * The key can't start with `aws:` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-elasticfilesystemtag.html#cfn-efs-filesystem-elasticfilesystemtag-key
         */
        readonly key: string;
        /**
         * The value of the tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-elasticfilesystemtag.html#cfn-efs-filesystem-elasticfilesystemtag-value
         */
        readonly value: string;
    }
    /**
     * Describes a policy used by Lifecycle management that specifies when to transition files into and out of the EFS storage classes.
     *
     * For more information, see [Managing file system storage](https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html) .
     *
     * > - Each `LifecyclePolicy` object can have only a single transition. This means that in a request body, `LifecyclePolicies` must be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA` , `TransitionToArchive` , `TransitionToPrimaryStorageClass` .
     * > - See the AWS::EFS::FileSystem examples for the correct `LifecyclePolicy` structure. Do not use the syntax shown on this page.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-lifecyclepolicy.html
     */
    interface LifecyclePolicyProperty {
        /**
         * The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage.
         *
         * Metadata operations such as listing the contents of a directory don't count as file access events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-lifecyclepolicy.html#cfn-efs-filesystem-lifecyclepolicy-transitiontoarchive
         */
        readonly transitionToArchive?: string;
        /**
         * The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage.
         *
         * Metadata operations such as listing the contents of a directory don't count as file access events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-lifecyclepolicy.html#cfn-efs-filesystem-lifecyclepolicy-transitiontoia
         */
        readonly transitionToIa?: string;
        /**
         * Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage.
         *
         * Metadata operations such as listing the contents of a directory don't count as file access events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-lifecyclepolicy.html#cfn-efs-filesystem-lifecyclepolicy-transitiontoprimarystorageclass
         */
        readonly transitionToPrimaryStorageClass?: string;
    }
    /**
     * Describes the replication configuration for a specific file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationconfiguration.html
     */
    interface ReplicationConfigurationProperty {
        /**
         * An array of destination objects.
         *
         * Only one destination object is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationconfiguration.html#cfn-efs-filesystem-replicationconfiguration-destinations
         */
        readonly destinations?: Array<cdk.IResolvable | CfnFileSystem.ReplicationDestinationProperty> | cdk.IResolvable;
    }
    /**
     * Describes the destination file system in the replication configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html
     */
    interface ReplicationDestinationProperty {
        /**
         * For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located.
         *
         * Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the *Amazon EFS User Guide* .
         *
         * > One Zone file system type is not available in all Availability Zones in AWS Regions where Amazon EFS is available.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html#cfn-efs-filesystem-replicationdestination-availabilityzonename
         */
        readonly availabilityZoneName?: string;
        /**
         * The ID of the destination Amazon EFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html#cfn-efs-filesystem-replicationdestination-filesystemid
         */
        readonly fileSystemId?: string;
        /**
         * The ID of an AWS KMS key used to protect the encrypted file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html#cfn-efs-filesystem-replicationdestination-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The AWS Region in which the destination file system is located.
         *
         * > For One Zone file systems, the replication configuration must specify the AWS Region in which the destination file system is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html#cfn-efs-filesystem-replicationdestination-region
         */
        readonly region?: string;
        /**
         * The Amazon Resource Name (ARN) of the current source file system in the replication configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html#cfn-efs-filesystem-replicationdestination-rolearn
         */
        readonly roleArn?: string;
        /**
         * Describes the status of the replication configuration.
         *
         * For more information about replication status, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html#cfn-efs-filesystem-replicationdestination-status
         */
        readonly status?: string;
        /**
         * Message that provides details about the `PAUSED` or `ERRROR` state of the replication destination configuration.
         *
         * For more information about replication status messages, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html#cfn-efs-filesystem-replicationdestination-statusmessage
         */
        readonly statusMessage?: string;
    }
    /**
     * The backup policy turns automatic backups for the file system on or off.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-backuppolicy.html
     */
    interface BackupPolicyProperty {
        /**
         * Set the backup policy status for the file system.
         *
         * - *`ENABLED`* - Turns automatic backups on for the file system.
         * - *`DISABLED`* - Turns automatic backups off for the file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-backuppolicy.html#cfn-efs-filesystem-backuppolicy-status
         */
        readonly status: string;
    }
    /**
     * Describes the protection on the file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-filesystemprotection.html
     */
    interface FileSystemProtectionProperty {
        /**
         * The status of the file system's replication overwrite protection.
         *
         * - `ENABLED` – The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is `ENABLED` by default.
         * - `DISABLED` – The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
         * - `REPLICATING` – The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.
         *
         * If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-filesystemprotection.html#cfn-efs-filesystem-filesystemprotection-replicationoverwriteprotection
         */
        readonly replicationOverwriteProtection?: string;
    }
}
/**
 * Properties for defining a `CfnFileSystem`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html
 */
export interface CfnFileSystemProps {
    /**
     * For One Zone file systems, specify the AWS Availability Zone in which to create the file system.
     *
     * Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide* .
     *
     * > One Zone file systems are not available in all Availability Zones in AWS Regions where Amazon EFS is available.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-availabilityzonename
     */
    readonly availabilityZoneName?: string;
    /**
     * Use the `BackupPolicy` to turn automatic backups on or off for the file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-backuppolicy
     */
    readonly backupPolicy?: CfnFileSystem.BackupPolicyProperty | cdk.IResolvable;
    /**
     * (Optional) A boolean that specifies whether or not to bypass the `FileSystemPolicy` lockout safety check.
     *
     * The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-bypasspolicylockoutsafetycheck
     */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdk.IResolvable;
    /**
     * A Boolean value that, if true, creates an encrypted file system.
     *
     * When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing AWS KMS key . If you don't specify a KMS key , then the default KMS key for Amazon EFS , `/aws/elasticfilesystem` , is used to protect the encrypted file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-encrypted
     */
    readonly encrypted?: boolean | cdk.IResolvable;
    /**
     * The `FileSystemPolicy` for the EFS file system.
     *
     * A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using IAM to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-filesystempolicy
     */
    readonly fileSystemPolicy?: any | cdk.IResolvable;
    /**
     * Describes the protection on the file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-filesystemprotection
     */
    readonly fileSystemProtection?: CfnFileSystem.FileSystemProtectionProperty | cdk.IResolvable;
    /**
     * Use to create one or more tags associated with the file system.
     *
     * Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"{value}"` key-value pair. Each key must be unique. For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *AWS General Reference Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-filesystemtags
     */
    readonly fileSystemTags?: Array<CfnFileSystem.ElasticFileSystemTagProperty>;
    /**
     * The ID of the AWS KMS key to be used to protect the encrypted file system.
     *
     * This parameter is only required if you want to use a nondefault KMS key . If this parameter is not specified, the default KMS key for Amazon EFS is used. This ID can be in one of the following formats:
     *
     * - Key ID - A unique identifier of the key, for example `1234abcd-12ab-34cd-56ef-1234567890ab` .
     * - ARN - An Amazon Resource Name (ARN) for the key, for example `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab` .
     * - Key alias - A previously created display name for a key, for example `alias/projectKey1` .
     * - Key alias ARN - An ARN for a key alias, for example `arn:aws:kms:us-west-2:444455556666:alias/projectKey1` .
     *
     * If `KmsKeyId` is specified, the `Encrypted` parameter must be set to true.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * An array of `LifecyclePolicy` objects that define the file system's `LifecycleConfiguration` object.
     *
     * A `LifecycleConfiguration` object informs Lifecycle management of the following:
     *
     * - When to move files in the file system from primary storage to IA storage.
     * - When to move files in the file system from primary storage or IA storage to Archive storage.
     * - When to move files that are in IA or Archive storage to primary storage.
     *
     * > Amazon EFS requires that each `LifecyclePolicy` object have only a single transition. This means that in a request body, `LifecyclePolicies` needs to be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA` , `TransitionToArchive` `TransitionToPrimaryStorageClass` . See the example requests in the following section for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-lifecyclepolicies
     */
    readonly lifecyclePolicies?: Array<cdk.IResolvable | CfnFileSystem.LifecyclePolicyProperty> | cdk.IResolvable;
    /**
     * The performance mode of the file system.
     *
     * We recommend `generalPurpose` performance mode for all file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The `maxIO` mode is not supported on One Zone file systems.
     *
     * > Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
     *
     * Default is `generalPurpose` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-performancemode
     */
    readonly performanceMode?: string;
    /**
     * The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating.
     *
     * Required if `ThroughputMode` is set to `provisioned` . Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact Support . For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-provisionedthroughputinmibps
     */
    readonly provisionedThroughputInMibps?: number;
    /**
     * Describes the replication configuration for a specific file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-replicationconfiguration
     */
    readonly replicationConfiguration?: cdk.IResolvable | CfnFileSystem.ReplicationConfigurationProperty;
    /**
     * Specifies the throughput mode for the file system.
     *
     * The mode can be `bursting` , `provisioned` , or `elastic` . If you set `ThroughputMode` to `provisioned` , you must also set a value for `ProvisionedThroughputInMibps` . After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide* .
     *
     * Default is `bursting` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#cfn-efs-filesystem-throughputmode
     */
    readonly throughputMode?: string;
}
/**
 * The `AWS::EFS::MountTarget` resource is an Amazon EFS resource that creates a mount target for an EFS file system.
 *
 * You can then mount the file system on Amazon EC2 instances or other resources by using the mount target.
 *
 * @cloudformationResource AWS::EFS::MountTarget
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html
 */
export declare class CfnMountTarget extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMountTarget from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMountTarget;
    /**
     * The ID of the Amazon EFS file system that the mount target provides access to.
     *
     * Example: `fs-0123456789111222a`
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The IPv4 address of the mount target.
     *
     * Example: 192.0.2.0
     *
     * @cloudformationAttribute IpAddress
     */
    readonly attrIpAddress: string;
    /**
     * The ID of the file system for which to create the mount target.
     */
    fileSystemId: string;
    /**
     * Valid IPv4 address within the address range of the specified subnet.
     */
    ipAddress?: string;
    /**
     * VPC security group IDs, of the form `sg-xxxxxxxx` .
     */
    securityGroups: Array<string>;
    /**
     * The ID of the subnet to add the mount target in.
     */
    subnetId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMountTargetProps);
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
 * Properties for defining a `CfnMountTarget`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html
 */
export interface CfnMountTargetProps {
    /**
     * The ID of the file system for which to create the mount target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-filesystemid
     */
    readonly fileSystemId: string;
    /**
     * Valid IPv4 address within the address range of the specified subnet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-ipaddress
     */
    readonly ipAddress?: string;
    /**
     * VPC security group IDs, of the form `sg-xxxxxxxx` .
     *
     * These must be for the same VPC as the subnet specified. The maximum number of security groups depends on account quota. For more information, see [Amazon VPC Quotas](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the *Amazon VPC User Guide* (see the *Security Groups* table).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-securitygroups
     */
    readonly securityGroups: Array<string>;
    /**
     * The ID of the subnet to add the mount target in.
     *
     * For One Zone file systems, use the subnet that is associated with the file system's Availability Zone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-subnetid
     */
    readonly subnetId: string;
}
