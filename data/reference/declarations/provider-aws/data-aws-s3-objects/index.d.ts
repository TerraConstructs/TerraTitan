/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsS3ObjectsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#bucket DataAwsS3Objects#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#delimiter DataAwsS3Objects#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#encoding_type DataAwsS3Objects#encoding_type}
    */
    readonly encodingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#fetch_owner DataAwsS3Objects#fetch_owner}
    */
    readonly fetchOwner?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#id DataAwsS3Objects#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#max_keys DataAwsS3Objects#max_keys}
    */
    readonly maxKeys?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#prefix DataAwsS3Objects#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#request_payer DataAwsS3Objects#request_payer}
    */
    readonly requestPayer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#start_after DataAwsS3Objects#start_after}
    */
    readonly startAfter?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects aws_s3_objects}
*/
export declare class DataAwsS3Objects extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_s3_objects";
    /**
    * Generates CDKTF code for importing a DataAwsS3Objects resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsS3Objects to import
    * @param importFromId The id of the existing DataAwsS3Objects that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsS3Objects to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_objects aws_s3_objects} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3ObjectsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsS3ObjectsConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    get commonPrefixes(): string[];
    private _delimiter?;
    get delimiter(): string;
    set delimiter(value: string);
    resetDelimiter(): void;
    get delimiterInput(): string | undefined;
    private _encodingType?;
    get encodingType(): string;
    set encodingType(value: string);
    resetEncodingType(): void;
    get encodingTypeInput(): string | undefined;
    private _fetchOwner?;
    get fetchOwner(): boolean | cdktf.IResolvable;
    set fetchOwner(value: boolean | cdktf.IResolvable);
    resetFetchOwner(): void;
    get fetchOwnerInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get keys(): string[];
    private _maxKeys?;
    get maxKeys(): number;
    set maxKeys(value: number);
    resetMaxKeys(): void;
    get maxKeysInput(): number | undefined;
    get owners(): string[];
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    get requestCharged(): string;
    private _requestPayer?;
    get requestPayer(): string;
    set requestPayer(value: string);
    resetRequestPayer(): void;
    get requestPayerInput(): string | undefined;
    private _startAfter?;
    get startAfter(): string;
    set startAfter(value: string);
    resetStartAfter(): void;
    get startAfterInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
