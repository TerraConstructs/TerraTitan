/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3AccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#account_id S3AccessPoint#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#bucket S3AccessPoint#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}
    */
    readonly bucketAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#id S3AccessPoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#name S3AccessPoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#policy S3AccessPoint#policy}
    */
    readonly policy?: string;
    /**
    * public_access_block_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#public_access_block_configuration S3AccessPoint#public_access_block_configuration}
    */
    readonly publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration;
    /**
    * vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#vpc_configuration S3AccessPoint#vpc_configuration}
    */
    readonly vpcConfiguration?: S3AccessPointVpcConfiguration;
}
export interface S3AccessPointPublicAccessBlockConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}
export declare function s3AccessPointPublicAccessBlockConfigurationToTerraform(struct?: S3AccessPointPublicAccessBlockConfigurationOutputReference | S3AccessPointPublicAccessBlockConfiguration): any;
export declare function s3AccessPointPublicAccessBlockConfigurationToHclTerraform(struct?: S3AccessPointPublicAccessBlockConfigurationOutputReference | S3AccessPointPublicAccessBlockConfiguration): any;
export declare class S3AccessPointPublicAccessBlockConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3AccessPointPublicAccessBlockConfiguration | undefined;
    set internalValue(value: S3AccessPointPublicAccessBlockConfiguration | undefined);
    private _blockPublicAcls?;
    get blockPublicAcls(): boolean | cdktf.IResolvable;
    set blockPublicAcls(value: boolean | cdktf.IResolvable);
    resetBlockPublicAcls(): void;
    get blockPublicAclsInput(): boolean | cdktf.IResolvable | undefined;
    private _blockPublicPolicy?;
    get blockPublicPolicy(): boolean | cdktf.IResolvable;
    set blockPublicPolicy(value: boolean | cdktf.IResolvable);
    resetBlockPublicPolicy(): void;
    get blockPublicPolicyInput(): boolean | cdktf.IResolvable | undefined;
    private _ignorePublicAcls?;
    get ignorePublicAcls(): boolean | cdktf.IResolvable;
    set ignorePublicAcls(value: boolean | cdktf.IResolvable);
    resetIgnorePublicAcls(): void;
    get ignorePublicAclsInput(): boolean | cdktf.IResolvable | undefined;
    private _restrictPublicBuckets?;
    get restrictPublicBuckets(): boolean | cdktf.IResolvable;
    set restrictPublicBuckets(value: boolean | cdktf.IResolvable);
    resetRestrictPublicBuckets(): void;
    get restrictPublicBucketsInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3AccessPointVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#vpc_id S3AccessPoint#vpc_id}
    */
    readonly vpcId: string;
}
export declare function s3AccessPointVpcConfigurationToTerraform(struct?: S3AccessPointVpcConfigurationOutputReference | S3AccessPointVpcConfiguration): any;
export declare function s3AccessPointVpcConfigurationToHclTerraform(struct?: S3AccessPointVpcConfigurationOutputReference | S3AccessPointVpcConfiguration): any;
export declare class S3AccessPointVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3AccessPointVpcConfiguration | undefined;
    set internalValue(value: S3AccessPointVpcConfiguration | undefined);
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point aws_s3_access_point}
*/
export declare class S3AccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_access_point";
    /**
    * Generates CDKTF code for importing a S3AccessPoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3AccessPoint to import
    * @param importFromId The id of the existing S3AccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3AccessPoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_access_point aws_s3_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3AccessPointConfig
    */
    constructor(scope: Construct, id: string, config: S3AccessPointConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get alias(): string;
    get arn(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _bucketAccountId?;
    get bucketAccountId(): string;
    set bucketAccountId(value: string);
    resetBucketAccountId(): void;
    get bucketAccountIdInput(): string | undefined;
    get domainName(): string;
    private _endpoints;
    get endpoints(): cdktf.StringMap;
    get hasPublicAccessPolicy(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get networkOrigin(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _publicAccessBlockConfiguration;
    get publicAccessBlockConfiguration(): S3AccessPointPublicAccessBlockConfigurationOutputReference;
    putPublicAccessBlockConfiguration(value: S3AccessPointPublicAccessBlockConfiguration): void;
    resetPublicAccessBlockConfiguration(): void;
    get publicAccessBlockConfigurationInput(): S3AccessPointPublicAccessBlockConfiguration | undefined;
    private _vpcConfiguration;
    get vpcConfiguration(): S3AccessPointVpcConfigurationOutputReference;
    putVpcConfiguration(value: S3AccessPointVpcConfiguration): void;
    resetVpcConfiguration(): void;
    get vpcConfigurationInput(): S3AccessPointVpcConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
