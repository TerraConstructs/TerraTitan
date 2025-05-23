/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CleanroomsCollaborationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}
    */
    readonly creatorDisplayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}
    */
    readonly creatorMemberAbilities: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}
    */
    readonly queryLogStatus: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#tags_all CleanroomsCollaboration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * data_encryption_metadata block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}
    */
    readonly dataEncryptionMetadata?: CleanroomsCollaborationDataEncryptionMetadata;
    /**
    * member block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#member CleanroomsCollaboration#member}
    */
    readonly member?: CleanroomsCollaborationMember[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#timeouts CleanroomsCollaboration#timeouts}
    */
    readonly timeouts?: CleanroomsCollaborationTimeouts;
}
export interface CleanroomsCollaborationDataEncryptionMetadata {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#allow_clear_text CleanroomsCollaboration#allow_clear_text}
    */
    readonly allowClearText: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}
    */
    readonly allowDuplicates: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}
    */
    readonly allowJoinsOnColumnsWithDifferentNames: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}
    */
    readonly preserveNulls: boolean | cdktf.IResolvable;
}
export declare function cleanroomsCollaborationDataEncryptionMetadataToTerraform(struct?: CleanroomsCollaborationDataEncryptionMetadataOutputReference | CleanroomsCollaborationDataEncryptionMetadata): any;
export declare function cleanroomsCollaborationDataEncryptionMetadataToHclTerraform(struct?: CleanroomsCollaborationDataEncryptionMetadataOutputReference | CleanroomsCollaborationDataEncryptionMetadata): any;
export declare class CleanroomsCollaborationDataEncryptionMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CleanroomsCollaborationDataEncryptionMetadata | undefined;
    set internalValue(value: CleanroomsCollaborationDataEncryptionMetadata | undefined);
    private _allowClearText?;
    get allowClearText(): boolean | cdktf.IResolvable;
    set allowClearText(value: boolean | cdktf.IResolvable);
    get allowClearTextInput(): boolean | cdktf.IResolvable | undefined;
    private _allowDuplicates?;
    get allowDuplicates(): boolean | cdktf.IResolvable;
    set allowDuplicates(value: boolean | cdktf.IResolvable);
    get allowDuplicatesInput(): boolean | cdktf.IResolvable | undefined;
    private _allowJoinsOnColumnsWithDifferentNames?;
    get allowJoinsOnColumnsWithDifferentNames(): boolean | cdktf.IResolvable;
    set allowJoinsOnColumnsWithDifferentNames(value: boolean | cdktf.IResolvable);
    get allowJoinsOnColumnsWithDifferentNamesInput(): boolean | cdktf.IResolvable | undefined;
    private _preserveNulls?;
    get preserveNulls(): boolean | cdktf.IResolvable;
    set preserveNulls(value: boolean | cdktf.IResolvable);
    get preserveNullsInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CleanroomsCollaborationMember {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}
    */
    readonly memberAbilities: string[];
}
export declare function cleanroomsCollaborationMemberToTerraform(struct?: CleanroomsCollaborationMember | cdktf.IResolvable): any;
export declare function cleanroomsCollaborationMemberToHclTerraform(struct?: CleanroomsCollaborationMember | cdktf.IResolvable): any;
export declare class CleanroomsCollaborationMemberOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CleanroomsCollaborationMember | cdktf.IResolvable | undefined;
    set internalValue(value: CleanroomsCollaborationMember | cdktf.IResolvable | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string | undefined;
    private _memberAbilities?;
    get memberAbilities(): string[];
    set memberAbilities(value: string[]);
    get memberAbilitiesInput(): string[] | undefined;
    get status(): string;
}
export declare class CleanroomsCollaborationMemberList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CleanroomsCollaborationMember[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CleanroomsCollaborationMemberOutputReference;
}
export interface CleanroomsCollaborationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#create CleanroomsCollaboration#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#delete CleanroomsCollaboration#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#update CleanroomsCollaboration#update}
    */
    readonly update?: string;
}
export declare function cleanroomsCollaborationTimeoutsToTerraform(struct?: CleanroomsCollaborationTimeouts | cdktf.IResolvable): any;
export declare function cleanroomsCollaborationTimeoutsToHclTerraform(struct?: CleanroomsCollaborationTimeouts | cdktf.IResolvable): any;
export declare class CleanroomsCollaborationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CleanroomsCollaborationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CleanroomsCollaborationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration aws_cleanrooms_collaboration}
*/
export declare class CleanroomsCollaboration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cleanrooms_collaboration";
    /**
    * Generates CDKTF code for importing a CleanroomsCollaboration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CleanroomsCollaboration to import
    * @param importFromId The id of the existing CleanroomsCollaboration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CleanroomsCollaboration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_collaboration aws_cleanrooms_collaboration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CleanroomsCollaborationConfig
    */
    constructor(scope: Construct, id: string, config: CleanroomsCollaborationConfig);
    get arn(): string;
    get createTime(): string;
    private _creatorDisplayName?;
    get creatorDisplayName(): string;
    set creatorDisplayName(value: string);
    get creatorDisplayNameInput(): string | undefined;
    private _creatorMemberAbilities?;
    get creatorMemberAbilities(): string[];
    set creatorMemberAbilities(value: string[]);
    get creatorMemberAbilitiesInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _queryLogStatus?;
    get queryLogStatus(): string;
    set queryLogStatus(value: string);
    get queryLogStatusInput(): string | undefined;
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
    get updateTime(): string;
    private _dataEncryptionMetadata;
    get dataEncryptionMetadata(): CleanroomsCollaborationDataEncryptionMetadataOutputReference;
    putDataEncryptionMetadata(value: CleanroomsCollaborationDataEncryptionMetadata): void;
    resetDataEncryptionMetadata(): void;
    get dataEncryptionMetadataInput(): CleanroomsCollaborationDataEncryptionMetadata | undefined;
    private _member;
    get member(): CleanroomsCollaborationMemberList;
    putMember(value: CleanroomsCollaborationMember[] | cdktf.IResolvable): void;
    resetMember(): void;
    get memberInput(): cdktf.IResolvable | CleanroomsCollaborationMember[] | undefined;
    private _timeouts;
    get timeouts(): CleanroomsCollaborationTimeoutsOutputReference;
    putTimeouts(value: CleanroomsCollaborationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CleanroomsCollaborationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
