/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApiGatewayVpcLinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_vpc_link#name DataAwsApiGatewayVpcLink#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_vpc_link#tags DataAwsApiGatewayVpcLink#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_vpc_link aws_api_gateway_vpc_link}
*/
export declare class DataAwsApiGatewayVpcLink extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_api_gateway_vpc_link";
    /**
    * Generates CDKTF code for importing a DataAwsApiGatewayVpcLink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApiGatewayVpcLink to import
    * @param importFromId The id of the existing DataAwsApiGatewayVpcLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_vpc_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApiGatewayVpcLink to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_vpc_link aws_api_gateway_vpc_link} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayVpcLinkConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsApiGatewayVpcLinkConfig);
    get arn(): string;
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
    get statusMessage(): string;
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
    get targetArns(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
