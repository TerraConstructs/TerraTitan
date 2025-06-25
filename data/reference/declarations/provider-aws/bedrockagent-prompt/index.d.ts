/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockagentPromptConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#customer_encryption_key_arn BedrockagentPrompt#customer_encryption_key_arn}
    */
    readonly customerEncryptionKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#default_variant BedrockagentPrompt#default_variant}
    */
    readonly defaultVariant?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#description BedrockagentPrompt#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#tags BedrockagentPrompt#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * variant block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#variant BedrockagentPrompt#variant}
    */
    readonly variant?: BedrockagentPromptVariant[] | cdktf.IResolvable;
}
export interface BedrockagentPromptVariantGenAiResourceAgent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#agent_identifier BedrockagentPrompt#agent_identifier}
    */
    readonly agentIdentifier: string;
}
export declare function bedrockagentPromptVariantGenAiResourceAgentToTerraform(struct?: BedrockagentPromptVariantGenAiResourceAgent | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantGenAiResourceAgentToHclTerraform(struct?: BedrockagentPromptVariantGenAiResourceAgent | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantGenAiResourceAgentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantGenAiResourceAgent | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantGenAiResourceAgent | cdktf.IResolvable | undefined);
    private _agentIdentifier?;
    get agentIdentifier(): string;
    set agentIdentifier(value: string);
    get agentIdentifierInput(): string | undefined;
}
export declare class BedrockagentPromptVariantGenAiResourceAgentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantGenAiResourceAgent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantGenAiResourceAgentOutputReference;
}
export interface BedrockagentPromptVariantGenAiResource {
    /**
    * agent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#agent BedrockagentPrompt#agent}
    */
    readonly agent?: BedrockagentPromptVariantGenAiResourceAgent[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantGenAiResourceToTerraform(struct?: BedrockagentPromptVariantGenAiResource | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantGenAiResourceToHclTerraform(struct?: BedrockagentPromptVariantGenAiResource | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantGenAiResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantGenAiResource | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantGenAiResource | cdktf.IResolvable | undefined);
    private _agent;
    get agent(): BedrockagentPromptVariantGenAiResourceAgentList;
    putAgent(value: BedrockagentPromptVariantGenAiResourceAgent[] | cdktf.IResolvable): void;
    resetAgent(): void;
    get agentInput(): cdktf.IResolvable | BedrockagentPromptVariantGenAiResourceAgent[] | undefined;
}
export declare class BedrockagentPromptVariantGenAiResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantGenAiResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantGenAiResourceOutputReference;
}
export interface BedrockagentPromptVariantInferenceConfigurationText {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#max_tokens BedrockagentPrompt#max_tokens}
    */
    readonly maxTokens?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#stop_sequences BedrockagentPrompt#stop_sequences}
    */
    readonly stopSequences?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#temperature BedrockagentPrompt#temperature}
    */
    readonly temperature?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#top_p BedrockagentPrompt#top_p}
    */
    readonly topP?: number;
}
export declare function bedrockagentPromptVariantInferenceConfigurationTextToTerraform(struct?: BedrockagentPromptVariantInferenceConfigurationText | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantInferenceConfigurationTextToHclTerraform(struct?: BedrockagentPromptVariantInferenceConfigurationText | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantInferenceConfigurationTextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantInferenceConfigurationText | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantInferenceConfigurationText | cdktf.IResolvable | undefined);
    private _maxTokens?;
    get maxTokens(): number;
    set maxTokens(value: number);
    resetMaxTokens(): void;
    get maxTokensInput(): number | undefined;
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
    private _topP?;
    get topP(): number;
    set topP(value: number);
    resetTopP(): void;
    get topPInput(): number | undefined;
}
export declare class BedrockagentPromptVariantInferenceConfigurationTextList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantInferenceConfigurationText[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantInferenceConfigurationTextOutputReference;
}
export interface BedrockagentPromptVariantInferenceConfiguration {
    /**
    * text block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}
    */
    readonly text?: BedrockagentPromptVariantInferenceConfigurationText[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantInferenceConfigurationToTerraform(struct?: BedrockagentPromptVariantInferenceConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantInferenceConfigurationToHclTerraform(struct?: BedrockagentPromptVariantInferenceConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantInferenceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantInferenceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantInferenceConfiguration | cdktf.IResolvable | undefined);
    private _text;
    get text(): BedrockagentPromptVariantInferenceConfigurationTextList;
    putText(value: BedrockagentPromptVariantInferenceConfigurationText[] | cdktf.IResolvable): void;
    resetText(): void;
    get textInput(): cdktf.IResolvable | BedrockagentPromptVariantInferenceConfigurationText[] | undefined;
}
export declare class BedrockagentPromptVariantInferenceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantInferenceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantInferenceConfigurationOutputReference;
}
export interface BedrockagentPromptVariantMetadata {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#key BedrockagentPrompt#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#value BedrockagentPrompt#value}
    */
    readonly value: string;
}
export declare function bedrockagentPromptVariantMetadataToTerraform(struct?: BedrockagentPromptVariantMetadata | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantMetadataToHclTerraform(struct?: BedrockagentPromptVariantMetadata | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantMetadata | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BedrockagentPromptVariantMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantMetadataOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatInputVariable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}
    */
    readonly name: string;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatInputVariableToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatInputVariable | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatInputVariableToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatInputVariable | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatInputVariable | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatInputVariable | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatInputVariableList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatInputVariable[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatInputVariableOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}
    */
    readonly type: string;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatMessageContent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}
    */
    readonly text?: string;
    /**
    * cache_point block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#cache_point BedrockagentPrompt#cache_point}
    */
    readonly cachePoint?: BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatMessageContentToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatMessageContent | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatMessageContentToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatMessageContent | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatMessageContent | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatMessageContent | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    resetText(): void;
    get textInput(): string | undefined;
    private _cachePoint;
    get cachePoint(): BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePointList;
    putCachePoint(value: BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint[] | cdktf.IResolvable): void;
    resetCachePoint(): void;
    get cachePointInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatMessageContentCachePoint[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatMessageContentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatMessageContent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatMessageContentOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#role BedrockagentPrompt#role}
    */
    readonly role: string;
    /**
    * content block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#content BedrockagentPrompt#content}
    */
    readonly content?: BedrockagentPromptVariantTemplateConfigurationChatMessageContent[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatMessageToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatMessage | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatMessageToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatMessage | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatMessage | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatMessage | cdktf.IResolvable | undefined);
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string | undefined;
    private _content;
    get content(): BedrockagentPromptVariantTemplateConfigurationChatMessageContentList;
    putContent(value: BedrockagentPromptVariantTemplateConfigurationChatMessageContent[] | cdktf.IResolvable): void;
    resetContent(): void;
    get contentInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatMessageContent[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatMessageOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}
    */
    readonly type: string;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatSystemCachePointToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatSystemCachePointToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatSystem {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}
    */
    readonly text?: string;
    /**
    * cache_point block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#cache_point BedrockagentPrompt#cache_point}
    */
    readonly cachePoint?: BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatSystemToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatSystem | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatSystemToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatSystem | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatSystem | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatSystem | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    resetText(): void;
    get textInput(): string | undefined;
    private _cachePoint;
    get cachePoint(): BedrockagentPromptVariantTemplateConfigurationChatSystemCachePointList;
    putCachePoint(value: BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint[] | cdktf.IResolvable): void;
    resetCachePoint(): void;
    get cachePointInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatSystemCachePoint[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatSystemList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatSystem[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatSystemOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}
    */
    readonly type: string;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#json BedrockagentPrompt#json}
    */
    readonly json?: string;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema | cdktf.IResolvable | undefined);
    private _json?;
    get json(): string;
    set json(value: string);
    resetJson(): void;
    get jsonInput(): string | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#description BedrockagentPrompt#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}
    */
    readonly name: string;
    /**
    * input_schema block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#input_schema BedrockagentPrompt#input_schema}
    */
    readonly inputSchema?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _inputSchema;
    get inputSchema(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchemaList;
    putInputSchema(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema[] | cdktf.IResolvable): void;
    resetInputSchema(): void;
    get inputSchemaInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecInputSchema[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool {
    /**
    * cache_point block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#cache_point BedrockagentPrompt#cache_point}
    */
    readonly cachePoint?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint[] | cdktf.IResolvable;
    /**
    * tool_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#tool_spec BedrockagentPrompt#tool_spec}
    */
    readonly toolSpec?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool | cdktf.IResolvable | undefined);
    private _cachePoint;
    get cachePoint(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePointList;
    putCachePoint(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint[] | cdktf.IResolvable): void;
    resetCachePoint(): void;
    get cachePointInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolCachePoint[] | undefined;
    private _toolSpec;
    get toolSpec(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpecList;
    putToolSpec(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec[] | cdktf.IResolvable): void;
    resetToolSpec(): void;
    get toolSpecInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolToolSpec[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny {
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny | cdktf.IResolvable | undefined);
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto {
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto | cdktf.IResolvable | undefined);
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}
    */
    readonly name: string;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice {
    /**
    * any block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#any BedrockagentPrompt#any}
    */
    readonly any?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny[] | cdktf.IResolvable;
    /**
    * auto block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#auto BedrockagentPrompt#auto}
    */
    readonly auto?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto[] | cdktf.IResolvable;
    /**
    * tool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#tool BedrockagentPrompt#tool}
    */
    readonly tool?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice | cdktf.IResolvable | undefined);
    private _any;
    get any(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAnyList;
    putAny(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny[] | cdktf.IResolvable): void;
    resetAny(): void;
    get anyInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAny[] | undefined;
    private _auto;
    get auto(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAutoList;
    putAuto(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto[] | cdktf.IResolvable): void;
    resetAuto(): void;
    get autoInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceAuto[] | undefined;
    private _tool;
    get tool(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceToolList;
    putTool(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool[] | cdktf.IResolvable): void;
    resetTool(): void;
    get toolInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceTool[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration {
    /**
    * tool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#tool BedrockagentPrompt#tool}
    */
    readonly tool?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool[] | cdktf.IResolvable;
    /**
    * tool_choice block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#tool_choice BedrockagentPrompt#tool_choice}
    */
    readonly toolChoice?: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration | cdktf.IResolvable | undefined);
    private _tool;
    get tool(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolList;
    putTool(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool[] | cdktf.IResolvable): void;
    resetTool(): void;
    get toolInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationTool[] | undefined;
    private _toolChoice;
    get toolChoice(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoiceList;
    putToolChoice(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice[] | cdktf.IResolvable): void;
    resetToolChoice(): void;
    get toolChoiceInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationToolChoice[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationChat {
    /**
    * input_variable block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#input_variable BedrockagentPrompt#input_variable}
    */
    readonly inputVariable?: BedrockagentPromptVariantTemplateConfigurationChatInputVariable[] | cdktf.IResolvable;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#message BedrockagentPrompt#message}
    */
    readonly message?: BedrockagentPromptVariantTemplateConfigurationChatMessage[] | cdktf.IResolvable;
    /**
    * system block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#system BedrockagentPrompt#system}
    */
    readonly systemAttribute?: BedrockagentPromptVariantTemplateConfigurationChatSystem[] | cdktf.IResolvable;
    /**
    * tool_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#tool_configuration BedrockagentPrompt#tool_configuration}
    */
    readonly toolConfiguration?: BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationChatToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChat | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationChatToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationChat | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationChatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationChat | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationChat | cdktf.IResolvable | undefined);
    private _inputVariable;
    get inputVariable(): BedrockagentPromptVariantTemplateConfigurationChatInputVariableList;
    putInputVariable(value: BedrockagentPromptVariantTemplateConfigurationChatInputVariable[] | cdktf.IResolvable): void;
    resetInputVariable(): void;
    get inputVariableInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatInputVariable[] | undefined;
    private _message;
    get message(): BedrockagentPromptVariantTemplateConfigurationChatMessageList;
    putMessage(value: BedrockagentPromptVariantTemplateConfigurationChatMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatMessage[] | undefined;
    private _system;
    get systemAttribute(): BedrockagentPromptVariantTemplateConfigurationChatSystemList;
    putSystemAttribute(value: BedrockagentPromptVariantTemplateConfigurationChatSystem[] | cdktf.IResolvable): void;
    resetSystemAttribute(): void;
    get systemAttributeInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatSystem[] | undefined;
    private _toolConfiguration;
    get toolConfiguration(): BedrockagentPromptVariantTemplateConfigurationChatToolConfigurationList;
    putToolConfiguration(value: BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration[] | cdktf.IResolvable): void;
    resetToolConfiguration(): void;
    get toolConfigurationInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChatToolConfiguration[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationChatList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationChat[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationChatOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationTextCachePoint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#type BedrockagentPrompt#type}
    */
    readonly type: string;
}
export declare function bedrockagentPromptVariantTemplateConfigurationTextCachePointToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationTextCachePoint | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationTextCachePointToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationTextCachePoint | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationTextCachePoint | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationTextCachePoint | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationTextCachePointList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationTextCachePoint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationTextCachePointOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationTextInputVariable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}
    */
    readonly name: string;
}
export declare function bedrockagentPromptVariantTemplateConfigurationTextInputVariableToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationTextInputVariable | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationTextInputVariableToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationTextInputVariable | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationTextInputVariable | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationTextInputVariable | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationTextInputVariableList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationTextInputVariable[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationTextInputVariableOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfigurationText {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}
    */
    readonly text: string;
    /**
    * cache_point block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#cache_point BedrockagentPrompt#cache_point}
    */
    readonly cachePoint?: BedrockagentPromptVariantTemplateConfigurationTextCachePoint[] | cdktf.IResolvable;
    /**
    * input_variable block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#input_variable BedrockagentPrompt#input_variable}
    */
    readonly inputVariable?: BedrockagentPromptVariantTemplateConfigurationTextInputVariable[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationTextToTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationText | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationTextToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfigurationText | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationTextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfigurationText | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfigurationText | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _cachePoint;
    get cachePoint(): BedrockagentPromptVariantTemplateConfigurationTextCachePointList;
    putCachePoint(value: BedrockagentPromptVariantTemplateConfigurationTextCachePoint[] | cdktf.IResolvable): void;
    resetCachePoint(): void;
    get cachePointInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationTextCachePoint[] | undefined;
    private _inputVariable;
    get inputVariable(): BedrockagentPromptVariantTemplateConfigurationTextInputVariableList;
    putInputVariable(value: BedrockagentPromptVariantTemplateConfigurationTextInputVariable[] | cdktf.IResolvable): void;
    resetInputVariable(): void;
    get inputVariableInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationTextInputVariable[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationTextList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfigurationText[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationTextOutputReference;
}
export interface BedrockagentPromptVariantTemplateConfiguration {
    /**
    * chat block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#chat BedrockagentPrompt#chat}
    */
    readonly chat?: BedrockagentPromptVariantTemplateConfigurationChat[] | cdktf.IResolvable;
    /**
    * text block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#text BedrockagentPrompt#text}
    */
    readonly text?: BedrockagentPromptVariantTemplateConfigurationText[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantTemplateConfigurationToTerraform(struct?: BedrockagentPromptVariantTemplateConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantTemplateConfigurationToHclTerraform(struct?: BedrockagentPromptVariantTemplateConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantTemplateConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariantTemplateConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariantTemplateConfiguration | cdktf.IResolvable | undefined);
    private _chat;
    get chat(): BedrockagentPromptVariantTemplateConfigurationChatList;
    putChat(value: BedrockagentPromptVariantTemplateConfigurationChat[] | cdktf.IResolvable): void;
    resetChat(): void;
    get chatInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationChat[] | undefined;
    private _text;
    get text(): BedrockagentPromptVariantTemplateConfigurationTextList;
    putText(value: BedrockagentPromptVariantTemplateConfigurationText[] | cdktf.IResolvable): void;
    resetText(): void;
    get textInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfigurationText[] | undefined;
}
export declare class BedrockagentPromptVariantTemplateConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariantTemplateConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantTemplateConfigurationOutputReference;
}
export interface BedrockagentPromptVariant {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#additional_model_request_fields BedrockagentPrompt#additional_model_request_fields}
    */
    readonly additionalModelRequestFields?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#model_id BedrockagentPrompt#model_id}
    */
    readonly modelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#name BedrockagentPrompt#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#template_type BedrockagentPrompt#template_type}
    */
    readonly templateType: string;
    /**
    * gen_ai_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#gen_ai_resource BedrockagentPrompt#gen_ai_resource}
    */
    readonly genAiResource?: BedrockagentPromptVariantGenAiResource[] | cdktf.IResolvable;
    /**
    * inference_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#inference_configuration BedrockagentPrompt#inference_configuration}
    */
    readonly inferenceConfiguration?: BedrockagentPromptVariantInferenceConfiguration[] | cdktf.IResolvable;
    /**
    * metadata block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#metadata BedrockagentPrompt#metadata}
    */
    readonly metadata?: BedrockagentPromptVariantMetadata[] | cdktf.IResolvable;
    /**
    * template_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#template_configuration BedrockagentPrompt#template_configuration}
    */
    readonly templateConfiguration?: BedrockagentPromptVariantTemplateConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentPromptVariantToTerraform(struct?: BedrockagentPromptVariant | cdktf.IResolvable): any;
export declare function bedrockagentPromptVariantToHclTerraform(struct?: BedrockagentPromptVariant | cdktf.IResolvable): any;
export declare class BedrockagentPromptVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentPromptVariant | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentPromptVariant | cdktf.IResolvable | undefined);
    private _additionalModelRequestFields?;
    get additionalModelRequestFields(): string;
    set additionalModelRequestFields(value: string);
    resetAdditionalModelRequestFields(): void;
    get additionalModelRequestFieldsInput(): string | undefined;
    private _modelId?;
    get modelId(): string;
    set modelId(value: string);
    resetModelId(): void;
    get modelIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _templateType?;
    get templateType(): string;
    set templateType(value: string);
    get templateTypeInput(): string | undefined;
    private _genAiResource;
    get genAiResource(): BedrockagentPromptVariantGenAiResourceList;
    putGenAiResource(value: BedrockagentPromptVariantGenAiResource[] | cdktf.IResolvable): void;
    resetGenAiResource(): void;
    get genAiResourceInput(): cdktf.IResolvable | BedrockagentPromptVariantGenAiResource[] | undefined;
    private _inferenceConfiguration;
    get inferenceConfiguration(): BedrockagentPromptVariantInferenceConfigurationList;
    putInferenceConfiguration(value: BedrockagentPromptVariantInferenceConfiguration[] | cdktf.IResolvable): void;
    resetInferenceConfiguration(): void;
    get inferenceConfigurationInput(): cdktf.IResolvable | BedrockagentPromptVariantInferenceConfiguration[] | undefined;
    private _metadata;
    get metadata(): BedrockagentPromptVariantMetadataList;
    putMetadata(value: BedrockagentPromptVariantMetadata[] | cdktf.IResolvable): void;
    resetMetadata(): void;
    get metadataInput(): cdktf.IResolvable | BedrockagentPromptVariantMetadata[] | undefined;
    private _templateConfiguration;
    get templateConfiguration(): BedrockagentPromptVariantTemplateConfigurationList;
    putTemplateConfiguration(value: BedrockagentPromptVariantTemplateConfiguration[] | cdktf.IResolvable): void;
    resetTemplateConfiguration(): void;
    get templateConfigurationInput(): cdktf.IResolvable | BedrockagentPromptVariantTemplateConfiguration[] | undefined;
}
export declare class BedrockagentPromptVariantList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentPromptVariant[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentPromptVariantOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt aws_bedrockagent_prompt}
*/
export declare class BedrockagentPrompt extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrockagent_prompt";
    /**
    * Generates CDKTF code for importing a BedrockagentPrompt resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockagentPrompt to import
    * @param importFromId The id of the existing BedrockagentPrompt that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockagentPrompt to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_prompt aws_bedrockagent_prompt} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockagentPromptConfig
    */
    constructor(scope: Construct, id: string, config: BedrockagentPromptConfig);
    get arn(): string;
    get createdAt(): string;
    private _customerEncryptionKeyArn?;
    get customerEncryptionKeyArn(): string;
    set customerEncryptionKeyArn(value: string);
    resetCustomerEncryptionKeyArn(): void;
    get customerEncryptionKeyArnInput(): string | undefined;
    private _defaultVariant?;
    get defaultVariant(): string;
    set defaultVariant(value: string);
    resetDefaultVariant(): void;
    get defaultVariantInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    get updatedAt(): string;
    get version(): string;
    private _variant;
    get variant(): BedrockagentPromptVariantList;
    putVariant(value: BedrockagentPromptVariant[] | cdktf.IResolvable): void;
    resetVariant(): void;
    get variantInput(): cdktf.IResolvable | BedrockagentPromptVariant[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
