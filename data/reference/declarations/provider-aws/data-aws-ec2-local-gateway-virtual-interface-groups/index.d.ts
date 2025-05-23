/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups#id DataAwsEc2LocalGatewayVirtualInterfaceGroups#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups#filter DataAwsEc2LocalGatewayVirtualInterfaceGroups#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroups#timeouts}
    */
    readonly timeouts?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts;
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups#name DataAwsEc2LocalGatewayVirtualInterfaceGroups#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups#values DataAwsEc2LocalGatewayVirtualInterfaceGroups#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterToHclTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterOutputReference;
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups#read DataAwsEc2LocalGatewayVirtualInterfaceGroups#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsToHclTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups aws_ec2_local_gateway_virtual_interface_groups}
*/
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_local_gateway_virtual_interface_groups";
    /**
    * Generates CDKTF code for importing a DataAwsEc2LocalGatewayVirtualInterfaceGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2LocalGatewayVirtualInterfaceGroups to import
    * @param importFromId The id of the existing DataAwsEc2LocalGatewayVirtualInterfaceGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2LocalGatewayVirtualInterfaceGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups aws_ec2_local_gateway_virtual_interface_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
    get localGatewayVirtualInterfaceIds(): string[];
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
    private _filter;
    get filter(): DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterList;
    putFilter(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceGroupsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
