/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheServerlessCacheConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}
    */
    readonly dailySnapshotTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}
    */
    readonly majorEngineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}
    */
    readonly snapshotArnsToRestore?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}
    */
    readonly snapshotRetentionLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}
    */
    readonly userGroupId?: string;
    /**
    * cache_usage_limits block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}
    */
    readonly cacheUsageLimits?: ElasticacheServerlessCacheCacheUsageLimits[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#timeouts ElasticacheServerlessCache#timeouts}
    */
    readonly timeouts?: ElasticacheServerlessCacheTimeouts;
}
export interface ElasticacheServerlessCacheEndpoint {
}
export declare function elasticacheServerlessCacheEndpointToTerraform(struct?: ElasticacheServerlessCacheEndpoint): any;
export declare function elasticacheServerlessCacheEndpointToHclTerraform(struct?: ElasticacheServerlessCacheEndpoint): any;
export declare class ElasticacheServerlessCacheEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticacheServerlessCacheEndpoint | undefined;
    set internalValue(value: ElasticacheServerlessCacheEndpoint | undefined);
    get address(): string;
    get port(): number;
}
export declare class ElasticacheServerlessCacheEndpointList extends cdktf.ComplexList {
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
    get(index: number): ElasticacheServerlessCacheEndpointOutputReference;
}
export interface ElasticacheServerlessCacheReaderEndpoint {
}
export declare function elasticacheServerlessCacheReaderEndpointToTerraform(struct?: ElasticacheServerlessCacheReaderEndpoint): any;
export declare function elasticacheServerlessCacheReaderEndpointToHclTerraform(struct?: ElasticacheServerlessCacheReaderEndpoint): any;
export declare class ElasticacheServerlessCacheReaderEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticacheServerlessCacheReaderEndpoint | undefined;
    set internalValue(value: ElasticacheServerlessCacheReaderEndpoint | undefined);
    get address(): string;
    get port(): number;
}
export declare class ElasticacheServerlessCacheReaderEndpointList extends cdktf.ComplexList {
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
    get(index: number): ElasticacheServerlessCacheReaderEndpointOutputReference;
}
export interface ElasticacheServerlessCacheCacheUsageLimitsDataStorage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}
    */
    readonly maximum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}
    */
    readonly minimum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}
    */
    readonly unit: string;
}
export declare function elasticacheServerlessCacheCacheUsageLimitsDataStorageToTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktf.IResolvable): any;
export declare function elasticacheServerlessCacheCacheUsageLimitsDataStorageToHclTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktf.IResolvable): any;
export declare class ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticacheServerlessCacheCacheUsageLimitsDataStorage | cdktf.IResolvable | undefined);
    private _maximum?;
    get maximum(): number;
    set maximum(value: number);
    resetMaximum(): void;
    get maximumInput(): number | undefined;
    private _minimum?;
    get minimum(): number;
    set minimum(value: number);
    resetMinimum(): void;
    get minimumInput(): number | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
}
export declare class ElasticacheServerlessCacheCacheUsageLimitsDataStorageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference;
}
export interface ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}
    */
    readonly maximum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}
    */
    readonly minimum?: number;
}
export declare function elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktf.IResolvable): any;
export declare function elasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToHclTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktf.IResolvable): any;
export declare class ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | cdktf.IResolvable | undefined);
    private _maximum?;
    get maximum(): number;
    set maximum(value: number);
    resetMaximum(): void;
    get maximumInput(): number | undefined;
    private _minimum?;
    get minimum(): number;
    set minimum(value: number);
    resetMinimum(): void;
    get minimumInput(): number | undefined;
}
export declare class ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference;
}
export interface ElasticacheServerlessCacheCacheUsageLimits {
    /**
    * data_storage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#data_storage ElasticacheServerlessCache#data_storage}
    */
    readonly dataStorage?: ElasticacheServerlessCacheCacheUsageLimitsDataStorage[] | cdktf.IResolvable;
    /**
    * ecpu_per_second block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#ecpu_per_second ElasticacheServerlessCache#ecpu_per_second}
    */
    readonly ecpuPerSecond?: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[] | cdktf.IResolvable;
}
export declare function elasticacheServerlessCacheCacheUsageLimitsToTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimits | cdktf.IResolvable): any;
export declare function elasticacheServerlessCacheCacheUsageLimitsToHclTerraform(struct?: ElasticacheServerlessCacheCacheUsageLimits | cdktf.IResolvable): any;
export declare class ElasticacheServerlessCacheCacheUsageLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticacheServerlessCacheCacheUsageLimits | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticacheServerlessCacheCacheUsageLimits | cdktf.IResolvable | undefined);
    private _dataStorage;
    get dataStorage(): ElasticacheServerlessCacheCacheUsageLimitsDataStorageList;
    putDataStorage(value: ElasticacheServerlessCacheCacheUsageLimitsDataStorage[] | cdktf.IResolvable): void;
    resetDataStorage(): void;
    get dataStorageInput(): cdktf.IResolvable | ElasticacheServerlessCacheCacheUsageLimitsDataStorage[] | undefined;
    private _ecpuPerSecond;
    get ecpuPerSecond(): ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList;
    putEcpuPerSecond(value: ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[] | cdktf.IResolvable): void;
    resetEcpuPerSecond(): void;
    get ecpuPerSecondInput(): cdktf.IResolvable | ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond[] | undefined;
}
export declare class ElasticacheServerlessCacheCacheUsageLimitsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElasticacheServerlessCacheCacheUsageLimits[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElasticacheServerlessCacheCacheUsageLimitsOutputReference;
}
export interface ElasticacheServerlessCacheTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#create ElasticacheServerlessCache#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#delete ElasticacheServerlessCache#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#update ElasticacheServerlessCache#update}
    */
    readonly update?: string;
}
export declare function elasticacheServerlessCacheTimeoutsToTerraform(struct?: ElasticacheServerlessCacheTimeouts | cdktf.IResolvable): any;
export declare function elasticacheServerlessCacheTimeoutsToHclTerraform(struct?: ElasticacheServerlessCacheTimeouts | cdktf.IResolvable): any;
export declare class ElasticacheServerlessCacheTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticacheServerlessCacheTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticacheServerlessCacheTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache aws_elasticache_serverless_cache}
*/
export declare class ElasticacheServerlessCache extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticache_serverless_cache";
    /**
    * Generates CDKTF code for importing a ElasticacheServerlessCache resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticacheServerlessCache to import
    * @param importFromId The id of the existing ElasticacheServerlessCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticacheServerlessCache to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_serverless_cache aws_elasticache_serverless_cache} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheServerlessCacheConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheServerlessCacheConfig);
    get arn(): string;
    get createTime(): string;
    private _dailySnapshotTime?;
    get dailySnapshotTime(): string;
    set dailySnapshotTime(value: string);
    resetDailySnapshotTime(): void;
    get dailySnapshotTimeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _endpoint;
    get endpoint(): ElasticacheServerlessCacheEndpointList;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string | undefined;
    get fullEngineVersion(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _majorEngineVersion?;
    get majorEngineVersion(): string;
    set majorEngineVersion(value: string);
    resetMajorEngineVersion(): void;
    get majorEngineVersionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _readerEndpoint;
    get readerEndpoint(): ElasticacheServerlessCacheReaderEndpointList;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _snapshotArnsToRestore?;
    get snapshotArnsToRestore(): string[];
    set snapshotArnsToRestore(value: string[]);
    resetSnapshotArnsToRestore(): void;
    get snapshotArnsToRestoreInput(): string[] | undefined;
    private _snapshotRetentionLimit?;
    get snapshotRetentionLimit(): number;
    set snapshotRetentionLimit(value: number);
    resetSnapshotRetentionLimit(): void;
    get snapshotRetentionLimitInput(): number | undefined;
    get status(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _userGroupId?;
    get userGroupId(): string;
    set userGroupId(value: string);
    resetUserGroupId(): void;
    get userGroupIdInput(): string | undefined;
    private _cacheUsageLimits;
    get cacheUsageLimits(): ElasticacheServerlessCacheCacheUsageLimitsList;
    putCacheUsageLimits(value: ElasticacheServerlessCacheCacheUsageLimits[] | cdktf.IResolvable): void;
    resetCacheUsageLimits(): void;
    get cacheUsageLimitsInput(): cdktf.IResolvable | ElasticacheServerlessCacheCacheUsageLimits[] | undefined;
    private _timeouts;
    get timeouts(): ElasticacheServerlessCacheTimeoutsOutputReference;
    putTimeouts(value: ElasticacheServerlessCacheTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElasticacheServerlessCacheTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
