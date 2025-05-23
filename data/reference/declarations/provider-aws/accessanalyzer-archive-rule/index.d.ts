/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccessanalyzerArchiveRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}
    */
    readonly analyzerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#id AccessanalyzerArchiveRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}
    */
    readonly ruleName: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#filter AccessanalyzerArchiveRule#filter}
    */
    readonly filter: AccessanalyzerArchiveRuleFilter[] | cdktf.IResolvable;
}
export interface AccessanalyzerArchiveRuleFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}
    */
    readonly contains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#criteria AccessanalyzerArchiveRule#criteria}
    */
    readonly criteria: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}
    */
    readonly eq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}
    */
    readonly exists?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}
    */
    readonly neq?: string[];
}
export declare function accessanalyzerArchiveRuleFilterToTerraform(struct?: AccessanalyzerArchiveRuleFilter | cdktf.IResolvable): any;
export declare function accessanalyzerArchiveRuleFilterToHclTerraform(struct?: AccessanalyzerArchiveRuleFilter | cdktf.IResolvable): any;
export declare class AccessanalyzerArchiveRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AccessanalyzerArchiveRuleFilter | cdktf.IResolvable | undefined;
    set internalValue(value: AccessanalyzerArchiveRuleFilter | cdktf.IResolvable | undefined);
    private _contains?;
    get contains(): string[];
    set contains(value: string[]);
    resetContains(): void;
    get containsInput(): string[] | undefined;
    private _criteria?;
    get criteria(): string;
    set criteria(value: string);
    get criteriaInput(): string | undefined;
    private _eq?;
    get eq(): string[];
    set eq(value: string[]);
    resetEq(): void;
    get eqInput(): string[] | undefined;
    private _exists?;
    get exists(): string;
    set exists(value: string);
    resetExists(): void;
    get existsInput(): string | undefined;
    private _neq?;
    get neq(): string[];
    set neq(value: string[]);
    resetNeq(): void;
    get neqInput(): string[] | undefined;
}
export declare class AccessanalyzerArchiveRuleFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AccessanalyzerArchiveRuleFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AccessanalyzerArchiveRuleFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule aws_accessanalyzer_archive_rule}
*/
export declare class AccessanalyzerArchiveRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_accessanalyzer_archive_rule";
    /**
    * Generates CDKTF code for importing a AccessanalyzerArchiveRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccessanalyzerArchiveRule to import
    * @param importFromId The id of the existing AccessanalyzerArchiveRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccessanalyzerArchiveRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_archive_rule aws_accessanalyzer_archive_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccessanalyzerArchiveRuleConfig
    */
    constructor(scope: Construct, id: string, config: AccessanalyzerArchiveRuleConfig);
    private _analyzerName?;
    get analyzerName(): string;
    set analyzerName(value: string);
    get analyzerNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    get ruleNameInput(): string | undefined;
    private _filter;
    get filter(): AccessanalyzerArchiveRuleFilterList;
    putFilter(value: AccessanalyzerArchiveRuleFilter[] | cdktf.IResolvable): void;
    get filterInput(): cdktf.IResolvable | AccessanalyzerArchiveRuleFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
