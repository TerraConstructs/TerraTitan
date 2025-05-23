/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}
    */
    readonly creationToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_file_system#id DataAwsEfsFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_file_system#tags DataAwsEfsFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsEfsFileSystemLifecyclePolicy {
}
export declare function dataAwsEfsFileSystemLifecyclePolicyToTerraform(struct?: DataAwsEfsFileSystemLifecyclePolicy): any;
export declare function dataAwsEfsFileSystemLifecyclePolicyToHclTerraform(struct?: DataAwsEfsFileSystemLifecyclePolicy): any;
export declare class DataAwsEfsFileSystemLifecyclePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEfsFileSystemLifecyclePolicy | undefined;
    set internalValue(value: DataAwsEfsFileSystemLifecyclePolicy | undefined);
    get transitionToArchive(): string;
    get transitionToIa(): string;
    get transitionToPrimaryStorageClass(): string;
}
export declare class DataAwsEfsFileSystemLifecyclePolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEfsFileSystemLifecyclePolicyOutputReference;
}
export interface DataAwsEfsFileSystemProtection {
}
export declare function dataAwsEfsFileSystemProtectionToTerraform(struct?: DataAwsEfsFileSystemProtection): any;
export declare function dataAwsEfsFileSystemProtectionToHclTerraform(struct?: DataAwsEfsFileSystemProtection): any;
export declare class DataAwsEfsFileSystemProtectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEfsFileSystemProtection | undefined;
    set internalValue(value: DataAwsEfsFileSystemProtection | undefined);
    get replicationOverwrite(): string;
}
export declare class DataAwsEfsFileSystemProtectionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEfsFileSystemProtectionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_file_system aws_efs_file_system}
*/
export declare class DataAwsEfsFileSystem extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_efs_file_system";
    /**
    * Generates CDKTF code for importing a DataAwsEfsFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEfsFileSystem to import
    * @param importFromId The id of the existing DataAwsEfsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEfsFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_file_system aws_efs_file_system} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsFileSystemConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEfsFileSystemConfig);
    get arn(): string;
    get availabilityZoneId(): string;
    get availabilityZoneName(): string;
    private _creationToken?;
    get creationToken(): string;
    set creationToken(value: string);
    resetCreationToken(): void;
    get creationTokenInput(): string | undefined;
    get dnsName(): string;
    get encrypted(): cdktf.IResolvable;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    resetFileSystemId(): void;
    get fileSystemIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    private _lifecyclePolicy;
    get lifecyclePolicy(): DataAwsEfsFileSystemLifecyclePolicyList;
    get name(): string;
    get performanceMode(): string;
    private _protection;
    get protection(): DataAwsEfsFileSystemProtectionList;
    get provisionedThroughputInMibps(): number;
    get sizeInBytes(): number;
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
    get throughputMode(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
