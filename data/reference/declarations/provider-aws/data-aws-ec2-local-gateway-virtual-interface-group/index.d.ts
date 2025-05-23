/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#id DataAwsEc2LocalGatewayVirtualInterfaceGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#local_gateway_id DataAwsEc2LocalGatewayVirtualInterfaceGroup#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#tags DataAwsEc2LocalGatewayVirtualInterfaceGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#filter DataAwsEc2LocalGatewayVirtualInterfaceGroup#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#timeouts DataAwsEc2LocalGatewayVirtualInterfaceGroup#timeouts}
    */
    readonly timeouts?: DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts;
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#name DataAwsEc2LocalGatewayVirtualInterfaceGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#values DataAwsEc2LocalGatewayVirtualInterfaceGroup#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2LocalGatewayVirtualInterfaceGroupFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2LocalGatewayVirtualInterfaceGroupFilterToHclTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterOutputReference;
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#read DataAwsEc2LocalGatewayVirtualInterfaceGroup#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsToHclTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group aws_ec2_local_gateway_virtual_interface_group}
*/
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_local_gateway_virtual_interface_group";
    /**
    * Generates CDKTF code for importing a DataAwsEc2LocalGatewayVirtualInterfaceGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2LocalGatewayVirtualInterfaceGroup to import
    * @param importFromId The id of the existing DataAwsEc2LocalGatewayVirtualInterfaceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2LocalGatewayVirtualInterfaceGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway_virtual_interface_group aws_ec2_local_gateway_virtual_interface_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _localGatewayId?;
    get localGatewayId(): string;
    set localGatewayId(value: string);
    resetLocalGatewayId(): void;
    get localGatewayIdInput(): string | undefined;
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
    get filter(): DataAwsEc2LocalGatewayVirtualInterfaceGroupFilterList;
    putFilter(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2LocalGatewayVirtualInterfaceGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
