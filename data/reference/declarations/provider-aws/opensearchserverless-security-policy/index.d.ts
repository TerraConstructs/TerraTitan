/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchserverlessSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_policy#description OpensearchserverlessSecurityPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_policy#name OpensearchserverlessSecurityPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_policy#policy OpensearchserverlessSecurityPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_policy#type OpensearchserverlessSecurityPolicy#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_policy aws_opensearchserverless_security_policy}
*/
export declare class OpensearchserverlessSecurityPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearchserverless_security_policy";
    /**
    * Generates CDKTF code for importing a OpensearchserverlessSecurityPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchserverlessSecurityPolicy to import
    * @param importFromId The id of the existing OpensearchserverlessSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchserverlessSecurityPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_policy aws_opensearchserverless_security_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchserverlessSecurityPolicyConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchserverlessSecurityPolicyConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
    get policyVersion(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
