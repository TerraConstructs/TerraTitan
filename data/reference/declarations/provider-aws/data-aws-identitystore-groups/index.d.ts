/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIdentitystoreGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_groups#identity_store_id DataAwsIdentitystoreGroups#identity_store_id}
    */
    readonly identityStoreId: string;
}
export interface DataAwsIdentitystoreGroupsGroupsExternalIds {
}
export declare function dataAwsIdentitystoreGroupsGroupsExternalIdsToTerraform(struct?: DataAwsIdentitystoreGroupsGroupsExternalIds): any;
export declare function dataAwsIdentitystoreGroupsGroupsExternalIdsToHclTerraform(struct?: DataAwsIdentitystoreGroupsGroupsExternalIds): any;
export declare class DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreGroupsGroupsExternalIds | undefined;
    set internalValue(value: DataAwsIdentitystoreGroupsGroupsExternalIds | undefined);
    get id(): string;
    get issuer(): string;
}
export declare class DataAwsIdentitystoreGroupsGroupsExternalIdsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreGroupsGroupsExternalIdsOutputReference;
}
export interface DataAwsIdentitystoreGroupsGroups {
}
export declare function dataAwsIdentitystoreGroupsGroupsToTerraform(struct?: DataAwsIdentitystoreGroupsGroups): any;
export declare function dataAwsIdentitystoreGroupsGroupsToHclTerraform(struct?: DataAwsIdentitystoreGroupsGroups): any;
export declare class DataAwsIdentitystoreGroupsGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIdentitystoreGroupsGroups | undefined;
    set internalValue(value: DataAwsIdentitystoreGroupsGroups | undefined);
    get description(): string;
    get displayName(): string;
    private _externalIds;
    get externalIds(): DataAwsIdentitystoreGroupsGroupsExternalIdsList;
    get groupId(): string;
    get identityStoreId(): string;
}
export declare class DataAwsIdentitystoreGroupsGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIdentitystoreGroupsGroupsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_groups aws_identitystore_groups}
*/
export declare class DataAwsIdentitystoreGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_identitystore_groups";
    /**
    * Generates CDKTF code for importing a DataAwsIdentitystoreGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIdentitystoreGroups to import
    * @param importFromId The id of the existing DataAwsIdentitystoreGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIdentitystoreGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/identitystore_groups aws_identitystore_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreGroupsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIdentitystoreGroupsConfig);
    private _groups;
    get groups(): DataAwsIdentitystoreGroupsGroupsList;
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
