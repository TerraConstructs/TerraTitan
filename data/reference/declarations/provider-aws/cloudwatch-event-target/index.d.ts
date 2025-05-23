/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchEventTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#arn CloudwatchEventTarget#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#force_destroy CloudwatchEventTarget#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#id CloudwatchEventTarget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#input CloudwatchEventTarget#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}
    */
    readonly inputPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#rule CloudwatchEventTarget#rule}
    */
    readonly rule: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}
    */
    readonly targetId?: string;
    /**
    * appsync_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#appsync_target CloudwatchEventTarget#appsync_target}
    */
    readonly appsyncTarget?: CloudwatchEventTargetAppsyncTarget;
    /**
    * batch_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#batch_target CloudwatchEventTarget#batch_target}
    */
    readonly batchTarget?: CloudwatchEventTargetBatchTarget;
    /**
    * dead_letter_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#dead_letter_config CloudwatchEventTarget#dead_letter_config}
    */
    readonly deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig;
    /**
    * ecs_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#ecs_target CloudwatchEventTarget#ecs_target}
    */
    readonly ecsTarget?: CloudwatchEventTargetEcsTarget;
    /**
    * http_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#http_target CloudwatchEventTarget#http_target}
    */
    readonly httpTarget?: CloudwatchEventTargetHttpTarget;
    /**
    * input_transformer block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#input_transformer CloudwatchEventTarget#input_transformer}
    */
    readonly inputTransformer?: CloudwatchEventTargetInputTransformer;
    /**
    * kinesis_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#kinesis_target CloudwatchEventTarget#kinesis_target}
    */
    readonly kinesisTarget?: CloudwatchEventTargetKinesisTarget;
    /**
    * redshift_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#redshift_target CloudwatchEventTarget#redshift_target}
    */
    readonly redshiftTarget?: CloudwatchEventTargetRedshiftTarget;
    /**
    * retry_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#retry_policy CloudwatchEventTarget#retry_policy}
    */
    readonly retryPolicy?: CloudwatchEventTargetRetryPolicy;
    /**
    * run_command_targets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#run_command_targets CloudwatchEventTarget#run_command_targets}
    */
    readonly runCommandTargets?: CloudwatchEventTargetRunCommandTargets[] | cdktf.IResolvable;
    /**
    * sagemaker_pipeline_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#sagemaker_pipeline_target CloudwatchEventTarget#sagemaker_pipeline_target}
    */
    readonly sagemakerPipelineTarget?: CloudwatchEventTargetSagemakerPipelineTarget;
    /**
    * sqs_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#sqs_target CloudwatchEventTarget#sqs_target}
    */
    readonly sqsTarget?: CloudwatchEventTargetSqsTarget;
}
export interface CloudwatchEventTargetAppsyncTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#graphql_operation CloudwatchEventTarget#graphql_operation}
    */
    readonly graphqlOperation?: string;
}
export declare function cloudwatchEventTargetAppsyncTargetToTerraform(struct?: CloudwatchEventTargetAppsyncTargetOutputReference | CloudwatchEventTargetAppsyncTarget): any;
export declare function cloudwatchEventTargetAppsyncTargetToHclTerraform(struct?: CloudwatchEventTargetAppsyncTargetOutputReference | CloudwatchEventTargetAppsyncTarget): any;
export declare class CloudwatchEventTargetAppsyncTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetAppsyncTarget | undefined;
    set internalValue(value: CloudwatchEventTargetAppsyncTarget | undefined);
    private _graphqlOperation?;
    get graphqlOperation(): string;
    set graphqlOperation(value: string);
    resetGraphqlOperation(): void;
    get graphqlOperationInput(): string | undefined;
}
export interface CloudwatchEventTargetBatchTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}
    */
    readonly arraySize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}
    */
    readonly jobAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}
    */
    readonly jobDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}
    */
    readonly jobName: string;
}
export declare function cloudwatchEventTargetBatchTargetToTerraform(struct?: CloudwatchEventTargetBatchTargetOutputReference | CloudwatchEventTargetBatchTarget): any;
export declare function cloudwatchEventTargetBatchTargetToHclTerraform(struct?: CloudwatchEventTargetBatchTargetOutputReference | CloudwatchEventTargetBatchTarget): any;
export declare class CloudwatchEventTargetBatchTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetBatchTarget | undefined;
    set internalValue(value: CloudwatchEventTargetBatchTarget | undefined);
    private _arraySize?;
    get arraySize(): number;
    set arraySize(value: number);
    resetArraySize(): void;
    get arraySizeInput(): number | undefined;
    private _jobAttempts?;
    get jobAttempts(): number;
    set jobAttempts(value: number);
    resetJobAttempts(): void;
    get jobAttemptsInput(): number | undefined;
    private _jobDefinition?;
    get jobDefinition(): string;
    set jobDefinition(value: string);
    get jobDefinitionInput(): string | undefined;
    private _jobName?;
    get jobName(): string;
    set jobName(value: string);
    get jobNameInput(): string | undefined;
}
export interface CloudwatchEventTargetDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#arn CloudwatchEventTarget#arn}
    */
    readonly arn?: string;
}
export declare function cloudwatchEventTargetDeadLetterConfigToTerraform(struct?: CloudwatchEventTargetDeadLetterConfigOutputReference | CloudwatchEventTargetDeadLetterConfig): any;
export declare function cloudwatchEventTargetDeadLetterConfigToHclTerraform(struct?: CloudwatchEventTargetDeadLetterConfigOutputReference | CloudwatchEventTargetDeadLetterConfig): any;
export declare class CloudwatchEventTargetDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetDeadLetterConfig | undefined;
    set internalValue(value: CloudwatchEventTargetDeadLetterConfig | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
}
export interface CloudwatchEventTargetEcsTargetCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#base CloudwatchEventTarget#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#capacity_provider CloudwatchEventTarget#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#weight CloudwatchEventTarget#weight}
    */
    readonly weight?: number;
}
export declare function cloudwatchEventTargetEcsTargetCapacityProviderStrategyToTerraform(struct?: CloudwatchEventTargetEcsTargetCapacityProviderStrategy | cdktf.IResolvable): any;
export declare function cloudwatchEventTargetEcsTargetCapacityProviderStrategyToHclTerraform(struct?: CloudwatchEventTargetEcsTargetCapacityProviderStrategy | cdktf.IResolvable): any;
export declare class CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventTargetEcsTargetCapacityProviderStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventTargetEcsTargetCapacityProviderStrategy | cdktf.IResolvable | undefined);
    private _base?;
    get base(): number;
    set base(value: number);
    resetBase(): void;
    get baseInput(): number | undefined;
    private _capacityProvider?;
    get capacityProvider(): string;
    set capacityProvider(value: string);
    get capacityProviderInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number | undefined;
}
export declare class CloudwatchEventTargetEcsTargetCapacityProviderStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventTargetEcsTargetCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference;
}
export interface CloudwatchEventTargetEcsTargetNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}
    */
    readonly subnets: string[];
}
export declare function cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct?: CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference | CloudwatchEventTargetEcsTargetNetworkConfiguration): any;
export declare function cloudwatchEventTargetEcsTargetNetworkConfigurationToHclTerraform(struct?: CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference | CloudwatchEventTargetEcsTargetNetworkConfiguration): any;
export declare class CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetEcsTargetNetworkConfiguration | undefined;
    set internalValue(value: CloudwatchEventTargetEcsTargetNetworkConfiguration | undefined);
    private _assignPublicIp?;
    get assignPublicIp(): boolean | cdktf.IResolvable;
    set assignPublicIp(value: boolean | cdktf.IResolvable);
    resetAssignPublicIp(): void;
    get assignPublicIpInput(): boolean | cdktf.IResolvable | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
}
export interface CloudwatchEventTargetEcsTargetOrderedPlacementStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#field CloudwatchEventTarget#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#type CloudwatchEventTarget#type}
    */
    readonly type: string;
}
export declare function cloudwatchEventTargetEcsTargetOrderedPlacementStrategyToTerraform(struct?: CloudwatchEventTargetEcsTargetOrderedPlacementStrategy | cdktf.IResolvable): any;
export declare function cloudwatchEventTargetEcsTargetOrderedPlacementStrategyToHclTerraform(struct?: CloudwatchEventTargetEcsTargetOrderedPlacementStrategy | cdktf.IResolvable): any;
export declare class CloudwatchEventTargetEcsTargetOrderedPlacementStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventTargetEcsTargetOrderedPlacementStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventTargetEcsTargetOrderedPlacementStrategy | cdktf.IResolvable | undefined);
    private _field?;
    get field(): string;
    set field(value: string);
    resetField(): void;
    get fieldInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class CloudwatchEventTargetEcsTargetOrderedPlacementStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventTargetEcsTargetOrderedPlacementStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventTargetEcsTargetOrderedPlacementStrategyOutputReference;
}
export interface CloudwatchEventTargetEcsTargetPlacementConstraint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#expression CloudwatchEventTarget#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#type CloudwatchEventTarget#type}
    */
    readonly type: string;
}
export declare function cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform(struct?: CloudwatchEventTargetEcsTargetPlacementConstraint | cdktf.IResolvable): any;
export declare function cloudwatchEventTargetEcsTargetPlacementConstraintToHclTerraform(struct?: CloudwatchEventTargetEcsTargetPlacementConstraint | cdktf.IResolvable): any;
export declare class CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventTargetEcsTargetPlacementConstraint | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventTargetEcsTargetPlacementConstraint | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class CloudwatchEventTargetEcsTargetPlacementConstraintList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventTargetEcsTargetPlacementConstraint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference;
}
export interface CloudwatchEventTargetEcsTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#group CloudwatchEventTarget#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#tags CloudwatchEventTarget#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}
    */
    readonly taskCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}
    */
    readonly taskDefinitionArn: string;
    /**
    * capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#capacity_provider_strategy CloudwatchEventTarget#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: CloudwatchEventTargetEcsTargetCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#network_configuration CloudwatchEventTarget#network_configuration}
    */
    readonly networkConfiguration?: CloudwatchEventTargetEcsTargetNetworkConfiguration;
    /**
    * ordered_placement_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#ordered_placement_strategy CloudwatchEventTarget#ordered_placement_strategy}
    */
    readonly orderedPlacementStrategy?: CloudwatchEventTargetEcsTargetOrderedPlacementStrategy[] | cdktf.IResolvable;
    /**
    * placement_constraint block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#placement_constraint CloudwatchEventTarget#placement_constraint}
    */
    readonly placementConstraint?: CloudwatchEventTargetEcsTargetPlacementConstraint[] | cdktf.IResolvable;
}
export declare function cloudwatchEventTargetEcsTargetToTerraform(struct?: CloudwatchEventTargetEcsTargetOutputReference | CloudwatchEventTargetEcsTarget): any;
export declare function cloudwatchEventTargetEcsTargetToHclTerraform(struct?: CloudwatchEventTargetEcsTargetOutputReference | CloudwatchEventTargetEcsTarget): any;
export declare class CloudwatchEventTargetEcsTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetEcsTarget | undefined;
    set internalValue(value: CloudwatchEventTargetEcsTarget | undefined);
    private _enableEcsManagedTags?;
    get enableEcsManagedTags(): boolean | cdktf.IResolvable;
    set enableEcsManagedTags(value: boolean | cdktf.IResolvable);
    resetEnableEcsManagedTags(): void;
    get enableEcsManagedTagsInput(): boolean | cdktf.IResolvable | undefined;
    private _enableExecuteCommand?;
    get enableExecuteCommand(): boolean | cdktf.IResolvable;
    set enableExecuteCommand(value: boolean | cdktf.IResolvable);
    resetEnableExecuteCommand(): void;
    get enableExecuteCommandInput(): boolean | cdktf.IResolvable | undefined;
    private _group?;
    get group(): string;
    set group(value: string);
    resetGroup(): void;
    get groupInput(): string | undefined;
    private _launchType?;
    get launchType(): string;
    set launchType(value: string);
    resetLaunchType(): void;
    get launchTypeInput(): string | undefined;
    private _platformVersion?;
    get platformVersion(): string;
    set platformVersion(value: string);
    resetPlatformVersion(): void;
    get platformVersionInput(): string | undefined;
    private _propagateTags?;
    get propagateTags(): string;
    set propagateTags(value: string);
    resetPropagateTags(): void;
    get propagateTagsInput(): string | undefined;
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
    private _taskCount?;
    get taskCount(): number;
    set taskCount(value: number);
    resetTaskCount(): void;
    get taskCountInput(): number | undefined;
    private _taskDefinitionArn?;
    get taskDefinitionArn(): string;
    set taskDefinitionArn(value: string);
    get taskDefinitionArnInput(): string | undefined;
    private _capacityProviderStrategy;
    get capacityProviderStrategy(): CloudwatchEventTargetEcsTargetCapacityProviderStrategyList;
    putCapacityProviderStrategy(value: CloudwatchEventTargetEcsTargetCapacityProviderStrategy[] | cdktf.IResolvable): void;
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): cdktf.IResolvable | CloudwatchEventTargetEcsTargetCapacityProviderStrategy[] | undefined;
    private _networkConfiguration;
    get networkConfiguration(): CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: CloudwatchEventTargetEcsTargetNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): CloudwatchEventTargetEcsTargetNetworkConfiguration | undefined;
    private _orderedPlacementStrategy;
    get orderedPlacementStrategy(): CloudwatchEventTargetEcsTargetOrderedPlacementStrategyList;
    putOrderedPlacementStrategy(value: CloudwatchEventTargetEcsTargetOrderedPlacementStrategy[] | cdktf.IResolvable): void;
    resetOrderedPlacementStrategy(): void;
    get orderedPlacementStrategyInput(): cdktf.IResolvable | CloudwatchEventTargetEcsTargetOrderedPlacementStrategy[] | undefined;
    private _placementConstraint;
    get placementConstraint(): CloudwatchEventTargetEcsTargetPlacementConstraintList;
    putPlacementConstraint(value: CloudwatchEventTargetEcsTargetPlacementConstraint[] | cdktf.IResolvable): void;
    resetPlacementConstraint(): void;
    get placementConstraintInput(): cdktf.IResolvable | CloudwatchEventTargetEcsTargetPlacementConstraint[] | undefined;
}
export interface CloudwatchEventTargetHttpTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}
    */
    readonly headerParameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}
    */
    readonly queryStringParameters?: {
        [key: string]: string;
    };
}
export declare function cloudwatchEventTargetHttpTargetToTerraform(struct?: CloudwatchEventTargetHttpTargetOutputReference | CloudwatchEventTargetHttpTarget): any;
export declare function cloudwatchEventTargetHttpTargetToHclTerraform(struct?: CloudwatchEventTargetHttpTargetOutputReference | CloudwatchEventTargetHttpTarget): any;
export declare class CloudwatchEventTargetHttpTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetHttpTarget | undefined;
    set internalValue(value: CloudwatchEventTargetHttpTarget | undefined);
    private _headerParameters?;
    get headerParameters(): {
        [key: string]: string;
    };
    set headerParameters(value: {
        [key: string]: string;
    });
    resetHeaderParameters(): void;
    get headerParametersInput(): {
        [key: string]: string;
    } | undefined;
    private _pathParameterValues?;
    get pathParameterValues(): string[];
    set pathParameterValues(value: string[]);
    resetPathParameterValues(): void;
    get pathParameterValuesInput(): string[] | undefined;
    private _queryStringParameters?;
    get queryStringParameters(): {
        [key: string]: string;
    };
    set queryStringParameters(value: {
        [key: string]: string;
    });
    resetQueryStringParameters(): void;
    get queryStringParametersInput(): {
        [key: string]: string;
    } | undefined;
}
export interface CloudwatchEventTargetInputTransformer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}
    */
    readonly inputPaths?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}
    */
    readonly inputTemplate: string;
}
export declare function cloudwatchEventTargetInputTransformerToTerraform(struct?: CloudwatchEventTargetInputTransformerOutputReference | CloudwatchEventTargetInputTransformer): any;
export declare function cloudwatchEventTargetInputTransformerToHclTerraform(struct?: CloudwatchEventTargetInputTransformerOutputReference | CloudwatchEventTargetInputTransformer): any;
export declare class CloudwatchEventTargetInputTransformerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetInputTransformer | undefined;
    set internalValue(value: CloudwatchEventTargetInputTransformer | undefined);
    private _inputPaths?;
    get inputPaths(): {
        [key: string]: string;
    };
    set inputPaths(value: {
        [key: string]: string;
    });
    resetInputPaths(): void;
    get inputPathsInput(): {
        [key: string]: string;
    } | undefined;
    private _inputTemplate?;
    get inputTemplate(): string;
    set inputTemplate(value: string);
    get inputTemplateInput(): string | undefined;
}
export interface CloudwatchEventTargetKinesisTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}
    */
    readonly partitionKeyPath?: string;
}
export declare function cloudwatchEventTargetKinesisTargetToTerraform(struct?: CloudwatchEventTargetKinesisTargetOutputReference | CloudwatchEventTargetKinesisTarget): any;
export declare function cloudwatchEventTargetKinesisTargetToHclTerraform(struct?: CloudwatchEventTargetKinesisTargetOutputReference | CloudwatchEventTargetKinesisTarget): any;
export declare class CloudwatchEventTargetKinesisTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetKinesisTarget | undefined;
    set internalValue(value: CloudwatchEventTargetKinesisTarget | undefined);
    private _partitionKeyPath?;
    get partitionKeyPath(): string;
    set partitionKeyPath(value: string);
    resetPartitionKeyPath(): void;
    get partitionKeyPathInput(): string | undefined;
}
export interface CloudwatchEventTargetRedshiftTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#database CloudwatchEventTarget#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}
    */
    readonly dbUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}
    */
    readonly secretsManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#sql CloudwatchEventTarget#sql}
    */
    readonly sql?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}
    */
    readonly statementName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}
    */
    readonly withEvent?: boolean | cdktf.IResolvable;
}
export declare function cloudwatchEventTargetRedshiftTargetToTerraform(struct?: CloudwatchEventTargetRedshiftTargetOutputReference | CloudwatchEventTargetRedshiftTarget): any;
export declare function cloudwatchEventTargetRedshiftTargetToHclTerraform(struct?: CloudwatchEventTargetRedshiftTargetOutputReference | CloudwatchEventTargetRedshiftTarget): any;
export declare class CloudwatchEventTargetRedshiftTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetRedshiftTarget | undefined;
    set internalValue(value: CloudwatchEventTargetRedshiftTarget | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _dbUser?;
    get dbUser(): string;
    set dbUser(value: string);
    resetDbUser(): void;
    get dbUserInput(): string | undefined;
    private _secretsManagerArn?;
    get secretsManagerArn(): string;
    set secretsManagerArn(value: string);
    resetSecretsManagerArn(): void;
    get secretsManagerArnInput(): string | undefined;
    private _sql?;
    get sql(): string;
    set sql(value: string);
    resetSql(): void;
    get sqlInput(): string | undefined;
    private _statementName?;
    get statementName(): string;
    set statementName(value: string);
    resetStatementName(): void;
    get statementNameInput(): string | undefined;
    private _withEvent?;
    get withEvent(): boolean | cdktf.IResolvable;
    set withEvent(value: boolean | cdktf.IResolvable);
    resetWithEvent(): void;
    get withEventInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CloudwatchEventTargetRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
}
export declare function cloudwatchEventTargetRetryPolicyToTerraform(struct?: CloudwatchEventTargetRetryPolicyOutputReference | CloudwatchEventTargetRetryPolicy): any;
export declare function cloudwatchEventTargetRetryPolicyToHclTerraform(struct?: CloudwatchEventTargetRetryPolicyOutputReference | CloudwatchEventTargetRetryPolicy): any;
export declare class CloudwatchEventTargetRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetRetryPolicy | undefined;
    set internalValue(value: CloudwatchEventTargetRetryPolicy | undefined);
    private _maximumEventAgeInSeconds?;
    get maximumEventAgeInSeconds(): number;
    set maximumEventAgeInSeconds(value: number);
    resetMaximumEventAgeInSeconds(): void;
    get maximumEventAgeInSecondsInput(): number | undefined;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number | undefined;
}
export interface CloudwatchEventTargetRunCommandTargets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#key CloudwatchEventTarget#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#values CloudwatchEventTarget#values}
    */
    readonly values: string[];
}
export declare function cloudwatchEventTargetRunCommandTargetsToTerraform(struct?: CloudwatchEventTargetRunCommandTargets | cdktf.IResolvable): any;
export declare function cloudwatchEventTargetRunCommandTargetsToHclTerraform(struct?: CloudwatchEventTargetRunCommandTargets | cdktf.IResolvable): any;
export declare class CloudwatchEventTargetRunCommandTargetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventTargetRunCommandTargets | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventTargetRunCommandTargets | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class CloudwatchEventTargetRunCommandTargetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventTargetRunCommandTargets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventTargetRunCommandTargetsOutputReference;
}
export interface CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStruct {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#name CloudwatchEventTarget#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#value CloudwatchEventTarget#value}
    */
    readonly value: string;
}
export declare function cloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStructToTerraform(struct?: CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStruct | cdktf.IResolvable): any;
export declare function cloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStructToHclTerraform(struct?: CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStruct | cdktf.IResolvable): any;
export declare class CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStruct | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStruct | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStructList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStruct[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStructOutputReference;
}
export interface CloudwatchEventTargetSagemakerPipelineTarget {
    /**
    * pipeline_parameter_list block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#pipeline_parameter_list CloudwatchEventTarget#pipeline_parameter_list}
    */
    readonly pipelineParameterList?: CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStruct[] | cdktf.IResolvable;
}
export declare function cloudwatchEventTargetSagemakerPipelineTargetToTerraform(struct?: CloudwatchEventTargetSagemakerPipelineTargetOutputReference | CloudwatchEventTargetSagemakerPipelineTarget): any;
export declare function cloudwatchEventTargetSagemakerPipelineTargetToHclTerraform(struct?: CloudwatchEventTargetSagemakerPipelineTargetOutputReference | CloudwatchEventTargetSagemakerPipelineTarget): any;
export declare class CloudwatchEventTargetSagemakerPipelineTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetSagemakerPipelineTarget | undefined;
    set internalValue(value: CloudwatchEventTargetSagemakerPipelineTarget | undefined);
    private _pipelineParameterList;
    get pipelineParameterList(): CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStructList;
    putPipelineParameterList(value: CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStruct[] | cdktf.IResolvable): void;
    resetPipelineParameterList(): void;
    get pipelineParameterListInput(): cdktf.IResolvable | CloudwatchEventTargetSagemakerPipelineTargetPipelineParameterListStruct[] | undefined;
}
export interface CloudwatchEventTargetSqsTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}
    */
    readonly messageGroupId?: string;
}
export declare function cloudwatchEventTargetSqsTargetToTerraform(struct?: CloudwatchEventTargetSqsTargetOutputReference | CloudwatchEventTargetSqsTarget): any;
export declare function cloudwatchEventTargetSqsTargetToHclTerraform(struct?: CloudwatchEventTargetSqsTargetOutputReference | CloudwatchEventTargetSqsTarget): any;
export declare class CloudwatchEventTargetSqsTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventTargetSqsTarget | undefined;
    set internalValue(value: CloudwatchEventTargetSqsTarget | undefined);
    private _messageGroupId?;
    get messageGroupId(): string;
    set messageGroupId(value: string);
    resetMessageGroupId(): void;
    get messageGroupIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target aws_cloudwatch_event_target}
