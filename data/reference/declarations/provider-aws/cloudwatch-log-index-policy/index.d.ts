/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogIndexPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_index_policy#log_group_name CloudwatchLogIndexPolicy#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Field index filter policy, in JSON
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_index_policy#policy_document CloudwatchLogIndexPolicy#policy_document}
    */
    readonly policyDocument: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_index_policy aws_cloudwatch_log_index_policy}
*/
export declare class CloudwatchLogIndexPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_log_index_policy";
    /**
    * Generates CDKTF code for importing a CloudwatchLogIndexPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchLogIndexPolicy to import
    * @param importFromId The id of the existing CloudwatchLogIndexPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_index_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchLogIndexPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_index_policy aws_cloudwatch_log_index_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogIndexPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchLogIndexPolicyConfig);
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string | undefined;
    private _policyDocument?;
    get policyDocument(): string;
    set policyDocument(value: string);
    get policyDocumentInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
