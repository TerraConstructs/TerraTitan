/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOrganizationsOrganizationalUnitsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_units#id DataAwsOrganizationsOrganizationalUnits#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_units#parent_id DataAwsOrganizationsOrganizationalUnits#parent_id}
    */
    readonly parentId: string;
}
export interface DataAwsOrganizationsOrganizationalUnitsChildren {
}
export declare function dataAwsOrganizationsOrganizationalUnitsChildrenToTerraform(struct?: DataAwsOrganizationsOrganizationalUnitsChildren): any;
export declare function dataAwsOrganizationsOrganizationalUnitsChildrenToHclTerraform(struct?: DataAwsOrganizationsOrganizationalUnitsChildren): any;
export declare class DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOrganizationsOrganizationalUnitsChildren | undefined;
    set internalValue(value: DataAwsOrganizationsOrganizationalUnitsChildren | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsOrganizationsOrganizationalUnitsChildrenList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOrganizationsOrganizationalUnitsChildrenOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_units aws_organizations_organizational_units}
*/
export declare class DataAwsOrganizationsOrganizationalUnits extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_organizations_organizational_units";
    /**
    * Generates CDKTF code for importing a DataAwsOrganizationsOrganizationalUnits resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOrganizationsOrganizationalUnits to import
    * @param importFromId The id of the existing DataAwsOrganizationsOrganizationalUnits that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_units#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOrganizationsOrganizationalUnits to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organizational_units aws_organizations_organizational_units} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsOrganizationalUnitsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitsConfig);
    private _children;
    get children(): DataAwsOrganizationsOrganizationalUnitsChildrenList;
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
