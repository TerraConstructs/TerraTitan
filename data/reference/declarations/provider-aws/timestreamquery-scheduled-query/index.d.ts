/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TimestreamqueryScheduledQueryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#execution_role_arn TimestreamqueryScheduledQuery#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#kms_key_id TimestreamqueryScheduledQuery#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#name TimestreamqueryScheduledQuery#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#query_string TimestreamqueryScheduledQuery#query_string}
    */
    readonly queryString: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#tags TimestreamqueryScheduledQuery#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * error_report_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#error_report_configuration TimestreamqueryScheduledQuery#error_report_configuration}
    */
    readonly errorReportConfiguration?: TimestreamqueryScheduledQueryErrorReportConfiguration[] | cdktf.IResolvable;
    /**
    * last_run_summary block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#last_run_summary TimestreamqueryScheduledQuery#last_run_summary}
    */
    readonly lastRunSummary?: TimestreamqueryScheduledQueryLastRunSummary[] | cdktf.IResolvable;
    /**
    * notification_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#notification_configuration TimestreamqueryScheduledQuery#notification_configuration}
    */
    readonly notificationConfiguration?: TimestreamqueryScheduledQueryNotificationConfiguration[] | cdktf.IResolvable;
    /**
    * recently_failed_runs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#recently_failed_runs TimestreamqueryScheduledQuery#recently_failed_runs}
    */
    readonly recentlyFailedRuns?: TimestreamqueryScheduledQueryRecentlyFailedRuns[] | cdktf.IResolvable;
    /**
    * schedule_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#schedule_configuration TimestreamqueryScheduledQuery#schedule_configuration}
    */
    readonly scheduleConfiguration?: TimestreamqueryScheduledQueryScheduleConfiguration[] | cdktf.IResolvable;
    /**
    * target_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#target_configuration TimestreamqueryScheduledQuery#target_configuration}
    */
    readonly targetConfiguration?: TimestreamqueryScheduledQueryTargetConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#timeouts TimestreamqueryScheduledQuery#timeouts}
    */
    readonly timeouts?: TimestreamqueryScheduledQueryTimeouts;
}
export interface TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#bucket_name TimestreamqueryScheduledQuery#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#encryption_option TimestreamqueryScheduledQuery#encryption_option}
    */
    readonly encryptionOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#object_key_prefix TimestreamqueryScheduledQuery#object_key_prefix}
    */
    readonly objectKeyPrefix?: string;
}
export declare function timestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration | cdktf.IResolvable | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _encryptionOption?;
    get encryptionOption(): string;
    set encryptionOption(value: string);
    resetEncryptionOption(): void;
    get encryptionOptionInput(): string | undefined;
    private _objectKeyPrefix?;
    get objectKeyPrefix(): string;
    set objectKeyPrefix(value: string);
    resetObjectKeyPrefix(): void;
    get objectKeyPrefixInput(): string | undefined;
}
export declare class TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationOutputReference;
}
export interface TimestreamqueryScheduledQueryErrorReportConfiguration {
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#s3_configuration TimestreamqueryScheduledQuery#s3_configuration}
    */
    readonly s3Configuration?: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryErrorReportConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryErrorReportConfiguration | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryErrorReportConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryErrorReportConfiguration | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryErrorReportConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryErrorReportConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryErrorReportConfiguration | cdktf.IResolvable | undefined);
    private _s3Configuration;
    get s3Configuration(): TimestreamqueryScheduledQueryErrorReportConfigurationS3ConfigurationList;
    putS3Configuration(value: TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration[] | cdktf.IResolvable): void;
    resetS3Configuration(): void;
    get s3ConfigurationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryErrorReportConfigurationS3Configuration[] | undefined;
}
export declare class TimestreamqueryScheduledQueryErrorReportConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryErrorReportConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryErrorReportConfigurationOutputReference;
}
export interface TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation {
}
export declare function timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation | cdktf.IResolvable | undefined);
    get bucketName(): string;
    get objectKey(): string;
}
export declare class TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationOutputReference;
}
export interface TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation {
    /**
    * s3_report_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#s3_report_location TimestreamqueryScheduledQuery#s3_report_location}
    */
    readonly s3ReportLocation?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryLastRunSummaryErrorReportLocationToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation | cdktf.IResolvable | undefined);
    private _s3ReportLocation;
    get s3ReportLocation(): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocationList;
    putS3ReportLocation(value: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation[] | cdktf.IResolvable): void;
    resetS3ReportLocation(): void;
    get s3ReportLocationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationS3ReportLocation[] | undefined;
}
export declare class TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationOutputReference;
}
export interface TimestreamqueryScheduledQueryLastRunSummaryExecutionStats {
}
export declare function timestreamqueryScheduledQueryLastRunSummaryExecutionStatsToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryLastRunSummaryExecutionStatsToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryExecutionStats | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats | cdktf.IResolvable | undefined);
    get bytesMetered(): number;
    get cumulativeBytesScanned(): number;
    get dataWrites(): number;
    get executionTimeInMillis(): number;
    get queryResultRows(): number;
    get recordsIngested(): number;
}
export declare class TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsOutputReference;
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax {
}
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax | cdktf.IResolvable | undefined);
    get partitionKey(): string[];
    get tableArn(): string;
    get value(): number;
}
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxOutputReference;
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage {
    /**
    * max block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#max TimestreamqueryScheduledQuery#max}
    */
    readonly max?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage | cdktf.IResolvable | undefined);
    private _max;
    get max(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMaxList;
    putMax(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax[] | cdktf.IResolvable): void;
    resetMax(): void;
    get maxInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageMax[] | undefined;
}
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageOutputReference;
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax {
}
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax | cdktf.IResolvable | undefined);
    get tableArn(): string;
    get value(): number;
}
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxOutputReference;
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange {
    /**
    * max block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#max TimestreamqueryScheduledQuery#max}
    */
    readonly max?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange | cdktf.IResolvable | undefined);
    private _max;
    get max(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMaxList;
    putMax(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax[] | cdktf.IResolvable): void;
    resetMax(): void;
    get maxInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeMax[] | undefined;
}
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeOutputReference;
}
export interface TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse {
    /**
    * query_spatial_coverage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#query_spatial_coverage TimestreamqueryScheduledQuery#query_spatial_coverage}
    */
    readonly querySpatialCoverage?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage[] | cdktf.IResolvable;
    /**
    * query_temporal_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#query_temporal_range TimestreamqueryScheduledQuery#query_temporal_range}
    */
    readonly queryTemporalRange?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse | cdktf.IResolvable | undefined);
    get outputBytes(): number;
    get outputRows(): number;
    get queryTableCount(): number;
    private _querySpatialCoverage;
    get querySpatialCoverage(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverageList;
    putQuerySpatialCoverage(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage[] | cdktf.IResolvable): void;
    resetQuerySpatialCoverage(): void;
    get querySpatialCoverageInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQuerySpatialCoverage[] | undefined;
    private _queryTemporalRange;
    get queryTemporalRange(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRangeList;
    putQueryTemporalRange(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange[] | cdktf.IResolvable): void;
    resetQueryTemporalRange(): void;
    get queryTemporalRangeInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseQueryTemporalRange[] | undefined;
}
export declare class TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseOutputReference;
}
export interface TimestreamqueryScheduledQueryLastRunSummary {
    /**
    * error_report_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#error_report_location TimestreamqueryScheduledQuery#error_report_location}
    */
    readonly errorReportLocation?: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation[] | cdktf.IResolvable;
    /**
    * execution_stats block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#execution_stats TimestreamqueryScheduledQuery#execution_stats}
    */
    readonly executionStats?: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats[] | cdktf.IResolvable;
    /**
    * query_insights_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#query_insights_response TimestreamqueryScheduledQuery#query_insights_response}
    */
    readonly queryInsightsResponse?: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryLastRunSummaryToTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummary | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryLastRunSummaryToHclTerraform(struct?: TimestreamqueryScheduledQueryLastRunSummary | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryLastRunSummaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryLastRunSummary | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryLastRunSummary | cdktf.IResolvable | undefined);
    get failureReason(): string;
    get invocationTime(): string;
    get runStatus(): string;
    get triggerTime(): string;
    private _errorReportLocation;
    get errorReportLocation(): TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocationList;
    putErrorReportLocation(value: TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation[] | cdktf.IResolvable): void;
    resetErrorReportLocation(): void;
    get errorReportLocationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryLastRunSummaryErrorReportLocation[] | undefined;
    private _executionStats;
    get executionStats(): TimestreamqueryScheduledQueryLastRunSummaryExecutionStatsList;
    putExecutionStats(value: TimestreamqueryScheduledQueryLastRunSummaryExecutionStats[] | cdktf.IResolvable): void;
    resetExecutionStats(): void;
    get executionStatsInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryLastRunSummaryExecutionStats[] | undefined;
    private _queryInsightsResponse;
    get queryInsightsResponse(): TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponseList;
    putQueryInsightsResponse(value: TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse[] | cdktf.IResolvable): void;
    resetQueryInsightsResponse(): void;
    get queryInsightsResponseInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryLastRunSummaryQueryInsightsResponse[] | undefined;
}
export declare class TimestreamqueryScheduledQueryLastRunSummaryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryLastRunSummary[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryLastRunSummaryOutputReference;
}
export interface TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#topic_arn TimestreamqueryScheduledQuery#topic_arn}
    */
    readonly topicArn: string;
}
export declare function timestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration | cdktf.IResolvable | undefined);
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string | undefined;
}
export declare class TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationOutputReference;
}
export interface TimestreamqueryScheduledQueryNotificationConfiguration {
    /**
    * sns_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#sns_configuration TimestreamqueryScheduledQuery#sns_configuration}
    */
    readonly snsConfiguration?: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryNotificationConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryNotificationConfiguration | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryNotificationConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryNotificationConfiguration | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryNotificationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryNotificationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryNotificationConfiguration | cdktf.IResolvable | undefined);
    private _snsConfiguration;
    get snsConfiguration(): TimestreamqueryScheduledQueryNotificationConfigurationSnsConfigurationList;
    putSnsConfiguration(value: TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration[] | cdktf.IResolvable): void;
    resetSnsConfiguration(): void;
    get snsConfigurationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryNotificationConfigurationSnsConfiguration[] | undefined;
}
export declare class TimestreamqueryScheduledQueryNotificationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryNotificationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryNotificationConfigurationOutputReference;
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation {
}
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation | cdktf.IResolvable | undefined);
    get bucketName(): string;
    get objectKey(): string;
}
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationOutputReference;
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation {
    /**
    * s3_report_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#s3_report_location TimestreamqueryScheduledQuery#s3_report_location}
    */
    readonly s3ReportLocation?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation | cdktf.IResolvable | undefined);
    private _s3ReportLocation;
    get s3ReportLocation(): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocationList;
    putS3ReportLocation(value: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation[] | cdktf.IResolvable): void;
    resetS3ReportLocation(): void;
    get s3ReportLocationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationS3ReportLocation[] | undefined;
}
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationOutputReference;
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats {
}
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats | cdktf.IResolvable | undefined);
    get bytesMetered(): number;
    get cumulativeBytesScanned(): number;
    get dataWrites(): number;
    get executionTimeInMillis(): number;
    get queryResultRows(): number;
    get recordsIngested(): number;
}
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsOutputReference;
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax {
}
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax | cdktf.IResolvable | undefined);
    get partitionKey(): string[];
    get tableArn(): string;
    get value(): number;
}
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxOutputReference;
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage {
    /**
    * max block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#max TimestreamqueryScheduledQuery#max}
    */
    readonly max?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage | cdktf.IResolvable | undefined);
    private _max;
    get max(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMaxList;
    putMax(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax[] | cdktf.IResolvable): void;
    resetMax(): void;
    get maxInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageMax[] | undefined;
}
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageOutputReference;
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax {
}
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax | cdktf.IResolvable | undefined);
    get tableArn(): string;
    get value(): number;
}
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxOutputReference;
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange {
    /**
    * max block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#max TimestreamqueryScheduledQuery#max}
    */
    readonly max?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange | cdktf.IResolvable | undefined);
    private _max;
    get max(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMaxList;
    putMax(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax[] | cdktf.IResolvable): void;
    resetMax(): void;
    get maxInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeMax[] | undefined;
}
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeOutputReference;
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse {
    /**
    * query_spatial_coverage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#query_spatial_coverage TimestreamqueryScheduledQuery#query_spatial_coverage}
    */
    readonly querySpatialCoverage?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage[] | cdktf.IResolvable;
    /**
    * query_temporal_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#query_temporal_range TimestreamqueryScheduledQuery#query_temporal_range}
    */
    readonly queryTemporalRange?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse | cdktf.IResolvable | undefined);
    get outputBytes(): number;
    get outputRows(): number;
    get queryTableCount(): number;
    private _querySpatialCoverage;
    get querySpatialCoverage(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverageList;
    putQuerySpatialCoverage(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage[] | cdktf.IResolvable): void;
    resetQuerySpatialCoverage(): void;
    get querySpatialCoverageInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQuerySpatialCoverage[] | undefined;
    private _queryTemporalRange;
    get queryTemporalRange(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRangeList;
    putQueryTemporalRange(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange[] | cdktf.IResolvable): void;
    resetQueryTemporalRange(): void;
    get queryTemporalRangeInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseQueryTemporalRange[] | undefined;
}
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseOutputReference;
}
export interface TimestreamqueryScheduledQueryRecentlyFailedRuns {
    /**
    * error_report_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#error_report_location TimestreamqueryScheduledQuery#error_report_location}
    */
    readonly errorReportLocation?: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation[] | cdktf.IResolvable;
    /**
    * execution_stats block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#execution_stats TimestreamqueryScheduledQuery#execution_stats}
    */
    readonly executionStats?: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats[] | cdktf.IResolvable;
    /**
    * query_insights_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#query_insights_response TimestreamqueryScheduledQuery#query_insights_response}
    */
    readonly queryInsightsResponse?: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsToTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRuns | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryRecentlyFailedRunsToHclTerraform(struct?: TimestreamqueryScheduledQueryRecentlyFailedRuns | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryRecentlyFailedRuns | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryRecentlyFailedRuns | cdktf.IResolvable | undefined);
    get failureReason(): string;
    get invocationTime(): string;
    get runStatus(): string;
    get triggerTime(): string;
    private _errorReportLocation;
    get errorReportLocation(): TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocationList;
    putErrorReportLocation(value: TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation[] | cdktf.IResolvable): void;
    resetErrorReportLocation(): void;
    get errorReportLocationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryRecentlyFailedRunsErrorReportLocation[] | undefined;
    private _executionStats;
    get executionStats(): TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStatsList;
    putExecutionStats(value: TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats[] | cdktf.IResolvable): void;
    resetExecutionStats(): void;
    get executionStatsInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryRecentlyFailedRunsExecutionStats[] | undefined;
    private _queryInsightsResponse;
    get queryInsightsResponse(): TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponseList;
    putQueryInsightsResponse(value: TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse[] | cdktf.IResolvable): void;
    resetQueryInsightsResponse(): void;
    get queryInsightsResponseInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryRecentlyFailedRunsQueryInsightsResponse[] | undefined;
}
export declare class TimestreamqueryScheduledQueryRecentlyFailedRunsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryRecentlyFailedRuns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryRecentlyFailedRunsOutputReference;
}
export interface TimestreamqueryScheduledQueryScheduleConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#schedule_expression TimestreamqueryScheduledQuery#schedule_expression}
    */
    readonly scheduleExpression: string;
}
export declare function timestreamqueryScheduledQueryScheduleConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryScheduleConfiguration | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryScheduleConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryScheduleConfiguration | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryScheduleConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryScheduleConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryScheduleConfiguration | cdktf.IResolvable | undefined);
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string | undefined;
}
export declare class TimestreamqueryScheduledQueryScheduleConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryScheduleConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryScheduleConfigurationOutputReference;
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#dimension_value_type TimestreamqueryScheduledQuery#dimension_value_type}
    */
    readonly dimensionValueType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#name TimestreamqueryScheduledQuery#name}
    */
    readonly name: string;
}
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping | cdktf.IResolvable | undefined);
    private _dimensionValueType?;
    get dimensionValueType(): string;
    set dimensionValueType(value: string);
    get dimensionValueTypeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingOutputReference;
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#measure_value_type TimestreamqueryScheduledQuery#measure_value_type}
    */
    readonly measureValueType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#source_column TimestreamqueryScheduledQuery#source_column}
    */
    readonly sourceColumn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#target_multi_measure_attribute_name TimestreamqueryScheduledQuery#target_multi_measure_attribute_name}
    */
    readonly targetMultiMeasureAttributeName?: string;
}
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping | cdktf.IResolvable | undefined);
    private _measureValueType?;
    get measureValueType(): string;
    set measureValueType(value: string);
    get measureValueTypeInput(): string | undefined;
    private _sourceColumn?;
    get sourceColumn(): string;
    set sourceColumn(value: string);
    get sourceColumnInput(): string | undefined;
    private _targetMultiMeasureAttributeName?;
    get targetMultiMeasureAttributeName(): string;
    set targetMultiMeasureAttributeName(value: string);
    resetTargetMultiMeasureAttributeName(): void;
    get targetMultiMeasureAttributeNameInput(): string | undefined;
}
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingOutputReference;
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#measure_name TimestreamqueryScheduledQuery#measure_name}
    */
    readonly measureName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#measure_value_type TimestreamqueryScheduledQuery#measure_value_type}
    */
    readonly measureValueType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#source_column TimestreamqueryScheduledQuery#source_column}
    */
    readonly sourceColumn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#target_measure_name TimestreamqueryScheduledQuery#target_measure_name}
    */
    readonly targetMeasureName?: string;
    /**
    * multi_measure_attribute_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#multi_measure_attribute_mapping TimestreamqueryScheduledQuery#multi_measure_attribute_mapping}
    */
    readonly multiMeasureAttributeMapping?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping | cdktf.IResolvable | undefined);
    private _measureName?;
    get measureName(): string;
    set measureName(value: string);
    resetMeasureName(): void;
    get measureNameInput(): string | undefined;
    private _measureValueType?;
    get measureValueType(): string;
    set measureValueType(value: string);
    get measureValueTypeInput(): string | undefined;
    private _sourceColumn?;
    get sourceColumn(): string;
    set sourceColumn(value: string);
    resetSourceColumn(): void;
    get sourceColumnInput(): string | undefined;
    private _targetMeasureName?;
    get targetMeasureName(): string;
    set targetMeasureName(value: string);
    resetTargetMeasureName(): void;
    get targetMeasureNameInput(): string | undefined;
    private _multiMeasureAttributeMapping;
    get multiMeasureAttributeMapping(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMappingList;
    putMultiMeasureAttributeMapping(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping[] | cdktf.IResolvable): void;
    resetMultiMeasureAttributeMapping(): void;
    get multiMeasureAttributeMappingInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingMultiMeasureAttributeMapping[] | undefined;
}
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingOutputReference;
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#measure_value_type TimestreamqueryScheduledQuery#measure_value_type}
    */
    readonly measureValueType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#source_column TimestreamqueryScheduledQuery#source_column}
    */
    readonly sourceColumn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#target_multi_measure_attribute_name TimestreamqueryScheduledQuery#target_multi_measure_attribute_name}
    */
    readonly targetMultiMeasureAttributeName?: string;
}
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping | cdktf.IResolvable | undefined);
    private _measureValueType?;
    get measureValueType(): string;
    set measureValueType(value: string);
    get measureValueTypeInput(): string | undefined;
    private _sourceColumn?;
    get sourceColumn(): string;
    set sourceColumn(value: string);
    get sourceColumnInput(): string | undefined;
    private _targetMultiMeasureAttributeName?;
    get targetMultiMeasureAttributeName(): string;
    set targetMultiMeasureAttributeName(value: string);
    resetTargetMultiMeasureAttributeName(): void;
    get targetMultiMeasureAttributeNameInput(): string | undefined;
}
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingOutputReference;
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#target_multi_measure_name TimestreamqueryScheduledQuery#target_multi_measure_name}
    */
    readonly targetMultiMeasureName?: string;
    /**
    * multi_measure_attribute_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#multi_measure_attribute_mapping TimestreamqueryScheduledQuery#multi_measure_attribute_mapping}
    */
    readonly multiMeasureAttributeMapping?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings | cdktf.IResolvable | undefined);
    private _targetMultiMeasureName?;
    get targetMultiMeasureName(): string;
    set targetMultiMeasureName(value: string);
    resetTargetMultiMeasureName(): void;
    get targetMultiMeasureNameInput(): string | undefined;
    private _multiMeasureAttributeMapping;
    get multiMeasureAttributeMapping(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMappingList;
    putMultiMeasureAttributeMapping(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping[] | cdktf.IResolvable): void;
    resetMultiMeasureAttributeMapping(): void;
    get multiMeasureAttributeMappingInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsMultiMeasureAttributeMapping[] | undefined;
}
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsOutputReference;
}
export interface TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#database_name TimestreamqueryScheduledQuery#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#measure_name_column TimestreamqueryScheduledQuery#measure_name_column}
    */
    readonly measureNameColumn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#table_name TimestreamqueryScheduledQuery#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#time_column TimestreamqueryScheduledQuery#time_column}
    */
    readonly timeColumn: string;
    /**
    * dimension_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#dimension_mapping TimestreamqueryScheduledQuery#dimension_mapping}
    */
    readonly dimensionMapping?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping[] | cdktf.IResolvable;
    /**
    * mixed_measure_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#mixed_measure_mapping TimestreamqueryScheduledQuery#mixed_measure_mapping}
    */
    readonly mixedMeasureMapping?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping[] | cdktf.IResolvable;
    /**
    * multi_measure_mappings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#multi_measure_mappings TimestreamqueryScheduledQuery#multi_measure_mappings}
    */
    readonly multiMeasureMappings?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration | cdktf.IResolvable | undefined);
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _measureNameColumn?;
    get measureNameColumn(): string;
    set measureNameColumn(value: string);
    resetMeasureNameColumn(): void;
    get measureNameColumnInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _timeColumn?;
    get timeColumn(): string;
    set timeColumn(value: string);
    get timeColumnInput(): string | undefined;
    private _dimensionMapping;
    get dimensionMapping(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMappingList;
    putDimensionMapping(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping[] | cdktf.IResolvable): void;
    resetDimensionMapping(): void;
    get dimensionMappingInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationDimensionMapping[] | undefined;
    private _mixedMeasureMapping;
    get mixedMeasureMapping(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMappingList;
    putMixedMeasureMapping(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping[] | cdktf.IResolvable): void;
    resetMixedMeasureMapping(): void;
    get mixedMeasureMappingInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMixedMeasureMapping[] | undefined;
    private _multiMeasureMappings;
    get multiMeasureMappings(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappingsList;
    putMultiMeasureMappings(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings[] | cdktf.IResolvable): void;
    resetMultiMeasureMappings(): void;
    get multiMeasureMappingsInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationMultiMeasureMappings[] | undefined;
}
export declare class TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationOutputReference;
}
export interface TimestreamqueryScheduledQueryTargetConfiguration {
    /**
    * timestream_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#timestream_configuration TimestreamqueryScheduledQuery#timestream_configuration}
    */
    readonly timestreamConfiguration?: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration[] | cdktf.IResolvable;
}
export declare function timestreamqueryScheduledQueryTargetConfigurationToTerraform(struct?: TimestreamqueryScheduledQueryTargetConfiguration | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryTargetConfigurationToHclTerraform(struct?: TimestreamqueryScheduledQueryTargetConfiguration | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryTargetConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TimestreamqueryScheduledQueryTargetConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryTargetConfiguration | cdktf.IResolvable | undefined);
    private _timestreamConfiguration;
    get timestreamConfiguration(): TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfigurationList;
    putTimestreamConfiguration(value: TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration[] | cdktf.IResolvable): void;
    resetTimestreamConfiguration(): void;
    get timestreamConfigurationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryTargetConfigurationTimestreamConfiguration[] | undefined;
}
export declare class TimestreamqueryScheduledQueryTargetConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TimestreamqueryScheduledQueryTargetConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TimestreamqueryScheduledQueryTargetConfigurationOutputReference;
}
export interface TimestreamqueryScheduledQueryTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#create TimestreamqueryScheduledQuery#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#delete TimestreamqueryScheduledQuery#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#update TimestreamqueryScheduledQuery#update}
    */
    readonly update?: string;
}
export declare function timestreamqueryScheduledQueryTimeoutsToTerraform(struct?: TimestreamqueryScheduledQueryTimeouts | cdktf.IResolvable): any;
export declare function timestreamqueryScheduledQueryTimeoutsToHclTerraform(struct?: TimestreamqueryScheduledQueryTimeouts | cdktf.IResolvable): any;
export declare class TimestreamqueryScheduledQueryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TimestreamqueryScheduledQueryTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: TimestreamqueryScheduledQueryTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query aws_timestreamquery_scheduled_query}
*/
export declare class TimestreamqueryScheduledQuery extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_timestreamquery_scheduled_query";
    /**
    * Generates CDKTF code for importing a TimestreamqueryScheduledQuery resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TimestreamqueryScheduledQuery to import
    * @param importFromId The id of the existing TimestreamqueryScheduledQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TimestreamqueryScheduledQuery to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/timestreamquery_scheduled_query aws_timestreamquery_scheduled_query} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamqueryScheduledQueryConfig
    */
    constructor(scope: Construct, id: string, config: TimestreamqueryScheduledQueryConfig);
    get arn(): string;
    get creationTime(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get nextInvocationTime(): string;
    get previousInvocationTime(): string;
    private _queryString?;
    get queryString(): string;
    set queryString(value: string);
    get queryStringInput(): string | undefined;
    get state(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _errorReportConfiguration;
    get errorReportConfiguration(): TimestreamqueryScheduledQueryErrorReportConfigurationList;
    putErrorReportConfiguration(value: TimestreamqueryScheduledQueryErrorReportConfiguration[] | cdktf.IResolvable): void;
    resetErrorReportConfiguration(): void;
    get errorReportConfigurationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryErrorReportConfiguration[] | undefined;
    private _lastRunSummary;
    get lastRunSummary(): TimestreamqueryScheduledQueryLastRunSummaryList;
    putLastRunSummary(value: TimestreamqueryScheduledQueryLastRunSummary[] | cdktf.IResolvable): void;
    resetLastRunSummary(): void;
    get lastRunSummaryInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryLastRunSummary[] | undefined;
    private _notificationConfiguration;
    get notificationConfiguration(): TimestreamqueryScheduledQueryNotificationConfigurationList;
    putNotificationConfiguration(value: TimestreamqueryScheduledQueryNotificationConfiguration[] | cdktf.IResolvable): void;
    resetNotificationConfiguration(): void;
    get notificationConfigurationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryNotificationConfiguration[] | undefined;
    private _recentlyFailedRuns;
    get recentlyFailedRuns(): TimestreamqueryScheduledQueryRecentlyFailedRunsList;
    putRecentlyFailedRuns(value: TimestreamqueryScheduledQueryRecentlyFailedRuns[] | cdktf.IResolvable): void;
    resetRecentlyFailedRuns(): void;
    get recentlyFailedRunsInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryRecentlyFailedRuns[] | undefined;
    private _scheduleConfiguration;
    get scheduleConfiguration(): TimestreamqueryScheduledQueryScheduleConfigurationList;
    putScheduleConfiguration(value: TimestreamqueryScheduledQueryScheduleConfiguration[] | cdktf.IResolvable): void;
    resetScheduleConfiguration(): void;
    get scheduleConfigurationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryScheduleConfiguration[] | undefined;
    private _targetConfiguration;
    get targetConfiguration(): TimestreamqueryScheduledQueryTargetConfigurationList;
    putTargetConfiguration(value: TimestreamqueryScheduledQueryTargetConfiguration[] | cdktf.IResolvable): void;
    resetTargetConfiguration(): void;
    get targetConfigurationInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryTargetConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): TimestreamqueryScheduledQueryTimeoutsOutputReference;
    putTimeouts(value: TimestreamqueryScheduledQueryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | TimestreamqueryScheduledQueryTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
