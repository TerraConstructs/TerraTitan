/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksRailsAppLayerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#app_server OpsworksRailsAppLayer#app_server}
    */
    readonly appServer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#auto_assign_elastic_ips OpsworksRailsAppLayer#auto_assign_elastic_ips}
    */
    readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#auto_assign_public_ips OpsworksRailsAppLayer#auto_assign_public_ips}
    */
    readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#auto_healing OpsworksRailsAppLayer#auto_healing}
    */
    readonly autoHealing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#bundler_version OpsworksRailsAppLayer#bundler_version}
    */
    readonly bundlerVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#custom_configure_recipes OpsworksRailsAppLayer#custom_configure_recipes}
    */
    readonly customConfigureRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#custom_deploy_recipes OpsworksRailsAppLayer#custom_deploy_recipes}
    */
    readonly customDeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#custom_instance_profile_arn OpsworksRailsAppLayer#custom_instance_profile_arn}
    */
    readonly customInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#custom_json OpsworksRailsAppLayer#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#custom_security_group_ids OpsworksRailsAppLayer#custom_security_group_ids}
    */
    readonly customSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#custom_setup_recipes OpsworksRailsAppLayer#custom_setup_recipes}
    */
    readonly customSetupRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#custom_shutdown_recipes OpsworksRailsAppLayer#custom_shutdown_recipes}
    */
    readonly customShutdownRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#custom_undeploy_recipes OpsworksRailsAppLayer#custom_undeploy_recipes}
    */
    readonly customUndeployRecipes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#drain_elb_on_shutdown OpsworksRailsAppLayer#drain_elb_on_shutdown}
    */
    readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#elastic_load_balancer OpsworksRailsAppLayer#elastic_load_balancer}
    */
    readonly elasticLoadBalancer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#id OpsworksRailsAppLayer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#install_updates_on_boot OpsworksRailsAppLayer#install_updates_on_boot}
    */
    readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#instance_shutdown_timeout OpsworksRailsAppLayer#instance_shutdown_timeout}
    */
    readonly instanceShutdownTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#manage_bundler OpsworksRailsAppLayer#manage_bundler}
    */
    readonly manageBundler?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#name OpsworksRailsAppLayer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#passenger_version OpsworksRailsAppLayer#passenger_version}
    */
    readonly passengerVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#ruby_version OpsworksRailsAppLayer#ruby_version}
    */
    readonly rubyVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#rubygems_version OpsworksRailsAppLayer#rubygems_version}
    */
    readonly rubygemsVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#stack_id OpsworksRailsAppLayer#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#system_packages OpsworksRailsAppLayer#system_packages}
    */
    readonly systemPackages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#tags OpsworksRailsAppLayer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#tags_all OpsworksRailsAppLayer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#use_ebs_optimized_instances OpsworksRailsAppLayer#use_ebs_optimized_instances}
    */
    readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
    /**
    * cloudwatch_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#cloudwatch_configuration OpsworksRailsAppLayer#cloudwatch_configuration}
    */
    readonly cloudwatchConfiguration?: OpsworksRailsAppLayerCloudwatchConfiguration;
    /**
    * ebs_volume block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#ebs_volume OpsworksRailsAppLayer#ebs_volume}
    */
    readonly ebsVolume?: OpsworksRailsAppLayerEbsVolume[] | cdktf.IResolvable;
    /**
    * load_based_auto_scaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#load_based_auto_scaling OpsworksRailsAppLayer#load_based_auto_scaling}
    */
    readonly loadBasedAutoScaling?: OpsworksRailsAppLayerLoadBasedAutoScaling;
}
export interface OpsworksRailsAppLayerCloudwatchConfigurationLogStreams {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#batch_count OpsworksRailsAppLayer#batch_count}
    */
    readonly batchCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#batch_size OpsworksRailsAppLayer#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#buffer_duration OpsworksRailsAppLayer#buffer_duration}
    */
    readonly bufferDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#datetime_format OpsworksRailsAppLayer#datetime_format}
    */
    readonly datetimeFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#encoding OpsworksRailsAppLayer#encoding}
    */
    readonly encoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#file OpsworksRailsAppLayer#file}
    */
    readonly file: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#file_fingerprint_lines OpsworksRailsAppLayer#file_fingerprint_lines}
    */
    readonly fileFingerprintLines?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#initial_position OpsworksRailsAppLayer#initial_position}
    */
    readonly initialPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#log_group_name OpsworksRailsAppLayer#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#multiline_start_pattern OpsworksRailsAppLayer#multiline_start_pattern}
    */
    readonly multilineStartPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#time_zone OpsworksRailsAppLayer#time_zone}
    */
    readonly timeZone?: string;
}
export declare function opsworksRailsAppLayerCloudwatchConfigurationLogStreamsToTerraform(struct?: OpsworksRailsAppLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any;
export declare function opsworksRailsAppLayerCloudwatchConfigurationLogStreamsToHclTerraform(struct?: OpsworksRailsAppLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any;
export declare class OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksRailsAppLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksRailsAppLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined);
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
export declare class OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsOutputReference;
}
export interface OpsworksRailsAppLayerCloudwatchConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#enabled OpsworksRailsAppLayer#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * log_streams block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#log_streams OpsworksRailsAppLayer#log_streams}
    */
    readonly logStreams?: OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
}
export declare function opsworksRailsAppLayerCloudwatchConfigurationToTerraform(struct?: OpsworksRailsAppLayerCloudwatchConfigurationOutputReference | OpsworksRailsAppLayerCloudwatchConfiguration): any;
export declare function opsworksRailsAppLayerCloudwatchConfigurationToHclTerraform(struct?: OpsworksRailsAppLayerCloudwatchConfigurationOutputReference | OpsworksRailsAppLayerCloudwatchConfiguration): any;
export declare class OpsworksRailsAppLayerCloudwatchConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksRailsAppLayerCloudwatchConfiguration | undefined;
    set internalValue(value: OpsworksRailsAppLayerCloudwatchConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logStreams;
    get logStreams(): OpsworksRailsAppLayerCloudwatchConfigurationLogStreamsList;
    putLogStreams(value: OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable): void;
    resetLogStreams(): void;
    get logStreamsInput(): cdktf.IResolvable | OpsworksRailsAppLayerCloudwatchConfigurationLogStreams[] | undefined;
}
export interface OpsworksRailsAppLayerEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#encrypted OpsworksRailsAppLayer#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#iops OpsworksRailsAppLayer#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#mount_point OpsworksRailsAppLayer#mount_point}
    */
    readonly mountPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#number_of_disks OpsworksRailsAppLayer#number_of_disks}
    */
    readonly numberOfDisks: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#raid_level OpsworksRailsAppLayer#raid_level}
    */
    readonly raidLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#size OpsworksRailsAppLayer#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#type OpsworksRailsAppLayer#type}
    */
    readonly type?: string;
}
export declare function opsworksRailsAppLayerEbsVolumeToTerraform(struct?: OpsworksRailsAppLayerEbsVolume | cdktf.IResolvable): any;
export declare function opsworksRailsAppLayerEbsVolumeToHclTerraform(struct?: OpsworksRailsAppLayerEbsVolume | cdktf.IResolvable): any;
export declare class OpsworksRailsAppLayerEbsVolumeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpsworksRailsAppLayerEbsVolume | cdktf.IResolvable | undefined;
    set internalValue(value: OpsworksRailsAppLayerEbsVolume | cdktf.IResolvable | undefined);
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
export declare class OpsworksRailsAppLayerEbsVolumeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OpsworksRailsAppLayerEbsVolume[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OpsworksRailsAppLayerEbsVolumeOutputReference;
}
export interface OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}
    */
    readonly alarms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}
    */
    readonly cpuThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}
    */
    readonly ignoreMetricsTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}
    */
    readonly loadThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}
    */
    readonly memoryThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}
    */
    readonly thresholdsWaitTime?: number;
}
export declare function opsworksRailsAppLayerLoadBasedAutoScalingDownscalingToTerraform(struct?: OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference | OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling): any;
export declare function opsworksRailsAppLayerLoadBasedAutoScalingDownscalingToHclTerraform(struct?: OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference | OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling): any;
export declare class OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling | undefined;
    set internalValue(value: OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling | undefined);
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
export interface OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#alarms OpsworksRailsAppLayer#alarms}
    */
    readonly alarms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#cpu_threshold OpsworksRailsAppLayer#cpu_threshold}
    */
    readonly cpuThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#ignore_metrics_time OpsworksRailsAppLayer#ignore_metrics_time}
    */
    readonly ignoreMetricsTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#instance_count OpsworksRailsAppLayer#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#load_threshold OpsworksRailsAppLayer#load_threshold}
    */
    readonly loadThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#memory_threshold OpsworksRailsAppLayer#memory_threshold}
    */
    readonly memoryThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#thresholds_wait_time OpsworksRailsAppLayer#thresholds_wait_time}
    */
    readonly thresholdsWaitTime?: number;
}
export declare function opsworksRailsAppLayerLoadBasedAutoScalingUpscalingToTerraform(struct?: OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference | OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling): any;
export declare function opsworksRailsAppLayerLoadBasedAutoScalingUpscalingToHclTerraform(struct?: OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference | OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling): any;
export declare class OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling | undefined;
    set internalValue(value: OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling | undefined);
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
export interface OpsworksRailsAppLayerLoadBasedAutoScaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#enable OpsworksRailsAppLayer#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * downscaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#downscaling OpsworksRailsAppLayer#downscaling}
    */
    readonly downscaling?: OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling;
    /**
    * upscaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#upscaling OpsworksRailsAppLayer#upscaling}
    */
    readonly upscaling?: OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling;
}
export declare function opsworksRailsAppLayerLoadBasedAutoScalingToTerraform(struct?: OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference | OpsworksRailsAppLayerLoadBasedAutoScaling): any;
export declare function opsworksRailsAppLayerLoadBasedAutoScalingToHclTerraform(struct?: OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference | OpsworksRailsAppLayerLoadBasedAutoScaling): any;
export declare class OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpsworksRailsAppLayerLoadBasedAutoScaling | undefined;
    set internalValue(value: OpsworksRailsAppLayerLoadBasedAutoScaling | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    resetEnable(): void;
    get enableInput(): boolean | cdktf.IResolvable | undefined;
    private _downscaling;
    get downscaling(): OpsworksRailsAppLayerLoadBasedAutoScalingDownscalingOutputReference;
    putDownscaling(value: OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling): void;
    resetDownscaling(): void;
    get downscalingInput(): OpsworksRailsAppLayerLoadBasedAutoScalingDownscaling | undefined;
    private _upscaling;
    get upscaling(): OpsworksRailsAppLayerLoadBasedAutoScalingUpscalingOutputReference;
    putUpscaling(value: OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling): void;
    resetUpscaling(): void;
    get upscalingInput(): OpsworksRailsAppLayerLoadBasedAutoScalingUpscaling | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer aws_opsworks_rails_app_layer}
