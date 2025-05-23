/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncDatasourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#api_id AppsyncDatasource#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#description AppsyncDatasource#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#id AppsyncDatasource#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#name AppsyncDatasource#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}
    */
    readonly serviceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#type AppsyncDatasource#type}
    */
    readonly type: string;
    /**
    * dynamodb_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#dynamodb_config AppsyncDatasource#dynamodb_config}
    */
    readonly dynamodbConfig?: AppsyncDatasourceDynamodbConfig;
    /**
    * elasticsearch_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#elasticsearch_config AppsyncDatasource#elasticsearch_config}
    */
    readonly elasticsearchConfig?: AppsyncDatasourceElasticsearchConfig;
    /**
    * event_bridge_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#event_bridge_config AppsyncDatasource#event_bridge_config}
    */
    readonly eventBridgeConfig?: AppsyncDatasourceEventBridgeConfig;
    /**
    * http_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#http_config AppsyncDatasource#http_config}
    */
    readonly httpConfig?: AppsyncDatasourceHttpConfig;
    /**
    * lambda_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#lambda_config AppsyncDatasource#lambda_config}
    */
    readonly lambdaConfig?: AppsyncDatasourceLambdaConfig;
    /**
    * opensearchservice_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#opensearchservice_config AppsyncDatasource#opensearchservice_config}
    */
    readonly opensearchserviceConfig?: AppsyncDatasourceOpensearchserviceConfig;
    /**
    * relational_database_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#relational_database_config AppsyncDatasource#relational_database_config}
    */
    readonly relationalDatabaseConfig?: AppsyncDatasourceRelationalDatabaseConfig;
}
export interface AppsyncDatasourceDynamodbConfigDeltaSyncConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}
    */
    readonly baseTableTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}
    */
    readonly deltaSyncTableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}
    */
    readonly deltaSyncTableTtl?: number;
}
export declare function appsyncDatasourceDynamodbConfigDeltaSyncConfigToTerraform(struct?: AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference | AppsyncDatasourceDynamodbConfigDeltaSyncConfig): any;
export declare function appsyncDatasourceDynamodbConfigDeltaSyncConfigToHclTerraform(struct?: AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference | AppsyncDatasourceDynamodbConfigDeltaSyncConfig): any;
export declare class AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceDynamodbConfigDeltaSyncConfig | undefined;
    set internalValue(value: AppsyncDatasourceDynamodbConfigDeltaSyncConfig | undefined);
    private _baseTableTtl?;
    get baseTableTtl(): number;
    set baseTableTtl(value: number);
    resetBaseTableTtl(): void;
    get baseTableTtlInput(): number | undefined;
    private _deltaSyncTableName?;
    get deltaSyncTableName(): string;
    set deltaSyncTableName(value: string);
    get deltaSyncTableNameInput(): string | undefined;
    private _deltaSyncTableTtl?;
    get deltaSyncTableTtl(): number;
    set deltaSyncTableTtl(value: number);
    resetDeltaSyncTableTtl(): void;
    get deltaSyncTableTtlInput(): number | undefined;
}
export interface AppsyncDatasourceDynamodbConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#region AppsyncDatasource#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#table_name AppsyncDatasource#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}
    */
    readonly useCallerCredentials?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#versioned AppsyncDatasource#versioned}
    */
    readonly versioned?: boolean | cdktf.IResolvable;
    /**
    * delta_sync_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#delta_sync_config AppsyncDatasource#delta_sync_config}
    */
    readonly deltaSyncConfig?: AppsyncDatasourceDynamodbConfigDeltaSyncConfig;
}
export declare function appsyncDatasourceDynamodbConfigToTerraform(struct?: AppsyncDatasourceDynamodbConfigOutputReference | AppsyncDatasourceDynamodbConfig): any;
export declare function appsyncDatasourceDynamodbConfigToHclTerraform(struct?: AppsyncDatasourceDynamodbConfigOutputReference | AppsyncDatasourceDynamodbConfig): any;
export declare class AppsyncDatasourceDynamodbConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceDynamodbConfig | undefined;
    set internalValue(value: AppsyncDatasourceDynamodbConfig | undefined);
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _useCallerCredentials?;
    get useCallerCredentials(): boolean | cdktf.IResolvable;
    set useCallerCredentials(value: boolean | cdktf.IResolvable);
    resetUseCallerCredentials(): void;
    get useCallerCredentialsInput(): boolean | cdktf.IResolvable | undefined;
    private _versioned?;
    get versioned(): boolean | cdktf.IResolvable;
    set versioned(value: boolean | cdktf.IResolvable);
    resetVersioned(): void;
    get versionedInput(): boolean | cdktf.IResolvable | undefined;
    private _deltaSyncConfig;
    get deltaSyncConfig(): AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference;
    putDeltaSyncConfig(value: AppsyncDatasourceDynamodbConfigDeltaSyncConfig): void;
    resetDeltaSyncConfig(): void;
    get deltaSyncConfigInput(): AppsyncDatasourceDynamodbConfigDeltaSyncConfig | undefined;
}
export interface AppsyncDatasourceElasticsearchConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#endpoint AppsyncDatasource#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#region AppsyncDatasource#region}
    */
    readonly region?: string;
}
export declare function appsyncDatasourceElasticsearchConfigToTerraform(struct?: AppsyncDatasourceElasticsearchConfigOutputReference | AppsyncDatasourceElasticsearchConfig): any;
export declare function appsyncDatasourceElasticsearchConfigToHclTerraform(struct?: AppsyncDatasourceElasticsearchConfigOutputReference | AppsyncDatasourceElasticsearchConfig): any;
export declare class AppsyncDatasourceElasticsearchConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceElasticsearchConfig | undefined;
    set internalValue(value: AppsyncDatasourceElasticsearchConfig | undefined);
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
}
export interface AppsyncDatasourceEventBridgeConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#event_bus_arn AppsyncDatasource#event_bus_arn}
    */
    readonly eventBusArn: string;
}
export declare function appsyncDatasourceEventBridgeConfigToTerraform(struct?: AppsyncDatasourceEventBridgeConfigOutputReference | AppsyncDatasourceEventBridgeConfig): any;
export declare function appsyncDatasourceEventBridgeConfigToHclTerraform(struct?: AppsyncDatasourceEventBridgeConfigOutputReference | AppsyncDatasourceEventBridgeConfig): any;
export declare class AppsyncDatasourceEventBridgeConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceEventBridgeConfig | undefined;
    set internalValue(value: AppsyncDatasourceEventBridgeConfig | undefined);
    private _eventBusArn?;
    get eventBusArn(): string;
    set eventBusArn(value: string);
    get eventBusArnInput(): string | undefined;
}
export interface AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#signing_region AppsyncDatasource#signing_region}
    */
    readonly signingRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}
    */
    readonly signingServiceName?: string;
}
export declare function appsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigToTerraform(struct?: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference | AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig): any;
export declare function appsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigToHclTerraform(struct?: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference | AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig): any;
export declare class AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig | undefined;
    set internalValue(value: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig | undefined);
    private _signingRegion?;
    get signingRegion(): string;
    set signingRegion(value: string);
    resetSigningRegion(): void;
    get signingRegionInput(): string | undefined;
    private _signingServiceName?;
    get signingServiceName(): string;
    set signingServiceName(value: string);
    resetSigningServiceName(): void;
    get signingServiceNameInput(): string | undefined;
}
export interface AppsyncDatasourceHttpConfigAuthorizationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}
    */
    readonly authorizationType?: string;
    /**
    * aws_iam_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#aws_iam_config AppsyncDatasource#aws_iam_config}
    */
    readonly awsIamConfig?: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig;
}
export declare function appsyncDatasourceHttpConfigAuthorizationConfigToTerraform(struct?: AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference | AppsyncDatasourceHttpConfigAuthorizationConfig): any;
export declare function appsyncDatasourceHttpConfigAuthorizationConfigToHclTerraform(struct?: AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference | AppsyncDatasourceHttpConfigAuthorizationConfig): any;
export declare class AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceHttpConfigAuthorizationConfig | undefined;
    set internalValue(value: AppsyncDatasourceHttpConfigAuthorizationConfig | undefined);
    private _authorizationType?;
    get authorizationType(): string;
    set authorizationType(value: string);
    resetAuthorizationType(): void;
    get authorizationTypeInput(): string | undefined;
    private _awsIamConfig;
    get awsIamConfig(): AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference;
    putAwsIamConfig(value: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig): void;
    resetAwsIamConfig(): void;
    get awsIamConfigInput(): AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig | undefined;
}
export interface AppsyncDatasourceHttpConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#endpoint AppsyncDatasource#endpoint}
    */
    readonly endpoint: string;
    /**
    * authorization_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#authorization_config AppsyncDatasource#authorization_config}
    */
    readonly authorizationConfig?: AppsyncDatasourceHttpConfigAuthorizationConfig;
}
export declare function appsyncDatasourceHttpConfigToTerraform(struct?: AppsyncDatasourceHttpConfigOutputReference | AppsyncDatasourceHttpConfig): any;
export declare function appsyncDatasourceHttpConfigToHclTerraform(struct?: AppsyncDatasourceHttpConfigOutputReference | AppsyncDatasourceHttpConfig): any;
export declare class AppsyncDatasourceHttpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceHttpConfig | undefined;
    set internalValue(value: AppsyncDatasourceHttpConfig | undefined);
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string | undefined;
    private _authorizationConfig;
    get authorizationConfig(): AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference;
    putAuthorizationConfig(value: AppsyncDatasourceHttpConfigAuthorizationConfig): void;
    resetAuthorizationConfig(): void;
    get authorizationConfigInput(): AppsyncDatasourceHttpConfigAuthorizationConfig | undefined;
}
export interface AppsyncDatasourceLambdaConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#function_arn AppsyncDatasource#function_arn}
    */
    readonly functionArn: string;
}
export declare function appsyncDatasourceLambdaConfigToTerraform(struct?: AppsyncDatasourceLambdaConfigOutputReference | AppsyncDatasourceLambdaConfig): any;
export declare function appsyncDatasourceLambdaConfigToHclTerraform(struct?: AppsyncDatasourceLambdaConfigOutputReference | AppsyncDatasourceLambdaConfig): any;
export declare class AppsyncDatasourceLambdaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceLambdaConfig | undefined;
    set internalValue(value: AppsyncDatasourceLambdaConfig | undefined);
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string | undefined;
}
export interface AppsyncDatasourceOpensearchserviceConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#endpoint AppsyncDatasource#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#region AppsyncDatasource#region}
    */
    readonly region?: string;
}
export declare function appsyncDatasourceOpensearchserviceConfigToTerraform(struct?: AppsyncDatasourceOpensearchserviceConfigOutputReference | AppsyncDatasourceOpensearchserviceConfig): any;
export declare function appsyncDatasourceOpensearchserviceConfigToHclTerraform(struct?: AppsyncDatasourceOpensearchserviceConfigOutputReference | AppsyncDatasourceOpensearchserviceConfig): any;
export declare class AppsyncDatasourceOpensearchserviceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceOpensearchserviceConfig | undefined;
    set internalValue(value: AppsyncDatasourceOpensearchserviceConfig | undefined);
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
}
export interface AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}
    */
    readonly awsSecretStoreArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#database_name AppsyncDatasource#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#region AppsyncDatasource#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#schema AppsyncDatasource#schema}
    */
    readonly schema?: string;
}
export declare function appsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigToTerraform(struct?: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference | AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig): any;
export declare function appsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigToHclTerraform(struct?: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference | AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig): any;
export declare class AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig | undefined;
    set internalValue(value: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig | undefined);
    private _awsSecretStoreArn?;
    get awsSecretStoreArn(): string;
    set awsSecretStoreArn(value: string);
    get awsSecretStoreArnInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    get dbClusterIdentifierInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string | undefined;
}
export interface AppsyncDatasourceRelationalDatabaseConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#source_type AppsyncDatasource#source_type}
    */
    readonly sourceType?: string;
    /**
    * http_endpoint_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#http_endpoint_config AppsyncDatasource#http_endpoint_config}
    */
    readonly httpEndpointConfig?: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig;
}
export declare function appsyncDatasourceRelationalDatabaseConfigToTerraform(struct?: AppsyncDatasourceRelationalDatabaseConfigOutputReference | AppsyncDatasourceRelationalDatabaseConfig): any;
export declare function appsyncDatasourceRelationalDatabaseConfigToHclTerraform(struct?: AppsyncDatasourceRelationalDatabaseConfigOutputReference | AppsyncDatasourceRelationalDatabaseConfig): any;
export declare class AppsyncDatasourceRelationalDatabaseConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncDatasourceRelationalDatabaseConfig | undefined;
    set internalValue(value: AppsyncDatasourceRelationalDatabaseConfig | undefined);
    private _sourceType?;
    get sourceType(): string;
    set sourceType(value: string);
    resetSourceType(): void;
    get sourceTypeInput(): string | undefined;
    private _httpEndpointConfig;
    get httpEndpointConfig(): AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference;
    putHttpEndpointConfig(value: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig): void;
    resetHttpEndpointConfig(): void;
    get httpEndpointConfigInput(): AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource aws_appsync_datasource}
