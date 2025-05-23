/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsPricingProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/pricing_product#id DataAwsPricingProduct#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/pricing_product#service_code DataAwsPricingProduct#service_code}
    */
    readonly serviceCode: string;
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/pricing_product#filters DataAwsPricingProduct#filters}
    */
    readonly filters: DataAwsPricingProductFilters[] | cdktf.IResolvable;
}
export interface DataAwsPricingProductFilters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/pricing_product#field DataAwsPricingProduct#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/pricing_product#value DataAwsPricingProduct#value}
    */
    readonly value: string;
}
export declare function dataAwsPricingProductFiltersToTerraform(struct?: DataAwsPricingProductFilters | cdktf.IResolvable): any;
export declare function dataAwsPricingProductFiltersToHclTerraform(struct?: DataAwsPricingProductFilters | cdktf.IResolvable): any;
export declare class DataAwsPricingProductFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsPricingProductFilters | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsPricingProductFilters | cdktf.IResolvable | undefined);
    private _field?;
    get field(): string;
    set field(value: string);
    get fieldInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class DataAwsPricingProductFiltersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsPricingProductFilters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsPricingProductFiltersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/pricing_product aws_pricing_product}
*/
export declare class DataAwsPricingProduct extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_pricing_product";
    /**
    * Generates CDKTF code for importing a DataAwsPricingProduct resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsPricingProduct to import
    * @param importFromId The id of the existing DataAwsPricingProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/pricing_product#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsPricingProduct to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/pricing_product aws_pricing_product} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPricingProductConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsPricingProductConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get result(): string;
    private _serviceCode?;
    get serviceCode(): string;
    set serviceCode(value: string);
    get serviceCodeInput(): string | undefined;
    private _filters;
    get filters(): DataAwsPricingProductFiltersList;
    putFilters(value: DataAwsPricingProductFilters[] | cdktf.IResolvable): void;
    get filtersInput(): cdktf.IResolvable | DataAwsPricingProductFilters[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
