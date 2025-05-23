/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailStaticIpAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_static_ip_attachment#id LightsailStaticIpAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_static_ip_attachment#instance_name LightsailStaticIpAttachment#instance_name}
    */
    readonly instanceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_static_ip_attachment#static_ip_name LightsailStaticIpAttachment#static_ip_name}
    */
    readonly staticIpName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_static_ip_attachment aws_lightsail_static_ip_attachment}
*/
export declare class LightsailStaticIpAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_static_ip_attachment";
    /**
    * Generates CDKTF code for importing a LightsailStaticIpAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailStaticIpAttachment to import
    * @param importFromId The id of the existing LightsailStaticIpAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_static_ip_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailStaticIpAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_static_ip_attachment aws_lightsail_static_ip_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailStaticIpAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: LightsailStaticIpAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceName?;
    get instanceName(): string;
    set instanceName(value: string);
    get instanceNameInput(): string | undefined;
    get ipAddress(): string;
    private _staticIpName?;
    get staticIpName(): string;
    set staticIpName(value: string);
    get staticIpNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
