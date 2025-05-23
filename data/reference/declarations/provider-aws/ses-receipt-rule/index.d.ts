/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesReceiptRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#after SesReceiptRule#after}
    */
    readonly after?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#enabled SesReceiptRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#id SesReceiptRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#name SesReceiptRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#recipients SesReceiptRule#recipients}
    */
    readonly recipients?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#rule_set_name SesReceiptRule#rule_set_name}
    */
    readonly ruleSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#scan_enabled SesReceiptRule#scan_enabled}
    */
    readonly scanEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#tls_policy SesReceiptRule#tls_policy}
    */
    readonly tlsPolicy?: string;
    /**
    * add_header_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#add_header_action SesReceiptRule#add_header_action}
    */
    readonly addHeaderAction?: SesReceiptRuleAddHeaderAction[] | cdktf.IResolvable;
    /**
    * bounce_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#bounce_action SesReceiptRule#bounce_action}
    */
    readonly bounceAction?: SesReceiptRuleBounceAction[] | cdktf.IResolvable;
    /**
    * lambda_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#lambda_action SesReceiptRule#lambda_action}
    */
    readonly lambdaAction?: SesReceiptRuleLambdaAction[] | cdktf.IResolvable;
    /**
    * s3_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#s3_action SesReceiptRule#s3_action}
    */
    readonly s3Action?: SesReceiptRuleS3Action[] | cdktf.IResolvable;
    /**
    * sns_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#sns_action SesReceiptRule#sns_action}
    */
    readonly snsAction?: SesReceiptRuleSnsAction[] | cdktf.IResolvable;
    /**
    * stop_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#stop_action SesReceiptRule#stop_action}
    */
    readonly stopAction?: SesReceiptRuleStopAction[] | cdktf.IResolvable;
    /**
    * workmail_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#workmail_action SesReceiptRule#workmail_action}
    */
    readonly workmailAction?: SesReceiptRuleWorkmailAction[] | cdktf.IResolvable;
}
export interface SesReceiptRuleAddHeaderAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#header_name SesReceiptRule#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#header_value SesReceiptRule#header_value}
    */
    readonly headerValue: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#position SesReceiptRule#position}
    */
    readonly position: number;
}
export declare function sesReceiptRuleAddHeaderActionToTerraform(struct?: SesReceiptRuleAddHeaderAction | cdktf.IResolvable): any;
export declare function sesReceiptRuleAddHeaderActionToHclTerraform(struct?: SesReceiptRuleAddHeaderAction | cdktf.IResolvable): any;
export declare class SesReceiptRuleAddHeaderActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SesReceiptRuleAddHeaderAction | cdktf.IResolvable | undefined;
    set internalValue(value: SesReceiptRuleAddHeaderAction | cdktf.IResolvable | undefined);
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string | undefined;
    private _headerValue?;
    get headerValue(): string;
    set headerValue(value: string);
    get headerValueInput(): string | undefined;
    private _position?;
    get position(): number;
    set position(value: number);
    get positionInput(): number | undefined;
}
export declare class SesReceiptRuleAddHeaderActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SesReceiptRuleAddHeaderAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SesReceiptRuleAddHeaderActionOutputReference;
}
export interface SesReceiptRuleBounceAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#message SesReceiptRule#message}
    */
    readonly message: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#sender SesReceiptRule#sender}
    */
    readonly sender: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#smtp_reply_code SesReceiptRule#smtp_reply_code}
    */
    readonly smtpReplyCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#status_code SesReceiptRule#status_code}
    */
    readonly statusCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleBounceActionToTerraform(struct?: SesReceiptRuleBounceAction | cdktf.IResolvable): any;
export declare function sesReceiptRuleBounceActionToHclTerraform(struct?: SesReceiptRuleBounceAction | cdktf.IResolvable): any;
export declare class SesReceiptRuleBounceActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SesReceiptRuleBounceAction | cdktf.IResolvable | undefined;
    set internalValue(value: SesReceiptRuleBounceAction | cdktf.IResolvable | undefined);
    private _message?;
    get message(): string;
    set message(value: string);
    get messageInput(): string | undefined;
    private _position?;
    get position(): number;
    set position(value: number);
    get positionInput(): number | undefined;
    private _sender?;
    get sender(): string;
    set sender(value: string);
    get senderInput(): string | undefined;
    private _smtpReplyCode?;
    get smtpReplyCode(): string;
    set smtpReplyCode(value: string);
    get smtpReplyCodeInput(): string | undefined;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    resetStatusCode(): void;
    get statusCodeInput(): string | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    resetTopicArn(): void;
    get topicArnInput(): string | undefined;
}
export declare class SesReceiptRuleBounceActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SesReceiptRuleBounceAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SesReceiptRuleBounceActionOutputReference;
}
export interface SesReceiptRuleLambdaAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#function_arn SesReceiptRule#function_arn}
    */
    readonly functionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#invocation_type SesReceiptRule#invocation_type}
    */
    readonly invocationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleLambdaActionToTerraform(struct?: SesReceiptRuleLambdaAction | cdktf.IResolvable): any;
