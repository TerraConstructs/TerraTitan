/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrcontainersJobTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * job_template_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#job_template_data EmrcontainersJobTemplate#job_template_data}
    */
    readonly jobTemplateData: EmrcontainersJobTemplateJobTemplateData;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#timeouts EmrcontainersJobTemplate#timeouts}
    */
    readonly timeouts?: EmrcontainersJobTemplateTimeouts;
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}
    */
    readonly properties?: {
        [key: string]: string;
    };
}
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations | cdktf.IResolvable): any;
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations | cdktf.IResolvable): any;
export declare class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations | cdktf.IResolvable | undefined);
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
export declare class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference;
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}
    */
    readonly classification: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}
    */
    readonly properties?: {
        [key: string]: string;
    };
    /**
    * configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#configurations EmrcontainersJobTemplate#configurations}
    */
    readonly configurations?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations[] | cdktf.IResolvable;
}
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration | cdktf.IResolvable): any;
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration | cdktf.IResolvable): any;
export declare class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration | cdktf.IResolvable | undefined);
    private _classification?;
    get classification(): string;
    set classification(value: string);
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
    private _configurations;
    get configurations(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList;
    putConfigurations(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations[] | cdktf.IResolvable): void;
    resetConfigurations(): void;
    get configurationsInput(): cdktf.IResolvable | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations[] | undefined;
}
export declare class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference;
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#log_group_name EmrcontainersJobTemplate#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#log_stream_name_prefix EmrcontainersJobTemplate#log_stream_name_prefix}
    */
    readonly logStreamNamePrefix?: string;
}
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration): any;
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration): any;
export declare class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration | undefined);
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string | undefined;
    private _logStreamNamePrefix?;
    get logStreamNamePrefix(): string;
    set logStreamNamePrefix(value: string);
    resetLogStreamNamePrefix(): void;
    get logStreamNamePrefixInput(): string | undefined;
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#log_uri EmrcontainersJobTemplate#log_uri}
    */
    readonly logUri: string;
}
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration): any;
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration): any;
export declare class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration | undefined);
    private _logUri?;
    get logUri(): string;
    set logUri(value: string);
    get logUriInput(): string | undefined;
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#persistent_app_ui EmrcontainersJobTemplate#persistent_app_ui}
    */
    readonly persistentAppUi?: string;
    /**
    * cloud_watch_monitoring_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#cloud_watch_monitoring_configuration EmrcontainersJobTemplate#cloud_watch_monitoring_configuration}
    */
    readonly cloudWatchMonitoringConfiguration?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration;
    /**
    * s3_monitoring_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#s3_monitoring_configuration EmrcontainersJobTemplate#s3_monitoring_configuration}
    */
    readonly s3MonitoringConfiguration?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration;
}
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration): any;
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration): any;
export declare class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration | undefined);
    private _persistentAppUi?;
    get persistentAppUi(): string;
    set persistentAppUi(value: string);
    resetPersistentAppUi(): void;
    get persistentAppUiInput(): string | undefined;
    private _cloudWatchMonitoringConfiguration;
    get cloudWatchMonitoringConfiguration(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference;
    putCloudWatchMonitoringConfiguration(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration): void;
    resetCloudWatchMonitoringConfiguration(): void;
    get cloudWatchMonitoringConfigurationInput(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration | undefined;
    private _s3MonitoringConfiguration;
    get s3MonitoringConfiguration(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference;
    putS3MonitoringConfiguration(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration): void;
    resetS3MonitoringConfiguration(): void;
    get s3MonitoringConfigurationInput(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration | undefined;
}
export interface EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides {
    /**
    * application_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#application_configuration EmrcontainersJobTemplate#application_configuration}
    */
    readonly applicationConfiguration?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration[] | cdktf.IResolvable;
    /**
    * monitoring_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#monitoring_configuration EmrcontainersJobTemplate#monitoring_configuration}
    */
    readonly monitoringConfiguration?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration;
}
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides): any;
export declare function emrcontainersJobTemplateJobTemplateDataConfigurationOverridesToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference | EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides): any;
export declare class EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides | undefined);
    private _applicationConfiguration;
    get applicationConfiguration(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList;
    putApplicationConfiguration(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration[] | cdktf.IResolvable): void;
    resetApplicationConfiguration(): void;
    get applicationConfigurationInput(): cdktf.IResolvable | EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration[] | undefined;
    private _monitoringConfiguration;
    get monitoringConfiguration(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference;
    putMonitoringConfiguration(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration): void;
    resetMonitoringConfiguration(): void;
    get monitoringConfigurationInput(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration | undefined;
}
export interface EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}
    */
    readonly entryPoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#spark_sql_parameters EmrcontainersJobTemplate#spark_sql_parameters}
    */
    readonly sparkSqlParameters?: string;
}
export declare function emrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference | EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver): any;
export declare function emrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference | EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver): any;
export declare class EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver | undefined);
    private _entryPoint?;
    get entryPoint(): string;
    set entryPoint(value: string);
    resetEntryPoint(): void;
    get entryPointInput(): string | undefined;
    private _sparkSqlParameters?;
    get sparkSqlParameters(): string;
    set sparkSqlParameters(value: string);
    resetSparkSqlParameters(): void;
    get sparkSqlParametersInput(): string | undefined;
}
export interface EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}
    */
    readonly entryPoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#entry_point_arguments EmrcontainersJobTemplate#entry_point_arguments}
    */
    readonly entryPointArguments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#spark_submit_parameters EmrcontainersJobTemplate#spark_submit_parameters}
    */
    readonly sparkSubmitParameters?: string;
}
export declare function emrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference | EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver): any;
export declare function emrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference | EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver): any;
export declare class EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver | undefined);
    private _entryPoint?;
    get entryPoint(): string;
    set entryPoint(value: string);
    get entryPointInput(): string | undefined;
    private _entryPointArguments?;
    get entryPointArguments(): string[];
    set entryPointArguments(value: string[]);
    resetEntryPointArguments(): void;
    get entryPointArgumentsInput(): string[] | undefined;
    private _sparkSubmitParameters?;
    get sparkSubmitParameters(): string;
    set sparkSubmitParameters(value: string);
    resetSparkSubmitParameters(): void;
    get sparkSubmitParametersInput(): string | undefined;
}
export interface EmrcontainersJobTemplateJobTemplateDataJobDriver {
    /**
    * spark_sql_job_driver block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#spark_sql_job_driver EmrcontainersJobTemplate#spark_sql_job_driver}
    */
    readonly sparkSqlJobDriver?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver;
    /**
    * spark_submit_job_driver block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#spark_submit_job_driver EmrcontainersJobTemplate#spark_submit_job_driver}
    */
    readonly sparkSubmitJobDriver?: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver;
}
export declare function emrcontainersJobTemplateJobTemplateDataJobDriverToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference | EmrcontainersJobTemplateJobTemplateDataJobDriver): any;
export declare function emrcontainersJobTemplateJobTemplateDataJobDriverToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference | EmrcontainersJobTemplateJobTemplateDataJobDriver): any;
export declare class EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersJobTemplateJobTemplateDataJobDriver | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateDataJobDriver | undefined);
    private _sparkSqlJobDriver;
    get sparkSqlJobDriver(): EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference;
    putSparkSqlJobDriver(value: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver): void;
    resetSparkSqlJobDriver(): void;
    get sparkSqlJobDriverInput(): EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver | undefined;
    private _sparkSubmitJobDriver;
    get sparkSubmitJobDriver(): EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference;
    putSparkSubmitJobDriver(value: EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver): void;
    resetSparkSubmitJobDriver(): void;
    get sparkSubmitJobDriverInput(): EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver | undefined;
}
export interface EmrcontainersJobTemplateJobTemplateData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#execution_role_arn EmrcontainersJobTemplate#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#job_tags EmrcontainersJobTemplate#job_tags}
    */
    readonly jobTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#release_label EmrcontainersJobTemplate#release_label}
    */
    readonly releaseLabel: string;
    /**
    * configuration_overrides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#configuration_overrides EmrcontainersJobTemplate#configuration_overrides}
    */
    readonly configurationOverrides?: EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides;
    /**
    * job_driver block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#job_driver EmrcontainersJobTemplate#job_driver}
    */
    readonly jobDriver: EmrcontainersJobTemplateJobTemplateDataJobDriver;
}
export declare function emrcontainersJobTemplateJobTemplateDataToTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataOutputReference | EmrcontainersJobTemplateJobTemplateData): any;
export declare function emrcontainersJobTemplateJobTemplateDataToHclTerraform(struct?: EmrcontainersJobTemplateJobTemplateDataOutputReference | EmrcontainersJobTemplateJobTemplateData): any;
export declare class EmrcontainersJobTemplateJobTemplateDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersJobTemplateJobTemplateData | undefined;
    set internalValue(value: EmrcontainersJobTemplateJobTemplateData | undefined);
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string | undefined;
    private _jobTags?;
    get jobTags(): {
        [key: string]: string;
    };
    set jobTags(value: {
        [key: string]: string;
    });
    resetJobTags(): void;
    get jobTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _releaseLabel?;
    get releaseLabel(): string;
    set releaseLabel(value: string);
    get releaseLabelInput(): string | undefined;
    private _configurationOverrides;
    get configurationOverrides(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference;
    putConfigurationOverrides(value: EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides): void;
    resetConfigurationOverrides(): void;
    get configurationOverridesInput(): EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides | undefined;
    private _jobDriver;
    get jobDriver(): EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference;
    putJobDriver(value: EmrcontainersJobTemplateJobTemplateDataJobDriver): void;
    get jobDriverInput(): EmrcontainersJobTemplateJobTemplateDataJobDriver | undefined;
}
export interface EmrcontainersJobTemplateTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#delete EmrcontainersJobTemplate#delete}
    */
    readonly delete?: string;
}
export declare function emrcontainersJobTemplateTimeoutsToTerraform(struct?: EmrcontainersJobTemplateTimeouts | cdktf.IResolvable): any;
export declare function emrcontainersJobTemplateTimeoutsToHclTerraform(struct?: EmrcontainersJobTemplateTimeouts | cdktf.IResolvable): any;
export declare class EmrcontainersJobTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersJobTemplateTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EmrcontainersJobTemplateTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template aws_emrcontainers_job_template}
*/
export declare class EmrcontainersJobTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emrcontainers_job_template";
    /**
    * Generates CDKTF code for importing a EmrcontainersJobTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrcontainersJobTemplate to import
    * @param importFromId The id of the existing EmrcontainersJobTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrcontainersJobTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_job_template aws_emrcontainers_job_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrcontainersJobTemplateConfig
    */
    constructor(scope: Construct, id: string, config: EmrcontainersJobTemplateConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _jobTemplateData;
    get jobTemplateData(): EmrcontainersJobTemplateJobTemplateDataOutputReference;
    putJobTemplateData(value: EmrcontainersJobTemplateJobTemplateData): void;
    get jobTemplateDataInput(): EmrcontainersJobTemplateJobTemplateData | undefined;
    private _timeouts;
    get timeouts(): EmrcontainersJobTemplateTimeoutsOutputReference;
    putTimeouts(value: EmrcontainersJobTemplateTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EmrcontainersJobTemplateTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
