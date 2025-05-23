/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamGroupPolicyConfig extends cdktf.TerraformMetaArguments {
    /** (Required) The IAM group to attach to the policy. */
    readonly group: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy#id IamGroupPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Optional) The name of the policy. If omitted, Terraform will assign a random, unique name. */
    readonly name?: string;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    readonly namePrefix?: string;
    /** (Required) The policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    readonly policy: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy aws_iam_group_policy}
*/
export declare class IamGroupPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_group_policy";
    /**
    * Generates CDKTF code for importing a IamGroupPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamGroupPolicy to import
    * @param importFromId The id of the existing IamGroupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamGroupPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy aws_iam_group_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamGroupPolicyConfig
    */
    constructor(scope: Construct, id: string, config: IamGroupPolicyConfig);
    private _group?;
    get group(): string;
    set group(value: string);
    get groupInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
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
