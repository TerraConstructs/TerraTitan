/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import * as cdktf from 'cdktf';
import { Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage, Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageList } from './structs800';
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingConfirmationResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingConfirmationResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingConfirmationResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#expression_string Lexv2ModelsIntent#expression_string}
    */
    readonly expressionString: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition | cdktf.IResolvable | undefined);
    private _expressionString?;
    get expressionString(): string;
    set expressionString(value: string);
    get expressionStringInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name: string;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#condition Lexv2ModelsIntent#condition}
    */
    readonly condition?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition[] | cdktf.IResolvable;
    /**
    * next_step block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
    */
    readonly nextStep?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep[] | cdktf.IResolvable;
    /**
    * response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
    */
    readonly response?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _condition;
    get condition(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionList;
    putCondition(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition[] | cdktf.IResolvable): void;
    resetCondition(): void;
    get conditionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition[] | undefined;
    private _nextStep;
    get nextStep(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepList;
    putNextStep(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep[] | cdktf.IResolvable): void;
    resetNextStep(): void;
    get nextStepInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep[] | undefined;
    private _response;
    get response(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseList;
    putResponse(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse[] | cdktf.IResolvable): void;
    resetResponse(): void;
    get responseInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch {
    /**
    * next_step block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
    */
    readonly nextStep?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep[] | cdktf.IResolvable;
    /**
    * response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
    */
    readonly response?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch | cdktf.IResolvable | undefined);
    private _nextStep;
    get nextStep(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepList;
    putNextStep(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep[] | cdktf.IResolvable): void;
    resetNextStep(): void;
    get nextStepInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep[] | undefined;
    private _response;
    get response(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseList;
    putResponse(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse[] | cdktf.IResolvable): void;
    resetResponse(): void;
    get responseInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditional {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#active Lexv2ModelsIntent#active}
    */
    readonly active: boolean | cdktf.IResolvable;
    /**
    * conditional_branch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#conditional_branch Lexv2ModelsIntent#conditional_branch}
    */
    readonly conditionalBranch?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch[] | cdktf.IResolvable;
    /**
    * default_branch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#default_branch Lexv2ModelsIntent#default_branch}
    */
    readonly defaultBranch?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditional | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationConditionalToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditional | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditional | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditional | cdktf.IResolvable | undefined);
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    get activeInput(): boolean | cdktf.IResolvable | undefined;
    private _conditionalBranch;
    get conditionalBranch(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchList;
    putConditionalBranch(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch[] | cdktf.IResolvable): void;
    resetConditionalBranch(): void;
    get conditionalBranchInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch[] | undefined;
    private _defaultBranch;
    get defaultBranch(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchList;
    putDefaultBranch(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch[] | cdktf.IResolvable): void;
    resetDefaultBranch(): void;
    get defaultBranchInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationConditional[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingDeclinationResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingDeclinationResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingDeclinationResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingElicitationCodeHook {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#enable_code_hook_invocation Lexv2ModelsIntent#enable_code_hook_invocation}
    */
    readonly enableCodeHookInvocation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#invocation_label Lexv2ModelsIntent#invocation_label}
    */
    readonly invocationLabel?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingElicitationCodeHookToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingElicitationCodeHook | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingElicitationCodeHookToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingElicitationCodeHook | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingElicitationCodeHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingElicitationCodeHook | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingElicitationCodeHook | cdktf.IResolvable | undefined);
    private _enableCodeHookInvocation?;
    get enableCodeHookInvocation(): boolean | cdktf.IResolvable;
    set enableCodeHookInvocation(value: boolean | cdktf.IResolvable);
    resetEnableCodeHookInvocation(): void;
    get enableCodeHookInvocationInput(): boolean | cdktf.IResolvable | undefined;
    private _invocationLabel?;
    get invocationLabel(): string;
    set invocationLabel(value: string);
    resetInvocationLabel(): void;
    get invocationLabelInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingElicitationCodeHookList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingElicitationCodeHook[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingElicitationCodeHookOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#expression_string Lexv2ModelsIntent#expression_string}
    */
    readonly expressionString: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition | cdktf.IResolvable | undefined);
    private _expressionString?;
    get expressionString(): string;
    set expressionString(value: string);
    get expressionStringInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name: string;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#condition Lexv2ModelsIntent#condition}
    */
    readonly condition?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition[] | cdktf.IResolvable;
    /**
    * next_step block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
    */
    readonly nextStep?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep[] | cdktf.IResolvable;
    /**
    * response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
    */
    readonly response?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _condition;
    get condition(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionList;
    putCondition(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition[] | cdktf.IResolvable): void;
    resetCondition(): void;
    get conditionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition[] | undefined;
    private _nextStep;
    get nextStep(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepList;
    putNextStep(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep[] | cdktf.IResolvable): void;
    resetNextStep(): void;
    get nextStepInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep[] | undefined;
    private _response;
    get response(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseList;
    putResponse(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse[] | cdktf.IResolvable): void;
    resetResponse(): void;
    get responseInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference;
}
