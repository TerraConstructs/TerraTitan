/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIdentitystoreGroupMembershipsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_group_memberships#group_id DataAwsIdentitystoreGroupMemberships#group_id}
    */
    readonly groupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_group_memberships#identity_store_id DataAwsIdentitystoreGroupMemberships#identity_store_id}
    */
    readonly identityStoreId: string;
}
export interface DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId {
}
export declare function dataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdToTerraform(struct?: DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId): any;
export declare function dataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdToHclTerraform(struct?: DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId): any;
export declare class DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId | undefined;
    set internalValue(value: DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberId | undefined);
    get userId(): string;
}
export interface DataAwsIdentitystoreGroupMembershipsGroupMemberships {
}
export declare function dataAwsIdentitystoreGroupMembershipsGroupMembershipsToTerraform(struct?: DataAwsIdentitystoreGroupMembershipsGroupMemberships): any;
export declare function dataAwsIdentitystoreGroupMembershipsGroupMembershipsToHclTerraform(struct?: DataAwsIdentitystoreGroupMembershipsGroupMemberships): any;
export declare class DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreGroupMembershipsGroupMemberships | undefined;
    set internalValue(value: DataAwsIdentitystoreGroupMembershipsGroupMemberships | undefined);
    get groupId(): string;
    get identityStoreId(): string;
    private _memberId;
    get memberId(): DataAwsIdentitystoreGroupMembershipsGroupMembershipsMemberIdOutputReference;
    get membershipId(): string;
}
export declare class DataAwsIdentitystoreGroupMembershipsGroupMembershipsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreGroupMembershipsGroupMembershipsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_group_memberships aws_identitystore_group_memberships}
*/
export declare class DataAwsIdentitystoreGroupMemberships extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_identitystore_group_memberships";
    /**
    * Generates CDKTF code for importing a DataAwsIdentitystoreGroupMemberships resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIdentitystoreGroupMemberships to import
    * @param importFromId The id of the existing DataAwsIdentitystoreGroupMemberships that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_group_memberships#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIdentitystoreGroupMemberships to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_group_memberships aws_identitystore_group_memberships} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreGroupMembershipsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIdentitystoreGroupMembershipsConfig);
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    get groupIdInput(): string | undefined;
    private _groupMemberships;
    get groupMemberships(): DataAwsIdentitystoreGroupMembershipsGroupMembershipsList;
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
