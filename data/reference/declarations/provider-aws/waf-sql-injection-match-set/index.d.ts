/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}
    */
    readonly name: string;
    /**
    * sql_injection_match_tuples block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}
    */
    readonly sqlInjectionMatchTuples?: WafSqlInjectionMatchSetSqlInjectionMatchTuples[] | cdktf.IResolvable;
}
export interface WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}
    */
    readonly type: string;
}
export declare function wafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchToTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference | WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch): any;
export declare function wafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchToHclTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference | WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch): any;
export declare class WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch | undefined;
    set internalValue(value: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch | undefined);
    private _data?;
    get data(): string;
    set data(value: string);
    resetData(): void;
    get dataInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface WafSqlInjectionMatchSetSqlInjectionMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set#field_to_match WafSqlInjectionMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch;
}
export declare function wafSqlInjectionMatchSetSqlInjectionMatchTuplesToTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuples | cdktf.IResolvable): any;
export declare function wafSqlInjectionMatchSetSqlInjectionMatchTuplesToHclTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuples | cdktf.IResolvable): any;
export declare class WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafSqlInjectionMatchSetSqlInjectionMatchTuples | cdktf.IResolvable | undefined;
    set internalValue(value: WafSqlInjectionMatchSetSqlInjectionMatchTuples | cdktf.IResolvable | undefined);
    private _textTransformation?;
    get textTransformation(): string;
    set textTransformation(value: string);
    get textTransformationInput(): string | undefined;
    private _fieldToMatch;
    get fieldToMatch(): WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference;
    putFieldToMatch(value: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch): void;
    get fieldToMatchInput(): WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch | undefined;
}
export declare class WafSqlInjectionMatchSetSqlInjectionMatchTuplesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafSqlInjectionMatchSetSqlInjectionMatchTuples[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set aws_waf_sql_injection_match_set}
*/
export declare class WafSqlInjectionMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_waf_sql_injection_match_set";
    /**
    * Generates CDKTF code for importing a WafSqlInjectionMatchSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafSqlInjectionMatchSet to import
    * @param importFromId The id of the existing WafSqlInjectionMatchSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafSqlInjectionMatchSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_sql_injection_match_set aws_waf_sql_injection_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafSqlInjectionMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafSqlInjectionMatchSetConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _sqlInjectionMatchTuples;
    get sqlInjectionMatchTuples(): WafSqlInjectionMatchSetSqlInjectionMatchTuplesList;
    putSqlInjectionMatchTuples(value: WafSqlInjectionMatchSetSqlInjectionMatchTuples[] | cdktf.IResolvable): void;
    resetSqlInjectionMatchTuples(): void;
    get sqlInjectionMatchTuplesInput(): cdktf.IResolvable | WafSqlInjectionMatchSetSqlInjectionMatchTuples[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
