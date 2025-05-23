/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BudgetsBudgetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#account_id BudgetsBudget#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#budget_type BudgetsBudget#budget_type}
    */
    readonly budgetType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#id BudgetsBudget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#limit_amount BudgetsBudget#limit_amount}
    */
    readonly limitAmount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#limit_unit BudgetsBudget#limit_unit}
    */
    readonly limitUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#name BudgetsBudget#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#name_prefix BudgetsBudget#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#tags BudgetsBudget#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#tags_all BudgetsBudget#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#time_period_end BudgetsBudget#time_period_end}
    */
    readonly timePeriodEnd?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#time_period_start BudgetsBudget#time_period_start}
    */
    readonly timePeriodStart?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#time_unit BudgetsBudget#time_unit}
    */
    readonly timeUnit: string;
    /**
    * auto_adjust_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#auto_adjust_data BudgetsBudget#auto_adjust_data}
    */
    readonly autoAdjustData?: BudgetsBudgetAutoAdjustData;
    /**
    * cost_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#cost_filter BudgetsBudget#cost_filter}
    */
    readonly costFilter?: BudgetsBudgetCostFilter[] | cdktf.IResolvable;
    /**
    * cost_types block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#cost_types BudgetsBudget#cost_types}
    */
    readonly costTypes?: BudgetsBudgetCostTypes;
    /**
    * notification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#notification BudgetsBudget#notification}
    */
    readonly notification?: BudgetsBudgetNotification[] | cdktf.IResolvable;
    /**
    * planned_limit block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#planned_limit BudgetsBudget#planned_limit}
    */
    readonly plannedLimit?: BudgetsBudgetPlannedLimit[] | cdktf.IResolvable;
}
export interface BudgetsBudgetAutoAdjustDataHistoricalOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}
    */
    readonly budgetAdjustmentPeriod: number;
}
export declare function budgetsBudgetAutoAdjustDataHistoricalOptionsToTerraform(struct?: BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference | BudgetsBudgetAutoAdjustDataHistoricalOptions): any;
export declare function budgetsBudgetAutoAdjustDataHistoricalOptionsToHclTerraform(struct?: BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference | BudgetsBudgetAutoAdjustDataHistoricalOptions): any;
export declare class BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BudgetsBudgetAutoAdjustDataHistoricalOptions | undefined;
    set internalValue(value: BudgetsBudgetAutoAdjustDataHistoricalOptions | undefined);
    private _budgetAdjustmentPeriod?;
    get budgetAdjustmentPeriod(): number;
    set budgetAdjustmentPeriod(value: number);
    get budgetAdjustmentPeriodInput(): number | undefined;
    get lookbackAvailablePeriods(): number;
}
export interface BudgetsBudgetAutoAdjustData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}
    */
    readonly autoAdjustType: string;
    /**
    * historical_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#historical_options BudgetsBudget#historical_options}
    */
    readonly historicalOptions?: BudgetsBudgetAutoAdjustDataHistoricalOptions;
}
export declare function budgetsBudgetAutoAdjustDataToTerraform(struct?: BudgetsBudgetAutoAdjustDataOutputReference | BudgetsBudgetAutoAdjustData): any;
export declare function budgetsBudgetAutoAdjustDataToHclTerraform(struct?: BudgetsBudgetAutoAdjustDataOutputReference | BudgetsBudgetAutoAdjustData): any;
export declare class BudgetsBudgetAutoAdjustDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BudgetsBudgetAutoAdjustData | undefined;
    set internalValue(value: BudgetsBudgetAutoAdjustData | undefined);
    private _autoAdjustType?;
    get autoAdjustType(): string;
    set autoAdjustType(value: string);
    get autoAdjustTypeInput(): string | undefined;
    get lastAutoAdjustTime(): string;
    private _historicalOptions;
    get historicalOptions(): BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference;
    putHistoricalOptions(value: BudgetsBudgetAutoAdjustDataHistoricalOptions): void;
    resetHistoricalOptions(): void;
    get historicalOptionsInput(): BudgetsBudgetAutoAdjustDataHistoricalOptions | undefined;
}
export interface BudgetsBudgetCostFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#name BudgetsBudget#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#values BudgetsBudget#values}
    */
    readonly values: string[];
}
export declare function budgetsBudgetCostFilterToTerraform(struct?: BudgetsBudgetCostFilter | cdktf.IResolvable): any;
export declare function budgetsBudgetCostFilterToHclTerraform(struct?: BudgetsBudgetCostFilter | cdktf.IResolvable): any;
export declare class BudgetsBudgetCostFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BudgetsBudgetCostFilter | cdktf.IResolvable | undefined;
    set internalValue(value: BudgetsBudgetCostFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class BudgetsBudgetCostFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BudgetsBudgetCostFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BudgetsBudgetCostFilterOutputReference;
}
export interface BudgetsBudgetCostTypes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#include_credit BudgetsBudget#include_credit}
    */
    readonly includeCredit?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#include_discount BudgetsBudget#include_discount}
    */
    readonly includeDiscount?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}
    */
    readonly includeOtherSubscription?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#include_recurring BudgetsBudget#include_recurring}
    */
    readonly includeRecurring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#include_refund BudgetsBudget#include_refund}
    */
    readonly includeRefund?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#include_subscription BudgetsBudget#include_subscription}
    */
    readonly includeSubscription?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#include_support BudgetsBudget#include_support}
    */
    readonly includeSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#include_tax BudgetsBudget#include_tax}
    */
    readonly includeTax?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#include_upfront BudgetsBudget#include_upfront}
    */
    readonly includeUpfront?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#use_amortized BudgetsBudget#use_amortized}
    */
    readonly useAmortized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#use_blended BudgetsBudget#use_blended}
    */
    readonly useBlended?: boolean | cdktf.IResolvable;
}
export declare function budgetsBudgetCostTypesToTerraform(struct?: BudgetsBudgetCostTypesOutputReference | BudgetsBudgetCostTypes): any;
export declare function budgetsBudgetCostTypesToHclTerraform(struct?: BudgetsBudgetCostTypesOutputReference | BudgetsBudgetCostTypes): any;
export declare class BudgetsBudgetCostTypesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BudgetsBudgetCostTypes | undefined;
    set internalValue(value: BudgetsBudgetCostTypes | undefined);
    private _includeCredit?;
    get includeCredit(): boolean | cdktf.IResolvable;
    set includeCredit(value: boolean | cdktf.IResolvable);
    resetIncludeCredit(): void;
    get includeCreditInput(): boolean | cdktf.IResolvable | undefined;
    private _includeDiscount?;
    get includeDiscount(): boolean | cdktf.IResolvable;
    set includeDiscount(value: boolean | cdktf.IResolvable);
    resetIncludeDiscount(): void;
    get includeDiscountInput(): boolean | cdktf.IResolvable | undefined;
    private _includeOtherSubscription?;
    get includeOtherSubscription(): boolean | cdktf.IResolvable;
    set includeOtherSubscription(value: boolean | cdktf.IResolvable);
    resetIncludeOtherSubscription(): void;
    get includeOtherSubscriptionInput(): boolean | cdktf.IResolvable | undefined;
    private _includeRecurring?;
    get includeRecurring(): boolean | cdktf.IResolvable;
    set includeRecurring(value: boolean | cdktf.IResolvable);
    resetIncludeRecurring(): void;
    get includeRecurringInput(): boolean | cdktf.IResolvable | undefined;
    private _includeRefund?;
    get includeRefund(): boolean | cdktf.IResolvable;
    set includeRefund(value: boolean | cdktf.IResolvable);
    resetIncludeRefund(): void;
    get includeRefundInput(): boolean | cdktf.IResolvable | undefined;
    private _includeSubscription?;
    get includeSubscription(): boolean | cdktf.IResolvable;
    set includeSubscription(value: boolean | cdktf.IResolvable);
    resetIncludeSubscription(): void;
    get includeSubscriptionInput(): boolean | cdktf.IResolvable | undefined;
    private _includeSupport?;
    get includeSupport(): boolean | cdktf.IResolvable;
    set includeSupport(value: boolean | cdktf.IResolvable);
    resetIncludeSupport(): void;
    get includeSupportInput(): boolean | cdktf.IResolvable | undefined;
    private _includeTax?;
    get includeTax(): boolean | cdktf.IResolvable;
    set includeTax(value: boolean | cdktf.IResolvable);
    resetIncludeTax(): void;
    get includeTaxInput(): boolean | cdktf.IResolvable | undefined;
    private _includeUpfront?;
    get includeUpfront(): boolean | cdktf.IResolvable;
    set includeUpfront(value: boolean | cdktf.IResolvable);
    resetIncludeUpfront(): void;
    get includeUpfrontInput(): boolean | cdktf.IResolvable | undefined;
    private _useAmortized?;
    get useAmortized(): boolean | cdktf.IResolvable;
    set useAmortized(value: boolean | cdktf.IResolvable);
    resetUseAmortized(): void;
    get useAmortizedInput(): boolean | cdktf.IResolvable | undefined;
    private _useBlended?;
    get useBlended(): boolean | cdktf.IResolvable;
    set useBlended(value: boolean | cdktf.IResolvable);
    resetUseBlended(): void;
    get useBlendedInput(): boolean | cdktf.IResolvable | undefined;
}
export interface BudgetsBudgetNotification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#notification_type BudgetsBudget#notification_type}
    */
    readonly notificationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}
    */
    readonly subscriberEmailAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}
    */
    readonly subscriberSnsTopicArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#threshold BudgetsBudget#threshold}
    */
    readonly threshold: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#threshold_type BudgetsBudget#threshold_type}
    */
    readonly thresholdType: string;
}
export declare function budgetsBudgetNotificationToTerraform(struct?: BudgetsBudgetNotification | cdktf.IResolvable): any;
export declare function budgetsBudgetNotificationToHclTerraform(struct?: BudgetsBudgetNotification | cdktf.IResolvable): any;
export declare class BudgetsBudgetNotificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BudgetsBudgetNotification | cdktf.IResolvable | undefined;
    set internalValue(value: BudgetsBudgetNotification | cdktf.IResolvable | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string | undefined;
    private _notificationType?;
    get notificationType(): string;
    set notificationType(value: string);
    get notificationTypeInput(): string | undefined;
    private _subscriberEmailAddresses?;
    get subscriberEmailAddresses(): string[];
    set subscriberEmailAddresses(value: string[]);
    resetSubscriberEmailAddresses(): void;
    get subscriberEmailAddressesInput(): string[] | undefined;
    private _subscriberSnsTopicArns?;
    get subscriberSnsTopicArns(): string[];
    set subscriberSnsTopicArns(value: string[]);
    resetSubscriberSnsTopicArns(): void;
    get subscriberSnsTopicArnsInput(): string[] | undefined;
    private _threshold?;
    get threshold(): number;
    set threshold(value: number);
    get thresholdInput(): number | undefined;
    private _thresholdType?;
    get thresholdType(): string;
    set thresholdType(value: string);
    get thresholdTypeInput(): string | undefined;
}
export declare class BudgetsBudgetNotificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BudgetsBudgetNotification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BudgetsBudgetNotificationOutputReference;
}
export interface BudgetsBudgetPlannedLimit {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#amount BudgetsBudget#amount}
    */
    readonly amount: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#start_time BudgetsBudget#start_time}
    */
    readonly startTime: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#unit BudgetsBudget#unit}
    */
    readonly unit: string;
}
export declare function budgetsBudgetPlannedLimitToTerraform(struct?: BudgetsBudgetPlannedLimit | cdktf.IResolvable): any;
export declare function budgetsBudgetPlannedLimitToHclTerraform(struct?: BudgetsBudgetPlannedLimit | cdktf.IResolvable): any;
export declare class BudgetsBudgetPlannedLimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BudgetsBudgetPlannedLimit | cdktf.IResolvable | undefined;
    set internalValue(value: BudgetsBudgetPlannedLimit | cdktf.IResolvable | undefined);
    private _amount?;
    get amount(): string;
    set amount(value: string);
    get amountInput(): string | undefined;
    private _startTime?;
    get startTime(): string;
    set startTime(value: string);
    get startTimeInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
}
export declare class BudgetsBudgetPlannedLimitList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BudgetsBudgetPlannedLimit[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BudgetsBudgetPlannedLimitOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget aws_budgets_budget}
*/
export declare class BudgetsBudget extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_budgets_budget";
    /**
    * Generates CDKTF code for importing a BudgetsBudget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BudgetsBudget to import
    * @param importFromId The id of the existing BudgetsBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BudgetsBudget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget aws_budgets_budget} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BudgetsBudgetConfig
    */
    constructor(scope: Construct, id: string, config: BudgetsBudgetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get arn(): string;
    private _budgetType?;
    get budgetType(): string;
    set budgetType(value: string);
    get budgetTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _limitAmount?;
    get limitAmount(): string;
    set limitAmount(value: string);
    resetLimitAmount(): void;
    get limitAmountInput(): string | undefined;
    private _limitUnit?;
    get limitUnit(): string;
    set limitUnit(value: string);
    resetLimitUnit(): void;
    get limitUnitInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _timePeriodEnd?;
    get timePeriodEnd(): string;
    set timePeriodEnd(value: string);
    resetTimePeriodEnd(): void;
    get timePeriodEndInput(): string | undefined;
    private _timePeriodStart?;
    get timePeriodStart(): string;
    set timePeriodStart(value: string);
    resetTimePeriodStart(): void;
    get timePeriodStartInput(): string | undefined;
    private _timeUnit?;
    get timeUnit(): string;
    set timeUnit(value: string);
    get timeUnitInput(): string | undefined;
    private _autoAdjustData;
    get autoAdjustData(): BudgetsBudgetAutoAdjustDataOutputReference;
    putAutoAdjustData(value: BudgetsBudgetAutoAdjustData): void;
    resetAutoAdjustData(): void;
    get autoAdjustDataInput(): BudgetsBudgetAutoAdjustData | undefined;
    private _costFilter;
    get costFilter(): BudgetsBudgetCostFilterList;
    putCostFilter(value: BudgetsBudgetCostFilter[] | cdktf.IResolvable): void;
    resetCostFilter(): void;
    get costFilterInput(): cdktf.IResolvable | BudgetsBudgetCostFilter[] | undefined;
    private _costTypes;
    get costTypes(): BudgetsBudgetCostTypesOutputReference;
    putCostTypes(value: BudgetsBudgetCostTypes): void;
    resetCostTypes(): void;
    get costTypesInput(): BudgetsBudgetCostTypes | undefined;
    private _notification;
    get notification(): BudgetsBudgetNotificationList;
    putNotification(value: BudgetsBudgetNotification[] | cdktf.IResolvable): void;
    resetNotification(): void;
    get notificationInput(): cdktf.IResolvable | BudgetsBudgetNotification[] | undefined;
    private _plannedLimit;
    get plannedLimit(): BudgetsBudgetPlannedLimitList;
    putPlannedLimit(value: BudgetsBudgetPlannedLimit[] | cdktf.IResolvable): void;
    resetPlannedLimit(): void;
    get plannedLimitInput(): cdktf.IResolvable | BudgetsBudgetPlannedLimit[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
