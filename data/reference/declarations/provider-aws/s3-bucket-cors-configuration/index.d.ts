/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketCorsConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#bucket S3BucketCorsConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#expected_bucket_owner S3BucketCorsConfiguration#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#id S3BucketCorsConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * cors_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#cors_rule S3BucketCorsConfiguration#cors_rule}
    */
    readonly corsRule: S3BucketCorsConfigurationCorsRule[] | cdktf.IResolvable;
}
export interface S3BucketCorsConfigurationCorsRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#allowed_headers S3BucketCorsConfiguration#allowed_headers}
    */
    readonly allowedHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#allowed_methods S3BucketCorsConfiguration#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#allowed_origins S3BucketCorsConfiguration#allowed_origins}
    */
    readonly allowedOrigins: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#expose_headers S3BucketCorsConfiguration#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#id S3BucketCorsConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#max_age_seconds S3BucketCorsConfiguration#max_age_seconds}
    */
    readonly maxAgeSeconds?: number;
}
export declare function s3BucketCorsConfigurationCorsRuleToTerraform(struct?: S3BucketCorsConfigurationCorsRule | cdktf.IResolvable): any;
export declare function s3BucketCorsConfigurationCorsRuleToHclTerraform(struct?: S3BucketCorsConfigurationCorsRule | cdktf.IResolvable): any;
export declare class S3BucketCorsConfigurationCorsRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketCorsConfigurationCorsRule | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketCorsConfigurationCorsRule | cdktf.IResolvable | undefined);
    private _allowedHeaders?;
    get allowedHeaders(): string[];
    set allowedHeaders(value: string[]);
    resetAllowedHeaders(): void;
    get allowedHeadersInput(): string[] | undefined;
    private _allowedMethods?;
    get allowedMethods(): string[];
    set allowedMethods(value: string[]);
    get allowedMethodsInput(): string[] | undefined;
    private _allowedOrigins?;
    get allowedOrigins(): string[];
    set allowedOrigins(value: string[]);
    get allowedOriginsInput(): string[] | undefined;
    private _exposeHeaders?;
    get exposeHeaders(): string[];
    set exposeHeaders(value: string[]);
    resetExposeHeaders(): void;
    get exposeHeadersInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxAgeSeconds?;
    get maxAgeSeconds(): number;
    set maxAgeSeconds(value: number);
    resetMaxAgeSeconds(): void;
    get maxAgeSecondsInput(): number | undefined;
}
export declare class S3BucketCorsConfigurationCorsRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketCorsConfigurationCorsRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketCorsConfigurationCorsRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration aws_s3_bucket_cors_configuration}
*/
export declare class S3BucketCorsConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_cors_configuration";
    /**
    * Generates CDKTF code for importing a S3BucketCorsConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketCorsConfiguration to import
    * @param importFromId The id of the existing S3BucketCorsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketCorsConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_cors_configuration aws_s3_bucket_cors_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketCorsConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketCorsConfigurationConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _corsRule;
    get corsRule(): S3BucketCorsConfigurationCorsRuleList;
    putCorsRule(value: S3BucketCorsConfigurationCorsRule[] | cdktf.IResolvable): void;
    get corsRuleInput(): cdktf.IResolvable | S3BucketCorsConfigurationCorsRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
