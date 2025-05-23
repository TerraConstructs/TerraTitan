/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticacheClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_cluster#cluster_id DataAwsElasticacheCluster#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_cluster#id DataAwsElasticacheCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_cluster#tags DataAwsElasticacheCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsElasticacheClusterCacheNodes {
}
export declare function dataAwsElasticacheClusterCacheNodesToTerraform(struct?: DataAwsElasticacheClusterCacheNodes): any;
export declare function dataAwsElasticacheClusterCacheNodesToHclTerraform(struct?: DataAwsElasticacheClusterCacheNodes): any;
export declare class DataAwsElasticacheClusterCacheNodesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticacheClusterCacheNodes | undefined;
    set internalValue(value: DataAwsElasticacheClusterCacheNodes | undefined);
    get address(): string;
    get availabilityZone(): string;
    get id(): string;
    get outpostArn(): string;
    get port(): number;
}
export declare class DataAwsElasticacheClusterCacheNodesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsElasticacheClusterCacheNodesOutputReference;
}
export interface DataAwsElasticacheClusterLogDeliveryConfiguration {
}
export declare function dataAwsElasticacheClusterLogDeliveryConfigurationToTerraform(struct?: DataAwsElasticacheClusterLogDeliveryConfiguration): any;
export declare function dataAwsElasticacheClusterLogDeliveryConfigurationToHclTerraform(struct?: DataAwsElasticacheClusterLogDeliveryConfiguration): any;
export declare class DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticacheClusterLogDeliveryConfiguration | undefined;
    set internalValue(value: DataAwsElasticacheClusterLogDeliveryConfiguration | undefined);
    get destination(): string;
    get destinationType(): string;
    get logFormat(): string;
    get logType(): string;
}
export declare class DataAwsElasticacheClusterLogDeliveryConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_cluster aws_elasticache_cluster}
*/
export declare class DataAwsElasticacheCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_elasticache_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsElasticacheCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsElasticacheCluster to import
    * @param importFromId The id of the existing DataAwsElasticacheCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsElasticacheCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_cluster aws_elasticache_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticacheClusterConfig);
    get arn(): string;
    get availabilityZone(): string;
    private _cacheNodes;
    get cacheNodes(): DataAwsElasticacheClusterCacheNodesList;
    get clusterAddress(): string;
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string | undefined;
    get configurationEndpoint(): string;
    get engine(): string;
    get engineVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipDiscovery(): string;
    private _logDeliveryConfiguration;
    get logDeliveryConfiguration(): DataAwsElasticacheClusterLogDeliveryConfigurationList;
    get maintenanceWindow(): string;
    get networkType(): string;
    get nodeType(): string;
    get notificationTopicArn(): string;
    get numCacheNodes(): number;
    get parameterGroupName(): string;
    get port(): number;
    get preferredOutpostArn(): string;
    get replicationGroupId(): string;
    get securityGroupIds(): string[];
    get snapshotRetentionLimit(): number;
    get snapshotWindow(): string;
    get subnetGroupName(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
