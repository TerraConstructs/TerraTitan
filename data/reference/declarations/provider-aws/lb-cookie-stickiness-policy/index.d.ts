/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbCookieStickinessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_cookie_stickiness_policy#cookie_expiration_period LbCookieStickinessPolicy#cookie_expiration_period}
    */
    readonly cookieExpirationPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_cookie_stickiness_policy#id LbCookieStickinessPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_cookie_stickiness_policy#lb_port LbCookieStickinessPolicy#lb_port}
    */
    readonly lbPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_cookie_stickiness_policy#load_balancer LbCookieStickinessPolicy#load_balancer}
    */
    readonly loadBalancer: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_cookie_stickiness_policy#name LbCookieStickinessPolicy#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_cookie_stickiness_policy aws_lb_cookie_stickiness_policy}
*/
export declare class LbCookieStickinessPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lb_cookie_stickiness_policy";
    /**
    * Generates CDKTF code for importing a LbCookieStickinessPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LbCookieStickinessPolicy to import
    * @param importFromId The id of the existing LbCookieStickinessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_cookie_stickiness_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LbCookieStickinessPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_cookie_stickiness_policy aws_lb_cookie_stickiness_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbCookieStickinessPolicyConfig
    */
    constructor(scope: Construct, id: string, config: LbCookieStickinessPolicyConfig);
    private _cookieExpirationPeriod?;
    get cookieExpirationPeriod(): number;
    set cookieExpirationPeriod(value: number);
    resetCookieExpirationPeriod(): void;
    get cookieExpirationPeriodInput(): number | undefined;
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
