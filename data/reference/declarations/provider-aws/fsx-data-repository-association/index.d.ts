/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxDataRepositoryAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}
    */
    readonly batchImportMetaDataOnCreate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}
    */
    readonly dataRepositoryPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}
    */
    readonly deleteDataInFilesystem?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}
    */
    readonly fileSystemPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}
    */
    readonly importedFileChunkSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#s3 FsxDataRepositoryAssociation#s3}
    */
    readonly s3?: FsxDataRepositoryAssociationS3;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#timeouts FsxDataRepositoryAssociation#timeouts}
    */
    readonly timeouts?: FsxDataRepositoryAssociationTimeouts;
}
export interface FsxDataRepositoryAssociationS3AutoExportPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}
    */
    readonly events?: string[];
}
export declare function fsxDataRepositoryAssociationS3AutoExportPolicyToTerraform(struct?: FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference | FsxDataRepositoryAssociationS3AutoExportPolicy): any;
export declare function fsxDataRepositoryAssociationS3AutoExportPolicyToHclTerraform(struct?: FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference | FsxDataRepositoryAssociationS3AutoExportPolicy): any;
export declare class FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxDataRepositoryAssociationS3AutoExportPolicy | undefined;
    set internalValue(value: FsxDataRepositoryAssociationS3AutoExportPolicy | undefined);
    private _events?;
    get events(): string[];
    set events(value: string[]);
    resetEvents(): void;
    get eventsInput(): string[] | undefined;
}
export interface FsxDataRepositoryAssociationS3AutoImportPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}
    */
    readonly events?: string[];
}
export declare function fsxDataRepositoryAssociationS3AutoImportPolicyToTerraform(struct?: FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference | FsxDataRepositoryAssociationS3AutoImportPolicy): any;
export declare function fsxDataRepositoryAssociationS3AutoImportPolicyToHclTerraform(struct?: FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference | FsxDataRepositoryAssociationS3AutoImportPolicy): any;
export declare class FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxDataRepositoryAssociationS3AutoImportPolicy | undefined;
    set internalValue(value: FsxDataRepositoryAssociationS3AutoImportPolicy | undefined);
    private _events?;
    get events(): string[];
    set events(value: string[]);
    resetEvents(): void;
    get eventsInput(): string[] | undefined;
}
export interface FsxDataRepositoryAssociationS3 {
    /**
    * auto_export_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#auto_export_policy FsxDataRepositoryAssociation#auto_export_policy}
    */
    readonly autoExportPolicy?: FsxDataRepositoryAssociationS3AutoExportPolicy;
    /**
    * auto_import_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#auto_import_policy FsxDataRepositoryAssociation#auto_import_policy}
    */
    readonly autoImportPolicy?: FsxDataRepositoryAssociationS3AutoImportPolicy;
}
export declare function fsxDataRepositoryAssociationS3ToTerraform(struct?: FsxDataRepositoryAssociationS3OutputReference | FsxDataRepositoryAssociationS3): any;
export declare function fsxDataRepositoryAssociationS3ToHclTerraform(struct?: FsxDataRepositoryAssociationS3OutputReference | FsxDataRepositoryAssociationS3): any;
export declare class FsxDataRepositoryAssociationS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxDataRepositoryAssociationS3 | undefined;
    set internalValue(value: FsxDataRepositoryAssociationS3 | undefined);
    private _autoExportPolicy;
    get autoExportPolicy(): FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference;
    putAutoExportPolicy(value: FsxDataRepositoryAssociationS3AutoExportPolicy): void;
    resetAutoExportPolicy(): void;
    get autoExportPolicyInput(): FsxDataRepositoryAssociationS3AutoExportPolicy | undefined;
    private _autoImportPolicy;
    get autoImportPolicy(): FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference;
    putAutoImportPolicy(value: FsxDataRepositoryAssociationS3AutoImportPolicy): void;
    resetAutoImportPolicy(): void;
    get autoImportPolicyInput(): FsxDataRepositoryAssociationS3AutoImportPolicy | undefined;
}
export interface FsxDataRepositoryAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}
    */
    readonly update?: string;
}
export declare function fsxDataRepositoryAssociationTimeoutsToTerraform(struct?: FsxDataRepositoryAssociationTimeouts | cdktf.IResolvable): any;
export declare function fsxDataRepositoryAssociationTimeoutsToHclTerraform(struct?: FsxDataRepositoryAssociationTimeouts | cdktf.IResolvable): any;
export declare class FsxDataRepositoryAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxDataRepositoryAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxDataRepositoryAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association aws_fsx_data_repository_association}
*/
export declare class FsxDataRepositoryAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_data_repository_association";
    /**
    * Generates CDKTF code for importing a FsxDataRepositoryAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxDataRepositoryAssociation to import
    * @param importFromId The id of the existing FsxDataRepositoryAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxDataRepositoryAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_data_repository_association aws_fsx_data_repository_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxDataRepositoryAssociationConfig
    */
    constructor(scope: Construct, id: string, config: FsxDataRepositoryAssociationConfig);
    get arn(): string;
    get associationId(): string;
    private _batchImportMetaDataOnCreate?;
    get batchImportMetaDataOnCreate(): boolean | cdktf.IResolvable;
    set batchImportMetaDataOnCreate(value: boolean | cdktf.IResolvable);
    resetBatchImportMetaDataOnCreate(): void;
    get batchImportMetaDataOnCreateInput(): boolean | cdktf.IResolvable | undefined;
    private _dataRepositoryPath?;
    get dataRepositoryPath(): string;
    set dataRepositoryPath(value: string);
    get dataRepositoryPathInput(): string | undefined;
    private _deleteDataInFilesystem?;
    get deleteDataInFilesystem(): boolean | cdktf.IResolvable;
    set deleteDataInFilesystem(value: boolean | cdktf.IResolvable);
    resetDeleteDataInFilesystem(): void;
    get deleteDataInFilesystemInput(): boolean | cdktf.IResolvable | undefined;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _fileSystemPath?;
    get fileSystemPath(): string;
    set fileSystemPath(value: string);
    get fileSystemPathInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _importedFileChunkSize?;
    get importedFileChunkSize(): number;
    set importedFileChunkSize(value: number);
    resetImportedFileChunkSize(): void;
    get importedFileChunkSizeInput(): number | undefined;
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
    private _s3;
    get s3(): FsxDataRepositoryAssociationS3OutputReference;
    putS3(value: FsxDataRepositoryAssociationS3): void;
    resetS3(): void;
    get s3Input(): FsxDataRepositoryAssociationS3 | undefined;
    private _timeouts;
    get timeouts(): FsxDataRepositoryAssociationTimeoutsOutputReference;
    putTimeouts(value: FsxDataRepositoryAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxDataRepositoryAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
