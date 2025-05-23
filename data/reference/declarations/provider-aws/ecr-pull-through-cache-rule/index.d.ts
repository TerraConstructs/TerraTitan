/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrPullThroughCacheRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}
    */
    readonly credentialArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}
    */
    readonly ecrRepositoryPrefix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}
    */
    readonly upstreamRegistryUrl: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}
*/
export declare class EcrPullThroughCacheRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecr_pull_through_cache_rule";
    /**
    * Generates CDKTF code for importing a EcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcrPullThroughCacheRule to import
    * @param importFromId The id of the existing EcrPullThroughCacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcrPullThroughCacheRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrPullThroughCacheRuleConfig
    */
    constructor(scope: Construct, id: string, config: EcrPullThroughCacheRuleConfig);
    private _credentialArn?;
    get credentialArn(): string;
    set credentialArn(value: string);
    resetCredentialArn(): void;
    get credentialArnInput(): string | undefined;
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
    private _upstreamRegistryUrl?;
    get upstreamRegistryUrl(): string;
    set upstreamRegistryUrl(value: string);
    get upstreamRegistryUrlInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
