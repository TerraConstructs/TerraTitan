/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksEcsClusterLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#auto_assign_elastic_ips OpsworksEcsClusterLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#auto_assign_public_ips OpsworksEcsClusterLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#auto_healing OpsworksEcsClusterLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#custom_configure_recipes OpsworksEcsClusterLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#custom_deploy_recipes OpsworksEcsClusterLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#custom_instance_profile_arn OpsworksEcsClusterLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#custom_json OpsworksEcsClusterLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#custom_security_group_ids OpsworksEcsClusterLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#custom_setup_recipes OpsworksEcsClusterLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#custom_shutdown_recipes OpsworksEcsClusterLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#custom_undeploy_recipes OpsworksEcsClusterLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#drain_elb_on_shutdown OpsworksEcsClusterLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#ecs_cluster_arn OpsworksEcsClusterLayer#ecs_cluster_arn}
    */
    readonly ecsClusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#elastic_load_balancer OpsworksEcsClusterLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#id OpsworksEcsClusterLayer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#install_updates_on_boot OpsworksEcsClusterLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#instance_shutdown_timeout OpsworksEcsClusterLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#name OpsworksEcsClusterLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#stack_id OpsworksEcsClusterLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#system_packages OpsworksEcsClusterLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#tags OpsworksEcsClusterLayer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#tags_all OpsworksEcsClusterLayer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#use_ebs_optimized_instances OpsworksEcsClusterLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * cloudwatch_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#cloudwatch_configuration OpsworksEcsClusterLayer#cloudwatch_configuration}
    */
    readonly cloudwatchConfiguration?: OpsworksEcsClusterLayerCloudwatchConfiguration;
    /**
    * ebs_volume block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#ebs_volume OpsworksEcsClusterLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksEcsClusterLayerEbsVolume[] | cdktf.IResolvable;
    /**
    * load_based_auto_scaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#load_based_auto_scaling OpsworksEcsClusterLayer#load_based_auto_scaling}
    */
    readonly loadBasedAutoScaling?: OpsworksEcsClusterLayerLoadBasedAutoScaling;
}
export interface OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#batch_count OpsworksEcsClusterLayer#batch_count}
    */
    readonly batchCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#batch_size OpsworksEcsClusterLayer#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#buffer_duration OpsworksEcsClusterLayer#buffer_duration}
    */
    readonly bufferDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#datetime_format OpsworksEcsClusterLayer#datetime_format}
    */
    readonly datetimeFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#encoding OpsworksEcsClusterLayer#encoding}
    */
    readonly encoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#file OpsworksEcsClusterLayer#file}
    */
    readonly file: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#file_fingerprint_lines OpsworksEcsClusterLayer#file_fingerprint_lines}
    */
    readonly fileFingerprintLines?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#initial_position OpsworksEcsClusterLayer#initial_position}
    */
    readonly initialPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#log_group_name OpsworksEcsClusterLayer#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#multiline_start_pattern OpsworksEcsClusterLayer#multiline_start_pattern}
    */
    readonly multilineStartPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#time_zone OpsworksEcsClusterLayer#time_zone}
    */
    readonly timeZone?: string;
}
export declare function opsworksEcsClusterLayerCloudwatchConfigurationLogStreamsToTerraform(struct?: OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any;
export declare function opsworksEcsClusterLayerCloudwatchConfigurationLogStreamsToHclTerraform(struct?: OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any;
export declare class OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined);
    private _batchCount?;
    get batchCount(): number;
    set batchCount(value: number);
    resetBatchCount(): void;
    get batchCountInput(): number | undefined;
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _bufferDuration?;
    get bufferDuration(): number;
    set bufferDuration(value: number);
    resetBufferDuration(): void;
    get bufferDurationInput(): number | undefined;
    private _datetimeFormat?;
    get datetimeFormat(): string;
    set datetimeFormat(value: string);
    resetDatetimeFormat(): void;
    get datetimeFormatInput(): string | undefined;
    private _encoding?;
    get encoding(): string;
    set encoding(value: string);
    resetEncoding(): void;
    get encodingInput(): string | undefined;
    private _file?;
    get file(): string;
    set file(value: string);
    get fileInput(): string | undefined;
    private _fileFingerprintLines?;
    get fileFingerprintLines(): string;
    set fileFingerprintLines(value: string);
    resetFileFingerprintLines(): void;
    get fileFingerprintLinesInput(): string | undefined;
    private _initialPosition?;
    get initialPosition(): string;
    set initialPosition(value: string);
    resetInitialPosition(): void;
    get initialPositionInput(): string | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string | undefined;
    private _multilineStartPattern?;
    get multilineStartPattern(): string;
    set multilineStartPattern(value: string);
    resetMultilineStartPattern(): void;
    get multilineStartPatternInput(): string | undefined;
    private _timeZone?;
    get timeZone(): string;
    set timeZone(value: string);
    resetTimeZone(): void;
    get timeZoneInput(): string | undefined;
}
export declare class OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsOutputReference;
}
export interface OpsworksEcsClusterLayerCloudwatchConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#enabled OpsworksEcsClusterLayer#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * log_streams block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#log_streams OpsworksEcsClusterLayer#log_streams}
    */
    readonly logStreams?: OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
}
export declare function opsworksEcsClusterLayerCloudwatchConfigurationToTerraform(struct?: OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference | OpsworksEcsClusterLayerCloudwatchConfiguration): any;
export declare function opsworksEcsClusterLayerCloudwatchConfigurationToHclTerraform(struct?: OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference | OpsworksEcsClusterLayerCloudwatchConfiguration): any;
export declare class OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksEcsClusterLayerCloudwatchConfiguration | undefined;
    set internalValue(value: OpsworksEcsClusterLayerCloudwatchConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logStreams;
    get logStreams(): OpsworksEcsClusterLayerCloudwatchConfigurationLogStreamsList;
    putLogStreams(value: OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable): void;
    resetLogStreams(): void;
    get logStreamsInput(): cdktf.IResolvable | OpsworksEcsClusterLayerCloudwatchConfigurationLogStreams[] | undefined;
}
export interface OpsworksEcsClusterLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#encrypted OpsworksEcsClusterLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#iops OpsworksEcsClusterLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#mount_point OpsworksEcsClusterLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#number_of_disks OpsworksEcsClusterLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#raid_level OpsworksEcsClusterLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#size OpsworksEcsClusterLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#type OpsworksEcsClusterLayer#type}
    */
    readonly type?: string;
}
export declare function opsworksEcsClusterLayerEbsVolumeToTerraform(struct?: OpsworksEcsClusterLayerEbsVolume | cdktf.IResolvable): any;
export declare function opsworksEcsClusterLayerEbsVolumeToHclTerraform(struct?: OpsworksEcsClusterLayerEbsVolume | cdktf.IResolvable): any;
export declare class OpsworksEcsClusterLayerEbsVolumeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksEcsClusterLayerEbsVolume | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksEcsClusterLayerEbsVolume | cdktf.IResolvable | undefined);
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _mountPoint?;
    get mountPoint(): string;
    set mountPoint(value: string);
    get mountPointInput(): string | undefined;
    private _numberOfDisks?;
    get numberOfDisks(): number;
    set numberOfDisks(value: number);
    get numberOfDisksInput(): number | undefined;
    private _raidLevel?;
    get raidLevel(): string;
    set raidLevel(value: string);
    resetRaidLevel(): void;
    get raidLevelInput(): string | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class OpsworksEcsClusterLayerEbsVolumeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksEcsClusterLayerEbsVolume[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksEcsClusterLayerEbsVolumeOutputReference;
}
export interface OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}
    */
    readonly alarms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}
    */
    readonly cpuThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}
    */
    readonly ignoreMetricsTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}
    */
    readonly loadThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}
    */
    readonly memoryThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}
    */
    readonly thresholdsWaitTime?: number;
}
export declare function opsworksEcsClusterLayerLoadBasedAutoScalingDownscalingToTerraform(struct?: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference | OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling): any;
export declare function opsworksEcsClusterLayerLoadBasedAutoScalingDownscalingToHclTerraform(struct?: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference | OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling): any;
export declare class OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling | undefined;
    set internalValue(value: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling | undefined);
    private _alarms?;
    get alarms(): string[];
    set alarms(value: string[]);
    resetAlarms(): void;
    get alarmsInput(): string[] | undefined;
    private _cpuThreshold?;
    get cpuThreshold(): number;
    set cpuThreshold(value: number);
    resetCpuThreshold(): void;
    get cpuThresholdInput(): number | undefined;
    private _ignoreMetricsTime?;
    get ignoreMetricsTime(): number;
    set ignoreMetricsTime(value: number);
    resetIgnoreMetricsTime(): void;
    get ignoreMetricsTimeInput(): number | undefined;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number | undefined;
    private _loadThreshold?;
    get loadThreshold(): number;
    set loadThreshold(value: number);
    resetLoadThreshold(): void;
    get loadThresholdInput(): number | undefined;
    private _memoryThreshold?;
    get memoryThreshold(): number;
    set memoryThreshold(value: number);
    resetMemoryThreshold(): void;
    get memoryThresholdInput(): number | undefined;
    private _thresholdsWaitTime?;
    get thresholdsWaitTime(): number;
    set thresholdsWaitTime(value: number);
    resetThresholdsWaitTime(): void;
    get thresholdsWaitTimeInput(): number | undefined;
}
export interface OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#alarms OpsworksEcsClusterLayer#alarms}
    */
    readonly alarms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#cpu_threshold OpsworksEcsClusterLayer#cpu_threshold}
    */
    readonly cpuThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#ignore_metrics_time OpsworksEcsClusterLayer#ignore_metrics_time}
    */
    readonly ignoreMetricsTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#instance_count OpsworksEcsClusterLayer#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#load_threshold OpsworksEcsClusterLayer#load_threshold}
    */
    readonly loadThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#memory_threshold OpsworksEcsClusterLayer#memory_threshold}
    */
    readonly memoryThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#thresholds_wait_time OpsworksEcsClusterLayer#thresholds_wait_time}
    */
    readonly thresholdsWaitTime?: number;
}
export declare function opsworksEcsClusterLayerLoadBasedAutoScalingUpscalingToTerraform(struct?: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference | OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling): any;
export declare function opsworksEcsClusterLayerLoadBasedAutoScalingUpscalingToHclTerraform(struct?: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference | OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling): any;
export declare class OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling | undefined;
    set internalValue(value: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling | undefined);
    private _alarms?;
    get alarms(): string[];
    set alarms(value: string[]);
    resetAlarms(): void;
    get alarmsInput(): string[] | undefined;
    private _cpuThreshold?;
    get cpuThreshold(): number;
    set cpuThreshold(value: number);
    resetCpuThreshold(): void;
    get cpuThresholdInput(): number | undefined;
    private _ignoreMetricsTime?;
    get ignoreMetricsTime(): number;
    set ignoreMetricsTime(value: number);
    resetIgnoreMetricsTime(): void;
    get ignoreMetricsTimeInput(): number | undefined;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number | undefined;
    private _loadThreshold?;
    get loadThreshold(): number;
    set loadThreshold(value: number);
    resetLoadThreshold(): void;
    get loadThresholdInput(): number | undefined;
    private _memoryThreshold?;
    get memoryThreshold(): number;
    set memoryThreshold(value: number);
    resetMemoryThreshold(): void;
    get memoryThresholdInput(): number | undefined;
    private _thresholdsWaitTime?;
    get thresholdsWaitTime(): number;
    set thresholdsWaitTime(value: number);
    resetThresholdsWaitTime(): void;
    get thresholdsWaitTimeInput(): number | undefined;
}
export interface OpsworksEcsClusterLayerLoadBasedAutoScaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#enable OpsworksEcsClusterLayer#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * downscaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#downscaling OpsworksEcsClusterLayer#downscaling}
    */
    readonly downscaling?: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling;
    /**
    * upscaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#upscaling OpsworksEcsClusterLayer#upscaling}
    */
    readonly upscaling?: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling;
}
export declare function opsworksEcsClusterLayerLoadBasedAutoScalingToTerraform(struct?: OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference | OpsworksEcsClusterLayerLoadBasedAutoScaling): any;
export declare function opsworksEcsClusterLayerLoadBasedAutoScalingToHclTerraform(struct?: OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference | OpsworksEcsClusterLayerLoadBasedAutoScaling): any;
export declare class OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksEcsClusterLayerLoadBasedAutoScaling | undefined;
    set internalValue(value: OpsworksEcsClusterLayerLoadBasedAutoScaling | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    resetEnable(): void;
    get enableInput(): boolean | cdktf.IResolvable | undefined;
    private _downscaling;
    get downscaling(): OpsworksEcsClusterLayerLoadBasedAutoScalingDownscalingOutputReference;
    putDownscaling(value: OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling): void;
    resetDownscaling(): void;
    get downscalingInput(): OpsworksEcsClusterLayerLoadBasedAutoScalingDownscaling | undefined;
    private _upscaling;
    get upscaling(): OpsworksEcsClusterLayerLoadBasedAutoScalingUpscalingOutputReference;
    putUpscaling(value: OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling): void;
    resetUpscaling(): void;
    get upscalingInput(): OpsworksEcsClusterLayerLoadBasedAutoScalingUpscaling | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer aws_opsworks_ecs_cluster_layer}
