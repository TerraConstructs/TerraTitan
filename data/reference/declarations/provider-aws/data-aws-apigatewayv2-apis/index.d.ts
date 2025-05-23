/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApigatewayv2ApisConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_apis#id DataAwsApigatewayv2Apis#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_apis#name DataAwsApigatewayv2Apis#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_apis#protocol_type DataAwsApigatewayv2Apis#protocol_type}
    */
    readonly protocolType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_apis#tags DataAwsApigatewayv2Apis#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_apis aws_apigatewayv2_apis}
*/
export declare class DataAwsApigatewayv2Apis extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_apigatewayv2_apis";
    /**
    * Generates CDKTF code for importing a DataAwsApigatewayv2Apis resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApigatewayv2Apis to import
    * @param importFromId The id of the existing DataAwsApigatewayv2Apis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_apis#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApigatewayv2Apis to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_apis aws_apigatewayv2_apis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApigatewayv2ApisConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsApigatewayv2ApisConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _protocolType?;
    get protocolType(): string;
    set protocolType(value: string);
    resetProtocolType(): void;
    get protocolTypeInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
