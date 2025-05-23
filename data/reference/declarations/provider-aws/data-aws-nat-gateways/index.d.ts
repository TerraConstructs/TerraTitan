/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsNatGatewaysConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways#id DataAwsNatGateways#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways#tags DataAwsNatGateways#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways#vpc_id DataAwsNatGateways#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways#filter DataAwsNatGateways#filter}
    */
    readonly filter?: DataAwsNatGatewaysFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways#timeouts DataAwsNatGateways#timeouts}
    */
    readonly timeouts?: DataAwsNatGatewaysTimeouts;
}
export interface DataAwsNatGatewaysFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways#name DataAwsNatGateways#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways#values DataAwsNatGateways#values}
    */
    readonly values: string[];
}
export declare function dataAwsNatGatewaysFilterToTerraform(struct?: DataAwsNatGatewaysFilter | cdktf.IResolvable): any;
export declare function dataAwsNatGatewaysFilterToHclTerraform(struct?: DataAwsNatGatewaysFilter | cdktf.IResolvable): any;
export declare class DataAwsNatGatewaysFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNatGatewaysFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNatGatewaysFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsNatGatewaysFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNatGatewaysFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNatGatewaysFilterOutputReference;
}
export interface DataAwsNatGatewaysTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways#read DataAwsNatGateways#read}
    */
    readonly read?: string;
}
export declare function dataAwsNatGatewaysTimeoutsToTerraform(struct?: DataAwsNatGatewaysTimeouts | cdktf.IResolvable): any;
export declare function dataAwsNatGatewaysTimeoutsToHclTerraform(struct?: DataAwsNatGatewaysTimeouts | cdktf.IResolvable): any;
export declare class DataAwsNatGatewaysTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsNatGatewaysTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNatGatewaysTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways aws_nat_gateways}
*/
export declare class DataAwsNatGateways extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_nat_gateways";
    /**
    * Generates CDKTF code for importing a DataAwsNatGateways resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsNatGateways to import
    * @param importFromId The id of the existing DataAwsNatGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsNatGateways to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/nat_gateways aws_nat_gateways} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNatGatewaysConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsNatGatewaysConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsNatGatewaysFilterList;
    putFilter(value: DataAwsNatGatewaysFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsNatGatewaysFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsNatGatewaysTimeoutsOutputReference;
    putTimeouts(value: DataAwsNatGatewaysTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsNatGatewaysTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
