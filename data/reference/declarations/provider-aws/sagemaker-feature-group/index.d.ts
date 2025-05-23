/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}
    */
    readonly eventTimeFeatureName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}
    */
    readonly featureGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#id SagemakerFeatureGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}
    */
    readonly recordIdentifierFeatureName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * feature_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#feature_definition SagemakerFeatureGroup#feature_definition}
    */
    readonly featureDefinition: SagemakerFeatureGroupFeatureDefinition[] | cdktf.IResolvable;
    /**
    * offline_store_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}
    */
    readonly offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig;
    /**
    * online_store_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}
    */
    readonly onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig;
    /**
    * throughput_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}
    */
    readonly throughputConfig?: SagemakerFeatureGroupThroughputConfig;
}
export interface SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#dimension SagemakerFeatureGroup#dimension}
    */
    readonly dimension?: number;
}
export declare function sagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigToTerraform(struct?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference | SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig): any;
export declare function sagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigToHclTerraform(struct?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference | SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig): any;
export declare class SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig | undefined);
    private _dimension?;
    get dimension(): number;
    set dimension(value: number);
    resetDimension(): void;
    get dimensionInput(): number | undefined;
}
export interface SagemakerFeatureGroupFeatureDefinitionCollectionConfig {
    /**
    * vector_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#vector_config SagemakerFeatureGroup#vector_config}
    */
    readonly vectorConfig?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig;
}
export declare function sagemakerFeatureGroupFeatureDefinitionCollectionConfigToTerraform(struct?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference | SagemakerFeatureGroupFeatureDefinitionCollectionConfig): any;
export declare function sagemakerFeatureGroupFeatureDefinitionCollectionConfigToHclTerraform(struct?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference | SagemakerFeatureGroupFeatureDefinitionCollectionConfig): any;
export declare class SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerFeatureGroupFeatureDefinitionCollectionConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupFeatureDefinitionCollectionConfig | undefined);
    private _vectorConfig;
    get vectorConfig(): SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference;
    putVectorConfig(value: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig): void;
    resetVectorConfig(): void;
    get vectorConfigInput(): SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig | undefined;
}
export interface SagemakerFeatureGroupFeatureDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#collection_type SagemakerFeatureGroup#collection_type}
    */
    readonly collectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}
    */
    readonly featureName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}
    */
    readonly featureType?: string;
    /**
    * collection_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#collection_config SagemakerFeatureGroup#collection_config}
    */
    readonly collectionConfig?: SagemakerFeatureGroupFeatureDefinitionCollectionConfig;
}
export declare function sagemakerFeatureGroupFeatureDefinitionToTerraform(struct?: SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable): any;
export declare function sagemakerFeatureGroupFeatureDefinitionToHclTerraform(struct?: SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable): any;
export declare class SagemakerFeatureGroupFeatureDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable | undefined);
    private _collectionType?;
    get collectionType(): string;
    set collectionType(value: string);
    resetCollectionType(): void;
    get collectionTypeInput(): string | undefined;
    private _featureName?;
    get featureName(): string;
    set featureName(value: string);
    resetFeatureName(): void;
    get featureNameInput(): string | undefined;
    private _featureType?;
    get featureType(): string;
    set featureType(value: string);
    resetFeatureType(): void;
    get featureTypeInput(): string | undefined;
    private _collectionConfig;
    get collectionConfig(): SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference;
    putCollectionConfig(value: SagemakerFeatureGroupFeatureDefinitionCollectionConfig): void;
    resetCollectionConfig(): void;
    get collectionConfigInput(): SagemakerFeatureGroupFeatureDefinitionCollectionConfig | undefined;
}
export declare class SagemakerFeatureGroupFeatureDefinitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerFeatureGroupFeatureDefinition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerFeatureGroupFeatureDefinitionOutputReference;
}
export interface SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}
    */
    readonly catalog?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}
    */
    readonly database?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}
    */
    readonly tableName?: string;
}
export declare function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any;
export declare function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToHclTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any;
export declare class SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined);
    private _catalog?;
    get catalog(): string;
    set catalog(value: string);
    resetCatalog(): void;
    get catalogInput(): string | undefined;
    private _database?;
    get database(): string;
    set database(value: string);
    resetDatabase(): void;
    get databaseInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    resetTableName(): void;
    get tableNameInput(): string | undefined;
}
export interface SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#resolved_output_s3_uri SagemakerFeatureGroup#resolved_output_s3_uri}
    */
    readonly resolvedOutputS3Uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any;
