/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InternetmonitorMonitorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}
    */
    readonly maxCityNetworksToMonitor?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}
    */
    readonly monitorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}
    */
    readonly resources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}
    */
    readonly trafficPercentageToMonitor?: number;
    /**
    * health_events_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}
    */
    readonly healthEventsConfig?: InternetmonitorMonitorHealthEventsConfig;
    /**
    * internet_measurements_log_delivery block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}
    */
    readonly internetMeasurementsLogDelivery?: InternetmonitorMonitorInternetMeasurementsLogDelivery;
}
export interface InternetmonitorMonitorHealthEventsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}
    */
    readonly availabilityScoreThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}
    */
    readonly performanceScoreThreshold?: number;
}
export declare function internetmonitorMonitorHealthEventsConfigToTerraform(struct?: InternetmonitorMonitorHealthEventsConfigOutputReference | InternetmonitorMonitorHealthEventsConfig): any;
export declare function internetmonitorMonitorHealthEventsConfigToHclTerraform(struct?: InternetmonitorMonitorHealthEventsConfigOutputReference | InternetmonitorMonitorHealthEventsConfig): any;
export declare class InternetmonitorMonitorHealthEventsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InternetmonitorMonitorHealthEventsConfig | undefined;
    set internalValue(value: InternetmonitorMonitorHealthEventsConfig | undefined);
    private _availabilityScoreThreshold?;
    get availabilityScoreThreshold(): number;
    set availabilityScoreThreshold(value: number);
    resetAvailabilityScoreThreshold(): void;
    get availabilityScoreThresholdInput(): number | undefined;
    private _performanceScoreThreshold?;
    get performanceScoreThreshold(): number;
    set performanceScoreThreshold(value: number);
    resetPerformanceScoreThreshold(): void;
    get performanceScoreThresholdInput(): number | undefined;
}
export interface InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}
    */
    readonly logDeliveryStatus?: string;
}
export declare function internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference | InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config): any;
export declare function internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToHclTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference | InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config): any;
export declare class InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | undefined;
    set internalValue(value: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _logDeliveryStatus?;
    get logDeliveryStatus(): string;
    set logDeliveryStatus(value: string);
    resetLogDeliveryStatus(): void;
    get logDeliveryStatusInput(): string | undefined;
}
export interface InternetmonitorMonitorInternetMeasurementsLogDelivery {
    /**
    * s3_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}
    */
    readonly s3Config?: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config;
}
export declare function internetmonitorMonitorInternetMeasurementsLogDeliveryToTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference | InternetmonitorMonitorInternetMeasurementsLogDelivery): any;
export declare function internetmonitorMonitorInternetMeasurementsLogDeliveryToHclTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference | InternetmonitorMonitorInternetMeasurementsLogDelivery): any;
export declare class InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InternetmonitorMonitorInternetMeasurementsLogDelivery | undefined;
    set internalValue(value: InternetmonitorMonitorInternetMeasurementsLogDelivery | undefined);
    private _s3Config;
    get s3Config(): InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference;
    putS3Config(value: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config): void;
    resetS3Config(): void;
    get s3ConfigInput(): InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor aws_internetmonitor_monitor}
*/
export declare class InternetmonitorMonitor extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_internetmonitor_monitor";
    /**
    * Generates CDKTF code for importing a InternetmonitorMonitor resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the InternetmonitorMonitor to import
    * @param importFromId The id of the existing InternetmonitorMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the InternetmonitorMonitor to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/internetmonitor_monitor aws_internetmonitor_monitor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InternetmonitorMonitorConfig
    */
    constructor(scope: Construct, id: string, config: InternetmonitorMonitorConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxCityNetworksToMonitor?;
    get maxCityNetworksToMonitor(): number;
    set maxCityNetworksToMonitor(value: number);
    resetMaxCityNetworksToMonitor(): void;
    get maxCityNetworksToMonitorInput(): number | undefined;
    private _monitorName?;
    get monitorName(): string;
    set monitorName(value: string);
    get monitorNameInput(): string | undefined;
    private _resources?;
    get resources(): string[];
    set resources(value: string[]);
    resetResources(): void;
    get resourcesInput(): string[] | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _trafficPercentageToMonitor?;
    get trafficPercentageToMonitor(): number;
    set trafficPercentageToMonitor(value: number);
    resetTrafficPercentageToMonitor(): void;
    get trafficPercentageToMonitorInput(): number | undefined;
    private _healthEventsConfig;
    get healthEventsConfig(): InternetmonitorMonitorHealthEventsConfigOutputReference;
    putHealthEventsConfig(value: InternetmonitorMonitorHealthEventsConfig): void;
    resetHealthEventsConfig(): void;
    get healthEventsConfigInput(): InternetmonitorMonitorHealthEventsConfig | undefined;
    private _internetMeasurementsLogDelivery;
    get internetMeasurementsLogDelivery(): InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference;
    putInternetMeasurementsLogDelivery(value: InternetmonitorMonitorInternetMeasurementsLogDelivery): void;
    resetInternetMeasurementsLogDelivery(): void;
    get internetMeasurementsLogDeliveryInput(): InternetmonitorMonitorInternetMeasurementsLogDelivery | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
