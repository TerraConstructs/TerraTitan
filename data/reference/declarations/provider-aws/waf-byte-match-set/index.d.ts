/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafByteMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#id WafByteMatchSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#name WafByteMatchSet#name}
    */
    readonly name: string;
    /**
    * byte_match_tuples block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#byte_match_tuples WafByteMatchSet#byte_match_tuples}
    */
    readonly byteMatchTuples?: WafByteMatchSetByteMatchTuples[] | cdktf.IResolvable;
}
export interface WafByteMatchSetByteMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#data WafByteMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#type WafByteMatchSet#type}
    */
    readonly type: string;
}
export declare function wafByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct?: WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference | WafByteMatchSetByteMatchTuplesFieldToMatch): any;
export declare function wafByteMatchSetByteMatchTuplesFieldToMatchToHclTerraform(struct?: WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference | WafByteMatchSetByteMatchTuplesFieldToMatch): any;
export declare class WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafByteMatchSetByteMatchTuplesFieldToMatch | undefined;
    set internalValue(value: WafByteMatchSetByteMatchTuplesFieldToMatch | undefined);
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
export interface WafByteMatchSetByteMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#positional_constraint WafByteMatchSet#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#target_string WafByteMatchSet#target_string}
    */
    readonly targetString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#text_transformation WafByteMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#field_to_match WafByteMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafByteMatchSetByteMatchTuplesFieldToMatch;
}
export declare function wafByteMatchSetByteMatchTuplesToTerraform(struct?: WafByteMatchSetByteMatchTuples | cdktf.IResolvable): any;
export declare function wafByteMatchSetByteMatchTuplesToHclTerraform(struct?: WafByteMatchSetByteMatchTuples | cdktf.IResolvable): any;
export declare class WafByteMatchSetByteMatchTuplesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafByteMatchSetByteMatchTuples | cdktf.IResolvable | undefined;
    set internalValue(value: WafByteMatchSetByteMatchTuples | cdktf.IResolvable | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string | undefined;
    private _targetString?;
    get targetString(): string;
    set targetString(value: string);
    resetTargetString(): void;
    get targetStringInput(): string | undefined;
    private _textTransformation?;
    get textTransformation(): string;
    set textTransformation(value: string);
    get textTransformationInput(): string | undefined;
    private _fieldToMatch;
    get fieldToMatch(): WafByteMatchSetByteMatchTuplesFieldToMatchOutputReference;
    putFieldToMatch(value: WafByteMatchSetByteMatchTuplesFieldToMatch): void;
    get fieldToMatchInput(): WafByteMatchSetByteMatchTuplesFieldToMatch | undefined;
}
export declare class WafByteMatchSetByteMatchTuplesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafByteMatchSetByteMatchTuples[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafByteMatchSetByteMatchTuplesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set aws_waf_byte_match_set}
*/
export declare class WafByteMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_waf_byte_match_set";
    /**
    * Generates CDKTF code for importing a WafByteMatchSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafByteMatchSet to import
    * @param importFromId The id of the existing WafByteMatchSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafByteMatchSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_byte_match_set aws_waf_byte_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafByteMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafByteMatchSetConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _byteMatchTuples;
    get byteMatchTuples(): WafByteMatchSetByteMatchTuplesList;
    putByteMatchTuples(value: WafByteMatchSetByteMatchTuples[] | cdktf.IResolvable): void;
    resetByteMatchTuples(): void;
    get byteMatchTuplesInput(): cdktf.IResolvable | WafByteMatchSetByteMatchTuples[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
