/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LexSlotTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#create_version LexSlotType#create_version}
    */
    readonly createVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#description LexSlotType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#id LexSlotType#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#name LexSlotType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#value_selection_strategy LexSlotType#value_selection_strategy}
    */
    readonly valueSelectionStrategy?: string;
    /**
    * enumeration_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#enumeration_value LexSlotType#enumeration_value}
    */
    readonly enumerationValue: LexSlotTypeEnumerationValue[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#timeouts LexSlotType#timeouts}
    */
    readonly timeouts?: LexSlotTypeTimeouts;
}
export interface LexSlotTypeEnumerationValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#synonyms LexSlotType#synonyms}
    */
    readonly synonyms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#value LexSlotType#value}
    */
    readonly value: string;
}
export declare function lexSlotTypeEnumerationValueToTerraform(struct?: LexSlotTypeEnumerationValue | cdktf.IResolvable): any;
export declare function lexSlotTypeEnumerationValueToHclTerraform(struct?: LexSlotTypeEnumerationValue | cdktf.IResolvable): any;
export declare class LexSlotTypeEnumerationValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexSlotTypeEnumerationValue | cdktf.IResolvable | undefined;
    set internalValue(value: LexSlotTypeEnumerationValue | cdktf.IResolvable | undefined);
    private _synonyms?;
    get synonyms(): string[];
    set synonyms(value: string[]);
    resetSynonyms(): void;
    get synonymsInput(): string[] | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class LexSlotTypeEnumerationValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexSlotTypeEnumerationValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexSlotTypeEnumerationValueOutputReference;
}
export interface LexSlotTypeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#create LexSlotType#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#delete LexSlotType#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#update LexSlotType#update}
    */
    readonly update?: string;
}
export declare function lexSlotTypeTimeoutsToTerraform(struct?: LexSlotTypeTimeouts | cdktf.IResolvable): any;
export declare function lexSlotTypeTimeoutsToHclTerraform(struct?: LexSlotTypeTimeouts | cdktf.IResolvable): any;
export declare class LexSlotTypeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexSlotTypeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LexSlotTypeTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type aws_lex_slot_type}
*/
export declare class LexSlotType extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lex_slot_type";
    /**
    * Generates CDKTF code for importing a LexSlotType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LexSlotType to import
    * @param importFromId The id of the existing LexSlotType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LexSlotType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_slot_type aws_lex_slot_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexSlotTypeConfig
    */
    constructor(scope: Construct, id: string, config: LexSlotTypeConfig);
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
    private _valueSelectionStrategy?;
    get valueSelectionStrategy(): string;
    set valueSelectionStrategy(value: string);
    resetValueSelectionStrategy(): void;
    get valueSelectionStrategyInput(): string | undefined;
    get version(): string;
    private _enumerationValue;
    get enumerationValue(): LexSlotTypeEnumerationValueList;
    putEnumerationValue(value: LexSlotTypeEnumerationValue[] | cdktf.IResolvable): void;
    get enumerationValueInput(): cdktf.IResolvable | LexSlotTypeEnumerationValue[] | undefined;
    private _timeouts;
    get timeouts(): LexSlotTypeTimeoutsOutputReference;
    putTimeouts(value: LexSlotTypeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LexSlotTypeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