export declare function sesReceiptRuleLambdaActionToHclTerraform(struct?: SesReceiptRuleLambdaAction | cdktf.IResolvable): any;
export declare class SesReceiptRuleLambdaActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SesReceiptRuleLambdaAction | cdktf.IResolvable | undefined;
    set internalValue(value: SesReceiptRuleLambdaAction | cdktf.IResolvable | undefined);
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string | undefined;
    private _invocationType?;
    get invocationType(): string;
    set invocationType(value: string);
    resetInvocationType(): void;
    get invocationTypeInput(): string | undefined;
    private _position?;
    get position(): number;
    set position(value: number);
    get positionInput(): number | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    resetTopicArn(): void;
    get topicArnInput(): string | undefined;
}
export declare class SesReceiptRuleLambdaActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SesReceiptRuleLambdaAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SesReceiptRuleLambdaActionOutputReference;
}
export interface SesReceiptRuleS3Action {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#bucket_name SesReceiptRule#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#iam_role_arn SesReceiptRule#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#kms_key_arn SesReceiptRule#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#object_key_prefix SesReceiptRule#object_key_prefix}
    */
    readonly objectKeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleS3ActionToTerraform(struct?: SesReceiptRuleS3Action | cdktf.IResolvable): any;
export declare function sesReceiptRuleS3ActionToHclTerraform(struct?: SesReceiptRuleS3Action | cdktf.IResolvable): any;
export declare class SesReceiptRuleS3ActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SesReceiptRuleS3Action | cdktf.IResolvable | undefined;
    set internalValue(value: SesReceiptRuleS3Action | cdktf.IResolvable | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _objectKeyPrefix?;
    get objectKeyPrefix(): string;
    set objectKeyPrefix(value: string);
    resetObjectKeyPrefix(): void;
    get objectKeyPrefixInput(): string | undefined;
    private _position?;
    get position(): number;
    set position(value: number);
    get positionInput(): number | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    resetTopicArn(): void;
    get topicArnInput(): string | undefined;
}
export declare class SesReceiptRuleS3ActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SesReceiptRuleS3Action[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SesReceiptRuleS3ActionOutputReference;
}
export interface SesReceiptRuleSnsAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#encoding SesReceiptRule#encoding}
    */
    readonly encoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn: string;
}
export declare function sesReceiptRuleSnsActionToTerraform(struct?: SesReceiptRuleSnsAction | cdktf.IResolvable): any;
export declare function sesReceiptRuleSnsActionToHclTerraform(struct?: SesReceiptRuleSnsAction | cdktf.IResolvable): any;
export declare class SesReceiptRuleSnsActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SesReceiptRuleSnsAction | cdktf.IResolvable | undefined;
    set internalValue(value: SesReceiptRuleSnsAction | cdktf.IResolvable | undefined);
    private _encoding?;
    get encoding(): string;
    set encoding(value: string);
    resetEncoding(): void;
    get encodingInput(): string | undefined;
    private _position?;
    get position(): number;
    set position(value: number);
    get positionInput(): number | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string | undefined;
}
export declare class SesReceiptRuleSnsActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SesReceiptRuleSnsAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SesReceiptRuleSnsActionOutputReference;
}
export interface SesReceiptRuleStopAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#scope SesReceiptRule#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleStopActionToTerraform(struct?: SesReceiptRuleStopAction | cdktf.IResolvable): any;
export declare function sesReceiptRuleStopActionToHclTerraform(struct?: SesReceiptRuleStopAction | cdktf.IResolvable): any;
export declare class SesReceiptRuleStopActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SesReceiptRuleStopAction | cdktf.IResolvable | undefined;
    set internalValue(value: SesReceiptRuleStopAction | cdktf.IResolvable | undefined);
    private _position?;
    get position(): number;
    set position(value: number);
    get positionInput(): number | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    resetTopicArn(): void;
    get topicArnInput(): string | undefined;
}
export declare class SesReceiptRuleStopActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SesReceiptRuleStopAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SesReceiptRuleStopActionOutputReference;
}
export interface SesReceiptRuleWorkmailAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#organization_arn SesReceiptRule#organization_arn}
    */
    readonly organizationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleWorkmailActionToTerraform(struct?: SesReceiptRuleWorkmailAction | cdktf.IResolvable): any;
