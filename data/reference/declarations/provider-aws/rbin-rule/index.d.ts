/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RbinRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#description RbinRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#resource_type RbinRule#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#tags RbinRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#tags_all RbinRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * lock_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#lock_configuration RbinRule#lock_configuration}
    */
    readonly lockConfiguration?: RbinRuleLockConfiguration;
    /**
    * resource_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#resource_tags RbinRule#resource_tags}
    */
    readonly resourceTags?: RbinRuleResourceTags[] | cdktf.IResolvable;
    /**
    * retention_period block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#retention_period RbinRule#retention_period}
    */
    readonly retentionPeriod: RbinRuleRetentionPeriod;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#timeouts RbinRule#timeouts}
    */
    readonly timeouts?: RbinRuleTimeouts;
}
export interface RbinRuleLockConfigurationUnlockDelay {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#unlock_delay_unit RbinRule#unlock_delay_unit}
    */
    readonly unlockDelayUnit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#unlock_delay_value RbinRule#unlock_delay_value}
    */
    readonly unlockDelayValue: number;
}
export declare function rbinRuleLockConfigurationUnlockDelayToTerraform(struct?: RbinRuleLockConfigurationUnlockDelayOutputReference | RbinRuleLockConfigurationUnlockDelay): any;
export declare function rbinRuleLockConfigurationUnlockDelayToHclTerraform(struct?: RbinRuleLockConfigurationUnlockDelayOutputReference | RbinRuleLockConfigurationUnlockDelay): any;
export declare class RbinRuleLockConfigurationUnlockDelayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RbinRuleLockConfigurationUnlockDelay | undefined;
    set internalValue(value: RbinRuleLockConfigurationUnlockDelay | undefined);
    private _unlockDelayUnit?;
    get unlockDelayUnit(): string;
    set unlockDelayUnit(value: string);
    get unlockDelayUnitInput(): string | undefined;
    private _unlockDelayValue?;
    get unlockDelayValue(): number;
    set unlockDelayValue(value: number);
    get unlockDelayValueInput(): number | undefined;
}
export interface RbinRuleLockConfiguration {
    /**
    * unlock_delay block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#unlock_delay RbinRule#unlock_delay}
    */
    readonly unlockDelay: RbinRuleLockConfigurationUnlockDelay;
}
export declare function rbinRuleLockConfigurationToTerraform(struct?: RbinRuleLockConfigurationOutputReference | RbinRuleLockConfiguration): any;
export declare function rbinRuleLockConfigurationToHclTerraform(struct?: RbinRuleLockConfigurationOutputReference | RbinRuleLockConfiguration): any;
export declare class RbinRuleLockConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RbinRuleLockConfiguration | undefined;
    set internalValue(value: RbinRuleLockConfiguration | undefined);
    private _unlockDelay;
    get unlockDelay(): RbinRuleLockConfigurationUnlockDelayOutputReference;
    putUnlockDelay(value: RbinRuleLockConfigurationUnlockDelay): void;
    get unlockDelayInput(): RbinRuleLockConfigurationUnlockDelay | undefined;
}
export interface RbinRuleResourceTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#resource_tag_key RbinRule#resource_tag_key}
    */
    readonly resourceTagKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#resource_tag_value RbinRule#resource_tag_value}
    */
    readonly resourceTagValue?: string;
}
export declare function rbinRuleResourceTagsToTerraform(struct?: RbinRuleResourceTags | cdktf.IResolvable): any;
export declare function rbinRuleResourceTagsToHclTerraform(struct?: RbinRuleResourceTags | cdktf.IResolvable): any;
export declare class RbinRuleResourceTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RbinRuleResourceTags | cdktf.IResolvable | undefined;
    set internalValue(value: RbinRuleResourceTags | cdktf.IResolvable | undefined);
    private _resourceTagKey?;
    get resourceTagKey(): string;
    set resourceTagKey(value: string);
    get resourceTagKeyInput(): string | undefined;
    private _resourceTagValue?;
    get resourceTagValue(): string;
    set resourceTagValue(value: string);
    resetResourceTagValue(): void;
    get resourceTagValueInput(): string | undefined;
}
export declare class RbinRuleResourceTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RbinRuleResourceTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RbinRuleResourceTagsOutputReference;
}
export interface RbinRuleRetentionPeriod {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#retention_period_unit RbinRule#retention_period_unit}
    */
    readonly retentionPeriodUnit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#retention_period_value RbinRule#retention_period_value}
    */
    readonly retentionPeriodValue: number;
}
export declare function rbinRuleRetentionPeriodToTerraform(struct?: RbinRuleRetentionPeriodOutputReference | RbinRuleRetentionPeriod): any;
export declare function rbinRuleRetentionPeriodToHclTerraform(struct?: RbinRuleRetentionPeriodOutputReference | RbinRuleRetentionPeriod): any;
export declare class RbinRuleRetentionPeriodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RbinRuleRetentionPeriod | undefined;
    set internalValue(value: RbinRuleRetentionPeriod | undefined);
    private _retentionPeriodUnit?;
    get retentionPeriodUnit(): string;
    set retentionPeriodUnit(value: string);
    get retentionPeriodUnitInput(): string | undefined;
    private _retentionPeriodValue?;
    get retentionPeriodValue(): number;
    set retentionPeriodValue(value: number);
    get retentionPeriodValueInput(): number | undefined;
}
export interface RbinRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#create RbinRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#delete RbinRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#update RbinRule#update}
    */
    readonly update?: string;
}
export declare function rbinRuleTimeoutsToTerraform(struct?: RbinRuleTimeouts | cdktf.IResolvable): any;
export declare function rbinRuleTimeoutsToHclTerraform(struct?: RbinRuleTimeouts | cdktf.IResolvable): any;
export declare class RbinRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RbinRuleTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RbinRuleTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule aws_rbin_rule}
*/
export declare class RbinRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rbin_rule";
    /**
    * Generates CDKTF code for importing a RbinRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RbinRule to import
    * @param importFromId The id of the existing RbinRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RbinRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rbin_rule aws_rbin_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RbinRuleConfig
    */
    constructor(scope: Construct, id: string, config: RbinRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lockEndTime(): string;
    get lockState(): string;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
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
    private _lockConfiguration;
    get lockConfiguration(): RbinRuleLockConfigurationOutputReference;
    putLockConfiguration(value: RbinRuleLockConfiguration): void;
    resetLockConfiguration(): void;
    get lockConfigurationInput(): RbinRuleLockConfiguration | undefined;
    private _resourceTags;
    get resourceTags(): RbinRuleResourceTagsList;
    putResourceTags(value: RbinRuleResourceTags[] | cdktf.IResolvable): void;
    resetResourceTags(): void;
    get resourceTagsInput(): cdktf.IResolvable | RbinRuleResourceTags[] | undefined;
    private _retentionPeriod;
    get retentionPeriod(): RbinRuleRetentionPeriodOutputReference;
    putRetentionPeriod(value: RbinRuleRetentionPeriod): void;
    get retentionPeriodInput(): RbinRuleRetentionPeriod | undefined;
    private _timeouts;
    get timeouts(): RbinRuleTimeoutsOutputReference;
    putTimeouts(value: RbinRuleTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RbinRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
