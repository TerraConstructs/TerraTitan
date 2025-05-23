/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpnGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#amazon_side_asn DataAwsVpnGateway#amazon_side_asn}
    */
    readonly amazonSideAsn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#attached_vpc_id DataAwsVpnGateway#attached_vpc_id}
    */
    readonly attachedVpcId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#availability_zone DataAwsVpnGateway#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#id DataAwsVpnGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#state DataAwsVpnGateway#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#tags DataAwsVpnGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#filter DataAwsVpnGateway#filter}
    */
    readonly filter?: DataAwsVpnGatewayFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#timeouts DataAwsVpnGateway#timeouts}
    */
    readonly timeouts?: DataAwsVpnGatewayTimeouts;
}
export interface DataAwsVpnGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#name DataAwsVpnGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#values DataAwsVpnGateway#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpnGatewayFilterToTerraform(struct?: DataAwsVpnGatewayFilter | cdktf.IResolvable): any;
export declare function dataAwsVpnGatewayFilterToHclTerraform(struct?: DataAwsVpnGatewayFilter | cdktf.IResolvable): any;
export declare class DataAwsVpnGatewayFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpnGatewayFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpnGatewayFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpnGatewayFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpnGatewayFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpnGatewayFilterOutputReference;
}
export interface DataAwsVpnGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#read DataAwsVpnGateway#read}
    */
    readonly read?: string;
}
export declare function dataAwsVpnGatewayTimeoutsToTerraform(struct?: DataAwsVpnGatewayTimeouts | cdktf.IResolvable): any;
export declare function dataAwsVpnGatewayTimeoutsToHclTerraform(struct?: DataAwsVpnGatewayTimeouts | cdktf.IResolvable): any;
export declare class DataAwsVpnGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsVpnGatewayTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpnGatewayTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway aws_vpn_gateway}
*/
export declare class DataAwsVpnGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpn_gateway";
    /**
    * Generates CDKTF code for importing a DataAwsVpnGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpnGateway to import
    * @param importFromId The id of the existing DataAwsVpnGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpnGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpn_gateway aws_vpn_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpnGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpnGatewayConfig);
    private _amazonSideAsn?;
    get amazonSideAsn(): string;
    set amazonSideAsn(value: string);
    resetAmazonSideAsn(): void;
    get amazonSideAsnInput(): string | undefined;
    get arn(): string;
    private _attachedVpcId?;
    get attachedVpcId(): string;
    set attachedVpcId(value: string);
    resetAttachedVpcId(): void;
    get attachedVpcIdInput(): string | undefined;
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
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    get filter(): DataAwsVpnGatewayFilterList;
    putFilter(value: DataAwsVpnGatewayFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpnGatewayFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsVpnGatewayTimeoutsOutputReference;
    putTimeouts(value: DataAwsVpnGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsVpnGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
