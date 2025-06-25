/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudwatchContributorManagedInsightRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#resource_arn DataAwsCloudwatchContributorManagedInsightRules#resource_arn}
    */
    readonly resourceArn: string;
}
export interface DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState {
}
export declare function dataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateToTerraform(struct?: DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState): any;
export declare function dataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateToHclTerraform(struct?: DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState): any;
export declare class DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState | undefined;
    set internalValue(value: DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleState | undefined);
    get ruleName(): string;
    get state(): string;
}
export declare class DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateOutputReference;
}
export interface DataAwsCloudwatchContributorManagedInsightRulesManagedRules {
}
export declare function dataAwsCloudwatchContributorManagedInsightRulesManagedRulesToTerraform(struct?: DataAwsCloudwatchContributorManagedInsightRulesManagedRules): any;
export declare function dataAwsCloudwatchContributorManagedInsightRulesManagedRulesToHclTerraform(struct?: DataAwsCloudwatchContributorManagedInsightRulesManagedRules): any;
export declare class DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudwatchContributorManagedInsightRulesManagedRules | undefined;
    set internalValue(value: DataAwsCloudwatchContributorManagedInsightRulesManagedRules | undefined);
    get resourceArn(): string;
    private _ruleState;
    get ruleState(): DataAwsCloudwatchContributorManagedInsightRulesManagedRulesRuleStateList;
    get templateName(): string;
}
export declare class DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCloudwatchContributorManagedInsightRulesManagedRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules aws_cloudwatch_contributor_managed_insight_rules}
*/
export declare class DataAwsCloudwatchContributorManagedInsightRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudwatch_contributor_managed_insight_rules";
    /**
    * Generates CDKTF code for importing a DataAwsCloudwatchContributorManagedInsightRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudwatchContributorManagedInsightRules to import
    * @param importFromId The id of the existing DataAwsCloudwatchContributorManagedInsightRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudwatchContributorManagedInsightRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules aws_cloudwatch_contributor_managed_insight_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchContributorManagedInsightRulesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudwatchContributorManagedInsightRulesConfig);
    private _managedRules;
    get managedRules(): DataAwsCloudwatchContributorManagedInsightRulesManagedRulesList;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
