/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamRolePolicyAttachmentsExclusiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_role_policy_attachments_exclusive#policy_arns IamRolePolicyAttachmentsExclusive#policy_arns}
    */
    readonly policyArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_role_policy_attachments_exclusive#role_name IamRolePolicyAttachmentsExclusive#role_name}
    */
    readonly roleName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_role_policy_attachments_exclusive aws_iam_role_policy_attachments_exclusive}
*/
export declare class IamRolePolicyAttachmentsExclusive extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_role_policy_attachments_exclusive";
    /**
    * Generates CDKTF code for importing a IamRolePolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamRolePolicyAttachmentsExclusive to import
    * @param importFromId The id of the existing IamRolePolicyAttachmentsExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_role_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamRolePolicyAttachmentsExclusive to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_role_policy_attachments_exclusive aws_iam_role_policy_attachments_exclusive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamRolePolicyAttachmentsExclusiveConfig
    */
    constructor(scope: Construct, id: string, config: IamRolePolicyAttachmentsExclusiveConfig);
    private _policyArns?;
    get policyArns(): string[];
    set policyArns(value: string[]);
    get policyArnsInput(): string[] | undefined;
    private _roleName?;
    get roleName(): string;
    set roleName(value: string);
    get roleNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
