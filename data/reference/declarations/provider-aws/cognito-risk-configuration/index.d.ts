/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoRiskConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#client_id CognitoRiskConfiguration#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#id CognitoRiskConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#user_pool_id CognitoRiskConfiguration#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * account_takeover_risk_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#account_takeover_risk_configuration CognitoRiskConfiguration#account_takeover_risk_configuration}
    */
    readonly accountTakeoverRiskConfiguration?: CognitoRiskConfigurationAccountTakeoverRiskConfiguration;
    /**
    * compromised_credentials_risk_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#compromised_credentials_risk_configuration CognitoRiskConfiguration#compromised_credentials_risk_configuration}
    */
    readonly compromisedCredentialsRiskConfiguration?: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration;
    /**
    * risk_exception_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#risk_exception_configuration CognitoRiskConfiguration#risk_exception_configuration}
    */
    readonly riskExceptionConfiguration?: CognitoRiskConfigurationRiskExceptionConfiguration;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}
    */
    readonly eventAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}
    */
    readonly notify: boolean | cdktf.IResolvable;
}
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction): any;
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionToHclTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction): any;
export declare class CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction | undefined;
    set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction | undefined);
    private _eventAction?;
    get eventAction(): string;
    set eventAction(value: string);
    get eventActionInput(): string | undefined;
    private _notify?;
    get notify(): boolean | cdktf.IResolvable;
    set notify(value: boolean | cdktf.IResolvable);
    get notifyInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}
    */
    readonly eventAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}
    */
    readonly notify: boolean | cdktf.IResolvable;
}
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction): any;
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionToHclTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction): any;
export declare class CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction | undefined;
    set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction | undefined);
    private _eventAction?;
    get eventAction(): string;
    set eventAction(value: string);
    get eventActionInput(): string | undefined;
    private _notify?;
    get notify(): boolean | cdktf.IResolvable;
    set notify(value: boolean | cdktf.IResolvable);
    get notifyInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}
    */
    readonly eventAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#notify CognitoRiskConfiguration#notify}
    */
    readonly notify: boolean | cdktf.IResolvable;
}
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction): any;
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionToHclTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction): any;
export declare class CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction | undefined;
    set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction | undefined);
    private _eventAction?;
    get eventAction(): string;
    set eventAction(value: string);
    get eventActionInput(): string | undefined;
    private _notify?;
    get notify(): boolean | cdktf.IResolvable;
    set notify(value: boolean | cdktf.IResolvable);
    get notifyInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions {
    /**
    * high_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#high_action CognitoRiskConfiguration#high_action}
    */
    readonly highAction?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction;
    /**
    * low_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#low_action CognitoRiskConfiguration#low_action}
    */
    readonly lowAction?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction;
    /**
    * medium_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#medium_action CognitoRiskConfiguration#medium_action}
    */
    readonly mediumAction?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction;
}
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions): any;
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsToHclTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions): any;
export declare class CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions | undefined;
    set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions | undefined);
    private _highAction;
    get highAction(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighActionOutputReference;
    putHighAction(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction): void;
    resetHighAction(): void;
    get highActionInput(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsHighAction | undefined;
    private _lowAction;
    get lowAction(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowActionOutputReference;
    putLowAction(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction): void;
    resetLowAction(): void;
    get lowActionInput(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsLowAction | undefined;
    private _mediumAction;
    get mediumAction(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumActionOutputReference;
    putMediumAction(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction): void;
    resetMediumAction(): void;
    get mediumActionInput(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction | undefined;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}
    */
    readonly htmlBody: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}
    */
    readonly subject: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}
    */
    readonly textBody: string;
}
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail): any;
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToHclTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail): any;
export declare class CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | undefined;
    set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | undefined);
    private _htmlBody?;
    get htmlBody(): string;
    set htmlBody(value: string);
    get htmlBodyInput(): string | undefined;
    private _subject?;
    get subject(): string;
    set subject(value: string);
    get subjectInput(): string | undefined;
    private _textBody?;
    get textBody(): string;
    set textBody(value: string);
    get textBodyInput(): string | undefined;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}
    */
    readonly htmlBody: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}
    */
    readonly subject: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}
    */
    readonly textBody: string;
}
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail): any;
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToHclTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail): any;
export declare class CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | undefined;
    set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | undefined);
    private _htmlBody?;
    get htmlBody(): string;
    set htmlBody(value: string);
    get htmlBodyInput(): string | undefined;
    private _subject?;
    get subject(): string;
    set subject(value: string);
    get subjectInput(): string | undefined;
    private _textBody?;
    get textBody(): string;
    set textBody(value: string);
    get textBodyInput(): string | undefined;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#html_body CognitoRiskConfiguration#html_body}
    */
    readonly htmlBody: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#subject CognitoRiskConfiguration#subject}
    */
    readonly subject: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#text_body CognitoRiskConfiguration#text_body}
    */
    readonly textBody: string;
}
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail): any;
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToHclTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail): any;
export declare class CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | undefined;
    set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | undefined);
    private _htmlBody?;
    get htmlBody(): string;
    set htmlBody(value: string);
    get htmlBodyInput(): string | undefined;
    private _subject?;
    get subject(): string;
    set subject(value: string);
    get subjectInput(): string | undefined;
    private _textBody?;
    get textBody(): string;
    set textBody(value: string);
    get textBodyInput(): string | undefined;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#from CognitoRiskConfiguration#from}
    */
    readonly from?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#reply_to CognitoRiskConfiguration#reply_to}
    */
    readonly replyTo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#source_arn CognitoRiskConfiguration#source_arn}
    */
    readonly sourceArn: string;
    /**
    * block_email block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#block_email CognitoRiskConfiguration#block_email}
    */
    readonly blockEmail?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;
    /**
    * mfa_email block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#mfa_email CognitoRiskConfiguration#mfa_email}
    */
    readonly mfaEmail?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;
    /**
    * no_action_email block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#no_action_email CognitoRiskConfiguration#no_action_email}
    */
    readonly noActionEmail?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;
}
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration): any;
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationToHclTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration): any;
export declare class CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration | undefined;
    set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration | undefined);
    private _from?;
    get from(): string;
    set from(value: string);
    resetFrom(): void;
    get fromInput(): string | undefined;
    private _replyTo?;
    get replyTo(): string;
    set replyTo(value: string);
    resetReplyTo(): void;
    get replyToInput(): string | undefined;
    private _sourceArn?;
    get sourceArn(): string;
    set sourceArn(value: string);
    get sourceArnInput(): string | undefined;
    private _blockEmail;
    get blockEmail(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference;
    putBlockEmail(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail): void;
    resetBlockEmail(): void;
    get blockEmailInput(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | undefined;
    private _mfaEmail;
    get mfaEmail(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference;
    putMfaEmail(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail): void;
    resetMfaEmail(): void;
    get mfaEmailInput(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | undefined;
    private _noActionEmail;
    get noActionEmail(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference;
    putNoActionEmail(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail): void;
    resetNoActionEmail(): void;
    get noActionEmailInput(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | undefined;
}
export interface CognitoRiskConfigurationAccountTakeoverRiskConfiguration {
    /**
    * actions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}
    */
    readonly actions: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions;
    /**
    * notify_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#notify_configuration CognitoRiskConfiguration#notify_configuration}
    */
    readonly notifyConfiguration: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration;
}
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationToTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfiguration): any;
export declare function cognitoRiskConfigurationAccountTakeoverRiskConfigurationToHclTerraform(struct?: CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference | CognitoRiskConfigurationAccountTakeoverRiskConfiguration): any;
export declare class CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationAccountTakeoverRiskConfiguration | undefined;
    set internalValue(value: CognitoRiskConfigurationAccountTakeoverRiskConfiguration | undefined);
    private _actions;
    get actions(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActionsOutputReference;
    putActions(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions): void;
    get actionsInput(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationActions | undefined;
    private _notifyConfiguration;
    get notifyConfiguration(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference;
    putNotifyConfiguration(value: CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration): void;
    get notifyConfigurationInput(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration | undefined;
}
export interface CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#event_action CognitoRiskConfiguration#event_action}
    */
    readonly eventAction: string;
}
export declare function cognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsToTerraform(struct?: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference | CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions): any;
export declare function cognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsToHclTerraform(struct?: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference | CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions): any;
export declare class CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions | undefined;
    set internalValue(value: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions | undefined);
    private _eventAction?;
    get eventAction(): string;
    set eventAction(value: string);
    get eventActionInput(): string | undefined;
}
export interface CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#event_filter CognitoRiskConfiguration#event_filter}
    */
    readonly eventFilter?: string[];
    /**
    * actions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#actions CognitoRiskConfiguration#actions}
    */
    readonly actions: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions;
}
export declare function cognitoRiskConfigurationCompromisedCredentialsRiskConfigurationToTerraform(struct?: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference | CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration): any;
export declare function cognitoRiskConfigurationCompromisedCredentialsRiskConfigurationToHclTerraform(struct?: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference | CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration): any;
export declare class CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration | undefined;
    set internalValue(value: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration | undefined);
    private _eventFilter?;
    get eventFilter(): string[];
    set eventFilter(value: string[]);
    resetEventFilter(): void;
    get eventFilterInput(): string[] | undefined;
    private _actions;
    get actions(): CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActionsOutputReference;
    putActions(value: CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions): void;
    get actionsInput(): CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationActions | undefined;
}
export interface CognitoRiskConfigurationRiskExceptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#blocked_ip_range_list CognitoRiskConfiguration#blocked_ip_range_list}
    */
    readonly blockedIpRangeList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#skipped_ip_range_list CognitoRiskConfiguration#skipped_ip_range_list}
    */
    readonly skippedIpRangeList?: string[];
}
export declare function cognitoRiskConfigurationRiskExceptionConfigurationToTerraform(struct?: CognitoRiskConfigurationRiskExceptionConfigurationOutputReference | CognitoRiskConfigurationRiskExceptionConfiguration): any;
export declare function cognitoRiskConfigurationRiskExceptionConfigurationToHclTerraform(struct?: CognitoRiskConfigurationRiskExceptionConfigurationOutputReference | CognitoRiskConfigurationRiskExceptionConfiguration): any;
export declare class CognitoRiskConfigurationRiskExceptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoRiskConfigurationRiskExceptionConfiguration | undefined;
    set internalValue(value: CognitoRiskConfigurationRiskExceptionConfiguration | undefined);
    private _blockedIpRangeList?;
    get blockedIpRangeList(): string[];
    set blockedIpRangeList(value: string[]);
    resetBlockedIpRangeList(): void;
    get blockedIpRangeListInput(): string[] | undefined;
    private _skippedIpRangeList?;
    get skippedIpRangeList(): string[];
    set skippedIpRangeList(value: string[]);
    resetSkippedIpRangeList(): void;
    get skippedIpRangeListInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration aws_cognito_risk_configuration}
*/
export declare class CognitoRiskConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_risk_configuration";
    /**
    * Generates CDKTF code for importing a CognitoRiskConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoRiskConfiguration to import
    * @param importFromId The id of the existing CognitoRiskConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoRiskConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_risk_configuration aws_cognito_risk_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoRiskConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: CognitoRiskConfigurationConfig);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
    private _accountTakeoverRiskConfiguration;
    get accountTakeoverRiskConfiguration(): CognitoRiskConfigurationAccountTakeoverRiskConfigurationOutputReference;
    putAccountTakeoverRiskConfiguration(value: CognitoRiskConfigurationAccountTakeoverRiskConfiguration): void;
    resetAccountTakeoverRiskConfiguration(): void;
    get accountTakeoverRiskConfigurationInput(): CognitoRiskConfigurationAccountTakeoverRiskConfiguration | undefined;
    private _compromisedCredentialsRiskConfiguration;
    get compromisedCredentialsRiskConfiguration(): CognitoRiskConfigurationCompromisedCredentialsRiskConfigurationOutputReference;
    putCompromisedCredentialsRiskConfiguration(value: CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration): void;
    resetCompromisedCredentialsRiskConfiguration(): void;
    get compromisedCredentialsRiskConfigurationInput(): CognitoRiskConfigurationCompromisedCredentialsRiskConfiguration | undefined;
    private _riskExceptionConfiguration;
    get riskExceptionConfiguration(): CognitoRiskConfigurationRiskExceptionConfigurationOutputReference;
    putRiskExceptionConfiguration(value: CognitoRiskConfigurationRiskExceptionConfiguration): void;
    resetRiskExceptionConfiguration(): void;
    get riskExceptionConfigurationInput(): CognitoRiskConfigurationRiskExceptionConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
