/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set#id WafregionalSqlInjectionMatchSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set#name WafregionalSqlInjectionMatchSet#name}
    */
    readonly name: string;
    /**
    * sql_injection_match_tuple block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set#sql_injection_match_tuple WafregionalSqlInjectionMatchSet#sql_injection_match_tuple}
    */
    readonly sqlInjectionMatchTuple?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] | cdktf.IResolvable;
}
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set#data WafregionalSqlInjectionMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set#type WafregionalSqlInjectionMatchSet#type}
    */
    readonly type: string;
}
export declare function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference | WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch): any;
export declare function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToHclTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference | WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch): any;
export declare class WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch | undefined;
    set internalValue(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch | undefined);
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
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set#field_to_match WafregionalSqlInjectionMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch;
}
export declare function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple | cdktf.IResolvable): any;
export declare function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToHclTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple | cdktf.IResolvable): any;
export declare class WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple | cdktf.IResolvable | undefined);
    private _textTransformation?;
    get textTransformation(): string;
    set textTransformation(value: string);
    get textTransformationInput(): string | undefined;
    private _fieldToMatch;
    get fieldToMatch(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference;
    putFieldToMatch(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch): void;
    get fieldToMatchInput(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch | undefined;
}
export declare class WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set aws_wafregional_sql_injection_match_set}
*/
export declare class WafregionalSqlInjectionMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafregional_sql_injection_match_set";
    /**
    * Generates CDKTF code for importing a WafregionalSqlInjectionMatchSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafregionalSqlInjectionMatchSet to import
    * @param importFromId The id of the existing WafregionalSqlInjectionMatchSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafregionalSqlInjectionMatchSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_sql_injection_match_set aws_wafregional_sql_injection_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalSqlInjectionMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalSqlInjectionMatchSetConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _sqlInjectionMatchTuple;
    get sqlInjectionMatchTuple(): WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList;
    putSqlInjectionMatchTuple(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] | cdktf.IResolvable): void;
    resetSqlInjectionMatchTuple(): void;
    get sqlInjectionMatchTupleInput(): cdktf.IResolvable | WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