*/
export declare class AppsyncDatasource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appsync_datasource";
    /**
    * Generates CDKTF code for importing a AppsyncDatasource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppsyncDatasource to import
    * @param importFromId The id of the existing AppsyncDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppsyncDatasource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_datasource aws_appsync_datasource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncDatasourceConfig
    */
    constructor(scope: Construct, id: string, config: AppsyncDatasourceConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    get arn(): string;
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
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    resetServiceRoleArn(): void;
    get serviceRoleArnInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _dynamodbConfig;
    get dynamodbConfig(): AppsyncDatasourceDynamodbConfigOutputReference;
    putDynamodbConfig(value: AppsyncDatasourceDynamodbConfig): void;
    resetDynamodbConfig(): void;
    get dynamodbConfigInput(): AppsyncDatasourceDynamodbConfig | undefined;
    private _elasticsearchConfig;
    get elasticsearchConfig(): AppsyncDatasourceElasticsearchConfigOutputReference;
    putElasticsearchConfig(value: AppsyncDatasourceElasticsearchConfig): void;
    resetElasticsearchConfig(): void;
    get elasticsearchConfigInput(): AppsyncDatasourceElasticsearchConfig | undefined;
    private _eventBridgeConfig;
    get eventBridgeConfig(): AppsyncDatasourceEventBridgeConfigOutputReference;
    putEventBridgeConfig(value: AppsyncDatasourceEventBridgeConfig): void;
    resetEventBridgeConfig(): void;
    get eventBridgeConfigInput(): AppsyncDatasourceEventBridgeConfig | undefined;
    private _httpConfig;
    get httpConfig(): AppsyncDatasourceHttpConfigOutputReference;
    putHttpConfig(value: AppsyncDatasourceHttpConfig): void;
    resetHttpConfig(): void;
    get httpConfigInput(): AppsyncDatasourceHttpConfig | undefined;
    private _lambdaConfig;
    get lambdaConfig(): AppsyncDatasourceLambdaConfigOutputReference;
    putLambdaConfig(value: AppsyncDatasourceLambdaConfig): void;
    resetLambdaConfig(): void;
    get lambdaConfigInput(): AppsyncDatasourceLambdaConfig | undefined;
    private _opensearchserviceConfig;
    get opensearchserviceConfig(): AppsyncDatasourceOpensearchserviceConfigOutputReference;
    putOpensearchserviceConfig(value: AppsyncDatasourceOpensearchserviceConfig): void;
    resetOpensearchserviceConfig(): void;
    get opensearchserviceConfigInput(): AppsyncDatasourceOpensearchserviceConfig | undefined;
    private _relationalDatabaseConfig;
    get relationalDatabaseConfig(): AppsyncDatasourceRelationalDatabaseConfigOutputReference;
    putRelationalDatabaseConfig(value: AppsyncDatasourceRelationalDatabaseConfig): void;
    resetRelationalDatabaseConfig(): void;
    get relationalDatabaseConfigInput(): AppsyncDatasourceRelationalDatabaseConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
