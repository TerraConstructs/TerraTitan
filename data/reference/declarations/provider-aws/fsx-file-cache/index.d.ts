/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxFileCacheConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}
    */
    readonly copyTagsToDataRepositoryAssociations?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}
    */
    readonly fileCacheType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}
    */
    readonly fileCacheTypeVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#id FsxFileCache#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}
    */
    readonly storageCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#tags FsxFileCache#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#tags_all FsxFileCache#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * data_repository_association block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#data_repository_association FsxFileCache#data_repository_association}
    */
    readonly dataRepositoryAssociation?: FsxFileCacheDataRepositoryAssociation[] | cdktf.IResolvable;
    /**
    * lustre_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#lustre_configuration FsxFileCache#lustre_configuration}
    */
    readonly lustreConfiguration?: FsxFileCacheLustreConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#timeouts FsxFileCache#timeouts}
    */
    readonly timeouts?: FsxFileCacheTimeouts;
}
export interface FsxFileCacheDataRepositoryAssociationNfs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#dns_ips FsxFileCache#dns_ips}
    */
    readonly dnsIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#version FsxFileCache#version}
    */
    readonly version: string;
}
export declare function fsxFileCacheDataRepositoryAssociationNfsToTerraform(struct?: FsxFileCacheDataRepositoryAssociationNfs | cdktf.IResolvable): any;
export declare function fsxFileCacheDataRepositoryAssociationNfsToHclTerraform(struct?: FsxFileCacheDataRepositoryAssociationNfs | cdktf.IResolvable): any;
export declare class FsxFileCacheDataRepositoryAssociationNfsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxFileCacheDataRepositoryAssociationNfs | cdktf.IResolvable | undefined;
    set internalValue(value: FsxFileCacheDataRepositoryAssociationNfs | cdktf.IResolvable | undefined);
    private _dnsIps?;
    get dnsIps(): string[];
    set dnsIps(value: string[]);
    resetDnsIps(): void;
    get dnsIpsInput(): string[] | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
}
export declare class FsxFileCacheDataRepositoryAssociationNfsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FsxFileCacheDataRepositoryAssociationNfs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FsxFileCacheDataRepositoryAssociationNfsOutputReference;
}
export interface FsxFileCacheDataRepositoryAssociation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#data_repository_path FsxFileCache#data_repository_path}
    */
    readonly dataRepositoryPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#data_repository_subdirectories FsxFileCache#data_repository_subdirectories}
    */
    readonly dataRepositorySubdirectories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#file_cache_path FsxFileCache#file_cache_path}
    */
    readonly fileCachePath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#tags FsxFileCache#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * nfs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#nfs FsxFileCache#nfs}
    */
    readonly nfs?: FsxFileCacheDataRepositoryAssociationNfs[] | cdktf.IResolvable;
}
export declare function fsxFileCacheDataRepositoryAssociationToTerraform(struct?: FsxFileCacheDataRepositoryAssociation | cdktf.IResolvable): any;
export declare function fsxFileCacheDataRepositoryAssociationToHclTerraform(struct?: FsxFileCacheDataRepositoryAssociation | cdktf.IResolvable): any;
export declare class FsxFileCacheDataRepositoryAssociationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxFileCacheDataRepositoryAssociation | cdktf.IResolvable | undefined;
    set internalValue(value: FsxFileCacheDataRepositoryAssociation | cdktf.IResolvable | undefined);
    get associationId(): string;
    private _dataRepositoryPath?;
    get dataRepositoryPath(): string;
    set dataRepositoryPath(value: string);
    get dataRepositoryPathInput(): string | undefined;
    private _dataRepositorySubdirectories?;
    get dataRepositorySubdirectories(): string[];
    set dataRepositorySubdirectories(value: string[]);
    resetDataRepositorySubdirectories(): void;
    get dataRepositorySubdirectoriesInput(): string[] | undefined;
    get fileCacheId(): string;
    private _fileCachePath?;
    get fileCachePath(): string;
    set fileCachePath(value: string);
    get fileCachePathInput(): string | undefined;
    get fileSystemId(): string;
    get fileSystemPath(): string;
    get importedFileChunkSize(): number;
    get resourceArn(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _nfs;
    get nfs(): FsxFileCacheDataRepositoryAssociationNfsList;
    putNfs(value: FsxFileCacheDataRepositoryAssociationNfs[] | cdktf.IResolvable): void;
    resetNfs(): void;
    get nfsInput(): cdktf.IResolvable | FsxFileCacheDataRepositoryAssociationNfs[] | undefined;
}
export declare class FsxFileCacheDataRepositoryAssociationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FsxFileCacheDataRepositoryAssociation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FsxFileCacheDataRepositoryAssociationOutputReference;
}
export interface FsxFileCacheLustreConfigurationLogConfiguration {
}
export declare function fsxFileCacheLustreConfigurationLogConfigurationToTerraform(struct?: FsxFileCacheLustreConfigurationLogConfiguration): any;
export declare function fsxFileCacheLustreConfigurationLogConfigurationToHclTerraform(struct?: FsxFileCacheLustreConfigurationLogConfiguration): any;
export declare class FsxFileCacheLustreConfigurationLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxFileCacheLustreConfigurationLogConfiguration | undefined;
    set internalValue(value: FsxFileCacheLustreConfigurationLogConfiguration | undefined);
    get destination(): string;
    get level(): string;
}
export declare class FsxFileCacheLustreConfigurationLogConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FsxFileCacheLustreConfigurationLogConfigurationOutputReference;
}
export interface FsxFileCacheLustreConfigurationMetadataConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}
    */
    readonly storageCapacity: number;
}
export declare function fsxFileCacheLustreConfigurationMetadataConfigurationToTerraform(struct?: FsxFileCacheLustreConfigurationMetadataConfiguration | cdktf.IResolvable): any;
export declare function fsxFileCacheLustreConfigurationMetadataConfigurationToHclTerraform(struct?: FsxFileCacheLustreConfigurationMetadataConfiguration | cdktf.IResolvable): any;
export declare class FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxFileCacheLustreConfigurationMetadataConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: FsxFileCacheLustreConfigurationMetadataConfiguration | cdktf.IResolvable | undefined);
    private _storageCapacity?;
    get storageCapacity(): number;
    set storageCapacity(value: number);
    get storageCapacityInput(): number | undefined;
}
export declare class FsxFileCacheLustreConfigurationMetadataConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FsxFileCacheLustreConfigurationMetadataConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference;
}
export interface FsxFileCacheLustreConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#deployment_type FsxFileCache#deployment_type}
    */
    readonly deploymentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#per_unit_storage_throughput FsxFileCache#per_unit_storage_throughput}
    */
    readonly perUnitStorageThroughput: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#weekly_maintenance_start_time FsxFileCache#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * metadata_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#metadata_configuration FsxFileCache#metadata_configuration}
    */
    readonly metadataConfiguration: FsxFileCacheLustreConfigurationMetadataConfiguration[] | cdktf.IResolvable;
}
export declare function fsxFileCacheLustreConfigurationToTerraform(struct?: FsxFileCacheLustreConfiguration | cdktf.IResolvable): any;
export declare function fsxFileCacheLustreConfigurationToHclTerraform(struct?: FsxFileCacheLustreConfiguration | cdktf.IResolvable): any;
export declare class FsxFileCacheLustreConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxFileCacheLustreConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: FsxFileCacheLustreConfiguration | cdktf.IResolvable | undefined);
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    get deploymentTypeInput(): string | undefined;
    private _logConfiguration;
    get logConfiguration(): FsxFileCacheLustreConfigurationLogConfigurationList;
    get mountName(): string;
    private _perUnitStorageThroughput?;
    get perUnitStorageThroughput(): number;
    set perUnitStorageThroughput(value: number);
    get perUnitStorageThroughputInput(): number | undefined;
    private _weeklyMaintenanceStartTime?;
    get weeklyMaintenanceStartTime(): string;
    set weeklyMaintenanceStartTime(value: string);
    resetWeeklyMaintenanceStartTime(): void;
    get weeklyMaintenanceStartTimeInput(): string | undefined;
    private _metadataConfiguration;
    get metadataConfiguration(): FsxFileCacheLustreConfigurationMetadataConfigurationList;
    putMetadataConfiguration(value: FsxFileCacheLustreConfigurationMetadataConfiguration[] | cdktf.IResolvable): void;
    get metadataConfigurationInput(): cdktf.IResolvable | FsxFileCacheLustreConfigurationMetadataConfiguration[] | undefined;
}
export declare class FsxFileCacheLustreConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FsxFileCacheLustreConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FsxFileCacheLustreConfigurationOutputReference;
}
export interface FsxFileCacheTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#create FsxFileCache#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#delete FsxFileCache#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#update FsxFileCache#update}
    */
    readonly update?: string;
}
export declare function fsxFileCacheTimeoutsToTerraform(struct?: FsxFileCacheTimeouts | cdktf.IResolvable): any;
export declare function fsxFileCacheTimeoutsToHclTerraform(struct?: FsxFileCacheTimeouts | cdktf.IResolvable): any;
export declare class FsxFileCacheTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxFileCacheTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxFileCacheTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache aws_fsx_file_cache}
*/
export declare class FsxFileCache extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_file_cache";
    /**
    * Generates CDKTF code for importing a FsxFileCache resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxFileCache to import
    * @param importFromId The id of the existing FsxFileCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxFileCache to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_file_cache aws_fsx_file_cache} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxFileCacheConfig
    */
    constructor(scope: Construct, id: string, config: FsxFileCacheConfig);
    get arn(): string;
    private _copyTagsToDataRepositoryAssociations?;
    get copyTagsToDataRepositoryAssociations(): boolean | cdktf.IResolvable;
    set copyTagsToDataRepositoryAssociations(value: boolean | cdktf.IResolvable);
    resetCopyTagsToDataRepositoryAssociations(): void;
    get copyTagsToDataRepositoryAssociationsInput(): boolean | cdktf.IResolvable | undefined;
    get dataRepositoryAssociationIds(): string[];
    get dnsName(): string;
    get fileCacheId(): string;
    private _fileCacheType?;
    get fileCacheType(): string;
    set fileCacheType(value: string);
    get fileCacheTypeInput(): string | undefined;
    private _fileCacheTypeVersion?;
    get fileCacheTypeVersion(): string;
    set fileCacheTypeVersion(value: string);
    get fileCacheTypeVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _storageCapacity?;
    get storageCapacity(): number;
    set storageCapacity(value: number);
    get storageCapacityInput(): number | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get vpcId(): string;
    private _dataRepositoryAssociation;
    get dataRepositoryAssociation(): FsxFileCacheDataRepositoryAssociationList;
    putDataRepositoryAssociation(value: FsxFileCacheDataRepositoryAssociation[] | cdktf.IResolvable): void;
    resetDataRepositoryAssociation(): void;
    get dataRepositoryAssociationInput(): cdktf.IResolvable | FsxFileCacheDataRepositoryAssociation[] | undefined;
    private _lustreConfiguration;
    get lustreConfiguration(): FsxFileCacheLustreConfigurationList;
    putLustreConfiguration(value: FsxFileCacheLustreConfiguration[] | cdktf.IResolvable): void;
    resetLustreConfiguration(): void;
    get lustreConfigurationInput(): cdktf.IResolvable | FsxFileCacheLustreConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): FsxFileCacheTimeoutsOutputReference;
    putTimeouts(value: FsxFileCacheTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxFileCacheTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
