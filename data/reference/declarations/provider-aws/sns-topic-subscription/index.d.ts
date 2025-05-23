/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnsTopicSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}
    */
    readonly confirmationTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}
    */
    readonly deliveryPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}
    */
    readonly endpointAutoConfirms?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}
    */
    readonly filterPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}
    */
    readonly filterPolicyScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#id SnsTopicSubscription#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#protocol SnsTopicSubscription#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}
    */
    readonly rawMessageDelivery?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}
    */
    readonly redrivePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#replay_policy SnsTopicSubscription#replay_policy}
    */
    readonly replayPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}
    */
    readonly subscriptionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}
    */
    readonly topicArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription aws_sns_topic_subscription}
*/
export declare class SnsTopicSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sns_topic_subscription";
    /**
    * Generates CDKTF code for importing a SnsTopicSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnsTopicSubscription to import
    * @param importFromId The id of the existing SnsTopicSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnsTopicSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic_subscription aws_sns_topic_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: SnsTopicSubscriptionConfig);
    get arn(): string;
    private _confirmationTimeoutInMinutes?;
    get confirmationTimeoutInMinutes(): number;
    set confirmationTimeoutInMinutes(value: number);
    resetConfirmationTimeoutInMinutes(): void;
    get confirmationTimeoutInMinutesInput(): number | undefined;
    get confirmationWasAuthenticated(): cdktf.IResolvable;
    private _deliveryPolicy?;
    get deliveryPolicy(): string;
    set deliveryPolicy(value: string);
    resetDeliveryPolicy(): void;
    get deliveryPolicyInput(): string | undefined;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string | undefined;
    private _endpointAutoConfirms?;
    get endpointAutoConfirms(): boolean | cdktf.IResolvable;
    set endpointAutoConfirms(value: boolean | cdktf.IResolvable);
    resetEndpointAutoConfirms(): void;
    get endpointAutoConfirmsInput(): boolean | cdktf.IResolvable | undefined;
    private _filterPolicy?;
    get filterPolicy(): string;
    set filterPolicy(value: string);
    resetFilterPolicy(): void;
    get filterPolicyInput(): string | undefined;
    private _filterPolicyScope?;
    get filterPolicyScope(): string;
    set filterPolicyScope(value: string);
    resetFilterPolicyScope(): void;
    get filterPolicyScopeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerId(): string;
    get pendingConfirmation(): cdktf.IResolvable;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _rawMessageDelivery?;
    get rawMessageDelivery(): boolean | cdktf.IResolvable;
    set rawMessageDelivery(value: boolean | cdktf.IResolvable);
    resetRawMessageDelivery(): void;
    get rawMessageDeliveryInput(): boolean | cdktf.IResolvable | undefined;
    private _redrivePolicy?;
    get redrivePolicy(): string;
    set redrivePolicy(value: string);
    resetRedrivePolicy(): void;
    get redrivePolicyInput(): string | undefined;
    private _replayPolicy?;
    get replayPolicy(): string;
    set replayPolicy(value: string);
    resetReplayPolicy(): void;
    get replayPolicyInput(): string | undefined;
    private _subscriptionRoleArn?;
    get subscriptionRoleArn(): string;
    set subscriptionRoleArn(value: string);
    resetSubscriptionRoleArn(): void;
    get subscriptionRoleArnInput(): string | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
