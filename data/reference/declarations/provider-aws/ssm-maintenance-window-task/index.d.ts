/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmMaintenanceWindowTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#cutoff_behavior SsmMaintenanceWindowTask#cutoff_behavior}
    */
    readonly cutoffBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#description SsmMaintenanceWindowTask#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#id SsmMaintenanceWindowTask#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#max_concurrency SsmMaintenanceWindowTask#max_concurrency}
    */
    readonly maxConcurrency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#max_errors SsmMaintenanceWindowTask#max_errors}
    */
    readonly maxErrors?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#priority SsmMaintenanceWindowTask#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
    */
    readonly serviceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#task_arn SsmMaintenanceWindowTask#task_arn}
    */
    readonly taskArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#task_type SsmMaintenanceWindowTask#task_type}
    */
    readonly taskType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#window_id SsmMaintenanceWindowTask#window_id}
    */
    readonly windowId: string;
    /**
    * targets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#targets SsmMaintenanceWindowTask#targets}
    */
    readonly targets?: SsmMaintenanceWindowTaskTargets[] | cdktf.IResolvable;
    /**
    * task_invocation_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}
    */
    readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters;
}
export interface SsmMaintenanceWindowTaskTargets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#key SsmMaintenanceWindowTask#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}
    */
    readonly values: string[];
}
export declare function ssmMaintenanceWindowTaskTargetsToTerraform(struct?: SsmMaintenanceWindowTaskTargets | cdktf.IResolvable): any;
export declare function ssmMaintenanceWindowTaskTargetsToHclTerraform(struct?: SsmMaintenanceWindowTaskTargets | cdktf.IResolvable): any;
export declare class SsmMaintenanceWindowTaskTargetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTargets | cdktf.IResolvable | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTargets | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class SsmMaintenanceWindowTaskTargetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmMaintenanceWindowTaskTargets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmMaintenanceWindowTaskTargetsOutputReference;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}
    */
    readonly values: string[];
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter | cdktf.IResolvable): any;
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter | cdktf.IResolvable): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter | cdktf.IResolvable | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}
    */
    readonly documentVersion?: string;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#parameter SsmMaintenanceWindowTask#parameter}
    */
    readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | cdktf.IResolvable;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): any;
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined);
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string | undefined;
    private _parameter;
    get parameter(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList;
    putParameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | undefined;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}
    */
    readonly clientContext?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}
    */
    readonly payload?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}
    */
    readonly qualifier?: string;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): any;
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined);
    private _clientContext?;
    get clientContext(): string;
    set clientContext(value: string);
    resetClientContext(): void;
    get clientContextInput(): string | undefined;
    private _payload?;
    get payload(): string;
    set payload(value: string);
    resetPayload(): void;
    get payloadInput(): string | undefined;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}
    */
    readonly cloudwatchLogGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}
    */
    readonly cloudwatchOutputEnabled?: boolean | cdktf.IResolvable;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): any;
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined);
    private _cloudwatchLogGroupName?;
    get cloudwatchLogGroupName(): string;
    set cloudwatchLogGroupName(value: string);
    resetCloudwatchLogGroupName(): void;
    get cloudwatchLogGroupNameInput(): string | undefined;
    private _cloudwatchOutputEnabled?;
    get cloudwatchOutputEnabled(): boolean | cdktf.IResolvable;
    set cloudwatchOutputEnabled(value: boolean | cdktf.IResolvable);
    resetCloudwatchOutputEnabled(): void;
    get cloudwatchOutputEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}
    */
    readonly notificationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}
    */
    readonly notificationEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}
    */
    readonly notificationType?: string;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): any;
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined);
    private _notificationArn?;
    get notificationArn(): string;
    set notificationArn(value: string);
    resetNotificationArn(): void;
    get notificationArnInput(): string | undefined;
    private _notificationEvents?;
    get notificationEvents(): string[];
    set notificationEvents(value: string[]);
    resetNotificationEvents(): void;
    get notificationEventsInput(): string[] | undefined;
    private _notificationType?;
    get notificationType(): string;
    set notificationType(value: string);
    resetNotificationType(): void;
    get notificationTypeInput(): string | undefined;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}
    */
    readonly values: string[];
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter | cdktf.IResolvable): any;
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter | cdktf.IResolvable): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter | cdktf.IResolvable | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}
    */
    readonly documentHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}
    */
    readonly documentHashType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}
    */
    readonly documentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}
    */
    readonly outputS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}
    */
    readonly outputS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
    */
    readonly serviceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
    /**
    * cloudwatch_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#cloudwatch_config SsmMaintenanceWindowTask#cloudwatch_config}
    */
    readonly cloudwatchConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;
    /**
    * notification_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#notification_config SsmMaintenanceWindowTask#notification_config}
    */
    readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#parameter SsmMaintenanceWindowTask#parameter}
    */
    readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | cdktf.IResolvable;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): any;
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _documentHash?;
    get documentHash(): string;
    set documentHash(value: string);
    resetDocumentHash(): void;
    get documentHashInput(): string | undefined;
    private _documentHashType?;
    get documentHashType(): string;
    set documentHashType(value: string);
    resetDocumentHashType(): void;
    get documentHashTypeInput(): string | undefined;
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string | undefined;
    private _outputS3Bucket?;
    get outputS3Bucket(): string;
    set outputS3Bucket(value: string);
    resetOutputS3Bucket(): void;
    get outputS3BucketInput(): string | undefined;
    private _outputS3KeyPrefix?;
    get outputS3KeyPrefix(): string;
    set outputS3KeyPrefix(value: string);
    resetOutputS3KeyPrefix(): void;
    get outputS3KeyPrefixInput(): string | undefined;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    resetServiceRoleArn(): void;
    get serviceRoleArnInput(): string | undefined;
    private _timeoutSeconds?;
    get timeoutSeconds(): number;
    set timeoutSeconds(value: number);
    resetTimeoutSeconds(): void;
    get timeoutSecondsInput(): number | undefined;
    private _cloudwatchConfig;
    get cloudwatchConfig(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference;
    putCloudwatchConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): void;
    resetCloudwatchConfig(): void;
    get cloudwatchConfigInput(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined;
    private _notificationConfig;
    get notificationConfig(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference;
    putNotificationConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): void;
    resetNotificationConfig(): void;
    get notificationConfigInput(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined;
    private _parameter;
    get parameter(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList;
    putParameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | undefined;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
    */
    readonly name?: string;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): any;
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined);
    private _input?;
    get input(): string;
    set input(value: string);
    resetInput(): void;
    get inputInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
    /**
    * automation_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#automation_parameters SsmMaintenanceWindowTask#automation_parameters}
    */
    readonly automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters;
    /**
    * lambda_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#lambda_parameters SsmMaintenanceWindowTask#lambda_parameters}
    */
    readonly lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters;
    /**
    * run_command_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#run_command_parameters SsmMaintenanceWindowTask#run_command_parameters}
    */
    readonly runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;
    /**
    * step_functions_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#step_functions_parameters SsmMaintenanceWindowTask#step_functions_parameters}
    */
    readonly stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
}
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParameters): any;
export declare function ssmMaintenanceWindowTaskTaskInvocationParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParameters): any;
export declare class SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParameters | undefined;
    set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParameters | undefined);
    private _automationParameters;
    get automationParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference;
    putAutomationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): void;
    resetAutomationParameters(): void;
    get automationParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined;
    private _lambdaParameters;
    get lambdaParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference;
    putLambdaParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): void;
    resetLambdaParameters(): void;
    get lambdaParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined;
    private _runCommandParameters;
    get runCommandParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference;
    putRunCommandParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): void;
    resetRunCommandParameters(): void;
    get runCommandParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined;
    private _stepFunctionsParameters;
    get stepFunctionsParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference;
    putStepFunctionsParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): void;
    resetStepFunctionsParameters(): void;
    get stepFunctionsParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task aws_ssm_maintenance_window_task}
