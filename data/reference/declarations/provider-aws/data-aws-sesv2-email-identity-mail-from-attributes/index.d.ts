/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSesv2EmailIdentityMailFromAttributesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#email_identity DataAwsSesv2EmailIdentityMailFromAttributes#email_identity}
    */
    readonly emailIdentity: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#id DataAwsSesv2EmailIdentityMailFromAttributes#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes}
*/
export declare class DataAwsSesv2EmailIdentityMailFromAttributes extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_sesv2_email_identity_mail_from_attributes";
    /**
    * Generates CDKTF code for importing a DataAwsSesv2EmailIdentityMailFromAttributes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSesv2EmailIdentityMailFromAttributes to import
    * @param importFromId The id of the existing DataAwsSesv2EmailIdentityMailFromAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity_mail_from_attributes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSesv2EmailIdentityMailFromAttributes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSesv2EmailIdentityMailFromAttributesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSesv2EmailIdentityMailFromAttributesConfig);
    get behaviorOnMxFailure(): string;
    private _emailIdentity?;
    get emailIdentity(): string;
    set emailIdentity(value: string);
    get emailIdentityInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get mailFromDomain(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
