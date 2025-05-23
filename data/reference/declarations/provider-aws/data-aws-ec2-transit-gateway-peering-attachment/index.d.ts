/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment#id DataAwsEc2TransitGatewayPeeringAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment#tags DataAwsEc2TransitGatewayPeeringAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment#filter DataAwsEc2TransitGatewayPeeringAttachment#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayPeeringAttachmentFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment#timeouts DataAwsEc2TransitGatewayPeeringAttachment#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayPeeringAttachmentTimeouts;
}
export interface DataAwsEc2TransitGatewayPeeringAttachmentFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment#name DataAwsEc2TransitGatewayPeeringAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment#values DataAwsEc2TransitGatewayPeeringAttachment#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayPeeringAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayPeeringAttachmentFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayPeeringAttachmentFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayPeeringAttachmentFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayPeeringAttachmentFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayPeeringAttachmentFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayPeeringAttachmentFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayPeeringAttachmentFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayPeeringAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment#read DataAwsEc2TransitGatewayPeeringAttachment#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayPeeringAttachmentTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayPeeringAttachmentTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayPeeringAttachmentTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayPeeringAttachmentTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayPeeringAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayPeeringAttachmentTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment aws_ec2_transit_gateway_peering_attachment}
*/
export declare class DataAwsEc2TransitGatewayPeeringAttachment extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_peering_attachment";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayPeeringAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayPeeringAttachment to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayPeeringAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayPeeringAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_peering_attachment aws_ec2_transit_gateway_peering_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayPeeringAttachmentConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayPeeringAttachmentConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get peerAccountId(): string;
    get peerRegion(): string;
    get peerTransitGatewayId(): string;
    get state(): string;
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
    get transitGatewayId(): string;
    private _filter;
    get filter(): DataAwsEc2TransitGatewayPeeringAttachmentFilterList;
    putFilter(value: DataAwsEc2TransitGatewayPeeringAttachmentFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayPeeringAttachmentFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayPeeringAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayPeeringAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
