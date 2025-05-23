/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EvidentlyLaunchConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#id EvidentlyLaunch#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}
    */
    readonly project: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}
    */
    readonly randomizationSalt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#tags EvidentlyLaunch#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#tags_all EvidentlyLaunch#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * groups block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}
    */
    readonly groups: EvidentlyLaunchGroups[] | cdktf.IResolvable;
    /**
    * metric_monitors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}
    */
    readonly metricMonitors?: EvidentlyLaunchMetricMonitors[] | cdktf.IResolvable;
    /**
    * scheduled_splits_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}
    */
    readonly scheduledSplitsConfig?: EvidentlyLaunchScheduledSplitsConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#timeouts EvidentlyLaunch#timeouts}
    */
    readonly timeouts?: EvidentlyLaunchTimeouts;
}
export interface EvidentlyLaunchExecution {
}
export declare function evidentlyLaunchExecutionToTerraform(struct?: EvidentlyLaunchExecution): any;
export declare function evidentlyLaunchExecutionToHclTerraform(struct?: EvidentlyLaunchExecution): any;
export declare class EvidentlyLaunchExecutionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EvidentlyLaunchExecution | undefined;
    set internalValue(value: EvidentlyLaunchExecution | undefined);
    get endedTime(): string;
    get startedTime(): string;
}
export declare class EvidentlyLaunchExecutionList extends cdktf.ComplexList {
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
    get(index: number): EvidentlyLaunchExecutionOutputReference;
}
export interface EvidentlyLaunchGroups {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#feature EvidentlyLaunch#feature}
    */
    readonly feature: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#variation EvidentlyLaunch#variation}
    */
    readonly variation: string;
}
export declare function evidentlyLaunchGroupsToTerraform(struct?: EvidentlyLaunchGroups | cdktf.IResolvable): any;
export declare function evidentlyLaunchGroupsToHclTerraform(struct?: EvidentlyLaunchGroups | cdktf.IResolvable): any;
export declare class EvidentlyLaunchGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EvidentlyLaunchGroups | cdktf.IResolvable | undefined;
    set internalValue(value: EvidentlyLaunchGroups | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _feature?;
    get feature(): string;
    set feature(value: string);
    get featureInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _variation?;
    get variation(): string;
    set variation(value: string);
    get variationInput(): string | undefined;
}
export declare class EvidentlyLaunchGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EvidentlyLaunchGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EvidentlyLaunchGroupsOutputReference;
}
export interface EvidentlyLaunchMetricMonitorsMetricDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}
    */
    readonly entityIdKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#unit_label EvidentlyLaunch#unit_label}
    */
    readonly unitLabel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#value_key EvidentlyLaunch#value_key}
    */
    readonly valueKey: string;
}
export declare function evidentlyLaunchMetricMonitorsMetricDefinitionToTerraform(struct?: EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference | EvidentlyLaunchMetricMonitorsMetricDefinition): any;
export declare function evidentlyLaunchMetricMonitorsMetricDefinitionToHclTerraform(struct?: EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference | EvidentlyLaunchMetricMonitorsMetricDefinition): any;
export declare class EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EvidentlyLaunchMetricMonitorsMetricDefinition | undefined;
    set internalValue(value: EvidentlyLaunchMetricMonitorsMetricDefinition | undefined);
    private _entityIdKey?;
    get entityIdKey(): string;
    set entityIdKey(value: string);
    get entityIdKeyInput(): string | undefined;
    private _eventPattern?;
    get eventPattern(): string;
    set eventPattern(value: string);
    resetEventPattern(): void;
    get eventPatternInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _unitLabel?;
    get unitLabel(): string;
    set unitLabel(value: string);
    resetUnitLabel(): void;
    get unitLabelInput(): string | undefined;
    private _valueKey?;
    get valueKey(): string;
    set valueKey(value: string);
    get valueKeyInput(): string | undefined;
}
export interface EvidentlyLaunchMetricMonitors {
    /**
    * metric_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#metric_definition EvidentlyLaunch#metric_definition}
    */
    readonly metricDefinition: EvidentlyLaunchMetricMonitorsMetricDefinition;
}
export declare function evidentlyLaunchMetricMonitorsToTerraform(struct?: EvidentlyLaunchMetricMonitors | cdktf.IResolvable): any;
export declare function evidentlyLaunchMetricMonitorsToHclTerraform(struct?: EvidentlyLaunchMetricMonitors | cdktf.IResolvable): any;
export declare class EvidentlyLaunchMetricMonitorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EvidentlyLaunchMetricMonitors | cdktf.IResolvable | undefined;
    set internalValue(value: EvidentlyLaunchMetricMonitors | cdktf.IResolvable | undefined);
    private _metricDefinition;
    get metricDefinition(): EvidentlyLaunchMetricMonitorsMetricDefinitionOutputReference;
    putMetricDefinition(value: EvidentlyLaunchMetricMonitorsMetricDefinition): void;
    get metricDefinitionInput(): EvidentlyLaunchMetricMonitorsMetricDefinition | undefined;
}
export declare class EvidentlyLaunchMetricMonitorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EvidentlyLaunchMetricMonitors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EvidentlyLaunchMetricMonitorsOutputReference;
}
export interface EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}
    */
    readonly evaluationOrder: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#segment EvidentlyLaunch#segment}
    */
    readonly segment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#weights EvidentlyLaunch#weights}
    */
    readonly weights: {
        [key: string]: number;
    };
}
export declare function evidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides | cdktf.IResolvable): any;
export declare function evidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesToHclTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides | cdktf.IResolvable): any;
export declare class EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides | cdktf.IResolvable | undefined;
    set internalValue(value: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides | cdktf.IResolvable | undefined);
    private _evaluationOrder?;
    get evaluationOrder(): number;
    set evaluationOrder(value: number);
    get evaluationOrderInput(): number | undefined;
    private _segment?;
    get segment(): string;
    set segment(value: string);
    get segmentInput(): string | undefined;
    private _weights?;
    get weights(): {
        [key: string]: number;
    };
    set weights(value: {
        [key: string]: number;
    });
    get weightsInput(): {
        [key: string]: number;
    } | undefined;
}
export declare class EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesOutputReference;
}
export interface EvidentlyLaunchScheduledSplitsConfigSteps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#group_weights EvidentlyLaunch#group_weights}
    */
    readonly groupWeights: {
        [key: string]: number;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#start_time EvidentlyLaunch#start_time}
    */
    readonly startTime: string;
    /**
    * segment_overrides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}
    */
    readonly segmentOverrides?: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[] | cdktf.IResolvable;
}
export declare function evidentlyLaunchScheduledSplitsConfigStepsToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigSteps | cdktf.IResolvable): any;
export declare function evidentlyLaunchScheduledSplitsConfigStepsToHclTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigSteps | cdktf.IResolvable): any;
export declare class EvidentlyLaunchScheduledSplitsConfigStepsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EvidentlyLaunchScheduledSplitsConfigSteps | cdktf.IResolvable | undefined;
    set internalValue(value: EvidentlyLaunchScheduledSplitsConfigSteps | cdktf.IResolvable | undefined);
    private _groupWeights?;
    get groupWeights(): {
        [key: string]: number;
    };
    set groupWeights(value: {
        [key: string]: number;
    });
    get groupWeightsInput(): {
        [key: string]: number;
    } | undefined;
    private _startTime?;
    get startTime(): string;
    set startTime(value: string);
    get startTimeInput(): string | undefined;
    private _segmentOverrides;
    get segmentOverrides(): EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverridesList;
    putSegmentOverrides(value: EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[] | cdktf.IResolvable): void;
    resetSegmentOverrides(): void;
    get segmentOverridesInput(): cdktf.IResolvable | EvidentlyLaunchScheduledSplitsConfigStepsSegmentOverrides[] | undefined;
}
export declare class EvidentlyLaunchScheduledSplitsConfigStepsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EvidentlyLaunchScheduledSplitsConfigSteps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EvidentlyLaunchScheduledSplitsConfigStepsOutputReference;
}
export interface EvidentlyLaunchScheduledSplitsConfig {
    /**
    * steps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#steps EvidentlyLaunch#steps}
    */
    readonly steps: EvidentlyLaunchScheduledSplitsConfigSteps[] | cdktf.IResolvable;
}
export declare function evidentlyLaunchScheduledSplitsConfigToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigOutputReference | EvidentlyLaunchScheduledSplitsConfig): any;
export declare function evidentlyLaunchScheduledSplitsConfigToHclTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigOutputReference | EvidentlyLaunchScheduledSplitsConfig): any;
export declare class EvidentlyLaunchScheduledSplitsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EvidentlyLaunchScheduledSplitsConfig | undefined;
    set internalValue(value: EvidentlyLaunchScheduledSplitsConfig | undefined);
    private _steps;
    get steps(): EvidentlyLaunchScheduledSplitsConfigStepsList;
    putSteps(value: EvidentlyLaunchScheduledSplitsConfigSteps[] | cdktf.IResolvable): void;
    get stepsInput(): cdktf.IResolvable | EvidentlyLaunchScheduledSplitsConfigSteps[] | undefined;
}
export interface EvidentlyLaunchTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#create EvidentlyLaunch#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#delete EvidentlyLaunch#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#update EvidentlyLaunch#update}
    */
    readonly update?: string;
}
export declare function evidentlyLaunchTimeoutsToTerraform(struct?: EvidentlyLaunchTimeouts | cdktf.IResolvable): any;
export declare function evidentlyLaunchTimeoutsToHclTerraform(struct?: EvidentlyLaunchTimeouts | cdktf.IResolvable): any;
export declare class EvidentlyLaunchTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EvidentlyLaunchTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EvidentlyLaunchTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch aws_evidently_launch}
*/
export declare class EvidentlyLaunch extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_evidently_launch";
    /**
    * Generates CDKTF code for importing a EvidentlyLaunch resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EvidentlyLaunch to import
    * @param importFromId The id of the existing EvidentlyLaunch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EvidentlyLaunch to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/evidently_launch aws_evidently_launch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EvidentlyLaunchConfig
    */
    constructor(scope: Construct, id: string, config: EvidentlyLaunchConfig);
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _execution;
    get execution(): EvidentlyLaunchExecutionList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _project?;
    get project(): string;
    set project(value: string);
    get projectInput(): string | undefined;
    private _randomizationSalt?;
    get randomizationSalt(): string;
    set randomizationSalt(value: string);
    resetRandomizationSalt(): void;
    get randomizationSaltInput(): string | undefined;
    get status(): string;
    get statusReason(): string;
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
    get type(): string;
    private _groups;
    get groups(): EvidentlyLaunchGroupsList;
    putGroups(value: EvidentlyLaunchGroups[] | cdktf.IResolvable): void;
    get groupsInput(): cdktf.IResolvable | EvidentlyLaunchGroups[] | undefined;
    private _metricMonitors;
    get metricMonitors(): EvidentlyLaunchMetricMonitorsList;
    putMetricMonitors(value: EvidentlyLaunchMetricMonitors[] | cdktf.IResolvable): void;
    resetMetricMonitors(): void;
    get metricMonitorsInput(): cdktf.IResolvable | EvidentlyLaunchMetricMonitors[] | undefined;
    private _scheduledSplitsConfig;
    get scheduledSplitsConfig(): EvidentlyLaunchScheduledSplitsConfigOutputReference;
    putScheduledSplitsConfig(value: EvidentlyLaunchScheduledSplitsConfig): void;
    resetScheduledSplitsConfig(): void;
    get scheduledSplitsConfigInput(): EvidentlyLaunchScheduledSplitsConfig | undefined;
    private _timeouts;
    get timeouts(): EvidentlyLaunchTimeoutsOutputReference;
    putTimeouts(value: EvidentlyLaunchTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EvidentlyLaunchTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
