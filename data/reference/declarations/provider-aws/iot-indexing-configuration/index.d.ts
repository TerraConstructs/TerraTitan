/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotIndexingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#id IotIndexingConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * thing_group_indexing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#thing_group_indexing_configuration IotIndexingConfiguration#thing_group_indexing_configuration}
    */
    readonly thingGroupIndexingConfiguration?: IotIndexingConfigurationThingGroupIndexingConfiguration;
    /**
    * thing_indexing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#thing_indexing_configuration IotIndexingConfiguration#thing_indexing_configuration}
    */
    readonly thingIndexingConfiguration?: IotIndexingConfigurationThingIndexingConfiguration;
}
export interface IotIndexingConfigurationThingGroupIndexingConfigurationCustomField {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}
    */
    readonly type?: string;
}
export declare function iotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldToTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField | cdktf.IResolvable): any;
export declare function iotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldToHclTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField | cdktf.IResolvable): any;
export declare class IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotIndexingConfigurationThingGroupIndexingConfigurationCustomField | cdktf.IResolvable | undefined;
    set internalValue(value: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference;
}
export interface IotIndexingConfigurationThingGroupIndexingConfigurationManagedField {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}
    */
    readonly type?: string;
}
export declare function iotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldToTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField | cdktf.IResolvable): any;
export declare function iotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldToHclTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField | cdktf.IResolvable): any;
export declare class IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotIndexingConfigurationThingGroupIndexingConfigurationManagedField | cdktf.IResolvable | undefined;
    set internalValue(value: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference;
}
export interface IotIndexingConfigurationThingGroupIndexingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#thing_group_indexing_mode IotIndexingConfiguration#thing_group_indexing_mode}
    */
    readonly thingGroupIndexingMode: string;
    /**
    * custom_field block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}
    */
    readonly customField?: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | cdktf.IResolvable;
    /**
    * managed_field block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}
    */
    readonly managedField?: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | cdktf.IResolvable;
}
export declare function iotIndexingConfigurationThingGroupIndexingConfigurationToTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference | IotIndexingConfigurationThingGroupIndexingConfiguration): any;
export declare function iotIndexingConfigurationThingGroupIndexingConfigurationToHclTerraform(struct?: IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference | IotIndexingConfigurationThingGroupIndexingConfiguration): any;
export declare class IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotIndexingConfigurationThingGroupIndexingConfiguration | undefined;
    set internalValue(value: IotIndexingConfigurationThingGroupIndexingConfiguration | undefined);
    private _thingGroupIndexingMode?;
    get thingGroupIndexingMode(): string;
    set thingGroupIndexingMode(value: string);
    get thingGroupIndexingModeInput(): string | undefined;
    private _customField;
    get customField(): IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList;
    putCustomField(value: IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | cdktf.IResolvable): void;
    resetCustomField(): void;
    get customFieldInput(): cdktf.IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationCustomField[] | undefined;
    private _managedField;
    get managedField(): IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList;
    putManagedField(value: IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | cdktf.IResolvable): void;
    resetManagedField(): void;
    get managedFieldInput(): cdktf.IResolvable | IotIndexingConfigurationThingGroupIndexingConfigurationManagedField[] | undefined;
}
export interface IotIndexingConfigurationThingIndexingConfigurationCustomField {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}
    */
    readonly type?: string;
}
export declare function iotIndexingConfigurationThingIndexingConfigurationCustomFieldToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationCustomField | cdktf.IResolvable): any;
export declare function iotIndexingConfigurationThingIndexingConfigurationCustomFieldToHclTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationCustomField | cdktf.IResolvable): any;
export declare class IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotIndexingConfigurationThingIndexingConfigurationCustomField | cdktf.IResolvable | undefined;
    set internalValue(value: IotIndexingConfigurationThingIndexingConfigurationCustomField | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class IotIndexingConfigurationThingIndexingConfigurationCustomFieldList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotIndexingConfigurationThingIndexingConfigurationCustomField[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference;
}
export interface IotIndexingConfigurationThingIndexingConfigurationFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#named_shadow_names IotIndexingConfiguration#named_shadow_names}
    */
    readonly namedShadowNames?: string[];
}
export declare function iotIndexingConfigurationThingIndexingConfigurationFilterToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference | IotIndexingConfigurationThingIndexingConfigurationFilter): any;
export declare function iotIndexingConfigurationThingIndexingConfigurationFilterToHclTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference | IotIndexingConfigurationThingIndexingConfigurationFilter): any;
export declare class IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotIndexingConfigurationThingIndexingConfigurationFilter | undefined;
    set internalValue(value: IotIndexingConfigurationThingIndexingConfigurationFilter | undefined);
    private _namedShadowNames?;
    get namedShadowNames(): string[];
    set namedShadowNames(value: string[]);
    resetNamedShadowNames(): void;
    get namedShadowNamesInput(): string[] | undefined;
}
export interface IotIndexingConfigurationThingIndexingConfigurationManagedField {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#name IotIndexingConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#type IotIndexingConfiguration#type}
    */
    readonly type?: string;
}
export declare function iotIndexingConfigurationThingIndexingConfigurationManagedFieldToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationManagedField | cdktf.IResolvable): any;
export declare function iotIndexingConfigurationThingIndexingConfigurationManagedFieldToHclTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationManagedField | cdktf.IResolvable): any;
export declare class IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotIndexingConfigurationThingIndexingConfigurationManagedField | cdktf.IResolvable | undefined;
    set internalValue(value: IotIndexingConfigurationThingIndexingConfigurationManagedField | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class IotIndexingConfigurationThingIndexingConfigurationManagedFieldList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotIndexingConfigurationThingIndexingConfigurationManagedField[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference;
}
export interface IotIndexingConfigurationThingIndexingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#device_defender_indexing_mode IotIndexingConfiguration#device_defender_indexing_mode}
    */
    readonly deviceDefenderIndexingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#named_shadow_indexing_mode IotIndexingConfiguration#named_shadow_indexing_mode}
    */
    readonly namedShadowIndexingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#thing_connectivity_indexing_mode IotIndexingConfiguration#thing_connectivity_indexing_mode}
    */
    readonly thingConnectivityIndexingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#thing_indexing_mode IotIndexingConfiguration#thing_indexing_mode}
    */
    readonly thingIndexingMode: string;
    /**
    * custom_field block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}
    */
    readonly customField?: IotIndexingConfigurationThingIndexingConfigurationCustomField[] | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#filter IotIndexingConfiguration#filter}
    */
    readonly filter?: IotIndexingConfigurationThingIndexingConfigurationFilter;
    /**
    * managed_field block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}
    */
    readonly managedField?: IotIndexingConfigurationThingIndexingConfigurationManagedField[] | cdktf.IResolvable;
}
export declare function iotIndexingConfigurationThingIndexingConfigurationToTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationOutputReference | IotIndexingConfigurationThingIndexingConfiguration): any;
export declare function iotIndexingConfigurationThingIndexingConfigurationToHclTerraform(struct?: IotIndexingConfigurationThingIndexingConfigurationOutputReference | IotIndexingConfigurationThingIndexingConfiguration): any;
export declare class IotIndexingConfigurationThingIndexingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotIndexingConfigurationThingIndexingConfiguration | undefined;
    set internalValue(value: IotIndexingConfigurationThingIndexingConfiguration | undefined);
    private _deviceDefenderIndexingMode?;
    get deviceDefenderIndexingMode(): string;
    set deviceDefenderIndexingMode(value: string);
    resetDeviceDefenderIndexingMode(): void;
    get deviceDefenderIndexingModeInput(): string | undefined;
    private _namedShadowIndexingMode?;
    get namedShadowIndexingMode(): string;
    set namedShadowIndexingMode(value: string);
    resetNamedShadowIndexingMode(): void;
    get namedShadowIndexingModeInput(): string | undefined;
    private _thingConnectivityIndexingMode?;
    get thingConnectivityIndexingMode(): string;
    set thingConnectivityIndexingMode(value: string);
    resetThingConnectivityIndexingMode(): void;
    get thingConnectivityIndexingModeInput(): string | undefined;
    private _thingIndexingMode?;
    get thingIndexingMode(): string;
    set thingIndexingMode(value: string);
    get thingIndexingModeInput(): string | undefined;
    private _customField;
    get customField(): IotIndexingConfigurationThingIndexingConfigurationCustomFieldList;
    putCustomField(value: IotIndexingConfigurationThingIndexingConfigurationCustomField[] | cdktf.IResolvable): void;
    resetCustomField(): void;
    get customFieldInput(): cdktf.IResolvable | IotIndexingConfigurationThingIndexingConfigurationCustomField[] | undefined;
    private _filter;
    get filter(): IotIndexingConfigurationThingIndexingConfigurationFilterOutputReference;
    putFilter(value: IotIndexingConfigurationThingIndexingConfigurationFilter): void;
    resetFilter(): void;
    get filterInput(): IotIndexingConfigurationThingIndexingConfigurationFilter | undefined;
    private _managedField;
    get managedField(): IotIndexingConfigurationThingIndexingConfigurationManagedFieldList;
    putManagedField(value: IotIndexingConfigurationThingIndexingConfigurationManagedField[] | cdktf.IResolvable): void;
    resetManagedField(): void;
    get managedFieldInput(): cdktf.IResolvable | IotIndexingConfigurationThingIndexingConfigurationManagedField[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration aws_iot_indexing_configuration}
*/
export declare class IotIndexingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_indexing_configuration";
    /**
    * Generates CDKTF code for importing a IotIndexingConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotIndexingConfiguration to import
    * @param importFromId The id of the existing IotIndexingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotIndexingConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_indexing_configuration aws_iot_indexing_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotIndexingConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IotIndexingConfigurationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _thingGroupIndexingConfiguration;
    get thingGroupIndexingConfiguration(): IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference;
    putThingGroupIndexingConfiguration(value: IotIndexingConfigurationThingGroupIndexingConfiguration): void;
    resetThingGroupIndexingConfiguration(): void;
    get thingGroupIndexingConfigurationInput(): IotIndexingConfigurationThingGroupIndexingConfiguration | undefined;
    private _thingIndexingConfiguration;
    get thingIndexingConfiguration(): IotIndexingConfigurationThingIndexingConfigurationOutputReference;
    putThingIndexingConfiguration(value: IotIndexingConfigurationThingIndexingConfiguration): void;
    resetThingIndexingConfiguration(): void;
    get thingIndexingConfigurationInput(): IotIndexingConfigurationThingIndexingConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
