/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlMultiRegionAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#details S3ControlMultiRegionAccessPoint#details}
    */
    readonly details: S3ControlMultiRegionAccessPointDetails;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#timeouts S3ControlMultiRegionAccessPoint#timeouts}
    */
    readonly timeouts?: S3ControlMultiRegionAccessPointTimeouts;
}
export interface S3ControlMultiRegionAccessPointDetailsPublicAccessBlock {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}
export declare function s3ControlMultiRegionAccessPointDetailsPublicAccessBlockToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference | S3ControlMultiRegionAccessPointDetailsPublicAccessBlock): any;
export declare function s3ControlMultiRegionAccessPointDetailsPublicAccessBlockToHclTerraform(struct?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference | S3ControlMultiRegionAccessPointDetailsPublicAccessBlock): any;
export declare class S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlMultiRegionAccessPointDetailsPublicAccessBlock | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock | undefined);
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
export interface S3ControlMultiRegionAccessPointDetailsRegion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#bucket S3ControlMultiRegionAccessPoint#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#bucket_account_id S3ControlMultiRegionAccessPoint#bucket_account_id}
    */
    readonly bucketAccountId?: string;
}
export declare function s3ControlMultiRegionAccessPointDetailsRegionToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsRegion | cdktf.IResolvable): any;
export declare function s3ControlMultiRegionAccessPointDetailsRegionToHclTerraform(struct?: S3ControlMultiRegionAccessPointDetailsRegion | cdktf.IResolvable): any;
export declare class S3ControlMultiRegionAccessPointDetailsRegionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3ControlMultiRegionAccessPointDetailsRegion | cdktf.IResolvable | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointDetailsRegion | cdktf.IResolvable | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _bucketAccountId?;
    get bucketAccountId(): string;
    set bucketAccountId(value: string);
    resetBucketAccountId(): void;
    get bucketAccountIdInput(): string | undefined;
    get region(): string;
}
export declare class S3ControlMultiRegionAccessPointDetailsRegionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3ControlMultiRegionAccessPointDetailsRegion[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3ControlMultiRegionAccessPointDetailsRegionOutputReference;
}
export interface S3ControlMultiRegionAccessPointDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#name S3ControlMultiRegionAccessPoint#name}
    */
    readonly name: string;
    /**
    * public_access_block block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#public_access_block S3ControlMultiRegionAccessPoint#public_access_block}
    */
    readonly publicAccessBlock?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock;
    /**
    * region block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#region S3ControlMultiRegionAccessPoint#region}
    */
    readonly region: S3ControlMultiRegionAccessPointDetailsRegion[] | cdktf.IResolvable;
}
export declare function s3ControlMultiRegionAccessPointDetailsToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsOutputReference | S3ControlMultiRegionAccessPointDetails): any;
export declare function s3ControlMultiRegionAccessPointDetailsToHclTerraform(struct?: S3ControlMultiRegionAccessPointDetailsOutputReference | S3ControlMultiRegionAccessPointDetails): any;
export declare class S3ControlMultiRegionAccessPointDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlMultiRegionAccessPointDetails | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _publicAccessBlock;
    get publicAccessBlock(): S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference;
    putPublicAccessBlock(value: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock): void;
    resetPublicAccessBlock(): void;
    get publicAccessBlockInput(): S3ControlMultiRegionAccessPointDetailsPublicAccessBlock | undefined;
    private _region;
    get region(): S3ControlMultiRegionAccessPointDetailsRegionList;
    putRegion(value: S3ControlMultiRegionAccessPointDetailsRegion[] | cdktf.IResolvable): void;
    get regionInput(): cdktf.IResolvable | S3ControlMultiRegionAccessPointDetailsRegion[] | undefined;
}
export interface S3ControlMultiRegionAccessPointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#create S3ControlMultiRegionAccessPoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#delete S3ControlMultiRegionAccessPoint#delete}
    */
    readonly delete?: string;
}
export declare function s3ControlMultiRegionAccessPointTimeoutsToTerraform(struct?: S3ControlMultiRegionAccessPointTimeouts | cdktf.IResolvable): any;
export declare function s3ControlMultiRegionAccessPointTimeoutsToHclTerraform(struct?: S3ControlMultiRegionAccessPointTimeouts | cdktf.IResolvable): any;
export declare class S3ControlMultiRegionAccessPointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlMultiRegionAccessPointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point aws_s3control_multi_region_access_point}
*/
export declare class S3ControlMultiRegionAccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_multi_region_access_point";
    /**
    * Generates CDKTF code for importing a S3ControlMultiRegionAccessPoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlMultiRegionAccessPoint to import
    * @param importFromId The id of the existing S3ControlMultiRegionAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlMultiRegionAccessPoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point aws_s3control_multi_region_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlMultiRegionAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get alias(): string;
    get arn(): string;
    get domainName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get status(): string;
    private _details;
    get details(): S3ControlMultiRegionAccessPointDetailsOutputReference;
    putDetails(value: S3ControlMultiRegionAccessPointDetails): void;
    get detailsInput(): S3ControlMultiRegionAccessPointDetails | undefined;
    private _timeouts;
    get timeouts(): S3ControlMultiRegionAccessPointTimeoutsOutputReference;
    putTimeouts(value: S3ControlMultiRegionAccessPointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | S3ControlMultiRegionAccessPointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
