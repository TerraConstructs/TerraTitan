/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MemorydbClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#acl_name MemorydbCluster#acl_name}
    */
    readonly aclName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#auto_minor_version_upgrade MemorydbCluster#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#data_tiering MemorydbCluster#data_tiering}
    */
    readonly dataTiering?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#description MemorydbCluster#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#engine MemorydbCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#engine_version MemorydbCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#final_snapshot_name MemorydbCluster#final_snapshot_name}
    */
    readonly finalSnapshotName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#id MemorydbCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#kms_key_arn MemorydbCluster#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#maintenance_window MemorydbCluster#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#multi_region_cluster_name MemorydbCluster#multi_region_cluster_name}
    */
    readonly multiRegionClusterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#name MemorydbCluster#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#name_prefix MemorydbCluster#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#node_type MemorydbCluster#node_type}
    */
    readonly nodeType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#num_replicas_per_shard MemorydbCluster#num_replicas_per_shard}
    */
    readonly numReplicasPerShard?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#num_shards MemorydbCluster#num_shards}
    */
    readonly numShards?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#parameter_group_name MemorydbCluster#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#port MemorydbCluster#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#security_group_ids MemorydbCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#snapshot_arns MemorydbCluster#snapshot_arns}
    */
    readonly snapshotArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#snapshot_name MemorydbCluster#snapshot_name}
    */
    readonly snapshotName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#snapshot_retention_limit MemorydbCluster#snapshot_retention_limit}
    */
    readonly snapshotRetentionLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#snapshot_window MemorydbCluster#snapshot_window}
    */
    readonly snapshotWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#sns_topic_arn MemorydbCluster#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#subnet_group_name MemorydbCluster#subnet_group_name}
    */
    readonly subnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#tags MemorydbCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#tags_all MemorydbCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#tls_enabled MemorydbCluster#tls_enabled}
    */
    readonly tlsEnabled?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#timeouts MemorydbCluster#timeouts}
    */
    readonly timeouts?: MemorydbClusterTimeouts;
}
export interface MemorydbClusterClusterEndpoint {
}
export declare function memorydbClusterClusterEndpointToTerraform(struct?: MemorydbClusterClusterEndpoint): any;
export declare function memorydbClusterClusterEndpointToHclTerraform(struct?: MemorydbClusterClusterEndpoint): any;
export declare class MemorydbClusterClusterEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MemorydbClusterClusterEndpoint | undefined;
    set internalValue(value: MemorydbClusterClusterEndpoint | undefined);
    get address(): string;
    get port(): number;
}
export declare class MemorydbClusterClusterEndpointList extends cdktf.ComplexList {
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
    get(index: number): MemorydbClusterClusterEndpointOutputReference;
}
export interface MemorydbClusterShardsNodesEndpoint {
}
export declare function memorydbClusterShardsNodesEndpointToTerraform(struct?: MemorydbClusterShardsNodesEndpoint): any;
export declare function memorydbClusterShardsNodesEndpointToHclTerraform(struct?: MemorydbClusterShardsNodesEndpoint): any;
export declare class MemorydbClusterShardsNodesEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MemorydbClusterShardsNodesEndpoint | undefined;
    set internalValue(value: MemorydbClusterShardsNodesEndpoint | undefined);
    get address(): string;
    get port(): number;
}
export declare class MemorydbClusterShardsNodesEndpointList extends cdktf.ComplexList {
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
    get(index: number): MemorydbClusterShardsNodesEndpointOutputReference;
}
export interface MemorydbClusterShardsNodes {
}
export declare function memorydbClusterShardsNodesToTerraform(struct?: MemorydbClusterShardsNodes): any;
export declare function memorydbClusterShardsNodesToHclTerraform(struct?: MemorydbClusterShardsNodes): any;
export declare class MemorydbClusterShardsNodesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MemorydbClusterShardsNodes | undefined;
    set internalValue(value: MemorydbClusterShardsNodes | undefined);
    get availabilityZone(): string;
    get createTime(): string;
    private _endpoint;
    get endpoint(): MemorydbClusterShardsNodesEndpointList;
    get name(): string;
}
export declare class MemorydbClusterShardsNodesList extends cdktf.ComplexList {
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
    get(index: number): MemorydbClusterShardsNodesOutputReference;
}
export interface MemorydbClusterShards {
}
export declare function memorydbClusterShardsToTerraform(struct?: MemorydbClusterShards): any;
export declare function memorydbClusterShardsToHclTerraform(struct?: MemorydbClusterShards): any;
export declare class MemorydbClusterShardsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MemorydbClusterShards | undefined;
    set internalValue(value: MemorydbClusterShards | undefined);
    get name(): string;
    private _nodes;
    get nodes(): MemorydbClusterShardsNodesList;
    get numNodes(): number;
    get slots(): string;
}
export declare class MemorydbClusterShardsList extends cdktf.ComplexList {
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
    get(index: number): MemorydbClusterShardsOutputReference;
}
export interface MemorydbClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#create MemorydbCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#delete MemorydbCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#update MemorydbCluster#update}
    */
    readonly update?: string;
}
export declare function memorydbClusterTimeoutsToTerraform(struct?: MemorydbClusterTimeouts | cdktf.IResolvable): any;
export declare function memorydbClusterTimeoutsToHclTerraform(struct?: MemorydbClusterTimeouts | cdktf.IResolvable): any;
export declare class MemorydbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MemorydbClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MemorydbClusterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster aws_memorydb_cluster}
*/
export declare class MemorydbCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_memorydb_cluster";
    /**
    * Generates CDKTF code for importing a MemorydbCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MemorydbCluster to import
    * @param importFromId The id of the existing MemorydbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MemorydbCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_cluster aws_memorydb_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MemorydbClusterConfig
    */
    constructor(scope: Construct, id: string, config: MemorydbClusterConfig);
    private _aclName?;
    get aclName(): string;
    set aclName(value: string);
    get aclNameInput(): string | undefined;
    get arn(): string;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean | cdktf.IResolvable;
    set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | cdktf.IResolvable | undefined;
    private _clusterEndpoint;
    get clusterEndpoint(): MemorydbClusterClusterEndpointList;
    private _dataTiering?;
    get dataTiering(): boolean | cdktf.IResolvable;
    set dataTiering(value: boolean | cdktf.IResolvable);
    resetDataTiering(): void;
    get dataTieringInput(): boolean | cdktf.IResolvable | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    get enginePatchVersion(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    private _finalSnapshotName?;
    get finalSnapshotName(): string;
    set finalSnapshotName(value: string);
    resetFinalSnapshotName(): void;
    get finalSnapshotNameInput(): string | undefined;
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
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string | undefined;
    private _multiRegionClusterName?;
    get multiRegionClusterName(): string;
    set multiRegionClusterName(value: string);
    resetMultiRegionClusterName(): void;
    get multiRegionClusterNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    get nodeTypeInput(): string | undefined;
    private _numReplicasPerShard?;
    get numReplicasPerShard(): number;
    set numReplicasPerShard(value: number);
    resetNumReplicasPerShard(): void;
    get numReplicasPerShardInput(): number | undefined;
    private _numShards?;
    get numShards(): number;
    set numShards(value: number);
    resetNumShards(): void;
    get numShardsInput(): number | undefined;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _shards;
    get shards(): MemorydbClusterShardsList;
    private _snapshotArns?;
    get snapshotArns(): string[];
    set snapshotArns(value: string[]);
    resetSnapshotArns(): void;
    get snapshotArnsInput(): string[] | undefined;
    private _snapshotName?;
    get snapshotName(): string;
    set snapshotName(value: string);
    resetSnapshotName(): void;
    get snapshotNameInput(): string | undefined;
    private _snapshotRetentionLimit?;
    get snapshotRetentionLimit(): number;
    set snapshotRetentionLimit(value: number);
    resetSnapshotRetentionLimit(): void;
    get snapshotRetentionLimitInput(): number | undefined;
    private _snapshotWindow?;
    get snapshotWindow(): string;
    set snapshotWindow(value: string);
    resetSnapshotWindow(): void;
    get snapshotWindowInput(): string | undefined;
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    resetSnsTopicArn(): void;
    get snsTopicArnInput(): string | undefined;
    private _subnetGroupName?;
    get subnetGroupName(): string;
    set subnetGroupName(value: string);
    resetSubnetGroupName(): void;
    get subnetGroupNameInput(): string | undefined;
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
    private _tlsEnabled?;
    get tlsEnabled(): boolean | cdktf.IResolvable;
    set tlsEnabled(value: boolean | cdktf.IResolvable);
    resetTlsEnabled(): void;
    get tlsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): MemorydbClusterTimeoutsOutputReference;
    putTimeouts(value: MemorydbClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MemorydbClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
