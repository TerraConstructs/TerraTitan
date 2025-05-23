/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApigatewayv2VpcLinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_vpc_link#id DataAwsApigatewayv2VpcLink#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_vpc_link#tags DataAwsApigatewayv2VpcLink#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_vpc_link#vpc_link_id DataAwsApigatewayv2VpcLink#vpc_link_id}
    */
    readonly vpcLinkId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_vpc_link aws_apigatewayv2_vpc_link}
*/
export declare class DataAwsApigatewayv2VpcLink extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_apigatewayv2_vpc_link";
    /**
    * Generates CDKTF code for importing a DataAwsApigatewayv2VpcLink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApigatewayv2VpcLink to import
    * @param importFromId The id of the existing DataAwsApigatewayv2VpcLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_vpc_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApigatewayv2VpcLink to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_vpc_link aws_apigatewayv2_vpc_link} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApigatewayv2VpcLinkConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsApigatewayv2VpcLinkConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    get securityGroupIds(): string[];
    get subnetIds(): string[];
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
    private _vpcLinkId?;
    get vpcLinkId(): string;
    set vpcLinkId(value: string);
    get vpcLinkIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
