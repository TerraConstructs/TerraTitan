/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesConfigurationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set#id SesConfigurationSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set#name SesConfigurationSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}
    */
    readonly reputationMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}
    */
    readonly sendingEnabled?: boolean | cdktf.IResolvable;
    /**
    * delivery_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}
    */
    readonly deliveryOptions?: SesConfigurationSetDeliveryOptions;
    /**
    * tracking_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}
    */
    readonly trackingOptions?: SesConfigurationSetTrackingOptions;
}
export interface SesConfigurationSetDeliveryOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}
    */
    readonly tlsPolicy?: string;
}
export declare function sesConfigurationSetDeliveryOptionsToTerraform(struct?: SesConfigurationSetDeliveryOptionsOutputReference | SesConfigurationSetDeliveryOptions): any;
export declare function sesConfigurationSetDeliveryOptionsToHclTerraform(struct?: SesConfigurationSetDeliveryOptionsOutputReference | SesConfigurationSetDeliveryOptions): any;
export declare class SesConfigurationSetDeliveryOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SesConfigurationSetDeliveryOptions | undefined;
    set internalValue(value: SesConfigurationSetDeliveryOptions | undefined);
    private _tlsPolicy?;
    get tlsPolicy(): string;
    set tlsPolicy(value: string);
    resetTlsPolicy(): void;
    get tlsPolicyInput(): string | undefined;
}
export interface SesConfigurationSetTrackingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}
    */
    readonly customRedirectDomain?: string;
}
export declare function sesConfigurationSetTrackingOptionsToTerraform(struct?: SesConfigurationSetTrackingOptionsOutputReference | SesConfigurationSetTrackingOptions): any;
export declare function sesConfigurationSetTrackingOptionsToHclTerraform(struct?: SesConfigurationSetTrackingOptionsOutputReference | SesConfigurationSetTrackingOptions): any;
export declare class SesConfigurationSetTrackingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SesConfigurationSetTrackingOptions | undefined;
    set internalValue(value: SesConfigurationSetTrackingOptions | undefined);
    private _customRedirectDomain?;
    get customRedirectDomain(): string;
    set customRedirectDomain(value: string);
    resetCustomRedirectDomain(): void;
    get customRedirectDomainInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set aws_ses_configuration_set}
*/
export declare class SesConfigurationSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ses_configuration_set";
    /**
    * Generates CDKTF code for importing a SesConfigurationSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SesConfigurationSet to import
    * @param importFromId The id of the existing SesConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SesConfigurationSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_configuration_set aws_ses_configuration_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesConfigurationSetConfig
    */
    constructor(scope: Construct, id: string, config: SesConfigurationSetConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastFreshStart(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _reputationMetricsEnabled?;
    get reputationMetricsEnabled(): boolean | cdktf.IResolvable;
    set reputationMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetReputationMetricsEnabled(): void;
    get reputationMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _sendingEnabled?;
    get sendingEnabled(): boolean | cdktf.IResolvable;
    set sendingEnabled(value: boolean | cdktf.IResolvable);
    resetSendingEnabled(): void;
    get sendingEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _deliveryOptions;
    get deliveryOptions(): SesConfigurationSetDeliveryOptionsOutputReference;
    putDeliveryOptions(value: SesConfigurationSetDeliveryOptions): void;
    resetDeliveryOptions(): void;
    get deliveryOptionsInput(): SesConfigurationSetDeliveryOptions | undefined;
    private _trackingOptions;
    get trackingOptions(): SesConfigurationSetTrackingOptionsOutputReference;
    putTrackingOptions(value: SesConfigurationSetTrackingOptions): void;
    resetTrackingOptions(): void;
    get trackingOptionsInput(): SesConfigurationSetTrackingOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
