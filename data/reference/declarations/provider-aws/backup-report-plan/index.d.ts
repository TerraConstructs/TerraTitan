/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupReportPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#description BackupReportPlan#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#id BackupReportPlan#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#name BackupReportPlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#tags BackupReportPlan#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#tags_all BackupReportPlan#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * report_delivery_channel block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}
    */
    readonly reportDeliveryChannel: BackupReportPlanReportDeliveryChannel;
    /**
    * report_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#report_setting BackupReportPlan#report_setting}
    */
    readonly reportSetting: BackupReportPlanReportSetting;
}
export interface BackupReportPlanReportDeliveryChannel {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#formats BackupReportPlan#formats}
    */
    readonly formats?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export declare function backupReportPlanReportDeliveryChannelToTerraform(struct?: BackupReportPlanReportDeliveryChannelOutputReference | BackupReportPlanReportDeliveryChannel): any;
export declare function backupReportPlanReportDeliveryChannelToHclTerraform(struct?: BackupReportPlanReportDeliveryChannelOutputReference | BackupReportPlanReportDeliveryChannel): any;
export declare class BackupReportPlanReportDeliveryChannelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BackupReportPlanReportDeliveryChannel | undefined;
    set internalValue(value: BackupReportPlanReportDeliveryChannel | undefined);
    private _formats?;
    get formats(): string[];
    set formats(value: string[]);
    resetFormats(): void;
    get formatsInput(): string[] | undefined;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
}
export interface BackupReportPlanReportSetting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#accounts BackupReportPlan#accounts}
    */
    readonly accounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#framework_arns BackupReportPlan#framework_arns}
    */
    readonly frameworkArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#number_of_frameworks BackupReportPlan#number_of_frameworks}
    */
    readonly numberOfFrameworks?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#organization_units BackupReportPlan#organization_units}
    */
    readonly organizationUnits?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#regions BackupReportPlan#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#report_template BackupReportPlan#report_template}
    */
    readonly reportTemplate: string;
}
export declare function backupReportPlanReportSettingToTerraform(struct?: BackupReportPlanReportSettingOutputReference | BackupReportPlanReportSetting): any;
export declare function backupReportPlanReportSettingToHclTerraform(struct?: BackupReportPlanReportSettingOutputReference | BackupReportPlanReportSetting): any;
export declare class BackupReportPlanReportSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BackupReportPlanReportSetting | undefined;
    set internalValue(value: BackupReportPlanReportSetting | undefined);
    private _accounts?;
    get accounts(): string[];
    set accounts(value: string[]);
    resetAccounts(): void;
    get accountsInput(): string[] | undefined;
    private _frameworkArns?;
    get frameworkArns(): string[];
    set frameworkArns(value: string[]);
    resetFrameworkArns(): void;
    get frameworkArnsInput(): string[] | undefined;
    private _numberOfFrameworks?;
    get numberOfFrameworks(): number;
    set numberOfFrameworks(value: number);
    resetNumberOfFrameworks(): void;
    get numberOfFrameworksInput(): number | undefined;
    private _organizationUnits?;
    get organizationUnits(): string[];
    set organizationUnits(value: string[]);
    resetOrganizationUnits(): void;
    get organizationUnitsInput(): string[] | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
    private _reportTemplate?;
    get reportTemplate(): string;
    set reportTemplate(value: string);
    get reportTemplateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan aws_backup_report_plan}
*/
export declare class BackupReportPlan extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_backup_report_plan";
    /**
    * Generates CDKTF code for importing a BackupReportPlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BackupReportPlan to import
    * @param importFromId The id of the existing BackupReportPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BackupReportPlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_report_plan aws_backup_report_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupReportPlanConfig
    */
    constructor(scope: Construct, id: string, config: BackupReportPlanConfig);
    get arn(): string;
    get creationTime(): string;
    get deploymentStatus(): string;
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
    private _reportDeliveryChannel;
    get reportDeliveryChannel(): BackupReportPlanReportDeliveryChannelOutputReference;
    putReportDeliveryChannel(value: BackupReportPlanReportDeliveryChannel): void;
    get reportDeliveryChannelInput(): BackupReportPlanReportDeliveryChannel | undefined;
    private _reportSetting;
    get reportSetting(): BackupReportPlanReportSettingOutputReference;
    putReportSetting(value: BackupReportPlanReportSetting): void;
    get reportSettingInput(): BackupReportPlanReportSetting | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
