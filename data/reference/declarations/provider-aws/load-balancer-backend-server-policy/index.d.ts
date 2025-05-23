/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LoadBalancerBackendServerPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_backend_server_policy#id LoadBalancerBackendServerPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_backend_server_policy#instance_port LoadBalancerBackendServerPolicy#instance_port}
    */
    readonly instancePort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_backend_server_policy#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}
    */
    readonly loadBalancerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_backend_server_policy#policy_names LoadBalancerBackendServerPolicy#policy_names}
    */
    readonly policyNames?: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_backend_server_policy aws_load_balancer_backend_server_policy}
*/
export declare class LoadBalancerBackendServerPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_load_balancer_backend_server_policy";
    /**
    * Generates CDKTF code for importing a LoadBalancerBackendServerPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancerBackendServerPolicy to import
    * @param importFromId The id of the existing LoadBalancerBackendServerPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_backend_server_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancerBackendServerPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_backend_server_policy aws_load_balancer_backend_server_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerBackendServerPolicyConfig
    */
    constructor(scope: Construct, id: string, config: LoadBalancerBackendServerPolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instancePort?;
    get instancePort(): number;
    set instancePort(value: number);
    get instancePortInput(): number | undefined;
    private _loadBalancerName?;
    get loadBalancerName(): string;
    set loadBalancerName(value: string);
    get loadBalancerNameInput(): string | undefined;
    private _policyNames?;
    get policyNames(): string[];
    set policyNames(value: string[]);
    resetPolicyNames(): void;
    get policyNamesInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
