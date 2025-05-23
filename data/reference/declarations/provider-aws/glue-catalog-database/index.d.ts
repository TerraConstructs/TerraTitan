/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueCatalogDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}
    */
    readonly locationUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#tags GlueCatalogDatabase#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#tags_all GlueCatalogDatabase#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * create_table_default_permission block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#create_table_default_permission GlueCatalogDatabase#create_table_default_permission}
    */
    readonly createTableDefaultPermission?: GlueCatalogDatabaseCreateTableDefaultPermission[] | cdktf.IResolvable;
    /**
    * federated_database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#federated_database GlueCatalogDatabase#federated_database}
    */
    readonly federatedDatabase?: GlueCatalogDatabaseFederatedDatabase;
    /**
    * target_database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#target_database GlueCatalogDatabase#target_database}
    */
    readonly targetDatabase?: GlueCatalogDatabaseTargetDatabase;
}
export interface GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}
    */
    readonly dataLakePrincipalIdentifier?: string;
}
export declare function glueCatalogDatabaseCreateTableDefaultPermissionPrincipalToTerraform(struct?: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference | GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal): any;
export declare function glueCatalogDatabaseCreateTableDefaultPermissionPrincipalToHclTerraform(struct?: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference | GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal): any;
export declare class GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal | undefined;
    set internalValue(value: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal | undefined);
    private _dataLakePrincipalIdentifier?;
    get dataLakePrincipalIdentifier(): string;
    set dataLakePrincipalIdentifier(value: string);
    resetDataLakePrincipalIdentifier(): void;
    get dataLakePrincipalIdentifierInput(): string | undefined;
}
export interface GlueCatalogDatabaseCreateTableDefaultPermission {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#permissions GlueCatalogDatabase#permissions}
    */
    readonly permissions?: string[];
    /**
    * principal block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#principal GlueCatalogDatabase#principal}
    */
    readonly principal?: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal;
}
export declare function glueCatalogDatabaseCreateTableDefaultPermissionToTerraform(struct?: GlueCatalogDatabaseCreateTableDefaultPermission | cdktf.IResolvable): any;
export declare function glueCatalogDatabaseCreateTableDefaultPermissionToHclTerraform(struct?: GlueCatalogDatabaseCreateTableDefaultPermission | cdktf.IResolvable): any;
export declare class GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogDatabaseCreateTableDefaultPermission | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogDatabaseCreateTableDefaultPermission | cdktf.IResolvable | undefined);
    private _permissions?;
    get permissions(): string[];
    set permissions(value: string[]);
    resetPermissions(): void;
    get permissionsInput(): string[] | undefined;
    private _principal;
    get principal(): GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference;
    putPrincipal(value: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal): void;
    resetPrincipal(): void;
    get principalInput(): GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal | undefined;
}
export declare class GlueCatalogDatabaseCreateTableDefaultPermissionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogDatabaseCreateTableDefaultPermission[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference;
}
export interface GlueCatalogDatabaseFederatedDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#connection_name GlueCatalogDatabase#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#identifier GlueCatalogDatabase#identifier}
    */
    readonly identifier?: string;
}
export declare function glueCatalogDatabaseFederatedDatabaseToTerraform(struct?: GlueCatalogDatabaseFederatedDatabaseOutputReference | GlueCatalogDatabaseFederatedDatabase): any;
export declare function glueCatalogDatabaseFederatedDatabaseToHclTerraform(struct?: GlueCatalogDatabaseFederatedDatabaseOutputReference | GlueCatalogDatabaseFederatedDatabase): any;
export declare class GlueCatalogDatabaseFederatedDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogDatabaseFederatedDatabase | undefined;
    set internalValue(value: GlueCatalogDatabaseFederatedDatabase | undefined);
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    resetConnectionName(): void;
    get connectionNameInput(): string | undefined;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string | undefined;
}
export interface GlueCatalogDatabaseTargetDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}
    */
    readonly region?: string;
}
export declare function glueCatalogDatabaseTargetDatabaseToTerraform(struct?: GlueCatalogDatabaseTargetDatabaseOutputReference | GlueCatalogDatabaseTargetDatabase): any;
export declare function glueCatalogDatabaseTargetDatabaseToHclTerraform(struct?: GlueCatalogDatabaseTargetDatabaseOutputReference | GlueCatalogDatabaseTargetDatabase): any;
export declare class GlueCatalogDatabaseTargetDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogDatabaseTargetDatabase | undefined;
    set internalValue(value: GlueCatalogDatabaseTargetDatabase | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database aws_glue_catalog_database}
*/
export declare class GlueCatalogDatabase extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_catalog_database";
    /**
    * Generates CDKTF code for importing a GlueCatalogDatabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueCatalogDatabase to import
    * @param importFromId The id of the existing GlueCatalogDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueCatalogDatabase to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_database aws_glue_catalog_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogDatabaseConfig
    */
    constructor(scope: Construct, id: string, config: GlueCatalogDatabaseConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _locationUri?;
    get locationUri(): string;
    set locationUri(value: string);
    resetLocationUri(): void;
    get locationUriInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _createTableDefaultPermission;
    get createTableDefaultPermission(): GlueCatalogDatabaseCreateTableDefaultPermissionList;
    putCreateTableDefaultPermission(value: GlueCatalogDatabaseCreateTableDefaultPermission[] | cdktf.IResolvable): void;
    resetCreateTableDefaultPermission(): void;
    get createTableDefaultPermissionInput(): cdktf.IResolvable | GlueCatalogDatabaseCreateTableDefaultPermission[] | undefined;
    private _federatedDatabase;
    get federatedDatabase(): GlueCatalogDatabaseFederatedDatabaseOutputReference;
    putFederatedDatabase(value: GlueCatalogDatabaseFederatedDatabase): void;
    resetFederatedDatabase(): void;
    get federatedDatabaseInput(): GlueCatalogDatabaseFederatedDatabase | undefined;
    private _targetDatabase;
    get targetDatabase(): GlueCatalogDatabaseTargetDatabaseOutputReference;
    putTargetDatabase(value: GlueCatalogDatabaseTargetDatabase): void;
    resetTargetDatabase(): void;
    get targetDatabaseInput(): GlueCatalogDatabaseTargetDatabase | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
