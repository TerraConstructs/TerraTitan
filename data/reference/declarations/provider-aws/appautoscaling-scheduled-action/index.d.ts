/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppautoscalingScheduledActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}
    */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}
    */
    readonly schedule: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}
    */
    readonly serviceNamespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}
    */
    readonly startTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}
    */
    readonly timezone?: string;
    /**
    * scalable_target_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}
    */
    readonly scalableTargetAction: AppautoscalingScheduledActionScalableTargetAction;
}
export interface AppautoscalingScheduledActionScalableTargetAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}
    */
    readonly maxCapacity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}
    */
    readonly minCapacity?: string;
}
export declare function appautoscalingScheduledActionScalableTargetActionToTerraform(struct?: AppautoscalingScheduledActionScalableTargetActionOutputReference | AppautoscalingScheduledActionScalableTargetAction): any;
export declare function appautoscalingScheduledActionScalableTargetActionToHclTerraform(struct?: AppautoscalingScheduledActionScalableTargetActionOutputReference | AppautoscalingScheduledActionScalableTargetAction): any;
export declare class AppautoscalingScheduledActionScalableTargetActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppautoscalingScheduledActionScalableTargetAction | undefined;
    set internalValue(value: AppautoscalingScheduledActionScalableTargetAction | undefined);
    private _maxCapacity?;
    get maxCapacity(): string;
    set maxCapacity(value: string);
    resetMaxCapacity(): void;
    get maxCapacityInput(): string | undefined;
    private _minCapacity?;
    get minCapacity(): string;
    set minCapacity(value: string);
    resetMinCapacity(): void;
    get minCapacityInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action aws_appautoscaling_scheduled_action}
*/
export declare class AppautoscalingScheduledAction extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appautoscaling_scheduled_action";
    /**
    * Generates CDKTF code for importing a AppautoscalingScheduledAction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppautoscalingScheduledAction to import
    * @param importFromId The id of the existing AppautoscalingScheduledAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppautoscalingScheduledAction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appautoscaling_scheduled_action aws_appautoscaling_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingScheduledActionConfig
    */
    constructor(scope: Construct, id: string, config: AppautoscalingScheduledActionConfig);
    get arn(): string;
    private _endTime?;
    get endTime(): string;
    set endTime(value: string);
    resetEndTime(): void;
    get endTimeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string | undefined;
    private _scalableDimension?;
    get scalableDimension(): string;
    set scalableDimension(value: string);
    get scalableDimensionInput(): string | undefined;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    get scheduleInput(): string | undefined;
    private _serviceNamespace?;
    get serviceNamespace(): string;
    set serviceNamespace(value: string);
    get serviceNamespaceInput(): string | undefined;
    private _startTime?;
    get startTime(): string;
    set startTime(value: string);
    resetStartTime(): void;
    get startTimeInput(): string | undefined;
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string | undefined;
    private _scalableTargetAction;
    get scalableTargetAction(): AppautoscalingScheduledActionScalableTargetActionOutputReference;
    putScalableTargetAction(value: AppautoscalingScheduledActionScalableTargetAction): void;
    get scalableTargetActionInput(): AppautoscalingScheduledActionScalableTargetAction | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
