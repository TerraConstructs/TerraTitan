/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalRegexMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}
    */
    readonly name: string;
    /**
    * regex_match_tuple block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}
    */
    readonly regexMatchTuple?: WafregionalRegexMatchSetRegexMatchTuple[] | cdktf.IResolvable;
}
export interface WafregionalRegexMatchSetRegexMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}
    */
    readonly type: string;
}
export declare function wafregionalRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct?: WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference | WafregionalRegexMatchSetRegexMatchTupleFieldToMatch): any;
export declare function wafregionalRegexMatchSetRegexMatchTupleFieldToMatchToHclTerraform(struct?: WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference | WafregionalRegexMatchSetRegexMatchTupleFieldToMatch): any;
export declare class WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalRegexMatchSetRegexMatchTupleFieldToMatch | undefined;
    set internalValue(value: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch | undefined);
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
export interface WafregionalRegexMatchSetRegexMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}
    */
    readonly regexPatternSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set#text_transformation WafregionalRegexMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set#field_to_match WafregionalRegexMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch;
}
export declare function wafregionalRegexMatchSetRegexMatchTupleToTerraform(struct?: WafregionalRegexMatchSetRegexMatchTuple | cdktf.IResolvable): any;
export declare function wafregionalRegexMatchSetRegexMatchTupleToHclTerraform(struct?: WafregionalRegexMatchSetRegexMatchTuple | cdktf.IResolvable): any;
export declare class WafregionalRegexMatchSetRegexMatchTupleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafregionalRegexMatchSetRegexMatchTuple | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalRegexMatchSetRegexMatchTuple | cdktf.IResolvable | undefined);
    private _regexPatternSetId?;
    get regexPatternSetId(): string;
    set regexPatternSetId(value: string);
    get regexPatternSetIdInput(): string | undefined;
    private _textTransformation?;
    get textTransformation(): string;
    set textTransformation(value: string);
    get textTransformationInput(): string | undefined;
    private _fieldToMatch;
    get fieldToMatch(): WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference;
    putFieldToMatch(value: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch): void;
    get fieldToMatchInput(): WafregionalRegexMatchSetRegexMatchTupleFieldToMatch | undefined;
}
export declare class WafregionalRegexMatchSetRegexMatchTupleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafregionalRegexMatchSetRegexMatchTuple[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafregionalRegexMatchSetRegexMatchTupleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set aws_wafregional_regex_match_set}
*/
export declare class WafregionalRegexMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafregional_regex_match_set";
    /**
    * Generates CDKTF code for importing a WafregionalRegexMatchSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafregionalRegexMatchSet to import
    * @param importFromId The id of the existing WafregionalRegexMatchSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafregionalRegexMatchSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_regex_match_set aws_wafregional_regex_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRegexMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalRegexMatchSetConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _regexMatchTuple;
    get regexMatchTuple(): WafregionalRegexMatchSetRegexMatchTupleList;
    putRegexMatchTuple(value: WafregionalRegexMatchSetRegexMatchTuple[] | cdktf.IResolvable): void;
    resetRegexMatchTuple(): void;
    get regexMatchTupleInput(): cdktf.IResolvable | WafregionalRegexMatchSetRegexMatchTuple[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
