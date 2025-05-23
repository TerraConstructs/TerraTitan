/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchMetricStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}
    */
    readonly firehoseArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#id CloudwatchMetricStream#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#include_linked_accounts_metrics CloudwatchMetricStream#include_linked_accounts_metrics}
    */
    readonly includeLinkedAccountsMetrics?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}
    */
    readonly outputFormat: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * exclude_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#exclude_filter CloudwatchMetricStream#exclude_filter}
    */
    readonly excludeFilter?: CloudwatchMetricStreamExcludeFilter[] | cdktf.IResolvable;
    /**
    * include_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#include_filter CloudwatchMetricStream#include_filter}
    */
    readonly includeFilter?: CloudwatchMetricStreamIncludeFilter[] | cdktf.IResolvable;
    /**
    * statistics_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#statistics_configuration CloudwatchMetricStream#statistics_configuration}
    */
    readonly statisticsConfiguration?: CloudwatchMetricStreamStatisticsConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#timeouts CloudwatchMetricStream#timeouts}
    */
    readonly timeouts?: CloudwatchMetricStreamTimeouts;
}
export interface CloudwatchMetricStreamExcludeFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}
    */
    readonly metricNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}
    */
    readonly namespace: string;
}
export declare function cloudwatchMetricStreamExcludeFilterToTerraform(struct?: CloudwatchMetricStreamExcludeFilter | cdktf.IResolvable): any;
export declare function cloudwatchMetricStreamExcludeFilterToHclTerraform(struct?: CloudwatchMetricStreamExcludeFilter | cdktf.IResolvable): any;
export declare class CloudwatchMetricStreamExcludeFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchMetricStreamExcludeFilter | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchMetricStreamExcludeFilter | cdktf.IResolvable | undefined);
    private _metricNames?;
    get metricNames(): string[];
    set metricNames(value: string[]);
    resetMetricNames(): void;
    get metricNamesInput(): string[] | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
}
export declare class CloudwatchMetricStreamExcludeFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchMetricStreamExcludeFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchMetricStreamExcludeFilterOutputReference;
}
export interface CloudwatchMetricStreamIncludeFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}
    */
    readonly metricNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}
    */
    readonly namespace: string;
}
export declare function cloudwatchMetricStreamIncludeFilterToTerraform(struct?: CloudwatchMetricStreamIncludeFilter | cdktf.IResolvable): any;
export declare function cloudwatchMetricStreamIncludeFilterToHclTerraform(struct?: CloudwatchMetricStreamIncludeFilter | cdktf.IResolvable): any;
export declare class CloudwatchMetricStreamIncludeFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchMetricStreamIncludeFilter | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchMetricStreamIncludeFilter | cdktf.IResolvable | undefined);
    private _metricNames?;
    get metricNames(): string[];
    set metricNames(value: string[]);
    resetMetricNames(): void;
    get metricNamesInput(): string[] | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
}
export declare class CloudwatchMetricStreamIncludeFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchMetricStreamIncludeFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchMetricStreamIncludeFilterOutputReference;
}
export interface CloudwatchMetricStreamStatisticsConfigurationIncludeMetric {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}
    */
    readonly namespace: string;
}
export declare function cloudwatchMetricStreamStatisticsConfigurationIncludeMetricToTerraform(struct?: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric | cdktf.IResolvable): any;
export declare function cloudwatchMetricStreamStatisticsConfigurationIncludeMetricToHclTerraform(struct?: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric | cdktf.IResolvable): any;
export declare class CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchMetricStreamStatisticsConfigurationIncludeMetric | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric | cdktf.IResolvable | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
}
export declare class CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference;
}
export interface CloudwatchMetricStreamStatisticsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}
    */
    readonly additionalStatistics: string[];
    /**
    * include_metric block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#include_metric CloudwatchMetricStream#include_metric}
    */
    readonly includeMetric: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[] | cdktf.IResolvable;
}
export declare function cloudwatchMetricStreamStatisticsConfigurationToTerraform(struct?: CloudwatchMetricStreamStatisticsConfiguration | cdktf.IResolvable): any;
export declare function cloudwatchMetricStreamStatisticsConfigurationToHclTerraform(struct?: CloudwatchMetricStreamStatisticsConfiguration | cdktf.IResolvable): any;
export declare class CloudwatchMetricStreamStatisticsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchMetricStreamStatisticsConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchMetricStreamStatisticsConfiguration | cdktf.IResolvable | undefined);
    private _additionalStatistics?;
    get additionalStatistics(): string[];
    set additionalStatistics(value: string[]);
    get additionalStatisticsInput(): string[] | undefined;
    private _includeMetric;
    get includeMetric(): CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList;
    putIncludeMetric(value: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[] | cdktf.IResolvable): void;
    get includeMetricInput(): cdktf.IResolvable | CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[] | undefined;
}
export declare class CloudwatchMetricStreamStatisticsConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchMetricStreamStatisticsConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchMetricStreamStatisticsConfigurationOutputReference;
}
export interface CloudwatchMetricStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#create CloudwatchMetricStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#update CloudwatchMetricStream#update}
    */
    readonly update?: string;
}
export declare function cloudwatchMetricStreamTimeoutsToTerraform(struct?: CloudwatchMetricStreamTimeouts | cdktf.IResolvable): any;
export declare function cloudwatchMetricStreamTimeoutsToHclTerraform(struct?: CloudwatchMetricStreamTimeouts | cdktf.IResolvable): any;
export declare class CloudwatchMetricStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchMetricStreamTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchMetricStreamTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream aws_cloudwatch_metric_stream}
*/
export declare class CloudwatchMetricStream extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_metric_stream";
    /**
    * Generates CDKTF code for importing a CloudwatchMetricStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchMetricStream to import
    * @param importFromId The id of the existing CloudwatchMetricStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchMetricStream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_stream aws_cloudwatch_metric_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricStreamConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchMetricStreamConfig);
    get arn(): string;
    get creationDate(): string;
    private _firehoseArn?;
    get firehoseArn(): string;
    set firehoseArn(value: string);
    get firehoseArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _includeLinkedAccountsMetrics?;
    get includeLinkedAccountsMetrics(): boolean | cdktf.IResolvable;
    set includeLinkedAccountsMetrics(value: boolean | cdktf.IResolvable);
    resetIncludeLinkedAccountsMetrics(): void;
    get includeLinkedAccountsMetricsInput(): boolean | cdktf.IResolvable | undefined;
    get lastUpdateDate(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _outputFormat?;
    get outputFormat(): string;
    set outputFormat(value: string);
    get outputFormatInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _excludeFilter;
    get excludeFilter(): CloudwatchMetricStreamExcludeFilterList;
    putExcludeFilter(value: CloudwatchMetricStreamExcludeFilter[] | cdktf.IResolvable): void;
    resetExcludeFilter(): void;
    get excludeFilterInput(): cdktf.IResolvable | CloudwatchMetricStreamExcludeFilter[] | undefined;
    private _includeFilter;
    get includeFilter(): CloudwatchMetricStreamIncludeFilterList;
    putIncludeFilter(value: CloudwatchMetricStreamIncludeFilter[] | cdktf.IResolvable): void;
    resetIncludeFilter(): void;
    get includeFilterInput(): cdktf.IResolvable | CloudwatchMetricStreamIncludeFilter[] | undefined;
    private _statisticsConfiguration;
    get statisticsConfiguration(): CloudwatchMetricStreamStatisticsConfigurationList;
    putStatisticsConfiguration(value: CloudwatchMetricStreamStatisticsConfiguration[] | cdktf.IResolvable): void;
    resetStatisticsConfiguration(): void;
    get statisticsConfigurationInput(): cdktf.IResolvable | CloudwatchMetricStreamStatisticsConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): CloudwatchMetricStreamTimeoutsOutputReference;
    putTimeouts(value: CloudwatchMetricStreamTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudwatchMetricStreamTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
