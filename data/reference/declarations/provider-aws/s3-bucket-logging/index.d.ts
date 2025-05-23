/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketLoggingAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}
    */
    readonly targetBucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}
    */
    readonly targetPrefix: string;
    /**
    * target_grant block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#target_grant S3BucketLoggingA#target_grant}
    */
    readonly targetGrant?: S3BucketLoggingTargetGrant[] | cdktf.IResolvable;
    /**
    * target_object_key_format block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#target_object_key_format S3BucketLoggingA#target_object_key_format}
    */
    readonly targetObjectKeyFormat?: S3BucketLoggingTargetObjectKeyFormat;
}
export interface S3BucketLoggingTargetGrantGrantee {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}
    */
    readonly emailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}
    */
    readonly uri?: string;
}
export declare function s3BucketLoggingTargetGrantGranteeToTerraform(struct?: S3BucketLoggingTargetGrantGranteeOutputReference | S3BucketLoggingTargetGrantGrantee): any;
export declare function s3BucketLoggingTargetGrantGranteeToHclTerraform(struct?: S3BucketLoggingTargetGrantGranteeOutputReference | S3BucketLoggingTargetGrantGrantee): any;
export declare class S3BucketLoggingTargetGrantGranteeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketLoggingTargetGrantGrantee | undefined;
    set internalValue(value: S3BucketLoggingTargetGrantGrantee | undefined);
    get displayName(): string;
    private _emailAddress?;
    get emailAddress(): string;
    set emailAddress(value: string);
    resetEmailAddress(): void;
    get emailAddressInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string | undefined;
}
export interface S3BucketLoggingTargetGrant {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}
    */
    readonly permission: string;
    /**
    * grantee block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#grantee S3BucketLoggingA#grantee}
    */
    readonly grantee: S3BucketLoggingTargetGrantGrantee;
}
export declare function s3BucketLoggingTargetGrantToTerraform(struct?: S3BucketLoggingTargetGrant | cdktf.IResolvable): any;
export declare function s3BucketLoggingTargetGrantToHclTerraform(struct?: S3BucketLoggingTargetGrant | cdktf.IResolvable): any;
export declare class S3BucketLoggingTargetGrantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLoggingTargetGrant | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLoggingTargetGrant | cdktf.IResolvable | undefined);
    private _permission?;
    get permission(): string;
    set permission(value: string);
    get permissionInput(): string | undefined;
    private _grantee;
    get grantee(): S3BucketLoggingTargetGrantGranteeOutputReference;
    putGrantee(value: S3BucketLoggingTargetGrantGrantee): void;
    get granteeInput(): S3BucketLoggingTargetGrantGrantee | undefined;
}
export declare class S3BucketLoggingTargetGrantList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLoggingTargetGrant[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLoggingTargetGrantOutputReference;
}
export interface S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}
    */
    readonly partitionDateSource: string;
}
export declare function s3BucketLoggingTargetObjectKeyFormatPartitionedPrefixToTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference | S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix): any;
export declare function s3BucketLoggingTargetObjectKeyFormatPartitionedPrefixToHclTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference | S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix): any;
export declare class S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix | undefined;
    set internalValue(value: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix | undefined);
    private _partitionDateSource?;
    get partitionDateSource(): string;
    set partitionDateSource(value: string);
    get partitionDateSourceInput(): string | undefined;
}
export interface S3BucketLoggingTargetObjectKeyFormatSimplePrefix {
}
export declare function s3BucketLoggingTargetObjectKeyFormatSimplePrefixToTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference | S3BucketLoggingTargetObjectKeyFormatSimplePrefix): any;
export declare function s3BucketLoggingTargetObjectKeyFormatSimplePrefixToHclTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference | S3BucketLoggingTargetObjectKeyFormatSimplePrefix): any;
export declare class S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketLoggingTargetObjectKeyFormatSimplePrefix | undefined;
    set internalValue(value: S3BucketLoggingTargetObjectKeyFormatSimplePrefix | undefined);
}
export interface S3BucketLoggingTargetObjectKeyFormat {
    /**
    * partitioned_prefix block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#partitioned_prefix S3BucketLoggingA#partitioned_prefix}
    */
    readonly partitionedPrefix?: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix;
    /**
    * simple_prefix block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#simple_prefix S3BucketLoggingA#simple_prefix}
    */
    readonly simplePrefix?: S3BucketLoggingTargetObjectKeyFormatSimplePrefix;
}
export declare function s3BucketLoggingTargetObjectKeyFormatToTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatOutputReference | S3BucketLoggingTargetObjectKeyFormat): any;
export declare function s3BucketLoggingTargetObjectKeyFormatToHclTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatOutputReference | S3BucketLoggingTargetObjectKeyFormat): any;
export declare class S3BucketLoggingTargetObjectKeyFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketLoggingTargetObjectKeyFormat | undefined;
    set internalValue(value: S3BucketLoggingTargetObjectKeyFormat | undefined);
    private _partitionedPrefix;
    get partitionedPrefix(): S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference;
    putPartitionedPrefix(value: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix): void;
    resetPartitionedPrefix(): void;
    get partitionedPrefixInput(): S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix | undefined;
    private _simplePrefix;
    get simplePrefix(): S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference;
    putSimplePrefix(value: S3BucketLoggingTargetObjectKeyFormatSimplePrefix): void;
    resetSimplePrefix(): void;
    get simplePrefixInput(): S3BucketLoggingTargetObjectKeyFormatSimplePrefix | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging aws_s3_bucket_logging}
*/
export declare class S3BucketLoggingA extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_logging";
    /**
    * Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketLoggingA to import
    * @param importFromId The id of the existing S3BucketLoggingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketLoggingA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_logging aws_s3_bucket_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketLoggingAConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketLoggingAConfig);
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
    private _targetBucket?;
    get targetBucket(): string;
    set targetBucket(value: string);
    get targetBucketInput(): string | undefined;
    private _targetPrefix?;
    get targetPrefix(): string;
    set targetPrefix(value: string);
    get targetPrefixInput(): string | undefined;
    private _targetGrant;
    get targetGrant(): S3BucketLoggingTargetGrantList;
    putTargetGrant(value: S3BucketLoggingTargetGrant[] | cdktf.IResolvable): void;
    resetTargetGrant(): void;
    get targetGrantInput(): cdktf.IResolvable | S3BucketLoggingTargetGrant[] | undefined;
    private _targetObjectKeyFormat;
    get targetObjectKeyFormat(): S3BucketLoggingTargetObjectKeyFormatOutputReference;
    putTargetObjectKeyFormat(value: S3BucketLoggingTargetObjectKeyFormat): void;
    resetTargetObjectKeyFormat(): void;
    get targetObjectKeyFormatInput(): S3BucketLoggingTargetObjectKeyFormat | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
