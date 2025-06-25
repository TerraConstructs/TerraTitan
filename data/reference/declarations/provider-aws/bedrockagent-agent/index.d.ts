/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockagentAgentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#agent_collaboration BedrockagentAgent#agent_collaboration}
    */
    readonly agentCollaboration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}
    */
    readonly agentName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}
    */
    readonly agentResourceRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}
    */
    readonly customerEncryptionKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}
    */
    readonly foundationModel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#guardrail_configuration BedrockagentAgent#guardrail_configuration}
    */
    readonly guardrailConfiguration?: BedrockagentAgentGuardrailConfiguration[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}
    */
    readonly idleSessionTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}
    */
    readonly instruction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#memory_configuration BedrockagentAgent#memory_configuration}
    */
    readonly memoryConfiguration?: BedrockagentAgentMemoryConfiguration[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}
    */
    readonly prepareAgent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}
    */
    readonly promptOverrideConfiguration?: BedrockagentAgentPromptOverrideConfiguration[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#skip_resource_in_use_check BedrockagentAgent#skip_resource_in_use_check}
    */
    readonly skipResourceInUseCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#timeouts BedrockagentAgent#timeouts}
    */
    readonly timeouts?: BedrockagentAgentTimeouts;
}
export interface BedrockagentAgentGuardrailConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#guardrail_identifier BedrockagentAgent#guardrail_identifier}
    */
    readonly guardrailIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#guardrail_version BedrockagentAgent#guardrail_version}
    */
    readonly guardrailVersion?: string;
}
export declare function bedrockagentAgentGuardrailConfigurationToTerraform(struct?: BedrockagentAgentGuardrailConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentAgentGuardrailConfigurationToHclTerraform(struct?: BedrockagentAgentGuardrailConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentAgentGuardrailConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentGuardrailConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentGuardrailConfiguration | cdktf.IResolvable | undefined);
    private _guardrailIdentifier?;
    get guardrailIdentifier(): string;
    set guardrailIdentifier(value: string);
    resetGuardrailIdentifier(): void;
    get guardrailIdentifierInput(): string | undefined;
    private _guardrailVersion?;
    get guardrailVersion(): string;
    set guardrailVersion(value: string);
    resetGuardrailVersion(): void;
    get guardrailVersionInput(): string | undefined;
}
export declare class BedrockagentAgentGuardrailConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentGuardrailConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentGuardrailConfigurationOutputReference;
}
export interface BedrockagentAgentMemoryConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#enabled_memory_types BedrockagentAgent#enabled_memory_types}
    */
    readonly enabledMemoryTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#storage_days BedrockagentAgent#storage_days}
    */
    readonly storageDays?: number;
}
export declare function bedrockagentAgentMemoryConfigurationToTerraform(struct?: BedrockagentAgentMemoryConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentAgentMemoryConfigurationToHclTerraform(struct?: BedrockagentAgentMemoryConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentAgentMemoryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentMemoryConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentMemoryConfiguration | cdktf.IResolvable | undefined);
    private _enabledMemoryTypes?;
    get enabledMemoryTypes(): string[];
    set enabledMemoryTypes(value: string[]);
    resetEnabledMemoryTypes(): void;
    get enabledMemoryTypesInput(): string[] | undefined;
    private _storageDays?;
    get storageDays(): number;
    set storageDays(value: number);
    resetStorageDays(): void;
    get storageDaysInput(): number | undefined;
}
export declare class BedrockagentAgentMemoryConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentMemoryConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentMemoryConfigurationOutputReference;
}
export interface BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#max_length BedrockagentAgent#max_length}
    */
    readonly maxLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#stop_sequences BedrockagentAgent#stop_sequences}
    */
    readonly stopSequences?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#temperature BedrockagentAgent#temperature}
    */
    readonly temperature?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#top_k BedrockagentAgent#top_k}
    */
    readonly topK?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#top_p BedrockagentAgent#top_p}
    */
    readonly topP?: number;
}
export declare function bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationToTerraform(struct?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationToHclTerraform(struct?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration | cdktf.IResolvable | undefined);
    private _maxLength?;
    get maxLength(): number;
    set maxLength(value: number);
    resetMaxLength(): void;
    get maxLengthInput(): number | undefined;
    private _stopSequences?;
    get stopSequences(): string[];
    set stopSequences(value: string[]);
    resetStopSequences(): void;
    get stopSequencesInput(): string[] | undefined;
    private _temperature?;
    get temperature(): number;
    set temperature(value: number);
    resetTemperature(): void;
    get temperatureInput(): number | undefined;
    private _topK?;
    get topK(): number;
    set topK(value: number);
    resetTopK(): void;
    get topKInput(): number | undefined;
    private _topP?;
    get topP(): number;
    set topP(value: number);
    resetTopP(): void;
    get topPInput(): number | undefined;
}
export declare class BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference;
}
export interface BedrockagentAgentPromptOverrideConfigurationPromptConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#base_prompt_template BedrockagentAgent#base_prompt_template}
    */
    readonly basePromptTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#inference_configuration BedrockagentAgent#inference_configuration}
    */
    readonly inferenceConfiguration?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#parser_mode BedrockagentAgent#parser_mode}
    */
    readonly parserMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#prompt_creation_mode BedrockagentAgent#prompt_creation_mode}
    */
    readonly promptCreationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#prompt_state BedrockagentAgent#prompt_state}
    */
    readonly promptState?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#prompt_type BedrockagentAgent#prompt_type}
    */
    readonly promptType?: string;
}
export declare function bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsToTerraform(struct?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations | cdktf.IResolvable): any;
export declare function bedrockagentAgentPromptOverrideConfigurationPromptConfigurationsToHclTerraform(struct?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations | cdktf.IResolvable): any;
export declare class BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentPromptOverrideConfigurationPromptConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations | cdktf.IResolvable | undefined);
    private _basePromptTemplate?;
    get basePromptTemplate(): string;
    set basePromptTemplate(value: string);
    resetBasePromptTemplate(): void;
    get basePromptTemplateInput(): string | undefined;
    private _inferenceConfiguration;
    get inferenceConfiguration(): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList;
    putInferenceConfiguration(value: BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[] | cdktf.IResolvable): void;
    resetInferenceConfiguration(): void;
    get inferenceConfigurationInput(): cdktf.IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration[] | undefined;
    private _parserMode?;
    get parserMode(): string;
    set parserMode(value: string);
    resetParserMode(): void;
    get parserModeInput(): string | undefined;
    private _promptCreationMode?;
    get promptCreationMode(): string;
    set promptCreationMode(value: string);
    resetPromptCreationMode(): void;
    get promptCreationModeInput(): string | undefined;
    private _promptState?;
    get promptState(): string;
    set promptState(value: string);
    resetPromptState(): void;
    get promptStateInput(): string | undefined;
    private _promptType?;
    get promptType(): string;
    set promptType(value: string);
    resetPromptType(): void;
    get promptTypeInput(): string | undefined;
}
export declare class BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference;
}
export interface BedrockagentAgentPromptOverrideConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#override_lambda BedrockagentAgent#override_lambda}
    */
    readonly overrideLambda?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#prompt_configurations BedrockagentAgent#prompt_configurations}
    */
    readonly promptConfigurations?: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[] | cdktf.IResolvable;
}
export declare function bedrockagentAgentPromptOverrideConfigurationToTerraform(struct?: BedrockagentAgentPromptOverrideConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentAgentPromptOverrideConfigurationToHclTerraform(struct?: BedrockagentAgentPromptOverrideConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentAgentPromptOverrideConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentPromptOverrideConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentPromptOverrideConfiguration | cdktf.IResolvable | undefined);
    private _overrideLambda?;
    get overrideLambda(): string;
    set overrideLambda(value: string);
    resetOverrideLambda(): void;
    get overrideLambdaInput(): string | undefined;
    private _promptConfigurations;
    get promptConfigurations(): BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList;
    putPromptConfigurations(value: BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[] | cdktf.IResolvable): void;
    resetPromptConfigurations(): void;
    get promptConfigurationsInput(): cdktf.IResolvable | BedrockagentAgentPromptOverrideConfigurationPromptConfigurations[] | undefined;
}
export declare class BedrockagentAgentPromptOverrideConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentPromptOverrideConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentPromptOverrideConfigurationOutputReference;
}
export interface BedrockagentAgentTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#create BedrockagentAgent#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#delete BedrockagentAgent#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#update BedrockagentAgent#update}
    */
    readonly update?: string;
}
export declare function bedrockagentAgentTimeoutsToTerraform(struct?: BedrockagentAgentTimeouts | cdktf.IResolvable): any;
export declare function bedrockagentAgentTimeoutsToHclTerraform(struct?: BedrockagentAgentTimeouts | cdktf.IResolvable): any;
export declare class BedrockagentAgentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockagentAgentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent aws_bedrockagent_agent}
*/
export declare class BedrockagentAgent extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrockagent_agent";
    /**
    * Generates CDKTF code for importing a BedrockagentAgent resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockagentAgent to import
    * @param importFromId The id of the existing BedrockagentAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockagentAgent to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent aws_bedrockagent_agent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockagentAgentConfig
    */
    constructor(scope: Construct, id: string, config: BedrockagentAgentConfig);
    get agentArn(): string;
    private _agentCollaboration?;
    get agentCollaboration(): string;
    set agentCollaboration(value: string);
    resetAgentCollaboration(): void;
    get agentCollaborationInput(): string | undefined;
    get agentId(): string;
    private _agentName?;
    get agentName(): string;
    set agentName(value: string);
    get agentNameInput(): string | undefined;
    private _agentResourceRoleArn?;
    get agentResourceRoleArn(): string;
    set agentResourceRoleArn(value: string);
    get agentResourceRoleArnInput(): string | undefined;
    get agentVersion(): string;
    private _customerEncryptionKeyArn?;
    get customerEncryptionKeyArn(): string;
    set customerEncryptionKeyArn(value: string);
    resetCustomerEncryptionKeyArn(): void;
    get customerEncryptionKeyArnInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _foundationModel?;
    get foundationModel(): string;
    set foundationModel(value: string);
    get foundationModelInput(): string | undefined;
    private _guardrailConfiguration;
    get guardrailConfiguration(): BedrockagentAgentGuardrailConfigurationList;
    putGuardrailConfiguration(value: BedrockagentAgentGuardrailConfiguration[] | cdktf.IResolvable): void;
    resetGuardrailConfiguration(): void;
    get guardrailConfigurationInput(): cdktf.IResolvable | BedrockagentAgentGuardrailConfiguration[] | undefined;
    get id(): string;
    private _idleSessionTtlInSeconds?;
    get idleSessionTtlInSeconds(): number;
    set idleSessionTtlInSeconds(value: number);
    resetIdleSessionTtlInSeconds(): void;
    get idleSessionTtlInSecondsInput(): number | undefined;
    private _instruction?;
    get instruction(): string;
    set instruction(value: string);
    resetInstruction(): void;
    get instructionInput(): string | undefined;
    private _memoryConfiguration;
    get memoryConfiguration(): BedrockagentAgentMemoryConfigurationList;
    putMemoryConfiguration(value: BedrockagentAgentMemoryConfiguration[] | cdktf.IResolvable): void;
    resetMemoryConfiguration(): void;
    get memoryConfigurationInput(): cdktf.IResolvable | BedrockagentAgentMemoryConfiguration[] | undefined;
    private _prepareAgent?;
    get prepareAgent(): boolean | cdktf.IResolvable;
    set prepareAgent(value: boolean | cdktf.IResolvable);
    resetPrepareAgent(): void;
    get prepareAgentInput(): boolean | cdktf.IResolvable | undefined;
    get preparedAt(): string;
    private _promptOverrideConfiguration;
    get promptOverrideConfiguration(): BedrockagentAgentPromptOverrideConfigurationList;
    putPromptOverrideConfiguration(value: BedrockagentAgentPromptOverrideConfiguration[] | cdktf.IResolvable): void;
    resetPromptOverrideConfiguration(): void;
    get promptOverrideConfigurationInput(): cdktf.IResolvable | BedrockagentAgentPromptOverrideConfiguration[] | undefined;
    private _skipResourceInUseCheck?;
    get skipResourceInUseCheck(): boolean | cdktf.IResolvable;
    set skipResourceInUseCheck(value: boolean | cdktf.IResolvable);
    resetSkipResourceInUseCheck(): void;
    get skipResourceInUseCheckInput(): boolean | cdktf.IResolvable | undefined;
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
    private _timeouts;
    get timeouts(): BedrockagentAgentTimeoutsOutputReference;
    putTimeouts(value: BedrockagentAgentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockagentAgentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
