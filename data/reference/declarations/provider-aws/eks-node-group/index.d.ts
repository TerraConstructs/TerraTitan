/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksNodeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#ami_type EksNodeGroup#ami_type}
    */
    readonly amiType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#capacity_type EksNodeGroup#capacity_type}
    */
    readonly capacityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#cluster_name EksNodeGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#disk_size EksNodeGroup#disk_size}
    */
    readonly diskSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#force_update_version EksNodeGroup#force_update_version}
    */
    readonly forceUpdateVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#id EksNodeGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#instance_types EksNodeGroup#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#labels EksNodeGroup#labels}
    */
    readonly labels?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#node_group_name EksNodeGroup#node_group_name}
    */
    readonly nodeGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}
    */
    readonly nodeGroupNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}
    */
    readonly nodeRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#release_version EksNodeGroup#release_version}
    */
    readonly releaseVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#tags EksNodeGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#tags_all EksNodeGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#version EksNodeGroup#version}
    */
    readonly version?: string;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#launch_template EksNodeGroup#launch_template}
    */
    readonly launchTemplate?: EksNodeGroupLaunchTemplate;
    /**
    * node_repair_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#node_repair_config EksNodeGroup#node_repair_config}
    */
    readonly nodeRepairConfig?: EksNodeGroupNodeRepairConfig;
    /**
    * remote_access block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#remote_access EksNodeGroup#remote_access}
    */
    readonly remoteAccess?: EksNodeGroupRemoteAccess;
    /**
    * scaling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#scaling_config EksNodeGroup#scaling_config}
    */
    readonly scalingConfig: EksNodeGroupScalingConfig;
    /**
    * taint block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#taint EksNodeGroup#taint}
    */
    readonly taint?: EksNodeGroupTaint[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#timeouts EksNodeGroup#timeouts}
    */
    readonly timeouts?: EksNodeGroupTimeouts;
    /**
    * update_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#update_config EksNodeGroup#update_config}
    */
    readonly updateConfig?: EksNodeGroupUpdateConfig;
}
export interface EksNodeGroupResourcesAutoscalingGroups {
}
export declare function eksNodeGroupResourcesAutoscalingGroupsToTerraform(struct?: EksNodeGroupResourcesAutoscalingGroups): any;
export declare function eksNodeGroupResourcesAutoscalingGroupsToHclTerraform(struct?: EksNodeGroupResourcesAutoscalingGroups): any;
export declare class EksNodeGroupResourcesAutoscalingGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EksNodeGroupResourcesAutoscalingGroups | undefined;
    set internalValue(value: EksNodeGroupResourcesAutoscalingGroups | undefined);
    get name(): string;
}
export declare class EksNodeGroupResourcesAutoscalingGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EksNodeGroupResourcesAutoscalingGroupsOutputReference;
}
export interface EksNodeGroupResources {
}
export declare function eksNodeGroupResourcesToTerraform(struct?: EksNodeGroupResources): any;
export declare function eksNodeGroupResourcesToHclTerraform(struct?: EksNodeGroupResources): any;
export declare class EksNodeGroupResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EksNodeGroupResources | undefined;
    set internalValue(value: EksNodeGroupResources | undefined);
    private _autoscalingGroups;
    get autoscalingGroups(): EksNodeGroupResourcesAutoscalingGroupsList;
    get remoteAccessSecurityGroupId(): string;
}
export declare class EksNodeGroupResourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EksNodeGroupResourcesOutputReference;
}
export interface EksNodeGroupLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#id EksNodeGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#name EksNodeGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#version EksNodeGroup#version}
    */
    readonly version: string;
}
export declare function eksNodeGroupLaunchTemplateToTerraform(struct?: EksNodeGroupLaunchTemplateOutputReference | EksNodeGroupLaunchTemplate): any;
export declare function eksNodeGroupLaunchTemplateToHclTerraform(struct?: EksNodeGroupLaunchTemplateOutputReference | EksNodeGroupLaunchTemplate): any;
export declare class EksNodeGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksNodeGroupLaunchTemplate | undefined;
    set internalValue(value: EksNodeGroupLaunchTemplate | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
}
export interface EksNodeGroupNodeRepairConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#enabled EksNodeGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function eksNodeGroupNodeRepairConfigToTerraform(struct?: EksNodeGroupNodeRepairConfigOutputReference | EksNodeGroupNodeRepairConfig): any;
export declare function eksNodeGroupNodeRepairConfigToHclTerraform(struct?: EksNodeGroupNodeRepairConfigOutputReference | EksNodeGroupNodeRepairConfig): any;
export declare class EksNodeGroupNodeRepairConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksNodeGroupNodeRepairConfig | undefined;
    set internalValue(value: EksNodeGroupNodeRepairConfig | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface EksNodeGroupRemoteAccess {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#ec2_ssh_key EksNodeGroup#ec2_ssh_key}
    */
    readonly ec2SshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#source_security_group_ids EksNodeGroup#source_security_group_ids}
    */
    readonly sourceSecurityGroupIds?: string[];
}
export declare function eksNodeGroupRemoteAccessToTerraform(struct?: EksNodeGroupRemoteAccessOutputReference | EksNodeGroupRemoteAccess): any;
export declare function eksNodeGroupRemoteAccessToHclTerraform(struct?: EksNodeGroupRemoteAccessOutputReference | EksNodeGroupRemoteAccess): any;
export declare class EksNodeGroupRemoteAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksNodeGroupRemoteAccess | undefined;
    set internalValue(value: EksNodeGroupRemoteAccess | undefined);
    private _ec2SshKey?;
    get ec2SshKey(): string;
    set ec2SshKey(value: string);
    resetEc2SshKey(): void;
    get ec2SshKeyInput(): string | undefined;
    private _sourceSecurityGroupIds?;
    get sourceSecurityGroupIds(): string[];
    set sourceSecurityGroupIds(value: string[]);
    resetSourceSecurityGroupIds(): void;
    get sourceSecurityGroupIdsInput(): string[] | undefined;
}
export interface EksNodeGroupScalingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#desired_size EksNodeGroup#desired_size}
    */
    readonly desiredSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#max_size EksNodeGroup#max_size}
    */
    readonly maxSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#min_size EksNodeGroup#min_size}
    */
    readonly minSize: number;
}
export declare function eksNodeGroupScalingConfigToTerraform(struct?: EksNodeGroupScalingConfigOutputReference | EksNodeGroupScalingConfig): any;
export declare function eksNodeGroupScalingConfigToHclTerraform(struct?: EksNodeGroupScalingConfigOutputReference | EksNodeGroupScalingConfig): any;
export declare class EksNodeGroupScalingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksNodeGroupScalingConfig | undefined;
    set internalValue(value: EksNodeGroupScalingConfig | undefined);
    private _desiredSize?;
    get desiredSize(): number;
    set desiredSize(value: number);
    get desiredSizeInput(): number | undefined;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    get maxSizeInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    get minSizeInput(): number | undefined;
}
export interface EksNodeGroupTaint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#effect EksNodeGroup#effect}
    */
    readonly effect: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#key EksNodeGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#value EksNodeGroup#value}
    */
    readonly value?: string;
}
export declare function eksNodeGroupTaintToTerraform(struct?: EksNodeGroupTaint | cdktf.IResolvable): any;
export declare function eksNodeGroupTaintToHclTerraform(struct?: EksNodeGroupTaint | cdktf.IResolvable): any;
export declare class EksNodeGroupTaintOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EksNodeGroupTaint | cdktf.IResolvable | undefined;
    set internalValue(value: EksNodeGroupTaint | cdktf.IResolvable | undefined);
    private _effect?;
    get effect(): string;
    set effect(value: string);
    get effectInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class EksNodeGroupTaintList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EksNodeGroupTaint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EksNodeGroupTaintOutputReference;
}
export interface EksNodeGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#create EksNodeGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#delete EksNodeGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#update EksNodeGroup#update}
    */
    readonly update?: string;
}
export declare function eksNodeGroupTimeoutsToTerraform(struct?: EksNodeGroupTimeouts | cdktf.IResolvable): any;
export declare function eksNodeGroupTimeoutsToHclTerraform(struct?: EksNodeGroupTimeouts | cdktf.IResolvable): any;
export declare class EksNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksNodeGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EksNodeGroupTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface EksNodeGroupUpdateConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#max_unavailable EksNodeGroup#max_unavailable}
    */
    readonly maxUnavailable?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}
    */
    readonly maxUnavailablePercentage?: number;
}
export declare function eksNodeGroupUpdateConfigToTerraform(struct?: EksNodeGroupUpdateConfigOutputReference | EksNodeGroupUpdateConfig): any;
export declare function eksNodeGroupUpdateConfigToHclTerraform(struct?: EksNodeGroupUpdateConfigOutputReference | EksNodeGroupUpdateConfig): any;
export declare class EksNodeGroupUpdateConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksNodeGroupUpdateConfig | undefined;
    set internalValue(value: EksNodeGroupUpdateConfig | undefined);
    private _maxUnavailable?;
    get maxUnavailable(): number;
    set maxUnavailable(value: number);
    resetMaxUnavailable(): void;
    get maxUnavailableInput(): number | undefined;
    private _maxUnavailablePercentage?;
    get maxUnavailablePercentage(): number;
    set maxUnavailablePercentage(value: number);
    resetMaxUnavailablePercentage(): void;
    get maxUnavailablePercentageInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group aws_eks_node_group}
