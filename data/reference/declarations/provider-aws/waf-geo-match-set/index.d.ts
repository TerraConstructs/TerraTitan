/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafGeoMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_geo_match_set#id WafGeoMatchSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_geo_match_set#name WafGeoMatchSet#name}
    */
    readonly name: string;
    /**
    * geo_match_constraint block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_geo_match_set#geo_match_constraint WafGeoMatchSet#geo_match_constraint}
    */
    readonly geoMatchConstraint?: WafGeoMatchSetGeoMatchConstraint[] | cdktf.IResolvable;
}
export interface WafGeoMatchSetGeoMatchConstraint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_geo_match_set#type WafGeoMatchSet#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_geo_match_set#value WafGeoMatchSet#value}
    */
    readonly value: string;
}
export declare function wafGeoMatchSetGeoMatchConstraintToTerraform(struct?: WafGeoMatchSetGeoMatchConstraint | cdktf.IResolvable): any;
export declare function wafGeoMatchSetGeoMatchConstraintToHclTerraform(struct?: WafGeoMatchSetGeoMatchConstraint | cdktf.IResolvable): any;
export declare class WafGeoMatchSetGeoMatchConstraintOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafGeoMatchSetGeoMatchConstraint | cdktf.IResolvable | undefined;
    set internalValue(value: WafGeoMatchSetGeoMatchConstraint | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class WafGeoMatchSetGeoMatchConstraintList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafGeoMatchSetGeoMatchConstraint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafGeoMatchSetGeoMatchConstraintOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_geo_match_set aws_waf_geo_match_set}
*/
export declare class WafGeoMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_waf_geo_match_set";
    /**
    * Generates CDKTF code for importing a WafGeoMatchSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafGeoMatchSet to import
    * @param importFromId The id of the existing WafGeoMatchSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_geo_match_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafGeoMatchSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_geo_match_set aws_waf_geo_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafGeoMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafGeoMatchSetConfig);
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
    private _geoMatchConstraint;
    get geoMatchConstraint(): WafGeoMatchSetGeoMatchConstraintList;
    putGeoMatchConstraint(value: WafGeoMatchSetGeoMatchConstraint[] | cdktf.IResolvable): void;
    resetGeoMatchConstraint(): void;
    get geoMatchConstraintInput(): cdktf.IResolvable | WafGeoMatchSetGeoMatchConstraint[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
