/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#external_id TransferAccess#external_id}
    */
    readonly externalId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#home_directory TransferAccess#home_directory}
    */
    readonly homeDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#home_directory_type TransferAccess#home_directory_type}
    */
    readonly homeDirectoryType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#id TransferAccess#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#policy TransferAccess#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#role TransferAccess#role}
    */
    readonly role?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#server_id TransferAccess#server_id}
    */
    readonly serverId: string;
    /**
    * home_directory_mappings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#home_directory_mappings TransferAccess#home_directory_mappings}
    */
    readonly homeDirectoryMappings?: TransferAccessHomeDirectoryMappings[] | cdktf.IResolvable;
    /**
    * posix_profile block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#posix_profile TransferAccess#posix_profile}
    */
    readonly posixProfile?: TransferAccessPosixProfile;
}
export interface TransferAccessHomeDirectoryMappings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#entry TransferAccess#entry}
    */
    readonly entry: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#target TransferAccess#target}
    */
    readonly target: string;
}
export declare function transferAccessHomeDirectoryMappingsToTerraform(struct?: TransferAccessHomeDirectoryMappings | cdktf.IResolvable): any;
export declare function transferAccessHomeDirectoryMappingsToHclTerraform(struct?: TransferAccessHomeDirectoryMappings | cdktf.IResolvable): any;
export declare class TransferAccessHomeDirectoryMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TransferAccessHomeDirectoryMappings | cdktf.IResolvable | undefined;
    set internalValue(value: TransferAccessHomeDirectoryMappings | cdktf.IResolvable | undefined);
    private _entry?;
    get entry(): string;
    set entry(value: string);
    get entryInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string | undefined;
}
export declare class TransferAccessHomeDirectoryMappingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TransferAccessHomeDirectoryMappings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TransferAccessHomeDirectoryMappingsOutputReference;
}
export interface TransferAccessPosixProfile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#gid TransferAccess#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#secondary_gids TransferAccess#secondary_gids}
    */
    readonly secondaryGids?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#uid TransferAccess#uid}
    */
    readonly uid: number;
}
export declare function transferAccessPosixProfileToTerraform(struct?: TransferAccessPosixProfileOutputReference | TransferAccessPosixProfile): any;
export declare function transferAccessPosixProfileToHclTerraform(struct?: TransferAccessPosixProfileOutputReference | TransferAccessPosixProfile): any;
export declare class TransferAccessPosixProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferAccessPosixProfile | undefined;
    set internalValue(value: TransferAccessPosixProfile | undefined);
    private _gid?;
    get gid(): number;
    set gid(value: number);
    get gidInput(): number | undefined;
    private _secondaryGids?;
    get secondaryGids(): number[];
    set secondaryGids(value: number[]);
    resetSecondaryGids(): void;
    get secondaryGidsInput(): number[] | undefined;
    private _uid?;
    get uid(): number;
    set uid(value: number);
    get uidInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access aws_transfer_access}
*/
export declare class TransferAccess extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transfer_access";
    /**
    * Generates CDKTF code for importing a TransferAccess resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TransferAccess to import
    * @param importFromId The id of the existing TransferAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TransferAccess to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_access aws_transfer_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferAccessConfig
    */
    constructor(scope: Construct, id: string, config: TransferAccessConfig);
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    get externalIdInput(): string | undefined;
    private _homeDirectory?;
    get homeDirectory(): string;
    set homeDirectory(value: string);
    resetHomeDirectory(): void;
    get homeDirectoryInput(): string | undefined;
    private _homeDirectoryType?;
    get homeDirectoryType(): string;
    set homeDirectoryType(value: string);
    resetHomeDirectoryType(): void;
    get homeDirectoryTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _role?;
    get role(): string;
    set role(value: string);
    resetRole(): void;
    get roleInput(): string | undefined;
    private _serverId?;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string | undefined;
    private _homeDirectoryMappings;
    get homeDirectoryMappings(): TransferAccessHomeDirectoryMappingsList;
    putHomeDirectoryMappings(value: TransferAccessHomeDirectoryMappings[] | cdktf.IResolvable): void;
    resetHomeDirectoryMappings(): void;
    get homeDirectoryMappingsInput(): cdktf.IResolvable | TransferAccessHomeDirectoryMappings[] | undefined;
    private _posixProfile;
    get posixProfile(): TransferAccessPosixProfileOutputReference;
    putPosixProfile(value: TransferAccessPosixProfile): void;
    resetPosixProfile(): void;
    get posixProfileInput(): TransferAccessPosixProfile | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
