/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppautoscalingTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/appautoscaling_target#id AppautoscalingTarget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Required) Max capacity of the scalable target. */
    readonly maxCapacity: number;
    /** (Required) Min capacity of the scalable target. */
    readonly minCapacity: number;
    /** (Required) Resource type and unique identifier string for the resource associated with the scaling policy. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html#API_RegisterScalableTarget_RequestParameters) */
    readonly resourceId: string;
    /** (Optional) ARN of the IAM role that allows Application AutoScaling to modify your scalable target on your behalf. This defaults to an IAM Service-Linked Role for most services and custom IAM Roles are ignored by the API for those namespaces. See the [AWS Application Auto Scaling documentation](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-roles) for more information about how this service interacts with IAM. */
    readonly roleArn?: string;
    /** (Required) Scalable dimension of the scalable target. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html#API_RegisterScalableTarget_RequestParameters) */
    readonly scalableDimension: string;
    /** (Required) AWS service namespace of the scalable target. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html#API_RegisterScalableTarget_RequestParameters) */
    readonly serviceNamespace: string;
    /** (Optional) Map of tags to assign to the scalable target. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/appautoscaling_target#tags_all AppautoscalingTarget#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Optional) Specifies whether the scaling activities for a scalable target are in a suspended state. */
    readonly suspendedState?: AppautoscalingTargetSuspendedState;
}
export interface AppautoscalingTargetSuspendedState {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/appautoscaling_target#dynamic_scaling_in_suspended AppautoscalingTarget#dynamic_scaling_in_suspended}
    */
    readonly dynamicScalingInSuspended?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/appautoscaling_target#dynamic_scaling_out_suspended AppautoscalingTarget#dynamic_scaling_out_suspended}
    */
    readonly dynamicScalingOutSuspended?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/appautoscaling_target#scheduled_scaling_suspended AppautoscalingTarget#scheduled_scaling_suspended}
    */
    readonly scheduledScalingSuspended?: boolean | cdktf.IResolvable;
}
export declare function appautoscalingTargetSuspendedStateToTerraform(struct?: AppautoscalingTargetSuspendedStateOutputReference | AppautoscalingTargetSuspendedState): any;
export declare function appautoscalingTargetSuspendedStateToHclTerraform(struct?: AppautoscalingTargetSuspendedStateOutputReference | AppautoscalingTargetSuspendedState): any;
export declare class AppautoscalingTargetSuspendedStateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppautoscalingTargetSuspendedState | undefined;
    set internalValue(value: AppautoscalingTargetSuspendedState | undefined);
    private _dynamicScalingInSuspended?;
    get dynamicScalingInSuspended(): boolean | cdktf.IResolvable;
    set dynamicScalingInSuspended(value: boolean | cdktf.IResolvable);
    resetDynamicScalingInSuspended(): void;
    get dynamicScalingInSuspendedInput(): boolean | cdktf.IResolvable | undefined;
    private _dynamicScalingOutSuspended?;
    get dynamicScalingOutSuspended(): boolean | cdktf.IResolvable;
    set dynamicScalingOutSuspended(value: boolean | cdktf.IResolvable);
    resetDynamicScalingOutSuspended(): void;
    get dynamicScalingOutSuspendedInput(): boolean | cdktf.IResolvable | undefined;
    private _scheduledScalingSuspended?;
    get scheduledScalingSuspended(): boolean | cdktf.IResolvable;
    set scheduledScalingSuspended(value: boolean | cdktf.IResolvable);
    resetScheduledScalingSuspended(): void;
    get scheduledScalingSuspendedInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/appautoscaling_target aws_appautoscaling_target}
*/
export declare class AppautoscalingTarget extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appautoscaling_target";
    /**
    * Generates CDKTF code for importing a AppautoscalingTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppautoscalingTarget to import
    * @param importFromId The id of the existing AppautoscalingTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/appautoscaling_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppautoscalingTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/appautoscaling_target aws_appautoscaling_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingTargetConfig
    */
    constructor(scope: Construct, id: string, config: AppautoscalingTargetConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    get maxCapacityInput(): number | undefined;
    private _minCapacity?;
    get minCapacity(): number;
    set minCapacity(value: number);
    get minCapacityInput(): number | undefined;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _scalableDimension?;
    get scalableDimension(): string;
    set scalableDimension(value: string);
    get scalableDimensionInput(): string | undefined;
    private _serviceNamespace?;
    get serviceNamespace(): string;
    set serviceNamespace(value: string);
    get serviceNamespaceInput(): string | undefined;
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
    private _suspendedState;
    get suspendedState(): AppautoscalingTargetSuspendedStateOutputReference;
    putSuspendedState(value: AppautoscalingTargetSuspendedState): void;
    resetSuspendedState(): void;
    get suspendedStateInput(): AppautoscalingTargetSuspendedState | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
