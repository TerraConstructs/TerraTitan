/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayModelConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Content type of the model */
    readonly contentType: string;
    /** (Optional) Description of the model */
    readonly description?: string;
    /** */
    readonly id?: string;
    /** (Required) Name of the model */
    readonly name: string;
    /** (Required) ID of the associated REST API */
    readonly restApiId: string;
    /** (Required) Schema of the model in a JSON form */
    readonly schema?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_model aws_api_gateway_model}
*/
export declare class ApiGatewayModel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_model";
    /**
    * Generates CDKTF code for importing a ApiGatewayModel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayModel to import
    * @param importFromId The id of the existing ApiGatewayModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayModel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_model aws_api_gateway_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayModelConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayModelConfig);
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
