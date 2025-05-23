/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxOpenzfsVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}
    */
    readonly copyTagsToSnapshots?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}
    */
    readonly dataCompressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#delete_volume_options FsxOpenzfsVolume#delete_volume_options}
    */
    readonly deleteVolumeOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#id FsxOpenzfsVolume#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#name FsxOpenzfsVolume#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}
    */
    readonly parentVolumeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}
    */
    readonly recordSizeKib?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}
    */
    readonly storageCapacityQuotaGib?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}
    */
    readonly storageCapacityReservationGib?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}
    */
    readonly volumeType?: string;
    /**
    * nfs_exports block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#nfs_exports FsxOpenzfsVolume#nfs_exports}
    */
    readonly nfsExports?: FsxOpenzfsVolumeNfsExports;
    /**
    * origin_snapshot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#origin_snapshot FsxOpenzfsVolume#origin_snapshot}
    */
    readonly originSnapshot?: FsxOpenzfsVolumeOriginSnapshot;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#timeouts FsxOpenzfsVolume#timeouts}
    */
    readonly timeouts?: FsxOpenzfsVolumeTimeouts;
    /**
    * user_and_group_quotas block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#user_and_group_quotas FsxOpenzfsVolume#user_and_group_quotas}
    */
    readonly userAndGroupQuotas?: FsxOpenzfsVolumeUserAndGroupQuotas[] | cdktf.IResolvable;
}
export interface FsxOpenzfsVolumeNfsExportsClientConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}
    */
    readonly clients: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#options FsxOpenzfsVolume#options}
    */
    readonly options: string[];
}
export declare function fsxOpenzfsVolumeNfsExportsClientConfigurationsToTerraform(struct?: FsxOpenzfsVolumeNfsExportsClientConfigurations | cdktf.IResolvable): any;
export declare function fsxOpenzfsVolumeNfsExportsClientConfigurationsToHclTerraform(struct?: FsxOpenzfsVolumeNfsExportsClientConfigurations | cdktf.IResolvable): any;
export declare class FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOpenzfsVolumeNfsExportsClientConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOpenzfsVolumeNfsExportsClientConfigurations | cdktf.IResolvable | undefined);
    private _clients?;
    get clients(): string;
    set clients(value: string);
    get clientsInput(): string | undefined;
    private _options?;
    get options(): string[];
    set options(value: string[]);
    get optionsInput(): string[] | undefined;
}
export declare class FsxOpenzfsVolumeNfsExportsClientConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FsxOpenzfsVolumeNfsExportsClientConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference;
}
export interface FsxOpenzfsVolumeNfsExports {
    /**
    * client_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#client_configurations FsxOpenzfsVolume#client_configurations}
    */
    readonly clientConfigurations: FsxOpenzfsVolumeNfsExportsClientConfigurations[] | cdktf.IResolvable;
}
export declare function fsxOpenzfsVolumeNfsExportsToTerraform(struct?: FsxOpenzfsVolumeNfsExportsOutputReference | FsxOpenzfsVolumeNfsExports): any;
export declare function fsxOpenzfsVolumeNfsExportsToHclTerraform(struct?: FsxOpenzfsVolumeNfsExportsOutputReference | FsxOpenzfsVolumeNfsExports): any;
export declare class FsxOpenzfsVolumeNfsExportsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOpenzfsVolumeNfsExports | undefined;
    set internalValue(value: FsxOpenzfsVolumeNfsExports | undefined);
    private _clientConfigurations;
    get clientConfigurations(): FsxOpenzfsVolumeNfsExportsClientConfigurationsList;
    putClientConfigurations(value: FsxOpenzfsVolumeNfsExportsClientConfigurations[] | cdktf.IResolvable): void;
    get clientConfigurationsInput(): cdktf.IResolvable | FsxOpenzfsVolumeNfsExportsClientConfigurations[] | undefined;
}
export interface FsxOpenzfsVolumeOriginSnapshot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}
    */
    readonly copyStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}
    */
    readonly snapshotArn: string;
}
export declare function fsxOpenzfsVolumeOriginSnapshotToTerraform(struct?: FsxOpenzfsVolumeOriginSnapshotOutputReference | FsxOpenzfsVolumeOriginSnapshot): any;
export declare function fsxOpenzfsVolumeOriginSnapshotToHclTerraform(struct?: FsxOpenzfsVolumeOriginSnapshotOutputReference | FsxOpenzfsVolumeOriginSnapshot): any;
export declare class FsxOpenzfsVolumeOriginSnapshotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOpenzfsVolumeOriginSnapshot | undefined;
    set internalValue(value: FsxOpenzfsVolumeOriginSnapshot | undefined);
    private _copyStrategy?;
    get copyStrategy(): string;
    set copyStrategy(value: string);
    get copyStrategyInput(): string | undefined;
    private _snapshotArn?;
    get snapshotArn(): string;
    set snapshotArn(value: string);
    get snapshotArnInput(): string | undefined;
}
export interface FsxOpenzfsVolumeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#create FsxOpenzfsVolume#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#update FsxOpenzfsVolume#update}
    */
    readonly update?: string;
}
export declare function fsxOpenzfsVolumeTimeoutsToTerraform(struct?: FsxOpenzfsVolumeTimeouts | cdktf.IResolvable): any;
export declare function fsxOpenzfsVolumeTimeoutsToHclTerraform(struct?: FsxOpenzfsVolumeTimeouts | cdktf.IResolvable): any;
export declare class FsxOpenzfsVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOpenzfsVolumeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOpenzfsVolumeTimeouts | cdktf.IResolvable | undefined);
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
export interface FsxOpenzfsVolumeUserAndGroupQuotas {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#id FsxOpenzfsVolume#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}
    */
    readonly storageCapacityQuotaGib: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#type FsxOpenzfsVolume#type}
    */
    readonly type: string;
}
export declare function fsxOpenzfsVolumeUserAndGroupQuotasToTerraform(struct?: FsxOpenzfsVolumeUserAndGroupQuotas | cdktf.IResolvable): any;
export declare function fsxOpenzfsVolumeUserAndGroupQuotasToHclTerraform(struct?: FsxOpenzfsVolumeUserAndGroupQuotas | cdktf.IResolvable): any;
export declare class FsxOpenzfsVolumeUserAndGroupQuotasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOpenzfsVolumeUserAndGroupQuotas | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOpenzfsVolumeUserAndGroupQuotas | cdktf.IResolvable | undefined);
    private _id?;
    get id(): number;
    set id(value: number);
    get idInput(): number | undefined;
    private _storageCapacityQuotaGib?;
    get storageCapacityQuotaGib(): number;
    set storageCapacityQuotaGib(value: number);
    get storageCapacityQuotaGibInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class FsxOpenzfsVolumeUserAndGroupQuotasList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FsxOpenzfsVolumeUserAndGroupQuotas[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FsxOpenzfsVolumeUserAndGroupQuotasOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume aws_fsx_openzfs_volume}
