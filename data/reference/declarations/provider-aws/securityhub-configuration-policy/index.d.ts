/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubConfigurationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#description SecurityhubConfigurationPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#id SecurityhubConfigurationPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}
    */
    readonly name: string;
    /**
    * configuration_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#configuration_policy SecurityhubConfigurationPolicy#configuration_policy}
    */
    readonly configurationPolicy: SecurityhubConfigurationPolicyConfigurationPolicy;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}
    */
    readonly value: boolean | cdktf.IResolvable;
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool | undefined);
    private _value?;
    get value(): boolean | cdktf.IResolvable;
    set value(value: boolean | cdktf.IResolvable);
    get valueInput(): boolean | cdktf.IResolvable | undefined;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}
    */
    readonly value: number;
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble | undefined);
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}
    */
    readonly value: string;
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}
    */
    readonly value: string[];
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct | undefined);
    private _value?;
    get value(): string[];
    set value(value: string[]);
    get valueInput(): string[] | undefined;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}
    */
    readonly value: number;
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt | undefined);
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}
    */
    readonly value: number[];
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct | undefined);
    private _value?;
    get value(): number[];
    set value(value: number[]);
    get valueInput(): number[] | undefined;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}
    */
    readonly value: string;
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}
    */
    readonly value: string[];
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct | undefined);
    private _value?;
    get value(): string[];
    set value(value: string[]);
    get valueInput(): string[] | undefined;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#value_type SecurityhubConfigurationPolicy#value_type}
    */
    readonly valueType: string;
    /**
    * bool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#bool SecurityhubConfigurationPolicy#bool}
    */
    readonly bool?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool;
    /**
    * double block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#double SecurityhubConfigurationPolicy#double}
    */
    readonly double?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble;
    /**
    * enum block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#enum SecurityhubConfigurationPolicy#enum}
    */
    readonly enum?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum;
    /**
    * enum_list block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#enum_list SecurityhubConfigurationPolicy#enum_list}
    */
    readonly enumList?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct;
    /**
    * int block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#int SecurityhubConfigurationPolicy#int}
    */
    readonly int?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt;
    /**
    * int_list block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#int_list SecurityhubConfigurationPolicy#int_list}
    */
    readonly intList?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct;
    /**
    * string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#string SecurityhubConfigurationPolicy#string}
    */
    readonly string?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString;
    /**
    * string_list block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#string_list SecurityhubConfigurationPolicy#string_list}
    */
    readonly stringList?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct;
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter | cdktf.IResolvable): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter | cdktf.IResolvable): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _valueType?;
    get valueType(): string;
    set valueType(value: string);
    get valueTypeInput(): string | undefined;
    private _bool;
    get bool(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBoolOutputReference;
    putBool(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool): void;
    resetBool(): void;
    get boolInput(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterBool | undefined;
    private _double;
    get double(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDoubleOutputReference;
    putDouble(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble): void;
    resetDouble(): void;
    get doubleInput(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterDouble | undefined;
    private _enum;
    get enum(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumOutputReference;
    putEnum(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum): void;
    resetEnum(): void;
    get enumInput(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnum | undefined;
    private _enumList;
    get enumList(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStructOutputReference;
    putEnumList(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct): void;
    resetEnumList(): void;
    get enumListInput(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterEnumListStruct | undefined;
    private _int;
    get int(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntOutputReference;
    putInt(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt): void;
    resetInt(): void;
    get intInput(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterInt | undefined;
    private _intList;
    get intList(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStructOutputReference;
    putIntList(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct): void;
    resetIntList(): void;
    get intListInput(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterIntListStruct | undefined;
    private _string;
    get string(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringOutputReference;
    putString(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString): void;
    resetString(): void;
    get stringInput(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterString | undefined;
    private _stringList;
    get stringList(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStructOutputReference;
    putStringList(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct): void;
    resetStringList(): void;
    get stringListInput(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterStringListStruct | undefined;
}
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterOutputReference;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#security_control_id SecurityhubConfigurationPolicy#security_control_id}
    */
    readonly securityControlId: string;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#parameter SecurityhubConfigurationPolicy#parameter}
    */
    readonly parameter: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter[] | cdktf.IResolvable;
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter | cdktf.IResolvable): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter | cdktf.IResolvable): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter | cdktf.IResolvable | undefined);
    private _securityControlId?;
    get securityControlId(): string;
    set securityControlId(value: string);
    get securityControlIdInput(): string | undefined;
    private _parameter;
    get parameter(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameterList;
    putParameter(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter[] | cdktf.IResolvable): void;
    get parameterInput(): cdktf.IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterParameter[] | undefined;
}
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterOutputReference;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#disabled_control_identifiers SecurityhubConfigurationPolicy#disabled_control_identifiers}
    */
    readonly disabledControlIdentifiers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#enabled_control_identifiers SecurityhubConfigurationPolicy#enabled_control_identifiers}
    */
    readonly enabledControlIdentifiers?: string[];
    /**
    * security_control_custom_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#security_control_custom_parameter SecurityhubConfigurationPolicy#security_control_custom_parameter}
    */
    readonly securityControlCustomParameter?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter[] | cdktf.IResolvable;
}
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration): any;
export declare function securityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration | undefined);
    private _disabledControlIdentifiers?;
    get disabledControlIdentifiers(): string[];
    set disabledControlIdentifiers(value: string[]);
    resetDisabledControlIdentifiers(): void;
    get disabledControlIdentifiersInput(): string[] | undefined;
    private _enabledControlIdentifiers?;
    get enabledControlIdentifiers(): string[];
    set enabledControlIdentifiers(value: string[]);
    resetEnabledControlIdentifiers(): void;
    get enabledControlIdentifiersInput(): string[] | undefined;
    private _securityControlCustomParameter;
    get securityControlCustomParameter(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameterList;
    putSecurityControlCustomParameter(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter[] | cdktf.IResolvable): void;
    resetSecurityControlCustomParameter(): void;
    get securityControlCustomParameterInput(): cdktf.IResolvable | SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationSecurityControlCustomParameter[] | undefined;
}
export interface SecurityhubConfigurationPolicyConfigurationPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#enabled_standard_arns SecurityhubConfigurationPolicy#enabled_standard_arns}
    */
    readonly enabledStandardArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#service_enabled SecurityhubConfigurationPolicy#service_enabled}
    */
    readonly serviceEnabled: boolean | cdktf.IResolvable;
    /**
    * security_controls_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#security_controls_configuration SecurityhubConfigurationPolicy#security_controls_configuration}
    */
    readonly securityControlsConfiguration?: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration;
}
export declare function securityhubConfigurationPolicyConfigurationPolicyToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicyOutputReference | SecurityhubConfigurationPolicyConfigurationPolicy): any;
export declare function securityhubConfigurationPolicyConfigurationPolicyToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicyOutputReference | SecurityhubConfigurationPolicyConfigurationPolicy): any;
export declare class SecurityhubConfigurationPolicyConfigurationPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicy | undefined;
    set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicy | undefined);
    private _enabledStandardArns?;
    get enabledStandardArns(): string[];
    set enabledStandardArns(value: string[]);
    resetEnabledStandardArns(): void;
    get enabledStandardArnsInput(): string[] | undefined;
    private _serviceEnabled?;
    get serviceEnabled(): boolean | cdktf.IResolvable;
    set serviceEnabled(value: boolean | cdktf.IResolvable);
    get serviceEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _securityControlsConfiguration;
    get securityControlsConfiguration(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfigurationOutputReference;
    putSecurityControlsConfiguration(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration): void;
    resetSecurityControlsConfiguration(): void;
    get securityControlsConfigurationInput(): SecurityhubConfigurationPolicyConfigurationPolicySecurityControlsConfiguration | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy aws_securityhub_configuration_policy}
*/
export declare class SecurityhubConfigurationPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_configuration_policy";
    /**
    * Generates CDKTF code for importing a SecurityhubConfigurationPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubConfigurationPolicy to import
    * @param importFromId The id of the existing SecurityhubConfigurationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubConfigurationPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_configuration_policy aws_securityhub_configuration_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubConfigurationPolicyConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubConfigurationPolicyConfig);
    get arn(): string;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _configurationPolicy;
    get configurationPolicy(): SecurityhubConfigurationPolicyConfigurationPolicyOutputReference;
    putConfigurationPolicy(value: SecurityhubConfigurationPolicyConfigurationPolicy): void;
    get configurationPolicyInput(): SecurityhubConfigurationPolicyConfigurationPolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
