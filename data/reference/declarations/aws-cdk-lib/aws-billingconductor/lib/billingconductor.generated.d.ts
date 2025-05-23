import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a billing group that resembles a consolidated billing family that AWS charges, based off of the predefined pricing plan computation.
 *
 * @cloudformationResource AWS::BillingConductor::BillingGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html
 */
export declare class CfnBillingGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBillingGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBillingGroup;
    /**
     * The Amazon Resource Name (ARN) of the created billing group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time the billing group was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: number;
    /**
     * The most recent time the billing group was modified.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: number;
    /**
     * The number of accounts in the particular billing group.
     *
     * @cloudformationAttribute Size
     */
    readonly attrSize: number;
    /**
     * The billing group status. Only one of the valid values can be used.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The reason why the billing group is in its current status.
     *
     * @cloudformationAttribute StatusReason
     */
    readonly attrStatusReason: string;
    /**
     * The set of accounts that will be under the billing group.
     */
    accountGrouping: CfnBillingGroup.AccountGroupingProperty | cdk.IResolvable;
    /**
     * The preferences and settings that will be used to compute the AWS charges for a billing group.
     */
    computationPreference: CfnBillingGroup.ComputationPreferenceProperty | cdk.IResolvable;
    /**
     * The description of the billing group.
     */
    description?: string;
    /**
     * The billing group's name.
     */
    name: string;
    /**
     * The account ID that serves as the main account in a billing group.
     */
    primaryAccountId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A map that contains tag keys and tag values that are attached to a billing group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBillingGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBillingGroup {
    /**
     * The preferences and settings that will be used to compute the AWS charges for a billing group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-computationpreference.html
     */
    interface ComputationPreferenceProperty {
        /**
         * The Amazon Resource Name (ARN) of the pricing plan used to compute the AWS charges for a billing group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-computationpreference.html#cfn-billingconductor-billinggroup-computationpreference-pricingplanarn
         */
        readonly pricingPlanArn: string;
    }
    /**
     * The set of accounts that will be under the billing group.
     *
     * The set of accounts resemble the linked accounts in a consolidated billing family.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-accountgrouping.html
     */
    interface AccountGroupingProperty {
        /**
         * Specifies if this billing group will automatically associate newly added AWS accounts that join your consolidated billing family.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-accountgrouping.html#cfn-billingconductor-billinggroup-accountgrouping-autoassociate
         */
        readonly autoAssociate?: boolean | cdk.IResolvable;
        /**
         * The account IDs that make up the billing group.
         *
         * Account IDs must be a part of the consolidated billing family, and not associated with another billing group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-accountgrouping.html#cfn-billingconductor-billinggroup-accountgrouping-linkedaccountids
         */
        readonly linkedAccountIds: Array<string>;
    }
}
/**
 * Properties for defining a `CfnBillingGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html
 */
