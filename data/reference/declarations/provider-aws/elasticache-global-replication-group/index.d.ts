/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheGlobalReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}
    */
    readonly automaticFailoverEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}
    */
    readonly cacheNodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}
    */
    readonly globalReplicationGroupDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}
    */
    readonly globalReplicationGroupIdSuffix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}
    */
    readonly numNodeGroups?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}
    */
    readonly primaryReplicationGroupId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#timeouts ElasticacheGlobalReplicationGroup#timeouts}
    */
    readonly timeouts?: ElasticacheGlobalReplicationGroupTimeouts;
}
export interface ElasticacheGlobalReplicationGroupGlobalNodeGroups {
}
export declare function elasticacheGlobalReplicationGroupGlobalNodeGroupsToTerraform(struct?: ElasticacheGlobalReplicationGroupGlobalNodeGroups): any;
export declare function elasticacheGlobalReplicationGroupGlobalNodeGroupsToHclTerraform(struct?: ElasticacheGlobalReplicationGroupGlobalNodeGroups): any;
export declare class ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticacheGlobalReplicationGroupGlobalNodeGroups | undefined;
    set internalValue(value: ElasticacheGlobalReplicationGroupGlobalNodeGroups | undefined);
    get globalNodeGroupId(): string;
    get slots(): string;
}
export declare class ElasticacheGlobalReplicationGroupGlobalNodeGroupsList extends cdktf.ComplexList {
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
    get(index: number): ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference;
}
export interface ElasticacheGlobalReplicationGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}
    */
    readonly update?: string;
}
export declare function elasticacheGlobalReplicationGroupTimeoutsToTerraform(struct?: ElasticacheGlobalReplicationGroupTimeouts | cdktf.IResolvable): any;
export declare function elasticacheGlobalReplicationGroupTimeoutsToHclTerraform(struct?: ElasticacheGlobalReplicationGroupTimeouts | cdktf.IResolvable): any;
export declare class ElasticacheGlobalReplicationGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticacheGlobalReplicationGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticacheGlobalReplicationGroupTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group aws_elasticache_global_replication_group}
*/
export declare class ElasticacheGlobalReplicationGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticache_global_replication_group";
    /**
    * Generates CDKTF code for importing a ElasticacheGlobalReplicationGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticacheGlobalReplicationGroup to import
    * @param importFromId The id of the existing ElasticacheGlobalReplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticacheGlobalReplicationGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticache_global_replication_group aws_elasticache_global_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheGlobalReplicationGroupConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheGlobalReplicationGroupConfig);
    get arn(): string;
    get atRestEncryptionEnabled(): cdktf.IResolvable;
    get authTokenEnabled(): cdktf.IResolvable;
    private _automaticFailoverEnabled?;
    get automaticFailoverEnabled(): boolean | cdktf.IResolvable;
    set automaticFailoverEnabled(value: boolean | cdktf.IResolvable);
    resetAutomaticFailoverEnabled(): void;
    get automaticFailoverEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _cacheNodeType?;
    get cacheNodeType(): string;
    set cacheNodeType(value: string);
    resetCacheNodeType(): void;
    get cacheNodeTypeInput(): string | undefined;
    get clusterEnabled(): cdktf.IResolvable;
    get engine(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    get engineVersionActual(): string;
    private _globalNodeGroups;
    get globalNodeGroups(): ElasticacheGlobalReplicationGroupGlobalNodeGroupsList;
    private _globalReplicationGroupDescription?;
    get globalReplicationGroupDescription(): string;
    set globalReplicationGroupDescription(value: string);
    resetGlobalReplicationGroupDescription(): void;
    get globalReplicationGroupDescriptionInput(): string | undefined;
    get globalReplicationGroupId(): string;
    private _globalReplicationGroupIdSuffix?;
    get globalReplicationGroupIdSuffix(): string;
    set globalReplicationGroupIdSuffix(value: string);
    get globalReplicationGroupIdSuffixInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _numNodeGroups?;
    get numNodeGroups(): number;
    set numNodeGroups(value: number);
    resetNumNodeGroups(): void;
    get numNodeGroupsInput(): number | undefined;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string | undefined;
    private _primaryReplicationGroupId?;
    get primaryReplicationGroupId(): string;
    set primaryReplicationGroupId(value: string);
    get primaryReplicationGroupIdInput(): string | undefined;
    get transitEncryptionEnabled(): cdktf.IResolvable;
    private _timeouts;
    get timeouts(): ElasticacheGlobalReplicationGroupTimeoutsOutputReference;
    putTimeouts(value: ElasticacheGlobalReplicationGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElasticacheGlobalReplicationGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
