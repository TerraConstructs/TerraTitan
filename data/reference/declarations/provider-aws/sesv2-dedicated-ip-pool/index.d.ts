/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2DedicatedIpPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_dedicated_ip_pool#id Sesv2DedicatedIpPool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_dedicated_ip_pool#pool_name Sesv2DedicatedIpPool#pool_name}
    */
    readonly poolName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_dedicated_ip_pool#scaling_mode Sesv2DedicatedIpPool#scaling_mode}
    */
    readonly scalingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_dedicated_ip_pool#tags Sesv2DedicatedIpPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_dedicated_ip_pool#tags_all Sesv2DedicatedIpPool#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}
*/
export declare class Sesv2DedicatedIpPool extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_dedicated_ip_pool";
    /**
    * Generates CDKTF code for importing a Sesv2DedicatedIpPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2DedicatedIpPool to import
    * @param importFromId The id of the existing Sesv2DedicatedIpPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_dedicated_ip_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2DedicatedIpPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2DedicatedIpPoolConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2DedicatedIpPoolConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _poolName?;
    get poolName(): string;
    set poolName(value: string);
    get poolNameInput(): string | undefined;
    private _scalingMode?;
    get scalingMode(): string;
    set scalingMode(value: string);
    resetScalingMode(): void;
    get scalingModeInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
