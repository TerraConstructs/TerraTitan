/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2InstanceTypeOfferingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering#id DataAwsEc2InstanceTypeOffering#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering#location_type DataAwsEc2InstanceTypeOffering#location_type}
    */
    readonly locationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}
    */
    readonly preferredInstanceTypes?: string[];
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering#filter DataAwsEc2InstanceTypeOffering#filter}
    */
    readonly filter?: DataAwsEc2InstanceTypeOfferingFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering#timeouts DataAwsEc2InstanceTypeOffering#timeouts}
    */
    readonly timeouts?: DataAwsEc2InstanceTypeOfferingTimeouts;
}
export interface DataAwsEc2InstanceTypeOfferingFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering#name DataAwsEc2InstanceTypeOffering#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering#values DataAwsEc2InstanceTypeOffering#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2InstanceTypeOfferingFilterToTerraform(struct?: DataAwsEc2InstanceTypeOfferingFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2InstanceTypeOfferingFilterToHclTerraform(struct?: DataAwsEc2InstanceTypeOfferingFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2InstanceTypeOfferingFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeOfferingFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeOfferingFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2InstanceTypeOfferingFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2InstanceTypeOfferingFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeOfferingFilterOutputReference;
}
export interface DataAwsEc2InstanceTypeOfferingTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering#read DataAwsEc2InstanceTypeOffering#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2InstanceTypeOfferingTimeoutsToTerraform(struct?: DataAwsEc2InstanceTypeOfferingTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2InstanceTypeOfferingTimeoutsToHclTerraform(struct?: DataAwsEc2InstanceTypeOfferingTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2InstanceTypeOfferingTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeOfferingTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering aws_ec2_instance_type_offering}
*/
export declare class DataAwsEc2InstanceTypeOffering extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_instance_type_offering";
    /**
    * Generates CDKTF code for importing a DataAwsEc2InstanceTypeOffering resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2InstanceTypeOffering to import
    * @param importFromId The id of the existing DataAwsEc2InstanceTypeOffering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2InstanceTypeOffering to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type_offering aws_ec2_instance_type_offering} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypeOfferingConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2InstanceTypeOfferingConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get instanceType(): string;
    private _locationType?;
    get locationType(): string;
    set locationType(value: string);
    resetLocationType(): void;
    get locationTypeInput(): string | undefined;
    private _preferredInstanceTypes?;
    get preferredInstanceTypes(): string[];
    set preferredInstanceTypes(value: string[]);
    resetPreferredInstanceTypes(): void;
    get preferredInstanceTypesInput(): string[] | undefined;
    private _filter;
    get filter(): DataAwsEc2InstanceTypeOfferingFilterList;
    putFilter(value: DataAwsEc2InstanceTypeOfferingFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2InstanceTypeOfferingFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2InstanceTypeOfferingTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2InstanceTypeOfferingTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
