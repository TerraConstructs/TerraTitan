/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#id BackupPlan#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#name BackupPlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#tags BackupPlan#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#tags_all BackupPlan#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * advanced_backup_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#advanced_backup_setting BackupPlan#advanced_backup_setting}
    */
    readonly advancedBackupSetting?: BackupPlanAdvancedBackupSetting[] | cdktf.IResolvable;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#rule BackupPlan#rule}
    */
    readonly rule: BackupPlanRule[] | cdktf.IResolvable;
}
export interface BackupPlanAdvancedBackupSetting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#backup_options BackupPlan#backup_options}
    */
    readonly backupOptions: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#resource_type BackupPlan#resource_type}
    */
    readonly resourceType: string;
}
export declare function backupPlanAdvancedBackupSettingToTerraform(struct?: BackupPlanAdvancedBackupSetting | cdktf.IResolvable): any;
export declare function backupPlanAdvancedBackupSettingToHclTerraform(struct?: BackupPlanAdvancedBackupSetting | cdktf.IResolvable): any;
export declare class BackupPlanAdvancedBackupSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupPlanAdvancedBackupSetting | cdktf.IResolvable | undefined;
    set internalValue(value: BackupPlanAdvancedBackupSetting | cdktf.IResolvable | undefined);
    private _backupOptions?;
    get backupOptions(): {
        [key: string]: string;
    };
    set backupOptions(value: {
        [key: string]: string;
    });
    get backupOptionsInput(): {
        [key: string]: string;
    } | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
}
export declare class BackupPlanAdvancedBackupSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupPlanAdvancedBackupSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupPlanAdvancedBackupSettingOutputReference;
}
export interface BackupPlanRuleCopyActionLifecycle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#cold_storage_after BackupPlan#cold_storage_after}
    */
    readonly coldStorageAfter?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#delete_after BackupPlan#delete_after}
    */
    readonly deleteAfter?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#opt_in_to_archive_for_supported_resources BackupPlan#opt_in_to_archive_for_supported_resources}
    */
    readonly optInToArchiveForSupportedResources?: boolean | cdktf.IResolvable;
}
export declare function backupPlanRuleCopyActionLifecycleToTerraform(struct?: BackupPlanRuleCopyActionLifecycleOutputReference | BackupPlanRuleCopyActionLifecycle): any;
export declare function backupPlanRuleCopyActionLifecycleToHclTerraform(struct?: BackupPlanRuleCopyActionLifecycleOutputReference | BackupPlanRuleCopyActionLifecycle): any;
export declare class BackupPlanRuleCopyActionLifecycleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BackupPlanRuleCopyActionLifecycle | undefined;
    set internalValue(value: BackupPlanRuleCopyActionLifecycle | undefined);
    private _coldStorageAfter?;
    get coldStorageAfter(): number;
    set coldStorageAfter(value: number);
    resetColdStorageAfter(): void;
    get coldStorageAfterInput(): number | undefined;
    private _deleteAfter?;
    get deleteAfter(): number;
    set deleteAfter(value: number);
    resetDeleteAfter(): void;
    get deleteAfterInput(): number | undefined;
    private _optInToArchiveForSupportedResources?;
    get optInToArchiveForSupportedResources(): boolean | cdktf.IResolvable;
    set optInToArchiveForSupportedResources(value: boolean | cdktf.IResolvable);
    resetOptInToArchiveForSupportedResources(): void;
    get optInToArchiveForSupportedResourcesInput(): boolean | cdktf.IResolvable | undefined;
}
export interface BackupPlanRuleCopyAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}
    */
    readonly destinationVaultArn: string;
    /**
    * lifecycle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#lifecycle BackupPlan#lifecycle}
    */
    readonly lifecycle?: BackupPlanRuleCopyActionLifecycle;
}
export declare function backupPlanRuleCopyActionToTerraform(struct?: BackupPlanRuleCopyAction | cdktf.IResolvable): any;
export declare function backupPlanRuleCopyActionToHclTerraform(struct?: BackupPlanRuleCopyAction | cdktf.IResolvable): any;
export declare class BackupPlanRuleCopyActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupPlanRuleCopyAction | cdktf.IResolvable | undefined;
    set internalValue(value: BackupPlanRuleCopyAction | cdktf.IResolvable | undefined);
    private _destinationVaultArn?;
    get destinationVaultArn(): string;
    set destinationVaultArn(value: string);
    get destinationVaultArnInput(): string | undefined;
    private _lifecycle;
    get lifecycle(): BackupPlanRuleCopyActionLifecycleOutputReference;
    putLifecycle(value: BackupPlanRuleCopyActionLifecycle): void;
    resetLifecycle(): void;
    get lifecycleInput(): BackupPlanRuleCopyActionLifecycle | undefined;
}
export declare class BackupPlanRuleCopyActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupPlanRuleCopyAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupPlanRuleCopyActionOutputReference;
}
export interface BackupPlanRuleLifecycle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#cold_storage_after BackupPlan#cold_storage_after}
    */
    readonly coldStorageAfter?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#delete_after BackupPlan#delete_after}
    */
    readonly deleteAfter?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#opt_in_to_archive_for_supported_resources BackupPlan#opt_in_to_archive_for_supported_resources}
    */
    readonly optInToArchiveForSupportedResources?: boolean | cdktf.IResolvable;
}
export declare function backupPlanRuleLifecycleToTerraform(struct?: BackupPlanRuleLifecycleOutputReference | BackupPlanRuleLifecycle): any;
export declare function backupPlanRuleLifecycleToHclTerraform(struct?: BackupPlanRuleLifecycleOutputReference | BackupPlanRuleLifecycle): any;
export declare class BackupPlanRuleLifecycleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BackupPlanRuleLifecycle | undefined;
    set internalValue(value: BackupPlanRuleLifecycle | undefined);
    private _coldStorageAfter?;
    get coldStorageAfter(): number;
    set coldStorageAfter(value: number);
    resetColdStorageAfter(): void;
    get coldStorageAfterInput(): number | undefined;
    private _deleteAfter?;
    get deleteAfter(): number;
    set deleteAfter(value: number);
    resetDeleteAfter(): void;
    get deleteAfterInput(): number | undefined;
    private _optInToArchiveForSupportedResources?;
    get optInToArchiveForSupportedResources(): boolean | cdktf.IResolvable;
    set optInToArchiveForSupportedResources(value: boolean | cdktf.IResolvable);
    resetOptInToArchiveForSupportedResources(): void;
    get optInToArchiveForSupportedResourcesInput(): boolean | cdktf.IResolvable | undefined;
}
export interface BackupPlanRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#completion_window BackupPlan#completion_window}
    */
    readonly completionWindow?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}
    */
    readonly enableContinuousBackup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}
    */
    readonly recoveryPointTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#rule_name BackupPlan#rule_name}
    */
    readonly ruleName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#schedule BackupPlan#schedule}
    */
    readonly schedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#schedule_expression_timezone BackupPlan#schedule_expression_timezone}
    */
    readonly scheduleExpressionTimezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#start_window BackupPlan#start_window}
    */
    readonly startWindow?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#target_vault_name BackupPlan#target_vault_name}
    */
    readonly targetVaultName: string;
    /**
    * copy_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#copy_action BackupPlan#copy_action}
    */
    readonly copyAction?: BackupPlanRuleCopyAction[] | cdktf.IResolvable;
    /**
    * lifecycle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#lifecycle BackupPlan#lifecycle}
    */
    readonly lifecycle?: BackupPlanRuleLifecycle;
}
export declare function backupPlanRuleToTerraform(struct?: BackupPlanRule | cdktf.IResolvable): any;
export declare function backupPlanRuleToHclTerraform(struct?: BackupPlanRule | cdktf.IResolvable): any;
export declare class BackupPlanRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupPlanRule | cdktf.IResolvable | undefined;
    set internalValue(value: BackupPlanRule | cdktf.IResolvable | undefined);
    private _completionWindow?;
    get completionWindow(): number;
    set completionWindow(value: number);
    resetCompletionWindow(): void;
    get completionWindowInput(): number | undefined;
    private _enableContinuousBackup?;
    get enableContinuousBackup(): boolean | cdktf.IResolvable;
    set enableContinuousBackup(value: boolean | cdktf.IResolvable);
    resetEnableContinuousBackup(): void;
    get enableContinuousBackupInput(): boolean | cdktf.IResolvable | undefined;
    private _recoveryPointTags?;
    get recoveryPointTags(): {
        [key: string]: string;
    };
    set recoveryPointTags(value: {
        [key: string]: string;
    });
    resetRecoveryPointTags(): void;
    get recoveryPointTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    get ruleNameInput(): string | undefined;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string | undefined;
    private _scheduleExpressionTimezone?;
    get scheduleExpressionTimezone(): string;
    set scheduleExpressionTimezone(value: string);
    resetScheduleExpressionTimezone(): void;
    get scheduleExpressionTimezoneInput(): string | undefined;
    private _startWindow?;
    get startWindow(): number;
    set startWindow(value: number);
    resetStartWindow(): void;
    get startWindowInput(): number | undefined;
    private _targetVaultName?;
    get targetVaultName(): string;
    set targetVaultName(value: string);
    get targetVaultNameInput(): string | undefined;
    private _copyAction;
    get copyAction(): BackupPlanRuleCopyActionList;
    putCopyAction(value: BackupPlanRuleCopyAction[] | cdktf.IResolvable): void;
    resetCopyAction(): void;
    get copyActionInput(): cdktf.IResolvable | BackupPlanRuleCopyAction[] | undefined;
    private _lifecycle;
    get lifecycle(): BackupPlanRuleLifecycleOutputReference;
    putLifecycle(value: BackupPlanRuleLifecycle): void;
    resetLifecycle(): void;
    get lifecycleInput(): BackupPlanRuleLifecycle | undefined;
}
export declare class BackupPlanRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupPlanRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupPlanRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan aws_backup_plan}
*/
export declare class BackupPlan extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_backup_plan";
    /**
    * Generates CDKTF code for importing a BackupPlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BackupPlan to import
    * @param importFromId The id of the existing BackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BackupPlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_plan aws_backup_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupPlanConfig
    */
    constructor(scope: Construct, id: string, config: BackupPlanConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    get version(): string;
    private _advancedBackupSetting;
    get advancedBackupSetting(): BackupPlanAdvancedBackupSettingList;
    putAdvancedBackupSetting(value: BackupPlanAdvancedBackupSetting[] | cdktf.IResolvable): void;
    resetAdvancedBackupSetting(): void;
    get advancedBackupSettingInput(): cdktf.IResolvable | BackupPlanAdvancedBackupSetting[] | undefined;
    private _rule;
    get rule(): BackupPlanRuleList;
    putRule(value: BackupPlanRule[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | BackupPlanRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
