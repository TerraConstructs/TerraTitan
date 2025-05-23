/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#acl S3BucketAcl#acl}
    */
    readonly acl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#bucket S3BucketAcl#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#id S3BucketAcl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * access_control_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#access_control_policy S3BucketAcl#access_control_policy}
    */
    readonly accessControlPolicy?: S3BucketAclAccessControlPolicy;
}
export interface S3BucketAclAccessControlPolicyGrantGrantee {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#email_address S3BucketAcl#email_address}
    */
    readonly emailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#id S3BucketAcl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#type S3BucketAcl#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#uri S3BucketAcl#uri}
    */
    readonly uri?: string;
}
export declare function s3BucketAclAccessControlPolicyGrantGranteeToTerraform(struct?: S3BucketAclAccessControlPolicyGrantGranteeOutputReference | S3BucketAclAccessControlPolicyGrantGrantee): any;
export declare function s3BucketAclAccessControlPolicyGrantGranteeToHclTerraform(struct?: S3BucketAclAccessControlPolicyGrantGranteeOutputReference | S3BucketAclAccessControlPolicyGrantGrantee): any;
export declare class S3BucketAclAccessControlPolicyGrantGranteeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketAclAccessControlPolicyGrantGrantee | undefined;
    set internalValue(value: S3BucketAclAccessControlPolicyGrantGrantee | undefined);
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
export interface S3BucketAclAccessControlPolicyGrant {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#permission S3BucketAcl#permission}
    */
    readonly permission: string;
    /**
    * grantee block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#grantee S3BucketAcl#grantee}
    */
    readonly grantee?: S3BucketAclAccessControlPolicyGrantGrantee;
}
export declare function s3BucketAclAccessControlPolicyGrantToTerraform(struct?: S3BucketAclAccessControlPolicyGrant | cdktf.IResolvable): any;
export declare function s3BucketAclAccessControlPolicyGrantToHclTerraform(struct?: S3BucketAclAccessControlPolicyGrant | cdktf.IResolvable): any;
export declare class S3BucketAclAccessControlPolicyGrantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketAclAccessControlPolicyGrant | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketAclAccessControlPolicyGrant | cdktf.IResolvable | undefined);
    private _permission?;
    get permission(): string;
    set permission(value: string);
    get permissionInput(): string | undefined;
    private _grantee;
    get grantee(): S3BucketAclAccessControlPolicyGrantGranteeOutputReference;
    putGrantee(value: S3BucketAclAccessControlPolicyGrantGrantee): void;
    resetGrantee(): void;
    get granteeInput(): S3BucketAclAccessControlPolicyGrantGrantee | undefined;
}
export declare class S3BucketAclAccessControlPolicyGrantList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketAclAccessControlPolicyGrant[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketAclAccessControlPolicyGrantOutputReference;
}
export interface S3BucketAclAccessControlPolicyOwner {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#display_name S3BucketAcl#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#id S3BucketAcl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function s3BucketAclAccessControlPolicyOwnerToTerraform(struct?: S3BucketAclAccessControlPolicyOwnerOutputReference | S3BucketAclAccessControlPolicyOwner): any;
export declare function s3BucketAclAccessControlPolicyOwnerToHclTerraform(struct?: S3BucketAclAccessControlPolicyOwnerOutputReference | S3BucketAclAccessControlPolicyOwner): any;
export declare class S3BucketAclAccessControlPolicyOwnerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketAclAccessControlPolicyOwner | undefined;
    set internalValue(value: S3BucketAclAccessControlPolicyOwner | undefined);
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
}
export interface S3BucketAclAccessControlPolicy {
    /**
    * grant block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#grant S3BucketAcl#grant}
    */
    readonly grant?: S3BucketAclAccessControlPolicyGrant[] | cdktf.IResolvable;
    /**
    * owner block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#owner S3BucketAcl#owner}
    */
    readonly owner: S3BucketAclAccessControlPolicyOwner;
}
export declare function s3BucketAclAccessControlPolicyToTerraform(struct?: S3BucketAclAccessControlPolicyOutputReference | S3BucketAclAccessControlPolicy): any;
export declare function s3BucketAclAccessControlPolicyToHclTerraform(struct?: S3BucketAclAccessControlPolicyOutputReference | S3BucketAclAccessControlPolicy): any;
export declare class S3BucketAclAccessControlPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketAclAccessControlPolicy | undefined;
    set internalValue(value: S3BucketAclAccessControlPolicy | undefined);
    private _grant;
    get grant(): S3BucketAclAccessControlPolicyGrantList;
    putGrant(value: S3BucketAclAccessControlPolicyGrant[] | cdktf.IResolvable): void;
    resetGrant(): void;
    get grantInput(): cdktf.IResolvable | S3BucketAclAccessControlPolicyGrant[] | undefined;
    private _owner;
    get owner(): S3BucketAclAccessControlPolicyOwnerOutputReference;
    putOwner(value: S3BucketAclAccessControlPolicyOwner): void;
    get ownerInput(): S3BucketAclAccessControlPolicyOwner | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl aws_s3_bucket_acl}
*/
export declare class S3BucketAcl extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_acl";
    /**
    * Generates CDKTF code for importing a S3BucketAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketAcl to import
    * @param importFromId The id of the existing S3BucketAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketAcl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_acl aws_s3_bucket_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketAclConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketAclConfig);
    private _acl?;
    get acl(): string;
    set acl(value: string);
    resetAcl(): void;
    get aclInput(): string | undefined;
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
    private _accessControlPolicy;
    get accessControlPolicy(): S3BucketAclAccessControlPolicyOutputReference;
    putAccessControlPolicy(value: S3BucketAclAccessControlPolicy): void;
    resetAccessControlPolicy(): void;
    get accessControlPolicyInput(): S3BucketAclAccessControlPolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
