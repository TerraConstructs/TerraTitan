/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CustomerprofilesDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}
    */
    readonly deadLetterQueueUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}
    */
    readonly defaultEncryptionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}
    */
    readonly defaultExpirationDays: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * matching block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#matching CustomerprofilesDomain#matching}
    */
    readonly matching?: CustomerprofilesDomainMatching;
    /**
    * rule_based_matching block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#rule_based_matching CustomerprofilesDomain#rule_based_matching}
    */
    readonly ruleBasedMatching?: CustomerprofilesDomainRuleBasedMatching;
}
export interface CustomerprofilesDomainMatchingAutoMergingConflictResolution {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}
    */
    readonly conflictResolvingModel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}
    */
    readonly sourceName?: string;
}
export declare function customerprofilesDomainMatchingAutoMergingConflictResolutionToTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference | CustomerprofilesDomainMatchingAutoMergingConflictResolution): any;
export declare function customerprofilesDomainMatchingAutoMergingConflictResolutionToHclTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference | CustomerprofilesDomainMatchingAutoMergingConflictResolution): any;
export declare class CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainMatchingAutoMergingConflictResolution | undefined;
    set internalValue(value: CustomerprofilesDomainMatchingAutoMergingConflictResolution | undefined);
    private _conflictResolvingModel?;
    get conflictResolvingModel(): string;
    set conflictResolvingModel(value: string);
    get conflictResolvingModelInput(): string | undefined;
    private _sourceName?;
    get sourceName(): string;
    set sourceName(value: string);
    resetSourceName(): void;
    get sourceNameInput(): string | undefined;
}
export interface CustomerprofilesDomainMatchingAutoMergingConsolidation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}
    */
    readonly matchingAttributesList: string[][] | cdktf.IResolvable;
}
export declare function customerprofilesDomainMatchingAutoMergingConsolidationToTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference | CustomerprofilesDomainMatchingAutoMergingConsolidation): any;
export declare function customerprofilesDomainMatchingAutoMergingConsolidationToHclTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference | CustomerprofilesDomainMatchingAutoMergingConsolidation): any;
export declare class CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainMatchingAutoMergingConsolidation | undefined;
    set internalValue(value: CustomerprofilesDomainMatchingAutoMergingConsolidation | undefined);
    private _matchingAttributesList?;
    get matchingAttributesList(): string[][] | cdktf.IResolvable;
    set matchingAttributesList(value: string[][] | cdktf.IResolvable);
    get matchingAttributesListInput(): cdktf.IResolvable | string[][] | undefined;
}
export interface CustomerprofilesDomainMatchingAutoMerging {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}
    */
    readonly minAllowedConfidenceScoreForMerging?: number;
    /**
    * conflict_resolution block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}
    */
    readonly conflictResolution?: CustomerprofilesDomainMatchingAutoMergingConflictResolution;
    /**
    * consolidation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#consolidation CustomerprofilesDomain#consolidation}
    */
    readonly consolidation?: CustomerprofilesDomainMatchingAutoMergingConsolidation;
}
export declare function customerprofilesDomainMatchingAutoMergingToTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingOutputReference | CustomerprofilesDomainMatchingAutoMerging): any;
export declare function customerprofilesDomainMatchingAutoMergingToHclTerraform(struct?: CustomerprofilesDomainMatchingAutoMergingOutputReference | CustomerprofilesDomainMatchingAutoMerging): any;
export declare class CustomerprofilesDomainMatchingAutoMergingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainMatchingAutoMerging | undefined;
    set internalValue(value: CustomerprofilesDomainMatchingAutoMerging | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _minAllowedConfidenceScoreForMerging?;
    get minAllowedConfidenceScoreForMerging(): number;
    set minAllowedConfidenceScoreForMerging(value: number);
    resetMinAllowedConfidenceScoreForMerging(): void;
    get minAllowedConfidenceScoreForMergingInput(): number | undefined;
    private _conflictResolution;
    get conflictResolution(): CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference;
    putConflictResolution(value: CustomerprofilesDomainMatchingAutoMergingConflictResolution): void;
    resetConflictResolution(): void;
    get conflictResolutionInput(): CustomerprofilesDomainMatchingAutoMergingConflictResolution | undefined;
    private _consolidation;
    get consolidation(): CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference;
    putConsolidation(value: CustomerprofilesDomainMatchingAutoMergingConsolidation): void;
    resetConsolidation(): void;
    get consolidationInput(): CustomerprofilesDomainMatchingAutoMergingConsolidation | undefined;
}
export interface CustomerprofilesDomainMatchingExportingConfigS3Exporting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}
    */
    readonly s3KeyName?: string;
}
export declare function customerprofilesDomainMatchingExportingConfigS3ExportingToTerraform(struct?: CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference | CustomerprofilesDomainMatchingExportingConfigS3Exporting): any;
export declare function customerprofilesDomainMatchingExportingConfigS3ExportingToHclTerraform(struct?: CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference | CustomerprofilesDomainMatchingExportingConfigS3Exporting): any;
export declare class CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainMatchingExportingConfigS3Exporting | undefined;
    set internalValue(value: CustomerprofilesDomainMatchingExportingConfigS3Exporting | undefined);
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3KeyName?;
    get s3KeyName(): string;
    set s3KeyName(value: string);
    resetS3KeyName(): void;
    get s3KeyNameInput(): string | undefined;
}
export interface CustomerprofilesDomainMatchingExportingConfig {
    /**
    * s3_exporting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}
    */
    readonly s3Exporting?: CustomerprofilesDomainMatchingExportingConfigS3Exporting;
}
export declare function customerprofilesDomainMatchingExportingConfigToTerraform(struct?: CustomerprofilesDomainMatchingExportingConfigOutputReference | CustomerprofilesDomainMatchingExportingConfig): any;
export declare function customerprofilesDomainMatchingExportingConfigToHclTerraform(struct?: CustomerprofilesDomainMatchingExportingConfigOutputReference | CustomerprofilesDomainMatchingExportingConfig): any;
export declare class CustomerprofilesDomainMatchingExportingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainMatchingExportingConfig | undefined;
    set internalValue(value: CustomerprofilesDomainMatchingExportingConfig | undefined);
    private _s3Exporting;
    get s3Exporting(): CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference;
    putS3Exporting(value: CustomerprofilesDomainMatchingExportingConfigS3Exporting): void;
    resetS3Exporting(): void;
    get s3ExportingInput(): CustomerprofilesDomainMatchingExportingConfigS3Exporting | undefined;
}
export interface CustomerprofilesDomainMatchingJobSchedule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}
    */
    readonly dayOfTheWeek: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}
    */
    readonly time: string;
}
export declare function customerprofilesDomainMatchingJobScheduleToTerraform(struct?: CustomerprofilesDomainMatchingJobScheduleOutputReference | CustomerprofilesDomainMatchingJobSchedule): any;
export declare function customerprofilesDomainMatchingJobScheduleToHclTerraform(struct?: CustomerprofilesDomainMatchingJobScheduleOutputReference | CustomerprofilesDomainMatchingJobSchedule): any;
export declare class CustomerprofilesDomainMatchingJobScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainMatchingJobSchedule | undefined;
    set internalValue(value: CustomerprofilesDomainMatchingJobSchedule | undefined);
    private _dayOfTheWeek?;
    get dayOfTheWeek(): string;
    set dayOfTheWeek(value: string);
    get dayOfTheWeekInput(): string | undefined;
    private _time?;
    get time(): string;
    set time(value: string);
    get timeInput(): string | undefined;
}
export interface CustomerprofilesDomainMatching {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * auto_merging block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#auto_merging CustomerprofilesDomain#auto_merging}
    */
    readonly autoMerging?: CustomerprofilesDomainMatchingAutoMerging;
    /**
    * exporting_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}
    */
    readonly exportingConfig?: CustomerprofilesDomainMatchingExportingConfig;
    /**
    * job_schedule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#job_schedule CustomerprofilesDomain#job_schedule}
    */
    readonly jobSchedule?: CustomerprofilesDomainMatchingJobSchedule;
}
export declare function customerprofilesDomainMatchingToTerraform(struct?: CustomerprofilesDomainMatchingOutputReference | CustomerprofilesDomainMatching): any;
export declare function customerprofilesDomainMatchingToHclTerraform(struct?: CustomerprofilesDomainMatchingOutputReference | CustomerprofilesDomainMatching): any;
export declare class CustomerprofilesDomainMatchingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainMatching | undefined;
    set internalValue(value: CustomerprofilesDomainMatching | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _autoMerging;
    get autoMerging(): CustomerprofilesDomainMatchingAutoMergingOutputReference;
    putAutoMerging(value: CustomerprofilesDomainMatchingAutoMerging): void;
    resetAutoMerging(): void;
    get autoMergingInput(): CustomerprofilesDomainMatchingAutoMerging | undefined;
    private _exportingConfig;
    get exportingConfig(): CustomerprofilesDomainMatchingExportingConfigOutputReference;
    putExportingConfig(value: CustomerprofilesDomainMatchingExportingConfig): void;
    resetExportingConfig(): void;
    get exportingConfigInput(): CustomerprofilesDomainMatchingExportingConfig | undefined;
    private _jobSchedule;
    get jobSchedule(): CustomerprofilesDomainMatchingJobScheduleOutputReference;
    putJobSchedule(value: CustomerprofilesDomainMatchingJobSchedule): void;
    resetJobSchedule(): void;
    get jobScheduleInput(): CustomerprofilesDomainMatchingJobSchedule | undefined;
}
export interface CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}
    */
    readonly address?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}
    */
    readonly attributeMatchingModel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}
    */
    readonly emailAddress?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}
    */
    readonly phoneNumber?: string[];
}
export declare function customerprofilesDomainRuleBasedMatchingAttributeTypesSelectorToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference | CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector): any;
export declare function customerprofilesDomainRuleBasedMatchingAttributeTypesSelectorToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference | CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector): any;
export declare class CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector | undefined;
    set internalValue(value: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector | undefined);
    private _address?;
    get address(): string[];
    set address(value: string[]);
    resetAddress(): void;
    get addressInput(): string[] | undefined;
    private _attributeMatchingModel?;
    get attributeMatchingModel(): string;
    set attributeMatchingModel(value: string);
    get attributeMatchingModelInput(): string | undefined;
    private _emailAddress?;
    get emailAddress(): string[];
    set emailAddress(value: string[]);
    resetEmailAddress(): void;
    get emailAddressInput(): string[] | undefined;
    private _phoneNumber?;
    get phoneNumber(): string[];
    set phoneNumber(value: string[]);
    resetPhoneNumber(): void;
    get phoneNumberInput(): string[] | undefined;
}
export interface CustomerprofilesDomainRuleBasedMatchingConflictResolution {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}
    */
    readonly conflictResolvingModel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}
    */
    readonly sourceName?: string;
}
export declare function customerprofilesDomainRuleBasedMatchingConflictResolutionToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference | CustomerprofilesDomainRuleBasedMatchingConflictResolution): any;
export declare function customerprofilesDomainRuleBasedMatchingConflictResolutionToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference | CustomerprofilesDomainRuleBasedMatchingConflictResolution): any;
export declare class CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainRuleBasedMatchingConflictResolution | undefined;
    set internalValue(value: CustomerprofilesDomainRuleBasedMatchingConflictResolution | undefined);
    private _conflictResolvingModel?;
    get conflictResolvingModel(): string;
    set conflictResolvingModel(value: string);
    get conflictResolvingModelInput(): string | undefined;
    private _sourceName?;
    get sourceName(): string;
    set sourceName(value: string);
    resetSourceName(): void;
    get sourceNameInput(): string | undefined;
}
export interface CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}
    */
    readonly s3KeyName?: string;
}
export declare function customerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference | CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting): any;
export declare function customerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference | CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting): any;
export declare class CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting | undefined;
    set internalValue(value: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting | undefined);
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3KeyName?;
    get s3KeyName(): string;
    set s3KeyName(value: string);
    resetS3KeyName(): void;
    get s3KeyNameInput(): string | undefined;
}
export interface CustomerprofilesDomainRuleBasedMatchingExportingConfig {
    /**
    * s3_exporting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}
    */
    readonly s3Exporting?: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting;
}
export declare function customerprofilesDomainRuleBasedMatchingExportingConfigToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference | CustomerprofilesDomainRuleBasedMatchingExportingConfig): any;
export declare function customerprofilesDomainRuleBasedMatchingExportingConfigToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference | CustomerprofilesDomainRuleBasedMatchingExportingConfig): any;
export declare class CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainRuleBasedMatchingExportingConfig | undefined;
    set internalValue(value: CustomerprofilesDomainRuleBasedMatchingExportingConfig | undefined);
    private _s3Exporting;
    get s3Exporting(): CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference;
    putS3Exporting(value: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting): void;
    resetS3Exporting(): void;
    get s3ExportingInput(): CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting | undefined;
}
export interface CustomerprofilesDomainRuleBasedMatchingMatchingRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}
    */
    readonly rule: string[];
}
export declare function customerprofilesDomainRuleBasedMatchingMatchingRulesToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingMatchingRules | cdktf.IResolvable): any;
export declare function customerprofilesDomainRuleBasedMatchingMatchingRulesToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingMatchingRules | cdktf.IResolvable): any;
export declare class CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CustomerprofilesDomainRuleBasedMatchingMatchingRules | cdktf.IResolvable | undefined;
    set internalValue(value: CustomerprofilesDomainRuleBasedMatchingMatchingRules | cdktf.IResolvable | undefined);
    private _rule?;
    get rule(): string[];
    set rule(value: string[]);
    get ruleInput(): string[] | undefined;
}
export declare class CustomerprofilesDomainRuleBasedMatchingMatchingRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CustomerprofilesDomainRuleBasedMatchingMatchingRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference;
}
export interface CustomerprofilesDomainRuleBasedMatching {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}
    */
    readonly maxAllowedRuleLevelForMatching?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}
    */
    readonly maxAllowedRuleLevelForMerging?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}
    */
    readonly status?: string;
    /**
    * attribute_types_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#attribute_types_selector CustomerprofilesDomain#attribute_types_selector}
    */
    readonly attributeTypesSelector?: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector;
    /**
    * conflict_resolution block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}
    */
    readonly conflictResolution?: CustomerprofilesDomainRuleBasedMatchingConflictResolution;
    /**
    * exporting_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}
    */
    readonly exportingConfig?: CustomerprofilesDomainRuleBasedMatchingExportingConfig;
    /**
    * matching_rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#matching_rules CustomerprofilesDomain#matching_rules}
    */
    readonly matchingRules?: CustomerprofilesDomainRuleBasedMatchingMatchingRules[] | cdktf.IResolvable;
}
export declare function customerprofilesDomainRuleBasedMatchingToTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingOutputReference | CustomerprofilesDomainRuleBasedMatching): any;
export declare function customerprofilesDomainRuleBasedMatchingToHclTerraform(struct?: CustomerprofilesDomainRuleBasedMatchingOutputReference | CustomerprofilesDomainRuleBasedMatching): any;
export declare class CustomerprofilesDomainRuleBasedMatchingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CustomerprofilesDomainRuleBasedMatching | undefined;
    set internalValue(value: CustomerprofilesDomainRuleBasedMatching | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _maxAllowedRuleLevelForMatching?;
    get maxAllowedRuleLevelForMatching(): number;
    set maxAllowedRuleLevelForMatching(value: number);
    resetMaxAllowedRuleLevelForMatching(): void;
    get maxAllowedRuleLevelForMatchingInput(): number | undefined;
    private _maxAllowedRuleLevelForMerging?;
    get maxAllowedRuleLevelForMerging(): number;
    set maxAllowedRuleLevelForMerging(value: number);
    resetMaxAllowedRuleLevelForMerging(): void;
    get maxAllowedRuleLevelForMergingInput(): number | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _attributeTypesSelector;
    get attributeTypesSelector(): CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference;
    putAttributeTypesSelector(value: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector): void;
    resetAttributeTypesSelector(): void;
    get attributeTypesSelectorInput(): CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector | undefined;
    private _conflictResolution;
    get conflictResolution(): CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference;
    putConflictResolution(value: CustomerprofilesDomainRuleBasedMatchingConflictResolution): void;
    resetConflictResolution(): void;
    get conflictResolutionInput(): CustomerprofilesDomainRuleBasedMatchingConflictResolution | undefined;
    private _exportingConfig;
    get exportingConfig(): CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference;
    putExportingConfig(value: CustomerprofilesDomainRuleBasedMatchingExportingConfig): void;
    resetExportingConfig(): void;
    get exportingConfigInput(): CustomerprofilesDomainRuleBasedMatchingExportingConfig | undefined;
    private _matchingRules;
    get matchingRules(): CustomerprofilesDomainRuleBasedMatchingMatchingRulesList;
    putMatchingRules(value: CustomerprofilesDomainRuleBasedMatchingMatchingRules[] | cdktf.IResolvable): void;
    resetMatchingRules(): void;
    get matchingRulesInput(): cdktf.IResolvable | CustomerprofilesDomainRuleBasedMatchingMatchingRules[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain aws_customerprofiles_domain}
*/
export declare class CustomerprofilesDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_customerprofiles_domain";
    /**
    * Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CustomerprofilesDomain to import
    * @param importFromId The id of the existing CustomerprofilesDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CustomerprofilesDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/customerprofiles_domain aws_customerprofiles_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CustomerprofilesDomainConfig
    */
    constructor(scope: Construct, id: string, config: CustomerprofilesDomainConfig);
    get arn(): string;
    private _deadLetterQueueUrl?;
    get deadLetterQueueUrl(): string;
    set deadLetterQueueUrl(value: string);
    resetDeadLetterQueueUrl(): void;
    get deadLetterQueueUrlInput(): string | undefined;
    private _defaultEncryptionKey?;
    get defaultEncryptionKey(): string;
    set defaultEncryptionKey(value: string);
    resetDefaultEncryptionKey(): void;
    get defaultEncryptionKeyInput(): string | undefined;
    private _defaultExpirationDays?;
    get defaultExpirationDays(): number;
    set defaultExpirationDays(value: number);
    get defaultExpirationDaysInput(): number | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _matching;
    get matching(): CustomerprofilesDomainMatchingOutputReference;
    putMatching(value: CustomerprofilesDomainMatching): void;
    resetMatching(): void;
    get matchingInput(): CustomerprofilesDomainMatching | undefined;
    private _ruleBasedMatching;
    get ruleBasedMatching(): CustomerprofilesDomainRuleBasedMatchingOutputReference;
    putRuleBasedMatching(value: CustomerprofilesDomainRuleBasedMatching): void;
    resetRuleBasedMatching(): void;
    get ruleBasedMatchingInput(): CustomerprofilesDomainRuleBasedMatching | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
