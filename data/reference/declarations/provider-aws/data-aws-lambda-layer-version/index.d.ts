/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLambdaLayerVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}
    */
    readonly compatibleArchitecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}
    */
    readonly compatibleRuntime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_layer_version#id DataAwsLambdaLayerVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}
    */
    readonly layerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_layer_version#version DataAwsLambdaLayerVersion#version}
    */
    readonly version?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_layer_version aws_lambda_layer_version}
*/
export declare class DataAwsLambdaLayerVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lambda_layer_version";
    /**
    * Generates CDKTF code for importing a DataAwsLambdaLayerVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLambdaLayerVersion to import
    * @param importFromId The id of the existing DataAwsLambdaLayerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_layer_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLambdaLayerVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_layer_version aws_lambda_layer_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaLayerVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLambdaLayerVersionConfig);
    get arn(): string;
    get codeSha256(): string;
    private _compatibleArchitecture?;
    get compatibleArchitecture(): string;
    set compatibleArchitecture(value: string);
    resetCompatibleArchitecture(): void;
    get compatibleArchitectureInput(): string | undefined;
    get compatibleArchitectures(): string[];
    private _compatibleRuntime?;
    get compatibleRuntime(): string;
    set compatibleRuntime(value: string);
    resetCompatibleRuntime(): void;
    get compatibleRuntimeInput(): string | undefined;
    get compatibleRuntimes(): string[];
    get createdDate(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get layerArn(): string;
    private _layerName?;
    get layerName(): string;
    set layerName(value: string);
    get layerNameInput(): string | undefined;
    get licenseInfo(): string;
    get signingJobArn(): string;
    get signingProfileVersionArn(): string;
    get sourceCodeHash(): string;
    get sourceCodeSize(): number;
    private _version?;
    get version(): number;
    set version(value: number);
    resetVersion(): void;
    get versionInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
