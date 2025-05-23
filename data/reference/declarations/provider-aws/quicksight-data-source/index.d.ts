/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightDataSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}
    */
    readonly dataSourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#id QuicksightDataSource#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#name QuicksightDataSource#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#tags QuicksightDataSource#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#tags_all QuicksightDataSource#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#type QuicksightDataSource#type}
    */
    readonly type: string;
    /**
    * credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#credentials QuicksightDataSource#credentials}
    */
    readonly credentials?: QuicksightDataSourceCredentials;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#parameters QuicksightDataSource#parameters}
    */
    readonly parameters: QuicksightDataSourceParameters;
    /**
    * permission block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#permission QuicksightDataSource#permission}
    */
    readonly permission?: QuicksightDataSourcePermission[] | cdktf.IResolvable;
    /**
    * ssl_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#ssl_properties QuicksightDataSource#ssl_properties}
    */
    readonly sslProperties?: QuicksightDataSourceSslProperties;
    /**
    * vpc_connection_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}
    */
    readonly vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties;
}
export interface QuicksightDataSourceCredentialsCredentialPair {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#password QuicksightDataSource#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#username QuicksightDataSource#username}
    */
    readonly username: string;
}
export declare function quicksightDataSourceCredentialsCredentialPairToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairOutputReference | QuicksightDataSourceCredentialsCredentialPair): any;
export declare function quicksightDataSourceCredentialsCredentialPairToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairOutputReference | QuicksightDataSourceCredentialsCredentialPair): any;
export declare class QuicksightDataSourceCredentialsCredentialPairOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceCredentialsCredentialPair | undefined;
    set internalValue(value: QuicksightDataSourceCredentialsCredentialPair | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface QuicksightDataSourceCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}
    */
    readonly copySourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#secret_arn QuicksightDataSource#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * credential_pair block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#credential_pair QuicksightDataSource#credential_pair}
    */
    readonly credentialPair?: QuicksightDataSourceCredentialsCredentialPair;
}
export declare function quicksightDataSourceCredentialsToTerraform(struct?: QuicksightDataSourceCredentialsOutputReference | QuicksightDataSourceCredentials): any;
export declare function quicksightDataSourceCredentialsToHclTerraform(struct?: QuicksightDataSourceCredentialsOutputReference | QuicksightDataSourceCredentials): any;
export declare class QuicksightDataSourceCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceCredentials | undefined;
    set internalValue(value: QuicksightDataSourceCredentials | undefined);
    private _copySourceArn?;
    get copySourceArn(): string;
    set copySourceArn(value: string);
    resetCopySourceArn(): void;
    get copySourceArnInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string | undefined;
    private _credentialPair;
    get credentialPair(): QuicksightDataSourceCredentialsCredentialPairOutputReference;
    putCredentialPair(value: QuicksightDataSourceCredentialsCredentialPair): void;
    resetCredentialPair(): void;
    get credentialPairInput(): QuicksightDataSourceCredentialsCredentialPair | undefined;
}
export interface QuicksightDataSourceParametersAmazonElasticsearch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#domain QuicksightDataSource#domain}
    */
    readonly domain: string;
}
export declare function quicksightDataSourceParametersAmazonElasticsearchToTerraform(struct?: QuicksightDataSourceParametersAmazonElasticsearchOutputReference | QuicksightDataSourceParametersAmazonElasticsearch): any;
export declare function quicksightDataSourceParametersAmazonElasticsearchToHclTerraform(struct?: QuicksightDataSourceParametersAmazonElasticsearchOutputReference | QuicksightDataSourceParametersAmazonElasticsearch): any;
export declare class QuicksightDataSourceParametersAmazonElasticsearchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersAmazonElasticsearch | undefined;
    set internalValue(value: QuicksightDataSourceParametersAmazonElasticsearch | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
}
export interface QuicksightDataSourceParametersAthena {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#work_group QuicksightDataSource#work_group}
    */
    readonly workGroup?: string;
}
export declare function quicksightDataSourceParametersAthenaToTerraform(struct?: QuicksightDataSourceParametersAthenaOutputReference | QuicksightDataSourceParametersAthena): any;
export declare function quicksightDataSourceParametersAthenaToHclTerraform(struct?: QuicksightDataSourceParametersAthenaOutputReference | QuicksightDataSourceParametersAthena): any;
export declare class QuicksightDataSourceParametersAthenaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersAthena | undefined;
    set internalValue(value: QuicksightDataSourceParametersAthena | undefined);
    private _workGroup?;
    get workGroup(): string;
    set workGroup(value: string);
    resetWorkGroup(): void;
    get workGroupInput(): string | undefined;
}
export interface QuicksightDataSourceParametersAurora {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersAuroraToTerraform(struct?: QuicksightDataSourceParametersAuroraOutputReference | QuicksightDataSourceParametersAurora): any;
export declare function quicksightDataSourceParametersAuroraToHclTerraform(struct?: QuicksightDataSourceParametersAuroraOutputReference | QuicksightDataSourceParametersAurora): any;
export declare class QuicksightDataSourceParametersAuroraOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersAurora | undefined;
    set internalValue(value: QuicksightDataSourceParametersAurora | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersAuroraPostgresql {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersAuroraPostgresqlToTerraform(struct?: QuicksightDataSourceParametersAuroraPostgresqlOutputReference | QuicksightDataSourceParametersAuroraPostgresql): any;
export declare function quicksightDataSourceParametersAuroraPostgresqlToHclTerraform(struct?: QuicksightDataSourceParametersAuroraPostgresqlOutputReference | QuicksightDataSourceParametersAuroraPostgresql): any;
export declare class QuicksightDataSourceParametersAuroraPostgresqlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersAuroraPostgresql | undefined;
    set internalValue(value: QuicksightDataSourceParametersAuroraPostgresql | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersAwsIotAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#data_set_name QuicksightDataSource#data_set_name}
    */
    readonly dataSetName: string;
}
export declare function quicksightDataSourceParametersAwsIotAnalyticsToTerraform(struct?: QuicksightDataSourceParametersAwsIotAnalyticsOutputReference | QuicksightDataSourceParametersAwsIotAnalytics): any;
export declare function quicksightDataSourceParametersAwsIotAnalyticsToHclTerraform(struct?: QuicksightDataSourceParametersAwsIotAnalyticsOutputReference | QuicksightDataSourceParametersAwsIotAnalytics): any;
export declare class QuicksightDataSourceParametersAwsIotAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersAwsIotAnalytics | undefined;
    set internalValue(value: QuicksightDataSourceParametersAwsIotAnalytics | undefined);
    private _dataSetName?;
    get dataSetName(): string;
    set dataSetName(value: string);
    get dataSetNameInput(): string | undefined;
}
export interface QuicksightDataSourceParametersDatabricks {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#sql_endpoint_path QuicksightDataSource#sql_endpoint_path}
    */
    readonly sqlEndpointPath: string;
}
export declare function quicksightDataSourceParametersDatabricksToTerraform(struct?: QuicksightDataSourceParametersDatabricksOutputReference | QuicksightDataSourceParametersDatabricks): any;
export declare function quicksightDataSourceParametersDatabricksToHclTerraform(struct?: QuicksightDataSourceParametersDatabricksOutputReference | QuicksightDataSourceParametersDatabricks): any;
export declare class QuicksightDataSourceParametersDatabricksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersDatabricks | undefined;
    set internalValue(value: QuicksightDataSourceParametersDatabricks | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
    private _sqlEndpointPath?;
    get sqlEndpointPath(): string;
    set sqlEndpointPath(value: string);
    get sqlEndpointPathInput(): string | undefined;
}
export interface QuicksightDataSourceParametersJira {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}
    */
    readonly siteBaseUrl: string;
}
export declare function quicksightDataSourceParametersJiraToTerraform(struct?: QuicksightDataSourceParametersJiraOutputReference | QuicksightDataSourceParametersJira): any;
export declare function quicksightDataSourceParametersJiraToHclTerraform(struct?: QuicksightDataSourceParametersJiraOutputReference | QuicksightDataSourceParametersJira): any;
export declare class QuicksightDataSourceParametersJiraOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersJira | undefined;
    set internalValue(value: QuicksightDataSourceParametersJira | undefined);
    private _siteBaseUrl?;
    get siteBaseUrl(): string;
    set siteBaseUrl(value: string);
    get siteBaseUrlInput(): string | undefined;
}
export interface QuicksightDataSourceParametersMariaDb {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersMariaDbToTerraform(struct?: QuicksightDataSourceParametersMariaDbOutputReference | QuicksightDataSourceParametersMariaDb): any;
export declare function quicksightDataSourceParametersMariaDbToHclTerraform(struct?: QuicksightDataSourceParametersMariaDbOutputReference | QuicksightDataSourceParametersMariaDb): any;
export declare class QuicksightDataSourceParametersMariaDbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersMariaDb | undefined;
    set internalValue(value: QuicksightDataSourceParametersMariaDb | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersMysql {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersMysqlToTerraform(struct?: QuicksightDataSourceParametersMysqlOutputReference | QuicksightDataSourceParametersMysql): any;
export declare function quicksightDataSourceParametersMysqlToHclTerraform(struct?: QuicksightDataSourceParametersMysqlOutputReference | QuicksightDataSourceParametersMysql): any;
export declare class QuicksightDataSourceParametersMysqlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersMysql | undefined;
    set internalValue(value: QuicksightDataSourceParametersMysql | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersOracle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersOracleToTerraform(struct?: QuicksightDataSourceParametersOracleOutputReference | QuicksightDataSourceParametersOracle): any;
export declare function quicksightDataSourceParametersOracleToHclTerraform(struct?: QuicksightDataSourceParametersOracleOutputReference | QuicksightDataSourceParametersOracle): any;
export declare class QuicksightDataSourceParametersOracleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersOracle | undefined;
    set internalValue(value: QuicksightDataSourceParametersOracle | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersPostgresql {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersPostgresqlToTerraform(struct?: QuicksightDataSourceParametersPostgresqlOutputReference | QuicksightDataSourceParametersPostgresql): any;
export declare function quicksightDataSourceParametersPostgresqlToHclTerraform(struct?: QuicksightDataSourceParametersPostgresqlOutputReference | QuicksightDataSourceParametersPostgresql): any;
export declare class QuicksightDataSourceParametersPostgresqlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersPostgresql | undefined;
    set internalValue(value: QuicksightDataSourceParametersPostgresql | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersPresto {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
    */
    readonly catalog: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersPrestoToTerraform(struct?: QuicksightDataSourceParametersPrestoOutputReference | QuicksightDataSourceParametersPresto): any;
export declare function quicksightDataSourceParametersPrestoToHclTerraform(struct?: QuicksightDataSourceParametersPrestoOutputReference | QuicksightDataSourceParametersPresto): any;
export declare class QuicksightDataSourceParametersPrestoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersPresto | undefined;
    set internalValue(value: QuicksightDataSourceParametersPresto | undefined);
    private _catalog?;
    get catalog(): string;
    set catalog(value: string);
    get catalogInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersRds {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#instance_id QuicksightDataSource#instance_id}
    */
    readonly instanceId: string;
}
export declare function quicksightDataSourceParametersRdsToTerraform(struct?: QuicksightDataSourceParametersRdsOutputReference | QuicksightDataSourceParametersRds): any;
export declare function quicksightDataSourceParametersRdsToHclTerraform(struct?: QuicksightDataSourceParametersRdsOutputReference | QuicksightDataSourceParametersRds): any;
export declare class QuicksightDataSourceParametersRdsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersRds | undefined;
    set internalValue(value: QuicksightDataSourceParametersRds | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
}
export interface QuicksightDataSourceParametersRedshift {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}
    */
    readonly clusterId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port?: number;
}
export declare function quicksightDataSourceParametersRedshiftToTerraform(struct?: QuicksightDataSourceParametersRedshiftOutputReference | QuicksightDataSourceParametersRedshift): any;
export declare function quicksightDataSourceParametersRedshiftToHclTerraform(struct?: QuicksightDataSourceParametersRedshiftOutputReference | QuicksightDataSourceParametersRedshift): any;
export declare class QuicksightDataSourceParametersRedshiftOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersRedshift | undefined;
    set internalValue(value: QuicksightDataSourceParametersRedshift | undefined);
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    resetClusterId(): void;
    get clusterIdInput(): string | undefined;
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersS3ManifestFileLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#bucket QuicksightDataSource#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#key QuicksightDataSource#key}
    */
    readonly key: string;
}
export declare function quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct?: QuicksightDataSourceParametersS3ManifestFileLocationOutputReference | QuicksightDataSourceParametersS3ManifestFileLocation): any;
export declare function quicksightDataSourceParametersS3ManifestFileLocationToHclTerraform(struct?: QuicksightDataSourceParametersS3ManifestFileLocationOutputReference | QuicksightDataSourceParametersS3ManifestFileLocation): any;
export declare class QuicksightDataSourceParametersS3ManifestFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersS3ManifestFileLocation | undefined;
    set internalValue(value: QuicksightDataSourceParametersS3ManifestFileLocation | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
}
export interface QuicksightDataSourceParametersS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * manifest_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}
    */
    readonly manifestFileLocation: QuicksightDataSourceParametersS3ManifestFileLocation;
}
export declare function quicksightDataSourceParametersS3ToTerraform(struct?: QuicksightDataSourceParametersS3OutputReference | QuicksightDataSourceParametersS3): any;
export declare function quicksightDataSourceParametersS3ToHclTerraform(struct?: QuicksightDataSourceParametersS3OutputReference | QuicksightDataSourceParametersS3): any;
export declare class QuicksightDataSourceParametersS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersS3 | undefined;
    set internalValue(value: QuicksightDataSourceParametersS3 | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _manifestFileLocation;
    get manifestFileLocation(): QuicksightDataSourceParametersS3ManifestFileLocationOutputReference;
    putManifestFileLocation(value: QuicksightDataSourceParametersS3ManifestFileLocation): void;
    get manifestFileLocationInput(): QuicksightDataSourceParametersS3ManifestFileLocation | undefined;
}
export interface QuicksightDataSourceParametersServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#site_base_url QuicksightDataSource#site_base_url}
    */
    readonly siteBaseUrl: string;
}
export declare function quicksightDataSourceParametersServiceNowToTerraform(struct?: QuicksightDataSourceParametersServiceNowOutputReference | QuicksightDataSourceParametersServiceNow): any;
export declare function quicksightDataSourceParametersServiceNowToHclTerraform(struct?: QuicksightDataSourceParametersServiceNowOutputReference | QuicksightDataSourceParametersServiceNow): any;
export declare class QuicksightDataSourceParametersServiceNowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersServiceNow | undefined;
    set internalValue(value: QuicksightDataSourceParametersServiceNow | undefined);
    private _siteBaseUrl?;
    get siteBaseUrl(): string;
    set siteBaseUrl(value: string);
    get siteBaseUrlInput(): string | undefined;
}
export interface QuicksightDataSourceParametersSnowflake {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#warehouse QuicksightDataSource#warehouse}
    */
    readonly warehouse: string;
}
export declare function quicksightDataSourceParametersSnowflakeToTerraform(struct?: QuicksightDataSourceParametersSnowflakeOutputReference | QuicksightDataSourceParametersSnowflake): any;
export declare function quicksightDataSourceParametersSnowflakeToHclTerraform(struct?: QuicksightDataSourceParametersSnowflakeOutputReference | QuicksightDataSourceParametersSnowflake): any;
export declare class QuicksightDataSourceParametersSnowflakeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersSnowflake | undefined;
    set internalValue(value: QuicksightDataSourceParametersSnowflake | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _warehouse?;
    get warehouse(): string;
    set warehouse(value: string);
    get warehouseInput(): string | undefined;
}
export interface QuicksightDataSourceParametersSpark {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersSparkToTerraform(struct?: QuicksightDataSourceParametersSparkOutputReference | QuicksightDataSourceParametersSpark): any;
export declare function quicksightDataSourceParametersSparkToHclTerraform(struct?: QuicksightDataSourceParametersSparkOutputReference | QuicksightDataSourceParametersSpark): any;
export declare class QuicksightDataSourceParametersSparkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersSpark | undefined;
    set internalValue(value: QuicksightDataSourceParametersSpark | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersSqlServer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersSqlServerToTerraform(struct?: QuicksightDataSourceParametersSqlServerOutputReference | QuicksightDataSourceParametersSqlServer): any;
export declare function quicksightDataSourceParametersSqlServerToHclTerraform(struct?: QuicksightDataSourceParametersSqlServerOutputReference | QuicksightDataSourceParametersSqlServer): any;
export declare class QuicksightDataSourceParametersSqlServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersSqlServer | undefined;
    set internalValue(value: QuicksightDataSourceParametersSqlServer | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersTeradata {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
    */
    readonly port: number;
}
export declare function quicksightDataSourceParametersTeradataToTerraform(struct?: QuicksightDataSourceParametersTeradataOutputReference | QuicksightDataSourceParametersTeradata): any;
export declare function quicksightDataSourceParametersTeradataToHclTerraform(struct?: QuicksightDataSourceParametersTeradataOutputReference | QuicksightDataSourceParametersTeradata): any;
export declare class QuicksightDataSourceParametersTeradataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersTeradata | undefined;
    set internalValue(value: QuicksightDataSourceParametersTeradata | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface QuicksightDataSourceParametersTwitter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#max_rows QuicksightDataSource#max_rows}
    */
    readonly maxRows: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#query QuicksightDataSource#query}
    */
    readonly query: string;
}
export declare function quicksightDataSourceParametersTwitterToTerraform(struct?: QuicksightDataSourceParametersTwitterOutputReference | QuicksightDataSourceParametersTwitter): any;
export declare function quicksightDataSourceParametersTwitterToHclTerraform(struct?: QuicksightDataSourceParametersTwitterOutputReference | QuicksightDataSourceParametersTwitter): any;
export declare class QuicksightDataSourceParametersTwitterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParametersTwitter | undefined;
    set internalValue(value: QuicksightDataSourceParametersTwitter | undefined);
    private _maxRows?;
    get maxRows(): number;
    set maxRows(value: number);
    get maxRowsInput(): number | undefined;
    private _query?;
    get query(): string;
    set query(value: string);
    get queryInput(): string | undefined;
}
export interface QuicksightDataSourceParameters {
    /**
    * amazon_elasticsearch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#amazon_elasticsearch QuicksightDataSource#amazon_elasticsearch}
    */
    readonly amazonElasticsearch?: QuicksightDataSourceParametersAmazonElasticsearch;
    /**
    * athena block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#athena QuicksightDataSource#athena}
    */
    readonly athena?: QuicksightDataSourceParametersAthena;
    /**
    * aurora block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#aurora QuicksightDataSource#aurora}
    */
    readonly aurora?: QuicksightDataSourceParametersAurora;
    /**
    * aurora_postgresql block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#aurora_postgresql QuicksightDataSource#aurora_postgresql}
    */
    readonly auroraPostgresql?: QuicksightDataSourceParametersAuroraPostgresql;
    /**
    * aws_iot_analytics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#aws_iot_analytics QuicksightDataSource#aws_iot_analytics}
    */
    readonly awsIotAnalytics?: QuicksightDataSourceParametersAwsIotAnalytics;
    /**
    * databricks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#databricks QuicksightDataSource#databricks}
    */
    readonly databricks?: QuicksightDataSourceParametersDatabricks;
    /**
    * jira block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#jira QuicksightDataSource#jira}
    */
    readonly jira?: QuicksightDataSourceParametersJira;
    /**
    * maria_db block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#maria_db QuicksightDataSource#maria_db}
    */
    readonly mariaDb?: QuicksightDataSourceParametersMariaDb;
    /**
    * mysql block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#mysql QuicksightDataSource#mysql}
    */
    readonly mysql?: QuicksightDataSourceParametersMysql;
    /**
    * oracle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#oracle QuicksightDataSource#oracle}
    */
    readonly oracle?: QuicksightDataSourceParametersOracle;
    /**
    * postgresql block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#postgresql QuicksightDataSource#postgresql}
    */
    readonly postgresql?: QuicksightDataSourceParametersPostgresql;
    /**
    * presto block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#presto QuicksightDataSource#presto}
    */
    readonly presto?: QuicksightDataSourceParametersPresto;
    /**
    * rds block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#rds QuicksightDataSource#rds}
    */
    readonly rds?: QuicksightDataSourceParametersRds;
    /**
    * redshift block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#redshift QuicksightDataSource#redshift}
    */
    readonly redshift?: QuicksightDataSourceParametersRedshift;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#s3 QuicksightDataSource#s3}
    */
    readonly s3?: QuicksightDataSourceParametersS3;
    /**
    * service_now block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#service_now QuicksightDataSource#service_now}
    */
    readonly serviceNow?: QuicksightDataSourceParametersServiceNow;
    /**
    * snowflake block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#snowflake QuicksightDataSource#snowflake}
    */
    readonly snowflake?: QuicksightDataSourceParametersSnowflake;
    /**
    * spark block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#spark QuicksightDataSource#spark}
    */
    readonly spark?: QuicksightDataSourceParametersSpark;
    /**
    * sql_server block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#sql_server QuicksightDataSource#sql_server}
    */
    readonly sqlServer?: QuicksightDataSourceParametersSqlServer;
    /**
    * teradata block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#teradata QuicksightDataSource#teradata}
    */
    readonly teradata?: QuicksightDataSourceParametersTeradata;
    /**
    * twitter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#twitter QuicksightDataSource#twitter}
    */
    readonly twitter?: QuicksightDataSourceParametersTwitter;
}
export declare function quicksightDataSourceParametersToTerraform(struct?: QuicksightDataSourceParametersOutputReference | QuicksightDataSourceParameters): any;
export declare function quicksightDataSourceParametersToHclTerraform(struct?: QuicksightDataSourceParametersOutputReference | QuicksightDataSourceParameters): any;
export declare class QuicksightDataSourceParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceParameters | undefined;
    set internalValue(value: QuicksightDataSourceParameters | undefined);
    private _amazonElasticsearch;
    get amazonElasticsearch(): QuicksightDataSourceParametersAmazonElasticsearchOutputReference;
    putAmazonElasticsearch(value: QuicksightDataSourceParametersAmazonElasticsearch): void;
    resetAmazonElasticsearch(): void;
    get amazonElasticsearchInput(): QuicksightDataSourceParametersAmazonElasticsearch | undefined;
    private _athena;
    get athena(): QuicksightDataSourceParametersAthenaOutputReference;
    putAthena(value: QuicksightDataSourceParametersAthena): void;
    resetAthena(): void;
    get athenaInput(): QuicksightDataSourceParametersAthena | undefined;
    private _aurora;
    get aurora(): QuicksightDataSourceParametersAuroraOutputReference;
    putAurora(value: QuicksightDataSourceParametersAurora): void;
    resetAurora(): void;
    get auroraInput(): QuicksightDataSourceParametersAurora | undefined;
    private _auroraPostgresql;
    get auroraPostgresql(): QuicksightDataSourceParametersAuroraPostgresqlOutputReference;
    putAuroraPostgresql(value: QuicksightDataSourceParametersAuroraPostgresql): void;
    resetAuroraPostgresql(): void;
    get auroraPostgresqlInput(): QuicksightDataSourceParametersAuroraPostgresql | undefined;
    private _awsIotAnalytics;
    get awsIotAnalytics(): QuicksightDataSourceParametersAwsIotAnalyticsOutputReference;
    putAwsIotAnalytics(value: QuicksightDataSourceParametersAwsIotAnalytics): void;
    resetAwsIotAnalytics(): void;
    get awsIotAnalyticsInput(): QuicksightDataSourceParametersAwsIotAnalytics | undefined;
    private _databricks;
    get databricks(): QuicksightDataSourceParametersDatabricksOutputReference;
    putDatabricks(value: QuicksightDataSourceParametersDatabricks): void;
    resetDatabricks(): void;
    get databricksInput(): QuicksightDataSourceParametersDatabricks | undefined;
    private _jira;
    get jira(): QuicksightDataSourceParametersJiraOutputReference;
    putJira(value: QuicksightDataSourceParametersJira): void;
    resetJira(): void;
    get jiraInput(): QuicksightDataSourceParametersJira | undefined;
    private _mariaDb;
    get mariaDb(): QuicksightDataSourceParametersMariaDbOutputReference;
    putMariaDb(value: QuicksightDataSourceParametersMariaDb): void;
    resetMariaDb(): void;
    get mariaDbInput(): QuicksightDataSourceParametersMariaDb | undefined;
    private _mysql;
    get mysql(): QuicksightDataSourceParametersMysqlOutputReference;
    putMysql(value: QuicksightDataSourceParametersMysql): void;
    resetMysql(): void;
    get mysqlInput(): QuicksightDataSourceParametersMysql | undefined;
    private _oracle;
    get oracle(): QuicksightDataSourceParametersOracleOutputReference;
    putOracle(value: QuicksightDataSourceParametersOracle): void;
    resetOracle(): void;
    get oracleInput(): QuicksightDataSourceParametersOracle | undefined;
    private _postgresql;
    get postgresql(): QuicksightDataSourceParametersPostgresqlOutputReference;
    putPostgresql(value: QuicksightDataSourceParametersPostgresql): void;
    resetPostgresql(): void;
    get postgresqlInput(): QuicksightDataSourceParametersPostgresql | undefined;
    private _presto;
    get presto(): QuicksightDataSourceParametersPrestoOutputReference;
    putPresto(value: QuicksightDataSourceParametersPresto): void;
    resetPresto(): void;
    get prestoInput(): QuicksightDataSourceParametersPresto | undefined;
    private _rds;
    get rds(): QuicksightDataSourceParametersRdsOutputReference;
    putRds(value: QuicksightDataSourceParametersRds): void;
    resetRds(): void;
    get rdsInput(): QuicksightDataSourceParametersRds | undefined;
    private _redshift;
    get redshift(): QuicksightDataSourceParametersRedshiftOutputReference;
    putRedshift(value: QuicksightDataSourceParametersRedshift): void;
    resetRedshift(): void;
    get redshiftInput(): QuicksightDataSourceParametersRedshift | undefined;
    private _s3;
    get s3(): QuicksightDataSourceParametersS3OutputReference;
    putS3(value: QuicksightDataSourceParametersS3): void;
    resetS3(): void;
    get s3Input(): QuicksightDataSourceParametersS3 | undefined;
    private _serviceNow;
    get serviceNow(): QuicksightDataSourceParametersServiceNowOutputReference;
    putServiceNow(value: QuicksightDataSourceParametersServiceNow): void;
    resetServiceNow(): void;
    get serviceNowInput(): QuicksightDataSourceParametersServiceNow | undefined;
    private _snowflake;
    get snowflake(): QuicksightDataSourceParametersSnowflakeOutputReference;
    putSnowflake(value: QuicksightDataSourceParametersSnowflake): void;
    resetSnowflake(): void;
    get snowflakeInput(): QuicksightDataSourceParametersSnowflake | undefined;
    private _spark;
    get spark(): QuicksightDataSourceParametersSparkOutputReference;
    putSpark(value: QuicksightDataSourceParametersSpark): void;
    resetSpark(): void;
    get sparkInput(): QuicksightDataSourceParametersSpark | undefined;
    private _sqlServer;
    get sqlServer(): QuicksightDataSourceParametersSqlServerOutputReference;
    putSqlServer(value: QuicksightDataSourceParametersSqlServer): void;
    resetSqlServer(): void;
    get sqlServerInput(): QuicksightDataSourceParametersSqlServer | undefined;
    private _teradata;
    get teradata(): QuicksightDataSourceParametersTeradataOutputReference;
    putTeradata(value: QuicksightDataSourceParametersTeradata): void;
    resetTeradata(): void;
    get teradataInput(): QuicksightDataSourceParametersTeradata | undefined;
    private _twitter;
    get twitter(): QuicksightDataSourceParametersTwitterOutputReference;
    putTwitter(value: QuicksightDataSourceParametersTwitter): void;
    resetTwitter(): void;
    get twitterInput(): QuicksightDataSourceParametersTwitter | undefined;
}
export interface QuicksightDataSourcePermission {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#actions QuicksightDataSource#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#principal QuicksightDataSource#principal}
    */
    readonly principal: string;
}
export declare function quicksightDataSourcePermissionToTerraform(struct?: QuicksightDataSourcePermission | cdktf.IResolvable): any;
export declare function quicksightDataSourcePermissionToHclTerraform(struct?: QuicksightDataSourcePermission | cdktf.IResolvable): any;
export declare class QuicksightDataSourcePermissionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSourcePermission | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSourcePermission | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
}
export declare class QuicksightDataSourcePermissionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSourcePermission[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSourcePermissionOutputReference;
}
export interface QuicksightDataSourceSslProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}
    */
    readonly disableSsl: boolean | cdktf.IResolvable;
}
export declare function quicksightDataSourceSslPropertiesToTerraform(struct?: QuicksightDataSourceSslPropertiesOutputReference | QuicksightDataSourceSslProperties): any;
export declare function quicksightDataSourceSslPropertiesToHclTerraform(struct?: QuicksightDataSourceSslPropertiesOutputReference | QuicksightDataSourceSslProperties): any;
export declare class QuicksightDataSourceSslPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceSslProperties | undefined;
    set internalValue(value: QuicksightDataSourceSslProperties | undefined);
    private _disableSsl?;
    get disableSsl(): boolean | cdktf.IResolvable;
    set disableSsl(value: boolean | cdktf.IResolvable);
    get disableSslInput(): boolean | cdktf.IResolvable | undefined;
}
export interface QuicksightDataSourceVpcConnectionProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
    */
    readonly vpcConnectionArn: string;
}
export declare function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceVpcConnectionPropertiesOutputReference | QuicksightDataSourceVpcConnectionProperties): any;
export declare function quicksightDataSourceVpcConnectionPropertiesToHclTerraform(struct?: QuicksightDataSourceVpcConnectionPropertiesOutputReference | QuicksightDataSourceVpcConnectionProperties): any;
export declare class QuicksightDataSourceVpcConnectionPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSourceVpcConnectionProperties | undefined;
    set internalValue(value: QuicksightDataSourceVpcConnectionProperties | undefined);
    private _vpcConnectionArn?;
    get vpcConnectionArn(): string;
    set vpcConnectionArn(value: string);
    get vpcConnectionArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source aws_quicksight_data_source}
