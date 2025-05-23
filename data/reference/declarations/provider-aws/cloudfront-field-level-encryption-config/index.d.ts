/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontFieldLevelEncryptionConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#comment CloudfrontFieldLevelEncryptionConfig#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#id CloudfrontFieldLevelEncryptionConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * content_type_profile_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profile_config CloudfrontFieldLevelEncryptionConfig#content_type_profile_config}
    */
    readonly contentTypeProfileConfig: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig;
    /**
    * query_arg_profile_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profile_config CloudfrontFieldLevelEncryptionConfig#query_arg_profile_config}
    */
    readonly queryArgProfileConfig: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig;
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#content_type CloudfrontFieldLevelEncryptionConfig#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#format CloudfrontFieldLevelEncryptionConfig#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}
    */
    readonly profileId?: string;
}
export declare function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems | cdktf.IResolvable): any;
export declare function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems | cdktf.IResolvable): any;
export declare class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems | cdktf.IResolvable | undefined);
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    resetProfileId(): void;
    get profileIdInput(): string | undefined;
}
export declare class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference;
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles {
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#items CloudfrontFieldLevelEncryptionConfig#items}
    */
    readonly items: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[] | cdktf.IResolvable;
}
export declare function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles): any;
export declare function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles): any;
export declare class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles | undefined);
    private _items;
    get items(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList;
    putItems(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[] | cdktf.IResolvable): void;
    get itemsInput(): cdktf.IResolvable | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[] | undefined;
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_content_type_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}
    */
    readonly forwardWhenContentTypeIsUnknown: boolean | cdktf.IResolvable;
    /**
    * content_type_profiles block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profiles CloudfrontFieldLevelEncryptionConfig#content_type_profiles}
    */
    readonly contentTypeProfiles: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles;
}
export declare function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig): any;
export declare function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig): any;
export declare class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig | undefined);
    private _forwardWhenContentTypeIsUnknown?;
    get forwardWhenContentTypeIsUnknown(): boolean | cdktf.IResolvable;
    set forwardWhenContentTypeIsUnknown(value: boolean | cdktf.IResolvable);
    get forwardWhenContentTypeIsUnknownInput(): boolean | cdktf.IResolvable | undefined;
    private _contentTypeProfiles;
    get contentTypeProfiles(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference;
    putContentTypeProfiles(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles): void;
    get contentTypeProfilesInput(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles | undefined;
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}
    */
    readonly profileId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#query_arg CloudfrontFieldLevelEncryptionConfig#query_arg}
    */
    readonly queryArg: string;
}
export declare function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems | cdktf.IResolvable): any;
export declare function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems | cdktf.IResolvable): any;
export declare class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems | cdktf.IResolvable | undefined);
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    get profileIdInput(): string | undefined;
    private _queryArg?;
    get queryArg(): string;
    set queryArg(value: string);
    get queryArgInput(): string | undefined;
}
export declare class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference;
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles {
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#items CloudfrontFieldLevelEncryptionConfig#items}
    */
    readonly items?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[] | cdktf.IResolvable;
}
export declare function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles): any;
export declare function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles): any;
export declare class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles | undefined);
    private _items;
    get items(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList;
    putItems(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[] | cdktf.IResolvable): void;
    resetItems(): void;
    get itemsInput(): cdktf.IResolvable | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[] | undefined;
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_query_arg_profile_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}
    */
    readonly forwardWhenQueryArgProfileIsUnknown: boolean | cdktf.IResolvable;
    /**
    * query_arg_profiles block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profiles CloudfrontFieldLevelEncryptionConfig#query_arg_profiles}
    */
    readonly queryArgProfiles?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles;
}
export declare function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig): any;
export declare function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig): any;
export declare class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig | undefined);
    private _forwardWhenQueryArgProfileIsUnknown?;
    get forwardWhenQueryArgProfileIsUnknown(): boolean | cdktf.IResolvable;
    set forwardWhenQueryArgProfileIsUnknown(value: boolean | cdktf.IResolvable);
    get forwardWhenQueryArgProfileIsUnknownInput(): boolean | cdktf.IResolvable | undefined;
    private _queryArgProfiles;
    get queryArgProfiles(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference;
    putQueryArgProfiles(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles): void;
    resetQueryArgProfiles(): void;
    get queryArgProfilesInput(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config}
*/
export declare class CloudfrontFieldLevelEncryptionConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_field_level_encryption_config";
    /**
    * Generates CDKTF code for importing a CloudfrontFieldLevelEncryptionConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontFieldLevelEncryptionConfig to import
    * @param importFromId The id of the existing CloudfrontFieldLevelEncryptionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontFieldLevelEncryptionConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFieldLevelEncryptionConfigConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontFieldLevelEncryptionConfigConfig);
    get callerReference(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    get etag(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _contentTypeProfileConfig;
    get contentTypeProfileConfig(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference;
    putContentTypeProfileConfig(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig): void;
    get contentTypeProfileConfigInput(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig | undefined;
    private _queryArgProfileConfig;
    get queryArgProfileConfig(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference;
    putQueryArgProfileConfig(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig): void;
    get queryArgProfileConfigInput(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
