/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_policy_attachment#groups IamPolicyAttachment#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_policy_attachment#id IamPolicyAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_policy_attachment#name IamPolicyAttachment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_policy_attachment#policy_arn IamPolicyAttachment#policy_arn}
    */
    readonly policyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_policy_attachment#roles IamPolicyAttachment#roles}
    */
    readonly roles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_policy_attachment#users IamPolicyAttachment#users}
    */
    readonly users?: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_policy_attachment aws_iam_policy_attachment}
*/
export declare class IamPolicyAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_policy_attachment";
    /**
    * Generates CDKTF code for importing a IamPolicyAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamPolicyAttachment to import
    * @param importFromId The id of the existing IamPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_policy_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamPolicyAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_policy_attachment aws_iam_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamPolicyAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: IamPolicyAttachmentConfig);
    private _groups?;
    get groups(): string[];
    set groups(value: string[]);
    resetGroups(): void;
    get groupsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _policyArn?;
    get policyArn(): string;
    set policyArn(value: string);
    get policyArnInput(): string | undefined;
    private _roles?;
    get roles(): string[];
    set roles(value: string[]);
    resetRoles(): void;
    get rolesInput(): string[] | undefined;
    private _users?;
    get users(): string[];
    set users(value: string[]);
    resetUsers(): void;
    get usersInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
