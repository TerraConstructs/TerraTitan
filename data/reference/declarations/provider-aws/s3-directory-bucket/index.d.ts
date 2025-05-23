/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3DirectoryBucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket#bucket S3DirectoryBucket#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket#data_redundancy S3DirectoryBucket#data_redundancy}
    */
    readonly dataRedundancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket#force_destroy S3DirectoryBucket#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket#type S3DirectoryBucket#type}
    */
    readonly type?: string;
    /**
    * location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket#location S3DirectoryBucket#location}
    */
    readonly location?: S3DirectoryBucketLocation[] | cdktf.IResolvable;
}
export interface S3DirectoryBucketLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket#name S3DirectoryBucket#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket#type S3DirectoryBucket#type}
    */
    readonly type?: string;
}
export declare function s3DirectoryBucketLocationToTerraform(struct?: S3DirectoryBucketLocation | cdktf.IResolvable): any;
export declare function s3DirectoryBucketLocationToHclTerraform(struct?: S3DirectoryBucketLocation | cdktf.IResolvable): any;
export declare class S3DirectoryBucketLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3DirectoryBucketLocation | cdktf.IResolvable | undefined;
    set internalValue(value: S3DirectoryBucketLocation | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class S3DirectoryBucketLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3DirectoryBucketLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3DirectoryBucketLocationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket aws_s3_directory_bucket}
*/
export declare class S3DirectoryBucket extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_directory_bucket";
    /**
    * Generates CDKTF code for importing a S3DirectoryBucket resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3DirectoryBucket to import
    * @param importFromId The id of the existing S3DirectoryBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3DirectoryBucket to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_directory_bucket aws_s3_directory_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3DirectoryBucketConfig
    */
    constructor(scope: Construct, id: string, config: S3DirectoryBucketConfig);
    get arn(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _dataRedundancy?;
    get dataRedundancy(): string;
    set dataRedundancy(value: string);
    resetDataRedundancy(): void;
    get dataRedundancyInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _location;
    get location(): S3DirectoryBucketLocationList;
    putLocation(value: S3DirectoryBucketLocation[] | cdktf.IResolvable): void;
    resetLocation(): void;
    get locationInput(): cdktf.IResolvable | S3DirectoryBucketLocation[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
