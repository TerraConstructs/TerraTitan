/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LexBotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#child_directed LexBot#child_directed}
    */
    readonly childDirected: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#create_version LexBot#create_version}
    */
    readonly createVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#description LexBot#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#detect_sentiment LexBot#detect_sentiment}
    */
    readonly detectSentiment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#enable_model_improvements LexBot#enable_model_improvements}
    */
    readonly enableModelImprovements?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#id LexBot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}
    */
    readonly idleSessionTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#locale LexBot#locale}
    */
    readonly locale?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#name LexBot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}
    */
    readonly nluIntentConfidenceThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#process_behavior LexBot#process_behavior}
    */
    readonly processBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#voice_id LexBot#voice_id}
    */
    readonly voiceId?: string;
    /**
    * abort_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#abort_statement LexBot#abort_statement}
    */
    readonly abortStatement: LexBotAbortStatement;
    /**
    * clarification_prompt block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#clarification_prompt LexBot#clarification_prompt}
    */
    readonly clarificationPrompt?: LexBotClarificationPrompt;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#intent LexBot#intent}
    */
    readonly intent: LexBotIntent[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#timeouts LexBot#timeouts}
    */
    readonly timeouts?: LexBotTimeouts;
}
export interface LexBotAbortStatementMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#content LexBot#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#content_type LexBot#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#group_number LexBot#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexBotAbortStatementMessageToTerraform(struct?: LexBotAbortStatementMessage | cdktf.IResolvable): any;
export declare function lexBotAbortStatementMessageToHclTerraform(struct?: LexBotAbortStatementMessage | cdktf.IResolvable): any;
export declare class LexBotAbortStatementMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexBotAbortStatementMessage | cdktf.IResolvable | undefined;
    set internalValue(value: LexBotAbortStatementMessage | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string | undefined;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string | undefined;
    private _groupNumber?;
    get groupNumber(): number;
    set groupNumber(value: number);
    resetGroupNumber(): void;
    get groupNumberInput(): number | undefined;
}
export declare class LexBotAbortStatementMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexBotAbortStatementMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexBotAbortStatementMessageOutputReference;
}
export interface LexBotAbortStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#response_card LexBot#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#message LexBot#message}
    */
    readonly message: LexBotAbortStatementMessage[] | cdktf.IResolvable;
}
export declare function lexBotAbortStatementToTerraform(struct?: LexBotAbortStatementOutputReference | LexBotAbortStatement): any;
export declare function lexBotAbortStatementToHclTerraform(struct?: LexBotAbortStatementOutputReference | LexBotAbortStatement): any;
export declare class LexBotAbortStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexBotAbortStatement | undefined;
    set internalValue(value: LexBotAbortStatement | undefined);
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string | undefined;
    private _message;
    get message(): LexBotAbortStatementMessageList;
    putMessage(value: LexBotAbortStatementMessage[] | cdktf.IResolvable): void;
    get messageInput(): cdktf.IResolvable | LexBotAbortStatementMessage[] | undefined;
}
export interface LexBotClarificationPromptMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#content LexBot#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#content_type LexBot#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#group_number LexBot#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexBotClarificationPromptMessageToTerraform(struct?: LexBotClarificationPromptMessage | cdktf.IResolvable): any;
export declare function lexBotClarificationPromptMessageToHclTerraform(struct?: LexBotClarificationPromptMessage | cdktf.IResolvable): any;
export declare class LexBotClarificationPromptMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexBotClarificationPromptMessage | cdktf.IResolvable | undefined;
    set internalValue(value: LexBotClarificationPromptMessage | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string | undefined;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string | undefined;
    private _groupNumber?;
    get groupNumber(): number;
    set groupNumber(value: number);
    resetGroupNumber(): void;
    get groupNumberInput(): number | undefined;
}
export declare class LexBotClarificationPromptMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexBotClarificationPromptMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexBotClarificationPromptMessageOutputReference;
}
export interface LexBotClarificationPrompt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#max_attempts LexBot#max_attempts}
    */
    readonly maxAttempts: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#response_card LexBot#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#message LexBot#message}
    */
    readonly message: LexBotClarificationPromptMessage[] | cdktf.IResolvable;
}
export declare function lexBotClarificationPromptToTerraform(struct?: LexBotClarificationPromptOutputReference | LexBotClarificationPrompt): any;
export declare function lexBotClarificationPromptToHclTerraform(struct?: LexBotClarificationPromptOutputReference | LexBotClarificationPrompt): any;
export declare class LexBotClarificationPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexBotClarificationPrompt | undefined;
    set internalValue(value: LexBotClarificationPrompt | undefined);
    private _maxAttempts?;
    get maxAttempts(): number;
    set maxAttempts(value: number);
    get maxAttemptsInput(): number | undefined;
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string | undefined;
    private _message;
    get message(): LexBotClarificationPromptMessageList;
    putMessage(value: LexBotClarificationPromptMessage[] | cdktf.IResolvable): void;
    get messageInput(): cdktf.IResolvable | LexBotClarificationPromptMessage[] | undefined;
}
export interface LexBotIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#intent_name LexBot#intent_name}
    */
    readonly intentName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#intent_version LexBot#intent_version}
    */
    readonly intentVersion: string;
}
export declare function lexBotIntentToTerraform(struct?: LexBotIntent | cdktf.IResolvable): any;
export declare function lexBotIntentToHclTerraform(struct?: LexBotIntent | cdktf.IResolvable): any;
export declare class LexBotIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexBotIntent | cdktf.IResolvable | undefined;
    set internalValue(value: LexBotIntent | cdktf.IResolvable | undefined);
    private _intentName?;
    get intentName(): string;
    set intentName(value: string);
    get intentNameInput(): string | undefined;
    private _intentVersion?;
    get intentVersion(): string;
    set intentVersion(value: string);
    get intentVersionInput(): string | undefined;
}
export declare class LexBotIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexBotIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexBotIntentOutputReference;
}
export interface LexBotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#create LexBot#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#delete LexBot#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#update LexBot#update}
    */
    readonly update?: string;
}
export declare function lexBotTimeoutsToTerraform(struct?: LexBotTimeouts | cdktf.IResolvable): any;
export declare function lexBotTimeoutsToHclTerraform(struct?: LexBotTimeouts | cdktf.IResolvable): any;
export declare class LexBotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexBotTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LexBotTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot aws_lex_bot}
*/
export declare class LexBot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lex_bot";
    /**
    * Generates CDKTF code for importing a LexBot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LexBot to import
    * @param importFromId The id of the existing LexBot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LexBot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot aws_lex_bot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexBotConfig
    */
    constructor(scope: Construct, id: string, config: LexBotConfig);
    get arn(): string;
    get checksum(): string;
    private _childDirected?;
    get childDirected(): boolean | cdktf.IResolvable;
    set childDirected(value: boolean | cdktf.IResolvable);
    get childDirectedInput(): boolean | cdktf.IResolvable | undefined;
    private _createVersion?;
    get createVersion(): boolean | cdktf.IResolvable;
    set createVersion(value: boolean | cdktf.IResolvable);
    resetCreateVersion(): void;
    get createVersionInput(): boolean | cdktf.IResolvable | undefined;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _detectSentiment?;
    get detectSentiment(): boolean | cdktf.IResolvable;
    set detectSentiment(value: boolean | cdktf.IResolvable);
    resetDetectSentiment(): void;
    get detectSentimentInput(): boolean | cdktf.IResolvable | undefined;
    private _enableModelImprovements?;
    get enableModelImprovements(): boolean | cdktf.IResolvable;
    set enableModelImprovements(value: boolean | cdktf.IResolvable);
    resetEnableModelImprovements(): void;
    get enableModelImprovementsInput(): boolean | cdktf.IResolvable | undefined;
    get failureReason(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _idleSessionTtlInSeconds?;
    get idleSessionTtlInSeconds(): number;
    set idleSessionTtlInSeconds(value: number);
    resetIdleSessionTtlInSeconds(): void;
    get idleSessionTtlInSecondsInput(): number | undefined;
    get lastUpdatedDate(): string;
    private _locale?;
    get locale(): string;
    set locale(value: string);
    resetLocale(): void;
    get localeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _nluIntentConfidenceThreshold?;
    get nluIntentConfidenceThreshold(): number;
    set nluIntentConfidenceThreshold(value: number);
    resetNluIntentConfidenceThreshold(): void;
    get nluIntentConfidenceThresholdInput(): number | undefined;
    private _processBehavior?;
    get processBehavior(): string;
    set processBehavior(value: string);
    resetProcessBehavior(): void;
    get processBehaviorInput(): string | undefined;
    get status(): string;
    get version(): string;
    private _voiceId?;
    get voiceId(): string;
    set voiceId(value: string);
    resetVoiceId(): void;
    get voiceIdInput(): string | undefined;
    private _abortStatement;
    get abortStatement(): LexBotAbortStatementOutputReference;
    putAbortStatement(value: LexBotAbortStatement): void;
    get abortStatementInput(): LexBotAbortStatement | undefined;
    private _clarificationPrompt;
    get clarificationPrompt(): LexBotClarificationPromptOutputReference;
    putClarificationPrompt(value: LexBotClarificationPrompt): void;
    resetClarificationPrompt(): void;
    get clarificationPromptInput(): LexBotClarificationPrompt | undefined;
    private _intent;
    get intent(): LexBotIntentList;
    putIntent(value: LexBotIntent[] | cdktf.IResolvable): void;
    get intentInput(): cdktf.IResolvable | LexBotIntent[] | undefined;
    private _timeouts;
    get timeouts(): LexBotTimeoutsOutputReference;
    putTimeouts(value: LexBotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LexBotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
