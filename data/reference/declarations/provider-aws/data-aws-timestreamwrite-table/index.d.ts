/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsTimestreamwriteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/timestreamwrite_table#database_name DataAwsTimestreamwriteTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/timestreamwrite_table#name DataAwsTimestreamwriteTable#name}
    */
    readonly name: string;
}
export interface DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {
}
export declare function dataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToTerraform(struct?: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration): any;
export declare function dataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationToHclTerraform(struct?: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration): any;
export declare class DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration | undefined;
    set internalValue(value: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration | undefined);
    get bucketName(): string;
    get encryptionOption(): string;
    get kmsKeyId(): string;
    get objectKeyPrefix(): string;
}
export declare class DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference;
}
export interface DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {
}
export declare function dataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToTerraform(struct?: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation): any;
export declare function dataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationToHclTerraform(struct?: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation): any;
export declare class DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation | undefined;
    set internalValue(value: DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation | undefined);
    private _s3Configuration;
    get s3Configuration(): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationList;
}
export declare class DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference;
}
export interface DataAwsTimestreamwriteTableMagneticStoreWriteProperties {
}
export declare function dataAwsTimestreamwriteTableMagneticStoreWritePropertiesToTerraform(struct?: DataAwsTimestreamwriteTableMagneticStoreWriteProperties): any;
export declare function dataAwsTimestreamwriteTableMagneticStoreWritePropertiesToHclTerraform(struct?: DataAwsTimestreamwriteTableMagneticStoreWriteProperties): any;
export declare class DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsTimestreamwriteTableMagneticStoreWriteProperties | undefined;
    set internalValue(value: DataAwsTimestreamwriteTableMagneticStoreWriteProperties | undefined);
    get enableMagneticStoreWrites(): cdktf.IResolvable;
    private _magneticStoreRejectedDataLocation;
    get magneticStoreRejectedDataLocation(): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationList;
}
export declare class DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesOutputReference;
}
export interface DataAwsTimestreamwriteTableRetentionProperties {
}
export declare function dataAwsTimestreamwriteTableRetentionPropertiesToTerraform(struct?: DataAwsTimestreamwriteTableRetentionProperties): any;
export declare function dataAwsTimestreamwriteTableRetentionPropertiesToHclTerraform(struct?: DataAwsTimestreamwriteTableRetentionProperties): any;
export declare class DataAwsTimestreamwriteTableRetentionPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsTimestreamwriteTableRetentionProperties | undefined;
    set internalValue(value: DataAwsTimestreamwriteTableRetentionProperties | undefined);
    get magneticStoreRetentionPeriodInDays(): number;
    get memoryStoreRetentionPeriodInHours(): number;
}
export declare class DataAwsTimestreamwriteTableRetentionPropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsTimestreamwriteTableRetentionPropertiesOutputReference;
}
export interface DataAwsTimestreamwriteTableSchemaCompositePartitionKey {
}
export declare function dataAwsTimestreamwriteTableSchemaCompositePartitionKeyToTerraform(struct?: DataAwsTimestreamwriteTableSchemaCompositePartitionKey): any;
export declare function dataAwsTimestreamwriteTableSchemaCompositePartitionKeyToHclTerraform(struct?: DataAwsTimestreamwriteTableSchemaCompositePartitionKey): any;
export declare class DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsTimestreamwriteTableSchemaCompositePartitionKey | undefined;
    set internalValue(value: DataAwsTimestreamwriteTableSchemaCompositePartitionKey | undefined);
    get enforcementInRecord(): string;
    get name(): string;
    get type(): string;
}
export declare class DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsTimestreamwriteTableSchemaCompositePartitionKeyOutputReference;
}
export interface DataAwsTimestreamwriteTableSchema {
}
export declare function dataAwsTimestreamwriteTableSchemaToTerraform(struct?: DataAwsTimestreamwriteTableSchema): any;
export declare function dataAwsTimestreamwriteTableSchemaToHclTerraform(struct?: DataAwsTimestreamwriteTableSchema): any;
export declare class DataAwsTimestreamwriteTableSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsTimestreamwriteTableSchema | undefined;
    set internalValue(value: DataAwsTimestreamwriteTableSchema | undefined);
    private _compositePartitionKey;
    get compositePartitionKey(): DataAwsTimestreamwriteTableSchemaCompositePartitionKeyList;
}
export declare class DataAwsTimestreamwriteTableSchemaList extends cdktf.ComplexList {
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
    get(index: number): DataAwsTimestreamwriteTableSchemaOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/timestreamwrite_table aws_timestreamwrite_table}
*/
export declare class DataAwsTimestreamwriteTable extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_timestreamwrite_table";
    /**
    * Generates CDKTF code for importing a DataAwsTimestreamwriteTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsTimestreamwriteTable to import
    * @param importFromId The id of the existing DataAwsTimestreamwriteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/timestreamwrite_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsTimestreamwriteTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/timestreamwrite_table aws_timestreamwrite_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsTimestreamwriteTableConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsTimestreamwriteTableConfig);
    get arn(): string;
    get creationTime(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    get lastUpdatedTime(): string;
    private _magneticStoreWriteProperties;
    get magneticStoreWriteProperties(): DataAwsTimestreamwriteTableMagneticStoreWritePropertiesList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _retentionProperties;
    get retentionProperties(): DataAwsTimestreamwriteTableRetentionPropertiesList;
    private _schema;
    get schema(): DataAwsTimestreamwriteTableSchemaList;
    get tableStatus(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
