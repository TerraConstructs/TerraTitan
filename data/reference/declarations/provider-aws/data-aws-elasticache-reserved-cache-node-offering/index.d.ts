/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticacheReservedCacheNodeOfferingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_reserved_cache_node_offering#cache_node_type DataAwsElasticacheReservedCacheNodeOffering#cache_node_type}
    */
    readonly cacheNodeType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_reserved_cache_node_offering#duration DataAwsElasticacheReservedCacheNodeOffering#duration}
    */
    readonly duration: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_reserved_cache_node_offering#offering_type DataAwsElasticacheReservedCacheNodeOffering#offering_type}
    */
    readonly offeringType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_reserved_cache_node_offering#product_description DataAwsElasticacheReservedCacheNodeOffering#product_description}
    */
    readonly productDescription: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_reserved_cache_node_offering aws_elasticache_reserved_cache_node_offering}
*/
export declare class DataAwsElasticacheReservedCacheNodeOffering extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_elasticache_reserved_cache_node_offering";
    /**
    * Generates CDKTF code for importing a DataAwsElasticacheReservedCacheNodeOffering resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsElasticacheReservedCacheNodeOffering to import
    * @param importFromId The id of the existing DataAwsElasticacheReservedCacheNodeOffering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_reserved_cache_node_offering#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsElasticacheReservedCacheNodeOffering to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/elasticache_reserved_cache_node_offering aws_elasticache_reserved_cache_node_offering} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheReservedCacheNodeOfferingConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticacheReservedCacheNodeOfferingConfig);
    private _cacheNodeType?;
    get cacheNodeType(): string;
    set cacheNodeType(value: string);
    get cacheNodeTypeInput(): string | undefined;
    private _duration?;
    get duration(): string;
    set duration(value: string);
    get durationInput(): string | undefined;
    get fixedPrice(): number;
    get offeringId(): string;
    private _offeringType?;
    get offeringType(): string;
    set offeringType(value: string);
    get offeringTypeInput(): string | undefined;
    private _productDescription?;
    get productDescription(): string;
    set productDescription(value: string);
    get productDescriptionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
