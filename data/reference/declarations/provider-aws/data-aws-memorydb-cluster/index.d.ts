/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMemorydbClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_cluster#id DataAwsMemorydbCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_cluster#name DataAwsMemorydbCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_cluster#tags DataAwsMemorydbCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsMemorydbClusterClusterEndpoint {
}
export declare function dataAwsMemorydbClusterClusterEndpointToTerraform(struct?: DataAwsMemorydbClusterClusterEndpoint): any;
export declare function dataAwsMemorydbClusterClusterEndpointToHclTerraform(struct?: DataAwsMemorydbClusterClusterEndpoint): any;
export declare class DataAwsMemorydbClusterClusterEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMemorydbClusterClusterEndpoint | undefined;
    set internalValue(value: DataAwsMemorydbClusterClusterEndpoint | undefined);
    get address(): string;
    get port(): number;
}
export declare class DataAwsMemorydbClusterClusterEndpointList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMemorydbClusterClusterEndpointOutputReference;
}
export interface DataAwsMemorydbClusterShardsNodesEndpoint {
}
export declare function dataAwsMemorydbClusterShardsNodesEndpointToTerraform(struct?: DataAwsMemorydbClusterShardsNodesEndpoint): any;
export declare function dataAwsMemorydbClusterShardsNodesEndpointToHclTerraform(struct?: DataAwsMemorydbClusterShardsNodesEndpoint): any;
export declare class DataAwsMemorydbClusterShardsNodesEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMemorydbClusterShardsNodesEndpoint | undefined;
    set internalValue(value: DataAwsMemorydbClusterShardsNodesEndpoint | undefined);
    get address(): string;
    get port(): number;
}
export declare class DataAwsMemorydbClusterShardsNodesEndpointList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMemorydbClusterShardsNodesEndpointOutputReference;
}
export interface DataAwsMemorydbClusterShardsNodes {
}
export declare function dataAwsMemorydbClusterShardsNodesToTerraform(struct?: DataAwsMemorydbClusterShardsNodes): any;
export declare function dataAwsMemorydbClusterShardsNodesToHclTerraform(struct?: DataAwsMemorydbClusterShardsNodes): any;
export declare class DataAwsMemorydbClusterShardsNodesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMemorydbClusterShardsNodes | undefined;
    set internalValue(value: DataAwsMemorydbClusterShardsNodes | undefined);
    get availabilityZone(): string;
    get createTime(): string;
    private _endpoint;
    get endpoint(): DataAwsMemorydbClusterShardsNodesEndpointList;
    get name(): string;
}
export declare class DataAwsMemorydbClusterShardsNodesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMemorydbClusterShardsNodesOutputReference;
}
export interface DataAwsMemorydbClusterShards {
}
export declare function dataAwsMemorydbClusterShardsToTerraform(struct?: DataAwsMemorydbClusterShards): any;
export declare function dataAwsMemorydbClusterShardsToHclTerraform(struct?: DataAwsMemorydbClusterShards): any;
export declare class DataAwsMemorydbClusterShardsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMemorydbClusterShards | undefined;
    set internalValue(value: DataAwsMemorydbClusterShards | undefined);
    get name(): string;
    private _nodes;
    get nodes(): DataAwsMemorydbClusterShardsNodesList;
    get numNodes(): number;
    get slots(): string;
}
export declare class DataAwsMemorydbClusterShardsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMemorydbClusterShardsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_cluster aws_memorydb_cluster}
*/
export declare class DataAwsMemorydbCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_memorydb_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsMemorydbCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMemorydbCluster to import
    * @param importFromId The id of the existing DataAwsMemorydbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMemorydbCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_cluster aws_memorydb_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMemorydbClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMemorydbClusterConfig);
    get aclName(): string;
    get arn(): string;
    get autoMinorVersionUpgrade(): cdktf.IResolvable;
    private _clusterEndpoint;
    get clusterEndpoint(): DataAwsMemorydbClusterClusterEndpointList;
    get dataTiering(): cdktf.IResolvable;
    get description(): string;
    get engine(): string;
    get enginePatchVersion(): string;
    get engineVersion(): string;
    get finalSnapshotName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyArn(): string;
    get maintenanceWindow(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get nodeType(): string;
    get numReplicasPerShard(): number;
    get numShards(): number;
    get parameterGroupName(): string;
    get port(): number;
    get securityGroupIds(): string[];
    private _shards;
    get shards(): DataAwsMemorydbClusterShardsList;
    get snapshotRetentionLimit(): number;
    get snapshotWindow(): string;
    get snsTopicArn(): string;
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
    get tlsEnabled(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
