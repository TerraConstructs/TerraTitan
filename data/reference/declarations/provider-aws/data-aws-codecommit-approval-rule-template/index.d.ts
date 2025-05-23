/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCodecommitApprovalRuleTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecommit_approval_rule_template#id DataAwsCodecommitApprovalRuleTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecommit_approval_rule_template#name DataAwsCodecommitApprovalRuleTemplate#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecommit_approval_rule_template aws_codecommit_approval_rule_template}
*/
export declare class DataAwsCodecommitApprovalRuleTemplate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_codecommit_approval_rule_template";
    /**
    * Generates CDKTF code for importing a DataAwsCodecommitApprovalRuleTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCodecommitApprovalRuleTemplate to import
    * @param importFromId The id of the existing DataAwsCodecommitApprovalRuleTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecommit_approval_rule_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCodecommitApprovalRuleTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codecommit_approval_rule_template aws_codecommit_approval_rule_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodecommitApprovalRuleTemplateConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCodecommitApprovalRuleTemplateConfig);
    get approvalRuleTemplateId(): string;
    get content(): string;
    get creationDate(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModifiedDate(): string;
    get lastModifiedUser(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get ruleContentSha256(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
