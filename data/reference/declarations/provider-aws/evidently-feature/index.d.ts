/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EvidentlyFeatureConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#default_variation EvidentlyFeature#default_variation}
    */
    readonly defaultVariation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#description EvidentlyFeature#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}
    */
    readonly entityOverrides?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}
    */
    readonly evaluationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#id EvidentlyFeature#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#name EvidentlyFeature#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#project EvidentlyFeature#project}
    */
    readonly project: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#tags EvidentlyFeature#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#tags_all EvidentlyFeature#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#timeouts EvidentlyFeature#timeouts}
    */
    readonly timeouts?: EvidentlyFeatureTimeouts;
    /**
    * variations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#variations EvidentlyFeature#variations}
    */
    readonly variations: EvidentlyFeatureVariations[] | cdktf.IResolvable;
}
export interface EvidentlyFeatureEvaluationRules {
}
export declare function evidentlyFeatureEvaluationRulesToTerraform(struct?: EvidentlyFeatureEvaluationRules): any;
export declare function evidentlyFeatureEvaluationRulesToHclTerraform(struct?: EvidentlyFeatureEvaluationRules): any;
export declare class EvidentlyFeatureEvaluationRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EvidentlyFeatureEvaluationRules | undefined;
    set internalValue(value: EvidentlyFeatureEvaluationRules | undefined);
    get name(): string;
    get type(): string;
}
export declare class EvidentlyFeatureEvaluationRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EvidentlyFeatureEvaluationRulesOutputReference;
}
export interface EvidentlyFeatureTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#create EvidentlyFeature#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#delete EvidentlyFeature#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#update EvidentlyFeature#update}
    */
    readonly update?: string;
}
export declare function evidentlyFeatureTimeoutsToTerraform(struct?: EvidentlyFeatureTimeouts | cdktf.IResolvable): any;
export declare function evidentlyFeatureTimeoutsToHclTerraform(struct?: EvidentlyFeatureTimeouts | cdktf.IResolvable): any;
export declare class EvidentlyFeatureTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EvidentlyFeatureTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EvidentlyFeatureTimeouts | cdktf.IResolvable | undefined);
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
export interface EvidentlyFeatureVariationsValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#bool_value EvidentlyFeature#bool_value}
    */
    readonly boolValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#double_value EvidentlyFeature#double_value}
    */
    readonly doubleValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#long_value EvidentlyFeature#long_value}
    */
    readonly longValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#string_value EvidentlyFeature#string_value}
    */
    readonly stringValue?: string;
}
export declare function evidentlyFeatureVariationsValueToTerraform(struct?: EvidentlyFeatureVariationsValueOutputReference | EvidentlyFeatureVariationsValue): any;
export declare function evidentlyFeatureVariationsValueToHclTerraform(struct?: EvidentlyFeatureVariationsValueOutputReference | EvidentlyFeatureVariationsValue): any;
export declare class EvidentlyFeatureVariationsValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EvidentlyFeatureVariationsValue | undefined;
    set internalValue(value: EvidentlyFeatureVariationsValue | undefined);
    private _boolValue?;
    get boolValue(): string;
    set boolValue(value: string);
    resetBoolValue(): void;
    get boolValueInput(): string | undefined;
    private _doubleValue?;
    get doubleValue(): string;
    set doubleValue(value: string);
    resetDoubleValue(): void;
    get doubleValueInput(): string | undefined;
    private _longValue?;
    get longValue(): string;
    set longValue(value: string);
    resetLongValue(): void;
    get longValueInput(): string | undefined;
    private _stringValue?;
    get stringValue(): string;
    set stringValue(value: string);
    resetStringValue(): void;
    get stringValueInput(): string | undefined;
}
export interface EvidentlyFeatureVariations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#name EvidentlyFeature#name}
    */
    readonly name: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#value EvidentlyFeature#value}
    */
    readonly value: EvidentlyFeatureVariationsValue;
}
export declare function evidentlyFeatureVariationsToTerraform(struct?: EvidentlyFeatureVariations | cdktf.IResolvable): any;
export declare function evidentlyFeatureVariationsToHclTerraform(struct?: EvidentlyFeatureVariations | cdktf.IResolvable): any;
export declare class EvidentlyFeatureVariationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EvidentlyFeatureVariations | cdktf.IResolvable | undefined;
    set internalValue(value: EvidentlyFeatureVariations | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value;
    get value(): EvidentlyFeatureVariationsValueOutputReference;
    putValue(value: EvidentlyFeatureVariationsValue): void;
    get valueInput(): EvidentlyFeatureVariationsValue | undefined;
}
export declare class EvidentlyFeatureVariationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EvidentlyFeatureVariations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EvidentlyFeatureVariationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature aws_evidently_feature}
*/
export declare class EvidentlyFeature extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_evidently_feature";
    /**
    * Generates CDKTF code for importing a EvidentlyFeature resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EvidentlyFeature to import
    * @param importFromId The id of the existing EvidentlyFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EvidentlyFeature to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_feature aws_evidently_feature} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EvidentlyFeatureConfig
    */
    constructor(scope: Construct, id: string, config: EvidentlyFeatureConfig);
    get arn(): string;
    get createdTime(): string;
    private _defaultVariation?;
    get defaultVariation(): string;
    set defaultVariation(value: string);
    resetDefaultVariation(): void;
    get defaultVariationInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _entityOverrides?;
    get entityOverrides(): {
        [key: string]: string;
    };
    set entityOverrides(value: {
        [key: string]: string;
    });
    resetEntityOverrides(): void;
    get entityOverridesInput(): {
        [key: string]: string;
    } | undefined;
    private _evaluationRules;
    get evaluationRules(): EvidentlyFeatureEvaluationRulesList;
    private _evaluationStrategy?;
    get evaluationStrategy(): string;
    set evaluationStrategy(value: string);
    resetEvaluationStrategy(): void;
    get evaluationStrategyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _project?;
    get project(): string;
    set project(value: string);
    get projectInput(): string | undefined;
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
    get valueType(): string;
    private _timeouts;
    get timeouts(): EvidentlyFeatureTimeoutsOutputReference;
    putTimeouts(value: EvidentlyFeatureTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EvidentlyFeatureTimeouts | undefined;
    private _variations;
    get variations(): EvidentlyFeatureVariationsList;
    putVariations(value: EvidentlyFeatureVariations[] | cdktf.IResolvable): void;
    get variationsInput(): cdktf.IResolvable | EvidentlyFeatureVariations[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
