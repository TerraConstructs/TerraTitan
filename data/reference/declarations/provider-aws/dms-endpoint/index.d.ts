/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}
    */
    readonly endpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}
    */
    readonly engineName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}
    */
    readonly extraConnectionAttributes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#id DmsEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#password DmsEndpoint#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}
    */
    readonly pauseReplicationTasks?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#port DmsEndpoint#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}
    */
    readonly secretsManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}
    */
    readonly serverName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}
    */
    readonly serviceAccessRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}
    */
    readonly sslMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#username DmsEndpoint#username}
    */
    readonly username?: string;
    /**
    * elasticsearch_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}
    */
    readonly elasticsearchSettings?: DmsEndpointElasticsearchSettings;
    /**
    * kafka_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}
    */
    readonly kafkaSettings?: DmsEndpointKafkaSettings;
    /**
    * kinesis_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}
    */
    readonly kinesisSettings?: DmsEndpointKinesisSettings;
    /**
    * mongodb_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}
    */
    readonly mongodbSettings?: DmsEndpointMongodbSettings;
    /**
    * postgres_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#postgres_settings DmsEndpoint#postgres_settings}
    */
    readonly postgresSettings?: DmsEndpointPostgresSettings;
    /**
    * redis_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}
    */
    readonly redisSettings?: DmsEndpointRedisSettings;
    /**
    * redshift_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}
    */
    readonly redshiftSettings?: DmsEndpointRedshiftSettings;
    /**
    * s3_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#s3_settings DmsEndpoint#s3_settings}
    */
    readonly s3Settings?: DmsEndpointS3Settings;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#timeouts DmsEndpoint#timeouts}
    */
    readonly timeouts?: DmsEndpointTimeouts;
}
export interface DmsEndpointElasticsearchSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}
    */
    readonly endpointUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}
    */
    readonly errorRetryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}
    */
    readonly fullLoadErrorPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#use_new_mapping_type DmsEndpoint#use_new_mapping_type}
    */
    readonly useNewMappingType?: boolean | cdktf.IResolvable;
}
export declare function dmsEndpointElasticsearchSettingsToTerraform(struct?: DmsEndpointElasticsearchSettingsOutputReference | DmsEndpointElasticsearchSettings): any;
export declare function dmsEndpointElasticsearchSettingsToHclTerraform(struct?: DmsEndpointElasticsearchSettingsOutputReference | DmsEndpointElasticsearchSettings): any;
export declare class DmsEndpointElasticsearchSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsEndpointElasticsearchSettings | undefined;
    set internalValue(value: DmsEndpointElasticsearchSettings | undefined);
    private _endpointUri?;
    get endpointUri(): string;
    set endpointUri(value: string);
    get endpointUriInput(): string | undefined;
    private _errorRetryDuration?;
    get errorRetryDuration(): number;
    set errorRetryDuration(value: number);
    resetErrorRetryDuration(): void;
    get errorRetryDurationInput(): number | undefined;
    private _fullLoadErrorPercentage?;
    get fullLoadErrorPercentage(): number;
    set fullLoadErrorPercentage(value: number);
    resetFullLoadErrorPercentage(): void;
    get fullLoadErrorPercentageInput(): number | undefined;
    private _serviceAccessRoleArn?;
    get serviceAccessRoleArn(): string;
    set serviceAccessRoleArn(value: string);
    get serviceAccessRoleArnInput(): string | undefined;
    private _useNewMappingType?;
    get useNewMappingType(): boolean | cdktf.IResolvable;
    set useNewMappingType(value: boolean | cdktf.IResolvable);
    resetUseNewMappingType(): void;
    get useNewMappingTypeInput(): boolean | cdktf.IResolvable | undefined;
}
export interface DmsEndpointKafkaSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}
    */
    readonly broker: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}
    */
    readonly includeControlDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}
    */
    readonly includeNullAndEmpty?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}
    */
    readonly includePartitionValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}
    */
    readonly includeTableAlterOperations?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}
    */
    readonly includeTransactionDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}
    */
    readonly messageMaxBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}
    */
    readonly noHexPrefix?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}
    */
    readonly partitionIncludeSchemaTable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#sasl_mechanism DmsEndpoint#sasl_mechanism}
    */
    readonly saslMechanism?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}
    */
    readonly saslPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}
    */
    readonly saslUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}
    */
    readonly securityProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}
    */
    readonly sslCaCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}
    */
    readonly sslClientCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}
    */
    readonly sslClientKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}
    */
    readonly sslClientKeyPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}
    */
    readonly topic?: string;
}
export declare function dmsEndpointKafkaSettingsToTerraform(struct?: DmsEndpointKafkaSettingsOutputReference | DmsEndpointKafkaSettings): any;
export declare function dmsEndpointKafkaSettingsToHclTerraform(struct?: DmsEndpointKafkaSettingsOutputReference | DmsEndpointKafkaSettings): any;
export declare class DmsEndpointKafkaSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsEndpointKafkaSettings | undefined;
    set internalValue(value: DmsEndpointKafkaSettings | undefined);
    private _broker?;
    get broker(): string;
    set broker(value: string);
    get brokerInput(): string | undefined;
    private _includeControlDetails?;
    get includeControlDetails(): boolean | cdktf.IResolvable;
    set includeControlDetails(value: boolean | cdktf.IResolvable);
    resetIncludeControlDetails(): void;
    get includeControlDetailsInput(): boolean | cdktf.IResolvable | undefined;
    private _includeNullAndEmpty?;
    get includeNullAndEmpty(): boolean | cdktf.IResolvable;
    set includeNullAndEmpty(value: boolean | cdktf.IResolvable);
    resetIncludeNullAndEmpty(): void;
    get includeNullAndEmptyInput(): boolean | cdktf.IResolvable | undefined;
    private _includePartitionValue?;
    get includePartitionValue(): boolean | cdktf.IResolvable;
    set includePartitionValue(value: boolean | cdktf.IResolvable);
    resetIncludePartitionValue(): void;
    get includePartitionValueInput(): boolean | cdktf.IResolvable | undefined;
    private _includeTableAlterOperations?;
    get includeTableAlterOperations(): boolean | cdktf.IResolvable;
    set includeTableAlterOperations(value: boolean | cdktf.IResolvable);
    resetIncludeTableAlterOperations(): void;
    get includeTableAlterOperationsInput(): boolean | cdktf.IResolvable | undefined;
    private _includeTransactionDetails?;
    get includeTransactionDetails(): boolean | cdktf.IResolvable;
    set includeTransactionDetails(value: boolean | cdktf.IResolvable);
    resetIncludeTransactionDetails(): void;
    get includeTransactionDetailsInput(): boolean | cdktf.IResolvable | undefined;
    private _messageFormat?;
    get messageFormat(): string;
    set messageFormat(value: string);
    resetMessageFormat(): void;
    get messageFormatInput(): string | undefined;
    private _messageMaxBytes?;
    get messageMaxBytes(): number;
    set messageMaxBytes(value: number);
    resetMessageMaxBytes(): void;
    get messageMaxBytesInput(): number | undefined;
    private _noHexPrefix?;
    get noHexPrefix(): boolean | cdktf.IResolvable;
    set noHexPrefix(value: boolean | cdktf.IResolvable);
    resetNoHexPrefix(): void;
    get noHexPrefixInput(): boolean | cdktf.IResolvable | undefined;
    private _partitionIncludeSchemaTable?;
    get partitionIncludeSchemaTable(): boolean | cdktf.IResolvable;
    set partitionIncludeSchemaTable(value: boolean | cdktf.IResolvable);
    resetPartitionIncludeSchemaTable(): void;
    get partitionIncludeSchemaTableInput(): boolean | cdktf.IResolvable | undefined;
    private _saslMechanism?;
    get saslMechanism(): string;
    set saslMechanism(value: string);
    resetSaslMechanism(): void;
    get saslMechanismInput(): string | undefined;
    private _saslPassword?;
    get saslPassword(): string;
    set saslPassword(value: string);
    resetSaslPassword(): void;
    get saslPasswordInput(): string | undefined;
    private _saslUsername?;
    get saslUsername(): string;
    set saslUsername(value: string);
    resetSaslUsername(): void;
    get saslUsernameInput(): string | undefined;
    private _securityProtocol?;
    get securityProtocol(): string;
    set securityProtocol(value: string);
    resetSecurityProtocol(): void;
    get securityProtocolInput(): string | undefined;
    private _sslCaCertificateArn?;
    get sslCaCertificateArn(): string;
    set sslCaCertificateArn(value: string);
    resetSslCaCertificateArn(): void;
    get sslCaCertificateArnInput(): string | undefined;
    private _sslClientCertificateArn?;
    get sslClientCertificateArn(): string;
    set sslClientCertificateArn(value: string);
    resetSslClientCertificateArn(): void;
    get sslClientCertificateArnInput(): string | undefined;
    private _sslClientKeyArn?;
    get sslClientKeyArn(): string;
    set sslClientKeyArn(value: string);
    resetSslClientKeyArn(): void;
    get sslClientKeyArnInput(): string | undefined;
    private _sslClientKeyPassword?;
    get sslClientKeyPassword(): string;
    set sslClientKeyPassword(value: string);
    resetSslClientKeyPassword(): void;
    get sslClientKeyPasswordInput(): string | undefined;
    private _topic?;
    get topic(): string;
    set topic(value: string);
    resetTopic(): void;
    get topicInput(): string | undefined;
}
export interface DmsEndpointKinesisSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}
    */
    readonly includeControlDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}
    */
    readonly includeNullAndEmpty?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}
    */
    readonly includePartitionValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}
    */
    readonly includeTableAlterOperations?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}
    */
    readonly includeTransactionDetails?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}
    */
    readonly partitionIncludeSchemaTable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}
    */
    readonly streamArn?: string;
}
export declare function dmsEndpointKinesisSettingsToTerraform(struct?: DmsEndpointKinesisSettingsOutputReference | DmsEndpointKinesisSettings): any;
export declare function dmsEndpointKinesisSettingsToHclTerraform(struct?: DmsEndpointKinesisSettingsOutputReference | DmsEndpointKinesisSettings): any;
export declare class DmsEndpointKinesisSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsEndpointKinesisSettings | undefined;
    set internalValue(value: DmsEndpointKinesisSettings | undefined);
    private _includeControlDetails?;
    get includeControlDetails(): boolean | cdktf.IResolvable;
    set includeControlDetails(value: boolean | cdktf.IResolvable);
    resetIncludeControlDetails(): void;
    get includeControlDetailsInput(): boolean | cdktf.IResolvable | undefined;
    private _includeNullAndEmpty?;
    get includeNullAndEmpty(): boolean | cdktf.IResolvable;
    set includeNullAndEmpty(value: boolean | cdktf.IResolvable);
    resetIncludeNullAndEmpty(): void;
    get includeNullAndEmptyInput(): boolean | cdktf.IResolvable | undefined;
    private _includePartitionValue?;
    get includePartitionValue(): boolean | cdktf.IResolvable;
    set includePartitionValue(value: boolean | cdktf.IResolvable);
    resetIncludePartitionValue(): void;
    get includePartitionValueInput(): boolean | cdktf.IResolvable | undefined;
    private _includeTableAlterOperations?;
    get includeTableAlterOperations(): boolean | cdktf.IResolvable;
    set includeTableAlterOperations(value: boolean | cdktf.IResolvable);
    resetIncludeTableAlterOperations(): void;
    get includeTableAlterOperationsInput(): boolean | cdktf.IResolvable | undefined;
    private _includeTransactionDetails?;
    get includeTransactionDetails(): boolean | cdktf.IResolvable;
    set includeTransactionDetails(value: boolean | cdktf.IResolvable);
    resetIncludeTransactionDetails(): void;
    get includeTransactionDetailsInput(): boolean | cdktf.IResolvable | undefined;
    private _messageFormat?;
    get messageFormat(): string;
    set messageFormat(value: string);
    resetMessageFormat(): void;
    get messageFormatInput(): string | undefined;
    private _partitionIncludeSchemaTable?;
    get partitionIncludeSchemaTable(): boolean | cdktf.IResolvable;
    set partitionIncludeSchemaTable(value: boolean | cdktf.IResolvable);
    resetPartitionIncludeSchemaTable(): void;
    get partitionIncludeSchemaTableInput(): boolean | cdktf.IResolvable | undefined;
    private _serviceAccessRoleArn?;
    get serviceAccessRoleArn(): string;
    set serviceAccessRoleArn(value: string);
    resetServiceAccessRoleArn(): void;
    get serviceAccessRoleArnInput(): string | undefined;
    private _streamArn?;
    get streamArn(): string;
    set streamArn(value: string);
    resetStreamArn(): void;
    get streamArnInput(): string | undefined;
}
export interface DmsEndpointMongodbSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}
    */
    readonly authMechanism?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}
    */
    readonly authSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}
    */
    readonly authType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}
    */
    readonly docsToInvestigate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}
    */
    readonly extractDocId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}
    */
    readonly nestingLevel?: string;
}
export declare function dmsEndpointMongodbSettingsToTerraform(struct?: DmsEndpointMongodbSettingsOutputReference | DmsEndpointMongodbSettings): any;
export declare function dmsEndpointMongodbSettingsToHclTerraform(struct?: DmsEndpointMongodbSettingsOutputReference | DmsEndpointMongodbSettings): any;
export declare class DmsEndpointMongodbSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsEndpointMongodbSettings | undefined;
    set internalValue(value: DmsEndpointMongodbSettings | undefined);
    private _authMechanism?;
    get authMechanism(): string;
    set authMechanism(value: string);
    resetAuthMechanism(): void;
    get authMechanismInput(): string | undefined;
    private _authSource?;
    get authSource(): string;
    set authSource(value: string);
    resetAuthSource(): void;
    get authSourceInput(): string | undefined;
    private _authType?;
    get authType(): string;
    set authType(value: string);
    resetAuthType(): void;
    get authTypeInput(): string | undefined;
    private _docsToInvestigate?;
    get docsToInvestigate(): string;
    set docsToInvestigate(value: string);
    resetDocsToInvestigate(): void;
    get docsToInvestigateInput(): string | undefined;
    private _extractDocId?;
    get extractDocId(): string;
    set extractDocId(value: string);
    resetExtractDocId(): void;
    get extractDocIdInput(): string | undefined;
    private _nestingLevel?;
    get nestingLevel(): string;
    set nestingLevel(value: string);
    resetNestingLevel(): void;
    get nestingLevelInput(): string | undefined;
}
export interface DmsEndpointPostgresSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}
    */
    readonly afterConnectScript?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}
    */
    readonly babelfishDatabaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}
    */
    readonly captureDdls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}
    */
    readonly databaseMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}
    */
    readonly ddlArtifactsSchema?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}
    */
    readonly executeTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}
    */
    readonly failTasksOnLobTruncation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}
    */
    readonly heartbeatEnable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}
    */
    readonly heartbeatFrequency?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}
    */
    readonly heartbeatSchema?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}
    */
    readonly mapBooleanAsBoolean?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#map_jsonb_as_clob DmsEndpoint#map_jsonb_as_clob}
    */
    readonly mapJsonbAsClob?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#map_long_varchar_as DmsEndpoint#map_long_varchar_as}
    */
    readonly mapLongVarcharAs?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}
    */
    readonly pluginName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}
    */
    readonly slotName?: string;
}
export declare function dmsEndpointPostgresSettingsToTerraform(struct?: DmsEndpointPostgresSettingsOutputReference | DmsEndpointPostgresSettings): any;
export declare function dmsEndpointPostgresSettingsToHclTerraform(struct?: DmsEndpointPostgresSettingsOutputReference | DmsEndpointPostgresSettings): any;
export declare class DmsEndpointPostgresSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsEndpointPostgresSettings | undefined;
    set internalValue(value: DmsEndpointPostgresSettings | undefined);
    private _afterConnectScript?;
    get afterConnectScript(): string;
    set afterConnectScript(value: string);
    resetAfterConnectScript(): void;
    get afterConnectScriptInput(): string | undefined;
    private _babelfishDatabaseName?;
    get babelfishDatabaseName(): string;
    set babelfishDatabaseName(value: string);
    resetBabelfishDatabaseName(): void;
    get babelfishDatabaseNameInput(): string | undefined;
    private _captureDdls?;
    get captureDdls(): boolean | cdktf.IResolvable;
    set captureDdls(value: boolean | cdktf.IResolvable);
    resetCaptureDdls(): void;
    get captureDdlsInput(): boolean | cdktf.IResolvable | undefined;
    private _databaseMode?;
    get databaseMode(): string;
    set databaseMode(value: string);
    resetDatabaseMode(): void;
    get databaseModeInput(): string | undefined;
    private _ddlArtifactsSchema?;
    get ddlArtifactsSchema(): string;
    set ddlArtifactsSchema(value: string);
    resetDdlArtifactsSchema(): void;
    get ddlArtifactsSchemaInput(): string | undefined;
    private _executeTimeout?;
    get executeTimeout(): number;
    set executeTimeout(value: number);
    resetExecuteTimeout(): void;
    get executeTimeoutInput(): number | undefined;
    private _failTasksOnLobTruncation?;
    get failTasksOnLobTruncation(): boolean | cdktf.IResolvable;
    set failTasksOnLobTruncation(value: boolean | cdktf.IResolvable);
    resetFailTasksOnLobTruncation(): void;
    get failTasksOnLobTruncationInput(): boolean | cdktf.IResolvable | undefined;
    private _heartbeatEnable?;
    get heartbeatEnable(): boolean | cdktf.IResolvable;
    set heartbeatEnable(value: boolean | cdktf.IResolvable);
    resetHeartbeatEnable(): void;
    get heartbeatEnableInput(): boolean | cdktf.IResolvable | undefined;
    private _heartbeatFrequency?;
    get heartbeatFrequency(): number;
    set heartbeatFrequency(value: number);
    resetHeartbeatFrequency(): void;
    get heartbeatFrequencyInput(): number | undefined;
    private _heartbeatSchema?;
    get heartbeatSchema(): string;
    set heartbeatSchema(value: string);
    resetHeartbeatSchema(): void;
    get heartbeatSchemaInput(): string | undefined;
    private _mapBooleanAsBoolean?;
    get mapBooleanAsBoolean(): boolean | cdktf.IResolvable;
    set mapBooleanAsBoolean(value: boolean | cdktf.IResolvable);
    resetMapBooleanAsBoolean(): void;
    get mapBooleanAsBooleanInput(): boolean | cdktf.IResolvable | undefined;
    private _mapJsonbAsClob?;
    get mapJsonbAsClob(): boolean | cdktf.IResolvable;
    set mapJsonbAsClob(value: boolean | cdktf.IResolvable);
    resetMapJsonbAsClob(): void;
    get mapJsonbAsClobInput(): boolean | cdktf.IResolvable | undefined;
    private _mapLongVarcharAs?;
    get mapLongVarcharAs(): string;
    set mapLongVarcharAs(value: string);
    resetMapLongVarcharAs(): void;
    get mapLongVarcharAsInput(): string | undefined;
    private _maxFileSize?;
    get maxFileSize(): number;
    set maxFileSize(value: number);
    resetMaxFileSize(): void;
    get maxFileSizeInput(): number | undefined;
    private _pluginName?;
    get pluginName(): string;
    set pluginName(value: string);
    resetPluginName(): void;
    get pluginNameInput(): string | undefined;
    private _slotName?;
    get slotName(): string;
    set slotName(value: string);
    resetSlotName(): void;
    get slotNameInput(): string | undefined;
}
export interface DmsEndpointRedisSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}
    */
    readonly authPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}
    */
    readonly authUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#port DmsEndpoint#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}
    */
    readonly serverName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}
    */
    readonly sslCaCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}
    */
    readonly sslSecurityProtocol?: string;
}
export declare function dmsEndpointRedisSettingsToTerraform(struct?: DmsEndpointRedisSettingsOutputReference | DmsEndpointRedisSettings): any;
export declare function dmsEndpointRedisSettingsToHclTerraform(struct?: DmsEndpointRedisSettingsOutputReference | DmsEndpointRedisSettings): any;
export declare class DmsEndpointRedisSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsEndpointRedisSettings | undefined;
    set internalValue(value: DmsEndpointRedisSettings | undefined);
    private _authPassword?;
    get authPassword(): string;
    set authPassword(value: string);
    resetAuthPassword(): void;
    get authPasswordInput(): string | undefined;
    private _authType?;
    get authType(): string;
    set authType(value: string);
    get authTypeInput(): string | undefined;
    private _authUserName?;
    get authUserName(): string;
    set authUserName(value: string);
    resetAuthUserName(): void;
    get authUserNameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
    private _serverName?;
    get serverName(): string;
    set serverName(value: string);
    get serverNameInput(): string | undefined;
    private _sslCaCertificateArn?;
    get sslCaCertificateArn(): string;
    set sslCaCertificateArn(value: string);
    resetSslCaCertificateArn(): void;
    get sslCaCertificateArnInput(): string | undefined;
    private _sslSecurityProtocol?;
    get sslSecurityProtocol(): string;
    set sslSecurityProtocol(value: string);
    resetSslSecurityProtocol(): void;
    get sslSecurityProtocolInput(): string | undefined;
}
export interface DmsEndpointRedshiftSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}
    */
    readonly bucketFolder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}
    */
    readonly serverSideEncryptionKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
}
export declare function dmsEndpointRedshiftSettingsToTerraform(struct?: DmsEndpointRedshiftSettingsOutputReference | DmsEndpointRedshiftSettings): any;
export declare function dmsEndpointRedshiftSettingsToHclTerraform(struct?: DmsEndpointRedshiftSettingsOutputReference | DmsEndpointRedshiftSettings): any;
export declare class DmsEndpointRedshiftSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsEndpointRedshiftSettings | undefined;
    set internalValue(value: DmsEndpointRedshiftSettings | undefined);
    private _bucketFolder?;
    get bucketFolder(): string;
    set bucketFolder(value: string);
    resetBucketFolder(): void;
    get bucketFolderInput(): string | undefined;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _encryptionMode?;
    get encryptionMode(): string;
    set encryptionMode(value: string);
    resetEncryptionMode(): void;
    get encryptionModeInput(): string | undefined;
    private _serverSideEncryptionKmsKeyId?;
    get serverSideEncryptionKmsKeyId(): string;
    set serverSideEncryptionKmsKeyId(value: string);
    resetServerSideEncryptionKmsKeyId(): void;
    get serverSideEncryptionKmsKeyIdInput(): string | undefined;
    private _serviceAccessRoleArn?;
    get serviceAccessRoleArn(): string;
    set serviceAccessRoleArn(value: string);
    resetServiceAccessRoleArn(): void;
    get serviceAccessRoleArnInput(): string | undefined;
}
export interface DmsEndpointS3Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#add_column_name DmsEndpoint#add_column_name}
    */
    readonly addColumnName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}
    */
    readonly bucketFolder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}
    */
    readonly cannedAclForObjects?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}
    */
    readonly cdcInsertsAndUpdates?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}
    */
    readonly cdcInsertsOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}
    */
    readonly cdcMaxBatchInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}
    */
    readonly cdcMinFileSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#cdc_path DmsEndpoint#cdc_path}
    */
    readonly cdcPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#compression_type DmsEndpoint#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}
    */
    readonly csvDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}
    */
    readonly csvNoSupValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}
    */
    readonly csvNullValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}
    */
    readonly csvRowDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#data_format DmsEndpoint#data_format}
    */
    readonly dataFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#data_page_size DmsEndpoint#data_page_size}
    */
    readonly dataPageSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}
    */
    readonly datePartitionDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}
    */
    readonly datePartitionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}
    */
    readonly datePartitionSequence?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}
    */
    readonly dictPageSizeLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}
    */
    readonly enableStatistics?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#encoding_type DmsEndpoint#encoding_type}
    */
    readonly encodingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}
    */
    readonly externalTableDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#glue_catalog_generation DmsEndpoint#glue_catalog_generation}
    */
    readonly glueCatalogGeneration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}
    */
    readonly ignoreHeaderRows?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}
    */
    readonly includeOpForFullLoad?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}
    */
    readonly parquetTimestampInMillisecond?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#parquet_version DmsEndpoint#parquet_version}
    */
    readonly parquetVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}
    */
    readonly preserveTransactions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}
    */
    readonly rfc4180?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#row_group_length DmsEndpoint#row_group_length}
    */
    readonly rowGroupLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}
    */
    readonly serverSideEncryptionKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}
    */
    readonly timestampColumnName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}
    */
    readonly useCsvNoSupValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}
    */
    readonly useTaskStartTimeForFullLoadTimestamp?: boolean | cdktf.IResolvable;
}
export declare function dmsEndpointS3SettingsToTerraform(struct?: DmsEndpointS3SettingsOutputReference | DmsEndpointS3Settings): any;
export declare function dmsEndpointS3SettingsToHclTerraform(struct?: DmsEndpointS3SettingsOutputReference | DmsEndpointS3Settings): any;
export declare class DmsEndpointS3SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsEndpointS3Settings | undefined;
    set internalValue(value: DmsEndpointS3Settings | undefined);
    private _addColumnName?;
    get addColumnName(): boolean | cdktf.IResolvable;
    set addColumnName(value: boolean | cdktf.IResolvable);
    resetAddColumnName(): void;
    get addColumnNameInput(): boolean | cdktf.IResolvable | undefined;
    private _bucketFolder?;
    get bucketFolder(): string;
    set bucketFolder(value: string);
    resetBucketFolder(): void;
    get bucketFolderInput(): string | undefined;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _cannedAclForObjects?;
    get cannedAclForObjects(): string;
    set cannedAclForObjects(value: string);
    resetCannedAclForObjects(): void;
    get cannedAclForObjectsInput(): string | undefined;
    private _cdcInsertsAndUpdates?;
    get cdcInsertsAndUpdates(): boolean | cdktf.IResolvable;
    set cdcInsertsAndUpdates(value: boolean | cdktf.IResolvable);
    resetCdcInsertsAndUpdates(): void;
    get cdcInsertsAndUpdatesInput(): boolean | cdktf.IResolvable | undefined;
    private _cdcInsertsOnly?;
    get cdcInsertsOnly(): boolean | cdktf.IResolvable;
    set cdcInsertsOnly(value: boolean | cdktf.IResolvable);
    resetCdcInsertsOnly(): void;
    get cdcInsertsOnlyInput(): boolean | cdktf.IResolvable | undefined;
    private _cdcMaxBatchInterval?;
    get cdcMaxBatchInterval(): number;
    set cdcMaxBatchInterval(value: number);
    resetCdcMaxBatchInterval(): void;
    get cdcMaxBatchIntervalInput(): number | undefined;
    private _cdcMinFileSize?;
    get cdcMinFileSize(): number;
    set cdcMinFileSize(value: number);
    resetCdcMinFileSize(): void;
    get cdcMinFileSizeInput(): number | undefined;
    private _cdcPath?;
    get cdcPath(): string;
    set cdcPath(value: string);
    resetCdcPath(): void;
    get cdcPathInput(): string | undefined;
    private _compressionType?;
    get compressionType(): string;
    set compressionType(value: string);
    resetCompressionType(): void;
    get compressionTypeInput(): string | undefined;
    private _csvDelimiter?;
    get csvDelimiter(): string;
    set csvDelimiter(value: string);
    resetCsvDelimiter(): void;
    get csvDelimiterInput(): string | undefined;
    private _csvNoSupValue?;
    get csvNoSupValue(): string;
    set csvNoSupValue(value: string);
    resetCsvNoSupValue(): void;
    get csvNoSupValueInput(): string | undefined;
    private _csvNullValue?;
    get csvNullValue(): string;
    set csvNullValue(value: string);
    resetCsvNullValue(): void;
    get csvNullValueInput(): string | undefined;
    private _csvRowDelimiter?;
    get csvRowDelimiter(): string;
    set csvRowDelimiter(value: string);
    resetCsvRowDelimiter(): void;
    get csvRowDelimiterInput(): string | undefined;
    private _dataFormat?;
    get dataFormat(): string;
    set dataFormat(value: string);
    resetDataFormat(): void;
    get dataFormatInput(): string | undefined;
    private _dataPageSize?;
    get dataPageSize(): number;
    set dataPageSize(value: number);
    resetDataPageSize(): void;
    get dataPageSizeInput(): number | undefined;
    private _datePartitionDelimiter?;
    get datePartitionDelimiter(): string;
    set datePartitionDelimiter(value: string);
    resetDatePartitionDelimiter(): void;
    get datePartitionDelimiterInput(): string | undefined;
    private _datePartitionEnabled?;
    get datePartitionEnabled(): boolean | cdktf.IResolvable;
    set datePartitionEnabled(value: boolean | cdktf.IResolvable);
    resetDatePartitionEnabled(): void;
    get datePartitionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _datePartitionSequence?;
    get datePartitionSequence(): string;
    set datePartitionSequence(value: string);
    resetDatePartitionSequence(): void;
    get datePartitionSequenceInput(): string | undefined;
    private _dictPageSizeLimit?;
    get dictPageSizeLimit(): number;
    set dictPageSizeLimit(value: number);
    resetDictPageSizeLimit(): void;
    get dictPageSizeLimitInput(): number | undefined;
    private _enableStatistics?;
    get enableStatistics(): boolean | cdktf.IResolvable;
    set enableStatistics(value: boolean | cdktf.IResolvable);
    resetEnableStatistics(): void;
    get enableStatisticsInput(): boolean | cdktf.IResolvable | undefined;
    private _encodingType?;
    get encodingType(): string;
    set encodingType(value: string);
    resetEncodingType(): void;
    get encodingTypeInput(): string | undefined;
    private _encryptionMode?;
    get encryptionMode(): string;
    set encryptionMode(value: string);
    resetEncryptionMode(): void;
    get encryptionModeInput(): string | undefined;
    private _externalTableDefinition?;
    get externalTableDefinition(): string;
    set externalTableDefinition(value: string);
    resetExternalTableDefinition(): void;
    get externalTableDefinitionInput(): string | undefined;
    private _glueCatalogGeneration?;
    get glueCatalogGeneration(): boolean | cdktf.IResolvable;
    set glueCatalogGeneration(value: boolean | cdktf.IResolvable);
    resetGlueCatalogGeneration(): void;
    get glueCatalogGenerationInput(): boolean | cdktf.IResolvable | undefined;
    private _ignoreHeaderRows?;
    get ignoreHeaderRows(): number;
    set ignoreHeaderRows(value: number);
    resetIgnoreHeaderRows(): void;
    get ignoreHeaderRowsInput(): number | undefined;
    private _includeOpForFullLoad?;
    get includeOpForFullLoad(): boolean | cdktf.IResolvable;
    set includeOpForFullLoad(value: boolean | cdktf.IResolvable);
    resetIncludeOpForFullLoad(): void;
    get includeOpForFullLoadInput(): boolean | cdktf.IResolvable | undefined;
    private _maxFileSize?;
    get maxFileSize(): number;
    set maxFileSize(value: number);
    resetMaxFileSize(): void;
    get maxFileSizeInput(): number | undefined;
    private _parquetTimestampInMillisecond?;
    get parquetTimestampInMillisecond(): boolean | cdktf.IResolvable;
    set parquetTimestampInMillisecond(value: boolean | cdktf.IResolvable);
    resetParquetTimestampInMillisecond(): void;
    get parquetTimestampInMillisecondInput(): boolean | cdktf.IResolvable | undefined;
    private _parquetVersion?;
    get parquetVersion(): string;
    set parquetVersion(value: string);
    resetParquetVersion(): void;
    get parquetVersionInput(): string | undefined;
    private _preserveTransactions?;
    get preserveTransactions(): boolean | cdktf.IResolvable;
    set preserveTransactions(value: boolean | cdktf.IResolvable);
    resetPreserveTransactions(): void;
    get preserveTransactionsInput(): boolean | cdktf.IResolvable | undefined;
    private _rfc4180?;
    get rfc4180(): boolean | cdktf.IResolvable;
    set rfc4180(value: boolean | cdktf.IResolvable);
    resetRfc4180(): void;
    get rfc4180Input(): boolean | cdktf.IResolvable | undefined;
    private _rowGroupLength?;
    get rowGroupLength(): number;
    set rowGroupLength(value: number);
    resetRowGroupLength(): void;
    get rowGroupLengthInput(): number | undefined;
    private _serverSideEncryptionKmsKeyId?;
    get serverSideEncryptionKmsKeyId(): string;
    set serverSideEncryptionKmsKeyId(value: string);
    resetServerSideEncryptionKmsKeyId(): void;
    get serverSideEncryptionKmsKeyIdInput(): string | undefined;
    private _serviceAccessRoleArn?;
    get serviceAccessRoleArn(): string;
    set serviceAccessRoleArn(value: string);
    resetServiceAccessRoleArn(): void;
    get serviceAccessRoleArnInput(): string | undefined;
    private _timestampColumnName?;
    get timestampColumnName(): string;
    set timestampColumnName(value: string);
    resetTimestampColumnName(): void;
    get timestampColumnNameInput(): string | undefined;
    private _useCsvNoSupValue?;
    get useCsvNoSupValue(): boolean | cdktf.IResolvable;
    set useCsvNoSupValue(value: boolean | cdktf.IResolvable);
    resetUseCsvNoSupValue(): void;
    get useCsvNoSupValueInput(): boolean | cdktf.IResolvable | undefined;
    private _useTaskStartTimeForFullLoadTimestamp?;
    get useTaskStartTimeForFullLoadTimestamp(): boolean | cdktf.IResolvable;
    set useTaskStartTimeForFullLoadTimestamp(value: boolean | cdktf.IResolvable);
    resetUseTaskStartTimeForFullLoadTimestamp(): void;
    get useTaskStartTimeForFullLoadTimestampInput(): boolean | cdktf.IResolvable | undefined;
}
export interface DmsEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#create DmsEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#delete DmsEndpoint#delete}
    */
    readonly delete?: string;
}
export declare function dmsEndpointTimeoutsToTerraform(struct?: DmsEndpointTimeouts | cdktf.IResolvable): any;
export declare function dmsEndpointTimeoutsToHclTerraform(struct?: DmsEndpointTimeouts | cdktf.IResolvable): any;
export declare class DmsEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DmsEndpointTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint aws_dms_endpoint}
*/
export declare class DmsEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dms_endpoint";
    /**
    * Generates CDKTF code for importing a DmsEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DmsEndpoint to import
    * @param importFromId The id of the existing DmsEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DmsEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_endpoint aws_dms_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsEndpointConfig
    */
    constructor(scope: Construct, id: string, config: DmsEndpointConfig);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    get endpointArn(): string;
    private _endpointId?;
    get endpointId(): string;
    set endpointId(value: string);
    get endpointIdInput(): string | undefined;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    get endpointTypeInput(): string | undefined;
    private _engineName?;
    get engineName(): string;
    set engineName(value: string);
    get engineNameInput(): string | undefined;
    private _extraConnectionAttributes?;
    get extraConnectionAttributes(): string;
    set extraConnectionAttributes(value: string);
    resetExtraConnectionAttributes(): void;
    get extraConnectionAttributesInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string | undefined;
    private _pauseReplicationTasks?;
    get pauseReplicationTasks(): boolean | cdktf.IResolvable;
    set pauseReplicationTasks(value: boolean | cdktf.IResolvable);
    resetPauseReplicationTasks(): void;
    get pauseReplicationTasksInput(): boolean | cdktf.IResolvable | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _secretsManagerAccessRoleArn?;
    get secretsManagerAccessRoleArn(): string;
    set secretsManagerAccessRoleArn(value: string);
    resetSecretsManagerAccessRoleArn(): void;
    get secretsManagerAccessRoleArnInput(): string | undefined;
    private _secretsManagerArn?;
    get secretsManagerArn(): string;
    set secretsManagerArn(value: string);
    resetSecretsManagerArn(): void;
    get secretsManagerArnInput(): string | undefined;
    private _serverName?;
    get serverName(): string;
    set serverName(value: string);
    resetServerName(): void;
    get serverNameInput(): string | undefined;
    private _serviceAccessRole?;
    get serviceAccessRole(): string;
    set serviceAccessRole(value: string);
    resetServiceAccessRole(): void;
    get serviceAccessRoleInput(): string | undefined;
    private _sslMode?;
    get sslMode(): string;
    set sslMode(value: string);
    resetSslMode(): void;
    get sslModeInput(): string | undefined;
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
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
    private _elasticsearchSettings;
    get elasticsearchSettings(): DmsEndpointElasticsearchSettingsOutputReference;
    putElasticsearchSettings(value: DmsEndpointElasticsearchSettings): void;
    resetElasticsearchSettings(): void;
    get elasticsearchSettingsInput(): DmsEndpointElasticsearchSettings | undefined;
    private _kafkaSettings;
    get kafkaSettings(): DmsEndpointKafkaSettingsOutputReference;
    putKafkaSettings(value: DmsEndpointKafkaSettings): void;
    resetKafkaSettings(): void;
    get kafkaSettingsInput(): DmsEndpointKafkaSettings | undefined;
    private _kinesisSettings;
    get kinesisSettings(): DmsEndpointKinesisSettingsOutputReference;
    putKinesisSettings(value: DmsEndpointKinesisSettings): void;
    resetKinesisSettings(): void;
    get kinesisSettingsInput(): DmsEndpointKinesisSettings | undefined;
    private _mongodbSettings;
    get mongodbSettings(): DmsEndpointMongodbSettingsOutputReference;
    putMongodbSettings(value: DmsEndpointMongodbSettings): void;
    resetMongodbSettings(): void;
    get mongodbSettingsInput(): DmsEndpointMongodbSettings | undefined;
    private _postgresSettings;
    get postgresSettings(): DmsEndpointPostgresSettingsOutputReference;
    putPostgresSettings(value: DmsEndpointPostgresSettings): void;
    resetPostgresSettings(): void;
    get postgresSettingsInput(): DmsEndpointPostgresSettings | undefined;
    private _redisSettings;
    get redisSettings(): DmsEndpointRedisSettingsOutputReference;
    putRedisSettings(value: DmsEndpointRedisSettings): void;
    resetRedisSettings(): void;
    get redisSettingsInput(): DmsEndpointRedisSettings | undefined;
    private _redshiftSettings;
    get redshiftSettings(): DmsEndpointRedshiftSettingsOutputReference;
    putRedshiftSettings(value: DmsEndpointRedshiftSettings): void;
    resetRedshiftSettings(): void;
    get redshiftSettingsInput(): DmsEndpointRedshiftSettings | undefined;
    private _s3Settings;
    get s3Settings(): DmsEndpointS3SettingsOutputReference;
    putS3Settings(value: DmsEndpointS3Settings): void;
    resetS3Settings(): void;
    get s3SettingsInput(): DmsEndpointS3Settings | undefined;
    private _timeouts;
    get timeouts(): DmsEndpointTimeoutsOutputReference;
    putTimeouts(value: DmsEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DmsEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
