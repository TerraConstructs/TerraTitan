/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicequotasServiceQuotaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_service_quota#id ServicequotasServiceQuota#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_service_quota#quota_code ServicequotasServiceQuota#quota_code}
    */
    readonly quotaCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_service_quota#service_code ServicequotasServiceQuota#service_code}
    */
    readonly serviceCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_service_quota#value ServicequotasServiceQuota#value}
    */
    readonly value: number;
}
export interface ServicequotasServiceQuotaUsageMetricMetricDimensions {
}
export declare function servicequotasServiceQuotaUsageMetricMetricDimensionsToTerraform(struct?: ServicequotasServiceQuotaUsageMetricMetricDimensions): any;
export declare function servicequotasServiceQuotaUsageMetricMetricDimensionsToHclTerraform(struct?: ServicequotasServiceQuotaUsageMetricMetricDimensions): any;
export declare class ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServicequotasServiceQuotaUsageMetricMetricDimensions | undefined;
    set internalValue(value: ServicequotasServiceQuotaUsageMetricMetricDimensions | undefined);
    get class(): string;
    get resource(): string;
    get service(): string;
    get type(): string;
}
export declare class ServicequotasServiceQuotaUsageMetricMetricDimensionsList extends cdktf.ComplexList {
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
    get(index: number): ServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference;
}
export interface ServicequotasServiceQuotaUsageMetric {
}
export declare function servicequotasServiceQuotaUsageMetricToTerraform(struct?: ServicequotasServiceQuotaUsageMetric): any;
export declare function servicequotasServiceQuotaUsageMetricToHclTerraform(struct?: ServicequotasServiceQuotaUsageMetric): any;
export declare class ServicequotasServiceQuotaUsageMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServicequotasServiceQuotaUsageMetric | undefined;
    set internalValue(value: ServicequotasServiceQuotaUsageMetric | undefined);
    private _metricDimensions;
    get metricDimensions(): ServicequotasServiceQuotaUsageMetricMetricDimensionsList;
    get metricName(): string;
    get metricNamespace(): string;
    get metricStatisticRecommendation(): string;
}
export declare class ServicequotasServiceQuotaUsageMetricList extends cdktf.ComplexList {
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
    get(index: number): ServicequotasServiceQuotaUsageMetricOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_service_quota aws_servicequotas_service_quota}
*/
export declare class ServicequotasServiceQuota extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicequotas_service_quota";
    /**
    * Generates CDKTF code for importing a ServicequotasServiceQuota resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicequotasServiceQuota to import
    * @param importFromId The id of the existing ServicequotasServiceQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_service_quota#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicequotasServiceQuota to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicequotas_service_quota aws_servicequotas_service_quota} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicequotasServiceQuotaConfig
    */
    constructor(scope: Construct, id: string, config: ServicequotasServiceQuotaConfig);
    get adjustable(): cdktf.IResolvable;
    get arn(): string;
    get defaultValue(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _quotaCode?;
    get quotaCode(): string;
    set quotaCode(value: string);
    get quotaCodeInput(): string | undefined;
    get quotaName(): string;
    get requestId(): string;
    get requestStatus(): string;
    private _serviceCode?;
    get serviceCode(): string;
    set serviceCode(value: string);
    get serviceCodeInput(): string | undefined;
    get serviceName(): string;
    private _usageMetric;
    get usageMetric(): ServicequotasServiceQuotaUsageMetricList;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
