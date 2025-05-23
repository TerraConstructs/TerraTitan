/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApiGatewayExportConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_export#accepts DataAwsApiGatewayExport#accepts}
    */
    readonly accepts?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_export#export_type DataAwsApiGatewayExport#export_type}
    */
    readonly exportType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_export#id DataAwsApiGatewayExport#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_export#parameters DataAwsApiGatewayExport#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_export#rest_api_id DataAwsApiGatewayExport#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_export#stage_name DataAwsApiGatewayExport#stage_name}
    */
    readonly stageName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_export aws_api_gateway_export}
*/
export declare class DataAwsApiGatewayExport extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_api_gateway_export";
    /**
    * Generates CDKTF code for importing a DataAwsApiGatewayExport resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApiGatewayExport to import
    * @param importFromId The id of the existing DataAwsApiGatewayExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_export#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApiGatewayExport to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_export aws_api_gateway_export} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayExportConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsApiGatewayExportConfig);
    private _accepts?;
    get accepts(): string;
    set accepts(value: string);
    resetAccepts(): void;
    get acceptsInput(): string | undefined;
    get body(): string;
    get contentDisposition(): string;
    get contentType(): string;
    private _exportType?;
    get exportType(): string;
    set exportType(value: string);
    get exportTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    get stageNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
