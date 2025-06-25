/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueCatalogTableOptimizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#catalog_id GlueCatalogTableOptimizer#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#database_name GlueCatalogTableOptimizer#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#table_name GlueCatalogTableOptimizer#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#type GlueCatalogTableOptimizer#type}
    */
    readonly type: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#configuration GlueCatalogTableOptimizer#configuration}
    */
    readonly configuration?: GlueCatalogTableOptimizerConfiguration[] | cdktf.IResolvable;
}
export interface GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#location GlueCatalogTableOptimizer#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#orphan_file_retention_period_in_days GlueCatalogTableOptimizer#orphan_file_retention_period_in_days}
    */
    readonly orphanFileRetentionPeriodInDays?: number;
}
export declare function glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktf.IResolvable): any;
export declare function glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktf.IResolvable): any;
export declare class GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktf.IResolvable | undefined);
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _orphanFileRetentionPeriodInDays?;
    get orphanFileRetentionPeriodInDays(): number;
    set orphanFileRetentionPeriodInDays(value: number);
    resetOrphanFileRetentionPeriodInDays(): void;
    get orphanFileRetentionPeriodInDaysInput(): number | undefined;
}
export declare class GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference;
}
export interface GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration {
    /**
    * iceberg_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#iceberg_configuration GlueCatalogTableOptimizer#iceberg_configuration}
    */
    readonly icebergConfiguration?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[] | cdktf.IResolvable;
}
export declare function glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktf.IResolvable): any;
export declare function glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktf.IResolvable): any;
export declare class GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktf.IResolvable | undefined);
    private _icebergConfiguration;
    get icebergConfiguration(): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList;
    putIcebergConfiguration(value: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[] | cdktf.IResolvable): void;
    resetIcebergConfiguration(): void;
    get icebergConfigurationInput(): cdktf.IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[] | undefined;
}
export declare class GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference;
}
export interface GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#clean_expired_files GlueCatalogTableOptimizer#clean_expired_files}
    */
    readonly cleanExpiredFiles?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#number_of_snapshots_to_retain GlueCatalogTableOptimizer#number_of_snapshots_to_retain}
    */
    readonly numberOfSnapshotsToRetain?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#snapshot_retention_period_in_days GlueCatalogTableOptimizer#snapshot_retention_period_in_days}
    */
    readonly snapshotRetentionPeriodInDays?: number;
}
export declare function glueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktf.IResolvable): any;
export declare function glueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktf.IResolvable): any;
export declare class GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktf.IResolvable | undefined);
    private _cleanExpiredFiles?;
    get cleanExpiredFiles(): boolean | cdktf.IResolvable;
    set cleanExpiredFiles(value: boolean | cdktf.IResolvable);
    resetCleanExpiredFiles(): void;
    get cleanExpiredFilesInput(): boolean | cdktf.IResolvable | undefined;
    private _numberOfSnapshotsToRetain?;
    get numberOfSnapshotsToRetain(): number;
    set numberOfSnapshotsToRetain(value: number);
    resetNumberOfSnapshotsToRetain(): void;
    get numberOfSnapshotsToRetainInput(): number | undefined;
    private _snapshotRetentionPeriodInDays?;
    get snapshotRetentionPeriodInDays(): number;
    set snapshotRetentionPeriodInDays(value: number);
    resetSnapshotRetentionPeriodInDays(): void;
    get snapshotRetentionPeriodInDaysInput(): number | undefined;
}
export declare class GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference;
}
export interface GlueCatalogTableOptimizerConfigurationRetentionConfiguration {
    /**
    * iceberg_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#iceberg_configuration GlueCatalogTableOptimizer#iceberg_configuration}
    */
    readonly icebergConfiguration?: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[] | cdktf.IResolvable;
}
export declare function glueCatalogTableOptimizerConfigurationRetentionConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfigurationRetentionConfiguration | cdktf.IResolvable): any;
export declare function glueCatalogTableOptimizerConfigurationRetentionConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfigurationRetentionConfiguration | cdktf.IResolvable): any;
export declare class GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogTableOptimizerConfigurationRetentionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogTableOptimizerConfigurationRetentionConfiguration | cdktf.IResolvable | undefined);
    private _icebergConfiguration;
    get icebergConfiguration(): GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList;
    putIcebergConfiguration(value: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[] | cdktf.IResolvable): void;
    resetIcebergConfiguration(): void;
    get icebergConfigurationInput(): cdktf.IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[] | undefined;
}
export declare class GlueCatalogTableOptimizerConfigurationRetentionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogTableOptimizerConfigurationRetentionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference;
}
export interface GlueCatalogTableOptimizerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#enabled GlueCatalogTableOptimizer#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#role_arn GlueCatalogTableOptimizer#role_arn}
    */
    readonly roleArn: string;
    /**
    * orphan_file_deletion_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#orphan_file_deletion_configuration GlueCatalogTableOptimizer#orphan_file_deletion_configuration}
    */
    readonly orphanFileDeletionConfiguration?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[] | cdktf.IResolvable;
    /**
    * retention_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#retention_configuration GlueCatalogTableOptimizer#retention_configuration}
    */
    readonly retentionConfiguration?: GlueCatalogTableOptimizerConfigurationRetentionConfiguration[] | cdktf.IResolvable;
}
export declare function glueCatalogTableOptimizerConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfiguration | cdktf.IResolvable): any;
export declare function glueCatalogTableOptimizerConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfiguration | cdktf.IResolvable): any;
export declare class GlueCatalogTableOptimizerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogTableOptimizerConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogTableOptimizerConfiguration | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _orphanFileDeletionConfiguration;
    get orphanFileDeletionConfiguration(): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList;
    putOrphanFileDeletionConfiguration(value: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[] | cdktf.IResolvable): void;
    resetOrphanFileDeletionConfiguration(): void;
    get orphanFileDeletionConfigurationInput(): cdktf.IResolvable | GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[] | undefined;
    private _retentionConfiguration;
    get retentionConfiguration(): GlueCatalogTableOptimizerConfigurationRetentionConfigurationList;
    putRetentionConfiguration(value: GlueCatalogTableOptimizerConfigurationRetentionConfiguration[] | cdktf.IResolvable): void;
    resetRetentionConfiguration(): void;
    get retentionConfigurationInput(): cdktf.IResolvable | GlueCatalogTableOptimizerConfigurationRetentionConfiguration[] | undefined;
}
export declare class GlueCatalogTableOptimizerConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogTableOptimizerConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogTableOptimizerConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer aws_glue_catalog_table_optimizer}
*/
export declare class GlueCatalogTableOptimizer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_catalog_table_optimizer";
    /**
    * Generates CDKTF code for importing a GlueCatalogTableOptimizer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueCatalogTableOptimizer to import
    * @param importFromId The id of the existing GlueCatalogTableOptimizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueCatalogTableOptimizer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/glue_catalog_table_optimizer aws_glue_catalog_table_optimizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogTableOptimizerConfig
    */
    constructor(scope: Construct, id: string, config: GlueCatalogTableOptimizerConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _configuration;
    get configuration(): GlueCatalogTableOptimizerConfigurationList;
    putConfiguration(value: GlueCatalogTableOptimizerConfiguration[] | cdktf.IResolvable): void;
    resetConfiguration(): void;
    get configurationInput(): cdktf.IResolvable | GlueCatalogTableOptimizerConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