*/
export declare class EksNodeGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eks_node_group";
    /**
    * Generates CDKTF code for importing a EksNodeGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EksNodeGroup to import
    * @param importFromId The id of the existing EksNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EksNodeGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_node_group aws_eks_node_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksNodeGroupConfig
    */
    constructor(scope: Construct, id: string, config: EksNodeGroupConfig);
    private _amiType?;
    get amiType(): string;
    set amiType(value: string);
    resetAmiType(): void;
    get amiTypeInput(): string | undefined;
    get arn(): string;
    private _capacityType?;
    get capacityType(): string;
    set capacityType(value: string);
    resetCapacityType(): void;
    get capacityTypeInput(): string | undefined;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    private _diskSize?;
    get diskSize(): number;
    set diskSize(value: number);
    resetDiskSize(): void;
    get diskSizeInput(): number | undefined;
    private _forceUpdateVersion?;
    get forceUpdateVersion(): boolean | cdktf.IResolvable;
    set forceUpdateVersion(value: boolean | cdktf.IResolvable);
    resetForceUpdateVersion(): void;
    get forceUpdateVersionInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceTypes?;
    get instanceTypes(): string[];
    set instanceTypes(value: string[]);
    resetInstanceTypes(): void;
    get instanceTypesInput(): string[] | undefined;
    private _labels?;
    get labels(): {
        [key: string]: string;
    };
    set labels(value: {
        [key: string]: string;
    });
    resetLabels(): void;
    get labelsInput(): {
        [key: string]: string;
    } | undefined;
    private _nodeGroupName?;
    get nodeGroupName(): string;
    set nodeGroupName(value: string);
    resetNodeGroupName(): void;
    get nodeGroupNameInput(): string | undefined;
    private _nodeGroupNamePrefix?;
    get nodeGroupNamePrefix(): string;
    set nodeGroupNamePrefix(value: string);
    resetNodeGroupNamePrefix(): void;
    get nodeGroupNamePrefixInput(): string | undefined;
    private _nodeRoleArn?;
    get nodeRoleArn(): string;
    set nodeRoleArn(value: string);
    get nodeRoleArnInput(): string | undefined;
    private _releaseVersion?;
    get releaseVersion(): string;
    set releaseVersion(value: string);
    resetReleaseVersion(): void;
    get releaseVersionInput(): string | undefined;
    private _resources;
    get resources(): EksNodeGroupResourcesList;
    get status(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
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
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _launchTemplate;
    get launchTemplate(): EksNodeGroupLaunchTemplateOutputReference;
    putLaunchTemplate(value: EksNodeGroupLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): EksNodeGroupLaunchTemplate | undefined;
    private _nodeRepairConfig;
    get nodeRepairConfig(): EksNodeGroupNodeRepairConfigOutputReference;
    putNodeRepairConfig(value: EksNodeGroupNodeRepairConfig): void;
    resetNodeRepairConfig(): void;
    get nodeRepairConfigInput(): EksNodeGroupNodeRepairConfig | undefined;
    private _remoteAccess;
    get remoteAccess(): EksNodeGroupRemoteAccessOutputReference;
    putRemoteAccess(value: EksNodeGroupRemoteAccess): void;
    resetRemoteAccess(): void;
    get remoteAccessInput(): EksNodeGroupRemoteAccess | undefined;
    private _scalingConfig;
    get scalingConfig(): EksNodeGroupScalingConfigOutputReference;
    putScalingConfig(value: EksNodeGroupScalingConfig): void;
    get scalingConfigInput(): EksNodeGroupScalingConfig | undefined;
    private _taint;
    get taint(): EksNodeGroupTaintList;
    putTaint(value: EksNodeGroupTaint[] | cdktf.IResolvable): void;
    resetTaint(): void;
    get taintInput(): cdktf.IResolvable | EksNodeGroupTaint[] | undefined;
    private _timeouts;
    get timeouts(): EksNodeGroupTimeoutsOutputReference;
    putTimeouts(value: EksNodeGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EksNodeGroupTimeouts | undefined;
    private _updateConfig;
    get updateConfig(): EksNodeGroupUpdateConfigOutputReference;
    putUpdateConfig(value: EksNodeGroupUpdateConfig): void;
    resetUpdateConfig(): void;
    get updateConfigInput(): EksNodeGroupUpdateConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
