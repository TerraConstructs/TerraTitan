import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an Amazon FSx for Lustre data repository association (DRA).
 *
 * A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported on all FSx for Lustre 2.12 and newer file systems, excluding `scratch_1` deployment type.
 *
 * Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see [Linking your file system to an S3 bucket](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html) .
 *
 * @cloudformationResource AWS::FSx::DataRepositoryAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html
 */
export declare class CfnDataRepositoryAssociation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataRepositoryAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataRepositoryAssociation;
    /**
     * Returns the data repository association's system generated Association ID.
     *
     * Example: `dra-abcdef0123456789d`
     *
     * @cloudformationAttribute AssociationId
     */
    readonly attrAssociationId: string;
    /**
     * Returns the data repository association's Amazon Resource Name (ARN).
     *
     * Example: `arn:aws:fsx:us-east-1:111122223333:association/fs-abc012345def6789a/dra-abcdef0123456789b`
     *
     * @cloudformationAttribute ResourceARN
     */
    readonly attrResourceArn: string;
    /**
     * A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created.
     */
    batchImportMetaDataOnCreate?: boolean | cdk.IResolvable;
    /**
     * The path to the Amazon S3 data repository that will be linked to the file system.
     */
    dataRepositoryPath: string;
    /**
     * The ID of the file system on which the data repository association is configured.
     */
    fileSystemId: string;
    /**
     * A path on the Amazon FSx for Lustre file system that points to a high-level directory (such as `/ns1/` ) or subdirectory (such as `/ns1/subdir/` ) that will be mapped 1-1 with `DataRepositoryPath` .
     */
    fileSystemPath: string;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk.
     */
    importedFileChunkSize?: number;
    /**
     * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association.
     */
    s3?: cdk.IResolvable | CfnDataRepositoryAssociation.S3Property;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of `Tag` values, with a maximum of 50 elements.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataRepositoryAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataRepositoryAssociation {
    /**
     * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association.
     *
     * The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-s3.html
     */
    interface S3Property {
        /**
         * Describes a data repository association's automatic export policy.
         *
         * The `AutoExportPolicy` defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.
         *
         * The `AutoExportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-s3.html#cfn-fsx-datarepositoryassociation-s3-autoexportpolicy
         */
        readonly autoExportPolicy?: CfnDataRepositoryAssociation.AutoExportPolicyProperty | cdk.IResolvable;
        /**
         * Describes the data repository association's automatic import policy.
         *
         * The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.
         *
         * The `AutoImportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-s3.html#cfn-fsx-datarepositoryassociation-s3-autoimportpolicy
         */
        readonly autoImportPolicy?: CfnDataRepositoryAssociation.AutoImportPolicyProperty | cdk.IResolvable;
    }
    /**
     * Describes the data repository association's automatic import policy.
     *
     * The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.
     *
     * The `AutoImportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoimportpolicy.html
     */
    interface AutoImportPolicyProperty {
        /**
         * The `AutoImportPolicy` can have the following event values:.
         *
         * - `NEW` - Amazon FSx automatically imports metadata of files added to the linked S3 bucket that do not currently exist in the FSx file system.
         * - `CHANGED` - Amazon FSx automatically updates file metadata and invalidates existing file content on the file system as files change in the data repository.
         * - `DELETED` - Amazon FSx automatically deletes files on the file system as corresponding files are deleted in the data repository.
         *
         * You can define any combination of event types for your `AutoImportPolicy` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoimportpolicy.html#cfn-fsx-datarepositoryassociation-autoimportpolicy-events
         */
        readonly events: Array<string>;
    }
    /**
     * Describes a data repository association's automatic export policy.
     *
     * The `AutoExportPolicy` defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.
     *
     * The `AutoExportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoexportpolicy.html
     */
    interface AutoExportPolicyProperty {
        /**
         * The `AutoExportPolicy` can have the following event values:.
         *
         * - `NEW` - New files and directories are automatically exported to the data repository as they are added to the file system.
         * - `CHANGED` - Changes to files and directories on the file system are automatically exported to the data repository.
         * - `DELETED` - Files and directories are automatically deleted on the data repository when they are deleted on the file system.
         *
         * You can define any combination of event types for your `AutoExportPolicy` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoexportpolicy.html#cfn-fsx-datarepositoryassociation-autoexportpolicy-events
         */
        readonly events: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDataRepositoryAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html
 */
export interface CfnDataRepositoryAssociationProps {
    /**
     * A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created.
     *
     * The task runs if this flag is set to `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html#cfn-fsx-datarepositoryassociation-batchimportmetadataoncreate
     */
    readonly batchImportMetaDataOnCreate?: boolean | cdk.IResolvable;
    /**
     * The path to the Amazon S3 data repository that will be linked to the file system.
     *
     * The path can be an S3 bucket or prefix in the format `s3://myBucket/myPrefix/` . This path specifies where in the S3 data repository files will be imported from or exported to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html#cfn-fsx-datarepositoryassociation-datarepositorypath
     */
    readonly dataRepositoryPath: string;
    /**
     * The ID of the file system on which the data repository association is configured.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html#cfn-fsx-datarepositoryassociation-filesystemid
     */
    readonly fileSystemId: string;
    /**
     * A path on the Amazon FSx for Lustre file system that points to a high-level directory (such as `/ns1/` ) or subdirectory (such as `/ns1/subdir/` ) that will be mapped 1-1 with `DataRepositoryPath` .
     *
     * The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path `/ns1/` , then you cannot link another data repository with file system path `/ns1/ns2` .
     *
     * This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.
     *
     * > If you specify only a forward slash ( `/` ) as the file system path, you can link only one data repository to the file system. You can only specify "/" as the file system path for the first data repository associated with a file system.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html#cfn-fsx-datarepositoryassociation-filesystempath
     */
    readonly fileSystemPath: string;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk.
     *
     * The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system or cache.
     *
     * The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html#cfn-fsx-datarepositoryassociation-importedfilechunksize
     */
    readonly importedFileChunkSize?: number;
    /**
     * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association.
     *
     * The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html#cfn-fsx-datarepositoryassociation-s3
     */
    readonly s3?: cdk.IResolvable | CfnDataRepositoryAssociation.S3Property;
    /**
     * A list of `Tag` values, with a maximum of 50 elements.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html#cfn-fsx-datarepositoryassociation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::FSx::FileSystem` resource is an Amazon FSx resource type that specifies an Amazon FSx file system.
 *
 * You can create any of the following supported file system types:
 *
 * - Amazon FSx for Lustre
 * - Amazon FSx for NetApp ONTAP
 * - FSx for OpenZFS
 * - Amazon FSx for Windows File Server
 *
 * @cloudformationResource AWS::FSx::FileSystem
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html
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
     * Returns the FSx for Windows file system's DNSName.
     *
     * Example: `amznfsxp1honlek.corp.example.com`
     *
     * @cloudformationAttribute DNSName
     */
    readonly attrDnsName: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Returns the Lustre file system's `LustreMountName` .
     *
     * Example for `SCRATCH_1` deployment types: This value is always `fsx` .
     *
     * Example for `SCRATCH_2` and `PERSISTENT` deployment types: `2p3fhbmv`
     *
     * @cloudformationAttribute LustreMountName
     */
    readonly attrLustreMountName: string;
    /**
     * Returns the Amazon Resource Name (ARN) for the Amazon FSx file system.
     *
     * Example: `arn:aws:fsx:us-east-2:111122223333:file-system/fs-0123abcd56789ef0a`
     *
     * @cloudformationAttribute ResourceARN
     */
    readonly attrResourceArn: string;
    /**
     * Returns the root volume ID of the FSx for OpenZFS file system.
     *
     * Example: `fsvol-0123456789abcdefa`
     *
     * @cloudformationAttribute RootVolumeId
     */
    readonly attrRootVolumeId: string;
    /**
     * The ID of the file system backup that you are using to create a file system.
     */
    backupId?: string;
    /**
     * The type of Amazon FSx file system, which can be `LUSTRE` , `WINDOWS` , `ONTAP` , or `OPENZFS` .
     */
    fileSystemType: string;
    /**
     * For FSx for Lustre file systems, sets the Lustre version for the file system that you're creating.
     */
    fileSystemTypeVersion?: string;
    /**
     * The ID of the AWS Key Management Service ( AWS KMS ) key used to encrypt Amazon FSx file system data.
     */
    kmsKeyId?: string;
    /**
     * The Lustre configuration for the file system being created.
     */
    lustreConfiguration?: cdk.IResolvable | CfnFileSystem.LustreConfigurationProperty;
    /**
     * The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.
     */
    ontapConfiguration?: cdk.IResolvable | CfnFileSystem.OntapConfigurationProperty;
    /**
     * The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.
     */
    openZfsConfiguration?: cdk.IResolvable | CfnFileSystem.OpenZFSConfigurationProperty;
    /**
     * A list of IDs specifying the security groups to apply to all network interfaces created for file system access.
     */
    securityGroupIds?: Array<string>;
    /**
     * Sets the storage capacity of the file system that you're creating.
     */
    storageCapacity?: number;
    /**
     * Sets the storage class for the file system that you're creating.
     */
    storageType?: string;
    /**
     * Specifies the IDs of the subnets that the file system will be accessible from.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to associate with the file system.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The configuration object for the Microsoft Windows file system you are creating.
     */
    windowsConfiguration?: cdk.IResolvable | CfnFileSystem.WindowsConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFileSystemProps);
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
     * The configuration for the Amazon FSx for Lustre file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html
     */
    interface LustreConfigurationProperty {
        /**
         * (Optional) When you create your file system, your existing S3 objects appear as file and directory listings.
         *
         * Use this property to choose how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. `AutoImportPolicy` can have the following values:
         *
         * - `NONE` - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update file and directory listings for any new or changed objects after choosing this option.
         * - `NEW` - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system.
         * - `NEW_CHANGED` - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.
         * - `NEW_CHANGED_DELETED` - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.
         *
         * For more information, see [Automatically import updates from your S3 bucket](https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html) .
         *
         * > This parameter is not supported for Lustre file systems with a data repository association.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-autoimportpolicy
         */
        readonly autoImportPolicy?: string;
        /**
         * The number of days to retain automatic backups.
         *
         * Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `0` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-automaticbackupretentiondays
         */
        readonly automaticBackupRetentionDays?: number;
        /**
         * (Optional) Not available for use with file systems that are linked to a data repository.
         *
         * A boolean flag indicating whether tags for the file system should be copied to backups. The default value is false. If `CopyTagsToBackups` is set to true, all file system tags are copied to all automatic and user-initiated backups when the user doesn't specify any backup-specific tags. If `CopyTagsToBackups` is set to true and you specify one or more backup tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
         *
         * (Default = `false` )
         *
         * For more information, see [Working with backups](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html) in the *Amazon FSx for Lustre User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-copytagstobackups
         */
        readonly copyTagsToBackups?: boolean | cdk.IResolvable;
        /**
         * A recurring daily time, in the format `HH:MM` .
         *
         * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-dailyautomaticbackupstarttime
         */
        readonly dailyAutomaticBackupStartTime?: string;
        /**
         * Sets the data compression configuration for the file system. `DataCompressionType` can have the following values:.
         *
         * - `NONE` - (Default) Data compression is turned off when the file system is created.
         * - `LZ4` - Data compression is turned on with the LZ4 algorithm.
         *
         * For more information, see [Lustre data compression](https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html) in the *Amazon FSx for Lustre User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-datacompressiontype
         */
        readonly dataCompressionType?: string;
        /**
         * (Optional) Choose `SCRATCH_1` and `SCRATCH_2` deployment types when you need temporary storage and shorter-term processing of data.
         *
         * The `SCRATCH_2` deployment type provides in-transit encryption of data and higher burst throughput capacity than `SCRATCH_1` .
         *
         * Choose `PERSISTENT_1` for longer-term storage and for throughput-focused workloads that aren’t latency-sensitive. `PERSISTENT_1` supports encryption of data in transit, and is available in all AWS Regions in which FSx for Lustre is available.
         *
         * Choose `PERSISTENT_2` for longer-term storage and for latency-sensitive workloads that require the highest levels of IOPS/throughput. `PERSISTENT_2` supports SSD storage, and offers higher `PerUnitStorageThroughput` (up to 1000 MB/s/TiB). You can optionally specify a metadata configuration mode for `PERSISTENT_2` which supports increasing metadata performance. `PERSISTENT_2` is available in a limited number of AWS Regions . For more information, and an up-to-date list of AWS Regions in which `PERSISTENT_2` is available, see [File system deployment options for FSx for Lustre](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html#lustre-deployment-types) in the *Amazon FSx for Lustre User Guide* .
         *
         * > If you choose `PERSISTENT_2` , and you set `FileSystemTypeVersion` to `2.10` , the `CreateFileSystem` operation fails.
         *
         * Encryption of data in transit is automatically turned on when you access `SCRATCH_2` , `PERSISTENT_1` , and `PERSISTENT_2` file systems from Amazon EC2 instances that support automatic encryption in the AWS Regions where they are available. For more information about encryption in transit for FSx for Lustre file systems, see [Encrypting data in transit](https://docs.aws.amazon.com/fsx/latest/LustreGuide/encryption-in-transit-fsxl.html) in the *Amazon FSx for Lustre User Guide* .
         *
         * (Default = `SCRATCH_1` )
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-deploymenttype
         */
        readonly deploymentType?: string;
        /**
         * The type of drive cache used by `PERSISTENT_1` file systems that are provisioned with HDD storage devices.
         *
         * This parameter is required when storage type is HDD. Set this property to `READ` to improve the performance for frequently accessed files by caching up to 20% of the total storage capacity of the file system.
         *
         * This parameter is required when `StorageType` is set to `HDD` and `DeploymentType` is `PERSISTENT_1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-drivecachetype
         */
        readonly driveCacheType?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-efaenabled
         */
        readonly efaEnabled?: boolean | cdk.IResolvable;
        /**
         * (Optional) Specifies the path in the Amazon S3 bucket where the root of your Amazon FSx file system is exported.
         *
         * The path must use the same Amazon S3 bucket as specified in ImportPath. You can provide an optional prefix to which new and changed data is to be exported from your Amazon FSx for Lustre file system. If an `ExportPath` value is not provided, Amazon FSx sets a default export path, `s3://import-bucket/FSxLustre[creation-timestamp]` . The timestamp is in UTC format, for example `s3://import-bucket/FSxLustre20181105T222312Z` .
         *
         * The Amazon S3 export bucket must be the same as the import bucket specified by `ImportPath` . If you specify only a bucket name, such as `s3://import-bucket` , you get a 1:1 mapping of file system objects to S3 bucket objects. This mapping means that the input data in S3 is overwritten on export. If you provide a custom prefix in the export path, such as `s3://import-bucket/[custom-optional-prefix]` , Amazon FSx exports the contents of your file system to that export prefix in the Amazon S3 bucket.
         *
         * > This parameter is not supported for file systems with a data repository association.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-exportpath
         */
        readonly exportPath?: string;
        /**
         * (Optional) For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk.
         *
         * The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
         *
         * The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
         *
         * > This parameter is not supported for Lustre file systems with a data repository association.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-importedfilechunksize
         */
        readonly importedFileChunkSize?: number;
        /**
         * (Optional) The path to the Amazon S3 bucket (including the optional prefix) that you're using as the data repository for your Amazon FSx for Lustre file system.
         *
         * The root of your FSx for Lustre file system will be mapped to the root of the Amazon S3 bucket you select. An example is `s3://import-bucket/optional-prefix` . If you specify a prefix after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.
         *
         * > This parameter is not supported for Lustre file systems with a data repository association.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-importpath
         */
        readonly importPath?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-metadataconfiguration
         */
        readonly metadataConfiguration?: cdk.IResolvable | CfnFileSystem.MetadataConfigurationProperty;
        /**
         * Required with `PERSISTENT_1` and `PERSISTENT_2` deployment types, provisions the amount of read and write throughput for each 1 tebibyte (TiB) of file system storage capacity, in MB/s/TiB.
         *
         * File system throughput capacity is calculated by multiplying ﬁle system storage capacity (TiB) by the `PerUnitStorageThroughput` (MB/s/TiB). For a 2.4-TiB ﬁle system, provisioning 50 MB/s/TiB of `PerUnitStorageThroughput` yields 120 MB/s of ﬁle system throughput. You pay for the amount of throughput that you provision.
         *
         * Valid values:
         *
         * - For `PERSISTENT_1` SSD storage: 50, 100, 200 MB/s/TiB.
         * - For `PERSISTENT_1` HDD storage: 12, 40 MB/s/TiB.
         * - For `PERSISTENT_2` SSD storage: 125, 250, 500, 1000 MB/s/TiB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-perunitstoragethroughput
         */
        readonly perUnitStorageThroughput?: number;
        /**
         * A recurring weekly time, in the format `D:HH:MM` .
         *
         * `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/ISO_week_date) .
         *
         * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
         *
         * For example, `1:05:00` specifies maintenance at 5 AM Monday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html#cfn-fsx-filesystem-lustreconfiguration-weeklymaintenancestarttime
         */
        readonly weeklyMaintenanceStartTime?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-metadataconfiguration.html
     */
    interface MetadataConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-metadataconfiguration.html#cfn-fsx-filesystem-metadataconfiguration-iops
         */
        readonly iops?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-metadataconfiguration.html#cfn-fsx-filesystem-metadataconfiguration-mode
         */
        readonly mode?: string;
    }
    /**
     * The configuration for this Amazon FSx for NetApp ONTAP file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html
     */
    interface OntapConfigurationProperty {
        /**
         * The number of days to retain automatic backups.
         *
         * Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-automaticbackupretentiondays
         */
        readonly automaticBackupRetentionDays?: number;
        /**
         * A recurring daily time, in the format `HH:MM` .
         *
         * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-dailyautomaticbackupstarttime
         */
        readonly dailyAutomaticBackupStartTime?: string;
        /**
         * Specifies the FSx for ONTAP file system deployment type to use in creating the file system.
         *
         * - `MULTI_AZ_1` - A high availability file system configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. This is a first-generation FSx for ONTAP file system.
         * - `MULTI_AZ_2` - A high availability file system configured for Multi-AZ redundancy to tolerate temporary AZ unavailability. This is a second-generation FSx for ONTAP file system.
         * - `SINGLE_AZ_1` - A file system configured for Single-AZ redundancy. This is a first-generation FSx for ONTAP file system.
         * - `SINGLE_AZ_2` - A file system configured with multiple high-availability (HA) pairs for Single-AZ redundancy. This is a second-generation FSx for ONTAP file system.
         *
         * For information about the use cases for Multi-AZ and Single-AZ deployments, refer to [Choosing a file system deployment type](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-AZ.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-deploymenttype
         */
        readonly deploymentType: string;
        /**
         * The SSD IOPS configuration for the FSx for ONTAP file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-diskiopsconfiguration
         */
        readonly diskIopsConfiguration?: CfnFileSystem.DiskIopsConfigurationProperty | cdk.IResolvable;
        /**
         * (Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created.
         *
         * By default in the Amazon FSx API, Amazon FSx selects an unused IP address range for you from the 198.19.* range. By default in the Amazon FSx console, Amazon FSx chooses the last 64 IP addresses from the VPC’s primary CIDR range to use as the endpoint IP address range for the file system. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-endpointipaddressrange
         */
        readonly endpointIpAddressRange?: string;
        /**
         * The ONTAP administrative password for the `fsxadmin` user with which you administer your file system using the NetApp ONTAP CLI and REST API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-fsxadminpassword
         */
        readonly fsxAdminPassword?: string;
        /**
         * Specifies how many high-availability (HA) pairs of file servers will power your file system.
         *
         * First-generation file systems are powered by 1 HA pair. Second-generation multi-AZ file systems are powered by 1 HA pair. Second generation single-AZ file systems are powered by up to 12 HA pairs. The default value is 1. The value of this property affects the values of `StorageCapacity` , `Iops` , and `ThroughputCapacity` . For more information, see [High-availability (HA) pairs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/administering-file-systems.html#HA-pairs) in the FSx for ONTAP user guide. Block storage protocol support (iSCSI and NVMe over TCP) is disabled on file systems with more than 6 HA pairs. For more information, see [Using block storage protocols](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/supported-fsx-clients.html#using-block-storage) .
         *
         * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
         *
         * - The value of `HAPairs` is less than 1 or greater than 12.
         * - The value of `HAPairs` is greater than 1 and the value of `DeploymentType` is `SINGLE_AZ_1` , `MULTI_AZ_1` , or `MULTI_AZ_2` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-hapairs
         */
        readonly haPairs?: number;
        /**
         * Required when `DeploymentType` is set to `MULTI_AZ_1` or `MULTI_AZ_2` .
         *
         * This specifies the subnet in which you want the preferred file server to be located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-preferredsubnetid
         */
        readonly preferredSubnetId?: string;
        /**
         * (Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server.
         *
         * You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
         *
         * > Amazon FSx manages these route tables for Multi-AZ file systems using tag-based authentication. These route tables are tagged with `Key: AmazonFSx; Value: ManagedByAmazonFSx` . When creating FSx for ONTAP Multi-AZ file systems using AWS CloudFormation we recommend that you add the `Key: AmazonFSx; Value: ManagedByAmazonFSx` tag manually.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-routetableids
         */
        readonly routeTableIds?: Array<string>;
        /**
         * Sets the throughput capacity for the file system that you're creating in megabytes per second (MBps).
         *
         * For more information, see [Managing throughput capacity](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-throughput-capacity.html) in the FSx for ONTAP User Guide.
         *
         * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
         *
         * - The value of `ThroughputCapacity` and `ThroughputCapacityPerHAPair` are not the same value.
         * - The value of `ThroughputCapacity` when divided by the value of `HAPairs` is outside of the valid range for `ThroughputCapacity` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-throughputcapacity
         */
        readonly throughputCapacity?: number;
        /**
         * Use to choose the throughput capacity per HA pair, rather than the total throughput for the file system.
         *
         * You can define either the `ThroughputCapacityPerHAPair` or the `ThroughputCapacity` when creating a file system, but not both.
         *
         * This field and `ThroughputCapacity` are the same for file systems powered by one HA pair.
         *
         * - For `SINGLE_AZ_1` and `MULTI_AZ_1` file systems, valid values are 128, 256, 512, 1024, 2048, or 4096 MBps.
         * - For `SINGLE_AZ_2` , valid values are 1536, 3072, or 6144 MBps.
         * - For `MULTI_AZ_2` , valid values are 384, 768, 1536, 3072, or 6144 MBps.
         *
         * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
         *
         * - The value of `ThroughputCapacity` and `ThroughputCapacityPerHAPair` are not the same value for file systems with one HA pair.
         * - The value of deployment type is `SINGLE_AZ_2` and `ThroughputCapacity` / `ThroughputCapacityPerHAPair` is not a valid HA pair (a value between 1 and 12).
         * - The value of `ThroughputCapacityPerHAPair` is not a valid value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-throughputcapacityperhapair
         */
        readonly throughputCapacityPerHaPair?: number;
        /**
         * A recurring weekly time, in the format `D:HH:MM` .
         *
         * `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/ISO_week_date) .
         *
         * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
         *
         * For example, `1:05:00` specifies maintenance at 5 AM Monday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html#cfn-fsx-filesystem-ontapconfiguration-weeklymaintenancestarttime
         */
        readonly weeklyMaintenanceStartTime?: string;
    }
    /**
     * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system.
     *
     * By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-diskiopsconfiguration.html
     */
    interface DiskIopsConfigurationProperty {
        /**
         * The total number of SSD IOPS provisioned for the file system.
         *
         * The minimum and maximum values for this property depend on the value of `HAPairs` and `StorageCapacity` . The minimum value is calculated as `StorageCapacity` * 3 * `HAPairs` (3 IOPS per GB of `StorageCapacity` ). The maximum value is calculated as 200,000 * `HAPairs` .
         *
         * Amazon FSx responds with an HTTP status code 400 (Bad Request) if the value of `Iops` is outside of the minimum or maximum values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-diskiopsconfiguration.html#cfn-fsx-filesystem-diskiopsconfiguration-iops
         */
        readonly iops?: number;
        /**
         * Specifies whether the file system is using the `AUTOMATIC` setting of SSD IOPS of 3 IOPS per GB of storage capacity, or if it using a `USER_PROVISIONED` value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-diskiopsconfiguration.html#cfn-fsx-filesystem-diskiopsconfiguration-mode
         */
        readonly mode?: string;
    }
    /**
     * The Microsoft Windows configuration for the file system that's being created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html
     */
    interface WindowsConfigurationProperty {
        /**
         * The ID for an existing AWS Managed Microsoft Active Directory (AD) instance that the file system should join when it's created.
         *
         * Required if you are joining the file system to an existing AWS Managed Microsoft AD.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-activedirectoryid
         */
        readonly activeDirectoryId?: string;
        /**
         * An array of one or more DNS alias names that you want to associate with the Amazon FSx file system.
         *
         * Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time.
         *
         * For more information, see [Working with DNS Aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html) and [Walkthrough 5: Using DNS aliases to access your file system](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html) , including additional steps you must take to be able to access your file system using a DNS alias.
         *
         * An alias name has to meet the following requirements:
         *
         * - Formatted as a fully-qualified domain name (FQDN), `hostname.domain` , for example, `accounting.example.com` .
         * - Can contain alphanumeric characters, the underscore (_), and the hyphen (-).
         * - Cannot start or end with a hyphen.
         * - Can start with a numeric.
         *
         * For DNS alias names, Amazon FSx stores alphabetical characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-aliases
         */
        readonly aliases?: Array<string>;
        /**
         * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-auditlogconfiguration
         */
        readonly auditLogConfiguration?: CfnFileSystem.AuditLogConfigurationProperty | cdk.IResolvable;
        /**
         * The number of days to retain automatic backups.
         *
         * Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-automaticbackupretentiondays
         */
        readonly automaticBackupRetentionDays?: number;
        /**
         * A boolean flag indicating whether tags for the file system should be copied to backups.
         *
         * This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-copytagstobackups
         */
        readonly copyTagsToBackups?: boolean | cdk.IResolvable;
        /**
         * A recurring daily time, in the format `HH:MM` .
         *
         * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-dailyautomaticbackupstarttime
         */
        readonly dailyAutomaticBackupStartTime?: string;
        /**
         * Specifies the file system deployment type, valid values are the following:.
         *
         * - `MULTI_AZ_1` - Deploys a high availability file system that is configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. You can only deploy a Multi-AZ file system in AWS Regions that have a minimum of three Availability Zones. Also supports HDD storage type
         * - `SINGLE_AZ_1` - (Default) Choose to deploy a file system that is configured for single AZ redundancy.
         * - `SINGLE_AZ_2` - The latest generation Single AZ file system. Specifies a file system that is configured for single AZ redundancy and supports HDD storage type.
         *
         * For more information, see [Availability and Durability: Single-AZ and Multi-AZ File Systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-deploymenttype
         */
        readonly deploymentType?: string;
        /**
         * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for Windows file system.
         *
         * By default, Amazon FSx automatically provisions 3 IOPS per GiB of storage capacity. You can provision additional IOPS per GiB of storage, up to the maximum limit associated with your chosen throughput capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-diskiopsconfiguration
         */
        readonly diskIopsConfiguration?: CfnFileSystem.DiskIopsConfigurationProperty | cdk.IResolvable;
        /**
         * Required when `DeploymentType` is set to `MULTI_AZ_1` .
         *
         * This specifies the subnet in which you want the preferred file server to be located. For in- AWS applications, we recommend that you launch your clients in the same availability zone as your preferred file server to reduce cross-availability zone data transfer costs and minimize latency.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-preferredsubnetid
         */
        readonly preferredSubnetId?: string;
        /**
         * The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory.
         *
         * For more information, see [Using Amazon FSx for Windows with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html) or [Managing FSx for ONTAP SVMs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-selfmanagedactivedirectoryconfiguration
         */
        readonly selfManagedActiveDirectoryConfiguration?: cdk.IResolvable | CfnFileSystem.SelfManagedActiveDirectoryConfigurationProperty;
        /**
         * Sets the throughput capacity of an Amazon FSx file system, measured in megabytes per second (MB/s), in 2 to the *n* th increments, between 2^3 (8) and 2^11 (2048).
         *
         * > To increase storage capacity, a file system must have a minimum throughput capacity of 16 MB/s.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-throughputcapacity
         */
        readonly throughputCapacity: number;
        /**
         * A recurring weekly time, in the format `D:HH:MM` .
         *
         * `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/ISO_week_date) .
         *
         * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
         *
         * For example, `1:05:00` specifies maintenance at 5 AM Monday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html#cfn-fsx-filesystem-windowsconfiguration-weeklymaintenancestarttime
         */
        readonly weeklyMaintenanceStartTime?: string;
    }
    /**
     * The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory.
     *
     * For more information, see [Using Amazon FSx for Windows with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html) or [Managing FSx for ONTAP SVMs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-selfmanagedactivedirectoryconfiguration.html
     */
    interface SelfManagedActiveDirectoryConfigurationProperty {
        /**
         * A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-dnsips
         */
        readonly dnsIps?: Array<string>;
        /**
         * The fully qualified domain name of the self-managed AD directory, such as `corp.example.com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-domainname
         */
        readonly domainName?: string;
        /**
         * (Optional) The name of the domain group whose members are granted administrative privileges for the file system.
         *
         * Administrative privileges include taking ownership of files and folders, setting audit controls (audit ACLs) on files and folders, and administering the file system remotely by using the FSx Remote PowerShell. The group that you specify must already exist in your domain. If you don't provide one, your AD domain's Domain Admins group is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-filesystemadministratorsgroup
         */
        readonly fileSystemAdministratorsGroup?: string;
        /**
         * (Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory.
         *
         * Amazon FSx only accepts OU as the direct parent of the file system. An example is `OU=FSx,DC=yourdomain,DC=corp,DC=com` . To learn more, see [RFC 2253](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc2253) . If none is provided, the FSx file system is created in the default location of your self-managed AD directory.
         *
         * > Only Organizational Unit (OU) objects can be the direct parent of the file system that you're creating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-organizationalunitdistinguishedname
         */
        readonly organizationalUnitDistinguishedName?: string;
        /**
         * The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-password
         */
        readonly password?: string;
        /**
         * The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
         *
         * This account must have the permission to join computers to the domain in the organizational unit provided in `OrganizationalUnitDistinguishedName` , or in the default location of your AD domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-username
         */
        readonly userName?: string;
    }
    /**
     * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-auditlogconfiguration.html
     */
    interface AuditLogConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) for the destination of the audit logs.
         *
         * The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN.
         *
         * The name of the Amazon CloudWatch Logs log group must begin with the `/aws/fsx` prefix. The name of the Amazon Kinesis Data Firehose delivery stream must begin with the `aws-fsx` prefix.
         *
         * The destination ARN (either CloudWatch Logs log group or Kinesis Data Firehose delivery stream) must be in the same AWS partition, AWS Region , and AWS account as your Amazon FSx file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-auditlogconfiguration.html#cfn-fsx-filesystem-auditlogconfiguration-auditlogdestination
         */
        readonly auditLogDestination?: string;
        /**
         * Sets which attempt type is logged by Amazon FSx for file and folder accesses.
         *
         * - `SUCCESS_ONLY` - only successful attempts to access files or folders are logged.
         * - `FAILURE_ONLY` - only failed attempts to access files or folders are logged.
         * - `SUCCESS_AND_FAILURE` - both successful attempts and failed attempts to access files or folders are logged.
         * - `DISABLED` - access auditing of files and folders is turned off.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-auditlogconfiguration.html#cfn-fsx-filesystem-auditlogconfiguration-fileaccessauditloglevel
         */
        readonly fileAccessAuditLogLevel: string;
        /**
         * Sets which attempt type is logged by Amazon FSx for file share accesses.
         *
         * - `SUCCESS_ONLY` - only successful attempts to access file shares are logged.
         * - `FAILURE_ONLY` - only failed attempts to access file shares are logged.
         * - `SUCCESS_AND_FAILURE` - both successful attempts and failed attempts to access file shares are logged.
         * - `DISABLED` - access auditing of file shares is turned off.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-auditlogconfiguration.html#cfn-fsx-filesystem-auditlogconfiguration-fileshareaccessauditloglevel
         */
        readonly fileShareAccessAuditLogLevel: string;
    }
    /**
     * The OpenZFS configuration for the file system that's being created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html
     */
    interface OpenZFSConfigurationProperty {
        /**
         * The number of days to retain automatic backups.
         *
         * Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-automaticbackupretentiondays
         */
        readonly automaticBackupRetentionDays?: number;
        /**
         * A Boolean value indicating whether tags for the file system should be copied to backups.
         *
         * This value defaults to `false` . If it's set to `true` , all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is `true` , and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-copytagstobackups
         */
        readonly copyTagsToBackups?: boolean | cdk.IResolvable;
        /**
         * A Boolean value indicating whether tags for the file system should be copied to volumes.
         *
         * This value defaults to `false` . If it's set to `true` , all tags for the file system are copied to volumes where the user doesn't specify tags. If this value is `true` , and you specify one or more tags, only the specified tags are copied to volumes. If you specify one or more tags when creating the volume, no tags are copied from the file system, regardless of this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-copytagstovolumes
         */
        readonly copyTagsToVolumes?: boolean | cdk.IResolvable;
        /**
         * A recurring daily time, in the format `HH:MM` .
         *
         * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-dailyautomaticbackupstarttime
         */
        readonly dailyAutomaticBackupStartTime?: string;
        /**
         * Specifies the file system deployment type. Valid values are the following:.
         *
         * - `MULTI_AZ_1` - Creates file systems with high availability and durability by replicating your data and supporting failover across multiple Availability Zones in the same AWS Region .
         * - `SINGLE_AZ_HA_2` - Creates file systems with high availability and throughput capacities of 160 - 10,240 MB/s using an NVMe L2ARC cache by deploying a primary and standby file system within the same Availability Zone.
         * - `SINGLE_AZ_HA_1` - Creates file systems with high availability and throughput capacities of 64 - 4,096 MB/s by deploying a primary and standby file system within the same Availability Zone.
         * - `SINGLE_AZ_2` - Creates file systems with throughput capacities of 160 - 10,240 MB/s using an NVMe L2ARC cache that automatically recover within a single Availability Zone.
         * - `SINGLE_AZ_1` - Creates file systems with throughput capacities of 64 - 4,096 MBs that automatically recover within a single Availability Zone.
         *
         * For a list of which AWS Regions each deployment type is available in, see [Deployment type availability](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/availability-durability.html#available-aws-regions) . For more information on the differences in performance between deployment types, see [File system performance](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#zfs-fs-performance) in the *Amazon FSx for OpenZFS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-deploymenttype
         */
        readonly deploymentType: string;
        /**
         * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system.
         *
         * By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-diskiopsconfiguration
         */
        readonly diskIopsConfiguration?: CfnFileSystem.DiskIopsConfigurationProperty | cdk.IResolvable;
        /**
         * (Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created.
         *
         * By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /28 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-endpointipaddressrange
         */
        readonly endpointIpAddressRange?: string;
        /**
         * To delete a file system if there are child volumes present below the root volume, use the string `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS` .
         *
         * If your file system has child volumes and you don't use this option, the delete request will fail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-options
         */
        readonly options?: Array<string>;
        /**
         * Required when `DeploymentType` is set to `MULTI_AZ_1` .
         *
         * This specifies the subnet in which you want the preferred file server to be located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-preferredsubnetid
         */
        readonly preferredSubnetId?: string;
        /**
         * Specifies the optional provisioned SSD read cache on file systems that use the Intelligent-Tiering storage class.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-readcacheconfiguration
         */
        readonly readCacheConfiguration?: cdk.IResolvable | CfnFileSystem.ReadCacheConfigurationProperty;
        /**
         * The configuration Amazon FSx uses when creating the root value of the Amazon FSx for OpenZFS file system.
         *
         * All volumes are children of the root volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration
         */
        readonly rootVolumeConfiguration?: cdk.IResolvable | CfnFileSystem.RootVolumeConfigurationProperty;
        /**
         * (Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server.
         *
         * You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-routetableids
         */
        readonly routeTableIds?: Array<string>;
        /**
         * Specifies the throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second (MBps).
         *
         * Valid values depend on the `DeploymentType` and `StorageType` that you choose, as follows:
         *
         * - For `INTELIGENT_TIERING` , valid values are 1280, 2560, 3840, 5120, 7680, or 10240 MBps.
         * - For `MULTI_AZ_1` and `SINGLE_AZ_2` , valid values are 160, 320, 640, 1280, 2560, 3840, 5120, 7680, or 10240 MBps.
         * - For `SINGLE_AZ_1` , valid values are 64, 128, 256, 512, 1024, 2048, 3072, or 4096 MBps.
         *
         * You pay for additional throughput capacity that you provision.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-throughputcapacity
         */
        readonly throughputCapacity?: number;
        /**
         * A recurring weekly time, in the format `D:HH:MM` .
         *
         * `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/ISO_week_date) .
         *
         * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
         *
         * For example, `1:05:00` specifies maintenance at 5 AM Monday.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html#cfn-fsx-filesystem-openzfsconfiguration-weeklymaintenancestarttime
         */
        readonly weeklyMaintenanceStartTime?: string;
    }
    /**
     * The configuration of an Amazon FSx for OpenZFS root volume.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-rootvolumeconfiguration.html
     */
    interface RootVolumeConfigurationProperty {
        /**
         * A Boolean value indicating whether tags for the volume should be copied to snapshots of the volume.
         *
         * This value defaults to `false` . If it's set to `true` , all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is `true` and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-rootvolumeconfiguration.html#cfn-fsx-filesystem-rootvolumeconfiguration-copytagstosnapshots
         */
        readonly copyTagsToSnapshots?: boolean | cdk.IResolvable;
        /**
         * Specifies the method used to compress the data on the volume. The compression type is `NONE` by default.
         *
         * - `NONE` - Doesn't compress the data on the volume. `NONE` is the default.
         * - `ZSTD` - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better compression ratio to minimize on-disk storage utilization.
         * - `LZ4` - Compresses the data in the volume using the LZ4 compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive and delivers higher write throughput speeds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-rootvolumeconfiguration.html#cfn-fsx-filesystem-rootvolumeconfiguration-datacompressiontype
         */
        readonly dataCompressionType?: string;
        /**
         * The configuration object for mounting a file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-rootvolumeconfiguration.html#cfn-fsx-filesystem-rootvolumeconfiguration-nfsexports
         */
        readonly nfsExports?: Array<cdk.IResolvable | CfnFileSystem.NfsExportsProperty> | cdk.IResolvable;
        /**
         * A Boolean value indicating whether the volume is read-only.
         *
         * Setting this value to `true` can be useful after you have completed changes to a volume and no longer want changes to occur.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-rootvolumeconfiguration.html#cfn-fsx-filesystem-rootvolumeconfiguration-readonly
         */
        readonly readOnly?: boolean | cdk.IResolvable;
        /**
         * Specifies the record size of an OpenZFS root volume, in kibibytes (KiB).
         *
         * Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. Most workloads should use the default record size. Database workflows can benefit from a smaller record size, while streaming workflows can benefit from a larger record size. For additional guidance on setting a custom record size, see [Tips for maximizing performance](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs) in the *Amazon FSx for OpenZFS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-rootvolumeconfiguration.html#cfn-fsx-filesystem-rootvolumeconfiguration-recordsizekib
         */
        readonly recordSizeKiB?: number;
        /**
         * An object specifying how much storage users or groups can use on the volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-rootvolumeconfiguration.html#cfn-fsx-filesystem-rootvolumeconfiguration-userandgroupquotas
         */
        readonly userAndGroupQuotas?: Array<cdk.IResolvable | CfnFileSystem.UserAndGroupQuotasProperty> | cdk.IResolvable;
    }
    /**
     * The configuration object for mounting a file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-nfsexports.html
     */
    interface NfsExportsProperty {
        /**
         * A list of configuration objects that contain the client and options for mounting the OpenZFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-nfsexports.html#cfn-fsx-filesystem-nfsexports-clientconfigurations
         */
        readonly clientConfigurations?: Array<CfnFileSystem.ClientConfigurationsProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies who can mount an OpenZFS file system and the options available while mounting the file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-clientconfigurations.html
     */
    interface ClientConfigurationsProperty {
        /**
         * A value that specifies who can mount the file system.
         *
         * You can provide a wildcard character ( `*` ), an IP address ( `0.0.0.0` ), or a CIDR address ( `192.0.2.0/24` ). By default, Amazon FSx uses the wildcard character when specifying the client.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-clientconfigurations.html#cfn-fsx-filesystem-clientconfigurations-clients
         */
        readonly clients?: string;
        /**
         * The options to use when mounting the file system.
         *
         * For a list of options that you can use with Network File System (NFS), see the [exports(5) - Linux man page](https://docs.aws.amazon.com/https://linux.die.net/man/5/exports) . When choosing your options, consider the following:
         *
         * - `crossmnt` is used by default. If you don't specify `crossmnt` when changing the client configuration, you won't be able to see or access snapshots in your file system's snapshot directory.
         * - `sync` is used by default. If you instead specify `async` , the system acknowledges writes before writing to disk. If the system crashes before the writes are finished, you lose the unwritten data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-clientconfigurations.html#cfn-fsx-filesystem-clientconfigurations-options
         */
        readonly options?: Array<string>;
    }
    /**
     * Used to configure quotas that define how much storage a user or group can use on an FSx for OpenZFS volume.
     *
     * For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the FSx for OpenZFS User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-userandgroupquotas.html
     */
    interface UserAndGroupQuotasProperty {
        /**
         * The ID of the user or group that the quota applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-userandgroupquotas.html#cfn-fsx-filesystem-userandgroupquotas-id
         */
        readonly id?: number;
        /**
         * The user or group's storage quota, in gibibytes (GiB).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-userandgroupquotas.html#cfn-fsx-filesystem-userandgroupquotas-storagecapacityquotagib
         */
        readonly storageCapacityQuotaGiB?: number;
        /**
         * Specifies whether the quota applies to a user or group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-userandgroupquotas.html#cfn-fsx-filesystem-userandgroupquotas-type
         */
        readonly type?: string;
    }
    /**
     * The configuration for the optional provisioned SSD read cache on file systems that use the Intelligent-Tiering storage class.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-readcacheconfiguration.html
     */
    interface ReadCacheConfigurationProperty {
        /**
         * Required if `SizingMode` is set to `USER_PROVISIONED` .
         *
         * Specifies the size of the file system's SSD read cache, in gibibytes (GiB).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-readcacheconfiguration.html#cfn-fsx-filesystem-readcacheconfiguration-sizegib
         */
        readonly sizeGiB?: number;
        /**
         * Specifies how the provisioned SSD read cache is sized, as follows:.
         *
         * - Set to `NO_CACHE` if you do not want to use an SSD read cache with your Intelligent-Tiering file system.
         * - Set to `USER_PROVISIONED` to specify the exact size of your SSD read cache.
         * - Set to `PROPORTIONAL_TO_THROUGHPUT_CAPACITY` to have your SSD read cache automatically sized based on your throughput capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-readcacheconfiguration.html#cfn-fsx-filesystem-readcacheconfiguration-sizingmode
         */
        readonly sizingMode?: string;
    }
}
/**
 * Properties for defining a `CfnFileSystem`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html
 */
