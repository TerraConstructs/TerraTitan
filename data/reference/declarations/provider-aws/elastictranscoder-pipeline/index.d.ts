/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElastictranscoderPipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}
    */
    readonly awsKmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}
    */
    readonly inputBucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}
    */
    readonly outputBucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}
    */
    readonly role: string;
    /**
    * content_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#content_config ElastictranscoderPipeline#content_config}
    */
    readonly contentConfig?: ElastictranscoderPipelineContentConfig;
    /**
    * content_config_permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#content_config_permissions ElastictranscoderPipeline#content_config_permissions}
    */
    readonly contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[] | cdktf.IResolvable;
    /**
    * notifications block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#notifications ElastictranscoderPipeline#notifications}
    */
    readonly notifications?: ElastictranscoderPipelineNotifications;
    /**
    * thumbnail_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#thumbnail_config ElastictranscoderPipeline#thumbnail_config}
    */
    readonly thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig;
    /**
    * thumbnail_config_permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}
    */
    readonly thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[] | cdktf.IResolvable;
}
export interface ElastictranscoderPipelineContentConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}
    */
    readonly storageClass?: string;
}
export declare function elastictranscoderPipelineContentConfigToTerraform(struct?: ElastictranscoderPipelineContentConfigOutputReference | ElastictranscoderPipelineContentConfig): any;
export declare function elastictranscoderPipelineContentConfigToHclTerraform(struct?: ElastictranscoderPipelineContentConfigOutputReference | ElastictranscoderPipelineContentConfig): any;
export declare class ElastictranscoderPipelineContentConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElastictranscoderPipelineContentConfig | undefined;
    set internalValue(value: ElastictranscoderPipelineContentConfig | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string | undefined;
}
export interface ElastictranscoderPipelineContentConfigPermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}
    */
    readonly access?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}
    */
    readonly grantee?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}
    */
    readonly granteeType?: string;
}
export declare function elastictranscoderPipelineContentConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineContentConfigPermissions | cdktf.IResolvable): any;
export declare function elastictranscoderPipelineContentConfigPermissionsToHclTerraform(struct?: ElastictranscoderPipelineContentConfigPermissions | cdktf.IResolvable): any;
export declare class ElastictranscoderPipelineContentConfigPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElastictranscoderPipelineContentConfigPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: ElastictranscoderPipelineContentConfigPermissions | cdktf.IResolvable | undefined);
    private _access?;
    get access(): string[];
    set access(value: string[]);
    resetAccess(): void;
    get accessInput(): string[] | undefined;
    private _grantee?;
    get grantee(): string;
    set grantee(value: string);
    resetGrantee(): void;
    get granteeInput(): string | undefined;
    private _granteeType?;
    get granteeType(): string;
    set granteeType(value: string);
    resetGranteeType(): void;
    get granteeTypeInput(): string | undefined;
}
export declare class ElastictranscoderPipelineContentConfigPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElastictranscoderPipelineContentConfigPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElastictranscoderPipelineContentConfigPermissionsOutputReference;
}
export interface ElastictranscoderPipelineNotifications {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}
    */
    readonly completed?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}
    */
    readonly error?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}
    */
    readonly progressing?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}
    */
    readonly warning?: string;
}
export declare function elastictranscoderPipelineNotificationsToTerraform(struct?: ElastictranscoderPipelineNotificationsOutputReference | ElastictranscoderPipelineNotifications): any;
export declare function elastictranscoderPipelineNotificationsToHclTerraform(struct?: ElastictranscoderPipelineNotificationsOutputReference | ElastictranscoderPipelineNotifications): any;
export declare class ElastictranscoderPipelineNotificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElastictranscoderPipelineNotifications | undefined;
    set internalValue(value: ElastictranscoderPipelineNotifications | undefined);
    private _completed?;
    get completed(): string;
    set completed(value: string);
    resetCompleted(): void;
    get completedInput(): string | undefined;
    private _error?;
    get error(): string;
    set error(value: string);
    resetError(): void;
    get errorInput(): string | undefined;
    private _progressing?;
    get progressing(): string;
    set progressing(value: string);
    resetProgressing(): void;
    get progressingInput(): string | undefined;
    private _warning?;
    get warning(): string;
    set warning(value: string);
    resetWarning(): void;
    get warningInput(): string | undefined;
}
export interface ElastictranscoderPipelineThumbnailConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}
    */
    readonly storageClass?: string;
}
export declare function elastictranscoderPipelineThumbnailConfigToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigOutputReference | ElastictranscoderPipelineThumbnailConfig): any;
export declare function elastictranscoderPipelineThumbnailConfigToHclTerraform(struct?: ElastictranscoderPipelineThumbnailConfigOutputReference | ElastictranscoderPipelineThumbnailConfig): any;
export declare class ElastictranscoderPipelineThumbnailConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElastictranscoderPipelineThumbnailConfig | undefined;
    set internalValue(value: ElastictranscoderPipelineThumbnailConfig | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string | undefined;
}
export interface ElastictranscoderPipelineThumbnailConfigPermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}
    */
    readonly access?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}
    */
    readonly grantee?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}
    */
    readonly granteeType?: string;
}
export declare function elastictranscoderPipelineThumbnailConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigPermissions | cdktf.IResolvable): any;
export declare function elastictranscoderPipelineThumbnailConfigPermissionsToHclTerraform(struct?: ElastictranscoderPipelineThumbnailConfigPermissions | cdktf.IResolvable): any;
export declare class ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElastictranscoderPipelineThumbnailConfigPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: ElastictranscoderPipelineThumbnailConfigPermissions | cdktf.IResolvable | undefined);
    private _access?;
    get access(): string[];
    set access(value: string[]);
    resetAccess(): void;
    get accessInput(): string[] | undefined;
    private _grantee?;
    get grantee(): string;
    set grantee(value: string);
    resetGrantee(): void;
    get granteeInput(): string | undefined;
    private _granteeType?;
    get granteeType(): string;
    set granteeType(value: string);
    resetGranteeType(): void;
    get granteeTypeInput(): string | undefined;
}
export declare class ElastictranscoderPipelineThumbnailConfigPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElastictranscoderPipelineThumbnailConfigPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline aws_elastictranscoder_pipeline}
*/
export declare class ElastictranscoderPipeline extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elastictranscoder_pipeline";
    /**
    * Generates CDKTF code for importing a ElastictranscoderPipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElastictranscoderPipeline to import
    * @param importFromId The id of the existing ElastictranscoderPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElastictranscoderPipeline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_pipeline aws_elastictranscoder_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElastictranscoderPipelineConfig
    */
    constructor(scope: Construct, id: string, config: ElastictranscoderPipelineConfig);
    get arn(): string;
    private _awsKmsKeyArn?;
    get awsKmsKeyArn(): string;
    set awsKmsKeyArn(value: string);
    resetAwsKmsKeyArn(): void;
    get awsKmsKeyArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _inputBucket?;
    get inputBucket(): string;
    set inputBucket(value: string);
    get inputBucketInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _outputBucket?;
    get outputBucket(): string;
    set outputBucket(value: string);
    resetOutputBucket(): void;
    get outputBucketInput(): string | undefined;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string | undefined;
    private _contentConfig;
    get contentConfig(): ElastictranscoderPipelineContentConfigOutputReference;
    putContentConfig(value: ElastictranscoderPipelineContentConfig): void;
    resetContentConfig(): void;
    get contentConfigInput(): ElastictranscoderPipelineContentConfig | undefined;
    private _contentConfigPermissions;
    get contentConfigPermissions(): ElastictranscoderPipelineContentConfigPermissionsList;
    putContentConfigPermissions(value: ElastictranscoderPipelineContentConfigPermissions[] | cdktf.IResolvable): void;
    resetContentConfigPermissions(): void;
    get contentConfigPermissionsInput(): cdktf.IResolvable | ElastictranscoderPipelineContentConfigPermissions[] | undefined;
    private _notifications;
    get notifications(): ElastictranscoderPipelineNotificationsOutputReference;
    putNotifications(value: ElastictranscoderPipelineNotifications): void;
    resetNotifications(): void;
    get notificationsInput(): ElastictranscoderPipelineNotifications | undefined;
    private _thumbnailConfig;
    get thumbnailConfig(): ElastictranscoderPipelineThumbnailConfigOutputReference;
    putThumbnailConfig(value: ElastictranscoderPipelineThumbnailConfig): void;
    resetThumbnailConfig(): void;
    get thumbnailConfigInput(): ElastictranscoderPipelineThumbnailConfig | undefined;
    private _thumbnailConfigPermissions;
    get thumbnailConfigPermissions(): ElastictranscoderPipelineThumbnailConfigPermissionsList;
    putThumbnailConfigPermissions(value: ElastictranscoderPipelineThumbnailConfigPermissions[] | cdktf.IResolvable): void;
    resetThumbnailConfigPermissions(): void;
    get thumbnailConfigPermissionsInput(): cdktf.IResolvable | ElastictranscoderPipelineThumbnailConfigPermissions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
