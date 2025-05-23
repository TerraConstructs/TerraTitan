/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayDxGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#dx_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#dx_gateway_id}
    */
    readonly dxGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#id DataAwsEc2TransitGatewayDxGatewayAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#tags DataAwsEc2TransitGatewayDxGatewayAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#transit_gateway_id DataAwsEc2TransitGatewayDxGatewayAttachment#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#filter DataAwsEc2TransitGatewayDxGatewayAttachment#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#timeouts DataAwsEc2TransitGatewayDxGatewayAttachment#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts;
}
export interface DataAwsEc2TransitGatewayDxGatewayAttachmentFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#name DataAwsEc2TransitGatewayDxGatewayAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#values DataAwsEc2TransitGatewayDxGatewayAttachment#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayDxGatewayAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayDxGatewayAttachmentFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayDxGatewayAttachmentFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayDxGatewayAttachmentFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#read DataAwsEc2TransitGatewayDxGatewayAttachment#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment aws_ec2_transit_gateway_dx_gateway_attachment}
*/
export declare class DataAwsEc2TransitGatewayDxGatewayAttachment extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_dx_gateway_attachment";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayDxGatewayAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayDxGatewayAttachment to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayDxGatewayAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayDxGatewayAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment aws_ec2_transit_gateway_dx_gateway_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayDxGatewayAttachmentConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayDxGatewayAttachmentConfig);
    get arn(): string;
    private _dxGatewayId?;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    resetDxGatewayId(): void;
    get dxGatewayIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsEc2TransitGatewayDxGatewayAttachmentFilterList;
    putFilter(value: DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayDxGatewayAttachmentFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayDxGatewayAttachmentTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayDxGatewayAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
