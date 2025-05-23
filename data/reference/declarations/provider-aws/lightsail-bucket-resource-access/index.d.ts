/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailBucketResourceAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_bucket_resource_access#bucket_name LightsailBucketResourceAccess#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_bucket_resource_access#id LightsailBucketResourceAccess#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_bucket_resource_access#resource_name LightsailBucketResourceAccess#resource_name}
    */
    readonly resourceName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_bucket_resource_access aws_lightsail_bucket_resource_access}
*/
export declare class LightsailBucketResourceAccess extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_bucket_resource_access";
    /**
    * Generates CDKTF code for importing a LightsailBucketResourceAccess resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailBucketResourceAccess to import
    * @param importFromId The id of the existing LightsailBucketResourceAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_bucket_resource_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailBucketResourceAccess to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_bucket_resource_access aws_lightsail_bucket_resource_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailBucketResourceAccessConfig
    */
    constructor(scope: Construct, id: string, config: LightsailBucketResourceAccessConfig);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _resourceName?;
    get resourceName(): string;
    set resourceName(value: string);
    get resourceNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
