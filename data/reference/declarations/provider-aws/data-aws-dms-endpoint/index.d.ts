/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDmsEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_endpoint#endpoint_id DataAwsDmsEndpoint#endpoint_id}
    */
    readonly endpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_endpoint#id DataAwsDmsEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_endpoint#tags DataAwsDmsEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsDmsEndpointElasticsearchSettings {
}
export declare function dataAwsDmsEndpointElasticsearchSettingsToTerraform(struct?: DataAwsDmsEndpointElasticsearchSettings): any;
export declare function dataAwsDmsEndpointElasticsearchSettingsToHclTerraform(struct?: DataAwsDmsEndpointElasticsearchSettings): any;
export declare class DataAwsDmsEndpointElasticsearchSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDmsEndpointElasticsearchSettings | undefined;
    set internalValue(value: DataAwsDmsEndpointElasticsearchSettings | undefined);
    get endpointUri(): string;
    get errorRetryDuration(): number;
    get fullLoadErrorPercentage(): number;
    get serviceAccessRoleArn(): string;
}
export declare class DataAwsDmsEndpointElasticsearchSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDmsEndpointElasticsearchSettingsOutputReference;
}
export interface DataAwsDmsEndpointKafkaSettings {
}
export declare function dataAwsDmsEndpointKafkaSettingsToTerraform(struct?: DataAwsDmsEndpointKafkaSettings): any;
export declare function dataAwsDmsEndpointKafkaSettingsToHclTerraform(struct?: DataAwsDmsEndpointKafkaSettings): any;
export declare class DataAwsDmsEndpointKafkaSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDmsEndpointKafkaSettings | undefined;
    set internalValue(value: DataAwsDmsEndpointKafkaSettings | undefined);
    get broker(): string;
    get includeControlDetails(): cdktf.IResolvable;
    get includeNullAndEmpty(): cdktf.IResolvable;
    get includePartitionValue(): cdktf.IResolvable;
    get includeTableAlterOperations(): cdktf.IResolvable;
    get includeTransactionDetails(): cdktf.IResolvable;
    get messageFormat(): string;
    get messageMaxBytes(): number;
    get noHexPrefix(): cdktf.IResolvable;
    get partitionIncludeSchemaTable(): cdktf.IResolvable;
    get saslMechanism(): string;
    get saslPassword(): string;
    get saslUsername(): string;
    get securityProtocol(): string;
    get sslCaCertificateArn(): string;
    get sslClientCertificateArn(): string;
    get sslClientKeyArn(): string;
    get sslClientKeyPassword(): string;
    get topic(): string;
}
export declare class DataAwsDmsEndpointKafkaSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDmsEndpointKafkaSettingsOutputReference;
}
export interface DataAwsDmsEndpointKinesisSettings {
}
export declare function dataAwsDmsEndpointKinesisSettingsToTerraform(struct?: DataAwsDmsEndpointKinesisSettings): any;
export declare function dataAwsDmsEndpointKinesisSettingsToHclTerraform(struct?: DataAwsDmsEndpointKinesisSettings): any;
export declare class DataAwsDmsEndpointKinesisSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDmsEndpointKinesisSettings | undefined;
    set internalValue(value: DataAwsDmsEndpointKinesisSettings | undefined);
    get includeControlDetails(): cdktf.IResolvable;
    get includeNullAndEmpty(): cdktf.IResolvable;
    get includePartitionValue(): cdktf.IResolvable;
    get includeTableAlterOperations(): cdktf.IResolvable;
    get includeTransactionDetails(): cdktf.IResolvable;
    get messageFormat(): string;
    get partitionIncludeSchemaTable(): cdktf.IResolvable;
    get serviceAccessRoleArn(): string;
    get streamArn(): string;
}
export declare class DataAwsDmsEndpointKinesisSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDmsEndpointKinesisSettingsOutputReference;
}
export interface DataAwsDmsEndpointMongodbSettings {
}
export declare function dataAwsDmsEndpointMongodbSettingsToTerraform(struct?: DataAwsDmsEndpointMongodbSettings): any;
export declare function dataAwsDmsEndpointMongodbSettingsToHclTerraform(struct?: DataAwsDmsEndpointMongodbSettings): any;
export declare class DataAwsDmsEndpointMongodbSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDmsEndpointMongodbSettings | undefined;
    set internalValue(value: DataAwsDmsEndpointMongodbSettings | undefined);
    get authMechanism(): string;
    get authSource(): string;
    get authType(): string;
    get docsToInvestigate(): string;
    get extractDocId(): string;
    get nestingLevel(): string;
}
export declare class DataAwsDmsEndpointMongodbSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDmsEndpointMongodbSettingsOutputReference;
}
export interface DataAwsDmsEndpointPostgresSettings {
}
export declare function dataAwsDmsEndpointPostgresSettingsToTerraform(struct?: DataAwsDmsEndpointPostgresSettings): any;
export declare function dataAwsDmsEndpointPostgresSettingsToHclTerraform(struct?: DataAwsDmsEndpointPostgresSettings): any;
export declare class DataAwsDmsEndpointPostgresSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDmsEndpointPostgresSettings | undefined;
    set internalValue(value: DataAwsDmsEndpointPostgresSettings | undefined);
    get afterConnectScript(): string;
    get babelfishDatabaseName(): string;
    get captureDdls(): cdktf.IResolvable;
    get databaseMode(): string;
    get ddlArtifactsSchema(): string;
    get executeTimeout(): number;
    get failTasksOnLobTruncation(): cdktf.IResolvable;
    get heartbeatEnable(): cdktf.IResolvable;
    get heartbeatFrequency(): number;
    get heartbeatSchema(): string;
    get mapBooleanAsBoolean(): cdktf.IResolvable;
    get mapJsonbAsClob(): cdktf.IResolvable;
    get mapLongVarcharAs(): string;
    get maxFileSize(): number;
    get pluginName(): string;
    get slotName(): string;
}
export declare class DataAwsDmsEndpointPostgresSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDmsEndpointPostgresSettingsOutputReference;
}
export interface DataAwsDmsEndpointRedisSettings {
}
export declare function dataAwsDmsEndpointRedisSettingsToTerraform(struct?: DataAwsDmsEndpointRedisSettings): any;
export declare function dataAwsDmsEndpointRedisSettingsToHclTerraform(struct?: DataAwsDmsEndpointRedisSettings): any;
export declare class DataAwsDmsEndpointRedisSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDmsEndpointRedisSettings | undefined;
    set internalValue(value: DataAwsDmsEndpointRedisSettings | undefined);
    get authPassword(): string;
    get authType(): string;
    get authUserName(): string;
    get port(): number;
    get serverName(): string;
    get sslCaCertificateArn(): string;
    get sslSecurityProtocol(): string;
}
export declare class DataAwsDmsEndpointRedisSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDmsEndpointRedisSettingsOutputReference;
}
export interface DataAwsDmsEndpointRedshiftSettings {
}
export declare function dataAwsDmsEndpointRedshiftSettingsToTerraform(struct?: DataAwsDmsEndpointRedshiftSettings): any;
export declare function dataAwsDmsEndpointRedshiftSettingsToHclTerraform(struct?: DataAwsDmsEndpointRedshiftSettings): any;
export declare class DataAwsDmsEndpointRedshiftSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDmsEndpointRedshiftSettings | undefined;
    set internalValue(value: DataAwsDmsEndpointRedshiftSettings | undefined);
    get bucketFolder(): string;
    get bucketName(): string;
    get encryptionMode(): string;
    get serverSideEncryptionKmsKeyId(): string;
    get serviceAccessRoleArn(): string;
}
export declare class DataAwsDmsEndpointRedshiftSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDmsEndpointRedshiftSettingsOutputReference;
}
export interface DataAwsDmsEndpointS3Settings {
}
export declare function dataAwsDmsEndpointS3SettingsToTerraform(struct?: DataAwsDmsEndpointS3Settings): any;
export declare function dataAwsDmsEndpointS3SettingsToHclTerraform(struct?: DataAwsDmsEndpointS3Settings): any;
export declare class DataAwsDmsEndpointS3SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDmsEndpointS3Settings | undefined;
    set internalValue(value: DataAwsDmsEndpointS3Settings | undefined);
    get addColumnName(): cdktf.IResolvable;
    get bucketFolder(): string;
    get bucketName(): string;
    get cannedAclForObjects(): string;
    get cdcInsertsAndUpdates(): cdktf.IResolvable;
    get cdcInsertsOnly(): cdktf.IResolvable;
    get cdcMaxBatchInterval(): number;
    get cdcMinFileSize(): number;
    get cdcPath(): string;
    get compressionType(): string;
    get csvDelimiter(): string;
    get csvNoSupValue(): string;
    get csvNullValue(): string;
    get csvRowDelimiter(): string;
    get dataFormat(): string;
    get dataPageSize(): number;
    get datePartitionDelimiter(): string;
    get datePartitionEnabled(): cdktf.IResolvable;
    get datePartitionSequence(): string;
    get dictPageSizeLimit(): number;
    get enableStatistics(): cdktf.IResolvable;
    get encodingType(): string;
    get encryptionMode(): string;
    get externalTableDefinition(): string;
    get glueCatalogGeneration(): cdktf.IResolvable;
    get ignoreHeaderRows(): number;
    get ignoreHeadersRow(): number;
    get includeOpForFullLoad(): cdktf.IResolvable;
    get maxFileSize(): number;
    get parquetTimestampInMillisecond(): cdktf.IResolvable;
    get parquetVersion(): string;
    get preserveTransactions(): cdktf.IResolvable;
    get rfc4180(): cdktf.IResolvable;
    get rowGroupLength(): number;
    get serverSideEncryptionKmsKeyId(): string;
    get serviceAccessRoleArn(): string;
    get timestampColumnName(): string;
    get useCsvNoSupValue(): cdktf.IResolvable;
    get useTaskStartTimeForFullLoadTimestamp(): cdktf.IResolvable;
}
export declare class DataAwsDmsEndpointS3SettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDmsEndpointS3SettingsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_endpoint aws_dms_endpoint}
*/
export declare class DataAwsDmsEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_dms_endpoint";
    /**
    * Generates CDKTF code for importing a DataAwsDmsEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDmsEndpoint to import
    * @param importFromId The id of the existing DataAwsDmsEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDmsEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_endpoint aws_dms_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDmsEndpointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDmsEndpointConfig);
    get certificateArn(): string;
    get databaseName(): string;
    private _elasticsearchSettings;
    get elasticsearchSettings(): DataAwsDmsEndpointElasticsearchSettingsList;
    get endpointArn(): string;
    private _endpointId?;
    get endpointId(): string;
    set endpointId(value: string);
    get endpointIdInput(): string | undefined;
    get endpointType(): string;
    get engineName(): string;
    get extraConnectionAttributes(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kafkaSettings;
    get kafkaSettings(): DataAwsDmsEndpointKafkaSettingsList;
    private _kinesisSettings;
    get kinesisSettings(): DataAwsDmsEndpointKinesisSettingsList;
    get kmsKeyArn(): string;
    private _mongodbSettings;
    get mongodbSettings(): DataAwsDmsEndpointMongodbSettingsList;
    get password(): string;
    get port(): number;
    private _postgresSettings;
    get postgresSettings(): DataAwsDmsEndpointPostgresSettingsList;
    private _redisSettings;
    get redisSettings(): DataAwsDmsEndpointRedisSettingsList;
    private _redshiftSettings;
    get redshiftSettings(): DataAwsDmsEndpointRedshiftSettingsList;
    private _s3Settings;
    get s3Settings(): DataAwsDmsEndpointS3SettingsList;
    get secretsManagerAccessRoleArn(): string;
    get secretsManagerArn(): string;
    get serverName(): string;
    get serviceAccessRole(): string;
    get sslMode(): string;
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
    get username(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
