/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3TablesTableBucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}
    */
    readonly encryptionConfiguration?: S3TablesTableBucketEncryptionConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#maintenance_configuration S3TablesTableBucket#maintenance_configuration}
    */
    readonly maintenanceConfiguration?: S3TablesTableBucketMaintenanceConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#name S3TablesTableBucket#name}
    */
    readonly name: string;
}
export interface S3TablesTableBucketEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}
    */
    readonly sseAlgorithm?: string;
}
export declare function s3TablesTableBucketEncryptionConfigurationToTerraform(struct?: S3TablesTableBucketEncryptionConfiguration | cdktf.IResolvable): any;
export declare function s3TablesTableBucketEncryptionConfigurationToHclTerraform(struct?: S3TablesTableBucketEncryptionConfiguration | cdktf.IResolvable): any;
export declare class S3TablesTableBucketEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableBucketEncryptionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableBucketEncryptionConfiguration | cdktf.IResolvable | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _sseAlgorithm?;
    get sseAlgorithm(): string;
    set sseAlgorithm(value: string);
    resetSseAlgorithm(): void;
    get sseAlgorithmInput(): string | undefined;
}
export interface S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#non_current_days S3TablesTableBucket#non_current_days}
    */
    readonly nonCurrentDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}
    */
    readonly unreferencedDays?: number;
}
export declare function s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsToTerraform(struct?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings | cdktf.IResolvable): any;
export declare function s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsToHclTerraform(struct?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings | cdktf.IResolvable): any;
export declare class S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings | cdktf.IResolvable | undefined);
    private _nonCurrentDays?;
    get nonCurrentDays(): number;
    set nonCurrentDays(value: number);
    resetNonCurrentDays(): void;
    get nonCurrentDaysInput(): number | undefined;
    private _unreferencedDays?;
    get unreferencedDays(): number;
    set unreferencedDays(value: number);
    resetUnreferencedDays(): void;
    get unreferencedDaysInput(): number | undefined;
}
export interface S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#settings S3TablesTableBucket#settings}
    */
    readonly settings?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}
    */
    readonly status?: string;
}
export declare function s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalToTerraform(struct?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval | cdktf.IResolvable): any;
export declare function s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalToHclTerraform(struct?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval | cdktf.IResolvable): any;
export declare class S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval | cdktf.IResolvable | undefined);
    private _settings;
    get settings(): S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference;
    putSettings(value: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings): void;
    resetSettings(): void;
    get settingsInput(): cdktf.IResolvable | S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface S3TablesTableBucketMaintenanceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#iceberg_unreferenced_file_removal S3TablesTableBucket#iceberg_unreferenced_file_removal}
    */
    readonly icebergUnreferencedFileRemoval?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval;
}
export declare function s3TablesTableBucketMaintenanceConfigurationToTerraform(struct?: S3TablesTableBucketMaintenanceConfiguration | cdktf.IResolvable): any;
export declare function s3TablesTableBucketMaintenanceConfigurationToHclTerraform(struct?: S3TablesTableBucketMaintenanceConfiguration | cdktf.IResolvable): any;
export declare class S3TablesTableBucketMaintenanceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableBucketMaintenanceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableBucketMaintenanceConfiguration | cdktf.IResolvable | undefined);
    private _icebergUnreferencedFileRemoval;
    get icebergUnreferencedFileRemoval(): S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference;
    putIcebergUnreferencedFileRemoval(value: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval): void;
    resetIcebergUnreferencedFileRemoval(): void;
    get icebergUnreferencedFileRemovalInput(): cdktf.IResolvable | S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket aws_s3tables_table_bucket}
*/
export declare class S3TablesTableBucket extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3tables_table_bucket";
    /**
    * Generates CDKTF code for importing a S3TablesTableBucket resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3TablesTableBucket to import
    * @param importFromId The id of the existing S3TablesTableBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3TablesTableBucket to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket aws_s3tables_table_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3TablesTableBucketConfig
    */
    constructor(scope: Construct, id: string, config: S3TablesTableBucketConfig);
    get arn(): string;
    get createdAt(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): S3TablesTableBucketEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: S3TablesTableBucketEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): cdktf.IResolvable | S3TablesTableBucketEncryptionConfiguration | undefined;
    private _maintenanceConfiguration;
    get maintenanceConfiguration(): S3TablesTableBucketMaintenanceConfigurationOutputReference;
    putMaintenanceConfiguration(value: S3TablesTableBucketMaintenanceConfiguration): void;
    resetMaintenanceConfiguration(): void;
    get maintenanceConfigurationInput(): cdktf.IResolvable | S3TablesTableBucketMaintenanceConfiguration | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get ownerAccountId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
