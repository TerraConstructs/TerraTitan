/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayUsagePlanConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Description of a usage plan. */
    readonly description?: string;
    /** */
    readonly id?: string;
    /** (Required) Name of the usage plan. */
    readonly name: string;
    /** (Optional) AWS Marketplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace. */
    readonly productCode?: string;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** */
    readonly apiStages?: ApiGatewayUsagePlanApiStages[] | cdktf.IResolvable;
    /** */
    readonly quotaSettings?: ApiGatewayUsagePlanQuotaSettings;
    /** */
    readonly throttleSettings?: ApiGatewayUsagePlanThrottleSettings;
}
export interface ApiGatewayUsagePlanApiStagesThrottle {
    /** */
    readonly burstLimit?: number;
    /** */
    readonly path: string;
    /** */
    readonly rateLimit?: number;
}
export declare function apiGatewayUsagePlanApiStagesThrottleToTerraform(struct?: ApiGatewayUsagePlanApiStagesThrottle | cdktf.IResolvable): any;
export declare function apiGatewayUsagePlanApiStagesThrottleToHclTerraform(struct?: ApiGatewayUsagePlanApiStagesThrottle | cdktf.IResolvable): any;
export declare class ApiGatewayUsagePlanApiStagesThrottleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ApiGatewayUsagePlanApiStagesThrottle | cdktf.IResolvable | undefined;
    set internalValue(value: ApiGatewayUsagePlanApiStagesThrottle | cdktf.IResolvable | undefined);
    private _burstLimit?;
    get burstLimit(): number;
    set burstLimit(value: number);
    resetBurstLimit(): void;
    get burstLimitInput(): number | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
    private _rateLimit?;
    get rateLimit(): number;
    set rateLimit(value: number);
    resetRateLimit(): void;
    get rateLimitInput(): number | undefined;
}
export declare class ApiGatewayUsagePlanApiStagesThrottleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ApiGatewayUsagePlanApiStagesThrottle[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ApiGatewayUsagePlanApiStagesThrottleOutputReference;
}
export interface ApiGatewayUsagePlanApiStages {
    /** */
    readonly apiId: string;
    /** */
    readonly stage: string;
    /** */
    readonly throttle?: ApiGatewayUsagePlanApiStagesThrottle[] | cdktf.IResolvable;
}
export declare function apiGatewayUsagePlanApiStagesToTerraform(struct?: ApiGatewayUsagePlanApiStages | cdktf.IResolvable): any;
export declare function apiGatewayUsagePlanApiStagesToHclTerraform(struct?: ApiGatewayUsagePlanApiStages | cdktf.IResolvable): any;
export declare class ApiGatewayUsagePlanApiStagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ApiGatewayUsagePlanApiStages | cdktf.IResolvable | undefined;
    set internalValue(value: ApiGatewayUsagePlanApiStages | cdktf.IResolvable | undefined);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    private _stage?;
    get stage(): string;
    set stage(value: string);
    get stageInput(): string | undefined;
    private _throttle;
    get throttle(): ApiGatewayUsagePlanApiStagesThrottleList;
    putThrottle(value: ApiGatewayUsagePlanApiStagesThrottle[] | cdktf.IResolvable): void;
    resetThrottle(): void;
    get throttleInput(): cdktf.IResolvable | ApiGatewayUsagePlanApiStagesThrottle[] | undefined;
}
export declare class ApiGatewayUsagePlanApiStagesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ApiGatewayUsagePlanApiStages[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ApiGatewayUsagePlanApiStagesOutputReference;
}
export interface ApiGatewayUsagePlanQuotaSettings {
    /** */
    readonly limit: number;
    /** */
    readonly offset?: number;
    /** */
    readonly period: string;
}
export declare function apiGatewayUsagePlanQuotaSettingsToTerraform(struct?: ApiGatewayUsagePlanQuotaSettingsOutputReference | ApiGatewayUsagePlanQuotaSettings): any;
export declare function apiGatewayUsagePlanQuotaSettingsToHclTerraform(struct?: ApiGatewayUsagePlanQuotaSettingsOutputReference | ApiGatewayUsagePlanQuotaSettings): any;
export declare class ApiGatewayUsagePlanQuotaSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayUsagePlanQuotaSettings | undefined;
    set internalValue(value: ApiGatewayUsagePlanQuotaSettings | undefined);
    private _limit?;
    get limit(): number;
    set limit(value: number);
    get limitInput(): number | undefined;
    private _offset?;
    get offset(): number;
    set offset(value: number);
    resetOffset(): void;
    get offsetInput(): number | undefined;
    private _period?;
    get period(): string;
    set period(value: string);
    get periodInput(): string | undefined;
}
export interface ApiGatewayUsagePlanThrottleSettings {
    /** */
    readonly burstLimit?: number;
    /** */
    readonly rateLimit?: number;
}
export declare function apiGatewayUsagePlanThrottleSettingsToTerraform(struct?: ApiGatewayUsagePlanThrottleSettingsOutputReference | ApiGatewayUsagePlanThrottleSettings): any;
export declare function apiGatewayUsagePlanThrottleSettingsToHclTerraform(struct?: ApiGatewayUsagePlanThrottleSettingsOutputReference | ApiGatewayUsagePlanThrottleSettings): any;
export declare class ApiGatewayUsagePlanThrottleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayUsagePlanThrottleSettings | undefined;
    set internalValue(value: ApiGatewayUsagePlanThrottleSettings | undefined);
    private _burstLimit?;
    get burstLimit(): number;
    set burstLimit(value: number);
    resetBurstLimit(): void;
    get burstLimitInput(): number | undefined;
    private _rateLimit?;
    get rateLimit(): number;
    set rateLimit(value: number);
    resetRateLimit(): void;
    get rateLimitInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_usage_plan aws_api_gateway_usage_plan}
*/
export declare class ApiGatewayUsagePlan extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_usage_plan";
    /**
    * Generates CDKTF code for importing a ApiGatewayUsagePlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayUsagePlan to import
    * @param importFromId The id of the existing ApiGatewayUsagePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_usage_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayUsagePlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_usage_plan aws_api_gateway_usage_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayUsagePlanConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _productCode?;
    get productCode(): string;
    set productCode(value: string);
    resetProductCode(): void;
    get productCodeInput(): string | undefined;
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
    private _apiStages;
    get apiStages(): ApiGatewayUsagePlanApiStagesList;
    putApiStages(value: ApiGatewayUsagePlanApiStages[] | cdktf.IResolvable): void;
    resetApiStages(): void;
    get apiStagesInput(): cdktf.IResolvable | ApiGatewayUsagePlanApiStages[] | undefined;
    private _quotaSettings;
    get quotaSettings(): ApiGatewayUsagePlanQuotaSettingsOutputReference;
    putQuotaSettings(value: ApiGatewayUsagePlanQuotaSettings): void;
    resetQuotaSettings(): void;
    get quotaSettingsInput(): ApiGatewayUsagePlanQuotaSettings | undefined;
    private _throttleSettings;
    get throttleSettings(): ApiGatewayUsagePlanThrottleSettingsOutputReference;
    putThrottleSettings(value: ApiGatewayUsagePlanThrottleSettings): void;
    resetThrottleSettings(): void;
    get throttleSettingsInput(): ApiGatewayUsagePlanThrottleSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
