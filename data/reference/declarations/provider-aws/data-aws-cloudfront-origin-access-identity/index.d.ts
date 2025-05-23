/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudfrontOriginAccessIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_origin_access_identity#id DataAwsCloudfrontOriginAccessIdentity#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_origin_access_identity aws_cloudfront_origin_access_identity}
*/
export declare class DataAwsCloudfrontOriginAccessIdentity extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudfront_origin_access_identity";
    /**
    * Generates CDKTF code for importing a DataAwsCloudfrontOriginAccessIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudfrontOriginAccessIdentity to import
    * @param importFromId The id of the existing DataAwsCloudfrontOriginAccessIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_origin_access_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudfrontOriginAccessIdentity to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_origin_access_identity aws_cloudfront_origin_access_identity} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontOriginAccessIdentityConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudfrontOriginAccessIdentityConfig);
    get callerReference(): string;
    get cloudfrontAccessIdentityPath(): string;
    get comment(): string;
    get etag(): string;
    get iamArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get s3CanonicalUserId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
