/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#home_directory TransferUser#home_directory}
    */
    readonly homeDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#home_directory_type TransferUser#home_directory_type}
    */
    readonly homeDirectoryType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#id TransferUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#policy TransferUser#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#role TransferUser#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#server_id TransferUser#server_id}
    */
    readonly serverId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#tags TransferUser#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#tags_all TransferUser#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#user_name TransferUser#user_name}
    */
    readonly userName: string;
    /**
    * home_directory_mappings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#home_directory_mappings TransferUser#home_directory_mappings}
    */
    readonly homeDirectoryMappings?: TransferUserHomeDirectoryMappings[] | cdktf.IResolvable;
    /**
    * posix_profile block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#posix_profile TransferUser#posix_profile}
    */
    readonly posixProfile?: TransferUserPosixProfile;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#timeouts TransferUser#timeouts}
    */
    readonly timeouts?: TransferUserTimeouts;
}
export interface TransferUserHomeDirectoryMappings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#entry TransferUser#entry}
    */
    readonly entry: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#target TransferUser#target}
    */
    readonly target: string;
}
export declare function transferUserHomeDirectoryMappingsToTerraform(struct?: TransferUserHomeDirectoryMappings | cdktf.IResolvable): any;
export declare function transferUserHomeDirectoryMappingsToHclTerraform(struct?: TransferUserHomeDirectoryMappings | cdktf.IResolvable): any;
export declare class TransferUserHomeDirectoryMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TransferUserHomeDirectoryMappings | cdktf.IResolvable | undefined;
    set internalValue(value: TransferUserHomeDirectoryMappings | cdktf.IResolvable | undefined);
    private _entry?;
    get entry(): string;
    set entry(value: string);
    get entryInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string | undefined;
}
export declare class TransferUserHomeDirectoryMappingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TransferUserHomeDirectoryMappings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TransferUserHomeDirectoryMappingsOutputReference;
}
export interface TransferUserPosixProfile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#gid TransferUser#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#secondary_gids TransferUser#secondary_gids}
    */
    readonly secondaryGids?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#uid TransferUser#uid}
    */
    readonly uid: number;
}
export declare function transferUserPosixProfileToTerraform(struct?: TransferUserPosixProfileOutputReference | TransferUserPosixProfile): any;
export declare function transferUserPosixProfileToHclTerraform(struct?: TransferUserPosixProfileOutputReference | TransferUserPosixProfile): any;
export declare class TransferUserPosixProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferUserPosixProfile | undefined;
    set internalValue(value: TransferUserPosixProfile | undefined);
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
export interface TransferUserTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#delete TransferUser#delete}
    */
    readonly delete?: string;
}
export declare function transferUserTimeoutsToTerraform(struct?: TransferUserTimeouts | cdktf.IResolvable): any;
export declare function transferUserTimeoutsToHclTerraform(struct?: TransferUserTimeouts | cdktf.IResolvable): any;
export declare class TransferUserTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferUserTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: TransferUserTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user aws_transfer_user}
*/
export declare class TransferUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transfer_user";
    /**
    * Generates CDKTF code for importing a TransferUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TransferUser to import
    * @param importFromId The id of the existing TransferUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TransferUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_user aws_transfer_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferUserConfig
    */
    constructor(scope: Construct, id: string, config: TransferUserConfig);
    get arn(): string;
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
    get roleInput(): string | undefined;
    private _serverId?;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string | undefined;
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
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string | undefined;
    private _homeDirectoryMappings;
    get homeDirectoryMappings(): TransferUserHomeDirectoryMappingsList;
    putHomeDirectoryMappings(value: TransferUserHomeDirectoryMappings[] | cdktf.IResolvable): void;
    resetHomeDirectoryMappings(): void;
    get homeDirectoryMappingsInput(): cdktf.IResolvable | TransferUserHomeDirectoryMappings[] | undefined;
    private _posixProfile;
    get posixProfile(): TransferUserPosixProfileOutputReference;
    putPosixProfile(value: TransferUserPosixProfile): void;
    resetPosixProfile(): void;
    get posixProfileInput(): TransferUserPosixProfile | undefined;
    private _timeouts;
    get timeouts(): TransferUserTimeoutsOutputReference;
    putTimeouts(value: TransferUserTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | TransferUserTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
