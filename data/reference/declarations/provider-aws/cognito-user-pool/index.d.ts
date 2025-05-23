/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}
    */
    readonly aliasAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}
    */
    readonly autoVerifiedAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}
    */
    readonly deletionProtection?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}
    */
    readonly emailVerificationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}
    */
    readonly emailVerificationSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#id CognitoUserPool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}
    */
    readonly mfaConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#name CognitoUserPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}
    */
    readonly smsAuthenticationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}
    */
    readonly smsVerificationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#tags CognitoUserPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#tags_all CognitoUserPool#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#user_pool_tier CognitoUserPool#user_pool_tier}
    */
    readonly userPoolTier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}
    */
    readonly usernameAttributes?: string[];
    /**
    * account_recovery_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#account_recovery_setting CognitoUserPool#account_recovery_setting}
    */
    readonly accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting;
    /**
    * admin_create_user_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#admin_create_user_config CognitoUserPool#admin_create_user_config}
    */
    readonly adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig;
    /**
    * device_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#device_configuration CognitoUserPool#device_configuration}
    */
    readonly deviceConfiguration?: CognitoUserPoolDeviceConfiguration;
    /**
    * email_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_configuration CognitoUserPool#email_configuration}
    */
    readonly emailConfiguration?: CognitoUserPoolEmailConfiguration;
    /**
    * email_mfa_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_mfa_configuration CognitoUserPool#email_mfa_configuration}
    */
    readonly emailMfaConfiguration?: CognitoUserPoolEmailMfaConfiguration;
    /**
    * lambda_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#lambda_config CognitoUserPool#lambda_config}
    */
    readonly lambdaConfig?: CognitoUserPoolLambdaConfig;
    /**
    * password_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#password_policy CognitoUserPool#password_policy}
    */
    readonly passwordPolicy?: CognitoUserPoolPasswordPolicy;
    /**
    * schema block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#schema CognitoUserPool#schema}
    */
    readonly schema?: CognitoUserPoolSchema[] | cdktf.IResolvable;
    /**
    * sign_in_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#sign_in_policy CognitoUserPool#sign_in_policy}
    */
    readonly signInPolicy?: CognitoUserPoolSignInPolicy;
    /**
    * sms_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#sms_configuration CognitoUserPool#sms_configuration}
    */
    readonly smsConfiguration?: CognitoUserPoolSmsConfiguration;
    /**
    * software_token_mfa_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}
    */
    readonly softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration;
    /**
    * user_attribute_update_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#user_attribute_update_settings CognitoUserPool#user_attribute_update_settings}
    */
    readonly userAttributeUpdateSettings?: CognitoUserPoolUserAttributeUpdateSettings;
    /**
    * user_pool_add_ons block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#user_pool_add_ons CognitoUserPool#user_pool_add_ons}
    */
    readonly userPoolAddOns?: CognitoUserPoolUserPoolAddOns;
    /**
    * username_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#username_configuration CognitoUserPool#username_configuration}
    */
    readonly usernameConfiguration?: CognitoUserPoolUsernameConfiguration;
    /**
    * verification_message_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#verification_message_template CognitoUserPool#verification_message_template}
    */
    readonly verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate;
    /**
    * web_authn_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#web_authn_configuration CognitoUserPool#web_authn_configuration}
    */
    readonly webAuthnConfiguration?: CognitoUserPoolWebAuthnConfiguration;
}
export interface CognitoUserPoolAccountRecoverySettingRecoveryMechanism {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#name CognitoUserPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#priority CognitoUserPool#priority}
    */
    readonly priority: number;
}
export declare function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism | cdktf.IResolvable): any;
export declare function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToHclTerraform(struct?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism | cdktf.IResolvable): any;
export declare class CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoUserPoolAccountRecoverySettingRecoveryMechanism | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoUserPoolAccountRecoverySettingRecoveryMechanism | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
}
export declare class CognitoUserPoolAccountRecoverySettingRecoveryMechanismList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference;
}
export interface CognitoUserPoolAccountRecoverySetting {
    /**
    * recovery_mechanism block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#recovery_mechanism CognitoUserPool#recovery_mechanism}
    */
    readonly recoveryMechanism?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[] | cdktf.IResolvable;
}
export declare function cognitoUserPoolAccountRecoverySettingToTerraform(struct?: CognitoUserPoolAccountRecoverySettingOutputReference | CognitoUserPoolAccountRecoverySetting): any;
export declare function cognitoUserPoolAccountRecoverySettingToHclTerraform(struct?: CognitoUserPoolAccountRecoverySettingOutputReference | CognitoUserPoolAccountRecoverySetting): any;
export declare class CognitoUserPoolAccountRecoverySettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolAccountRecoverySetting | undefined;
    set internalValue(value: CognitoUserPoolAccountRecoverySetting | undefined);
    private _recoveryMechanism;
    get recoveryMechanism(): CognitoUserPoolAccountRecoverySettingRecoveryMechanismList;
    putRecoveryMechanism(value: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[] | cdktf.IResolvable): void;
    resetRecoveryMechanism(): void;
    get recoveryMechanismInput(): cdktf.IResolvable | CognitoUserPoolAccountRecoverySettingRecoveryMechanism[] | undefined;
}
export interface CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_message CognitoUserPool#email_message}
    */
    readonly emailMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_subject CognitoUserPool#email_subject}
    */
    readonly emailSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#sms_message CognitoUserPool#sms_message}
    */
    readonly smsMessage?: string;
}
export declare function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference | CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any;
export declare function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToHclTerraform(struct?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference | CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any;
export declare class CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined;
    set internalValue(value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined);
    private _emailMessage?;
    get emailMessage(): string;
    set emailMessage(value: string);
    resetEmailMessage(): void;
    get emailMessageInput(): string | undefined;
    private _emailSubject?;
    get emailSubject(): string;
    set emailSubject(value: string);
    resetEmailSubject(): void;
    get emailSubjectInput(): string | undefined;
    private _smsMessage?;
    get smsMessage(): string;
    set smsMessage(value: string);
    resetSmsMessage(): void;
    get smsMessageInput(): string | undefined;
}
export interface CognitoUserPoolAdminCreateUserConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}
    */
    readonly allowAdminCreateUserOnly?: boolean | cdktf.IResolvable;
    /**
    * invite_message_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#invite_message_template CognitoUserPool#invite_message_template}
    */
    readonly inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;
}
export declare function cognitoUserPoolAdminCreateUserConfigToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigOutputReference | CognitoUserPoolAdminCreateUserConfig): any;
export declare function cognitoUserPoolAdminCreateUserConfigToHclTerraform(struct?: CognitoUserPoolAdminCreateUserConfigOutputReference | CognitoUserPoolAdminCreateUserConfig): any;
export declare class CognitoUserPoolAdminCreateUserConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolAdminCreateUserConfig | undefined;
    set internalValue(value: CognitoUserPoolAdminCreateUserConfig | undefined);
    private _allowAdminCreateUserOnly?;
    get allowAdminCreateUserOnly(): boolean | cdktf.IResolvable;
    set allowAdminCreateUserOnly(value: boolean | cdktf.IResolvable);
    resetAllowAdminCreateUserOnly(): void;
    get allowAdminCreateUserOnlyInput(): boolean | cdktf.IResolvable | undefined;
    private _inviteMessageTemplate;
    get inviteMessageTemplate(): CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference;
    putInviteMessageTemplate(value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): void;
    resetInviteMessageTemplate(): void;
    get inviteMessageTemplateInput(): CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined;
}
export interface CognitoUserPoolDeviceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}
    */
    readonly challengeRequiredOnNewDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}
    */
    readonly deviceOnlyRememberedOnUserPrompt?: boolean | cdktf.IResolvable;
}
export declare function cognitoUserPoolDeviceConfigurationToTerraform(struct?: CognitoUserPoolDeviceConfigurationOutputReference | CognitoUserPoolDeviceConfiguration): any;
export declare function cognitoUserPoolDeviceConfigurationToHclTerraform(struct?: CognitoUserPoolDeviceConfigurationOutputReference | CognitoUserPoolDeviceConfiguration): any;
export declare class CognitoUserPoolDeviceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolDeviceConfiguration | undefined;
    set internalValue(value: CognitoUserPoolDeviceConfiguration | undefined);
    private _challengeRequiredOnNewDevice?;
    get challengeRequiredOnNewDevice(): boolean | cdktf.IResolvable;
    set challengeRequiredOnNewDevice(value: boolean | cdktf.IResolvable);
    resetChallengeRequiredOnNewDevice(): void;
    get challengeRequiredOnNewDeviceInput(): boolean | cdktf.IResolvable | undefined;
    private _deviceOnlyRememberedOnUserPrompt?;
    get deviceOnlyRememberedOnUserPrompt(): boolean | cdktf.IResolvable;
    set deviceOnlyRememberedOnUserPrompt(value: boolean | cdktf.IResolvable);
    resetDeviceOnlyRememberedOnUserPrompt(): void;
    get deviceOnlyRememberedOnUserPromptInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CognitoUserPoolEmailConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}
    */
    readonly configurationSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}
    */
    readonly emailSendingAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}
    */
    readonly fromEmailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}
    */
    readonly replyToEmailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#source_arn CognitoUserPool#source_arn}
    */
    readonly sourceArn?: string;
}
export declare function cognitoUserPoolEmailConfigurationToTerraform(struct?: CognitoUserPoolEmailConfigurationOutputReference | CognitoUserPoolEmailConfiguration): any;
export declare function cognitoUserPoolEmailConfigurationToHclTerraform(struct?: CognitoUserPoolEmailConfigurationOutputReference | CognitoUserPoolEmailConfiguration): any;
export declare class CognitoUserPoolEmailConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolEmailConfiguration | undefined;
    set internalValue(value: CognitoUserPoolEmailConfiguration | undefined);
    private _configurationSet?;
    get configurationSet(): string;
    set configurationSet(value: string);
    resetConfigurationSet(): void;
    get configurationSetInput(): string | undefined;
    private _emailSendingAccount?;
    get emailSendingAccount(): string;
    set emailSendingAccount(value: string);
    resetEmailSendingAccount(): void;
    get emailSendingAccountInput(): string | undefined;
    private _fromEmailAddress?;
    get fromEmailAddress(): string;
    set fromEmailAddress(value: string);
    resetFromEmailAddress(): void;
    get fromEmailAddressInput(): string | undefined;
    private _replyToEmailAddress?;
    get replyToEmailAddress(): string;
    set replyToEmailAddress(value: string);
    resetReplyToEmailAddress(): void;
    get replyToEmailAddressInput(): string | undefined;
    private _sourceArn?;
    get sourceArn(): string;
    set sourceArn(value: string);
    resetSourceArn(): void;
    get sourceArnInput(): string | undefined;
}
export interface CognitoUserPoolEmailMfaConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#message CognitoUserPool#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#subject CognitoUserPool#subject}
    */
    readonly subject?: string;
}
export declare function cognitoUserPoolEmailMfaConfigurationToTerraform(struct?: CognitoUserPoolEmailMfaConfigurationOutputReference | CognitoUserPoolEmailMfaConfiguration): any;
export declare function cognitoUserPoolEmailMfaConfigurationToHclTerraform(struct?: CognitoUserPoolEmailMfaConfigurationOutputReference | CognitoUserPoolEmailMfaConfiguration): any;
export declare class CognitoUserPoolEmailMfaConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolEmailMfaConfiguration | undefined;
    set internalValue(value: CognitoUserPoolEmailMfaConfiguration | undefined);
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string | undefined;
    private _subject?;
    get subject(): string;
    set subject(value: string);
    resetSubject(): void;
    get subjectInput(): string | undefined;
}
export interface CognitoUserPoolLambdaConfigCustomEmailSender {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}
    */
    readonly lambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}
    */
    readonly lambdaVersion: string;
}
export declare function cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference | CognitoUserPoolLambdaConfigCustomEmailSender): any;
export declare function cognitoUserPoolLambdaConfigCustomEmailSenderToHclTerraform(struct?: CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference | CognitoUserPoolLambdaConfigCustomEmailSender): any;
export declare class CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolLambdaConfigCustomEmailSender | undefined;
    set internalValue(value: CognitoUserPoolLambdaConfigCustomEmailSender | undefined);
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string | undefined;
    private _lambdaVersion?;
    get lambdaVersion(): string;
    set lambdaVersion(value: string);
    get lambdaVersionInput(): string | undefined;
}
export interface CognitoUserPoolLambdaConfigCustomSmsSender {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}
    */
    readonly lambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}
    */
    readonly lambdaVersion: string;
}
export declare function cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference | CognitoUserPoolLambdaConfigCustomSmsSender): any;
export declare function cognitoUserPoolLambdaConfigCustomSmsSenderToHclTerraform(struct?: CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference | CognitoUserPoolLambdaConfigCustomSmsSender): any;
export declare class CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolLambdaConfigCustomSmsSender | undefined;
    set internalValue(value: CognitoUserPoolLambdaConfigCustomSmsSender | undefined);
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string | undefined;
    private _lambdaVersion?;
    get lambdaVersion(): string;
    set lambdaVersion(value: string);
    get lambdaVersionInput(): string | undefined;
}
export interface CognitoUserPoolLambdaConfigPreTokenGenerationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}
    */
    readonly lambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}
    */
    readonly lambdaVersion: string;
}
export declare function cognitoUserPoolLambdaConfigPreTokenGenerationConfigToTerraform(struct?: CognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference | CognitoUserPoolLambdaConfigPreTokenGenerationConfig): any;
export declare function cognitoUserPoolLambdaConfigPreTokenGenerationConfigToHclTerraform(struct?: CognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference | CognitoUserPoolLambdaConfigPreTokenGenerationConfig): any;
export declare class CognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolLambdaConfigPreTokenGenerationConfig | undefined;
    set internalValue(value: CognitoUserPoolLambdaConfigPreTokenGenerationConfig | undefined);
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string | undefined;
    private _lambdaVersion?;
    get lambdaVersion(): string;
    set lambdaVersion(value: string);
    get lambdaVersionInput(): string | undefined;
}
export interface CognitoUserPoolLambdaConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}
    */
    readonly createAuthChallenge?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#custom_message CognitoUserPool#custom_message}
    */
    readonly customMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}
    */
    readonly defineAuthChallenge?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}
    */
    readonly postAuthentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}
    */
    readonly postConfirmation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}
    */
    readonly preAuthentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}
    */
    readonly preSignUp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}
    */
    readonly preTokenGeneration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#user_migration CognitoUserPool#user_migration}
    */
    readonly userMigration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}
    */
    readonly verifyAuthChallengeResponse?: string;
    /**
    * custom_email_sender block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#custom_email_sender CognitoUserPool#custom_email_sender}
    */
    readonly customEmailSender?: CognitoUserPoolLambdaConfigCustomEmailSender;
    /**
    * custom_sms_sender block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#custom_sms_sender CognitoUserPool#custom_sms_sender}
    */
    readonly customSmsSender?: CognitoUserPoolLambdaConfigCustomSmsSender;
    /**
    * pre_token_generation_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#pre_token_generation_config CognitoUserPool#pre_token_generation_config}
    */
    readonly preTokenGenerationConfig?: CognitoUserPoolLambdaConfigPreTokenGenerationConfig;
}
export declare function cognitoUserPoolLambdaConfigToTerraform(struct?: CognitoUserPoolLambdaConfigOutputReference | CognitoUserPoolLambdaConfig): any;
export declare function cognitoUserPoolLambdaConfigToHclTerraform(struct?: CognitoUserPoolLambdaConfigOutputReference | CognitoUserPoolLambdaConfig): any;
export declare class CognitoUserPoolLambdaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolLambdaConfig | undefined;
    set internalValue(value: CognitoUserPoolLambdaConfig | undefined);
    private _createAuthChallenge?;
    get createAuthChallenge(): string;
    set createAuthChallenge(value: string);
    resetCreateAuthChallenge(): void;
    get createAuthChallengeInput(): string | undefined;
    private _customMessage?;
    get customMessage(): string;
    set customMessage(value: string);
    resetCustomMessage(): void;
    get customMessageInput(): string | undefined;
    private _defineAuthChallenge?;
    get defineAuthChallenge(): string;
    set defineAuthChallenge(value: string);
    resetDefineAuthChallenge(): void;
    get defineAuthChallengeInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _postAuthentication?;
    get postAuthentication(): string;
    set postAuthentication(value: string);
    resetPostAuthentication(): void;
    get postAuthenticationInput(): string | undefined;
    private _postConfirmation?;
    get postConfirmation(): string;
    set postConfirmation(value: string);
    resetPostConfirmation(): void;
    get postConfirmationInput(): string | undefined;
    private _preAuthentication?;
    get preAuthentication(): string;
    set preAuthentication(value: string);
    resetPreAuthentication(): void;
    get preAuthenticationInput(): string | undefined;
    private _preSignUp?;
    get preSignUp(): string;
    set preSignUp(value: string);
    resetPreSignUp(): void;
    get preSignUpInput(): string | undefined;
    private _preTokenGeneration?;
    get preTokenGeneration(): string;
    set preTokenGeneration(value: string);
    resetPreTokenGeneration(): void;
    get preTokenGenerationInput(): string | undefined;
    private _userMigration?;
    get userMigration(): string;
    set userMigration(value: string);
    resetUserMigration(): void;
    get userMigrationInput(): string | undefined;
    private _verifyAuthChallengeResponse?;
    get verifyAuthChallengeResponse(): string;
    set verifyAuthChallengeResponse(value: string);
    resetVerifyAuthChallengeResponse(): void;
    get verifyAuthChallengeResponseInput(): string | undefined;
    private _customEmailSender;
    get customEmailSender(): CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference;
    putCustomEmailSender(value: CognitoUserPoolLambdaConfigCustomEmailSender): void;
    resetCustomEmailSender(): void;
    get customEmailSenderInput(): CognitoUserPoolLambdaConfigCustomEmailSender | undefined;
    private _customSmsSender;
    get customSmsSender(): CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference;
    putCustomSmsSender(value: CognitoUserPoolLambdaConfigCustomSmsSender): void;
    resetCustomSmsSender(): void;
    get customSmsSenderInput(): CognitoUserPoolLambdaConfigCustomSmsSender | undefined;
    private _preTokenGenerationConfig;
    get preTokenGenerationConfig(): CognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference;
    putPreTokenGenerationConfig(value: CognitoUserPoolLambdaConfigPreTokenGenerationConfig): void;
    resetPreTokenGenerationConfig(): void;
    get preTokenGenerationConfigInput(): CognitoUserPoolLambdaConfigPreTokenGenerationConfig | undefined;
}
export interface CognitoUserPoolPasswordPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}
    */
    readonly minimumLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#password_history_size CognitoUserPool#password_history_size}
    */
    readonly passwordHistorySize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}
    */
    readonly requireLowercase?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}
    */
    readonly requireNumbers?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}
    */
    readonly requireSymbols?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}
    */
    readonly requireUppercase?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}
    */
    readonly temporaryPasswordValidityDays?: number;
}
export declare function cognitoUserPoolPasswordPolicyToTerraform(struct?: CognitoUserPoolPasswordPolicyOutputReference | CognitoUserPoolPasswordPolicy): any;
export declare function cognitoUserPoolPasswordPolicyToHclTerraform(struct?: CognitoUserPoolPasswordPolicyOutputReference | CognitoUserPoolPasswordPolicy): any;
export declare class CognitoUserPoolPasswordPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolPasswordPolicy | undefined;
    set internalValue(value: CognitoUserPoolPasswordPolicy | undefined);
    private _minimumLength?;
    get minimumLength(): number;
    set minimumLength(value: number);
    resetMinimumLength(): void;
    get minimumLengthInput(): number | undefined;
    private _passwordHistorySize?;
    get passwordHistorySize(): number;
    set passwordHistorySize(value: number);
    resetPasswordHistorySize(): void;
    get passwordHistorySizeInput(): number | undefined;
    private _requireLowercase?;
    get requireLowercase(): boolean | cdktf.IResolvable;
    set requireLowercase(value: boolean | cdktf.IResolvable);
    resetRequireLowercase(): void;
    get requireLowercaseInput(): boolean | cdktf.IResolvable | undefined;
    private _requireNumbers?;
    get requireNumbers(): boolean | cdktf.IResolvable;
    set requireNumbers(value: boolean | cdktf.IResolvable);
    resetRequireNumbers(): void;
    get requireNumbersInput(): boolean | cdktf.IResolvable | undefined;
    private _requireSymbols?;
    get requireSymbols(): boolean | cdktf.IResolvable;
    set requireSymbols(value: boolean | cdktf.IResolvable);
    resetRequireSymbols(): void;
    get requireSymbolsInput(): boolean | cdktf.IResolvable | undefined;
    private _requireUppercase?;
    get requireUppercase(): boolean | cdktf.IResolvable;
    set requireUppercase(value: boolean | cdktf.IResolvable);
    resetRequireUppercase(): void;
    get requireUppercaseInput(): boolean | cdktf.IResolvable | undefined;
    private _temporaryPasswordValidityDays?;
    get temporaryPasswordValidityDays(): number;
    set temporaryPasswordValidityDays(value: number);
    resetTemporaryPasswordValidityDays(): void;
    get temporaryPasswordValidityDaysInput(): number | undefined;
}
export interface CognitoUserPoolSchemaNumberAttributeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#max_value CognitoUserPool#max_value}
    */
    readonly maxValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#min_value CognitoUserPool#min_value}
    */
    readonly minValue?: string;
}
export declare function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference | CognitoUserPoolSchemaNumberAttributeConstraints): any;
export declare function cognitoUserPoolSchemaNumberAttributeConstraintsToHclTerraform(struct?: CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference | CognitoUserPoolSchemaNumberAttributeConstraints): any;
export declare class CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolSchemaNumberAttributeConstraints | undefined;
    set internalValue(value: CognitoUserPoolSchemaNumberAttributeConstraints | undefined);
    private _maxValue?;
    get maxValue(): string;
    set maxValue(value: string);
    resetMaxValue(): void;
    get maxValueInput(): string | undefined;
    private _minValue?;
    get minValue(): string;
    set minValue(value: string);
    resetMinValue(): void;
    get minValueInput(): string | undefined;
}
export interface CognitoUserPoolSchemaStringAttributeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#max_length CognitoUserPool#max_length}
    */
    readonly maxLength?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#min_length CognitoUserPool#min_length}
    */
    readonly minLength?: string;
}
export declare function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaStringAttributeConstraintsOutputReference | CognitoUserPoolSchemaStringAttributeConstraints): any;
export declare function cognitoUserPoolSchemaStringAttributeConstraintsToHclTerraform(struct?: CognitoUserPoolSchemaStringAttributeConstraintsOutputReference | CognitoUserPoolSchemaStringAttributeConstraints): any;
export declare class CognitoUserPoolSchemaStringAttributeConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolSchemaStringAttributeConstraints | undefined;
    set internalValue(value: CognitoUserPoolSchemaStringAttributeConstraints | undefined);
    private _maxLength?;
    get maxLength(): string;
    set maxLength(value: string);
    resetMaxLength(): void;
    get maxLengthInput(): string | undefined;
    private _minLength?;
    get minLength(): string;
    set minLength(value: string);
    resetMinLength(): void;
    get minLengthInput(): string | undefined;
}
export interface CognitoUserPoolSchema {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}
    */
    readonly attributeDataType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}
    */
    readonly developerOnlyAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#mutable CognitoUserPool#mutable}
    */
    readonly mutable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#name CognitoUserPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#required CognitoUserPool#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * number_attribute_constraints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#number_attribute_constraints CognitoUserPool#number_attribute_constraints}
    */
    readonly numberAttributeConstraints?: CognitoUserPoolSchemaNumberAttributeConstraints;
    /**
    * string_attribute_constraints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#string_attribute_constraints CognitoUserPool#string_attribute_constraints}
    */
    readonly stringAttributeConstraints?: CognitoUserPoolSchemaStringAttributeConstraints;
}
export declare function cognitoUserPoolSchemaToTerraform(struct?: CognitoUserPoolSchema | cdktf.IResolvable): any;
export declare function cognitoUserPoolSchemaToHclTerraform(struct?: CognitoUserPoolSchema | cdktf.IResolvable): any;
export declare class CognitoUserPoolSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoUserPoolSchema | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoUserPoolSchema | cdktf.IResolvable | undefined);
    private _attributeDataType?;
    get attributeDataType(): string;
    set attributeDataType(value: string);
    get attributeDataTypeInput(): string | undefined;
    private _developerOnlyAttribute?;
    get developerOnlyAttribute(): boolean | cdktf.IResolvable;
    set developerOnlyAttribute(value: boolean | cdktf.IResolvable);
    resetDeveloperOnlyAttribute(): void;
    get developerOnlyAttributeInput(): boolean | cdktf.IResolvable | undefined;
    private _mutable?;
    get mutable(): boolean | cdktf.IResolvable;
    set mutable(value: boolean | cdktf.IResolvable);
    resetMutable(): void;
    get mutableInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): boolean | cdktf.IResolvable | undefined;
    private _numberAttributeConstraints;
    get numberAttributeConstraints(): CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference;
    putNumberAttributeConstraints(value: CognitoUserPoolSchemaNumberAttributeConstraints): void;
    resetNumberAttributeConstraints(): void;
    get numberAttributeConstraintsInput(): CognitoUserPoolSchemaNumberAttributeConstraints | undefined;
    private _stringAttributeConstraints;
    get stringAttributeConstraints(): CognitoUserPoolSchemaStringAttributeConstraintsOutputReference;
    putStringAttributeConstraints(value: CognitoUserPoolSchemaStringAttributeConstraints): void;
    resetStringAttributeConstraints(): void;
    get stringAttributeConstraintsInput(): CognitoUserPoolSchemaStringAttributeConstraints | undefined;
}
export declare class CognitoUserPoolSchemaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoUserPoolSchema[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoUserPoolSchemaOutputReference;
}
export interface CognitoUserPoolSignInPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#allowed_first_auth_factors CognitoUserPool#allowed_first_auth_factors}
    */
    readonly allowedFirstAuthFactors?: string[];
}
export declare function cognitoUserPoolSignInPolicyToTerraform(struct?: CognitoUserPoolSignInPolicyOutputReference | CognitoUserPoolSignInPolicy): any;
export declare function cognitoUserPoolSignInPolicyToHclTerraform(struct?: CognitoUserPoolSignInPolicyOutputReference | CognitoUserPoolSignInPolicy): any;
export declare class CognitoUserPoolSignInPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolSignInPolicy | undefined;
    set internalValue(value: CognitoUserPoolSignInPolicy | undefined);
    private _allowedFirstAuthFactors?;
    get allowedFirstAuthFactors(): string[];
    set allowedFirstAuthFactors(value: string[]);
    resetAllowedFirstAuthFactors(): void;
    get allowedFirstAuthFactorsInput(): string[] | undefined;
}
export interface CognitoUserPoolSmsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#external_id CognitoUserPool#external_id}
    */
    readonly externalId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}
    */
    readonly snsCallerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#sns_region CognitoUserPool#sns_region}
    */
    readonly snsRegion?: string;
}
export declare function cognitoUserPoolSmsConfigurationToTerraform(struct?: CognitoUserPoolSmsConfigurationOutputReference | CognitoUserPoolSmsConfiguration): any;
export declare function cognitoUserPoolSmsConfigurationToHclTerraform(struct?: CognitoUserPoolSmsConfigurationOutputReference | CognitoUserPoolSmsConfiguration): any;
export declare class CognitoUserPoolSmsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolSmsConfiguration | undefined;
    set internalValue(value: CognitoUserPoolSmsConfiguration | undefined);
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    get externalIdInput(): string | undefined;
    private _snsCallerArn?;
    get snsCallerArn(): string;
    set snsCallerArn(value: string);
    get snsCallerArnInput(): string | undefined;
    private _snsRegion?;
    get snsRegion(): string;
    set snsRegion(value: string);
    resetSnsRegion(): void;
    get snsRegionInput(): string | undefined;
}
export interface CognitoUserPoolSoftwareTokenMfaConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#enabled CognitoUserPool#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct?: CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference | CognitoUserPoolSoftwareTokenMfaConfiguration): any;
export declare function cognitoUserPoolSoftwareTokenMfaConfigurationToHclTerraform(struct?: CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference | CognitoUserPoolSoftwareTokenMfaConfiguration): any;
export declare class CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolSoftwareTokenMfaConfiguration | undefined;
    set internalValue(value: CognitoUserPoolSoftwareTokenMfaConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CognitoUserPoolUserAttributeUpdateSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}
    */
    readonly attributesRequireVerificationBeforeUpdate: string[];
}
export declare function cognitoUserPoolUserAttributeUpdateSettingsToTerraform(struct?: CognitoUserPoolUserAttributeUpdateSettingsOutputReference | CognitoUserPoolUserAttributeUpdateSettings): any;
export declare function cognitoUserPoolUserAttributeUpdateSettingsToHclTerraform(struct?: CognitoUserPoolUserAttributeUpdateSettingsOutputReference | CognitoUserPoolUserAttributeUpdateSettings): any;
export declare class CognitoUserPoolUserAttributeUpdateSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolUserAttributeUpdateSettings | undefined;
    set internalValue(value: CognitoUserPoolUserAttributeUpdateSettings | undefined);
    private _attributesRequireVerificationBeforeUpdate?;
    get attributesRequireVerificationBeforeUpdate(): string[];
    set attributesRequireVerificationBeforeUpdate(value: string[]);
    get attributesRequireVerificationBeforeUpdateInput(): string[] | undefined;
}
export interface CognitoUserPoolUserPoolAddOns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}
    */
    readonly advancedSecurityMode: string;
}
export declare function cognitoUserPoolUserPoolAddOnsToTerraform(struct?: CognitoUserPoolUserPoolAddOnsOutputReference | CognitoUserPoolUserPoolAddOns): any;
export declare function cognitoUserPoolUserPoolAddOnsToHclTerraform(struct?: CognitoUserPoolUserPoolAddOnsOutputReference | CognitoUserPoolUserPoolAddOns): any;
export declare class CognitoUserPoolUserPoolAddOnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolUserPoolAddOns | undefined;
    set internalValue(value: CognitoUserPoolUserPoolAddOns | undefined);
    private _advancedSecurityMode?;
    get advancedSecurityMode(): string;
    set advancedSecurityMode(value: string);
    get advancedSecurityModeInput(): string | undefined;
}
export interface CognitoUserPoolUsernameConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}
    */
    readonly caseSensitive: boolean | cdktf.IResolvable;
}
export declare function cognitoUserPoolUsernameConfigurationToTerraform(struct?: CognitoUserPoolUsernameConfigurationOutputReference | CognitoUserPoolUsernameConfiguration): any;
export declare function cognitoUserPoolUsernameConfigurationToHclTerraform(struct?: CognitoUserPoolUsernameConfigurationOutputReference | CognitoUserPoolUsernameConfiguration): any;
export declare class CognitoUserPoolUsernameConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolUsernameConfiguration | undefined;
    set internalValue(value: CognitoUserPoolUsernameConfiguration | undefined);
    private _caseSensitive?;
    get caseSensitive(): boolean | cdktf.IResolvable;
    set caseSensitive(value: boolean | cdktf.IResolvable);
    get caseSensitiveInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CognitoUserPoolVerificationMessageTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}
    */
    readonly defaultEmailOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_message CognitoUserPool#email_message}
    */
    readonly emailMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}
    */
    readonly emailMessageByLink?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_subject CognitoUserPool#email_subject}
    */
    readonly emailSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}
    */
    readonly emailSubjectByLink?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#sms_message CognitoUserPool#sms_message}
    */
    readonly smsMessage?: string;
}
export declare function cognitoUserPoolVerificationMessageTemplateToTerraform(struct?: CognitoUserPoolVerificationMessageTemplateOutputReference | CognitoUserPoolVerificationMessageTemplate): any;
export declare function cognitoUserPoolVerificationMessageTemplateToHclTerraform(struct?: CognitoUserPoolVerificationMessageTemplateOutputReference | CognitoUserPoolVerificationMessageTemplate): any;
export declare class CognitoUserPoolVerificationMessageTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolVerificationMessageTemplate | undefined;
    set internalValue(value: CognitoUserPoolVerificationMessageTemplate | undefined);
    private _defaultEmailOption?;
    get defaultEmailOption(): string;
    set defaultEmailOption(value: string);
    resetDefaultEmailOption(): void;
    get defaultEmailOptionInput(): string | undefined;
    private _emailMessage?;
    get emailMessage(): string;
    set emailMessage(value: string);
    resetEmailMessage(): void;
    get emailMessageInput(): string | undefined;
    private _emailMessageByLink?;
    get emailMessageByLink(): string;
    set emailMessageByLink(value: string);
    resetEmailMessageByLink(): void;
    get emailMessageByLinkInput(): string | undefined;
    private _emailSubject?;
    get emailSubject(): string;
    set emailSubject(value: string);
    resetEmailSubject(): void;
    get emailSubjectInput(): string | undefined;
    private _emailSubjectByLink?;
    get emailSubjectByLink(): string;
    set emailSubjectByLink(value: string);
    resetEmailSubjectByLink(): void;
    get emailSubjectByLinkInput(): string | undefined;
    private _smsMessage?;
    get smsMessage(): string;
    set smsMessage(value: string);
    resetSmsMessage(): void;
    get smsMessageInput(): string | undefined;
}
export interface CognitoUserPoolWebAuthnConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#relying_party_id CognitoUserPool#relying_party_id}
    */
    readonly relyingPartyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#user_verification CognitoUserPool#user_verification}
    */
    readonly userVerification?: string;
}
export declare function cognitoUserPoolWebAuthnConfigurationToTerraform(struct?: CognitoUserPoolWebAuthnConfigurationOutputReference | CognitoUserPoolWebAuthnConfiguration): any;
export declare function cognitoUserPoolWebAuthnConfigurationToHclTerraform(struct?: CognitoUserPoolWebAuthnConfigurationOutputReference | CognitoUserPoolWebAuthnConfiguration): any;
export declare class CognitoUserPoolWebAuthnConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CognitoUserPoolWebAuthnConfiguration | undefined;
    set internalValue(value: CognitoUserPoolWebAuthnConfiguration | undefined);
    private _relyingPartyId?;
    get relyingPartyId(): string;
    set relyingPartyId(value: string);
    resetRelyingPartyId(): void;
    get relyingPartyIdInput(): string | undefined;
    private _userVerification?;
    get userVerification(): string;
    set userVerification(value: string);
    resetUserVerification(): void;
    get userVerificationInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool aws_cognito_user_pool}
