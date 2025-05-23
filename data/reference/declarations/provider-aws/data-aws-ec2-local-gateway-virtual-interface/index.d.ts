/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface#id DataAwsEc2LocalGatewayVirtualInterface#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface#tags DataAwsEc2LocalGatewayVirtualInterface#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface#filter DataAwsEc2LocalGatewayVirtualInterface#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface#timeouts DataAwsEc2LocalGatewayVirtualInterface#timeouts}
    */
    readonly timeouts?: DataAwsEc2LocalGatewayVirtualInterfaceTimeouts;
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface#name DataAwsEc2LocalGatewayVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface#values DataAwsEc2LocalGatewayVirtualInterface#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2LocalGatewayVirtualInterfaceFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2LocalGatewayVirtualInterfaceFilterToHclTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2LocalGatewayVirtualInterfaceFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2LocalGatewayVirtualInterfaceFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2LocalGatewayVirtualInterfaceFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference;
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface#read DataAwsEc2LocalGatewayVirtualInterface#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2LocalGatewayVirtualInterfaceTimeoutsToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2LocalGatewayVirtualInterfaceTimeoutsToHclTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2LocalGatewayVirtualInterfaceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2LocalGatewayVirtualInterfaceTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface aws_ec2_local_gateway_virtual_interface}
*/
export declare class DataAwsEc2LocalGatewayVirtualInterface extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_local_gateway_virtual_interface";
    /**
    * Generates CDKTF code for importing a DataAwsEc2LocalGatewayVirtualInterface resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2LocalGatewayVirtualInterface to import
    * @param importFromId The id of the existing DataAwsEc2LocalGatewayVirtualInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2LocalGatewayVirtualInterface to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface aws_ec2_local_gateway_virtual_interface} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayVirtualInterfaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayVirtualInterfaceConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get localAddress(): string;
    get localBgpAsn(): number;
    get localGatewayId(): string;
    get localGatewayVirtualInterfaceIds(): string[];
    get peerAddress(): string;
    get peerBgpAsn(): number;
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
    get vlan(): number;
    private _filter;
    get filter(): DataAwsEc2LocalGatewayVirtualInterfaceFilterList;
    putFilter(value: DataAwsEc2LocalGatewayVirtualInterfaceFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2LocalGatewayVirtualInterfaceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
