/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesDomainMailFromConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_mail_from#behavior_on_mx_failure SesDomainMailFrom#behavior_on_mx_failure}
    */
    readonly behaviorOnMxFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_mail_from#domain SesDomainMailFrom#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_mail_from#id SesDomainMailFrom#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_mail_from#mail_from_domain SesDomainMailFrom#mail_from_domain}
    */
    readonly mailFromDomain: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_mail_from aws_ses_domain_mail_from}
*/
export declare class SesDomainMailFrom extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ses_domain_mail_from";
    /**
    * Generates CDKTF code for importing a SesDomainMailFrom resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SesDomainMailFrom to import
    * @param importFromId The id of the existing SesDomainMailFrom that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_mail_from#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SesDomainMailFrom to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_domain_mail_from aws_ses_domain_mail_from} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainMailFromConfig
    */
    constructor(scope: Construct, id: string, config: SesDomainMailFromConfig);
    private _behaviorOnMxFailure?;
    get behaviorOnMxFailure(): string;
    set behaviorOnMxFailure(value: string);
    resetBehaviorOnMxFailure(): void;
    get behaviorOnMxFailureInput(): string | undefined;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _mailFromDomain?;
    get mailFromDomain(): string;
    set mailFromDomain(value: string);
    get mailFromDomainInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
