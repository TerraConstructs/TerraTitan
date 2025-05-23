/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDocdbEngineVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_engine_version#engine DataAwsDocdbEngineVersion#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_engine_version#id DataAwsDocdbEngineVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_engine_version#parameter_group_family DataAwsDocdbEngineVersion#parameter_group_family}
    */
    readonly parameterGroupFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_engine_version#preferred_versions DataAwsDocdbEngineVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_engine_version#version DataAwsDocdbEngineVersion#version}
    */
    readonly version?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_engine_version aws_docdb_engine_version}
*/
export declare class DataAwsDocdbEngineVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_docdb_engine_version";
    /**
    * Generates CDKTF code for importing a DataAwsDocdbEngineVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDocdbEngineVersion to import
    * @param importFromId The id of the existing DataAwsDocdbEngineVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_engine_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDocdbEngineVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/docdb_engine_version aws_docdb_engine_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDocdbEngineVersionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsDocdbEngineVersionConfig);
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    get engineDescription(): string;
    get exportableLogTypes(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _parameterGroupFamily?;
    get parameterGroupFamily(): string;
    set parameterGroupFamily(value: string);
    resetParameterGroupFamily(): void;
    get parameterGroupFamilyInput(): string | undefined;
    private _preferredVersions?;
    get preferredVersions(): string[];
    set preferredVersions(value: string[]);
    resetPreferredVersions(): void;
    get preferredVersionsInput(): string[] | undefined;
    get supportsLogExportsToCloudwatch(): cdktf.IResolvable;
    get validUpgradeTargets(): string[];
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    get versionDescription(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