export interface CfnFileSystemProps {
    /**
     * The ID of the file system backup that you are using to create a file system.
     *
     * For more information, see [CreateFileSystemFromBackup](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-backupid
     */
    readonly backupId?: string;
    /**
     * The type of Amazon FSx file system, which can be `LUSTRE` , `WINDOWS` , `ONTAP` , or `OPENZFS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-filesystemtype
     */
    readonly fileSystemType: string;
    /**
     * For FSx for Lustre file systems, sets the Lustre version for the file system that you're creating.
     *
     * Valid values are `2.10` , `2.12` , and `2.15` :
     *
     * - `2.10` is supported by the Scratch and Persistent_1 Lustre deployment types.
     * - `2.12` is supported by all Lustre deployment types, except for `PERSISTENT_2` with a metadata configuration mode.
     * - `2.15` is supported by all Lustre deployment types and is recommended for all new file systems.
     *
     * Default value is `2.10` , except for the following deployments:
     *
     * - Default value is `2.12` when `DeploymentType` is set to `PERSISTENT_2` without a metadata configuration mode.
     * - Default value is `2.15` when `DeploymentType` is set to `PERSISTENT_2` with a metadata configuration mode.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-filesystemtypeversion
     */
    readonly fileSystemTypeVersion?: string;
    /**
     * The ID of the AWS Key Management Service ( AWS KMS ) key used to encrypt Amazon FSx file system data.
     *
     * Used as follows with Amazon FSx file system types:
     *
     * - Amazon FSx for Lustre `PERSISTENT_1` and `PERSISTENT_2` deployment types only.
     *
     * `SCRATCH_1` and `SCRATCH_2` types are encrypted using the Amazon FSx service AWS KMS key for your account.
     * - Amazon FSx for NetApp ONTAP
     * - Amazon FSx for OpenZFS
     * - Amazon FSx for Windows File Server
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The Lustre configuration for the file system being created.
     *
     * > The following parameters are not supported when creating Lustre file systems with a data repository association.
     * >
     * > - `AutoImportPolicy`
     * > - `ExportPath`
     * > - `ImportedChunkSize`
     * > - `ImportPath`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration
     */
    readonly lustreConfiguration?: cdk.IResolvable | CfnFileSystem.LustreConfigurationProperty;
    /**
     * The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration
     */
    readonly ontapConfiguration?: cdk.IResolvable | CfnFileSystem.OntapConfigurationProperty;
    /**
     * The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration
     */
    readonly openZfsConfiguration?: cdk.IResolvable | CfnFileSystem.OpenZFSConfigurationProperty;
    /**
     * A list of IDs specifying the security groups to apply to all network interfaces created for file system access.
     *
     * This list isn't returned in later requests to describe the file system.
     *
     * > You must specify a security group if you are creating a Multi-AZ FSx for ONTAP file system in a VPC subnet that has been shared with you.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * Sets the storage capacity of the file system that you're creating.
     *
     * `StorageCapacity` is required if you are creating a new file system. It is not required if you are creating a file system by restoring a backup.
     *
     * *FSx for Lustre file systems* - The amount of storage capacity that you can configure depends on the value that you set for `StorageType` and the Lustre `DeploymentType` , as follows:
     *
     * - For `SCRATCH_2` , `PERSISTENT_2` and `PERSISTENT_1` deployment types using SSD storage type, the valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.
     * - For `PERSISTENT_1` HDD file systems, valid values are increments of 6000 GiB for 12 MB/s/TiB file systems and increments of 1800 GiB for 40 MB/s/TiB file systems.
     * - For `SCRATCH_1` deployment type, valid values are 1200 GiB, 2400 GiB, and increments of 3600 GiB.
     *
     * *FSx for ONTAP file systems* - The amount of SSD storage capacity that you can configure depends on the value of the `HAPairs` property. The minimum value is calculated as 1,024 GiB * HAPairs and the maximum is calculated as 524,288 GiB * HAPairs, up to a maximum amount of SSD storage capacity of 1,048,576 GiB (1 pebibyte).
     *
     * *FSx for OpenZFS file systems* - The amount of storage capacity that you can configure is from 64 GiB up to 524,288 GiB (512 TiB). If you are creating a file system from a backup, you can specify a storage capacity equal to or greater than the original file system's storage capacity.
     *
     * *FSx for Windows File Server file systems* - The amount of storage capacity that you can configure depends on the value that you set for `StorageType` as follows:
     *
     * - For SSD storage, valid values are 32 GiB-65,536 GiB (64 TiB).
     * - For HDD storage, valid values are 2000 GiB-65,536 GiB (64 TiB).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-storagecapacity
     */
    readonly storageCapacity?: number;
    /**
     * Sets the storage class for the file system that you're creating.
     *
     * Valid values are `SSD` , `HDD` , and `INTELLIGENT_TIERING` .
     *
     * - Set to `SSD` to use solid state drive storage. SSD is supported on all Windows, Lustre, ONTAP, and OpenZFS deployment types.
     * - Set to `HDD` to use hard disk drive storage. HDD is supported on `SINGLE_AZ_2` and `MULTI_AZ_1` Windows file system deployment types, and on `PERSISTENT_1` Lustre file system deployment types.
     * - Set to `INTELLIGENT_TIERING` to use fully elastic, intelligently-tiered storage. Intelligent-Tiering is only available for OpenZFS file systems with the Multi-AZ deployment type.
     *
     * Default value is `SSD` . For more information, see [Storage type options](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/optimize-fsx-costs.html#storage-type-options) in the *FSx for Windows File Server User Guide* , [Multiple storage options](https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html#storage-options) in the *FSx for Lustre User Guide* , and [Working with Intelligent-Tiering](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance-intelligent-tiering) in the *Amazon FSx for OpenZFS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-storagetype
     */
    readonly storageType?: string;
    /**
     * Specifies the IDs of the subnets that the file system will be accessible from.
     *
     * For Windows and ONTAP `MULTI_AZ_1` deployment types,provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the `WindowsConfiguration > PreferredSubnetID` or `OntapConfiguration > PreferredSubnetID` properties. For more information about Multi-AZ file system configuration, see [Availability and durability: Single-AZ and Multi-AZ file systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html) in the *Amazon FSx for Windows User Guide* and [Availability and durability](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html) in the *Amazon FSx for ONTAP User Guide* .
     *
     * For Windows `SINGLE_AZ_1` and `SINGLE_AZ_2` and all Lustre deployment types, provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * The tags to associate with the file system.
     *
     * For more information, see [Tagging your Amazon FSx resources](https://docs.aws.amazon.com/fsx/latest/LustreGuide/tag-resources.html) in the *Amazon FSx for Lustre User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The configuration object for the Microsoft Windows file system you are creating.
     *
     * This value is required if `FileSystemType` is set to `WINDOWS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration
     */
    readonly windowsConfiguration?: cdk.IResolvable | CfnFileSystem.WindowsConfigurationProperty;
}
/**
 * A snapshot of an Amazon FSx for OpenZFS volume.
 *
 * @cloudformationResource AWS::FSx::Snapshot
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html
 */
