/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DlmLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#tags_all DlmLifecyclePolicy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * policy_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#policy_details DlmLifecyclePolicy#policy_details}
    */
    readonly policyDetails: DlmLifecyclePolicyPolicyDetails;
}
export interface DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}
    */
    readonly cmkArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
}
export declare function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference | DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration): any;
export declare function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference | DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration): any;
export declare class DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration | undefined);
    private _cmkArn?;
    get cmkArn(): string;
    set cmkArn(value: string);
    resetCmkArn(): void;
    get cmkArnInput(): string | undefined;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit: string;
}
export declare function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule): any;
export declare function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    get intervalInput(): number | undefined;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    get intervalUnitInput(): string | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}
    */
    readonly target: string;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#encryption_configuration DlmLifecyclePolicy#encryption_configuration}
    */
    readonly encryptionConfiguration: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration;
    /**
    * retain_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
    */
    readonly retainRule?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule;
}
export declare function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy | cdktf.IResolvable): any;
export declare function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy | cdktf.IResolvable): any;
export declare class DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy | cdktf.IResolvable | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy | cdktf.IResolvable | undefined);
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string | undefined;
    private _encryptionConfiguration;
    get encryptionConfiguration(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration): void;
    get encryptionConfigurationInput(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration | undefined;
    private _retainRule;
    get retainRule(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference;
    putRetainRule(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule): void;
    resetRetainRule(): void;
    get retainRuleInput(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule | undefined;
}
export declare class DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference;
}
export interface DlmLifecyclePolicyPolicyDetailsAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}
    */
    readonly name: string;
    /**
    * cross_region_copy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#cross_region_copy DlmLifecyclePolicy#cross_region_copy}
    */
    readonly crossRegionCopy: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy[] | cdktf.IResolvable;
}
export declare function dlmLifecyclePolicyPolicyDetailsActionToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionOutputReference | DlmLifecyclePolicyPolicyDetailsAction): any;
export declare function dlmLifecyclePolicyPolicyDetailsActionToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionOutputReference | DlmLifecyclePolicyPolicyDetailsAction): any;
export declare class DlmLifecyclePolicyPolicyDetailsActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsAction | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsAction | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _crossRegionCopy;
    get crossRegionCopy(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList;
    putCrossRegionCopy(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy[] | cdktf.IResolvable): void;
    get crossRegionCopyInput(): cdktf.IResolvable | DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy[] | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsEventSourceParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#description_regex DlmLifecyclePolicy#description_regex}
    */
    readonly descriptionRegex: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#event_type DlmLifecyclePolicy#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#snapshot_owner DlmLifecyclePolicy#snapshot_owner}
    */
    readonly snapshotOwner: string[];
}
export declare function dlmLifecyclePolicyPolicyDetailsEventSourceParametersToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference | DlmLifecyclePolicyPolicyDetailsEventSourceParameters): any;
export declare function dlmLifecyclePolicyPolicyDetailsEventSourceParametersToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference | DlmLifecyclePolicyPolicyDetailsEventSourceParameters): any;
export declare class DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsEventSourceParameters | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsEventSourceParameters | undefined);
    private _descriptionRegex?;
    get descriptionRegex(): string;
    set descriptionRegex(value: string);
    get descriptionRegexInput(): string | undefined;
    private _eventType?;
    get eventType(): string;
    set eventType(value: string);
    get eventTypeInput(): string | undefined;
    private _snapshotOwner?;
    get snapshotOwner(): string[];
    set snapshotOwner(value: string[]);
    get snapshotOwnerInput(): string[] | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsEventSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#type DlmLifecyclePolicy#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}
    */
    readonly parameters: DlmLifecyclePolicyPolicyDetailsEventSourceParameters;
}
export declare function dlmLifecyclePolicyPolicyDetailsEventSourceToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference | DlmLifecyclePolicyPolicyDetailsEventSource): any;
export declare function dlmLifecyclePolicyPolicyDetailsEventSourceToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference | DlmLifecyclePolicyPolicyDetailsEventSource): any;
export declare class DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsEventSource | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsEventSource | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference;
    putParameters(value: DlmLifecyclePolicyPolicyDetailsEventSourceParameters): void;
    get parametersInput(): DlmLifecyclePolicyPolicyDetailsEventSourceParameters | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volume DlmLifecyclePolicy#exclude_boot_volume}
    */
    readonly excludeBootVolume?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#no_reboot DlmLifecyclePolicy#no_reboot}
    */
    readonly noReboot?: boolean | cdktf.IResolvable;
}
export declare function dlmLifecyclePolicyPolicyDetailsParametersToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsParametersOutputReference | DlmLifecyclePolicyPolicyDetailsParameters): any;
export declare function dlmLifecyclePolicyPolicyDetailsParametersToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsParametersOutputReference | DlmLifecyclePolicyPolicyDetailsParameters): any;
export declare class DlmLifecyclePolicyPolicyDetailsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsParameters | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsParameters | undefined);
    private _excludeBootVolume?;
    get excludeBootVolume(): boolean | cdktf.IResolvable;
    set excludeBootVolume(value: boolean | cdktf.IResolvable);
    resetExcludeBootVolume(): void;
    get excludeBootVolumeInput(): boolean | cdktf.IResolvable | undefined;
    private _noReboot?;
    get noReboot(): boolean | cdktf.IResolvable;
    set noReboot(value: boolean | cdktf.IResolvable);
    resetNoReboot(): void;
    get noRebootInput(): boolean | cdktf.IResolvable | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#cron_expression DlmLifecyclePolicy#cron_expression}
    */
    readonly cronExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#location DlmLifecyclePolicy#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#times DlmLifecyclePolicy#times}
    */
    readonly times?: string[];
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRule): any;
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCreateRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule | undefined);
    private _cronExpression?;
    get cronExpression(): string;
    set cronExpression(value: string);
    resetCronExpression(): void;
    get cronExpressionInput(): string | undefined;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number | undefined;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    resetIntervalUnit(): void;
    get intervalUnitInput(): string | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _times?;
    get times(): string[];
    set times(value: string[]);
    resetTimes(): void;
    get timesInput(): string[] | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit: string;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule): any;
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    get intervalInput(): number | undefined;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    get intervalUnitInput(): string | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit: string;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule): any;
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    get intervalInput(): number | undefined;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    get intervalUnitInput(): string | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}
    */
    readonly cmkArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
    */
    readonly copyTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}
    */
    readonly encrypted: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}
    */
    readonly target: string;
    /**
    * deprecate_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}
    */
    readonly deprecateRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule;
    /**
    * retain_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
    */
    readonly retainRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule | cdktf.IResolvable): any;
