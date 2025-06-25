/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheReservedCacheNodeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}
    */
    readonly cacheNodeCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}
    */
    readonly reservedCacheNodesOfferingId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node#timeouts ElasticacheReservedCacheNode#timeouts}
    */
    readonly timeouts?: ElasticacheReservedCacheNodeTimeouts;
}
export interface ElasticacheReservedCacheNodeRecurringCharges {
}
export declare function elasticacheReservedCacheNodeRecurringChargesToTerraform(struct?: ElasticacheReservedCacheNodeRecurringCharges): any;
export declare function elasticacheReservedCacheNodeRecurringChargesToHclTerraform(struct?: ElasticacheReservedCacheNodeRecurringCharges): any;
export declare class ElasticacheReservedCacheNodeRecurringChargesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticacheReservedCacheNodeRecurringCharges | undefined;
    set internalValue(value: ElasticacheReservedCacheNodeRecurringCharges | undefined);
    get recurringChargeAmount(): number;
    get recurringChargeFrequency(): string;
}
export declare class ElasticacheReservedCacheNodeRecurringChargesList extends cdktf.ComplexList {
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
    get(index: number): ElasticacheReservedCacheNodeRecurringChargesOutputReference;
}
export interface ElasticacheReservedCacheNodeTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node#create ElasticacheReservedCacheNode#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node#delete ElasticacheReservedCacheNode#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node#update ElasticacheReservedCacheNode#update}
    */
    readonly update?: string;
}
export declare function elasticacheReservedCacheNodeTimeoutsToTerraform(struct?: ElasticacheReservedCacheNodeTimeouts | cdktf.IResolvable): any;
export declare function elasticacheReservedCacheNodeTimeoutsToHclTerraform(struct?: ElasticacheReservedCacheNodeTimeouts | cdktf.IResolvable): any;
export declare class ElasticacheReservedCacheNodeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticacheReservedCacheNodeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticacheReservedCacheNodeTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node aws_elasticache_reserved_cache_node}
*/
export declare class ElasticacheReservedCacheNode extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticache_reserved_cache_node";
    /**
    * Generates CDKTF code for importing a ElasticacheReservedCacheNode resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticacheReservedCacheNode to import
    * @param importFromId The id of the existing ElasticacheReservedCacheNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticacheReservedCacheNode to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/elasticache_reserved_cache_node aws_elasticache_reserved_cache_node} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheReservedCacheNodeConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheReservedCacheNodeConfig);
    get arn(): string;
    private _cacheNodeCount?;
    get cacheNodeCount(): number;
    set cacheNodeCount(value: number);
    resetCacheNodeCount(): void;
    get cacheNodeCountInput(): number | undefined;
    get cacheNodeType(): string;
    get duration(): string;
    get fixedPrice(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get offeringType(): string;
    get productDescription(): string;
    private _recurringCharges;
    get recurringCharges(): ElasticacheReservedCacheNodeRecurringChargesList;
    private _reservedCacheNodesOfferingId?;
    get reservedCacheNodesOfferingId(): string;
    set reservedCacheNodesOfferingId(value: string);
    get reservedCacheNodesOfferingIdInput(): string | undefined;
    get startTime(): string;
    get state(): string;
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
    get usagePrice(): number;
    private _timeouts;
    get timeouts(): ElasticacheReservedCacheNodeTimeoutsOutputReference;
    putTimeouts(value: ElasticacheReservedCacheNodeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElasticacheReservedCacheNodeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
