/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesReceiptRuleSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule_set#id SesReceiptRuleSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule_set#rule_set_name SesReceiptRuleSet#rule_set_name}
    */
    readonly ruleSetName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule_set aws_ses_receipt_rule_set}
*/
export declare class SesReceiptRuleSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ses_receipt_rule_set";
    /**
    * Generates CDKTF code for importing a SesReceiptRuleSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SesReceiptRuleSet to import
    * @param importFromId The id of the existing SesReceiptRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SesReceiptRuleSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule_set aws_ses_receipt_rule_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesReceiptRuleSetConfig
    */
    constructor(scope: Construct, id: string, config: SesReceiptRuleSetConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ruleSetName?;
    get ruleSetName(): string;
    set ruleSetName(value: string);
    get ruleSetNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
