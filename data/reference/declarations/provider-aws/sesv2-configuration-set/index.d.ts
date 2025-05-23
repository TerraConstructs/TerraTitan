/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2ConfigurationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}
    */
    readonly configurationSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#id Sesv2ConfigurationSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * delivery_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#delivery_options Sesv2ConfigurationSet#delivery_options}
    */
    readonly deliveryOptions?: Sesv2ConfigurationSetDeliveryOptions;
    /**
    * reputation_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#reputation_options Sesv2ConfigurationSet#reputation_options}
    */
    readonly reputationOptions?: Sesv2ConfigurationSetReputationOptions;
    /**
    * sending_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#sending_options Sesv2ConfigurationSet#sending_options}
    */
    readonly sendingOptions?: Sesv2ConfigurationSetSendingOptions;
    /**
    * suppression_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#suppression_options Sesv2ConfigurationSet#suppression_options}
    */
    readonly suppressionOptions?: Sesv2ConfigurationSetSuppressionOptions;
    /**
    * tracking_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#tracking_options Sesv2ConfigurationSet#tracking_options}
    */
    readonly trackingOptions?: Sesv2ConfigurationSetTrackingOptions;
    /**
    * vdm_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#vdm_options Sesv2ConfigurationSet#vdm_options}
    */
    readonly vdmOptions?: Sesv2ConfigurationSetVdmOptions;
}
export interface Sesv2ConfigurationSetDeliveryOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#max_delivery_seconds Sesv2ConfigurationSet#max_delivery_seconds}
    */
    readonly maxDeliverySeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#sending_pool_name Sesv2ConfigurationSet#sending_pool_name}
    */
    readonly sendingPoolName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#tls_policy Sesv2ConfigurationSet#tls_policy}
    */
    readonly tlsPolicy?: string;
}
export declare function sesv2ConfigurationSetDeliveryOptionsToTerraform(struct?: Sesv2ConfigurationSetDeliveryOptionsOutputReference | Sesv2ConfigurationSetDeliveryOptions): any;
export declare function sesv2ConfigurationSetDeliveryOptionsToHclTerraform(struct?: Sesv2ConfigurationSetDeliveryOptionsOutputReference | Sesv2ConfigurationSetDeliveryOptions): any;
export declare class Sesv2ConfigurationSetDeliveryOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetDeliveryOptions | undefined;
    set internalValue(value: Sesv2ConfigurationSetDeliveryOptions | undefined);
    private _maxDeliverySeconds?;
    get maxDeliverySeconds(): number;
    set maxDeliverySeconds(value: number);
    resetMaxDeliverySeconds(): void;
    get maxDeliverySecondsInput(): number | undefined;
    private _sendingPoolName?;
    get sendingPoolName(): string;
    set sendingPoolName(value: string);
    resetSendingPoolName(): void;
    get sendingPoolNameInput(): string | undefined;
    private _tlsPolicy?;
    get tlsPolicy(): string;
    set tlsPolicy(value: string);
    resetTlsPolicy(): void;
    get tlsPolicyInput(): string | undefined;
}
export interface Sesv2ConfigurationSetReputationOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#reputation_metrics_enabled Sesv2ConfigurationSet#reputation_metrics_enabled}
    */
    readonly reputationMetricsEnabled?: boolean | cdktf.IResolvable;
}
export declare function sesv2ConfigurationSetReputationOptionsToTerraform(struct?: Sesv2ConfigurationSetReputationOptionsOutputReference | Sesv2ConfigurationSetReputationOptions): any;
export declare function sesv2ConfigurationSetReputationOptionsToHclTerraform(struct?: Sesv2ConfigurationSetReputationOptionsOutputReference | Sesv2ConfigurationSetReputationOptions): any;
export declare class Sesv2ConfigurationSetReputationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetReputationOptions | undefined;
    set internalValue(value: Sesv2ConfigurationSetReputationOptions | undefined);
    get lastFreshStart(): string;
    private _reputationMetricsEnabled?;
    get reputationMetricsEnabled(): boolean | cdktf.IResolvable;
    set reputationMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetReputationMetricsEnabled(): void;
    get reputationMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface Sesv2ConfigurationSetSendingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#sending_enabled Sesv2ConfigurationSet#sending_enabled}
    */
    readonly sendingEnabled?: boolean | cdktf.IResolvable;
}
export declare function sesv2ConfigurationSetSendingOptionsToTerraform(struct?: Sesv2ConfigurationSetSendingOptionsOutputReference | Sesv2ConfigurationSetSendingOptions): any;
export declare function sesv2ConfigurationSetSendingOptionsToHclTerraform(struct?: Sesv2ConfigurationSetSendingOptionsOutputReference | Sesv2ConfigurationSetSendingOptions): any;
export declare class Sesv2ConfigurationSetSendingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetSendingOptions | undefined;
    set internalValue(value: Sesv2ConfigurationSetSendingOptions | undefined);
    private _sendingEnabled?;
    get sendingEnabled(): boolean | cdktf.IResolvable;
    set sendingEnabled(value: boolean | cdktf.IResolvable);
    resetSendingEnabled(): void;
    get sendingEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface Sesv2ConfigurationSetSuppressionOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#suppressed_reasons Sesv2ConfigurationSet#suppressed_reasons}
    */
    readonly suppressedReasons?: string[];
}
export declare function sesv2ConfigurationSetSuppressionOptionsToTerraform(struct?: Sesv2ConfigurationSetSuppressionOptionsOutputReference | Sesv2ConfigurationSetSuppressionOptions): any;
export declare function sesv2ConfigurationSetSuppressionOptionsToHclTerraform(struct?: Sesv2ConfigurationSetSuppressionOptionsOutputReference | Sesv2ConfigurationSetSuppressionOptions): any;
export declare class Sesv2ConfigurationSetSuppressionOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetSuppressionOptions | undefined;
    set internalValue(value: Sesv2ConfigurationSetSuppressionOptions | undefined);
    private _suppressedReasons?;
    get suppressedReasons(): string[];
    set suppressedReasons(value: string[]);
    resetSuppressedReasons(): void;
    get suppressedReasonsInput(): string[] | undefined;
}
export interface Sesv2ConfigurationSetTrackingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#custom_redirect_domain Sesv2ConfigurationSet#custom_redirect_domain}
    */
    readonly customRedirectDomain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#https_policy Sesv2ConfigurationSet#https_policy}
    */
    readonly httpsPolicy?: string;
}
export declare function sesv2ConfigurationSetTrackingOptionsToTerraform(struct?: Sesv2ConfigurationSetTrackingOptionsOutputReference | Sesv2ConfigurationSetTrackingOptions): any;
export declare function sesv2ConfigurationSetTrackingOptionsToHclTerraform(struct?: Sesv2ConfigurationSetTrackingOptionsOutputReference | Sesv2ConfigurationSetTrackingOptions): any;
export declare class Sesv2ConfigurationSetTrackingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetTrackingOptions | undefined;
    set internalValue(value: Sesv2ConfigurationSetTrackingOptions | undefined);
    private _customRedirectDomain?;
    get customRedirectDomain(): string;
    set customRedirectDomain(value: string);
    get customRedirectDomainInput(): string | undefined;
    private _httpsPolicy?;
    get httpsPolicy(): string;
    set httpsPolicy(value: string);
    resetHttpsPolicy(): void;
    get httpsPolicyInput(): string | undefined;
}
export interface Sesv2ConfigurationSetVdmOptionsDashboardOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#engagement_metrics Sesv2ConfigurationSet#engagement_metrics}
    */
    readonly engagementMetrics?: string;
}
export declare function sesv2ConfigurationSetVdmOptionsDashboardOptionsToTerraform(struct?: Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference | Sesv2ConfigurationSetVdmOptionsDashboardOptions): any;
export declare function sesv2ConfigurationSetVdmOptionsDashboardOptionsToHclTerraform(struct?: Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference | Sesv2ConfigurationSetVdmOptionsDashboardOptions): any;
export declare class Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetVdmOptionsDashboardOptions | undefined;
    set internalValue(value: Sesv2ConfigurationSetVdmOptionsDashboardOptions | undefined);
    private _engagementMetrics?;
    get engagementMetrics(): string;
    set engagementMetrics(value: string);
    resetEngagementMetrics(): void;
    get engagementMetricsInput(): string | undefined;
}
export interface Sesv2ConfigurationSetVdmOptionsGuardianOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#optimized_shared_delivery Sesv2ConfigurationSet#optimized_shared_delivery}
    */
    readonly optimizedSharedDelivery?: string;
}
export declare function sesv2ConfigurationSetVdmOptionsGuardianOptionsToTerraform(struct?: Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference | Sesv2ConfigurationSetVdmOptionsGuardianOptions): any;
export declare function sesv2ConfigurationSetVdmOptionsGuardianOptionsToHclTerraform(struct?: Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference | Sesv2ConfigurationSetVdmOptionsGuardianOptions): any;
export declare class Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetVdmOptionsGuardianOptions | undefined;
    set internalValue(value: Sesv2ConfigurationSetVdmOptionsGuardianOptions | undefined);
    private _optimizedSharedDelivery?;
    get optimizedSharedDelivery(): string;
    set optimizedSharedDelivery(value: string);
    resetOptimizedSharedDelivery(): void;
    get optimizedSharedDeliveryInput(): string | undefined;
}
export interface Sesv2ConfigurationSetVdmOptions {
    /**
    * dashboard_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#dashboard_options Sesv2ConfigurationSet#dashboard_options}
    */
    readonly dashboardOptions?: Sesv2ConfigurationSetVdmOptionsDashboardOptions;
    /**
    * guardian_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#guardian_options Sesv2ConfigurationSet#guardian_options}
    */
    readonly guardianOptions?: Sesv2ConfigurationSetVdmOptionsGuardianOptions;
}
export declare function sesv2ConfigurationSetVdmOptionsToTerraform(struct?: Sesv2ConfigurationSetVdmOptionsOutputReference | Sesv2ConfigurationSetVdmOptions): any;
export declare function sesv2ConfigurationSetVdmOptionsToHclTerraform(struct?: Sesv2ConfigurationSetVdmOptionsOutputReference | Sesv2ConfigurationSetVdmOptions): any;
export declare class Sesv2ConfigurationSetVdmOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetVdmOptions | undefined;
    set internalValue(value: Sesv2ConfigurationSetVdmOptions | undefined);
    private _dashboardOptions;
    get dashboardOptions(): Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference;
    putDashboardOptions(value: Sesv2ConfigurationSetVdmOptionsDashboardOptions): void;
    resetDashboardOptions(): void;
    get dashboardOptionsInput(): Sesv2ConfigurationSetVdmOptionsDashboardOptions | undefined;
    private _guardianOptions;
    get guardianOptions(): Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference;
    putGuardianOptions(value: Sesv2ConfigurationSetVdmOptionsGuardianOptions): void;
    resetGuardianOptions(): void;
    get guardianOptionsInput(): Sesv2ConfigurationSetVdmOptionsGuardianOptions | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set aws_sesv2_configuration_set}
