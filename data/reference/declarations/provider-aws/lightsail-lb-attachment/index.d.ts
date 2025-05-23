/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailLbAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_attachment#id LightsailLbAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_attachment#instance_name LightsailLbAttachment#instance_name}
    */
    readonly instanceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_attachment#lb_name LightsailLbAttachment#lb_name}
    */
    readonly lbName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_attachment aws_lightsail_lb_attachment}
*/
export declare class LightsailLbAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_lb_attachment";
    /**
    * Generates CDKTF code for importing a LightsailLbAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailLbAttachment to import
    * @param importFromId The id of the existing LightsailLbAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailLbAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_attachment aws_lightsail_lb_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailLbAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: LightsailLbAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceName?;
    get instanceName(): string;
    set instanceName(value: string);
    get instanceNameInput(): string | undefined;
    private _lbName?;
    get lbName(): string;
    set lbName(value: string);
    get lbNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
