/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#custom_key_store_id KmsKey#custom_key_store_id}
    */
    readonly customKeyStoreId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}
    */
    readonly customerMasterKeySpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}
    */
    readonly deletionWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#description KmsKey#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#enable_key_rotation KmsKey#enable_key_rotation}
    */
    readonly enableKeyRotation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#id KmsKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#is_enabled KmsKey#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#key_usage KmsKey#key_usage}
    */
    readonly keyUsage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#multi_region KmsKey#multi_region}
    */
    readonly multiRegion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#policy KmsKey#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#rotation_period_in_days KmsKey#rotation_period_in_days}
    */
    readonly rotationPeriodInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#tags KmsKey#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#tags_all KmsKey#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#xks_key_id KmsKey#xks_key_id}
    */
    readonly xksKeyId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#timeouts KmsKey#timeouts}
    */
    readonly timeouts?: KmsKeyTimeouts;
}
export interface KmsKeyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#create KmsKey#create}
    */
    readonly create?: string;
}
export declare function kmsKeyTimeoutsToTerraform(struct?: KmsKeyTimeouts | cdktf.IResolvable): any;
export declare function kmsKeyTimeoutsToHclTerraform(struct?: KmsKeyTimeouts | cdktf.IResolvable): any;
export declare class KmsKeyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KmsKeyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KmsKeyTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key aws_kms_key}
*/
export declare class KmsKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kms_key";
    /**
    * Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KmsKey to import
    * @param importFromId The id of the existing KmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KmsKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_key aws_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsKeyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: KmsKeyConfig);
    get arn(): string;
    private _bypassPolicyLockoutSafetyCheck?;
    get bypassPolicyLockoutSafetyCheck(): boolean | cdktf.IResolvable;
    set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable);
    resetBypassPolicyLockoutSafetyCheck(): void;
    get bypassPolicyLockoutSafetyCheckInput(): boolean | cdktf.IResolvable | undefined;
    private _customKeyStoreId?;
    get customKeyStoreId(): string;
    set customKeyStoreId(value: string);
    resetCustomKeyStoreId(): void;
    get customKeyStoreIdInput(): string | undefined;
    private _customerMasterKeySpec?;
    get customerMasterKeySpec(): string;
    set customerMasterKeySpec(value: string);
    resetCustomerMasterKeySpec(): void;
    get customerMasterKeySpecInput(): string | undefined;
    private _deletionWindowInDays?;
    get deletionWindowInDays(): number;
    set deletionWindowInDays(value: number);
    resetDeletionWindowInDays(): void;
    get deletionWindowInDaysInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enableKeyRotation?;
    get enableKeyRotation(): boolean | cdktf.IResolvable;
    set enableKeyRotation(value: boolean | cdktf.IResolvable);
    resetEnableKeyRotation(): void;
    get enableKeyRotationInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _isEnabled?;
    get isEnabled(): boolean | cdktf.IResolvable;
    set isEnabled(value: boolean | cdktf.IResolvable);
    resetIsEnabled(): void;
    get isEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get keyId(): string;
    private _keyUsage?;
    get keyUsage(): string;
    set keyUsage(value: string);
    resetKeyUsage(): void;
    get keyUsageInput(): string | undefined;
    private _multiRegion?;
    get multiRegion(): boolean | cdktf.IResolvable;
    set multiRegion(value: boolean | cdktf.IResolvable);
    resetMultiRegion(): void;
    get multiRegionInput(): boolean | cdktf.IResolvable | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _rotationPeriodInDays?;
    get rotationPeriodInDays(): number;
    set rotationPeriodInDays(value: number);
    resetRotationPeriodInDays(): void;
    get rotationPeriodInDaysInput(): number | undefined;
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
    private _xksKeyId?;
    get xksKeyId(): string;
    set xksKeyId(value: string);
    resetXksKeyId(): void;
    get xksKeyIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): KmsKeyTimeoutsOutputReference;
    putTimeouts(value: KmsKeyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KmsKeyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
