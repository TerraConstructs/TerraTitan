/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#account_identifier DatazoneEnvironment#account_identifier}
    */
    readonly accountIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#account_region DatazoneEnvironment#account_region}
    */
    readonly accountRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#blueprint_identifier DatazoneEnvironment#blueprint_identifier}
    */
    readonly blueprintIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#description DatazoneEnvironment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}
    */
    readonly glossaryTerms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#profile_identifier DatazoneEnvironment#profile_identifier}
    */
    readonly profileIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}
    */
    readonly projectIdentifier: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#timeouts DatazoneEnvironment#timeouts}
    */
    readonly timeouts?: DatazoneEnvironmentTimeouts;
    /**
    * user_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#user_parameters DatazoneEnvironment#user_parameters}
    */
    readonly userParameters?: DatazoneEnvironmentUserParameters[] | cdktf.IResolvable;
}
export interface DatazoneEnvironmentLastDeploymentFailureReasons {
}
export declare function datazoneEnvironmentLastDeploymentFailureReasonsToTerraform(struct?: DatazoneEnvironmentLastDeploymentFailureReasons): any;
export declare function datazoneEnvironmentLastDeploymentFailureReasonsToHclTerraform(struct?: DatazoneEnvironmentLastDeploymentFailureReasons): any;
export declare class DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneEnvironmentLastDeploymentFailureReasons | undefined;
    set internalValue(value: DatazoneEnvironmentLastDeploymentFailureReasons | undefined);
    get code(): string;
    get message(): string;
}
export declare class DatazoneEnvironmentLastDeploymentFailureReasonsList extends cdktf.ComplexList {
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
    get(index: number): DatazoneEnvironmentLastDeploymentFailureReasonsOutputReference;
}
export interface DatazoneEnvironmentLastDeployment {
}
export declare function datazoneEnvironmentLastDeploymentToTerraform(struct?: DatazoneEnvironmentLastDeployment): any;
export declare function datazoneEnvironmentLastDeploymentToHclTerraform(struct?: DatazoneEnvironmentLastDeployment): any;
export declare class DatazoneEnvironmentLastDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneEnvironmentLastDeployment | undefined;
    set internalValue(value: DatazoneEnvironmentLastDeployment | undefined);
    get deploymentId(): string;
    get deploymentStatus(): string;
    get deploymentType(): string;
    private _failureReasons;
    get failureReasons(): DatazoneEnvironmentLastDeploymentFailureReasonsList;
    get isDeploymentComplete(): cdktf.IResolvable;
    get messages(): string[];
}
export declare class DatazoneEnvironmentLastDeploymentList extends cdktf.ComplexList {
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
    get(index: number): DatazoneEnvironmentLastDeploymentOutputReference;
}
export interface DatazoneEnvironmentProvisionedResources {
}
export declare function datazoneEnvironmentProvisionedResourcesToTerraform(struct?: DatazoneEnvironmentProvisionedResources): any;
export declare function datazoneEnvironmentProvisionedResourcesToHclTerraform(struct?: DatazoneEnvironmentProvisionedResources): any;
export declare class DatazoneEnvironmentProvisionedResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneEnvironmentProvisionedResources | undefined;
    set internalValue(value: DatazoneEnvironmentProvisionedResources | undefined);
    get name(): string;
    get provider(): string;
    get type(): string;
    get value(): string;
}
export declare class DatazoneEnvironmentProvisionedResourcesList extends cdktf.ComplexList {
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
    get(index: number): DatazoneEnvironmentProvisionedResourcesOutputReference;
}
export interface DatazoneEnvironmentTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#create DatazoneEnvironment#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#delete DatazoneEnvironment#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#update DatazoneEnvironment#update}
    */
    readonly update?: string;
}
export declare function datazoneEnvironmentTimeoutsToTerraform(struct?: DatazoneEnvironmentTimeouts | cdktf.IResolvable): any;
export declare function datazoneEnvironmentTimeoutsToHclTerraform(struct?: DatazoneEnvironmentTimeouts | cdktf.IResolvable): any;
export declare class DatazoneEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatazoneEnvironmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneEnvironmentTimeouts | cdktf.IResolvable | undefined);
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
export interface DatazoneEnvironmentUserParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#value DatazoneEnvironment#value}
    */
    readonly value?: string;
}
export declare function datazoneEnvironmentUserParametersToTerraform(struct?: DatazoneEnvironmentUserParameters | cdktf.IResolvable): any;
export declare function datazoneEnvironmentUserParametersToHclTerraform(struct?: DatazoneEnvironmentUserParameters | cdktf.IResolvable): any;
export declare class DatazoneEnvironmentUserParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneEnvironmentUserParameters | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneEnvironmentUserParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class DatazoneEnvironmentUserParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatazoneEnvironmentUserParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneEnvironmentUserParametersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment aws_datazone_environment}
*/
export declare class DatazoneEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_environment";
    /**
    * Generates CDKTF code for importing a DatazoneEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneEnvironment to import
    * @param importFromId The id of the existing DatazoneEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment aws_datazone_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneEnvironmentConfig);
    private _accountIdentifier?;
    get accountIdentifier(): string;
    set accountIdentifier(value: string);
    resetAccountIdentifier(): void;
    get accountIdentifierInput(): string | undefined;
    private _accountRegion?;
    get accountRegion(): string;
    set accountRegion(value: string);
    resetAccountRegion(): void;
    get accountRegionInput(): string | undefined;
    private _blueprintIdentifier?;
    get blueprintIdentifier(): string;
    set blueprintIdentifier(value: string);
    resetBlueprintIdentifier(): void;
    get blueprintIdentifierInput(): string | undefined;
    get createdAt(): string;
    get createdBy(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _domainIdentifier?;
    get domainIdentifier(): string;
    set domainIdentifier(value: string);
    get domainIdentifierInput(): string | undefined;
    private _glossaryTerms?;
    get glossaryTerms(): string[];
    set glossaryTerms(value: string[]);
    resetGlossaryTerms(): void;
    get glossaryTermsInput(): string[] | undefined;
    get id(): string;
    private _lastDeployment;
    get lastDeployment(): DatazoneEnvironmentLastDeploymentList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _profileIdentifier?;
    get profileIdentifier(): string;
    set profileIdentifier(value: string);
    get profileIdentifierInput(): string | undefined;
    private _projectIdentifier?;
    get projectIdentifier(): string;
    set projectIdentifier(value: string);
    get projectIdentifierInput(): string | undefined;
    get providerEnvironment(): string;
    private _provisionedResources;
    get provisionedResources(): DatazoneEnvironmentProvisionedResourcesList;
    private _timeouts;
    get timeouts(): DatazoneEnvironmentTimeoutsOutputReference;
    putTimeouts(value: DatazoneEnvironmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DatazoneEnvironmentTimeouts | undefined;
    private _userParameters;
    get userParameters(): DatazoneEnvironmentUserParametersList;
    putUserParameters(value: DatazoneEnvironmentUserParameters[] | cdktf.IResolvable): void;
    resetUserParameters(): void;
    get userParametersInput(): cdktf.IResolvable | DatazoneEnvironmentUserParameters[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
