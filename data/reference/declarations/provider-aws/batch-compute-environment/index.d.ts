/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}
    */
    readonly computeEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#compute_environment_name_prefix BatchComputeEnvironment#compute_environment_name_prefix}
    */
    readonly computeEnvironmentNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#id BatchComputeEnvironment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}
    */
    readonly serviceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#tags_all BatchComputeEnvironment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}
    */
    readonly type: string;
    /**
    * compute_resources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}
    */
    readonly computeResources?: BatchComputeEnvironmentComputeResources;
    /**
    * eks_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}
    */
    readonly eksConfiguration?: BatchComputeEnvironmentEksConfiguration;
    /**
    * update_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}
    */
    readonly updatePolicy?: BatchComputeEnvironmentUpdatePolicy;
}
export interface BatchComputeEnvironmentComputeResourcesEc2Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}
    */
    readonly imageIdOverride?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}
    */
    readonly imageType?: string;
}
export declare function batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct?: BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktf.IResolvable): any;
export declare function batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktf.IResolvable): any;
export declare class BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktf.IResolvable | undefined;
    set internalValue(value: BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktf.IResolvable | undefined);
    private _imageIdOverride?;
    get imageIdOverride(): string;
    set imageIdOverride(value: string);
    resetImageIdOverride(): void;
    get imageIdOverrideInput(): string | undefined;
    private _imageType?;
    get imageType(): string;
    set imageType(value: string);
    resetImageType(): void;
    get imageTypeInput(): string | undefined;
}
export declare class BatchComputeEnvironmentComputeResourcesEc2ConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchComputeEnvironmentComputeResourcesEc2Configuration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference;
}
export interface BatchComputeEnvironmentComputeResourcesLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}
    */
    readonly version?: string;
}
export declare function batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference | BatchComputeEnvironmentComputeResourcesLaunchTemplate): any;
export declare function batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference | BatchComputeEnvironmentComputeResourcesLaunchTemplate): any;
export declare class BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined;
    set internalValue(value: BatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined);
    private _launchTemplateId?;
    get launchTemplateId(): string;
    set launchTemplateId(value: string);
    resetLaunchTemplateId(): void;
    get launchTemplateIdInput(): string | undefined;
    private _launchTemplateName?;
    get launchTemplateName(): string;
    set launchTemplateName(value: string);
    resetLaunchTemplateName(): void;
    get launchTemplateNameInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface BatchComputeEnvironmentComputeResources {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}
    */
    readonly bidPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#desired_vcpus BatchComputeEnvironment#desired_vcpus}
    */
    readonly desiredVcpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#ec2_key_pair BatchComputeEnvironment#ec2_key_pair}
    */
    readonly ec2KeyPair?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}
    */
    readonly instanceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#instance_type BatchComputeEnvironment#instance_type}
    */
    readonly instanceType?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#max_vcpus BatchComputeEnvironment#max_vcpus}
    */
    readonly maxVcpus: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#min_vcpus BatchComputeEnvironment#min_vcpus}
    */
    readonly minVcpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}
    */
    readonly spotIamFleetRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}
    */
    readonly subnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}
    */
    readonly type: string;
    /**
    * ec2_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#ec2_configuration BatchComputeEnvironment#ec2_configuration}
    */
    readonly ec2Configuration?: BatchComputeEnvironmentComputeResourcesEc2Configuration[] | cdktf.IResolvable;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}
    */
    readonly launchTemplate?: BatchComputeEnvironmentComputeResourcesLaunchTemplate;
}
export declare function batchComputeEnvironmentComputeResourcesToTerraform(struct?: BatchComputeEnvironmentComputeResourcesOutputReference | BatchComputeEnvironmentComputeResources): any;
export declare function batchComputeEnvironmentComputeResourcesToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesOutputReference | BatchComputeEnvironmentComputeResources): any;
export declare class BatchComputeEnvironmentComputeResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchComputeEnvironmentComputeResources | undefined;
    set internalValue(value: BatchComputeEnvironmentComputeResources | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string | undefined;
    private _bidPercentage?;
    get bidPercentage(): number;
    set bidPercentage(value: number);
    resetBidPercentage(): void;
    get bidPercentageInput(): number | undefined;
    private _desiredVcpus?;
    get desiredVcpus(): number;
    set desiredVcpus(value: number);
    resetDesiredVcpus(): void;
    get desiredVcpusInput(): number | undefined;
    private _ec2KeyPair?;
    get ec2KeyPair(): string;
    set ec2KeyPair(value: string);
    resetEc2KeyPair(): void;
    get ec2KeyPairInput(): string | undefined;
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    resetImageId(): void;
    get imageIdInput(): string | undefined;
    private _instanceRole?;
    get instanceRole(): string;
    set instanceRole(value: string);
    resetInstanceRole(): void;
    get instanceRoleInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string[];
    set instanceType(value: string[]);
    resetInstanceType(): void;
    get instanceTypeInput(): string[] | undefined;
    private _maxVcpus?;
    get maxVcpus(): number;
    set maxVcpus(value: number);
    get maxVcpusInput(): number | undefined;
    private _minVcpus?;
    get minVcpus(): number;
    set minVcpus(value: number);
    resetMinVcpus(): void;
    get minVcpusInput(): number | undefined;
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _spotIamFleetRole?;
    get spotIamFleetRole(): string;
    set spotIamFleetRole(value: string);
    resetSpotIamFleetRole(): void;
    get spotIamFleetRoleInput(): string | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _ec2Configuration;
    get ec2Configuration(): BatchComputeEnvironmentComputeResourcesEc2ConfigurationList;
    putEc2Configuration(value: BatchComputeEnvironmentComputeResourcesEc2Configuration[] | cdktf.IResolvable): void;
    resetEc2Configuration(): void;
    get ec2ConfigurationInput(): cdktf.IResolvable | BatchComputeEnvironmentComputeResourcesEc2Configuration[] | undefined;
    private _launchTemplate;
    get launchTemplate(): BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference;
    putLaunchTemplate(value: BatchComputeEnvironmentComputeResourcesLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): BatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined;
}
export interface BatchComputeEnvironmentEksConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}
    */
    readonly eksClusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}
    */
    readonly kubernetesNamespace: string;
}
export declare function batchComputeEnvironmentEksConfigurationToTerraform(struct?: BatchComputeEnvironmentEksConfigurationOutputReference | BatchComputeEnvironmentEksConfiguration): any;
export declare function batchComputeEnvironmentEksConfigurationToHclTerraform(struct?: BatchComputeEnvironmentEksConfigurationOutputReference | BatchComputeEnvironmentEksConfiguration): any;
export declare class BatchComputeEnvironmentEksConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchComputeEnvironmentEksConfiguration | undefined;
    set internalValue(value: BatchComputeEnvironmentEksConfiguration | undefined);
    private _eksClusterArn?;
    get eksClusterArn(): string;
    set eksClusterArn(value: string);
    get eksClusterArnInput(): string | undefined;
    private _kubernetesNamespace?;
    get kubernetesNamespace(): string;
    set kubernetesNamespace(value: string);
    get kubernetesNamespaceInput(): string | undefined;
}
export interface BatchComputeEnvironmentUpdatePolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}
    */
    readonly jobExecutionTimeoutMinutes: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}
    */
    readonly terminateJobsOnUpdate: boolean | cdktf.IResolvable;
}
export declare function batchComputeEnvironmentUpdatePolicyToTerraform(struct?: BatchComputeEnvironmentUpdatePolicyOutputReference | BatchComputeEnvironmentUpdatePolicy): any;
export declare function batchComputeEnvironmentUpdatePolicyToHclTerraform(struct?: BatchComputeEnvironmentUpdatePolicyOutputReference | BatchComputeEnvironmentUpdatePolicy): any;
export declare class BatchComputeEnvironmentUpdatePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchComputeEnvironmentUpdatePolicy | undefined;
    set internalValue(value: BatchComputeEnvironmentUpdatePolicy | undefined);
    private _jobExecutionTimeoutMinutes?;
    get jobExecutionTimeoutMinutes(): number;
    set jobExecutionTimeoutMinutes(value: number);
    get jobExecutionTimeoutMinutesInput(): number | undefined;
    private _terminateJobsOnUpdate?;
    get terminateJobsOnUpdate(): boolean | cdktf.IResolvable;
    set terminateJobsOnUpdate(value: boolean | cdktf.IResolvable);
    get terminateJobsOnUpdateInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment aws_batch_compute_environment}
