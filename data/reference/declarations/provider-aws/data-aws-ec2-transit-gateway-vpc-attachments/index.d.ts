/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayVpcAttachmentsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_vpc_attachments#id DataAwsEc2TransitGatewayVpcAttachments#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_vpc_attachments#filter DataAwsEc2TransitGatewayVpcAttachments#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayVpcAttachmentsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_vpc_attachments#timeouts DataAwsEc2TransitGatewayVpcAttachments#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts;
}
export interface DataAwsEc2TransitGatewayVpcAttachmentsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_vpc_attachments#name DataAwsEc2TransitGatewayVpcAttachments#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_vpc_attachments#values DataAwsEc2TransitGatewayVpcAttachments#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayVpcAttachmentsFilterToTerraform(struct?: DataAwsEc2TransitGatewayVpcAttachmentsFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayVpcAttachmentsFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayVpcAttachmentsFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayVpcAttachmentsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayVpcAttachmentsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayVpcAttachmentsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayVpcAttachmentsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayVpcAttachmentsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_vpc_attachments#read DataAwsEc2TransitGatewayVpcAttachments#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayVpcAttachmentsTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayVpcAttachmentsTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayVpcAttachmentsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_vpc_attachments aws_ec2_transit_gateway_vpc_attachments}
*/
export declare class DataAwsEc2TransitGatewayVpcAttachments extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_vpc_attachments";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayVpcAttachments resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayVpcAttachments to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayVpcAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_vpc_attachments#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayVpcAttachments to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_vpc_attachments aws_ec2_transit_gateway_vpc_attachments} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayVpcAttachmentsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayVpcAttachmentsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
    private _filter;
    get filter(): DataAwsEc2TransitGatewayVpcAttachmentsFilterList;
    putFilter(value: DataAwsEc2TransitGatewayVpcAttachmentsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayVpcAttachmentsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayVpcAttachmentsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayVpcAttachmentsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
