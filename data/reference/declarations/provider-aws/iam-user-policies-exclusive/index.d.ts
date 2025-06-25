/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamUserPoliciesExclusiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}
    */
    readonly policyNames: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policies_exclusive aws_iam_user_policies_exclusive}
*/
export declare class IamUserPoliciesExclusive extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_user_policies_exclusive";
    /**
    * Generates CDKTF code for importing a IamUserPoliciesExclusive resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamUserPoliciesExclusive to import
    * @param importFromId The id of the existing IamUserPoliciesExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policies_exclusive#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamUserPoliciesExclusive to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_user_policies_exclusive aws_iam_user_policies_exclusive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserPoliciesExclusiveConfig
    */
    constructor(scope: Construct, id: string, config: IamUserPoliciesExclusiveConfig);
    private _policyNames?;
    get policyNames(): string[];
    set policyNames(value: string[]);
    get policyNamesInput(): string[] | undefined;
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
