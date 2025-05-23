/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueCrawlerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}
    */
    readonly classifiers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#configuration GlueCrawler#configuration}
    */
    readonly configuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#description GlueCrawler#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#id GlueCrawler#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#name GlueCrawler#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#role GlueCrawler#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#schedule GlueCrawler#schedule}
    */
    readonly schedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#security_configuration GlueCrawler#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}
    */
    readonly tablePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#tags GlueCrawler#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#tags_all GlueCrawler#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * catalog_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#catalog_target GlueCrawler#catalog_target}
    */
    readonly catalogTarget?: GlueCrawlerCatalogTarget[] | cdktf.IResolvable;
    /**
    * delta_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#delta_target GlueCrawler#delta_target}
    */
    readonly deltaTarget?: GlueCrawlerDeltaTarget[] | cdktf.IResolvable;
    /**
    * dynamodb_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#dynamodb_target GlueCrawler#dynamodb_target}
    */
    readonly dynamodbTarget?: GlueCrawlerDynamodbTarget[] | cdktf.IResolvable;
    /**
    * hudi_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#hudi_target GlueCrawler#hudi_target}
    */
    readonly hudiTarget?: GlueCrawlerHudiTarget[] | cdktf.IResolvable;
    /**
    * iceberg_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#iceberg_target GlueCrawler#iceberg_target}
    */
    readonly icebergTarget?: GlueCrawlerIcebergTarget[] | cdktf.IResolvable;
    /**
    * jdbc_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#jdbc_target GlueCrawler#jdbc_target}
    */
    readonly jdbcTarget?: GlueCrawlerJdbcTarget[] | cdktf.IResolvable;
    /**
    * lake_formation_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}
    */
    readonly lakeFormationConfiguration?: GlueCrawlerLakeFormationConfiguration;
    /**
    * lineage_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#lineage_configuration GlueCrawler#lineage_configuration}
    */
    readonly lineageConfiguration?: GlueCrawlerLineageConfiguration;
    /**
    * mongodb_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#mongodb_target GlueCrawler#mongodb_target}
    */
    readonly mongodbTarget?: GlueCrawlerMongodbTarget[] | cdktf.IResolvable;
    /**
    * recrawl_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}
    */
    readonly recrawlPolicy?: GlueCrawlerRecrawlPolicy;
    /**
    * s3_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#s3_target GlueCrawler#s3_target}
    */
    readonly s3Target?: GlueCrawlerS3Target[] | cdktf.IResolvable;
    /**
    * schema_change_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}
    */
    readonly schemaChangePolicy?: GlueCrawlerSchemaChangePolicy;
}
export interface GlueCrawlerCatalogTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}
    */
    readonly dlqEventQueueArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}
    */
    readonly eventQueueArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#tables GlueCrawler#tables}
    */
    readonly tables: string[];
}
export declare function glueCrawlerCatalogTargetToTerraform(struct?: GlueCrawlerCatalogTarget | cdktf.IResolvable): any;
export declare function glueCrawlerCatalogTargetToHclTerraform(struct?: GlueCrawlerCatalogTarget | cdktf.IResolvable): any;
export declare class GlueCrawlerCatalogTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCrawlerCatalogTarget | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCrawlerCatalogTarget | cdktf.IResolvable | undefined);
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    resetConnectionName(): void;
    get connectionNameInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _dlqEventQueueArn?;
    get dlqEventQueueArn(): string;
    set dlqEventQueueArn(value: string);
    resetDlqEventQueueArn(): void;
    get dlqEventQueueArnInput(): string | undefined;
    private _eventQueueArn?;
    get eventQueueArn(): string;
    set eventQueueArn(value: string);
    resetEventQueueArn(): void;
    get eventQueueArnInput(): string | undefined;
    private _tables?;
    get tables(): string[];
    set tables(value: string[]);
    get tablesInput(): string[] | undefined;
}
export declare class GlueCrawlerCatalogTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCrawlerCatalogTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCrawlerCatalogTargetOutputReference;
}
export interface GlueCrawlerDeltaTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#create_native_delta_table GlueCrawler#create_native_delta_table}
    */
    readonly createNativeDeltaTable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}
    */
    readonly deltaTables: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#write_manifest GlueCrawler#write_manifest}
    */
    readonly writeManifest: boolean | cdktf.IResolvable;
}
export declare function glueCrawlerDeltaTargetToTerraform(struct?: GlueCrawlerDeltaTarget | cdktf.IResolvable): any;
export declare function glueCrawlerDeltaTargetToHclTerraform(struct?: GlueCrawlerDeltaTarget | cdktf.IResolvable): any;
export declare class GlueCrawlerDeltaTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCrawlerDeltaTarget | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCrawlerDeltaTarget | cdktf.IResolvable | undefined);
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    resetConnectionName(): void;
    get connectionNameInput(): string | undefined;
    private _createNativeDeltaTable?;
    get createNativeDeltaTable(): boolean | cdktf.IResolvable;
    set createNativeDeltaTable(value: boolean | cdktf.IResolvable);
    resetCreateNativeDeltaTable(): void;
    get createNativeDeltaTableInput(): boolean | cdktf.IResolvable | undefined;
    private _deltaTables?;
    get deltaTables(): string[];
    set deltaTables(value: string[]);
    get deltaTablesInput(): string[] | undefined;
    private _writeManifest?;
    get writeManifest(): boolean | cdktf.IResolvable;
    set writeManifest(value: boolean | cdktf.IResolvable);
    get writeManifestInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class GlueCrawlerDeltaTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCrawlerDeltaTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCrawlerDeltaTargetOutputReference;
}
export interface GlueCrawlerDynamodbTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#path GlueCrawler#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}
    */
    readonly scanAll?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#scan_rate GlueCrawler#scan_rate}
    */
    readonly scanRate?: number;
}
export declare function glueCrawlerDynamodbTargetToTerraform(struct?: GlueCrawlerDynamodbTarget | cdktf.IResolvable): any;
export declare function glueCrawlerDynamodbTargetToHclTerraform(struct?: GlueCrawlerDynamodbTarget | cdktf.IResolvable): any;
export declare class GlueCrawlerDynamodbTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCrawlerDynamodbTarget | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCrawlerDynamodbTarget | cdktf.IResolvable | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
    private _scanAll?;
    get scanAll(): boolean | cdktf.IResolvable;
    set scanAll(value: boolean | cdktf.IResolvable);
    resetScanAll(): void;
    get scanAllInput(): boolean | cdktf.IResolvable | undefined;
    private _scanRate?;
    get scanRate(): number;
    set scanRate(value: number);
    resetScanRate(): void;
    get scanRateInput(): number | undefined;
}
export declare class GlueCrawlerDynamodbTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCrawlerDynamodbTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCrawlerDynamodbTargetOutputReference;
}
export interface GlueCrawlerHudiTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}
    */
    readonly maximumTraversalDepth: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#paths GlueCrawler#paths}
    */
    readonly paths: string[];
}
export declare function glueCrawlerHudiTargetToTerraform(struct?: GlueCrawlerHudiTarget | cdktf.IResolvable): any;
export declare function glueCrawlerHudiTargetToHclTerraform(struct?: GlueCrawlerHudiTarget | cdktf.IResolvable): any;
export declare class GlueCrawlerHudiTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCrawlerHudiTarget | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCrawlerHudiTarget | cdktf.IResolvable | undefined);
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    resetConnectionName(): void;
    get connectionNameInput(): string | undefined;
    private _exclusions?;
    get exclusions(): string[];
    set exclusions(value: string[]);
    resetExclusions(): void;
    get exclusionsInput(): string[] | undefined;
    private _maximumTraversalDepth?;
    get maximumTraversalDepth(): number;
    set maximumTraversalDepth(value: number);
    get maximumTraversalDepthInput(): number | undefined;
    private _paths?;
    get paths(): string[];
    set paths(value: string[]);
    get pathsInput(): string[] | undefined;
}
export declare class GlueCrawlerHudiTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCrawlerHudiTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCrawlerHudiTargetOutputReference;
}
export interface GlueCrawlerIcebergTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}
    */
    readonly maximumTraversalDepth: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#paths GlueCrawler#paths}
    */
    readonly paths: string[];
}
export declare function glueCrawlerIcebergTargetToTerraform(struct?: GlueCrawlerIcebergTarget | cdktf.IResolvable): any;
export declare function glueCrawlerIcebergTargetToHclTerraform(struct?: GlueCrawlerIcebergTarget | cdktf.IResolvable): any;
export declare class GlueCrawlerIcebergTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCrawlerIcebergTarget | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCrawlerIcebergTarget | cdktf.IResolvable | undefined);
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    resetConnectionName(): void;
    get connectionNameInput(): string | undefined;
    private _exclusions?;
    get exclusions(): string[];
    set exclusions(value: string[]);
    resetExclusions(): void;
    get exclusionsInput(): string[] | undefined;
    private _maximumTraversalDepth?;
    get maximumTraversalDepth(): number;
    set maximumTraversalDepth(value: number);
    get maximumTraversalDepthInput(): number | undefined;
    private _paths?;
    get paths(): string[];
    set paths(value: string[]);
    get pathsInput(): string[] | undefined;
}
export declare class GlueCrawlerIcebergTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCrawlerIcebergTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCrawlerIcebergTargetOutputReference;
}
export interface GlueCrawlerJdbcTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}
    */
    readonly enableAdditionalMetadata?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#path GlueCrawler#path}
    */
    readonly path: string;
}
export declare function glueCrawlerJdbcTargetToTerraform(struct?: GlueCrawlerJdbcTarget | cdktf.IResolvable): any;
export declare function glueCrawlerJdbcTargetToHclTerraform(struct?: GlueCrawlerJdbcTarget | cdktf.IResolvable): any;
export declare class GlueCrawlerJdbcTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCrawlerJdbcTarget | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCrawlerJdbcTarget | cdktf.IResolvable | undefined);
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    get connectionNameInput(): string | undefined;
    private _enableAdditionalMetadata?;
    get enableAdditionalMetadata(): string[];
    set enableAdditionalMetadata(value: string[]);
    resetEnableAdditionalMetadata(): void;
    get enableAdditionalMetadataInput(): string[] | undefined;
    private _exclusions?;
    get exclusions(): string[];
    set exclusions(value: string[]);
    resetExclusions(): void;
    get exclusionsInput(): string[] | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
}
export declare class GlueCrawlerJdbcTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCrawlerJdbcTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCrawlerJdbcTargetOutputReference;
}
export interface GlueCrawlerLakeFormationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#account_id GlueCrawler#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}
    */
    readonly useLakeFormationCredentials?: boolean | cdktf.IResolvable;
}
export declare function glueCrawlerLakeFormationConfigurationToTerraform(struct?: GlueCrawlerLakeFormationConfigurationOutputReference | GlueCrawlerLakeFormationConfiguration): any;
export declare function glueCrawlerLakeFormationConfigurationToHclTerraform(struct?: GlueCrawlerLakeFormationConfigurationOutputReference | GlueCrawlerLakeFormationConfiguration): any;
export declare class GlueCrawlerLakeFormationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCrawlerLakeFormationConfiguration | undefined;
    set internalValue(value: GlueCrawlerLakeFormationConfiguration | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    private _useLakeFormationCredentials?;
    get useLakeFormationCredentials(): boolean | cdktf.IResolvable;
    set useLakeFormationCredentials(value: boolean | cdktf.IResolvable);
    resetUseLakeFormationCredentials(): void;
    get useLakeFormationCredentialsInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GlueCrawlerLineageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}
    */
    readonly crawlerLineageSettings?: string;
}
export declare function glueCrawlerLineageConfigurationToTerraform(struct?: GlueCrawlerLineageConfigurationOutputReference | GlueCrawlerLineageConfiguration): any;
export declare function glueCrawlerLineageConfigurationToHclTerraform(struct?: GlueCrawlerLineageConfigurationOutputReference | GlueCrawlerLineageConfiguration): any;
export declare class GlueCrawlerLineageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCrawlerLineageConfiguration | undefined;
    set internalValue(value: GlueCrawlerLineageConfiguration | undefined);
    private _crawlerLineageSettings?;
    get crawlerLineageSettings(): string;
    set crawlerLineageSettings(value: string);
    resetCrawlerLineageSettings(): void;
    get crawlerLineageSettingsInput(): string | undefined;
}
export interface GlueCrawlerMongodbTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#path GlueCrawler#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}
    */
    readonly scanAll?: boolean | cdktf.IResolvable;
}
export declare function glueCrawlerMongodbTargetToTerraform(struct?: GlueCrawlerMongodbTarget | cdktf.IResolvable): any;
export declare function glueCrawlerMongodbTargetToHclTerraform(struct?: GlueCrawlerMongodbTarget | cdktf.IResolvable): any;
export declare class GlueCrawlerMongodbTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCrawlerMongodbTarget | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCrawlerMongodbTarget | cdktf.IResolvable | undefined);
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    get connectionNameInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
    private _scanAll?;
    get scanAll(): boolean | cdktf.IResolvable;
    set scanAll(value: boolean | cdktf.IResolvable);
    resetScanAll(): void;
    get scanAllInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class GlueCrawlerMongodbTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCrawlerMongodbTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCrawlerMongodbTargetOutputReference;
}
export interface GlueCrawlerRecrawlPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}
    */
    readonly recrawlBehavior?: string;
}
export declare function glueCrawlerRecrawlPolicyToTerraform(struct?: GlueCrawlerRecrawlPolicyOutputReference | GlueCrawlerRecrawlPolicy): any;
export declare function glueCrawlerRecrawlPolicyToHclTerraform(struct?: GlueCrawlerRecrawlPolicyOutputReference | GlueCrawlerRecrawlPolicy): any;
export declare class GlueCrawlerRecrawlPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCrawlerRecrawlPolicy | undefined;
    set internalValue(value: GlueCrawlerRecrawlPolicy | undefined);
    private _recrawlBehavior?;
    get recrawlBehavior(): string;
    set recrawlBehavior(value: string);
    resetRecrawlBehavior(): void;
    get recrawlBehaviorInput(): string | undefined;
}
export interface GlueCrawlerS3Target {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}
    */
    readonly dlqEventQueueArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}
    */
    readonly eventQueueArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}
    */
    readonly exclusions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#path GlueCrawler#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#sample_size GlueCrawler#sample_size}
    */
    readonly sampleSize?: number;
}
export declare function glueCrawlerS3TargetToTerraform(struct?: GlueCrawlerS3Target | cdktf.IResolvable): any;
export declare function glueCrawlerS3TargetToHclTerraform(struct?: GlueCrawlerS3Target | cdktf.IResolvable): any;
export declare class GlueCrawlerS3TargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCrawlerS3Target | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCrawlerS3Target | cdktf.IResolvable | undefined);
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    resetConnectionName(): void;
    get connectionNameInput(): string | undefined;
    private _dlqEventQueueArn?;
    get dlqEventQueueArn(): string;
    set dlqEventQueueArn(value: string);
    resetDlqEventQueueArn(): void;
    get dlqEventQueueArnInput(): string | undefined;
    private _eventQueueArn?;
    get eventQueueArn(): string;
    set eventQueueArn(value: string);
    resetEventQueueArn(): void;
    get eventQueueArnInput(): string | undefined;
    private _exclusions?;
    get exclusions(): string[];
    set exclusions(value: string[]);
    resetExclusions(): void;
    get exclusionsInput(): string[] | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
    private _sampleSize?;
    get sampleSize(): number;
    set sampleSize(value: number);
    resetSampleSize(): void;
    get sampleSizeInput(): number | undefined;
}
export declare class GlueCrawlerS3TargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCrawlerS3Target[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCrawlerS3TargetOutputReference;
}
export interface GlueCrawlerSchemaChangePolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#delete_behavior GlueCrawler#delete_behavior}
    */
    readonly deleteBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#update_behavior GlueCrawler#update_behavior}
    */
    readonly updateBehavior?: string;
}
export declare function glueCrawlerSchemaChangePolicyToTerraform(struct?: GlueCrawlerSchemaChangePolicyOutputReference | GlueCrawlerSchemaChangePolicy): any;
export declare function glueCrawlerSchemaChangePolicyToHclTerraform(struct?: GlueCrawlerSchemaChangePolicyOutputReference | GlueCrawlerSchemaChangePolicy): any;
export declare class GlueCrawlerSchemaChangePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCrawlerSchemaChangePolicy | undefined;
    set internalValue(value: GlueCrawlerSchemaChangePolicy | undefined);
    private _deleteBehavior?;
    get deleteBehavior(): string;
    set deleteBehavior(value: string);
    resetDeleteBehavior(): void;
    get deleteBehaviorInput(): string | undefined;
    private _updateBehavior?;
    get updateBehavior(): string;
    set updateBehavior(value: string);
    resetUpdateBehavior(): void;
    get updateBehaviorInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler aws_glue_crawler}