*/
export declare class QuicksightDataSource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_data_source";
    /**
    * Generates CDKTF code for importing a QuicksightDataSource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightDataSource to import
    * @param importFromId The id of the existing QuicksightDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightDataSource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_source aws_quicksight_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDataSourceConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightDataSourceConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _dataSourceId?;
    get dataSourceId(): string;
    set dataSourceId(value: string);
    get dataSourceIdInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _credentials;
    get credentials(): QuicksightDataSourceCredentialsOutputReference;
    putCredentials(value: QuicksightDataSourceCredentials): void;
    resetCredentials(): void;
    get credentialsInput(): QuicksightDataSourceCredentials | undefined;
    private _parameters;
    get parameters(): QuicksightDataSourceParametersOutputReference;
    putParameters(value: QuicksightDataSourceParameters): void;
    get parametersInput(): QuicksightDataSourceParameters | undefined;
    private _permission;
    get permission(): QuicksightDataSourcePermissionList;
    putPermission(value: QuicksightDataSourcePermission[] | cdktf.IResolvable): void;
    resetPermission(): void;
    get permissionInput(): cdktf.IResolvable | QuicksightDataSourcePermission[] | undefined;
    private _sslProperties;
    get sslProperties(): QuicksightDataSourceSslPropertiesOutputReference;
    putSslProperties(value: QuicksightDataSourceSslProperties): void;
    resetSslProperties(): void;
    get sslPropertiesInput(): QuicksightDataSourceSslProperties | undefined;
    private _vpcConnectionProperties;
    get vpcConnectionProperties(): QuicksightDataSourceVpcConnectionPropertiesOutputReference;
    putVpcConnectionProperties(value: QuicksightDataSourceVpcConnectionProperties): void;
    resetVpcConnectionProperties(): void;
    get vpcConnectionPropertiesInput(): QuicksightDataSourceVpcConnectionProperties | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
