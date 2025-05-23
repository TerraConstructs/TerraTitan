/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2EmailIdentityMailFromAttributesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_mail_from_attributes#behavior_on_mx_failure Sesv2EmailIdentityMailFromAttributes#behavior_on_mx_failure}
    */
    readonly behaviorOnMxFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_mail_from_attributes#email_identity Sesv2EmailIdentityMailFromAttributes#email_identity}
    */
    readonly emailIdentity: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_mail_from_attributes#id Sesv2EmailIdentityMailFromAttributes#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_mail_from_attributes#mail_from_domain Sesv2EmailIdentityMailFromAttributes#mail_from_domain}
    */
    readonly mailFromDomain?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes}
*/
export declare class Sesv2EmailIdentityMailFromAttributes extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_email_identity_mail_from_attributes";
    /**
    * Generates CDKTF code for importing a Sesv2EmailIdentityMailFromAttributes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2EmailIdentityMailFromAttributes to import
    * @param importFromId The id of the existing Sesv2EmailIdentityMailFromAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_mail_from_attributes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2EmailIdentityMailFromAttributes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2EmailIdentityMailFromAttributesConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2EmailIdentityMailFromAttributesConfig);
    private _behaviorOnMxFailure?;
    get behaviorOnMxFailure(): string;
    set behaviorOnMxFailure(value: string);
    resetBehaviorOnMxFailure(): void;
    get behaviorOnMxFailureInput(): string | undefined;
    private _emailIdentity?;
    get emailIdentity(): string;
    set emailIdentity(value: string);
    get emailIdentityInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _mailFromDomain?;
    get mailFromDomain(): string;
    set mailFromDomain(value: string);
    resetMailFromDomain(): void;
    get mailFromDomainInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
