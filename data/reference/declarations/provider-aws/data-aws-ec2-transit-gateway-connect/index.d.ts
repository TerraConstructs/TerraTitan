/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayConnectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}
    */
    readonly transitGatewayConnectId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect#filter DataAwsEc2TransitGatewayConnect#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayConnectFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect#timeouts DataAwsEc2TransitGatewayConnect#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayConnectTimeouts;
}
export interface DataAwsEc2TransitGatewayConnectFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect#name DataAwsEc2TransitGatewayConnect#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect#values DataAwsEc2TransitGatewayConnect#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayConnectFilterToTerraform(struct?: DataAwsEc2TransitGatewayConnectFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayConnectFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayConnectFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayConnectFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayConnectFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayConnectFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayConnectFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayConnectFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayConnectFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayConnectTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect#read DataAwsEc2TransitGatewayConnect#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayConnectTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayConnectTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayConnectTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayConnectTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayConnectTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayConnectTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayConnectTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect}
*/
export declare class DataAwsEc2TransitGatewayConnect extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_connect";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayConnect resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayConnect to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayConnect to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayConnectConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayConnectConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get protocol(): string;
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
    private _transitGatewayConnectId?;
    get transitGatewayConnectId(): string;
    set transitGatewayConnectId(value: string);
    resetTransitGatewayConnectId(): void;
    get transitGatewayConnectIdInput(): string | undefined;
    get transitGatewayId(): string;
    get transportAttachmentId(): string;
    private _filter;
    get filter(): DataAwsEc2TransitGatewayConnectFilterList;
    putFilter(value: DataAwsEc2TransitGatewayConnectFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayConnectFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayConnectTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayConnectTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayConnectTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
