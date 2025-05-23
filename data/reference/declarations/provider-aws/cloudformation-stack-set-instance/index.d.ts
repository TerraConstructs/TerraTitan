/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationStackSetInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#account_id CloudformationStackSetInstance#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#call_as CloudformationStackSetInstance#call_as}
    */
    readonly callAs?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#id CloudformationStackSetInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#parameter_overrides CloudformationStackSetInstance#parameter_overrides}
    */
    readonly parameterOverrides?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#region CloudformationStackSetInstance#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#retain_stack CloudformationStackSetInstance#retain_stack}
    */
    readonly retainStack?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#stack_set_name CloudformationStackSetInstance#stack_set_name}
    */
    readonly stackSetName: string;
    /**
    * deployment_targets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#deployment_targets CloudformationStackSetInstance#deployment_targets}
    */
    readonly deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets;
    /**
    * operation_preferences block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#operation_preferences CloudformationStackSetInstance#operation_preferences}
    */
    readonly operationPreferences?: CloudformationStackSetInstanceOperationPreferences;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#timeouts CloudformationStackSetInstance#timeouts}
    */
    readonly timeouts?: CloudformationStackSetInstanceTimeouts;
}
export interface CloudformationStackSetInstanceStackInstanceSummaries {
}
export declare function cloudformationStackSetInstanceStackInstanceSummariesToTerraform(struct?: CloudformationStackSetInstanceStackInstanceSummaries): any;
export declare function cloudformationStackSetInstanceStackInstanceSummariesToHclTerraform(struct?: CloudformationStackSetInstanceStackInstanceSummaries): any;
export declare class CloudformationStackSetInstanceStackInstanceSummariesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudformationStackSetInstanceStackInstanceSummaries | undefined;
    set internalValue(value: CloudformationStackSetInstanceStackInstanceSummaries | undefined);
    get accountId(): string;
    get organizationalUnitId(): string;
    get stackId(): string;
}
export declare class CloudformationStackSetInstanceStackInstanceSummariesList extends cdktf.ComplexList {
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
    get(index: number): CloudformationStackSetInstanceStackInstanceSummariesOutputReference;
}
export interface CloudformationStackSetInstanceDeploymentTargets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#account_filter_type CloudformationStackSetInstance#account_filter_type}
    */
    readonly accountFilterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#accounts CloudformationStackSetInstance#accounts}
    */
    readonly accounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#accounts_url CloudformationStackSetInstance#accounts_url}
    */
    readonly accountsUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}
    */
    readonly organizationalUnitIds?: string[];
}
export declare function cloudformationStackSetInstanceDeploymentTargetsToTerraform(struct?: CloudformationStackSetInstanceDeploymentTargetsOutputReference | CloudformationStackSetInstanceDeploymentTargets): any;
export declare function cloudformationStackSetInstanceDeploymentTargetsToHclTerraform(struct?: CloudformationStackSetInstanceDeploymentTargetsOutputReference | CloudformationStackSetInstanceDeploymentTargets): any;
export declare class CloudformationStackSetInstanceDeploymentTargetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackSetInstanceDeploymentTargets | undefined;
    set internalValue(value: CloudformationStackSetInstanceDeploymentTargets | undefined);
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
export interface CloudformationStackSetInstanceOperationPreferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#concurrency_mode CloudformationStackSetInstance#concurrency_mode}
    */
    readonly concurrencyMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#failure_tolerance_count CloudformationStackSetInstance#failure_tolerance_count}
    */
    readonly failureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#failure_tolerance_percentage CloudformationStackSetInstance#failure_tolerance_percentage}
    */
    readonly failureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#max_concurrent_count CloudformationStackSetInstance#max_concurrent_count}
    */
    readonly maxConcurrentCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#max_concurrent_percentage CloudformationStackSetInstance#max_concurrent_percentage}
    */
    readonly maxConcurrentPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#region_concurrency_type CloudformationStackSetInstance#region_concurrency_type}
    */
    readonly regionConcurrencyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#region_order CloudformationStackSetInstance#region_order}
    */
    readonly regionOrder?: string[];
}
export declare function cloudformationStackSetInstanceOperationPreferencesToTerraform(struct?: CloudformationStackSetInstanceOperationPreferencesOutputReference | CloudformationStackSetInstanceOperationPreferences): any;
export declare function cloudformationStackSetInstanceOperationPreferencesToHclTerraform(struct?: CloudformationStackSetInstanceOperationPreferencesOutputReference | CloudformationStackSetInstanceOperationPreferences): any;
export declare class CloudformationStackSetInstanceOperationPreferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackSetInstanceOperationPreferences | undefined;
    set internalValue(value: CloudformationStackSetInstanceOperationPreferences | undefined);
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
export interface CloudformationStackSetInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#create CloudformationStackSetInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#delete CloudformationStackSetInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#update CloudformationStackSetInstance#update}
    */
    readonly update?: string;
}
export declare function cloudformationStackSetInstanceTimeoutsToTerraform(struct?: CloudformationStackSetInstanceTimeouts | cdktf.IResolvable): any;
export declare function cloudformationStackSetInstanceTimeoutsToHclTerraform(struct?: CloudformationStackSetInstanceTimeouts | cdktf.IResolvable): any;
export declare class CloudformationStackSetInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationStackSetInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudformationStackSetInstanceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance aws_cloudformation_stack_set_instance}
*/
export declare class CloudformationStackSetInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudformation_stack_set_instance";
    /**
    * Generates CDKTF code for importing a CloudformationStackSetInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudformationStackSetInstance to import
    * @param importFromId The id of the existing CloudformationStackSetInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudformationStackSetInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_stack_set_instance aws_cloudformation_stack_set_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetInstanceConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
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
    get organizationalUnitId(): string;
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
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _retainStack?;
    get retainStack(): boolean | cdktf.IResolvable;
    set retainStack(value: boolean | cdktf.IResolvable);
    resetRetainStack(): void;
    get retainStackInput(): boolean | cdktf.IResolvable | undefined;
    get stackId(): string;
    private _stackInstanceSummaries;
    get stackInstanceSummaries(): CloudformationStackSetInstanceStackInstanceSummariesList;
    private _stackSetName?;
    get stackSetName(): string;
    set stackSetName(value: string);
    get stackSetNameInput(): string | undefined;
    private _deploymentTargets;
    get deploymentTargets(): CloudformationStackSetInstanceDeploymentTargetsOutputReference;
    putDeploymentTargets(value: CloudformationStackSetInstanceDeploymentTargets): void;
    resetDeploymentTargets(): void;
    get deploymentTargetsInput(): CloudformationStackSetInstanceDeploymentTargets | undefined;
    private _operationPreferences;
    get operationPreferences(): CloudformationStackSetInstanceOperationPreferencesOutputReference;
    putOperationPreferences(value: CloudformationStackSetInstanceOperationPreferences): void;
    resetOperationPreferences(): void;
    get operationPreferencesInput(): CloudformationStackSetInstanceOperationPreferences | undefined;
    private _timeouts;
    get timeouts(): CloudformationStackSetInstanceTimeoutsOutputReference;
    putTimeouts(value: CloudformationStackSetInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudformationStackSetInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
