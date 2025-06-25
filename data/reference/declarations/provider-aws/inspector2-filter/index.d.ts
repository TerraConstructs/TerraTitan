/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Inspector2FilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#action Inspector2Filter#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#description Inspector2Filter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#name Inspector2Filter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#reason Inspector2Filter#reason}
    */
    readonly reason?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#tags Inspector2Filter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#filter_criteria Inspector2Filter#filter_criteria}
    */
    readonly filterCriteria?: Inspector2FilterFilterCriteria[] | cdktf.IResolvable;
}
export interface Inspector2FilterFilterCriteriaAwsAccountId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaAwsAccountIdToTerraform(struct?: Inspector2FilterFilterCriteriaAwsAccountId | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaAwsAccountIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaAwsAccountId | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaAwsAccountIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaAwsAccountId | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaAwsAccountId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaAwsAccountIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaAwsAccountId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaAwsAccountIdOutputReference;
}
export interface Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameToTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameToHclTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference;
}
export interface Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToHclTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference;
}
export interface Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaCodeVulnerabilityFilePathToTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaCodeVulnerabilityFilePathToHclTerraform(struct?: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference;
}
export interface Inspector2FilterFilterCriteriaComponentId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaComponentIdToTerraform(struct?: Inspector2FilterFilterCriteriaComponentId | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaComponentIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaComponentId | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaComponentIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaComponentId | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaComponentId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaComponentIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaComponentId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaComponentIdOutputReference;
}
export interface Inspector2FilterFilterCriteriaComponentType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaComponentTypeToTerraform(struct?: Inspector2FilterFilterCriteriaComponentType | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaComponentTypeToHclTerraform(struct?: Inspector2FilterFilterCriteriaComponentType | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaComponentTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaComponentType | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaComponentType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaComponentTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaComponentType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaComponentTypeOutputReference;
}
export interface Inspector2FilterFilterCriteriaEc2InstanceImageId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaEc2InstanceImageIdToTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceImageId | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEc2InstanceImageIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceImageId | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEc2InstanceImageIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEc2InstanceImageId | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEc2InstanceImageId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaEc2InstanceImageIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEc2InstanceImageId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEc2InstanceImageIdOutputReference;
}
export interface Inspector2FilterFilterCriteriaEc2InstanceSubnetId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaEc2InstanceSubnetIdToTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceSubnetId | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEc2InstanceSubnetIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceSubnetId | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEc2InstanceSubnetId | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEc2InstanceSubnetId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaEc2InstanceSubnetIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEc2InstanceSubnetId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference;
}
export interface Inspector2FilterFilterCriteriaEc2InstanceVpcId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaEc2InstanceVpcIdToTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceVpcId | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEc2InstanceVpcIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaEc2InstanceVpcId | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEc2InstanceVpcIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEc2InstanceVpcId | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEc2InstanceVpcId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaEc2InstanceVpcIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEc2InstanceVpcId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEc2InstanceVpcIdOutputReference;
}
export interface Inspector2FilterFilterCriteriaEcrImageArchitecture {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaEcrImageArchitectureToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageArchitecture | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEcrImageArchitectureToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageArchitecture | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEcrImageArchitectureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEcrImageArchitecture | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEcrImageArchitecture | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaEcrImageArchitectureList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEcrImageArchitecture[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEcrImageArchitectureOutputReference;
}
export interface Inspector2FilterFilterCriteriaEcrImageHash {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaEcrImageHashToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageHash | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEcrImageHashToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageHash | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEcrImageHashOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEcrImageHash | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEcrImageHash | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaEcrImageHashList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEcrImageHash[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEcrImageHashOutputReference;
}
export interface Inspector2FilterFilterCriteriaEcrImagePushedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
    */
    readonly endInclusive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
    */
    readonly startInclusive?: string;
}
export declare function inspector2FilterFilterCriteriaEcrImagePushedAtToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImagePushedAt | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEcrImagePushedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImagePushedAt | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEcrImagePushedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEcrImagePushedAt | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEcrImagePushedAt | cdktf.IResolvable | undefined);
    private _endInclusive?;
    get endInclusive(): string;
    set endInclusive(value: string);
    resetEndInclusive(): void;
    get endInclusiveInput(): string | undefined;
    private _startInclusive?;
    get startInclusive(): string;
    set startInclusive(value: string);
    resetStartInclusive(): void;
    get startInclusiveInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaEcrImagePushedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEcrImagePushedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEcrImagePushedAtOutputReference;
}
export interface Inspector2FilterFilterCriteriaEcrImageRegistry {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaEcrImageRegistryToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageRegistry | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEcrImageRegistryToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageRegistry | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEcrImageRegistryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEcrImageRegistry | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEcrImageRegistry | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaEcrImageRegistryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEcrImageRegistry[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEcrImageRegistryOutputReference;
}
export interface Inspector2FilterFilterCriteriaEcrImageRepositoryName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaEcrImageRepositoryNameToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageRepositoryName | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEcrImageRepositoryNameToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageRepositoryName | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEcrImageRepositoryNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEcrImageRepositoryName | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEcrImageRepositoryName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaEcrImageRepositoryNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEcrImageRepositoryName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEcrImageRepositoryNameOutputReference;
}
export interface Inspector2FilterFilterCriteriaEcrImageTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaEcrImageTagsToTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageTags | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEcrImageTagsToHclTerraform(struct?: Inspector2FilterFilterCriteriaEcrImageTags | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEcrImageTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEcrImageTags | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEcrImageTags | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaEcrImageTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEcrImageTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEcrImageTagsOutputReference;
}
export interface Inspector2FilterFilterCriteriaEpssScore {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#lower_inclusive Inspector2Filter#lower_inclusive}
    */
    readonly lowerInclusive: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#upper_inclusive Inspector2Filter#upper_inclusive}
    */
    readonly upperInclusive: number;
}
export declare function inspector2FilterFilterCriteriaEpssScoreToTerraform(struct?: Inspector2FilterFilterCriteriaEpssScore | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaEpssScoreToHclTerraform(struct?: Inspector2FilterFilterCriteriaEpssScore | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaEpssScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaEpssScore | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaEpssScore | cdktf.IResolvable | undefined);
    private _lowerInclusive?;
    get lowerInclusive(): number;
    set lowerInclusive(value: number);
    get lowerInclusiveInput(): number | undefined;
    private _upperInclusive?;
    get upperInclusive(): number;
    set upperInclusive(value: number);
    get upperInclusiveInput(): number | undefined;
}
export declare class Inspector2FilterFilterCriteriaEpssScoreList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaEpssScore[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaEpssScoreOutputReference;
}
export interface Inspector2FilterFilterCriteriaExploitAvailable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaExploitAvailableToTerraform(struct?: Inspector2FilterFilterCriteriaExploitAvailable | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaExploitAvailableToHclTerraform(struct?: Inspector2FilterFilterCriteriaExploitAvailable | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaExploitAvailableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaExploitAvailable | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaExploitAvailable | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaExploitAvailableList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaExploitAvailable[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaExploitAvailableOutputReference;
}
export interface Inspector2FilterFilterCriteriaFindingArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaFindingArnToTerraform(struct?: Inspector2FilterFilterCriteriaFindingArn | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaFindingArnToHclTerraform(struct?: Inspector2FilterFilterCriteriaFindingArn | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaFindingArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaFindingArn | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaFindingArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaFindingArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaFindingArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaFindingArnOutputReference;
}
export interface Inspector2FilterFilterCriteriaFindingStatus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaFindingStatusToTerraform(struct?: Inspector2FilterFilterCriteriaFindingStatus | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaFindingStatusToHclTerraform(struct?: Inspector2FilterFilterCriteriaFindingStatus | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaFindingStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaFindingStatus | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaFindingStatus | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaFindingStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaFindingStatus[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaFindingStatusOutputReference;
}
export interface Inspector2FilterFilterCriteriaFindingType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaFindingTypeToTerraform(struct?: Inspector2FilterFilterCriteriaFindingType | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaFindingTypeToHclTerraform(struct?: Inspector2FilterFilterCriteriaFindingType | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaFindingTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaFindingType | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaFindingType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaFindingTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaFindingType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaFindingTypeOutputReference;
}
export interface Inspector2FilterFilterCriteriaFirstObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
    */
    readonly endInclusive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
    */
    readonly startInclusive?: string;
}
export declare function inspector2FilterFilterCriteriaFirstObservedAtToTerraform(struct?: Inspector2FilterFilterCriteriaFirstObservedAt | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaFirstObservedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaFirstObservedAt | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaFirstObservedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaFirstObservedAt | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaFirstObservedAt | cdktf.IResolvable | undefined);
    private _endInclusive?;
    get endInclusive(): string;
    set endInclusive(value: string);
    resetEndInclusive(): void;
    get endInclusiveInput(): string | undefined;
    private _startInclusive?;
    get startInclusive(): string;
    set startInclusive(value: string);
    resetStartInclusive(): void;
    get startInclusiveInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaFirstObservedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaFirstObservedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaFirstObservedAtOutputReference;
}
export interface Inspector2FilterFilterCriteriaFixAvailable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaFixAvailableToTerraform(struct?: Inspector2FilterFilterCriteriaFixAvailable | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaFixAvailableToHclTerraform(struct?: Inspector2FilterFilterCriteriaFixAvailable | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaFixAvailableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaFixAvailable | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaFixAvailable | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaFixAvailableList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaFixAvailable[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaFixAvailableOutputReference;
}
export interface Inspector2FilterFilterCriteriaInspectorScore {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#lower_inclusive Inspector2Filter#lower_inclusive}
    */
    readonly lowerInclusive: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#upper_inclusive Inspector2Filter#upper_inclusive}
    */
    readonly upperInclusive: number;
}
export declare function inspector2FilterFilterCriteriaInspectorScoreToTerraform(struct?: Inspector2FilterFilterCriteriaInspectorScore | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaInspectorScoreToHclTerraform(struct?: Inspector2FilterFilterCriteriaInspectorScore | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaInspectorScoreOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaInspectorScore | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaInspectorScore | cdktf.IResolvable | undefined);
    private _lowerInclusive?;
    get lowerInclusive(): number;
    set lowerInclusive(value: number);
    get lowerInclusiveInput(): number | undefined;
    private _upperInclusive?;
    get upperInclusive(): number;
    set upperInclusive(value: number);
    get upperInclusiveInput(): number | undefined;
}
export declare class Inspector2FilterFilterCriteriaInspectorScoreList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaInspectorScore[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaInspectorScoreOutputReference;
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference;
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
    */
    readonly endInclusive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
    */
    readonly startInclusive?: string;
}
export declare function inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktf.IResolvable | undefined);
    private _endInclusive?;
    get endInclusive(): string;
    set endInclusive(value: string);
    resetEndInclusive(): void;
    get endInclusiveInput(): string | undefined;
    private _startInclusive?;
    get startInclusive(): string;
    set startInclusive(value: string);
    resetStartInclusive(): void;
    get startInclusiveInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference;
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionLayers {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaLambdaFunctionLayersToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionLayers | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaLambdaFunctionLayersToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionLayers | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaLambdaFunctionLayersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionLayers | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionLayers | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaLambdaFunctionLayersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaLambdaFunctionLayers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionLayersOutputReference;
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaLambdaFunctionNameToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionName | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaLambdaFunctionNameToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionName | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaLambdaFunctionNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionName | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaLambdaFunctionNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaLambdaFunctionName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionNameOutputReference;
}
export interface Inspector2FilterFilterCriteriaLambdaFunctionRuntime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaLambdaFunctionRuntimeToTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionRuntime | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaLambdaFunctionRuntimeToHclTerraform(struct?: Inspector2FilterFilterCriteriaLambdaFunctionRuntime | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaLambdaFunctionRuntime | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaLambdaFunctionRuntime | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaLambdaFunctionRuntimeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaLambdaFunctionRuntime[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference;
}
export interface Inspector2FilterFilterCriteriaLastObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
    */
    readonly endInclusive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
    */
    readonly startInclusive?: string;
}
export declare function inspector2FilterFilterCriteriaLastObservedAtToTerraform(struct?: Inspector2FilterFilterCriteriaLastObservedAt | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaLastObservedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaLastObservedAt | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaLastObservedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaLastObservedAt | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaLastObservedAt | cdktf.IResolvable | undefined);
    private _endInclusive?;
    get endInclusive(): string;
    set endInclusive(value: string);
    resetEndInclusive(): void;
    get endInclusiveInput(): string | undefined;
    private _startInclusive?;
    get startInclusive(): string;
    set startInclusive(value: string);
    resetStartInclusive(): void;
    get startInclusiveInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaLastObservedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaLastObservedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaLastObservedAtOutputReference;
}
export interface Inspector2FilterFilterCriteriaNetworkProtocol {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaNetworkProtocolToTerraform(struct?: Inspector2FilterFilterCriteriaNetworkProtocol | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaNetworkProtocolToHclTerraform(struct?: Inspector2FilterFilterCriteriaNetworkProtocol | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaNetworkProtocolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaNetworkProtocol | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaNetworkProtocol | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaNetworkProtocolList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaNetworkProtocol[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaNetworkProtocolOutputReference;
}
export interface Inspector2FilterFilterCriteriaPortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#begin_inclusive Inspector2Filter#begin_inclusive}
    */
    readonly beginInclusive: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
    */
    readonly endInclusive: number;
}
export declare function inspector2FilterFilterCriteriaPortRangeToTerraform(struct?: Inspector2FilterFilterCriteriaPortRange | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaPortRangeToHclTerraform(struct?: Inspector2FilterFilterCriteriaPortRange | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaPortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaPortRange | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaPortRange | cdktf.IResolvable | undefined);
    private _beginInclusive?;
    get beginInclusive(): number;
    set beginInclusive(value: number);
    get beginInclusiveInput(): number | undefined;
    private _endInclusive?;
    get endInclusive(): number;
    set endInclusive(value: number);
    get endInclusiveInput(): number | undefined;
}
export declare class Inspector2FilterFilterCriteriaPortRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaPortRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaPortRangeOutputReference;
}
export interface Inspector2FilterFilterCriteriaRelatedVulnerabilities {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaRelatedVulnerabilitiesToTerraform(struct?: Inspector2FilterFilterCriteriaRelatedVulnerabilities | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaRelatedVulnerabilitiesToHclTerraform(struct?: Inspector2FilterFilterCriteriaRelatedVulnerabilities | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaRelatedVulnerabilities | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaRelatedVulnerabilities | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaRelatedVulnerabilitiesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaRelatedVulnerabilities[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference;
}
export interface Inspector2FilterFilterCriteriaResourceId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaResourceIdToTerraform(struct?: Inspector2FilterFilterCriteriaResourceId | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaResourceIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaResourceId | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaResourceIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaResourceId | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaResourceId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaResourceIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaResourceId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaResourceIdOutputReference;
}
export interface Inspector2FilterFilterCriteriaResourceTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#key Inspector2Filter#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaResourceTagsToTerraform(struct?: Inspector2FilterFilterCriteriaResourceTags | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaResourceTagsToHclTerraform(struct?: Inspector2FilterFilterCriteriaResourceTags | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaResourceTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaResourceTags | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaResourceTags | cdktf.IResolvable | undefined);
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
export declare class Inspector2FilterFilterCriteriaResourceTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaResourceTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaResourceTagsOutputReference;
}
export interface Inspector2FilterFilterCriteriaResourceType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaResourceTypeToTerraform(struct?: Inspector2FilterFilterCriteriaResourceType | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaResourceTypeToHclTerraform(struct?: Inspector2FilterFilterCriteriaResourceType | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaResourceTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaResourceType | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaResourceType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaResourceTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaResourceType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaResourceTypeOutputReference;
}
export interface Inspector2FilterFilterCriteriaSeverity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaSeverityToTerraform(struct?: Inspector2FilterFilterCriteriaSeverity | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaSeverityToHclTerraform(struct?: Inspector2FilterFilterCriteriaSeverity | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaSeverityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaSeverity | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaSeverity | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaSeverityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaSeverity[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaSeverityOutputReference;
}
export interface Inspector2FilterFilterCriteriaTitle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaTitleToTerraform(struct?: Inspector2FilterFilterCriteriaTitle | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaTitleToHclTerraform(struct?: Inspector2FilterFilterCriteriaTitle | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaTitleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaTitle | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaTitle | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaTitleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaTitle[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaTitleOutputReference;
}
export interface Inspector2FilterFilterCriteriaUpdatedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#end_inclusive Inspector2Filter#end_inclusive}
    */
    readonly endInclusive?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#start_inclusive Inspector2Filter#start_inclusive}
    */
    readonly startInclusive?: string;
}
export declare function inspector2FilterFilterCriteriaUpdatedAtToTerraform(struct?: Inspector2FilterFilterCriteriaUpdatedAt | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaUpdatedAtToHclTerraform(struct?: Inspector2FilterFilterCriteriaUpdatedAt | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaUpdatedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaUpdatedAt | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaUpdatedAt | cdktf.IResolvable | undefined);
    private _endInclusive?;
    get endInclusive(): string;
    set endInclusive(value: string);
    resetEndInclusive(): void;
    get endInclusiveInput(): string | undefined;
    private _startInclusive?;
    get startInclusive(): string;
    set startInclusive(value: string);
    resetStartInclusive(): void;
    get startInclusiveInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaUpdatedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaUpdatedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaUpdatedAtOutputReference;
}
export interface Inspector2FilterFilterCriteriaVendorSeverity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVendorSeverityToTerraform(struct?: Inspector2FilterFilterCriteriaVendorSeverity | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVendorSeverityToHclTerraform(struct?: Inspector2FilterFilterCriteriaVendorSeverity | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVendorSeverityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVendorSeverity | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVendorSeverity | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVendorSeverityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVendorSeverity[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVendorSeverityOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerabilityId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVulnerabilityIdToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerabilityId | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerabilityIdToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerabilityId | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerabilityIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerabilityId | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerabilityId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerabilityIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerabilityId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerabilityIdOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerabilitySource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVulnerabilitySourceToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerabilitySource | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerabilitySourceToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerabilitySource | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerabilitySourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerabilitySource | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerabilitySource | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerabilitySourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerabilitySource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerabilitySourceOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVulnerablePackagesArchitectureToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerablePackagesArchitectureToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesEpoch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#lower_inclusive Inspector2Filter#lower_inclusive}
    */
    readonly lowerInclusive: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#upper_inclusive Inspector2Filter#upper_inclusive}
    */
    readonly upperInclusive: number;
}
export declare function inspector2FilterFilterCriteriaVulnerablePackagesEpochToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerablePackagesEpochToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesEpochOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesEpoch | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch | cdktf.IResolvable | undefined);
    private _lowerInclusive?;
    get lowerInclusive(): number;
    set lowerInclusive(value: number);
    get lowerInclusiveInput(): number | undefined;
    private _upperInclusive?;
    get upperInclusive(): number;
    set upperInclusive(value: number);
    get upperInclusiveInput(): number | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesEpochList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesEpochOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesFilePath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVulnerablePackagesFilePathToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerablePackagesFilePathToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesFilePathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesFilePath | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesFilePathList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesFilePathOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVulnerablePackagesNameToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesName | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerablePackagesNameToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesName | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesName | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerablePackagesName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesNameOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesRelease {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVulnerablePackagesReleaseToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesRelease | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerablePackagesReleaseToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesRelease | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesReleaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesRelease | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesRelease | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesReleaseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerablePackagesRelease[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesReleaseOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerablePackagesVersion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#comparison Inspector2Filter#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#value Inspector2Filter#value}
    */
    readonly value: string;
}
export declare function inspector2FilterFilterCriteriaVulnerablePackagesVersionToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesVersion | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerablePackagesVersionToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackagesVersion | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesVersionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackagesVersion | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackagesVersion | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesVersionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerablePackagesVersion[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesVersionOutputReference;
}
export interface Inspector2FilterFilterCriteriaVulnerablePackages {
    /**
    * architecture block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#architecture Inspector2Filter#architecture}
    */
    readonly architecture?: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture[] | cdktf.IResolvable;
    /**
    * epoch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#epoch Inspector2Filter#epoch}
    */
    readonly epoch?: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch[] | cdktf.IResolvable;
    /**
    * file_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#file_path Inspector2Filter#file_path}
    */
    readonly filePath?: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath[] | cdktf.IResolvable;
    /**
    * name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#name Inspector2Filter#name}
    */
    readonly name?: Inspector2FilterFilterCriteriaVulnerablePackagesName[] | cdktf.IResolvable;
    /**
    * release block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#release Inspector2Filter#release}
    */
    readonly release?: Inspector2FilterFilterCriteriaVulnerablePackagesRelease[] | cdktf.IResolvable;
    /**
    * source_lambda_layer_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#source_lambda_layer_arn Inspector2Filter#source_lambda_layer_arn}
    */
    readonly sourceLambdaLayerArn?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn[] | cdktf.IResolvable;
    /**
    * source_layer_hash block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#source_layer_hash Inspector2Filter#source_layer_hash}
    */
    readonly sourceLayerHash?: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash[] | cdktf.IResolvable;
    /**
    * version block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#version Inspector2Filter#version}
    */
    readonly version?: Inspector2FilterFilterCriteriaVulnerablePackagesVersion[] | cdktf.IResolvable;
}
export declare function inspector2FilterFilterCriteriaVulnerablePackagesToTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackages | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaVulnerablePackagesToHclTerraform(struct?: Inspector2FilterFilterCriteriaVulnerablePackages | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteriaVulnerablePackages | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteriaVulnerablePackages | cdktf.IResolvable | undefined);
    private _architecture;
    get architecture(): Inspector2FilterFilterCriteriaVulnerablePackagesArchitectureList;
    putArchitecture(value: Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture[] | cdktf.IResolvable): void;
    resetArchitecture(): void;
    get architectureInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerablePackagesArchitecture[] | undefined;
    private _epoch;
    get epoch(): Inspector2FilterFilterCriteriaVulnerablePackagesEpochList;
    putEpoch(value: Inspector2FilterFilterCriteriaVulnerablePackagesEpoch[] | cdktf.IResolvable): void;
    resetEpoch(): void;
    get epochInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerablePackagesEpoch[] | undefined;
    private _filePath;
    get filePath(): Inspector2FilterFilterCriteriaVulnerablePackagesFilePathList;
    putFilePath(value: Inspector2FilterFilterCriteriaVulnerablePackagesFilePath[] | cdktf.IResolvable): void;
    resetFilePath(): void;
    get filePathInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerablePackagesFilePath[] | undefined;
    private _name;
    get name(): Inspector2FilterFilterCriteriaVulnerablePackagesNameList;
    putName(value: Inspector2FilterFilterCriteriaVulnerablePackagesName[] | cdktf.IResolvable): void;
    resetName(): void;
    get nameInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerablePackagesName[] | undefined;
    private _release;
    get release(): Inspector2FilterFilterCriteriaVulnerablePackagesReleaseList;
    putRelease(value: Inspector2FilterFilterCriteriaVulnerablePackagesRelease[] | cdktf.IResolvable): void;
    resetRelease(): void;
    get releaseInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerablePackagesRelease[] | undefined;
    private _sourceLambdaLayerArn;
    get sourceLambdaLayerArn(): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnList;
    putSourceLambdaLayerArn(value: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn[] | cdktf.IResolvable): void;
    resetSourceLambdaLayerArn(): void;
    get sourceLambdaLayerArnInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn[] | undefined;
    private _sourceLayerHash;
    get sourceLayerHash(): Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHashList;
    putSourceLayerHash(value: Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash[] | cdktf.IResolvable): void;
    resetSourceLayerHash(): void;
    get sourceLayerHashInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerablePackagesSourceLayerHash[] | undefined;
    private _version;
    get version(): Inspector2FilterFilterCriteriaVulnerablePackagesVersionList;
    putVersion(value: Inspector2FilterFilterCriteriaVulnerablePackagesVersion[] | cdktf.IResolvable): void;
    resetVersion(): void;
    get versionInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerablePackagesVersion[] | undefined;
}
export declare class Inspector2FilterFilterCriteriaVulnerablePackagesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteriaVulnerablePackages[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaVulnerablePackagesOutputReference;
}
export interface Inspector2FilterFilterCriteria {
    /**
    * aws_account_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#aws_account_id Inspector2Filter#aws_account_id}
    */
    readonly awsAccountId?: Inspector2FilterFilterCriteriaAwsAccountId[] | cdktf.IResolvable;
    /**
    * code_vulnerability_detector_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#code_vulnerability_detector_name Inspector2Filter#code_vulnerability_detector_name}
    */
    readonly codeVulnerabilityDetectorName?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | cdktf.IResolvable;
    /**
    * code_vulnerability_detector_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#code_vulnerability_detector_tags Inspector2Filter#code_vulnerability_detector_tags}
    */
    readonly codeVulnerabilityDetectorTags?: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | cdktf.IResolvable;
    /**
    * code_vulnerability_file_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#code_vulnerability_file_path Inspector2Filter#code_vulnerability_file_path}
    */
    readonly codeVulnerabilityFilePath?: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath[] | cdktf.IResolvable;
    /**
    * component_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#component_id Inspector2Filter#component_id}
    */
    readonly componentId?: Inspector2FilterFilterCriteriaComponentId[] | cdktf.IResolvable;
    /**
    * component_type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#component_type Inspector2Filter#component_type}
    */
    readonly componentType?: Inspector2FilterFilterCriteriaComponentType[] | cdktf.IResolvable;
    /**
    * ec2_instance_image_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#ec2_instance_image_id Inspector2Filter#ec2_instance_image_id}
    */
    readonly ec2InstanceImageId?: Inspector2FilterFilterCriteriaEc2InstanceImageId[] | cdktf.IResolvable;
    /**
    * ec2_instance_subnet_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#ec2_instance_subnet_id Inspector2Filter#ec2_instance_subnet_id}
    */
    readonly ec2InstanceSubnetId?: Inspector2FilterFilterCriteriaEc2InstanceSubnetId[] | cdktf.IResolvable;
    /**
    * ec2_instance_vpc_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#ec2_instance_vpc_id Inspector2Filter#ec2_instance_vpc_id}
    */
    readonly ec2InstanceVpcId?: Inspector2FilterFilterCriteriaEc2InstanceVpcId[] | cdktf.IResolvable;
    /**
    * ecr_image_architecture block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#ecr_image_architecture Inspector2Filter#ecr_image_architecture}
    */
    readonly ecrImageArchitecture?: Inspector2FilterFilterCriteriaEcrImageArchitecture[] | cdktf.IResolvable;
    /**
    * ecr_image_hash block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#ecr_image_hash Inspector2Filter#ecr_image_hash}
    */
    readonly ecrImageHash?: Inspector2FilterFilterCriteriaEcrImageHash[] | cdktf.IResolvable;
    /**
    * ecr_image_pushed_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#ecr_image_pushed_at Inspector2Filter#ecr_image_pushed_at}
    */
    readonly ecrImagePushedAt?: Inspector2FilterFilterCriteriaEcrImagePushedAt[] | cdktf.IResolvable;
    /**
    * ecr_image_registry block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#ecr_image_registry Inspector2Filter#ecr_image_registry}
    */
    readonly ecrImageRegistry?: Inspector2FilterFilterCriteriaEcrImageRegistry[] | cdktf.IResolvable;
    /**
    * ecr_image_repository_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#ecr_image_repository_name Inspector2Filter#ecr_image_repository_name}
    */
    readonly ecrImageRepositoryName?: Inspector2FilterFilterCriteriaEcrImageRepositoryName[] | cdktf.IResolvable;
    /**
    * ecr_image_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#ecr_image_tags Inspector2Filter#ecr_image_tags}
    */
    readonly ecrImageTags?: Inspector2FilterFilterCriteriaEcrImageTags[] | cdktf.IResolvable;
    /**
    * epss_score block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#epss_score Inspector2Filter#epss_score}
    */
    readonly epssScore?: Inspector2FilterFilterCriteriaEpssScore[] | cdktf.IResolvable;
    /**
    * exploit_available block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#exploit_available Inspector2Filter#exploit_available}
    */
    readonly exploitAvailable?: Inspector2FilterFilterCriteriaExploitAvailable[] | cdktf.IResolvable;
    /**
    * finding_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#finding_arn Inspector2Filter#finding_arn}
    */
    readonly findingArn?: Inspector2FilterFilterCriteriaFindingArn[] | cdktf.IResolvable;
    /**
    * finding_status block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#finding_status Inspector2Filter#finding_status}
    */
    readonly findingStatus?: Inspector2FilterFilterCriteriaFindingStatus[] | cdktf.IResolvable;
    /**
    * finding_type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#finding_type Inspector2Filter#finding_type}
    */
    readonly findingType?: Inspector2FilterFilterCriteriaFindingType[] | cdktf.IResolvable;
    /**
    * first_observed_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#first_observed_at Inspector2Filter#first_observed_at}
    */
    readonly firstObservedAt?: Inspector2FilterFilterCriteriaFirstObservedAt[] | cdktf.IResolvable;
    /**
    * fix_available block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#fix_available Inspector2Filter#fix_available}
    */
    readonly fixAvailable?: Inspector2FilterFilterCriteriaFixAvailable[] | cdktf.IResolvable;
    /**
    * inspector_score block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#inspector_score Inspector2Filter#inspector_score}
    */
    readonly inspectorScore?: Inspector2FilterFilterCriteriaInspectorScore[] | cdktf.IResolvable;
    /**
    * lambda_function_execution_role_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#lambda_function_execution_role_arn Inspector2Filter#lambda_function_execution_role_arn}
    */
    readonly lambdaFunctionExecutionRoleArn?: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | cdktf.IResolvable;
    /**
    * lambda_function_last_modified_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#lambda_function_last_modified_at Inspector2Filter#lambda_function_last_modified_at}
    */
    readonly lambdaFunctionLastModifiedAt?: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | cdktf.IResolvable;
    /**
    * lambda_function_layers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#lambda_function_layers Inspector2Filter#lambda_function_layers}
    */
    readonly lambdaFunctionLayers?: Inspector2FilterFilterCriteriaLambdaFunctionLayers[] | cdktf.IResolvable;
    /**
    * lambda_function_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#lambda_function_name Inspector2Filter#lambda_function_name}
    */
    readonly lambdaFunctionName?: Inspector2FilterFilterCriteriaLambdaFunctionName[] | cdktf.IResolvable;
    /**
    * lambda_function_runtime block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#lambda_function_runtime Inspector2Filter#lambda_function_runtime}
    */
    readonly lambdaFunctionRuntime?: Inspector2FilterFilterCriteriaLambdaFunctionRuntime[] | cdktf.IResolvable;
    /**
    * last_observed_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#last_observed_at Inspector2Filter#last_observed_at}
    */
    readonly lastObservedAt?: Inspector2FilterFilterCriteriaLastObservedAt[] | cdktf.IResolvable;
    /**
    * network_protocol block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#network_protocol Inspector2Filter#network_protocol}
    */
    readonly networkProtocol?: Inspector2FilterFilterCriteriaNetworkProtocol[] | cdktf.IResolvable;
    /**
    * port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#port_range Inspector2Filter#port_range}
    */
    readonly portRange?: Inspector2FilterFilterCriteriaPortRange[] | cdktf.IResolvable;
    /**
    * related_vulnerabilities block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#related_vulnerabilities Inspector2Filter#related_vulnerabilities}
    */
    readonly relatedVulnerabilities?: Inspector2FilterFilterCriteriaRelatedVulnerabilities[] | cdktf.IResolvable;
    /**
    * resource_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#resource_id Inspector2Filter#resource_id}
    */
    readonly resourceId?: Inspector2FilterFilterCriteriaResourceId[] | cdktf.IResolvable;
    /**
    * resource_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#resource_tags Inspector2Filter#resource_tags}
    */
    readonly resourceTags?: Inspector2FilterFilterCriteriaResourceTags[] | cdktf.IResolvable;
    /**
    * resource_type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#resource_type Inspector2Filter#resource_type}
    */
    readonly resourceType?: Inspector2FilterFilterCriteriaResourceType[] | cdktf.IResolvable;
    /**
    * severity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#severity Inspector2Filter#severity}
    */
    readonly severity?: Inspector2FilterFilterCriteriaSeverity[] | cdktf.IResolvable;
    /**
    * title block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#title Inspector2Filter#title}
    */
    readonly title?: Inspector2FilterFilterCriteriaTitle[] | cdktf.IResolvable;
    /**
    * updated_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#updated_at Inspector2Filter#updated_at}
    */
    readonly updatedAt?: Inspector2FilterFilterCriteriaUpdatedAt[] | cdktf.IResolvable;
    /**
    * vendor_severity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#vendor_severity Inspector2Filter#vendor_severity}
    */
    readonly vendorSeverity?: Inspector2FilterFilterCriteriaVendorSeverity[] | cdktf.IResolvable;
    /**
    * vulnerability_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#vulnerability_id Inspector2Filter#vulnerability_id}
    */
    readonly vulnerabilityId?: Inspector2FilterFilterCriteriaVulnerabilityId[] | cdktf.IResolvable;
    /**
    * vulnerability_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#vulnerability_source Inspector2Filter#vulnerability_source}
    */
    readonly vulnerabilitySource?: Inspector2FilterFilterCriteriaVulnerabilitySource[] | cdktf.IResolvable;
    /**
    * vulnerable_packages block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#vulnerable_packages Inspector2Filter#vulnerable_packages}
    */
    readonly vulnerablePackages?: Inspector2FilterFilterCriteriaVulnerablePackages[] | cdktf.IResolvable;
}
export declare function inspector2FilterFilterCriteriaToTerraform(struct?: Inspector2FilterFilterCriteria | cdktf.IResolvable): any;
export declare function inspector2FilterFilterCriteriaToHclTerraform(struct?: Inspector2FilterFilterCriteria | cdktf.IResolvable): any;
export declare class Inspector2FilterFilterCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Inspector2FilterFilterCriteria | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2FilterFilterCriteria | cdktf.IResolvable | undefined);
    private _awsAccountId;
    get awsAccountId(): Inspector2FilterFilterCriteriaAwsAccountIdList;
    putAwsAccountId(value: Inspector2FilterFilterCriteriaAwsAccountId[] | cdktf.IResolvable): void;
    resetAwsAccountId(): void;
    get awsAccountIdInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaAwsAccountId[] | undefined;
    private _codeVulnerabilityDetectorName;
    get codeVulnerabilityDetectorName(): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorNameList;
    putCodeVulnerabilityDetectorName(value: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | cdktf.IResolvable): void;
    resetCodeVulnerabilityDetectorName(): void;
    get codeVulnerabilityDetectorNameInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | undefined;
    private _codeVulnerabilityDetectorTags;
    get codeVulnerabilityDetectorTags(): Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList;
    putCodeVulnerabilityDetectorTags(value: Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | cdktf.IResolvable): void;
    resetCodeVulnerabilityDetectorTags(): void;
    get codeVulnerabilityDetectorTagsInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | undefined;
    private _codeVulnerabilityFilePath;
    get codeVulnerabilityFilePath(): Inspector2FilterFilterCriteriaCodeVulnerabilityFilePathList;
    putCodeVulnerabilityFilePath(value: Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath[] | cdktf.IResolvable): void;
    resetCodeVulnerabilityFilePath(): void;
    get codeVulnerabilityFilePathInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaCodeVulnerabilityFilePath[] | undefined;
    private _componentId;
    get componentId(): Inspector2FilterFilterCriteriaComponentIdList;
    putComponentId(value: Inspector2FilterFilterCriteriaComponentId[] | cdktf.IResolvable): void;
    resetComponentId(): void;
    get componentIdInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaComponentId[] | undefined;
    private _componentType;
    get componentType(): Inspector2FilterFilterCriteriaComponentTypeList;
    putComponentType(value: Inspector2FilterFilterCriteriaComponentType[] | cdktf.IResolvable): void;
    resetComponentType(): void;
    get componentTypeInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaComponentType[] | undefined;
    private _ec2InstanceImageId;
    get ec2InstanceImageId(): Inspector2FilterFilterCriteriaEc2InstanceImageIdList;
    putEc2InstanceImageId(value: Inspector2FilterFilterCriteriaEc2InstanceImageId[] | cdktf.IResolvable): void;
    resetEc2InstanceImageId(): void;
    get ec2InstanceImageIdInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEc2InstanceImageId[] | undefined;
    private _ec2InstanceSubnetId;
    get ec2InstanceSubnetId(): Inspector2FilterFilterCriteriaEc2InstanceSubnetIdList;
    putEc2InstanceSubnetId(value: Inspector2FilterFilterCriteriaEc2InstanceSubnetId[] | cdktf.IResolvable): void;
    resetEc2InstanceSubnetId(): void;
    get ec2InstanceSubnetIdInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEc2InstanceSubnetId[] | undefined;
    private _ec2InstanceVpcId;
    get ec2InstanceVpcId(): Inspector2FilterFilterCriteriaEc2InstanceVpcIdList;
    putEc2InstanceVpcId(value: Inspector2FilterFilterCriteriaEc2InstanceVpcId[] | cdktf.IResolvable): void;
    resetEc2InstanceVpcId(): void;
    get ec2InstanceVpcIdInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEc2InstanceVpcId[] | undefined;
    private _ecrImageArchitecture;
    get ecrImageArchitecture(): Inspector2FilterFilterCriteriaEcrImageArchitectureList;
    putEcrImageArchitecture(value: Inspector2FilterFilterCriteriaEcrImageArchitecture[] | cdktf.IResolvable): void;
    resetEcrImageArchitecture(): void;
    get ecrImageArchitectureInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEcrImageArchitecture[] | undefined;
    private _ecrImageHash;
    get ecrImageHash(): Inspector2FilterFilterCriteriaEcrImageHashList;
    putEcrImageHash(value: Inspector2FilterFilterCriteriaEcrImageHash[] | cdktf.IResolvable): void;
    resetEcrImageHash(): void;
    get ecrImageHashInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEcrImageHash[] | undefined;
    private _ecrImagePushedAt;
    get ecrImagePushedAt(): Inspector2FilterFilterCriteriaEcrImagePushedAtList;
    putEcrImagePushedAt(value: Inspector2FilterFilterCriteriaEcrImagePushedAt[] | cdktf.IResolvable): void;
    resetEcrImagePushedAt(): void;
    get ecrImagePushedAtInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEcrImagePushedAt[] | undefined;
    private _ecrImageRegistry;
    get ecrImageRegistry(): Inspector2FilterFilterCriteriaEcrImageRegistryList;
    putEcrImageRegistry(value: Inspector2FilterFilterCriteriaEcrImageRegistry[] | cdktf.IResolvable): void;
    resetEcrImageRegistry(): void;
    get ecrImageRegistryInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEcrImageRegistry[] | undefined;
    private _ecrImageRepositoryName;
    get ecrImageRepositoryName(): Inspector2FilterFilterCriteriaEcrImageRepositoryNameList;
    putEcrImageRepositoryName(value: Inspector2FilterFilterCriteriaEcrImageRepositoryName[] | cdktf.IResolvable): void;
    resetEcrImageRepositoryName(): void;
    get ecrImageRepositoryNameInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEcrImageRepositoryName[] | undefined;
    private _ecrImageTags;
    get ecrImageTags(): Inspector2FilterFilterCriteriaEcrImageTagsList;
    putEcrImageTags(value: Inspector2FilterFilterCriteriaEcrImageTags[] | cdktf.IResolvable): void;
    resetEcrImageTags(): void;
    get ecrImageTagsInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEcrImageTags[] | undefined;
    private _epssScore;
    get epssScore(): Inspector2FilterFilterCriteriaEpssScoreList;
    putEpssScore(value: Inspector2FilterFilterCriteriaEpssScore[] | cdktf.IResolvable): void;
    resetEpssScore(): void;
    get epssScoreInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaEpssScore[] | undefined;
    private _exploitAvailable;
    get exploitAvailable(): Inspector2FilterFilterCriteriaExploitAvailableList;
    putExploitAvailable(value: Inspector2FilterFilterCriteriaExploitAvailable[] | cdktf.IResolvable): void;
    resetExploitAvailable(): void;
    get exploitAvailableInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaExploitAvailable[] | undefined;
    private _findingArn;
    get findingArn(): Inspector2FilterFilterCriteriaFindingArnList;
    putFindingArn(value: Inspector2FilterFilterCriteriaFindingArn[] | cdktf.IResolvable): void;
    resetFindingArn(): void;
    get findingArnInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaFindingArn[] | undefined;
    private _findingStatus;
    get findingStatus(): Inspector2FilterFilterCriteriaFindingStatusList;
    putFindingStatus(value: Inspector2FilterFilterCriteriaFindingStatus[] | cdktf.IResolvable): void;
    resetFindingStatus(): void;
    get findingStatusInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaFindingStatus[] | undefined;
    private _findingType;
    get findingType(): Inspector2FilterFilterCriteriaFindingTypeList;
    putFindingType(value: Inspector2FilterFilterCriteriaFindingType[] | cdktf.IResolvable): void;
    resetFindingType(): void;
    get findingTypeInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaFindingType[] | undefined;
    private _firstObservedAt;
    get firstObservedAt(): Inspector2FilterFilterCriteriaFirstObservedAtList;
    putFirstObservedAt(value: Inspector2FilterFilterCriteriaFirstObservedAt[] | cdktf.IResolvable): void;
    resetFirstObservedAt(): void;
    get firstObservedAtInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaFirstObservedAt[] | undefined;
    private _fixAvailable;
    get fixAvailable(): Inspector2FilterFilterCriteriaFixAvailableList;
    putFixAvailable(value: Inspector2FilterFilterCriteriaFixAvailable[] | cdktf.IResolvable): void;
    resetFixAvailable(): void;
    get fixAvailableInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaFixAvailable[] | undefined;
    private _inspectorScore;
    get inspectorScore(): Inspector2FilterFilterCriteriaInspectorScoreList;
    putInspectorScore(value: Inspector2FilterFilterCriteriaInspectorScore[] | cdktf.IResolvable): void;
    resetInspectorScore(): void;
    get inspectorScoreInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaInspectorScore[] | undefined;
    private _lambdaFunctionExecutionRoleArn;
    get lambdaFunctionExecutionRoleArn(): Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList;
    putLambdaFunctionExecutionRoleArn(value: Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | cdktf.IResolvable): void;
    resetLambdaFunctionExecutionRoleArn(): void;
    get lambdaFunctionExecutionRoleArnInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | undefined;
    private _lambdaFunctionLastModifiedAt;
    get lambdaFunctionLastModifiedAt(): Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAtList;
    putLambdaFunctionLastModifiedAt(value: Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | cdktf.IResolvable): void;
    resetLambdaFunctionLastModifiedAt(): void;
    get lambdaFunctionLastModifiedAtInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | undefined;
    private _lambdaFunctionLayers;
    get lambdaFunctionLayers(): Inspector2FilterFilterCriteriaLambdaFunctionLayersList;
    putLambdaFunctionLayers(value: Inspector2FilterFilterCriteriaLambdaFunctionLayers[] | cdktf.IResolvable): void;
    resetLambdaFunctionLayers(): void;
    get lambdaFunctionLayersInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaLambdaFunctionLayers[] | undefined;
    private _lambdaFunctionName;
    get lambdaFunctionName(): Inspector2FilterFilterCriteriaLambdaFunctionNameList;
    putLambdaFunctionName(value: Inspector2FilterFilterCriteriaLambdaFunctionName[] | cdktf.IResolvable): void;
    resetLambdaFunctionName(): void;
    get lambdaFunctionNameInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaLambdaFunctionName[] | undefined;
    private _lambdaFunctionRuntime;
    get lambdaFunctionRuntime(): Inspector2FilterFilterCriteriaLambdaFunctionRuntimeList;
    putLambdaFunctionRuntime(value: Inspector2FilterFilterCriteriaLambdaFunctionRuntime[] | cdktf.IResolvable): void;
    resetLambdaFunctionRuntime(): void;
    get lambdaFunctionRuntimeInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaLambdaFunctionRuntime[] | undefined;
    private _lastObservedAt;
    get lastObservedAt(): Inspector2FilterFilterCriteriaLastObservedAtList;
    putLastObservedAt(value: Inspector2FilterFilterCriteriaLastObservedAt[] | cdktf.IResolvable): void;
    resetLastObservedAt(): void;
    get lastObservedAtInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaLastObservedAt[] | undefined;
    private _networkProtocol;
    get networkProtocol(): Inspector2FilterFilterCriteriaNetworkProtocolList;
    putNetworkProtocol(value: Inspector2FilterFilterCriteriaNetworkProtocol[] | cdktf.IResolvable): void;
    resetNetworkProtocol(): void;
    get networkProtocolInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaNetworkProtocol[] | undefined;
    private _portRange;
    get portRange(): Inspector2FilterFilterCriteriaPortRangeList;
    putPortRange(value: Inspector2FilterFilterCriteriaPortRange[] | cdktf.IResolvable): void;
    resetPortRange(): void;
    get portRangeInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaPortRange[] | undefined;
    private _relatedVulnerabilities;
    get relatedVulnerabilities(): Inspector2FilterFilterCriteriaRelatedVulnerabilitiesList;
    putRelatedVulnerabilities(value: Inspector2FilterFilterCriteriaRelatedVulnerabilities[] | cdktf.IResolvable): void;
    resetRelatedVulnerabilities(): void;
    get relatedVulnerabilitiesInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaRelatedVulnerabilities[] | undefined;
    private _resourceId;
    get resourceId(): Inspector2FilterFilterCriteriaResourceIdList;
    putResourceId(value: Inspector2FilterFilterCriteriaResourceId[] | cdktf.IResolvable): void;
    resetResourceId(): void;
    get resourceIdInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaResourceId[] | undefined;
    private _resourceTags;
    get resourceTags(): Inspector2FilterFilterCriteriaResourceTagsList;
    putResourceTags(value: Inspector2FilterFilterCriteriaResourceTags[] | cdktf.IResolvable): void;
    resetResourceTags(): void;
    get resourceTagsInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaResourceTags[] | undefined;
    private _resourceType;
    get resourceType(): Inspector2FilterFilterCriteriaResourceTypeList;
    putResourceType(value: Inspector2FilterFilterCriteriaResourceType[] | cdktf.IResolvable): void;
    resetResourceType(): void;
    get resourceTypeInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaResourceType[] | undefined;
    private _severity;
    get severity(): Inspector2FilterFilterCriteriaSeverityList;
    putSeverity(value: Inspector2FilterFilterCriteriaSeverity[] | cdktf.IResolvable): void;
    resetSeverity(): void;
    get severityInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaSeverity[] | undefined;
    private _title;
    get title(): Inspector2FilterFilterCriteriaTitleList;
    putTitle(value: Inspector2FilterFilterCriteriaTitle[] | cdktf.IResolvable): void;
    resetTitle(): void;
    get titleInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaTitle[] | undefined;
    private _updatedAt;
    get updatedAt(): Inspector2FilterFilterCriteriaUpdatedAtList;
    putUpdatedAt(value: Inspector2FilterFilterCriteriaUpdatedAt[] | cdktf.IResolvable): void;
    resetUpdatedAt(): void;
    get updatedAtInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaUpdatedAt[] | undefined;
    private _vendorSeverity;
    get vendorSeverity(): Inspector2FilterFilterCriteriaVendorSeverityList;
    putVendorSeverity(value: Inspector2FilterFilterCriteriaVendorSeverity[] | cdktf.IResolvable): void;
    resetVendorSeverity(): void;
    get vendorSeverityInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVendorSeverity[] | undefined;
    private _vulnerabilityId;
    get vulnerabilityId(): Inspector2FilterFilterCriteriaVulnerabilityIdList;
    putVulnerabilityId(value: Inspector2FilterFilterCriteriaVulnerabilityId[] | cdktf.IResolvable): void;
    resetVulnerabilityId(): void;
    get vulnerabilityIdInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerabilityId[] | undefined;
    private _vulnerabilitySource;
    get vulnerabilitySource(): Inspector2FilterFilterCriteriaVulnerabilitySourceList;
    putVulnerabilitySource(value: Inspector2FilterFilterCriteriaVulnerabilitySource[] | cdktf.IResolvable): void;
    resetVulnerabilitySource(): void;
    get vulnerabilitySourceInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerabilitySource[] | undefined;
    private _vulnerablePackages;
    get vulnerablePackages(): Inspector2FilterFilterCriteriaVulnerablePackagesList;
    putVulnerablePackages(value: Inspector2FilterFilterCriteriaVulnerablePackages[] | cdktf.IResolvable): void;
    resetVulnerablePackages(): void;
    get vulnerablePackagesInput(): cdktf.IResolvable | Inspector2FilterFilterCriteriaVulnerablePackages[] | undefined;
}
export declare class Inspector2FilterFilterCriteriaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Inspector2FilterFilterCriteria[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Inspector2FilterFilterCriteriaOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter aws_inspector2_filter}
*/
export declare class Inspector2Filter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_inspector2_filter";
    /**
    * Generates CDKTF code for importing a Inspector2Filter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Inspector2Filter to import
    * @param importFromId The id of the existing Inspector2Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Inspector2Filter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/inspector2_filter aws_inspector2_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Inspector2FilterConfig
    */
    constructor(scope: Construct, id: string, config: Inspector2FilterConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _reason?;
    get reason(): string;
    set reason(value: string);
    resetReason(): void;
    get reasonInput(): string | undefined;
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
    private _filterCriteria;
    get filterCriteria(): Inspector2FilterFilterCriteriaList;
    putFilterCriteria(value: Inspector2FilterFilterCriteria[] | cdktf.IResolvable): void;
    resetFilterCriteria(): void;
    get filterCriteriaInput(): cdktf.IResolvable | Inspector2FilterFilterCriteria[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
