/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import * as cdktf from 'cdktf';
import { Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload, Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadList, Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard, Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardList, Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage, Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageList, Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification, Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationList, Lexv2ModelsSlotValueElicitationSettingPromptSpecification, Lexv2ModelsSlotValueElicitationSettingPromptSpecificationList, Lexv2ModelsSlotValueElicitationSettingSampleUtterance, Lexv2ModelsSlotValueElicitationSettingSampleUtteranceList, Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting, Lexv2ModelsSlotValueElicitationSettingSlotResolutionSettingList } from './structs0';
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
    */
    readonly button?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
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
    get button(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#message Lexv2ModelsSlot#message}
    */
    readonly message?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#variation Lexv2ModelsSlot#variation}
    */
    readonly variation?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#message_group Lexv2ModelsSlot#message_group}
    */
    readonly messageGroup?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
    */
    readonly button?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
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
    get button(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
    */
    readonly button?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
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
    get button(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#message Lexv2ModelsSlot#message}
    */
    readonly message?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#variation Lexv2ModelsSlot#variation}
    */
    readonly variation?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#frequency_in_seconds Lexv2ModelsSlot#frequency_in_seconds}
    */
    readonly frequencyInSeconds: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#timeout_in_seconds Lexv2ModelsSlot#timeout_in_seconds}
    */
    readonly timeoutInSeconds: number;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#message_group Lexv2ModelsSlot#message_group}
    */
    readonly messageGroup?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _frequencyInSeconds?;
    get frequencyInSeconds(): number;
    set frequencyInSeconds(value: number);
    get frequencyInSecondsInput(): number | undefined;
    private _timeoutInSeconds?;
    get timeoutInSeconds(): number;
    set timeoutInSeconds(value: number);
    get timeoutInSecondsInput(): number | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
    */
    readonly button?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
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
    get button(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#text Lexv2ModelsSlot#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_url Lexv2ModelsSlot#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#subtitle Lexv2ModelsSlot#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#title Lexv2ModelsSlot#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#button Lexv2ModelsSlot#button}
    */
    readonly button?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
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
    get button(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value Lexv2ModelsSlot#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#custom_payload Lexv2ModelsSlot#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#image_response_card Lexv2ModelsSlot#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#plain_text_message Lexv2ModelsSlot#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#ssml_message Lexv2ModelsSlot#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#message Lexv2ModelsSlot#message}
    */
    readonly message?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#variation Lexv2ModelsSlot#variation}
    */
    readonly variation?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#allow_interrupt Lexv2ModelsSlot#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#message_group Lexv2ModelsSlot#message_group}
    */
    readonly messageGroup?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#active Lexv2ModelsSlot#active}
    */
    readonly active?: boolean | cdktf.IResolvable;
    /**
    * continue_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#continue_response Lexv2ModelsSlot#continue_response}
    */
    readonly continueResponse?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse[] | cdktf.IResolvable;
    /**
    * still_waiting_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#still_waiting_response Lexv2ModelsSlot#still_waiting_response}
    */
    readonly stillWaitingResponse?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse[] | cdktf.IResolvable;
    /**
    * waiting_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#waiting_response Lexv2ModelsSlot#waiting_response}
    */
    readonly waitingResponse?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationToTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecification | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecification | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecification | cdktf.IResolvable | undefined);
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    resetActive(): void;
    get activeInput(): boolean | cdktf.IResolvable | undefined;
    private _continueResponse;
    get continueResponse(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponseList;
    putContinueResponse(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse[] | cdktf.IResolvable): void;
    resetContinueResponse(): void;
    get continueResponseInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationContinueResponse[] | undefined;
    private _stillWaitingResponse;
    get stillWaitingResponse(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseList;
    putStillWaitingResponse(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse[] | cdktf.IResolvable): void;
    resetStillWaitingResponse(): void;
    get stillWaitingResponseInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse[] | undefined;
    private _waitingResponse;
    get waitingResponse(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponseList;
    putWaitingResponse(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse[] | cdktf.IResolvable): void;
    resetWaitingResponse(): void;
    get waitingResponseInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationWaitingResponse[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationOutputReference;
}
export interface Lexv2ModelsSlotValueElicitationSetting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#slot_constraint Lexv2ModelsSlot#slot_constraint}
    */
    readonly slotConstraint: string;
    /**
    * default_value_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#default_value_specification Lexv2ModelsSlot#default_value_specification}
    */
    readonly defaultValueSpecification?: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification[] | cdktf.IResolvable;
    /**
    * prompt_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#prompt_specification Lexv2ModelsSlot#prompt_specification}
    */
    readonly promptSpecification?: Lexv2ModelsSlotValueElicitationSettingPromptSpecification[] | cdktf.IResolvable;
    /**
    * sample_utterance block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#sample_utterance Lexv2ModelsSlot#sample_utterance}
    */
    readonly sampleUtterance?: Lexv2ModelsSlotValueElicitationSettingSampleUtterance[] | cdktf.IResolvable;
    /**
    * slot_resolution_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#slot_resolution_setting Lexv2ModelsSlot#slot_resolution_setting}
    */
    readonly slotResolutionSetting?: Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting[] | cdktf.IResolvable;
    /**
    * wait_and_continue_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#wait_and_continue_specification Lexv2ModelsSlot#wait_and_continue_specification}
    */
    readonly waitAndContinueSpecification?: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecification[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotValueElicitationSettingToTerraform(struct?: Lexv2ModelsSlotValueElicitationSetting | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotValueElicitationSettingToHclTerraform(struct?: Lexv2ModelsSlotValueElicitationSetting | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotValueElicitationSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotValueElicitationSetting | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotValueElicitationSetting | cdktf.IResolvable | undefined);
    private _slotConstraint?;
    get slotConstraint(): string;
    set slotConstraint(value: string);
    get slotConstraintInput(): string | undefined;
    private _defaultValueSpecification;
    get defaultValueSpecification(): Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecificationList;
    putDefaultValueSpecification(value: Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification[] | cdktf.IResolvable): void;
    resetDefaultValueSpecification(): void;
    get defaultValueSpecificationInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingDefaultValueSpecification[] | undefined;
    private _promptSpecification;
    get promptSpecification(): Lexv2ModelsSlotValueElicitationSettingPromptSpecificationList;
    putPromptSpecification(value: Lexv2ModelsSlotValueElicitationSettingPromptSpecification[] | cdktf.IResolvable): void;
    resetPromptSpecification(): void;
    get promptSpecificationInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingPromptSpecification[] | undefined;
    private _sampleUtterance;
    get sampleUtterance(): Lexv2ModelsSlotValueElicitationSettingSampleUtteranceList;
    putSampleUtterance(value: Lexv2ModelsSlotValueElicitationSettingSampleUtterance[] | cdktf.IResolvable): void;
    resetSampleUtterance(): void;
    get sampleUtteranceInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingSampleUtterance[] | undefined;
    private _slotResolutionSetting;
    get slotResolutionSetting(): Lexv2ModelsSlotValueElicitationSettingSlotResolutionSettingList;
    putSlotResolutionSetting(value: Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting[] | cdktf.IResolvable): void;
    resetSlotResolutionSetting(): void;
    get slotResolutionSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingSlotResolutionSetting[] | undefined;
    private _waitAndContinueSpecification;
    get waitAndContinueSpecification(): Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecificationList;
    putWaitAndContinueSpecification(value: Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecification[] | cdktf.IResolvable): void;
    resetWaitAndContinueSpecification(): void;
    get waitAndContinueSpecificationInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSettingWaitAndContinueSpecification[] | undefined;
}
export declare class Lexv2ModelsSlotValueElicitationSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotValueElicitationSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotValueElicitationSettingOutputReference;
}
