/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmParametersByPathConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_parameters_by_path#id DataAwsSsmParametersByPath#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_parameters_by_path#path DataAwsSsmParametersByPath#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_parameters_by_path#recursive DataAwsSsmParametersByPath#recursive}
    */
    readonly recursive?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_parameters_by_path#with_decryption DataAwsSsmParametersByPath#with_decryption}
    */
    readonly withDecryption?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_parameters_by_path aws_ssm_parameters_by_path}
*/
export declare class DataAwsSsmParametersByPath extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssm_parameters_by_path";
    /**
    * Generates CDKTF code for importing a DataAwsSsmParametersByPath resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsmParametersByPath to import
    * @param importFromId The id of the existing DataAwsSsmParametersByPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_parameters_by_path#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsmParametersByPath to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_parameters_by_path aws_ssm_parameters_by_path} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmParametersByPathConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmParametersByPathConfig);
    get arns(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get names(): string[];
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
    private _recursive?;
    get recursive(): boolean | cdktf.IResolvable;
    set recursive(value: boolean | cdktf.IResolvable);
    resetRecursive(): void;
    get recursiveInput(): boolean | cdktf.IResolvable | undefined;
    get types(): string[];
    get values(): string[];
    private _withDecryption?;
    get withDecryption(): boolean | cdktf.IResolvable;
    set withDecryption(value: boolean | cdktf.IResolvable);
    resetWithDecryption(): void;
    get withDecryptionInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
