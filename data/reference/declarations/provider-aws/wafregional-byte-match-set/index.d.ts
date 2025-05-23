/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalByteMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#id WafregionalByteMatchSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#name WafregionalByteMatchSet#name}
    */
    readonly name: string;
    /**
    * byte_match_tuples block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#byte_match_tuples WafregionalByteMatchSet#byte_match_tuples}
    */
    readonly byteMatchTuples?: WafregionalByteMatchSetByteMatchTuples[] | cdktf.IResolvable;
}
export interface WafregionalByteMatchSetByteMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#data WafregionalByteMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#type WafregionalByteMatchSet#type}
    */
    readonly type: string;
}
export declare function wafregionalByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct?: WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference | WafregionalByteMatchSetByteMatchTuplesFieldToMatch): any;
export declare function wafregionalByteMatchSetByteMatchTuplesFieldToMatchToHclTerraform(struct?: WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference | WafregionalByteMatchSetByteMatchTuplesFieldToMatch): any;
export declare class WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalByteMatchSetByteMatchTuplesFieldToMatch | undefined;
    set internalValue(value: WafregionalByteMatchSetByteMatchTuplesFieldToMatch | undefined);
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
export interface WafregionalByteMatchSetByteMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#positional_constraint WafregionalByteMatchSet#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#target_string WafregionalByteMatchSet#target_string}
    */
    readonly targetString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#text_transformation WafregionalByteMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#field_to_match WafregionalByteMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalByteMatchSetByteMatchTuplesFieldToMatch;
}
export declare function wafregionalByteMatchSetByteMatchTuplesToTerraform(struct?: WafregionalByteMatchSetByteMatchTuples | cdktf.IResolvable): any;
export declare function wafregionalByteMatchSetByteMatchTuplesToHclTerraform(struct?: WafregionalByteMatchSetByteMatchTuples | cdktf.IResolvable): any;
export declare class WafregionalByteMatchSetByteMatchTuplesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafregionalByteMatchSetByteMatchTuples | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalByteMatchSetByteMatchTuples | cdktf.IResolvable | undefined);
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
    get fieldToMatch(): WafregionalByteMatchSetByteMatchTuplesFieldToMatchOutputReference;
    putFieldToMatch(value: WafregionalByteMatchSetByteMatchTuplesFieldToMatch): void;
    get fieldToMatchInput(): WafregionalByteMatchSetByteMatchTuplesFieldToMatch | undefined;
}
export declare class WafregionalByteMatchSetByteMatchTuplesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafregionalByteMatchSetByteMatchTuples[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafregionalByteMatchSetByteMatchTuplesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set aws_wafregional_byte_match_set}
*/
export declare class WafregionalByteMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafregional_byte_match_set";
    /**
    * Generates CDKTF code for importing a WafregionalByteMatchSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafregionalByteMatchSet to import
    * @param importFromId The id of the existing WafregionalByteMatchSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafregionalByteMatchSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_byte_match_set aws_wafregional_byte_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalByteMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalByteMatchSetConfig);
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
    get byteMatchTuples(): WafregionalByteMatchSetByteMatchTuplesList;
    putByteMatchTuples(value: WafregionalByteMatchSetByteMatchTuples[] | cdktf.IResolvable): void;
    resetByteMatchTuples(): void;
    get byteMatchTuplesInput(): cdktf.IResolvable | WafregionalByteMatchSetByteMatchTuples[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
