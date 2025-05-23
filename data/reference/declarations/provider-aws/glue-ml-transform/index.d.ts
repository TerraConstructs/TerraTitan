/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueMlTransformConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#description GlueMlTransform#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#glue_version GlueMlTransform#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#id GlueMlTransform#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#max_retries GlueMlTransform#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#name GlueMlTransform#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#role_arn GlueMlTransform#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#tags GlueMlTransform#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#tags_all GlueMlTransform#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#timeout GlueMlTransform#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#worker_type GlueMlTransform#worker_type}
    */
    readonly workerType?: string;
    /**
    * input_record_tables block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}
    */
    readonly inputRecordTables: GlueMlTransformInputRecordTables[] | cdktf.IResolvable;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#parameters GlueMlTransform#parameters}
    */
    readonly parameters: GlueMlTransformParameters;
}
export interface GlueMlTransformSchema {
}
export declare function glueMlTransformSchemaToTerraform(struct?: GlueMlTransformSchema): any;
export declare function glueMlTransformSchemaToHclTerraform(struct?: GlueMlTransformSchema): any;
export declare class GlueMlTransformSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueMlTransformSchema | undefined;
    set internalValue(value: GlueMlTransformSchema | undefined);
    get dataType(): string;
    get name(): string;
}
export declare class GlueMlTransformSchemaList extends cdktf.ComplexList {
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
    get(index: number): GlueMlTransformSchemaOutputReference;
}
export interface GlueMlTransformInputRecordTables {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#connection_name GlueMlTransform#connection_name}
    */
    readonly connectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#database_name GlueMlTransform#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#table_name GlueMlTransform#table_name}
    */
    readonly tableName: string;
}
export declare function glueMlTransformInputRecordTablesToTerraform(struct?: GlueMlTransformInputRecordTables | cdktf.IResolvable): any;
export declare function glueMlTransformInputRecordTablesToHclTerraform(struct?: GlueMlTransformInputRecordTables | cdktf.IResolvable): any;
export declare class GlueMlTransformInputRecordTablesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueMlTransformInputRecordTables | cdktf.IResolvable | undefined;
    set internalValue(value: GlueMlTransformInputRecordTables | cdktf.IResolvable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    resetConnectionName(): void;
    get connectionNameInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
}
export declare class GlueMlTransformInputRecordTablesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueMlTransformInputRecordTables[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueMlTransformInputRecordTablesOutputReference;
}
export interface GlueMlTransformParametersFindMatchesParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#accuracy_cost_trade_off GlueMlTransform#accuracy_cost_trade_off}
    */
    readonly accuracyCostTradeOff?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}
    */
    readonly enforceProvidedLabels?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#precision_recall_trade_off GlueMlTransform#precision_recall_trade_off}
    */
    readonly precisionRecallTradeOff?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}
    */
    readonly primaryKeyColumnName?: string;
}
export declare function glueMlTransformParametersFindMatchesParametersToTerraform(struct?: GlueMlTransformParametersFindMatchesParametersOutputReference | GlueMlTransformParametersFindMatchesParameters): any;
export declare function glueMlTransformParametersFindMatchesParametersToHclTerraform(struct?: GlueMlTransformParametersFindMatchesParametersOutputReference | GlueMlTransformParametersFindMatchesParameters): any;
export declare class GlueMlTransformParametersFindMatchesParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueMlTransformParametersFindMatchesParameters | undefined;
    set internalValue(value: GlueMlTransformParametersFindMatchesParameters | undefined);
    private _accuracyCostTradeOff?;
    get accuracyCostTradeOff(): number;
    set accuracyCostTradeOff(value: number);
    resetAccuracyCostTradeOff(): void;
    get accuracyCostTradeOffInput(): number | undefined;
    private _enforceProvidedLabels?;
    get enforceProvidedLabels(): boolean | cdktf.IResolvable;
    set enforceProvidedLabels(value: boolean | cdktf.IResolvable);
    resetEnforceProvidedLabels(): void;
    get enforceProvidedLabelsInput(): boolean | cdktf.IResolvable | undefined;
    private _precisionRecallTradeOff?;
    get precisionRecallTradeOff(): number;
    set precisionRecallTradeOff(value: number);
    resetPrecisionRecallTradeOff(): void;
    get precisionRecallTradeOffInput(): number | undefined;
    private _primaryKeyColumnName?;
    get primaryKeyColumnName(): string;
    set primaryKeyColumnName(value: string);
    resetPrimaryKeyColumnName(): void;
    get primaryKeyColumnNameInput(): string | undefined;
}
export interface GlueMlTransformParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#transform_type GlueMlTransform#transform_type}
    */
    readonly transformType: string;
    /**
    * find_matches_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}
    */
    readonly findMatchesParameters: GlueMlTransformParametersFindMatchesParameters;
}
export declare function glueMlTransformParametersToTerraform(struct?: GlueMlTransformParametersOutputReference | GlueMlTransformParameters): any;
export declare function glueMlTransformParametersToHclTerraform(struct?: GlueMlTransformParametersOutputReference | GlueMlTransformParameters): any;
export declare class GlueMlTransformParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueMlTransformParameters | undefined;
    set internalValue(value: GlueMlTransformParameters | undefined);
    private _transformType?;
    get transformType(): string;
    set transformType(value: string);
    get transformTypeInput(): string | undefined;
    private _findMatchesParameters;
    get findMatchesParameters(): GlueMlTransformParametersFindMatchesParametersOutputReference;
    putFindMatchesParameters(value: GlueMlTransformParametersFindMatchesParameters): void;
    get findMatchesParametersInput(): GlueMlTransformParametersFindMatchesParameters | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform aws_glue_ml_transform}
*/
export declare class GlueMlTransform extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_ml_transform";
    /**
    * Generates CDKTF code for importing a GlueMlTransform resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueMlTransform to import
    * @param importFromId The id of the existing GlueMlTransform that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueMlTransform to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_ml_transform aws_glue_ml_transform} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueMlTransformConfig
    */
    constructor(scope: Construct, id: string, config: GlueMlTransformConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _glueVersion?;
    get glueVersion(): string;
    set glueVersion(value: string);
    resetGlueVersion(): void;
    get glueVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get labelCount(): number;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    resetMaxCapacity(): void;
    get maxCapacityInput(): number | undefined;
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    resetMaxRetries(): void;
    get maxRetriesInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _numberOfWorkers?;
    get numberOfWorkers(): number;
    set numberOfWorkers(value: number);
    resetNumberOfWorkers(): void;
    get numberOfWorkersInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _schema;
    get schema(): GlueMlTransformSchemaList;
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
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    private _workerType?;
    get workerType(): string;
    set workerType(value: string);
    resetWorkerType(): void;
    get workerTypeInput(): string | undefined;
    private _inputRecordTables;
    get inputRecordTables(): GlueMlTransformInputRecordTablesList;
    putInputRecordTables(value: GlueMlTransformInputRecordTables[] | cdktf.IResolvable): void;
    get inputRecordTablesInput(): cdktf.IResolvable | GlueMlTransformInputRecordTables[] | undefined;
    private _parameters;
    get parameters(): GlueMlTransformParametersOutputReference;
    putParameters(value: GlueMlTransformParameters): void;
    get parametersInput(): GlueMlTransformParameters | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
