/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PaymentcryptographyKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}
    */
    readonly deletionWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}
    */
    readonly exportable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}
    */
    readonly keyCheckValueAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * key_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#key_attributes PaymentcryptographyKey#key_attributes}
    */
    readonly keyAttributes?: PaymentcryptographyKeyKeyAttributes;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#timeouts PaymentcryptographyKey#timeouts}
    */
    readonly timeouts?: PaymentcryptographyKeyTimeouts;
}
export interface PaymentcryptographyKeyKeyAttributesKeyModesOfUse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}
    */
    readonly decrypt?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}
    */
    readonly deriveKey?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}
    */
    readonly encrypt?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}
    */
    readonly generate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}
    */
    readonly noRestrictions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}
    */
    readonly sign?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}
    */
    readonly unwrap?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}
    */
    readonly verify?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}
    */
    readonly wrap?: boolean | cdktf.IResolvable;
}
export declare function paymentcryptographyKeyKeyAttributesKeyModesOfUseToTerraform(struct?: PaymentcryptographyKeyKeyAttributesKeyModesOfUse | cdktf.IResolvable): any;
export declare function paymentcryptographyKeyKeyAttributesKeyModesOfUseToHclTerraform(struct?: PaymentcryptographyKeyKeyAttributesKeyModesOfUse | cdktf.IResolvable): any;
export declare class PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PaymentcryptographyKeyKeyAttributesKeyModesOfUse | cdktf.IResolvable | undefined;
    set internalValue(value: PaymentcryptographyKeyKeyAttributesKeyModesOfUse | cdktf.IResolvable | undefined);
    private _decrypt?;
    get decrypt(): boolean | cdktf.IResolvable;
    set decrypt(value: boolean | cdktf.IResolvable);
    resetDecrypt(): void;
    get decryptInput(): boolean | cdktf.IResolvable | undefined;
    private _deriveKey?;
    get deriveKey(): boolean | cdktf.IResolvable;
    set deriveKey(value: boolean | cdktf.IResolvable);
    resetDeriveKey(): void;
    get deriveKeyInput(): boolean | cdktf.IResolvable | undefined;
    private _encrypt?;
    get encrypt(): boolean | cdktf.IResolvable;
    set encrypt(value: boolean | cdktf.IResolvable);
    resetEncrypt(): void;
    get encryptInput(): boolean | cdktf.IResolvable | undefined;
    private _generate?;
    get generate(): boolean | cdktf.IResolvable;
    set generate(value: boolean | cdktf.IResolvable);
    resetGenerate(): void;
    get generateInput(): boolean | cdktf.IResolvable | undefined;
    private _noRestrictions?;
    get noRestrictions(): boolean | cdktf.IResolvable;
    set noRestrictions(value: boolean | cdktf.IResolvable);
    resetNoRestrictions(): void;
    get noRestrictionsInput(): boolean | cdktf.IResolvable | undefined;
    private _sign?;
    get sign(): boolean | cdktf.IResolvable;
    set sign(value: boolean | cdktf.IResolvable);
    resetSign(): void;
    get signInput(): boolean | cdktf.IResolvable | undefined;
    private _unwrap?;
    get unwrap(): boolean | cdktf.IResolvable;
    set unwrap(value: boolean | cdktf.IResolvable);
    resetUnwrap(): void;
    get unwrapInput(): boolean | cdktf.IResolvable | undefined;
    private _verify?;
    get verify(): boolean | cdktf.IResolvable;
    set verify(value: boolean | cdktf.IResolvable);
    resetVerify(): void;
    get verifyInput(): boolean | cdktf.IResolvable | undefined;
    private _wrap?;
    get wrap(): boolean | cdktf.IResolvable;
    set wrap(value: boolean | cdktf.IResolvable);
    resetWrap(): void;
    get wrapInput(): boolean | cdktf.IResolvable | undefined;
}
export interface PaymentcryptographyKeyKeyAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}
    */
    readonly keyAlgorithm: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}
    */
    readonly keyClass: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}
    */
    readonly keyUsage: string;
    /**
    * key_modes_of_use block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#key_modes_of_use PaymentcryptographyKey#key_modes_of_use}
    */
    readonly keyModesOfUse?: PaymentcryptographyKeyKeyAttributesKeyModesOfUse;
}
export declare function paymentcryptographyKeyKeyAttributesToTerraform(struct?: PaymentcryptographyKeyKeyAttributes | cdktf.IResolvable): any;
export declare function paymentcryptographyKeyKeyAttributesToHclTerraform(struct?: PaymentcryptographyKeyKeyAttributes | cdktf.IResolvable): any;
export declare class PaymentcryptographyKeyKeyAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PaymentcryptographyKeyKeyAttributes | cdktf.IResolvable | undefined;
    set internalValue(value: PaymentcryptographyKeyKeyAttributes | cdktf.IResolvable | undefined);
    private _keyAlgorithm?;
    get keyAlgorithm(): string;
    set keyAlgorithm(value: string);
    get keyAlgorithmInput(): string | undefined;
    private _keyClass?;
    get keyClass(): string;
    set keyClass(value: string);
    get keyClassInput(): string | undefined;
    private _keyUsage?;
    get keyUsage(): string;
    set keyUsage(value: string);
    get keyUsageInput(): string | undefined;
    private _keyModesOfUse;
    get keyModesOfUse(): PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference;
    putKeyModesOfUse(value: PaymentcryptographyKeyKeyAttributesKeyModesOfUse): void;
    resetKeyModesOfUse(): void;
    get keyModesOfUseInput(): cdktf.IResolvable | PaymentcryptographyKeyKeyAttributesKeyModesOfUse | undefined;
}
export interface PaymentcryptographyKeyTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#create PaymentcryptographyKey#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#delete PaymentcryptographyKey#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#update PaymentcryptographyKey#update}
    */
    readonly update?: string;
}
export declare function paymentcryptographyKeyTimeoutsToTerraform(struct?: PaymentcryptographyKeyTimeouts | cdktf.IResolvable): any;
export declare function paymentcryptographyKeyTimeoutsToHclTerraform(struct?: PaymentcryptographyKeyTimeouts | cdktf.IResolvable): any;
export declare class PaymentcryptographyKeyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PaymentcryptographyKeyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: PaymentcryptographyKeyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key aws_paymentcryptography_key}
*/
export declare class PaymentcryptographyKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_paymentcryptography_key";
    /**
    * Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PaymentcryptographyKey to import
    * @param importFromId The id of the existing PaymentcryptographyKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PaymentcryptographyKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key aws_paymentcryptography_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PaymentcryptographyKeyConfig
    */
    constructor(scope: Construct, id: string, config: PaymentcryptographyKeyConfig);
    get arn(): string;
    private _deletionWindowInDays?;
    get deletionWindowInDays(): number;
    set deletionWindowInDays(value: number);
    resetDeletionWindowInDays(): void;
    get deletionWindowInDaysInput(): number | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _exportable?;
    get exportable(): boolean | cdktf.IResolvable;
    set exportable(value: boolean | cdktf.IResolvable);
    get exportableInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    get keyCheckValue(): string;
    private _keyCheckValueAlgorithm?;
    get keyCheckValueAlgorithm(): string;
    set keyCheckValueAlgorithm(value: string);
    resetKeyCheckValueAlgorithm(): void;
    get keyCheckValueAlgorithmInput(): string | undefined;
    get keyOrigin(): string;
    get keyState(): string;
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
    private _keyAttributes;
    get keyAttributes(): PaymentcryptographyKeyKeyAttributesOutputReference;
    putKeyAttributes(value: PaymentcryptographyKeyKeyAttributes): void;
    resetKeyAttributes(): void;
    get keyAttributesInput(): cdktf.IResolvable | PaymentcryptographyKeyKeyAttributes | undefined;
    private _timeouts;
    get timeouts(): PaymentcryptographyKeyTimeoutsOutputReference;
    putTimeouts(value: PaymentcryptographyKeyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | PaymentcryptographyKeyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
