/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayConnectPeerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer#id DataAwsEc2TransitGatewayConnectPeer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer#tags DataAwsEc2TransitGatewayConnectPeer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer#transit_gateway_connect_peer_id DataAwsEc2TransitGatewayConnectPeer#transit_gateway_connect_peer_id}
    */
    readonly transitGatewayConnectPeerId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer#filter DataAwsEc2TransitGatewayConnectPeer#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayConnectPeerFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer#timeouts DataAwsEc2TransitGatewayConnectPeer#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayConnectPeerTimeouts;
}
export interface DataAwsEc2TransitGatewayConnectPeerFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer#name DataAwsEc2TransitGatewayConnectPeer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer#values DataAwsEc2TransitGatewayConnectPeer#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayConnectPeerFilterToTerraform(struct?: DataAwsEc2TransitGatewayConnectPeerFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayConnectPeerFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayConnectPeerFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayConnectPeerFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayConnectPeerFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayConnectPeerFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayConnectPeerFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayConnectPeerFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayConnectPeerFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayConnectPeerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer#read DataAwsEc2TransitGatewayConnectPeer#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayConnectPeerTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayConnectPeerTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer}
*/
export declare class DataAwsEc2TransitGatewayConnectPeer extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_connect_peer";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayConnectPeer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayConnectPeer to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayConnectPeer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayConnectPeerConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayConnectPeerConfig);
    get arn(): string;
    get bgpAsn(): string;
    get bgpPeerAddress(): string;
    get bgpTransitGatewayAddresses(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get insideCidrBlocks(): string[];
    get peerAddress(): string;
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
    get transitGatewayAddress(): string;
    get transitGatewayAttachmentId(): string;
    private _transitGatewayConnectPeerId?;
    get transitGatewayConnectPeerId(): string;
    set transitGatewayConnectPeerId(value: string);
    resetTransitGatewayConnectPeerId(): void;
    get transitGatewayConnectPeerIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsEc2TransitGatewayConnectPeerFilterList;
    putFilter(value: DataAwsEc2TransitGatewayConnectPeerFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayConnectPeerFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayConnectPeerTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayConnectPeerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayConnectPeerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