export declare class CfnSnapshot extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSnapshot from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSnapshot;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Returns the snapshot's Amazon Resource Name (ARN).
     *
     * Example: `arn:aws:fsx:us-east-2:111133334444:snapshot/fsvol-01234567890123456/fsvolsnap-0123456789abcedf5`
     *
     * @cloudformationAttribute ResourceARN
     */
    readonly attrResourceArn: string;
    /**
     * The name of the snapshot.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of `Tag` values, with a maximum of 50 elements.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ID of the volume that the snapshot is of.
     */
    volumeId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSnapshotProps);
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
 * Properties for defining a `CfnSnapshot`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html
 */
export interface CfnSnapshotProps {
    /**
     * The name of the snapshot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html#cfn-fsx-snapshot-name
     */
    readonly name: string;
    /**
     * A list of `Tag` values, with a maximum of 50 elements.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html#cfn-fsx-snapshot-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the volume that the snapshot is of.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html#cfn-fsx-snapshot-volumeid
     */
    readonly volumeId: string;
}
/**
 * Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.
 *
 * @cloudformationResource AWS::FSx::StorageVirtualMachine
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html
 */
export declare class CfnStorageVirtualMachine extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStorageVirtualMachine from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStorageVirtualMachine;
    /**
     * Returns the storage virtual machine's Amazon Resource Name (ARN).
     *
     * Example: `arn:aws:fsx:us-east-2:111111111111:storage-virtual-machine/fs-0123456789abcdef1/svm-01234567890123456`
     *
     * @cloudformationAttribute ResourceARN
     */
    readonly attrResourceArn: string;
    /**
     * Returns the storgage virtual machine's system generated ID.
     *
     * Example: `svm-0123456789abcedf1`
     *
     * @cloudformationAttribute StorageVirtualMachineId
     */
    readonly attrStorageVirtualMachineId: string;
    /**
     * Returns the storage virtual machine's system generated unique identifier (UUID).
     *
     * Example: `abcd0123-cd45-ef67-11aa-1111aaaa23bc`
     *
     * @cloudformationAttribute UUID
     */
    readonly attrUuid: string;
    /**
     * Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.
     */
    activeDirectoryConfiguration?: CfnStorageVirtualMachine.ActiveDirectoryConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the FSx for ONTAP file system on which to create the SVM.
     */
    fileSystemId: string;
    /**
     * The name of the SVM.
     */
    name: string;
    /**
     * The security style of the root volume of the SVM. Specify one of the following values:.
     */
    rootVolumeSecurityStyle?: string;
    /**
     * Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint.
     */
    svmAdminPassword?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of `Tag` values, with a maximum of 50 elements.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStorageVirtualMachineProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStorageVirtualMachine {
    /**
     * Describes the self-managed Microsoft Active Directory to which you want to join the SVM.
     *
     * Joining an Active Directory provides user authentication and access control for SMB clients, including Microsoft Windows and macOS clients accessing the file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration.html
     */
    interface ActiveDirectoryConfigurationProperty {
        /**
         * The NetBIOS name of the Active Directory computer object that will be created for your SVM.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration.html#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-netbiosname
         */
        readonly netBiosName?: string;
        /**
         * The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration.html#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-selfmanagedactivedirectoryconfiguration
         */
        readonly selfManagedActiveDirectoryConfiguration?: cdk.IResolvable | CfnStorageVirtualMachine.SelfManagedActiveDirectoryConfigurationProperty;
    }
    /**
     * The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration.html
     */
    interface SelfManagedActiveDirectoryConfigurationProperty {
        /**
         * A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-dnsips
         */
        readonly dnsIps?: Array<string>;
        /**
         * The fully qualified domain name of the self-managed AD directory, such as `corp.example.com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-domainname
         */
        readonly domainName?: string;
        /**
         * (Optional) The name of the domain group whose members are granted administrative privileges for the file system.
         *
         * Administrative privileges include taking ownership of files and folders, setting audit controls (audit ACLs) on files and folders, and administering the file system remotely by using the FSx Remote PowerShell. The group that you specify must already exist in your domain. If you don't provide one, your AD domain's Domain Admins group is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-filesystemadministratorsgroup
         */
        readonly fileSystemAdministratorsGroup?: string;
        /**
         * (Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory.
         *
         * Amazon FSx only accepts OU as the direct parent of the file system. An example is `OU=FSx,DC=yourdomain,DC=corp,DC=com` . To learn more, see [RFC 2253](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc2253) . If none is provided, the FSx file system is created in the default location of your self-managed AD directory.
         *
         * > Only Organizational Unit (OU) objects can be the direct parent of the file system that you're creating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-organizationalunitdistinguishedname
         */
        readonly organizationalUnitDistinguishedName?: string;
        /**
         * The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-password
         */
        readonly password?: string;
        /**
         * The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
         *
         * This account must have the permission to join computers to the domain in the organizational unit provided in `OrganizationalUnitDistinguishedName` , or in the default location of your AD domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-username
         */
        readonly userName?: string;
    }
}
/**
 * Properties for defining a `CfnStorageVirtualMachine`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html
 */
