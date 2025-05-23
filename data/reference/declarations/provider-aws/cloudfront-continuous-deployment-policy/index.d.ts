/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontContinuousDeploymentPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * staging_distribution_dns_names block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CloudfrontContinuousDeploymentPolicy#staging_distribution_dns_names}
    */
    readonly stagingDistributionDnsNames?: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[] | cdktf.IResolvable;
    /**
    * traffic_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CloudfrontContinuousDeploymentPolicy#traffic_config}
    */
    readonly trafficConfig?: CloudfrontContinuousDeploymentPolicyTrafficConfig[] | cdktf.IResolvable;
}
export interface CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#items CloudfrontContinuousDeploymentPolicy#items}
    */
    readonly items?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#quantity CloudfrontContinuousDeploymentPolicy#quantity}
    */
    readonly quantity: number;
}
export declare function cloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesToTerraform(struct?: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames | cdktf.IResolvable): any;
export declare function cloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames | cdktf.IResolvable): any;
export declare class CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames | cdktf.IResolvable | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
    private _quantity?;
    get quantity(): number;
    set quantity(value: number);
    get quantityInput(): number | undefined;
}
export declare class CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesOutputReference;
}
export interface CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}
    */
    readonly header: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}
    */
    readonly value: string;
}
export declare function cloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig | cdktf.IResolvable): any;
export declare function cloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig | cdktf.IResolvable): any;
export declare class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig | cdktf.IResolvable | undefined);
    private _header?;
    get header(): string;
    set header(value: string);
    get headerInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigOutputReference;
}
export interface CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}
    */
    readonly idleTtl: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}
    */
    readonly maximumTtl: number;
}
export declare function cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktf.IResolvable): any;
export declare function cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktf.IResolvable): any;
export declare class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktf.IResolvable | undefined);
    private _idleTtl?;
    get idleTtl(): number;
    set idleTtl(value: number);
    get idleTtlInput(): number | undefined;
    private _maximumTtl?;
    get maximumTtl(): number;
    set maximumTtl(value: number);
    get maximumTtlInput(): number | undefined;
}
export declare class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference;
}
export interface CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}
    */
    readonly weight: number;
    /**
    * session_stickiness_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}
    */
    readonly sessionStickinessConfig?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[] | cdktf.IResolvable;
}
export declare function cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig | cdktf.IResolvable): any;
export declare function cloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig | cdktf.IResolvable): any;
export declare class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig | cdktf.IResolvable | undefined);
    private _weight?;
    get weight(): number;
    set weight(value: number);
    get weightInput(): number | undefined;
    private _sessionStickinessConfig;
    get sessionStickinessConfig(): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfigList;
    putSessionStickinessConfig(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[] | cdktf.IResolvable): void;
    resetSessionStickinessConfig(): void;
    get sessionStickinessConfigInput(): cdktf.IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig[] | undefined;
}
export declare class CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigOutputReference;
}
export interface CloudfrontContinuousDeploymentPolicyTrafficConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}
    */
    readonly type: string;
    /**
    * single_header_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_config CloudfrontContinuousDeploymentPolicy#single_header_config}
    */
    readonly singleHeaderConfig?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[] | cdktf.IResolvable;
    /**
    * single_weight_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config CloudfrontContinuousDeploymentPolicy#single_weight_config}
    */
    readonly singleWeightConfig?: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[] | cdktf.IResolvable;
}
export declare function cloudfrontContinuousDeploymentPolicyTrafficConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfig | cdktf.IResolvable): any;
export declare function cloudfrontContinuousDeploymentPolicyTrafficConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyTrafficConfig | cdktf.IResolvable): any;
export declare class CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontContinuousDeploymentPolicyTrafficConfig | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontContinuousDeploymentPolicyTrafficConfig | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _singleHeaderConfig;
    get singleHeaderConfig(): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfigList;
    putSingleHeaderConfig(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[] | cdktf.IResolvable): void;
    resetSingleHeaderConfig(): void;
    get singleHeaderConfigInput(): cdktf.IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleHeaderConfig[] | undefined;
    private _singleWeightConfig;
    get singleWeightConfig(): CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfigList;
    putSingleWeightConfig(value: CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[] | cdktf.IResolvable): void;
    resetSingleWeightConfig(): void;
    get singleWeightConfigInput(): cdktf.IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfigSingleWeightConfig[] | undefined;
}
export declare class CloudfrontContinuousDeploymentPolicyTrafficConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontContinuousDeploymentPolicyTrafficConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontContinuousDeploymentPolicyTrafficConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy aws_cloudfront_continuous_deployment_policy}
*/
export declare class CloudfrontContinuousDeploymentPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_continuous_deployment_policy";
    /**
    * Generates CDKTF code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontContinuousDeploymentPolicy to import
    * @param importFromId The id of the existing CloudfrontContinuousDeploymentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontContinuousDeploymentPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_continuous_deployment_policy aws_cloudfront_continuous_deployment_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontContinuousDeploymentPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontContinuousDeploymentPolicyConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    get etag(): string;
    get id(): string;
    get lastModifiedTime(): string;
    private _stagingDistributionDnsNames;
    get stagingDistributionDnsNames(): CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNamesList;
    putStagingDistributionDnsNames(value: CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[] | cdktf.IResolvable): void;
    resetStagingDistributionDnsNames(): void;
    get stagingDistributionDnsNamesInput(): cdktf.IResolvable | CloudfrontContinuousDeploymentPolicyStagingDistributionDnsNames[] | undefined;
    private _trafficConfig;
    get trafficConfig(): CloudfrontContinuousDeploymentPolicyTrafficConfigList;
    putTrafficConfig(value: CloudfrontContinuousDeploymentPolicyTrafficConfig[] | cdktf.IResolvable): void;
    resetTrafficConfig(): void;
    get trafficConfigInput(): cdktf.IResolvable | CloudfrontContinuousDeploymentPolicyTrafficConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
