/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockGuardrailConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}
    */
    readonly blockedInputMessaging: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}
    */
    readonly blockedOutputsMessaging: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * content_policy_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#content_policy_config BedrockGuardrail#content_policy_config}
    */
    readonly contentPolicyConfig?: BedrockGuardrailContentPolicyConfig[] | cdktf.IResolvable;
    /**
    * contextual_grounding_policy_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#contextual_grounding_policy_config BedrockGuardrail#contextual_grounding_policy_config}
    */
    readonly contextualGroundingPolicyConfig?: BedrockGuardrailContextualGroundingPolicyConfig[] | cdktf.IResolvable;
    /**
    * sensitive_information_policy_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#sensitive_information_policy_config BedrockGuardrail#sensitive_information_policy_config}
    */
    readonly sensitiveInformationPolicyConfig?: BedrockGuardrailSensitiveInformationPolicyConfig[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#timeouts BedrockGuardrail#timeouts}
    */
    readonly timeouts?: BedrockGuardrailTimeouts;
    /**
    * topic_policy_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#topic_policy_config BedrockGuardrail#topic_policy_config}
    */
    readonly topicPolicyConfig?: BedrockGuardrailTopicPolicyConfig[] | cdktf.IResolvable;
    /**
    * word_policy_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#word_policy_config BedrockGuardrail#word_policy_config}
    */
    readonly wordPolicyConfig?: BedrockGuardrailWordPolicyConfig[] | cdktf.IResolvable;
}
export interface BedrockGuardrailContentPolicyConfigFiltersConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#input_strength BedrockGuardrail#input_strength}
    */
    readonly inputStrength: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#output_strength BedrockGuardrail#output_strength}
    */
    readonly outputStrength: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
    */
    readonly type: string;
}
export declare function bedrockGuardrailContentPolicyConfigFiltersConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailContentPolicyConfigFiltersConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailContentPolicyConfigFiltersConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktf.IResolvable | undefined);
    private _inputStrength?;
    get inputStrength(): string;
    set inputStrength(value: string);
    get inputStrengthInput(): string | undefined;
    private _outputStrength?;
    get outputStrength(): string;
    set outputStrength(value: string);
    get outputStrengthInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockGuardrailContentPolicyConfigFiltersConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference;
}
export interface BedrockGuardrailContentPolicyConfig {
    /**
    * filters_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}
    */
    readonly filtersConfig?: BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktf.IResolvable;
}
export declare function bedrockGuardrailContentPolicyConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailContentPolicyConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailContentPolicyConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailContentPolicyConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailContentPolicyConfig | cdktf.IResolvable | undefined);
    private _filtersConfig;
    get filtersConfig(): BedrockGuardrailContentPolicyConfigFiltersConfigList;
    putFiltersConfig(value: BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktf.IResolvable): void;
    resetFiltersConfig(): void;
    get filtersConfigInput(): cdktf.IResolvable | BedrockGuardrailContentPolicyConfigFiltersConfig[] | undefined;
}
export declare class BedrockGuardrailContentPolicyConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailContentPolicyConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailContentPolicyConfigOutputReference;
}
export interface BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#threshold BedrockGuardrail#threshold}
    */
    readonly threshold: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
    */
    readonly type: string;
}
export declare function bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktf.IResolvable | undefined);
    private _threshold?;
    get threshold(): number;
    set threshold(value: number);
    get thresholdInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference;
}
export interface BedrockGuardrailContextualGroundingPolicyConfig {
    /**
    * filters_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}
    */
    readonly filtersConfig?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktf.IResolvable;
}
export declare function bedrockGuardrailContextualGroundingPolicyConfigToTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailContextualGroundingPolicyConfigToHclTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailContextualGroundingPolicyConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailContextualGroundingPolicyConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailContextualGroundingPolicyConfig | cdktf.IResolvable | undefined);
    private _filtersConfig;
    get filtersConfig(): BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList;
    putFiltersConfig(value: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktf.IResolvable): void;
    resetFiltersConfig(): void;
    get filtersConfigInput(): cdktf.IResolvable | BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | undefined;
}
export declare class BedrockGuardrailContextualGroundingPolicyConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailContextualGroundingPolicyConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailContextualGroundingPolicyConfigOutputReference;
}
export interface BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
    */
    readonly type: string;
}
export declare function bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference;
}
export interface BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#pattern BedrockGuardrail#pattern}
    */
    readonly pattern: string;
}
export declare function bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string | undefined;
}
export declare class BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference;
}
export interface BedrockGuardrailSensitiveInformationPolicyConfig {
    /**
    * pii_entities_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#pii_entities_config BedrockGuardrail#pii_entities_config}
    */
    readonly piiEntitiesConfig?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktf.IResolvable;
    /**
    * regexes_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#regexes_config BedrockGuardrail#regexes_config}
    */
    readonly regexesConfig?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktf.IResolvable;
}
export declare function bedrockGuardrailSensitiveInformationPolicyConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailSensitiveInformationPolicyConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailSensitiveInformationPolicyConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfig | cdktf.IResolvable | undefined);
    private _piiEntitiesConfig;
    get piiEntitiesConfig(): BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList;
    putPiiEntitiesConfig(value: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktf.IResolvable): void;
    resetPiiEntitiesConfig(): void;
    get piiEntitiesConfigInput(): cdktf.IResolvable | BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | undefined;
    private _regexesConfig;
    get regexesConfig(): BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList;
    putRegexesConfig(value: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktf.IResolvable): void;
    resetRegexesConfig(): void;
    get regexesConfigInput(): cdktf.IResolvable | BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | undefined;
}
export declare class BedrockGuardrailSensitiveInformationPolicyConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailSensitiveInformationPolicyConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigOutputReference;
}
export interface BedrockGuardrailTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#create BedrockGuardrail#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#delete BedrockGuardrail#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#update BedrockGuardrail#update}
    */
    readonly update?: string;
}
export declare function bedrockGuardrailTimeoutsToTerraform(struct?: BedrockGuardrailTimeouts | cdktf.IResolvable): any;
export declare function bedrockGuardrailTimeoutsToHclTerraform(struct?: BedrockGuardrailTimeouts | cdktf.IResolvable): any;
export declare class BedrockGuardrailTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockGuardrailTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface BedrockGuardrailTopicPolicyConfigTopicsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#definition BedrockGuardrail#definition}
    */
    readonly definition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#examples BedrockGuardrail#examples}
    */
    readonly examples?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
    */
    readonly type: string;
}
export declare function bedrockGuardrailTopicPolicyConfigTopicsConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailTopicPolicyConfigTopicsConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktf.IResolvable | undefined);
    private _definition?;
    get definition(): string;
    set definition(value: string);
    get definitionInput(): string | undefined;
    private _examples?;
    get examples(): string[];
    set examples(value: string[]);
    resetExamples(): void;
    get examplesInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockGuardrailTopicPolicyConfigTopicsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference;
}
export interface BedrockGuardrailTopicPolicyConfig {
    /**
    * topics_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#topics_config BedrockGuardrail#topics_config}
    */
    readonly topicsConfig?: BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktf.IResolvable;
}
export declare function bedrockGuardrailTopicPolicyConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailTopicPolicyConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailTopicPolicyConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailTopicPolicyConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailTopicPolicyConfig | cdktf.IResolvable | undefined);
    private _topicsConfig;
    get topicsConfig(): BedrockGuardrailTopicPolicyConfigTopicsConfigList;
    putTopicsConfig(value: BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktf.IResolvable): void;
    resetTopicsConfig(): void;
    get topicsConfigInput(): cdktf.IResolvable | BedrockGuardrailTopicPolicyConfigTopicsConfig[] | undefined;
}
export declare class BedrockGuardrailTopicPolicyConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailTopicPolicyConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailTopicPolicyConfigOutputReference;
}
export interface BedrockGuardrailWordPolicyConfigManagedWordListsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
    */
    readonly type: string;
}
export declare function bedrockGuardrailWordPolicyConfigManagedWordListsConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockGuardrailWordPolicyConfigManagedWordListsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference;
}
export interface BedrockGuardrailWordPolicyConfigWordsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#text BedrockGuardrail#text}
    */
    readonly text: string;
}
export declare function bedrockGuardrailWordPolicyConfigWordsConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfigWordsConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailWordPolicyConfigWordsConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfigWordsConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailWordPolicyConfigWordsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailWordPolicyConfigWordsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailWordPolicyConfigWordsConfig | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
}
export declare class BedrockGuardrailWordPolicyConfigWordsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailWordPolicyConfigWordsConfigOutputReference;
}
export interface BedrockGuardrailWordPolicyConfig {
    /**
    * managed_word_lists_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#managed_word_lists_config BedrockGuardrail#managed_word_lists_config}
    */
    readonly managedWordListsConfig?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktf.IResolvable;
    /**
    * words_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#words_config BedrockGuardrail#words_config}
    */
    readonly wordsConfig?: BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktf.IResolvable;
}
export declare function bedrockGuardrailWordPolicyConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfig | cdktf.IResolvable): any;
export declare function bedrockGuardrailWordPolicyConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfig | cdktf.IResolvable): any;
export declare class BedrockGuardrailWordPolicyConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockGuardrailWordPolicyConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailWordPolicyConfig | cdktf.IResolvable | undefined);
    private _managedWordListsConfig;
    get managedWordListsConfig(): BedrockGuardrailWordPolicyConfigManagedWordListsConfigList;
    putManagedWordListsConfig(value: BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktf.IResolvable): void;
    resetManagedWordListsConfig(): void;
    get managedWordListsConfigInput(): cdktf.IResolvable | BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | undefined;
    private _wordsConfig;
    get wordsConfig(): BedrockGuardrailWordPolicyConfigWordsConfigList;
    putWordsConfig(value: BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktf.IResolvable): void;
    resetWordsConfig(): void;
    get wordsConfigInput(): cdktf.IResolvable | BedrockGuardrailWordPolicyConfigWordsConfig[] | undefined;
}
export declare class BedrockGuardrailWordPolicyConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockGuardrailWordPolicyConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockGuardrailWordPolicyConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail}
*/
export declare class BedrockGuardrail extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrock_guardrail";
    /**
    * Generates CDKTF code for importing a BedrockGuardrail resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockGuardrail to import
    * @param importFromId The id of the existing BedrockGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockGuardrail to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockGuardrailConfig
    */
    constructor(scope: Construct, id: string, config: BedrockGuardrailConfig);
    private _blockedInputMessaging?;
    get blockedInputMessaging(): string;
    set blockedInputMessaging(value: string);
    get blockedInputMessagingInput(): string | undefined;
    private _blockedOutputsMessaging?;
    get blockedOutputsMessaging(): string;
    set blockedOutputsMessaging(value: string);
    get blockedOutputsMessagingInput(): string | undefined;
    get createdAt(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get guardrailArn(): string;
    get guardrailId(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
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
    get version(): string;
    private _contentPolicyConfig;
    get contentPolicyConfig(): BedrockGuardrailContentPolicyConfigList;
    putContentPolicyConfig(value: BedrockGuardrailContentPolicyConfig[] | cdktf.IResolvable): void;
    resetContentPolicyConfig(): void;
    get contentPolicyConfigInput(): cdktf.IResolvable | BedrockGuardrailContentPolicyConfig[] | undefined;
    private _contextualGroundingPolicyConfig;
    get contextualGroundingPolicyConfig(): BedrockGuardrailContextualGroundingPolicyConfigList;
    putContextualGroundingPolicyConfig(value: BedrockGuardrailContextualGroundingPolicyConfig[] | cdktf.IResolvable): void;
    resetContextualGroundingPolicyConfig(): void;
    get contextualGroundingPolicyConfigInput(): cdktf.IResolvable | BedrockGuardrailContextualGroundingPolicyConfig[] | undefined;
    private _sensitiveInformationPolicyConfig;
    get sensitiveInformationPolicyConfig(): BedrockGuardrailSensitiveInformationPolicyConfigList;
    putSensitiveInformationPolicyConfig(value: BedrockGuardrailSensitiveInformationPolicyConfig[] | cdktf.IResolvable): void;
    resetSensitiveInformationPolicyConfig(): void;
    get sensitiveInformationPolicyConfigInput(): cdktf.IResolvable | BedrockGuardrailSensitiveInformationPolicyConfig[] | undefined;
    private _timeouts;
    get timeouts(): BedrockGuardrailTimeoutsOutputReference;
    putTimeouts(value: BedrockGuardrailTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockGuardrailTimeouts | undefined;
    private _topicPolicyConfig;
    get topicPolicyConfig(): BedrockGuardrailTopicPolicyConfigList;
    putTopicPolicyConfig(value: BedrockGuardrailTopicPolicyConfig[] | cdktf.IResolvable): void;
    resetTopicPolicyConfig(): void;
    get topicPolicyConfigInput(): cdktf.IResolvable | BedrockGuardrailTopicPolicyConfig[] | undefined;
    private _wordPolicyConfig;
    get wordPolicyConfig(): BedrockGuardrailWordPolicyConfigList;
    putWordPolicyConfig(value: BedrockGuardrailWordPolicyConfig[] | cdktf.IResolvable): void;
    resetWordPolicyConfig(): void;
    get wordPolicyConfigInput(): cdktf.IResolvable | BedrockGuardrailWordPolicyConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
