/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupRestoreTestingPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}
    */
    readonly scheduleExpressionTimezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}
    */
    readonly startWindowHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * recovery_point_selection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#recovery_point_selection BackupRestoreTestingPlan#recovery_point_selection}
    */
    readonly recoveryPointSelection?: BackupRestoreTestingPlanRecoveryPointSelection[] | cdktf.IResolvable;
}
export interface BackupRestoreTestingPlanRecoveryPointSelection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}
    */
    readonly algorithm: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}
    */
    readonly excludeVaults?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}
    */
    readonly includeVaults: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}
    */
    readonly recoveryPointTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}
    */
    readonly selectionWindowDays?: number;
}
export declare function backupRestoreTestingPlanRecoveryPointSelectionToTerraform(struct?: BackupRestoreTestingPlanRecoveryPointSelection | cdktf.IResolvable): any;
export declare function backupRestoreTestingPlanRecoveryPointSelectionToHclTerraform(struct?: BackupRestoreTestingPlanRecoveryPointSelection | cdktf.IResolvable): any;
export declare class BackupRestoreTestingPlanRecoveryPointSelectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupRestoreTestingPlanRecoveryPointSelection | cdktf.IResolvable | undefined;
    set internalValue(value: BackupRestoreTestingPlanRecoveryPointSelection | cdktf.IResolvable | undefined);
    private _algorithm?;
    get algorithm(): string;
    set algorithm(value: string);
    get algorithmInput(): string | undefined;
    private _excludeVaults?;
    get excludeVaults(): string[];
    set excludeVaults(value: string[]);
    resetExcludeVaults(): void;
    get excludeVaultsInput(): string[] | undefined;
    private _includeVaults?;
    get includeVaults(): string[];
    set includeVaults(value: string[]);
    get includeVaultsInput(): string[] | undefined;
    private _recoveryPointTypes?;
    get recoveryPointTypes(): string[];
    set recoveryPointTypes(value: string[]);
    get recoveryPointTypesInput(): string[] | undefined;
    private _selectionWindowDays?;
    get selectionWindowDays(): number;
    set selectionWindowDays(value: number);
    resetSelectionWindowDays(): void;
    get selectionWindowDaysInput(): number | undefined;
}
export declare class BackupRestoreTestingPlanRecoveryPointSelectionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupRestoreTestingPlanRecoveryPointSelection[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupRestoreTestingPlanRecoveryPointSelectionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan aws_backup_restore_testing_plan}
*/
export declare class BackupRestoreTestingPlan extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_backup_restore_testing_plan";
    /**
    * Generates CDKTF code for importing a BackupRestoreTestingPlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BackupRestoreTestingPlan to import
    * @param importFromId The id of the existing BackupRestoreTestingPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BackupRestoreTestingPlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_plan aws_backup_restore_testing_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupRestoreTestingPlanConfig
    */
    constructor(scope: Construct, id: string, config: BackupRestoreTestingPlanConfig);
    get arn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string | undefined;
    private _scheduleExpressionTimezone?;
    get scheduleExpressionTimezone(): string;
    set scheduleExpressionTimezone(value: string);
    resetScheduleExpressionTimezone(): void;
    get scheduleExpressionTimezoneInput(): string | undefined;
    private _startWindowHours?;
    get startWindowHours(): number;
    set startWindowHours(value: number);
    resetStartWindowHours(): void;
    get startWindowHoursInput(): number | undefined;
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
    private _recoveryPointSelection;
    get recoveryPointSelection(): BackupRestoreTestingPlanRecoveryPointSelectionList;
    putRecoveryPointSelection(value: BackupRestoreTestingPlanRecoveryPointSelection[] | cdktf.IResolvable): void;
    resetRecoveryPointSelection(): void;
    get recoveryPointSelectionInput(): cdktf.IResolvable | BackupRestoreTestingPlanRecoveryPointSelection[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
