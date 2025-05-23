/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBackupReportPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_report_plan#id DataAwsBackupReportPlan#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_report_plan#name DataAwsBackupReportPlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_report_plan#tags DataAwsBackupReportPlan#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsBackupReportPlanReportDeliveryChannel {
}
export declare function dataAwsBackupReportPlanReportDeliveryChannelToTerraform(struct?: DataAwsBackupReportPlanReportDeliveryChannel): any;
export declare function dataAwsBackupReportPlanReportDeliveryChannelToHclTerraform(struct?: DataAwsBackupReportPlanReportDeliveryChannel): any;
export declare class DataAwsBackupReportPlanReportDeliveryChannelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBackupReportPlanReportDeliveryChannel | undefined;
    set internalValue(value: DataAwsBackupReportPlanReportDeliveryChannel | undefined);
    get formats(): string[];
    get s3BucketName(): string;
    get s3KeyPrefix(): string;
}
export declare class DataAwsBackupReportPlanReportDeliveryChannelList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBackupReportPlanReportDeliveryChannelOutputReference;
}
export interface DataAwsBackupReportPlanReportSetting {
}
export declare function dataAwsBackupReportPlanReportSettingToTerraform(struct?: DataAwsBackupReportPlanReportSetting): any;
export declare function dataAwsBackupReportPlanReportSettingToHclTerraform(struct?: DataAwsBackupReportPlanReportSetting): any;
export declare class DataAwsBackupReportPlanReportSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBackupReportPlanReportSetting | undefined;
    set internalValue(value: DataAwsBackupReportPlanReportSetting | undefined);
    get accounts(): string[];
    get frameworkArns(): string[];
    get numberOfFrameworks(): number;
    get organizationUnits(): string[];
    get regions(): string[];
    get reportTemplate(): string;
}
export declare class DataAwsBackupReportPlanReportSettingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBackupReportPlanReportSettingOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_report_plan aws_backup_report_plan}
*/
export declare class DataAwsBackupReportPlan extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_backup_report_plan";
    /**
    * Generates CDKTF code for importing a DataAwsBackupReportPlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBackupReportPlan to import
    * @param importFromId The id of the existing DataAwsBackupReportPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_report_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBackupReportPlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/backup_report_plan aws_backup_report_plan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupReportPlanConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBackupReportPlanConfig);
    get arn(): string;
    get creationTime(): string;
    get deploymentStatus(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _reportDeliveryChannel;
    get reportDeliveryChannel(): DataAwsBackupReportPlanReportDeliveryChannelList;
    private _reportSetting;
    get reportSetting(): DataAwsBackupReportPlanReportSettingList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