export declare function sesReceiptRuleWorkmailActionToHclTerraform(struct?: SesReceiptRuleWorkmailAction | cdktf.IResolvable): any;
export declare class SesReceiptRuleWorkmailActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SesReceiptRuleWorkmailAction | cdktf.IResolvable | undefined;
    set internalValue(value: SesReceiptRuleWorkmailAction | cdktf.IResolvable | undefined);
    private _organizationArn?;
    get organizationArn(): string;
    set organizationArn(value: string);
    get organizationArnInput(): string | undefined;
    private _position?;
    get position(): number;
    set position(value: number);
    get positionInput(): number | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    resetTopicArn(): void;
    get topicArnInput(): string | undefined;
}
export declare class SesReceiptRuleWorkmailActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SesReceiptRuleWorkmailAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SesReceiptRuleWorkmailActionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule aws_ses_receipt_rule}
*/
export declare class SesReceiptRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ses_receipt_rule";
    /**
    * Generates CDKTF code for importing a SesReceiptRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SesReceiptRule to import
    * @param importFromId The id of the existing SesReceiptRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SesReceiptRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_receipt_rule aws_ses_receipt_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesReceiptRuleConfig
    */
    constructor(scope: Construct, id: string, config: SesReceiptRuleConfig);
    private _after?;
    get after(): string;
    set after(value: string);
    resetAfter(): void;
    get afterInput(): string | undefined;
    get arn(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _recipients?;
    get recipients(): string[];
    set recipients(value: string[]);
    resetRecipients(): void;
    get recipientsInput(): string[] | undefined;
    private _ruleSetName?;
    get ruleSetName(): string;
    set ruleSetName(value: string);
    get ruleSetNameInput(): string | undefined;
    private _scanEnabled?;
    get scanEnabled(): boolean | cdktf.IResolvable;
    set scanEnabled(value: boolean | cdktf.IResolvable);
    resetScanEnabled(): void;
    get scanEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _tlsPolicy?;
    get tlsPolicy(): string;
    set tlsPolicy(value: string);
    resetTlsPolicy(): void;
    get tlsPolicyInput(): string | undefined;
    private _addHeaderAction;
    get addHeaderAction(): SesReceiptRuleAddHeaderActionList;
    putAddHeaderAction(value: SesReceiptRuleAddHeaderAction[] | cdktf.IResolvable): void;
    resetAddHeaderAction(): void;
    get addHeaderActionInput(): cdktf.IResolvable | SesReceiptRuleAddHeaderAction[] | undefined;
    private _bounceAction;
    get bounceAction(): SesReceiptRuleBounceActionList;
    putBounceAction(value: SesReceiptRuleBounceAction[] | cdktf.IResolvable): void;
    resetBounceAction(): void;
    get bounceActionInput(): cdktf.IResolvable | SesReceiptRuleBounceAction[] | undefined;
    private _lambdaAction;
    get lambdaAction(): SesReceiptRuleLambdaActionList;
    putLambdaAction(value: SesReceiptRuleLambdaAction[] | cdktf.IResolvable): void;
    resetLambdaAction(): void;
    get lambdaActionInput(): cdktf.IResolvable | SesReceiptRuleLambdaAction[] | undefined;
    private _s3Action;
    get s3Action(): SesReceiptRuleS3ActionList;
    putS3Action(value: SesReceiptRuleS3Action[] | cdktf.IResolvable): void;
    resetS3Action(): void;
    get s3ActionInput(): cdktf.IResolvable | SesReceiptRuleS3Action[] | undefined;
    private _snsAction;
    get snsAction(): SesReceiptRuleSnsActionList;
    putSnsAction(value: SesReceiptRuleSnsAction[] | cdktf.IResolvable): void;
    resetSnsAction(): void;
    get snsActionInput(): cdktf.IResolvable | SesReceiptRuleSnsAction[] | undefined;
    private _stopAction;
    get stopAction(): SesReceiptRuleStopActionList;
    putStopAction(value: SesReceiptRuleStopAction[] | cdktf.IResolvable): void;
    resetStopAction(): void;
    get stopActionInput(): cdktf.IResolvable | SesReceiptRuleStopAction[] | undefined;
    private _workmailAction;
    get workmailAction(): SesReceiptRuleWorkmailActionList;
    putWorkmailAction(value: SesReceiptRuleWorkmailAction[] | cdktf.IResolvable): void;
    resetWorkmailAction(): void;
    get workmailActionInput(): cdktf.IResolvable | SesReceiptRuleWorkmailAction[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
