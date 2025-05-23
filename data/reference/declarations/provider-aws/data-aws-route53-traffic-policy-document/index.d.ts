/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53TrafficPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#id DataAwsRoute53TrafficPolicyDocument#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#record_type DataAwsRoute53TrafficPolicyDocument#record_type}
    */
    readonly recordType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#start_endpoint DataAwsRoute53TrafficPolicyDocument#start_endpoint}
    */
    readonly startEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#start_rule DataAwsRoute53TrafficPolicyDocument#start_rule}
    */
    readonly startRule?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#version DataAwsRoute53TrafficPolicyDocument#version}
    */
    readonly version?: string;
    /**
    * endpoint block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#endpoint DataAwsRoute53TrafficPolicyDocument#endpoint}
    */
    readonly endpoint?: DataAwsRoute53TrafficPolicyDocumentEndpoint[] | cdktf.IResolvable;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#rule DataAwsRoute53TrafficPolicyDocument#rule}
    */
    readonly rule?: DataAwsRoute53TrafficPolicyDocumentRule[] | cdktf.IResolvable;
}
export interface DataAwsRoute53TrafficPolicyDocumentEndpoint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#id DataAwsRoute53TrafficPolicyDocument#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#region DataAwsRoute53TrafficPolicyDocument#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#type DataAwsRoute53TrafficPolicyDocument#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#value DataAwsRoute53TrafficPolicyDocument#value}
    */
    readonly value?: string;
}
export declare function dataAwsRoute53TrafficPolicyDocumentEndpointToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentEndpoint | cdktf.IResolvable): any;
export declare function dataAwsRoute53TrafficPolicyDocumentEndpointToHclTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentEndpoint | cdktf.IResolvable): any;
export declare class DataAwsRoute53TrafficPolicyDocumentEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53TrafficPolicyDocumentEndpoint | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRoute53TrafficPolicyDocumentEndpoint | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class DataAwsRoute53TrafficPolicyDocumentEndpointList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRoute53TrafficPolicyDocumentEndpoint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53TrafficPolicyDocumentEndpointOutputReference;
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#bias DataAwsRoute53TrafficPolicyDocument#bias}
    */
    readonly bias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
    */
    readonly endpointReference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
    */
    readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
    */
    readonly healthCheck?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#latitude DataAwsRoute53TrafficPolicyDocument#latitude}
    */
    readonly latitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#longitude DataAwsRoute53TrafficPolicyDocument#longitude}
    */
    readonly longitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#region DataAwsRoute53TrafficPolicyDocument#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
    */
    readonly ruleReference?: string;
}
export declare function dataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation | cdktf.IResolvable): any;
export declare function dataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationToHclTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation | cdktf.IResolvable): any;
export declare class DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation | cdktf.IResolvable | undefined);
    private _bias?;
    get bias(): string;
    set bias(value: string);
    resetBias(): void;
    get biasInput(): string | undefined;
    private _endpointReference?;
    get endpointReference(): string;
    set endpointReference(value: string);
    resetEndpointReference(): void;
    get endpointReferenceInput(): string | undefined;
    private _evaluateTargetHealth?;
    get evaluateTargetHealth(): boolean | cdktf.IResolvable;
    set evaluateTargetHealth(value: boolean | cdktf.IResolvable);
    resetEvaluateTargetHealth(): void;
    get evaluateTargetHealthInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheck?;
    get healthCheck(): string;
    set healthCheck(value: string);
    resetHealthCheck(): void;
    get healthCheckInput(): string | undefined;
    private _latitude?;
    get latitude(): string;
    set latitude(value: string);
    resetLatitude(): void;
    get latitudeInput(): string | undefined;
    private _longitude?;
    get longitude(): string;
    set longitude(value: string);
    resetLongitude(): void;
    get longitudeInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _ruleReference?;
    get ruleReference(): string;
    set ruleReference(value: string);
    resetRuleReference(): void;
    get ruleReferenceInput(): string | undefined;
}
export declare class DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationOutputReference;
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleItems {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
    */
    readonly endpointReference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
    */
    readonly healthCheck?: string;
}
export declare function dataAwsRoute53TrafficPolicyDocumentRuleItemsToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleItems | cdktf.IResolvable): any;
export declare function dataAwsRoute53TrafficPolicyDocumentRuleItemsToHclTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleItems | cdktf.IResolvable): any;
export declare class DataAwsRoute53TrafficPolicyDocumentRuleItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleItems | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleItems | cdktf.IResolvable | undefined);
    private _endpointReference?;
    get endpointReference(): string;
    set endpointReference(value: string);
    resetEndpointReference(): void;
    get endpointReferenceInput(): string | undefined;
    private _healthCheck?;
    get healthCheck(): string;
    set healthCheck(value: string);
    resetHealthCheck(): void;
    get healthCheckInput(): string | undefined;
}
export declare class DataAwsRoute53TrafficPolicyDocumentRuleItemsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRoute53TrafficPolicyDocumentRuleItems[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleItemsOutputReference;
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#continent DataAwsRoute53TrafficPolicyDocument#continent}
    */
    readonly continent?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#country DataAwsRoute53TrafficPolicyDocument#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
    */
    readonly endpointReference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
    */
    readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
    */
    readonly healthCheck?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#is_default DataAwsRoute53TrafficPolicyDocument#is_default}
    */
    readonly isDefault?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
    */
    readonly ruleReference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#subdivision DataAwsRoute53TrafficPolicyDocument#subdivision}
    */
    readonly subdivision?: string;
}
export declare function dataAwsRoute53TrafficPolicyDocumentRuleLocationToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleLocation | cdktf.IResolvable): any;
export declare function dataAwsRoute53TrafficPolicyDocumentRuleLocationToHclTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleLocation | cdktf.IResolvable): any;
export declare class DataAwsRoute53TrafficPolicyDocumentRuleLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleLocation | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleLocation | cdktf.IResolvable | undefined);
    private _continent?;
    get continent(): string;
    set continent(value: string);
    resetContinent(): void;
    get continentInput(): string | undefined;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string | undefined;
    private _endpointReference?;
    get endpointReference(): string;
    set endpointReference(value: string);
    resetEndpointReference(): void;
    get endpointReferenceInput(): string | undefined;
    private _evaluateTargetHealth?;
    get evaluateTargetHealth(): boolean | cdktf.IResolvable;
    set evaluateTargetHealth(value: boolean | cdktf.IResolvable);
    resetEvaluateTargetHealth(): void;
    get evaluateTargetHealthInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheck?;
    get healthCheck(): string;
    set healthCheck(value: string);
    resetHealthCheck(): void;
    get healthCheckInput(): string | undefined;
    private _isDefault?;
    get isDefault(): boolean | cdktf.IResolvable;
    set isDefault(value: boolean | cdktf.IResolvable);
    resetIsDefault(): void;
    get isDefaultInput(): boolean | cdktf.IResolvable | undefined;
    private _ruleReference?;
    get ruleReference(): string;
    set ruleReference(value: string);
    resetRuleReference(): void;
    get ruleReferenceInput(): string | undefined;
    private _subdivision?;
    get subdivision(): string;
    set subdivision(value: string);
    resetSubdivision(): void;
    get subdivisionInput(): string | undefined;
}
export declare class DataAwsRoute53TrafficPolicyDocumentRuleLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRoute53TrafficPolicyDocumentRuleLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleLocationOutputReference;
}
export interface DataAwsRoute53TrafficPolicyDocumentRulePrimary {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
    */
    readonly endpointReference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
    */
    readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
    */
    readonly healthCheck?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
    */
    readonly ruleReference?: string;
}
export declare function dataAwsRoute53TrafficPolicyDocumentRulePrimaryToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRulePrimaryOutputReference | DataAwsRoute53TrafficPolicyDocumentRulePrimary): any;
export declare function dataAwsRoute53TrafficPolicyDocumentRulePrimaryToHclTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRulePrimaryOutputReference | DataAwsRoute53TrafficPolicyDocumentRulePrimary): any;
export declare class DataAwsRoute53TrafficPolicyDocumentRulePrimaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsRoute53TrafficPolicyDocumentRulePrimary | undefined;
    set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRulePrimary | undefined);
    private _endpointReference?;
    get endpointReference(): string;
    set endpointReference(value: string);
    resetEndpointReference(): void;
    get endpointReferenceInput(): string | undefined;
    private _evaluateTargetHealth?;
    get evaluateTargetHealth(): boolean | cdktf.IResolvable;
    set evaluateTargetHealth(value: boolean | cdktf.IResolvable);
    resetEvaluateTargetHealth(): void;
    get evaluateTargetHealthInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheck?;
    get healthCheck(): string;
    set healthCheck(value: string);
    resetHealthCheck(): void;
    get healthCheckInput(): string | undefined;
    private _ruleReference?;
    get ruleReference(): string;
    set ruleReference(value: string);
    resetRuleReference(): void;
    get ruleReferenceInput(): string | undefined;
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleRegion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
    */
    readonly endpointReference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
    */
    readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
    */
    readonly healthCheck?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#region DataAwsRoute53TrafficPolicyDocument#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
    */
    readonly ruleReference?: string;
}
export declare function dataAwsRoute53TrafficPolicyDocumentRuleRegionToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleRegion | cdktf.IResolvable): any;
export declare function dataAwsRoute53TrafficPolicyDocumentRuleRegionToHclTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleRegion | cdktf.IResolvable): any;
export declare class DataAwsRoute53TrafficPolicyDocumentRuleRegionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleRegion | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleRegion | cdktf.IResolvable | undefined);
    private _endpointReference?;
    get endpointReference(): string;
    set endpointReference(value: string);
    resetEndpointReference(): void;
    get endpointReferenceInput(): string | undefined;
    private _evaluateTargetHealth?;
    get evaluateTargetHealth(): boolean | cdktf.IResolvable;
    set evaluateTargetHealth(value: boolean | cdktf.IResolvable);
    resetEvaluateTargetHealth(): void;
    get evaluateTargetHealthInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheck?;
    get healthCheck(): string;
    set healthCheck(value: string);
    resetHealthCheck(): void;
    get healthCheckInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _ruleReference?;
    get ruleReference(): string;
    set ruleReference(value: string);
    resetRuleReference(): void;
    get ruleReferenceInput(): string | undefined;
}
export declare class DataAwsRoute53TrafficPolicyDocumentRuleRegionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRoute53TrafficPolicyDocumentRuleRegion[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleRegionOutputReference;
}
export interface DataAwsRoute53TrafficPolicyDocumentRuleSecondary {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#endpoint_reference DataAwsRoute53TrafficPolicyDocument#endpoint_reference}
    */
    readonly endpointReference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#evaluate_target_health DataAwsRoute53TrafficPolicyDocument#evaluate_target_health}
    */
    readonly evaluateTargetHealth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#health_check DataAwsRoute53TrafficPolicyDocument#health_check}
    */
    readonly healthCheck?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#rule_reference DataAwsRoute53TrafficPolicyDocument#rule_reference}
    */
    readonly ruleReference?: string;
}
export declare function dataAwsRoute53TrafficPolicyDocumentRuleSecondaryToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleSecondaryOutputReference | DataAwsRoute53TrafficPolicyDocumentRuleSecondary): any;
export declare function dataAwsRoute53TrafficPolicyDocumentRuleSecondaryToHclTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRuleSecondaryOutputReference | DataAwsRoute53TrafficPolicyDocumentRuleSecondary): any;
export declare class DataAwsRoute53TrafficPolicyDocumentRuleSecondaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsRoute53TrafficPolicyDocumentRuleSecondary | undefined;
    set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRuleSecondary | undefined);
    private _endpointReference?;
    get endpointReference(): string;
    set endpointReference(value: string);
    resetEndpointReference(): void;
    get endpointReferenceInput(): string | undefined;
    private _evaluateTargetHealth?;
    get evaluateTargetHealth(): boolean | cdktf.IResolvable;
    set evaluateTargetHealth(value: boolean | cdktf.IResolvable);
    resetEvaluateTargetHealth(): void;
    get evaluateTargetHealthInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheck?;
    get healthCheck(): string;
    set healthCheck(value: string);
    resetHealthCheck(): void;
    get healthCheckInput(): string | undefined;
    private _ruleReference?;
    get ruleReference(): string;
    set ruleReference(value: string);
    resetRuleReference(): void;
    get ruleReferenceInput(): string | undefined;
}
export interface DataAwsRoute53TrafficPolicyDocumentRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#id DataAwsRoute53TrafficPolicyDocument#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#type DataAwsRoute53TrafficPolicyDocument#type}
    */
    readonly type?: string;
    /**
    * geo_proximity_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#geo_proximity_location DataAwsRoute53TrafficPolicyDocument#geo_proximity_location}
    */
    readonly geoProximityLocation?: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation[] | cdktf.IResolvable;
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#items DataAwsRoute53TrafficPolicyDocument#items}
    */
    readonly items?: DataAwsRoute53TrafficPolicyDocumentRuleItems[] | cdktf.IResolvable;
    /**
    * location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#location DataAwsRoute53TrafficPolicyDocument#location}
    */
    readonly location?: DataAwsRoute53TrafficPolicyDocumentRuleLocation[] | cdktf.IResolvable;
    /**
    * primary block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#primary DataAwsRoute53TrafficPolicyDocument#primary}
    */
    readonly primary?: DataAwsRoute53TrafficPolicyDocumentRulePrimary;
    /**
    * region block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#region DataAwsRoute53TrafficPolicyDocument#region}
    */
    readonly region?: DataAwsRoute53TrafficPolicyDocumentRuleRegion[] | cdktf.IResolvable;
    /**
    * secondary block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#secondary DataAwsRoute53TrafficPolicyDocument#secondary}
    */
    readonly secondary?: DataAwsRoute53TrafficPolicyDocumentRuleSecondary;
}
export declare function dataAwsRoute53TrafficPolicyDocumentRuleToTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRule | cdktf.IResolvable): any;
export declare function dataAwsRoute53TrafficPolicyDocumentRuleToHclTerraform(struct?: DataAwsRoute53TrafficPolicyDocumentRule | cdktf.IResolvable): any;
export declare class DataAwsRoute53TrafficPolicyDocumentRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53TrafficPolicyDocumentRule | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRoute53TrafficPolicyDocumentRule | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _geoProximityLocation;
    get geoProximityLocation(): DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocationList;
    putGeoProximityLocation(value: DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation[] | cdktf.IResolvable): void;
    resetGeoProximityLocation(): void;
    get geoProximityLocationInput(): cdktf.IResolvable | DataAwsRoute53TrafficPolicyDocumentRuleGeoProximityLocation[] | undefined;
    private _items;
    get items(): DataAwsRoute53TrafficPolicyDocumentRuleItemsList;
    putItems(value: DataAwsRoute53TrafficPolicyDocumentRuleItems[] | cdktf.IResolvable): void;
    resetItems(): void;
    get itemsInput(): cdktf.IResolvable | DataAwsRoute53TrafficPolicyDocumentRuleItems[] | undefined;
    private _location;
    get location(): DataAwsRoute53TrafficPolicyDocumentRuleLocationList;
    putLocation(value: DataAwsRoute53TrafficPolicyDocumentRuleLocation[] | cdktf.IResolvable): void;
    resetLocation(): void;
    get locationInput(): cdktf.IResolvable | DataAwsRoute53TrafficPolicyDocumentRuleLocation[] | undefined;
    private _primary;
    get primary(): DataAwsRoute53TrafficPolicyDocumentRulePrimaryOutputReference;
    putPrimary(value: DataAwsRoute53TrafficPolicyDocumentRulePrimary): void;
    resetPrimary(): void;
    get primaryInput(): DataAwsRoute53TrafficPolicyDocumentRulePrimary | undefined;
    private _region;
    get region(): DataAwsRoute53TrafficPolicyDocumentRuleRegionList;
    putRegion(value: DataAwsRoute53TrafficPolicyDocumentRuleRegion[] | cdktf.IResolvable): void;
    resetRegion(): void;
    get regionInput(): cdktf.IResolvable | DataAwsRoute53TrafficPolicyDocumentRuleRegion[] | undefined;
    private _secondary;
    get secondary(): DataAwsRoute53TrafficPolicyDocumentRuleSecondaryOutputReference;
    putSecondary(value: DataAwsRoute53TrafficPolicyDocumentRuleSecondary): void;
    resetSecondary(): void;
    get secondaryInput(): DataAwsRoute53TrafficPolicyDocumentRuleSecondary | undefined;
}
export declare class DataAwsRoute53TrafficPolicyDocumentRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRoute53TrafficPolicyDocumentRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53TrafficPolicyDocumentRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document aws_route53_traffic_policy_document}
*/
export declare class DataAwsRoute53TrafficPolicyDocument extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route53_traffic_policy_document";
    /**
    * Generates CDKTF code for importing a DataAwsRoute53TrafficPolicyDocument resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute53TrafficPolicyDocument to import
    * @param importFromId The id of the existing DataAwsRoute53TrafficPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute53TrafficPolicyDocument to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_traffic_policy_document aws_route53_traffic_policy_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53TrafficPolicyDocumentConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53TrafficPolicyDocumentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get json(): string;
    private _recordType?;
    get recordType(): string;
    set recordType(value: string);
    resetRecordType(): void;
    get recordTypeInput(): string | undefined;
    private _startEndpoint?;
    get startEndpoint(): string;
    set startEndpoint(value: string);
    resetStartEndpoint(): void;
    get startEndpointInput(): string | undefined;
    private _startRule?;
    get startRule(): string;
    set startRule(value: string);
    resetStartRule(): void;
    get startRuleInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _endpoint;
    get endpoint(): DataAwsRoute53TrafficPolicyDocumentEndpointList;
    putEndpoint(value: DataAwsRoute53TrafficPolicyDocumentEndpoint[] | cdktf.IResolvable): void;
    resetEndpoint(): void;
    get endpointInput(): cdktf.IResolvable | DataAwsRoute53TrafficPolicyDocumentEndpoint[] | undefined;
    private _rule;
    get rule(): DataAwsRoute53TrafficPolicyDocumentRuleList;
    putRule(value: DataAwsRoute53TrafficPolicyDocumentRule[] | cdktf.IResolvable): void;
    resetRule(): void;
    get ruleInput(): cdktf.IResolvable | DataAwsRoute53TrafficPolicyDocumentRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
