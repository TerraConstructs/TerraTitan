import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Budgets::Budget` resource allows customers to take pre-defined actions that will trigger once a budget threshold has been exceeded.
 *
 * creates, replaces, or deletes budgets for Billing and Cost Management. For more information, see [Managing Your Costs with Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) in the *AWS Billing and Cost Management User Guide* .
 *
 * @cloudformationResource AWS::Budgets::Budget
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html
 */
export declare class CfnBudget extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBudget from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBudget;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The budget object that you want to create.
     */
    budget: CfnBudget.BudgetDataProperty | cdk.IResolvable;
    /**
     * A notification that you want to associate with a budget.
     */
    notificationsWithSubscribers?: Array<cdk.IResolvable | CfnBudget.NotificationWithSubscribersProperty> | cdk.IResolvable;
    /**
     * An optional list of tags to associate with the specified budget.
     */
    resourceTags?: Array<cdk.IResolvable | CfnBudget.ResourceTagProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBudgetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBudget {
    /**
     * A notification with subscribers.
     *
     * A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notificationwithsubscribers.html
     */
    interface NotificationWithSubscribersProperty {
        /**
         * The notification that's associated with a budget.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notificationwithsubscribers.html#cfn-budgets-budget-notificationwithsubscribers-notification
         */
        readonly notification: cdk.IResolvable | CfnBudget.NotificationProperty;
        /**
         * A list of subscribers who are subscribed to this notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notificationwithsubscribers.html#cfn-budgets-budget-notificationwithsubscribers-subscribers
         */
        readonly subscribers: Array<cdk.IResolvable | CfnBudget.SubscriberProperty> | cdk.IResolvable;
    }
    /**
     * The `Subscriber` property type specifies who to notify for a Billing and Cost Management budget notification.
     *
     * The subscriber consists of a subscription type, and either an Amazon SNS topic or an email address.
     *
     * For example, an email subscriber would have the following parameters:
     *
     * - A `subscriptionType` of `EMAIL`
     * - An `address` of `example@example.com`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-subscriber.html
     */
    interface SubscriberProperty {
        /**
         * The address that AWS sends budget notifications to, either an SNS topic or an email.
         *
         * When you create a subscriber, the value of `Address` can't contain line breaks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-subscriber.html#cfn-budgets-budget-subscriber-address
         */
        readonly address: string;
        /**
         * The type of notification that AWS sends to a subscriber.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-subscriber.html#cfn-budgets-budget-subscriber-subscriptiontype
         */
        readonly subscriptionType: string;
    }
    /**
     * A notification that's associated with a budget. A budget can have up to ten notifications.
     *
     * Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
     *
     * For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:
     *
     * - A notificationType of `ACTUAL`
     * - A `thresholdType` of `PERCENTAGE`
     * - A `comparisonOperator` of `GREATER_THAN`
     * - A notification `threshold` of `80`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notification.html
     */
    interface NotificationProperty {
        /**
         * The comparison that's used for this notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notification.html#cfn-budgets-budget-notification-comparisonoperator
         */
        readonly comparisonOperator: string;
        /**
         * Specifies whether the notification is for how much you have spent ( `ACTUAL` ) or for how much that you're forecasted to spend ( `FORECASTED` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notification.html#cfn-budgets-budget-notification-notificationtype
         */
        readonly notificationType: string;
        /**
         * The threshold that's associated with a notification.
         *
         * Thresholds are always a percentage, and many customers find value being alerted between 50% - 200% of the budgeted amount. The maximum limit for your threshold is 1,000,000% above the budgeted amount.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notification.html#cfn-budgets-budget-notification-threshold
         */
        readonly threshold: number;
        /**
         * The type of threshold for a notification.
         *
         * For `ABSOLUTE_VALUE` thresholds, AWS notifies you when you go over or are forecasted to go over your total cost threshold. For `PERCENTAGE` thresholds, AWS notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a `PERCENTAGE` threshold of 80%, AWS notifies you when you go over 160 dollars.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notification.html#cfn-budgets-budget-notification-thresholdtype
         */
        readonly thresholdType?: string;
    }
    /**
     * Represents the output of the `CreateBudget` operation.
     *
     * The content consists of the detailed metadata and data file information, and the current status of the `budget` object.
     *
     * This is the Amazon Resource Name (ARN) pattern for a budget:
     *
     * `arn:aws:budgets::AccountId:budget/budgetName`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html
     */
    interface BudgetDataProperty {
        /**
         * Determine the budget amount for an auto-adjusting budget.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html#cfn-budgets-budget-budgetdata-autoadjustdata
         */
        readonly autoAdjustData?: CfnBudget.AutoAdjustDataProperty | cdk.IResolvable;
        /**
         * The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget.
         *
         * `BudgetLimit` is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or coverage budgets default to `100` . This is the only valid value for RI or Savings Plans utilization or coverage budgets. You can't use `BudgetLimit` with `PlannedBudgetLimits` for `CreateBudget` and `UpdateBudget` actions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html#cfn-budgets-budget-budgetdata-budgetlimit
         */
        readonly budgetLimit?: cdk.IResolvable | CfnBudget.SpendProperty;
        /**
         * The name of a budget.
         *
         * The value must be unique within an account. `BudgetName` can't include `:` and `\` characters. If you don't include value for `BudgetName` in the template, Billing and Cost Management assigns your budget a randomly generated name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html#cfn-budgets-budget-budgetdata-budgetname
         */
        readonly budgetName?: string;
        /**
         * Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html#cfn-budgets-budget-budgetdata-budgettype
         */
        readonly budgetType: string;
        /**
         * The cost filters, such as `Region` , `Service` , `LinkedAccount` , `Tag` , or `CostCategory` , that are applied to a budget.
         *
         * AWS Budgets supports the following services as a `Service` filter for RI budgets:
         *
         * - Amazon EC2
         * - Amazon Redshift
         * - Amazon Relational Database Service
         * - Amazon ElastiCache
         * - Amazon OpenSearch Service
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html#cfn-budgets-budget-budgetdata-costfilters
         */
        readonly costFilters?: any | cdk.IResolvable;
        /**
         * The types of costs that are included in this `COST` budget.
         *
         * `USAGE` , `RI_UTILIZATION` , `RI_COVERAGE` , `SAVINGS_PLANS_UTILIZATION` , and `SAVINGS_PLANS_COVERAGE` budgets do not have `CostTypes` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html#cfn-budgets-budget-budgetdata-costtypes
         */
        readonly costTypes?: CfnBudget.CostTypesProperty | cdk.IResolvable;
        /**
         * A map containing multiple `BudgetLimit` , including current or future limits.
         *
         * `PlannedBudgetLimits` is available for cost or usage budget and supports both monthly and quarterly `TimeUnit` .
         *
         * For monthly budgets, provide 12 months of `PlannedBudgetLimits` values. This must start from the current month and include the next 11 months. The `key` is the start of the month, `UTC` in epoch seconds.
         *
         * For quarterly budgets, provide four quarters of `PlannedBudgetLimits` value entries in standard calendar quarter increments. This must start from the current quarter and include the next three quarters. The `key` is the start of the quarter, `UTC` in epoch seconds.
         *
         * If the planned budget expires before 12 months for monthly or four quarters for quarterly, provide the `PlannedBudgetLimits` values only for the remaining periods.
         *
         * If the budget begins at a date in the future, provide `PlannedBudgetLimits` values from the start date of the budget.
         *
         * After all of the `BudgetLimit` values in `PlannedBudgetLimits` are used, the budget continues to use the last limit as the `BudgetLimit` . At that point, the planned budget provides the same experience as a fixed budget.
         *
         * `DescribeBudget` and `DescribeBudgets` response along with `PlannedBudgetLimits` also contain `BudgetLimit` representing the current month or quarter limit present in `PlannedBudgetLimits` . This only applies to budgets that are created with `PlannedBudgetLimits` . Budgets that are created without `PlannedBudgetLimits` only contain `BudgetLimit` . They don't contain `PlannedBudgetLimits` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html#cfn-budgets-budget-budgetdata-plannedbudgetlimits
         */
        readonly plannedBudgetLimits?: any | cdk.IResolvable;
        /**
         * The period of time that is covered by a budget.
         *
         * The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
         *
         * The start date for a budget. If you created your budget and didn't specify a start date, the start date defaults to the start of the chosen time period (MONTHLY, QUARTERLY, or ANNUALLY). For example, if you create your budget on January 24, 2019, choose `MONTHLY` , and don't set a start date, the start date defaults to `01/01/19 00:00 UTC` . The defaults are the same for the AWS Billing and Cost Management console and the API.
         *
         * You can change your start date with the `UpdateBudget` operation.
         *
         * After the end date, AWS deletes the budget and all associated notifications and subscribers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html#cfn-budgets-budget-budgetdata-timeperiod
         */
        readonly timePeriod?: cdk.IResolvable | CfnBudget.TimePeriodProperty;
        /**
         * The length of time until a budget resets the actual and forecasted spend.
         *
         * `DAILY` is available only for `RI_UTILIZATION` and `RI_COVERAGE` budgets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html#cfn-budgets-budget-budgetdata-timeunit
         */
        readonly timeUnit: string;
    }
    /**
     * The amount of cost or usage that's measured for a budget.
     *
     * *Cost example:* A `Spend` for `3 USD` of costs has the following parameters:
     *
     * - An `Amount` of `3`
     * - A `Unit` of `USD`
     *
     * *Usage example:* A `Spend` for `3 GB` of S3 usage has the following parameters:
     *
     * - An `Amount` of `3`
     * - A `Unit` of `GB`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-spend.html
     */
    interface SpendProperty {
        /**
         * The cost or usage amount that's associated with a budget forecast, actual spend, or budget threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-spend.html#cfn-budgets-budget-spend-amount
         */
        readonly amount: number;
        /**
         * The unit of measurement that's used for the budget forecast, actual spend, or budget threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-spend.html#cfn-budgets-budget-spend-unit
         */
        readonly unit: string;
    }
    /**
     * The period of time that is covered by a budget.
     *
     * The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-timeperiod.html
     */
    interface TimePeriodProperty {
        /**
         * The end date for a budget.
         *
         * If you didn't specify an end date, AWS set your end date to `06/15/87 00:00 UTC` . The defaults are the same for the AWS Billing and Cost Management console and the API.
         *
         * After the end date, AWS deletes the budget and all the associated notifications and subscribers. You can change your end date with the `UpdateBudget` operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-timeperiod.html#cfn-budgets-budget-timeperiod-end
         */
        readonly end?: string;
        /**
         * The start date for a budget.
         *
         * If you created your budget and didn't specify a start date, the start date defaults to the start of the chosen time period (MONTHLY, QUARTERLY, or ANNUALLY). For example, if you create your budget on January 24, 2019, choose `MONTHLY` , and don't set a start date, the start date defaults to `01/01/19 00:00 UTC` . The defaults are the same for the AWS Billing and Cost Management console and the API.
         *
         * You can change your start date with the `UpdateBudget` operation.
         *
         * Valid values depend on the value of `BudgetType` :
         *
         * - If `BudgetType` is `COST` or `USAGE` : Valid values are `MONTHLY` , `QUARTERLY` , and `ANNUALLY` .
         * - If `BudgetType` is `RI_UTILIZATION` or `RI_COVERAGE` : Valid values are `DAILY` , `MONTHLY` , `QUARTERLY` , and `ANNUALLY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-timeperiod.html#cfn-budgets-budget-timeperiod-start
         */
        readonly start?: string;
    }
    /**
     * Determine the budget amount for an auto-adjusting budget.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-autoadjustdata.html
     */
    interface AutoAdjustDataProperty {
        /**
         * The string that defines whether your budget auto-adjusts based on historical or forecasted data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-autoadjustdata.html#cfn-budgets-budget-autoadjustdata-autoadjusttype
         */
        readonly autoAdjustType: string;
        /**
         * The parameters that define or describe the historical data that your auto-adjusting budget is based on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-autoadjustdata.html#cfn-budgets-budget-autoadjustdata-historicaloptions
         */
        readonly historicalOptions?: CfnBudget.HistoricalOptionsProperty | cdk.IResolvable;
    }
    /**
     * The parameters that define or describe the historical data that your auto-adjusting budget is based on.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-historicaloptions.html
     */
    interface HistoricalOptionsProperty {
        /**
         * The number of budget periods included in the moving-average calculation that determines your auto-adjusted budget amount.
         *
         * The maximum value depends on the `TimeUnit` granularity of the budget:
         *
         * - For the `DAILY` granularity, the maximum value is `60` .
         * - For the `MONTHLY` granularity, the maximum value is `12` .
         * - For the `QUARTERLY` granularity, the maximum value is `4` .
         * - For the `ANNUALLY` granularity, the maximum value is `1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-historicaloptions.html#cfn-budgets-budget-historicaloptions-budgetadjustmentperiod
         */
        readonly budgetAdjustmentPeriod: number;
    }
    /**
     * The types of cost that are included in a `COST` budget, such as tax and subscriptions.
     *
     * `USAGE` , `RI_UTILIZATION` , `RI_COVERAGE` , `SAVINGS_PLANS_UTILIZATION` , and `SAVINGS_PLANS_COVERAGE` budgets don't have `CostTypes` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html
     */
    interface CostTypesProperty {
        /**
         * Specifies whether a budget includes credits.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-includecredit
         */
        readonly includeCredit?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget includes discounts.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-includediscount
         */
        readonly includeDiscount?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget includes non-RI subscription costs.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-includeothersubscription
         */
        readonly includeOtherSubscription?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget includes recurring fees such as monthly RI fees.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-includerecurring
         */
        readonly includeRecurring?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget includes refunds.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-includerefund
         */
        readonly includeRefund?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget includes subscriptions.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-includesubscription
         */
        readonly includeSubscription?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget includes support subscription fees.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-includesupport
         */
        readonly includeSupport?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget includes taxes.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-includetax
         */
        readonly includeTax?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget includes upfront RI costs.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-includeupfront
         */
        readonly includeUpfront?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget uses the amortized rate.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-useamortized
         */
        readonly useAmortized?: boolean | cdk.IResolvable;
        /**
         * Specifies whether a budget uses a blended rate.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html#cfn-budgets-budget-costtypes-useblended
         */
        readonly useBlended?: boolean | cdk.IResolvable;
    }
    /**
     * The tag structure that contains a tag key and value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-resourcetag.html
     */
    interface ResourceTagProperty {
        /**
         * The key that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-resourcetag.html#cfn-budgets-budget-resourcetag-key
         */
        readonly key: string;
        /**
         * The value that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-resourcetag.html#cfn-budgets-budget-resourcetag-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnBudget`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html
 */
export interface CfnBudgetProps {
    /**
     * The budget object that you want to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budget
     */
    readonly budget: CfnBudget.BudgetDataProperty | cdk.IResolvable;
    /**
     * A notification that you want to associate with a budget.
     *
     * A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your `CreateBudget` call, AWS creates the notifications and subscribers for you.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-notificationswithsubscribers
     */
    readonly notificationsWithSubscribers?: Array<cdk.IResolvable | CfnBudget.NotificationWithSubscribersProperty> | cdk.IResolvable;
    /**
     * An optional list of tags to associate with the specified budget.
     *
     * Each tag consists of a key and a value, and each key must be unique for the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-resourcetags
     */
    readonly resourceTags?: Array<cdk.IResolvable | CfnBudget.ResourceTagProperty> | cdk.IResolvable;
}
/**
 * The `AWS::Budgets::BudgetsAction` resource enables you to take predefined actions that are initiated when a budget threshold has been exceeded.
 *
 * For more information, see [Managing Your Costs with Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) in the *AWS Billing and Cost Management User Guide* .
 *
 * @cloudformationResource AWS::Budgets::BudgetsAction
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html
 */
export declare class CfnBudgetsAction extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBudgetsAction from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBudgetsAction;
    /**
     * A system-generated universally unique identifier (UUID) for the action.
     *
     * @cloudformationAttribute ActionId
     */
    readonly attrActionId: string;
    /**
     * The trigger threshold of the action.
     */
    actionThreshold: CfnBudgetsAction.ActionThresholdProperty | cdk.IResolvable;
    /**
     * The type of action.
     */
    actionType: string;
    /**
     * This specifies if the action needs manual or automatic approval.
     */
    approvalModel?: string;
    /**
     * A string that represents the budget name.
     */
    budgetName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies all of the type-specific parameters.
     */
    definition: CfnBudgetsAction.DefinitionProperty | cdk.IResolvable;
    /**
     * The role passed for action execution and reversion.
     */
    executionRoleArn: string;
    /**
     * The type of a notification.
     */
    notificationType: string;
    /**
     * An optional list of tags to associate with the specified budget action.
     */
    resourceTags?: Array<CfnBudgetsAction.ResourceTagProperty>;
    /**
     * A list of subscribers.
     */
    subscribers: Array<cdk.IResolvable | CfnBudgetsAction.SubscriberProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBudgetsActionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBudgetsAction {
    /**
     * The trigger threshold of the action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-actionthreshold.html
     */
    interface ActionThresholdProperty {
        /**
         * The type of threshold for a notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-actionthreshold.html#cfn-budgets-budgetsaction-actionthreshold-type
         */
        readonly type: string;
        /**
         * The threshold of a notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-actionthreshold.html#cfn-budgets-budgetsaction-actionthreshold-value
         */
        readonly value: number;
    }
    /**
     * The definition is where you specify all of the type-specific parameters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-definition.html
     */
    interface DefinitionProperty {
        /**
         * The AWS Identity and Access Management ( IAM ) action definition details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-definition.html#cfn-budgets-budgetsaction-definition-iamactiondefinition
         */
        readonly iamActionDefinition?: CfnBudgetsAction.IamActionDefinitionProperty | cdk.IResolvable;
        /**
         * The service control policies (SCP) action definition details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-definition.html#cfn-budgets-budgetsaction-definition-scpactiondefinition
         */
        readonly scpActionDefinition?: cdk.IResolvable | CfnBudgetsAction.ScpActionDefinitionProperty;
        /**
         * The Amazon EC2 Systems Manager ( SSM ) action definition details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-definition.html#cfn-budgets-budgetsaction-definition-ssmactiondefinition
         */
        readonly ssmActionDefinition?: cdk.IResolvable | CfnBudgetsAction.SsmActionDefinitionProperty;
    }
    /**
     * The Amazon EC2 Systems Manager ( SSM ) action definition details.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-ssmactiondefinition.html
     */
    interface SsmActionDefinitionProperty {
        /**
         * The EC2 and RDS instance IDs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-ssmactiondefinition.html#cfn-budgets-budgetsaction-ssmactiondefinition-instanceids
         */
        readonly instanceIds: Array<string>;
        /**
         * The Region to run the ( SSM ) document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-ssmactiondefinition.html#cfn-budgets-budgetsaction-ssmactiondefinition-region
         */
        readonly region: string;
        /**
         * The action subType.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-ssmactiondefinition.html#cfn-budgets-budgetsaction-ssmactiondefinition-subtype
         */
        readonly subtype: string;
    }
    /**
     * The AWS Identity and Access Management ( IAM ) action definition details.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-iamactiondefinition.html
     */
    interface IamActionDefinitionProperty {
        /**
         * A list of groups to be attached.
         *
         * There must be at least one group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-iamactiondefinition.html#cfn-budgets-budgetsaction-iamactiondefinition-groups
         */
        readonly groups?: Array<string>;
        /**
         * The Amazon Resource Name (ARN) of the policy to be attached.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-iamactiondefinition.html#cfn-budgets-budgetsaction-iamactiondefinition-policyarn
         */
        readonly policyArn: string;
        /**
         * A list of roles to be attached.
         *
         * There must be at least one role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-iamactiondefinition.html#cfn-budgets-budgetsaction-iamactiondefinition-roles
         */
        readonly roles?: Array<string>;
        /**
         * A list of users to be attached.
         *
         * There must be at least one user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-iamactiondefinition.html#cfn-budgets-budgetsaction-iamactiondefinition-users
         */
        readonly users?: Array<string>;
    }
    /**
     * The service control policies (SCP) action definition details.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-scpactiondefinition.html
     */
    interface ScpActionDefinitionProperty {
        /**
         * The policy ID attached.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-scpactiondefinition.html#cfn-budgets-budgetsaction-scpactiondefinition-policyid
         */
        readonly policyId: string;
        /**
         * A list of target IDs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-scpactiondefinition.html#cfn-budgets-budgetsaction-scpactiondefinition-targetids
         */
        readonly targetIds: Array<string>;
    }
    /**
     * The subscriber to a budget notification.
     *
     * The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.
     *
     * For example, an email subscriber has the following parameters:
     *
     * - A `subscriptionType` of `EMAIL`
     * - An `address` of `example@example.com`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-subscriber.html
     */
    interface SubscriberProperty {
        /**
         * The address that AWS sends budget notifications to, either an SNS topic or an email.
         *
         * When you create a subscriber, the value of `Address` can't contain line breaks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-subscriber.html#cfn-budgets-budgetsaction-subscriber-address
         */
        readonly address: string;
        /**
         * The type of notification that AWS sends to a subscriber.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-subscriber.html#cfn-budgets-budgetsaction-subscriber-type
         */
        readonly type: string;
    }
    /**
     * The tag structure that contains a tag key and value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-resourcetag.html
     */
    interface ResourceTagProperty {
        /**
         * The key that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-resourcetag.html#cfn-budgets-budgetsaction-resourcetag-key
         */
        readonly key: string;
        /**
         * The value that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-resourcetag.html#cfn-budgets-budgetsaction-resourcetag-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnBudgetsAction`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html
 */
export interface CfnBudgetsActionProps {
    /**
     * The trigger threshold of the action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-actionthreshold
     */
    readonly actionThreshold: CfnBudgetsAction.ActionThresholdProperty | cdk.IResolvable;
    /**
     * The type of action.
     *
     * This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-actiontype
     */
    readonly actionType: string;
    /**
     * This specifies if the action needs manual or automatic approval.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-approvalmodel
     */
    readonly approvalModel?: string;
    /**
     * A string that represents the budget name.
     *
     * ":" and "\" characters aren't allowed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-budgetname
     */
    readonly budgetName: string;
    /**
     * Specifies all of the type-specific parameters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-definition
     */
    readonly definition: CfnBudgetsAction.DefinitionProperty | cdk.IResolvable;
    /**
     * The role passed for action execution and reversion.
     *
     * Roles and actions must be in the same account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-executionrolearn
     */
    readonly executionRoleArn: string;
    /**
     * The type of a notification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-notificationtype
     */
    readonly notificationType: string;
    /**
     * An optional list of tags to associate with the specified budget action.
     *
     * Each tag consists of a key and a value, and each key must be unique for the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-resourcetags
     */
    readonly resourceTags?: Array<CfnBudgetsAction.ResourceTagProperty>;
    /**
     * A list of subscribers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-subscribers
     */
    readonly subscribers: Array<cdk.IResolvable | CfnBudgetsAction.SubscriberProperty> | cdk.IResolvable;
}
