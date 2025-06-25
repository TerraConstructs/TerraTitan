/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRdsClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/rds_cluster_parameter_group#name DataAwsRdsClusterParameterGroup#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/rds_cluster_parameter_group aws_rds_cluster_parameter_group}
*/
export declare class DataAwsRdsClusterParameterGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_rds_cluster_parameter_group";
    /**
    * Generates CDKTF code for importing a DataAwsRdsClusterParameterGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRdsClusterParameterGroup to import
    * @param importFromId The id of the existing DataAwsRdsClusterParameterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/rds_cluster_parameter_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRdsClusterParameterGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/rds_cluster_parameter_group aws_rds_cluster_parameter_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsClusterParameterGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRdsClusterParameterGroupConfig);
    get arn(): string;
    get description(): string;
    get family(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
