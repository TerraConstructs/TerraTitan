/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneEnvironmentProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}
    */
    readonly awsAccountRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}
    */
    readonly environmentBlueprintIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}
    */
    readonly projectIdentifier: string;
    /**
    * user_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#user_parameters DatazoneEnvironmentProfile#user_parameters}
    */
    readonly userParameters?: DatazoneEnvironmentProfileUserParameters[] | cdktf.IResolvable;
}
export interface DatazoneEnvironmentProfileUserParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#value DatazoneEnvironmentProfile#value}
    */
    readonly value?: string;
}
export declare function datazoneEnvironmentProfileUserParametersToTerraform(struct?: DatazoneEnvironmentProfileUserParameters | cdktf.IResolvable): any;
export declare function datazoneEnvironmentProfileUserParametersToHclTerraform(struct?: DatazoneEnvironmentProfileUserParameters | cdktf.IResolvable): any;
export declare class DatazoneEnvironmentProfileUserParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneEnvironmentProfileUserParameters | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneEnvironmentProfileUserParameters | cdktf.IResolvable | undefined);
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
export declare class DatazoneEnvironmentProfileUserParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatazoneEnvironmentProfileUserParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneEnvironmentProfileUserParametersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile aws_datazone_environment_profile}
*/
export declare class DatazoneEnvironmentProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_environment_profile";
    /**
    * Generates CDKTF code for importing a DatazoneEnvironmentProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneEnvironmentProfile to import
    * @param importFromId The id of the existing DatazoneEnvironmentProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneEnvironmentProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_profile aws_datazone_environment_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneEnvironmentProfileConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneEnvironmentProfileConfig);
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _awsAccountRegion?;
    get awsAccountRegion(): string;
    set awsAccountRegion(value: string);
    get awsAccountRegionInput(): string | undefined;
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
    private _environmentBlueprintIdentifier?;
    get environmentBlueprintIdentifier(): string;
    set environmentBlueprintIdentifier(value: string);
    get environmentBlueprintIdentifierInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _projectIdentifier?;
    get projectIdentifier(): string;
    set projectIdentifier(value: string);
    get projectIdentifierInput(): string | undefined;
    get updatedAt(): string;
    private _userParameters;
    get userParameters(): DatazoneEnvironmentProfileUserParametersList;
    putUserParameters(value: DatazoneEnvironmentProfileUserParameters[] | cdktf.IResolvable): void;
    resetUserParameters(): void;
    get userParametersInput(): cdktf.IResolvable | DatazoneEnvironmentProfileUserParameters[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
