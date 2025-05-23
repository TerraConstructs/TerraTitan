/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BatchJobQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#compute_environments BatchJobQueue#compute_environments}
    */
    readonly computeEnvironments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#name BatchJobQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}
    */
    readonly schedulingPolicyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#state BatchJobQueue#state}
    */
    readonly state: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * compute_environment_order block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}
    */
    readonly computeEnvironmentOrder?: BatchJobQueueComputeEnvironmentOrder[] | cdktf.IResolvable;
    /**
    * job_state_time_limit_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#job_state_time_limit_action BatchJobQueue#job_state_time_limit_action}
    */
    readonly jobStateTimeLimitAction?: BatchJobQueueJobStateTimeLimitAction[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#timeouts BatchJobQueue#timeouts}
    */
    readonly timeouts?: BatchJobQueueTimeouts;
}
export interface BatchJobQueueComputeEnvironmentOrder {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#compute_environment BatchJobQueue#compute_environment}
    */
    readonly computeEnvironment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#order BatchJobQueue#order}
    */
    readonly order: number;
}
export declare function batchJobQueueComputeEnvironmentOrderToTerraform(struct?: BatchJobQueueComputeEnvironmentOrder | cdktf.IResolvable): any;
export declare function batchJobQueueComputeEnvironmentOrderToHclTerraform(struct?: BatchJobQueueComputeEnvironmentOrder | cdktf.IResolvable): any;
export declare class BatchJobQueueComputeEnvironmentOrderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobQueueComputeEnvironmentOrder | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobQueueComputeEnvironmentOrder | cdktf.IResolvable | undefined);
    private _computeEnvironment?;
    get computeEnvironment(): string;
    set computeEnvironment(value: string);
    get computeEnvironmentInput(): string | undefined;
    private _order?;
    get order(): number;
    set order(value: number);
    get orderInput(): number | undefined;
}
export declare class BatchJobQueueComputeEnvironmentOrderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobQueueComputeEnvironmentOrder[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobQueueComputeEnvironmentOrderOutputReference;
}
export interface BatchJobQueueJobStateTimeLimitAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#action BatchJobQueue#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#max_time_seconds BatchJobQueue#max_time_seconds}
    */
    readonly maxTimeSeconds: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#reason BatchJobQueue#reason}
    */
    readonly reason: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#state BatchJobQueue#state}
    */
    readonly state: string;
}
export declare function batchJobQueueJobStateTimeLimitActionToTerraform(struct?: BatchJobQueueJobStateTimeLimitAction | cdktf.IResolvable): any;
export declare function batchJobQueueJobStateTimeLimitActionToHclTerraform(struct?: BatchJobQueueJobStateTimeLimitAction | cdktf.IResolvable): any;
export declare class BatchJobQueueJobStateTimeLimitActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobQueueJobStateTimeLimitAction | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobQueueJobStateTimeLimitAction | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _maxTimeSeconds?;
    get maxTimeSeconds(): number;
    set maxTimeSeconds(value: number);
    get maxTimeSecondsInput(): number | undefined;
    private _reason?;
    get reason(): string;
    set reason(value: string);
    get reasonInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    get stateInput(): string | undefined;
}
export declare class BatchJobQueueJobStateTimeLimitActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobQueueJobStateTimeLimitAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobQueueJobStateTimeLimitActionOutputReference;
}
export interface BatchJobQueueTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#create BatchJobQueue#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#delete BatchJobQueue#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#update BatchJobQueue#update}
    */
    readonly update?: string;
}
export declare function batchJobQueueTimeoutsToTerraform(struct?: BatchJobQueueTimeouts | cdktf.IResolvable): any;
export declare function batchJobQueueTimeoutsToHclTerraform(struct?: BatchJobQueueTimeouts | cdktf.IResolvable): any;
export declare class BatchJobQueueTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobQueueTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobQueueTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue aws_batch_job_queue}
*/
export declare class BatchJobQueue extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_batch_job_queue";
    /**
    * Generates CDKTF code for importing a BatchJobQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BatchJobQueue to import
    * @param importFromId The id of the existing BatchJobQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BatchJobQueue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_job_queue aws_batch_job_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchJobQueueConfig
    */
    constructor(scope: Construct, id: string, config: BatchJobQueueConfig);
    get arn(): string;
    private _computeEnvironments?;
    get computeEnvironments(): string[];
    set computeEnvironments(value: string[]);
    resetComputeEnvironments(): void;
    get computeEnvironmentsInput(): string[] | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _schedulingPolicyArn?;
    get schedulingPolicyArn(): string;
    set schedulingPolicyArn(value: string);
    resetSchedulingPolicyArn(): void;
    get schedulingPolicyArnInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    get stateInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _computeEnvironmentOrder;
    get computeEnvironmentOrder(): BatchJobQueueComputeEnvironmentOrderList;
    putComputeEnvironmentOrder(value: BatchJobQueueComputeEnvironmentOrder[] | cdktf.IResolvable): void;
    resetComputeEnvironmentOrder(): void;
    get computeEnvironmentOrderInput(): cdktf.IResolvable | BatchJobQueueComputeEnvironmentOrder[] | undefined;
    private _jobStateTimeLimitAction;
    get jobStateTimeLimitAction(): BatchJobQueueJobStateTimeLimitActionList;
    putJobStateTimeLimitAction(value: BatchJobQueueJobStateTimeLimitAction[] | cdktf.IResolvable): void;
    resetJobStateTimeLimitAction(): void;
    get jobStateTimeLimitActionInput(): cdktf.IResolvable | BatchJobQueueJobStateTimeLimitAction[] | undefined;
    private _timeouts;
    get timeouts(): BatchJobQueueTimeoutsOutputReference;
    putTimeouts(value: BatchJobQueueTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BatchJobQueueTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
