/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodecommitApprovalRuleTemplateAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}
    */
    readonly approvalRuleTemplateName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}
    */
    readonly repositoryName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_approval_rule_template_association aws_codecommit_approval_rule_template_association}
*/
export declare class CodecommitApprovalRuleTemplateAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codecommit_approval_rule_template_association";
    /**
    * Generates CDKTF code for importing a CodecommitApprovalRuleTemplateAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodecommitApprovalRuleTemplateAssociation to import
    * @param importFromId The id of the existing CodecommitApprovalRuleTemplateAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_approval_rule_template_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodecommitApprovalRuleTemplateAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_approval_rule_template_association aws_codecommit_approval_rule_template_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitApprovalRuleTemplateAssociationConfig
    */
    constructor(scope: Construct, id: string, config: CodecommitApprovalRuleTemplateAssociationConfig);
    private _approvalRuleTemplateName?;
    get approvalRuleTemplateName(): string;
    set approvalRuleTemplateName(value: string);
    get approvalRuleTemplateNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
