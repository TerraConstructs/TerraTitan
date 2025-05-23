/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlAccessGrantsInstanceResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance_resource_policy#account_id S3ControlAccessGrantsInstanceResourcePolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance_resource_policy#policy S3ControlAccessGrantsInstanceResourcePolicy#policy}
    */
    readonly policy: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance_resource_policy aws_s3control_access_grants_instance_resource_policy}
*/
export declare class S3ControlAccessGrantsInstanceResourcePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_access_grants_instance_resource_policy";
    /**
    * Generates CDKTF code for importing a S3ControlAccessGrantsInstanceResourcePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlAccessGrantsInstanceResourcePolicy to import
    * @param importFromId The id of the existing S3ControlAccessGrantsInstanceResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlAccessGrantsInstanceResourcePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance_resource_policy aws_s3control_access_grants_instance_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlAccessGrantsInstanceResourcePolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlAccessGrantsInstanceResourcePolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get id(): string;
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
