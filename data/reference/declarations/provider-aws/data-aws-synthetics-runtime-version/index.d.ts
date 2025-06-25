/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSyntheticsRuntimeVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_version#latest DataAwsSyntheticsRuntimeVersion#latest}
    */
    readonly latest?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_version#prefix DataAwsSyntheticsRuntimeVersion#prefix}
    */
    readonly prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_version#version DataAwsSyntheticsRuntimeVersion#version}
    */
    readonly version?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_version aws_synthetics_runtime_version}
*/
export declare class DataAwsSyntheticsRuntimeVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_synthetics_runtime_version";
    /**
    * Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSyntheticsRuntimeVersion to import
    * @param importFromId The id of the existing DataAwsSyntheticsRuntimeVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSyntheticsRuntimeVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_version aws_synthetics_runtime_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSyntheticsRuntimeVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSyntheticsRuntimeVersionConfig);
    get deprecationDate(): string;
    get description(): string;
    get id(): string;
    private _latest?;
    get latest(): boolean | cdktf.IResolvable;
    set latest(value: boolean | cdktf.IResolvable);
    resetLatest(): void;
    get latestInput(): boolean | cdktf.IResolvable | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string | undefined;
    get releaseDate(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    get versionName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
