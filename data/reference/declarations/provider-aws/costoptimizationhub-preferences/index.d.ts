/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CostoptimizationhubPreferencesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}
    */
    readonly memberAccountDiscountVisibility?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}
    */
    readonly savingsEstimationMode?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/costoptimizationhub_preferences aws_costoptimizationhub_preferences}
*/
export declare class CostoptimizationhubPreferences extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_costoptimizationhub_preferences";
    /**
    * Generates CDKTF code for importing a CostoptimizationhubPreferences resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CostoptimizationhubPreferences to import
    * @param importFromId The id of the existing CostoptimizationhubPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/costoptimizationhub_preferences#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CostoptimizationhubPreferences to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/costoptimizationhub_preferences aws_costoptimizationhub_preferences} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CostoptimizationhubPreferencesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CostoptimizationhubPreferencesConfig);
    get id(): string;
    private _memberAccountDiscountVisibility?;
    get memberAccountDiscountVisibility(): string;
    set memberAccountDiscountVisibility(value: string);
    resetMemberAccountDiscountVisibility(): void;
    get memberAccountDiscountVisibilityInput(): string | undefined;
    private _savingsEstimationMode?;
    get savingsEstimationMode(): string;
    set savingsEstimationMode(value: string);
    resetSavingsEstimationMode(): void;
    get savingsEstimationModeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
