/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicequotasServiceQuotaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_service_quota#id DataAwsServicequotasServiceQuota#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_service_quota#quota_code DataAwsServicequotasServiceQuota#quota_code}
    */
    readonly quotaCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_service_quota#quota_name DataAwsServicequotasServiceQuota#quota_name}
    */
    readonly quotaName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_service_quota#service_code DataAwsServicequotasServiceQuota#service_code}
    */
    readonly serviceCode: string;
}
export interface DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions {
}
export declare function dataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsToTerraform(struct?: DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions): any;
export declare function dataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsToHclTerraform(struct?: DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions): any;
export declare class DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions | undefined;
    set internalValue(value: DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions | undefined);
    get class(): string;
    get resource(): string;
    get service(): string;
    get type(): string;
}
export declare class DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference;
}
export interface DataAwsServicequotasServiceQuotaUsageMetric {
}
export declare function dataAwsServicequotasServiceQuotaUsageMetricToTerraform(struct?: DataAwsServicequotasServiceQuotaUsageMetric): any;
export declare function dataAwsServicequotasServiceQuotaUsageMetricToHclTerraform(struct?: DataAwsServicequotasServiceQuotaUsageMetric): any;
export declare class DataAwsServicequotasServiceQuotaUsageMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServicequotasServiceQuotaUsageMetric | undefined;
    set internalValue(value: DataAwsServicequotasServiceQuotaUsageMetric | undefined);
    private _metricDimensions;
    get metricDimensions(): DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList;
    get metricName(): string;
    get metricNamespace(): string;
    get metricStatisticRecommendation(): string;
}
export declare class DataAwsServicequotasServiceQuotaUsageMetricList extends cdktf.ComplexList {
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
    get(index: number): DataAwsServicequotasServiceQuotaUsageMetricOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_service_quota aws_servicequotas_service_quota}
*/
export declare class DataAwsServicequotasServiceQuota extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_servicequotas_service_quota";
    /**
    * Generates CDKTF code for importing a DataAwsServicequotasServiceQuota resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServicequotasServiceQuota to import
    * @param importFromId The id of the existing DataAwsServicequotasServiceQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_service_quota#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServicequotasServiceQuota to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_service_quota aws_servicequotas_service_quota} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicequotasServiceQuotaConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicequotasServiceQuotaConfig);
    get adjustable(): cdktf.IResolvable;
    get arn(): string;
    get defaultValue(): number;
    get globalQuota(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _quotaCode?;
    get quotaCode(): string;
    set quotaCode(value: string);
    resetQuotaCode(): void;
    get quotaCodeInput(): string | undefined;
    private _quotaName?;
    get quotaName(): string;
    set quotaName(value: string);
    resetQuotaName(): void;
    get quotaNameInput(): string | undefined;
    private _serviceCode?;
    get serviceCode(): string;
    set serviceCode(value: string);
    get serviceCodeInput(): string | undefined;
    get serviceName(): string;
    private _usageMetric;
    get usageMetric(): DataAwsServicequotasServiceQuotaUsageMetricList;
    get value(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
