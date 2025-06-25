/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsGlueRegistryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/glue_registry#name DataAwsGlueRegistry#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/glue_registry aws_glue_registry}
*/
export declare class DataAwsGlueRegistry extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_glue_registry";
    /**
    * Generates CDKTF code for importing a DataAwsGlueRegistry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsGlueRegistry to import
    * @param importFromId The id of the existing DataAwsGlueRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/glue_registry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsGlueRegistry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/glue_registry aws_glue_registry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueRegistryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsGlueRegistryConfig);
    get arn(): string;
    get description(): string;
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
