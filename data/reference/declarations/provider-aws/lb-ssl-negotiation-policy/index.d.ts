/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbSslNegotiationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy#id LbSslNegotiationPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy#lb_port LbSslNegotiationPolicy#lb_port}
    */
    readonly lbPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy#load_balancer LbSslNegotiationPolicy#load_balancer}
    */
    readonly loadBalancer: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy#triggers LbSslNegotiationPolicy#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
    /**
    * attribute block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy#attribute LbSslNegotiationPolicy#attribute}
    */
    readonly attribute?: LbSslNegotiationPolicyAttribute[] | cdktf.IResolvable;
}
export interface LbSslNegotiationPolicyAttribute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy#name LbSslNegotiationPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy#value LbSslNegotiationPolicy#value}
    */
    readonly value: string;
}
export declare function lbSslNegotiationPolicyAttributeToTerraform(struct?: LbSslNegotiationPolicyAttribute | cdktf.IResolvable): any;
export declare function lbSslNegotiationPolicyAttributeToHclTerraform(struct?: LbSslNegotiationPolicyAttribute | cdktf.IResolvable): any;
export declare class LbSslNegotiationPolicyAttributeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LbSslNegotiationPolicyAttribute | cdktf.IResolvable | undefined;
    set internalValue(value: LbSslNegotiationPolicyAttribute | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class LbSslNegotiationPolicyAttributeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LbSslNegotiationPolicyAttribute[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LbSslNegotiationPolicyAttributeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy aws_lb_ssl_negotiation_policy}
*/
export declare class LbSslNegotiationPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lb_ssl_negotiation_policy";
    /**
    * Generates CDKTF code for importing a LbSslNegotiationPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LbSslNegotiationPolicy to import
    * @param importFromId The id of the existing LbSslNegotiationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LbSslNegotiationPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_ssl_negotiation_policy aws_lb_ssl_negotiation_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbSslNegotiationPolicyConfig
    */
    constructor(scope: Construct, id: string, config: LbSslNegotiationPolicyConfig);
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
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    };
    set triggers(value: {
        [key: string]: string;
    });
    resetTriggers(): void;
    get triggersInput(): {
        [key: string]: string;
    } | undefined;
    private _attribute;
    get attribute(): LbSslNegotiationPolicyAttributeList;
    putAttribute(value: LbSslNegotiationPolicyAttribute[] | cdktf.IResolvable): void;
    resetAttribute(): void;
    get attributeInput(): cdktf.IResolvable | LbSslNegotiationPolicyAttribute[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
