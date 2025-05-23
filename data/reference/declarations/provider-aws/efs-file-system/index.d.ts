/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}
    */
    readonly availabilityZoneName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#creation_token EfsFileSystem#creation_token}
    */
    readonly creationToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#id EfsFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}
    */
    readonly performanceMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}
    */
    readonly provisionedThroughputInMibps?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#tags EfsFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#tags_all EfsFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}
    */
    readonly throughputMode?: string;
    /**
    * lifecycle_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#lifecycle_policy EfsFileSystem#lifecycle_policy}
    */
    readonly lifecyclePolicy?: EfsFileSystemLifecyclePolicy[] | cdktf.IResolvable;
    /**
    * protection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#protection EfsFileSystem#protection}
    */
    readonly protection?: EfsFileSystemProtection;
}
export interface EfsFileSystemSizeInBytes {
}
export declare function efsFileSystemSizeInBytesToTerraform(struct?: EfsFileSystemSizeInBytes): any;
export declare function efsFileSystemSizeInBytesToHclTerraform(struct?: EfsFileSystemSizeInBytes): any;
export declare class EfsFileSystemSizeInBytesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EfsFileSystemSizeInBytes | undefined;
    set internalValue(value: EfsFileSystemSizeInBytes | undefined);
    get value(): number;
    get valueInIa(): number;
    get valueInStandard(): number;
}
export declare class EfsFileSystemSizeInBytesList extends cdktf.ComplexList {
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
    get(index: number): EfsFileSystemSizeInBytesOutputReference;
}
export interface EfsFileSystemLifecyclePolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#transition_to_archive EfsFileSystem#transition_to_archive}
    */
    readonly transitionToArchive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}
    */
    readonly transitionToIa?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}
    */
    readonly transitionToPrimaryStorageClass?: string;
}
export declare function efsFileSystemLifecyclePolicyToTerraform(struct?: EfsFileSystemLifecyclePolicy | cdktf.IResolvable): any;
export declare function efsFileSystemLifecyclePolicyToHclTerraform(struct?: EfsFileSystemLifecyclePolicy | cdktf.IResolvable): any;
export declare class EfsFileSystemLifecyclePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EfsFileSystemLifecyclePolicy | cdktf.IResolvable | undefined;
    set internalValue(value: EfsFileSystemLifecyclePolicy | cdktf.IResolvable | undefined);
    private _transitionToArchive?;
    get transitionToArchive(): string;
    set transitionToArchive(value: string);
    resetTransitionToArchive(): void;
    get transitionToArchiveInput(): string | undefined;
    private _transitionToIa?;
    get transitionToIa(): string;
    set transitionToIa(value: string);
    resetTransitionToIa(): void;
    get transitionToIaInput(): string | undefined;
    private _transitionToPrimaryStorageClass?;
    get transitionToPrimaryStorageClass(): string;
    set transitionToPrimaryStorageClass(value: string);
    resetTransitionToPrimaryStorageClass(): void;
    get transitionToPrimaryStorageClassInput(): string | undefined;
}
export declare class EfsFileSystemLifecyclePolicyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EfsFileSystemLifecyclePolicy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EfsFileSystemLifecyclePolicyOutputReference;
}
export interface EfsFileSystemProtection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#replication_overwrite EfsFileSystem#replication_overwrite}
    */
    readonly replicationOverwrite?: string;
}
export declare function efsFileSystemProtectionToTerraform(struct?: EfsFileSystemProtectionOutputReference | EfsFileSystemProtection): any;
export declare function efsFileSystemProtectionToHclTerraform(struct?: EfsFileSystemProtectionOutputReference | EfsFileSystemProtection): any;
export declare class EfsFileSystemProtectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EfsFileSystemProtection | undefined;
    set internalValue(value: EfsFileSystemProtection | undefined);
    private _replicationOverwrite?;
    get replicationOverwrite(): string;
    set replicationOverwrite(value: string);
    resetReplicationOverwrite(): void;
    get replicationOverwriteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system aws_efs_file_system}
*/
export declare class EfsFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_efs_file_system";
    /**
    * Generates CDKTF code for importing a EfsFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EfsFileSystem to import
    * @param importFromId The id of the existing EfsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EfsFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_file_system aws_efs_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsFileSystemConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EfsFileSystemConfig);
    get arn(): string;
    get availabilityZoneId(): string;
    private _availabilityZoneName?;
    get availabilityZoneName(): string;
    set availabilityZoneName(value: string);
    resetAvailabilityZoneName(): void;
    get availabilityZoneNameInput(): string | undefined;
    private _creationToken?;
    get creationToken(): string;
    set creationToken(value: string);
    resetCreationToken(): void;
    get creationTokenInput(): string | undefined;
    get dnsName(): string;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
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
    get name(): string;
    get numberOfMountTargets(): number;
    get ownerId(): string;
    private _performanceMode?;
    get performanceMode(): string;
    set performanceMode(value: string);
    resetPerformanceMode(): void;
    get performanceModeInput(): string | undefined;
    private _provisionedThroughputInMibps?;
    get provisionedThroughputInMibps(): number;
    set provisionedThroughputInMibps(value: number);
    resetProvisionedThroughputInMibps(): void;
    get provisionedThroughputInMibpsInput(): number | undefined;
    private _sizeInBytes;
    get sizeInBytes(): EfsFileSystemSizeInBytesList;
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
    private _throughputMode?;
    get throughputMode(): string;
    set throughputMode(value: string);
    resetThroughputMode(): void;
    get throughputModeInput(): string | undefined;
    private _lifecyclePolicy;
    get lifecyclePolicy(): EfsFileSystemLifecyclePolicyList;
    putLifecyclePolicy(value: EfsFileSystemLifecyclePolicy[] | cdktf.IResolvable): void;
    resetLifecyclePolicy(): void;
    get lifecyclePolicyInput(): cdktf.IResolvable | EfsFileSystemLifecyclePolicy[] | undefined;
    private _protection;
    get protection(): EfsFileSystemProtectionOutputReference;
    putProtection(value: EfsFileSystemProtection): void;
    resetProtection(): void;
    get protectionInput(): EfsFileSystemProtection | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
