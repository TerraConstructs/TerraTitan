/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbListenerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_certificate#certificate_arn LbListenerCertificate#certificate_arn}
    */
    readonly certificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_certificate#id LbListenerCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_certificate#listener_arn LbListenerCertificate#listener_arn}
    */
    readonly listenerArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_certificate aws_lb_listener_certificate}
*/
export declare class LbListenerCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lb_listener_certificate";
    /**
    * Generates CDKTF code for importing a LbListenerCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LbListenerCertificate to import
    * @param importFromId The id of the existing LbListenerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LbListenerCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_certificate aws_lb_listener_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerCertificateConfig
    */
    constructor(scope: Construct, id: string, config: LbListenerCertificateConfig);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _listenerArn?;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
