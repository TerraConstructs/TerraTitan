/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDatazoneEnvironmentBlueprintConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/datazone_environment_blueprint#domain_id DataAwsDatazoneEnvironmentBlueprint#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/datazone_environment_blueprint#managed DataAwsDatazoneEnvironmentBlueprint#managed}
    */
    readonly managed: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/datazone_environment_blueprint#name DataAwsDatazoneEnvironmentBlueprint#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/datazone_environment_blueprint aws_datazone_environment_blueprint}
*/
export declare class DataAwsDatazoneEnvironmentBlueprint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_datazone_environment_blueprint";
    /**
    * Generates CDKTF code for importing a DataAwsDatazoneEnvironmentBlueprint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDatazoneEnvironmentBlueprint to import
    * @param importFromId The id of the existing DataAwsDatazoneEnvironmentBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/datazone_environment_blueprint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDatazoneEnvironmentBlueprint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/datazone_environment_blueprint aws_datazone_environment_blueprint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDatazoneEnvironmentBlueprintConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDatazoneEnvironmentBlueprintConfig);
    get blueprintProvider(): string;
    get description(): string;
    private _domainId?;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string | undefined;
    get id(): string;
    private _managed?;
    get managed(): boolean | cdktf.IResolvable;
    set managed(value: boolean | cdktf.IResolvable);
    get managedInput(): boolean | cdktf.IResolvable | undefined;
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
