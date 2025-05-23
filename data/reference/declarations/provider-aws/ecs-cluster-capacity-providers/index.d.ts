/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsClusterCapacityProvidersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers#capacity_providers EcsClusterCapacityProviders#capacity_providers}
    */
    readonly capacityProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers#cluster_name EcsClusterCapacityProviders#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers#id EcsClusterCapacityProviders#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * default_capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers#default_capacity_provider_strategy EcsClusterCapacityProviders#default_capacity_provider_strategy}
    */
    readonly defaultCapacityProviderStrategy?: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | cdktf.IResolvable;
}
export interface EcsClusterCapacityProvidersDefaultCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers#base EcsClusterCapacityProviders#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers#capacity_provider EcsClusterCapacityProviders#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers#weight EcsClusterCapacityProviders#weight}
    */
    readonly weight?: number;
}
export declare function ecsClusterCapacityProvidersDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy | cdktf.IResolvable): any;
export declare function ecsClusterCapacityProvidersDefaultCapacityProviderStrategyToHclTerraform(struct?: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy | cdktf.IResolvable): any;
export declare class EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsClusterCapacityProvidersDefaultCapacityProviderStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy | cdktf.IResolvable | undefined);
    private _base?;
    get base(): number;
    set base(value: number);
    resetBase(): void;
    get baseInput(): number | undefined;
    private _capacityProvider?;
    get capacityProvider(): string;
    set capacityProvider(value: string);
    get capacityProviderInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number | undefined;
}
export declare class EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsClusterCapacityProvidersDefaultCapacityProviderStrategyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers}
*/
export declare class EcsClusterCapacityProviders extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecs_cluster_capacity_providers";
    /**
    * Generates CDKTF code for importing a EcsClusterCapacityProviders resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcsClusterCapacityProviders to import
    * @param importFromId The id of the existing EcsClusterCapacityProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcsClusterCapacityProviders to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_cluster_capacity_providers aws_ecs_cluster_capacity_providers} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsClusterCapacityProvidersConfig
    */
    constructor(scope: Construct, id: string, config: EcsClusterCapacityProvidersConfig);
    private _capacityProviders?;
    get capacityProviders(): string[];
    set capacityProviders(value: string[]);
    resetCapacityProviders(): void;
    get capacityProvidersInput(): string[] | undefined;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _defaultCapacityProviderStrategy;
    get defaultCapacityProviderStrategy(): EcsClusterCapacityProvidersDefaultCapacityProviderStrategyList;
    putDefaultCapacityProviderStrategy(value: EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | cdktf.IResolvable): void;
    resetDefaultCapacityProviderStrategy(): void;
    get defaultCapacityProviderStrategyInput(): cdktf.IResolvable | EcsClusterCapacityProvidersDefaultCapacityProviderStrategy[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
