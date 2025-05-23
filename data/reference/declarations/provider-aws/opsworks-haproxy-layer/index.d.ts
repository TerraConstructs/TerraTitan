/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksHaproxyLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#auto_assign_elastic_ips OpsworksHaproxyLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#auto_assign_public_ips OpsworksHaproxyLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#auto_healing OpsworksHaproxyLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#custom_configure_recipes OpsworksHaproxyLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#custom_deploy_recipes OpsworksHaproxyLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#custom_instance_profile_arn OpsworksHaproxyLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#custom_json OpsworksHaproxyLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#custom_security_group_ids OpsworksHaproxyLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#custom_setup_recipes OpsworksHaproxyLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#custom_shutdown_recipes OpsworksHaproxyLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#custom_undeploy_recipes OpsworksHaproxyLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#drain_elb_on_shutdown OpsworksHaproxyLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#elastic_load_balancer OpsworksHaproxyLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#healthcheck_method OpsworksHaproxyLayer#healthcheck_method}
    */
    readonly healthcheckMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#healthcheck_url OpsworksHaproxyLayer#healthcheck_url}
    */
    readonly healthcheckUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#id OpsworksHaproxyLayer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#install_updates_on_boot OpsworksHaproxyLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#instance_shutdown_timeout OpsworksHaproxyLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#name OpsworksHaproxyLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#stack_id OpsworksHaproxyLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#stats_enabled OpsworksHaproxyLayer#stats_enabled}
    */
    readonly statsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#stats_password OpsworksHaproxyLayer#stats_password}
    */
    readonly statsPassword: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#stats_url OpsworksHaproxyLayer#stats_url}
    */
    readonly statsUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#stats_user OpsworksHaproxyLayer#stats_user}
    */
    readonly statsUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#system_packages OpsworksHaproxyLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#tags OpsworksHaproxyLayer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#tags_all OpsworksHaproxyLayer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#use_ebs_optimized_instances OpsworksHaproxyLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * cloudwatch_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#cloudwatch_configuration OpsworksHaproxyLayer#cloudwatch_configuration}
    */
    readonly cloudwatchConfiguration?: OpsworksHaproxyLayerCloudwatchConfiguration;
    /**
    * ebs_volume block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#ebs_volume OpsworksHaproxyLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksHaproxyLayerEbsVolume[] | cdktf.IResolvable;
    /**
    * load_based_auto_scaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#load_based_auto_scaling OpsworksHaproxyLayer#load_based_auto_scaling}
    */
    readonly loadBasedAutoScaling?: OpsworksHaproxyLayerLoadBasedAutoScaling;
}
export interface OpsworksHaproxyLayerCloudwatchConfigurationLogStreams {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#batch_count OpsworksHaproxyLayer#batch_count}
    */
    readonly batchCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#batch_size OpsworksHaproxyLayer#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#buffer_duration OpsworksHaproxyLayer#buffer_duration}
    */
    readonly bufferDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#datetime_format OpsworksHaproxyLayer#datetime_format}
    */
    readonly datetimeFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#encoding OpsworksHaproxyLayer#encoding}
    */
    readonly encoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#file OpsworksHaproxyLayer#file}
    */
    readonly file: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#file_fingerprint_lines OpsworksHaproxyLayer#file_fingerprint_lines}
    */
    readonly fileFingerprintLines?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#initial_position OpsworksHaproxyLayer#initial_position}
    */
    readonly initialPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#log_group_name OpsworksHaproxyLayer#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#multiline_start_pattern OpsworksHaproxyLayer#multiline_start_pattern}
    */
    readonly multilineStartPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#time_zone OpsworksHaproxyLayer#time_zone}
    */
    readonly timeZone?: string;
}
export declare function opsworksHaproxyLayerCloudwatchConfigurationLogStreamsToTerraform(struct?: OpsworksHaproxyLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any;
export declare function opsworksHaproxyLayerCloudwatchConfigurationLogStreamsToHclTerraform(struct?: OpsworksHaproxyLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any;
export declare class OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksHaproxyLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksHaproxyLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined);
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
export declare class OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksHaproxyLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsOutputReference;
}
export interface OpsworksHaproxyLayerCloudwatchConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#enabled OpsworksHaproxyLayer#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * log_streams block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#log_streams OpsworksHaproxyLayer#log_streams}
    */
    readonly logStreams?: OpsworksHaproxyLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
}
export declare function opsworksHaproxyLayerCloudwatchConfigurationToTerraform(struct?: OpsworksHaproxyLayerCloudwatchConfigurationOutputReference | OpsworksHaproxyLayerCloudwatchConfiguration): any;
export declare function opsworksHaproxyLayerCloudwatchConfigurationToHclTerraform(struct?: OpsworksHaproxyLayerCloudwatchConfigurationOutputReference | OpsworksHaproxyLayerCloudwatchConfiguration): any;
export declare class OpsworksHaproxyLayerCloudwatchConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksHaproxyLayerCloudwatchConfiguration | undefined;
    set internalValue(value: OpsworksHaproxyLayerCloudwatchConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logStreams;
    get logStreams(): OpsworksHaproxyLayerCloudwatchConfigurationLogStreamsList;
    putLogStreams(value: OpsworksHaproxyLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable): void;
    resetLogStreams(): void;
    get logStreamsInput(): cdktf.IResolvable | OpsworksHaproxyLayerCloudwatchConfigurationLogStreams[] | undefined;
}
export interface OpsworksHaproxyLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#encrypted OpsworksHaproxyLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#iops OpsworksHaproxyLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#mount_point OpsworksHaproxyLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#number_of_disks OpsworksHaproxyLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#raid_level OpsworksHaproxyLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#size OpsworksHaproxyLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#type OpsworksHaproxyLayer#type}
    */
    readonly type?: string;
}
export declare function opsworksHaproxyLayerEbsVolumeToTerraform(struct?: OpsworksHaproxyLayerEbsVolume | cdktf.IResolvable): any;
export declare function opsworksHaproxyLayerEbsVolumeToHclTerraform(struct?: OpsworksHaproxyLayerEbsVolume | cdktf.IResolvable): any;
export declare class OpsworksHaproxyLayerEbsVolumeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksHaproxyLayerEbsVolume | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksHaproxyLayerEbsVolume | cdktf.IResolvable | undefined);
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
export declare class OpsworksHaproxyLayerEbsVolumeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksHaproxyLayerEbsVolume[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksHaproxyLayerEbsVolumeOutputReference;
}
export interface OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}
    */
    readonly alarms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}
    */
    readonly cpuThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}
    */
    readonly ignoreMetricsTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}
    */
    readonly loadThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}
    */
    readonly memoryThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}
    */
    readonly thresholdsWaitTime?: number;
}
export declare function opsworksHaproxyLayerLoadBasedAutoScalingDownscalingToTerraform(struct?: OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference | OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling): any;
export declare function opsworksHaproxyLayerLoadBasedAutoScalingDownscalingToHclTerraform(struct?: OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference | OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling): any;
export declare class OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling | undefined;
    set internalValue(value: OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling | undefined);
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
export interface OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#alarms OpsworksHaproxyLayer#alarms}
    */
    readonly alarms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#cpu_threshold OpsworksHaproxyLayer#cpu_threshold}
    */
    readonly cpuThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#ignore_metrics_time OpsworksHaproxyLayer#ignore_metrics_time}
    */
    readonly ignoreMetricsTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#instance_count OpsworksHaproxyLayer#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#load_threshold OpsworksHaproxyLayer#load_threshold}
    */
    readonly loadThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#memory_threshold OpsworksHaproxyLayer#memory_threshold}
    */
    readonly memoryThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#thresholds_wait_time OpsworksHaproxyLayer#thresholds_wait_time}
    */
    readonly thresholdsWaitTime?: number;
}
export declare function opsworksHaproxyLayerLoadBasedAutoScalingUpscalingToTerraform(struct?: OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference | OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling): any;
export declare function opsworksHaproxyLayerLoadBasedAutoScalingUpscalingToHclTerraform(struct?: OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference | OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling): any;
export declare class OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling | undefined;
    set internalValue(value: OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling | undefined);
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
export interface OpsworksHaproxyLayerLoadBasedAutoScaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#enable OpsworksHaproxyLayer#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * downscaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#downscaling OpsworksHaproxyLayer#downscaling}
    */
    readonly downscaling?: OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling;
    /**
    * upscaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#upscaling OpsworksHaproxyLayer#upscaling}
    */
    readonly upscaling?: OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling;
}
export declare function opsworksHaproxyLayerLoadBasedAutoScalingToTerraform(struct?: OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference | OpsworksHaproxyLayerLoadBasedAutoScaling): any;
export declare function opsworksHaproxyLayerLoadBasedAutoScalingToHclTerraform(struct?: OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference | OpsworksHaproxyLayerLoadBasedAutoScaling): any;
export declare class OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksHaproxyLayerLoadBasedAutoScaling | undefined;
    set internalValue(value: OpsworksHaproxyLayerLoadBasedAutoScaling | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    resetEnable(): void;
    get enableInput(): boolean | cdktf.IResolvable | undefined;
    private _downscaling;
    get downscaling(): OpsworksHaproxyLayerLoadBasedAutoScalingDownscalingOutputReference;
    putDownscaling(value: OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling): void;
    resetDownscaling(): void;
    get downscalingInput(): OpsworksHaproxyLayerLoadBasedAutoScalingDownscaling | undefined;
    private _upscaling;
    get upscaling(): OpsworksHaproxyLayerLoadBasedAutoScalingUpscalingOutputReference;
    putUpscaling(value: OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling): void;
    resetUpscaling(): void;
    get upscalingInput(): OpsworksHaproxyLayerLoadBasedAutoScalingUpscaling | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer aws_opsworks_haproxy_layer}
