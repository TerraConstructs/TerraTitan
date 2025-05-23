/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmincidentsResponsePlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}
    */
    readonly chatChannel?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}
    */
    readonly engagements?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#action SsmincidentsResponsePlan#action}
    */
    readonly action?: SsmincidentsResponsePlanAction;
    /**
    * incident_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}
    */
    readonly incidentTemplate: SsmincidentsResponsePlanIncidentTemplate;
    /**
    * integration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#integration SsmincidentsResponsePlan#integration}
    */
    readonly integration?: SsmincidentsResponsePlanIntegration;
}
export interface SsmincidentsResponsePlanActionSsmAutomationParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}
    */
    readonly values: string[];
}
export declare function ssmincidentsResponsePlanActionSsmAutomationParameterToTerraform(struct?: SsmincidentsResponsePlanActionSsmAutomationParameter | cdktf.IResolvable): any;
export declare function ssmincidentsResponsePlanActionSsmAutomationParameterToHclTerraform(struct?: SsmincidentsResponsePlanActionSsmAutomationParameter | cdktf.IResolvable): any;
export declare class SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmincidentsResponsePlanActionSsmAutomationParameter | cdktf.IResolvable | undefined;
    set internalValue(value: SsmincidentsResponsePlanActionSsmAutomationParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class SsmincidentsResponsePlanActionSsmAutomationParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmincidentsResponsePlanActionSsmAutomationParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference;
}
export interface SsmincidentsResponsePlanActionSsmAutomation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}
    */
    readonly documentName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}
    */
    readonly documentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}
    */
    readonly dynamicParameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}
    */
    readonly targetAccount?: string;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#parameter SsmincidentsResponsePlan#parameter}
    */
    readonly parameter?: SsmincidentsResponsePlanActionSsmAutomationParameter[] | cdktf.IResolvable;
}
export declare function ssmincidentsResponsePlanActionSsmAutomationToTerraform(struct?: SsmincidentsResponsePlanActionSsmAutomation | cdktf.IResolvable): any;
export declare function ssmincidentsResponsePlanActionSsmAutomationToHclTerraform(struct?: SsmincidentsResponsePlanActionSsmAutomation | cdktf.IResolvable): any;
export declare class SsmincidentsResponsePlanActionSsmAutomationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmincidentsResponsePlanActionSsmAutomation | cdktf.IResolvable | undefined;
    set internalValue(value: SsmincidentsResponsePlanActionSsmAutomation | cdktf.IResolvable | undefined);
    private _documentName?;
    get documentName(): string;
    set documentName(value: string);
    get documentNameInput(): string | undefined;
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string | undefined;
    private _dynamicParameters?;
    get dynamicParameters(): {
        [key: string]: string;
    };
    set dynamicParameters(value: {
        [key: string]: string;
    });
    resetDynamicParameters(): void;
    get dynamicParametersInput(): {
        [key: string]: string;
    } | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _targetAccount?;
    get targetAccount(): string;
    set targetAccount(value: string);
    resetTargetAccount(): void;
    get targetAccountInput(): string | undefined;
    private _parameter;
    get parameter(): SsmincidentsResponsePlanActionSsmAutomationParameterList;
    putParameter(value: SsmincidentsResponsePlanActionSsmAutomationParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | SsmincidentsResponsePlanActionSsmAutomationParameter[] | undefined;
}
export declare class SsmincidentsResponsePlanActionSsmAutomationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmincidentsResponsePlanActionSsmAutomation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmincidentsResponsePlanActionSsmAutomationOutputReference;
}
export interface SsmincidentsResponsePlanAction {
    /**
    * ssm_automation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}
    */
    readonly ssmAutomation?: SsmincidentsResponsePlanActionSsmAutomation[] | cdktf.IResolvable;
}
export declare function ssmincidentsResponsePlanActionToTerraform(struct?: SsmincidentsResponsePlanActionOutputReference | SsmincidentsResponsePlanAction): any;
export declare function ssmincidentsResponsePlanActionToHclTerraform(struct?: SsmincidentsResponsePlanActionOutputReference | SsmincidentsResponsePlanAction): any;
export declare class SsmincidentsResponsePlanActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmincidentsResponsePlanAction | undefined;
    set internalValue(value: SsmincidentsResponsePlanAction | undefined);
    private _ssmAutomation;
    get ssmAutomation(): SsmincidentsResponsePlanActionSsmAutomationList;
    putSsmAutomation(value: SsmincidentsResponsePlanActionSsmAutomation[] | cdktf.IResolvable): void;
    resetSsmAutomation(): void;
    get ssmAutomationInput(): cdktf.IResolvable | SsmincidentsResponsePlanActionSsmAutomation[] | undefined;
}
export interface SsmincidentsResponsePlanIncidentTemplateNotificationTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}
    */
    readonly snsTopicArn: string;
}
export declare function ssmincidentsResponsePlanIncidentTemplateNotificationTargetToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateNotificationTarget | cdktf.IResolvable): any;
export declare function ssmincidentsResponsePlanIncidentTemplateNotificationTargetToHclTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateNotificationTarget | cdktf.IResolvable): any;
export declare class SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmincidentsResponsePlanIncidentTemplateNotificationTarget | cdktf.IResolvable | undefined;
    set internalValue(value: SsmincidentsResponsePlanIncidentTemplateNotificationTarget | cdktf.IResolvable | undefined);
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    get snsTopicArnInput(): string | undefined;
}
export declare class SsmincidentsResponsePlanIncidentTemplateNotificationTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmincidentsResponsePlanIncidentTemplateNotificationTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference;
}
export interface SsmincidentsResponsePlanIncidentTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}
    */
    readonly dedupeString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}
    */
    readonly impact: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}
    */
    readonly incidentTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}
    */
    readonly summary?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}
    */
    readonly title: string;
    /**
    * notification_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#notification_target SsmincidentsResponsePlan#notification_target}
    */
    readonly notificationTarget?: SsmincidentsResponsePlanIncidentTemplateNotificationTarget[] | cdktf.IResolvable;
}
export declare function ssmincidentsResponsePlanIncidentTemplateToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateOutputReference | SsmincidentsResponsePlanIncidentTemplate): any;
export declare function ssmincidentsResponsePlanIncidentTemplateToHclTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateOutputReference | SsmincidentsResponsePlanIncidentTemplate): any;
export declare class SsmincidentsResponsePlanIncidentTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmincidentsResponsePlanIncidentTemplate | undefined;
    set internalValue(value: SsmincidentsResponsePlanIncidentTemplate | undefined);
    private _dedupeString?;
    get dedupeString(): string;
    set dedupeString(value: string);
    resetDedupeString(): void;
    get dedupeStringInput(): string | undefined;
    private _impact?;
    get impact(): number;
    set impact(value: number);
    get impactInput(): number | undefined;
    private _incidentTags?;
    get incidentTags(): {
        [key: string]: string;
    };
    set incidentTags(value: {
        [key: string]: string;
    });
    resetIncidentTags(): void;
    get incidentTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _summary?;
    get summary(): string;
    set summary(value: string);
    resetSummary(): void;
    get summaryInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _notificationTarget;
    get notificationTarget(): SsmincidentsResponsePlanIncidentTemplateNotificationTargetList;
    putNotificationTarget(value: SsmincidentsResponsePlanIncidentTemplateNotificationTarget[] | cdktf.IResolvable): void;
    resetNotificationTarget(): void;
    get notificationTargetInput(): cdktf.IResolvable | SsmincidentsResponsePlanIncidentTemplateNotificationTarget[] | undefined;
}
export interface SsmincidentsResponsePlanIntegrationPagerduty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}
    */
    readonly secretId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}
    */
    readonly serviceId: string;
}
export declare function ssmincidentsResponsePlanIntegrationPagerdutyToTerraform(struct?: SsmincidentsResponsePlanIntegrationPagerduty | cdktf.IResolvable): any;
export declare function ssmincidentsResponsePlanIntegrationPagerdutyToHclTerraform(struct?: SsmincidentsResponsePlanIntegrationPagerduty | cdktf.IResolvable): any;
export declare class SsmincidentsResponsePlanIntegrationPagerdutyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmincidentsResponsePlanIntegrationPagerduty | cdktf.IResolvable | undefined;
    set internalValue(value: SsmincidentsResponsePlanIntegrationPagerduty | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _secretId?;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string | undefined;
    private _serviceId?;
    get serviceId(): string;
    set serviceId(value: string);
    get serviceIdInput(): string | undefined;
}
export declare class SsmincidentsResponsePlanIntegrationPagerdutyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmincidentsResponsePlanIntegrationPagerduty[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmincidentsResponsePlanIntegrationPagerdutyOutputReference;
}
export interface SsmincidentsResponsePlanIntegration {
    /**
    * pagerduty block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#pagerduty SsmincidentsResponsePlan#pagerduty}
    */
    readonly pagerduty?: SsmincidentsResponsePlanIntegrationPagerduty[] | cdktf.IResolvable;
}
export declare function ssmincidentsResponsePlanIntegrationToTerraform(struct?: SsmincidentsResponsePlanIntegrationOutputReference | SsmincidentsResponsePlanIntegration): any;
export declare function ssmincidentsResponsePlanIntegrationToHclTerraform(struct?: SsmincidentsResponsePlanIntegrationOutputReference | SsmincidentsResponsePlanIntegration): any;
export declare class SsmincidentsResponsePlanIntegrationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmincidentsResponsePlanIntegration | undefined;
    set internalValue(value: SsmincidentsResponsePlanIntegration | undefined);
    private _pagerduty;
    get pagerduty(): SsmincidentsResponsePlanIntegrationPagerdutyList;
    putPagerduty(value: SsmincidentsResponsePlanIntegrationPagerduty[] | cdktf.IResolvable): void;
    resetPagerduty(): void;
    get pagerdutyInput(): cdktf.IResolvable | SsmincidentsResponsePlanIntegrationPagerduty[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan aws_ssmincidents_response_plan}