export declare function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule | cdktf.IResolvable): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule | cdktf.IResolvable | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule | cdktf.IResolvable | undefined);
    private _cmkArn?;
    get cmkArn(): string;
    set cmkArn(value: string);
    resetCmkArn(): void;
    get cmkArnInput(): string | undefined;
    private _copyTags?;
    get copyTags(): boolean | cdktf.IResolvable;
    set copyTags(value: boolean | cdktf.IResolvable);
    resetCopyTags(): void;
    get copyTagsInput(): boolean | cdktf.IResolvable | undefined;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string | undefined;
    private _deprecateRule;
    get deprecateRule(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference;
    putDeprecateRule(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule): void;
    resetDeprecateRule(): void;
    get deprecateRuleInput(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule | undefined;
    private _retainRule;
    get retainRule(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference;
    putRetainRule(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule): void;
    resetRetainRule(): void;
    get retainRuleInput(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule | undefined;
}
export declare class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
    */
    readonly count?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule): any;
export declare function dlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule | undefined);
    private _count?;
    get count(): number;
    set count(value: number);
    resetCount(): void;
    get countInput(): number | undefined;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number | undefined;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    resetIntervalUnit(): void;
    get intervalUnitInput(): string | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#availability_zones DlmLifecyclePolicy#availability_zones}
    */
    readonly availabilityZones: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
    */
    readonly count?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule): any;
export declare function dlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule | undefined);
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    get availabilityZonesInput(): string[] | undefined;
    private _count?;
    get count(): number;
    set count(value: number);
    resetCount(): void;
    get countInput(): number | undefined;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number | undefined;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    resetIntervalUnit(): void;
    get intervalUnitInput(): string | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleRetainRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
    */
    readonly count?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
    */
    readonly intervalUnit?: string;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleRetainRule): any;
export declare function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleRetainRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleRetainRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule | undefined);
    private _count?;
    get count(): number;
    set count(value: number);
    resetCount(): void;
    get countInput(): number | undefined;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number | undefined;
    private _intervalUnit?;
    get intervalUnit(): string;
    set intervalUnit(value: string);
    resetIntervalUnit(): void;
    get intervalUnitInput(): string | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleShareRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#target_accounts DlmLifecyclePolicy#target_accounts}
    */
    readonly targetAccounts: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#unshare_interval DlmLifecyclePolicy#unshare_interval}
    */
    readonly unshareInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#unshare_interval_unit DlmLifecyclePolicy#unshare_interval_unit}
    */
    readonly unshareIntervalUnit?: string;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleShareRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleShareRule): any;
