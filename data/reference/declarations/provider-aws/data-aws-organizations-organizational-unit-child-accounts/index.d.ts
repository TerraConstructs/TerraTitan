/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOrganizationsOrganizationalUnitChildAccountsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_child_accounts#id DataAwsOrganizationsOrganizationalUnitChildAccounts#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_child_accounts#parent_id DataAwsOrganizationsOrganizationalUnitChildAccounts#parent_id}
    */
    readonly parentId: string;
}
export interface DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts {
}
export declare function dataAwsOrganizationsOrganizationalUnitChildAccountsAccountsToTerraform(struct?: DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts): any;
export declare function dataAwsOrganizationsOrganizationalUnitChildAccountsAccountsToHclTerraform(struct?: DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts): any;
export declare class DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts | undefined;
    set internalValue(value: DataAwsOrganizationsOrganizationalUnitChildAccountsAccounts | undefined);
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get status(): string;
}
export declare class DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_child_accounts aws_organizations_organizational_unit_child_accounts}
*/
export declare class DataAwsOrganizationsOrganizationalUnitChildAccounts extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_organizations_organizational_unit_child_accounts";
    /**
    * Generates CDKTF code for importing a DataAwsOrganizationsOrganizationalUnitChildAccounts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOrganizationsOrganizationalUnitChildAccounts to import
    * @param importFromId The id of the existing DataAwsOrganizationsOrganizationalUnitChildAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_child_accounts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOrganizationsOrganizationalUnitChildAccounts to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_unit_child_accounts aws_organizations_organizational_unit_child_accounts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsOrganizationalUnitChildAccountsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitChildAccountsConfig);
    private _accounts;
    get accounts(): DataAwsOrganizationsOrganizationalUnitChildAccountsAccountsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _parentId?;
    get parentId(): string;
    set parentId(value: string);
    get parentIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
