/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_rest_api#id DataAwsApiGatewayRestApi#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_rest_api#name DataAwsApiGatewayRestApi#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_rest_api#tags DataAwsApiGatewayRestApi#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsApiGatewayRestApiEndpointConfiguration {
}
export declare function dataAwsApiGatewayRestApiEndpointConfigurationToTerraform(struct?: DataAwsApiGatewayRestApiEndpointConfiguration): any;
export declare function dataAwsApiGatewayRestApiEndpointConfigurationToHclTerraform(struct?: DataAwsApiGatewayRestApiEndpointConfiguration): any;
export declare class DataAwsApiGatewayRestApiEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsApiGatewayRestApiEndpointConfiguration | undefined;
    set internalValue(value: DataAwsApiGatewayRestApiEndpointConfiguration | undefined);
    get types(): string[];
    get vpcEndpointIds(): string[];
}
export declare class DataAwsApiGatewayRestApiEndpointConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsApiGatewayRestApiEndpointConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_rest_api aws_api_gateway_rest_api}
*/
export declare class DataAwsApiGatewayRestApi extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_api_gateway_rest_api";
    /**
    * Generates CDKTF code for importing a DataAwsApiGatewayRestApi resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApiGatewayRestApi to import
    * @param importFromId The id of the existing DataAwsApiGatewayRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_rest_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApiGatewayRestApi to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/api_gateway_rest_api aws_api_gateway_rest_api} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayRestApiConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsApiGatewayRestApiConfig);
    get apiKeySource(): string;
    get arn(): string;
    get binaryMediaTypes(): string[];
    get description(): string;
    private _endpointConfiguration;
    get endpointConfiguration(): DataAwsApiGatewayRestApiEndpointConfigurationList;
    get executionArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get minimumCompressionSize(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get policy(): string;
    get rootResourceId(): string;
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
