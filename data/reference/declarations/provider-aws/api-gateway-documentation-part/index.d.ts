/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDocumentationPartConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}
    */
    readonly properties: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#location ApiGatewayDocumentationPart#location}
    */
    readonly location: ApiGatewayDocumentationPartLocation;
}
export interface ApiGatewayDocumentationPartLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}
    */
    readonly statusCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}
    */
    readonly type: string;
}
export declare function apiGatewayDocumentationPartLocationToTerraform(struct?: ApiGatewayDocumentationPartLocationOutputReference | ApiGatewayDocumentationPartLocation): any;
export declare function apiGatewayDocumentationPartLocationToHclTerraform(struct?: ApiGatewayDocumentationPartLocationOutputReference | ApiGatewayDocumentationPartLocation): any;
export declare class ApiGatewayDocumentationPartLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayDocumentationPartLocation | undefined;
    set internalValue(value: ApiGatewayDocumentationPartLocation | undefined);
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    resetStatusCode(): void;
    get statusCodeInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part aws_api_gateway_documentation_part}
*/
export declare class ApiGatewayDocumentationPart extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_documentation_part";
    /**
    * Generates CDKTF code for importing a ApiGatewayDocumentationPart resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayDocumentationPart to import
    * @param importFromId The id of the existing ApiGatewayDocumentationPart that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayDocumentationPart to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_documentation_part aws_api_gateway_documentation_part} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDocumentationPartConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayDocumentationPartConfig);
    get documentationPartId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _properties?;
    get properties(): string;
    set properties(value: string);
    get propertiesInput(): string | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _location;
    get location(): ApiGatewayDocumentationPartLocationOutputReference;
    putLocation(value: ApiGatewayDocumentationPartLocation): void;
    get locationInput(): ApiGatewayDocumentationPartLocation | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