*/
export declare class SsmMaintenanceWindowTask extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssm_maintenance_window_task";
    /**
    * Generates CDKTF code for importing a SsmMaintenanceWindowTask resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmMaintenanceWindowTask to import
    * @param importFromId The id of the existing SsmMaintenanceWindowTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmMaintenanceWindowTask to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window_task aws_ssm_maintenance_window_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowTaskConfig
    */
    constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig);
    get arn(): string;
    private _cutoffBehavior?;
    get cutoffBehavior(): string;
    set cutoffBehavior(value: string);
    resetCutoffBehavior(): void;
    get cutoffBehaviorInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxConcurrency?;
    get maxConcurrency(): string;
    set maxConcurrency(value: string);
    resetMaxConcurrency(): void;
    get maxConcurrencyInput(): string | undefined;
    private _maxErrors?;
    get maxErrors(): string;
    set maxErrors(value: string);
    resetMaxErrors(): void;
    get maxErrorsInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    resetServiceRoleArn(): void;
    get serviceRoleArnInput(): string | undefined;
    private _taskArn?;
    get taskArn(): string;
    set taskArn(value: string);
    get taskArnInput(): string | undefined;
    private _taskType?;
    get taskType(): string;
    set taskType(value: string);
    get taskTypeInput(): string | undefined;
    private _windowId?;
    get windowId(): string;
    set windowId(value: string);
    get windowIdInput(): string | undefined;
    get windowTaskId(): string;
    private _targets;
    get targets(): SsmMaintenanceWindowTaskTargetsList;
    putTargets(value: SsmMaintenanceWindowTaskTargets[] | cdktf.IResolvable): void;
    resetTargets(): void;
    get targetsInput(): cdktf.IResolvable | SsmMaintenanceWindowTaskTargets[] | undefined;
    private _taskInvocationParameters;
    get taskInvocationParameters(): SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference;
    putTaskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters): void;
    resetTaskInvocationParameters(): void;
    get taskInvocationParametersInput(): SsmMaintenanceWindowTaskTaskInvocationParameters | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
