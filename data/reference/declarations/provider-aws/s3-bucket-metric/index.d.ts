/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketMetricConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric#bucket S3BucketMetric#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric#id S3BucketMetric#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric#name S3BucketMetric#name}
    */
    readonly name: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric#filter S3BucketMetric#filter}
    */
    readonly filter?: S3BucketMetricFilter;
}
export interface S3BucketMetricFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric#access_point S3BucketMetric#access_point}
    */
    readonly accessPoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric#prefix S3BucketMetric#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric#tags S3BucketMetric#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function s3BucketMetricFilterToTerraform(struct?: S3BucketMetricFilterOutputReference | S3BucketMetricFilter): any;
export declare function s3BucketMetricFilterToHclTerraform(struct?: S3BucketMetricFilterOutputReference | S3BucketMetricFilter): any;
export declare class S3BucketMetricFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketMetricFilter | undefined;
    set internalValue(value: S3BucketMetricFilter | undefined);
    private _accessPoint?;
    get accessPoint(): string;
    set accessPoint(value: string);
    resetAccessPoint(): void;
    get accessPointInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric aws_s3_bucket_metric}
*/
export declare class S3BucketMetric extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_metric";
    /**
    * Generates CDKTF code for importing a S3BucketMetric resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketMetric to import
    * @param importFromId The id of the existing S3BucketMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketMetric to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_metric aws_s3_bucket_metric} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketMetricConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketMetricConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _filter;
    get filter(): S3BucketMetricFilterOutputReference;
    putFilter(value: S3BucketMetricFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketMetricFilter | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
