/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketIntelligentTieringConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#bucket S3BucketIntelligentTieringConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#id S3BucketIntelligentTieringConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#name S3BucketIntelligentTieringConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#status S3BucketIntelligentTieringConfiguration#status}
    */
    readonly status?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#filter S3BucketIntelligentTieringConfiguration#filter}
    */
    readonly filter?: S3BucketIntelligentTieringConfigurationFilter;
    /**
    * tiering block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#tiering S3BucketIntelligentTieringConfiguration#tiering}
    */
    readonly tiering: S3BucketIntelligentTieringConfigurationTiering[] | cdktf.IResolvable;
}
export interface S3BucketIntelligentTieringConfigurationFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#prefix S3BucketIntelligentTieringConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#tags S3BucketIntelligentTieringConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function s3BucketIntelligentTieringConfigurationFilterToTerraform(struct?: S3BucketIntelligentTieringConfigurationFilterOutputReference | S3BucketIntelligentTieringConfigurationFilter): any;
export declare function s3BucketIntelligentTieringConfigurationFilterToHclTerraform(struct?: S3BucketIntelligentTieringConfigurationFilterOutputReference | S3BucketIntelligentTieringConfigurationFilter): any;
export declare class S3BucketIntelligentTieringConfigurationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketIntelligentTieringConfigurationFilter | undefined;
    set internalValue(value: S3BucketIntelligentTieringConfigurationFilter | undefined);
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
export interface S3BucketIntelligentTieringConfigurationTiering {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#access_tier S3BucketIntelligentTieringConfiguration#access_tier}
    */
    readonly accessTier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#days S3BucketIntelligentTieringConfiguration#days}
    */
    readonly days: number;
}
export declare function s3BucketIntelligentTieringConfigurationTieringToTerraform(struct?: S3BucketIntelligentTieringConfigurationTiering | cdktf.IResolvable): any;
export declare function s3BucketIntelligentTieringConfigurationTieringToHclTerraform(struct?: S3BucketIntelligentTieringConfigurationTiering | cdktf.IResolvable): any;
export declare class S3BucketIntelligentTieringConfigurationTieringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketIntelligentTieringConfigurationTiering | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketIntelligentTieringConfigurationTiering | cdktf.IResolvable | undefined);
    private _accessTier?;
    get accessTier(): string;
    set accessTier(value: string);
    get accessTierInput(): string | undefined;
    private _days?;
    get days(): number;
    set days(value: number);
    get daysInput(): number | undefined;
}
export declare class S3BucketIntelligentTieringConfigurationTieringList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketIntelligentTieringConfigurationTiering[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketIntelligentTieringConfigurationTieringOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration aws_s3_bucket_intelligent_tiering_configuration}
*/
export declare class S3BucketIntelligentTieringConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_intelligent_tiering_configuration";
    /**
    * Generates CDKTF code for importing a S3BucketIntelligentTieringConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketIntelligentTieringConfiguration to import
    * @param importFromId The id of the existing S3BucketIntelligentTieringConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketIntelligentTieringConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_intelligent_tiering_configuration aws_s3_bucket_intelligent_tiering_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketIntelligentTieringConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketIntelligentTieringConfigurationConfig);
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
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _filter;
    get filter(): S3BucketIntelligentTieringConfigurationFilterOutputReference;
    putFilter(value: S3BucketIntelligentTieringConfigurationFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketIntelligentTieringConfigurationFilter | undefined;
    private _tiering;
    get tiering(): S3BucketIntelligentTieringConfigurationTieringList;
    putTiering(value: S3BucketIntelligentTieringConfigurationTiering[] | cdktf.IResolvable): void;
    get tieringInput(): cdktf.IResolvable | S3BucketIntelligentTieringConfigurationTiering[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
