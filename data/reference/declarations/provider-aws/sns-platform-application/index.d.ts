/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnsPlatformApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}
    */
    readonly applePlatformBundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}
    */
    readonly applePlatformTeamId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}
    */
    readonly eventDeliveryFailureTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}
    */
    readonly eventEndpointCreatedTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}
    */
    readonly eventEndpointDeletedTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}
    */
    readonly eventEndpointUpdatedTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}
    */
    readonly failureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#id SnsPlatformApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#name SnsPlatformApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#platform SnsPlatformApplication#platform}
    */
    readonly platform: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}
    */
    readonly platformCredential: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}
    */
    readonly platformPrincipal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}
    */
    readonly successFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}
    */
    readonly successFeedbackSampleRate?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application aws_sns_platform_application}
*/
export declare class SnsPlatformApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sns_platform_application";
    /**
    * Generates CDKTF code for importing a SnsPlatformApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnsPlatformApplication to import
    * @param importFromId The id of the existing SnsPlatformApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnsPlatformApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_platform_application aws_sns_platform_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsPlatformApplicationConfig
    */
    constructor(scope: Construct, id: string, config: SnsPlatformApplicationConfig);
    private _applePlatformBundleId?;
    get applePlatformBundleId(): string;
    set applePlatformBundleId(value: string);
    resetApplePlatformBundleId(): void;
    get applePlatformBundleIdInput(): string | undefined;
    private _applePlatformTeamId?;
    get applePlatformTeamId(): string;
    set applePlatformTeamId(value: string);
    resetApplePlatformTeamId(): void;
    get applePlatformTeamIdInput(): string | undefined;
    get arn(): string;
    private _eventDeliveryFailureTopicArn?;
    get eventDeliveryFailureTopicArn(): string;
    set eventDeliveryFailureTopicArn(value: string);
    resetEventDeliveryFailureTopicArn(): void;
    get eventDeliveryFailureTopicArnInput(): string | undefined;
    private _eventEndpointCreatedTopicArn?;
    get eventEndpointCreatedTopicArn(): string;
    set eventEndpointCreatedTopicArn(value: string);
    resetEventEndpointCreatedTopicArn(): void;
    get eventEndpointCreatedTopicArnInput(): string | undefined;
    private _eventEndpointDeletedTopicArn?;
    get eventEndpointDeletedTopicArn(): string;
    set eventEndpointDeletedTopicArn(value: string);
    resetEventEndpointDeletedTopicArn(): void;
    get eventEndpointDeletedTopicArnInput(): string | undefined;
    private _eventEndpointUpdatedTopicArn?;
    get eventEndpointUpdatedTopicArn(): string;
    set eventEndpointUpdatedTopicArn(value: string);
    resetEventEndpointUpdatedTopicArn(): void;
    get eventEndpointUpdatedTopicArnInput(): string | undefined;
    private _failureFeedbackRoleArn?;
    get failureFeedbackRoleArn(): string;
    set failureFeedbackRoleArn(value: string);
    resetFailureFeedbackRoleArn(): void;
    get failureFeedbackRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    get platformInput(): string | undefined;
    private _platformCredential?;
    get platformCredential(): string;
    set platformCredential(value: string);
    get platformCredentialInput(): string | undefined;
    private _platformPrincipal?;
    get platformPrincipal(): string;
    set platformPrincipal(value: string);
    resetPlatformPrincipal(): void;
    get platformPrincipalInput(): string | undefined;
    private _successFeedbackRoleArn?;
    get successFeedbackRoleArn(): string;
    set successFeedbackRoleArn(value: string);
    resetSuccessFeedbackRoleArn(): void;
    get successFeedbackRoleArnInput(): string | undefined;
    private _successFeedbackSampleRate?;
    get successFeedbackSampleRate(): string;
    set successFeedbackSampleRate(value: string);
    resetSuccessFeedbackSampleRate(): void;
    get successFeedbackSampleRateInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
