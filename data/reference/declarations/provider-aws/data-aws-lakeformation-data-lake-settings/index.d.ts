/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
}
export declare function dataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct?: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions): any;
export declare function dataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToHclTerraform(struct?: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions): any;
export declare class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | undefined;
    set internalValue(value: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | undefined);
    get permissions(): string[];
    get principal(): string;
}
export declare class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference;
}
export interface DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions {
}
export declare function dataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct?: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions): any;
export declare function dataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsToHclTerraform(struct?: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions): any;
export declare class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions | undefined;
    set internalValue(value: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions | undefined);
    get permissions(): string[];
    get principal(): string;
}
export declare class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}
*/
export declare class DataAwsLakeformationDataLakeSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lakeformation_data_lake_settings";
    /**
    * Generates CDKTF code for importing a DataAwsLakeformationDataLakeSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLakeformationDataLakeSettings to import
    * @param importFromId The id of the existing DataAwsLakeformationDataLakeSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_data_lake_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLakeformationDataLakeSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationDataLakeSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsLakeformationDataLakeSettingsConfig);
    get admins(): string[];
    get allowExternalDataFiltering(): cdktf.IResolvable;
    get allowFullTableExternalDataAccess(): cdktf.IResolvable;
    get authorizedSessionTagValueList(): string[];
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _createDatabaseDefaultPermissions;
    get createDatabaseDefaultPermissions(): DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList;
    private _createTableDefaultPermissions;
    get createTableDefaultPermissions(): DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList;
    get externalDataFilteringAllowList(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _parameters;
    get parameters(): cdktf.StringMap;
    get readOnlyAdmins(): string[];
    get trustedResourceOwners(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
