/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingLifecycleHookConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Name of the Auto Scaling group to which you want to assign the lifecycle hook */
    readonly autoscalingGroupName: string;
    /** (Optional) Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. The value for this parameter can be either CONTINUE or ABANDON. The default value for this parameter is ABANDON. */
    readonly defaultResult?: string;
    /** (Optional) Defines the amount of time, in seconds, that can elapse before the lifecycle hook times out. When the lifecycle hook times out, Auto Scaling performs the action defined in the DefaultResult parameter */
    readonly heartbeatTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/autoscaling_lifecycle_hook#id AutoscalingLifecycleHook#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Required) Instance state to which you want to attach the lifecycle hook. For a list of lifecycle hook types, see [describe-lifecycle-hook-types](https://docs.aws.amazon.com/cli/latest/reference/autoscaling/describe-lifecycle-hook-types.html#examples) */
    readonly lifecycleTransition: string;
    /** (Required) Name of the lifecycle hook. */
    readonly name: string;
    /** (Optional) Contains additional information that you want to include any time Auto Scaling sends a message to the notification target. */
    readonly notificationMetadata?: string;
    /** (Optional) ARN of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This ARN target can be either an SQS queue or an SNS topic. */
    readonly notificationTargetArn?: string;
    /** (Optional) ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. */
    readonly roleArn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/autoscaling_lifecycle_hook aws_autoscaling_lifecycle_hook}
*/
export declare class AutoscalingLifecycleHook extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_lifecycle_hook";
    /**
    * Generates CDKTF code for importing a AutoscalingLifecycleHook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingLifecycleHook to import
    * @param importFromId The id of the existing AutoscalingLifecycleHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/autoscaling_lifecycle_hook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingLifecycleHook to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/autoscaling_lifecycle_hook aws_autoscaling_lifecycle_hook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingLifecycleHookConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingLifecycleHookConfig);
    private _autoscalingGroupName?;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string | undefined;
    private _defaultResult?;
    get defaultResult(): string;
    set defaultResult(value: string);
    resetDefaultResult(): void;
    get defaultResultInput(): string | undefined;
    private _heartbeatTimeout?;
    get heartbeatTimeout(): number;
    set heartbeatTimeout(value: number);
    resetHeartbeatTimeout(): void;
    get heartbeatTimeoutInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _lifecycleTransition?;
    get lifecycleTransition(): string;
    set lifecycleTransition(value: string);
    get lifecycleTransitionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _notificationMetadata?;
    get notificationMetadata(): string;
    set notificationMetadata(value: string);
    resetNotificationMetadata(): void;
    get notificationMetadataInput(): string | undefined;
    private _notificationTargetArn?;
    get notificationTargetArn(): string;
    set notificationTargetArn(value: string);
    resetNotificationTargetArn(): void;
    get notificationTargetArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
