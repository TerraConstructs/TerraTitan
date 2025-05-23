/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppstreamFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#description AppstreamFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}
    */
    readonly disconnectTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}
    */
    readonly enableDefaultInternetAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#id AppstreamFleet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}
    */
    readonly idleDisconnectTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}
    */
    readonly imageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}
    */
    readonly imageName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}
    */
    readonly maxSessionsPerInstance?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}
    */
    readonly maxUserDurationInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#name AppstreamFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}
    */
    readonly streamView?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#tags_all AppstreamFleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * compute_capacity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}
    */
    readonly computeCapacity: AppstreamFleetComputeCapacity;
    /**
    * domain_join_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}
    */
    readonly domainJoinInfo?: AppstreamFleetDomainJoinInfo;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}
    */
    readonly vpcConfig?: AppstreamFleetVpcConfig;
}
export interface AppstreamFleetComputeCapacity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}
    */
    readonly desiredInstances?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}
    */
    readonly desiredSessions?: number;
}
export declare function appstreamFleetComputeCapacityToTerraform(struct?: AppstreamFleetComputeCapacityOutputReference | AppstreamFleetComputeCapacity): any;
export declare function appstreamFleetComputeCapacityToHclTerraform(struct?: AppstreamFleetComputeCapacityOutputReference | AppstreamFleetComputeCapacity): any;
export declare class AppstreamFleetComputeCapacityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppstreamFleetComputeCapacity | undefined;
    set internalValue(value: AppstreamFleetComputeCapacity | undefined);
    get available(): number;
    private _desiredInstances?;
    get desiredInstances(): number;
    set desiredInstances(value: number);
    resetDesiredInstances(): void;
    get desiredInstancesInput(): number | undefined;
    private _desiredSessions?;
    get desiredSessions(): number;
    set desiredSessions(value: number);
    resetDesiredSessions(): void;
    get desiredSessionsInput(): number | undefined;
    get inUse(): number;
    get running(): number;
}
export interface AppstreamFleetDomainJoinInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}
    */
    readonly directoryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
}
export declare function appstreamFleetDomainJoinInfoToTerraform(struct?: AppstreamFleetDomainJoinInfoOutputReference | AppstreamFleetDomainJoinInfo): any;
export declare function appstreamFleetDomainJoinInfoToHclTerraform(struct?: AppstreamFleetDomainJoinInfoOutputReference | AppstreamFleetDomainJoinInfo): any;
export declare class AppstreamFleetDomainJoinInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppstreamFleetDomainJoinInfo | undefined;
    set internalValue(value: AppstreamFleetDomainJoinInfo | undefined);
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
export interface AppstreamFleetVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function appstreamFleetVpcConfigToTerraform(struct?: AppstreamFleetVpcConfigOutputReference | AppstreamFleetVpcConfig): any;
export declare function appstreamFleetVpcConfigToHclTerraform(struct?: AppstreamFleetVpcConfigOutputReference | AppstreamFleetVpcConfig): any;
export declare class AppstreamFleetVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppstreamFleetVpcConfig | undefined;
    set internalValue(value: AppstreamFleetVpcConfig | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet aws_appstream_fleet}
*/
export declare class AppstreamFleet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appstream_fleet";
    /**
    * Generates CDKTF code for importing a AppstreamFleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppstreamFleet to import
    * @param importFromId The id of the existing AppstreamFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppstreamFleet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_fleet aws_appstream_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamFleetConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamFleetConfig);
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _disconnectTimeoutInSeconds?;
    get disconnectTimeoutInSeconds(): number;
    set disconnectTimeoutInSeconds(value: number);
    resetDisconnectTimeoutInSeconds(): void;
    get disconnectTimeoutInSecondsInput(): number | undefined;
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
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string | undefined;
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
    private _idleDisconnectTimeoutInSeconds?;
    get idleDisconnectTimeoutInSeconds(): number;
    set idleDisconnectTimeoutInSeconds(value: number);
    resetIdleDisconnectTimeoutInSeconds(): void;
    get idleDisconnectTimeoutInSecondsInput(): number | undefined;
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
    private _maxSessionsPerInstance?;
    get maxSessionsPerInstance(): number;
    set maxSessionsPerInstance(value: number);
    resetMaxSessionsPerInstance(): void;
    get maxSessionsPerInstanceInput(): number | undefined;
    private _maxUserDurationInSeconds?;
    get maxUserDurationInSeconds(): number;
    set maxUserDurationInSeconds(value: number);
    resetMaxUserDurationInSeconds(): void;
    get maxUserDurationInSecondsInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get state(): string;
    private _streamView?;
    get streamView(): string;
    set streamView(value: string);
    resetStreamView(): void;
    get streamViewInput(): string | undefined;
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
    private _computeCapacity;
    get computeCapacity(): AppstreamFleetComputeCapacityOutputReference;
    putComputeCapacity(value: AppstreamFleetComputeCapacity): void;
    get computeCapacityInput(): AppstreamFleetComputeCapacity | undefined;
    private _domainJoinInfo;
    get domainJoinInfo(): AppstreamFleetDomainJoinInfoOutputReference;
    putDomainJoinInfo(value: AppstreamFleetDomainJoinInfo): void;
    resetDomainJoinInfo(): void;
    get domainJoinInfoInput(): AppstreamFleetDomainJoinInfo | undefined;
    private _vpcConfig;
    get vpcConfig(): AppstreamFleetVpcConfigOutputReference;
    putVpcConfig(value: AppstreamFleetVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): AppstreamFleetVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
