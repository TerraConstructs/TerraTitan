/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_api#api_id DataAwsApigatewayv2Api#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_api#id DataAwsApigatewayv2Api#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_api#tags DataAwsApigatewayv2Api#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsApigatewayv2ApiCorsConfiguration {
}
export declare function dataAwsApigatewayv2ApiCorsConfigurationToTerraform(struct?: DataAwsApigatewayv2ApiCorsConfiguration): any;
export declare function dataAwsApigatewayv2ApiCorsConfigurationToHclTerraform(struct?: DataAwsApigatewayv2ApiCorsConfiguration): any;
export declare class DataAwsApigatewayv2ApiCorsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsApigatewayv2ApiCorsConfiguration | undefined;
    set internalValue(value: DataAwsApigatewayv2ApiCorsConfiguration | undefined);
    get allowCredentials(): cdktf.IResolvable;
    get allowHeaders(): string[];
    get allowMethods(): string[];
    get allowOrigins(): string[];
    get exposeHeaders(): string[];
    get maxAge(): number;
}
export declare class DataAwsApigatewayv2ApiCorsConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsApigatewayv2ApiCorsConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_api aws_apigatewayv2_api}
*/
export declare class DataAwsApigatewayv2Api extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_apigatewayv2_api";
    /**
    * Generates CDKTF code for importing a DataAwsApigatewayv2Api resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApigatewayv2Api to import
    * @param importFromId The id of the existing DataAwsApigatewayv2Api that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApigatewayv2Api to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apigatewayv2_api aws_apigatewayv2_api} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApigatewayv2ApiConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsApigatewayv2ApiConfig);
    get apiEndpoint(): string;
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    get apiKeySelectionExpression(): string;
    get arn(): string;
    private _corsConfiguration;
    get corsConfiguration(): DataAwsApigatewayv2ApiCorsConfigurationList;
    get description(): string;
    get disableExecuteApiEndpoint(): cdktf.IResolvable;
    get executionArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    get protocolType(): string;
    get routeSelectionExpression(): string;
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
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
