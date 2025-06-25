/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cognito_user_pool#user_pool_id DataAwsCognitoUserPool#user_pool_id}
    */
    readonly userPoolId: string;
}
export interface DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism {
}
export declare function dataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct?: DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism): any;
export declare function dataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismToHclTerraform(struct?: DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism): any;
export declare class DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism | undefined;
    set internalValue(value: DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism | undefined);
    get name(): string;
    get priority(): number;
}
export declare class DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference;
}
export interface DataAwsCognitoUserPoolAccountRecoverySetting {
}
export declare function dataAwsCognitoUserPoolAccountRecoverySettingToTerraform(struct?: DataAwsCognitoUserPoolAccountRecoverySetting): any;
export declare function dataAwsCognitoUserPoolAccountRecoverySettingToHclTerraform(struct?: DataAwsCognitoUserPoolAccountRecoverySetting): any;
export declare class DataAwsCognitoUserPoolAccountRecoverySettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolAccountRecoverySetting | undefined;
    set internalValue(value: DataAwsCognitoUserPoolAccountRecoverySetting | undefined);
    private _recoveryMechanism;
    get recoveryMechanism(): DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList;
}
export declare class DataAwsCognitoUserPoolAccountRecoverySettingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolAccountRecoverySettingOutputReference;
}
export interface DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
}
export declare function dataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct?: DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any;
export declare function dataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToHclTerraform(struct?: DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any;
export declare class DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined;
    set internalValue(value: DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined);
    get emailMessage(): string;
    get emailSubject(): string;
    get smsMessage(): string;
}
export declare class DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference;
}
export interface DataAwsCognitoUserPoolAdminCreateUserConfig {
}
export declare function dataAwsCognitoUserPoolAdminCreateUserConfigToTerraform(struct?: DataAwsCognitoUserPoolAdminCreateUserConfig): any;
export declare function dataAwsCognitoUserPoolAdminCreateUserConfigToHclTerraform(struct?: DataAwsCognitoUserPoolAdminCreateUserConfig): any;
export declare class DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolAdminCreateUserConfig | undefined;
    set internalValue(value: DataAwsCognitoUserPoolAdminCreateUserConfig | undefined);
    get allowAdminCreateUserOnly(): cdktf.IResolvable;
    private _inviteMessageTemplate;
    get inviteMessageTemplate(): DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList;
    get unusedAccountValidityDays(): number;
}
export declare class DataAwsCognitoUserPoolAdminCreateUserConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference;
}
export interface DataAwsCognitoUserPoolDeviceConfiguration {
}
export declare function dataAwsCognitoUserPoolDeviceConfigurationToTerraform(struct?: DataAwsCognitoUserPoolDeviceConfiguration): any;
export declare function dataAwsCognitoUserPoolDeviceConfigurationToHclTerraform(struct?: DataAwsCognitoUserPoolDeviceConfiguration): any;
export declare class DataAwsCognitoUserPoolDeviceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolDeviceConfiguration | undefined;
    set internalValue(value: DataAwsCognitoUserPoolDeviceConfiguration | undefined);
    get challengeRequiredOnNewDevice(): cdktf.IResolvable;
    get deviceOnlyRememberedOnUserPrompt(): cdktf.IResolvable;
}
export declare class DataAwsCognitoUserPoolDeviceConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolDeviceConfigurationOutputReference;
}
export interface DataAwsCognitoUserPoolEmailConfiguration {
}
export declare function dataAwsCognitoUserPoolEmailConfigurationToTerraform(struct?: DataAwsCognitoUserPoolEmailConfiguration): any;
export declare function dataAwsCognitoUserPoolEmailConfigurationToHclTerraform(struct?: DataAwsCognitoUserPoolEmailConfiguration): any;
export declare class DataAwsCognitoUserPoolEmailConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolEmailConfiguration | undefined;
    set internalValue(value: DataAwsCognitoUserPoolEmailConfiguration | undefined);
    get configurationSet(): string;
    get emailSendingAccount(): string;
    get from(): string;
    get replyToEmailAddress(): string;
    get sourceArn(): string;
}
export declare class DataAwsCognitoUserPoolEmailConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolEmailConfigurationOutputReference;
}
export interface DataAwsCognitoUserPoolLambdaConfigCustomEmailSender {
}
export declare function dataAwsCognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigCustomEmailSender): any;
export declare function dataAwsCognitoUserPoolLambdaConfigCustomEmailSenderToHclTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigCustomEmailSender): any;
export declare class DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolLambdaConfigCustomEmailSender | undefined;
    set internalValue(value: DataAwsCognitoUserPoolLambdaConfigCustomEmailSender | undefined);
    get lambdaArn(): string;
    get lambdaVersion(): string;
}
export declare class DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference;
}
export interface DataAwsCognitoUserPoolLambdaConfigCustomSmsSender {
}
export declare function dataAwsCognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigCustomSmsSender): any;
export declare function dataAwsCognitoUserPoolLambdaConfigCustomSmsSenderToHclTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigCustomSmsSender): any;
export declare class DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolLambdaConfigCustomSmsSender | undefined;
    set internalValue(value: DataAwsCognitoUserPoolLambdaConfigCustomSmsSender | undefined);
    get lambdaArn(): string;
    get lambdaVersion(): string;
}
export declare class DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference;
}
export interface DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig {
}
export declare function dataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigToTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig): any;
export declare function dataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigToHclTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig): any;
export declare class DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig | undefined;
    set internalValue(value: DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig | undefined);
    get lambdaArn(): string;
    get lambdaVersion(): string;
}
export declare class DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference;
}
export interface DataAwsCognitoUserPoolLambdaConfig {
}
export declare function dataAwsCognitoUserPoolLambdaConfigToTerraform(struct?: DataAwsCognitoUserPoolLambdaConfig): any;
export declare function dataAwsCognitoUserPoolLambdaConfigToHclTerraform(struct?: DataAwsCognitoUserPoolLambdaConfig): any;
export declare class DataAwsCognitoUserPoolLambdaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolLambdaConfig | undefined;
    set internalValue(value: DataAwsCognitoUserPoolLambdaConfig | undefined);
    get createAuthChallenge(): string;
    private _customEmailSender;
    get customEmailSender(): DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList;
    get customMessage(): string;
    private _customSmsSender;
    get customSmsSender(): DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList;
    get defineAuthChallenge(): string;
    get kmsKeyId(): string;
    get postAuthentication(): string;
    get postConfirmation(): string;
    get preAuthentication(): string;
    get preSignUp(): string;
    get preTokenGeneration(): string;
    private _preTokenGenerationConfig;
    get preTokenGenerationConfig(): DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList;
    get userMigration(): string;
    get verifyAuthChallengeResponse(): string;
}
export declare class DataAwsCognitoUserPoolLambdaConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolLambdaConfigOutputReference;
}
export interface DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints {
}
export declare function dataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsToTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints): any;
export declare function dataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsToHclTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints): any;
export declare class DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints | undefined;
    set internalValue(value: DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints | undefined);
    get maxValue(): string;
    get minValue(): string;
}
export declare class DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference;
}
export interface DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints {
}
export declare function dataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsToTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints): any;
export declare function dataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsToHclTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints): any;
export declare class DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints | undefined;
    set internalValue(value: DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints | undefined);
    get maxLength(): string;
    get minLength(): string;
}
export declare class DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference;
}
export interface DataAwsCognitoUserPoolSchemaAttributes {
}
export declare function dataAwsCognitoUserPoolSchemaAttributesToTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributes): any;
export declare function dataAwsCognitoUserPoolSchemaAttributesToHclTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributes): any;
export declare class DataAwsCognitoUserPoolSchemaAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolSchemaAttributes | undefined;
    set internalValue(value: DataAwsCognitoUserPoolSchemaAttributes | undefined);
    get attributeDataType(): string;
    get developerOnlyAttribute(): cdktf.IResolvable;
    get mutable(): cdktf.IResolvable;
    get name(): string;
    private _numberAttributeConstraints;
    get numberAttributeConstraints(): DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList;
    get required(): cdktf.IResolvable;
    private _stringAttributeConstraints;
    get stringAttributeConstraints(): DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList;
}
export declare class DataAwsCognitoUserPoolSchemaAttributesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolSchemaAttributesOutputReference;
}
export interface DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows {
}
export declare function dataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsToTerraform(struct?: DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows): any;
export declare function dataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsToHclTerraform(struct?: DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows): any;
export declare class DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows | undefined;
    set internalValue(value: DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlows | undefined);
    get customAuthMode(): string;
}
export declare class DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsOutputReference;
}
export interface DataAwsCognitoUserPoolUserPoolAddOns {
}
export declare function dataAwsCognitoUserPoolUserPoolAddOnsToTerraform(struct?: DataAwsCognitoUserPoolUserPoolAddOns): any;
export declare function dataAwsCognitoUserPoolUserPoolAddOnsToHclTerraform(struct?: DataAwsCognitoUserPoolUserPoolAddOns): any;
export declare class DataAwsCognitoUserPoolUserPoolAddOnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolUserPoolAddOns | undefined;
    set internalValue(value: DataAwsCognitoUserPoolUserPoolAddOns | undefined);
    private _advancedSecurityAdditionalFlows;
    get advancedSecurityAdditionalFlows(): DataAwsCognitoUserPoolUserPoolAddOnsAdvancedSecurityAdditionalFlowsList;
    get advancedSecurityMode(): string;
}
export declare class DataAwsCognitoUserPoolUserPoolAddOnsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolUserPoolAddOnsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cognito_user_pool aws_cognito_user_pool}
*/
export declare class DataAwsCognitoUserPool extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cognito_user_pool";
    /**
    * Generates CDKTF code for importing a DataAwsCognitoUserPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCognitoUserPool to import
    * @param importFromId The id of the existing DataAwsCognitoUserPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cognito_user_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCognitoUserPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cognito_user_pool aws_cognito_user_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCognitoUserPoolConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCognitoUserPoolConfig);
    private _accountRecoverySetting;
    get accountRecoverySetting(): DataAwsCognitoUserPoolAccountRecoverySettingList;
    private _adminCreateUserConfig;
    get adminCreateUserConfig(): DataAwsCognitoUserPoolAdminCreateUserConfigList;
    get arn(): string;
    get autoVerifiedAttributes(): string[];
    get creationDate(): string;
    get customDomain(): string;
    get deletionProtection(): string;
    private _deviceConfiguration;
    get deviceConfiguration(): DataAwsCognitoUserPoolDeviceConfigurationList;
    get domain(): string;
    private _emailConfiguration;
    get emailConfiguration(): DataAwsCognitoUserPoolEmailConfigurationList;
    get estimatedNumberOfUsers(): number;
    get id(): string;
    private _lambdaConfig;
    get lambdaConfig(): DataAwsCognitoUserPoolLambdaConfigList;
    get lastModifiedDate(): string;
    get mfaConfiguration(): string;
    get name(): string;
    private _schemaAttributes;
    get schemaAttributes(): DataAwsCognitoUserPoolSchemaAttributesList;
    get smsAuthenticationMessage(): string;
    get smsConfigurationFailure(): string;
    get smsVerificationMessage(): string;
    private _tags;
    get tags(): cdktf.StringMap;
    private _userPoolAddOns;
    get userPoolAddOns(): DataAwsCognitoUserPoolUserPoolAddOnsList;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
    private _userPoolTags;
    get userPoolTags(): cdktf.StringMap;
    get usernameAttributes(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