*/
export declare class FsxOpenzfsVolume extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_openzfs_volume";
    /**
    * Generates CDKTF code for importing a FsxOpenzfsVolume resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxOpenzfsVolume to import
    * @param importFromId The id of the existing FsxOpenzfsVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxOpenzfsVolume to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_volume aws_fsx_openzfs_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOpenzfsVolumeConfig
    */
    constructor(scope: Construct, id: string, config: FsxOpenzfsVolumeConfig);
    get arn(): string;
    private _copyTagsToSnapshots?;
    get copyTagsToSnapshots(): boolean | cdktf.IResolvable;
    set copyTagsToSnapshots(value: boolean | cdktf.IResolvable);
    resetCopyTagsToSnapshots(): void;
    get copyTagsToSnapshotsInput(): boolean | cdktf.IResolvable | undefined;
    private _dataCompressionType?;
    get dataCompressionType(): string;
    set dataCompressionType(value: string);
    resetDataCompressionType(): void;
    get dataCompressionTypeInput(): string | undefined;
    private _deleteVolumeOptions?;
    get deleteVolumeOptions(): string[];
    set deleteVolumeOptions(value: string[]);
    resetDeleteVolumeOptions(): void;
    get deleteVolumeOptionsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parentVolumeId?;
    get parentVolumeId(): string;
    set parentVolumeId(value: string);
    get parentVolumeIdInput(): string | undefined;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): boolean | cdktf.IResolvable | undefined;
    private _recordSizeKib?;
    get recordSizeKib(): number;
    set recordSizeKib(value: number);
    resetRecordSizeKib(): void;
    get recordSizeKibInput(): number | undefined;
    private _storageCapacityQuotaGib?;
    get storageCapacityQuotaGib(): number;
    set storageCapacityQuotaGib(value: number);
    resetStorageCapacityQuotaGib(): void;
    get storageCapacityQuotaGibInput(): number | undefined;
    private _storageCapacityReservationGib?;
    get storageCapacityReservationGib(): number;
    set storageCapacityReservationGib(value: number);
    resetStorageCapacityReservationGib(): void;
    get storageCapacityReservationGibInput(): number | undefined;
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
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
    private _nfsExports;
    get nfsExports(): FsxOpenzfsVolumeNfsExportsOutputReference;
    putNfsExports(value: FsxOpenzfsVolumeNfsExports): void;
    resetNfsExports(): void;
    get nfsExportsInput(): FsxOpenzfsVolumeNfsExports | undefined;
    private _originSnapshot;
    get originSnapshot(): FsxOpenzfsVolumeOriginSnapshotOutputReference;
    putOriginSnapshot(value: FsxOpenzfsVolumeOriginSnapshot): void;
    resetOriginSnapshot(): void;
    get originSnapshotInput(): FsxOpenzfsVolumeOriginSnapshot | undefined;
    private _timeouts;
    get timeouts(): FsxOpenzfsVolumeTimeoutsOutputReference;
    putTimeouts(value: FsxOpenzfsVolumeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxOpenzfsVolumeTimeouts | undefined;
    private _userAndGroupQuotas;
    get userAndGroupQuotas(): FsxOpenzfsVolumeUserAndGroupQuotasList;
    putUserAndGroupQuotas(value: FsxOpenzfsVolumeUserAndGroupQuotas[] | cdktf.IResolvable): void;
    resetUserAndGroupQuotas(): void;
    get userAndGroupQuotasInput(): cdktf.IResolvable | FsxOpenzfsVolumeUserAndGroupQuotas[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
