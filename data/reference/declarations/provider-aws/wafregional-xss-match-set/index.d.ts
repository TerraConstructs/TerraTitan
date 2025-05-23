/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalXssMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set#id WafregionalXssMatchSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set#name WafregionalXssMatchSet#name}
    */
    readonly name: string;
    /**
    * xss_match_tuple block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set#xss_match_tuple WafregionalXssMatchSet#xss_match_tuple}
    */
    readonly xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[] | cdktf.IResolvable;
}
export interface WafregionalXssMatchSetXssMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set#data WafregionalXssMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set#type WafregionalXssMatchSet#type}
    */
    readonly type: string;
}
export declare function wafregionalXssMatchSetXssMatchTupleFieldToMatchToTerraform(struct?: WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference | WafregionalXssMatchSetXssMatchTupleFieldToMatch): any;
export declare function wafregionalXssMatchSetXssMatchTupleFieldToMatchToHclTerraform(struct?: WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference | WafregionalXssMatchSetXssMatchTupleFieldToMatch): any;
export declare class WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalXssMatchSetXssMatchTupleFieldToMatch | undefined;
    set internalValue(value: WafregionalXssMatchSetXssMatchTupleFieldToMatch | undefined);
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
export interface WafregionalXssMatchSetXssMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set#text_transformation WafregionalXssMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set#field_to_match WafregionalXssMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalXssMatchSetXssMatchTupleFieldToMatch;
}
export declare function wafregionalXssMatchSetXssMatchTupleToTerraform(struct?: WafregionalXssMatchSetXssMatchTuple | cdktf.IResolvable): any;
export declare function wafregionalXssMatchSetXssMatchTupleToHclTerraform(struct?: WafregionalXssMatchSetXssMatchTuple | cdktf.IResolvable): any;
export declare class WafregionalXssMatchSetXssMatchTupleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafregionalXssMatchSetXssMatchTuple | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalXssMatchSetXssMatchTuple | cdktf.IResolvable | undefined);
    private _textTransformation?;
    get textTransformation(): string;
    set textTransformation(value: string);
    get textTransformationInput(): string | undefined;
    private _fieldToMatch;
    get fieldToMatch(): WafregionalXssMatchSetXssMatchTupleFieldToMatchOutputReference;
    putFieldToMatch(value: WafregionalXssMatchSetXssMatchTupleFieldToMatch): void;
    get fieldToMatchInput(): WafregionalXssMatchSetXssMatchTupleFieldToMatch | undefined;
}
export declare class WafregionalXssMatchSetXssMatchTupleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafregionalXssMatchSetXssMatchTuple[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafregionalXssMatchSetXssMatchTupleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set aws_wafregional_xss_match_set}
*/
export declare class WafregionalXssMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafregional_xss_match_set";
    /**
    * Generates CDKTF code for importing a WafregionalXssMatchSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafregionalXssMatchSet to import
    * @param importFromId The id of the existing WafregionalXssMatchSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafregionalXssMatchSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_xss_match_set aws_wafregional_xss_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalXssMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalXssMatchSetConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _xssMatchTuple;
    get xssMatchTuple(): WafregionalXssMatchSetXssMatchTupleList;
    putXssMatchTuple(value: WafregionalXssMatchSetXssMatchTuple[] | cdktf.IResolvable): void;
    resetXssMatchTuple(): void;
    get xssMatchTupleInput(): cdktf.IResolvable | WafregionalXssMatchSetXssMatchTuple[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
