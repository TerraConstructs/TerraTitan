/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#additional_info EmrCluster#additional_info}
    */
    readonly additionalInfo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#applications EmrCluster#applications}
    */
    readonly applications?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}
    */
    readonly autoscalingRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#configurations EmrCluster#configurations}
    */
    readonly configurations?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#configurations_json EmrCluster#configurations_json}
    */
    readonly configurationsJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}
    */
    readonly customAmiId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}
    */
    readonly ebsRootVolumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#id EmrCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}
    */
    readonly keepJobFlowAliveWhenNoSteps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#list_steps_states EmrCluster#list_steps_states}
    */
    readonly listStepsStates?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}
    */
    readonly logEncryptionKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#log_uri EmrCluster#log_uri}
    */
    readonly logUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#name EmrCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#placement_group_config EmrCluster#placement_group_config}
    */
    readonly placementGroupConfig?: EmrClusterPlacementGroupConfig[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#release_label EmrCluster#release_label}
    */
    readonly releaseLabel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}
    */
    readonly scaleDownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#security_configuration EmrCluster#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#service_role EmrCluster#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#step EmrCluster#step}
    */
    readonly step?: EmrClusterStep[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}
    */
    readonly stepConcurrencyLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#tags EmrCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#tags_all EmrCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#termination_protection EmrCluster#termination_protection}
    */
    readonly terminationProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#unhealthy_node_replacement EmrCluster#unhealthy_node_replacement}
    */
    readonly unhealthyNodeReplacement?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}
    */
    readonly visibleToAllUsers?: boolean | cdktf.IResolvable;
    /**
    * auto_termination_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#auto_termination_policy EmrCluster#auto_termination_policy}
    */
    readonly autoTerminationPolicy?: EmrClusterAutoTerminationPolicy;
    /**
    * bootstrap_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#bootstrap_action EmrCluster#bootstrap_action}
    */
    readonly bootstrapAction?: EmrClusterBootstrapAction[] | cdktf.IResolvable;
    /**
    * core_instance_fleet block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#core_instance_fleet EmrCluster#core_instance_fleet}
    */
    readonly coreInstanceFleet?: EmrClusterCoreInstanceFleet;
    /**
    * core_instance_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#core_instance_group EmrCluster#core_instance_group}
    */
    readonly coreInstanceGroup?: EmrClusterCoreInstanceGroup;
    /**
    * ec2_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#ec2_attributes EmrCluster#ec2_attributes}
    */
    readonly ec2Attributes?: EmrClusterEc2Attributes;
    /**
    * kerberos_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#kerberos_attributes EmrCluster#kerberos_attributes}
    */
    readonly kerberosAttributes?: EmrClusterKerberosAttributes;
    /**
    * master_instance_fleet block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#master_instance_fleet EmrCluster#master_instance_fleet}
    */
    readonly masterInstanceFleet?: EmrClusterMasterInstanceFleet;
    /**
    * master_instance_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#master_instance_group EmrCluster#master_instance_group}
    */
    readonly masterInstanceGroup?: EmrClusterMasterInstanceGroup;
}
export interface EmrClusterPlacementGroupConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_role EmrCluster#instance_role}
    */
    readonly instanceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#placement_strategy EmrCluster#placement_strategy}
    */
    readonly placementStrategy?: string;
}
export declare function emrClusterPlacementGroupConfigToTerraform(struct?: EmrClusterPlacementGroupConfig | cdktf.IResolvable): any;
export declare function emrClusterPlacementGroupConfigToHclTerraform(struct?: EmrClusterPlacementGroupConfig | cdktf.IResolvable): any;
export declare class EmrClusterPlacementGroupConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterPlacementGroupConfig | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterPlacementGroupConfig | cdktf.IResolvable | undefined);
    private _instanceRole?;
    get instanceRole(): string;
    set instanceRole(value: string);
    resetInstanceRole(): void;
    get instanceRoleInput(): string | undefined;
    private _placementStrategy?;
    get placementStrategy(): string;
    set placementStrategy(value: string);
    resetPlacementStrategy(): void;
    get placementStrategyInput(): string | undefined;
}
export declare class EmrClusterPlacementGroupConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterPlacementGroupConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterPlacementGroupConfigOutputReference;
}
export interface EmrClusterStepHadoopJarStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#args EmrCluster#args}
    */
    readonly args?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#jar EmrCluster#jar}
    */
    readonly jar?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#main_class EmrCluster#main_class}
    */
    readonly mainClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#properties EmrCluster#properties}
    */
    readonly properties?: {
        [key: string]: string;
    };
}
export declare function emrClusterStepHadoopJarStepToTerraform(struct?: EmrClusterStepHadoopJarStep | cdktf.IResolvable): any;
export declare function emrClusterStepHadoopJarStepToHclTerraform(struct?: EmrClusterStepHadoopJarStep | cdktf.IResolvable): any;
export declare class EmrClusterStepHadoopJarStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterStepHadoopJarStep | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterStepHadoopJarStep | cdktf.IResolvable | undefined);
    private _args?;
    get args(): string[];
    set args(value: string[]);
    resetArgs(): void;
    get argsInput(): string[] | undefined;
    private _jar?;
    get jar(): string;
    set jar(value: string);
    resetJar(): void;
    get jarInput(): string | undefined;
    private _mainClass?;
    get mainClass(): string;
    set mainClass(value: string);
    resetMainClass(): void;
    get mainClassInput(): string | undefined;
    private _properties?;
    get properties(): {
        [key: string]: string;
    };
    set properties(value: {
        [key: string]: string;
    });
    resetProperties(): void;
    get propertiesInput(): {
        [key: string]: string;
    } | undefined;
}
export declare class EmrClusterStepHadoopJarStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterStepHadoopJarStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterStepHadoopJarStepOutputReference;
}
export interface EmrClusterStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#action_on_failure EmrCluster#action_on_failure}
    */
    readonly actionOnFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}
    */
    readonly hadoopJarStep?: EmrClusterStepHadoopJarStep[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#name EmrCluster#name}
    */
    readonly name?: string;
}
export declare function emrClusterStepToTerraform(struct?: EmrClusterStep | cdktf.IResolvable): any;
export declare function emrClusterStepToHclTerraform(struct?: EmrClusterStep | cdktf.IResolvable): any;
export declare class EmrClusterStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterStep | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterStep | cdktf.IResolvable | undefined);
    private _actionOnFailure?;
    get actionOnFailure(): string;
    set actionOnFailure(value: string);
    resetActionOnFailure(): void;
    get actionOnFailureInput(): string | undefined;
    private _hadoopJarStep;
    get hadoopJarStep(): EmrClusterStepHadoopJarStepList;
    putHadoopJarStep(value: EmrClusterStepHadoopJarStep[] | cdktf.IResolvable): void;
    resetHadoopJarStep(): void;
    get hadoopJarStepInput(): cdktf.IResolvable | EmrClusterStepHadoopJarStep[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
}
export declare class EmrClusterStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterStepOutputReference;
}
export interface EmrClusterAutoTerminationPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#idle_timeout EmrCluster#idle_timeout}
    */
    readonly idleTimeout?: number;
}
export declare function emrClusterAutoTerminationPolicyToTerraform(struct?: EmrClusterAutoTerminationPolicyOutputReference | EmrClusterAutoTerminationPolicy): any;
export declare function emrClusterAutoTerminationPolicyToHclTerraform(struct?: EmrClusterAutoTerminationPolicyOutputReference | EmrClusterAutoTerminationPolicy): any;
export declare class EmrClusterAutoTerminationPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrClusterAutoTerminationPolicy | undefined;
    set internalValue(value: EmrClusterAutoTerminationPolicy | undefined);
    private _idleTimeout?;
    get idleTimeout(): number;
    set idleTimeout(value: number);
    resetIdleTimeout(): void;
    get idleTimeoutInput(): number | undefined;
}
export interface EmrClusterBootstrapAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#args EmrCluster#args}
    */
    readonly args?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#name EmrCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#path EmrCluster#path}
    */
    readonly path: string;
}
export declare function emrClusterBootstrapActionToTerraform(struct?: EmrClusterBootstrapAction | cdktf.IResolvable): any;
export declare function emrClusterBootstrapActionToHclTerraform(struct?: EmrClusterBootstrapAction | cdktf.IResolvable): any;
export declare class EmrClusterBootstrapActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterBootstrapAction | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterBootstrapAction | cdktf.IResolvable | undefined);
    private _args?;
    get args(): string[];
    set args(value: string[]);
    resetArgs(): void;
    get argsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
}
export declare class EmrClusterBootstrapActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterBootstrapAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterBootstrapActionOutputReference;
}
export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#classification EmrCluster#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#properties EmrCluster#properties}
    */
    readonly properties?: {
        [key: string]: string;
    };
}
export declare function emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable): any;
export declare function emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToHclTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable): any;
export declare class EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable | undefined);
    private _classification?;
    get classification(): string;
    set classification(value: string);
    resetClassification(): void;
    get classificationInput(): string | undefined;
    private _properties?;
    get properties(): {
        [key: string]: string;
    };
    set properties(value: {
        [key: string]: string;
    });
    resetProperties(): void;
    get propertiesInput(): {
        [key: string]: string;
    } | undefined;
}
export declare class EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference;
}
export interface EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable): any;
export declare function emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToHclTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable): any;
export declare class EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable | undefined);
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _volumesPerInstance?;
    get volumesPerInstance(): number;
    set volumesPerInstance(value: number);
    resetVolumesPerInstance(): void;
    get volumesPerInstanceInput(): number | undefined;
}
export declare class EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference;
}
export interface EmrClusterCoreInstanceFleetInstanceTypeConfigs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}
    */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#configurations EmrCluster#configurations}
    */
    readonly configurations?: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable;
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable;
}
export declare function emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigs | cdktf.IResolvable): any;
export declare function emrClusterCoreInstanceFleetInstanceTypeConfigsToHclTerraform(struct?: EmrClusterCoreInstanceFleetInstanceTypeConfigs | cdktf.IResolvable): any;
export declare class EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterCoreInstanceFleetInstanceTypeConfigs | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterCoreInstanceFleetInstanceTypeConfigs | cdktf.IResolvable | undefined);
    private _bidPrice?;
    get bidPrice(): string;
    set bidPrice(value: string);
    resetBidPrice(): void;
    get bidPriceInput(): string | undefined;
    private _bidPriceAsPercentageOfOnDemandPrice?;
    get bidPriceAsPercentageOfOnDemandPrice(): number;
    set bidPriceAsPercentageOfOnDemandPrice(value: number);
    resetBidPriceAsPercentageOfOnDemandPrice(): void;
    get bidPriceAsPercentageOfOnDemandPriceInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): number;
    set weightedCapacity(value: number);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): number | undefined;
    private _configurations;
    get configurations(): EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList;
    putConfigurations(value: EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable): void;
    resetConfigurations(): void;
    get configurationsInput(): cdktf.IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations[] | undefined;
    private _ebsConfig;
    get ebsConfig(): EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList;
    putEbsConfig(value: EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable): void;
    resetEbsConfig(): void;
    get ebsConfigInput(): cdktf.IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig[] | undefined;
}
export declare class EmrClusterCoreInstanceFleetInstanceTypeConfigsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterCoreInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference;
}
export interface EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
}
export declare function emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable): any;
export declare function emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToHclTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable): any;
export declare class EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    get allocationStrategyInput(): string | undefined;
}
export declare class EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference;
}
export interface EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#timeout_action EmrCluster#timeout_action}
    */
    readonly timeoutAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}
    */
    readonly timeoutDurationMinutes: number;
}
export declare function emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable): any;
export declare function emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToHclTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable): any;
export declare class EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    get allocationStrategyInput(): string | undefined;
    private _blockDurationMinutes?;
    get blockDurationMinutes(): number;
    set blockDurationMinutes(value: number);
    resetBlockDurationMinutes(): void;
    get blockDurationMinutesInput(): number | undefined;
    private _timeoutAction?;
    get timeoutAction(): string;
    set timeoutAction(value: string);
    get timeoutActionInput(): string | undefined;
    private _timeoutDurationMinutes?;
    get timeoutDurationMinutes(): number;
    set timeoutDurationMinutes(value: number);
    get timeoutDurationMinutesInput(): number | undefined;
}
export declare class EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference;
}
export interface EmrClusterCoreInstanceFleetLaunchSpecifications {
    /**
    * on_demand_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}
    */
    readonly onDemandSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable;
    /**
    * spot_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#spot_specification EmrCluster#spot_specification}
    */
    readonly spotSpecification?: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable;
}
export declare function emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference | EmrClusterCoreInstanceFleetLaunchSpecifications): any;
export declare function emrClusterCoreInstanceFleetLaunchSpecificationsToHclTerraform(struct?: EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference | EmrClusterCoreInstanceFleetLaunchSpecifications): any;
export declare class EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrClusterCoreInstanceFleetLaunchSpecifications | undefined;
    set internalValue(value: EmrClusterCoreInstanceFleetLaunchSpecifications | undefined);
    private _onDemandSpecification;
    get onDemandSpecification(): EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList;
    putOnDemandSpecification(value: EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable): void;
    resetOnDemandSpecification(): void;
    get onDemandSpecificationInput(): cdktf.IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification[] | undefined;
    private _spotSpecification;
    get spotSpecification(): EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList;
    putSpotSpecification(value: EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable): void;
    resetSpotSpecification(): void;
    get spotSpecificationInput(): cdktf.IResolvable | EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification[] | undefined;
}
export interface EmrClusterCoreInstanceFleet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}
    */
    readonly targetOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}
    */
    readonly targetSpotCapacity?: number;
    /**
    * instance_type_configs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}
    */
    readonly instanceTypeConfigs?: EmrClusterCoreInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable;
    /**
    * launch_specifications block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#launch_specifications EmrCluster#launch_specifications}
    */
    readonly launchSpecifications?: EmrClusterCoreInstanceFleetLaunchSpecifications;
}
export declare function emrClusterCoreInstanceFleetToTerraform(struct?: EmrClusterCoreInstanceFleetOutputReference | EmrClusterCoreInstanceFleet): any;
export declare function emrClusterCoreInstanceFleetToHclTerraform(struct?: EmrClusterCoreInstanceFleetOutputReference | EmrClusterCoreInstanceFleet): any;
export declare class EmrClusterCoreInstanceFleetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrClusterCoreInstanceFleet | undefined;
    set internalValue(value: EmrClusterCoreInstanceFleet | undefined);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get provisionedOnDemandCapacity(): number;
    get provisionedSpotCapacity(): number;
    private _targetOnDemandCapacity?;
    get targetOnDemandCapacity(): number;
    set targetOnDemandCapacity(value: number);
    resetTargetOnDemandCapacity(): void;
    get targetOnDemandCapacityInput(): number | undefined;
    private _targetSpotCapacity?;
    get targetSpotCapacity(): number;
    set targetSpotCapacity(value: number);
    resetTargetSpotCapacity(): void;
    get targetSpotCapacityInput(): number | undefined;
    private _instanceTypeConfigs;
    get instanceTypeConfigs(): EmrClusterCoreInstanceFleetInstanceTypeConfigsList;
    putInstanceTypeConfigs(value: EmrClusterCoreInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable): void;
    resetInstanceTypeConfigs(): void;
    get instanceTypeConfigsInput(): cdktf.IResolvable | EmrClusterCoreInstanceFleetInstanceTypeConfigs[] | undefined;
    private _launchSpecifications;
    get launchSpecifications(): EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference;
    putLaunchSpecifications(value: EmrClusterCoreInstanceFleetLaunchSpecifications): void;
    resetLaunchSpecifications(): void;
    get launchSpecificationsInput(): EmrClusterCoreInstanceFleetLaunchSpecifications | undefined;
}
export interface EmrClusterCoreInstanceGroupEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#throughput EmrCluster#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrClusterCoreInstanceGroupEbsConfigToTerraform(struct?: EmrClusterCoreInstanceGroupEbsConfig | cdktf.IResolvable): any;
export declare function emrClusterCoreInstanceGroupEbsConfigToHclTerraform(struct?: EmrClusterCoreInstanceGroupEbsConfig | cdktf.IResolvable): any;
export declare class EmrClusterCoreInstanceGroupEbsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterCoreInstanceGroupEbsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterCoreInstanceGroupEbsConfig | cdktf.IResolvable | undefined);
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _volumesPerInstance?;
    get volumesPerInstance(): number;
    set volumesPerInstance(value: number);
    resetVolumesPerInstance(): void;
    get volumesPerInstanceInput(): number | undefined;
}
export declare class EmrClusterCoreInstanceGroupEbsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterCoreInstanceGroupEbsConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterCoreInstanceGroupEbsConfigOutputReference;
}
export interface EmrClusterCoreInstanceGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}
    */
    readonly autoscalingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_count EmrCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterCoreInstanceGroupEbsConfig[] | cdktf.IResolvable;
}
export declare function emrClusterCoreInstanceGroupToTerraform(struct?: EmrClusterCoreInstanceGroupOutputReference | EmrClusterCoreInstanceGroup): any;
export declare function emrClusterCoreInstanceGroupToHclTerraform(struct?: EmrClusterCoreInstanceGroupOutputReference | EmrClusterCoreInstanceGroup): any;
export declare class EmrClusterCoreInstanceGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrClusterCoreInstanceGroup | undefined;
    set internalValue(value: EmrClusterCoreInstanceGroup | undefined);
    private _autoscalingPolicy?;
    get autoscalingPolicy(): string;
    set autoscalingPolicy(value: string);
    resetAutoscalingPolicy(): void;
    get autoscalingPolicyInput(): string | undefined;
    private _bidPrice?;
    get bidPrice(): string;
    set bidPrice(value: string);
    resetBidPrice(): void;
    get bidPriceInput(): string | undefined;
    get id(): string;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _ebsConfig;
    get ebsConfig(): EmrClusterCoreInstanceGroupEbsConfigList;
    putEbsConfig(value: EmrClusterCoreInstanceGroupEbsConfig[] | cdktf.IResolvable): void;
    resetEbsConfig(): void;
    get ebsConfigInput(): cdktf.IResolvable | EmrClusterCoreInstanceGroupEbsConfig[] | undefined;
}
export interface EmrClusterEc2Attributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}
    */
    readonly additionalMasterSecurityGroups?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}
    */
    readonly additionalSlaveSecurityGroups?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}
    */
    readonly emrManagedMasterSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}
    */
    readonly emrManagedSlaveSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_profile EmrCluster#instance_profile}
    */
    readonly instanceProfile: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#key_name EmrCluster#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}
    */
    readonly serviceAccessSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#subnet_id EmrCluster#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#subnet_ids EmrCluster#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function emrClusterEc2AttributesToTerraform(struct?: EmrClusterEc2AttributesOutputReference | EmrClusterEc2Attributes): any;