export interface CfnBillingGroupProps {
    /**
     * The set of accounts that will be under the billing group.
     *
     * The set of accounts resemble the linked accounts in a consolidated billing family.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-accountgrouping
     */
    readonly accountGrouping: CfnBillingGroup.AccountGroupingProperty | cdk.IResolvable;
    /**
     * The preferences and settings that will be used to compute the AWS charges for a billing group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-computationpreference
     */
    readonly computationPreference: CfnBillingGroup.ComputationPreferenceProperty | cdk.IResolvable;
    /**
     * The description of the billing group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-description
     */
    readonly description?: string;
    /**
     * The billing group's name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-name
     */
    readonly name: string;
    /**
     * The account ID that serves as the main account in a billing group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-primaryaccountid
     */
    readonly primaryAccountId: string;
    /**
     * A map that contains tag keys and tag values that are attached to a billing group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a custom line item that can be used to create a one-time or recurring, fixed or percentage-based charge that you can apply to a single billing group.
 *
 * You can apply custom line items to the current or previous billing period. You can create either a fee or a discount custom line item.
 *
 * @cloudformationResource AWS::BillingConductor::CustomLineItem
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html
 */
export declare class CfnCustomLineItem extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCustomLineItem from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCustomLineItem;
    /**
     * The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The number of resources that are associated to the custom line item.
     *
     * @cloudformationAttribute AssociationSize
     */
    readonly attrAssociationSize: number;
    /**
     * The time created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: number;
    /**
     * The custom line item's charge value currency. Only one of the valid values can be used.
     *
     * @cloudformationAttribute CurrencyCode
     */
    readonly attrCurrencyCode: string;
    /**
     * The most recent time the custom line item was modified.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: number;
    /**
     * The product code associated with the custom line item.
     *
     * @cloudformationAttribute ProductCode
     */
    readonly attrProductCode: string;
    /**
     * The AWS account in which this custom line item will be applied to.
     */
    accountId?: string;
    /**
     * The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
     */
    billingGroupArn: string;
    /**
     * A time range for which the custom line item is effective.
     */
    billingPeriodRange?: CfnCustomLineItem.BillingPeriodRangeProperty | cdk.IResolvable;
    /**
     * The charge details of a custom line item.
     */
    customLineItemChargeDetails?: CfnCustomLineItem.CustomLineItemChargeDetailsProperty | cdk.IResolvable;
    /**
     * The custom line item's description.
     */
    description?: string;
    /**
     * The custom line item's name.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A map that contains tag keys and tag values that are attached to a custom line item.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCustomLineItemProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCustomLineItem {
    /**
     * The billing period range in which the custom line item request will be applied.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-billingperiodrange.html
     */
    interface BillingPeriodRangeProperty {
        /**
         * The exclusive end billing period that defines a billing period range where a custom line is applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-billingperiodrange.html#cfn-billingconductor-customlineitem-billingperiodrange-exclusiveendbillingperiod
         */
        readonly exclusiveEndBillingPeriod?: string;
        /**
         * The inclusive start billing period that defines a billing period range where a custom line is applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-billingperiodrange.html#cfn-billingconductor-customlineitem-billingperiodrange-inclusivestartbillingperiod
         */
        readonly inclusiveStartBillingPeriod?: string;
    }
    /**
     * The charge details of a custom line item.
     *
     * It should contain only one of `Flat` or `Percentage` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemchargedetails.html
     */
    interface CustomLineItemChargeDetailsProperty {
        /**
         * A `CustomLineItemFlatChargeDetails` that describes the charge details of a flat custom line item.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemchargedetails.html#cfn-billingconductor-customlineitem-customlineitemchargedetails-flat
         */
        readonly flat?: CfnCustomLineItem.CustomLineItemFlatChargeDetailsProperty | cdk.IResolvable;
        /**
         * A representation of the line item filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemchargedetails.html#cfn-billingconductor-customlineitem-customlineitemchargedetails-lineitemfilters
         */
        readonly lineItemFilters?: Array<cdk.IResolvable | CfnCustomLineItem.LineItemFilterProperty> | cdk.IResolvable;
        /**
         * A `CustomLineItemPercentageChargeDetails` that describes the charge details of a percentage custom line item.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemchargedetails.html#cfn-billingconductor-customlineitem-customlineitemchargedetails-percentage
         */
        readonly percentage?: CfnCustomLineItem.CustomLineItemPercentageChargeDetailsProperty | cdk.IResolvable;
        /**
         * The type of the custom line item that indicates whether the charge is a fee or credit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemchargedetails.html#cfn-billingconductor-customlineitem-customlineitemchargedetails-type
         */
        readonly type: string;
    }
    /**
     * A representation of the line item filter for your custom line item.
     *
     * You can use line item filters to include or exclude specific resource values from the billing group's total cost. For example, if you create a custom line item and you want to filter out a value, such as Savings Plan discounts, you can update `LineItemFilter` to exclude it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-lineitemfilter.html
     */
    interface LineItemFilterProperty {
        /**
         * The attribute of the line item filter.
         *
         * This specifies what attribute that you can filter on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-lineitemfilter.html#cfn-billingconductor-customlineitem-lineitemfilter-attribute
         */
        readonly attribute: string;
        /**
         * The match criteria of the line item filter.
         *
         * This parameter specifies whether not to include the resource value from the billing group total cost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-lineitemfilter.html#cfn-billingconductor-customlineitem-lineitemfilter-matchoption
         */
        readonly matchOption: string;
        /**
         * The values of the line item filter.
         *
         * This specifies the values to filter on. Currently, you can only exclude Savings Plan discounts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-lineitemfilter.html#cfn-billingconductor-customlineitem-lineitemfilter-values
         */
        readonly values: Array<string>;
    }
    /**
     * A representation of the charge details associated with a percentage custom line item.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitempercentagechargedetails.html
     */
    interface CustomLineItemPercentageChargeDetailsProperty {
        /**
         * A list of resource ARNs to associate to the percentage custom line item.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitempercentagechargedetails.html#cfn-billingconductor-customlineitem-customlineitempercentagechargedetails-childassociatedresources
         */
        readonly childAssociatedResources?: Array<string>;
        /**
         * The custom line item's percentage value.
         *
         * This will be multiplied against the combined value of its associated resources to determine its charge value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitempercentagechargedetails.html#cfn-billingconductor-customlineitem-customlineitempercentagechargedetails-percentagevalue
         */
        readonly percentageValue: number;
    }
    /**
     * The charge details of a custom line item.
     *
     * It should contain only one of `Flat` or `Percentage` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemflatchargedetails.html
     */
    interface CustomLineItemFlatChargeDetailsProperty {
        /**
         * The custom line item's fixed charge value in USD.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemflatchargedetails.html#cfn-billingconductor-customlineitem-customlineitemflatchargedetails-chargevalue
         */
        readonly chargeValue: number;
    }
}
/**
 * Properties for defining a `CfnCustomLineItem`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html
 */
