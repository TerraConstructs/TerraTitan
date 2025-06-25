/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmquicksetupConfigurationManagerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * configuration_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#configuration_definition SsmquicksetupConfigurationManager#configuration_definition}
    */
    readonly configurationDefinition?: SsmquicksetupConfigurationManagerConfigurationDefinition[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#timeouts SsmquicksetupConfigurationManager#timeouts}
    */
    readonly timeouts?: SsmquicksetupConfigurationManagerTimeouts;
}
export interface SsmquicksetupConfigurationManagerStatusSummaries {
}
export declare function ssmquicksetupConfigurationManagerStatusSummariesToTerraform(struct?: SsmquicksetupConfigurationManagerStatusSummaries): any;
export declare function ssmquicksetupConfigurationManagerStatusSummariesToHclTerraform(struct?: SsmquicksetupConfigurationManagerStatusSummaries): any;
export declare class SsmquicksetupConfigurationManagerStatusSummariesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmquicksetupConfigurationManagerStatusSummaries | undefined;
    set internalValue(value: SsmquicksetupConfigurationManagerStatusSummaries | undefined);
    get status(): string;
    get statusMessage(): string;
    get statusType(): string;
}
export declare class SsmquicksetupConfigurationManagerStatusSummariesList extends cdktf.ComplexList {
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
    get(index: number): SsmquicksetupConfigurationManagerStatusSummariesOutputReference;
}
export interface SsmquicksetupConfigurationManagerConfigurationDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}
    */
    readonly localDeploymentAdministrationRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}
    */
    readonly localDeploymentExecutionRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}
    */
    readonly parameters: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}
    */
    readonly typeVersion?: string;
}
export declare function ssmquicksetupConfigurationManagerConfigurationDefinitionToTerraform(struct?: SsmquicksetupConfigurationManagerConfigurationDefinition | cdktf.IResolvable): any;
export declare function ssmquicksetupConfigurationManagerConfigurationDefinitionToHclTerraform(struct?: SsmquicksetupConfigurationManagerConfigurationDefinition | cdktf.IResolvable): any;
export declare class SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmquicksetupConfigurationManagerConfigurationDefinition | cdktf.IResolvable | undefined;
    set internalValue(value: SsmquicksetupConfigurationManagerConfigurationDefinition | cdktf.IResolvable | undefined);
    get id(): string;
    private _localDeploymentAdministrationRoleArn?;
    get localDeploymentAdministrationRoleArn(): string;
    set localDeploymentAdministrationRoleArn(value: string);
    resetLocalDeploymentAdministrationRoleArn(): void;
    get localDeploymentAdministrationRoleArnInput(): string | undefined;
    private _localDeploymentExecutionRoleName?;
    get localDeploymentExecutionRoleName(): string;
    set localDeploymentExecutionRoleName(value: string);
    resetLocalDeploymentExecutionRoleName(): void;
    get localDeploymentExecutionRoleNameInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _typeVersion?;
    get typeVersion(): string;
    set typeVersion(value: string);
    resetTypeVersion(): void;
    get typeVersionInput(): string | undefined;
}
export declare class SsmquicksetupConfigurationManagerConfigurationDefinitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmquicksetupConfigurationManagerConfigurationDefinition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmquicksetupConfigurationManagerConfigurationDefinitionOutputReference;
}
export interface SsmquicksetupConfigurationManagerTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#create SsmquicksetupConfigurationManager#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#delete SsmquicksetupConfigurationManager#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#update SsmquicksetupConfigurationManager#update}
    */
    readonly update?: string;
}
export declare function ssmquicksetupConfigurationManagerTimeoutsToTerraform(struct?: SsmquicksetupConfigurationManagerTimeouts | cdktf.IResolvable): any;
export declare function ssmquicksetupConfigurationManagerTimeoutsToHclTerraform(struct?: SsmquicksetupConfigurationManagerTimeouts | cdktf.IResolvable): any;
export declare class SsmquicksetupConfigurationManagerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmquicksetupConfigurationManagerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SsmquicksetupConfigurationManagerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager aws_ssmquicksetup_configuration_manager}
*/
export declare class SsmquicksetupConfigurationManager extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssmquicksetup_configuration_manager";
    /**
    * Generates CDKTF code for importing a SsmquicksetupConfigurationManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmquicksetupConfigurationManager to import
    * @param importFromId The id of the existing SsmquicksetupConfigurationManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmquicksetupConfigurationManager to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ssmquicksetup_configuration_manager aws_ssmquicksetup_configuration_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmquicksetupConfigurationManagerConfig
    */
    constructor(scope: Construct, id: string, config: SsmquicksetupConfigurationManagerConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get managerArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _statusSummaries;
    get statusSummaries(): SsmquicksetupConfigurationManagerStatusSummariesList;
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
    private _configurationDefinition;
    get configurationDefinition(): SsmquicksetupConfigurationManagerConfigurationDefinitionList;
    putConfigurationDefinition(value: SsmquicksetupConfigurationManagerConfigurationDefinition[] | cdktf.IResolvable): void;
    resetConfigurationDefinition(): void;
    get configurationDefinitionInput(): cdktf.IResolvable | SsmquicksetupConfigurationManagerConfigurationDefinition[] | undefined;
    private _timeouts;
    get timeouts(): SsmquicksetupConfigurationManagerTimeoutsOutputReference;
    putTimeouts(value: SsmquicksetupConfigurationManagerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SsmquicksetupConfigurationManagerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
