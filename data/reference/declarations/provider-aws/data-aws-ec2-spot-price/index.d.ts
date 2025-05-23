/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2SpotPriceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price#availability_zone DataAwsEc2SpotPrice#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price#id DataAwsEc2SpotPrice#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price#instance_type DataAwsEc2SpotPrice#instance_type}
    */
    readonly instanceType?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price#filter DataAwsEc2SpotPrice#filter}
    */
    readonly filter?: DataAwsEc2SpotPriceFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price#timeouts DataAwsEc2SpotPrice#timeouts}
    */
    readonly timeouts?: DataAwsEc2SpotPriceTimeouts;
}
export interface DataAwsEc2SpotPriceFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price#name DataAwsEc2SpotPrice#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price#values DataAwsEc2SpotPrice#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2SpotPriceFilterToTerraform(struct?: DataAwsEc2SpotPriceFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2SpotPriceFilterToHclTerraform(struct?: DataAwsEc2SpotPriceFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2SpotPriceFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2SpotPriceFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2SpotPriceFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2SpotPriceFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2SpotPriceFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2SpotPriceFilterOutputReference;
}
export interface DataAwsEc2SpotPriceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price#read DataAwsEc2SpotPrice#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2SpotPriceTimeoutsToTerraform(struct?: DataAwsEc2SpotPriceTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2SpotPriceTimeoutsToHclTerraform(struct?: DataAwsEc2SpotPriceTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2SpotPriceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2SpotPriceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2SpotPriceTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price aws_ec2_spot_price}
*/
export declare class DataAwsEc2SpotPrice extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_spot_price";
    /**
    * Generates CDKTF code for importing a DataAwsEc2SpotPrice resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2SpotPrice to import
    * @param importFromId The id of the existing DataAwsEc2SpotPrice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2SpotPrice to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_spot_price aws_ec2_spot_price} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2SpotPriceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2SpotPriceConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    get spotPrice(): string;
    get spotPriceTimestamp(): string;
    private _filter;
    get filter(): DataAwsEc2SpotPriceFilterList;
    putFilter(value: DataAwsEc2SpotPriceFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2SpotPriceFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2SpotPriceTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2SpotPriceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2SpotPriceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
