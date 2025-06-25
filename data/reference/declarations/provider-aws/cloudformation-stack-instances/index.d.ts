/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationStackInstancesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}
    */
    readonly accounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#call_as CloudformationStackInstances#call_as}
    */
    readonly callAs?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#id CloudformationStackInstances#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#parameter_overrides CloudformationStackInstances#parameter_overrides}
    */
    readonly parameterOverrides?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#regions CloudformationStackInstances#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#retain_stacks CloudformationStackInstances#retain_stacks}
    */
    readonly retainStacks?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#stack_set_name CloudformationStackInstances#stack_set_name}
    */
    readonly stackSetName: string;
    /**
    * deployment_targets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#deployment_targets CloudformationStackInstances#deployment_targets}
    */
    readonly deploymentTargets?: CloudformationStackInstancesDeploymentTargets;
    /**
    * operation_preferences block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#operation_preferences CloudformationStackInstances#operation_preferences}
    */
    readonly operationPreferences?: CloudformationStackInstancesOperationPreferences;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#timeouts CloudformationStackInstances#timeouts}
    */
    readonly timeouts?: CloudformationStackInstancesTimeouts;
}
export interface CloudformationStackInstancesStackInstanceSummaries {
}
export declare function cloudformationStackInstancesStackInstanceSummariesToTerraform(struct?: CloudformationStackInstancesStackInstanceSummaries): any;
export declare function cloudformationStackInstancesStackInstanceSummariesToHclTerraform(struct?: CloudformationStackInstancesStackInstanceSummaries): any;
export declare class CloudformationStackInstancesStackInstanceSummariesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudformationStackInstancesStackInstanceSummaries | undefined;
    set internalValue(value: CloudformationStackInstancesStackInstanceSummaries | undefined);
    get accountId(): string;
    get detailedStatus(): string;
    get driftStatus(): string;
    get organizationalUnitId(): string;
    get region(): string;
    get stackId(): string;
    get stackSetId(): string;
    get status(): string;
    get statusReason(): string;
}
export declare class CloudformationStackInstancesStackInstanceSummariesList extends cdktf.ComplexList {
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
    get(index: number): CloudformationStackInstancesStackInstanceSummariesOutputReference;
}
export interface CloudformationStackInstancesDeploymentTargets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#account_filter_type CloudformationStackInstances#account_filter_type}
    */
    readonly accountFilterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}
    */
    readonly accounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#accounts_url CloudformationStackInstances#accounts_url}
    */
    readonly accountsUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#organizational_unit_ids CloudformationStackInstances#organizational_unit_ids}
    */
    readonly organizationalUnitIds?: string[];
}
export declare function cloudformationStackInstancesDeploymentTargetsToTerraform(struct?: CloudformationStackInstancesDeploymentTargetsOutputReference | CloudformationStackInstancesDeploymentTargets): any;
export declare function cloudformationStackInstancesDeploymentTargetsToHclTerraform(struct?: CloudformationStackInstancesDeploymentTargetsOutputReference | CloudformationStackInstancesDeploymentTargets): any;
export declare class CloudformationStackInstancesDeploymentTargetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackInstancesDeploymentTargets | undefined;
    set internalValue(value: CloudformationStackInstancesDeploymentTargets | undefined);
    private _accountFilterType?;
    get accountFilterType(): string;
    set accountFilterType(value: string);
    resetAccountFilterType(): void;
    get accountFilterTypeInput(): string | undefined;
    private _accounts?;
    get accounts(): string[];
    set accounts(value: string[]);
    resetAccounts(): void;
    get accountsInput(): string[] | undefined;
    private _accountsUrl?;
    get accountsUrl(): string;
    set accountsUrl(value: string);
    resetAccountsUrl(): void;
    get accountsUrlInput(): string | undefined;
    private _organizationalUnitIds?;
    get organizationalUnitIds(): string[];
    set organizationalUnitIds(value: string[]);
    resetOrganizationalUnitIds(): void;
    get organizationalUnitIdsInput(): string[] | undefined;
}
export interface CloudformationStackInstancesOperationPreferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#concurrency_mode CloudformationStackInstances#concurrency_mode}
    */
    readonly concurrencyMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#failure_tolerance_count CloudformationStackInstances#failure_tolerance_count}
    */
    readonly failureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#failure_tolerance_percentage CloudformationStackInstances#failure_tolerance_percentage}
    */
    readonly failureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#max_concurrent_count CloudformationStackInstances#max_concurrent_count}
    */
    readonly maxConcurrentCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#max_concurrent_percentage CloudformationStackInstances#max_concurrent_percentage}
    */
    readonly maxConcurrentPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#region_concurrency_type CloudformationStackInstances#region_concurrency_type}
    */
    readonly regionConcurrencyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#region_order CloudformationStackInstances#region_order}
    */
    readonly regionOrder?: string[];
}
export declare function cloudformationStackInstancesOperationPreferencesToTerraform(struct?: CloudformationStackInstancesOperationPreferencesOutputReference | CloudformationStackInstancesOperationPreferences): any;
export declare function cloudformationStackInstancesOperationPreferencesToHclTerraform(struct?: CloudformationStackInstancesOperationPreferencesOutputReference | CloudformationStackInstancesOperationPreferences): any;
export declare class CloudformationStackInstancesOperationPreferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackInstancesOperationPreferences | undefined;
    set internalValue(value: CloudformationStackInstancesOperationPreferences | undefined);
    private _concurrencyMode?;
    get concurrencyMode(): string;
    set concurrencyMode(value: string);
    resetConcurrencyMode(): void;
    get concurrencyModeInput(): string | undefined;
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
export interface CloudformationStackInstancesTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#create CloudformationStackInstances#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#delete CloudformationStackInstances#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#update CloudformationStackInstances#update}
    */
    readonly update?: string;
}
export declare function cloudformationStackInstancesTimeoutsToTerraform(struct?: CloudformationStackInstancesTimeouts | cdktf.IResolvable): any;
export declare function cloudformationStackInstancesTimeoutsToHclTerraform(struct?: CloudformationStackInstancesTimeouts | cdktf.IResolvable): any;
export declare class CloudformationStackInstancesTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackInstancesTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudformationStackInstancesTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances aws_cloudformation_stack_instances}
*/
export declare class CloudformationStackInstances extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudformation_stack_instances";
    /**
    * Generates CDKTF code for importing a CloudformationStackInstances resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudformationStackInstances to import
    * @param importFromId The id of the existing CloudformationStackInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudformationStackInstances to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudformation_stack_instances aws_cloudformation_stack_instances} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackInstancesConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationStackInstancesConfig);
    private _accounts?;
    get accounts(): string[];
    set accounts(value: string[]);
    resetAccounts(): void;
    get accountsInput(): string[] | undefined;
    private _callAs?;
    get callAs(): string;
    set callAs(value: string);
    resetCallAs(): void;
    get callAsInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _parameterOverrides?;
    get parameterOverrides(): {
        [key: string]: string;
    };
    set parameterOverrides(value: {
        [key: string]: string;
    });
    resetParameterOverrides(): void;
    get parameterOverridesInput(): {
        [key: string]: string;
    } | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
    private _retainStacks?;
    get retainStacks(): boolean | cdktf.IResolvable;
    set retainStacks(value: boolean | cdktf.IResolvable);
    resetRetainStacks(): void;
    get retainStacksInput(): boolean | cdktf.IResolvable | undefined;
    private _stackInstanceSummaries;
    get stackInstanceSummaries(): CloudformationStackInstancesStackInstanceSummariesList;
    get stackSetId(): string;
    private _stackSetName?;
    get stackSetName(): string;
    set stackSetName(value: string);
    get stackSetNameInput(): string | undefined;
    private _deploymentTargets;
    get deploymentTargets(): CloudformationStackInstancesDeploymentTargetsOutputReference;
    putDeploymentTargets(value: CloudformationStackInstancesDeploymentTargets): void;
    resetDeploymentTargets(): void;
    get deploymentTargetsInput(): CloudformationStackInstancesDeploymentTargets | undefined;
    private _operationPreferences;
    get operationPreferences(): CloudformationStackInstancesOperationPreferencesOutputReference;
    putOperationPreferences(value: CloudformationStackInstancesOperationPreferences): void;
    resetOperationPreferences(): void;
    get operationPreferencesInput(): CloudformationStackInstancesOperationPreferences | undefined;
    private _timeouts;
    get timeouts(): CloudformationStackInstancesTimeoutsOutputReference;
    putTimeouts(value: CloudformationStackInstancesTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudformationStackInstancesTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