export declare function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToHclTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any;
export declare class SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _resolvedOutputS3Uri?;
    get resolvedOutputS3Uri(): string;
    set resolvedOutputS3Uri(value: string);
    resetResolvedOutputS3Uri(): void;
    get resolvedOutputS3UriInput(): string | undefined;
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
}
export interface SagemakerFeatureGroupOfflineStoreConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}
    */
    readonly disableGlueTableCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#table_format SagemakerFeatureGroup#table_format}
    */
    readonly tableFormat?: string;
    /**
    * data_catalog_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}
    */
    readonly dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig;
    /**
    * s3_storage_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}
    */
    readonly s3StorageConfig: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig;
}
export declare function sagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfig): any;
export declare function sagemakerFeatureGroupOfflineStoreConfigToHclTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfig): any;
export declare class SagemakerFeatureGroupOfflineStoreConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerFeatureGroupOfflineStoreConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOfflineStoreConfig | undefined);
    private _disableGlueTableCreation?;
    get disableGlueTableCreation(): boolean | cdktf.IResolvable;
    set disableGlueTableCreation(value: boolean | cdktf.IResolvable);
    resetDisableGlueTableCreation(): void;
    get disableGlueTableCreationInput(): boolean | cdktf.IResolvable | undefined;
    private _tableFormat?;
    get tableFormat(): string;
    set tableFormat(value: string);
    resetTableFormat(): void;
    get tableFormatInput(): string | undefined;
    private _dataCatalogConfig;
    get dataCatalogConfig(): SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference;
    putDataCatalogConfig(value: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): void;
    resetDataCatalogConfig(): void;
    get dataCatalogConfigInput(): SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined;
    private _s3StorageConfig;
    get s3StorageConfig(): SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference;
    putS3StorageConfig(value: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): void;
    get s3StorageConfigInput(): SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig | undefined;
}
export interface SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any;
export declare function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToHclTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any;
export declare class SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
}
export interface SagemakerFeatureGroupOnlineStoreConfigTtlDuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#unit SagemakerFeatureGroup#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}
    */
    readonly value?: number;
}
export declare function sagemakerFeatureGroupOnlineStoreConfigTtlDurationToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference | SagemakerFeatureGroupOnlineStoreConfigTtlDuration): any;
export declare function sagemakerFeatureGroupOnlineStoreConfigTtlDurationToHclTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference | SagemakerFeatureGroupOnlineStoreConfigTtlDuration): any;
export declare class SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerFeatureGroupOnlineStoreConfigTtlDuration | undefined;
    set internalValue(value: SagemakerFeatureGroupOnlineStoreConfigTtlDuration | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number | undefined;
}
export interface SagemakerFeatureGroupOnlineStoreConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}
    */
    readonly enableOnlineStore?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}
    */
    readonly storageType?: string;
    /**
    * security_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}
    */
    readonly securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig;
    /**
    * ttl_duration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#ttl_duration SagemakerFeatureGroup#ttl_duration}
    */
    readonly ttlDuration?: SagemakerFeatureGroupOnlineStoreConfigTtlDuration;
}
export declare function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfig): any;
export declare function sagemakerFeatureGroupOnlineStoreConfigToHclTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfig): any;
export declare class SagemakerFeatureGroupOnlineStoreConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerFeatureGroupOnlineStoreConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupOnlineStoreConfig | undefined);
    private _enableOnlineStore?;
    get enableOnlineStore(): boolean | cdktf.IResolvable;
    set enableOnlineStore(value: boolean | cdktf.IResolvable);
    resetEnableOnlineStore(): void;
    get enableOnlineStoreInput(): boolean | cdktf.IResolvable | undefined;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
    private _securityConfig;
    get securityConfig(): SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference;
    putSecurityConfig(value: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): void;
    resetSecurityConfig(): void;
    get securityConfigInput(): SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined;
    private _ttlDuration;
    get ttlDuration(): SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference;
    putTtlDuration(value: SagemakerFeatureGroupOnlineStoreConfigTtlDuration): void;
    resetTtlDuration(): void;
    get ttlDurationInput(): SagemakerFeatureGroupOnlineStoreConfigTtlDuration | undefined;
}
export interface SagemakerFeatureGroupThroughputConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units SagemakerFeatureGroup#provisioned_read_capacity_units}
    */
    readonly provisionedReadCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units SagemakerFeatureGroup#provisioned_write_capacity_units}
    */
    readonly provisionedWriteCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#throughput_mode SagemakerFeatureGroup#throughput_mode}
    */
    readonly throughputMode?: string;
}
export declare function sagemakerFeatureGroupThroughputConfigToTerraform(struct?: SagemakerFeatureGroupThroughputConfigOutputReference | SagemakerFeatureGroupThroughputConfig): any;
export declare function sagemakerFeatureGroupThroughputConfigToHclTerraform(struct?: SagemakerFeatureGroupThroughputConfigOutputReference | SagemakerFeatureGroupThroughputConfig): any;
export declare class SagemakerFeatureGroupThroughputConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerFeatureGroupThroughputConfig | undefined;
    set internalValue(value: SagemakerFeatureGroupThroughputConfig | undefined);
    private _provisionedReadCapacityUnits?;
    get provisionedReadCapacityUnits(): number;
    set provisionedReadCapacityUnits(value: number);
    resetProvisionedReadCapacityUnits(): void;
    get provisionedReadCapacityUnitsInput(): number | undefined;
    private _provisionedWriteCapacityUnits?;
    get provisionedWriteCapacityUnits(): number;
    set provisionedWriteCapacityUnits(value: number);
    resetProvisionedWriteCapacityUnits(): void;
    get provisionedWriteCapacityUnitsInput(): number | undefined;
    private _throughputMode?;
    get throughputMode(): string;
    set throughputMode(value: string);
    resetThroughputMode(): void;
    get throughputModeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group aws_sagemaker_feature_group}
