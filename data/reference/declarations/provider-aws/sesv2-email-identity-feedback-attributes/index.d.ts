/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2EmailIdentityFeedbackAttributesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}
    */
    readonly emailForwardingEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}
    */
    readonly emailIdentity: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_feedback_attributes aws_sesv2_email_identity_feedback_attributes}
*/
export declare class Sesv2EmailIdentityFeedbackAttributes extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_email_identity_feedback_attributes";
    /**
    * Generates CDKTF code for importing a Sesv2EmailIdentityFeedbackAttributes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2EmailIdentityFeedbackAttributes to import
    * @param importFromId The id of the existing Sesv2EmailIdentityFeedbackAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_feedback_attributes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2EmailIdentityFeedbackAttributes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_feedback_attributes aws_sesv2_email_identity_feedback_attributes} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2EmailIdentityFeedbackAttributesConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2EmailIdentityFeedbackAttributesConfig);
    private _emailForwardingEnabled?;
    get emailForwardingEnabled(): boolean | cdktf.IResolvable;
    set emailForwardingEnabled(value: boolean | cdktf.IResolvable);
    resetEmailForwardingEnabled(): void;
    get emailForwardingEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _emailIdentity?;
    get emailIdentity(): string;
    set emailIdentity(value: string);
    get emailIdentityInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