*/
export declare class OpsworksEcsClusterLayer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_ecs_cluster_layer";
    /**
    * Generates CDKTF code for importing a OpsworksEcsClusterLayer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksEcsClusterLayer to import
    * @param importFromId The id of the existing OpsworksEcsClusterLayer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksEcsClusterLayer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_ecs_cluster_layer aws_opsworks_ecs_cluster_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksEcsClusterLayerConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksEcsClusterLayerConfig);
    get arn(): string;
    private _autoAssignElasticIps?;
    get autoAssignElasticIps(): boolean | cdktf.IResolvable;
    set autoAssignElasticIps(value: boolean | cdktf.IResolvable);
    resetAutoAssignElasticIps(): void;
    get autoAssignElasticIpsInput(): boolean | cdktf.IResolvable | undefined;
    private _autoAssignPublicIps?;
    get autoAssignPublicIps(): boolean | cdktf.IResolvable;
    set autoAssignPublicIps(value: boolean | cdktf.IResolvable);
    resetAutoAssignPublicIps(): void;
    get autoAssignPublicIpsInput(): boolean | cdktf.IResolvable | undefined;
    private _autoHealing?;
    get autoHealing(): boolean | cdktf.IResolvable;
    set autoHealing(value: boolean | cdktf.IResolvable);
    resetAutoHealing(): void;
    get autoHealingInput(): boolean | cdktf.IResolvable | undefined;
    private _customConfigureRecipes?;
    get customConfigureRecipes(): string[];
    set customConfigureRecipes(value: string[]);
    resetCustomConfigureRecipes(): void;
    get customConfigureRecipesInput(): string[] | undefined;
    private _customDeployRecipes?;
    get customDeployRecipes(): string[];
    set customDeployRecipes(value: string[]);
    resetCustomDeployRecipes(): void;
    get customDeployRecipesInput(): string[] | undefined;
    private _customInstanceProfileArn?;
    get customInstanceProfileArn(): string;
    set customInstanceProfileArn(value: string);
    resetCustomInstanceProfileArn(): void;
    get customInstanceProfileArnInput(): string | undefined;
    private _customJson?;
    get customJson(): string;
    set customJson(value: string);
    resetCustomJson(): void;
    get customJsonInput(): string | undefined;
    private _customSecurityGroupIds?;
    get customSecurityGroupIds(): string[];
    set customSecurityGroupIds(value: string[]);
    resetCustomSecurityGroupIds(): void;
    get customSecurityGroupIdsInput(): string[] | undefined;
    private _customSetupRecipes?;
    get customSetupRecipes(): string[];
    set customSetupRecipes(value: string[]);
    resetCustomSetupRecipes(): void;
    get customSetupRecipesInput(): string[] | undefined;
    private _customShutdownRecipes?;
    get customShutdownRecipes(): string[];
    set customShutdownRecipes(value: string[]);
    resetCustomShutdownRecipes(): void;
    get customShutdownRecipesInput(): string[] | undefined;
    private _customUndeployRecipes?;
    get customUndeployRecipes(): string[];
    set customUndeployRecipes(value: string[]);
    resetCustomUndeployRecipes(): void;
    get customUndeployRecipesInput(): string[] | undefined;
    private _drainElbOnShutdown?;
    get drainElbOnShutdown(): boolean | cdktf.IResolvable;
    set drainElbOnShutdown(value: boolean | cdktf.IResolvable);
    resetDrainElbOnShutdown(): void;
    get drainElbOnShutdownInput(): boolean | cdktf.IResolvable | undefined;
    private _ecsClusterArn?;
    get ecsClusterArn(): string;
    set ecsClusterArn(value: string);
    get ecsClusterArnInput(): string | undefined;
    private _elasticLoadBalancer?;
    get elasticLoadBalancer(): string;
    set elasticLoadBalancer(value: string);
    resetElasticLoadBalancer(): void;
    get elasticLoadBalancerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _installUpdatesOnBoot?;
    get installUpdatesOnBoot(): boolean | cdktf.IResolvable;
    set installUpdatesOnBoot(value: boolean | cdktf.IResolvable);
    resetInstallUpdatesOnBoot(): void;
    get installUpdatesOnBootInput(): boolean | cdktf.IResolvable | undefined;
    private _instanceShutdownTimeout?;
    get instanceShutdownTimeout(): number;
    set instanceShutdownTimeout(value: number);
    resetInstanceShutdownTimeout(): void;
    get instanceShutdownTimeoutInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string | undefined;
    private _systemPackages?;
    get systemPackages(): string[];
    set systemPackages(value: string[]);
    resetSystemPackages(): void;
    get systemPackagesInput(): string[] | undefined;
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
    private _useEbsOptimizedInstances?;
    get useEbsOptimizedInstances(): boolean | cdktf.IResolvable;
    set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable);
    resetUseEbsOptimizedInstances(): void;
    get useEbsOptimizedInstancesInput(): boolean | cdktf.IResolvable | undefined;
    private _cloudwatchConfiguration;
    get cloudwatchConfiguration(): OpsworksEcsClusterLayerCloudwatchConfigurationOutputReference;
    putCloudwatchConfiguration(value: OpsworksEcsClusterLayerCloudwatchConfiguration): void;
    resetCloudwatchConfiguration(): void;
    get cloudwatchConfigurationInput(): OpsworksEcsClusterLayerCloudwatchConfiguration | undefined;
    private _ebsVolume;
    get ebsVolume(): OpsworksEcsClusterLayerEbsVolumeList;
    putEbsVolume(value: OpsworksEcsClusterLayerEbsVolume[] | cdktf.IResolvable): void;
    resetEbsVolume(): void;
    get ebsVolumeInput(): cdktf.IResolvable | OpsworksEcsClusterLayerEbsVolume[] | undefined;
    private _loadBasedAutoScaling;
    get loadBasedAutoScaling(): OpsworksEcsClusterLayerLoadBasedAutoScalingOutputReference;
    putLoadBasedAutoScaling(value: OpsworksEcsClusterLayerLoadBasedAutoScaling): void;
    resetLoadBasedAutoScaling(): void;
    get loadBasedAutoScalingInput(): OpsworksEcsClusterLayerLoadBasedAutoScaling | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
