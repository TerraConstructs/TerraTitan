/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneEnvironmentBlueprintConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_blueprint_configuration#domain_id DatazoneEnvironmentBlueprintConfiguration#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}
    */
    readonly enabledRegions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_id DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_id}
    */
    readonly environmentBlueprintId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}
    */
    readonly manageAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}
    */
    readonly provisioningRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}
    */
    readonly regionalParameters?: {
        [key: string]: {
            [key: string]: string;
        };
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_blueprint_configuration aws_datazone_environment_blueprint_configuration}
*/
export declare class DatazoneEnvironmentBlueprintConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_environment_blueprint_configuration";
    /**
    * Generates CDKTF code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneEnvironmentBlueprintConfiguration to import
    * @param importFromId The id of the existing DatazoneEnvironmentBlueprintConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneEnvironmentBlueprintConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_environment_blueprint_configuration aws_datazone_environment_blueprint_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneEnvironmentBlueprintConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneEnvironmentBlueprintConfigurationConfig);
    private _domainId?;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string | undefined;
    private _enabledRegions?;
    get enabledRegions(): string[];
    set enabledRegions(value: string[]);
    get enabledRegionsInput(): string[] | undefined;
    private _environmentBlueprintId?;
    get environmentBlueprintId(): string;
    set environmentBlueprintId(value: string);
    get environmentBlueprintIdInput(): string | undefined;
    private _manageAccessRoleArn?;
    get manageAccessRoleArn(): string;
    set manageAccessRoleArn(value: string);
    resetManageAccessRoleArn(): void;
    get manageAccessRoleArnInput(): string | undefined;
    private _provisioningRoleArn?;
    get provisioningRoleArn(): string;
    set provisioningRoleArn(value: string);
    resetProvisioningRoleArn(): void;
    get provisioningRoleArnInput(): string | undefined;
    private _regionalParameters?;
    get regionalParameters(): {
        [key: string]: {
            [key: string]: string;
        };
    } | cdktf.IResolvable;
    set regionalParameters(value: {
        [key: string]: {
            [key: string]: string;
        };
    } | cdktf.IResolvable);
    resetRegionalParameters(): void;
    get regionalParametersInput(): cdktf.IResolvable | {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
