/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#id EcsCapacityProvider#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#name EcsCapacityProvider#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#tags EcsCapacityProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#tags_all EcsCapacityProvider#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * auto_scaling_group_provider block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}
    */
    readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider;
}
export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#instance_warmup_period EcsCapacityProvider#instance_warmup_period}
    */
    readonly instanceWarmupPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}
    */
    readonly maximumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}
    */
    readonly minimumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#status EcsCapacityProvider#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#target_capacity EcsCapacityProvider#target_capacity}
    */
    readonly targetCapacity?: number;
}
export declare function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference | EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any;
export declare function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToHclTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference | EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any;
export declare class EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined;
    set internalValue(value: EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined);
    private _instanceWarmupPeriod?;
    get instanceWarmupPeriod(): number;
    set instanceWarmupPeriod(value: number);
    resetInstanceWarmupPeriod(): void;
    get instanceWarmupPeriodInput(): number | undefined;
    private _maximumScalingStepSize?;
    get maximumScalingStepSize(): number;
    set maximumScalingStepSize(value: number);
    resetMaximumScalingStepSize(): void;
    get maximumScalingStepSizeInput(): number | undefined;
    private _minimumScalingStepSize?;
    get minimumScalingStepSize(): number;
    set minimumScalingStepSize(value: number);
    resetMinimumScalingStepSize(): void;
    get minimumScalingStepSizeInput(): number | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _targetCapacity?;
    get targetCapacity(): number;
    set targetCapacity(value: number);
    resetTargetCapacity(): void;
    get targetCapacityInput(): number | undefined;
}
export interface EcsCapacityProviderAutoScalingGroupProvider {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}
    */
    readonly autoScalingGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#managed_draining EcsCapacityProvider#managed_draining}
    */
    readonly managedDraining?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#managed_termination_protection EcsCapacityProvider#managed_termination_protection}
    */
    readonly managedTerminationProtection?: string;
    /**
    * managed_scaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#managed_scaling EcsCapacityProvider#managed_scaling}
    */
    readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling;
}
export declare function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderOutputReference | EcsCapacityProviderAutoScalingGroupProvider): any;
export declare function ecsCapacityProviderAutoScalingGroupProviderToHclTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderOutputReference | EcsCapacityProviderAutoScalingGroupProvider): any;
export declare class EcsCapacityProviderAutoScalingGroupProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsCapacityProviderAutoScalingGroupProvider | undefined;
    set internalValue(value: EcsCapacityProviderAutoScalingGroupProvider | undefined);
    private _autoScalingGroupArn?;
    get autoScalingGroupArn(): string;
    set autoScalingGroupArn(value: string);
    get autoScalingGroupArnInput(): string | undefined;
    private _managedDraining?;
    get managedDraining(): string;
    set managedDraining(value: string);
    resetManagedDraining(): void;
    get managedDrainingInput(): string | undefined;
    private _managedTerminationProtection?;
    get managedTerminationProtection(): string;
    set managedTerminationProtection(value: string);
    resetManagedTerminationProtection(): void;
    get managedTerminationProtectionInput(): string | undefined;
    private _managedScaling;
    get managedScaling(): EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference;
    putManagedScaling(value: EcsCapacityProviderAutoScalingGroupProviderManagedScaling): void;
    resetManagedScaling(): void;
    get managedScalingInput(): EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider aws_ecs_capacity_provider}
*/
export declare class EcsCapacityProvider extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecs_capacity_provider";
    /**
    * Generates CDKTF code for importing a EcsCapacityProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcsCapacityProvider to import
    * @param importFromId The id of the existing EcsCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcsCapacityProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_capacity_provider aws_ecs_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsCapacityProviderConfig
    */
    constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig);
    get arn(): string;
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
    private _autoScalingGroupProvider;
    get autoScalingGroupProvider(): EcsCapacityProviderAutoScalingGroupProviderOutputReference;
    putAutoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider): void;
    get autoScalingGroupProviderInput(): EcsCapacityProviderAutoScalingGroupProvider | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
