/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcNetworkPerformanceMetricSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}
    */
    readonly metric?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}
    */
    readonly statistic?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_network_performance_metric_subscription aws_vpc_network_performance_metric_subscription}
*/
export declare class VpcNetworkPerformanceMetricSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_network_performance_metric_subscription";
    /**
    * Generates CDKTF code for importing a VpcNetworkPerformanceMetricSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcNetworkPerformanceMetricSubscription to import
    * @param importFromId The id of the existing VpcNetworkPerformanceMetricSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_network_performance_metric_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcNetworkPerformanceMetricSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_network_performance_metric_subscription aws_vpc_network_performance_metric_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcNetworkPerformanceMetricSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: VpcNetworkPerformanceMetricSubscriptionConfig);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _metric?;
    get metric(): string;
    set metric(value: string);
    resetMetric(): void;
    get metricInput(): string | undefined;
    get period(): string;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    private _statistic?;
    get statistic(): string;
    set statistic(value: string);
    resetStatistic(): void;
    get statisticInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