export interface CfnStorageVirtualMachineProps {
    /**
     * Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration
     */
    readonly activeDirectoryConfiguration?: CfnStorageVirtualMachine.ActiveDirectoryConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the FSx for ONTAP file system on which to create the SVM.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-filesystemid
     */
    readonly fileSystemId: string;
    /**
     * The name of the SVM.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-name
     */
    readonly name: string;
    /**
     * The security style of the root volume of the SVM. Specify one of the following values:.
     *
     * - `UNIX` if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account.
     * - `NTFS` if the file system is managed by a Microsoft Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Microsoft Windows user as the service account.
     * - `MIXED` This is an advanced setting. For more information, see [Volume security style](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-security-style.html) in the Amazon FSx for NetApp ONTAP User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-rootvolumesecuritystyle
     */
    readonly rootVolumeSecurityStyle?: string;
    /**
     * Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint.
     *
     * Doing so enables you to manage the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's `fsxadmin` user to manage the SVM. For more information, see [Managing SVMs using the NetApp ONTAP CLI](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-resources-ontap-apps.html#vsadmin-ontap-cli) in the *FSx for ONTAP User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-svmadminpassword
     */
    readonly svmAdminPassword?: string;
    /**
     * A list of `Tag` values, with a maximum of 50 elements.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.
 *
 * @cloudformationResource AWS::FSx::Volume
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html
 */
export declare class CfnVolume extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVolume from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVolume;
    /**
     * Returns the volume's Amazon Resource Name (ARN).
     *
     * Example: `arn:aws:fsx:us-east-2:111122223333:volume/fs-0123456789abcdef9/fsvol-01234567891112223`
     *
     * @cloudformationAttribute ResourceARN
     */
    readonly attrResourceArn: string;
    /**
     * Returns the volume's universally unique identifier (UUID).
     *
     * Example: `abcd0123-cd45-ef67-11aa-1111aaaa23bc`
     *
     * @cloudformationAttribute UUID
     */
    readonly attrUuid: string;
    /**
     * Returns the volume's ID.
     *
     * Example: `fsvol-0123456789abcdefa`
     *
     * @cloudformationAttribute VolumeId
     */
    readonly attrVolumeId: string;
    /**
     * Specifies the ID of the volume backup to use to create a new volume.
     */
    backupId?: string;
    /**
     * The name of the volume.
     */
    name: string;
    /**
     * The configuration of an Amazon FSx for NetApp ONTAP volume.
     */
    ontapConfiguration?: cdk.IResolvable | CfnVolume.OntapConfigurationProperty;
    /**
     * The configuration of an Amazon FSx for OpenZFS volume.
     */
    openZfsConfiguration?: cdk.IResolvable | CfnVolume.OpenZFSConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of the volume.
     */
    volumeType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVolumeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVolume {
    /**
     * Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html
     */
    interface OpenZFSConfigurationProperty {
        /**
         * A Boolean value indicating whether tags for the volume should be copied to snapshots.
         *
         * This value defaults to `false` . If it's set to `true` , all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is `true` , and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-copytagstosnapshots
         */
        readonly copyTagsToSnapshots?: boolean | cdk.IResolvable;
        /**
         * Specifies the method used to compress the data on the volume. The compression type is `NONE` by default.
         *
         * - `NONE` - Doesn't compress the data on the volume. `NONE` is the default.
         * - `ZSTD` - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. Compared to LZ4, Z-Standard provides a better compression ratio to minimize on-disk storage utilization.
         * - `LZ4` - Compresses the data in the volume using the LZ4 compression algorithm. Compared to Z-Standard, LZ4 is less compute-intensive and delivers higher write throughput speeds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-datacompressiontype
         */
        readonly dataCompressionType?: string;
        /**
         * The configuration object for mounting a Network File System (NFS) file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-nfsexports
         */
        readonly nfsExports?: Array<cdk.IResolvable | CfnVolume.NfsExportsProperty> | cdk.IResolvable;
        /**
         * To delete the volume's child volumes, snapshots, and clones, use the string `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-options
         */
        readonly options?: Array<string>;
        /**
         * The configuration object that specifies the snapshot to use as the origin of the data for the volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-originsnapshot
         */
        readonly originSnapshot?: cdk.IResolvable | CfnVolume.OriginSnapshotProperty;
        /**
         * The ID of the volume to use as the parent volume of the volume that you are creating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-parentvolumeid
         */
        readonly parentVolumeId: string;
        /**
         * A Boolean value indicating whether the volume is read-only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-readonly
         */
        readonly readOnly?: boolean | cdk.IResolvable;
        /**
         * Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB).
         *
         * For file systems using the Intelligent-Tiering storage class, valid values are 128, 256, 512, 1024, 2048, or 4096 KiB, with a default of 1024 KiB. For all other file systems, valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB, with a default of 128 KiB. We recommend using the default setting for the majority of use cases. Generally, workloads that write in fixed small or large record sizes may benefit from setting a custom record size, like database workloads (small record size) or media streaming workloads (large record size). For additional guidance on when to set a custom record size, see [ZFS Record size](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#record-size-performance) in the *Amazon FSx for OpenZFS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-recordsizekib
         */
        readonly recordSizeKiB?: number;
        /**
         * Sets the maximum storage size in gibibytes (GiB) for the volume.
         *
         * You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set `StorageCapacityReservationGiB` . To *not* specify a storage capacity quota, set this to `-1` .
         *
         * For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the *Amazon FSx for OpenZFS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-storagecapacityquotagib
         */
        readonly storageCapacityQuotaGiB?: number;
        /**
         * Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume.
         *
         * Setting `StorageCapacityReservationGiB` guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To *not* specify a storage capacity reservation, set this to `0` or `-1` . For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the *Amazon FSx for OpenZFS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-storagecapacityreservationgib
         */
        readonly storageCapacityReservationGiB?: number;
        /**
         * Configures how much storage users and groups can use on the volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html#cfn-fsx-volume-openzfsconfiguration-userandgroupquotas
         */
        readonly userAndGroupQuotas?: Array<cdk.IResolvable | CfnVolume.UserAndGroupQuotasProperty> | cdk.IResolvable;
    }
    /**
     * The configuration object for mounting a Network File System (NFS) file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-nfsexports.html
     */
    interface NfsExportsProperty {
        /**
         * A list of configuration objects that contain the client and options for mounting the OpenZFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-nfsexports.html#cfn-fsx-volume-nfsexports-clientconfigurations
         */
        readonly clientConfigurations: Array<CfnVolume.ClientConfigurationsProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies who can mount an OpenZFS file system and the options available while mounting the file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-clientconfigurations.html
     */
    interface ClientConfigurationsProperty {
        /**
         * A value that specifies who can mount the file system.
         *
         * You can provide a wildcard character ( `*` ), an IP address ( `0.0.0.0` ), or a CIDR address ( `192.0.2.0/24` ). By default, Amazon FSx uses the wildcard character when specifying the client.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-clientconfigurations.html#cfn-fsx-volume-clientconfigurations-clients
         */
        readonly clients: string;
        /**
         * The options to use when mounting the file system.
         *
         * For a list of options that you can use with Network File System (NFS), see the [exports(5) - Linux man page](https://docs.aws.amazon.com/https://linux.die.net/man/5/exports) . When choosing your options, consider the following:
         *
         * - `crossmnt` is used by default. If you don't specify `crossmnt` when changing the client configuration, you won't be able to see or access snapshots in your file system's snapshot directory.
         * - `sync` is used by default. If you instead specify `async` , the system acknowledges writes before writing to disk. If the system crashes before the writes are finished, you lose the unwritten data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-clientconfigurations.html#cfn-fsx-volume-clientconfigurations-options
         */
        readonly options: Array<string>;
    }
    /**
     * The configuration object that specifies the snapshot to use as the origin of the data for the volume.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-originsnapshot.html
     */
    interface OriginSnapshotProperty {
        /**
         * Specifies the strategy used when copying data from the snapshot to the new volume.
         *
         * - `CLONE` - The new volume references the data in the origin snapshot. Cloning a snapshot is faster than copying data from the snapshot to a new volume and doesn't consume disk throughput. However, the origin snapshot can't be deleted if there is a volume using its copied data.
         * - `FULL_COPY` - Copies all data from the snapshot to the new volume.
         *
         * Specify this option to create the volume from a snapshot on another FSx for OpenZFS file system.
         *
         * > The `INCREMENTAL_COPY` option is only for updating an existing volume by using a snapshot from another FSx for OpenZFS file system. For more information, see [CopySnapshotAndUpdateVolume](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopySnapshotAndUpdateVolume.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-originsnapshot.html#cfn-fsx-volume-originsnapshot-copystrategy
         */
        readonly copyStrategy: string;
        /**
         * Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-originsnapshot.html#cfn-fsx-volume-originsnapshot-snapshotarn
         */
        readonly snapshotArn: string;
    }
    /**
     * Configures how much storage users and groups can use on the volume.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-userandgroupquotas.html
     */
    interface UserAndGroupQuotasProperty {
        /**
         * The ID of the user or group that the quota applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-userandgroupquotas.html#cfn-fsx-volume-userandgroupquotas-id
         */
        readonly id: number;
        /**
         * The user or group's storage quota, in gibibytes (GiB).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-userandgroupquotas.html#cfn-fsx-volume-userandgroupquotas-storagecapacityquotagib
         */
        readonly storageCapacityQuotaGiB: number;
        /**
         * Specifies whether the quota applies to a user or group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-userandgroupquotas.html#cfn-fsx-volume-userandgroupquotas-type
         */
        readonly type: string;
    }
    /**
     * Specifies the configuration of the ONTAP volume that you are creating.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html
     */
    interface OntapConfigurationProperty {
        /**
         * Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-aggregateconfiguration
         */
        readonly aggregateConfiguration?: CfnVolume.AggregateConfigurationProperty | cdk.IResolvable;
        /**
         * A boolean flag indicating whether tags for the volume should be copied to backups.
         *
         * This value defaults to false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the volume, regardless of this value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-copytagstobackups
         */
        readonly copyTagsToBackups?: string;
        /**
         * Specifies the location in the SVM's namespace where the volume is mounted.
         *
         * This parameter is required. The `JunctionPath` must have a leading forward slash, such as `/vol3` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-junctionpath
         */
        readonly junctionPath?: string;
        /**
         * Specifies the type of volume you are creating. Valid values are the following:.
         *
         * - `RW` specifies a read/write volume. `RW` is the default.
         * - `DP` specifies a data-protection volume. A `DP` volume is read-only and can be used as the destination of a NetApp SnapMirror relationship.
         *
         * For more information, see [Volume types](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-types) in the Amazon FSx for NetApp ONTAP User Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-ontapvolumetype
         */
        readonly ontapVolumeType?: string;
        /**
         * Specifies the security style for the volume.
         *
         * If a volume's security style is not specified, it is automatically set to the root volume's security style. The security style determines the type of permissions that FSx for ONTAP uses to control data access. Specify one of the following values:
         *
         * - `UNIX` if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account.
         * - `NTFS` if the file system is managed by a Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Windows user as the service account.
         * - `MIXED` This is an advanced setting. For more information, see the topic [What the security styles and their effects are](https://docs.aws.amazon.com/https://docs.netapp.com/us-en/ontap/nfs-admin/security-styles-their-effects-concept.html) in the NetApp Documentation Center.
         *
         * For more information, see [Volume security style](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-security-style) in the FSx for ONTAP User Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-securitystyle
         */
        readonly securityStyle?: string;
        /**
         * Specifies the configured size of the volume, in bytes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-sizeinbytes
         */
        readonly sizeInBytes?: string;
        /**
         * Use `SizeInBytes` instead.
         *
         * Specifies the size of the volume, in megabytes (MB), that you are creating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-sizeinmegabytes
         */
        readonly sizeInMegabytes?: string;
        /**
         * The SnapLock configuration object for an FSx for ONTAP SnapLock volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-snaplockconfiguration
         */
        readonly snaplockConfiguration?: cdk.IResolvable | CfnVolume.SnaplockConfigurationProperty;
        /**
         * Specifies the snapshot policy for the volume. There are three built-in snapshot policies:.
         *
         * - `default` : This is the default policy. A maximum of six hourly snapshots taken five minutes past the hour. A maximum of two daily snapshots taken Monday through Saturday at 10 minutes after midnight. A maximum of two weekly snapshots taken every Sunday at 15 minutes after midnight.
         * - `default-1weekly` : This policy is the same as the `default` policy except that it only retains one snapshot from the weekly schedule.
         * - `none` : This policy does not take any snapshots. This policy can be assigned to volumes to prevent automatic snapshots from being taken.
         *
         * You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.
         *
         * For more information, see [Snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx for NetApp ONTAP User Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-snapshotpolicy
         */
        readonly snapshotPolicy?: string;
        /**
         * Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.
         *
         * `StorageEfficiencyEnabled` is required when creating a `RW` volume ( `OntapVolumeType` set to `RW` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-storageefficiencyenabled
         */
        readonly storageEfficiencyEnabled?: string;
        /**
         * Specifies the ONTAP SVM in which to create the volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-storagevirtualmachineid
         */
        readonly storageVirtualMachineId: string;
        /**
         * Describes the data tiering policy for an ONTAP volume.
         *
         * When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
         *
         * Valid tiering policies are the following:
         *
         * - `SNAPSHOT_ONLY` - (Default value) moves cold snapshots to the capacity pool storage tier.
         *
         * - `AUTO` - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.
         *
         * - `ALL` - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.
         *
         * - `NONE` - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-tieringpolicy
         */
        readonly tieringPolicy?: cdk.IResolvable | CfnVolume.TieringPolicyProperty;
        /**
         * Use to specify the style of an ONTAP volume.
         *
         * FSx for ONTAP offers two styles of volumes that you can use for different purposes, FlexVol and FlexGroup volumes. For more information, see [Volume styles](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-styles) in the Amazon FSx for NetApp ONTAP User Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html#cfn-fsx-volume-ontapconfiguration-volumestyle
         */
        readonly volumeStyle?: string;
    }
    /**
     * Describes the data tiering policy for an ONTAP volume.
     *
     * When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
     *
     * Valid tiering policies are the following:
     *
     * - `SNAPSHOT_ONLY` - (Default value) moves cold snapshots to the capacity pool storage tier.
     *
     * - `AUTO` - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.
     *
     * - `ALL` - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.
     *
     * - `NONE` - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-tieringpolicy.html
     */
    interface TieringPolicyProperty {
        /**
         * Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool.
         *
         * Used with the `AUTO` and `SNAPSHOT_ONLY` tiering policies. Enter a whole number between 2 and 183. Default values are 31 days for `AUTO` and 2 days for `SNAPSHOT_ONLY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-tieringpolicy.html#cfn-fsx-volume-tieringpolicy-coolingperiod
         */
        readonly coolingPeriod?: number;
        /**
         * Specifies the tiering policy used to transition data. Default value is `SNAPSHOT_ONLY` .
         *
         * - `SNAPSHOT_ONLY` - moves cold snapshots to the capacity pool storage tier.
         * - `AUTO` - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.
         * - `ALL` - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.
         * - `NONE` - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-tieringpolicy.html#cfn-fsx-volume-tieringpolicy-name
         */
        readonly name?: string;
    }
    /**
     * Specifies the SnapLock configuration for an FSx for ONTAP SnapLock volume.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockconfiguration.html
     */
    interface SnaplockConfigurationProperty {
        /**
         * Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume.
         *
         * The default value is `false` . If you set `AuditLogVolume` to `true` , the SnapLock volume is created as an audit log volume. The minimum retention period for an audit log volume is six months.
         *
         * For more information, see [SnapLock audit log volumes](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-snaplock-works.html#snaplock-audit-log-volume) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockconfiguration.html#cfn-fsx-volume-snaplockconfiguration-auditlogvolume
         */
        readonly auditLogVolume?: string;
        /**
         * The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockconfiguration.html#cfn-fsx-volume-snaplockconfiguration-autocommitperiod
         */
        readonly autocommitPeriod?: CfnVolume.AutocommitPeriodProperty | cdk.IResolvable;
        /**
         * Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume.
         *
         * Enabling privileged delete allows SnapLock administrators to delete write once, read many (WORM) files even if they have active retention periods. `PERMANENTLY_DISABLED` is a terminal state. If privileged delete is permanently disabled on a SnapLock volume, you can't re-enable it. The default value is `DISABLED` .
         *
         * For more information, see [Privileged delete](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#privileged-delete) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockconfiguration.html#cfn-fsx-volume-snaplockconfiguration-privilegeddelete
         */
        readonly privilegedDelete?: string;
        /**
         * Specifies the retention period of an FSx for ONTAP SnapLock volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockconfiguration.html#cfn-fsx-volume-snaplockconfiguration-retentionperiod
         */
        readonly retentionPeriod?: cdk.IResolvable | CfnVolume.SnaplockRetentionPeriodProperty;
        /**
         * Specifies the retention mode of an FSx for ONTAP SnapLock volume.
         *
         * After it is set, it can't be changed. You can choose one of the following retention modes:
         *
         * - `COMPLIANCE` : Files transitioned to write once, read many (WORM) on a Compliance volume can't be deleted until their retention periods expire. This retention mode is used to address government or industry-specific mandates or to protect against ransomware attacks. For more information, see [SnapLock Compliance](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-compliance.html) .
         * - `ENTERPRISE` : Files transitioned to WORM on an Enterprise volume can be deleted by authorized users before their retention periods expire using privileged delete. This retention mode is used to advance an organization's data integrity and internal compliance or to test retention settings before using SnapLock Compliance. For more information, see [SnapLock Enterprise](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockconfiguration.html#cfn-fsx-volume-snaplockconfiguration-snaplocktype
         */
        readonly snaplockType: string;
        /**
         * Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume.
         *
         * Volume-append mode allows you to create WORM-appendable files and write data to them incrementally. The default value is `false` .
         *
         * For more information, see [Volume-append mode](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-append) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockconfiguration.html#cfn-fsx-volume-snaplockconfiguration-volumeappendmodeenabled
         */
        readonly volumeAppendModeEnabled?: string;
    }
    /**
     * Sets the autocommit period of files in an FSx for ONTAP SnapLock volume, which determines how long the files must remain unmodified before they're automatically transitioned to the write once, read many (WORM) state.
     *
     * For more information, see [Autocommit](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-autocommit) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-autocommitperiod.html
     */
    interface AutocommitPeriodProperty {
        /**
         * Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.
         *
         * Setting this value to `NONE` disables autocommit. The default value is `NONE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-autocommitperiod.html#cfn-fsx-volume-autocommitperiod-type
         */
        readonly type: string;
        /**
         * Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.
         *
         * The following ranges are valid:
         *
         * - `Minutes` : 5 - 65,535
         * - `Hours` : 1 - 65,535
         * - `Days` : 1 - 3,650
         * - `Months` : 1 - 120
         * - `Years` : 1 - 10
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-autocommitperiod.html#cfn-fsx-volume-autocommitperiod-value
         */
        readonly value?: number;
    }
    /**
     * The configuration to set the retention period of an FSx for ONTAP SnapLock volume.
     *
     * The retention period includes default, maximum, and minimum settings. For more information, see [Working with the retention period in SnapLock](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockretentionperiod.html
     */
    interface SnaplockRetentionPeriodProperty {
        /**
         * The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume.
         *
         * The default retention period must be greater than or equal to the minimum retention period and less than or equal to the maximum retention period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockretentionperiod.html#cfn-fsx-volume-snaplockretentionperiod-defaultretention
         */
        readonly defaultRetention: cdk.IResolvable | CfnVolume.RetentionPeriodProperty;
        /**
         * The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockretentionperiod.html#cfn-fsx-volume-snaplockretentionperiod-maximumretention
         */
        readonly maximumRetention: cdk.IResolvable | CfnVolume.RetentionPeriodProperty;
        /**
         * The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockretentionperiod.html#cfn-fsx-volume-snaplockretentionperiod-minimumretention
         */
        readonly minimumRetention: cdk.IResolvable | CfnVolume.RetentionPeriodProperty;
    }
    /**
     * Specifies the retention period of an FSx for ONTAP SnapLock volume.
     *
     * After it is set, it can't be changed. Files can't be deleted or modified during the retention period.
     *
     * For more information, see [Working with the retention period in SnapLock](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-retentionperiod.html
     */
    interface RetentionPeriodProperty {
        /**
         * Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume.
         *
         * Set it to one of the valid types. If you set it to `INFINITE` , the files are retained forever. If you set it to `UNSPECIFIED` , the files are retained until you set an explicit retention period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-retentionperiod.html#cfn-fsx-volume-retentionperiod-type
         */
        readonly type: string;
        /**
         * Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume.
         *
         * You can't set a value for `INFINITE` or `UNSPECIFIED` . For all other options, the following ranges are valid:
         *
         * - `Seconds` : 0 - 65,535
         * - `Minutes` : 0 - 65,535
         * - `Hours` : 0 - 24
         * - `Days` : 0 - 365
         * - `Months` : 0 - 12
         * - `Years` : 0 - 100
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-retentionperiod.html#cfn-fsx-volume-retentionperiod-value
         */
        readonly value?: number;
    }
    /**
     * Use to specify configuration options for a volume’s storage aggregate or aggregates.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-aggregateconfiguration.html
     */
    interface AggregateConfigurationProperty {
        /**
         * The list of aggregates that this volume resides on.
         *
         * Aggregates are storage pools which make up your primary storage tier. Each high-availability (HA) pair has one aggregate. The names of the aggregates map to the names of the aggregates in the ONTAP CLI and REST API. For FlexVols, there will always be a single entry.
         *
         * Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
         *
         * - The strings in the value of `Aggregates` are not are not formatted as `aggrX` , where X is a number between 1 and 12.
         * - The value of `Aggregates` contains aggregates that are not present.
         * - One or more of the aggregates supplied are too close to the volume limit to support adding more volumes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-aggregateconfiguration.html#cfn-fsx-volume-aggregateconfiguration-aggregates
         */
        readonly aggregates?: Array<string>;
        /**
         * Used to explicitly set the number of constituents within the FlexGroup per storage aggregate.
         *
         * This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-aggregateconfiguration.html#cfn-fsx-volume-aggregateconfiguration-constituentsperaggregate
         */
        readonly constituentsPerAggregate?: number;
    }
}
/**
 * Properties for defining a `CfnVolume`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html
 */
export interface CfnVolumeProps {
    /**
     * Specifies the ID of the volume backup to use to create a new volume.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-backupid
     */
    readonly backupId?: string;
    /**
     * The name of the volume.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-name
     */
    readonly name: string;
    /**
     * The configuration of an Amazon FSx for NetApp ONTAP volume.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration
     */
    readonly ontapConfiguration?: cdk.IResolvable | CfnVolume.OntapConfigurationProperty;
    /**
     * The configuration of an Amazon FSx for OpenZFS volume.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration
     */
    readonly openZfsConfiguration?: cdk.IResolvable | CfnVolume.OpenZFSConfigurationProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of the volume.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-volumetype
     */
    readonly volumeType?: string;
}
