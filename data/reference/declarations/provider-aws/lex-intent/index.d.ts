/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LexIntentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#create_version LexIntent#create_version}
    */
    readonly createVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#description LexIntent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#id LexIntent#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#name LexIntent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}
    */
    readonly parentIntentSignature?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#sample_utterances LexIntent#sample_utterances}
    */
    readonly sampleUtterances?: string[];
    /**
    * conclusion_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#conclusion_statement LexIntent#conclusion_statement}
    */
    readonly conclusionStatement?: LexIntentConclusionStatement;
    /**
    * confirmation_prompt block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#confirmation_prompt LexIntent#confirmation_prompt}
    */
    readonly confirmationPrompt?: LexIntentConfirmationPrompt;
    /**
    * dialog_code_hook block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#dialog_code_hook LexIntent#dialog_code_hook}
    */
    readonly dialogCodeHook?: LexIntentDialogCodeHook;
    /**
    * follow_up_prompt block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#follow_up_prompt LexIntent#follow_up_prompt}
    */
    readonly followUpPrompt?: LexIntentFollowUpPrompt;
    /**
    * fulfillment_activity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#fulfillment_activity LexIntent#fulfillment_activity}
    */
    readonly fulfillmentActivity: LexIntentFulfillmentActivity;
    /**
    * rejection_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#rejection_statement LexIntent#rejection_statement}
    */
    readonly rejectionStatement?: LexIntentRejectionStatement;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#slot LexIntent#slot}
    */
    readonly slot?: LexIntentSlot[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#timeouts LexIntent#timeouts}
    */
    readonly timeouts?: LexIntentTimeouts;
}
export interface LexIntentConclusionStatementMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentConclusionStatementMessageToTerraform(struct?: LexIntentConclusionStatementMessage | cdktf.IResolvable): any;
export declare function lexIntentConclusionStatementMessageToHclTerraform(struct?: LexIntentConclusionStatementMessage | cdktf.IResolvable): any;
export declare class LexIntentConclusionStatementMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexIntentConclusionStatementMessage | cdktf.IResolvable | undefined;
    set internalValue(value: LexIntentConclusionStatementMessage | cdktf.IResolvable | undefined);
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
export declare class LexIntentConclusionStatementMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexIntentConclusionStatementMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexIntentConclusionStatementMessageOutputReference;
}
export interface LexIntentConclusionStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#message LexIntent#message}
    */
    readonly message: LexIntentConclusionStatementMessage[] | cdktf.IResolvable;
}
export declare function lexIntentConclusionStatementToTerraform(struct?: LexIntentConclusionStatementOutputReference | LexIntentConclusionStatement): any;
export declare function lexIntentConclusionStatementToHclTerraform(struct?: LexIntentConclusionStatementOutputReference | LexIntentConclusionStatement): any;
export declare class LexIntentConclusionStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentConclusionStatement | undefined;
    set internalValue(value: LexIntentConclusionStatement | undefined);
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string | undefined;
    private _message;
    get message(): LexIntentConclusionStatementMessageList;
    putMessage(value: LexIntentConclusionStatementMessage[] | cdktf.IResolvable): void;
    get messageInput(): cdktf.IResolvable | LexIntentConclusionStatementMessage[] | undefined;
}
export interface LexIntentConfirmationPromptMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentConfirmationPromptMessageToTerraform(struct?: LexIntentConfirmationPromptMessage | cdktf.IResolvable): any;
export declare function lexIntentConfirmationPromptMessageToHclTerraform(struct?: LexIntentConfirmationPromptMessage | cdktf.IResolvable): any;
export declare class LexIntentConfirmationPromptMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexIntentConfirmationPromptMessage | cdktf.IResolvable | undefined;
    set internalValue(value: LexIntentConfirmationPromptMessage | cdktf.IResolvable | undefined);
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
export declare class LexIntentConfirmationPromptMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexIntentConfirmationPromptMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexIntentConfirmationPromptMessageOutputReference;
}
export interface LexIntentConfirmationPrompt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#max_attempts LexIntent#max_attempts}
    */
    readonly maxAttempts: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#message LexIntent#message}
    */
    readonly message: LexIntentConfirmationPromptMessage[] | cdktf.IResolvable;
}
export declare function lexIntentConfirmationPromptToTerraform(struct?: LexIntentConfirmationPromptOutputReference | LexIntentConfirmationPrompt): any;
export declare function lexIntentConfirmationPromptToHclTerraform(struct?: LexIntentConfirmationPromptOutputReference | LexIntentConfirmationPrompt): any;
export declare class LexIntentConfirmationPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentConfirmationPrompt | undefined;
    set internalValue(value: LexIntentConfirmationPrompt | undefined);
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
    get message(): LexIntentConfirmationPromptMessageList;
    putMessage(value: LexIntentConfirmationPromptMessage[] | cdktf.IResolvable): void;
    get messageInput(): cdktf.IResolvable | LexIntentConfirmationPromptMessage[] | undefined;
}
export interface LexIntentDialogCodeHook {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#message_version LexIntent#message_version}
    */
    readonly messageVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#uri LexIntent#uri}
    */
    readonly uri: string;
}
export declare function lexIntentDialogCodeHookToTerraform(struct?: LexIntentDialogCodeHookOutputReference | LexIntentDialogCodeHook): any;
export declare function lexIntentDialogCodeHookToHclTerraform(struct?: LexIntentDialogCodeHookOutputReference | LexIntentDialogCodeHook): any;
export declare class LexIntentDialogCodeHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentDialogCodeHook | undefined;
    set internalValue(value: LexIntentDialogCodeHook | undefined);
    private _messageVersion?;
    get messageVersion(): string;
    set messageVersion(value: string);
    get messageVersionInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
}
export interface LexIntentFollowUpPromptPromptMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentFollowUpPromptPromptMessageToTerraform(struct?: LexIntentFollowUpPromptPromptMessage | cdktf.IResolvable): any;
export declare function lexIntentFollowUpPromptPromptMessageToHclTerraform(struct?: LexIntentFollowUpPromptPromptMessage | cdktf.IResolvable): any;
export declare class LexIntentFollowUpPromptPromptMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexIntentFollowUpPromptPromptMessage | cdktf.IResolvable | undefined;
    set internalValue(value: LexIntentFollowUpPromptPromptMessage | cdktf.IResolvable | undefined);
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
export declare class LexIntentFollowUpPromptPromptMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexIntentFollowUpPromptPromptMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexIntentFollowUpPromptPromptMessageOutputReference;
}
export interface LexIntentFollowUpPromptPrompt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#max_attempts LexIntent#max_attempts}
    */
    readonly maxAttempts: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#message LexIntent#message}
    */
    readonly message: LexIntentFollowUpPromptPromptMessage[] | cdktf.IResolvable;
}
export declare function lexIntentFollowUpPromptPromptToTerraform(struct?: LexIntentFollowUpPromptPromptOutputReference | LexIntentFollowUpPromptPrompt): any;
export declare function lexIntentFollowUpPromptPromptToHclTerraform(struct?: LexIntentFollowUpPromptPromptOutputReference | LexIntentFollowUpPromptPrompt): any;
export declare class LexIntentFollowUpPromptPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentFollowUpPromptPrompt | undefined;
    set internalValue(value: LexIntentFollowUpPromptPrompt | undefined);
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
    get message(): LexIntentFollowUpPromptPromptMessageList;
    putMessage(value: LexIntentFollowUpPromptPromptMessage[] | cdktf.IResolvable): void;
    get messageInput(): cdktf.IResolvable | LexIntentFollowUpPromptPromptMessage[] | undefined;
}
export interface LexIntentFollowUpPromptRejectionStatementMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentFollowUpPromptRejectionStatementMessageToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementMessage | cdktf.IResolvable): any;
export declare function lexIntentFollowUpPromptRejectionStatementMessageToHclTerraform(struct?: LexIntentFollowUpPromptRejectionStatementMessage | cdktf.IResolvable): any;
export declare class LexIntentFollowUpPromptRejectionStatementMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexIntentFollowUpPromptRejectionStatementMessage | cdktf.IResolvable | undefined;
    set internalValue(value: LexIntentFollowUpPromptRejectionStatementMessage | cdktf.IResolvable | undefined);
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
export declare class LexIntentFollowUpPromptRejectionStatementMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexIntentFollowUpPromptRejectionStatementMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexIntentFollowUpPromptRejectionStatementMessageOutputReference;
}
export interface LexIntentFollowUpPromptRejectionStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#message LexIntent#message}
    */
    readonly message: LexIntentFollowUpPromptRejectionStatementMessage[] | cdktf.IResolvable;
}
export declare function lexIntentFollowUpPromptRejectionStatementToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementOutputReference | LexIntentFollowUpPromptRejectionStatement): any;
export declare function lexIntentFollowUpPromptRejectionStatementToHclTerraform(struct?: LexIntentFollowUpPromptRejectionStatementOutputReference | LexIntentFollowUpPromptRejectionStatement): any;
export declare class LexIntentFollowUpPromptRejectionStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentFollowUpPromptRejectionStatement | undefined;
    set internalValue(value: LexIntentFollowUpPromptRejectionStatement | undefined);
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string | undefined;
    private _message;
    get message(): LexIntentFollowUpPromptRejectionStatementMessageList;
    putMessage(value: LexIntentFollowUpPromptRejectionStatementMessage[] | cdktf.IResolvable): void;
    get messageInput(): cdktf.IResolvable | LexIntentFollowUpPromptRejectionStatementMessage[] | undefined;
}
export interface LexIntentFollowUpPrompt {
    /**
    * prompt block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#prompt LexIntent#prompt}
    */
    readonly prompt: LexIntentFollowUpPromptPrompt;
    /**
    * rejection_statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#rejection_statement LexIntent#rejection_statement}
    */
    readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatement;
}
export declare function lexIntentFollowUpPromptToTerraform(struct?: LexIntentFollowUpPromptOutputReference | LexIntentFollowUpPrompt): any;
export declare function lexIntentFollowUpPromptToHclTerraform(struct?: LexIntentFollowUpPromptOutputReference | LexIntentFollowUpPrompt): any;
export declare class LexIntentFollowUpPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentFollowUpPrompt | undefined;
    set internalValue(value: LexIntentFollowUpPrompt | undefined);
    private _prompt;
    get prompt(): LexIntentFollowUpPromptPromptOutputReference;
    putPrompt(value: LexIntentFollowUpPromptPrompt): void;
    get promptInput(): LexIntentFollowUpPromptPrompt | undefined;
    private _rejectionStatement;
    get rejectionStatement(): LexIntentFollowUpPromptRejectionStatementOutputReference;
    putRejectionStatement(value: LexIntentFollowUpPromptRejectionStatement): void;
    get rejectionStatementInput(): LexIntentFollowUpPromptRejectionStatement | undefined;
}
export interface LexIntentFulfillmentActivityCodeHook {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#message_version LexIntent#message_version}
    */
    readonly messageVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#uri LexIntent#uri}
    */
    readonly uri: string;
}
export declare function lexIntentFulfillmentActivityCodeHookToTerraform(struct?: LexIntentFulfillmentActivityCodeHookOutputReference | LexIntentFulfillmentActivityCodeHook): any;
export declare function lexIntentFulfillmentActivityCodeHookToHclTerraform(struct?: LexIntentFulfillmentActivityCodeHookOutputReference | LexIntentFulfillmentActivityCodeHook): any;
export declare class LexIntentFulfillmentActivityCodeHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentFulfillmentActivityCodeHook | undefined;
    set internalValue(value: LexIntentFulfillmentActivityCodeHook | undefined);
    private _messageVersion?;
    get messageVersion(): string;
    set messageVersion(value: string);
    get messageVersionInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
}
export interface LexIntentFulfillmentActivity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#type LexIntent#type}
    */
    readonly type: string;
    /**
    * code_hook block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#code_hook LexIntent#code_hook}
    */
    readonly codeHook?: LexIntentFulfillmentActivityCodeHook;
}
export declare function lexIntentFulfillmentActivityToTerraform(struct?: LexIntentFulfillmentActivityOutputReference | LexIntentFulfillmentActivity): any;
export declare function lexIntentFulfillmentActivityToHclTerraform(struct?: LexIntentFulfillmentActivityOutputReference | LexIntentFulfillmentActivity): any;
export declare class LexIntentFulfillmentActivityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentFulfillmentActivity | undefined;
    set internalValue(value: LexIntentFulfillmentActivity | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _codeHook;
    get codeHook(): LexIntentFulfillmentActivityCodeHookOutputReference;
    putCodeHook(value: LexIntentFulfillmentActivityCodeHook): void;
    resetCodeHook(): void;
    get codeHookInput(): LexIntentFulfillmentActivityCodeHook | undefined;
}
export interface LexIntentRejectionStatementMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentRejectionStatementMessageToTerraform(struct?: LexIntentRejectionStatementMessage | cdktf.IResolvable): any;
export declare function lexIntentRejectionStatementMessageToHclTerraform(struct?: LexIntentRejectionStatementMessage | cdktf.IResolvable): any;
export declare class LexIntentRejectionStatementMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexIntentRejectionStatementMessage | cdktf.IResolvable | undefined;
    set internalValue(value: LexIntentRejectionStatementMessage | cdktf.IResolvable | undefined);
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
export declare class LexIntentRejectionStatementMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexIntentRejectionStatementMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexIntentRejectionStatementMessageOutputReference;
}
export interface LexIntentRejectionStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#message LexIntent#message}
    */
    readonly message: LexIntentRejectionStatementMessage[] | cdktf.IResolvable;
}
export declare function lexIntentRejectionStatementToTerraform(struct?: LexIntentRejectionStatementOutputReference | LexIntentRejectionStatement): any;
export declare function lexIntentRejectionStatementToHclTerraform(struct?: LexIntentRejectionStatementOutputReference | LexIntentRejectionStatement): any;
export declare class LexIntentRejectionStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentRejectionStatement | undefined;
    set internalValue(value: LexIntentRejectionStatement | undefined);
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string | undefined;
    private _message;
    get message(): LexIntentRejectionStatementMessageList;
    putMessage(value: LexIntentRejectionStatementMessage[] | cdktf.IResolvable): void;
    get messageInput(): cdktf.IResolvable | LexIntentRejectionStatementMessage[] | undefined;
}
export interface LexIntentSlotValueElicitationPromptMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentSlotValueElicitationPromptMessageToTerraform(struct?: LexIntentSlotValueElicitationPromptMessage | cdktf.IResolvable): any;
export declare function lexIntentSlotValueElicitationPromptMessageToHclTerraform(struct?: LexIntentSlotValueElicitationPromptMessage | cdktf.IResolvable): any;
export declare class LexIntentSlotValueElicitationPromptMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexIntentSlotValueElicitationPromptMessage | cdktf.IResolvable | undefined;
    set internalValue(value: LexIntentSlotValueElicitationPromptMessage | cdktf.IResolvable | undefined);
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
export declare class LexIntentSlotValueElicitationPromptMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexIntentSlotValueElicitationPromptMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexIntentSlotValueElicitationPromptMessageOutputReference;
}
export interface LexIntentSlotValueElicitationPrompt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#max_attempts LexIntent#max_attempts}
    */
    readonly maxAttempts: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#message LexIntent#message}
    */
    readonly message: LexIntentSlotValueElicitationPromptMessage[] | cdktf.IResolvable;
}
export declare function lexIntentSlotValueElicitationPromptToTerraform(struct?: LexIntentSlotValueElicitationPromptOutputReference | LexIntentSlotValueElicitationPrompt): any;
export declare function lexIntentSlotValueElicitationPromptToHclTerraform(struct?: LexIntentSlotValueElicitationPromptOutputReference | LexIntentSlotValueElicitationPrompt): any;
export declare class LexIntentSlotValueElicitationPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentSlotValueElicitationPrompt | undefined;
    set internalValue(value: LexIntentSlotValueElicitationPrompt | undefined);
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
    get message(): LexIntentSlotValueElicitationPromptMessageList;
    putMessage(value: LexIntentSlotValueElicitationPromptMessage[] | cdktf.IResolvable): void;
    get messageInput(): cdktf.IResolvable | LexIntentSlotValueElicitationPromptMessage[] | undefined;
}
export interface LexIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#description LexIntent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#name LexIntent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#priority LexIntent#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#sample_utterances LexIntent#sample_utterances}
    */
    readonly sampleUtterances?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#slot_constraint LexIntent#slot_constraint}
    */
    readonly slotConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#slot_type LexIntent#slot_type}
    */
    readonly slotType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#slot_type_version LexIntent#slot_type_version}
    */
    readonly slotTypeVersion?: string;
    /**
    * value_elicitation_prompt block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#value_elicitation_prompt LexIntent#value_elicitation_prompt}
    */
    readonly valueElicitationPrompt?: LexIntentSlotValueElicitationPrompt;
}
export declare function lexIntentSlotToTerraform(struct?: LexIntentSlot | cdktf.IResolvable): any;
export declare function lexIntentSlotToHclTerraform(struct?: LexIntentSlot | cdktf.IResolvable): any;
export declare class LexIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: LexIntentSlot | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string | undefined;
    private _sampleUtterances?;
    get sampleUtterances(): string[];
    set sampleUtterances(value: string[]);
    resetSampleUtterances(): void;
    get sampleUtterancesInput(): string[] | undefined;
    private _slotConstraint?;
    get slotConstraint(): string;
    set slotConstraint(value: string);
    get slotConstraintInput(): string | undefined;
    private _slotType?;
    get slotType(): string;
    set slotType(value: string);
    get slotTypeInput(): string | undefined;
    private _slotTypeVersion?;
    get slotTypeVersion(): string;
    set slotTypeVersion(value: string);
    resetSlotTypeVersion(): void;
    get slotTypeVersionInput(): string | undefined;
    private _valueElicitationPrompt;
    get valueElicitationPrompt(): LexIntentSlotValueElicitationPromptOutputReference;
    putValueElicitationPrompt(value: LexIntentSlotValueElicitationPrompt): void;
    resetValueElicitationPrompt(): void;
    get valueElicitationPromptInput(): LexIntentSlotValueElicitationPrompt | undefined;
}
export declare class LexIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexIntentSlotOutputReference;
}
export interface LexIntentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#create LexIntent#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#delete LexIntent#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#update LexIntent#update}
    */
    readonly update?: string;
}
export declare function lexIntentTimeoutsToTerraform(struct?: LexIntentTimeouts | cdktf.IResolvable): any;
export declare function lexIntentTimeoutsToHclTerraform(struct?: LexIntentTimeouts | cdktf.IResolvable): any;
export declare class LexIntentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexIntentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LexIntentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent aws_lex_intent}
*/
export declare class LexIntent extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lex_intent";
    /**
    * Generates CDKTF code for importing a LexIntent resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LexIntent to import
    * @param importFromId The id of the existing LexIntent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LexIntent to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_intent aws_lex_intent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexIntentConfig
    */
    constructor(scope: Construct, id: string, config: LexIntentConfig);
    get arn(): string;
    get checksum(): string;
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
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parentIntentSignature?;
    get parentIntentSignature(): string;
    set parentIntentSignature(value: string);
    resetParentIntentSignature(): void;
    get parentIntentSignatureInput(): string | undefined;
    private _sampleUtterances?;
    get sampleUtterances(): string[];
    set sampleUtterances(value: string[]);
    resetSampleUtterances(): void;
    get sampleUtterancesInput(): string[] | undefined;
    get version(): string;
    private _conclusionStatement;
    get conclusionStatement(): LexIntentConclusionStatementOutputReference;
    putConclusionStatement(value: LexIntentConclusionStatement): void;
    resetConclusionStatement(): void;
    get conclusionStatementInput(): LexIntentConclusionStatement | undefined;
    private _confirmationPrompt;
    get confirmationPrompt(): LexIntentConfirmationPromptOutputReference;
    putConfirmationPrompt(value: LexIntentConfirmationPrompt): void;
    resetConfirmationPrompt(): void;
    get confirmationPromptInput(): LexIntentConfirmationPrompt | undefined;
    private _dialogCodeHook;
    get dialogCodeHook(): LexIntentDialogCodeHookOutputReference;
    putDialogCodeHook(value: LexIntentDialogCodeHook): void;
    resetDialogCodeHook(): void;
    get dialogCodeHookInput(): LexIntentDialogCodeHook | undefined;
    private _followUpPrompt;
    get followUpPrompt(): LexIntentFollowUpPromptOutputReference;
    putFollowUpPrompt(value: LexIntentFollowUpPrompt): void;
    resetFollowUpPrompt(): void;
    get followUpPromptInput(): LexIntentFollowUpPrompt | undefined;
    private _fulfillmentActivity;
    get fulfillmentActivity(): LexIntentFulfillmentActivityOutputReference;
    putFulfillmentActivity(value: LexIntentFulfillmentActivity): void;
    get fulfillmentActivityInput(): LexIntentFulfillmentActivity | undefined;
    private _rejectionStatement;
    get rejectionStatement(): LexIntentRejectionStatementOutputReference;
    putRejectionStatement(value: LexIntentRejectionStatement): void;
    resetRejectionStatement(): void;
    get rejectionStatementInput(): LexIntentRejectionStatement | undefined;
    private _slot;
    get slot(): LexIntentSlotList;
    putSlot(value: LexIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | LexIntentSlot[] | undefined;
    private _timeouts;
    get timeouts(): LexIntentTimeoutsOutputReference;
    putTimeouts(value: LexIntentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LexIntentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