*/
export declare class GlueCrawler extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_crawler";
    /**
    * Generates CDKTF code for importing a GlueCrawler resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueCrawler to import
    * @param importFromId The id of the existing GlueCrawler that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueCrawler to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_crawler aws_glue_crawler} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCrawlerConfig
    */
    constructor(scope: Construct, id: string, config: GlueCrawlerConfig);
    get arn(): string;
    private _classifiers?;
    get classifiers(): string[];
    set classifiers(value: string[]);
    resetClassifiers(): void;
    get classifiersInput(): string[] | undefined;
    private _configuration?;
    get configuration(): string;
    set configuration(value: string);
    resetConfiguration(): void;
    get configurationInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string | undefined;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string | undefined;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string | undefined;
    private _tablePrefix?;
    get tablePrefix(): string;
    set tablePrefix(value: string);
    resetTablePrefix(): void;
    get tablePrefixInput(): string | undefined;
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
    private _catalogTarget;
    get catalogTarget(): GlueCrawlerCatalogTargetList;
    putCatalogTarget(value: GlueCrawlerCatalogTarget[] | cdktf.IResolvable): void;
    resetCatalogTarget(): void;
    get catalogTargetInput(): cdktf.IResolvable | GlueCrawlerCatalogTarget[] | undefined;
    private _deltaTarget;
    get deltaTarget(): GlueCrawlerDeltaTargetList;
    putDeltaTarget(value: GlueCrawlerDeltaTarget[] | cdktf.IResolvable): void;
    resetDeltaTarget(): void;
    get deltaTargetInput(): cdktf.IResolvable | GlueCrawlerDeltaTarget[] | undefined;
    private _dynamodbTarget;
    get dynamodbTarget(): GlueCrawlerDynamodbTargetList;
    putDynamodbTarget(value: GlueCrawlerDynamodbTarget[] | cdktf.IResolvable): void;
    resetDynamodbTarget(): void;
    get dynamodbTargetInput(): cdktf.IResolvable | GlueCrawlerDynamodbTarget[] | undefined;
    private _hudiTarget;
    get hudiTarget(): GlueCrawlerHudiTargetList;
    putHudiTarget(value: GlueCrawlerHudiTarget[] | cdktf.IResolvable): void;
    resetHudiTarget(): void;
    get hudiTargetInput(): cdktf.IResolvable | GlueCrawlerHudiTarget[] | undefined;
    private _icebergTarget;
    get icebergTarget(): GlueCrawlerIcebergTargetList;
    putIcebergTarget(value: GlueCrawlerIcebergTarget[] | cdktf.IResolvable): void;
    resetIcebergTarget(): void;
    get icebergTargetInput(): cdktf.IResolvable | GlueCrawlerIcebergTarget[] | undefined;
    private _jdbcTarget;
    get jdbcTarget(): GlueCrawlerJdbcTargetList;
    putJdbcTarget(value: GlueCrawlerJdbcTarget[] | cdktf.IResolvable): void;
    resetJdbcTarget(): void;
    get jdbcTargetInput(): cdktf.IResolvable | GlueCrawlerJdbcTarget[] | undefined;
    private _lakeFormationConfiguration;
    get lakeFormationConfiguration(): GlueCrawlerLakeFormationConfigurationOutputReference;
    putLakeFormationConfiguration(value: GlueCrawlerLakeFormationConfiguration): void;
    resetLakeFormationConfiguration(): void;
    get lakeFormationConfigurationInput(): GlueCrawlerLakeFormationConfiguration | undefined;
    private _lineageConfiguration;
    get lineageConfiguration(): GlueCrawlerLineageConfigurationOutputReference;
    putLineageConfiguration(value: GlueCrawlerLineageConfiguration): void;
    resetLineageConfiguration(): void;
    get lineageConfigurationInput(): GlueCrawlerLineageConfiguration | undefined;
    private _mongodbTarget;
    get mongodbTarget(): GlueCrawlerMongodbTargetList;
    putMongodbTarget(value: GlueCrawlerMongodbTarget[] | cdktf.IResolvable): void;
    resetMongodbTarget(): void;
    get mongodbTargetInput(): cdktf.IResolvable | GlueCrawlerMongodbTarget[] | undefined;
    private _recrawlPolicy;
    get recrawlPolicy(): GlueCrawlerRecrawlPolicyOutputReference;
    putRecrawlPolicy(value: GlueCrawlerRecrawlPolicy): void;
    resetRecrawlPolicy(): void;
    get recrawlPolicyInput(): GlueCrawlerRecrawlPolicy | undefined;
    private _s3Target;
    get s3Target(): GlueCrawlerS3TargetList;
    putS3Target(value: GlueCrawlerS3Target[] | cdktf.IResolvable): void;
    resetS3Target(): void;
    get s3TargetInput(): cdktf.IResolvable | GlueCrawlerS3Target[] | undefined;
    private _schemaChangePolicy;
    get schemaChangePolicy(): GlueCrawlerSchemaChangePolicyOutputReference;
    putSchemaChangePolicy(value: GlueCrawlerSchemaChangePolicy): void;
    resetSchemaChangePolicy(): void;
    get schemaChangePolicyInput(): GlueCrawlerSchemaChangePolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
