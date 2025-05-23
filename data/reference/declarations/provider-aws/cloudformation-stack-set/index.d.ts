/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}
    */
    readonly administrationRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}
    */
    readonly callAs?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}
    */
    readonly executionRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#id CloudformationStackSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#name CloudformationStackSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}
    */
    readonly permissionModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}
    */
    readonly templateUrl?: string;
    /**
    * auto_deployment block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}
    */
    readonly autoDeployment?: CloudformationStackSetAutoDeployment;
    /**
    * managed_execution block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#managed_execution CloudformationStackSet#managed_execution}
    */
    readonly managedExecution?: CloudformationStackSetManagedExecution;
    /**
    * operation_preferences block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}
    */
    readonly operationPreferences?: CloudformationStackSetOperationPreferences;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#timeouts CloudformationStackSet#timeouts}
    */
    readonly timeouts?: CloudformationStackSetTimeouts;
}
export interface CloudformationStackSetAutoDeployment {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#enabled CloudformationStackSet#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}
    */
    readonly retainStacksOnAccountRemoval?: boolean | cdktf.IResolvable;
}
export declare function cloudformationStackSetAutoDeploymentToTerraform(struct?: CloudformationStackSetAutoDeploymentOutputReference | CloudformationStackSetAutoDeployment): any;
export declare function cloudformationStackSetAutoDeploymentToHclTerraform(struct?: CloudformationStackSetAutoDeploymentOutputReference | CloudformationStackSetAutoDeployment): any;
export declare class CloudformationStackSetAutoDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackSetAutoDeployment | undefined;
    set internalValue(value: CloudformationStackSetAutoDeployment | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _retainStacksOnAccountRemoval?;
    get retainStacksOnAccountRemoval(): boolean | cdktf.IResolvable;
    set retainStacksOnAccountRemoval(value: boolean | cdktf.IResolvable);
    resetRetainStacksOnAccountRemoval(): void;
    get retainStacksOnAccountRemovalInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CloudformationStackSetManagedExecution {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#active CloudformationStackSet#active}
    */
    readonly active?: boolean | cdktf.IResolvable;
}
export declare function cloudformationStackSetManagedExecutionToTerraform(struct?: CloudformationStackSetManagedExecutionOutputReference | CloudformationStackSetManagedExecution): any;
export declare function cloudformationStackSetManagedExecutionToHclTerraform(struct?: CloudformationStackSetManagedExecutionOutputReference | CloudformationStackSetManagedExecution): any;
export declare class CloudformationStackSetManagedExecutionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackSetManagedExecution | undefined;
    set internalValue(value: CloudformationStackSetManagedExecution | undefined);
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    resetActive(): void;
    get activeInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CloudformationStackSetOperationPreferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}
    */
    readonly failureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}
    */
    readonly failureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}
    */
    readonly maxConcurrentCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}
    */
    readonly maxConcurrentPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}
    */
    readonly regionConcurrencyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#region_order CloudformationStackSet#region_order}
    */
    readonly regionOrder?: string[];
}
export declare function cloudformationStackSetOperationPreferencesToTerraform(struct?: CloudformationStackSetOperationPreferencesOutputReference | CloudformationStackSetOperationPreferences): any;
export declare function cloudformationStackSetOperationPreferencesToHclTerraform(struct?: CloudformationStackSetOperationPreferencesOutputReference | CloudformationStackSetOperationPreferences): any;
export declare class CloudformationStackSetOperationPreferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackSetOperationPreferences | undefined;
    set internalValue(value: CloudformationStackSetOperationPreferences | undefined);
    private _failureToleranceCount?;
    get failureToleranceCount(): number;
    set failureToleranceCount(value: number);
    resetFailureToleranceCount(): void;
    get failureToleranceCountInput(): number | undefined;
    private _failureTolerancePercentage?;
    get failureTolerancePercentage(): number;
    set failureTolerancePercentage(value: number);
    resetFailureTolerancePercentage(): void;
    get failureTolerancePercentageInput(): number | undefined;
    private _maxConcurrentCount?;
    get maxConcurrentCount(): number;
    set maxConcurrentCount(value: number);
    resetMaxConcurrentCount(): void;
    get maxConcurrentCountInput(): number | undefined;
    private _maxConcurrentPercentage?;
    get maxConcurrentPercentage(): number;
    set maxConcurrentPercentage(value: number);
    resetMaxConcurrentPercentage(): void;
    get maxConcurrentPercentageInput(): number | undefined;
    private _regionConcurrencyType?;
    get regionConcurrencyType(): string;
    set regionConcurrencyType(value: string);
    resetRegionConcurrencyType(): void;
    get regionConcurrencyTypeInput(): string | undefined;
    private _regionOrder?;
    get regionOrder(): string[];
    set regionOrder(value: string[]);
    resetRegionOrder(): void;
    get regionOrderInput(): string[] | undefined;
}
export interface CloudformationStackSetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#update CloudformationStackSet#update}
    */
    readonly update?: string;
}
export declare function cloudformationStackSetTimeoutsToTerraform(struct?: CloudformationStackSetTimeouts | cdktf.IResolvable): any;
export declare function cloudformationStackSetTimeoutsToHclTerraform(struct?: CloudformationStackSetTimeouts | cdktf.IResolvable): any;
export declare class CloudformationStackSetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackSetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudformationStackSetTimeouts | cdktf.IResolvable | undefined);
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set aws_cloudformation_stack_set}
*/
export declare class CloudformationStackSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudformation_stack_set";
    /**
    * Generates CDKTF code for importing a CloudformationStackSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudformationStackSet to import
    * @param importFromId The id of the existing CloudformationStackSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudformationStackSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set aws_cloudformation_stack_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationStackSetConfig);
    private _administrationRoleArn?;
    get administrationRoleArn(): string;
    set administrationRoleArn(value: string);
    resetAdministrationRoleArn(): void;
    get administrationRoleArnInput(): string | undefined;
    get arn(): string;
    private _callAs?;
    get callAs(): string;
    set callAs(value: string);
    resetCallAs(): void;
    get callAsInput(): string | undefined;
    private _capabilities?;
    get capabilities(): string[];
    set capabilities(value: string[]);
    resetCapabilities(): void;
    get capabilitiesInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _executionRoleName?;
    get executionRoleName(): string;
    set executionRoleName(value: string);
    resetExecutionRoleName(): void;
    get executionRoleNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _permissionModel?;
    get permissionModel(): string;
    set permissionModel(value: string);
    resetPermissionModel(): void;
    get permissionModelInput(): string | undefined;
    get stackSetId(): string;
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
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string | undefined;
    private _templateUrl?;
    get templateUrl(): string;
    set templateUrl(value: string);
    resetTemplateUrl(): void;
    get templateUrlInput(): string | undefined;
    private _autoDeployment;
    get autoDeployment(): CloudformationStackSetAutoDeploymentOutputReference;
    putAutoDeployment(value: CloudformationStackSetAutoDeployment): void;
    resetAutoDeployment(): void;
    get autoDeploymentInput(): CloudformationStackSetAutoDeployment | undefined;
    private _managedExecution;
    get managedExecution(): CloudformationStackSetManagedExecutionOutputReference;
    putManagedExecution(value: CloudformationStackSetManagedExecution): void;
    resetManagedExecution(): void;
    get managedExecutionInput(): CloudformationStackSetManagedExecution | undefined;
    private _operationPreferences;
    get operationPreferences(): CloudformationStackSetOperationPreferencesOutputReference;
    putOperationPreferences(value: CloudformationStackSetOperationPreferences): void;
    resetOperationPreferences(): void;
    get operationPreferencesInput(): CloudformationStackSetOperationPreferences | undefined;
    private _timeouts;
    get timeouts(): CloudformationStackSetTimeoutsOutputReference;
    putTimeouts(value: CloudformationStackSetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudformationStackSetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
