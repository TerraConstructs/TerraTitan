/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBudgetsBudgetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/budgets_budget#account_id DataAwsBudgetsBudget#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/budgets_budget#id DataAwsBudgetsBudget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/budgets_budget#name DataAwsBudgetsBudget#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/budgets_budget#name_prefix DataAwsBudgetsBudget#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/budgets_budget#tags DataAwsBudgetsBudget#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions {
}
export declare function dataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsToTerraform(struct?: DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions): any;
export declare function dataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsToHclTerraform(struct?: DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions): any;
export declare class DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions | undefined;
    set internalValue(value: DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptions | undefined);
    get budgetAdjustmentPeriod(): number;
    get lookbackAvailablePeriods(): number;
}
export declare class DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference;
}
export interface DataAwsBudgetsBudgetAutoAdjustData {
}
export declare function dataAwsBudgetsBudgetAutoAdjustDataToTerraform(struct?: DataAwsBudgetsBudgetAutoAdjustData): any;
export declare function dataAwsBudgetsBudgetAutoAdjustDataToHclTerraform(struct?: DataAwsBudgetsBudgetAutoAdjustData): any;
export declare class DataAwsBudgetsBudgetAutoAdjustDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBudgetsBudgetAutoAdjustData | undefined;
    set internalValue(value: DataAwsBudgetsBudgetAutoAdjustData | undefined);
    get autoAdjustType(): string;
    private _historicalOptions;
    get historicalOptions(): DataAwsBudgetsBudgetAutoAdjustDataHistoricalOptionsList;
    get lastAutoAdjustTime(): string;
}
export declare class DataAwsBudgetsBudgetAutoAdjustDataList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBudgetsBudgetAutoAdjustDataOutputReference;
}
export interface DataAwsBudgetsBudgetBudgetLimit {
}
export declare function dataAwsBudgetsBudgetBudgetLimitToTerraform(struct?: DataAwsBudgetsBudgetBudgetLimit): any;
export declare function dataAwsBudgetsBudgetBudgetLimitToHclTerraform(struct?: DataAwsBudgetsBudgetBudgetLimit): any;
export declare class DataAwsBudgetsBudgetBudgetLimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBudgetsBudgetBudgetLimit | undefined;
    set internalValue(value: DataAwsBudgetsBudgetBudgetLimit | undefined);
    get amount(): string;
    get unit(): string;
}
export declare class DataAwsBudgetsBudgetBudgetLimitList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBudgetsBudgetBudgetLimitOutputReference;
}
export interface DataAwsBudgetsBudgetCalculatedSpendActualSpend {
}
export declare function dataAwsBudgetsBudgetCalculatedSpendActualSpendToTerraform(struct?: DataAwsBudgetsBudgetCalculatedSpendActualSpend): any;
export declare function dataAwsBudgetsBudgetCalculatedSpendActualSpendToHclTerraform(struct?: DataAwsBudgetsBudgetCalculatedSpendActualSpend): any;
export declare class DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBudgetsBudgetCalculatedSpendActualSpend | undefined;
    set internalValue(value: DataAwsBudgetsBudgetCalculatedSpendActualSpend | undefined);
    get amount(): string;
    get unit(): string;
}
export declare class DataAwsBudgetsBudgetCalculatedSpendActualSpendList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBudgetsBudgetCalculatedSpendActualSpendOutputReference;
}
export interface DataAwsBudgetsBudgetCalculatedSpend {
}
export declare function dataAwsBudgetsBudgetCalculatedSpendToTerraform(struct?: DataAwsBudgetsBudgetCalculatedSpend): any;
export declare function dataAwsBudgetsBudgetCalculatedSpendToHclTerraform(struct?: DataAwsBudgetsBudgetCalculatedSpend): any;
export declare class DataAwsBudgetsBudgetCalculatedSpendOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBudgetsBudgetCalculatedSpend | undefined;
    set internalValue(value: DataAwsBudgetsBudgetCalculatedSpend | undefined);
    private _actualSpend;
    get actualSpend(): DataAwsBudgetsBudgetCalculatedSpendActualSpendList;
}
export declare class DataAwsBudgetsBudgetCalculatedSpendList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBudgetsBudgetCalculatedSpendOutputReference;
}
export interface DataAwsBudgetsBudgetCostFilter {
}
export declare function dataAwsBudgetsBudgetCostFilterToTerraform(struct?: DataAwsBudgetsBudgetCostFilter): any;
export declare function dataAwsBudgetsBudgetCostFilterToHclTerraform(struct?: DataAwsBudgetsBudgetCostFilter): any;
export declare class DataAwsBudgetsBudgetCostFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBudgetsBudgetCostFilter | undefined;
    set internalValue(value: DataAwsBudgetsBudgetCostFilter | undefined);
    get name(): string;
    get values(): string[];
}
export declare class DataAwsBudgetsBudgetCostFilterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBudgetsBudgetCostFilterOutputReference;
}
export interface DataAwsBudgetsBudgetCostTypes {
}
export declare function dataAwsBudgetsBudgetCostTypesToTerraform(struct?: DataAwsBudgetsBudgetCostTypes): any;
export declare function dataAwsBudgetsBudgetCostTypesToHclTerraform(struct?: DataAwsBudgetsBudgetCostTypes): any;
export declare class DataAwsBudgetsBudgetCostTypesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBudgetsBudgetCostTypes | undefined;
    set internalValue(value: DataAwsBudgetsBudgetCostTypes | undefined);
    get includeCredit(): cdktf.IResolvable;
    get includeDiscount(): cdktf.IResolvable;
    get includeOtherSubscription(): cdktf.IResolvable;
    get includeRecurring(): cdktf.IResolvable;
    get includeRefund(): cdktf.IResolvable;
    get includeSubscription(): cdktf.IResolvable;
    get includeSupport(): cdktf.IResolvable;
    get includeTax(): cdktf.IResolvable;
    get includeUpfront(): cdktf.IResolvable;
    get useAmortized(): cdktf.IResolvable;
    get useBlended(): cdktf.IResolvable;
}
export declare class DataAwsBudgetsBudgetCostTypesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBudgetsBudgetCostTypesOutputReference;
}
export interface DataAwsBudgetsBudgetNotification {
}
export declare function dataAwsBudgetsBudgetNotificationToTerraform(struct?: DataAwsBudgetsBudgetNotification): any;
export declare function dataAwsBudgetsBudgetNotificationToHclTerraform(struct?: DataAwsBudgetsBudgetNotification): any;
export declare class DataAwsBudgetsBudgetNotificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBudgetsBudgetNotification | undefined;
    set internalValue(value: DataAwsBudgetsBudgetNotification | undefined);
    get comparisonOperator(): string;
    get notificationType(): string;
    get subscriberEmailAddresses(): string[];
    get subscriberSnsTopicArns(): string[];
    get threshold(): number;
    get thresholdType(): string;
}
export declare class DataAwsBudgetsBudgetNotificationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBudgetsBudgetNotificationOutputReference;
}
export interface DataAwsBudgetsBudgetPlannedLimit {
}
export declare function dataAwsBudgetsBudgetPlannedLimitToTerraform(struct?: DataAwsBudgetsBudgetPlannedLimit): any;
export declare function dataAwsBudgetsBudgetPlannedLimitToHclTerraform(struct?: DataAwsBudgetsBudgetPlannedLimit): any;
export declare class DataAwsBudgetsBudgetPlannedLimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBudgetsBudgetPlannedLimit | undefined;
    set internalValue(value: DataAwsBudgetsBudgetPlannedLimit | undefined);
    get amount(): string;
    get startTime(): string;
    get unit(): string;
}
export declare class DataAwsBudgetsBudgetPlannedLimitList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBudgetsBudgetPlannedLimitOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/budgets_budget aws_budgets_budget}
*/
export declare class DataAwsBudgetsBudget extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_budgets_budget";
    /**
    * Generates CDKTF code for importing a DataAwsBudgetsBudget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBudgetsBudget to import
    * @param importFromId The id of the existing DataAwsBudgetsBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/budgets_budget#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBudgetsBudget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/budgets_budget aws_budgets_budget} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBudgetsBudgetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBudgetsBudgetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get arn(): string;
    private _autoAdjustData;
    get autoAdjustData(): DataAwsBudgetsBudgetAutoAdjustDataList;
    get budgetExceeded(): cdktf.IResolvable;
    private _budgetLimit;
    get budgetLimit(): DataAwsBudgetsBudgetBudgetLimitList;
    get budgetType(): string;
    private _calculatedSpend;
    get calculatedSpend(): DataAwsBudgetsBudgetCalculatedSpendList;
    private _costFilter;
    get costFilter(): DataAwsBudgetsBudgetCostFilterList;
    private _costTypes;
    get costTypes(): DataAwsBudgetsBudgetCostTypesList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _notification;
    get notification(): DataAwsBudgetsBudgetNotificationList;
    private _plannedLimit;
    get plannedLimit(): DataAwsBudgetsBudgetPlannedLimitList;
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
    get timePeriodEnd(): string;
    get timePeriodStart(): string;
    get timeUnit(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
