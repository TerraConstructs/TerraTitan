/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailLbCertificateAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_certificate_attachment#certificate_name LightsailLbCertificateAttachment#certificate_name}
    */
    readonly certificateName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_certificate_attachment#id LightsailLbCertificateAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_certificate_attachment#lb_name LightsailLbCertificateAttachment#lb_name}
    */
    readonly lbName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_certificate_attachment aws_lightsail_lb_certificate_attachment}
*/
export declare class LightsailLbCertificateAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_lb_certificate_attachment";
    /**
    * Generates CDKTF code for importing a LightsailLbCertificateAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailLbCertificateAttachment to import
    * @param importFromId The id of the existing LightsailLbCertificateAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_certificate_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailLbCertificateAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_lb_certificate_attachment aws_lightsail_lb_certificate_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailLbCertificateAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: LightsailLbCertificateAttachmentConfig);
    private _certificateName?;
    get certificateName(): string;
    set certificateName(value: string);
    get certificateNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
