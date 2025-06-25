/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamUserPolicyAttachmentsExclusiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policy_attachments_exclusive#policy_arns IamUserPolicyAttachmentsExclusive#policy_arns}
    */
    readonly policyArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policy_attachments_exclusive#user_name IamUserPolicyAttachmentsExclusive#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policy_attachments_exclusive aws_iam_user_policy_attachments_exclusive}
*/
export declare class IamUserPolicyAttachmentsExclusive extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_user_policy_attachments_exclusive";
    /**
    * Generates CDKTF code for importing a IamUserPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamUserPolicyAttachmentsExclusive to import
    * @param importFromId The id of the existing IamUserPolicyAttachmentsExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamUserPolicyAttachmentsExclusive to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policy_attachments_exclusive aws_iam_user_policy_attachments_exclusive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserPolicyAttachmentsExclusiveConfig
    */
    constructor(scope: Construct, id: string, config: IamUserPolicyAttachmentsExclusiveConfig);
    private _policyArns?;
    get policyArns(): string[];
    set policyArns(value: string[]);
    get policyArnsInput(): string[] | undefined;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
