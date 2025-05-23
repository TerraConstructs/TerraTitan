/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Macie2ClassificationJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}
    */
    readonly customDataIdentifierIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#description Macie2ClassificationJob#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#id Macie2ClassificationJob#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#initial_run Macie2ClassificationJob#initial_run}
    */
    readonly initialRun?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#job_status Macie2ClassificationJob#job_status}
    */
    readonly jobStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#job_type Macie2ClassificationJob#job_type}
    */
    readonly jobType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#name Macie2ClassificationJob#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#name_prefix Macie2ClassificationJob#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#sampling_percentage Macie2ClassificationJob#sampling_percentage}
    */
    readonly samplingPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tags Macie2ClassificationJob#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tags_all Macie2ClassificationJob#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * s3_job_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#s3_job_definition Macie2ClassificationJob#s3_job_definition}
    */
    readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinition;
    /**
    * schedule_frequency block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#schedule_frequency Macie2ClassificationJob#schedule_frequency}
    */
    readonly scheduleFrequency?: Macie2ClassificationJobScheduleFrequency;
}
export interface Macie2ClassificationJobUserPausedDetails {
}
export declare function macie2ClassificationJobUserPausedDetailsToTerraform(struct?: Macie2ClassificationJobUserPausedDetails): any;
export declare function macie2ClassificationJobUserPausedDetailsToHclTerraform(struct?: Macie2ClassificationJobUserPausedDetails): any;
export declare class Macie2ClassificationJobUserPausedDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobUserPausedDetails | undefined;
    set internalValue(value: Macie2ClassificationJobUserPausedDetails | undefined);
    get jobExpiresAt(): string;
    get jobImminentExpirationHealthEventArn(): string;
    get jobPausedAt(): string;
}
export declare class Macie2ClassificationJobUserPausedDetailsList extends cdktf.ComplexList {
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
    get(index: number): Macie2ClassificationJobUserPausedDetailsOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#values Macie2ClassificationJob#values}
    */
    readonly values?: string[];
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#value Macie2ClassificationJob#value}
    */
    readonly value?: string;
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues | cdktf.IResolvable): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues | cdktf.IResolvable): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * tag_values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}
    */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[] | cdktf.IResolvable;
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string | undefined;
    private _tagValues;
    get tagValues(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList;
    putTagValues(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[] | cdktf.IResolvable): void;
    resetTagValues(): void;
    get tagValuesInput(): cdktf.IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd {
    /**
    * simple_criterion block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#simple_criterion Macie2ClassificationJob#simple_criterion}
    */
    readonly simpleCriterion?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion;
    /**
    * tag_criterion block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tag_criterion Macie2ClassificationJob#tag_criterion}
    */
    readonly tagCriterion?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion;
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd | cdktf.IResolvable): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd | cdktf.IResolvable): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd | cdktf.IResolvable | undefined);
    private _simpleCriterion;
    get simpleCriterion(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference;
    putSimpleCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion): void;
    resetSimpleCriterion(): void;
    get simpleCriterionInput(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion | undefined;
    private _tagCriterion;
    get tagCriterion(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference;
    putTagCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion): void;
    resetTagCriterion(): void;
    get tagCriterionInput(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion | undefined;
}
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#and Macie2ClassificationJob#and}
    */
    readonly and?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[] | cdktf.IResolvable;
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes | undefined);
    private _and;
    get and(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList;
    putAnd(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#values Macie2ClassificationJob#values}
    */
    readonly values?: string[];
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#value Macie2ClassificationJob#value}
    */
    readonly value?: string;
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues | cdktf.IResolvable): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues | cdktf.IResolvable): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * tag_values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}
    */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[] | cdktf.IResolvable;
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string | undefined;
    private _tagValues;
    get tagValues(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList;
    putTagValues(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[] | cdktf.IResolvable): void;
    resetTagValues(): void;
    get tagValuesInput(): cdktf.IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd {
    /**
    * simple_criterion block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#simple_criterion Macie2ClassificationJob#simple_criterion}
    */
    readonly simpleCriterion?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion;
    /**
    * tag_criterion block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tag_criterion Macie2ClassificationJob#tag_criterion}
    */
    readonly tagCriterion?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion;
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd | cdktf.IResolvable): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd | cdktf.IResolvable): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd | cdktf.IResolvable | undefined);
    private _simpleCriterion;
    get simpleCriterion(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference;
    putSimpleCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion): void;
    resetSimpleCriterion(): void;
    get simpleCriterionInput(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion | undefined;
    private _tagCriterion;
    get tagCriterion(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference;
    putTagCriterion(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion): void;
    resetTagCriterion(): void;
    get tagCriterionInput(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion | undefined;
}
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#and Macie2ClassificationJob#and}
    */
    readonly and?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[] | cdktf.IResolvable;
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes | undefined);
    private _and;
    get and(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList;
    putAnd(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketCriteria {
    /**
    * excludes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#excludes Macie2ClassificationJob#excludes}
    */
    readonly excludes?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes;
    /**
    * includes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#includes Macie2ClassificationJob#includes}
    */
    readonly includes?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes;
}
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteria): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketCriteriaToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference | Macie2ClassificationJobS3JobDefinitionBucketCriteria): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketCriteria | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketCriteria | undefined);
    private _excludes;
    get excludes(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference;
    putExcludes(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes): void;
    resetExcludes(): void;
    get excludesInput(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes | undefined;
    private _includes;
    get includes(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference;
    putIncludes(value: Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes): void;
    resetIncludes(): void;
    get includesInput(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketDefinitions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#account_id Macie2ClassificationJob#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#buckets Macie2ClassificationJob#buckets}
    */
    readonly buckets: string[];
}
export declare function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions | cdktf.IResolvable): any;
export declare function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions | cdktf.IResolvable): any;
export declare class Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionBucketDefinitions | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionBucketDefinitions | cdktf.IResolvable | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _buckets?;
    get buckets(): string[];
    set buckets(value: string[]);
    get bucketsInput(): string[] | undefined;
}
export declare class Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#values Macie2ClassificationJob#values}
    */
    readonly values?: string[];
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#value Macie2ClassificationJob#value}
    */
    readonly value?: string;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues | cdktf.IResolvable): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues | cdktf.IResolvable): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#target Macie2ClassificationJob#target}
    */
    readonly target?: string;
    /**
    * tag_values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}
    */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[] | cdktf.IResolvable;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string | undefined;
    private _tagValues;
    get tagValues(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList;
    putTagValues(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[] | cdktf.IResolvable): void;
    resetTagValues(): void;
    get tagValuesInput(): cdktf.IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd {
    /**
    * simple_scope_term block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}
    */
    readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
    /**
    * tag_scope_term block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}
    */
    readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd | cdktf.IResolvable): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd | cdktf.IResolvable): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd | cdktf.IResolvable | undefined);
    private _simpleScopeTerm;
    get simpleScopeTerm(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference;
    putSimpleScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): void;
    resetSimpleScopeTerm(): void;
    get simpleScopeTermInput(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm | undefined;
    private _tagScopeTerm;
    get tagScopeTerm(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference;
    putTagScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): void;
    resetTagScopeTerm(): void;
    get tagScopeTermInput(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm | undefined;
}
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludes {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#and Macie2ClassificationJob#and}
    */
    readonly and?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[] | cdktf.IResolvable;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludes): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludes): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludes | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludes | undefined);
    private _and;
    get and(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList;
    putAnd(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#values Macie2ClassificationJob#values}
    */
    readonly values?: string[];
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#value Macie2ClassificationJob#value}
    */
    readonly value?: string;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues | cdktf.IResolvable): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues | cdktf.IResolvable): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#target Macie2ClassificationJob#target}
    */
    readonly target?: string;
    /**
    * tag_values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}
    */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[] | cdktf.IResolvable;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string | undefined;
    private _tagValues;
    get tagValues(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList;
    putTagValues(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[] | cdktf.IResolvable): void;
    resetTagValues(): void;
    get tagValuesInput(): cdktf.IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd {
    /**
    * simple_scope_term block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}
    */
    readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
    /**
    * tag_scope_term block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}
    */
    readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd | cdktf.IResolvable): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd | cdktf.IResolvable): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd | cdktf.IResolvable | undefined);
    private _simpleScopeTerm;
    get simpleScopeTerm(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference;
    putSimpleScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): void;
    resetSimpleScopeTerm(): void;
    get simpleScopeTermInput(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm | undefined;
    private _tagScopeTerm;
    get tagScopeTerm(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference;
    putTagScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): void;
    resetTagScopeTerm(): void;
    get tagScopeTermInput(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm | undefined;
}
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference;
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludes {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#and Macie2ClassificationJob#and}
    */
    readonly and?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[] | cdktf.IResolvable;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludes): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludes): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludes | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludes | undefined);
    private _and;
    get and(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList;
    putAnd(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[] | undefined;
}
export interface Macie2ClassificationJobS3JobDefinitionScoping {
    /**
    * excludes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#excludes Macie2ClassificationJob#excludes}
    */
    readonly excludes?: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
    /**
    * includes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#includes Macie2ClassificationJob#includes}
    */
    readonly includes?: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingOutputReference | Macie2ClassificationJobS3JobDefinitionScoping): any;
export declare function macie2ClassificationJobS3JobDefinitionScopingToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingOutputReference | Macie2ClassificationJobS3JobDefinitionScoping): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScoping | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScoping | undefined);
    private _excludes;
    get excludes(): Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference;
    putExcludes(value: Macie2ClassificationJobS3JobDefinitionScopingExcludes): void;
    resetExcludes(): void;
    get excludesInput(): Macie2ClassificationJobS3JobDefinitionScopingExcludes | undefined;
    private _includes;
    get includes(): Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference;
    putIncludes(value: Macie2ClassificationJobS3JobDefinitionScopingIncludes): void;
    resetIncludes(): void;
    get includesInput(): Macie2ClassificationJobS3JobDefinitionScopingIncludes | undefined;
}
export interface Macie2ClassificationJobS3JobDefinition {
    /**
    * bucket_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#bucket_criteria Macie2ClassificationJob#bucket_criteria}
    */
    readonly bucketCriteria?: Macie2ClassificationJobS3JobDefinitionBucketCriteria;
    /**
    * bucket_definitions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#bucket_definitions Macie2ClassificationJob#bucket_definitions}
    */
    readonly bucketDefinitions?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[] | cdktf.IResolvable;
    /**
    * scoping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#scoping Macie2ClassificationJob#scoping}
    */
    readonly scoping?: Macie2ClassificationJobS3JobDefinitionScoping;
}
export declare function macie2ClassificationJobS3JobDefinitionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionOutputReference | Macie2ClassificationJobS3JobDefinition): any;
export declare function macie2ClassificationJobS3JobDefinitionToHclTerraform(struct?: Macie2ClassificationJobS3JobDefinitionOutputReference | Macie2ClassificationJobS3JobDefinition): any;
export declare class Macie2ClassificationJobS3JobDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobS3JobDefinition | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinition | undefined);
    private _bucketCriteria;
    get bucketCriteria(): Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference;
    putBucketCriteria(value: Macie2ClassificationJobS3JobDefinitionBucketCriteria): void;
    resetBucketCriteria(): void;
    get bucketCriteriaInput(): Macie2ClassificationJobS3JobDefinitionBucketCriteria | undefined;
    private _bucketDefinitions;
    get bucketDefinitions(): Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList;
    putBucketDefinitions(value: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[] | cdktf.IResolvable): void;
    resetBucketDefinitions(): void;
    get bucketDefinitionsInput(): cdktf.IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions[] | undefined;
    private _scoping;
    get scoping(): Macie2ClassificationJobS3JobDefinitionScopingOutputReference;
    putScoping(value: Macie2ClassificationJobS3JobDefinitionScoping): void;
    resetScoping(): void;
    get scopingInput(): Macie2ClassificationJobS3JobDefinitionScoping | undefined;
}
export interface Macie2ClassificationJobScheduleFrequency {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#daily_schedule Macie2ClassificationJob#daily_schedule}
    */
    readonly dailySchedule?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#monthly_schedule Macie2ClassificationJob#monthly_schedule}
    */
    readonly monthlySchedule?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#weekly_schedule Macie2ClassificationJob#weekly_schedule}
    */
    readonly weeklySchedule?: string;
}
export declare function macie2ClassificationJobScheduleFrequencyToTerraform(struct?: Macie2ClassificationJobScheduleFrequencyOutputReference | Macie2ClassificationJobScheduleFrequency): any;
export declare function macie2ClassificationJobScheduleFrequencyToHclTerraform(struct?: Macie2ClassificationJobScheduleFrequencyOutputReference | Macie2ClassificationJobScheduleFrequency): any;
export declare class Macie2ClassificationJobScheduleFrequencyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2ClassificationJobScheduleFrequency | undefined;
    set internalValue(value: Macie2ClassificationJobScheduleFrequency | undefined);
    private _dailySchedule?;
    get dailySchedule(): boolean | cdktf.IResolvable;
    set dailySchedule(value: boolean | cdktf.IResolvable);
    resetDailySchedule(): void;
    get dailyScheduleInput(): boolean | cdktf.IResolvable | undefined;
    private _monthlySchedule?;
    get monthlySchedule(): number;
    set monthlySchedule(value: number);
    resetMonthlySchedule(): void;
    get monthlyScheduleInput(): number | undefined;
    private _weeklySchedule?;
    get weeklySchedule(): string;
    set weeklySchedule(value: string);
    resetWeeklySchedule(): void;
    get weeklyScheduleInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job aws_macie2_classification_job}
