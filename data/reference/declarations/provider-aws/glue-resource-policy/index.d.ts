/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_resource_policy#enable_hybrid GlueResourcePolicy#enable_hybrid}
    */
    readonly enableHybrid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_resource_policy#id GlueResourcePolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_resource_policy#policy GlueResourcePolicy#policy}
    */
    readonly policy: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_resource_policy aws_glue_resource_policy}
*/
export declare class GlueResourcePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_resource_policy";
    /**
    * Generates CDKTF code for importing a GlueResourcePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueResourcePolicy to import
    * @param importFromId The id of the existing GlueResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueResourcePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_resource_policy aws_glue_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueResourcePolicyConfig
    */
    constructor(scope: Construct, id: string, config: GlueResourcePolicyConfig);
    private _enableHybrid?;
    get enableHybrid(): string;
    set enableHybrid(value: string);
    resetEnableHybrid(): void;
    get enableHybridInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
