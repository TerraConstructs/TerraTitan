/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FisExperimentTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#id FisExperimentTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#action FisExperimentTemplate#action}
    */
    readonly action: FisExperimentTemplateAction[] | cdktf.IResolvable;
    /**
    * experiment_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}
    */
    readonly experimentOptions?: FisExperimentTemplateExperimentOptions;
    /**
    * log_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}
    */
    readonly logConfiguration?: FisExperimentTemplateLogConfiguration;
    /**
    * stop_condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#stop_condition FisExperimentTemplate#stop_condition}
    */
    readonly stopCondition: FisExperimentTemplateStopCondition[] | cdktf.IResolvable;
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#target FisExperimentTemplate#target}
    */
    readonly target?: FisExperimentTemplateTarget[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#timeouts FisExperimentTemplate#timeouts}
    */
    readonly timeouts?: FisExperimentTemplateTimeouts;
}
export interface FisExperimentTemplateActionParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}
    */
    readonly value: string;
}
export declare function fisExperimentTemplateActionParameterToTerraform(struct?: FisExperimentTemplateActionParameter | cdktf.IResolvable): any;
export declare function fisExperimentTemplateActionParameterToHclTerraform(struct?: FisExperimentTemplateActionParameter | cdktf.IResolvable): any;
export declare class FisExperimentTemplateActionParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FisExperimentTemplateActionParameter | cdktf.IResolvable | undefined;
    set internalValue(value: FisExperimentTemplateActionParameter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class FisExperimentTemplateActionParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FisExperimentTemplateActionParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FisExperimentTemplateActionParameterOutputReference;
}
export interface FisExperimentTemplateActionTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}
    */
    readonly value: string;
}
export declare function fisExperimentTemplateActionTargetToTerraform(struct?: FisExperimentTemplateActionTargetOutputReference | FisExperimentTemplateActionTarget): any;
export declare function fisExperimentTemplateActionTargetToHclTerraform(struct?: FisExperimentTemplateActionTargetOutputReference | FisExperimentTemplateActionTarget): any;
export declare class FisExperimentTemplateActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FisExperimentTemplateActionTarget | undefined;
    set internalValue(value: FisExperimentTemplateActionTarget | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export interface FisExperimentTemplateAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#action_id FisExperimentTemplate#action_id}
    */
    readonly actionId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#start_after FisExperimentTemplate#start_after}
    */
    readonly startAfter?: string[];
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#parameter FisExperimentTemplate#parameter}
    */
    readonly parameter?: FisExperimentTemplateActionParameter[] | cdktf.IResolvable;
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#target FisExperimentTemplate#target}
    */
    readonly target?: FisExperimentTemplateActionTarget;
}
export declare function fisExperimentTemplateActionToTerraform(struct?: FisExperimentTemplateAction | cdktf.IResolvable): any;
export declare function fisExperimentTemplateActionToHclTerraform(struct?: FisExperimentTemplateAction | cdktf.IResolvable): any;
export declare class FisExperimentTemplateActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FisExperimentTemplateAction | cdktf.IResolvable | undefined;
    set internalValue(value: FisExperimentTemplateAction | cdktf.IResolvable | undefined);
    private _actionId?;
    get actionId(): string;
    set actionId(value: string);
    get actionIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _startAfter?;
    get startAfter(): string[];
    set startAfter(value: string[]);
    resetStartAfter(): void;
    get startAfterInput(): string[] | undefined;
    private _parameter;
    get parameter(): FisExperimentTemplateActionParameterList;
    putParameter(value: FisExperimentTemplateActionParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | FisExperimentTemplateActionParameter[] | undefined;
    private _target;
    get target(): FisExperimentTemplateActionTargetOutputReference;
    putTarget(value: FisExperimentTemplateActionTarget): void;
    resetTarget(): void;
    get targetInput(): FisExperimentTemplateActionTarget | undefined;
}
export declare class FisExperimentTemplateActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FisExperimentTemplateAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FisExperimentTemplateActionOutputReference;
}
export interface FisExperimentTemplateExperimentOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}
    */
    readonly accountTargeting?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}
    */
    readonly emptyTargetResolutionMode?: string;
}
export declare function fisExperimentTemplateExperimentOptionsToTerraform(struct?: FisExperimentTemplateExperimentOptionsOutputReference | FisExperimentTemplateExperimentOptions): any;
export declare function fisExperimentTemplateExperimentOptionsToHclTerraform(struct?: FisExperimentTemplateExperimentOptionsOutputReference | FisExperimentTemplateExperimentOptions): any;
export declare class FisExperimentTemplateExperimentOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FisExperimentTemplateExperimentOptions | undefined;
    set internalValue(value: FisExperimentTemplateExperimentOptions | undefined);
    private _accountTargeting?;
    get accountTargeting(): string;
    set accountTargeting(value: string);
    resetAccountTargeting(): void;
    get accountTargetingInput(): string | undefined;
    private _emptyTargetResolutionMode?;
    get emptyTargetResolutionMode(): string;
    set emptyTargetResolutionMode(value: string);
    resetEmptyTargetResolutionMode(): void;
    get emptyTargetResolutionModeInput(): string | undefined;
}
export interface FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}
    */
    readonly logGroupArn: string;
}
export declare function fisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationToTerraform(struct?: FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference | FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration): any;
export declare function fisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationToHclTerraform(struct?: FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference | FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration): any;
export declare class FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration | undefined;
    set internalValue(value: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration | undefined);
    private _logGroupArn?;
    get logGroupArn(): string;
    set logGroupArn(value: string);
    get logGroupArnInput(): string | undefined;
}
export interface FisExperimentTemplateLogConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}
    */
    readonly prefix?: string;
}
export declare function fisExperimentTemplateLogConfigurationS3ConfigurationToTerraform(struct?: FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference | FisExperimentTemplateLogConfigurationS3Configuration): any;
export declare function fisExperimentTemplateLogConfigurationS3ConfigurationToHclTerraform(struct?: FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference | FisExperimentTemplateLogConfigurationS3Configuration): any;
export declare class FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FisExperimentTemplateLogConfigurationS3Configuration | undefined;
    set internalValue(value: FisExperimentTemplateLogConfigurationS3Configuration | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface FisExperimentTemplateLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}
    */
    readonly logSchemaVersion: number;
    /**
    * cloudwatch_logs_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}
    */
    readonly cloudwatchLogsConfiguration?: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}
    */
    readonly s3Configuration?: FisExperimentTemplateLogConfigurationS3Configuration;
}
export declare function fisExperimentTemplateLogConfigurationToTerraform(struct?: FisExperimentTemplateLogConfigurationOutputReference | FisExperimentTemplateLogConfiguration): any;
export declare function fisExperimentTemplateLogConfigurationToHclTerraform(struct?: FisExperimentTemplateLogConfigurationOutputReference | FisExperimentTemplateLogConfiguration): any;
export declare class FisExperimentTemplateLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FisExperimentTemplateLogConfiguration | undefined;
    set internalValue(value: FisExperimentTemplateLogConfiguration | undefined);
    private _logSchemaVersion?;
    get logSchemaVersion(): number;
    set logSchemaVersion(value: number);
    get logSchemaVersionInput(): number | undefined;
    private _cloudwatchLogsConfiguration;
    get cloudwatchLogsConfiguration(): FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference;
    putCloudwatchLogsConfiguration(value: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration): void;
    resetCloudwatchLogsConfiguration(): void;
    get cloudwatchLogsConfigurationInput(): FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration | undefined;
    private _s3Configuration;
    get s3Configuration(): FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: FisExperimentTemplateLogConfigurationS3Configuration): void;
    resetS3Configuration(): void;
    get s3ConfigurationInput(): FisExperimentTemplateLogConfigurationS3Configuration | undefined;
}
export interface FisExperimentTemplateStopCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}
    */
    readonly value?: string;
}
export declare function fisExperimentTemplateStopConditionToTerraform(struct?: FisExperimentTemplateStopCondition | cdktf.IResolvable): any;
export declare function fisExperimentTemplateStopConditionToHclTerraform(struct?: FisExperimentTemplateStopCondition | cdktf.IResolvable): any;
export declare class FisExperimentTemplateStopConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FisExperimentTemplateStopCondition | cdktf.IResolvable | undefined;
    set internalValue(value: FisExperimentTemplateStopCondition | cdktf.IResolvable | undefined);
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class FisExperimentTemplateStopConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FisExperimentTemplateStopCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FisExperimentTemplateStopConditionOutputReference;
}
export interface FisExperimentTemplateTargetFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#path FisExperimentTemplate#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#values FisExperimentTemplate#values}
    */
    readonly values: string[];
}
export declare function fisExperimentTemplateTargetFilterToTerraform(struct?: FisExperimentTemplateTargetFilter | cdktf.IResolvable): any;
export declare function fisExperimentTemplateTargetFilterToHclTerraform(struct?: FisExperimentTemplateTargetFilter | cdktf.IResolvable): any;
export declare class FisExperimentTemplateTargetFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FisExperimentTemplateTargetFilter | cdktf.IResolvable | undefined;
    set internalValue(value: FisExperimentTemplateTargetFilter | cdktf.IResolvable | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class FisExperimentTemplateTargetFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FisExperimentTemplateTargetFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FisExperimentTemplateTargetFilterOutputReference;
}
export interface FisExperimentTemplateTargetResourceTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}
    */
    readonly value: string;
}
export declare function fisExperimentTemplateTargetResourceTagToTerraform(struct?: FisExperimentTemplateTargetResourceTag | cdktf.IResolvable): any;
export declare function fisExperimentTemplateTargetResourceTagToHclTerraform(struct?: FisExperimentTemplateTargetResourceTag | cdktf.IResolvable): any;
export declare class FisExperimentTemplateTargetResourceTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FisExperimentTemplateTargetResourceTag | cdktf.IResolvable | undefined;
    set internalValue(value: FisExperimentTemplateTargetResourceTag | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class FisExperimentTemplateTargetResourceTagList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FisExperimentTemplateTargetResourceTag[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FisExperimentTemplateTargetResourceTagOutputReference;
}
export interface FisExperimentTemplateTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}
    */
    readonly resourceArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}
    */
    readonly selectionMode: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#filter FisExperimentTemplate#filter}
    */
    readonly filter?: FisExperimentTemplateTargetFilter[] | cdktf.IResolvable;
    /**
    * resource_tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#resource_tag FisExperimentTemplate#resource_tag}
    */
    readonly resourceTag?: FisExperimentTemplateTargetResourceTag[] | cdktf.IResolvable;
}
export declare function fisExperimentTemplateTargetToTerraform(struct?: FisExperimentTemplateTarget | cdktf.IResolvable): any;
export declare function fisExperimentTemplateTargetToHclTerraform(struct?: FisExperimentTemplateTarget | cdktf.IResolvable): any;
export declare class FisExperimentTemplateTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FisExperimentTemplateTarget | cdktf.IResolvable | undefined;
    set internalValue(value: FisExperimentTemplateTarget | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _resourceArns?;
    get resourceArns(): string[];
    set resourceArns(value: string[]);
    resetResourceArns(): void;
    get resourceArnsInput(): string[] | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
    private _selectionMode?;
    get selectionMode(): string;
    set selectionMode(value: string);
    get selectionModeInput(): string | undefined;
    private _filter;
    get filter(): FisExperimentTemplateTargetFilterList;
    putFilter(value: FisExperimentTemplateTargetFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | FisExperimentTemplateTargetFilter[] | undefined;
    private _resourceTag;
    get resourceTag(): FisExperimentTemplateTargetResourceTagList;
    putResourceTag(value: FisExperimentTemplateTargetResourceTag[] | cdktf.IResolvable): void;
    resetResourceTag(): void;
    get resourceTagInput(): cdktf.IResolvable | FisExperimentTemplateTargetResourceTag[] | undefined;
}
export declare class FisExperimentTemplateTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FisExperimentTemplateTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FisExperimentTemplateTargetOutputReference;
}
export interface FisExperimentTemplateTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#create FisExperimentTemplate#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#delete FisExperimentTemplate#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#update FisExperimentTemplate#update}
    */
    readonly update?: string;
}
export declare function fisExperimentTemplateTimeoutsToTerraform(struct?: FisExperimentTemplateTimeouts | cdktf.IResolvable): any;
export declare function fisExperimentTemplateTimeoutsToHclTerraform(struct?: FisExperimentTemplateTimeouts | cdktf.IResolvable): any;
export declare class FisExperimentTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FisExperimentTemplateTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FisExperimentTemplateTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template aws_fis_experiment_template}
*/
export declare class FisExperimentTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fis_experiment_template";
    /**
    * Generates CDKTF code for importing a FisExperimentTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FisExperimentTemplate to import
    * @param importFromId The id of the existing FisExperimentTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FisExperimentTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fis_experiment_template aws_fis_experiment_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FisExperimentTemplateConfig
    */
    constructor(scope: Construct, id: string, config: FisExperimentTemplateConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    get action(): FisExperimentTemplateActionList;
    putAction(value: FisExperimentTemplateAction[] | cdktf.IResolvable): void;
    get actionInput(): cdktf.IResolvable | FisExperimentTemplateAction[] | undefined;
    private _experimentOptions;
    get experimentOptions(): FisExperimentTemplateExperimentOptionsOutputReference;
    putExperimentOptions(value: FisExperimentTemplateExperimentOptions): void;
    resetExperimentOptions(): void;
    get experimentOptionsInput(): FisExperimentTemplateExperimentOptions | undefined;
    private _logConfiguration;
    get logConfiguration(): FisExperimentTemplateLogConfigurationOutputReference;
    putLogConfiguration(value: FisExperimentTemplateLogConfiguration): void;
    resetLogConfiguration(): void;
    get logConfigurationInput(): FisExperimentTemplateLogConfiguration | undefined;
    private _stopCondition;
    get stopCondition(): FisExperimentTemplateStopConditionList;
    putStopCondition(value: FisExperimentTemplateStopCondition[] | cdktf.IResolvable): void;
    get stopConditionInput(): cdktf.IResolvable | FisExperimentTemplateStopCondition[] | undefined;
    private _target;
    get target(): FisExperimentTemplateTargetList;
    putTarget(value: FisExperimentTemplateTarget[] | cdktf.IResolvable): void;
    resetTarget(): void;
    get targetInput(): cdktf.IResolvable | FisExperimentTemplateTarget[] | undefined;
    private _timeouts;
    get timeouts(): FisExperimentTemplateTimeoutsOutputReference;
    putTimeouts(value: FisExperimentTemplateTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FisExperimentTemplateTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
