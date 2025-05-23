/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightFolderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#aws_account_id QuicksightFolder#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#folder_id QuicksightFolder#folder_id}
    */
    readonly folderId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#folder_type QuicksightFolder#folder_type}
    */
    readonly folderType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#id QuicksightFolder#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#name QuicksightFolder#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#parent_folder_arn QuicksightFolder#parent_folder_arn}
    */
    readonly parentFolderArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#tags QuicksightFolder#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#tags_all QuicksightFolder#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#permissions QuicksightFolder#permissions}
    */
    readonly permissions?: QuicksightFolderPermissions[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#timeouts QuicksightFolder#timeouts}
    */
    readonly timeouts?: QuicksightFolderTimeouts;
}
export interface QuicksightFolderPermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#actions QuicksightFolder#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#principal QuicksightFolder#principal}
    */
    readonly principal: string;
}
export declare function quicksightFolderPermissionsToTerraform(struct?: QuicksightFolderPermissions | cdktf.IResolvable): any;
export declare function quicksightFolderPermissionsToHclTerraform(struct?: QuicksightFolderPermissions | cdktf.IResolvable): any;
export declare class QuicksightFolderPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightFolderPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightFolderPermissions | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
}
export declare class QuicksightFolderPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightFolderPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightFolderPermissionsOutputReference;
}
export interface QuicksightFolderTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#create QuicksightFolder#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#delete QuicksightFolder#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#read QuicksightFolder#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#update QuicksightFolder#update}
    */
    readonly update?: string;
}
export declare function quicksightFolderTimeoutsToTerraform(struct?: QuicksightFolderTimeouts | cdktf.IResolvable): any;
export declare function quicksightFolderTimeoutsToHclTerraform(struct?: QuicksightFolderTimeouts | cdktf.IResolvable): any;
export declare class QuicksightFolderTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightFolderTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightFolderTimeouts | cdktf.IResolvable | undefined);
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
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder aws_quicksight_folder}
*/
export declare class QuicksightFolder extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_folder";
    /**
    * Generates CDKTF code for importing a QuicksightFolder resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightFolder to import
    * @param importFromId The id of the existing QuicksightFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightFolder to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder aws_quicksight_folder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightFolderConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightFolderConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    get createdTime(): string;
    private _folderId?;
    get folderId(): string;
    set folderId(value: string);
    get folderIdInput(): string | undefined;
    get folderPath(): string[];
    private _folderType?;
    get folderType(): string;
    set folderType(value: string);
    resetFolderType(): void;
    get folderTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _parentFolderArn?;
    get parentFolderArn(): string;
    set parentFolderArn(value: string);
    resetParentFolderArn(): void;
    get parentFolderArnInput(): string | undefined;
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
    private _permissions;
    get permissions(): QuicksightFolderPermissionsList;
    putPermissions(value: QuicksightFolderPermissions[] | cdktf.IResolvable): void;
    resetPermissions(): void;
    get permissionsInput(): cdktf.IResolvable | QuicksightFolderPermissions[] | undefined;
    private _timeouts;
    get timeouts(): QuicksightFolderTimeoutsOutputReference;
    putTimeouts(value: QuicksightFolderTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | QuicksightFolderTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
