/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchContributorManagedInsightRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_managed_insight_rule#resource_arn CloudwatchContributorManagedInsightRule#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_managed_insight_rule#state CloudwatchContributorManagedInsightRule#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_managed_insight_rule#tags CloudwatchContributorManagedInsightRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_managed_insight_rule#template_name CloudwatchContributorManagedInsightRule#template_name}
    */
    readonly templateName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_managed_insight_rule aws_cloudwatch_contributor_managed_insight_rule}
*/
export declare class CloudwatchContributorManagedInsightRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_contributor_managed_insight_rule";
    /**
    * Generates CDKTF code for importing a CloudwatchContributorManagedInsightRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchContributorManagedInsightRule to import
    * @param importFromId The id of the existing CloudwatchContributorManagedInsightRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_managed_insight_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchContributorManagedInsightRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_contributor_managed_insight_rule aws_cloudwatch_contributor_managed_insight_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchContributorManagedInsightRuleConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchContributorManagedInsightRuleConfig);
    get arn(): string;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    get ruleName(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    private _templateName?;
    get templateName(): string;
    set templateName(value: string);
    get templateNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
