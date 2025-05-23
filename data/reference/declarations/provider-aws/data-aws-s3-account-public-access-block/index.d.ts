/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsS3AccountPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_account_public_access_block#account_id DataAwsS3AccountPublicAccessBlock#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_account_public_access_block#id DataAwsS3AccountPublicAccessBlock#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_account_public_access_block aws_s3_account_public_access_block}
*/
export declare class DataAwsS3AccountPublicAccessBlock extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_s3_account_public_access_block";
    /**
    * Generates CDKTF code for importing a DataAwsS3AccountPublicAccessBlock resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsS3AccountPublicAccessBlock to import
    * @param importFromId The id of the existing DataAwsS3AccountPublicAccessBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_account_public_access_block#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsS3AccountPublicAccessBlock to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_account_public_access_block aws_s3_account_public_access_block} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3AccountPublicAccessBlockConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsS3AccountPublicAccessBlockConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get blockPublicAcls(): cdktf.IResolvable;
    get blockPublicPolicy(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ignorePublicAcls(): cdktf.IResolvable;
    get restrictPublicBuckets(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
