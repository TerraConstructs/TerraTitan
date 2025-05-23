/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightFolderMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder_membership#aws_account_id QuicksightFolderMembership#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder_membership#folder_id QuicksightFolderMembership#folder_id}
    */
    readonly folderId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder_membership#member_id QuicksightFolderMembership#member_id}
    */
    readonly memberId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder_membership#member_type QuicksightFolderMembership#member_type}
    */
    readonly memberType: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder_membership aws_quicksight_folder_membership}
*/
export declare class QuicksightFolderMembership extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_folder_membership";
    /**
    * Generates CDKTF code for importing a QuicksightFolderMembership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightFolderMembership to import
    * @param importFromId The id of the existing QuicksightFolderMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder_membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightFolderMembership to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_folder_membership aws_quicksight_folder_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightFolderMembershipConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightFolderMembershipConfig);
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _folderId?;
    get folderId(): string;
    set folderId(value: string);
    get folderIdInput(): string | undefined;
    get id(): string;
    private _memberId?;
    get memberId(): string;
    set memberId(value: string);
    get memberIdInput(): string | undefined;
    private _memberType?;
    get memberType(): string;
    set memberType(value: string);
    get memberTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
