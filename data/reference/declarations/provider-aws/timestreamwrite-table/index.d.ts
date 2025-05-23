/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TimestreamwriteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#database_name TimestreamwriteTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#id TimestreamwriteTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#table_name TimestreamwriteTable#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#tags TimestreamwriteTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#tags_all TimestreamwriteTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * magnetic_store_write_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#magnetic_store_write_properties TimestreamwriteTable#magnetic_store_write_properties}
    */
    readonly magneticStoreWriteProperties?: TimestreamwriteTableMagneticStoreWriteProperties;
    /**
    * retention_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#retention_properties TimestreamwriteTable#retention_properties}
    */
    readonly retentionProperties?: TimestreamwriteTableRetentionProperties;
    /**
    * schema block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#schema TimestreamwriteTable#schema}
    */
    readonly schema?: TimestreamwriteTableSchema;
}
export interface TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#bucket_name TimestreamwriteTable#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#encryption_option TimestreamwriteTable#encryption_option}
    */
    readonly encryptionOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#kms_key_id TimestreamwriteTable#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#object_key_prefix TimestreamwriteTable#object_key_prefix}
    */
    readonly objectKeyPrefix?: string;
}
export declare function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform(struct?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference | TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration): any;
export declare function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToHclTerraform(struct?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference | TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration): any;
export declare class TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration | undefined;
    set internalValue(value: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _encryptionOption?;
    get encryptionOption(): string;
    set encryptionOption(value: string);
    resetEncryptionOption(): void;
    get encryptionOptionInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _objectKeyPrefix?;
    get objectKeyPrefix(): string;
    set objectKeyPrefix(value: string);
    resetObjectKeyPrefix(): void;
    get objectKeyPrefixInput(): string | undefined;
}
export interface TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#s3_configuration TimestreamwriteTable#s3_configuration}
    */
    readonly s3Configuration?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration;
}
export declare function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform(struct?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference | TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation): any;
export declare function timestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToHclTerraform(struct?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference | TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation): any;
export declare class TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation | undefined;
    set internalValue(value: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation | undefined);
    private _s3Configuration;
    get s3Configuration(): TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference;
    putS3Configuration(value: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration): void;
    resetS3Configuration(): void;
    get s3ConfigurationInput(): TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration | undefined;
}
export interface TimestreamwriteTableMagneticStoreWriteProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#enable_magnetic_store_writes TimestreamwriteTable#enable_magnetic_store_writes}
    */
    readonly enableMagneticStoreWrites?: boolean | cdktf.IResolvable;
    /**
    * magnetic_store_rejected_data_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#magnetic_store_rejected_data_location TimestreamwriteTable#magnetic_store_rejected_data_location}
    */
    readonly magneticStoreRejectedDataLocation?: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation;
}
export declare function timestreamwriteTableMagneticStoreWritePropertiesToTerraform(struct?: TimestreamwriteTableMagneticStoreWritePropertiesOutputReference | TimestreamwriteTableMagneticStoreWriteProperties): any;
export declare function timestreamwriteTableMagneticStoreWritePropertiesToHclTerraform(struct?: TimestreamwriteTableMagneticStoreWritePropertiesOutputReference | TimestreamwriteTableMagneticStoreWriteProperties): any;
export declare class TimestreamwriteTableMagneticStoreWritePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TimestreamwriteTableMagneticStoreWriteProperties | undefined;
    set internalValue(value: TimestreamwriteTableMagneticStoreWriteProperties | undefined);
    private _enableMagneticStoreWrites?;
    get enableMagneticStoreWrites(): boolean | cdktf.IResolvable;
    set enableMagneticStoreWrites(value: boolean | cdktf.IResolvable);
    resetEnableMagneticStoreWrites(): void;
    get enableMagneticStoreWritesInput(): boolean | cdktf.IResolvable | undefined;
    private _magneticStoreRejectedDataLocation;
    get magneticStoreRejectedDataLocation(): TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference;
    putMagneticStoreRejectedDataLocation(value: TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation): void;
    resetMagneticStoreRejectedDataLocation(): void;
    get magneticStoreRejectedDataLocationInput(): TimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation | undefined;
}
export interface TimestreamwriteTableRetentionProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#magnetic_store_retention_period_in_days TimestreamwriteTable#magnetic_store_retention_period_in_days}
    */
    readonly magneticStoreRetentionPeriodInDays: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#memory_store_retention_period_in_hours TimestreamwriteTable#memory_store_retention_period_in_hours}
    */
    readonly memoryStoreRetentionPeriodInHours: number;
}
export declare function timestreamwriteTableRetentionPropertiesToTerraform(struct?: TimestreamwriteTableRetentionPropertiesOutputReference | TimestreamwriteTableRetentionProperties): any;
export declare function timestreamwriteTableRetentionPropertiesToHclTerraform(struct?: TimestreamwriteTableRetentionPropertiesOutputReference | TimestreamwriteTableRetentionProperties): any;
export declare class TimestreamwriteTableRetentionPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TimestreamwriteTableRetentionProperties | undefined;
    set internalValue(value: TimestreamwriteTableRetentionProperties | undefined);
    private _magneticStoreRetentionPeriodInDays?;
    get magneticStoreRetentionPeriodInDays(): number;
    set magneticStoreRetentionPeriodInDays(value: number);
    get magneticStoreRetentionPeriodInDaysInput(): number | undefined;
    private _memoryStoreRetentionPeriodInHours?;
    get memoryStoreRetentionPeriodInHours(): number;
    set memoryStoreRetentionPeriodInHours(value: number);
    get memoryStoreRetentionPeriodInHoursInput(): number | undefined;
}
export interface TimestreamwriteTableSchemaCompositePartitionKey {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#enforcement_in_record TimestreamwriteTable#enforcement_in_record}
    */
    readonly enforcementInRecord?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#name TimestreamwriteTable#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#type TimestreamwriteTable#type}
    */
    readonly type: string;
}
export declare function timestreamwriteTableSchemaCompositePartitionKeyToTerraform(struct?: TimestreamwriteTableSchemaCompositePartitionKeyOutputReference | TimestreamwriteTableSchemaCompositePartitionKey): any;
export declare function timestreamwriteTableSchemaCompositePartitionKeyToHclTerraform(struct?: TimestreamwriteTableSchemaCompositePartitionKeyOutputReference | TimestreamwriteTableSchemaCompositePartitionKey): any;
export declare class TimestreamwriteTableSchemaCompositePartitionKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TimestreamwriteTableSchemaCompositePartitionKey | undefined;
    set internalValue(value: TimestreamwriteTableSchemaCompositePartitionKey | undefined);
    private _enforcementInRecord?;
    get enforcementInRecord(): string;
    set enforcementInRecord(value: string);
    resetEnforcementInRecord(): void;
    get enforcementInRecordInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface TimestreamwriteTableSchema {
    /**
    * composite_partition_key block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#composite_partition_key TimestreamwriteTable#composite_partition_key}
    */
    readonly compositePartitionKey?: TimestreamwriteTableSchemaCompositePartitionKey;
}
export declare function timestreamwriteTableSchemaToTerraform(struct?: TimestreamwriteTableSchemaOutputReference | TimestreamwriteTableSchema): any;
export declare function timestreamwriteTableSchemaToHclTerraform(struct?: TimestreamwriteTableSchemaOutputReference | TimestreamwriteTableSchema): any;
export declare class TimestreamwriteTableSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TimestreamwriteTableSchema | undefined;
    set internalValue(value: TimestreamwriteTableSchema | undefined);
    private _compositePartitionKey;
    get compositePartitionKey(): TimestreamwriteTableSchemaCompositePartitionKeyOutputReference;
    putCompositePartitionKey(value: TimestreamwriteTableSchemaCompositePartitionKey): void;
    resetCompositePartitionKey(): void;
    get compositePartitionKeyInput(): TimestreamwriteTableSchemaCompositePartitionKey | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table aws_timestreamwrite_table}
