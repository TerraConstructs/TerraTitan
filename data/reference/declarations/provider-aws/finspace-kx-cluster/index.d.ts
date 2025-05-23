/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FinspaceKxClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}
    */
    readonly azMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}
    */
    readonly commandLineArguments?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}
    */
    readonly executionRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}
    */
    readonly initializationScript?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}
    */
    readonly releaseLabel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}
    */
    readonly type: string;
    /**
    * auto_scaling_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#auto_scaling_configuration FinspaceKxCluster#auto_scaling_configuration}
    */
    readonly autoScalingConfiguration?: FinspaceKxClusterAutoScalingConfiguration;
    /**
    * cache_storage_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#cache_storage_configurations FinspaceKxCluster#cache_storage_configurations}
    */
    readonly cacheStorageConfigurations?: FinspaceKxClusterCacheStorageConfigurations[] | cdktf.IResolvable;
    /**
    * capacity_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#capacity_configuration FinspaceKxCluster#capacity_configuration}
    */
    readonly capacityConfiguration?: FinspaceKxClusterCapacityConfiguration;
    /**
    * code block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#code FinspaceKxCluster#code}
    */
    readonly code?: FinspaceKxClusterCode;
    /**
    * database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#database FinspaceKxCluster#database}
    */
    readonly database?: FinspaceKxClusterDatabase[] | cdktf.IResolvable;
    /**
    * savedown_storage_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#savedown_storage_configuration FinspaceKxCluster#savedown_storage_configuration}
    */
    readonly savedownStorageConfiguration?: FinspaceKxClusterSavedownStorageConfiguration;
    /**
    * scaling_group_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#scaling_group_configuration FinspaceKxCluster#scaling_group_configuration}
    */
    readonly scalingGroupConfiguration?: FinspaceKxClusterScalingGroupConfiguration;
    /**
    * tickerplant_log_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#tickerplant_log_configuration FinspaceKxCluster#tickerplant_log_configuration}
    */
    readonly tickerplantLogConfiguration?: FinspaceKxClusterTickerplantLogConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#timeouts FinspaceKxCluster#timeouts}
    */
    readonly timeouts?: FinspaceKxClusterTimeouts;
    /**
    * vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#vpc_configuration FinspaceKxCluster#vpc_configuration}
    */
    readonly vpcConfiguration: FinspaceKxClusterVpcConfiguration;
}
export interface FinspaceKxClusterAutoScalingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}
    */
    readonly autoScalingMetric: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}
    */
    readonly maxNodeCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}
    */
    readonly metricTarget: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}
    */
    readonly minNodeCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}
    */
    readonly scaleInCooldownSeconds: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}
    */
    readonly scaleOutCooldownSeconds: number;
}
export declare function finspaceKxClusterAutoScalingConfigurationToTerraform(struct?: FinspaceKxClusterAutoScalingConfigurationOutputReference | FinspaceKxClusterAutoScalingConfiguration): any;
export declare function finspaceKxClusterAutoScalingConfigurationToHclTerraform(struct?: FinspaceKxClusterAutoScalingConfigurationOutputReference | FinspaceKxClusterAutoScalingConfiguration): any;
export declare class FinspaceKxClusterAutoScalingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxClusterAutoScalingConfiguration | undefined;
    set internalValue(value: FinspaceKxClusterAutoScalingConfiguration | undefined);
    private _autoScalingMetric?;
    get autoScalingMetric(): string;
    set autoScalingMetric(value: string);
    get autoScalingMetricInput(): string | undefined;
    private _maxNodeCount?;
    get maxNodeCount(): number;
    set maxNodeCount(value: number);
    get maxNodeCountInput(): number | undefined;
    private _metricTarget?;
    get metricTarget(): number;
    set metricTarget(value: number);
    get metricTargetInput(): number | undefined;
    private _minNodeCount?;
    get minNodeCount(): number;
    set minNodeCount(value: number);
    get minNodeCountInput(): number | undefined;
    private _scaleInCooldownSeconds?;
    get scaleInCooldownSeconds(): number;
    set scaleInCooldownSeconds(value: number);
    get scaleInCooldownSecondsInput(): number | undefined;
    private _scaleOutCooldownSeconds?;
    get scaleOutCooldownSeconds(): number;
    set scaleOutCooldownSeconds(value: number);
    get scaleOutCooldownSecondsInput(): number | undefined;
}
export interface FinspaceKxClusterCacheStorageConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}
    */
    readonly type: string;
}
export declare function finspaceKxClusterCacheStorageConfigurationsToTerraform(struct?: FinspaceKxClusterCacheStorageConfigurations | cdktf.IResolvable): any;
export declare function finspaceKxClusterCacheStorageConfigurationsToHclTerraform(struct?: FinspaceKxClusterCacheStorageConfigurations | cdktf.IResolvable): any;
export declare class FinspaceKxClusterCacheStorageConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FinspaceKxClusterCacheStorageConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxClusterCacheStorageConfigurations | cdktf.IResolvable | undefined);
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class FinspaceKxClusterCacheStorageConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FinspaceKxClusterCacheStorageConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FinspaceKxClusterCacheStorageConfigurationsOutputReference;
}
export interface FinspaceKxClusterCapacityConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}
    */
    readonly nodeCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}
    */
    readonly nodeType: string;
}
export declare function finspaceKxClusterCapacityConfigurationToTerraform(struct?: FinspaceKxClusterCapacityConfigurationOutputReference | FinspaceKxClusterCapacityConfiguration): any;
export declare function finspaceKxClusterCapacityConfigurationToHclTerraform(struct?: FinspaceKxClusterCapacityConfigurationOutputReference | FinspaceKxClusterCapacityConfiguration): any;
export declare class FinspaceKxClusterCapacityConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxClusterCapacityConfiguration | undefined;
    set internalValue(value: FinspaceKxClusterCapacityConfiguration | undefined);
    private _nodeCount?;
    get nodeCount(): number;
    set nodeCount(value: number);
    get nodeCountInput(): number | undefined;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    get nodeTypeInput(): string | undefined;
}
export interface FinspaceKxClusterCode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}
    */
    readonly s3Key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}
    */
    readonly s3ObjectVersion?: string;
}
export declare function finspaceKxClusterCodeToTerraform(struct?: FinspaceKxClusterCodeOutputReference | FinspaceKxClusterCode): any;
export declare function finspaceKxClusterCodeToHclTerraform(struct?: FinspaceKxClusterCodeOutputReference | FinspaceKxClusterCode): any;
export declare class FinspaceKxClusterCodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxClusterCode | undefined;
    set internalValue(value: FinspaceKxClusterCode | undefined);
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    get s3BucketInput(): string | undefined;
    private _s3Key?;
    get s3Key(): string;
    set s3Key(value: string);
    get s3KeyInput(): string | undefined;
    private _s3ObjectVersion?;
    get s3ObjectVersion(): string;
    set s3ObjectVersion(value: string);
    resetS3ObjectVersion(): void;
    get s3ObjectVersionInput(): string | undefined;
}
export interface FinspaceKxClusterDatabaseCacheConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}
    */
    readonly cacheType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}
    */
    readonly dbPaths?: string[];
}
export declare function finspaceKxClusterDatabaseCacheConfigurationsToTerraform(struct?: FinspaceKxClusterDatabaseCacheConfigurations | cdktf.IResolvable): any;
export declare function finspaceKxClusterDatabaseCacheConfigurationsToHclTerraform(struct?: FinspaceKxClusterDatabaseCacheConfigurations | cdktf.IResolvable): any;
export declare class FinspaceKxClusterDatabaseCacheConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FinspaceKxClusterDatabaseCacheConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxClusterDatabaseCacheConfigurations | cdktf.IResolvable | undefined);
    private _cacheType?;
    get cacheType(): string;
    set cacheType(value: string);
    get cacheTypeInput(): string | undefined;
    private _dbPaths?;
    get dbPaths(): string[];
    set dbPaths(value: string[]);
    resetDbPaths(): void;
    get dbPathsInput(): string[] | undefined;
}
export declare class FinspaceKxClusterDatabaseCacheConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FinspaceKxClusterDatabaseCacheConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FinspaceKxClusterDatabaseCacheConfigurationsOutputReference;
}
export interface FinspaceKxClusterDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}
    */
    readonly changesetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#dataview_name FinspaceKxCluster#dataview_name}
    */
    readonly dataviewName?: string;
    /**
    * cache_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#cache_configurations FinspaceKxCluster#cache_configurations}
    */
    readonly cacheConfigurations?: FinspaceKxClusterDatabaseCacheConfigurations[] | cdktf.IResolvable;
}
export declare function finspaceKxClusterDatabaseToTerraform(struct?: FinspaceKxClusterDatabase | cdktf.IResolvable): any;
export declare function finspaceKxClusterDatabaseToHclTerraform(struct?: FinspaceKxClusterDatabase | cdktf.IResolvable): any;
export declare class FinspaceKxClusterDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FinspaceKxClusterDatabase | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxClusterDatabase | cdktf.IResolvable | undefined);
    private _changesetId?;
    get changesetId(): string;
    set changesetId(value: string);
    resetChangesetId(): void;
    get changesetIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _dataviewName?;
    get dataviewName(): string;
    set dataviewName(value: string);
    resetDataviewName(): void;
    get dataviewNameInput(): string | undefined;
    private _cacheConfigurations;
    get cacheConfigurations(): FinspaceKxClusterDatabaseCacheConfigurationsList;
    putCacheConfigurations(value: FinspaceKxClusterDatabaseCacheConfigurations[] | cdktf.IResolvable): void;
    resetCacheConfigurations(): void;
    get cacheConfigurationsInput(): cdktf.IResolvable | FinspaceKxClusterDatabaseCacheConfigurations[] | undefined;
}
export declare class FinspaceKxClusterDatabaseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FinspaceKxClusterDatabase[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FinspaceKxClusterDatabaseOutputReference;
}
export interface FinspaceKxClusterSavedownStorageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}
    */
    readonly size?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#volume_name FinspaceKxCluster#volume_name}
    */
    readonly volumeName?: string;
}
export declare function finspaceKxClusterSavedownStorageConfigurationToTerraform(struct?: FinspaceKxClusterSavedownStorageConfigurationOutputReference | FinspaceKxClusterSavedownStorageConfiguration): any;
export declare function finspaceKxClusterSavedownStorageConfigurationToHclTerraform(struct?: FinspaceKxClusterSavedownStorageConfigurationOutputReference | FinspaceKxClusterSavedownStorageConfiguration): any;
export declare class FinspaceKxClusterSavedownStorageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxClusterSavedownStorageConfiguration | undefined;
    set internalValue(value: FinspaceKxClusterSavedownStorageConfiguration | undefined);
    private _size?;
    get size(): number;
    set size(value: number);
    resetSize(): void;
    get sizeInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _volumeName?;
    get volumeName(): string;
    set volumeName(value: string);
    resetVolumeName(): void;
    get volumeNameInput(): string | undefined;
}
export interface FinspaceKxClusterScalingGroupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#cpu FinspaceKxCluster#cpu}
    */
    readonly cpu?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#memory_limit FinspaceKxCluster#memory_limit}
    */
    readonly memoryLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#memory_reservation FinspaceKxCluster#memory_reservation}
    */
    readonly memoryReservation: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}
    */
    readonly nodeCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#scaling_group_name FinspaceKxCluster#scaling_group_name}
    */
    readonly scalingGroupName: string;
}
export declare function finspaceKxClusterScalingGroupConfigurationToTerraform(struct?: FinspaceKxClusterScalingGroupConfigurationOutputReference | FinspaceKxClusterScalingGroupConfiguration): any;
export declare function finspaceKxClusterScalingGroupConfigurationToHclTerraform(struct?: FinspaceKxClusterScalingGroupConfigurationOutputReference | FinspaceKxClusterScalingGroupConfiguration): any;
export declare class FinspaceKxClusterScalingGroupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxClusterScalingGroupConfiguration | undefined;
    set internalValue(value: FinspaceKxClusterScalingGroupConfiguration | undefined);
    private _cpu?;
    get cpu(): number;
    set cpu(value: number);
    resetCpu(): void;
    get cpuInput(): number | undefined;
    private _memoryLimit?;
    get memoryLimit(): number;
    set memoryLimit(value: number);
    resetMemoryLimit(): void;
    get memoryLimitInput(): number | undefined;
    private _memoryReservation?;
    get memoryReservation(): number;
    set memoryReservation(value: number);
    get memoryReservationInput(): number | undefined;
    private _nodeCount?;
    get nodeCount(): number;
    set nodeCount(value: number);
    get nodeCountInput(): number | undefined;
    private _scalingGroupName?;
    get scalingGroupName(): string;
    set scalingGroupName(value: string);
    get scalingGroupNameInput(): string | undefined;
}
export interface FinspaceKxClusterTickerplantLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#tickerplant_log_volumes FinspaceKxCluster#tickerplant_log_volumes}
    */
    readonly tickerplantLogVolumes: string[];
}
export declare function finspaceKxClusterTickerplantLogConfigurationToTerraform(struct?: FinspaceKxClusterTickerplantLogConfiguration | cdktf.IResolvable): any;
export declare function finspaceKxClusterTickerplantLogConfigurationToHclTerraform(struct?: FinspaceKxClusterTickerplantLogConfiguration | cdktf.IResolvable): any;
export declare class FinspaceKxClusterTickerplantLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FinspaceKxClusterTickerplantLogConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxClusterTickerplantLogConfiguration | cdktf.IResolvable | undefined);
    private _tickerplantLogVolumes?;
    get tickerplantLogVolumes(): string[];
    set tickerplantLogVolumes(value: string[]);
    get tickerplantLogVolumesInput(): string[] | undefined;
}
export declare class FinspaceKxClusterTickerplantLogConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FinspaceKxClusterTickerplantLogConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FinspaceKxClusterTickerplantLogConfigurationOutputReference;
}
export interface FinspaceKxClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}
    */
    readonly update?: string;
}
export declare function finspaceKxClusterTimeoutsToTerraform(struct?: FinspaceKxClusterTimeouts | cdktf.IResolvable): any;
export declare function finspaceKxClusterTimeoutsToHclTerraform(struct?: FinspaceKxClusterTimeouts | cdktf.IResolvable): any;
export declare class FinspaceKxClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxClusterTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface FinspaceKxClusterVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}
    */
    readonly ipAddressType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}
    */
    readonly vpcId: string;
}
export declare function finspaceKxClusterVpcConfigurationToTerraform(struct?: FinspaceKxClusterVpcConfigurationOutputReference | FinspaceKxClusterVpcConfiguration): any;
export declare function finspaceKxClusterVpcConfigurationToHclTerraform(struct?: FinspaceKxClusterVpcConfigurationOutputReference | FinspaceKxClusterVpcConfiguration): any;
export declare class FinspaceKxClusterVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxClusterVpcConfiguration | undefined;
    set internalValue(value: FinspaceKxClusterVpcConfiguration | undefined);
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    get ipAddressTypeInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster}
*/
export declare class FinspaceKxCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_finspace_kx_cluster";
    /**
    * Generates CDKTF code for importing a FinspaceKxCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FinspaceKxCluster to import
    * @param importFromId The id of the existing FinspaceKxCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FinspaceKxCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FinspaceKxClusterConfig
    */
    constructor(scope: Construct, id: string, config: FinspaceKxClusterConfig);
    get arn(): string;
    private _availabilityZoneId?;
    get availabilityZoneId(): string;
    set availabilityZoneId(value: string);
    resetAvailabilityZoneId(): void;
    get availabilityZoneIdInput(): string | undefined;
    private _azMode?;
    get azMode(): string;
    set azMode(value: string);
    get azModeInput(): string | undefined;
    private _commandLineArguments?;
    get commandLineArguments(): {
        [key: string]: string;
    };
    set commandLineArguments(value: {
        [key: string]: string;
    });
    resetCommandLineArguments(): void;
    get commandLineArgumentsInput(): {
        [key: string]: string;
    } | undefined;
    get createdTimestamp(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    get environmentIdInput(): string | undefined;
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    resetExecutionRole(): void;
    get executionRoleInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _initializationScript?;
    get initializationScript(): string;
    set initializationScript(value: string);
    resetInitializationScript(): void;
    get initializationScriptInput(): string | undefined;
    get lastModifiedTimestamp(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _releaseLabel?;
    get releaseLabel(): string;
    set releaseLabel(value: string);
    get releaseLabelInput(): string | undefined;
    get status(): string;
    get statusReason(): string;
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
    private _autoScalingConfiguration;
    get autoScalingConfiguration(): FinspaceKxClusterAutoScalingConfigurationOutputReference;
    putAutoScalingConfiguration(value: FinspaceKxClusterAutoScalingConfiguration): void;
    resetAutoScalingConfiguration(): void;
    get autoScalingConfigurationInput(): FinspaceKxClusterAutoScalingConfiguration | undefined;
    private _cacheStorageConfigurations;
    get cacheStorageConfigurations(): FinspaceKxClusterCacheStorageConfigurationsList;
    putCacheStorageConfigurations(value: FinspaceKxClusterCacheStorageConfigurations[] | cdktf.IResolvable): void;
    resetCacheStorageConfigurations(): void;
    get cacheStorageConfigurationsInput(): cdktf.IResolvable | FinspaceKxClusterCacheStorageConfigurations[] | undefined;
    private _capacityConfiguration;
    get capacityConfiguration(): FinspaceKxClusterCapacityConfigurationOutputReference;
    putCapacityConfiguration(value: FinspaceKxClusterCapacityConfiguration): void;
    resetCapacityConfiguration(): void;
    get capacityConfigurationInput(): FinspaceKxClusterCapacityConfiguration | undefined;
    private _code;
    get code(): FinspaceKxClusterCodeOutputReference;
    putCode(value: FinspaceKxClusterCode): void;
    resetCode(): void;
    get codeInput(): FinspaceKxClusterCode | undefined;
    private _database;
    get database(): FinspaceKxClusterDatabaseList;
    putDatabase(value: FinspaceKxClusterDatabase[] | cdktf.IResolvable): void;
    resetDatabase(): void;
    get databaseInput(): cdktf.IResolvable | FinspaceKxClusterDatabase[] | undefined;
    private _savedownStorageConfiguration;
    get savedownStorageConfiguration(): FinspaceKxClusterSavedownStorageConfigurationOutputReference;
    putSavedownStorageConfiguration(value: FinspaceKxClusterSavedownStorageConfiguration): void;
    resetSavedownStorageConfiguration(): void;
    get savedownStorageConfigurationInput(): FinspaceKxClusterSavedownStorageConfiguration | undefined;
    private _scalingGroupConfiguration;
    get scalingGroupConfiguration(): FinspaceKxClusterScalingGroupConfigurationOutputReference;
    putScalingGroupConfiguration(value: FinspaceKxClusterScalingGroupConfiguration): void;
    resetScalingGroupConfiguration(): void;
    get scalingGroupConfigurationInput(): FinspaceKxClusterScalingGroupConfiguration | undefined;
    private _tickerplantLogConfiguration;
    get tickerplantLogConfiguration(): FinspaceKxClusterTickerplantLogConfigurationList;
    putTickerplantLogConfiguration(value: FinspaceKxClusterTickerplantLogConfiguration[] | cdktf.IResolvable): void;
    resetTickerplantLogConfiguration(): void;
    get tickerplantLogConfigurationInput(): cdktf.IResolvable | FinspaceKxClusterTickerplantLogConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): FinspaceKxClusterTimeoutsOutputReference;
    putTimeouts(value: FinspaceKxClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FinspaceKxClusterTimeouts | undefined;
    private _vpcConfiguration;
    get vpcConfiguration(): FinspaceKxClusterVpcConfigurationOutputReference;
    putVpcConfiguration(value: FinspaceKxClusterVpcConfiguration): void;
    get vpcConfigurationInput(): FinspaceKxClusterVpcConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