*/
export declare class BatchComputeEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_batch_compute_environment";
    /**
    * Generates CDKTF code for importing a BatchComputeEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BatchComputeEnvironment to import
    * @param importFromId The id of the existing BatchComputeEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BatchComputeEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_compute_environment aws_batch_compute_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchComputeEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: BatchComputeEnvironmentConfig);
    get arn(): string;
    private _computeEnvironmentName?;
    get computeEnvironmentName(): string;
    set computeEnvironmentName(value: string);
    resetComputeEnvironmentName(): void;
    get computeEnvironmentNameInput(): string | undefined;
    private _computeEnvironmentNamePrefix?;
    get computeEnvironmentNamePrefix(): string;
    set computeEnvironmentNamePrefix(value: string);
    resetComputeEnvironmentNamePrefix(): void;
    get computeEnvironmentNamePrefixInput(): string | undefined;
    get ecsClusterArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    resetServiceRole(): void;
    get serviceRoleInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    get status(): string;
    get statusReason(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _computeResources;
    get computeResources(): BatchComputeEnvironmentComputeResourcesOutputReference;
    putComputeResources(value: BatchComputeEnvironmentComputeResources): void;
    resetComputeResources(): void;
    get computeResourcesInput(): BatchComputeEnvironmentComputeResources | undefined;
    private _eksConfiguration;
    get eksConfiguration(): BatchComputeEnvironmentEksConfigurationOutputReference;
    putEksConfiguration(value: BatchComputeEnvironmentEksConfiguration): void;
    resetEksConfiguration(): void;
    get eksConfigurationInput(): BatchComputeEnvironmentEksConfiguration | undefined;
    private _updatePolicy;
    get updatePolicy(): BatchComputeEnvironmentUpdatePolicyOutputReference;
    putUpdatePolicy(value: BatchComputeEnvironmentUpdatePolicy): void;
    resetUpdatePolicy(): void;
    get updatePolicyInput(): BatchComputeEnvironmentUpdatePolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
