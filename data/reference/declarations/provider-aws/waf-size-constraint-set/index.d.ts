/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafSizeConstraintSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#id WafSizeConstraintSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#name WafSizeConstraintSet#name}
    */
    readonly name: string;
    /**
    * size_constraints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#size_constraints WafSizeConstraintSet#size_constraints}
    */
    readonly sizeConstraints?: WafSizeConstraintSetSizeConstraints[] | cdktf.IResolvable;
}
export interface WafSizeConstraintSetSizeConstraintsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#data WafSizeConstraintSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#type WafSizeConstraintSet#type}
    */
    readonly type: string;
}
export declare function wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct?: WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference | WafSizeConstraintSetSizeConstraintsFieldToMatch): any;
export declare function wafSizeConstraintSetSizeConstraintsFieldToMatchToHclTerraform(struct?: WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference | WafSizeConstraintSetSizeConstraintsFieldToMatch): any;
export declare class WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafSizeConstraintSetSizeConstraintsFieldToMatch | undefined;
    set internalValue(value: WafSizeConstraintSetSizeConstraintsFieldToMatch | undefined);
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
export interface WafSizeConstraintSetSizeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#comparison_operator WafSizeConstraintSet#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#size WafSizeConstraintSet#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#text_transformation WafSizeConstraintSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#field_to_match WafSizeConstraintSet#field_to_match}
    */
    readonly fieldToMatch: WafSizeConstraintSetSizeConstraintsFieldToMatch;
}
export declare function wafSizeConstraintSetSizeConstraintsToTerraform(struct?: WafSizeConstraintSetSizeConstraints | cdktf.IResolvable): any;
export declare function wafSizeConstraintSetSizeConstraintsToHclTerraform(struct?: WafSizeConstraintSetSizeConstraints | cdktf.IResolvable): any;
export declare class WafSizeConstraintSetSizeConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafSizeConstraintSetSizeConstraints | cdktf.IResolvable | undefined;
    set internalValue(value: WafSizeConstraintSetSizeConstraints | cdktf.IResolvable | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _textTransformation?;
    get textTransformation(): string;
    set textTransformation(value: string);
    get textTransformationInput(): string | undefined;
    private _fieldToMatch;
    get fieldToMatch(): WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference;
    putFieldToMatch(value: WafSizeConstraintSetSizeConstraintsFieldToMatch): void;
    get fieldToMatchInput(): WafSizeConstraintSetSizeConstraintsFieldToMatch | undefined;
}
export declare class WafSizeConstraintSetSizeConstraintsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafSizeConstraintSetSizeConstraints[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafSizeConstraintSetSizeConstraintsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set aws_waf_size_constraint_set}
*/
export declare class WafSizeConstraintSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_waf_size_constraint_set";
    /**
    * Generates CDKTF code for importing a WafSizeConstraintSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafSizeConstraintSet to import
    * @param importFromId The id of the existing WafSizeConstraintSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafSizeConstraintSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_size_constraint_set aws_waf_size_constraint_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafSizeConstraintSetConfig
    */
    constructor(scope: Construct, id: string, config: WafSizeConstraintSetConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _sizeConstraints;
    get sizeConstraints(): WafSizeConstraintSetSizeConstraintsList;
    putSizeConstraints(value: WafSizeConstraintSetSizeConstraints[] | cdktf.IResolvable): void;
    resetSizeConstraints(): void;
    get sizeConstraintsInput(): cdktf.IResolvable | WafSizeConstraintSetSizeConstraints[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
