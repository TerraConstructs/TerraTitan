/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBackupPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/backup_plan#id DataAwsBackupPlan#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/backup_plan#plan_id DataAwsBackupPlan#plan_id}
    */
    readonly planId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/backup_plan#tags DataAwsBackupPlan#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsBackupPlanRuleCopyActionLifecycle {
}
export declare function dataAwsBackupPlanRuleCopyActionLifecycleToTerraform(struct?: DataAwsBackupPlanRuleCopyActionLifecycle): any;
export declare function dataAwsBackupPlanRuleCopyActionLifecycleToHclTerraform(struct?: DataAwsBackupPlanRuleCopyActionLifecycle): any;
export declare class DataAwsBackupPlanRuleCopyActionLifecycleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBackupPlanRuleCopyActionLifecycle | undefined;
    set internalValue(value: DataAwsBackupPlanRuleCopyActionLifecycle | undefined);
    get coldStorageAfter(): number;
    get deleteAfter(): number;
    get optInToArchiveForSupportedResources(): cdktf.IResolvable;
}
export declare class DataAwsBackupPlanRuleCopyActionLifecycleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBackupPlanRuleCopyActionLifecycleOutputReference;
}
export interface DataAwsBackupPlanRuleCopyAction {
}
export declare function dataAwsBackupPlanRuleCopyActionToTerraform(struct?: DataAwsBackupPlanRuleCopyAction): any;
export declare function dataAwsBackupPlanRuleCopyActionToHclTerraform(struct?: DataAwsBackupPlanRuleCopyAction): any;
export declare class DataAwsBackupPlanRuleCopyActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBackupPlanRuleCopyAction | undefined;
    set internalValue(value: DataAwsBackupPlanRuleCopyAction | undefined);
    get destinationVaultArn(): string;
    private _lifecycle;
    get lifecycle(): DataAwsBackupPlanRuleCopyActionLifecycleList;
}
export declare class DataAwsBackupPlanRuleCopyActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBackupPlanRuleCopyActionOutputReference;
}
export interface DataAwsBackupPlanRuleLifecycle {
}
export declare function dataAwsBackupPlanRuleLifecycleToTerraform(struct?: DataAwsBackupPlanRuleLifecycle): any;
export declare function dataAwsBackupPlanRuleLifecycleToHclTerraform(struct?: DataAwsBackupPlanRuleLifecycle): any;
export declare class DataAwsBackupPlanRuleLifecycleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBackupPlanRuleLifecycle | undefined;
    set internalValue(value: DataAwsBackupPlanRuleLifecycle | undefined);
    get coldStorageAfter(): number;
    get deleteAfter(): number;
    get optInToArchiveForSupportedResources(): cdktf.IResolvable;
}
export declare class DataAwsBackupPlanRuleLifecycleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBackupPlanRuleLifecycleOutputReference;
}
export interface DataAwsBackupPlanRule {
}
export declare function dataAwsBackupPlanRuleToTerraform(struct?: DataAwsBackupPlanRule): any;
export declare function dataAwsBackupPlanRuleToHclTerraform(struct?: DataAwsBackupPlanRule): any;
export declare class DataAwsBackupPlanRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBackupPlanRule | undefined;
    set internalValue(value: DataAwsBackupPlanRule | undefined);
    get completionWindow(): number;
    private _copyAction;
    get copyAction(): DataAwsBackupPlanRuleCopyActionList;
    get enableContinuousBackup(): cdktf.IResolvable;
    private _lifecycle;
    get lifecycle(): DataAwsBackupPlanRuleLifecycleList;
    private _recoveryPointTags;
    get recoveryPointTags(): cdktf.StringMap;
    get ruleName(): string;
    get schedule(): string;
    get scheduleExpressionTimezone(): string;
    get startWindow(): number;
    get targetVaultName(): string;
}
export declare class DataAwsBackupPlanRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBackupPlanRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/backup_plan aws_backup_plan}
*/
export declare class DataAwsBackupPlan extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_backup_plan";
    /**
    * Generates CDKTF code for importing a DataAwsBackupPlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBackupPlan to import
    * @param importFromId The id of the existing DataAwsBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/backup_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBackupPlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/backup_plan aws_backup_plan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupPlanConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBackupPlanConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    private _planId?;
    get planId(): string;
    set planId(value: string);
    get planIdInput(): string | undefined;
    private _rule;
    get rule(): DataAwsBackupPlanRuleList;
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
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
