/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}
    */
    readonly admins?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#allow_external_data_filtering LakeformationDataLakeSettings#allow_external_data_filtering}
    */
    readonly allowExternalDataFiltering?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#allow_full_table_external_data_access LakeformationDataLakeSettings#allow_full_table_external_data_access}
    */
    readonly allowFullTableExternalDataAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#authorized_session_tag_value_list LakeformationDataLakeSettings#authorized_session_tag_value_list}
    */
    readonly authorizedSessionTagValueList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#external_data_filtering_allow_list LakeformationDataLakeSettings#external_data_filtering_allow_list}
    */
    readonly externalDataFilteringAllowList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#parameters LakeformationDataLakeSettings#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#read_only_admins LakeformationDataLakeSettings#read_only_admins}
    */
    readonly readOnlyAdmins?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}
    */
    readonly trustedResourceOwners?: string[];
    /**
    * create_database_default_permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}
    */
    readonly createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | cdktf.IResolvable;
    /**
    * create_table_default_permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}
    */
    readonly createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | cdktf.IResolvable;
}
export interface LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}
    */
    readonly permissions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}
    */
    readonly principal?: string;
}
export declare function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | cdktf.IResolvable): any;
export declare function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToHclTerraform(struct?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | cdktf.IResolvable): any;
export declare class LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions | cdktf.IResolvable | undefined);
    private _permissions?;
    get permissions(): string[];
    set permissions(value: string[]);
    resetPermissions(): void;
    get permissionsInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    resetPrincipal(): void;
    get principalInput(): string | undefined;
}
export declare class LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference;
}
export interface LakeformationDataLakeSettingsCreateTableDefaultPermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}
    */
    readonly permissions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}
    */
    readonly principal?: string;
}
export declare function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateTableDefaultPermissions | cdktf.IResolvable): any;
export declare function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToHclTerraform(struct?: LakeformationDataLakeSettingsCreateTableDefaultPermissions | cdktf.IResolvable): any;
export declare class LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationDataLakeSettingsCreateTableDefaultPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions | cdktf.IResolvable | undefined);
    private _permissions?;
    get permissions(): string[];
    set permissions(value: string[]);
    resetPermissions(): void;
    get permissionsInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    resetPrincipal(): void;
    get principalInput(): string | undefined;
}
export declare class LakeformationDataLakeSettingsCreateTableDefaultPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}
*/
export declare class LakeformationDataLakeSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lakeformation_data_lake_settings";
    /**
    * Generates CDKTF code for importing a LakeformationDataLakeSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LakeformationDataLakeSettings to import
    * @param importFromId The id of the existing LakeformationDataLakeSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LakeformationDataLakeSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationDataLakeSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LakeformationDataLakeSettingsConfig);
    private _admins?;
    get admins(): string[];
    set admins(value: string[]);
    resetAdmins(): void;
    get adminsInput(): string[] | undefined;
    private _allowExternalDataFiltering?;
    get allowExternalDataFiltering(): boolean | cdktf.IResolvable;
    set allowExternalDataFiltering(value: boolean | cdktf.IResolvable);
    resetAllowExternalDataFiltering(): void;
    get allowExternalDataFilteringInput(): boolean | cdktf.IResolvable | undefined;
    private _allowFullTableExternalDataAccess?;
    get allowFullTableExternalDataAccess(): boolean | cdktf.IResolvable;
    set allowFullTableExternalDataAccess(value: boolean | cdktf.IResolvable);
    resetAllowFullTableExternalDataAccess(): void;
    get allowFullTableExternalDataAccessInput(): boolean | cdktf.IResolvable | undefined;
    private _authorizedSessionTagValueList?;
    get authorizedSessionTagValueList(): string[];
    set authorizedSessionTagValueList(value: string[]);
    resetAuthorizedSessionTagValueList(): void;
    get authorizedSessionTagValueListInput(): string[] | undefined;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _externalDataFilteringAllowList?;
    get externalDataFilteringAllowList(): string[];
    set externalDataFilteringAllowList(value: string[]);
    resetExternalDataFilteringAllowList(): void;
    get externalDataFilteringAllowListInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _readOnlyAdmins?;
    get readOnlyAdmins(): string[];
    set readOnlyAdmins(value: string[]);
    resetReadOnlyAdmins(): void;
    get readOnlyAdminsInput(): string[] | undefined;
    private _trustedResourceOwners?;
    get trustedResourceOwners(): string[];
    set trustedResourceOwners(value: string[]);
    resetTrustedResourceOwners(): void;
    get trustedResourceOwnersInput(): string[] | undefined;
    private _createDatabaseDefaultPermissions;
    get createDatabaseDefaultPermissions(): LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList;
    putCreateDatabaseDefaultPermissions(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | cdktf.IResolvable): void;
    resetCreateDatabaseDefaultPermissions(): void;
    get createDatabaseDefaultPermissionsInput(): cdktf.IResolvable | LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] | undefined;
    private _createTableDefaultPermissions;
    get createTableDefaultPermissions(): LakeformationDataLakeSettingsCreateTableDefaultPermissionsList;
    putCreateTableDefaultPermissions(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | cdktf.IResolvable): void;
    resetCreateTableDefaultPermissions(): void;
    get createTableDefaultPermissionsInput(): cdktf.IResolvable | LakeformationDataLakeSettingsCreateTableDefaultPermissions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
