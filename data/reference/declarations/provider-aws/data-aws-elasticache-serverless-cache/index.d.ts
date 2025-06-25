/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticacheServerlessCacheConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_serverless_cache#name DataAwsElasticacheServerlessCache#name}
    */
    readonly name: string;
}
export interface DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage {
}
export declare function dataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorageToTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage): any;
export declare function dataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorageToHclTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage): any;
export declare class DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage | undefined;
    set internalValue(value: DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorage | undefined);
    get maximum(): number;
    get minimum(): number;
    get unit(): string;
}
export interface DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond {
}
export declare function dataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond): any;
export declare function dataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondToHclTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond): any;
export declare class DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | undefined;
    set internalValue(value: DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond | undefined);
    get maximum(): number;
    get minimum(): number;
}
export interface DataAwsElasticacheServerlessCacheCacheUsageLimits {
}
export declare function dataAwsElasticacheServerlessCacheCacheUsageLimitsToTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimits): any;
export declare function dataAwsElasticacheServerlessCacheCacheUsageLimitsToHclTerraform(struct?: DataAwsElasticacheServerlessCacheCacheUsageLimits): any;
export declare class DataAwsElasticacheServerlessCacheCacheUsageLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsElasticacheServerlessCacheCacheUsageLimits | undefined;
    set internalValue(value: DataAwsElasticacheServerlessCacheCacheUsageLimits | undefined);
    private _dataStorage;
    get dataStorage(): DataAwsElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference;
    private _ecpuPerSecond;
    get ecpuPerSecond(): DataAwsElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference;
}
export interface DataAwsElasticacheServerlessCacheEndpoint {
}
export declare function dataAwsElasticacheServerlessCacheEndpointToTerraform(struct?: DataAwsElasticacheServerlessCacheEndpoint): any;
export declare function dataAwsElasticacheServerlessCacheEndpointToHclTerraform(struct?: DataAwsElasticacheServerlessCacheEndpoint): any;
export declare class DataAwsElasticacheServerlessCacheEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsElasticacheServerlessCacheEndpoint | undefined;
    set internalValue(value: DataAwsElasticacheServerlessCacheEndpoint | undefined);
    get address(): string;
    get port(): number;
}
export interface DataAwsElasticacheServerlessCacheReaderEndpoint {
}
export declare function dataAwsElasticacheServerlessCacheReaderEndpointToTerraform(struct?: DataAwsElasticacheServerlessCacheReaderEndpoint): any;
export declare function dataAwsElasticacheServerlessCacheReaderEndpointToHclTerraform(struct?: DataAwsElasticacheServerlessCacheReaderEndpoint): any;
export declare class DataAwsElasticacheServerlessCacheReaderEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsElasticacheServerlessCacheReaderEndpoint | undefined;
    set internalValue(value: DataAwsElasticacheServerlessCacheReaderEndpoint | undefined);
    get address(): string;
    get port(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_serverless_cache aws_elasticache_serverless_cache}
*/
export declare class DataAwsElasticacheServerlessCache extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_elasticache_serverless_cache";
    /**
    * Generates CDKTF code for importing a DataAwsElasticacheServerlessCache resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsElasticacheServerlessCache to import
    * @param importFromId The id of the existing DataAwsElasticacheServerlessCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsElasticacheServerlessCache to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_serverless_cache aws_elasticache_serverless_cache} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheServerlessCacheConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticacheServerlessCacheConfig);
    get arn(): string;
    private _cacheUsageLimits;
    get cacheUsageLimits(): DataAwsElasticacheServerlessCacheCacheUsageLimitsOutputReference;
    get createTime(): string;
    get dailySnapshotTime(): string;
    get description(): string;
    private _endpoint;
    get endpoint(): DataAwsElasticacheServerlessCacheEndpointOutputReference;
    get engine(): string;
    get fullEngineVersion(): string;
    get kmsKeyId(): string;
    get majorEngineVersion(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _readerEndpoint;
    get readerEndpoint(): DataAwsElasticacheServerlessCacheReaderEndpointOutputReference;
    get securityGroupIds(): string[];
    get snapshotRetentionLimit(): number;
    get status(): string;
    get subnetIds(): string[];
    get userGroupId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
