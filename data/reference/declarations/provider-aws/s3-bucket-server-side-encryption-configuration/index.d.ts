/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketServerSideEncryptionConfigurationAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration#bucket S3BucketServerSideEncryptionConfigurationA#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration#expected_bucket_owner S3BucketServerSideEncryptionConfigurationA#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration#id S3BucketServerSideEncryptionConfigurationA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration#rule S3BucketServerSideEncryptionConfigurationA#rule}
    */
    readonly rule: S3BucketServerSideEncryptionConfigurationRuleA[] | cdktf.IResolvable;
}
export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration#kms_master_key_id S3BucketServerSideEncryptionConfigurationA#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration#sse_algorithm S3BucketServerSideEncryptionConfigurationA#sse_algorithm}
    */
    readonly sseAlgorithm: string;
}
export declare function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA): any;
export declare function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA): any;
export declare class S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA | undefined;
    set internalValue(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA | undefined);
    private _kmsMasterKeyId?;
    get kmsMasterKeyId(): string;
    set kmsMasterKeyId(value: string);
    resetKmsMasterKeyId(): void;
    get kmsMasterKeyIdInput(): string | undefined;
    private _sseAlgorithm?;
    get sseAlgorithm(): string;
    set sseAlgorithm(value: string);
    get sseAlgorithmInput(): string | undefined;
}
export interface S3BucketServerSideEncryptionConfigurationRuleA {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration#bucket_key_enabled S3BucketServerSideEncryptionConfigurationA#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * apply_server_side_encryption_by_default block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration#apply_server_side_encryption_by_default S3BucketServerSideEncryptionConfigurationA#apply_server_side_encryption_by_default}
    */
    readonly applyServerSideEncryptionByDefault?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA;
}
export declare function s3BucketServerSideEncryptionConfigurationRuleAToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleA | cdktf.IResolvable): any;
export declare function s3BucketServerSideEncryptionConfigurationRuleAToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleA | cdktf.IResolvable): any;
export declare class S3BucketServerSideEncryptionConfigurationRuleAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketServerSideEncryptionConfigurationRuleA | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketServerSideEncryptionConfigurationRuleA | cdktf.IResolvable | undefined);
    private _bucketKeyEnabled?;
    get bucketKeyEnabled(): boolean | cdktf.IResolvable;
    set bucketKeyEnabled(value: boolean | cdktf.IResolvable);
    resetBucketKeyEnabled(): void;
    get bucketKeyEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _applyServerSideEncryptionByDefault;
    get applyServerSideEncryptionByDefault(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference;
    putApplyServerSideEncryptionByDefault(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA): void;
    resetApplyServerSideEncryptionByDefault(): void;
    get applyServerSideEncryptionByDefaultInput(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA | undefined;
}
export declare class S3BucketServerSideEncryptionConfigurationRuleAList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketServerSideEncryptionConfigurationRuleA[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketServerSideEncryptionConfigurationRuleAOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration aws_s3_bucket_server_side_encryption_configuration}
*/
export declare class S3BucketServerSideEncryptionConfigurationA extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_server_side_encryption_configuration";
    /**
    * Generates CDKTF code for importing a S3BucketServerSideEncryptionConfigurationA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketServerSideEncryptionConfigurationA to import
    * @param importFromId The id of the existing S3BucketServerSideEncryptionConfigurationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketServerSideEncryptionConfigurationA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_server_side_encryption_configuration aws_s3_bucket_server_side_encryption_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketServerSideEncryptionConfigurationAConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketServerSideEncryptionConfigurationAConfig);
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
    private _rule;
    get rule(): S3BucketServerSideEncryptionConfigurationRuleAList;
    putRule(value: S3BucketServerSideEncryptionConfigurationRuleA[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | S3BucketServerSideEncryptionConfigurationRuleA[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
