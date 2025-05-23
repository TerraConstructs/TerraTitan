/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InternetGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internet_gateway_attachment#id InternetGatewayAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internet_gateway_attachment#internet_gateway_id InternetGatewayAttachment#internet_gateway_id}
    */
    readonly internetGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internet_gateway_attachment#vpc_id InternetGatewayAttachment#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internet_gateway_attachment#timeouts InternetGatewayAttachment#timeouts}
    */
    readonly timeouts?: InternetGatewayAttachmentTimeouts;
}
export interface InternetGatewayAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internet_gateway_attachment#create InternetGatewayAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internet_gateway_attachment#delete InternetGatewayAttachment#delete}
    */
    readonly delete?: string;
}
export declare function internetGatewayAttachmentTimeoutsToTerraform(struct?: InternetGatewayAttachmentTimeouts | cdktf.IResolvable): any;
export declare function internetGatewayAttachmentTimeoutsToHclTerraform(struct?: InternetGatewayAttachmentTimeouts | cdktf.IResolvable): any;
export declare class InternetGatewayAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InternetGatewayAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: InternetGatewayAttachmentTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internet_gateway_attachment aws_internet_gateway_attachment}
*/
export declare class InternetGatewayAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_internet_gateway_attachment";
    /**
    * Generates CDKTF code for importing a InternetGatewayAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the InternetGatewayAttachment to import
    * @param importFromId The id of the existing InternetGatewayAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internet_gateway_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the InternetGatewayAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internet_gateway_attachment aws_internet_gateway_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InternetGatewayAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: InternetGatewayAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _internetGatewayId?;
    get internetGatewayId(): string;
    set internetGatewayId(value: string);
    get internetGatewayIdInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): InternetGatewayAttachmentTimeoutsOutputReference;
    putTimeouts(value: InternetGatewayAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | InternetGatewayAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