*/
export declare class SsmincidentsResponsePlan extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssmincidents_response_plan";
    /**
    * Generates CDKTF code for importing a SsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmincidentsResponsePlan to import
    * @param importFromId The id of the existing SsmincidentsResponsePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmincidentsResponsePlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmincidents_response_plan aws_ssmincidents_response_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmincidentsResponsePlanConfig
    */
    constructor(scope: Construct, id: string, config: SsmincidentsResponsePlanConfig);
    get arn(): string;
    private _chatChannel?;
    get chatChannel(): string[];
    set chatChannel(value: string[]);
    resetChatChannel(): void;
    get chatChannelInput(): string[] | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _engagements?;
    get engagements(): string[];
    set engagements(value: string[]);
    resetEngagements(): void;
    get engagementsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _action;
    get action(): SsmincidentsResponsePlanActionOutputReference;
    putAction(value: SsmincidentsResponsePlanAction): void;
    resetAction(): void;
    get actionInput(): SsmincidentsResponsePlanAction | undefined;
    private _incidentTemplate;
    get incidentTemplate(): SsmincidentsResponsePlanIncidentTemplateOutputReference;
    putIncidentTemplate(value: SsmincidentsResponsePlanIncidentTemplate): void;
    get incidentTemplateInput(): SsmincidentsResponsePlanIncidentTemplate | undefined;
    private _integration;
    get integration(): SsmincidentsResponsePlanIntegrationOutputReference;
    putIntegration(value: SsmincidentsResponsePlanIntegration): void;
    resetIntegration(): void;
    get integrationInput(): SsmincidentsResponsePlanIntegration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
