/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueDataQualityRulesetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#id GlueDataQualityRuleset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}
    */
    readonly ruleset: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#tags_all GlueDataQualityRuleset#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * target_table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#target_table GlueDataQualityRuleset#target_table}
    */
    readonly targetTable?: GlueDataQualityRulesetTargetTable;
}
export interface GlueDataQualityRulesetTargetTable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#catalog_id GlueDataQualityRuleset#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#database_name GlueDataQualityRuleset#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#table_name GlueDataQualityRuleset#table_name}
    */
    readonly tableName: string;
}
export declare function glueDataQualityRulesetTargetTableToTerraform(struct?: GlueDataQualityRulesetTargetTableOutputReference | GlueDataQualityRulesetTargetTable): any;
export declare function glueDataQualityRulesetTargetTableToHclTerraform(struct?: GlueDataQualityRulesetTargetTableOutputReference | GlueDataQualityRulesetTargetTable): any;
export declare class GlueDataQualityRulesetTargetTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueDataQualityRulesetTargetTable | undefined;
    set internalValue(value: GlueDataQualityRulesetTargetTable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset aws_glue_data_quality_ruleset}
*/
export declare class GlueDataQualityRuleset extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_data_quality_ruleset";
    /**
    * Generates CDKTF code for importing a GlueDataQualityRuleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueDataQualityRuleset to import
    * @param importFromId The id of the existing GlueDataQualityRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueDataQualityRuleset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_quality_ruleset aws_glue_data_quality_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueDataQualityRulesetConfig
    */
    constructor(scope: Construct, id: string, config: GlueDataQualityRulesetConfig);
    get arn(): string;
    get createdOn(): string;
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
    get lastModifiedOn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get recommendationRunId(): string;
    private _ruleset?;
    get ruleset(): string;
    set ruleset(value: string);
    get rulesetInput(): string | undefined;
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
    private _targetTable;
    get targetTable(): GlueDataQualityRulesetTargetTableOutputReference;
    putTargetTable(value: GlueDataQualityRulesetTargetTable): void;
    resetTargetTable(): void;
    get targetTableInput(): GlueDataQualityRulesetTargetTable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
