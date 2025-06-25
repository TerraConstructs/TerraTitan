/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamGroupPoliciesExclusiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_group_policies_exclusive#group_name IamGroupPoliciesExclusive#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_group_policies_exclusive#policy_names IamGroupPoliciesExclusive#policy_names}
    */
    readonly policyNames: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_group_policies_exclusive aws_iam_group_policies_exclusive}
*/
export declare class IamGroupPoliciesExclusive extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_group_policies_exclusive";
    /**
    * Generates CDKTF code for importing a IamGroupPoliciesExclusive resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamGroupPoliciesExclusive to import
    * @param importFromId The id of the existing IamGroupPoliciesExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_group_policies_exclusive#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamGroupPoliciesExclusive to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/iam_group_policies_exclusive aws_iam_group_policies_exclusive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamGroupPoliciesExclusiveConfig
    */
    constructor(scope: Construct, id: string, config: IamGroupPoliciesExclusiveConfig);
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string | undefined;
    private _policyNames?;
    get policyNames(): string[];
    set policyNames(value: string[]);
    get policyNamesInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
