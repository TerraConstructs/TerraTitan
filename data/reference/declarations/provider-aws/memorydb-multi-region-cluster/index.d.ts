/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MemorydbMultiRegionClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}
    */
    readonly multiRegionClusterNameSuffix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}
    */
    readonly multiRegionParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}
    */
    readonly nodeType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}
    */
    readonly numShards?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}
    */
    readonly tlsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}
    */
    readonly updateStrategy?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#timeouts MemorydbMultiRegionCluster#timeouts}
    */
    readonly timeouts?: MemorydbMultiRegionClusterTimeouts;
}
export interface MemorydbMultiRegionClusterTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#create MemorydbMultiRegionCluster#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#delete MemorydbMultiRegionCluster#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#update MemorydbMultiRegionCluster#update}
    */
    readonly update?: string;
}
export declare function memorydbMultiRegionClusterTimeoutsToTerraform(struct?: MemorydbMultiRegionClusterTimeouts | cdktf.IResolvable): any;
export declare function memorydbMultiRegionClusterTimeoutsToHclTerraform(struct?: MemorydbMultiRegionClusterTimeouts | cdktf.IResolvable): any;
export declare class MemorydbMultiRegionClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MemorydbMultiRegionClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MemorydbMultiRegionClusterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster aws_memorydb_multi_region_cluster}
*/
export declare class MemorydbMultiRegionCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_memorydb_multi_region_cluster";
    /**
    * Generates CDKTF code for importing a MemorydbMultiRegionCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MemorydbMultiRegionCluster to import
    * @param importFromId The id of the existing MemorydbMultiRegionCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MemorydbMultiRegionCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/memorydb_multi_region_cluster aws_memorydb_multi_region_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MemorydbMultiRegionClusterConfig
    */
    constructor(scope: Construct, id: string, config: MemorydbMultiRegionClusterConfig);
    get arn(): string;
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
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    get multiRegionClusterName(): string;
    private _multiRegionClusterNameSuffix?;
    get multiRegionClusterNameSuffix(): string;
    set multiRegionClusterNameSuffix(value: string);
    get multiRegionClusterNameSuffixInput(): string | undefined;
    private _multiRegionParameterGroupName?;
    get multiRegionParameterGroupName(): string;
    set multiRegionParameterGroupName(value: string);
    resetMultiRegionParameterGroupName(): void;
    get multiRegionParameterGroupNameInput(): string | undefined;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    get nodeTypeInput(): string | undefined;
    private _numShards?;
    get numShards(): number;
    set numShards(value: number);
    resetNumShards(): void;
    get numShardsInput(): number | undefined;
    get status(): string;
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
    private _tlsEnabled?;
    get tlsEnabled(): boolean | cdktf.IResolvable;
    set tlsEnabled(value: boolean | cdktf.IResolvable);
    resetTlsEnabled(): void;
    get tlsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _updateStrategy?;
    get updateStrategy(): string;
    set updateStrategy(value: string);
    resetUpdateStrategy(): void;
    get updateStrategyInput(): string | undefined;
    private _timeouts;
    get timeouts(): MemorydbMultiRegionClusterTimeoutsOutputReference;
    putTimeouts(value: MemorydbMultiRegionClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MemorydbMultiRegionClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