export declare function emrClusterEc2AttributesToHclTerraform(struct?: EmrClusterEc2AttributesOutputReference | EmrClusterEc2Attributes): any;
export declare class EmrClusterEc2AttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrClusterEc2Attributes | undefined;
    set internalValue(value: EmrClusterEc2Attributes | undefined);
    private _additionalMasterSecurityGroups?;
    get additionalMasterSecurityGroups(): string;
    set additionalMasterSecurityGroups(value: string);
    resetAdditionalMasterSecurityGroups(): void;
    get additionalMasterSecurityGroupsInput(): string | undefined;
    private _additionalSlaveSecurityGroups?;
    get additionalSlaveSecurityGroups(): string;
    set additionalSlaveSecurityGroups(value: string);
    resetAdditionalSlaveSecurityGroups(): void;
    get additionalSlaveSecurityGroupsInput(): string | undefined;
    private _emrManagedMasterSecurityGroup?;
    get emrManagedMasterSecurityGroup(): string;
    set emrManagedMasterSecurityGroup(value: string);
    resetEmrManagedMasterSecurityGroup(): void;
    get emrManagedMasterSecurityGroupInput(): string | undefined;
    private _emrManagedSlaveSecurityGroup?;
    get emrManagedSlaveSecurityGroup(): string;
    set emrManagedSlaveSecurityGroup(value: string);
    resetEmrManagedSlaveSecurityGroup(): void;
    get emrManagedSlaveSecurityGroupInput(): string | undefined;
    private _instanceProfile?;
    get instanceProfile(): string;
    set instanceProfile(value: string);
    get instanceProfileInput(): string | undefined;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
    private _serviceAccessSecurityGroup?;
    get serviceAccessSecurityGroup(): string;
    set serviceAccessSecurityGroup(value: string);
    resetServiceAccessSecurityGroup(): void;
    get serviceAccessSecurityGroupInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
}
export interface EmrClusterKerberosAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}
    */
    readonly adDomainJoinPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}
    */
    readonly adDomainJoinUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}
    */
    readonly crossRealmTrustPrincipalPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}
    */
    readonly kdcAdminPassword: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#realm EmrCluster#realm}
    */
    readonly realm: string;
}
export declare function emrClusterKerberosAttributesToTerraform(struct?: EmrClusterKerberosAttributesOutputReference | EmrClusterKerberosAttributes): any;
export declare function emrClusterKerberosAttributesToHclTerraform(struct?: EmrClusterKerberosAttributesOutputReference | EmrClusterKerberosAttributes): any;
export declare class EmrClusterKerberosAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrClusterKerberosAttributes | undefined;
    set internalValue(value: EmrClusterKerberosAttributes | undefined);
    private _adDomainJoinPassword?;
    get adDomainJoinPassword(): string;
    set adDomainJoinPassword(value: string);
    resetAdDomainJoinPassword(): void;
    get adDomainJoinPasswordInput(): string | undefined;
    private _adDomainJoinUser?;
    get adDomainJoinUser(): string;
    set adDomainJoinUser(value: string);
    resetAdDomainJoinUser(): void;
    get adDomainJoinUserInput(): string | undefined;
    private _crossRealmTrustPrincipalPassword?;
    get crossRealmTrustPrincipalPassword(): string;
    set crossRealmTrustPrincipalPassword(value: string);
    resetCrossRealmTrustPrincipalPassword(): void;
    get crossRealmTrustPrincipalPasswordInput(): string | undefined;
    private _kdcAdminPassword?;
    get kdcAdminPassword(): string;
    set kdcAdminPassword(value: string);
    get kdcAdminPasswordInput(): string | undefined;
    private _realm?;
    get realm(): string;
    set realm(value: string);
    get realmInput(): string | undefined;
}
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#classification EmrCluster#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#properties EmrCluster#properties}
    */
    readonly properties?: {
        [key: string]: string;
    };
}
export declare function emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable): any;
export declare function emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToHclTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable): any;
export declare class EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable | undefined);
    private _classification?;
    get classification(): string;
    set classification(value: string);
    resetClassification(): void;
    get classificationInput(): string | undefined;
    private _properties?;
    get properties(): {
        [key: string]: string;
    };
    set properties(value: {
        [key: string]: string;
    });
    resetProperties(): void;
    get propertiesInput(): {
        [key: string]: string;
    } | undefined;
}
export declare class EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference;
}
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable): any;
export declare function emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToHclTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable): any;
export declare class EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable | undefined);
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _volumesPerInstance?;
    get volumesPerInstance(): number;
    set volumesPerInstance(value: number);
    resetVolumesPerInstance(): void;
    get volumesPerInstanceInput(): number | undefined;
}
export declare class EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference;
}
export interface EmrClusterMasterInstanceFleetInstanceTypeConfigs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}
    */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#configurations EmrCluster#configurations}
    */
    readonly configurations?: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable;
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable;
}
export declare function emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigs | cdktf.IResolvable): any;
export declare function emrClusterMasterInstanceFleetInstanceTypeConfigsToHclTerraform(struct?: EmrClusterMasterInstanceFleetInstanceTypeConfigs | cdktf.IResolvable): any;
export declare class EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterMasterInstanceFleetInstanceTypeConfigs | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterMasterInstanceFleetInstanceTypeConfigs | cdktf.IResolvable | undefined);
    private _bidPrice?;
    get bidPrice(): string;
    set bidPrice(value: string);
    resetBidPrice(): void;
    get bidPriceInput(): string | undefined;
    private _bidPriceAsPercentageOfOnDemandPrice?;
    get bidPriceAsPercentageOfOnDemandPrice(): number;
    set bidPriceAsPercentageOfOnDemandPrice(value: number);
    resetBidPriceAsPercentageOfOnDemandPrice(): void;
    get bidPriceAsPercentageOfOnDemandPriceInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): number;
    set weightedCapacity(value: number);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): number | undefined;
    private _configurations;
    get configurations(): EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList;
    putConfigurations(value: EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable): void;
    resetConfigurations(): void;
    get configurationsInput(): cdktf.IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations[] | undefined;
    private _ebsConfig;
    get ebsConfig(): EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList;
    putEbsConfig(value: EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable): void;
    resetEbsConfig(): void;
    get ebsConfigInput(): cdktf.IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig[] | undefined;
}
export declare class EmrClusterMasterInstanceFleetInstanceTypeConfigsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterMasterInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference;
}
export interface EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
}
export declare function emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable): any;
export declare function emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToHclTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable): any;
export declare class EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    get allocationStrategyInput(): string | undefined;
}
export declare class EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference;
}
export interface EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}
    */
    readonly allocationStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#timeout_action EmrCluster#timeout_action}
    */
    readonly timeoutAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}
    */
    readonly timeoutDurationMinutes: number;
}
export declare function emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable): any;
export declare function emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToHclTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable): any;
export declare class EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    get allocationStrategyInput(): string | undefined;
    private _blockDurationMinutes?;
    get blockDurationMinutes(): number;
    set blockDurationMinutes(value: number);
    resetBlockDurationMinutes(): void;
    get blockDurationMinutesInput(): number | undefined;
    private _timeoutAction?;
    get timeoutAction(): string;
    set timeoutAction(value: string);
    get timeoutActionInput(): string | undefined;
    private _timeoutDurationMinutes?;
    get timeoutDurationMinutes(): number;
    set timeoutDurationMinutes(value: number);
    get timeoutDurationMinutesInput(): number | undefined;
}
export declare class EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference;
}
export interface EmrClusterMasterInstanceFleetLaunchSpecifications {
    /**
    * on_demand_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}
    */
    readonly onDemandSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable;
    /**
    * spot_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#spot_specification EmrCluster#spot_specification}
    */
    readonly spotSpecification?: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable;
}
export declare function emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference | EmrClusterMasterInstanceFleetLaunchSpecifications): any;
export declare function emrClusterMasterInstanceFleetLaunchSpecificationsToHclTerraform(struct?: EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference | EmrClusterMasterInstanceFleetLaunchSpecifications): any;
export declare class EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrClusterMasterInstanceFleetLaunchSpecifications | undefined;
    set internalValue(value: EmrClusterMasterInstanceFleetLaunchSpecifications | undefined);
    private _onDemandSpecification;
    get onDemandSpecification(): EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList;
    putOnDemandSpecification(value: EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable): void;
    resetOnDemandSpecification(): void;
    get onDemandSpecificationInput(): cdktf.IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification[] | undefined;
    private _spotSpecification;
    get spotSpecification(): EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList;
    putSpotSpecification(value: EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable): void;
    resetSpotSpecification(): void;
    get spotSpecificationInput(): cdktf.IResolvable | EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification[] | undefined;
}
export interface EmrClusterMasterInstanceFleet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}
    */
    readonly targetOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}
    */
    readonly targetSpotCapacity?: number;
    /**
    * instance_type_configs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}
    */
    readonly instanceTypeConfigs?: EmrClusterMasterInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable;
    /**
    * launch_specifications block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#launch_specifications EmrCluster#launch_specifications}
    */
    readonly launchSpecifications?: EmrClusterMasterInstanceFleetLaunchSpecifications;
}
export declare function emrClusterMasterInstanceFleetToTerraform(struct?: EmrClusterMasterInstanceFleetOutputReference | EmrClusterMasterInstanceFleet): any;
export declare function emrClusterMasterInstanceFleetToHclTerraform(struct?: EmrClusterMasterInstanceFleetOutputReference | EmrClusterMasterInstanceFleet): any;
export declare class EmrClusterMasterInstanceFleetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrClusterMasterInstanceFleet | undefined;
    set internalValue(value: EmrClusterMasterInstanceFleet | undefined);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get provisionedOnDemandCapacity(): number;
    get provisionedSpotCapacity(): number;
    private _targetOnDemandCapacity?;
    get targetOnDemandCapacity(): number;
    set targetOnDemandCapacity(value: number);
    resetTargetOnDemandCapacity(): void;
    get targetOnDemandCapacityInput(): number | undefined;
    private _targetSpotCapacity?;
    get targetSpotCapacity(): number;
    set targetSpotCapacity(value: number);
    resetTargetSpotCapacity(): void;
    get targetSpotCapacityInput(): number | undefined;
    private _instanceTypeConfigs;
    get instanceTypeConfigs(): EmrClusterMasterInstanceFleetInstanceTypeConfigsList;
    putInstanceTypeConfigs(value: EmrClusterMasterInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable): void;
    resetInstanceTypeConfigs(): void;
    get instanceTypeConfigsInput(): cdktf.IResolvable | EmrClusterMasterInstanceFleetInstanceTypeConfigs[] | undefined;
    private _launchSpecifications;
    get launchSpecifications(): EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference;
    putLaunchSpecifications(value: EmrClusterMasterInstanceFleetLaunchSpecifications): void;
    resetLaunchSpecifications(): void;
    get launchSpecificationsInput(): EmrClusterMasterInstanceFleetLaunchSpecifications | undefined;
}
export interface EmrClusterMasterInstanceGroupEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#iops EmrCluster#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#size EmrCluster#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#throughput EmrCluster#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#type EmrCluster#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrClusterMasterInstanceGroupEbsConfigToTerraform(struct?: EmrClusterMasterInstanceGroupEbsConfig | cdktf.IResolvable): any;
export declare function emrClusterMasterInstanceGroupEbsConfigToHclTerraform(struct?: EmrClusterMasterInstanceGroupEbsConfig | cdktf.IResolvable): any;
export declare class EmrClusterMasterInstanceGroupEbsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrClusterMasterInstanceGroupEbsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: EmrClusterMasterInstanceGroupEbsConfig | cdktf.IResolvable | undefined);
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _volumesPerInstance?;
    get volumesPerInstance(): number;
    set volumesPerInstance(value: number);
    resetVolumesPerInstance(): void;
    get volumesPerInstanceInput(): number | undefined;
}
export declare class EmrClusterMasterInstanceGroupEbsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrClusterMasterInstanceGroupEbsConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrClusterMasterInstanceGroupEbsConfigOutputReference;
}
export interface EmrClusterMasterInstanceGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#bid_price EmrCluster#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_count EmrCluster#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#instance_type EmrCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#name EmrCluster#name}
    */
    readonly name?: string;
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#ebs_config EmrCluster#ebs_config}
    */
    readonly ebsConfig?: EmrClusterMasterInstanceGroupEbsConfig[] | cdktf.IResolvable;
}
export declare function emrClusterMasterInstanceGroupToTerraform(struct?: EmrClusterMasterInstanceGroupOutputReference | EmrClusterMasterInstanceGroup): any;
export declare function emrClusterMasterInstanceGroupToHclTerraform(struct?: EmrClusterMasterInstanceGroupOutputReference | EmrClusterMasterInstanceGroup): any;
export declare class EmrClusterMasterInstanceGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrClusterMasterInstanceGroup | undefined;
    set internalValue(value: EmrClusterMasterInstanceGroup | undefined);
    private _bidPrice?;
    get bidPrice(): string;
    set bidPrice(value: string);
    resetBidPrice(): void;
    get bidPriceInput(): string | undefined;
    get id(): string;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _ebsConfig;
    get ebsConfig(): EmrClusterMasterInstanceGroupEbsConfigList;
    putEbsConfig(value: EmrClusterMasterInstanceGroupEbsConfig[] | cdktf.IResolvable): void;
    resetEbsConfig(): void;
    get ebsConfigInput(): cdktf.IResolvable | EmrClusterMasterInstanceGroupEbsConfig[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster aws_emr_cluster}
