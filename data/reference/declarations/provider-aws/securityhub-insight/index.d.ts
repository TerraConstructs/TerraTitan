/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubInsightConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#group_by_attribute SecurityhubInsight#group_by_attribute}
    */
    readonly groupByAttribute: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#id SecurityhubInsight#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#name SecurityhubInsight#name}
    */
    readonly name: string;
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#filters SecurityhubInsight#filters}
    */
    readonly filters: SecurityhubInsightFilters;
}
export interface SecurityhubInsightFiltersAwsAccountId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersAwsAccountIdToTerraform(struct?: SecurityhubInsightFiltersAwsAccountId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersAwsAccountIdToHclTerraform(struct?: SecurityhubInsightFiltersAwsAccountId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersAwsAccountIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersAwsAccountId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersAwsAccountId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersAwsAccountIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersAwsAccountId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersAwsAccountIdOutputReference;
}
export interface SecurityhubInsightFiltersCompanyName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersCompanyNameToTerraform(struct?: SecurityhubInsightFiltersCompanyName | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersCompanyNameToHclTerraform(struct?: SecurityhubInsightFiltersCompanyName | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersCompanyNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersCompanyName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersCompanyName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersCompanyNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersCompanyName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersCompanyNameOutputReference;
}
export interface SecurityhubInsightFiltersComplianceStatus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersComplianceStatusToTerraform(struct?: SecurityhubInsightFiltersComplianceStatus | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersComplianceStatusToHclTerraform(struct?: SecurityhubInsightFiltersComplianceStatus | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersComplianceStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersComplianceStatus | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersComplianceStatus | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersComplianceStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersComplianceStatus[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersComplianceStatusOutputReference;
}
export interface SecurityhubInsightFiltersConfidence {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersConfidenceToTerraform(struct?: SecurityhubInsightFiltersConfidence | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersConfidenceToHclTerraform(struct?: SecurityhubInsightFiltersConfidence | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersConfidence | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersConfidence | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): string;
    set eq(value: string);
    resetEq(): void;
    get eqInput(): string | undefined;
    private _gte?;
    get gte(): string;
    set gte(value: string);
    resetGte(): void;
    get gteInput(): string | undefined;
    private _lte?;
    get lte(): string;
    set lte(value: string);
    resetLte(): void;
    get lteInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersConfidenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersConfidence[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersConfidenceOutputReference;
}
export interface SecurityhubInsightFiltersCreatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersCreatedAtDateRange): any;
export declare function securityhubInsightFiltersCreatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersCreatedAtDateRange): any;
export declare class SecurityhubInsightFiltersCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersCreatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersCreatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersCreatedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersCreatedAtDateRange;
}
export declare function securityhubInsightFiltersCreatedAtToTerraform(struct?: SecurityhubInsightFiltersCreatedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersCreatedAtToHclTerraform(struct?: SecurityhubInsightFiltersCreatedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersCreatedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersCreatedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersCreatedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersCreatedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersCreatedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersCreatedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersCreatedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersCreatedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersCreatedAtOutputReference;
}
export interface SecurityhubInsightFiltersCriticality {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersCriticalityToTerraform(struct?: SecurityhubInsightFiltersCriticality | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersCriticalityToHclTerraform(struct?: SecurityhubInsightFiltersCriticality | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersCriticalityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersCriticality | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersCriticality | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): string;
    set eq(value: string);
    resetEq(): void;
    get eqInput(): string | undefined;
    private _gte?;
    get gte(): string;
    set gte(value: string);
    resetGte(): void;
    get gteInput(): string | undefined;
    private _lte?;
    get lte(): string;
    set lte(value: string);
    resetLte(): void;
    get lteInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersCriticalityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersCriticality[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersCriticalityOutputReference;
}
export interface SecurityhubInsightFiltersDescription {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersDescriptionToTerraform(struct?: SecurityhubInsightFiltersDescription | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersDescriptionToHclTerraform(struct?: SecurityhubInsightFiltersDescription | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersDescriptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersDescription | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersDescription | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersDescriptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersDescription[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersDescriptionOutputReference;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsConfidence {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsConfidence | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersFindingProviderFieldsConfidenceToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsConfidence | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersFindingProviderFieldsConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsConfidence | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsConfidence | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): string;
    set eq(value: string);
    resetEq(): void;
    get eqInput(): string | undefined;
    private _gte?;
    get gte(): string;
    set gte(value: string);
    resetGte(): void;
    get gteInput(): string | undefined;
    private _lte?;
    get lte(): string;
    set lte(value: string);
    resetLte(): void;
    get lteInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersFindingProviderFieldsConfidenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersFindingProviderFieldsConfidenceOutputReference;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsCriticality {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsCriticality | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersFindingProviderFieldsCriticalityToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsCriticality | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersFindingProviderFieldsCriticalityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsCriticality | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsCriticality | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): string;
    set eq(value: string);
    resetEq(): void;
    get eqInput(): string | undefined;
    private _gte?;
    get gte(): string;
    set gte(value: string);
    resetGte(): void;
    get gteInput(): string | undefined;
    private _lte?;
    get lte(): string;
    set lte(value: string);
    resetLte(): void;
    get lteInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersFindingProviderFieldsCriticalityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersFindingProviderFieldsCriticalityOutputReference;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdOutputReference;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnOutputReference;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelOutputReference;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalOutputReference;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsTypes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsTypesToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsTypes | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersFindingProviderFieldsTypesToHclTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsTypes | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersFindingProviderFieldsTypesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersFindingProviderFieldsTypes | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersFindingProviderFieldsTypes | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersFindingProviderFieldsTypesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersFindingProviderFieldsTypesOutputReference;
}
export interface SecurityhubInsightFiltersFirstObservedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference | SecurityhubInsightFiltersFirstObservedAtDateRange): any;
export declare function securityhubInsightFiltersFirstObservedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference | SecurityhubInsightFiltersFirstObservedAtDateRange): any;
export declare class SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersFirstObservedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersFirstObservedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersFirstObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersFirstObservedAtDateRange;
}
export declare function securityhubInsightFiltersFirstObservedAtToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersFirstObservedAtToHclTerraform(struct?: SecurityhubInsightFiltersFirstObservedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersFirstObservedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersFirstObservedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersFirstObservedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersFirstObservedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersFirstObservedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersFirstObservedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersFirstObservedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersFirstObservedAtOutputReference;
}
export interface SecurityhubInsightFiltersGeneratorId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersGeneratorIdToTerraform(struct?: SecurityhubInsightFiltersGeneratorId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersGeneratorIdToHclTerraform(struct?: SecurityhubInsightFiltersGeneratorId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersGeneratorIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersGeneratorId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersGeneratorId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersGeneratorIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersGeneratorId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersGeneratorIdOutputReference;
}
export interface SecurityhubInsightFiltersId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersIdToTerraform(struct?: SecurityhubInsightFiltersId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersIdToHclTerraform(struct?: SecurityhubInsightFiltersId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersIdOutputReference;
}
export interface SecurityhubInsightFiltersKeyword {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersKeywordToTerraform(struct?: SecurityhubInsightFiltersKeyword | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersKeywordToHclTerraform(struct?: SecurityhubInsightFiltersKeyword | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersKeywordOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersKeyword | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersKeyword | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersKeywordList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersKeyword[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersKeywordOutputReference;
}
export interface SecurityhubInsightFiltersLastObservedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersLastObservedAtDateRange): any;
export declare function securityhubInsightFiltersLastObservedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersLastObservedAtDateRange): any;
export declare class SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersLastObservedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersLastObservedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersLastObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersLastObservedAtDateRange;
}
export declare function securityhubInsightFiltersLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersLastObservedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersLastObservedAtToHclTerraform(struct?: SecurityhubInsightFiltersLastObservedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersLastObservedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersLastObservedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersLastObservedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersLastObservedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersLastObservedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersLastObservedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersLastObservedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersLastObservedAtOutputReference;
}
export interface SecurityhubInsightFiltersMalwareName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersMalwareNameToTerraform(struct?: SecurityhubInsightFiltersMalwareName | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersMalwareNameToHclTerraform(struct?: SecurityhubInsightFiltersMalwareName | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersMalwareNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersMalwareName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersMalwareName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersMalwareNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersMalwareName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersMalwareNameOutputReference;
}
export interface SecurityhubInsightFiltersMalwarePath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersMalwarePathToTerraform(struct?: SecurityhubInsightFiltersMalwarePath | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersMalwarePathToHclTerraform(struct?: SecurityhubInsightFiltersMalwarePath | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersMalwarePathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersMalwarePath | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersMalwarePath | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersMalwarePathList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersMalwarePath[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersMalwarePathOutputReference;
}
export interface SecurityhubInsightFiltersMalwareState {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersMalwareStateToTerraform(struct?: SecurityhubInsightFiltersMalwareState | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersMalwareStateToHclTerraform(struct?: SecurityhubInsightFiltersMalwareState | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersMalwareStateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersMalwareState | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersMalwareState | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersMalwareStateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersMalwareState[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersMalwareStateOutputReference;
}
export interface SecurityhubInsightFiltersMalwareType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersMalwareTypeToTerraform(struct?: SecurityhubInsightFiltersMalwareType | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersMalwareTypeToHclTerraform(struct?: SecurityhubInsightFiltersMalwareType | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersMalwareTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersMalwareType | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersMalwareType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersMalwareTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersMalwareType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersMalwareTypeOutputReference;
}
export interface SecurityhubInsightFiltersNetworkDestinationDomain {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkDestinationDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationDomain | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkDestinationDomainToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationDomain | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkDestinationDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkDestinationDomain | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkDestinationDomain | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkDestinationDomainList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkDestinationDomainOutputReference;
}
export interface SecurityhubInsightFiltersNetworkDestinationIpv4 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersNetworkDestinationIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv4 | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkDestinationIpv4ToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv4 | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkDestinationIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkDestinationIpv4 | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkDestinationIpv4 | cdktf.IResolvable | undefined);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkDestinationIpv4List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkDestinationIpv4[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkDestinationIpv4OutputReference;
}
export interface SecurityhubInsightFiltersNetworkDestinationIpv6 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersNetworkDestinationIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv6 | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkDestinationIpv6ToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv6 | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkDestinationIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkDestinationIpv6 | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkDestinationIpv6 | cdktf.IResolvable | undefined);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkDestinationIpv6List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkDestinationIpv6[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkDestinationIpv6OutputReference;
}
export interface SecurityhubInsightFiltersNetworkDestinationPort {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersNetworkDestinationPortToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationPort | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkDestinationPortToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationPort | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkDestinationPortOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkDestinationPort | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkDestinationPort | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): string;
    set eq(value: string);
    resetEq(): void;
    get eqInput(): string | undefined;
    private _gte?;
    get gte(): string;
    set gte(value: string);
    resetGte(): void;
    get gteInput(): string | undefined;
    private _lte?;
    get lte(): string;
    set lte(value: string);
    resetLte(): void;
    get lteInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkDestinationPortList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkDestinationPort[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkDestinationPortOutputReference;
}
export interface SecurityhubInsightFiltersNetworkDirection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkDirectionToTerraform(struct?: SecurityhubInsightFiltersNetworkDirection | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkDirectionToHclTerraform(struct?: SecurityhubInsightFiltersNetworkDirection | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkDirectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkDirection | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkDirection | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkDirectionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkDirection[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkDirectionOutputReference;
}
export interface SecurityhubInsightFiltersNetworkProtocol {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkProtocolToTerraform(struct?: SecurityhubInsightFiltersNetworkProtocol | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkProtocolToHclTerraform(struct?: SecurityhubInsightFiltersNetworkProtocol | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkProtocolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkProtocol | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkProtocol | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkProtocolList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkProtocol[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkProtocolOutputReference;
}
export interface SecurityhubInsightFiltersNetworkSourceDomain {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkSourceDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceDomain | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkSourceDomainToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourceDomain | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkSourceDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkSourceDomain | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkSourceDomain | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkSourceDomainList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkSourceDomain[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkSourceDomainOutputReference;
}
export interface SecurityhubInsightFiltersNetworkSourceIpv4 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersNetworkSourceIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv4 | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkSourceIpv4ToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv4 | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkSourceIpv4OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkSourceIpv4 | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkSourceIpv4 | cdktf.IResolvable | undefined);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkSourceIpv4List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkSourceIpv4[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkSourceIpv4OutputReference;
}
export interface SecurityhubInsightFiltersNetworkSourceIpv6 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersNetworkSourceIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv6 | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkSourceIpv6ToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv6 | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkSourceIpv6OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkSourceIpv6 | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkSourceIpv6 | cdktf.IResolvable | undefined);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkSourceIpv6List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkSourceIpv6[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkSourceIpv6OutputReference;
}
export interface SecurityhubInsightFiltersNetworkSourceMac {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkSourceMacToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceMac | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkSourceMacToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourceMac | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkSourceMacOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkSourceMac | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkSourceMac | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkSourceMacList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkSourceMac[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkSourceMacOutputReference;
}
export interface SecurityhubInsightFiltersNetworkSourcePort {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersNetworkSourcePortToTerraform(struct?: SecurityhubInsightFiltersNetworkSourcePort | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNetworkSourcePortToHclTerraform(struct?: SecurityhubInsightFiltersNetworkSourcePort | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNetworkSourcePortOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNetworkSourcePort | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNetworkSourcePort | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): string;
    set eq(value: string);
    resetEq(): void;
    get eqInput(): string | undefined;
    private _gte?;
    get gte(): string;
    set gte(value: string);
    resetGte(): void;
    get gteInput(): string | undefined;
    private _lte?;
    get lte(): string;
    set lte(value: string);
    resetLte(): void;
    get lteInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNetworkSourcePortList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNetworkSourcePort[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNetworkSourcePortOutputReference;
}
export interface SecurityhubInsightFiltersNoteText {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNoteTextToTerraform(struct?: SecurityhubInsightFiltersNoteText | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNoteTextToHclTerraform(struct?: SecurityhubInsightFiltersNoteText | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNoteTextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNoteText | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNoteText | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNoteTextList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNoteText[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNoteTextOutputReference;
}
export interface SecurityhubInsightFiltersNoteUpdatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersNoteUpdatedAtDateRange): any;
export declare function securityhubInsightFiltersNoteUpdatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersNoteUpdatedAtDateRange): any;
export declare class SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersNoteUpdatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersNoteUpdatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersNoteUpdatedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersNoteUpdatedAtDateRange;
}
export declare function securityhubInsightFiltersNoteUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNoteUpdatedAtToHclTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNoteUpdatedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNoteUpdatedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNoteUpdatedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersNoteUpdatedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersNoteUpdatedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersNoteUpdatedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNoteUpdatedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNoteUpdatedAtOutputReference;
}
export interface SecurityhubInsightFiltersNoteUpdatedBy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNoteUpdatedByToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedBy | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersNoteUpdatedByToHclTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedBy | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersNoteUpdatedByOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersNoteUpdatedBy | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersNoteUpdatedBy | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersNoteUpdatedByList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersNoteUpdatedBy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersNoteUpdatedByOutputReference;
}
export interface SecurityhubInsightFiltersProcessLaunchedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessLaunchedAtDateRange): any;
export declare function securityhubInsightFiltersProcessLaunchedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessLaunchedAtDateRange): any;
export declare class SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersProcessLaunchedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessLaunchedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersProcessLaunchedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersProcessLaunchedAtDateRange;
}
export declare function securityhubInsightFiltersProcessLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersProcessLaunchedAtToHclTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersProcessLaunchedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersProcessLaunchedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessLaunchedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersProcessLaunchedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersProcessLaunchedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersProcessLaunchedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersProcessLaunchedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersProcessLaunchedAtOutputReference;
}
export interface SecurityhubInsightFiltersProcessName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProcessNameToTerraform(struct?: SecurityhubInsightFiltersProcessName | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersProcessNameToHclTerraform(struct?: SecurityhubInsightFiltersProcessName | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersProcessNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersProcessName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersProcessNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersProcessName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersProcessNameOutputReference;
}
export interface SecurityhubInsightFiltersProcessParentPid {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersProcessParentPidToTerraform(struct?: SecurityhubInsightFiltersProcessParentPid | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersProcessParentPidToHclTerraform(struct?: SecurityhubInsightFiltersProcessParentPid | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersProcessParentPidOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersProcessParentPid | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessParentPid | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): string;
    set eq(value: string);
    resetEq(): void;
    get eqInput(): string | undefined;
    private _gte?;
    get gte(): string;
    set gte(value: string);
    resetGte(): void;
    get gteInput(): string | undefined;
    private _lte?;
    get lte(): string;
    set lte(value: string);
    resetLte(): void;
    get lteInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersProcessParentPidList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersProcessParentPid[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersProcessParentPidOutputReference;
}
export interface SecurityhubInsightFiltersProcessPath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProcessPathToTerraform(struct?: SecurityhubInsightFiltersProcessPath | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersProcessPathToHclTerraform(struct?: SecurityhubInsightFiltersProcessPath | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersProcessPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersProcessPath | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessPath | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersProcessPathList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersProcessPath[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersProcessPathOutputReference;
}
export interface SecurityhubInsightFiltersProcessPid {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersProcessPidToTerraform(struct?: SecurityhubInsightFiltersProcessPid | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersProcessPidToHclTerraform(struct?: SecurityhubInsightFiltersProcessPid | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersProcessPidOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersProcessPid | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessPid | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): string;
    set eq(value: string);
    resetEq(): void;
    get eqInput(): string | undefined;
    private _gte?;
    get gte(): string;
    set gte(value: string);
    resetGte(): void;
    get gteInput(): string | undefined;
    private _lte?;
    get lte(): string;
    set lte(value: string);
    resetLte(): void;
    get lteInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersProcessPidList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersProcessPid[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersProcessPidOutputReference;
}
export interface SecurityhubInsightFiltersProcessTerminatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessTerminatedAtDateRange): any;
export declare function securityhubInsightFiltersProcessTerminatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessTerminatedAtDateRange): any;
export declare class SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersProcessTerminatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessTerminatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersProcessTerminatedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersProcessTerminatedAtDateRange;
}
export declare function securityhubInsightFiltersProcessTerminatedAtToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersProcessTerminatedAtToHclTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersProcessTerminatedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersProcessTerminatedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessTerminatedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersProcessTerminatedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersProcessTerminatedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersProcessTerminatedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersProcessTerminatedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersProcessTerminatedAtOutputReference;
}
export interface SecurityhubInsightFiltersProductArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProductArnToTerraform(struct?: SecurityhubInsightFiltersProductArn | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersProductArnToHclTerraform(struct?: SecurityhubInsightFiltersProductArn | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersProductArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersProductArn | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersProductArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersProductArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersProductArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersProductArnOutputReference;
}
export interface SecurityhubInsightFiltersProductFields {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#key SecurityhubInsight#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProductFieldsToTerraform(struct?: SecurityhubInsightFiltersProductFields | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersProductFieldsToHclTerraform(struct?: SecurityhubInsightFiltersProductFields | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersProductFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersProductFields | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersProductFields | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersProductFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersProductFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersProductFieldsOutputReference;
}
export interface SecurityhubInsightFiltersProductName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProductNameToTerraform(struct?: SecurityhubInsightFiltersProductName | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersProductNameToHclTerraform(struct?: SecurityhubInsightFiltersProductName | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersProductNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersProductName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersProductName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersProductNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersProductName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersProductNameOutputReference;
}
export interface SecurityhubInsightFiltersRecommendationText {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersRecommendationTextToTerraform(struct?: SecurityhubInsightFiltersRecommendationText | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersRecommendationTextToHclTerraform(struct?: SecurityhubInsightFiltersRecommendationText | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersRecommendationTextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersRecommendationText | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersRecommendationText | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersRecommendationTextList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersRecommendationText[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersRecommendationTextOutputReference;
}
export interface SecurityhubInsightFiltersRecordState {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersRecordStateToTerraform(struct?: SecurityhubInsightFiltersRecordState | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersRecordStateToHclTerraform(struct?: SecurityhubInsightFiltersRecordState | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersRecordStateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersRecordState | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersRecordState | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersRecordStateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersRecordState[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersRecordStateOutputReference;
}
export interface SecurityhubInsightFiltersRelatedFindingsId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersRelatedFindingsIdToHclTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersRelatedFindingsIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersRelatedFindingsId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersRelatedFindingsId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersRelatedFindingsIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersRelatedFindingsId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersRelatedFindingsIdOutputReference;
}
export interface SecurityhubInsightFiltersRelatedFindingsProductArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsProductArn | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersRelatedFindingsProductArnToHclTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsProductArn | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersRelatedFindingsProductArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersRelatedFindingsProductArn | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersRelatedFindingsProductArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersRelatedFindingsProductArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersRelatedFindingsProductArnOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceImageId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceImageId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses | cdktf.IResolvable | undefined);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses | cdktf.IResolvable | undefined);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceType | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceTypeToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceType | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceType | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceTypeOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange): any;
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange): any;
export declare class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange;
}
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdOutputReference;
}
export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameOutputReference;
}
export interface SecurityhubInsightFiltersResourceContainerImageId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceContainerImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceContainerImageIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceContainerImageIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceContainerImageId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceContainerImageId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceContainerImageIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceContainerImageId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceContainerImageIdOutputReference;
}
export interface SecurityhubInsightFiltersResourceContainerImageName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceContainerImageNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageName | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceContainerImageNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageName | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceContainerImageNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceContainerImageName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceContainerImageName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceContainerImageNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceContainerImageName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceContainerImageNameOutputReference;
}
export interface SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange): any;
export declare function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange): any;
export declare class SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersResourceContainerLaunchedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange;
}
export declare function securityhubInsightFiltersResourceContainerLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceContainerLaunchedAtToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceContainerLaunchedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceContainerLaunchedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceContainerLaunchedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersResourceContainerLaunchedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceContainerLaunchedAtOutputReference;
}
export interface SecurityhubInsightFiltersResourceContainerName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceContainerNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerName | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceContainerNameToHclTerraform(struct?: SecurityhubInsightFiltersResourceContainerName | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceContainerNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceContainerName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceContainerName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceContainerNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceContainerName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceContainerNameOutputReference;
}
export interface SecurityhubInsightFiltersResourceDetailsOther {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#key SecurityhubInsight#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceDetailsOtherToTerraform(struct?: SecurityhubInsightFiltersResourceDetailsOther | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceDetailsOtherToHclTerraform(struct?: SecurityhubInsightFiltersResourceDetailsOther | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceDetailsOtherOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceDetailsOther | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceDetailsOther | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceDetailsOtherList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceDetailsOther[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceDetailsOtherOutputReference;
}
export interface SecurityhubInsightFiltersResourceId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceIdToTerraform(struct?: SecurityhubInsightFiltersResourceId | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceIdToHclTerraform(struct?: SecurityhubInsightFiltersResourceId | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceIdOutputReference;
}
export interface SecurityhubInsightFiltersResourcePartition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourcePartitionToTerraform(struct?: SecurityhubInsightFiltersResourcePartition | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourcePartitionToHclTerraform(struct?: SecurityhubInsightFiltersResourcePartition | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourcePartitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourcePartition | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourcePartition | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourcePartitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourcePartition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourcePartitionOutputReference;
}
export interface SecurityhubInsightFiltersResourceRegion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceRegionToTerraform(struct?: SecurityhubInsightFiltersResourceRegion | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceRegionToHclTerraform(struct?: SecurityhubInsightFiltersResourceRegion | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceRegionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceRegion | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceRegion | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceRegionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceRegion[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceRegionOutputReference;
}
export interface SecurityhubInsightFiltersResourceTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#key SecurityhubInsight#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceTagsToTerraform(struct?: SecurityhubInsightFiltersResourceTags | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceTagsToHclTerraform(struct?: SecurityhubInsightFiltersResourceTags | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceTags | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceTags | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceTagsOutputReference;
}
export interface SecurityhubInsightFiltersResourceType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceType | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersResourceTypeToHclTerraform(struct?: SecurityhubInsightFiltersResourceType | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersResourceTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceType | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersResourceTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersResourceType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersResourceTypeOutputReference;
}
export interface SecurityhubInsightFiltersSeverityLabel {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersSeverityLabel | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersSeverityLabelToHclTerraform(struct?: SecurityhubInsightFiltersSeverityLabel | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersSeverityLabelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersSeverityLabel | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersSeverityLabel | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersSeverityLabelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersSeverityLabel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersSeverityLabelOutputReference;
}
export interface SecurityhubInsightFiltersSourceUrl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersSourceUrlToTerraform(struct?: SecurityhubInsightFiltersSourceUrl | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersSourceUrlToHclTerraform(struct?: SecurityhubInsightFiltersSourceUrl | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersSourceUrlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersSourceUrl | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersSourceUrl | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersSourceUrlList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersSourceUrl[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersSourceUrlOutputReference;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorCategory | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersThreatIntelIndicatorCategoryToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorCategory | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersThreatIntelIndicatorCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorCategory | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorCategory | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersThreatIntelIndicatorCategoryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorCategoryOutputReference;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange): any;
export declare function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange): any;
export declare class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtOutputReference;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSource | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersThreatIntelIndicatorSourceToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSource | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersThreatIntelIndicatorSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorSource | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorSource | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersThreatIntelIndicatorSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorSourceOutputReference;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlOutputReference;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorType | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersThreatIntelIndicatorTypeToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorType | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersThreatIntelIndicatorTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorType | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersThreatIntelIndicatorTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorTypeOutputReference;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorValueToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorValue | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersThreatIntelIndicatorValueToHclTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorValue | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersThreatIntelIndicatorValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorValue | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorValue | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersThreatIntelIndicatorValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersThreatIntelIndicatorValueOutputReference;
}
export interface SecurityhubInsightFiltersTitle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersTitleToTerraform(struct?: SecurityhubInsightFiltersTitle | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersTitleToHclTerraform(struct?: SecurityhubInsightFiltersTitle | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersTitleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersTitle | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersTitle | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersTitleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersTitle[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersTitleOutputReference;
}
export interface SecurityhubInsightFiltersType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersTypeToTerraform(struct?: SecurityhubInsightFiltersType | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersTypeToHclTerraform(struct?: SecurityhubInsightFiltersType | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersType | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersTypeOutputReference;
}
export interface SecurityhubInsightFiltersUpdatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersUpdatedAtDateRange): any;
export declare function securityhubInsightFiltersUpdatedAtDateRangeToHclTerraform(struct?: SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersUpdatedAtDateRange): any;
export declare class SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFiltersUpdatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersUpdatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubInsightFiltersUpdatedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersUpdatedAtDateRange;
}
export declare function securityhubInsightFiltersUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersUpdatedAt | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersUpdatedAtToHclTerraform(struct?: SecurityhubInsightFiltersUpdatedAt | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersUpdatedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersUpdatedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersUpdatedAt | cdktf.IResolvable | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
    private _dateRange;
    get dateRange(): SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference;
    putDateRange(value: SecurityhubInsightFiltersUpdatedAtDateRange): void;
    resetDateRange(): void;
    get dateRangeInput(): SecurityhubInsightFiltersUpdatedAtDateRange | undefined;
}
export declare class SecurityhubInsightFiltersUpdatedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersUpdatedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersUpdatedAtOutputReference;
}
export interface SecurityhubInsightFiltersUserDefinedValues {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#key SecurityhubInsight#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersUserDefinedValuesToTerraform(struct?: SecurityhubInsightFiltersUserDefinedValues | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersUserDefinedValuesToHclTerraform(struct?: SecurityhubInsightFiltersUserDefinedValues | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersUserDefinedValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersUserDefinedValues | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersUserDefinedValues | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersUserDefinedValuesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersUserDefinedValues[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersUserDefinedValuesOutputReference;
}
export interface SecurityhubInsightFiltersVerificationState {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersVerificationStateToTerraform(struct?: SecurityhubInsightFiltersVerificationState | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersVerificationStateToHclTerraform(struct?: SecurityhubInsightFiltersVerificationState | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersVerificationStateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersVerificationState | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersVerificationState | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersVerificationStateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersVerificationState[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersVerificationStateOutputReference;
}
export interface SecurityhubInsightFiltersWorkflowStatus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersWorkflowStatusToTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus | cdktf.IResolvable): any;
export declare function securityhubInsightFiltersWorkflowStatusToHclTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus | cdktf.IResolvable): any;
export declare class SecurityhubInsightFiltersWorkflowStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubInsightFiltersWorkflowStatus | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubInsightFiltersWorkflowStatus | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubInsightFiltersWorkflowStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubInsightFiltersWorkflowStatus[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubInsightFiltersWorkflowStatusOutputReference;
}
export interface SecurityhubInsightFilters {
    /**
    * aws_account_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#aws_account_id SecurityhubInsight#aws_account_id}
    */
    readonly awsAccountId?: SecurityhubInsightFiltersAwsAccountId[] | cdktf.IResolvable;
    /**
    * company_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#company_name SecurityhubInsight#company_name}
    */
    readonly companyName?: SecurityhubInsightFiltersCompanyName[] | cdktf.IResolvable;
    /**
    * compliance_status block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#compliance_status SecurityhubInsight#compliance_status}
    */
    readonly complianceStatus?: SecurityhubInsightFiltersComplianceStatus[] | cdktf.IResolvable;
    /**
    * confidence block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#confidence SecurityhubInsight#confidence}
    */
    readonly confidence?: SecurityhubInsightFiltersConfidence[] | cdktf.IResolvable;
    /**
    * created_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#created_at SecurityhubInsight#created_at}
    */
    readonly createdAt?: SecurityhubInsightFiltersCreatedAt[] | cdktf.IResolvable;
    /**
    * criticality block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#criticality SecurityhubInsight#criticality}
    */
    readonly criticality?: SecurityhubInsightFiltersCriticality[] | cdktf.IResolvable;
    /**
    * description block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#description SecurityhubInsight#description}
    */
    readonly description?: SecurityhubInsightFiltersDescription[] | cdktf.IResolvable;
    /**
    * finding_provider_fields_confidence block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#finding_provider_fields_confidence SecurityhubInsight#finding_provider_fields_confidence}
    */
    readonly findingProviderFieldsConfidence?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktf.IResolvable;
    /**
    * finding_provider_fields_criticality block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#finding_provider_fields_criticality SecurityhubInsight#finding_provider_fields_criticality}
    */
    readonly findingProviderFieldsCriticality?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktf.IResolvable;
    /**
    * finding_provider_fields_related_findings_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_id SecurityhubInsight#finding_provider_fields_related_findings_id}
    */
    readonly findingProviderFieldsRelatedFindingsId?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktf.IResolvable;
    /**
    * finding_provider_fields_related_findings_product_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_product_arn SecurityhubInsight#finding_provider_fields_related_findings_product_arn}
    */
    readonly findingProviderFieldsRelatedFindingsProductArn?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktf.IResolvable;
    /**
    * finding_provider_fields_severity_label block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#finding_provider_fields_severity_label SecurityhubInsight#finding_provider_fields_severity_label}
    */
    readonly findingProviderFieldsSeverityLabel?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktf.IResolvable;
    /**
    * finding_provider_fields_severity_original block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#finding_provider_fields_severity_original SecurityhubInsight#finding_provider_fields_severity_original}
    */
    readonly findingProviderFieldsSeverityOriginal?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktf.IResolvable;
    /**
    * finding_provider_fields_types block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#finding_provider_fields_types SecurityhubInsight#finding_provider_fields_types}
    */
    readonly findingProviderFieldsTypes?: SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktf.IResolvable;
    /**
    * first_observed_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#first_observed_at SecurityhubInsight#first_observed_at}
    */
    readonly firstObservedAt?: SecurityhubInsightFiltersFirstObservedAt[] | cdktf.IResolvable;
    /**
    * generator_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#generator_id SecurityhubInsight#generator_id}
    */
    readonly generatorId?: SecurityhubInsightFiltersGeneratorId[] | cdktf.IResolvable;
    /**
    * id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#id SecurityhubInsight#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: SecurityhubInsightFiltersId[] | cdktf.IResolvable;
    /**
    * keyword block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#keyword SecurityhubInsight#keyword}
    */
    readonly keyword?: SecurityhubInsightFiltersKeyword[] | cdktf.IResolvable;
    /**
    * last_observed_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#last_observed_at SecurityhubInsight#last_observed_at}
    */
    readonly lastObservedAt?: SecurityhubInsightFiltersLastObservedAt[] | cdktf.IResolvable;
    /**
    * malware_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#malware_name SecurityhubInsight#malware_name}
    */
    readonly malwareName?: SecurityhubInsightFiltersMalwareName[] | cdktf.IResolvable;
    /**
    * malware_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#malware_path SecurityhubInsight#malware_path}
    */
    readonly malwarePath?: SecurityhubInsightFiltersMalwarePath[] | cdktf.IResolvable;
    /**
    * malware_state block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#malware_state SecurityhubInsight#malware_state}
    */
    readonly malwareState?: SecurityhubInsightFiltersMalwareState[] | cdktf.IResolvable;
    /**
    * malware_type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#malware_type SecurityhubInsight#malware_type}
    */
    readonly malwareType?: SecurityhubInsightFiltersMalwareType[] | cdktf.IResolvable;
    /**
    * network_destination_domain block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_destination_domain SecurityhubInsight#network_destination_domain}
    */
    readonly networkDestinationDomain?: SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktf.IResolvable;
    /**
    * network_destination_ipv4 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_destination_ipv4 SecurityhubInsight#network_destination_ipv4}
    */
    readonly networkDestinationIpv4?: SecurityhubInsightFiltersNetworkDestinationIpv4[] | cdktf.IResolvable;
    /**
    * network_destination_ipv6 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_destination_ipv6 SecurityhubInsight#network_destination_ipv6}
    */
    readonly networkDestinationIpv6?: SecurityhubInsightFiltersNetworkDestinationIpv6[] | cdktf.IResolvable;
    /**
    * network_destination_port block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_destination_port SecurityhubInsight#network_destination_port}
    */
    readonly networkDestinationPort?: SecurityhubInsightFiltersNetworkDestinationPort[] | cdktf.IResolvable;
    /**
    * network_direction block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_direction SecurityhubInsight#network_direction}
    */
    readonly networkDirection?: SecurityhubInsightFiltersNetworkDirection[] | cdktf.IResolvable;
    /**
    * network_protocol block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_protocol SecurityhubInsight#network_protocol}
    */
    readonly networkProtocol?: SecurityhubInsightFiltersNetworkProtocol[] | cdktf.IResolvable;
    /**
    * network_source_domain block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_source_domain SecurityhubInsight#network_source_domain}
    */
    readonly networkSourceDomain?: SecurityhubInsightFiltersNetworkSourceDomain[] | cdktf.IResolvable;
    /**
    * network_source_ipv4 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_source_ipv4 SecurityhubInsight#network_source_ipv4}
    */
    readonly networkSourceIpv4?: SecurityhubInsightFiltersNetworkSourceIpv4[] | cdktf.IResolvable;
    /**
    * network_source_ipv6 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_source_ipv6 SecurityhubInsight#network_source_ipv6}
    */
    readonly networkSourceIpv6?: SecurityhubInsightFiltersNetworkSourceIpv6[] | cdktf.IResolvable;
    /**
    * network_source_mac block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_source_mac SecurityhubInsight#network_source_mac}
    */
    readonly networkSourceMac?: SecurityhubInsightFiltersNetworkSourceMac[] | cdktf.IResolvable;
    /**
    * network_source_port block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#network_source_port SecurityhubInsight#network_source_port}
    */
    readonly networkSourcePort?: SecurityhubInsightFiltersNetworkSourcePort[] | cdktf.IResolvable;
    /**
    * note_text block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#note_text SecurityhubInsight#note_text}
    */
    readonly noteText?: SecurityhubInsightFiltersNoteText[] | cdktf.IResolvable;
    /**
    * note_updated_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#note_updated_at SecurityhubInsight#note_updated_at}
    */
    readonly noteUpdatedAt?: SecurityhubInsightFiltersNoteUpdatedAt[] | cdktf.IResolvable;
    /**
    * note_updated_by block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#note_updated_by SecurityhubInsight#note_updated_by}
    */
    readonly noteUpdatedBy?: SecurityhubInsightFiltersNoteUpdatedBy[] | cdktf.IResolvable;
    /**
    * process_launched_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#process_launched_at SecurityhubInsight#process_launched_at}
    */
    readonly processLaunchedAt?: SecurityhubInsightFiltersProcessLaunchedAt[] | cdktf.IResolvable;
    /**
    * process_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#process_name SecurityhubInsight#process_name}
    */
    readonly processName?: SecurityhubInsightFiltersProcessName[] | cdktf.IResolvable;
    /**
    * process_parent_pid block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#process_parent_pid SecurityhubInsight#process_parent_pid}
    */
    readonly processParentPid?: SecurityhubInsightFiltersProcessParentPid[] | cdktf.IResolvable;
    /**
    * process_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#process_path SecurityhubInsight#process_path}
    */
    readonly processPath?: SecurityhubInsightFiltersProcessPath[] | cdktf.IResolvable;
    /**
    * process_pid block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#process_pid SecurityhubInsight#process_pid}
    */
    readonly processPid?: SecurityhubInsightFiltersProcessPid[] | cdktf.IResolvable;
    /**
    * process_terminated_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#process_terminated_at SecurityhubInsight#process_terminated_at}
    */
    readonly processTerminatedAt?: SecurityhubInsightFiltersProcessTerminatedAt[] | cdktf.IResolvable;
    /**
    * product_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#product_arn SecurityhubInsight#product_arn}
    */
    readonly productArn?: SecurityhubInsightFiltersProductArn[] | cdktf.IResolvable;
    /**
    * product_fields block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#product_fields SecurityhubInsight#product_fields}
    */
    readonly productFields?: SecurityhubInsightFiltersProductFields[] | cdktf.IResolvable;
    /**
    * product_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#product_name SecurityhubInsight#product_name}
    */
    readonly productName?: SecurityhubInsightFiltersProductName[] | cdktf.IResolvable;
    /**
    * recommendation_text block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#recommendation_text SecurityhubInsight#recommendation_text}
    */
    readonly recommendationText?: SecurityhubInsightFiltersRecommendationText[] | cdktf.IResolvable;
    /**
    * record_state block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#record_state SecurityhubInsight#record_state}
    */
    readonly recordState?: SecurityhubInsightFiltersRecordState[] | cdktf.IResolvable;
    /**
    * related_findings_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#related_findings_id SecurityhubInsight#related_findings_id}
    */
    readonly relatedFindingsId?: SecurityhubInsightFiltersRelatedFindingsId[] | cdktf.IResolvable;
    /**
    * related_findings_product_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#related_findings_product_arn SecurityhubInsight#related_findings_product_arn}
    */
    readonly relatedFindingsProductArn?: SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktf.IResolvable;
    /**
    * resource_aws_ec2_instance_iam_instance_profile_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_iam_instance_profile_arn SecurityhubInsight#resource_aws_ec2_instance_iam_instance_profile_arn}
    */
    readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktf.IResolvable;
    /**
    * resource_aws_ec2_instance_image_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_image_id SecurityhubInsight#resource_aws_ec2_instance_image_id}
    */
    readonly resourceAwsEc2InstanceImageId?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktf.IResolvable;
    /**
    * resource_aws_ec2_instance_ipv4_addresses block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_ipv4_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv4_addresses}
    */
    readonly resourceAwsEc2InstanceIpv4Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[] | cdktf.IResolvable;
    /**
    * resource_aws_ec2_instance_ipv6_addresses block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_ipv6_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv6_addresses}
    */
    readonly resourceAwsEc2InstanceIpv6Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[] | cdktf.IResolvable;
    /**
    * resource_aws_ec2_instance_key_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_key_name SecurityhubInsight#resource_aws_ec2_instance_key_name}
    */
    readonly resourceAwsEc2InstanceKeyName?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktf.IResolvable;
    /**
    * resource_aws_ec2_instance_launched_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_launched_at SecurityhubInsight#resource_aws_ec2_instance_launched_at}
    */
    readonly resourceAwsEc2InstanceLaunchedAt?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktf.IResolvable;
    /**
    * resource_aws_ec2_instance_subnet_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_subnet_id SecurityhubInsight#resource_aws_ec2_instance_subnet_id}
    */
    readonly resourceAwsEc2InstanceSubnetId?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktf.IResolvable;
    /**
    * resource_aws_ec2_instance_type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_type SecurityhubInsight#resource_aws_ec2_instance_type}
    */
    readonly resourceAwsEc2InstanceType?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktf.IResolvable;
    /**
    * resource_aws_ec2_instance_vpc_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_vpc_id SecurityhubInsight#resource_aws_ec2_instance_vpc_id}
    */
    readonly resourceAwsEc2InstanceVpcId?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktf.IResolvable;
    /**
    * resource_aws_iam_access_key_created_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_created_at SecurityhubInsight#resource_aws_iam_access_key_created_at}
    */
    readonly resourceAwsIamAccessKeyCreatedAt?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktf.IResolvable;
    /**
    * resource_aws_iam_access_key_status block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_status SecurityhubInsight#resource_aws_iam_access_key_status}
    */
    readonly resourceAwsIamAccessKeyStatus?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktf.IResolvable;
    /**
    * resource_aws_iam_access_key_user_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_user_name SecurityhubInsight#resource_aws_iam_access_key_user_name}
    */
    readonly resourceAwsIamAccessKeyUserName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktf.IResolvable;
    /**
    * resource_aws_s3_bucket_owner_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_id SecurityhubInsight#resource_aws_s3_bucket_owner_id}
    */
    readonly resourceAwsS3BucketOwnerId?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktf.IResolvable;
    /**
    * resource_aws_s3_bucket_owner_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_name SecurityhubInsight#resource_aws_s3_bucket_owner_name}
    */
    readonly resourceAwsS3BucketOwnerName?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktf.IResolvable;
    /**
    * resource_container_image_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_container_image_id SecurityhubInsight#resource_container_image_id}
    */
    readonly resourceContainerImageId?: SecurityhubInsightFiltersResourceContainerImageId[] | cdktf.IResolvable;
    /**
    * resource_container_image_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_container_image_name SecurityhubInsight#resource_container_image_name}
    */
    readonly resourceContainerImageName?: SecurityhubInsightFiltersResourceContainerImageName[] | cdktf.IResolvable;
    /**
    * resource_container_launched_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_container_launched_at SecurityhubInsight#resource_container_launched_at}
    */
    readonly resourceContainerLaunchedAt?: SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktf.IResolvable;
    /**
    * resource_container_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_container_name SecurityhubInsight#resource_container_name}
    */
    readonly resourceContainerName?: SecurityhubInsightFiltersResourceContainerName[] | cdktf.IResolvable;
    /**
    * resource_details_other block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_details_other SecurityhubInsight#resource_details_other}
    */
    readonly resourceDetailsOther?: SecurityhubInsightFiltersResourceDetailsOther[] | cdktf.IResolvable;
    /**
    * resource_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_id SecurityhubInsight#resource_id}
    */
    readonly resourceId?: SecurityhubInsightFiltersResourceId[] | cdktf.IResolvable;
    /**
    * resource_partition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_partition SecurityhubInsight#resource_partition}
    */
    readonly resourcePartition?: SecurityhubInsightFiltersResourcePartition[] | cdktf.IResolvable;
    /**
    * resource_region block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_region SecurityhubInsight#resource_region}
    */
    readonly resourceRegion?: SecurityhubInsightFiltersResourceRegion[] | cdktf.IResolvable;
    /**
    * resource_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_tags SecurityhubInsight#resource_tags}
    */
    readonly resourceTags?: SecurityhubInsightFiltersResourceTags[] | cdktf.IResolvable;
    /**
    * resource_type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#resource_type SecurityhubInsight#resource_type}
    */
    readonly resourceType?: SecurityhubInsightFiltersResourceType[] | cdktf.IResolvable;
    /**
    * severity_label block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#severity_label SecurityhubInsight#severity_label}
    */
    readonly severityLabel?: SecurityhubInsightFiltersSeverityLabel[] | cdktf.IResolvable;
    /**
    * source_url block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#source_url SecurityhubInsight#source_url}
    */
    readonly sourceUrl?: SecurityhubInsightFiltersSourceUrl[] | cdktf.IResolvable;
    /**
    * threat_intel_indicator_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#threat_intel_indicator_category SecurityhubInsight#threat_intel_indicator_category}
    */
    readonly threatIntelIndicatorCategory?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktf.IResolvable;
    /**
    * threat_intel_indicator_last_observed_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#threat_intel_indicator_last_observed_at SecurityhubInsight#threat_intel_indicator_last_observed_at}
    */
    readonly threatIntelIndicatorLastObservedAt?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktf.IResolvable;
    /**
    * threat_intel_indicator_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#threat_intel_indicator_source SecurityhubInsight#threat_intel_indicator_source}
    */
    readonly threatIntelIndicatorSource?: SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktf.IResolvable;
    /**
    * threat_intel_indicator_source_url block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#threat_intel_indicator_source_url SecurityhubInsight#threat_intel_indicator_source_url}
    */
    readonly threatIntelIndicatorSourceUrl?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktf.IResolvable;
    /**
    * threat_intel_indicator_type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#threat_intel_indicator_type SecurityhubInsight#threat_intel_indicator_type}
    */
    readonly threatIntelIndicatorType?: SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktf.IResolvable;
    /**
    * threat_intel_indicator_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#threat_intel_indicator_value SecurityhubInsight#threat_intel_indicator_value}
    */
    readonly threatIntelIndicatorValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktf.IResolvable;
    /**
    * title block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#title SecurityhubInsight#title}
    */
    readonly title?: SecurityhubInsightFiltersTitle[] | cdktf.IResolvable;
    /**
    * type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#type SecurityhubInsight#type}
    */
    readonly type?: SecurityhubInsightFiltersType[] | cdktf.IResolvable;
    /**
    * updated_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#updated_at SecurityhubInsight#updated_at}
    */
    readonly updatedAt?: SecurityhubInsightFiltersUpdatedAt[] | cdktf.IResolvable;
    /**
    * user_defined_values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#user_defined_values SecurityhubInsight#user_defined_values}
    */
    readonly userDefinedValues?: SecurityhubInsightFiltersUserDefinedValues[] | cdktf.IResolvable;
    /**
    * verification_state block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#verification_state SecurityhubInsight#verification_state}
    */
    readonly verificationState?: SecurityhubInsightFiltersVerificationState[] | cdktf.IResolvable;
    /**
    * workflow_status block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#workflow_status SecurityhubInsight#workflow_status}
    */
    readonly workflowStatus?: SecurityhubInsightFiltersWorkflowStatus[] | cdktf.IResolvable;
}
export declare function securityhubInsightFiltersToTerraform(struct?: SecurityhubInsightFiltersOutputReference | SecurityhubInsightFilters): any;
export declare function securityhubInsightFiltersToHclTerraform(struct?: SecurityhubInsightFiltersOutputReference | SecurityhubInsightFilters): any;
export declare class SecurityhubInsightFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubInsightFilters | undefined;
    set internalValue(value: SecurityhubInsightFilters | undefined);
    private _awsAccountId;
    get awsAccountId(): SecurityhubInsightFiltersAwsAccountIdList;
    putAwsAccountId(value: SecurityhubInsightFiltersAwsAccountId[] | cdktf.IResolvable): void;
    resetAwsAccountId(): void;
    get awsAccountIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersAwsAccountId[] | undefined;
    private _companyName;
    get companyName(): SecurityhubInsightFiltersCompanyNameList;
    putCompanyName(value: SecurityhubInsightFiltersCompanyName[] | cdktf.IResolvable): void;
    resetCompanyName(): void;
    get companyNameInput(): cdktf.IResolvable | SecurityhubInsightFiltersCompanyName[] | undefined;
    private _complianceStatus;
    get complianceStatus(): SecurityhubInsightFiltersComplianceStatusList;
    putComplianceStatus(value: SecurityhubInsightFiltersComplianceStatus[] | cdktf.IResolvable): void;
    resetComplianceStatus(): void;
    get complianceStatusInput(): cdktf.IResolvable | SecurityhubInsightFiltersComplianceStatus[] | undefined;
    private _confidence;
    get confidence(): SecurityhubInsightFiltersConfidenceList;
    putConfidence(value: SecurityhubInsightFiltersConfidence[] | cdktf.IResolvable): void;
    resetConfidence(): void;
    get confidenceInput(): cdktf.IResolvable | SecurityhubInsightFiltersConfidence[] | undefined;
    private _createdAt;
    get createdAt(): SecurityhubInsightFiltersCreatedAtList;
    putCreatedAt(value: SecurityhubInsightFiltersCreatedAt[] | cdktf.IResolvable): void;
    resetCreatedAt(): void;
    get createdAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersCreatedAt[] | undefined;
    private _criticality;
    get criticality(): SecurityhubInsightFiltersCriticalityList;
    putCriticality(value: SecurityhubInsightFiltersCriticality[] | cdktf.IResolvable): void;
    resetCriticality(): void;
    get criticalityInput(): cdktf.IResolvable | SecurityhubInsightFiltersCriticality[] | undefined;
    private _description;
    get description(): SecurityhubInsightFiltersDescriptionList;
    putDescription(value: SecurityhubInsightFiltersDescription[] | cdktf.IResolvable): void;
    resetDescription(): void;
    get descriptionInput(): cdktf.IResolvable | SecurityhubInsightFiltersDescription[] | undefined;
    private _findingProviderFieldsConfidence;
    get findingProviderFieldsConfidence(): SecurityhubInsightFiltersFindingProviderFieldsConfidenceList;
    putFindingProviderFieldsConfidence(value: SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktf.IResolvable): void;
    resetFindingProviderFieldsConfidence(): void;
    get findingProviderFieldsConfidenceInput(): cdktf.IResolvable | SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | undefined;
    private _findingProviderFieldsCriticality;
    get findingProviderFieldsCriticality(): SecurityhubInsightFiltersFindingProviderFieldsCriticalityList;
    putFindingProviderFieldsCriticality(value: SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktf.IResolvable): void;
    resetFindingProviderFieldsCriticality(): void;
    get findingProviderFieldsCriticalityInput(): cdktf.IResolvable | SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | undefined;
    private _findingProviderFieldsRelatedFindingsId;
    get findingProviderFieldsRelatedFindingsId(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList;
    putFindingProviderFieldsRelatedFindingsId(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktf.IResolvable): void;
    resetFindingProviderFieldsRelatedFindingsId(): void;
    get findingProviderFieldsRelatedFindingsIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | undefined;
    private _findingProviderFieldsRelatedFindingsProductArn;
    get findingProviderFieldsRelatedFindingsProductArn(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList;
    putFindingProviderFieldsRelatedFindingsProductArn(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktf.IResolvable): void;
    resetFindingProviderFieldsRelatedFindingsProductArn(): void;
    get findingProviderFieldsRelatedFindingsProductArnInput(): cdktf.IResolvable | SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | undefined;
    private _findingProviderFieldsSeverityLabel;
    get findingProviderFieldsSeverityLabel(): SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList;
    putFindingProviderFieldsSeverityLabel(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktf.IResolvable): void;
    resetFindingProviderFieldsSeverityLabel(): void;
    get findingProviderFieldsSeverityLabelInput(): cdktf.IResolvable | SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | undefined;
    private _findingProviderFieldsSeverityOriginal;
    get findingProviderFieldsSeverityOriginal(): SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList;
    putFindingProviderFieldsSeverityOriginal(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktf.IResolvable): void;
    resetFindingProviderFieldsSeverityOriginal(): void;
    get findingProviderFieldsSeverityOriginalInput(): cdktf.IResolvable | SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | undefined;
    private _findingProviderFieldsTypes;
    get findingProviderFieldsTypes(): SecurityhubInsightFiltersFindingProviderFieldsTypesList;
    putFindingProviderFieldsTypes(value: SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktf.IResolvable): void;
    resetFindingProviderFieldsTypes(): void;
    get findingProviderFieldsTypesInput(): cdktf.IResolvable | SecurityhubInsightFiltersFindingProviderFieldsTypes[] | undefined;
    private _firstObservedAt;
    get firstObservedAt(): SecurityhubInsightFiltersFirstObservedAtList;
    putFirstObservedAt(value: SecurityhubInsightFiltersFirstObservedAt[] | cdktf.IResolvable): void;
    resetFirstObservedAt(): void;
    get firstObservedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersFirstObservedAt[] | undefined;
    private _generatorId;
    get generatorId(): SecurityhubInsightFiltersGeneratorIdList;
    putGeneratorId(value: SecurityhubInsightFiltersGeneratorId[] | cdktf.IResolvable): void;
    resetGeneratorId(): void;
    get generatorIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersGeneratorId[] | undefined;
    private _id;
    get id(): SecurityhubInsightFiltersIdList;
    putId(value: SecurityhubInsightFiltersId[] | cdktf.IResolvable): void;
    resetId(): void;
    get idInput(): cdktf.IResolvable | SecurityhubInsightFiltersId[] | undefined;
    private _keyword;
    get keyword(): SecurityhubInsightFiltersKeywordList;
    putKeyword(value: SecurityhubInsightFiltersKeyword[] | cdktf.IResolvable): void;
    resetKeyword(): void;
    get keywordInput(): cdktf.IResolvable | SecurityhubInsightFiltersKeyword[] | undefined;
    private _lastObservedAt;
    get lastObservedAt(): SecurityhubInsightFiltersLastObservedAtList;
    putLastObservedAt(value: SecurityhubInsightFiltersLastObservedAt[] | cdktf.IResolvable): void;
    resetLastObservedAt(): void;
    get lastObservedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersLastObservedAt[] | undefined;
    private _malwareName;
    get malwareName(): SecurityhubInsightFiltersMalwareNameList;
    putMalwareName(value: SecurityhubInsightFiltersMalwareName[] | cdktf.IResolvable): void;
    resetMalwareName(): void;
    get malwareNameInput(): cdktf.IResolvable | SecurityhubInsightFiltersMalwareName[] | undefined;
    private _malwarePath;
    get malwarePath(): SecurityhubInsightFiltersMalwarePathList;
    putMalwarePath(value: SecurityhubInsightFiltersMalwarePath[] | cdktf.IResolvable): void;
    resetMalwarePath(): void;
    get malwarePathInput(): cdktf.IResolvable | SecurityhubInsightFiltersMalwarePath[] | undefined;
    private _malwareState;
    get malwareState(): SecurityhubInsightFiltersMalwareStateList;
    putMalwareState(value: SecurityhubInsightFiltersMalwareState[] | cdktf.IResolvable): void;
    resetMalwareState(): void;
    get malwareStateInput(): cdktf.IResolvable | SecurityhubInsightFiltersMalwareState[] | undefined;
    private _malwareType;
    get malwareType(): SecurityhubInsightFiltersMalwareTypeList;
    putMalwareType(value: SecurityhubInsightFiltersMalwareType[] | cdktf.IResolvable): void;
    resetMalwareType(): void;
    get malwareTypeInput(): cdktf.IResolvable | SecurityhubInsightFiltersMalwareType[] | undefined;
    private _networkDestinationDomain;
    get networkDestinationDomain(): SecurityhubInsightFiltersNetworkDestinationDomainList;
    putNetworkDestinationDomain(value: SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktf.IResolvable): void;
    resetNetworkDestinationDomain(): void;
    get networkDestinationDomainInput(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkDestinationDomain[] | undefined;
    private _networkDestinationIpv4;
    get networkDestinationIpv4(): SecurityhubInsightFiltersNetworkDestinationIpv4List;
    putNetworkDestinationIpv4(value: SecurityhubInsightFiltersNetworkDestinationIpv4[] | cdktf.IResolvable): void;
    resetNetworkDestinationIpv4(): void;
    get networkDestinationIpv4Input(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkDestinationIpv4[] | undefined;
    private _networkDestinationIpv6;
    get networkDestinationIpv6(): SecurityhubInsightFiltersNetworkDestinationIpv6List;
    putNetworkDestinationIpv6(value: SecurityhubInsightFiltersNetworkDestinationIpv6[] | cdktf.IResolvable): void;
    resetNetworkDestinationIpv6(): void;
    get networkDestinationIpv6Input(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkDestinationIpv6[] | undefined;
    private _networkDestinationPort;
    get networkDestinationPort(): SecurityhubInsightFiltersNetworkDestinationPortList;
    putNetworkDestinationPort(value: SecurityhubInsightFiltersNetworkDestinationPort[] | cdktf.IResolvable): void;
    resetNetworkDestinationPort(): void;
    get networkDestinationPortInput(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkDestinationPort[] | undefined;
    private _networkDirection;
    get networkDirection(): SecurityhubInsightFiltersNetworkDirectionList;
    putNetworkDirection(value: SecurityhubInsightFiltersNetworkDirection[] | cdktf.IResolvable): void;
    resetNetworkDirection(): void;
    get networkDirectionInput(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkDirection[] | undefined;
    private _networkProtocol;
    get networkProtocol(): SecurityhubInsightFiltersNetworkProtocolList;
    putNetworkProtocol(value: SecurityhubInsightFiltersNetworkProtocol[] | cdktf.IResolvable): void;
    resetNetworkProtocol(): void;
    get networkProtocolInput(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkProtocol[] | undefined;
    private _networkSourceDomain;
    get networkSourceDomain(): SecurityhubInsightFiltersNetworkSourceDomainList;
    putNetworkSourceDomain(value: SecurityhubInsightFiltersNetworkSourceDomain[] | cdktf.IResolvable): void;
    resetNetworkSourceDomain(): void;
    get networkSourceDomainInput(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkSourceDomain[] | undefined;
    private _networkSourceIpv4;
    get networkSourceIpv4(): SecurityhubInsightFiltersNetworkSourceIpv4List;
    putNetworkSourceIpv4(value: SecurityhubInsightFiltersNetworkSourceIpv4[] | cdktf.IResolvable): void;
    resetNetworkSourceIpv4(): void;
    get networkSourceIpv4Input(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkSourceIpv4[] | undefined;
    private _networkSourceIpv6;
    get networkSourceIpv6(): SecurityhubInsightFiltersNetworkSourceIpv6List;
    putNetworkSourceIpv6(value: SecurityhubInsightFiltersNetworkSourceIpv6[] | cdktf.IResolvable): void;
    resetNetworkSourceIpv6(): void;
    get networkSourceIpv6Input(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkSourceIpv6[] | undefined;
    private _networkSourceMac;
    get networkSourceMac(): SecurityhubInsightFiltersNetworkSourceMacList;
    putNetworkSourceMac(value: SecurityhubInsightFiltersNetworkSourceMac[] | cdktf.IResolvable): void;
    resetNetworkSourceMac(): void;
    get networkSourceMacInput(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkSourceMac[] | undefined;
    private _networkSourcePort;
    get networkSourcePort(): SecurityhubInsightFiltersNetworkSourcePortList;
    putNetworkSourcePort(value: SecurityhubInsightFiltersNetworkSourcePort[] | cdktf.IResolvable): void;
    resetNetworkSourcePort(): void;
    get networkSourcePortInput(): cdktf.IResolvable | SecurityhubInsightFiltersNetworkSourcePort[] | undefined;
    private _noteText;
    get noteText(): SecurityhubInsightFiltersNoteTextList;
    putNoteText(value: SecurityhubInsightFiltersNoteText[] | cdktf.IResolvable): void;
    resetNoteText(): void;
    get noteTextInput(): cdktf.IResolvable | SecurityhubInsightFiltersNoteText[] | undefined;
    private _noteUpdatedAt;
    get noteUpdatedAt(): SecurityhubInsightFiltersNoteUpdatedAtList;
    putNoteUpdatedAt(value: SecurityhubInsightFiltersNoteUpdatedAt[] | cdktf.IResolvable): void;
    resetNoteUpdatedAt(): void;
    get noteUpdatedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersNoteUpdatedAt[] | undefined;
    private _noteUpdatedBy;
    get noteUpdatedBy(): SecurityhubInsightFiltersNoteUpdatedByList;
    putNoteUpdatedBy(value: SecurityhubInsightFiltersNoteUpdatedBy[] | cdktf.IResolvable): void;
    resetNoteUpdatedBy(): void;
    get noteUpdatedByInput(): cdktf.IResolvable | SecurityhubInsightFiltersNoteUpdatedBy[] | undefined;
    private _processLaunchedAt;
    get processLaunchedAt(): SecurityhubInsightFiltersProcessLaunchedAtList;
    putProcessLaunchedAt(value: SecurityhubInsightFiltersProcessLaunchedAt[] | cdktf.IResolvable): void;
    resetProcessLaunchedAt(): void;
    get processLaunchedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersProcessLaunchedAt[] | undefined;
    private _processName;
    get processName(): SecurityhubInsightFiltersProcessNameList;
    putProcessName(value: SecurityhubInsightFiltersProcessName[] | cdktf.IResolvable): void;
    resetProcessName(): void;
    get processNameInput(): cdktf.IResolvable | SecurityhubInsightFiltersProcessName[] | undefined;
    private _processParentPid;
    get processParentPid(): SecurityhubInsightFiltersProcessParentPidList;
    putProcessParentPid(value: SecurityhubInsightFiltersProcessParentPid[] | cdktf.IResolvable): void;
    resetProcessParentPid(): void;
    get processParentPidInput(): cdktf.IResolvable | SecurityhubInsightFiltersProcessParentPid[] | undefined;
    private _processPath;
    get processPath(): SecurityhubInsightFiltersProcessPathList;
    putProcessPath(value: SecurityhubInsightFiltersProcessPath[] | cdktf.IResolvable): void;
    resetProcessPath(): void;
    get processPathInput(): cdktf.IResolvable | SecurityhubInsightFiltersProcessPath[] | undefined;
    private _processPid;
    get processPid(): SecurityhubInsightFiltersProcessPidList;
    putProcessPid(value: SecurityhubInsightFiltersProcessPid[] | cdktf.IResolvable): void;
    resetProcessPid(): void;
    get processPidInput(): cdktf.IResolvable | SecurityhubInsightFiltersProcessPid[] | undefined;
    private _processTerminatedAt;
    get processTerminatedAt(): SecurityhubInsightFiltersProcessTerminatedAtList;
    putProcessTerminatedAt(value: SecurityhubInsightFiltersProcessTerminatedAt[] | cdktf.IResolvable): void;
    resetProcessTerminatedAt(): void;
    get processTerminatedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersProcessTerminatedAt[] | undefined;
    private _productArn;
    get productArn(): SecurityhubInsightFiltersProductArnList;
    putProductArn(value: SecurityhubInsightFiltersProductArn[] | cdktf.IResolvable): void;
    resetProductArn(): void;
    get productArnInput(): cdktf.IResolvable | SecurityhubInsightFiltersProductArn[] | undefined;
    private _productFields;
    get productFields(): SecurityhubInsightFiltersProductFieldsList;
    putProductFields(value: SecurityhubInsightFiltersProductFields[] | cdktf.IResolvable): void;
    resetProductFields(): void;
    get productFieldsInput(): cdktf.IResolvable | SecurityhubInsightFiltersProductFields[] | undefined;
    private _productName;
    get productName(): SecurityhubInsightFiltersProductNameList;
    putProductName(value: SecurityhubInsightFiltersProductName[] | cdktf.IResolvable): void;
    resetProductName(): void;
    get productNameInput(): cdktf.IResolvable | SecurityhubInsightFiltersProductName[] | undefined;
    private _recommendationText;
    get recommendationText(): SecurityhubInsightFiltersRecommendationTextList;
    putRecommendationText(value: SecurityhubInsightFiltersRecommendationText[] | cdktf.IResolvable): void;
    resetRecommendationText(): void;
    get recommendationTextInput(): cdktf.IResolvable | SecurityhubInsightFiltersRecommendationText[] | undefined;
    private _recordState;
    get recordState(): SecurityhubInsightFiltersRecordStateList;
    putRecordState(value: SecurityhubInsightFiltersRecordState[] | cdktf.IResolvable): void;
    resetRecordState(): void;
    get recordStateInput(): cdktf.IResolvable | SecurityhubInsightFiltersRecordState[] | undefined;
    private _relatedFindingsId;
    get relatedFindingsId(): SecurityhubInsightFiltersRelatedFindingsIdList;
    putRelatedFindingsId(value: SecurityhubInsightFiltersRelatedFindingsId[] | cdktf.IResolvable): void;
    resetRelatedFindingsId(): void;
    get relatedFindingsIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersRelatedFindingsId[] | undefined;
    private _relatedFindingsProductArn;
    get relatedFindingsProductArn(): SecurityhubInsightFiltersRelatedFindingsProductArnList;
    putRelatedFindingsProductArn(value: SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktf.IResolvable): void;
    resetRelatedFindingsProductArn(): void;
    get relatedFindingsProductArnInput(): cdktf.IResolvable | SecurityhubInsightFiltersRelatedFindingsProductArn[] | undefined;
    private _resourceAwsEc2InstanceIamInstanceProfileArn;
    get resourceAwsEc2InstanceIamInstanceProfileArn(): SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList;
    putResourceAwsEc2InstanceIamInstanceProfileArn(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktf.IResolvable): void;
    resetResourceAwsEc2InstanceIamInstanceProfileArn(): void;
    get resourceAwsEc2InstanceIamInstanceProfileArnInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | undefined;
    private _resourceAwsEc2InstanceImageId;
    get resourceAwsEc2InstanceImageId(): SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList;
    putResourceAwsEc2InstanceImageId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktf.IResolvable): void;
    resetResourceAwsEc2InstanceImageId(): void;
    get resourceAwsEc2InstanceImageIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | undefined;
    private _resourceAwsEc2InstanceIpv4Addresses;
    get resourceAwsEc2InstanceIpv4Addresses(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesList;
    putResourceAwsEc2InstanceIpv4Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[] | cdktf.IResolvable): void;
    resetResourceAwsEc2InstanceIpv4Addresses(): void;
    get resourceAwsEc2InstanceIpv4AddressesInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[] | undefined;
    private _resourceAwsEc2InstanceIpv6Addresses;
    get resourceAwsEc2InstanceIpv6Addresses(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesList;
    putResourceAwsEc2InstanceIpv6Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[] | cdktf.IResolvable): void;
    resetResourceAwsEc2InstanceIpv6Addresses(): void;
    get resourceAwsEc2InstanceIpv6AddressesInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[] | undefined;
    private _resourceAwsEc2InstanceKeyName;
    get resourceAwsEc2InstanceKeyName(): SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList;
    putResourceAwsEc2InstanceKeyName(value: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktf.IResolvable): void;
    resetResourceAwsEc2InstanceKeyName(): void;
    get resourceAwsEc2InstanceKeyNameInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | undefined;
    private _resourceAwsEc2InstanceLaunchedAt;
    get resourceAwsEc2InstanceLaunchedAt(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList;
    putResourceAwsEc2InstanceLaunchedAt(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktf.IResolvable): void;
    resetResourceAwsEc2InstanceLaunchedAt(): void;
    get resourceAwsEc2InstanceLaunchedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | undefined;
    private _resourceAwsEc2InstanceSubnetId;
    get resourceAwsEc2InstanceSubnetId(): SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList;
    putResourceAwsEc2InstanceSubnetId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktf.IResolvable): void;
    resetResourceAwsEc2InstanceSubnetId(): void;
    get resourceAwsEc2InstanceSubnetIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | undefined;
    private _resourceAwsEc2InstanceType;
    get resourceAwsEc2InstanceType(): SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList;
    putResourceAwsEc2InstanceType(value: SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktf.IResolvable): void;
    resetResourceAwsEc2InstanceType(): void;
    get resourceAwsEc2InstanceTypeInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | undefined;
    private _resourceAwsEc2InstanceVpcId;
    get resourceAwsEc2InstanceVpcId(): SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList;
    putResourceAwsEc2InstanceVpcId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktf.IResolvable): void;
    resetResourceAwsEc2InstanceVpcId(): void;
    get resourceAwsEc2InstanceVpcIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | undefined;
    private _resourceAwsIamAccessKeyCreatedAt;
    get resourceAwsIamAccessKeyCreatedAt(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList;
    putResourceAwsIamAccessKeyCreatedAt(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktf.IResolvable): void;
    resetResourceAwsIamAccessKeyCreatedAt(): void;
    get resourceAwsIamAccessKeyCreatedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | undefined;
    private _resourceAwsIamAccessKeyStatus;
    get resourceAwsIamAccessKeyStatus(): SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList;
    putResourceAwsIamAccessKeyStatus(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktf.IResolvable): void;
    resetResourceAwsIamAccessKeyStatus(): void;
    get resourceAwsIamAccessKeyStatusInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | undefined;
    private _resourceAwsIamAccessKeyUserName;
    get resourceAwsIamAccessKeyUserName(): SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList;
    putResourceAwsIamAccessKeyUserName(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktf.IResolvable): void;
    resetResourceAwsIamAccessKeyUserName(): void;
    get resourceAwsIamAccessKeyUserNameInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | undefined;
    private _resourceAwsS3BucketOwnerId;
    get resourceAwsS3BucketOwnerId(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList;
    putResourceAwsS3BucketOwnerId(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktf.IResolvable): void;
    resetResourceAwsS3BucketOwnerId(): void;
    get resourceAwsS3BucketOwnerIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | undefined;
    private _resourceAwsS3BucketOwnerName;
    get resourceAwsS3BucketOwnerName(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList;
    putResourceAwsS3BucketOwnerName(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktf.IResolvable): void;
    resetResourceAwsS3BucketOwnerName(): void;
    get resourceAwsS3BucketOwnerNameInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | undefined;
    private _resourceContainerImageId;
    get resourceContainerImageId(): SecurityhubInsightFiltersResourceContainerImageIdList;
    putResourceContainerImageId(value: SecurityhubInsightFiltersResourceContainerImageId[] | cdktf.IResolvable): void;
    resetResourceContainerImageId(): void;
    get resourceContainerImageIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceContainerImageId[] | undefined;
    private _resourceContainerImageName;
    get resourceContainerImageName(): SecurityhubInsightFiltersResourceContainerImageNameList;
    putResourceContainerImageName(value: SecurityhubInsightFiltersResourceContainerImageName[] | cdktf.IResolvable): void;
    resetResourceContainerImageName(): void;
    get resourceContainerImageNameInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceContainerImageName[] | undefined;
    private _resourceContainerLaunchedAt;
    get resourceContainerLaunchedAt(): SecurityhubInsightFiltersResourceContainerLaunchedAtList;
    putResourceContainerLaunchedAt(value: SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktf.IResolvable): void;
    resetResourceContainerLaunchedAt(): void;
    get resourceContainerLaunchedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceContainerLaunchedAt[] | undefined;
    private _resourceContainerName;
    get resourceContainerName(): SecurityhubInsightFiltersResourceContainerNameList;
    putResourceContainerName(value: SecurityhubInsightFiltersResourceContainerName[] | cdktf.IResolvable): void;
    resetResourceContainerName(): void;
    get resourceContainerNameInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceContainerName[] | undefined;
    private _resourceDetailsOther;
    get resourceDetailsOther(): SecurityhubInsightFiltersResourceDetailsOtherList;
    putResourceDetailsOther(value: SecurityhubInsightFiltersResourceDetailsOther[] | cdktf.IResolvable): void;
    resetResourceDetailsOther(): void;
    get resourceDetailsOtherInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceDetailsOther[] | undefined;
    private _resourceId;
    get resourceId(): SecurityhubInsightFiltersResourceIdList;
    putResourceId(value: SecurityhubInsightFiltersResourceId[] | cdktf.IResolvable): void;
    resetResourceId(): void;
    get resourceIdInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceId[] | undefined;
    private _resourcePartition;
    get resourcePartition(): SecurityhubInsightFiltersResourcePartitionList;
    putResourcePartition(value: SecurityhubInsightFiltersResourcePartition[] | cdktf.IResolvable): void;
    resetResourcePartition(): void;
    get resourcePartitionInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourcePartition[] | undefined;
    private _resourceRegion;
    get resourceRegion(): SecurityhubInsightFiltersResourceRegionList;
    putResourceRegion(value: SecurityhubInsightFiltersResourceRegion[] | cdktf.IResolvable): void;
    resetResourceRegion(): void;
    get resourceRegionInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceRegion[] | undefined;
    private _resourceTags;
    get resourceTags(): SecurityhubInsightFiltersResourceTagsList;
    putResourceTags(value: SecurityhubInsightFiltersResourceTags[] | cdktf.IResolvable): void;
    resetResourceTags(): void;
    get resourceTagsInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceTags[] | undefined;
    private _resourceType;
    get resourceType(): SecurityhubInsightFiltersResourceTypeList;
    putResourceType(value: SecurityhubInsightFiltersResourceType[] | cdktf.IResolvable): void;
    resetResourceType(): void;
    get resourceTypeInput(): cdktf.IResolvable | SecurityhubInsightFiltersResourceType[] | undefined;
    private _severityLabel;
    get severityLabel(): SecurityhubInsightFiltersSeverityLabelList;
    putSeverityLabel(value: SecurityhubInsightFiltersSeverityLabel[] | cdktf.IResolvable): void;
    resetSeverityLabel(): void;
    get severityLabelInput(): cdktf.IResolvable | SecurityhubInsightFiltersSeverityLabel[] | undefined;
    private _sourceUrl;
    get sourceUrl(): SecurityhubInsightFiltersSourceUrlList;
    putSourceUrl(value: SecurityhubInsightFiltersSourceUrl[] | cdktf.IResolvable): void;
    resetSourceUrl(): void;
    get sourceUrlInput(): cdktf.IResolvable | SecurityhubInsightFiltersSourceUrl[] | undefined;
    private _threatIntelIndicatorCategory;
    get threatIntelIndicatorCategory(): SecurityhubInsightFiltersThreatIntelIndicatorCategoryList;
    putThreatIntelIndicatorCategory(value: SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktf.IResolvable): void;
    resetThreatIntelIndicatorCategory(): void;
    get threatIntelIndicatorCategoryInput(): cdktf.IResolvable | SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | undefined;
    private _threatIntelIndicatorLastObservedAt;
    get threatIntelIndicatorLastObservedAt(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList;
    putThreatIntelIndicatorLastObservedAt(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktf.IResolvable): void;
    resetThreatIntelIndicatorLastObservedAt(): void;
    get threatIntelIndicatorLastObservedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | undefined;
    private _threatIntelIndicatorSource;
    get threatIntelIndicatorSource(): SecurityhubInsightFiltersThreatIntelIndicatorSourceList;
    putThreatIntelIndicatorSource(value: SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktf.IResolvable): void;
    resetThreatIntelIndicatorSource(): void;
    get threatIntelIndicatorSourceInput(): cdktf.IResolvable | SecurityhubInsightFiltersThreatIntelIndicatorSource[] | undefined;
    private _threatIntelIndicatorSourceUrl;
    get threatIntelIndicatorSourceUrl(): SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList;
    putThreatIntelIndicatorSourceUrl(value: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktf.IResolvable): void;
    resetThreatIntelIndicatorSourceUrl(): void;
    get threatIntelIndicatorSourceUrlInput(): cdktf.IResolvable | SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | undefined;
    private _threatIntelIndicatorType;
    get threatIntelIndicatorType(): SecurityhubInsightFiltersThreatIntelIndicatorTypeList;
    putThreatIntelIndicatorType(value: SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktf.IResolvable): void;
    resetThreatIntelIndicatorType(): void;
    get threatIntelIndicatorTypeInput(): cdktf.IResolvable | SecurityhubInsightFiltersThreatIntelIndicatorType[] | undefined;
    private _threatIntelIndicatorValue;
    get threatIntelIndicatorValue(): SecurityhubInsightFiltersThreatIntelIndicatorValueList;
    putThreatIntelIndicatorValue(value: SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktf.IResolvable): void;
    resetThreatIntelIndicatorValue(): void;
    get threatIntelIndicatorValueInput(): cdktf.IResolvable | SecurityhubInsightFiltersThreatIntelIndicatorValue[] | undefined;
    private _title;
    get title(): SecurityhubInsightFiltersTitleList;
    putTitle(value: SecurityhubInsightFiltersTitle[] | cdktf.IResolvable): void;
    resetTitle(): void;
    get titleInput(): cdktf.IResolvable | SecurityhubInsightFiltersTitle[] | undefined;
    private _type;
    get type(): SecurityhubInsightFiltersTypeList;
    putType(value: SecurityhubInsightFiltersType[] | cdktf.IResolvable): void;
    resetType(): void;
    get typeInput(): cdktf.IResolvable | SecurityhubInsightFiltersType[] | undefined;
    private _updatedAt;
    get updatedAt(): SecurityhubInsightFiltersUpdatedAtList;
    putUpdatedAt(value: SecurityhubInsightFiltersUpdatedAt[] | cdktf.IResolvable): void;
    resetUpdatedAt(): void;
    get updatedAtInput(): cdktf.IResolvable | SecurityhubInsightFiltersUpdatedAt[] | undefined;
    private _userDefinedValues;
    get userDefinedValues(): SecurityhubInsightFiltersUserDefinedValuesList;
    putUserDefinedValues(value: SecurityhubInsightFiltersUserDefinedValues[] | cdktf.IResolvable): void;
    resetUserDefinedValues(): void;
    get userDefinedValuesInput(): cdktf.IResolvable | SecurityhubInsightFiltersUserDefinedValues[] | undefined;
    private _verificationState;
    get verificationState(): SecurityhubInsightFiltersVerificationStateList;
    putVerificationState(value: SecurityhubInsightFiltersVerificationState[] | cdktf.IResolvable): void;
    resetVerificationState(): void;
    get verificationStateInput(): cdktf.IResolvable | SecurityhubInsightFiltersVerificationState[] | undefined;
    private _workflowStatus;
    get workflowStatus(): SecurityhubInsightFiltersWorkflowStatusList;
    putWorkflowStatus(value: SecurityhubInsightFiltersWorkflowStatus[] | cdktf.IResolvable): void;
    resetWorkflowStatus(): void;
    get workflowStatusInput(): cdktf.IResolvable | SecurityhubInsightFiltersWorkflowStatus[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight aws_securityhub_insight}
*/
export declare class SecurityhubInsight extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_insight";
    /**
    * Generates CDKTF code for importing a SecurityhubInsight resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubInsight to import
    * @param importFromId The id of the existing SecurityhubInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubInsight to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_insight aws_securityhub_insight} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubInsightConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubInsightConfig);
    get arn(): string;
    private _groupByAttribute?;
    get groupByAttribute(): string;
    set groupByAttribute(value: string);
    get groupByAttributeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _filters;
    get filters(): SecurityhubInsightFiltersOutputReference;
    putFilters(value: SecurityhubInsightFilters): void;
    get filtersInput(): SecurityhubInsightFilters | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
