/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigRetentionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_retention_configuration#retention_period_in_days ConfigRetentionConfiguration#retention_period_in_days}
    */
    readonly retentionPeriodInDays: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_retention_configuration aws_config_retention_configuration}
*/
export declare class ConfigRetentionConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_retention_configuration";
    /**
    * Generates CDKTF code for importing a ConfigRetentionConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigRetentionConfiguration to import
    * @param importFromId The id of the existing ConfigRetentionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_retention_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigRetentionConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_retention_configuration aws_config_retention_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigRetentionConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ConfigRetentionConfigurationConfig);
    get id(): string;
    get name(): string;
    private _retentionPeriodInDays?;
    get retentionPeriodInDays(): number;
    set retentionPeriodInDays(value: number);
    get retentionPeriodInDaysInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
