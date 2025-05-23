/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Lexv2ModelsSlotTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#bot_id Lexv2ModelsSlotType#bot_id}
    */
    readonly botId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#bot_version Lexv2ModelsSlotType#bot_version}
    */
    readonly botVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#description Lexv2ModelsSlotType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#locale_id Lexv2ModelsSlotType#locale_id}
    */
    readonly localeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#parent_slot_type_signature Lexv2ModelsSlotType#parent_slot_type_signature}
    */
    readonly parentSlotTypeSignature?: string;
    /**
    * composite_slot_type_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#composite_slot_type_setting Lexv2ModelsSlotType#composite_slot_type_setting}
    */
    readonly compositeSlotTypeSetting?: Lexv2ModelsSlotTypeCompositeSlotTypeSetting[] | cdktf.IResolvable;
    /**
    * external_source_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#external_source_setting Lexv2ModelsSlotType#external_source_setting}
    */
    readonly externalSourceSetting?: Lexv2ModelsSlotTypeExternalSourceSetting[] | cdktf.IResolvable;
    /**
    * slot_type_values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#slot_type_values Lexv2ModelsSlotType#slot_type_values}
    */
    readonly slotTypeValues?: Lexv2ModelsSlotTypeSlotTypeValues[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#timeouts Lexv2ModelsSlotType#timeouts}
    */
    readonly timeouts?: Lexv2ModelsSlotTypeTimeouts;
    /**
    * value_selection_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#value_selection_setting Lexv2ModelsSlotType#value_selection_setting}
    */
    readonly valueSelectionSetting?: Lexv2ModelsSlotTypeValueSelectionSetting[] | cdktf.IResolvable;
}
export interface Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#name Lexv2ModelsSlotType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#slot_type_id Lexv2ModelsSlotType#slot_type_id}
    */
    readonly slotTypeId: string;
}
export declare function lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsToTerraform(struct?: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsToHclTerraform(struct?: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _slotTypeId?;
    get slotTypeId(): string;
    set slotTypeId(value: string);
    get slotTypeIdInput(): string | undefined;
}
export declare class Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsOutputReference;
}
export interface Lexv2ModelsSlotTypeCompositeSlotTypeSetting {
    /**
    * sub_slots block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#sub_slots Lexv2ModelsSlotType#sub_slots}
    */
    readonly subSlots?: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotTypeCompositeSlotTypeSettingToTerraform(struct?: Lexv2ModelsSlotTypeCompositeSlotTypeSetting | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeCompositeSlotTypeSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeCompositeSlotTypeSetting | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeCompositeSlotTypeSetting | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeCompositeSlotTypeSetting | cdktf.IResolvable | undefined);
    private _subSlots;
    get subSlots(): Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlotsList;
    putSubSlots(value: Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[] | cdktf.IResolvable): void;
    resetSubSlots(): void;
    get subSlotsInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSettingSubSlots[] | undefined;
}
export declare class Lexv2ModelsSlotTypeCompositeSlotTypeSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeCompositeSlotTypeSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeCompositeSlotTypeSettingOutputReference;
}
export interface Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#kms_key_arn Lexv2ModelsSlotType#kms_key_arn}
    */
    readonly kmsKeyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#s3_bucket_name Lexv2ModelsSlotType#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#s3_object_key Lexv2ModelsSlotType#s3_object_key}
    */
    readonly s3ObjectKey: string;
}
export declare function lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceToTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceToHclTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource | cdktf.IResolvable | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    get kmsKeyArnInput(): string | undefined;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3ObjectKey?;
    get s3ObjectKey(): string;
    set s3ObjectKey(value: string);
    get s3ObjectKeyInput(): string | undefined;
}
export declare class Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference;
}
export interface Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting {
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#source Lexv2ModelsSlotType#source}
    */
    readonly source?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingToTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting | cdktf.IResolvable | undefined);
    private _source;
    get source(): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSourceList;
    putSource(value: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[] | cdktf.IResolvable): void;
    resetSource(): void;
    get sourceInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingSource[] | undefined;
}
export declare class Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingOutputReference;
}
export interface Lexv2ModelsSlotTypeExternalSourceSetting {
    /**
    * grammar_slot_type_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#grammar_slot_type_setting Lexv2ModelsSlotType#grammar_slot_type_setting}
    */
    readonly grammarSlotTypeSetting?: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotTypeExternalSourceSettingToTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSetting | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeExternalSourceSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeExternalSourceSetting | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeExternalSourceSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeExternalSourceSetting | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeExternalSourceSetting | cdktf.IResolvable | undefined);
    private _grammarSlotTypeSetting;
    get grammarSlotTypeSetting(): Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSettingList;
    putGrammarSlotTypeSetting(value: Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[] | cdktf.IResolvable): void;
    resetGrammarSlotTypeSetting(): void;
    get grammarSlotTypeSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeExternalSourceSettingGrammarSlotTypeSetting[] | undefined;
}
export declare class Lexv2ModelsSlotTypeExternalSourceSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeExternalSourceSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeExternalSourceSettingOutputReference;
}
export interface Lexv2ModelsSlotTypeSlotTypeValuesSampleValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotTypeSlotTypeValuesSampleValueToTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeSlotTypeValuesSampleValueToHclTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeSlotTypeValuesSampleValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeSlotTypeValuesSampleValueOutputReference;
}
export interface Lexv2ModelsSlotTypeSlotTypeValuesSynonyms {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#value Lexv2ModelsSlotType#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsSlotTypeSlotTypeValuesSynonymsToTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeSlotTypeValuesSynonymsToHclTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeSlotTypeValuesSynonyms | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeSlotTypeValuesSynonymsOutputReference;
}
export interface Lexv2ModelsSlotTypeSlotTypeValues {
    /**
    * sample_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#sample_value Lexv2ModelsSlotType#sample_value}
    */
    readonly sampleValue?: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[] | cdktf.IResolvable;
    /**
    * synonyms block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#synonyms Lexv2ModelsSlotType#synonyms}
    */
    readonly synonyms?: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotTypeSlotTypeValuesToTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValues | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeSlotTypeValuesToHclTerraform(struct?: Lexv2ModelsSlotTypeSlotTypeValues | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeSlotTypeValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeSlotTypeValues | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeSlotTypeValues | cdktf.IResolvable | undefined);
    private _sampleValue;
    get sampleValue(): Lexv2ModelsSlotTypeSlotTypeValuesSampleValueList;
    putSampleValue(value: Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[] | cdktf.IResolvable): void;
    resetSampleValue(): void;
    get sampleValueInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSampleValue[] | undefined;
    private _synonyms;
    get synonyms(): Lexv2ModelsSlotTypeSlotTypeValuesSynonymsList;
    putSynonyms(value: Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[] | cdktf.IResolvable): void;
    resetSynonyms(): void;
    get synonymsInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeSlotTypeValuesSynonyms[] | undefined;
}
export declare class Lexv2ModelsSlotTypeSlotTypeValuesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeSlotTypeValues[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeSlotTypeValuesOutputReference;
}
export interface Lexv2ModelsSlotTypeTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#create Lexv2ModelsSlotType#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#delete Lexv2ModelsSlotType#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#update Lexv2ModelsSlotType#update}
    */
    readonly update?: string;
}
export declare function lexv2ModelsSlotTypeTimeoutsToTerraform(struct?: Lexv2ModelsSlotTypeTimeouts | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeTimeoutsToHclTerraform(struct?: Lexv2ModelsSlotTypeTimeouts | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Lexv2ModelsSlotTypeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeTimeouts | cdktf.IResolvable | undefined);
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
export interface Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#audio_recognition_strategy Lexv2ModelsSlotType#audio_recognition_strategy}
    */
    readonly audioRecognitionStrategy?: string;
}
export declare function lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingToTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting | cdktf.IResolvable | undefined);
    private _audioRecognitionStrategy?;
    get audioRecognitionStrategy(): string;
    set audioRecognitionStrategy(value: string);
    resetAudioRecognitionStrategy(): void;
    get audioRecognitionStrategyInput(): string | undefined;
}
export declare class Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingOutputReference;
}
export interface Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#pattern Lexv2ModelsSlotType#pattern}
    */
    readonly pattern: string;
}
export declare function lexv2ModelsSlotTypeValueSelectionSettingRegexFilterToTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeValueSelectionSettingRegexFilterToHclTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter | cdktf.IResolvable | undefined);
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string | undefined;
}
export declare class Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterOutputReference;
}
export interface Lexv2ModelsSlotTypeValueSelectionSetting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#resolution_strategy Lexv2ModelsSlotType#resolution_strategy}
    */
    readonly resolutionStrategy: string;
    /**
    * advanced_recognition_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#advanced_recognition_setting Lexv2ModelsSlotType#advanced_recognition_setting}
    */
    readonly advancedRecognitionSetting?: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[] | cdktf.IResolvable;
    /**
    * regex_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#regex_filter Lexv2ModelsSlotType#regex_filter}
    */
    readonly regexFilter?: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[] | cdktf.IResolvable;
}
export declare function lexv2ModelsSlotTypeValueSelectionSettingToTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSetting | cdktf.IResolvable): any;
export declare function lexv2ModelsSlotTypeValueSelectionSettingToHclTerraform(struct?: Lexv2ModelsSlotTypeValueSelectionSetting | cdktf.IResolvable): any;
export declare class Lexv2ModelsSlotTypeValueSelectionSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsSlotTypeValueSelectionSetting | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsSlotTypeValueSelectionSetting | cdktf.IResolvable | undefined);
    private _resolutionStrategy?;
    get resolutionStrategy(): string;
    set resolutionStrategy(value: string);
    get resolutionStrategyInput(): string | undefined;
    private _advancedRecognitionSetting;
    get advancedRecognitionSetting(): Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSettingList;
    putAdvancedRecognitionSetting(value: Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[] | cdktf.IResolvable): void;
    resetAdvancedRecognitionSetting(): void;
    get advancedRecognitionSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting[] | undefined;
    private _regexFilter;
    get regexFilter(): Lexv2ModelsSlotTypeValueSelectionSettingRegexFilterList;
    putRegexFilter(value: Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[] | cdktf.IResolvable): void;
    resetRegexFilter(): void;
    get regexFilterInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeValueSelectionSettingRegexFilter[] | undefined;
}
export declare class Lexv2ModelsSlotTypeValueSelectionSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsSlotTypeValueSelectionSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsSlotTypeValueSelectionSettingOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type aws_lexv2models_slot_type}
*/
export declare class Lexv2ModelsSlotType extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lexv2models_slot_type";
    /**
    * Generates CDKTF code for importing a Lexv2ModelsSlotType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Lexv2ModelsSlotType to import
    * @param importFromId The id of the existing Lexv2ModelsSlotType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Lexv2ModelsSlotType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_slot_type aws_lexv2models_slot_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Lexv2ModelsSlotTypeConfig
    */
    constructor(scope: Construct, id: string, config: Lexv2ModelsSlotTypeConfig);
    private _botId?;
    get botId(): string;
    set botId(value: string);
    get botIdInput(): string | undefined;
    private _botVersion?;
    get botVersion(): string;
    set botVersion(value: string);
    get botVersionInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _localeId?;
    get localeId(): string;
    set localeId(value: string);
    get localeIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parentSlotTypeSignature?;
    get parentSlotTypeSignature(): string;
    set parentSlotTypeSignature(value: string);
    resetParentSlotTypeSignature(): void;
    get parentSlotTypeSignatureInput(): string | undefined;
    get slotTypeId(): string;
    private _compositeSlotTypeSetting;
    get compositeSlotTypeSetting(): Lexv2ModelsSlotTypeCompositeSlotTypeSettingList;
    putCompositeSlotTypeSetting(value: Lexv2ModelsSlotTypeCompositeSlotTypeSetting[] | cdktf.IResolvable): void;
    resetCompositeSlotTypeSetting(): void;
    get compositeSlotTypeSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeCompositeSlotTypeSetting[] | undefined;
    private _externalSourceSetting;
    get externalSourceSetting(): Lexv2ModelsSlotTypeExternalSourceSettingList;
    putExternalSourceSetting(value: Lexv2ModelsSlotTypeExternalSourceSetting[] | cdktf.IResolvable): void;
    resetExternalSourceSetting(): void;
    get externalSourceSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeExternalSourceSetting[] | undefined;
    private _slotTypeValues;
    get slotTypeValues(): Lexv2ModelsSlotTypeSlotTypeValuesList;
    putSlotTypeValues(value: Lexv2ModelsSlotTypeSlotTypeValues[] | cdktf.IResolvable): void;
    resetSlotTypeValues(): void;
    get slotTypeValuesInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeSlotTypeValues[] | undefined;
    private _timeouts;
    get timeouts(): Lexv2ModelsSlotTypeTimeoutsOutputReference;
    putTimeouts(value: Lexv2ModelsSlotTypeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeTimeouts | undefined;
    private _valueSelectionSetting;
    get valueSelectionSetting(): Lexv2ModelsSlotTypeValueSelectionSettingList;
    putValueSelectionSetting(value: Lexv2ModelsSlotTypeValueSelectionSetting[] | cdktf.IResolvable): void;
    resetValueSelectionSetting(): void;
    get valueSelectionSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotTypeValueSelectionSetting[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