*/
export declare class TimestreamwriteTable extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_timestreamwrite_table";
    /**
    * Generates CDKTF code for importing a TimestreamwriteTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TimestreamwriteTable to import
    * @param importFromId The id of the existing TimestreamwriteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TimestreamwriteTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/timestreamwrite_table aws_timestreamwrite_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamwriteTableConfig
    */
    constructor(scope: Construct, id: string, config: TimestreamwriteTableConfig);
    get arn(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
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
    private _magneticStoreWriteProperties;
    get magneticStoreWriteProperties(): TimestreamwriteTableMagneticStoreWritePropertiesOutputReference;
    putMagneticStoreWriteProperties(value: TimestreamwriteTableMagneticStoreWriteProperties): void;
    resetMagneticStoreWriteProperties(): void;
    get magneticStoreWritePropertiesInput(): TimestreamwriteTableMagneticStoreWriteProperties | undefined;
    private _retentionProperties;
    get retentionProperties(): TimestreamwriteTableRetentionPropertiesOutputReference;
    putRetentionProperties(value: TimestreamwriteTableRetentionProperties): void;
    resetRetentionProperties(): void;
    get retentionPropertiesInput(): TimestreamwriteTableRetentionProperties | undefined;
    private _schema;
    get schema(): TimestreamwriteTableSchemaOutputReference;
    putSchema(value: TimestreamwriteTableSchema): void;
    resetSchema(): void;
    get schemaInput(): TimestreamwriteTableSchema | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