*/
export declare class Macie2ClassificationJob extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_macie2_classification_job";
    /**
    * Generates CDKTF code for importing a Macie2ClassificationJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Macie2ClassificationJob to import
    * @param importFromId The id of the existing Macie2ClassificationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Macie2ClassificationJob to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_classification_job aws_macie2_classification_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2ClassificationJobConfig
    */
    constructor(scope: Construct, id: string, config: Macie2ClassificationJobConfig);
    get createdAt(): string;
    private _customDataIdentifierIds?;
    get customDataIdentifierIds(): string[];
    set customDataIdentifierIds(value: string[]);
    resetCustomDataIdentifierIds(): void;
    get customDataIdentifierIdsInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _initialRun?;
    get initialRun(): boolean | cdktf.IResolvable;
    set initialRun(value: boolean | cdktf.IResolvable);
    resetInitialRun(): void;
    get initialRunInput(): boolean | cdktf.IResolvable | undefined;
    get jobArn(): string;
    get jobId(): string;
    private _jobStatus?;
    get jobStatus(): string;
    set jobStatus(value: string);
    resetJobStatus(): void;
    get jobStatusInput(): string | undefined;
    private _jobType?;
    get jobType(): string;
    set jobType(value: string);
    get jobTypeInput(): string | undefined;
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
    private _samplingPercentage?;
    get samplingPercentage(): number;
    set samplingPercentage(value: number);
    resetSamplingPercentage(): void;
    get samplingPercentageInput(): number | undefined;
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
    private _userPausedDetails;
    get userPausedDetails(): Macie2ClassificationJobUserPausedDetailsList;
    private _s3JobDefinition;
    get s3JobDefinition(): Macie2ClassificationJobS3JobDefinitionOutputReference;
    putS3JobDefinition(value: Macie2ClassificationJobS3JobDefinition): void;
    get s3JobDefinitionInput(): Macie2ClassificationJobS3JobDefinition | undefined;
    private _scheduleFrequency;
    get scheduleFrequency(): Macie2ClassificationJobScheduleFrequencyOutputReference;
    putScheduleFrequency(value: Macie2ClassificationJobScheduleFrequency): void;
    resetScheduleFrequency(): void;
    get scheduleFrequencyInput(): Macie2ClassificationJobScheduleFrequency | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
