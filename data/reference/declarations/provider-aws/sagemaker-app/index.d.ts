/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#app_name SagemakerApp#app_name}
    */
    readonly appName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#app_type SagemakerApp#app_type}
    */
    readonly appType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#domain_id SagemakerApp#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#id SagemakerApp#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#space_name SagemakerApp#space_name}
    */
    readonly spaceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#tags SagemakerApp#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#tags_all SagemakerApp#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#user_profile_name SagemakerApp#user_profile_name}
    */
    readonly userProfileName?: string;
    /**
    * resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#resource_spec SagemakerApp#resource_spec}
    */
    readonly resourceSpec?: SagemakerAppResourceSpec;
}
export interface SagemakerAppResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#instance_type SagemakerApp#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#lifecycle_config_arn SagemakerApp#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#sagemaker_image_arn SagemakerApp#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#sagemaker_image_version_alias SagemakerApp#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#sagemaker_image_version_arn SagemakerApp#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerAppResourceSpecToTerraform(struct?: SagemakerAppResourceSpecOutputReference | SagemakerAppResourceSpec): any;
export declare function sagemakerAppResourceSpecToHclTerraform(struct?: SagemakerAppResourceSpecOutputReference | SagemakerAppResourceSpec): any;
export declare class SagemakerAppResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerAppResourceSpec | undefined;
    set internalValue(value: SagemakerAppResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app aws_sagemaker_app}
*/
export declare class SagemakerApp extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_app";
    /**
    * Generates CDKTF code for importing a SagemakerApp resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerApp to import
    * @param importFromId The id of the existing SagemakerApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerApp to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app aws_sagemaker_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerAppConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerAppConfig);
    private _appName?;
    get appName(): string;
    set appName(value: string);
    get appNameInput(): string | undefined;
    private _appType?;
    get appType(): string;
    set appType(value: string);
    get appTypeInput(): string | undefined;
    get arn(): string;
    private _domainId?;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _spaceName?;
    get spaceName(): string;
    set spaceName(value: string);
    resetSpaceName(): void;
    get spaceNameInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _userProfileName?;
    get userProfileName(): string;
    set userProfileName(value: string);
    resetUserProfileName(): void;
    get userProfileNameInput(): string | undefined;
    private _resourceSpec;
    get resourceSpec(): SagemakerAppResourceSpecOutputReference;
    putResourceSpec(value: SagemakerAppResourceSpec): void;
    resetResourceSpec(): void;
    get resourceSpecInput(): SagemakerAppResourceSpec | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
