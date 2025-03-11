/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsTimestreamwriteDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/timestreamwrite_database#name DataAwsTimestreamwriteDatabase#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/timestreamwrite_database aws_timestreamwrite_database}
*/
export declare class DataAwsTimestreamwriteDatabase extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_timestreamwrite_database";
    /**
    * Generates CDKTF code for importing a DataAwsTimestreamwriteDatabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsTimestreamwriteDatabase to import
    * @param importFromId The id of the existing DataAwsTimestreamwriteDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/timestreamwrite_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsTimestreamwriteDatabase to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/timestreamwrite_database aws_timestreamwrite_database} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsTimestreamwriteDatabaseConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsTimestreamwriteDatabaseConfig);
    get arn(): string;
    get createdTime(): string;
    get kmsKeyId(): string;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get tableCount(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
