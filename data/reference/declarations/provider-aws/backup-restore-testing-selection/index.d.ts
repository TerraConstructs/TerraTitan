/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupRestoreTestingSelectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}
    */
    readonly protectedResourceArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}
    */
    readonly protectedResourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}
    */
    readonly restoreMetadataOverrides?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}
    */
    readonly restoreTestingPlanName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}
    */
    readonly validationWindowHours?: number;
    /**
    * protected_resource_conditions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}
    */
    readonly protectedResourceConditions?: BackupRestoreTestingSelectionProtectedResourceConditions[] | cdktf.IResolvable;
}
export interface BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}
    */
    readonly value: string;
}
export declare function backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktf.IResolvable): any;
export declare function backupRestoreTestingSelectionProtectedResourceConditionsStringEqualsToHclTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktf.IResolvable): any;
export declare class BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktf.IResolvable | undefined;
    set internalValue(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference;
}
export interface BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}
    */
    readonly value: string;
}
export declare function backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktf.IResolvable): any;
export declare function backupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsToHclTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktf.IResolvable): any;
export declare class BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktf.IResolvable | undefined;
    set internalValue(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference;
}
export interface BackupRestoreTestingSelectionProtectedResourceConditions {
    /**
    * string_equals block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#string_equals BackupRestoreTestingSelection#string_equals}
    */
    readonly stringEquals?: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | cdktf.IResolvable;
    /**
    * string_not_equals block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#string_not_equals BackupRestoreTestingSelection#string_not_equals}
    */
    readonly stringNotEquals?: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | cdktf.IResolvable;
}
export declare function backupRestoreTestingSelectionProtectedResourceConditionsToTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditions | cdktf.IResolvable): any;
export declare function backupRestoreTestingSelectionProtectedResourceConditionsToHclTerraform(struct?: BackupRestoreTestingSelectionProtectedResourceConditions | cdktf.IResolvable): any;
export declare class BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupRestoreTestingSelectionProtectedResourceConditions | cdktf.IResolvable | undefined;
    set internalValue(value: BackupRestoreTestingSelectionProtectedResourceConditions | cdktf.IResolvable | undefined);
    private _stringEquals;
    get stringEquals(): BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList;
    putStringEquals(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | cdktf.IResolvable): void;
    resetStringEquals(): void;
    get stringEqualsInput(): cdktf.IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals[] | undefined;
    private _stringNotEquals;
    get stringNotEquals(): BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList;
    putStringNotEquals(value: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | cdktf.IResolvable): void;
    resetStringNotEquals(): void;
    get stringNotEqualsInput(): cdktf.IResolvable | BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals[] | undefined;
}
export declare class BackupRestoreTestingSelectionProtectedResourceConditionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupRestoreTestingSelectionProtectedResourceConditions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection aws_backup_restore_testing_selection}
*/
export declare class BackupRestoreTestingSelection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_backup_restore_testing_selection";
    /**
    * Generates CDKTF code for importing a BackupRestoreTestingSelection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BackupRestoreTestingSelection to import
    * @param importFromId The id of the existing BackupRestoreTestingSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BackupRestoreTestingSelection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_restore_testing_selection aws_backup_restore_testing_selection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupRestoreTestingSelectionConfig
    */
    constructor(scope: Construct, id: string, config: BackupRestoreTestingSelectionConfig);
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _protectedResourceArns?;
    get protectedResourceArns(): string[];
    set protectedResourceArns(value: string[]);
    resetProtectedResourceArns(): void;
    get protectedResourceArnsInput(): string[] | undefined;
    private _protectedResourceType?;
    get protectedResourceType(): string;
    set protectedResourceType(value: string);
    get protectedResourceTypeInput(): string | undefined;
    private _restoreMetadataOverrides?;
    get restoreMetadataOverrides(): {
        [key: string]: string;
    };
    set restoreMetadataOverrides(value: {
        [key: string]: string;
    });
    resetRestoreMetadataOverrides(): void;
    get restoreMetadataOverridesInput(): {
        [key: string]: string;
    } | undefined;
    private _restoreTestingPlanName?;
    get restoreTestingPlanName(): string;
    set restoreTestingPlanName(value: string);
    get restoreTestingPlanNameInput(): string | undefined;
    private _validationWindowHours?;
    get validationWindowHours(): number;
    set validationWindowHours(value: number);
    resetValidationWindowHours(): void;
    get validationWindowHoursInput(): number | undefined;
    private _protectedResourceConditions;
    get protectedResourceConditions(): BackupRestoreTestingSelectionProtectedResourceConditionsList;
    putProtectedResourceConditions(value: BackupRestoreTestingSelectionProtectedResourceConditions[] | cdktf.IResolvable): void;
    resetProtectedResourceConditions(): void;
    get protectedResourceConditionsInput(): cdktf.IResolvable | BackupRestoreTestingSelectionProtectedResourceConditions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
