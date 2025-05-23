/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEksNodeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_node_group#cluster_name DataAwsEksNodeGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_node_group#id DataAwsEksNodeGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_node_group#node_group_name DataAwsEksNodeGroup#node_group_name}
    */
    readonly nodeGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_node_group#tags DataAwsEksNodeGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsEksNodeGroupLaunchTemplate {
}
export declare function dataAwsEksNodeGroupLaunchTemplateToTerraform(struct?: DataAwsEksNodeGroupLaunchTemplate): any;
export declare function dataAwsEksNodeGroupLaunchTemplateToHclTerraform(struct?: DataAwsEksNodeGroupLaunchTemplate): any;
export declare class DataAwsEksNodeGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksNodeGroupLaunchTemplate | undefined;
    set internalValue(value: DataAwsEksNodeGroupLaunchTemplate | undefined);
    get id(): string;
    get name(): string;
    get version(): string;
}
export declare class DataAwsEksNodeGroupLaunchTemplateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksNodeGroupLaunchTemplateOutputReference;
}
export interface DataAwsEksNodeGroupRemoteAccess {
}
export declare function dataAwsEksNodeGroupRemoteAccessToTerraform(struct?: DataAwsEksNodeGroupRemoteAccess): any;
export declare function dataAwsEksNodeGroupRemoteAccessToHclTerraform(struct?: DataAwsEksNodeGroupRemoteAccess): any;
export declare class DataAwsEksNodeGroupRemoteAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksNodeGroupRemoteAccess | undefined;
    set internalValue(value: DataAwsEksNodeGroupRemoteAccess | undefined);
    get ec2SshKey(): string;
    get sourceSecurityGroupIds(): string[];
}
export declare class DataAwsEksNodeGroupRemoteAccessList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksNodeGroupRemoteAccessOutputReference;
}
export interface DataAwsEksNodeGroupResourcesAutoscalingGroups {
}
export declare function dataAwsEksNodeGroupResourcesAutoscalingGroupsToTerraform(struct?: DataAwsEksNodeGroupResourcesAutoscalingGroups): any;
export declare function dataAwsEksNodeGroupResourcesAutoscalingGroupsToHclTerraform(struct?: DataAwsEksNodeGroupResourcesAutoscalingGroups): any;
export declare class DataAwsEksNodeGroupResourcesAutoscalingGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksNodeGroupResourcesAutoscalingGroups | undefined;
    set internalValue(value: DataAwsEksNodeGroupResourcesAutoscalingGroups | undefined);
    get name(): string;
}
export declare class DataAwsEksNodeGroupResourcesAutoscalingGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksNodeGroupResourcesAutoscalingGroupsOutputReference;
}
export interface DataAwsEksNodeGroupResources {
}
export declare function dataAwsEksNodeGroupResourcesToTerraform(struct?: DataAwsEksNodeGroupResources): any;
export declare function dataAwsEksNodeGroupResourcesToHclTerraform(struct?: DataAwsEksNodeGroupResources): any;
export declare class DataAwsEksNodeGroupResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksNodeGroupResources | undefined;
    set internalValue(value: DataAwsEksNodeGroupResources | undefined);
    private _autoscalingGroups;
    get autoscalingGroups(): DataAwsEksNodeGroupResourcesAutoscalingGroupsList;
    get remoteAccessSecurityGroupId(): string;
}
export declare class DataAwsEksNodeGroupResourcesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksNodeGroupResourcesOutputReference;
}
export interface DataAwsEksNodeGroupScalingConfig {
}
export declare function dataAwsEksNodeGroupScalingConfigToTerraform(struct?: DataAwsEksNodeGroupScalingConfig): any;
export declare function dataAwsEksNodeGroupScalingConfigToHclTerraform(struct?: DataAwsEksNodeGroupScalingConfig): any;
export declare class DataAwsEksNodeGroupScalingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksNodeGroupScalingConfig | undefined;
    set internalValue(value: DataAwsEksNodeGroupScalingConfig | undefined);
    get desiredSize(): number;
    get maxSize(): number;
    get minSize(): number;
}
export declare class DataAwsEksNodeGroupScalingConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksNodeGroupScalingConfigOutputReference;
}
export interface DataAwsEksNodeGroupTaints {
}
export declare function dataAwsEksNodeGroupTaintsToTerraform(struct?: DataAwsEksNodeGroupTaints): any;
export declare function dataAwsEksNodeGroupTaintsToHclTerraform(struct?: DataAwsEksNodeGroupTaints): any;
export declare class DataAwsEksNodeGroupTaintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksNodeGroupTaints | undefined;
    set internalValue(value: DataAwsEksNodeGroupTaints | undefined);
    get effect(): string;
    get key(): string;
    get value(): string;
}
export declare class DataAwsEksNodeGroupTaintsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksNodeGroupTaintsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_node_group aws_eks_node_group}
*/
export declare class DataAwsEksNodeGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_eks_node_group";
    /**
    * Generates CDKTF code for importing a DataAwsEksNodeGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEksNodeGroup to import
    * @param importFromId The id of the existing DataAwsEksNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_node_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEksNodeGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eks_node_group aws_eks_node_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksNodeGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEksNodeGroupConfig);
    get amiType(): string;
    get arn(): string;
    get capacityType(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    get diskSize(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get instanceTypes(): string[];
    private _labels;
    get labels(): cdktf.StringMap;
    private _launchTemplate;
    get launchTemplate(): DataAwsEksNodeGroupLaunchTemplateList;
    private _nodeGroupName?;
    get nodeGroupName(): string;
    set nodeGroupName(value: string);
    get nodeGroupNameInput(): string | undefined;
    get nodeRoleArn(): string;
    get releaseVersion(): string;
    private _remoteAccess;
    get remoteAccess(): DataAwsEksNodeGroupRemoteAccessList;
    private _resources;
    get resources(): DataAwsEksNodeGroupResourcesList;
    private _scalingConfig;
    get scalingConfig(): DataAwsEksNodeGroupScalingConfigList;
    get status(): string;
    get subnetIds(): string[];
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
    private _taints;
    get taints(): DataAwsEksNodeGroupTaintsList;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