*/
export declare class SagemakerFeatureGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_feature_group";
    /**
    * Generates CDKTF code for importing a SagemakerFeatureGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerFeatureGroup to import
    * @param importFromId The id of the existing SagemakerFeatureGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerFeatureGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_feature_group aws_sagemaker_feature_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerFeatureGroupConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerFeatureGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _eventTimeFeatureName?;
    get eventTimeFeatureName(): string;
    set eventTimeFeatureName(value: string);
    get eventTimeFeatureNameInput(): string | undefined;
    private _featureGroupName?;
    get featureGroupName(): string;
    set featureGroupName(value: string);
    get featureGroupNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _recordIdentifierFeatureName?;
    get recordIdentifierFeatureName(): string;
    set recordIdentifierFeatureName(value: string);
    get recordIdentifierFeatureNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _featureDefinition;
    get featureDefinition(): SagemakerFeatureGroupFeatureDefinitionList;
    putFeatureDefinition(value: SagemakerFeatureGroupFeatureDefinition[] | cdktf.IResolvable): void;
    get featureDefinitionInput(): cdktf.IResolvable | SagemakerFeatureGroupFeatureDefinition[] | undefined;
    private _offlineStoreConfig;
    get offlineStoreConfig(): SagemakerFeatureGroupOfflineStoreConfigOutputReference;
    putOfflineStoreConfig(value: SagemakerFeatureGroupOfflineStoreConfig): void;
    resetOfflineStoreConfig(): void;
    get offlineStoreConfigInput(): SagemakerFeatureGroupOfflineStoreConfig | undefined;
    private _onlineStoreConfig;
    get onlineStoreConfig(): SagemakerFeatureGroupOnlineStoreConfigOutputReference;
    putOnlineStoreConfig(value: SagemakerFeatureGroupOnlineStoreConfig): void;
    resetOnlineStoreConfig(): void;
    get onlineStoreConfigInput(): SagemakerFeatureGroupOnlineStoreConfig | undefined;
    private _throughputConfig;
    get throughputConfig(): SagemakerFeatureGroupThroughputConfigOutputReference;
    putThroughputConfig(value: SagemakerFeatureGroupThroughputConfig): void;
    resetThroughputConfig(): void;
    get throughputConfigInput(): SagemakerFeatureGroupThroughputConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
