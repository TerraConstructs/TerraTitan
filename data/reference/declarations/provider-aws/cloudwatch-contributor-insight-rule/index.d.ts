/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchContributorInsightRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_insight_rule#rule_definition CloudwatchContributorInsightRule#rule_definition}
    */
    readonly ruleDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_insight_rule#rule_name CloudwatchContributorInsightRule#rule_name}
    */
    readonly ruleName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_insight_rule#rule_state CloudwatchContributorInsightRule#rule_state}
    */
    readonly ruleState?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_insight_rule#tags CloudwatchContributorInsightRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_insight_rule aws_cloudwatch_contributor_insight_rule}
*/
export declare class CloudwatchContributorInsightRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_contributor_insight_rule";
    /**
    * Generates CDKTF code for importing a CloudwatchContributorInsightRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchContributorInsightRule to import
    * @param importFromId The id of the existing CloudwatchContributorInsightRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_insight_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchContributorInsightRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_insight_rule aws_cloudwatch_contributor_insight_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchContributorInsightRuleConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchContributorInsightRuleConfig);
    get resourceArn(): string;
    private _ruleDefinition?;
    get ruleDefinition(): string;
    set ruleDefinition(value: string);
    get ruleDefinitionInput(): string | undefined;
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    get ruleNameInput(): string | undefined;
    private _ruleState?;
    get ruleState(): string;
    set ruleState(value: string);
    resetRuleState(): void;
    get ruleStateInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
