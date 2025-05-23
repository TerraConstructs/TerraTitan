/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MwaaEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}
    */
    readonly airflowConfigurationOptions?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}
    */
    readonly airflowVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}
    */
    readonly dagS3Path: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#endpoint_management MwaaEnvironment#endpoint_management}
    */
    readonly endpointManagement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#environment_class MwaaEnvironment#environment_class}
    */
    readonly environmentClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#id MwaaEnvironment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#kms_key MwaaEnvironment#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#max_webservers MwaaEnvironment#max_webservers}
    */
    readonly maxWebservers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#max_workers MwaaEnvironment#max_workers}
    */
    readonly maxWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#min_webservers MwaaEnvironment#min_webservers}
    */
    readonly minWebservers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#min_workers MwaaEnvironment#min_workers}
    */
    readonly minWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#name MwaaEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}
    */
    readonly pluginsS3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}
    */
    readonly pluginsS3Path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}
    */
    readonly requirementsS3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}
    */
    readonly requirementsS3Path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#schedulers MwaaEnvironment#schedulers}
    */
    readonly schedulers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}
    */
    readonly sourceBucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#startup_script_s3_object_version MwaaEnvironment#startup_script_s3_object_version}
    */
    readonly startupScriptS3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#startup_script_s3_path MwaaEnvironment#startup_script_s3_path}
    */
    readonly startupScriptS3Path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#tags MwaaEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#tags_all MwaaEnvironment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}
    */
    readonly webserverAccessMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}
    */
    readonly weeklyMaintenanceWindowStart?: string;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#logging_configuration MwaaEnvironment#logging_configuration}
    */
    readonly loggingConfiguration?: MwaaEnvironmentLoggingConfiguration;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#network_configuration MwaaEnvironment#network_configuration}
    */
    readonly networkConfiguration: MwaaEnvironmentNetworkConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#timeouts MwaaEnvironment#timeouts}
    */
    readonly timeouts?: MwaaEnvironmentTimeouts;
}
export interface MwaaEnvironmentLastUpdatedError {
}
export declare function mwaaEnvironmentLastUpdatedErrorToTerraform(struct?: MwaaEnvironmentLastUpdatedError): any;
export declare function mwaaEnvironmentLastUpdatedErrorToHclTerraform(struct?: MwaaEnvironmentLastUpdatedError): any;
export declare class MwaaEnvironmentLastUpdatedErrorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MwaaEnvironmentLastUpdatedError | undefined;
    set internalValue(value: MwaaEnvironmentLastUpdatedError | undefined);
    get errorCode(): string;
    get errorMessage(): string;
}
export declare class MwaaEnvironmentLastUpdatedErrorList extends cdktf.ComplexList {
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
    get(index: number): MwaaEnvironmentLastUpdatedErrorOutputReference;
}
export interface MwaaEnvironmentLastUpdated {
}
export declare function mwaaEnvironmentLastUpdatedToTerraform(struct?: MwaaEnvironmentLastUpdated): any;
export declare function mwaaEnvironmentLastUpdatedToHclTerraform(struct?: MwaaEnvironmentLastUpdated): any;
export declare class MwaaEnvironmentLastUpdatedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MwaaEnvironmentLastUpdated | undefined;
    set internalValue(value: MwaaEnvironmentLastUpdated | undefined);
    get createdAt(): string;
    private _error;
    get error(): MwaaEnvironmentLastUpdatedErrorList;
    get status(): string;
}
export declare class MwaaEnvironmentLastUpdatedList extends cdktf.ComplexList {
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
    get(index: number): MwaaEnvironmentLastUpdatedOutputReference;
}
export interface MwaaEnvironmentLoggingConfigurationDagProcessingLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference | MwaaEnvironmentLoggingConfigurationDagProcessingLogs): any;
export declare function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToHclTerraform(struct?: MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference | MwaaEnvironmentLoggingConfigurationDagProcessingLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined);
    get cloudWatchLogGroupArn(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string | undefined;
}
export interface MwaaEnvironmentLoggingConfigurationSchedulerLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference | MwaaEnvironmentLoggingConfigurationSchedulerLogs): any;
export declare function mwaaEnvironmentLoggingConfigurationSchedulerLogsToHclTerraform(struct?: MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference | MwaaEnvironmentLoggingConfigurationSchedulerLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined);
    get cloudWatchLogGroupArn(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string | undefined;
}
export interface MwaaEnvironmentLoggingConfigurationTaskLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference | MwaaEnvironmentLoggingConfigurationTaskLogs): any;
export declare function mwaaEnvironmentLoggingConfigurationTaskLogsToHclTerraform(struct?: MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference | MwaaEnvironmentLoggingConfigurationTaskLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MwaaEnvironmentLoggingConfigurationTaskLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationTaskLogs | undefined);
    get cloudWatchLogGroupArn(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string | undefined;
}
export interface MwaaEnvironmentLoggingConfigurationWebserverLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference | MwaaEnvironmentLoggingConfigurationWebserverLogs): any;
export declare function mwaaEnvironmentLoggingConfigurationWebserverLogsToHclTerraform(struct?: MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference | MwaaEnvironmentLoggingConfigurationWebserverLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MwaaEnvironmentLoggingConfigurationWebserverLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationWebserverLogs | undefined);
    get cloudWatchLogGroupArn(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string | undefined;
}
export interface MwaaEnvironmentLoggingConfigurationWorkerLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#enabled MwaaEnvironment#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#log_level MwaaEnvironment#log_level}
    */
    readonly logLevel?: string;
}
export declare function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference | MwaaEnvironmentLoggingConfigurationWorkerLogs): any;
export declare function mwaaEnvironmentLoggingConfigurationWorkerLogsToHclTerraform(struct?: MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference | MwaaEnvironmentLoggingConfigurationWorkerLogs): any;
export declare class MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MwaaEnvironmentLoggingConfigurationWorkerLogs | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfigurationWorkerLogs | undefined);
    get cloudWatchLogGroupArn(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string | undefined;
}
export interface MwaaEnvironmentLoggingConfiguration {
    /**
    * dag_processing_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#dag_processing_logs MwaaEnvironment#dag_processing_logs}
    */
    readonly dagProcessingLogs?: MwaaEnvironmentLoggingConfigurationDagProcessingLogs;
    /**
    * scheduler_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#scheduler_logs MwaaEnvironment#scheduler_logs}
    */
    readonly schedulerLogs?: MwaaEnvironmentLoggingConfigurationSchedulerLogs;
    /**
    * task_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#task_logs MwaaEnvironment#task_logs}
    */
    readonly taskLogs?: MwaaEnvironmentLoggingConfigurationTaskLogs;
    /**
    * webserver_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#webserver_logs MwaaEnvironment#webserver_logs}
    */
    readonly webserverLogs?: MwaaEnvironmentLoggingConfigurationWebserverLogs;
    /**
    * worker_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#worker_logs MwaaEnvironment#worker_logs}
    */
    readonly workerLogs?: MwaaEnvironmentLoggingConfigurationWorkerLogs;
}
export declare function mwaaEnvironmentLoggingConfigurationToTerraform(struct?: MwaaEnvironmentLoggingConfigurationOutputReference | MwaaEnvironmentLoggingConfiguration): any;
export declare function mwaaEnvironmentLoggingConfigurationToHclTerraform(struct?: MwaaEnvironmentLoggingConfigurationOutputReference | MwaaEnvironmentLoggingConfiguration): any;
export declare class MwaaEnvironmentLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MwaaEnvironmentLoggingConfiguration | undefined;
    set internalValue(value: MwaaEnvironmentLoggingConfiguration | undefined);
    private _dagProcessingLogs;
    get dagProcessingLogs(): MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference;
    putDagProcessingLogs(value: MwaaEnvironmentLoggingConfigurationDagProcessingLogs): void;
    resetDagProcessingLogs(): void;
    get dagProcessingLogsInput(): MwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined;
    private _schedulerLogs;
    get schedulerLogs(): MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference;
    putSchedulerLogs(value: MwaaEnvironmentLoggingConfigurationSchedulerLogs): void;
    resetSchedulerLogs(): void;
    get schedulerLogsInput(): MwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined;
    private _taskLogs;
    get taskLogs(): MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference;
    putTaskLogs(value: MwaaEnvironmentLoggingConfigurationTaskLogs): void;
    resetTaskLogs(): void;
    get taskLogsInput(): MwaaEnvironmentLoggingConfigurationTaskLogs | undefined;
    private _webserverLogs;
    get webserverLogs(): MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference;
    putWebserverLogs(value: MwaaEnvironmentLoggingConfigurationWebserverLogs): void;
    resetWebserverLogs(): void;
    get webserverLogsInput(): MwaaEnvironmentLoggingConfigurationWebserverLogs | undefined;
    private _workerLogs;
    get workerLogs(): MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference;
    putWorkerLogs(value: MwaaEnvironmentLoggingConfigurationWorkerLogs): void;
    resetWorkerLogs(): void;
    get workerLogsInput(): MwaaEnvironmentLoggingConfigurationWorkerLogs | undefined;
}
export interface MwaaEnvironmentNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function mwaaEnvironmentNetworkConfigurationToTerraform(struct?: MwaaEnvironmentNetworkConfigurationOutputReference | MwaaEnvironmentNetworkConfiguration): any;
export declare function mwaaEnvironmentNetworkConfigurationToHclTerraform(struct?: MwaaEnvironmentNetworkConfigurationOutputReference | MwaaEnvironmentNetworkConfiguration): any;
export declare class MwaaEnvironmentNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MwaaEnvironmentNetworkConfiguration | undefined;
    set internalValue(value: MwaaEnvironmentNetworkConfiguration | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
}
export interface MwaaEnvironmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#create MwaaEnvironment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#delete MwaaEnvironment#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#update MwaaEnvironment#update}
    */
    readonly update?: string;
}
export declare function mwaaEnvironmentTimeoutsToTerraform(struct?: MwaaEnvironmentTimeouts | cdktf.IResolvable): any;
export declare function mwaaEnvironmentTimeoutsToHclTerraform(struct?: MwaaEnvironmentTimeouts | cdktf.IResolvable): any;
export declare class MwaaEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MwaaEnvironmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MwaaEnvironmentTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment aws_mwaa_environment}
*/
export declare class MwaaEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_mwaa_environment";
    /**
    * Generates CDKTF code for importing a MwaaEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MwaaEnvironment to import
    * @param importFromId The id of the existing MwaaEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MwaaEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mwaa_environment aws_mwaa_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MwaaEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: MwaaEnvironmentConfig);
    private _airflowConfigurationOptions?;
    get airflowConfigurationOptions(): {
        [key: string]: string;
    };
    set airflowConfigurationOptions(value: {
        [key: string]: string;
    });
    resetAirflowConfigurationOptions(): void;
    get airflowConfigurationOptionsInput(): {
        [key: string]: string;
    } | undefined;
    private _airflowVersion?;
    get airflowVersion(): string;
    set airflowVersion(value: string);
    resetAirflowVersion(): void;
    get airflowVersionInput(): string | undefined;
    get arn(): string;
    get createdAt(): string;
    private _dagS3Path?;
    get dagS3Path(): string;
    set dagS3Path(value: string);
    get dagS3PathInput(): string | undefined;
    get databaseVpcEndpointService(): string;
    private _endpointManagement?;
    get endpointManagement(): string;
    set endpointManagement(value: string);
    resetEndpointManagement(): void;
    get endpointManagementInput(): string | undefined;
    private _environmentClass?;
    get environmentClass(): string;
    set environmentClass(value: string);
    resetEnvironmentClass(): void;
    get environmentClassInput(): string | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
    private _lastUpdated;
    get lastUpdated(): MwaaEnvironmentLastUpdatedList;
    private _maxWebservers?;
    get maxWebservers(): number;
    set maxWebservers(value: number);
    resetMaxWebservers(): void;
    get maxWebserversInput(): number | undefined;
    private _maxWorkers?;
    get maxWorkers(): number;
    set maxWorkers(value: number);
    resetMaxWorkers(): void;
    get maxWorkersInput(): number | undefined;
    private _minWebservers?;
    get minWebservers(): number;
    set minWebservers(value: number);
    resetMinWebservers(): void;
    get minWebserversInput(): number | undefined;
    private _minWorkers?;
    get minWorkers(): number;
    set minWorkers(value: number);
    resetMinWorkers(): void;
    get minWorkersInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _pluginsS3ObjectVersion?;
    get pluginsS3ObjectVersion(): string;
    set pluginsS3ObjectVersion(value: string);
    resetPluginsS3ObjectVersion(): void;
    get pluginsS3ObjectVersionInput(): string | undefined;
    private _pluginsS3Path?;
    get pluginsS3Path(): string;
    set pluginsS3Path(value: string);
    resetPluginsS3Path(): void;
    get pluginsS3PathInput(): string | undefined;
    private _requirementsS3ObjectVersion?;
    get requirementsS3ObjectVersion(): string;
    set requirementsS3ObjectVersion(value: string);
    resetRequirementsS3ObjectVersion(): void;
    get requirementsS3ObjectVersionInput(): string | undefined;
    private _requirementsS3Path?;
    get requirementsS3Path(): string;
    set requirementsS3Path(value: string);
    resetRequirementsS3Path(): void;
    get requirementsS3PathInput(): string | undefined;
    private _schedulers?;
    get schedulers(): number;
    set schedulers(value: number);
    resetSchedulers(): void;
    get schedulersInput(): number | undefined;
    get serviceRoleArn(): string;
    private _sourceBucketArn?;
    get sourceBucketArn(): string;
    set sourceBucketArn(value: string);
    get sourceBucketArnInput(): string | undefined;
    private _startupScriptS3ObjectVersion?;
    get startupScriptS3ObjectVersion(): string;
    set startupScriptS3ObjectVersion(value: string);
    resetStartupScriptS3ObjectVersion(): void;
    get startupScriptS3ObjectVersionInput(): string | undefined;
    private _startupScriptS3Path?;
    get startupScriptS3Path(): string;
    set startupScriptS3Path(value: string);
    resetStartupScriptS3Path(): void;
    get startupScriptS3PathInput(): string | undefined;
    get status(): string;
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
    private _webserverAccessMode?;
    get webserverAccessMode(): string;
    set webserverAccessMode(value: string);
    resetWebserverAccessMode(): void;
    get webserverAccessModeInput(): string | undefined;
    get webserverUrl(): string;
    get webserverVpcEndpointService(): string;
    private _weeklyMaintenanceWindowStart?;
    get weeklyMaintenanceWindowStart(): string;
    set weeklyMaintenanceWindowStart(value: string);
    resetWeeklyMaintenanceWindowStart(): void;
    get weeklyMaintenanceWindowStartInput(): string | undefined;
    private _loggingConfiguration;
    get loggingConfiguration(): MwaaEnvironmentLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: MwaaEnvironmentLoggingConfiguration): void;
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): MwaaEnvironmentLoggingConfiguration | undefined;
    private _networkConfiguration;
    get networkConfiguration(): MwaaEnvironmentNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: MwaaEnvironmentNetworkConfiguration): void;
    get networkConfigurationInput(): MwaaEnvironmentNetworkConfiguration | undefined;
    private _timeouts;
    get timeouts(): MwaaEnvironmentTimeoutsOutputReference;
    putTimeouts(value: MwaaEnvironmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MwaaEnvironmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