*/
export declare class CognitoUserPool extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_user_pool";
    /**
    * Generates CDKTF code for importing a CognitoUserPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoUserPool to import
    * @param importFromId The id of the existing CognitoUserPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoUserPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool aws_cognito_user_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolConfig
    */
    constructor(scope: Construct, id: string, config: CognitoUserPoolConfig);
    private _aliasAttributes?;
    get aliasAttributes(): string[];
    set aliasAttributes(value: string[]);
    resetAliasAttributes(): void;
    get aliasAttributesInput(): string[] | undefined;
    get arn(): string;
    private _autoVerifiedAttributes?;
    get autoVerifiedAttributes(): string[];
    set autoVerifiedAttributes(value: string[]);
    resetAutoVerifiedAttributes(): void;
    get autoVerifiedAttributesInput(): string[] | undefined;
    get creationDate(): string;
    get customDomain(): string;
    private _deletionProtection?;
    get deletionProtection(): string;
    set deletionProtection(value: string);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): string | undefined;
    get domain(): string;
    private _emailVerificationMessage?;
    get emailVerificationMessage(): string;
    set emailVerificationMessage(value: string);
    resetEmailVerificationMessage(): void;
    get emailVerificationMessageInput(): string | undefined;
    private _emailVerificationSubject?;
    get emailVerificationSubject(): string;
    set emailVerificationSubject(value: string);
    resetEmailVerificationSubject(): void;
    get emailVerificationSubjectInput(): string | undefined;
    get endpoint(): string;
    get estimatedNumberOfUsers(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModifiedDate(): string;
    private _mfaConfiguration?;
    get mfaConfiguration(): string;
    set mfaConfiguration(value: string);
    resetMfaConfiguration(): void;
    get mfaConfigurationInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _smsAuthenticationMessage?;
    get smsAuthenticationMessage(): string;
    set smsAuthenticationMessage(value: string);
    resetSmsAuthenticationMessage(): void;
    get smsAuthenticationMessageInput(): string | undefined;
    private _smsVerificationMessage?;
    get smsVerificationMessage(): string;
    set smsVerificationMessage(value: string);
    resetSmsVerificationMessage(): void;
    get smsVerificationMessageInput(): string | undefined;
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
    private _userPoolTier?;
    get userPoolTier(): string;
    set userPoolTier(value: string);
    resetUserPoolTier(): void;
    get userPoolTierInput(): string | undefined;
    private _usernameAttributes?;
    get usernameAttributes(): string[];
    set usernameAttributes(value: string[]);
    resetUsernameAttributes(): void;
    get usernameAttributesInput(): string[] | undefined;
    private _accountRecoverySetting;
    get accountRecoverySetting(): CognitoUserPoolAccountRecoverySettingOutputReference;
    putAccountRecoverySetting(value: CognitoUserPoolAccountRecoverySetting): void;
    resetAccountRecoverySetting(): void;
    get accountRecoverySettingInput(): CognitoUserPoolAccountRecoverySetting | undefined;
    private _adminCreateUserConfig;
    get adminCreateUserConfig(): CognitoUserPoolAdminCreateUserConfigOutputReference;
    putAdminCreateUserConfig(value: CognitoUserPoolAdminCreateUserConfig): void;
    resetAdminCreateUserConfig(): void;
    get adminCreateUserConfigInput(): CognitoUserPoolAdminCreateUserConfig | undefined;
    private _deviceConfiguration;
    get deviceConfiguration(): CognitoUserPoolDeviceConfigurationOutputReference;
    putDeviceConfiguration(value: CognitoUserPoolDeviceConfiguration): void;
    resetDeviceConfiguration(): void;
    get deviceConfigurationInput(): CognitoUserPoolDeviceConfiguration | undefined;
    private _emailConfiguration;
    get emailConfiguration(): CognitoUserPoolEmailConfigurationOutputReference;
    putEmailConfiguration(value: CognitoUserPoolEmailConfiguration): void;
    resetEmailConfiguration(): void;
    get emailConfigurationInput(): CognitoUserPoolEmailConfiguration | undefined;
    private _emailMfaConfiguration;
    get emailMfaConfiguration(): CognitoUserPoolEmailMfaConfigurationOutputReference;
    putEmailMfaConfiguration(value: CognitoUserPoolEmailMfaConfiguration): void;
    resetEmailMfaConfiguration(): void;
    get emailMfaConfigurationInput(): CognitoUserPoolEmailMfaConfiguration | undefined;
    private _lambdaConfig;
    get lambdaConfig(): CognitoUserPoolLambdaConfigOutputReference;
    putLambdaConfig(value: CognitoUserPoolLambdaConfig): void;
    resetLambdaConfig(): void;
    get lambdaConfigInput(): CognitoUserPoolLambdaConfig | undefined;
    private _passwordPolicy;
    get passwordPolicy(): CognitoUserPoolPasswordPolicyOutputReference;
    putPasswordPolicy(value: CognitoUserPoolPasswordPolicy): void;
    resetPasswordPolicy(): void;
    get passwordPolicyInput(): CognitoUserPoolPasswordPolicy | undefined;
    private _schema;
    get schema(): CognitoUserPoolSchemaList;
    putSchema(value: CognitoUserPoolSchema[] | cdktf.IResolvable): void;
    resetSchema(): void;
    get schemaInput(): cdktf.IResolvable | CognitoUserPoolSchema[] | undefined;
    private _signInPolicy;
    get signInPolicy(): CognitoUserPoolSignInPolicyOutputReference;
    putSignInPolicy(value: CognitoUserPoolSignInPolicy): void;
    resetSignInPolicy(): void;
    get signInPolicyInput(): CognitoUserPoolSignInPolicy | undefined;
    private _smsConfiguration;
    get smsConfiguration(): CognitoUserPoolSmsConfigurationOutputReference;
    putSmsConfiguration(value: CognitoUserPoolSmsConfiguration): void;
    resetSmsConfiguration(): void;
    get smsConfigurationInput(): CognitoUserPoolSmsConfiguration | undefined;
    private _softwareTokenMfaConfiguration;
    get softwareTokenMfaConfiguration(): CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference;
    putSoftwareTokenMfaConfiguration(value: CognitoUserPoolSoftwareTokenMfaConfiguration): void;
    resetSoftwareTokenMfaConfiguration(): void;
    get softwareTokenMfaConfigurationInput(): CognitoUserPoolSoftwareTokenMfaConfiguration | undefined;
    private _userAttributeUpdateSettings;
    get userAttributeUpdateSettings(): CognitoUserPoolUserAttributeUpdateSettingsOutputReference;
    putUserAttributeUpdateSettings(value: CognitoUserPoolUserAttributeUpdateSettings): void;
    resetUserAttributeUpdateSettings(): void;
    get userAttributeUpdateSettingsInput(): CognitoUserPoolUserAttributeUpdateSettings | undefined;
    private _userPoolAddOns;
    get userPoolAddOns(): CognitoUserPoolUserPoolAddOnsOutputReference;
    putUserPoolAddOns(value: CognitoUserPoolUserPoolAddOns): void;
    resetUserPoolAddOns(): void;
    get userPoolAddOnsInput(): CognitoUserPoolUserPoolAddOns | undefined;
    private _usernameConfiguration;
    get usernameConfiguration(): CognitoUserPoolUsernameConfigurationOutputReference;
    putUsernameConfiguration(value: CognitoUserPoolUsernameConfiguration): void;
    resetUsernameConfiguration(): void;
    get usernameConfigurationInput(): CognitoUserPoolUsernameConfiguration | undefined;
    private _verificationMessageTemplate;
    get verificationMessageTemplate(): CognitoUserPoolVerificationMessageTemplateOutputReference;
    putVerificationMessageTemplate(value: CognitoUserPoolVerificationMessageTemplate): void;
    resetVerificationMessageTemplate(): void;
    get verificationMessageTemplateInput(): CognitoUserPoolVerificationMessageTemplate | undefined;
    private _webAuthnConfiguration;
    get webAuthnConfiguration(): CognitoUserPoolWebAuthnConfigurationOutputReference;
    putWebAuthnConfiguration(value: CognitoUserPoolWebAuthnConfiguration): void;
    resetWebAuthnConfiguration(): void;
    get webAuthnConfigurationInput(): CognitoUserPoolWebAuthnConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