export interface CfnCustomLineItemProps {
    /**
     * The AWS account in which this custom line item will be applied to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-accountid
     */
    readonly accountId?: string;
    /**
     * The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-billinggrouparn
     */
    readonly billingGroupArn: string;
    /**
     * A time range for which the custom line item is effective.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-billingperiodrange
     */
    readonly billingPeriodRange?: CfnCustomLineItem.BillingPeriodRangeProperty | cdk.IResolvable;
    /**
     * The charge details of a custom line item.
     *
     * It should contain only one of `Flat` or `Percentage` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-customlineitemchargedetails
     */
    readonly customLineItemChargeDetails?: CfnCustomLineItem.CustomLineItemChargeDetailsProperty | cdk.IResolvable;
    /**
     * The custom line item's description.
     *
     * This is shown on the Bills page in association with the charge value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-description
     */
    readonly description?: string;
    /**
     * The custom line item's name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-name
     */
    readonly name: string;
    /**
     * A map that contains tag keys and tag values that are attached to a custom line item.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a pricing plan that is used for computing AWS charges for billing groups.
 *
 * @cloudformationResource AWS::BillingConductor::PricingPlan
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html
 */
export declare class CfnPricingPlan extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPricingPlan from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPricingPlan;
    /**
     * The Amazon Resource Name (ARN) of the created pricing plan.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time the pricing plan was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: number;
    /**
     * The most recent time the pricing plan was modified.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: number;
    /**
     * The pricing rules count currently associated with this pricing plan list element.
     *
     * @cloudformationAttribute Size
     */
    readonly attrSize: number;
    /**
     * The pricing plan description.
     */
    description?: string;
    /**
     * The name of a pricing plan.
     */
    name: string;
    /**
     * The `PricingRuleArns` that are associated with the Pricing Plan.
     */
    pricingRuleArns?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A map that contains tag keys and tag values that are attached to a pricing plan.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPricingPlanProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnPricingPlan`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html
 */
export interface CfnPricingPlanProps {
    /**
     * The pricing plan description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html#cfn-billingconductor-pricingplan-description
     */
    readonly description?: string;
    /**
     * The name of a pricing plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html#cfn-billingconductor-pricingplan-name
     */
    readonly name: string;
    /**
     * The `PricingRuleArns` that are associated with the Pricing Plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html#cfn-billingconductor-pricingplan-pricingrulearns
     */
    readonly pricingRuleArns?: Array<string>;
    /**
     * A map that contains tag keys and tag values that are attached to a pricing plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html#cfn-billingconductor-pricingplan-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a pricing rule which can be associated with a pricing plan, or a set of pricing plans.
 *
 * @cloudformationResource AWS::BillingConductor::PricingRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html
 */
export declare class CfnPricingRule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPricingRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPricingRule;
    /**
     * The Amazon Resource Name (ARN) used to uniquely identify a pricing rule.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The pricing plans count that this pricing rule is associated with.
     *
     * @cloudformationAttribute AssociatedPricingPlanCount
     */
    readonly attrAssociatedPricingPlanCount: number;
    /**
     * The time the pricing rule was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: number;
    /**
     * The most recent time the pricing rule was modified.
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: number;
    /**
     * The seller of services provided by AWS , their affiliates, or third-party providers selling services via AWS Marketplace .
     */
    billingEntity?: string;
    /**
     * The pricing rule description.
     */
    description?: string;
    /**
     * A percentage modifier applied on the public pricing rates.
     */
    modifierPercentage?: number;
    /**
     * The name of a pricing rule.
     */
    name: string;
    /**
     * Operation is the specific AWS action covered by this line item.
     */
    operation?: string;
    /**
     * The scope of pricing rule that indicates if it's globally applicable or service-specific.
     */
    scope: string;
    /**
     * If the `Scope` attribute is `SERVICE` , this attribute indicates which service the `PricingRule` is applicable for.
     */
    service?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A map that contains tag keys and tag values that are attached to a pricing rule.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The set of tiering configurations for the pricing rule.
     */
    tiering?: cdk.IResolvable | CfnPricingRule.TieringProperty;
    /**
     * The type of pricing rule.
     */
    type: string;
    /**
     * Usage Type is the unit that each service uses to measure the usage of a specific type of resource.
     */
    usageType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPricingRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPricingRule {
    /**
     * The set of tiering configurations for the pricing rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-pricingrule-tiering.html
     */
    interface TieringProperty {
        /**
         * The possible AWS Free Tier configurations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-pricingrule-tiering.html#cfn-billingconductor-pricingrule-tiering-freetier
         */
        readonly freeTier?: CfnPricingRule.FreeTierProperty | cdk.IResolvable;
    }
    /**
     * The possible AWS Free Tier configurations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-pricingrule-freetier.html
     */
    interface FreeTierProperty {
        /**
         * Activate or deactivate AWS Free Tier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-pricingrule-freetier.html#cfn-billingconductor-pricingrule-freetier-activated
         */
        readonly activated: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnPricingRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html
 */
export interface CfnPricingRuleProps {
    /**
     * The seller of services provided by AWS , their affiliates, or third-party providers selling services via AWS Marketplace .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-billingentity
     */
    readonly billingEntity?: string;
    /**
     * The pricing rule description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-description
     */
    readonly description?: string;
    /**
     * A percentage modifier applied on the public pricing rates.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-modifierpercentage
     */
    readonly modifierPercentage?: number;
    /**
     * The name of a pricing rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-name
     */
    readonly name: string;
    /**
     * Operation is the specific AWS action covered by this line item.
     *
     * This describes the specific usage of the line item.
     *
     * If the `Scope` attribute is set to `SKU` , this attribute indicates which operation the `PricingRule` is modifying. For example, a value of `RunInstances:0202` indicates the operation of running an Amazon EC2 instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-operation
     */
    readonly operation?: string;
    /**
     * The scope of pricing rule that indicates if it's globally applicable or service-specific.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-scope
     */
    readonly scope: string;
    /**
     * If the `Scope` attribute is `SERVICE` , this attribute indicates which service the `PricingRule` is applicable for.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-service
     */
    readonly service?: string;
    /**
     * A map that contains tag keys and tag values that are attached to a pricing rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The set of tiering configurations for the pricing rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-tiering
     */
    readonly tiering?: cdk.IResolvable | CfnPricingRule.TieringProperty;
    /**
     * The type of pricing rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-type
     */
    readonly type: string;
    /**
     * Usage Type is the unit that each service uses to measure the usage of a specific type of resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-usagetype
     */
    readonly usageType?: string;
}
