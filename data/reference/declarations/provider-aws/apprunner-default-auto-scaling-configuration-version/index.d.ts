/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApprunnerDefaultAutoScalingConfigurationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_default_auto_scaling_configuration_version#auto_scaling_configuration_arn ApprunnerDefaultAutoScalingConfigurationVersion#auto_scaling_configuration_arn}
    */
    readonly autoScalingConfigurationArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_default_auto_scaling_configuration_version aws_apprunner_default_auto_scaling_configuration_version}
*/
export declare class ApprunnerDefaultAutoScalingConfigurationVersion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apprunner_default_auto_scaling_configuration_version";
    /**
    * Generates CDKTF code for importing a ApprunnerDefaultAutoScalingConfigurationVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApprunnerDefaultAutoScalingConfigurationVersion to import
    * @param importFromId The id of the existing ApprunnerDefaultAutoScalingConfigurationVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_default_auto_scaling_configuration_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApprunnerDefaultAutoScalingConfigurationVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_default_auto_scaling_configuration_version aws_apprunner_default_auto_scaling_configuration_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerDefaultAutoScalingConfigurationVersionConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerDefaultAutoScalingConfigurationVersionConfig);
    private _autoScalingConfigurationArn?;
    get autoScalingConfigurationArn(): string;
    set autoScalingConfigurationArn(value: string);
    get autoScalingConfigurationArnInput(): string | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
