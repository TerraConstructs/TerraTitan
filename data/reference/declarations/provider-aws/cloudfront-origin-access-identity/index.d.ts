/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontOriginAccessIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_access_identity#comment CloudfrontOriginAccessIdentity#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_access_identity#id CloudfrontOriginAccessIdentity#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_access_identity aws_cloudfront_origin_access_identity}
*/
export declare class CloudfrontOriginAccessIdentity extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_origin_access_identity";
    /**
    * Generates CDKTF code for importing a CloudfrontOriginAccessIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontOriginAccessIdentity to import
    * @param importFromId The id of the existing CloudfrontOriginAccessIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_access_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontOriginAccessIdentity to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_access_identity aws_cloudfront_origin_access_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontOriginAccessIdentityConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudfrontOriginAccessIdentityConfig);
    get callerReference(): string;
    get cloudfrontAccessIdentityPath(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    get etag(): string;
    get iamArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get s3CanonicalUserId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
