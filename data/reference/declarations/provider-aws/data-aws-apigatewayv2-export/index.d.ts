/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApigatewayv2ExportConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}
    */
    readonly exportVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export#id DataAwsApigatewayv2Export#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}
    */
    readonly includeExtensions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}
    */
    readonly outputType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}
    */
    readonly specification: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}
    */
    readonly stageName?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export aws_apigatewayv2_export}
*/
export declare class DataAwsApigatewayv2Export extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_apigatewayv2_export";
    /**
    * Generates CDKTF code for importing a DataAwsApigatewayv2Export resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApigatewayv2Export to import
    * @param importFromId The id of the existing DataAwsApigatewayv2Export that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApigatewayv2Export to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_export aws_apigatewayv2_export} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApigatewayv2ExportConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsApigatewayv2ExportConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    get body(): string;
    private _exportVersion?;
    get exportVersion(): string;
    set exportVersion(value: string);
    resetExportVersion(): void;
    get exportVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _includeExtensions?;
    get includeExtensions(): boolean | cdktf.IResolvable;
    set includeExtensions(value: boolean | cdktf.IResolvable);
    resetIncludeExtensions(): void;
    get includeExtensionsInput(): boolean | cdktf.IResolvable | undefined;
    private _outputType?;
    get outputType(): string;
    set outputType(value: string);
    get outputTypeInput(): string | undefined;
    private _specification?;
    get specification(): string;
    set specification(value: string);
    get specificationInput(): string | undefined;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    resetStageName(): void;
    get stageNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
