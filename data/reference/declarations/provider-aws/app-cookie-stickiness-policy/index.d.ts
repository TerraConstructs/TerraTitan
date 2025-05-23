/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppCookieStickinessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/app_cookie_stickiness_policy#cookie_name AppCookieStickinessPolicy#cookie_name}
    */
    readonly cookieName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/app_cookie_stickiness_policy#id AppCookieStickinessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/app_cookie_stickiness_policy#lb_port AppCookieStickinessPolicy#lb_port}
    */
    readonly lbPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/app_cookie_stickiness_policy#load_balancer AppCookieStickinessPolicy#load_balancer}
    */
    readonly loadBalancer: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/app_cookie_stickiness_policy#name AppCookieStickinessPolicy#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/app_cookie_stickiness_policy aws_app_cookie_stickiness_policy}
*/
export declare class AppCookieStickinessPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_app_cookie_stickiness_policy";
    /**
    * Generates CDKTF code for importing a AppCookieStickinessPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppCookieStickinessPolicy to import
    * @param importFromId The id of the existing AppCookieStickinessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/app_cookie_stickiness_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppCookieStickinessPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/app_cookie_stickiness_policy aws_app_cookie_stickiness_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppCookieStickinessPolicyConfig
    */
    constructor(scope: Construct, id: string, config: AppCookieStickinessPolicyConfig);
    private _cookieName?;
    get cookieName(): string;
    set cookieName(value: string);
    get cookieNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _lbPort?;
    get lbPort(): number;
    set lbPort(value: number);
    get lbPortInput(): number | undefined;
    private _loadBalancer?;
    get loadBalancer(): string;
    set loadBalancer(value: string);
    get loadBalancerInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
