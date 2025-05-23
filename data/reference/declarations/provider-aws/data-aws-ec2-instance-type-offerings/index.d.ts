/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2InstanceTypeOfferingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}
    */
    readonly locationType?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings#filter DataAwsEc2InstanceTypeOfferings#filter}
    */
    readonly filter?: DataAwsEc2InstanceTypeOfferingsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings#timeouts DataAwsEc2InstanceTypeOfferings#timeouts}
    */
    readonly timeouts?: DataAwsEc2InstanceTypeOfferingsTimeouts;
}
export interface DataAwsEc2InstanceTypeOfferingsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings#name DataAwsEc2InstanceTypeOfferings#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings#values DataAwsEc2InstanceTypeOfferings#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2InstanceTypeOfferingsFilterToTerraform(struct?: DataAwsEc2InstanceTypeOfferingsFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2InstanceTypeOfferingsFilterToHclTerraform(struct?: DataAwsEc2InstanceTypeOfferingsFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2InstanceTypeOfferingsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeOfferingsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeOfferingsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2InstanceTypeOfferingsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2InstanceTypeOfferingsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeOfferingsFilterOutputReference;
}
export interface DataAwsEc2InstanceTypeOfferingsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings#read DataAwsEc2InstanceTypeOfferings#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2InstanceTypeOfferingsTimeoutsToTerraform(struct?: DataAwsEc2InstanceTypeOfferingsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2InstanceTypeOfferingsTimeoutsToHclTerraform(struct?: DataAwsEc2InstanceTypeOfferingsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2InstanceTypeOfferingsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeOfferingsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings aws_ec2_instance_type_offerings}
*/
export declare class DataAwsEc2InstanceTypeOfferings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_instance_type_offerings";
    /**
    * Generates CDKTF code for importing a DataAwsEc2InstanceTypeOfferings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2InstanceTypeOfferings to import
    * @param importFromId The id of the existing DataAwsEc2InstanceTypeOfferings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2InstanceTypeOfferings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offerings aws_ec2_instance_type_offerings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypeOfferingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2InstanceTypeOfferingsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get instanceTypes(): string[];
    private _locationType?;
    get locationType(): string;
    set locationType(value: string);
    resetLocationType(): void;
    get locationTypeInput(): string | undefined;
    get locationTypes(): string[];
    get locations(): string[];
    private _filter;
    get filter(): DataAwsEc2InstanceTypeOfferingsFilterList;
    putFilter(value: DataAwsEc2InstanceTypeOfferingsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2InstanceTypeOfferingsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2InstanceTypeOfferingsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2InstanceTypeOfferingsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