*/
export declare class CloudwatchEventTarget extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_event_target";
    /**
    * Generates CDKTF code for importing a CloudwatchEventTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchEventTarget to import
    * @param importFromId The id of the existing CloudwatchEventTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchEventTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_target aws_cloudwatch_event_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventTargetConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventTargetConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _eventBusName?;
    get eventBusName(): string;
    set eventBusName(value: string);
    resetEventBusName(): void;
    get eventBusNameInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _input?;
    get input(): string;
    set input(value: string);
    resetInput(): void;
    get inputInput(): string | undefined;
    private _inputPath?;
    get inputPath(): string;
    set inputPath(value: string);
    resetInputPath(): void;
    get inputPathInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _rule?;
    get rule(): string;
    set rule(value: string);
    get ruleInput(): string | undefined;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    resetTargetId(): void;
    get targetIdInput(): string | undefined;
    private _appsyncTarget;
    get appsyncTarget(): CloudwatchEventTargetAppsyncTargetOutputReference;
    putAppsyncTarget(value: CloudwatchEventTargetAppsyncTarget): void;
    resetAppsyncTarget(): void;
    get appsyncTargetInput(): CloudwatchEventTargetAppsyncTarget | undefined;
    private _batchTarget;
    get batchTarget(): CloudwatchEventTargetBatchTargetOutputReference;
    putBatchTarget(value: CloudwatchEventTargetBatchTarget): void;
    resetBatchTarget(): void;
    get batchTargetInput(): CloudwatchEventTargetBatchTarget | undefined;
    private _deadLetterConfig;
    get deadLetterConfig(): CloudwatchEventTargetDeadLetterConfigOutputReference;
    putDeadLetterConfig(value: CloudwatchEventTargetDeadLetterConfig): void;
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): CloudwatchEventTargetDeadLetterConfig | undefined;
    private _ecsTarget;
    get ecsTarget(): CloudwatchEventTargetEcsTargetOutputReference;
    putEcsTarget(value: CloudwatchEventTargetEcsTarget): void;
    resetEcsTarget(): void;
    get ecsTargetInput(): CloudwatchEventTargetEcsTarget | undefined;
    private _httpTarget;
    get httpTarget(): CloudwatchEventTargetHttpTargetOutputReference;
    putHttpTarget(value: CloudwatchEventTargetHttpTarget): void;
    resetHttpTarget(): void;
    get httpTargetInput(): CloudwatchEventTargetHttpTarget | undefined;
    private _inputTransformer;
    get inputTransformer(): CloudwatchEventTargetInputTransformerOutputReference;
    putInputTransformer(value: CloudwatchEventTargetInputTransformer): void;
    resetInputTransformer(): void;
    get inputTransformerInput(): CloudwatchEventTargetInputTransformer | undefined;
    private _kinesisTarget;
    get kinesisTarget(): CloudwatchEventTargetKinesisTargetOutputReference;
    putKinesisTarget(value: CloudwatchEventTargetKinesisTarget): void;
    resetKinesisTarget(): void;
    get kinesisTargetInput(): CloudwatchEventTargetKinesisTarget | undefined;
    private _redshiftTarget;
    get redshiftTarget(): CloudwatchEventTargetRedshiftTargetOutputReference;
    putRedshiftTarget(value: CloudwatchEventTargetRedshiftTarget): void;
    resetRedshiftTarget(): void;
    get redshiftTargetInput(): CloudwatchEventTargetRedshiftTarget | undefined;
    private _retryPolicy;
    get retryPolicy(): CloudwatchEventTargetRetryPolicyOutputReference;
    putRetryPolicy(value: CloudwatchEventTargetRetryPolicy): void;
    resetRetryPolicy(): void;
    get retryPolicyInput(): CloudwatchEventTargetRetryPolicy | undefined;
    private _runCommandTargets;
    get runCommandTargets(): CloudwatchEventTargetRunCommandTargetsList;
    putRunCommandTargets(value: CloudwatchEventTargetRunCommandTargets[] | cdktf.IResolvable): void;
    resetRunCommandTargets(): void;
    get runCommandTargetsInput(): cdktf.IResolvable | CloudwatchEventTargetRunCommandTargets[] | undefined;
    private _sagemakerPipelineTarget;
    get sagemakerPipelineTarget(): CloudwatchEventTargetSagemakerPipelineTargetOutputReference;
    putSagemakerPipelineTarget(value: CloudwatchEventTargetSagemakerPipelineTarget): void;
    resetSagemakerPipelineTarget(): void;
    get sagemakerPipelineTargetInput(): CloudwatchEventTargetSagemakerPipelineTarget | undefined;
    private _sqsTarget;
    get sqsTarget(): CloudwatchEventTargetSqsTargetOutputReference;
    putSqsTarget(value: CloudwatchEventTargetSqsTarget): void;
    resetSqsTarget(): void;
    get sqsTargetInput(): CloudwatchEventTargetSqsTarget | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
