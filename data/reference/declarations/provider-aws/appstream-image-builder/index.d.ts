/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppstreamImageBuilderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}
    */
    readonly appstreamAgentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}
    */
    readonly enableDefaultInternetAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#id AppstreamImageBuilder#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}
    */
    readonly imageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}
    */
    readonly imageName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#tags_all AppstreamImageBuilder#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * access_endpoint block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#access_endpoint AppstreamImageBuilder#access_endpoint}
    */
    readonly accessEndpoint?: AppstreamImageBuilderAccessEndpoint[] | cdktf.IResolvable;
    /**
    * domain_join_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}
    */
    readonly domainJoinInfo?: AppstreamImageBuilderDomainJoinInfo;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}
    */
    readonly vpcConfig?: AppstreamImageBuilderVpcConfig;
}
export interface AppstreamImageBuilderAccessEndpoint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}
    */
    readonly vpceId?: string;
}
export declare function appstreamImageBuilderAccessEndpointToTerraform(struct?: AppstreamImageBuilderAccessEndpoint | cdktf.IResolvable): any;
export declare function appstreamImageBuilderAccessEndpointToHclTerraform(struct?: AppstreamImageBuilderAccessEndpoint | cdktf.IResolvable): any;
export declare class AppstreamImageBuilderAccessEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppstreamImageBuilderAccessEndpoint | cdktf.IResolvable | undefined;
    set internalValue(value: AppstreamImageBuilderAccessEndpoint | cdktf.IResolvable | undefined);
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    get endpointTypeInput(): string | undefined;
    private _vpceId?;
    get vpceId(): string;
    set vpceId(value: string);
    resetVpceId(): void;
    get vpceIdInput(): string | undefined;
}
export declare class AppstreamImageBuilderAccessEndpointList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppstreamImageBuilderAccessEndpoint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppstreamImageBuilderAccessEndpointOutputReference;
}
export interface AppstreamImageBuilderDomainJoinInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}
    */
    readonly directoryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
}
export declare function appstreamImageBuilderDomainJoinInfoToTerraform(struct?: AppstreamImageBuilderDomainJoinInfoOutputReference | AppstreamImageBuilderDomainJoinInfo): any;
export declare function appstreamImageBuilderDomainJoinInfoToHclTerraform(struct?: AppstreamImageBuilderDomainJoinInfoOutputReference | AppstreamImageBuilderDomainJoinInfo): any;
export declare class AppstreamImageBuilderDomainJoinInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppstreamImageBuilderDomainJoinInfo | undefined;
    set internalValue(value: AppstreamImageBuilderDomainJoinInfo | undefined);
    private _directoryName?;
    get directoryName(): string;
    set directoryName(value: string);
    resetDirectoryName(): void;
    get directoryNameInput(): string | undefined;
    private _organizationalUnitDistinguishedName?;
    get organizationalUnitDistinguishedName(): string;
    set organizationalUnitDistinguishedName(value: string);
    resetOrganizationalUnitDistinguishedName(): void;
    get organizationalUnitDistinguishedNameInput(): string | undefined;
}
export interface AppstreamImageBuilderVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function appstreamImageBuilderVpcConfigToTerraform(struct?: AppstreamImageBuilderVpcConfigOutputReference | AppstreamImageBuilderVpcConfig): any;
export declare function appstreamImageBuilderVpcConfigToHclTerraform(struct?: AppstreamImageBuilderVpcConfigOutputReference | AppstreamImageBuilderVpcConfig): any;
export declare class AppstreamImageBuilderVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppstreamImageBuilderVpcConfig | undefined;
    set internalValue(value: AppstreamImageBuilderVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder aws_appstream_image_builder}
*/
export declare class AppstreamImageBuilder extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appstream_image_builder";
    /**
    * Generates CDKTF code for importing a AppstreamImageBuilder resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppstreamImageBuilder to import
    * @param importFromId The id of the existing AppstreamImageBuilder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppstreamImageBuilder to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_image_builder aws_appstream_image_builder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamImageBuilderConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamImageBuilderConfig);
    private _appstreamAgentVersion?;
    get appstreamAgentVersion(): string;
    set appstreamAgentVersion(value: string);
    resetAppstreamAgentVersion(): void;
    get appstreamAgentVersionInput(): string | undefined;
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _enableDefaultInternetAccess?;
    get enableDefaultInternetAccess(): boolean | cdktf.IResolvable;
    set enableDefaultInternetAccess(value: boolean | cdktf.IResolvable);
    resetEnableDefaultInternetAccess(): void;
    get enableDefaultInternetAccessInput(): boolean | cdktf.IResolvable | undefined;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageArn?;
    get imageArn(): string;
    set imageArn(value: string);
    resetImageArn(): void;
    get imageArnInput(): string | undefined;
    private _imageName?;
    get imageName(): string;
    set imageName(value: string);
    resetImageName(): void;
    get imageNameInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get state(): string;
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
    private _accessEndpoint;
    get accessEndpoint(): AppstreamImageBuilderAccessEndpointList;
    putAccessEndpoint(value: AppstreamImageBuilderAccessEndpoint[] | cdktf.IResolvable): void;
    resetAccessEndpoint(): void;
    get accessEndpointInput(): cdktf.IResolvable | AppstreamImageBuilderAccessEndpoint[] | undefined;
    private _domainJoinInfo;
    get domainJoinInfo(): AppstreamImageBuilderDomainJoinInfoOutputReference;
    putDomainJoinInfo(value: AppstreamImageBuilderDomainJoinInfo): void;
    resetDomainJoinInfo(): void;
    get domainJoinInfoInput(): AppstreamImageBuilderDomainJoinInfo | undefined;
    private _vpcConfig;
    get vpcConfig(): AppstreamImageBuilderVpcConfigOutputReference;
    putVpcConfig(value: AppstreamImageBuilderVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): AppstreamImageBuilderVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