*/
export declare class Sesv2ConfigurationSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_configuration_set";
    /**
    * Generates CDKTF code for importing a Sesv2ConfigurationSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2ConfigurationSet to import
    * @param importFromId The id of the existing Sesv2ConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2ConfigurationSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set aws_sesv2_configuration_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2ConfigurationSetConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2ConfigurationSetConfig);
    get arn(): string;
    private _configurationSetName?;
    get configurationSetName(): string;
    set configurationSetName(value: string);
    get configurationSetNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _deliveryOptions;
    get deliveryOptions(): Sesv2ConfigurationSetDeliveryOptionsOutputReference;
    putDeliveryOptions(value: Sesv2ConfigurationSetDeliveryOptions): void;
    resetDeliveryOptions(): void;
    get deliveryOptionsInput(): Sesv2ConfigurationSetDeliveryOptions | undefined;
    private _reputationOptions;
    get reputationOptions(): Sesv2ConfigurationSetReputationOptionsOutputReference;
    putReputationOptions(value: Sesv2ConfigurationSetReputationOptions): void;
    resetReputationOptions(): void;
    get reputationOptionsInput(): Sesv2ConfigurationSetReputationOptions | undefined;
    private _sendingOptions;
    get sendingOptions(): Sesv2ConfigurationSetSendingOptionsOutputReference;
    putSendingOptions(value: Sesv2ConfigurationSetSendingOptions): void;
    resetSendingOptions(): void;
    get sendingOptionsInput(): Sesv2ConfigurationSetSendingOptions | undefined;
    private _suppressionOptions;
    get suppressionOptions(): Sesv2ConfigurationSetSuppressionOptionsOutputReference;
    putSuppressionOptions(value: Sesv2ConfigurationSetSuppressionOptions): void;
    resetSuppressionOptions(): void;
    get suppressionOptionsInput(): Sesv2ConfigurationSetSuppressionOptions | undefined;
    private _trackingOptions;
    get trackingOptions(): Sesv2ConfigurationSetTrackingOptionsOutputReference;
    putTrackingOptions(value: Sesv2ConfigurationSetTrackingOptions): void;
    resetTrackingOptions(): void;
    get trackingOptionsInput(): Sesv2ConfigurationSetTrackingOptions | undefined;
    private _vdmOptions;
    get vdmOptions(): Sesv2ConfigurationSetVdmOptionsOutputReference;
    putVdmOptions(value: Sesv2ConfigurationSetVdmOptions): void;
    resetVdmOptions(): void;
    get vdmOptionsInput(): Sesv2ConfigurationSetVdmOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