*/
export declare class EmrCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emr_cluster";
    /**
    * Generates CDKTF code for importing a EmrCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrCluster to import
    * @param importFromId The id of the existing EmrCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_cluster aws_emr_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrClusterConfig
    */
    constructor(scope: Construct, id: string, config: EmrClusterConfig);
    private _additionalInfo?;
    get additionalInfo(): string;
    set additionalInfo(value: string);
    resetAdditionalInfo(): void;
    get additionalInfoInput(): string | undefined;
    private _applications?;
    get applications(): string[];
    set applications(value: string[]);
    resetApplications(): void;
    get applicationsInput(): string[] | undefined;
    get arn(): string;
    private _autoscalingRole?;
    get autoscalingRole(): string;
    set autoscalingRole(value: string);
    resetAutoscalingRole(): void;
    get autoscalingRoleInput(): string | undefined;
    get clusterState(): string;
    private _configurations?;
    get configurations(): string;
    set configurations(value: string);
    resetConfigurations(): void;
    get configurationsInput(): string | undefined;
    private _configurationsJson?;
    get configurationsJson(): string;
    set configurationsJson(value: string);
    resetConfigurationsJson(): void;
    get configurationsJsonInput(): string | undefined;
    private _customAmiId?;
    get customAmiId(): string;
    set customAmiId(value: string);
    resetCustomAmiId(): void;
    get customAmiIdInput(): string | undefined;
    private _ebsRootVolumeSize?;
    get ebsRootVolumeSize(): number;
    set ebsRootVolumeSize(value: number);
    resetEbsRootVolumeSize(): void;
    get ebsRootVolumeSizeInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keepJobFlowAliveWhenNoSteps?;
    get keepJobFlowAliveWhenNoSteps(): boolean | cdktf.IResolvable;
    set keepJobFlowAliveWhenNoSteps(value: boolean | cdktf.IResolvable);
    resetKeepJobFlowAliveWhenNoSteps(): void;
    get keepJobFlowAliveWhenNoStepsInput(): boolean | cdktf.IResolvable | undefined;
    private _listStepsStates?;
    get listStepsStates(): string[];
    set listStepsStates(value: string[]);
    resetListStepsStates(): void;
    get listStepsStatesInput(): string[] | undefined;
    private _logEncryptionKmsKeyId?;
    get logEncryptionKmsKeyId(): string;
    set logEncryptionKmsKeyId(value: string);
    resetLogEncryptionKmsKeyId(): void;
    get logEncryptionKmsKeyIdInput(): string | undefined;
    private _logUri?;
    get logUri(): string;
    set logUri(value: string);
    resetLogUri(): void;
    get logUriInput(): string | undefined;
    get masterPublicDns(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _placementGroupConfig;
    get placementGroupConfig(): EmrClusterPlacementGroupConfigList;
    putPlacementGroupConfig(value: EmrClusterPlacementGroupConfig[] | cdktf.IResolvable): void;
    resetPlacementGroupConfig(): void;
    get placementGroupConfigInput(): cdktf.IResolvable | EmrClusterPlacementGroupConfig[] | undefined;
    private _releaseLabel?;
    get releaseLabel(): string;
    set releaseLabel(value: string);
    get releaseLabelInput(): string | undefined;
    private _scaleDownBehavior?;
    get scaleDownBehavior(): string;
    set scaleDownBehavior(value: string);
    resetScaleDownBehavior(): void;
    get scaleDownBehaviorInput(): string | undefined;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string | undefined;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string | undefined;
    private _step;
    get step(): EmrClusterStepList;
    putStep(value: EmrClusterStep[] | cdktf.IResolvable): void;
    resetStep(): void;
    get stepInput(): cdktf.IResolvable | EmrClusterStep[] | undefined;
    private _stepConcurrencyLevel?;
    get stepConcurrencyLevel(): number;
    set stepConcurrencyLevel(value: number);
    resetStepConcurrencyLevel(): void;
    get stepConcurrencyLevelInput(): number | undefined;
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
    private _terminationProtection?;
    get terminationProtection(): boolean | cdktf.IResolvable;
    set terminationProtection(value: boolean | cdktf.IResolvable);
    resetTerminationProtection(): void;
    get terminationProtectionInput(): boolean | cdktf.IResolvable | undefined;
    private _unhealthyNodeReplacement?;
    get unhealthyNodeReplacement(): boolean | cdktf.IResolvable;
    set unhealthyNodeReplacement(value: boolean | cdktf.IResolvable);
    resetUnhealthyNodeReplacement(): void;
    get unhealthyNodeReplacementInput(): boolean | cdktf.IResolvable | undefined;
    private _visibleToAllUsers?;
    get visibleToAllUsers(): boolean | cdktf.IResolvable;
    set visibleToAllUsers(value: boolean | cdktf.IResolvable);
    resetVisibleToAllUsers(): void;
    get visibleToAllUsersInput(): boolean | cdktf.IResolvable | undefined;
    private _autoTerminationPolicy;
    get autoTerminationPolicy(): EmrClusterAutoTerminationPolicyOutputReference;
    putAutoTerminationPolicy(value: EmrClusterAutoTerminationPolicy): void;
    resetAutoTerminationPolicy(): void;
    get autoTerminationPolicyInput(): EmrClusterAutoTerminationPolicy | undefined;
    private _bootstrapAction;
    get bootstrapAction(): EmrClusterBootstrapActionList;
    putBootstrapAction(value: EmrClusterBootstrapAction[] | cdktf.IResolvable): void;
    resetBootstrapAction(): void;
    get bootstrapActionInput(): cdktf.IResolvable | EmrClusterBootstrapAction[] | undefined;
    private _coreInstanceFleet;
    get coreInstanceFleet(): EmrClusterCoreInstanceFleetOutputReference;
    putCoreInstanceFleet(value: EmrClusterCoreInstanceFleet): void;
    resetCoreInstanceFleet(): void;
    get coreInstanceFleetInput(): EmrClusterCoreInstanceFleet | undefined;
    private _coreInstanceGroup;
    get coreInstanceGroup(): EmrClusterCoreInstanceGroupOutputReference;
    putCoreInstanceGroup(value: EmrClusterCoreInstanceGroup): void;
    resetCoreInstanceGroup(): void;
    get coreInstanceGroupInput(): EmrClusterCoreInstanceGroup | undefined;
    private _ec2Attributes;
    get ec2Attributes(): EmrClusterEc2AttributesOutputReference;
    putEc2Attributes(value: EmrClusterEc2Attributes): void;
    resetEc2Attributes(): void;
    get ec2AttributesInput(): EmrClusterEc2Attributes | undefined;
    private _kerberosAttributes;
    get kerberosAttributes(): EmrClusterKerberosAttributesOutputReference;
    putKerberosAttributes(value: EmrClusterKerberosAttributes): void;
    resetKerberosAttributes(): void;
    get kerberosAttributesInput(): EmrClusterKerberosAttributes | undefined;
    private _masterInstanceFleet;
    get masterInstanceFleet(): EmrClusterMasterInstanceFleetOutputReference;
    putMasterInstanceFleet(value: EmrClusterMasterInstanceFleet): void;
    resetMasterInstanceFleet(): void;
    get masterInstanceFleetInput(): EmrClusterMasterInstanceFleet | undefined;
    private _masterInstanceGroup;
    get masterInstanceGroup(): EmrClusterMasterInstanceGroupOutputReference;
    putMasterInstanceGroup(value: EmrClusterMasterInstanceGroup): void;
    resetMasterInstanceGroup(): void;
    get masterInstanceGroupInput(): EmrClusterMasterInstanceGroup | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
