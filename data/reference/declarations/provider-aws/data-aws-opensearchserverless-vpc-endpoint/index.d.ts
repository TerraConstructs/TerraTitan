/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOpensearchserverlessVpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_vpc_endpoint#id DataAwsOpensearchserverlessVpcEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_vpc_endpoint#vpc_endpoint_id DataAwsOpensearchserverlessVpcEndpoint#vpc_endpoint_id}
    */
    readonly vpcEndpointId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_vpc_endpoint aws_opensearchserverless_vpc_endpoint}
*/
export declare class DataAwsOpensearchserverlessVpcEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_opensearchserverless_vpc_endpoint";
    /**
    * Generates CDKTF code for importing a DataAwsOpensearchserverlessVpcEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOpensearchserverlessVpcEndpoint to import
    * @param importFromId The id of the existing DataAwsOpensearchserverlessVpcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_vpc_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOpensearchserverlessVpcEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/opensearchserverless_vpc_endpoint aws_opensearchserverless_vpc_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOpensearchserverlessVpcEndpointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOpensearchserverlessVpcEndpointConfig);
    get createdDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    get vpcEndpointIdInput(): string | undefined;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