export declare function dlmLifecyclePolicyPolicyDetailsScheduleShareRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleShareRule): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleShareRule | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleShareRule | undefined);
    private _targetAccounts?;
    get targetAccounts(): string[];
    set targetAccounts(value: string[]);
    get targetAccountsInput(): string[] | undefined;
    private _unshareInterval?;
    get unshareInterval(): number;
    set unshareInterval(value: number);
    resetUnshareInterval(): void;
    get unshareIntervalInput(): number | undefined;
    private _unshareIntervalUnit?;
    get unshareIntervalUnit(): string;
    set unshareIntervalUnit(value: string);
    resetUnshareIntervalUnit(): void;
    get unshareIntervalUnitInput(): string | undefined;
}
export interface DlmLifecyclePolicyPolicyDetailsSchedule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
    */
    readonly copyTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#tags_to_add DlmLifecyclePolicy#tags_to_add}
    */
    readonly tagsToAdd?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#variable_tags DlmLifecyclePolicy#variable_tags}
    */
    readonly variableTags?: {
        [key: string]: string;
    };
    /**
    * create_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#create_rule DlmLifecyclePolicy#create_rule}
    */
    readonly createRule: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule;
    /**
    * cross_region_copy_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#cross_region_copy_rule DlmLifecyclePolicy#cross_region_copy_rule}
    */
    readonly crossRegionCopyRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule[] | cdktf.IResolvable;
    /**
    * deprecate_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}
    */
    readonly deprecateRule?: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule;
    /**
    * fast_restore_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#fast_restore_rule DlmLifecyclePolicy#fast_restore_rule}
    */
    readonly fastRestoreRule?: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule;
    /**
    * retain_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
    */
    readonly retainRule: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule;
    /**
    * share_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#share_rule DlmLifecyclePolicy#share_rule}
    */
    readonly shareRule?: DlmLifecyclePolicyPolicyDetailsScheduleShareRule;
}
export declare function dlmLifecyclePolicyPolicyDetailsScheduleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable): any;
export declare function dlmLifecyclePolicyPolicyDetailsScheduleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable): any;
export declare class DlmLifecyclePolicyPolicyDetailsScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable | undefined);
    private _copyTags?;
    get copyTags(): boolean | cdktf.IResolvable;
    set copyTags(value: boolean | cdktf.IResolvable);
    resetCopyTags(): void;
    get copyTagsInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _tagsToAdd?;
    get tagsToAdd(): {
        [key: string]: string;
    };
    set tagsToAdd(value: {
        [key: string]: string;
    });
    resetTagsToAdd(): void;
    get tagsToAddInput(): {
        [key: string]: string;
    } | undefined;
    private _variableTags?;
    get variableTags(): {
        [key: string]: string;
    };
    set variableTags(value: {
        [key: string]: string;
    });
    resetVariableTags(): void;
    get variableTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _createRule;
    get createRule(): DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference;
    putCreateRule(value: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule): void;
    get createRuleInput(): DlmLifecyclePolicyPolicyDetailsScheduleCreateRule | undefined;
    private _crossRegionCopyRule;
    get crossRegionCopyRule(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList;
    putCrossRegionCopyRule(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule[] | cdktf.IResolvable): void;
    resetCrossRegionCopyRule(): void;
    get crossRegionCopyRuleInput(): cdktf.IResolvable | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule[] | undefined;
    private _deprecateRule;
    get deprecateRule(): DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference;
    putDeprecateRule(value: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule): void;
    resetDeprecateRule(): void;
    get deprecateRuleInput(): DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule | undefined;
    private _fastRestoreRule;
    get fastRestoreRule(): DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference;
    putFastRestoreRule(value: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule): void;
    resetFastRestoreRule(): void;
    get fastRestoreRuleInput(): DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule | undefined;
    private _retainRule;
    get retainRule(): DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference;
    putRetainRule(value: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule): void;
    get retainRuleInput(): DlmLifecyclePolicyPolicyDetailsScheduleRetainRule | undefined;
    private _shareRule;
    get shareRule(): DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference;
    putShareRule(value: DlmLifecyclePolicyPolicyDetailsScheduleShareRule): void;
    resetShareRule(): void;
    get shareRuleInput(): DlmLifecyclePolicyPolicyDetailsScheduleShareRule | undefined;
}
export declare class DlmLifecyclePolicyPolicyDetailsScheduleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DlmLifecyclePolicyPolicyDetailsScheduleOutputReference;
}
export interface DlmLifecyclePolicyPolicyDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#policy_type DlmLifecyclePolicy#policy_type}
    */
    readonly policyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#resource_locations DlmLifecyclePolicy#resource_locations}
    */
    readonly resourceLocations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#resource_types DlmLifecyclePolicy#resource_types}
    */
    readonly resourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#target_tags DlmLifecyclePolicy#target_tags}
    */
    readonly targetTags?: {
        [key: string]: string;
    };
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#action DlmLifecyclePolicy#action}
    */
    readonly action?: DlmLifecyclePolicyPolicyDetailsAction;
    /**
    * event_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#event_source DlmLifecyclePolicy#event_source}
    */
    readonly eventSource?: DlmLifecyclePolicyPolicyDetailsEventSource;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}
    */
    readonly parameters?: DlmLifecyclePolicyPolicyDetailsParameters;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#schedule DlmLifecyclePolicy#schedule}
    */
    readonly schedule?: DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable;
}
export declare function dlmLifecyclePolicyPolicyDetailsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsOutputReference | DlmLifecyclePolicyPolicyDetails): any;
export declare function dlmLifecyclePolicyPolicyDetailsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsOutputReference | DlmLifecyclePolicyPolicyDetails): any;
export declare class DlmLifecyclePolicyPolicyDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DlmLifecyclePolicyPolicyDetails | undefined;
    set internalValue(value: DlmLifecyclePolicyPolicyDetails | undefined);
    private _policyType?;
    get policyType(): string;
    set policyType(value: string);
    resetPolicyType(): void;
    get policyTypeInput(): string | undefined;
    private _resourceLocations?;
    get resourceLocations(): string[];
    set resourceLocations(value: string[]);
    resetResourceLocations(): void;
    get resourceLocationsInput(): string[] | undefined;
    private _resourceTypes?;
    get resourceTypes(): string[];
    set resourceTypes(value: string[]);
    resetResourceTypes(): void;
    get resourceTypesInput(): string[] | undefined;
    private _targetTags?;
    get targetTags(): {
        [key: string]: string;
    };
    set targetTags(value: {
        [key: string]: string;
    });
    resetTargetTags(): void;
    get targetTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _action;
    get action(): DlmLifecyclePolicyPolicyDetailsActionOutputReference;
    putAction(value: DlmLifecyclePolicyPolicyDetailsAction): void;
    resetAction(): void;
    get actionInput(): DlmLifecyclePolicyPolicyDetailsAction | undefined;
    private _eventSource;
    get eventSource(): DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference;
    putEventSource(value: DlmLifecyclePolicyPolicyDetailsEventSource): void;
    resetEventSource(): void;
    get eventSourceInput(): DlmLifecyclePolicyPolicyDetailsEventSource | undefined;
    private _parameters;
    get parameters(): DlmLifecyclePolicyPolicyDetailsParametersOutputReference;
    putParameters(value: DlmLifecyclePolicyPolicyDetailsParameters): void;
    resetParameters(): void;
    get parametersInput(): DlmLifecyclePolicyPolicyDetailsParameters | undefined;
    private _schedule;
    get schedule(): DlmLifecyclePolicyPolicyDetailsScheduleList;
    putSchedule(value: DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable): void;
    resetSchedule(): void;
    get scheduleInput(): cdktf.IResolvable | DlmLifecyclePolicyPolicyDetailsSchedule[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy aws_dlm_lifecycle_policy}
*/
export declare class DlmLifecyclePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dlm_lifecycle_policy";
    /**
    * Generates CDKTF code for importing a DlmLifecyclePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DlmLifecyclePolicy to import
    * @param importFromId The id of the existing DlmLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DlmLifecyclePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dlm_lifecycle_policy aws_dlm_lifecycle_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DlmLifecyclePolicyConfig
    */
    constructor(scope: Construct, id: string, config: DlmLifecyclePolicyConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    private _policyDetails;
    get policyDetails(): DlmLifecyclePolicyPolicyDetailsOutputReference;
    putPolicyDetails(value: DlmLifecyclePolicyPolicyDetails): void;
    get policyDetailsInput(): DlmLifecyclePolicyPolicyDetails | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
