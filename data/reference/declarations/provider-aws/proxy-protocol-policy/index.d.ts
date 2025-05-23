/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProxyProtocolPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/proxy_protocol_policy#id ProxyProtocolPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/proxy_protocol_policy#instance_ports ProxyProtocolPolicy#instance_ports}
    */
    readonly instancePorts: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/proxy_protocol_policy#load_balancer ProxyProtocolPolicy#load_balancer}
    */
    readonly loadBalancer: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/proxy_protocol_policy aws_proxy_protocol_policy}
*/
export declare class ProxyProtocolPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_proxy_protocol_policy";
    /**
    * Generates CDKTF code for importing a ProxyProtocolPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProxyProtocolPolicy to import
    * @param importFromId The id of the existing ProxyProtocolPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/proxy_protocol_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProxyProtocolPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/proxy_protocol_policy aws_proxy_protocol_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProxyProtocolPolicyConfig
    */
    constructor(scope: Construct, id: string, config: ProxyProtocolPolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instancePorts?;
    get instancePorts(): string[];
    set instancePorts(value: string[]);
    get instancePortsInput(): string[] | undefined;
    private _loadBalancer?;
    get loadBalancer(): string;
    set loadBalancer(value: string);
    get loadBalancerInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
