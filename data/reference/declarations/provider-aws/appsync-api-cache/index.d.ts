/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncApiCacheConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}
    */
    readonly apiCachingBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache#api_id AppsyncApiCache#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}
    */
    readonly atRestEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache#id AppsyncApiCache#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}
    */
    readonly transitEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache#ttl AppsyncApiCache#ttl}
    */
    readonly ttl: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache#type AppsyncApiCache#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache aws_appsync_api_cache}
*/
export declare class AppsyncApiCache extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appsync_api_cache";
    /**
    * Generates CDKTF code for importing a AppsyncApiCache resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppsyncApiCache to import
    * @param importFromId The id of the existing AppsyncApiCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppsyncApiCache to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_api_cache aws_appsync_api_cache} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncApiCacheConfig
    */
    constructor(scope: Construct, id: string, config: AppsyncApiCacheConfig);
    private _apiCachingBehavior?;
    get apiCachingBehavior(): string;
    set apiCachingBehavior(value: string);
    get apiCachingBehaviorInput(): string | undefined;
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    private _atRestEncryptionEnabled?;
    get atRestEncryptionEnabled(): boolean | cdktf.IResolvable;
    set atRestEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetAtRestEncryptionEnabled(): void;
    get atRestEncryptionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _transitEncryptionEnabled?;
    get transitEncryptionEnabled(): boolean | cdktf.IResolvable;
    set transitEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetTransitEncryptionEnabled(): void;
    get transitEncryptionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    get ttlInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