*/
export declare class OpsworksHaproxyLayer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_haproxy_layer";
    /**
    * Generates CDKTF code for importing a OpsworksHaproxyLayer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksHaproxyLayer to import
    * @param importFromId The id of the existing OpsworksHaproxyLayer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksHaproxyLayer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_haproxy_layer aws_opsworks_haproxy_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksHaproxyLayerConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksHaproxyLayerConfig);
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
    private _elasticLoadBalancer?;
    get elasticLoadBalancer(): string;
    set elasticLoadBalancer(value: string);
    resetElasticLoadBalancer(): void;
    get elasticLoadBalancerInput(): string | undefined;
    private _healthcheckMethod?;
    get healthcheckMethod(): string;
    set healthcheckMethod(value: string);
    resetHealthcheckMethod(): void;
    get healthcheckMethodInput(): string | undefined;
    private _healthcheckUrl?;
    get healthcheckUrl(): string;
    set healthcheckUrl(value: string);
    resetHealthcheckUrl(): void;
    get healthcheckUrlInput(): string | undefined;
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
    private _statsEnabled?;
    get statsEnabled(): boolean | cdktf.IResolvable;
    set statsEnabled(value: boolean | cdktf.IResolvable);
    resetStatsEnabled(): void;
    get statsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _statsPassword?;
    get statsPassword(): string;
    set statsPassword(value: string);
    get statsPasswordInput(): string | undefined;
    private _statsUrl?;
    get statsUrl(): string;
    set statsUrl(value: string);
    resetStatsUrl(): void;
    get statsUrlInput(): string | undefined;
    private _statsUser?;
    get statsUser(): string;
    set statsUser(value: string);
    resetStatsUser(): void;
    get statsUserInput(): string | undefined;
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
    get cloudwatchConfiguration(): OpsworksHaproxyLayerCloudwatchConfigurationOutputReference;
    putCloudwatchConfiguration(value: OpsworksHaproxyLayerCloudwatchConfiguration): void;
    resetCloudwatchConfiguration(): void;
    get cloudwatchConfigurationInput(): OpsworksHaproxyLayerCloudwatchConfiguration | undefined;
    private _ebsVolume;
    get ebsVolume(): OpsworksHaproxyLayerEbsVolumeList;
    putEbsVolume(value: OpsworksHaproxyLayerEbsVolume[] | cdktf.IResolvable): void;
    resetEbsVolume(): void;
    get ebsVolumeInput(): cdktf.IResolvable | OpsworksHaproxyLayerEbsVolume[] | undefined;
    private _loadBasedAutoScaling;
    get loadBasedAutoScaling(): OpsworksHaproxyLayerLoadBasedAutoScalingOutputReference;
    putLoadBasedAutoScaling(value: OpsworksHaproxyLayerLoadBasedAutoScaling): void;
    resetLoadBasedAutoScaling(): void;
    get loadBasedAutoScalingInput(): OpsworksHaproxyLayerLoadBasedAutoScaling | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
