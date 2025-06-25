/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NeptunegraphGraphConfig extends cdktf.TerraformMetaArguments {
    /**
    * A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * The graph name. For example: my-graph-1.
    * 								The name must contain from 1 to 63 letters, numbers, or hyphens,
    * 								and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
    * 								If you don't specify a graph name, a unique graph name is generated for you using the prefix graph-for,
    * 								followed by a combination of Stack Name and a UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}
    */
    readonly graphName?: string;
    /**
    * Allows user to specify name prefix and have remainder of name automatically generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#graph_name_prefix NeptunegraphGraph#graph_name_prefix}
    */
    readonly graphNamePrefix?: string;
    /**
    * Specifies a KMS key to use to encrypt data in the new graph.  Value must be ARN of KMS Key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}
    */
    readonly provisionedMemory: number;
    /**
    * Specifies whether or not the graph can be reachable over the internet.
    * 								All access to graphs is IAM authenticated.
    * 								When the graph is publicly available, its domain name system (DNS) endpoint resolves to
    * 								the public IP address from the internet. When the graph isn't publicly available, you need
    * 								to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private
    * 								IP address that is reachable from the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}
    */
    readonly publicConnectivity?: boolean | cdktf.IResolvable;
    /**
    * The number of replicas in other AZs.  Value must be between 0 and 2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}
    */
    readonly replicaCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#timeouts NeptunegraphGraph#timeouts}
    */
    readonly timeouts?: NeptunegraphGraphTimeouts;
    /**
    * vector_search_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}
    */
    readonly vectorSearchConfiguration?: NeptunegraphGraphVectorSearchConfiguration[] | cdktf.IResolvable;
}
export interface NeptunegraphGraphTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#create NeptunegraphGraph#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#delete NeptunegraphGraph#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#update NeptunegraphGraph#update}
    */
    readonly update?: string;
}
export declare function neptunegraphGraphTimeoutsToTerraform(struct?: NeptunegraphGraphTimeouts | cdktf.IResolvable): any;
export declare function neptunegraphGraphTimeoutsToHclTerraform(struct?: NeptunegraphGraphTimeouts | cdktf.IResolvable): any;
export declare class NeptunegraphGraphTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NeptunegraphGraphTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NeptunegraphGraphTimeouts | cdktf.IResolvable | undefined);
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
export interface NeptunegraphGraphVectorSearchConfiguration {
    /**
    * Specifies the number of dimensions for vector embeddings.  Value must be between 1 and 65,535.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}
    */
    readonly vectorSearchDimension?: number;
}
export declare function neptunegraphGraphVectorSearchConfigurationToTerraform(struct?: NeptunegraphGraphVectorSearchConfiguration | cdktf.IResolvable): any;
export declare function neptunegraphGraphVectorSearchConfigurationToHclTerraform(struct?: NeptunegraphGraphVectorSearchConfiguration | cdktf.IResolvable): any;
export declare class NeptunegraphGraphVectorSearchConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NeptunegraphGraphVectorSearchConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: NeptunegraphGraphVectorSearchConfiguration | cdktf.IResolvable | undefined);
    private _vectorSearchDimension?;
    get vectorSearchDimension(): number;
    set vectorSearchDimension(value: number);
    resetVectorSearchDimension(): void;
    get vectorSearchDimensionInput(): number | undefined;
}
export declare class NeptunegraphGraphVectorSearchConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NeptunegraphGraphVectorSearchConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NeptunegraphGraphVectorSearchConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph aws_neptunegraph_graph}
*/
export declare class NeptunegraphGraph extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_neptunegraph_graph";
    /**
    * Generates CDKTF code for importing a NeptunegraphGraph resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NeptunegraphGraph to import
    * @param importFromId The id of the existing NeptunegraphGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NeptunegraphGraph to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/neptunegraph_graph aws_neptunegraph_graph} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptunegraphGraphConfig
    */
    constructor(scope: Construct, id: string, config: NeptunegraphGraphConfig);
    get arn(): string;
    private _deletionProtection?;
    get deletionProtection(): boolean | cdktf.IResolvable;
    set deletionProtection(value: boolean | cdktf.IResolvable);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | cdktf.IResolvable | undefined;
    get endpoint(): string;
    private _graphName?;
    get graphName(): string;
    set graphName(value: string);
    resetGraphName(): void;
    get graphNameInput(): string | undefined;
    private _graphNamePrefix?;
    get graphNamePrefix(): string;
    set graphNamePrefix(value: string);
    resetGraphNamePrefix(): void;
    get graphNamePrefixInput(): string | undefined;
    get id(): string;
    private _kmsKeyIdentifier?;
    get kmsKeyIdentifier(): string;
    set kmsKeyIdentifier(value: string);
    resetKmsKeyIdentifier(): void;
    get kmsKeyIdentifierInput(): string | undefined;
    private _provisionedMemory?;
    get provisionedMemory(): number;
    set provisionedMemory(value: number);
    get provisionedMemoryInput(): number | undefined;
    private _publicConnectivity?;
    get publicConnectivity(): boolean | cdktf.IResolvable;
    set publicConnectivity(value: boolean | cdktf.IResolvable);
    resetPublicConnectivity(): void;
    get publicConnectivityInput(): boolean | cdktf.IResolvable | undefined;
    private _replicaCount?;
    get replicaCount(): number;
    set replicaCount(value: number);
    resetReplicaCount(): void;
    get replicaCountInput(): number | undefined;
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
    private _timeouts;
    get timeouts(): NeptunegraphGraphTimeoutsOutputReference;
    putTimeouts(value: NeptunegraphGraphTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NeptunegraphGraphTimeouts | undefined;
    private _vectorSearchConfiguration;
    get vectorSearchConfiguration(): NeptunegraphGraphVectorSearchConfigurationList;
    putVectorSearchConfiguration(value: NeptunegraphGraphVectorSearchConfiguration[] | cdktf.IResolvable): void;
    resetVectorSearchConfiguration(): void;
    get vectorSearchConfigurationInput(): cdktf.IResolvable | NeptunegraphGraphVectorSearchConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
