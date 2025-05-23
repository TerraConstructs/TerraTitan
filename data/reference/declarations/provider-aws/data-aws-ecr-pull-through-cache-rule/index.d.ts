/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcrPullThroughCacheRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_pull_through_cache_rule#ecr_repository_prefix DataAwsEcrPullThroughCacheRule#ecr_repository_prefix}
    */
    readonly ecrRepositoryPrefix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_pull_through_cache_rule#id DataAwsEcrPullThroughCacheRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}
*/
export declare class DataAwsEcrPullThroughCacheRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ecr_pull_through_cache_rule";
    /**
    * Generates CDKTF code for importing a DataAwsEcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEcrPullThroughCacheRule to import
    * @param importFromId The id of the existing DataAwsEcrPullThroughCacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEcrPullThroughCacheRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrPullThroughCacheRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEcrPullThroughCacheRuleConfig);
    get credentialArn(): string;
    private _ecrRepositoryPrefix?;
    get ecrRepositoryPrefix(): string;
    set ecrRepositoryPrefix(value: string);
    get ecrRepositoryPrefixInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get registryId(): string;
    get upstreamRegistryUrl(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