*/
export declare class OpsworksRailsAppLayer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_rails_app_layer";
    /**
    * Generates CDKTF code for importing a OpsworksRailsAppLayer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksRailsAppLayer to import
    * @param importFromId The id of the existing OpsworksRailsAppLayer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksRailsAppLayer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rails_app_layer aws_opsworks_rails_app_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksRailsAppLayerConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksRailsAppLayerConfig);
    private _appServer?;
    get appServer(): string;
    set appServer(value: string);
    resetAppServer(): void;
    get appServerInput(): string | undefined;
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
    private _bundlerVersion?;
    get bundlerVersion(): string;
    set bundlerVersion(value: string);
    resetBundlerVersion(): void;
    get bundlerVersionInput(): string | undefined;
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
    private _manageBundler?;
    get manageBundler(): boolean | cdktf.IResolvable;
    set manageBundler(value: boolean | cdktf.IResolvable);
    resetManageBundler(): void;
    get manageBundlerInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _passengerVersion?;
    get passengerVersion(): string;
    set passengerVersion(value: string);
    resetPassengerVersion(): void;
    get passengerVersionInput(): string | undefined;
    private _rubyVersion?;
    get rubyVersion(): string;
    set rubyVersion(value: string);
    resetRubyVersion(): void;
    get rubyVersionInput(): string | undefined;
    private _rubygemsVersion?;
    get rubygemsVersion(): string;
    set rubygemsVersion(value: string);
    resetRubygemsVersion(): void;
    get rubygemsVersionInput(): string | undefined;
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
    get cloudwatchConfiguration(): OpsworksRailsAppLayerCloudwatchConfigurationOutputReference;
    putCloudwatchConfiguration(value: OpsworksRailsAppLayerCloudwatchConfiguration): void;
    resetCloudwatchConfiguration(): void;
    get cloudwatchConfigurationInput(): OpsworksRailsAppLayerCloudwatchConfiguration | undefined;
    private _ebsVolume;
    get ebsVolume(): OpsworksRailsAppLayerEbsVolumeList;
    putEbsVolume(value: OpsworksRailsAppLayerEbsVolume[] | cdktf.IResolvable): void;
    resetEbsVolume(): void;
    get ebsVolumeInput(): cdktf.IResolvable | OpsworksRailsAppLayerEbsVolume[] | undefined;
    private _loadBasedAutoScaling;
    get loadBasedAutoScaling(): OpsworksRailsAppLayerLoadBasedAutoScalingOutputReference;
    putLoadBasedAutoScaling(value: OpsworksRailsAppLayerLoadBasedAutoScaling): void;
    resetLoadBasedAutoScaling(): void;
    get loadBasedAutoScalingInput(): OpsworksRailsAppLayerLoadBasedAutoScaling | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
