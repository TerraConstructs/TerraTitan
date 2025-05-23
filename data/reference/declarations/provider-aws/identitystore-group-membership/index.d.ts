/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentitystoreGroupMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}
    */
    readonly groupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group_membership#id IdentitystoreGroupMembership#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}
    */
    readonly identityStoreId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}
    */
    readonly memberId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group_membership aws_identitystore_group_membership}
*/
export declare class IdentitystoreGroupMembership extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_identitystore_group_membership";
    /**
    * Generates CDKTF code for importing a IdentitystoreGroupMembership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentitystoreGroupMembership to import
    * @param importFromId The id of the existing IdentitystoreGroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group_membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentitystoreGroupMembership to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/identitystore_group_membership aws_identitystore_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentitystoreGroupMembershipConfig
    */
    constructor(scope: Construct, id: string, config: IdentitystoreGroupMembershipConfig);
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    get groupIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string | undefined;
    private _memberId?;
    get memberId(): string;
    set memberId(value: string);
    get memberIdInput(): string | undefined;
    get membershipId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
